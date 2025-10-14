# Deployment Guide - Validation Phase

## Pre-Deployment Checklist

- [ ] Formspree form ID configured in `public/index.html`
- [ ] Dependencies installed (`npm install`)
- [ ] Tested locally (`npm run dev`)
- [ ] Landing page looks good at http://localhost:3000

## Option 1: Railway (Recommended)

### Why Railway?
- Easy to scale later
- Built-in PostgreSQL (for future)
- Auto-deploys from git
- $5/month credit free tier

### Steps

1. **Install Railway CLI**:
```bash
npm install -g @railway/cli
```

2. **Login**:
```bash
railway login
```

3. **Initialize project**:
```bash
railway init
```

4. **Deploy**:
```bash
railway up
```

5. **Get URL**:
```bash
railway open
```

Your site is now live! Copy the URL and share it.

### Environment Variables (Later)

When you build the API (after validation), add:
```bash
railway variables set STRIPE_SECRET_KEY=sk_live_xxx
railway variables set R2_ACCESS_KEY_ID=xxx
# etc.
```

## Option 2: Vercel (Easiest)

### Why Vercel?
- Free tier (perfect for validation)
- Instant deploys
- Great for static + serverless

### Steps

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel --prod
```

3. **Follow prompts**:
- Set up and deploy? Yes
- Which scope? Your account
- Link to existing project? No
- Project name? screenshot-api
- Directory? ./
- Override settings? No

Done! Vercel gives you a URL instantly.

### Custom Domain (Optional)

```bash
vercel domains add yourdomain.com
```

## Option 3: Render (Alternative)

### Why Render?
- Free tier available
- Easy PostgreSQL later
- Good for Node.js apps

### Steps

1. Go to [render.com](https://render.com)
2. Click "New +"
3. Choose "Web Service"
4. Connect GitHub repo
5. Configure:
   - **Name**: screenshot-api
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
6. Deploy!

## Post-Deployment

### 1. Test Your Site

Visit your deployed URL:
- Landing page loads ✓
- Email form works ✓
- Thank you page shows ✓
- Docs accessible ✓

### 2. Update Formspree Redirect

In Formspree settings:
- Set redirect URL to: `https://your-url.com/thanks.html`

### 3. Share Your URL

Now share your deployed URL everywhere:
- Reddit posts
- Dev.to article
- Hacker News
- Product Hunt
- Twitter

### 4. Track Signups

Check Formspree dashboard daily for signup count.

Update metrics:
```bash
npm run metrics update <count>
```

## Troubleshooting

### "Port already in use"
- Railway/Vercel handle ports automatically
- Locally: Change PORT in `.env`

### "Cannot find module"
- Run `npm install` again
- Check `package.json` has all deps

### "Formspree form not submitting"
- Check form ID is correct
- Verify Formspree account active
- Check browser console for errors

### "Build failed"
- Ensure `tsconfig.json` exists
- Run `npm run build` locally first
- Check Node version (need 18+)

## Monitoring (After Launch)

When API is built (post-validation):

1. **Uptime**: Use UptimeRobot (free)
2. **Errors**: Sentry.io (free tier)
3. **Analytics**: Plausible.io or Simple Analytics

But for validation phase, just track:
- Formspree signup count
- Landing page visits (optional)

## Cost Breakdown

### Validation Phase (Now)
- Railway/Vercel: $0 (free tier)
- Formspree: $0 (free tier)
- Total: **$0/month**

### After Launch (If Validated)
- Railway/Render: $5-10/month
- Cloudflare R2: $0-5/month (pay per use)
- Stripe: $0 + 2.9% per transaction
- Redis: $0-10/month (Upstash free tier)
- Total: **~$10-20/month**

Break-even at 2 paying users ($18 MRR).

## Next Steps

1. ✅ Deploy to Railway or Vercel
2. ⏳ Test deployed site
3. ⏳ Share URL everywhere
4. ⏳ Track signups daily
5. ⏳ Hit 50 signups in 7 days
6. ❌ Build actual API (only if validated)

---

**Remember**: This is just the validation landing page. Don't add complexity until you've validated demand!

**Questions?** Check main README.md
