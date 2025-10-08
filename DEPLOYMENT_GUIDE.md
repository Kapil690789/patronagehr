# PatronageHR - Vercel Deployment Guide

## 📋 Pre-Deployment Checklist

### 1. **Update package.json** (if needed)
Ensure your build script is correct:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 2. **Create vercel.json** in root directory
This file handles routing and prevents 404 errors on page refresh.

File location: `/patronagehr-rebuild/vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 3. **Test Build Locally**
Before deploying, test if your build works:

```bash
cd /Volumes/Untitled\ 2/patronagehr/patronagehr-rebuild
npm run build
npm run preview
```

Visit `http://localhost:4173` to test the production build.

---

## 🚀 Deployment Steps

### Method 1: Deploy via Vercel CLI (Recommended)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```

#### Step 3: Navigate to Your Project
```bash
cd /Volumes/Untitled\ 2/patronagehr/patronagehr-rebuild
```

#### Step 4: Deploy
```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No
- **Project name?** → `patronagehr` (or your preferred name)
- **Directory?** → `./` (current directory)
- **Override settings?** → No

#### Step 5: Deploy to Production
```bash
vercel --prod
```

---

### Method 2: Deploy via Vercel Dashboard (Easier for Beginners)

#### Step 1: Push to GitHub/GitLab/Bitbucket

1. Create a new repository on GitHub
2. Initialize git in your project:

```bash
cd /Volumes/Untitled\ 2/patronagehr/patronagehr-rebuild
git init
git add .
git commit -m "Initial commit - PatronageHR website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/patronagehr.git
git push -u origin main
```

#### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New"** → **"Project"**
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
5. Click **"Deploy"**

---

## 🔧 Environment Configuration

### Build Settings (Vercel Dashboard)
- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node Version:** 18.x (or latest LTS)

---

## ✅ Post-Deployment Checklist

After deployment, verify:

1. ✅ Homepage loads correctly
2. ✅ All navigation links work
3. ✅ Dark mode toggle works
4. ✅ Animations are smooth
5. ✅ Forms are functional
6. ✅ Images load properly
7. ✅ Mobile responsive design works
8. ✅ No 404 errors on page refresh
9. ✅ Footer links work
10. ✅ Contact form submits

---

## 🐛 Troubleshooting

### Problem: 404 Error on Page Refresh

**Solution:** Ensure `vercel.json` exists in root with correct rewrites:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Problem: Dark Mode Not Working

**Solution:** Check if localStorage is accessible. This should work automatically in production.

### Problem: Images Not Loading

**Solution:** 
1. Ensure images are in `/src/assets/` folder
2. Use proper import statements or public folder
3. For logo: Place `patronage-logo.png` in `/public/` folder and update paths

### Problem: Build Fails

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Problem: Animations Not Working

**Solution:** Ensure all dependencies are installed:
```bash
npm install framer-motion react-intersection-observer
```

---

## 🎨 Custom Domain Setup (Optional)

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `patronagehr.com`)
4. Update DNS records as instructed by Vercel
5. Wait for DNS propagation (can take up to 48 hours)

---

## 📊 Performance Optimization Tips

### 1. Enable Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `src/main.jsx`:
```javascript
import { inject } from '@vercel/analytics';
inject();
```

### 2. Image Optimization
- Use WebP format for images
- Compress images before uploading
- Use lazy loading for images

### 3. Code Splitting
Already handled by Vite, but you can improve:
- Use dynamic imports for pages
- Lazy load heavy components

---

## 🔄 Updating Your Site

### Via Vercel CLI:
```bash
cd /Volumes/Untitled\ 2/patronagehr/patronagehr-rebuild
vercel --prod
```

### Via Git (if connected to GitHub):
```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```
Vercel will auto-deploy on push!

---

## 📞 Support

If you face any issues:
1. Check Vercel deployment logs
2. Verify `vercel.json` exists
3. Ensure all dependencies are in `package.json`
4. Test locally with `npm run build && npm run preview`

---

## 🎉 Success!

Your PatronageHR website should now be live! 

**Next Steps:**
- Share your live URL
- Set up custom domain (optional)
- Enable Vercel Analytics
- Monitor performance
- Collect user feedback

---

## 📝 Quick Commands Reference

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls
```

---

**Made with ❤️ for PatronageHR**