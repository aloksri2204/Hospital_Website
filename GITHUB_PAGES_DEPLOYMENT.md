# Deploy CarePlus Hospital Website to GitHub Pages

Follow these step-by-step instructions to deploy your hospital website to GitHub Pages.

## Prerequisites
- GitHub account
- Git installed on your computer
- The hospital website code (which you already have)

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `careplus-hospital` (or any name you prefer)
5. Make it **Public** (required for free GitHub Pages)
6. Don't initialize with README, .gitignore, or license (we already have these files)
7. Click "Create repository"

## Step 2: Update Repository Name in Configuration

**Important:** Update the base path in the GitHub Pages configuration file:

1. Open `vite.config.github.ts`
2. Change line 6 from:
   ```typescript
   base: "/careplus-hospital/", // Change this to your repository name
   ```
   to:
   ```typescript
   base: "/YOUR-ACTUAL-REPOSITORY-NAME/",
   ```
   (Replace `YOUR-ACTUAL-REPOSITORY-NAME` with the name you chose in Step 1)

## Step 3: Initialize Git and Push to GitHub

Open your terminal/command prompt in the project folder and run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: CarePlus Hospital website"

# Add GitHub repository as origin (replace with your actual repository URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace:**
- `YOUR-USERNAME` with your GitHub username
- `YOUR-REPOSITORY-NAME` with your repository name

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The deployment workflow will run automatically

## Step 5: Wait for Deployment

1. Go to the "Actions" tab in your repository
2. You'll see a workflow called "Deploy to GitHub Pages" running
3. Wait for it to complete (usually 2-5 minutes)
4. Once completed, your website will be live!

## Step 6: Access Your Website

Your website will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

For example, if your username is `johnsmith` and repository is `careplus-hospital`:
```
https://johnsmith.github.io/careplus-hospital/
```

## Making Updates

After your initial deployment, whenever you want to update your website:

1. Make your changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. GitHub Pages will automatically rebuild and deploy your changes

## Troubleshooting

### If the workflow fails:
1. Check the "Actions" tab for error details
2. Make sure your repository is public
3. Verify that GitHub Pages is enabled in Settings

### If the website doesn't load properly:
1. Check that the `base` path in `vite.config.github.ts` matches your repository name
2. Wait a few minutes - deployment can take time
3. Try accessing the site in an incognito/private window

### If images or assets don't load:
1. Verify all image paths are relative (not absolute)
2. Check that the `base` configuration is correct
3. Clear your browser cache

## Custom Domain (Optional)

If you want to use a custom domain (like `www.careplus-hospital.com`):

1. In your repository settings, go to Pages
2. Enter your custom domain in the "Custom domain" field
3. Update the `cname:` line in `.github/workflows/deploy.yml` with your domain
4. Configure your domain's DNS to point to GitHub Pages

## Important Notes

- **The website is static**: This deployment creates a frontend-only version without the backend server
- **Data is pre-loaded**: All doctor profiles, blog posts, and services are embedded in the build
- **Forms won't submit**: Contact and appointment forms will need external services like Netlify Forms or EmailJS
- **Free hosting**: GitHub Pages is completely free for public repositories

## Security

- Never commit sensitive information like API keys
- The repository is public, so all code is visible
- For production use, consider environment variables for any external service configurations

Your CarePlus Hospital website is now live and accessible to patients worldwide!