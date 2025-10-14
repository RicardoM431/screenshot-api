# GitHub Actions - Automated Deployment

## What This Does

Automatically deploys to Vercel on every push to `master` or `main` branch.

**Zero manual deployment commands needed after setup.**

---

## One-Time Setup (5 minutes)

### Step 1: Get Vercel Token

1. Go to: https://vercel.com/account/tokens
2. Click "Create Token"
3. Name: "GitHub Actions"
4. Scope: Full Account
5. Copy token (starts with `vercel_...`)

### Step 2: Get Vercel Project IDs

Run these commands locally (after first manual deploy):

```bash
# First, deploy manually once to create project:
npx vercel --prod

# Then get the IDs:
vercel project ls
# Copy your project ID

# Get org ID:
cat .vercel/project.json
# Copy "orgId" value
```

OR use these commands after linking:

```bash
# Link project
vercel link

# Get values from .vercel/project.json
cat .vercel/project.json
```

You'll see:
```json
{
  "orgId": "team_xxxxx",
  "projectId": "prj_xxxxx"
}
```

### Step 3: Add Secrets to GitHub

1. Go to your GitHub repo: `https://github.com/RicardoM431/screenshot-api`
2. Go to: **Settings** → **Secrets and variables** → **Actions**
3. Click: **New repository secret**
4. Add these 3 secrets:

| Secret Name | Value | Where to Get |
|-------------|-------|--------------|
| `VERCEL_TOKEN` | `vercel_xxxxx` | Step 1 above |
| `VERCEL_ORG_ID` | `team_xxxxx` | Step 2 - from project.json |
| `VERCEL_PROJECT_ID` | `prj_xxxxx` | Step 2 - from project.json |

### Step 4: Push to GitHub

```bash
git push origin master
```

**Done!** GitHub Actions will automatically deploy.

---

## How It Works

### Trigger

Runs automatically when you:
- Push to `master` or `main` branch
- Manually trigger from Actions tab

### What It Does

1. ✅ Checks out code
2. ✅ Installs Node.js 18
3. ✅ Installs dependencies
4. ✅ Builds project
5. ✅ Installs Vercel CLI
6. ✅ Pulls Vercel config
7. ✅ Builds for production
8. ✅ Deploys to Vercel
9. ✅ Comments deployment URL on commit

### Result

Every commit gets:
- Automatic deployment
- Comment with live URL
- Build status badge

---

## Viewing Deployments

### GitHub Actions Tab

1. Go to repo → **Actions** tab
2. See all deployments
3. Click on run to see logs
4. View deployment URL in logs

### Vercel Dashboard

1. Go to: https://vercel.com/dashboard
2. Click your project
3. See all deployments
4. View logs, analytics, etc.

---

## Workflow Status Badge

Add to your README.md:

```markdown
[![Deploy](https://github.com/RicardoM431/screenshot-api/actions/workflows/deploy.yml/badge.svg)](https://github.com/RicardoM431/screenshot-api/actions/workflows/deploy.yml)
```

Shows deployment status on your README.

---

## Manual Trigger

You can also trigger deployments manually:

1. Go to: **Actions** tab
2. Select: **Deploy to Vercel**
3. Click: **Run workflow**
4. Select branch
5. Click: **Run workflow**

---

## Troubleshooting

### "VERCEL_TOKEN not found"

**Fix:** Make sure you added the secret in GitHub repo settings.

### "Project not found"

**Fix:**
1. Run `npx vercel --prod` locally once
2. This creates the project on Vercel
3. Then get the project ID and add to secrets

### "Build failed"

**Fix:** Check Actions logs for error details. Common issues:
- Missing dependencies in package.json
- TypeScript errors
- Environment variables missing

### Deployment succeeds but site doesn't work

**Fix:** Check Vercel logs for runtime errors:
1. Vercel dashboard → Your project → Logs
2. Look for errors after deployment

---

## Cost

**GitHub Actions:**
- Public repos: FREE unlimited
- Private repos: 2,000 minutes/month FREE

**Vercel:**
- FREE tier: Unlimited deployments
- No credit card required

**Total: $0**

---

## Benefits

✅ **Fully automated** - No manual commands
✅ **Fast** - ~2 minute deploys
✅ **Reliable** - GitHub + Vercel infrastructure
✅ **Free** - No costs
✅ **History** - All deployments tracked
✅ **Rollback** - Easy to revert
✅ **Status** - See deployment status in GitHub

---

## Development Workflow

After setup, your workflow is:

```bash
# Make changes
vim src/index.ts

# Commit
git add .
git commit -m "Update feature"

# Push - triggers auto-deploy
git push

# Done! Check Actions tab for deployment URL
```

**No deployment commands needed!**

---

## Advanced: Preview Deployments

Want preview URLs for PRs? Add this workflow:

`.github/workflows/preview.yml`:

```yaml
name: Preview Deployment

on:
  pull_request:
    branches:
      - master
      - main

jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm install --global vercel@latest
      - run: vercel deploy --token=${{ secrets.VERCEL_TOKEN }} > deployment-url.txt
      - run: |
          URL=$(cat deployment-url.txt)
          echo "Preview: $URL" >> $GITHUB_STEP_SUMMARY
```

Now every PR gets a preview URL!

---

## Next Steps

1. ✅ Complete one-time setup above
2. ✅ Push to GitHub
3. ✅ Watch Actions tab
4. ✅ Get deployment URL
5. ✅ Share and validate!

After this, all future updates auto-deploy on push.

**Fully autonomous deployment achieved!** 🎉
