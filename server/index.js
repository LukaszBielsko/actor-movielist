const express = require('express');
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
const AUTH_EMAIL = process.env.APP_EMAIL || 'demo@example.com';
const AUTH_PASSWORD = process.env.APP_PASSWORD || 'password123';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const notes = [];

app.use(cors());
app.use(express.json());

function authMiddleware(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ error: 'Missing auth token' });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid auth token' });
  }
}

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {};

  if (email !== AUTH_EMAIL || password !== AUTH_PASSWORD) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });
  return res.json({ token });
});

app.get('/api/notes', authMiddleware, (req, res) => {
  const userNotes = notes.filter((note) => note.email === req.user.email);
  res.json({ notes: userNotes });
});

async function transcribeAudio(buffer) {
  if (!OPENAI_API_KEY) {
    return 'OPENAI_API_KEY is not configured. Transcript unavailable.';
  }

  const audioBlob = new Blob([buffer], { type: 'audio/webm' });
  const formData = new FormData();
  formData.append('file', audioBlob, 'voice-note.webm');
  formData.append('model', 'whisper-1');

  const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Whisper API failed: ${body}`);
  }

  const data = await response.json();
  return data.text || '';
}

app.post('/api/notes', authMiddleware, upload.single('audio'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Audio file is required' });
    }

    const transcript = await transcribeAudio(req.file.buffer);
    const note = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      email: req.user.email,
      recordedAt: req.body.recordedAt || new Date().toISOString(),
      transcript,
      createdAt: new Date().toISOString(),
    };

    notes.unshift(note);
    return res.status(201).json({ note });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Failed to transcribe note' });
  }
});

app.listen(PORT, () => {
  console.log(`Voice Notes backend listening on port ${PORT}`);
});
