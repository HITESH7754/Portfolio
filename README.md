# Hitesh — Portfolio

A futuristic, animated personal portfolio with the same dark design language as the NexLearn Dashboard.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 🏗️ Stack

- **React 18** + **Vite**
- **Framer Motion** — all animations
- **Tailwind CSS** — styling
- **Lucide React** — icons

## ✏️ Customizing

### Change your info
Edit these files:
- `src/sections/Home.jsx` — name, tagline, socials
- `src/sections/About.jsx` — bio, stats
- `src/sections/Skills.jsx` — skills and levels
- `src/sections/Projects.jsx` — your projects
- `src/sections/Experience.jsx` — work & education timeline
- `src/sections/Contact.jsx` — email, location

### Add EmailJS (contact form)
1. Sign up at https://emailjs.com
2. Get your Service ID, Template ID, and Public Key
3. In `Contact.jsx` replace the fake submit with:

```js
import emailjs from '@emailjs/browser'

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
  from_name: form.name,
  from_email: form.email,
  message: form.message,
}, 'YOUR_PUBLIC_KEY')
```

## 📦 Deploy

Push to GitHub and import on Vercel — it auto-detects Vite!
