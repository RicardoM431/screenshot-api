# Product Hunt Ship Guide

## What is Product Hunt Ship?

Product Hunt Ship is a pre-launch platform for collecting subscribers before your product launches.

**Benefits:**
- Build audience before launch
- Collect emails for waitlist
- Get early feedback
- Warm up for Product Hunt launch
- Free (no cost)

## Setup Instructions

### 1. Go to Product Hunt Ship

URL: https://www.producthunt.com/ship

Sign up with your Product Hunt account (or create one).

### 2. Create Your Ship Page

Click "Create Ship Page"

Fill in details:

**Product Name:**
```
Screenshot API
```

**Tagline:**
```
Convert any URL to a screenshot - Simple API for $9/mo
```

**Description:**
```
Screenshot API makes it easy to generate website screenshots via a simple API call.

Perfect for:
• Social media preview cards
• Portfolio thumbnails
• Website monitoring
• Link preview services

Instead of managing Puppeteer infrastructure, use our API:

curl -X POST api.screenshotapi.dev/v1/capture \
  -d '{"url": "https://example.com"}'

Pricing:
• Free: 100 screenshots/month
• Paid: Starting at $9/mo for 1,000 screenshots

Current status: Validation phase
If we get 50+ signups, we'll build and launch in 2-3 weeks.

Join the waitlist for early access!
```

**Topics/Tags:**
- API
- Developer Tools
- SaaS
- Automation
- Web Development

**Website:**
```
[YOUR_DEPLOYED_URL]
```

**Twitter:**
```
[YOUR_TWITTER_HANDLE]
```

### 3. Add Launch Timeline

**Coming Soon:**
```
Validating demand - collecting 50 signups before building
```

**Upcoming Milestones:**
```
Week 1: Validation (50 signups)
Week 2-3: Build core API
Week 4: Launch to waitlist
```

### 4. Upload Media

**Product Image/Logo:**
Create simple logo or screenshot of landing page.

**Recommended:**
- 240x240px logo
- Use Canva or similar
- Clean, simple design

**Screenshots:**
- Landing page screenshot
- API documentation screenshot
- Code example screenshot

### 5. Customize Page

**Theme/Colors:**
Match your landing page branding.

**Call to Action:**
"Join Waitlist" (default is fine)

**Additional Sections:**
- Pricing table (copy from landing page)
- Use cases
- Comparison to competitors

## Promoting Your Ship Page

### Week 1 (Validation Phase)

**Share on:**
- Twitter (pin to profile)
- LinkedIn
- Reddit (in comments, not direct posts)
- Indie Hackers
- Your email signature

**Update frequency:**
Post updates every 2-3 days:
- Signup milestones
- Validation progress
- Feature decisions based on feedback

### Example Updates

**Day 2:**
```
🚀 Validation Update: 15 signups so far!

Getting great feedback:
• Most requested: Full-page screenshots
• Pricing seems right
• Interest from social media tool devs

35 more signups to reach validation goal. Join us!
```

**Day 5:**
```
📊 Halfway through validation week: 30 signups

Top use case emerging: Portfolio screenshot galleries

Making API design adjustments based on feedback.

20 more signups to validate! 🎯
```

**Day 7 (If validated):**
```
✅ VALIDATED! 50+ signups achieved

Thank you all! 🎉

Next steps:
- Building core API (Week 2-3)
- Launching to waitlist (Week 4)
- Product Hunt official launch (Month 2)

Stay tuned for build updates!
```

## Getting Traction on Ship

### Upvotes Matter
- Ask friends to upvote (not directly, naturally)
- Share in communities
- Engage with other Ship pages (they'll engage back)

### Comments
- Respond to every comment
- Ask questions to drive engagement
- Share progress updates

### Newsletter
Product Hunt will send your updates to subscribers.

**Use this strategically:**
- Don't spam (max 1 update per week)
- Make updates valuable
- Share real progress

## Collecting Feedback

Ship has comment system. Use it to:

**Ask questions:**
- "What price point makes sense for your use case?"
- "What features are must-haves?"
- "How many screenshots per month would you need?"

**Run polls:**
- "Which format do you need most: PNG, JPEG, or WebP?"
- "Would you use webhooks for async processing?"

**Share decisions:**
- "Based on feedback, adding full-page screenshot support"
- "Adjusting rate limits based on your input"

## Converting Ship Subscribers

When you launch:

1. **Email all subscribers:**
   - Thank them for early support
   - Give them early access
   - Offer launch discount (optional)

2. **Give them VIP treatment:**
   - Priority support
   - Input on roadmap
   - Exclusive updates

3. **Ask for Product Hunt support:**
   - "We're launching on PH tomorrow - would love your support!"
   - Don't be pushy, but most will help

## Integration with Your Validation

Ship page = another channel for collecting signups.

**Track separately:**
- Landing page signups (Formspree)
- Ship page subscribers (Product Hunt)
- Total = combined validation metric

**Update your metrics tracking:**
```bash
# Count Ship subscribers + Formspree signups
npm run metrics update <total_count>
```

## Timeline Strategy

### Week 1-2 (Validation)
- Create Ship page
- Share widely
- Collect subscribers
- Post updates

### Week 3-4 (Building - if validated)
- Update Ship page: "Building in progress"
- Share development milestones
- Show screenshots of progress
- Build anticipation

### Week 5 (Pre-launch)
- "Launching next week!"
- Email subscribers
- Ask for Product Hunt support
- Create launch day plan

### Week 6 (Launch)
- Official Product Hunt launch
- Email all Ship subscribers
- Give early access
- Convert to paying customers

## Product Hunt Launch Strategy (Future)

After validation + build, launch officially:

**Best days:** Tuesday, Wednesday, Thursday
**Best time:** 12:01am PST (first to appear)

**Preparation:**
- Maker video (optional but good)
- High-quality screenshots
- Clear description
- Promo codes for hunters
- Support team ready

**Launch day:**
- Respond to every comment
- Be online all day
- Thank everyone
- Share updates

## Success Metrics

### Ship Page
- 25+ subscribers from Ship
- 20+ upvotes
- 10+ comments
- Good engagement

### Combined with Other Channels
Ship is ONE channel. Don't rely on it alone.

**Validation sources:**
- Landing page (Formspree): 60%
- Reddit: 20%
- Ship: 10%
- HN/Twitter/Dev.to: 10%

## Common Mistakes

❌ Creating Ship page without landing page
❌ Not updating regularly
❌ Spamming updates
❌ Ignoring comments
❌ Launching on Ship without validation
❌ Not following up with subscribers

✅ Use Ship as part of validation strategy
✅ Post valuable updates (not spam)
✅ Engage with community
✅ Build anticipation
✅ Convert subscribers to users
✅ Launch officially when ready

## Resources

- **Product Hunt Ship**: https://www.producthunt.com/ship
- **PH Guidelines**: https://www.producthunt.com/posts/product-hunt-guidelines
- **Launch Guide**: https://blog.producthunt.com/how-to-launch-on-product-hunt-7756982d2664

## Ship Page Checklist

- [ ] Account created
- [ ] Product name and tagline
- [ ] Full description
- [ ] Website link added
- [ ] Twitter linked
- [ ] Logo/images uploaded
- [ ] Topics/tags selected
- [ ] Launch timeline set
- [ ] First update posted
- [ ] Shared on social media
- [ ] Tracking subscribers in metrics

## After Ship

When you officially launch on Product Hunt:

**Send email to Ship subscribers:**

```
Subject: Screenshot API is live! 🚀

Hey,

Remember when you joined our waitlist on Product Hunt Ship?

Screenshot API is now LIVE!

Your early access link: [link]
Your API key: [key]

We're launching officially on Product Hunt today:
[Product Hunt link]

Would love your support! Comment, upvote, share feedback.

As an early supporter, you get:
• 2x free tier credits (200 screenshots/month)
• Priority support
• Early access to new features

Thank you for believing in us early 🙏

[Your name]
```

This converts Ship subscribers → users → advocates.

## Final Tips

1. **Be authentic** - Share real progress
2. **Engage genuinely** - Don't just promote
3. **Update regularly** - Keep momentum
4. **Thank supporters** - Build relationships
5. **Convert strategically** - Ship → users → customers

Ship is a marathon, not a sprint. Use it to build audience over time.
