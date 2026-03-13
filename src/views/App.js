import React, { useEffect, useMemo, useRef, useState } from 'react';

import './styles/styles.css';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000';

function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString();
}

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(() => localStorage.getItem('voice_notes_token') || '');
  const [notes, setNotes] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const isAuthenticated = useMemo(() => Boolean(token), [token]);

  useEffect(() => {
    localStorage.setItem('voice_notes_token', token || '');
  }, [token]);

  async function request(path, options = {}) {
    const response = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers: {
        ...(options.headers || {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      throw new Error(errorBody.error || 'Request failed');
    }

    return response.json();
  }

  async function loadNotes() {
    try {
      const data = await request('/api/notes');
      setNotes(data.notes || []);
    } catch (error) {
      setStatusMessage(error.message);
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      loadNotes();
    }
  }, [isAuthenticated]);

  async function handleLogin(event) {
    event.preventDefault();
    setStatusMessage('Signing in...');

    try {
      const data = await request('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      setToken(data.token);
      setStatusMessage('Signed in successfully.');
    } catch (error) {
      setStatusMessage(error.message);
    }
  }

  function handleLogout() {
    setToken('');
    setNotes([]);
    setStatusMessage('Logged out.');
  }

  async function startRecording() {
    setStatusMessage('Requesting microphone access...');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.onstop = async () => {
        stream.getTracks().forEach((track) => track.stop());
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
        await uploadAudio(audioBlob);
      };

      mediaRecorderRef.current = recorder;
      recorder.start();
      setIsRecording(true);
      setStatusMessage('Recording... click "Stop recording" when finished.');
    } catch (error) {
      setStatusMessage(`Could not start recording: ${error.message}`);
    }
  }

  function stopRecording() {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setStatusMessage('Uploading audio...');
    }
  }

  async function uploadAudio(blob) {
    setIsUploading(true);

    const formData = new FormData();
    formData.append('audio', blob, `note-${Date.now()}.webm`);
    formData.append('recordedAt', new Date().toISOString());

    try {
      const data = await request('/api/notes', {
        method: 'POST',
        body: formData,
      });

      setNotes((prev) => [data.note, ...prev]);
      setStatusMessage('Voice note transcribed successfully.');
    } catch (error) {
      setStatusMessage(error.message);
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-8">
      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-6">
        <header>
          <h1 className="text-2xl font-bold text-gray-900">Voice Notes PWA</h1>
          <p className="text-sm text-gray-600 mt-1">
            Sign in, record voice notes, and get Whisper transcriptions with date &amp; time.
          </p>
        </header>

        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="space-y-3">
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded px-4 py-2 font-medium"
            >
              Sign in
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              <button
                type="button"
                disabled={isRecording || isUploading}
                onClick={startRecording}
                className="bg-green-600 text-white rounded px-4 py-2 disabled:opacity-60"
              >
                Start recording
              </button>
              <button
                type="button"
                disabled={!isRecording}
                onClick={stopRecording}
                className="bg-yellow-500 text-white rounded px-4 py-2 disabled:opacity-60"
              >
                Stop recording
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="ml-auto bg-gray-700 text-white rounded px-4 py-2"
              >
                Logout
              </button>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Saved notes</h2>
              {notes.length === 0 ? (
                <p className="text-sm text-gray-500">No notes yet.</p>
              ) : (
                <ul className="space-y-3">
                  {notes.map((note) => (
                    <li key={note.id} className="border border-gray-200 rounded p-3">
                      <p className="text-xs text-gray-500">{formatDateTime(note.recordedAt)}</p>
                      <p className="text-sm text-gray-900 mt-1 whitespace-pre-wrap">{note.transcript}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {statusMessage && (
          <p className="text-sm bg-blue-50 border border-blue-100 text-blue-800 rounded p-2">
            {statusMessage}
          </p>
        )}
      </section>
    </main>
  );
}

export default App;
