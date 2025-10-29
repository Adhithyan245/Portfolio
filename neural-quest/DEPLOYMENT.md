# 🚀 Deployment Guide - The Neural Quest

## Quick Deploy to Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com).

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel automatically detects Next.js
   - Click "Deploy"

3. **Done!** Your site will be live in minutes.

## Manual Deployment

### Build the application

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Start the production server

```bash
npm start
```

The application will be available at `http://localhost:3000`.

### Deploy to any hosting platform

Since this is a Next.js application, you can deploy it to:

- **Vercel** (Recommended) - Zero configuration deployment
- **Netlify** - Great for static exports
- **Railway** - Easy PostgreSQL integration
- **AWS** - Using Amplify or EC2
- **DigitalOcean** - Using App Platform
- **Heroku** - Traditional PaaS

## Environment Variables

If you want to enable the real OpenAI chatbot:

1. Create a `.env.local` file in production (or use your hosting platform's env variable settings):

```env
NEXT_PUBLIC_OPENAI_API_KEY=sk-your-actual-api-key-here
```

2. Update the chatbot component to use real API calls.

## Performance Optimization

The app is already optimized for production:
- ✅ Static generation where possible
- ✅ Code splitting
- ✅ Image optimization
- ✅ CSS optimization
- ✅ Lazy loading

## Custom Domain

After deploying to Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Analytics (Optional)

Add Vercel Analytics:
```bash
npm install @vercel/analytics
```

Then add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## Monitoring

Add monitoring for production errors:
1. [Sentry](https://sentry.io/)
2. [LogRocket](https://logrocket.com/)
3. Vercel's built-in monitoring

## Backup

Always maintain:
- ✅ GitHub repository backup
- ✅ Environment variable documentation
- ✅ Database backups (if applicable)

## Rollback

On Vercel:
- Go to Deployments
- Select the previous deployment
- Click "Promote to Production"

## Support

For deployment issues:
- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Check [Vercel Docs](https://vercel.com/docs)
- Contact: adhithyan245@gmail.com

---

**Happy Deploying! 🎉**

