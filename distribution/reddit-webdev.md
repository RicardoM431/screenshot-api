# Reddit Post - r/webdev

## Title
Building a Screenshot API - validating demand before writing code

## Post Content

Hey r/webdev,

I'm working on a Screenshot API and I'm doing something different: **validating demand BEFORE building it**.

### The Idea

Simple API to convert any URL to a screenshot image:

```bash
curl -X POST https://api.screenshotapi.dev/v1/capture \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{"url": "https://example.com", "width": 1280, "height": 800}'
```

Returns a screenshot image URL. That's it.

### Use Cases
- Social media preview cards
- Portfolio thumbnails
- Website monitoring
- Link preview services
- Automated testing

### Pricing (planned)
- Free: 100/month
- $9/mo: 1,000 screenshots
- $29/mo: 10,000 screenshots
- $99/mo: 100,000 screenshots

### Why I'm Sharing Before Building

I've built failed products before. This time I'm validating first:
- If I get 50+ signups in 7 days → I'll build it
- If not → I pivot to a different API idea

No point building something nobody wants.

### My Ask

1. **Does this solve a problem you have?**
2. **Is the pricing reasonable?**
3. **What features would make this a must-have?**

I've created full API docs (even though the API doesn't exist yet): [YOUR_DEPLOYED_URL]

If this interests you, join the waitlist. It takes 2 seconds, no credit card needed.

---

**TL;DR**: Screenshot API idea. Validating demand before coding. Thoughts?

---

## When to Post

- **Best days**: Tuesday-Thursday
- **Best times**: 8-10am EST or 1-3pm EST
- **Avoid**: Weekends, Monday mornings, Friday afternoons

## Engagement Strategy

**Reply to every comment within first 2 hours:**
- Thank people for feedback
- Answer questions directly
- Be humble, not salesy
- Share your validation approach

**Common Questions to Prepare For:**

Q: *"Why not just use Puppeteer?"*
A: "Great question! You absolutely can. This is for devs who want a simple API without managing Puppeteer, browsers, servers, caching, rate limiting, etc. Think of it as 'Puppeteer as a service' - you pay for convenience."

Q: *"How is this different from [competitor]?"*
A: "Good point! [Competitor] charges $30-50/mo. I'm targeting the lower end of the market - solo devs and small projects that can't justify $50/mo. Also simpler pricing, no complicated tiers."

Q: *"What's your tech stack?"*
A: "Planning to use Puppeteer + Sharp for image optimization + Cloudflare R2 for CDN + Redis for caching. But honestly, I'm not building anything until I validate demand first."

Q: *"Free tier seems generous"*
A: "That's intentional. I want people to actually try it. The free tier helps with distribution and most free users will upgrade once they integrate it into their workflow."

Q: *"This will never work / bad idea"*
A: "Appreciate the honesty! That's exactly why I'm validating first before spending weeks building. If I don't get signups, I'll pivot. What API would YOU actually pay for?"

## Follow-Up Strategy

**24 hours later:**
- Edit post with update: "Update: Thanks for all the feedback! [X] signups so far. Keep them coming!"
- Mention any adjustments based on feedback

**3 days later:**
- Comment on post: "Quick update: We're at [X] signups. [Y] more to reach validation goal. Still taking feedback!"

## What NOT to Do

❌ Don't be defensive about criticism
❌ Don't spam links to your landing page in replies
❌ Don't argue with people who say it won't work
❌ Don't edit post to add new features (scope creep)
❌ Don't post and disappear (engage!)

## Success Metrics

- 50+ upvotes = good visibility
- 20+ comments = strong engagement
- 10+ waitlist signups from Reddit = validation working

## Backup Plan

If post gets removed (self-promotion):
- Reframe as "seeking feedback" not "promoting product"
- Lead with question, not pitch
- Share learnings, not just product
