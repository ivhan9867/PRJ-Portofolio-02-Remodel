<div align="center">

# ✦ Portfolio — UI/UX Designer

**A stunning personal portfolio built with modern web tech**  
Inspired by [finicharisa.framer.website](https://finicharisa.framer.website)

[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=flat-square)](https://www.framer.com/motion)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-ready-4ade80?style=flat-square&logo=github)](https://pages.github.com)

</div>

---

## ✨ Features & Effects

| Effect | Description |
|--------|-------------|
| 🌊 **Animated Glow Blobs** | CSS-only drifting blue/purple orbs — Fini-style dark aesthetic, zero canvas overhead |
| ✍️ **Word Reveal** | Hero headline animates word-by-word on page load |
| 🎰 **Slot Machine Text** | About section — keywords cycle inside pill badges (exactly like Fini) |
| 🃏 **Project Cards** | Horizontal layout, text left + mockup right, inner glow on hover |
| 🌊 **Wave Canvas** | Lightweight sine-wave animation inside CTA footer |
| 🖱️ **Custom Cursor** | Dot + lagging ring, expands on interactive elements |
| ✨ **Film Grain** | Subtle animated noise overlay for depth & texture |
| 🎬 **Scroll Reveals** | Framer Motion staggered fade-in on every section |
| 📱 **Fully Responsive** | Mobile-first with hamburger menu |

---

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Auto deploy to GitHub Pages
├── public/
│   ├── avatar-dummy.svg        ← Replace with your photo
│   ├── favicon.svg
│   └── projects/               ← Replace with real screenshots
│       ├── nolimitclass.svg
│       ├── logitech.svg
│       ├── plans.svg
│       └── govirtual.svg
├── src/
│   ├── App.jsx                 ← Root component
│   ├── index.css               ← Global styles + keyframes
│   ├── main.jsx
│   └── components/
│       ├── GlowBackground.jsx  ← CSS blob glow (lightweight)
│       ├── Cursor.jsx          ← Custom cursor
│       ├── Navbar.jsx          ← Sticky nav + mobile menu
│       ├── Hero.jsx            ← Avatar + headline + CTA buttons
│       ├── Projects.jsx        ← Horizontal project cards
│       ├── About.jsx           ← Slot machine text + skills cloud
│       ├── Experience.jsx      ← Job history timeline
│       └── Footer.jsx          ← CTA pill + wave + footer bar
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

---

## 🚀 Getting Started

### Install & run locally

```bash
# Install dependencies
npm install

# Start dev server → http://localhost:5173
npm run dev

# Build for production
npm run build
```

---

## 🌐 Deploy to GitHub Pages (Free Hosting)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "🚀 initial portfolio"
git branch -M main
git remote add origin https://github.com/ivhan9867/portfolio.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` runs automatically on every push to `main`
4. Your site goes live at:

```
https://ivhan9867.github.io/portfolio/
```

### 3. If using a project repo (not `username.github.io`)

Open `vite.config.js` and change `base`:

```js
// Before
base: '/'

// After (replace with your actual repo name)
base: '/portfolio_NAME/'
```

### 4. Custom domain (optional)

1. Create a file `public/CNAME` containing just your domain:
```
yourdomain.com
```
2. In GitHub: **Settings → Pages → Custom domain** → enter your domain
3. Keep `base: '/'` in `vite.config.js`

---

## 🛠️ How to Customize

### Your personal info

| File | What to change |
|------|----------------|
| `src/components/Navbar.jsx` | Name, nav links, email |
| `src/components/Hero.jsx` | Name tag, headline, description |
| `src/components/About.jsx` | Slot words (`SLOTS`), skills list (`SKILLS`) |
| `src/components/Experience.jsx` | Job history (`JOBS` array) |
| `src/components/Projects.jsx` | Project data (`PROJECTS` array) |
| `src/components/Footer.jsx` | Email, social links, copyright name |

### Add your photo

Replace the dummy avatar with your real photo:

```
public/avatar.jpg   ← your portrait (square, min 200×200px)
```

Then in `src/components/Hero.jsx`, update the `src`:

```jsx
<img src="/avatar.jpg" alt="Your Name" className="w-full h-full object-cover" />
```

### Add real project screenshots

Replace SVG dummies in `public/projects/` with actual screenshots:

```
public/projects/nolimitclass.jpg   ← recommended 560×420px
public/projects/logitech.jpg
public/projects/plans.jpg
public/projects/govirtual.jpg
```

Then in `src/components/Projects.jsx`, update the `img` field in the `PROJECTS` array from `.svg` → `.jpg`.

### Change accent color

In `src/index.css`:
```css
--accent: #c9a84c;   /* gold — change this to your brand color */
```

Also update in `tailwind.config.js`:
```js
accent: '#c9a84c',
```

### Change glow blob colors

In `src/components/GlowBackground.jsx`, tweak the `rgba` values:
```js
// Blue blob
rgba(50, 80, 210, 0.18)   ← adjust hue and opacity

// Purple blob
rgba(100, 50, 200, 0.14)  ← adjust hue and opacity
```

---

## 📦 Tech Stack

| Package | Purpose |
|---------|---------|
| [React 18](https://react.dev) | UI framework |
| [Vite 5](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion 11](https://www.framer.com/motion) | Animations & transitions |
| [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) | Scroll-triggered reveals |

---

## 📄 License

Feel free to use this as a template for your own portfolio.  
If you do, a credit mention is appreciated but not required. ✌️

---

<div align="center">

Made with ❤️ — inspired by [finicharisa.framer.website](https://finicharisa.framer.website)

</div>
