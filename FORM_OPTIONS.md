# Form Field Options for Validation

## Current Form (Minimal)
```html
<input type="email" name="email" required>
```

**Pros:**
- Highest conversion rate
- No friction
- Fast signup
- Good for pure validation metric (50 signups)

**Cons:**
- No market insights
- Can't segment users
- Miss pricing validation opportunity

---

## Recommended: Minimal + 2 Optional Fields

### Fields to Add:

1. **Email** (required) ✅ Already have
2. **Use Case** (optional, select)
3. **Monthly Volume** (optional, select)

### Updated Form HTML:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- Email (required) -->
  <div style="margin-bottom: 15px;">
    <input
      type="email"
      name="email"
      placeholder="your@email.com"
      required
      style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 5px;"
      aria-label="Email address"
    >
  </div>

  <!-- Use Case (optional) -->
  <div style="margin-bottom: 15px;">
    <select
      name="use_case"
      style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 5px; background: white;"
      aria-label="Primary use case"
    >
      <option value="">What's your use case? (optional)</option>
      <option value="social-previews">Social media preview cards</option>
      <option value="portfolio">Portfolio thumbnails</option>
      <option value="monitoring">Website monitoring</option>
      <option value="link-previews">Link preview service</option>
      <option value="documentation">Documentation screenshots</option>
      <option value="testing">Automated testing</option>
      <option value="other">Other</option>
    </select>
  </div>

  <!-- Expected Volume (optional) -->
  <div style="margin-bottom: 15px;">
    <select
      name="expected_volume"
      style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 5px; background: white;"
      aria-label="Expected monthly volume"
    >
      <option value="">How many screenshots/month? (optional)</option>
      <option value="<100">&lt;100 (Free tier)</option>
      <option value="100-1000">100-1,000 ($9/mo)</option>
      <option value="1000-10000">1,000-10,000 ($29/mo)</option>
      <option value="10000+">10,000+ ($99/mo)</option>
    </select>
  </div>

  <!-- Hidden fields -->
  <input type="hidden" name="_subject" value="New Screenshot API Waitlist Signup">
  <input type="hidden" name="_next" value="/thanks.html">

  <!-- Submit button -->
  <button
    type="submit"
    style="width: 100%; padding: 12px 30px; font-size: 1em; background: #0066cc; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;"
  >
    Join Waitlist
  </button>
</form>
```

---

## Why These Fields?

### 1. Use Case
**Insight:** Which use case is most popular?
**Decision:** Focus on most common use case in marketing
**Example:** If "social previews" dominates → emphasize that in messaging

### 2. Expected Volume
**Insight:** Which pricing tier has demand?
**Decision:** Validate pricing strategy
**Example:** If everyone selects <100 → free tier too generous OR paid too expensive

---

## Alternative: Add Just ONE Field

If you want to keep it super simple, add only:

### Option A: Use Case Only
```html
<select name="use_case">
  <option value="">What will you use it for? (optional)</option>
  <option value="social-previews">Social media previews</option>
  <option value="portfolio">Portfolio thumbnails</option>
  <option value="monitoring">Website monitoring</option>
  <option value="other">Other</option>
</select>
```

**Why:** Helps you understand market better

### Option B: Company/Project Name
```html
<input
  type="text"
  name="company"
  placeholder="Company/Project name (optional)"
>
```

**Why:** Can look them up, understand their context

### Option C: Expected Volume
```html
<select name="expected_volume">
  <option value="">Expected screenshots/month? (optional)</option>
  <option value="<100">&lt;100</option>
  <option value="100-1000">100-1,000</option>
  <option value="1000-10000">1,000-10,000</option>
  <option value="10000+">10,000+</option>
</select>
```

**Why:** Validates pricing directly

---

## DON'T Add These (Too Much Friction):

❌ Phone number (kills conversion)
❌ Company size (not critical for validation)
❌ Budget (too invasive)
❌ Multiple text fields (too much work)
❌ "Tell us about your project" (too much effort)

---

## My Recommendation:

### For Pure Validation (Max Signups):
**Keep current form** - Email only

### For Validation + Insights (Better):
**Add 2 optional fields:**
- Use case dropdown
- Expected volume dropdown

Both optional, so users can skip.

---

## Testing Strategy:

### Week 1 (Days 1-3):
Use email-only form (max conversion)

### Week 1 (Days 4-7):
Add 2 optional fields IF you're already hitting 50 signups

**Why:** Don't reduce conversion early. Add fields once you know you'll hit goal.

---

## Sample Data You'll Get:

### Email Only:
```
john@example.com
jane@startup.io
dev@company.com
```

**Insight:** Just the count (50+ = validated)

### With Optional Fields:
```
Email: john@example.com
Use Case: Social media previews
Volume: 100-1,000/month

Email: jane@startup.io
Use Case: Portfolio thumbnails
Volume: <100/month

Email: dev@company.com
Use Case: Website monitoring
Volume: 10,000+/month
```

**Insight:**
- Most popular use case: Social previews (focus marketing here)
- 60% expect 100-1,000/month ($9 tier has demand)
- 20% expect 10,000+ (enterprise opportunity)

---

## Implementation:

Want me to update `public/index.html` with the recommended form?

**Option 1:** Email only (current) - no change needed
**Option 2:** Email + 2 optional fields - I'll update now
**Option 3:** Email + 1 field (your choice)

Which would you like?
