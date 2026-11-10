# Ashwin Kumar — ReactJS Portfolio

A responsive, dark portfolio website built with React, Vite, Lucide icons, and plain CSS.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally
1. Extract the project folder.
2. Open the folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build
```bash
npm run build
npm run preview
```

## Add your real profile photo
The hero currently uses a stylized professional placeholder. To use a photo:
1. Add your photo to `public/` (for example, `ashwin.jpg`).
2. In `src/App.jsx`, replace the contents inside `<div className="portrait-placeholder">...</div>` with:
   `<img className="profile-photo" src="/ashwin.jpg" alt="Padwal Ashwin Kumar" />`
3. Add this CSS to `src/styles.css`:
   `.profile-photo { width: 100%; height: 100%; object-fit: cover; border-radius: 10px; }`

## Add your resume PDF
Put your real PDF at `public/resume.pdf`. The hero's Download resume button links to that file. Until then, the button will not download a real resume.

## Before publishing
- Verify project descriptions and technology tags match what you actually implemented.
- Add GitHub repository/demo links for each project if available.
- Test email, phone, and social links.
- Deploy the `dist/` folder after running `npm run build` using a host such as Netlify, Vercel, or GitHub Pages.
