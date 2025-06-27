# Analytica Assessment

A modern, animated, and fully responsive landing page and assessment platform for Analytica, built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features
- **React 19 + Vite** for fast development
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth, performant animations
- **Component-based structure** (split for maintainability)
- **Blue-themed gradients and palette**
- **Responsive design** (mobile, tablet, desktop)
- **Accessible and semantic markup**
- **Contact form with robust validation**
- **Scroll-to-top button**
- **Modern header and footer**

## 🛠️ Tech Stack
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React Icons](https://lucide.dev/)

## 📁 Project Structure
```
analytica-assessment/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── Contact.jsx
│   │   ├── ContactForm.jsx
│   │   ├── ContactInfo.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Layout.jsx
│   │   ├── SuccessModal.jsx
│   │   └── contactValidation.js
│   ├── hooks/
│   │   └── useSectionInView.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── index.html
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── package-lock.json
└── README.md
```

## 🧑‍💻 Getting Started

### 1. **Install dependencies**
```bash
npm install
```

### 2. **Start the development server**
```bash
npm run dev
```

### 3. **Build for production**
```bash
npm run build
```

### 4. **Preview production build**
```bash
npm run preview
```

## 📝 Customization
- **Colors & Gradients:** Edit `tailwind.config.js` and `src/index.css` for your brand colors.
- **Images:** Place your images in `public/images/` and update paths in components.
- **Content:** Edit the text in the respective components in `src/components/`.

## 🧹 Linting & Formatting
- Lint: `npm run lint`
- Format: `npm run format`

## 📦 Deployment
- The app is ready to deploy as a static site (e.g., Vercel, Netlify, GitHub Pages).

## 🙏 Credits
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

**This is the official codebase for the Analytica Assessment project.**
