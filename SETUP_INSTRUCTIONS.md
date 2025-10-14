# Setup Instructions - Complete Walkthrough

## ✅ Step 1: Formspree Setup (Email Collection)

### Create Formspree Account

1. Go to: https://formspree.io/register
2. Sign up with your email
3. Verify your email address

### Create Form

1. Click "New Form" in Formspree dashboard
2. Name it: "Screenshot API Waitlist"
3. Copy your form ID (looks like: `myzabc123`)

### Update Landing Page

Edit `public/index.html` line 104:

**BEFORE:**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**AFTER:**
```html
<form action="https://formspree.io/f/myzabc123" method="POST">
```

Replace `myzabc123` with YOUR actual form ID.

### Configure Formspree Settings

In Formspree dashboard:
1. Go to Form Settings
2. Set "Redirect URL" to: `https://your-domain.com/thanks.html` (update after deployment)
3. Enable spam protection (already included in free tier)

**Free Tier Limits:**
- 50 submissions/month (enough for validation)
- Email notifications included
- Spam filtering included

---

## ✅ Step 2: Test Locally

```bash
# Make sure you're in project directory
cd /home/rcgadmin/screenshot-api

# Start dev server
npm run dev
```

Visit: http://localhost:3000

**Test checklist:**
- [ ] Landing page loads
- [ ] All sections visible
- [ ] Form visible (will show Formspree error until deployed)
- [ ] API docs link works
- [ ] Pricing section displays correctly

Press Ctrl+C to stop server.

---

## ✅ Step 3: Initialize Validation Metrics

```bash
npm run metrics
```

This creates `validation-metrics.json` to track signups.

**Update signup count manually:**
```bash
# Check Formspree dashboard for count
npm run metrics update 5
```

---

## ✅ Step 4: Deploy to Railway

### Install Railway CLI

```bash
npm install -g @railway/cli
```

### Login

```bash
railway login
```

Opens browser for authentication.

### Initialize Project

```bash
railway init
```

Answer prompts:
- Project name: `screenshot-api`
- Environment: `production`

### Deploy

```bash
railway up
```

Wait 2-3 minutes for deployment.

### Get Your URL

```bash
railway domain
```

If no domain assigned:
```bash
railway domain create
```

Your site is live at: `screenshot-api-production-xxxx.up.railway.app`

### Update Formspree Redirect

Go back to Formspree settings:
- Update redirect URL to: `https://your-railway-url.up.railway.app/thanks.html`

---

## ✅ Step 5: Alternative - Deploy to Vercel (Easier)

### Install Vercel CLI

```bash
npm install -g vercel
```

### Deploy

```bash
vercel --prod
```

Follow prompts:
- Set up and deploy? **Yes**
- Which scope? **Your account**
- Link to existing project? **No**
- Project name? **screenshot-api**
- Directory? **./  (press Enter)**
- Override settings? **No**

Done! Vercel gives instant URL.

### Update Formspree

Same as Railway - update redirect URL in Formspree.

---

## ✅ Step 6: Distribution Campaign

Now share your deployed URL everywhere!

### Reddit (Day 1-2)

**r/webdev:**
Title: "Building a Screenshot API - validating demand before coding"
Post: See `distribution/reddit-webdev.md`

**r/SideProject:**
Title: "Screenshot API - $9/mo for 1,000 screenshots - before I build it, who needs this?"
Post: See `distribution/reddit-sideproject.md`

**r/API:**
Title: "Simple Screenshot API - market validation before development"
Post: See `distribution/reddit-api.md`

### Dev.to (Day 2-3)

Write article: "Building a Screenshot API: Docs First, Code Second"
Template: See `distribution/devto-article.md`

### Hacker News (Day 3-4)

Submit as: "Show HN: Screenshot API (validating before building)"
Guidelines: See `distribution/hackernews-post.md`

### Product Hunt Ship (Day 3-4)

Create "coming soon" page at: https://www.producthunt.com/ship
Instructions: See `distribution/producthunt-ship.md`

### Twitter (Days 1-7)

Tweet thread: See `distribution/twitter-thread.md`

Use hashtags:
- #buildinpublic
- #indiehackers
- #SaaS
- #API

---

## ✅ Step 7: Daily Tracking

### Morning Routine (5 minutes)

1. Check Formspree dashboard for new signups
2. Update metrics:
   ```bash
   npm run metrics update <count>
   ```
3. Review decision guidance

### Sharing Schedule

- **Day 1**: Reddit (r/webdev, r/SideProject)
- **Day 2**: Dev.to article, Reddit (r/API)
- **Day 3**: Hacker News, Product Hunt Ship
- **Day 4**: Twitter thread, follow-up posts
- **Day 5**: Repost on Reddit (different subreddits)
- **Day 6**: Engage with comments, answer questions
- **Day 7**: Final metrics check, make decision

---

## ✅ Step 8: Decision Time (Day 7)

```bash
npm run metrics
```

### Scenarios

**50+ signups:**
```
✅ VALIDATION PASSED!
→ Proceed to build API
→ Follow QUICK_START.md Week 2-3 plan
→ Email waitlist when launching
```

**25-49 signups:**
```
⚠️ BORDERLINE
→ Options:
   1. Lower price ($5 instead of $9)
   2. Extend validation 3 more days
   3. Share on more platforms
   4. Improve messaging
```

**<25 signups:**
```
❌ INSUFFICIENT DEMAND
→ Recommended: PIVOT
→ Try different API:
   - QR Code API (simpler)
   - Link Preview API
   - PDF Generation API
→ Don't waste time building unvalidated product
```

---

## Troubleshooting

### Form not submitting
- Check Formspree form ID is correct
- Verify Formspree account is active
- Check browser console for errors
- Test form submission directly on Formspree

### Deployment failed
- Check Node version: `node --version` (need 18+)
- Ensure all dependencies installed: `npm install`
- Try building locally: `npm run build`
- Check logs: `railway logs` or `vercel logs`

### Can't access deployed site
- Wait 2-3 minutes after deployment
- Check deployment status: `railway status`
- Verify domain: `railway domain`
- Try opening in incognito mode

### Metrics not updating
- Manually edit `validation-metrics.json`
- Ensure file permissions are correct
- Run: `npm run metrics update <count>`

---

## Quick Commands Reference

```bash
# Development
npm run dev              # Start local server
npm run build            # Build TypeScript
npm run start            # Run production build

# Validation
npm run validate:idea    # Initial validation check
npm run metrics          # Check validation metrics
npm run metrics update N # Update signup count

# Deployment
railway up               # Deploy to Railway
railway logs             # View Railway logs
railway domain           # Get Railway URL
vercel --prod            # Deploy to Vercel

# Security
npm audit                # Check for vulnerabilities
npm run security:scan    # Full security scan
```

---

## Cost Tracking

### Current (Validation Phase)
- Railway/Vercel: **$0** (free tier)
- Formspree: **$0** (free tier)
- Domain (optional): **$12/year**
- **Total: $0-12**

### After Launch (If Validated)
- Railway: **$5-10/month**
- Cloudflare R2: **$0-5/month**
- Stripe: **$0 + 2.9% per transaction**
- Redis: **$0-10/month** (Upstash free tier)
- **Total: ~$10-20/month**

**Break-even: 2 paying users = $18 MRR**

---

## Next Steps After Validation

If you hit 50+ signups:

1. **Week 2**: Build core API
   - Install Puppeteer
   - Implement screenshot endpoint
   - Add rate limiting
   - Setup Redis caching

2. **Week 3**: Payments & Deploy
   - Integrate Stripe
   - Setup webhooks
   - Security audit
   - Production deployment

3. **Week 4**: Launch
   - Email waitlist
   - Product Hunt launch
   - Monitor & fix bugs
   - Collect first revenue

See `QUICK_START.md` for detailed build plan.

---

## Support

Questions? Issues? Check:
- Main README.md
- QUICK_START.md
- DEPLOYMENT_GUIDE.md

Or review validation strategy in PROBLEM_DEFINITION.yaml in parent directory.

---

**Remember**: Don't build until validated! This checklist ensures you follow the validation-first approach correctly.

**Current Status**: Ready to deploy and validate
**Goal**: 50 signups in 7 days
**Timeline**: 7 days validation → 2-3 weeks build → Launch

Let's validate this! 🚀
