# Pioneers Digital Marketing - Premium Website

A modern, premium, single-page digital marketing agency website built with React and Vite. Features smooth animations, responsive design, and optimized performance.

![Pioneers Digital Marketing](https://img.shields.io/badge/Version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646cff)

## 🚀 Features

### Design & UX
- ✨ Premium blue-green gradient theme
- 🎨 Modern, professional design with Sora & DM Sans fonts
- 📱 Fully responsive (mobile-first approach)
- 🌊 Smooth animations with Framer Motion
- 🎯 Sticky header with smooth scroll navigation
- 💫 Hover effects and micro-interactions

### Sections
1. **Hero Section** - Compelling headline with gradient background
2. **About Section** - Company introduction with 4 key features
3. **Services Section** - 4 service cards with hover effects
4. **Process Section** - 4-step methodology
5. **Testimonials** - 3 client success stories
6. **CTA Section** - Strong call-to-action with contact options
7. **Contact Section** - Form with validation + WhatsApp floating button
8. **Footer** - Complete site navigation and social links

### Technical Features
- ⚡ Lightning-fast performance with Vite
- 🔍 SEO optimized with meta tags
- 📊 Form validation
- 🎭 Framer Motion animations
- 🎨 Custom CSS with CSS variables
- 📱 Mobile-first responsive design
- ♿ Accessible components

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v16.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

To check your versions:
```bash
node --version
npm --version
```

## 🛠️ Installation

### Step 1: Clone or Download
```bash
# If using Git
git clone <repository-url>
cd pioneers-digital-marketing

# Or download the ZIP and extract it
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install all required packages including:
- React
- React DOM
- Framer Motion
- Lucide React (icons)
- Vite

### Step 3: Run Development Server
```bash
npm run dev
```

The website will open at `http://localhost:5173`

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

To preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
pioneers-digital-marketing/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── Process.jsx
│   │   ├── Process.css
│   │   ├── Testimonials.jsx
│   │   ├── Testimonials.css
│   │   ├── CTA.jsx
│   │   ├── CTA.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
└── README.md             # This file
```

## 🚀 Deployment

### Deploy to Netlify

1. **Install Netlify CLI** (optional):
```bash
npm install -g netlify-cli
```

2. **Build the project**:
```bash
npm run build
```

3. **Deploy via Netlify Web UI**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up or log in
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `dist` folder
   
4. **Deploy via Netlify CLI**:
```bash
netlify deploy --prod --dir=dist
```

**Netlify Configuration** (optional - create `netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deploy to Vercel

1. **Install Vercel CLI** (optional):
```bash
npm install -g vercel
```

2. **Deploy via Vercel Web UI**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in
   - Click "Add New Project"
   - Import your Git repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

3. **Deploy via Vercel CLI**:
```bash
vercel --prod
```

**Vercel Configuration** (optional - create `vercel.json`):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Deploy to GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Update `package.json`**:
```json
{
  "homepage": "https://yourusername.github.io/pioneers-digital-marketing",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update `vite.config.js`**:
```javascript
export default defineConfig({
  base: '/pioneers-digital-marketing/',
  // ... rest of config
})
```

4. **Deploy**:
```bash
npm run deploy
```

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-blue: #0066FF;
  --primary-green: #00D4AA;
  /* ... more colors */
}
```

### Content
- **Company Info**: Edit text in each component file
- **Phone Number**: Update all instances of `8669880738`
- **Images**: Add images to `/public` folder and reference them
- **Social Links**: Update URLs in `Footer.jsx`

### Fonts
Current fonts (Sora & DM Sans) are loaded from Google Fonts in `index.html`.
To change fonts, update the Google Fonts link and CSS variables.

## 📱 Contact Integration

The website includes:
- **Click-to-call**: `tel:8669880738`
- **WhatsApp**: `https://wa.me/918669880738`
- **Contact Form**: Validates name, email, phone, and message

To integrate the form with a backend:
1. Edit `src/components/Contact.jsx`
2. Add API call in `handleSubmit` function
3. Replace console.log with your API endpoint

## 🔧 Performance Optimization

- ✅ Code splitting with Vite
- ✅ Lazy loading components (can be added)
- ✅ Optimized images (use WebP format)
- ✅ Minified CSS and JS in production
- ✅ Gzip compression (server-side)

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Kill process on port 5173
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

**Build errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Deployment issues:**
- Ensure `dist` folder is created: `npm run build`
- Check build logs for errors
- Verify all environment variables are set

## 📄 License

This project is proprietary and confidential.
© 2024 Pioneers Digital Marketing. All rights reserved.

## 📞 Support

For technical support or questions:
- **Phone**: 8669880738
- **Email**: pdmasolutions@gmail.com
- **WhatsApp**: +91 8669880738

## 🎯 Next Steps

After deployment, consider:
1. Setting up Google Analytics
2. Adding Facebook Pixel for ad tracking
3. Implementing email notifications for contact form
4. Adding a blog section
5. Integrating CRM for lead management
6. Setting up automated email responses
7. Adding live chat widget
8. Implementing A/B testing

---

**Built with ❤️ using React + Vite**
