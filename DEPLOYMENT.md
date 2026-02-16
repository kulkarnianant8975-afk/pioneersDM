# 🚀 Deployment Guide - Pioneers Digital Marketing

Complete step-by-step deployment instructions for Netlify and Vercel.

---

## 📦 Pre-Deployment Checklist

Before deploying, ensure you've:
- ✅ Tested the website locally (`npm run dev`)
- ✅ Created a production build (`npm run build`)
- ✅ Verified the build in `dist` folder
- ✅ Updated contact information (phone, email, social links)
- ✅ Customized content for your needs
- ✅ Tested on mobile devices

---

## 🌐 Option 1: Deploy to Netlify (Recommended for Beginners)

### Method A: Drag & Drop (Easiest)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Go to Netlify**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Sign up (free) or log in

3. **Deploy**
   - Click on the "Sites" tab
   - Scroll down to "Want to deploy a new site without connecting to Git?"
   - Drag and drop the `dist` folder from your project
   - Wait for deployment (usually 30 seconds)

4. **Your site is live!**
   - You'll get a random URL like `https://random-name-123.netlify.app`
   - Click "Site settings" → "Change site name" to customize

### Method B: Continuous Deployment from Git

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your repository

3. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Automatic deployments**
   - Every push to `main` branch triggers a new deployment

### Custom Domain on Netlify

1. **In Netlify Dashboard**
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter your domain name

2. **Configure DNS**
   - If domain is on Netlify: Automatic
   - If domain elsewhere: Add these DNS records:
     ```
     Type: A
     Name: @
     Value: 75.2.60.5

     Type: CNAME
     Name: www
     Value: your-site.netlify.app
     ```

3. **Enable HTTPS**
   - Netlify provides free SSL (auto-enabled)

---

## ⚡ Option 2: Deploy to Vercel (Best Performance)

### Method A: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```
   - Follow the prompts
   - Your site is live!

### Method B: Git Integration

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up (free) or log in
   - Click "Add New Project"
   - Import your GitHub repository

3. **Configure (Auto-detected)**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

4. **Automatic deployments**
   - Push to `main` → Production
   - Push to other branches → Preview deployments

### Custom Domain on Vercel

1. **In Vercel Dashboard**
   - Go to project → "Settings" → "Domains"
   - Enter your domain name
   - Click "Add"

2. **Configure DNS**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **SSL Certificate**
   - Automatically generated and renewed

---

## 🌍 Option 3: Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/pioneers-digital-marketing",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/pioneers-digital-marketing/',
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository → Settings → Pages
   - Source: "gh-pages" branch
   - Save

Your site will be live at: `https://yourusername.github.io/pioneers-digital-marketing`

---

## 🔧 Post-Deployment Configuration

### 1. Set Environment Variables

If you add environment variables later:

**Netlify:**
- Dashboard → Site settings → Environment variables
- Add variables like `VITE_API_URL`

**Vercel:**
- Dashboard → Settings → Environment Variables
- Add variables like `VITE_API_URL`

### 2. Configure Redirects

Create `public/_redirects` (Netlify) or `vercel.json` (Vercel):

**Netlify - `public/_redirects`:**
```
/*    /index.html   200
```

**Vercel - `vercel.json`:**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 3. Add Custom Headers

**Netlify - `netlify.toml`:**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

**Vercel - `vercel.json`:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" }
      ]
    }
  ]
}
```

---

## 📊 Analytics Setup

### Google Analytics

1. **Get Tracking ID**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create property
   - Get tracking ID (G-XXXXXXXXXX)

2. **Add to index.html** (before `</head>`):
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

3. **Rebuild and deploy**

### Facebook Pixel

1. **Get Pixel ID**
   - Go to Facebook Events Manager
   - Create Pixel
   - Get Pixel ID

2. **Add to index.html** (before `</head>`):
   ```html
   <!-- Facebook Pixel -->
   <script>
   !function(f,b,e,v,n,t,s)
   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
   n.queue=[];t=b.createElement(e);t.async=!0;
   t.src=v;s=b.getElementsByTagName(e)[0];
   s.parentNode.insertBefore(t,s)}(window, document,'script',
   'https://connect.facebook.net/en_US/fbevents.js');
   fbq('init', 'YOUR_PIXEL_ID');
   fbq('track', 'PageView');
   </script>
   ```

---

## 🔍 SEO Optimization

### 1. Sitemap

Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 2. Robots.txt

Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### 3. Meta Tags

Already included in `index.html`, but customize:
- Title
- Description
- Open Graph images
- Twitter card

---

## ⚡ Performance Optimization

### 1. Image Optimization

- Use WebP format
- Compress images (TinyPNG, Squoosh)
- Use appropriate sizes
- Add lazy loading

### 2. Enable Caching

Headers already configured for static assets.

### 3. Monitor Performance

- Google PageSpeed Insights
- Lighthouse (Chrome DevTools)
- GTmetrix

---

## 🐛 Common Issues

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### 404 on Refresh

Add redirects configuration (see above).

### Slow Loading

- Optimize images
- Enable compression
- Use CDN (Netlify/Vercel provide this)

### Form Not Working

- Integrate with backend API
- Use form services (Formspree, Netlify Forms)

---

## 📞 Support

Need help with deployment?
- **Phone**: 8669880738
- **Email**: pdmasolutions@gmail.com
- **WhatsApp**: +91 8669880738

---

## ✅ Deployment Checklist

- [ ] Built project locally
- [ ] Tested in production build
- [ ] Updated all content
- [ ] Configured custom domain
- [ ] Enabled HTTPS
- [ ] Added analytics
- [ ] Submitted to search engines
- [ ] Set up monitoring
- [ ] Tested on mobile devices
- [ ] Configured redirects
- [ ] Added sitemap
- [ ] Optimized images

---

**Your site is ready to dominate the digital marketing space! 🚀**
