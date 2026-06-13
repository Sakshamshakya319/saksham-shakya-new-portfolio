# Saksham Shakya Portfolio

A futuristic developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## About

This portfolio showcases Saksham Shakya's journey from Mainpuri, UP to an MCA student at Lovely Professional University, featuring projects like Samarpan (blood donor platform) and LPU NSS Management Website.

## Tech Stack

- **React 18.3.1** - UI library
- **Vite 5.0.12** - Build tool
- **Tailwind CSS 3.4.9** - Styling
- **Framer Motion 12.38.0** - Animations
- **React Router DOM 7.17.0** - Routing
- **Lucide React** - Icons

## Pages & Features

| Page               | Path               | Description                                                                 |
|--------------------|--------------------|-----------------------------------------------------------------------------|
| 🏠 Home            | `/`                | Hero section, achievements, projects grid, skills cloud                    |
| 📁 Projects        | `/projects`        | Project archive with featured project, grid, and GitHub CTA                 |
| 👤 About           | `/about`           | Story, timeline, philosophy, and call-to-action                            |
| 💼 Hire            | `/hire`            | Engagement tiers and contact form                                          |
| 🩸 Samarpan Proposal | `/samarpan-proposal` | Detailed proposal for the Samarpan blood donor platform                     |

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the portfolio.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub repository
2. Connect repo at [vercel.com](https://vercel.com)
3. Vercel will auto-detect Vite and deploy

### Netlify

1. Connect GitHub repo or drag & drop `dist/` folder
2. Auto-deploy on every git push

## Folder Structure

```
saksham-portfolio/
├── src/
│   ├── components/
│   │   ├── AdminPanel.jsx
│   │   ├── Background3D.jsx
│   │   ├── BlogTable.jsx
│   │   ├── GlassButton.jsx
│   │   ├── GlassCard.jsx
│   │   └── Navbar.jsx
│   ├── styles/
│   │   ├── tailwind.css
│   │   └── theme.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── README.md
```

## License

MIT
