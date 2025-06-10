# GitHub Pages Deployment Guide

This guide explains how to deploy your hospital management system to GitHub Pages as a static website.

## Prerequisites

1. GitHub account
2. Git installed on your local machine
3. Node.js 20+ installed

## Deployment Steps

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `hospital-management-system`
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README since you already have code

### 2. Push Your Code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Hospital management system"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The deployment workflow will automatically trigger

### 4. Build Process

The GitHub Actions workflow will:
- Install Node.js dependencies
- Build the static version with `npm run build:github`
- Deploy to GitHub Pages

### 5. Access Your Website

After deployment (usually takes 2-5 minutes), your website will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

## Static Build Features

The static version includes:
- ✅ All pages (Home, About, Services, Doctors, Blog, Contact, Appointments)
- ✅ Static sample data for doctors, blog posts, and appointments
- ✅ Functional contact and appointment forms (data stored locally)
- ✅ Responsive design
- ✅ SEO optimization

## Limitations of Static Version

- **No real backend**: Forms don't save to a database
- **No user authentication**: No login/signup functionality
- **Local storage only**: Data resets when browser cache is cleared
- **No email sending**: Contact form submissions are stored locally

## Updating Your Site

To update your deployed site:
1. Make changes to your code
2. Commit and push to the main branch:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
3. GitHub Actions will automatically rebuild and redeploy

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to `client/public/` with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

## Troubleshooting

### Build Fails
- Check the Actions tab in your GitHub repository for error details
- Ensure all dependencies are properly listed in package.json

### Site Not Loading
- Verify GitHub Pages is enabled in repository settings
- Check that the workflow completed successfully
- Wait a few minutes for DNS propagation

### Routing Issues
- The 404.html file handles client-side routing
- All routes should work properly with the SPA setup

## Alternative Deployment Options

If you need backend functionality, consider:
- **Vercel**: Free hosting with serverless functions
- **Netlify**: Free hosting with form handling
- **Railway**: Full-stack deployment with database
- **Replit**: Deploy directly from Replit with full backend support

For production use with real patients, you'll need:
- Database integration
- User authentication
- HIPAA compliance measures
- SSL certificates
- Backup systems