# Sai Sabarinath K - AI & Data Science Portfolio

A modern, visually stunning portfolio website showcasing AI/ML projects, skills, and professional experience.

![Portfolio Preview](https://img.shields.io/badge/Built%20with-React-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer)

## 🎯 Overview

This portfolio website is designed to showcase my expertise in AI, Data Science, Natural Language Processing, and Computer Vision. Built with modern web technologies, it features:

- **Bold, Tech-Forward Design** with glassmorphism and vibrant gradients
- **Smooth Animations** powered by Framer Motion
- **Fully Responsive** mobile-first design
- **Interactive Elements** with micro-animations
- **SEO Optimized** for maximum visibility

## 🚀 Features

### Sections
1. **Hero Section** - Animated introduction with particle background
2. **About Me** - Professional bio with stats cards
3. **Skills** - Filterable technical skills by category
4. **Projects** - Featured AI/ML projects with detailed descriptions
5. **Experience** - Timeline visualization of internships
6. **Contact** - Multiple contact methods and social links
7. **Footer** - Quick navigation and back-to-top button

### Technical Highlights
- ⚡ Lightning-fast performance with Vite
- 🎨 Custom design system with CSS variables
- 📱 Mobile-first responsive design
- ♿ Accessibility compliant
- 🔍 SEO-friendly with meta tags
- 🌐 Cross-browser compatible

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Smooth Scroll**: React Scroll
- **Icons**: Lucide React
- **Styling**: Vanilla CSS with custom design system
- **Fonts**: Google Fonts (Inter, JetBrains Mono)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/saisabari2005/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🌐 Deployment

### GitHub Pages

1. **Update `vite.config.js`** with your repository name:
   ```javascript
   export default defineConfig({
     base: '/portfolio/',
     // ... other config
   })
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

### Vercel / Netlify

Simply connect your GitHub repository to Vercel or Netlify, and they will automatically detect the Vite configuration and deploy.

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles & design system
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## 🎨 Design System

The portfolio uses a comprehensive design system with:

### Color Palette
- **Primary**: Electric Blue (#0066FF), Cyber Purple (#8B5CF6)
- **Secondary**: Vibrant Coral (#FF6B6B), Neon Green (#00F5A0)
- **Background**: Deep Navy (#0A192F), Dark Charcoal (#1A1A2E)
- **Accent**: Bright Cyan (#00D9FF), Gold (#FFD700)

### Typography
- **Primary Font**: Inter (sans-serif)
- **Monospace Font**: JetBrains Mono

### Effects
- Glassmorphism cards
- Gradient backgrounds
- Smooth animations
- Hover effects
- Particle animations

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 968px
- **Desktop**: > 968px

## 🔧 Customization

### Update Personal Information

Edit the content in each component file:
- **Hero.jsx** - Name, title, tagline
- **About.jsx** - Bio, stats
- **Skills.jsx** - Technical skills
- **Projects.jsx** - Project details
- **Experience.jsx** - Work experience
- **Contact.jsx** - Contact information

### Modify Colors

Update CSS variables in `src/index.css`:
```css
:root {
  --primary-blue: #0066FF;
  --primary-purple: #8B5CF6;
  /* ... other colors */
}
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: Optimized with code splitting

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sai Sabarinath K**
- GitHub: [@saisabari2005](https://github.com/saisabari2005)
- LinkedIn: [Sai Sabarinath K](https://www.linkedin.com/in/sai-sabarinath-k-14bb42321/)
- Email: saisabarirahul@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern AI/tech portfolios
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

**Built with ❤️ and AI**

*Last Updated: January 2026*
