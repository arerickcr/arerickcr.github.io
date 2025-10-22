# GitHub Pages Starter (Erick)

A minimalist academic/industry portfolio starter you can deploy on **GitHub Pages** with:
- ✅ Light/Dark mode toggle (persists preference, honors system default)
- ✅ Accordions (e.g., for Education or Projects)
- ✅ Image links (logos linking out)
- ✅ Clean, serif aesthetic reminiscent of academic pages
- ✅ No build step — pure HTML/CSS/JS

## 🚀 Quick Start

1. Create a new GitHub repository named **`yourusername.github.io`**.
2. Download this folder as a ZIP and extract its contents.
3. Copy all files into your repo and commit.
4. Go to **Settings → Pages → Build and deployment → Source: Deploy from a branch**, and select **main**.
5. Visit **https://yourusername.github.io** (first deploy can take up to a minute).

## 🧩 Customize
- Replace `assets/images/profile-example.jpg` with your photo.
- Add your logos to `assets/images/` and update the `<img>` sources in `index.html`.
- Edit content in `index.html` and pages in the `pages/` folder.
- Optional: put your CV at `assets/Erick-Arguello-CV.pdf` and update the link in `pages/cv.html`.

## 🌓 Theme
- Toggle lives at bottom-right (🌙 / ☀️).
- We store `theme=dark|light` in `localStorage` and default to system preference if unset.

## 📁 Structure
```
.
├── index.html
├── pages/
│   ├── publications.html
│   ├── notes.html
│   └── cv.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
```

## 🛠️ Local Preview
Just open `index.html` in your browser. No build tools needed.

## 📄 License
Do whatever you want with it. A credit link is nice but not required.
