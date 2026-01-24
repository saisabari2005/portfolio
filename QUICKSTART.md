# Quick Start Guide

Get your portfolio up and running in 5 minutes! 🚀

## ⚡ Quick Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Visit: http://localhost:5173
```

That's it! Your portfolio is now running locally.

---

## 🎨 Customization Checklist

### 1. Personal Information (5 min)

**Hero Section** (`src/components/Hero.jsx`)
- [ ] Update name: "SAI SABARINATH K"
- [ ] Update title: "AI & Data Science Engineer"
- [ ] Update tagline
- [ ] Update social links (GitHub, LinkedIn, Email)

**About Section** (`src/components/About.jsx`)
- [ ] Update bio/description
- [ ] Update stats (projects count, internships, etc.)

**Contact Section** (`src/components/Contact.jsx`)
- [ ] Update email address
- [ ] Update location
- [ ] Update social links

### 2. Projects (10 min)

**Projects Section** (`src/components/Projects.jsx`)
- [ ] Update project titles
- [ ] Update descriptions
- [ ] Update GitHub repository links
- [ ] Update tech stacks
- [ ] Add/remove projects as needed

### 3. Skills (5 min)

**Skills Section** (`src/components/Skills.jsx`)
- [ ] Add/remove skills
- [ ] Update skill categories
- [ ] Organize by proficiency

### 4. Experience (5 min)

**Experience Section** (`src/components/Experience.jsx`)
- [ ] Update company names
- [ ] Update roles and durations
- [ ] Update achievements
- [ ] Update technologies used

### 5. Branding (Optional - 10 min)

**Colors** (`src/index.css`)
```css
:root {
  --primary-blue: #0066FF;      /* Your brand color */
  --primary-purple: #8B5CF6;    /* Secondary brand color */
  /* ... update other colors */
}
```

**Logo** (`src/components/Navigation.jsx`)
- [ ] Update logo text (currently "SSK")
- [ ] Or add logo image

**Favicon** (`index.html`)
- [ ] Replace `/vite.svg` with your favicon
- [ ] Add favicon files to `/public` folder

---

## 📝 Content Writing Tips

### Bio/About Me
- Keep it conversational and authentic
- Highlight your unique value proposition
- Include specific technologies and domains
- Show passion for your work
- Keep it concise (3-4 paragraphs)

### Project Descriptions
- Start with the problem you solved
- Mention key technologies used
- Highlight impact/results
- Keep it scannable with bullet points
- Include metrics if possible

### Skills Organization
- Group by category (Languages, Frameworks, Tools)
- List most important skills first
- Be honest about proficiency levels
- Include both technical and soft skills

---

## 🎯 Common Tasks

### Add a New Project

1. Open `src/components/Projects.jsx`
2. Add to the `projects` array:
```javascript
{
  title: 'Your Project Name',
  description: 'Brief description...',
  tech: ['React', 'Node.js', 'MongoDB'],
  github: 'https://github.com/yourusername/repo',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  impact: 'What impact did this project have?'
}
```

### Add a New Skill Category

1. Open `src/components/Skills.jsx`
2. Add to `skillCategories` array:
```javascript
{
  category: 'Category Name',
  skills: ['Skill 1', 'Skill 2', 'Skill 3'],
}
```

### Change Color Scheme

1. Open `src/index.css`
2. Update CSS variables in `:root`
3. Save and see changes instantly!

### Add Social Media Link

1. Open `src/components/Hero.jsx` or `Contact.jsx`
2. Import icon from `lucide-react`
3. Add link in social section

---

## 🚀 Deployment Quick Commands

### GitHub Pages
```bash
npm run deploy
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 🐛 Quick Fixes

### Port Already in Use
```bash
# Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- --port 3000
```

### Module Not Found
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear cache and rebuild
npm run build -- --force
```

---

## 📚 Resources

### Learning
- [React Docs](https://react.dev/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Docs](https://vitejs.dev/)

### Design Inspiration
- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)

### Icons & Assets
- [Lucide Icons](https://lucide.dev/)
- [Google Fonts](https://fonts.google.com/)
- [Unsplash](https://unsplash.com/) (for images)

---

## ✅ Pre-Launch Checklist

Before deploying:
- [ ] All personal information updated
- [ ] All links working (GitHub, LinkedIn, Email)
- [ ] Projects descriptions complete
- [ ] Skills list accurate
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] No console errors
- [ ] Fast loading (< 3s)
- [ ] SEO meta tags updated
- [ ] Favicon added

---

## 🎉 You're Ready!

Your portfolio is now customized and ready to deploy!

**Next Steps:**
1. Test thoroughly on different devices
2. Get feedback from friends/colleagues
3. Deploy to GitHub Pages/Vercel/Netlify
4. Share on LinkedIn and social media
5. Add to your resume and job applications

**Need Help?**
- Check `README.md` for detailed documentation
- Check `DEPLOYMENT.md` for deployment guides
- Create an issue on GitHub

---

*Happy coding! 🚀*
