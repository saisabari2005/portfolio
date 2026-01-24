# Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages, Vercel, or Netlify.

## 🚀 GitHub Pages Deployment

### Prerequisites
- GitHub account
- Git installed on your machine
- Repository created on GitHub

### Steps

1. **Initialize Git Repository** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Add Remote Repository**
   ```bash
   git remote add origin https://github.com/saisabari2005/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Update Vite Config**
   
   If deploying to `https://saisabari2005.github.io/portfolio/`, update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/',
   })
   ```
   
   If deploying to `https://saisabari2005.github.io/`, keep:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/',
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select `gh-pages` branch
   - Click Save
   - Your site will be live at `https://saisabari2005.github.io/portfolio/`

### Updating Your Portfolio

After making changes:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

---

## ☁️ Vercel Deployment

### Steps

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your portfolio repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Deploy via CLI** (alternative)
   ```bash
   vercel
   ```

### Custom Domain (Optional)
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

---

## 🌐 Netlify Deployment

### Steps

1. **Deploy via Netlify Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

2. **Deploy via Netlify CLI** (alternative)
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Custom Domain (Optional)
- Go to Site Settings → Domain Management
- Add custom domain
- Configure DNS settings

---

## 🔧 Environment Variables

If you add environment variables in the future:

### Vercel
- Go to Project Settings → Environment Variables
- Add variables with prefix `VITE_`

### Netlify
- Go to Site Settings → Build & Deploy → Environment
- Add variables with prefix `VITE_`

### Local Development
Create `.env.local`:
```
VITE_API_KEY=your_api_key_here
```

Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Compress images using tools like TinyPNG
   - Use WebP format where possible
   - Add lazy loading for images

2. **Code Splitting**
   - Already configured with Vite
   - Use dynamic imports for large components

3. **Analyze Bundle**
   ```bash
   npm run build
   npx vite-bundle-visualizer
   ```

### After Deployment

1. **Test Performance**
   - Run Lighthouse audit in Chrome DevTools
   - Check PageSpeed Insights
   - Test on multiple devices

2. **Monitor**
   - Set up analytics (Google Analytics, Plausible, etc.)
   - Monitor Core Web Vitals

---

## 🐛 Troubleshooting

### GitHub Pages 404 Error
- Ensure `base` in `vite.config.js` matches your repository name
- Check that `gh-pages` branch exists
- Verify GitHub Pages settings

### Build Fails
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm run build -- --force`
- Check Node.js version: `node --version` (should be v16+)

### Blank Page After Deployment
- Check browser console for errors
- Verify `base` path in `vite.config.js`
- Ensure all imports use correct paths

### Animations Not Working
- Check if Framer Motion is installed: `npm list framer-motion`
- Verify browser compatibility
- Check for JavaScript errors in console

---

## 📱 Testing Before Deployment

### Local Testing
```bash
# Development server
npm run dev

# Production build preview
npm run build
npm run preview
```

### Cross-Browser Testing
Test on:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if on Mac)
- Mobile browsers (Chrome Mobile, Safari iOS)

### Responsive Testing
Test on:
- Mobile (375px - 768px)
- Tablet (768px - 1024px)
- Desktop (1024px+)

---

## 🔐 Security Best Practices

1. **Never commit sensitive data**
   - Use environment variables
   - Add `.env` files to `.gitignore`

2. **Keep dependencies updated**
   ```bash
   npm audit
   npm audit fix
   ```

3. **Use HTTPS**
   - GitHub Pages, Vercel, and Netlify provide HTTPS by default

---

## 📈 SEO Checklist

- ✅ Meta tags configured in `index.html`
- ✅ Semantic HTML structure
- ✅ Descriptive page title
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Sitemap (add `public/sitemap.xml` if needed)
- ✅ Robots.txt (add `public/robots.txt` if needed)

---

## 🎉 Post-Deployment

1. **Share Your Portfolio**
   - Update LinkedIn profile
   - Add to GitHub profile README
   - Share on social media

2. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools

3. **Get Feedback**
   - Share with peers
   - Ask for code reviews
   - Iterate and improve

---

**Need Help?**
- Check [Vite Documentation](https://vitejs.dev/)
- Visit [React Documentation](https://react.dev/)
- GitHub Issues: [Create an issue](https://github.com/saisabari2005/portfolio/issues)

---

*Last Updated: January 2026*
