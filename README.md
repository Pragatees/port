<div align="center">

<img src="https://capsule-render.vercel.app/api?type=slice&color=0:f59e0b,50:ec4899,100:8b5cf6&height=200&section=header&text=Portfolio%20Template&fontSize=55&fontColor=ffffff&animation=tiltLeft&fontAlignY=45&desc=Modern%20%7C%20Animated%20%7C%20Tailwind%20CSS&descAlignY=65&descSize=17" width="100%"/>

<br/>

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&pause=800&color=EC4899&center=true&vCenter=true&multiline=true&width=680&height=90&lines=🎨+Built+with+Tailwind+CSS+%26+Framer+Motion;✨+Add+your+photo+%26+resume+—+you're+done!;🚀+Fast+%7C+Beautiful+%7C+Ready+to+Deploy" alt="Typing SVG" />
</a>

<br/><br/>

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-FF0055?style=flat-square&logo=framer&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_React-F97316?style=flat-square)
![Lottie](https://img.shields.io/badge/React_Lottie-8B5CF6?style=flat-square)

<br/>

![GitHub stars](https://img.shields.io/github/stars/yourusername/portfolio-template?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/portfolio-template?style=social)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-ec4899.svg)
![License MIT](https://img.shields.io/badge/license-MIT-f59e0b.svg)

</div>

---

<br/>

## ✦ What Is This?

A **minimal yet stunning portfolio template** designed for developers, designers, and creatives. It comes pre-wired with smooth animations, scroll triggers, interactive charts, and Lottie support — so you can focus entirely on **your content**, not the boilerplate.

> 🎯 **Two steps to launch:** Drop in your photo + resume → deploy. That's it.

<br/>

---

## 📁 Project Setup

### Before You Run — Do These First:

```
📂 public/
 ├── 🖼️  profile.jpg          ← Your profile picture goes here
 ├── 📄  resume.pdf            ← Your resume PDF goes here
 └── 📁  files/               ← (optional) subfolder for extra files

📂 src/images/
 └── 🖼️  project-*.webp       ← Add your project screenshots here
```

> 💡 Use `.webp` format for images — it's ~30% smaller than PNG and loads much faster.

<br/>

---

## 🛠️ Feature Highlights

<table>
<tr>
<td align="center" width="33%">

**🎬 Framer Motion**<br/>
<sub>Smooth, physics-based entry animations on every section</sub>

</td>
<td align="center" width="33%">

**👁️ Scroll Triggers**<br/>
<sub>Elements animate in only when they enter the viewport</sub>

</td>
<td align="center" width="33%">

**🌀 Lottie Animations**<br/>
<sub>Crisp vector animations via JSON — no GIFs, no lag</sub>

</td>
</tr>
<tr>
<td align="center" width="33%">

**📊 Interactive Charts**<br/>
<sub>Skill bars and stat graphs powered by Chart.js</sub>

</td>
<td align="center" width="33%">

**💠 Lucide Icons**<br/>
<sub>500+ clean, consistent SVG icons ready to use</sub>

</td>
<td align="center" width="33%">

**💎 Tailwind CSS**<br/>
<sub>Utility-first styling — fully responsive out of the box</sub>

</td>
</tr>
</table>

<br/>

---

## 📦 Installation

### Step 1 — Install base dependencies

```bash
npm install
```

### Step 2 — Install animation & UI libraries

```bash
# Core animation stack
npm install framer-motion react-intersection-observer react-lottie

# Data visualization
npm install react-chartjs-2 chart.js

# Icons
npm install lucide-react
```

### Step 3 — Start the dev server

```bash
npm run dev
```

> 🟢 Running at **http://localhost:5173**

<br/>

---

## 🎨 Customization Guide

| What to Change | Where to Look |
|---|---|
| 👤 Profile photo | `public/profile.jpg` |
| 📄 Resume file | `public/resume.pdf` |
| 🖼️ Project images | `src/images/` |
| ✍️ Text & bio content | Component `.jsx` files in `src/components/` |
| 🎞️ Animation timing | Framer Motion `transition` props |
| 🎨 Colors & spacing | `tailwind.config.js` theme extension |
| 🌀 Lottie files | Swap JSON files from [lottiefiles.com](https://lottiefiles.com) |

<br/>

---

## 📚 Libraries Reference

| Library | Version | What It Does |
|---|---|---|
| `framer-motion` | latest | Page & element animations |
| `react-intersection-observer` | latest | Scroll-based animation triggers |
| `react-lottie` | latest | Renders Lottie JSON vector animations |
| `react-chartjs-2` | latest | React wrapper for Chart.js |
| `chart.js` | latest | The underlying charting engine |
| `lucide-react` | latest | Clean, consistent SVG icon set |
| `tailwindcss` | v3+ | Utility-first CSS framework |

<br/>

---

## 💡 Performance Tips

```
✅  Use .webp images instead of .png or .jpg
✅  Keep Lottie JSON files under 50KB
✅  Lazy-load sections below the fold
✅  Use Tailwind's purge/content config to strip unused CSS
✅  Avoid stacking too many simultaneous Framer Motion animations
✅  Stick to one consistent color palette via tailwind.config.js
```

<br/>

---

## 🙌 Contributing

Got improvements? Fork it and send a PR — all contributions are welcome!

1. Fork the repo
2. Create your branch: `git checkout -b feat/my-improvement`
3. Commit your changes: `git commit -m "feat: add dark mode toggle"`
4. Push and open a PR 🎉

<br/>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=slice&color=0:8b5cf6,50:ec4899,100:f59e0b&height=120&section=footer&reversal=true" width="100%"/>

**Made with 💖 — fork it, customize it, own it.**

⭐ A star means the world — it helps others find this template!

[![GitHub](https://img.shields.io/badge/View%20on%20GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername/portfolio-template)

</div>
