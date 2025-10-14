# Serverless Functions

## `/api/submit` - Form Submission Handler

Handles waitlist form submissions autonomously.

### Features
- ✅ Validates email addresses
- ✅ Logs all submissions to Vercel dashboard
- ✅ Records: email, use case, volume, timestamp, IP
- ✅ Redirects to thank you page
- ✅ No external services required

### How It Works

1. User submits form on landing page
2. POST request to `/api/submit`
3. Validates data
4. Logs to Vercel console (viewable in dashboard)
5. Redirects to `/thanks.html`

### Viewing Submissions

**After deployment:**

1. Go to Vercel dashboard
2. Click on your project
3. Go to "Logs" tab
4. See all submissions in real-time

Filter by: `📧 NEW SIGNUP`

### Sample Log Entry

```json
📧 NEW SIGNUP: {
  "timestamp": "2025-10-14T10:30:00.000Z",
  "email": "john@example.com",
  "useCase": "social-previews",
  "expectedVolume": "100-1000",
  "ip": "123.45.67.89",
  "userAgent": "Mozilla/5.0..."
}
```

### Extracting Data for Metrics

**Method 1: Manual (Quick)**
1. Open Vercel logs
2. Copy/paste submissions
3. Count signups

**Method 2: Vercel CLI (Better)**
```bash
vercel logs --follow
# Grep for signups
vercel logs | grep "NEW SIGNUP"
```

**Method 3: Add Database (Future)**
Integrate with:
- Vercel Postgres (free tier)
- Supabase
- PlanetScale
- Google Sheets API

Uncomment database code in `submit.js`

---

## Optional: Email Notifications

### Using Resend (Recommended)

**Free tier**: 100 emails/day

1. Sign up at https://resend.com
2. Get API key
3. Add to Vercel environment variables:
   ```
   RESEND_API_KEY=re_xxxxx
   ```
4. Install package:
   ```bash
   npm install resend
   ```
5. Uncomment email code in `api/submit.js`

### Using SendGrid

**Free tier**: 100 emails/day

1. Sign up at https://sendgrid.com
2. Get API key
3. Add to Vercel:
   ```
   SENDGRID_API_KEY=SG.xxxxx
   ```
4. Use SendGrid Node.js library

### Using Vercel's Built-in Email (Beta)

Check Vercel docs for latest email integration options.

---

## Tracking Signups

### Daily Count Script

Create `scripts/count-signups.sh`:

```bash
#!/bin/bash
vercel logs --output=raw | grep "NEW SIGNUP" | wc -l
```

Run:
```bash
chmod +x scripts/count-signups.sh
./scripts/count-signups.sh
```

### Update Metrics

```bash
# Get count
COUNT=$(vercel logs --output=raw | grep "NEW SIGNUP" | wc -l)

# Update metrics
npm run metrics update $COUNT
```

---

## Benefits of This Approach

✅ **No External Services** - Everything in Vercel
✅ **Free Forever** - No usage limits
✅ **Full Control** - Own your data
✅ **Scalable** - Serverless auto-scales
✅ **Secure** - Vercel handles security
✅ **Easy to Extend** - Add database/email later

---

## Next Steps

1. **Deploy**: `npx vercel --prod`
2. **Test form**: Submit on live site
3. **Check logs**: Vercel dashboard → Logs
4. **Track daily**: Check logs for signup count
5. **Update metrics**: `npm run metrics update <count>`

---

## Troubleshooting

**Form doesn't submit:**
- Check Vercel logs for errors
- Verify `/api/submit.js` deployed
- Check browser console for errors

**Logs not showing:**
- Wait 30 seconds for logs to appear
- Refresh Vercel dashboard
- Check project is selected

**Want database instead:**
- See `FORM_BACKEND_OPTIONS.md`
- Add Vercel Postgres
- Update `submit.js` to save to DB

---

**This is the most autonomous option!** Everything I created, you just deploy.
