#!/bin/bash
# GitHub Setup Script for RicardoM431/screenshot-api
# Automatically configures git remote and pushes to GitHub

set -e  # Exit on any error

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 GitHub Setup for Screenshot API"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Error: Not a git repository"
    echo "   Run: git init"
    exit 1
fi

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo "⚠️  Remote 'origin' already exists:"
    git remote get-url origin
    echo ""
    read -p "Do you want to update it? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git remote remove origin
        echo "✅ Removed old remote"
    else
        echo "❌ Cancelled"
        exit 0
    fi
fi

# Add GitHub remote
REPO_URL="https://github.com/RicardoM431/screenshot-api.git"
echo "📡 Adding GitHub remote..."
git remote add origin $REPO_URL
echo "✅ Remote added: $REPO_URL"
echo ""

# Check if there are commits
if ! git log &> /dev/null; then
    echo "❌ Error: No commits found"
    echo "   Create a commit first:"
    echo "   git add ."
    echo "   git commit -m 'Initial commit'"
    exit 1
fi

# Check current branch
BRANCH=$(git branch --show-current)
echo "📍 Current branch: $BRANCH"
echo ""

# Ask before pushing
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Ready to push to GitHub!"
echo ""
echo "Repository: $REPO_URL"
echo "Branch:     $BRANCH"
echo ""
echo "⚠️  Make sure you've created the repository on GitHub first:"
echo "   https://github.com/new"
echo "   Repository name: screenshot-api"
echo "   (Keep it public for free GitHub Actions)"
echo ""
read -p "Push now? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Cancelled"
    echo ""
    echo "When ready, run:"
    echo "  git push -u origin $BRANCH"
    exit 0
fi

# Push to GitHub
echo ""
echo "🚀 Pushing to GitHub..."
echo ""

if git push -u origin $BRANCH; then
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "✅ Successfully pushed to GitHub!"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "📍 Repository URL:"
    echo "   https://github.com/RicardoM431/screenshot-api"
    echo ""
    echo "🎯 Next Steps:"
    echo ""
    echo "1. View your repository:"
    echo "   open https://github.com/RicardoM431/screenshot-api"
    echo ""
    echo "2. Enable GitHub Actions:"
    echo "   Repo → Actions tab → Enable workflows"
    echo ""
    echo "3. Setup Vercel deployment:"
    echo "   npx vercel --prod"
    echo "   (Opens browser for one-time login)"
    echo ""
    echo "4. Add GitHub Secrets for auto-deploy:"
    echo "   https://github.com/RicardoM431/screenshot-api/settings/secrets/actions"
    echo "   Add: VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID"
    echo ""
    echo "5. Follow complete guide:"
    echo "   cat FULL_AUTOMATION_GUIDE.md"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
else
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "❌ Push failed"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "Common issues:"
    echo ""
    echo "1. Repository doesn't exist on GitHub"
    echo "   → Create it at: https://github.com/new"
    echo "   → Name: screenshot-api"
    echo ""
    echo "2. Authentication required"
    echo "   → Setup SSH key: https://github.com/settings/keys"
    echo "   → Or use HTTPS with token"
    echo ""
    echo "3. Remote already has commits"
    echo "   → Pull first: git pull origin $BRANCH"
    echo "   → Or force push: git push -u origin $BRANCH --force"
    echo ""
    exit 1
fi
