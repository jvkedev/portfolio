# 🌌 3D Interactive Developer Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-jvke.in-8A2BE2?style=for-the-badge&logo=vercel&logoColor=white)](https://www.jvke.in/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-jvkedev%2Fportfolio-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jvkedev/portfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-jvkedev-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jvkedev)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

An immersive, cosmic-themed 3D developer portfolio designed to showcase full-stack and backend engineering expertise through interactive Three.js scenes, a real-time 3D mechanical keyboard powered by Spline, physics-driven interactions, and smooth animations.

[**Explore Live Demo »**](https://www.jvke.in/)

</div>

---

## 🌟 Highlights & Features

### ⌨️ Interactive 3D Spline Skills Keyboard
- **Real-Time 3D Mechanical Keyboard**: Fully interactive 3D keycaps built and rendered with Spline and `@splinetool/runtime`.
- **24 Tech Skills**: Features official branding, custom materials, and logos for **JavaScript, TypeScript, React, NestJS, TanStack Query, Node.js, Express, PostgreSQL, MongoDB, Zustand, REST APIs, Postman, Pino, ESLint, Zod, Git, Linux, Tailwind CSS**, and more.
- **Dynamic 3D HUD**: Hovering or clicking keys triggers real-time 3D extruded headings and multi-line descriptions directly in the WebGL scene.
- **Sound & Haptics**: Integrated click acoustics and sound effects with zero layout lag.

### 🪐 3D WebGL Space Experience
- **Interactive 3D Workstation**: Detailed desktop setup model rendered with Three.js and `@react-three/fiber` featuring orbit controls and dynamic reflections.
- **Cosmic Starfield Canvas**: GPU-accelerated particle system with customizable mathematical distribution (`maath/random`).
- **Interactive 3D Earth**: Rotating globe in the contact section with atmospheric glow and lighting shaders.

### ⚡ Polish, Motion & Micro-Interactions
- **GSAP & Framer Motion**: Hardware-accelerated entrance staggers, spring-based scroll reveals, and smooth section transitions.
- **Elastic Physics Cursor**: Custom spring cursor with magnetic snapping to buttons and interactive cards.
- **Interactive Navigation Menu**: Fullscreen overlay with character-staggered typography and live screenshot hover previews.
- **Interactive Project Modals**: Deep-dive modals with feature breakdowns, architecture tags, live demo links, and GitHub repositories.
- **Easter Eggs & Sound Cues**: Engaging audio feedback cues and hidden surprises for interactive discovery.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Core & Framework** | React 18, Vite, React Router DOM |
| **3D Graphics & Shaders** | Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`) |
| **3D Modeling & Runtime** | Spline (`@splinetool/react-spline`, `@splinetool/runtime`) |
| **Animations & Motion** | GSAP, Framer Motion, React Tilt |
| **Styling & Design** | Vanilla CSS, Tailwind CSS, PostCSS, Autoprefixer |
| **Audio & SFX** | Howler.js, custom sound cue synthesis |
| **Utilities & Forms** | EmailJS, React Icons, Devtools Detector |

---

## 📂 Featured Projects Showcased

- **[StockLock API](https://github.com/jvkedev/stocklock)** – High-performance backend REST API built with TypeScript, Express.js, and PostgreSQL. Features atomic inventory deduction using row-level locking, Argon2 password hashing, JWT token rotation, runtime Zod validation, and Pino structured JSON logging. *(Featured Project)*
- **[Vyomme Divine Essentials](http://chairmallaretreat.com/)** – Full-stack e-commerce platform with dynamic catalogs, persistent shopping cart workflows, role-based access control, and order management using React, Node.js, Express, and MongoDB.
- **[LifeCare Polyclinic](https://lifecarepolyclinic.com/)** – Full-stack healthcare clinic web portal built with the MERN stack featuring clinic services, doctor profiles, patient appointment inquiry flows, and MongoDB persistence.
- **[3D Developer Portfolio](https://www.jvke.in/)** – This portfolio web application built with Three.js, Spline, and React.

---

## 📁 Project Structure

```bash
portfolio/
├── public/
│   ├── assets/
│   │   ├── skills-keyboard.spline  # Optimized 3D Spline scene asset
│   │   ├── skills/                 # Vector SVG emblems (TanStack Query, Zustand, etc.)
│   │   └── project/                # Project media and preview images
│   └── logo.png
├── src/
│   ├── assets/                     # Static images, icons, and fonts
│   ├── components/
│   │   ├── canvas/                 # 3D R3F canvases (Computers, Earth, Stars)
│   │   ├── ui/                     # Toast and UI utilities
│   │   ├── About.jsx               # Introduction & developer philosophy
│   │   ├── Achievement.jsx         # Certifications & work experience timeline
│   │   ├── Contact.jsx             # Interactive contact form & 3D Earth
│   │   ├── EasterEggs.jsx          # Interactive surprise easter eggs
│   │   ├── ElasticCursor.jsx       # Physics-based spring cursor
│   │   ├── Hero.jsx                # Landing section with typewriter & 3D PC
│   │   ├── Navbar.jsx              # Navigation bar with live preview menu
│   │   ├── ProjectModal.jsx        # Deep-dive project modal dialog
│   │   ├── SkillKeyboard.jsx       # 3D Spline mechanical keyboard component
│   │   └── Works.jsx               # Filterable projects showcase grid
│   ├── constants/
│   │   ├── index.js                # Projects, achievements, and timeline data
│   │   └── skills.js               # 24 skills, brand colors, icons, and text wrappers
│   ├── hoc/                        # Higher-Order Components (SectionWrapper)
│   ├── reactbits/                  # Custom hooks (magnetic, parallax, sound cues)
│   ├── utils/                      # Motion variants, helpers, audio effects
│   ├── App.jsx                     # Root application component
│   ├── index.css                   # Global styling, tokens, and responsive utilities
│   └── main.jsx                    # Application entry point
├── package.json
├── tailwind.config.cjs
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jvkedev/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the application.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production bundle locally:

```bash
npm run preview
```

---

## 🌐 Deployment

The project is pre-configured for instant deployment on [Vercel](https://vercel.com/):

1. Fork or push your code to GitHub: `https://github.com/jvkedev/portfolio`
2. Import the project into Vercel.
3. Keep default Vite build settings (`npm run build` with output directory `dist`).
4. Deploy!

---

## 📬 Contact & Connect

**Shubham** – Full-Stack & Backend Developer

- 🌐 **Live Website**: [https://www.jvke.in/](https://www.jvke.in/)
- 💻 **GitHub**: [@jvkedev](https://github.com/jvkedev)
- 📧 **Email**: [shubhambrown1@gmail.com](mailto:shubhambrown1@gmail.com)
- 💼 **LinkedIn**: [@jvkedev](https://www.linkedin.com/in/jvkedev)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - feel free to explore, learn from, and adapt for your own creative work.
