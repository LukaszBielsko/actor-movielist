# Voice Notes PWA (Whisper transcription)

A simple Progressive Web App with:
- Email + password login
- Voice note recording in the browser
- Date/time for each note
- Backend transcription using OpenAI Whisper

## Tech
- Frontend: React (CRA)
- Backend: Express + Multer
- Auth: JWT (simple single-user credentials via environment variables)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create environment variables:
   ```bash
   export APP_EMAIL="you@example.com"
   export APP_PASSWORD="your-password"
   export JWT_SECRET="replace-with-a-strong-secret"
   export OPENAI_API_KEY="your-openai-api-key"
   ```

3. Run frontend and backend together:
   ```bash
   npm run dev
   ```

- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## Scripts
- `npm start` - start React app
- `npm run server` - start backend API
- `npm run dev` - run frontend and backend together
- `npm run build` - production build

## API

### `POST /api/auth/login`
Body:
```json
{
  "email": "you@example.com",
  "password": "your-password"
}
```

### `GET /api/notes`
Requires `Authorization: Bearer <token>`

### `POST /api/notes`
Requires `Authorization: Bearer <token>` and multipart form-data:
- `audio`: recorded file (`audio/webm`)
- `recordedAt`: ISO date string

## Notes
- If `OPENAI_API_KEY` is not set, uploads still work but transcript text returns a fallback message.
- This is a simple starter implementation (in-memory note storage).
