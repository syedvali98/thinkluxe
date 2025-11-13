# Think LUXE - Deployment Guide

## Quick Deployment to Vercel

Vercel is the recommended hosting platform for this Next.js website. It provides automatic deployments, preview URLs, and excellent performance.

### Prerequisites

1. A GitHub account
2. A Vercel account (sign up at [vercel.com](https://vercel.com) - free for personal projects)

### Step-by-Step Deployment

#### 1. Push to GitHub

If you haven't already pushed your code to GitHub:

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/your-username/thinkluxe.git
git branch -M main
git push -u origin main
```

#### 2. Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and configure settings
5. Click "Deploy"

That's it! Your site will be live in 1-2 minutes.

### Custom Domain Setup

After deployment, you can add a custom domain:

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., thinkluxe.com)
4. Follow Vercel's instructions to update your DNS records
5. Vercel will automatically provision SSL certificates

### Environment Variables

If you need to add environment variables (for future email integration, etc.):

1. Go to project "Settings" → "Environment Variables"
2. Add variables as needed:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - Email API keys (when implementing email functionality)
   - Analytics IDs

### Automatic Deployments

Once connected, Vercel will automatically:
- Deploy every push to the `main` branch to production
- Create preview deployments for pull requests
- Run build checks before deploying

### Build Command

The build command is already configured:
```bash
npm run build
```

### Monitoring

Vercel provides:
- Analytics dashboard
- Performance insights
- Error tracking
- Deployment logs

## Alternative: Manual Server Deployment

If you prefer to deploy on your own server:

### 1. Build the Project

```bash
npm run build
```

### 2. Start the Production Server

```bash
npm run start
```

The server will run on port 3000 by default.

### 3. Using PM2 (Process Manager)

```bash
# Install PM2 globally
npm install -g pm2

# Start the application
pm2 start npm --name "thinkluxe" -- start

# Save PM2 configuration
pm2 save

# Set PM2 to start on system boot
pm2 startup
```

### 4. Nginx Reverse Proxy (Optional)

Example Nginx configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Post-Deployment Checklist

- [ ] Test all pages and navigation
- [ ] Verify images load correctly
- [ ] Test contact form (add email integration if needed)
- [ ] Check mobile responsiveness
- [ ] Test WhatsApp integration link
- [ ] Verify meta tags for SEO
- [ ] Set up Google Analytics (optional)
- [ ] Add custom domain
- [ ] Enable SSL/HTTPS
- [ ] Test page load speed (should be under 2 seconds)

## Content Updates

### Replacing Placeholder Content

1. **Images**: Replace Unsplash placeholder images with actual showroom and project photos
2. **Contact Information**: Update phone, email, address in:
   - `components/Footer.tsx`
   - `app/contact/page.tsx`
3. **WhatsApp Number**: Update in contact page
4. **Company Information**: Update mission statement in `app/about/page.tsx`

### Adding Real Photos

Save your photos in the `public/` directory:

```
public/
├── images/
│   ├── showroom/
│   ├── kitchens/
│   ├── cabinetry/
│   ├── millwork/
│   └── aluminum/
└── logo.svg
```

Then update image imports in the components.

## Performance Optimization

The website is already optimized with:
- Next.js Image optimization
- Automatic code splitting
- Server-side rendering
- Lazy loading

Expected performance:
- Page load time: < 2 seconds
- Google PageSpeed Score: 90+
- First Contentful Paint: < 1.5s

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Images Not Loading

- Check `next.config.ts` for correct `remotePatterns`
- Ensure image URLs are HTTPS
- Verify images exist in `public/` directory

### Styles Not Applied

```bash
# Regenerate Tailwind CSS
npm run build
```

## Support

For deployment issues:
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)

For project-specific help:
- Email: syedvali98@gmail.com / khanithmohammed97@gmail.com
- Phone: +917780159626 / +919700134273
