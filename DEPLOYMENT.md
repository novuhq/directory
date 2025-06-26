# Deployment Guide

This guide will help you deploy the demo project to Netlify.

## 🚀 Quick Deployment

### Option 1: Deploy from Git (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "New site from Git"
   - Choose your GitHub repository
   - Configure build settings:
     - **Build command**: `./build-static.sh`
     - **Publish directory**: `dist`
     - **Node version**: `18`

3. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 2: Manual Deployment

1. **Build locally**
   ```bash
   ./build-static.sh
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to the deploy area
   - Your site will be live instantly

## 🔧 Build Configuration

The project is configured with the following build settings:

### Netlify Configuration (`netlify.toml`)

```toml
[build]
  command = "./build-static.sh"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
```

### Build Script (`build-static.sh`)

The build script performs these steps:

1. **Install dependencies** using pnpm
2. **Build all apps** with static export
3. **Copy to dist directory** with proper structure
4. **Create landing page** for the demo
5. **Verify build output**

## 📁 Output Structure

After building, the `dist` directory contains:

```
dist/
├── index.html              # Demo landing page
├── healthcare/             # Healthcare app
│   ├── index.html
│   ├── _next/
│   └── ...
├── linear-inbox/           # Linear Inbox app
│   ├── index.html
│   ├── _next/
│   └── ...
└── docs/                   # Documentation app
    ├── index.html
    ├── _next/
    └── ...
```

## 🌐 URL Structure

Once deployed, your apps will be available at:

- **Landing Page**: `https://your-site.netlify.app/`
- **Healthcare**: `https://your-site.netlify.app/healthcare/`
- **Linear Inbox**: `https://your-site.netlify.app/linear-inbox/`
- **Documentation**: `https://your-site.netlify.app/docs/`

## 🔄 Continuous Deployment

With Git deployment, Netlify will automatically:

- **Build on every push** to your main branch
- **Deploy previews** for pull requests
- **Rollback** to previous versions if needed

## 🛠️ Troubleshooting

### Build Failures

1. **Check Node version**: Ensure you're using Node 18+
2. **Clear cache**: Delete `node_modules` and `dist` folders
3. **Check logs**: Review Netlify build logs for specific errors

### Common Issues

- **Build timeout**: The build might take 5-10 minutes for the first deployment
- **Memory issues**: Netlify provides 4GB RAM for builds
- **File size**: Ensure no large files are being committed

### Environment Variables

No environment variables are required for this demo project. All apps are configured for static export.

## 📊 Performance

The deployed site includes:

- **Static assets** with long-term caching
- **Optimized images** (unoptimized for demo)
- **Compressed files** for faster loading
- **CDN distribution** via Netlify's global network

## 🔒 Security Headers

The deployment includes security headers:

- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

## 📱 Mobile Optimization

All apps are mobile-responsive and optimized for:

- **Touch interactions**
- **Responsive layouts**
- **Fast loading** on mobile networks
- **Progressive Web App** features

## 🎯 Next Steps

After deployment:

1. **Test all apps** on different devices
2. **Share the demo** with stakeholders
3. **Monitor performance** using Netlify Analytics
4. **Set up custom domain** if needed

---

For more information, see the main [README.md](README.md) file. 