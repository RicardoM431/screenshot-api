# Screenshot API - Validation Phase

**Status**: 🔴 Pre-launch (Validation Phase)

Convert any URL to a screenshot image via simple HTTP request.

## 🚨 IMPORTANT: Validation First, Build Second!

**DO NOT BUILD THE API YET**

This project follows the validation-first approach:
1. ✅ Create landing page and docs (DONE)
2. ⏳ Get 50 signups in 7 days (IN PROGRESS)
3. ❌ Build the API (ONLY IF VALIDATED)

## 🚀 One-Click Deploy

Deploy instantly to any platform:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/screenshot-api)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/screenshot-api)

**Or use CLI:**

```bash
# Vercel (easiest)
npx vercel --prod

# Netlify
npx netlify deploy --prod

# Railway (requires login)
railway up
```

## Quick Start - Validation Phase

### 1. Setup Formspree (Email Collection)

1. Go to [formspree.io](https://formspree.io) (free tier)
2. Create new form
3. Copy your form ID (looks like: `abc123xyz`)
4. Edit `public/index.html`:
   - Replace `YOUR_FORM_ID` with your actual form ID
   - Line 104: `action="https://formspree.io/f/YOUR_FORM_ID"`

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

Visit http://localhost:3000

### 4. Deploy (Choose One)

**Option A: Vercel (Easiest)**
```bash
npx vercel --prod

# Deploy
railway up
```

**Option B: Vercel (Easier)**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### 5. Share Everywhere

**Day 1-2: Reddit**
- r/webdev - "Building a screenshot API - thoughts?"
- r/SideProject - "Screenshot API - validating before building"
- r/API - "Simple screenshot API - $9/mo for 1K screenshots"

**Day 2-3: Dev.to**
Write article: "Building a Screenshot API: Validation First"
- Explain the idea
- Show pricing
- Link to landing page
- Ask for feedback

**Day 3-4: Hacker News**
Submit as "Show HN: Screenshot API (validating before building)"

**Day 3-4: Product Hunt Ship**
Create "coming soon" page

**Day 1-4: Twitter**
Tweet: "Building a Screenshot API. Docs first, code later. #buildinpublic"

### 6. Track Metrics

```bash
npm run metrics
```

**Goal**: 50+ signups in 7 days

**Update signup count** (check Formspree dashboard):
```bash
npm run metrics update 25
```

## Decision Tree

After 7 days:

- **50+ signups**: ✅ PROCEED - Build the API
- **25-49 signups**: ⚠️ ADJUST - Tweak and retry
- **<25 signups**: ❌ PIVOT - Try different idea

## What's Included

```
screenshot-api/
├── public/
│   ├── index.html        # Landing page
│   └── thanks.html       # Thank you page
├── src/
│   └── index.ts          # Server (validation phase)
├── scripts/
│   └── check-metrics.js  # Metrics tracker
├── API_DOCS.md           # Full API documentation
├── QUICK_START.md        # Detailed guide
├── package.json
└── README.md
```

## Architecture (Future - After Validation)

When we build (ONLY if validated):

**Tech Stack**:
- Puppeteer (screenshot capture)
- Sharp (image optimization)
- Cloudflare R2 (CDN storage)
- Stripe (payments)
- Redis (caching)

**See**: `QUICK_START.md` for full build plan (Week 2-3)

## Pricing Strategy

- **Free**: 100 screenshots/month
- **Starter**: 1,000 screenshots/month - $9
- **Growth**: 10,000 screenshots/month - $29
- **Scale**: 100,000 screenshots/month - $99

## Revenue Projections (Conservative)

| Month | Paying Users | MRR |
|-------|-------------|-----|
| 1 | 2 | $18 |
| 3 | 10 | $120 |
| 6 | 25 | $300 |
| 12 | 50 | $600 |

**Break-even**: Month 1 (2 users = $18 covers hosting)

## Critical Success Metrics

### Week 1 (Validation)
- [ ] 50+ email signups
- [ ] 3%+ conversion rate
- [ ] Shared on 5+ platforms

### Month 1 (Launch - if validated)
- [ ] 2+ paying customers
- [ ] $18+ MRR (profitable)
- [ ] 0 support requests (autonomous)

## Next Steps

1. ✅ Setup Formspree form ID
2. ⏳ Deploy to Railway or Vercel
3. ⏳ Share on Reddit, HN, Dev.to, PH
4. ⏳ Track signups daily
5. ⏳ Hit 50 signups in 7 days
6. ❌ Build API (only if validated)

## Resources

- **Formspree**: https://formspree.io
- **Railway**: https://railway.app
- **Vercel**: https://vercel.com
- **Product Hunt Ship**: https://www.producthunt.com/ship

## Questions?

Check `QUICK_START.md` for detailed day-by-day guide.

---

**Remember**: Don't build until validated! 50 signups = green light.

**Current Phase**: 🔴 Validation (Day 0)
