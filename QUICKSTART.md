# ⚡ Quick Start Guide

Get your Pioneers Digital Marketing website running in 5 minutes!

---

## 🎯 Step 1: Install Node.js

If you don't have Node.js installed:

1. Go to [nodejs.org](https://nodejs.org)
2. Download the **LTS version** (recommended)
3. Run the installer
4. Restart your computer

Verify installation:
```bash
node --version
npm --version
```

You should see version numbers like `v18.x.x` and `9.x.x`

---

## 🎯 Step 2: Install Dependencies

Open Terminal/Command Prompt in the project folder:

```bash
npm install
```

This installs all required packages. Wait for it to complete (1-2 minutes).

---

## 🎯 Step 3: Start Development Server

```bash
npm run dev
```

You'll see:
```
VITE v5.0.0  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.x.x:5173/
```

Open your browser and go to: **http://localhost:5173**

---

## 🎯 Step 4: Make Changes

The website will auto-reload when you save changes!

### To customize:

1. **Colors**: Edit `src/index.css` (line 8-20)
2. **Phone Number**: Search and replace `8669880738`
3. **Company Info**: Edit text in component files
4. **Images**: Add to `public/` folder

---

## 🎯 Step 5: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with optimized files.

---

## 🎯 Step 6: Deploy

### Option A: Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag & drop the `dist` folder
4. Done! Your site is live.

### Option B: Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel --prod`
3. Follow the prompts
4. Done!

---

## 🆘 Need Help?

### Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Changes not showing?**
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear cache and reload

---

## 📚 Next Steps

1. Read full [README.md](README.md) for detailed docs
2. Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment guide
3. Customize content and colors
4. Test on mobile devices
5. Deploy to production!

---

## 📞 Support

- **Phone**: 8669880738
- **Email**: pdmasolutions@gmail.com
- **WhatsApp**: +91 8669880738

---

**That's it! You're ready to go! 🚀**
