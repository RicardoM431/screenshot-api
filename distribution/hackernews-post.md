# Hacker News Submission

## Title

**Option 1** (Recommended):
```
Show HN: Screenshot API (validating before building)
```

**Option 2**:
```
Show HN: Validating a Screenshot API idea in 7 days
```

**Option 3**:
```
Screenshot API – Docs first, code second
```

## URL

[YOUR_DEPLOYED_URL]

## Comment (First Comment - Critical!)

Post this immediately after submitting:

---

Hi HN,

I'm validating a Screenshot API before building it.

**Concept**: Simple API to convert URLs to screenshot images. $9/mo for 1,000 screenshots (competitors charge $30-50/mo).

**Why I'm posting now**: I've built failed products before by building first, validating later. This time I'm flipping it:

1. Created full API docs (API doesn't exist yet)
2. Built landing page + pricing
3. Collecting signups for 7 days
4. **If 50+ signups → I build it**
5. **If <50 signups → I pivot**

**Tech approach**: Planning to use Claude Code (AI pair programmer) to build it in 2-3 weeks if validated. Puppeteer + Cloudflare R2 + Redis for caching.

**My ask**:
- Is this solving a real problem?
- Pricing too low? Too high?
- What am I missing?

Happy to discuss API design, validation approach, or pricing strategy.

Landing: [YOUR_DEPLOYED_URL]

---

## HN Submission Guidelines

### DO:
✅ Submit as "Show HN" (not "Ask HN")
✅ Post first comment immediately
✅ Be humble and curious
✅ Respond to every comment
✅ Share technical details
✅ Be honest about validation approach
✅ Ask genuine questions

### DON'T:
❌ Be salesy or promotional
❌ Argue with critics
❌ Ignore negative feedback
❌ Delete and resubmit
❌ Ask for upvotes
❌ Use marketing language
❌ Hide your validation strategy

## Timing Strategy

### Best Times to Post
- **Weekdays**: 8-9am EST or 12-1pm EST
- **Avoid**: Friday afternoon, weekends, holidays
- **Peak traffic**: Tuesday-Thursday mornings

### Why Timing Matters
- First hour determines if post gains traction
- Need 5-10 upvotes in first 30 minutes
- After that, HN algorithm takes over

## Common HN Questions & Responses

### "This already exists (Screenshotlayer, ApiFlash, etc.)"

**Response:**
"You're right! And they charge $30-50/mo. I'm testing if there's demand for a cheaper alternative at $9/mo targeting solo devs and small projects. That's why I'm validating first - if the market doesn't need another player, I'll find out before building."

---

### "Why not just use Puppeteer?"

**Response:**
"Absolutely valid point. This is for devs who don't want to manage Puppeteer infrastructure (browsers, servers, updates, scaling, caching, rate limiting). Trade-off is convenience vs cost. For some use cases, Puppeteer DIY makes sense. For others, API is worth $9/mo."

---

### "Pricing race to the bottom"

**Response:**
"Fair concern. My thesis: there's untapped market below current $30-50/mo price point. Solo devs building side projects can't justify $50/mo for a screenshot API. But you might be right - that's exactly why I'm validating before building. If I can't get signups at $9/mo, I'll know the market doesn't exist."

---

### "How will you prevent abuse?"

**Response:**
"Great question. Planning:
- Rate limiting per API key (10 req/min free, 60 req/min paid)
- Block lists for malicious domains
- Usage quotas per tier
- Captcha for suspicious traffic patterns
- URL validation before processing

What abuse vectors am I missing?"

---

### "Tech stack overkill/underkill"

**Response:**
"Really appreciate the technical feedback. This is exactly why I'm sharing before building - want to get architecture right. [Respond to specific concern]. What would you use instead?"

---

### "Nobody will pay for this"

**Response:**
"You might be right! That's why I'm validating first. 7 days to test demand vs months of building. If I don't get signups, I'll try a different idea. What API would you actually pay for?"

---

### "Using AI to build is cheating/won't work"

**Response:**
"Interesting perspective. I see Claude Code as a force multiplier (like using a framework instead of raw JavaScript). Still need to architect, make decisions, write tests, handle edge cases. AI speeds up implementation but doesn't replace judgment. Have you tried it?"

---

### "Your landing page is missing X"

**Response:**
"Great catch! I'll add that. This kind of feedback is invaluable before building. Thanks for taking the time."

---

### "Show us the code"

**Response:**
"There is no code yet! That's the whole point. I'm validating demand before writing a single line. If I get 50+ signups in 7 days, I'll build it and open source the validation framework I'm using. If not, no wasted code."

---

## Engagement Strategy

### First 2 Hours (Critical!)
- **Check every 15 minutes**
- **Respond to every comment**
- **Be humble and grateful**
- **Answer questions thoroughly**
- **Don't be defensive**

### Hour 2-4
- Check every 30 minutes
- Continue engaging
- If post is doing well, keep momentum
- If post is dying, don't spam

### Rest of Day
- Check every few hours
- Respond to new comments
- Thank people for feedback
- Update landing page based on feedback

## Success Criteria

### Great Success
- 100+ points
- 50+ comments
- Front page for 2+ hours
- 20+ waitlist signups from HN

### Good Success
- 50+ points
- 20+ comments
- Front page for 30+ minutes
- 10+ waitlist signups

### Moderate Success
- 20+ points
- 10+ comments
- Second page visibility
- 5+ waitlist signups

### Low Success
- <20 points
- <10 comments
- No front page
- Few signups

**Note**: Even "low success" gives valuable feedback!

## What HN Loves

✅ **Technical depth** - Share architecture decisions
✅ **Transparency** - Be honest about validation approach
✅ **Genuine questions** - Ask for real feedback
✅ **Novel approach** - Validation-first is interesting
✅ **Open discussion** - Engage with critics
✅ **Learning in public** - Share past failures

## What HN Hates

❌ **Marketing speak** - "Revolutionary", "game-changing", etc.
❌ **Hiding information** - Be transparent about everything
❌ **Defensive responses** - Accept criticism gracefully
❌ **Ignoring feedback** - Engage with every comment
❌ **Self-promotion** - Focus on problem, not your solution
❌ **Asking for upvotes** - Against HN rules

## If Post Gets Flagged/Removed

**Reasons**:
- Too promotional
- Not enough technical depth
- Title violates guidelines
- URL is spam

**What to do**:
- Email hn@ycombinator.com explaining validation approach
- Don't resubmit immediately
- Wait 48 hours minimum
- Adjust title to be less promotional
- Add more technical content

## Follow-Up

### If post goes well

**24 hours later** - Reply to original comment:
"Update: Thanks for all the feedback! 25 signups so far from HN. Main themes:
1. Pricing concerns → considering $5/mo tier
2. Authentication questions → adding OAuth option
3. Feature requests → full-page screenshots most requested

Still taking feedback for next 6 days before building!"

### Day 7 - Post results

**If validated**:
"Show HN: Screenshot API validated (50+ signups) – here's the tech stack"

**If not validated**:
"Screenshot API didn't validate – here's what I learned"

(HN loves "what I learned" posts)

## Measuring Impact

Track:
- Points (upvotes)
- Comments
- Time on front page
- Referral traffic to landing page
- Conversion rate (visits → signups)
- Quality of feedback

**Most valuable**: Detailed technical feedback on API design

## After HN

**Compile feedback into doc**:
- All feature requests
- Pricing opinions
- Technical concerns
- API design suggestions

**Use this to inform build** (if validated)

## Reality Check

HN is tough. Expect:
- Criticism (good! That's feedback)
- Skepticism (normal for validation posts)
- Technical questions (be ready)
- Some negativity (don't take personally)

**But**: HN feedback is high quality. Even if post doesn't do well, comments will be valuable.

## Example Past Successes

Search HN for:
- "validating before building"
- "show hn landing page"
- "validation first"

Study how successful posts:
- Framed their idea
- Engaged with comments
- Handled criticism
- Asked for feedback

## Alternative: Post to HN After Validation

**Pros of posting now (pre-validation)**:
- Novel approach
- Get design feedback early
- Part of validation process

**Pros of posting after (post-validation)**:
- More concrete story
- Can share metrics
- Less speculative

**My recommendation**: Post now for validation feedback, post again after building with results.
