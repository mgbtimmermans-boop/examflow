# ExamFlow VWO 2026

Persoonlijke examenplanner voor VWO-leerlingen (examenjaar 2026).

## Features
- Inloggen / registreren met Firebase Authentication
- 7 vak-kaarten met syllabus checklist, confidence score en voortgang
- Cijferpredictor (SE → CE benodigde score)
- Pomodoro timer (focus 25min / pauze 5min)
- Countdown tot eerste CE-dag (19 mei 2025)
- Alle data opgeslagen per gebruiker in Firestore

## Setup

### 1. Firebase project aanmaken
1. Ga naar [console.firebase.google.com](https://console.firebase.google.com)
2. Maak een nieuw project aan
3. Activeer **Authentication** (Email/Password provider)
4. Activeer **Firestore Database** (start in production mode)
5. Deploy `firestore.rules`

### 2. Omgevingsvariabelen
Kopieer `.env.example` naar `.env.local` en vul je Firebase-config in:
```bash
cp .env.example .env.local
```

### 3. Installeren & draaien
```bash
npm install
npm run dev
```

### 4. Deploy naar Vercel
```bash
npx vercel
```
Voeg de env vars toe in het Vercel dashboard onder Project Settings → Environment Variables.

## Firestore structuur
```
/users/{uid}/vakken/{vakId}
  checks: { [index]: boolean }
  notes: string
  confidenceScore: number (1-10)
  seGrade: string
  lastUpdated: Timestamp
```
