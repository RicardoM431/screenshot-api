#!/usr/bin/env node

/**
 * Validation Metrics Tracker
 *
 * Checks signup count and provides guidance on next steps
 * Goal: 50+ signups in 7 days = PROCEED TO BUILD
 */

const fs = require('fs');
const path = require('path');

const METRICS_FILE = path.join(__dirname, '../validation-metrics.json');
const GOAL_SIGNUPS = 50;
const VALIDATION_DAYS = 7;

// Initialize or load metrics
function loadMetrics() {
  if (!fs.existsSync(METRICS_FILE)) {
    const initialMetrics = {
      startDate: new Date().toISOString(),
      signups: 0,
      lastChecked: new Date().toISOString(),
      history: []
    };
    fs.writeFileSync(METRICS_FILE, JSON.stringify(initialMetrics, null, 2));
    return initialMetrics;
  }
  return JSON.parse(fs.readFileSync(METRICS_FILE, 'utf8'));
}

function calculateDaysElapsed(startDate) {
  const start = new Date(startDate);
  const now = new Date();
  const diffTime = Math.abs(now - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function displayMetrics() {
  const metrics = loadMetrics();
  const daysElapsed = calculateDaysElapsed(metrics.startDate);
  const daysRemaining = Math.max(0, VALIDATION_DAYS - daysElapsed);
  const signupRate = daysElapsed > 0 ? (metrics.signups / daysElapsed).toFixed(1) : 0;
  const projectedTotal = daysElapsed > 0 ? Math.round(signupRate * VALIDATION_DAYS) : 0;

  console.log('\n📊 VALIDATION METRICS\n');
  console.log('='.repeat(50));
  console.log(`Start Date:        ${new Date(metrics.startDate).toLocaleDateString()}`);
  console.log(`Days Elapsed:      ${daysElapsed} / ${VALIDATION_DAYS}`);
  console.log(`Days Remaining:    ${daysRemaining}`);
  console.log('='.repeat(50));
  console.log(`Current Signups:   ${metrics.signups}`);
  console.log(`Goal:              ${GOAL_SIGNUPS} signups`);
  console.log(`Progress:          ${Math.round((metrics.signups / GOAL_SIGNUPS) * 100)}%`);
  console.log(`Signup Rate:       ${signupRate}/day`);
  console.log(`Projected Total:   ${projectedTotal}`);
  console.log('='.repeat(50));

  // Decision guidance
  console.log('\n🎯 DECISION GUIDANCE\n');

  if (daysElapsed >= VALIDATION_DAYS) {
    if (metrics.signups >= GOAL_SIGNUPS) {
      console.log('✅ VALIDATION PASSED!');
      console.log(`   ${metrics.signups} signups in ${daysElapsed} days`);
      console.log('\n   Next Steps:');
      console.log('   1. Proceed to build the API');
      console.log('   2. Follow Week 2-3 build plan');
      console.log('   3. Target: Launch in 2-3 weeks\n');
    } else if (metrics.signups >= 25) {
      console.log('⚠️  BORDERLINE - Consider adjusting');
      console.log(`   ${metrics.signups} signups (need ${GOAL_SIGNUPS})`);
      console.log('\n   Options:');
      console.log('   1. Adjust pricing ($5 instead of $9?)');
      console.log('   2. Improve messaging');
      console.log('   3. Share on more platforms');
      console.log('   4. Run for 3 more days\n');
    } else {
      console.log('❌ VALIDATION FAILED');
      console.log(`   Only ${metrics.signups} signups (need ${GOAL_SIGNUPS})`);
      console.log('\n   Recommended: PIVOT');
      console.log('   - Try different API idea');
      console.log('   - QR Code API (simpler)');
      console.log('   - Link Preview API');
      console.log('   - Or different niche\n');
    }
  } else {
    // Still in validation period
    const onTrack = projectedTotal >= GOAL_SIGNUPS;

    if (onTrack) {
      console.log('✅ ON TRACK!');
      console.log(`   Projected: ${projectedTotal} signups`);
      console.log(`   Continue sharing and promoting\n`);
    } else {
      console.log('⚠️  BEHIND TARGET');
      console.log(`   Projected: ${projectedTotal} signups (need ${GOAL_SIGNUPS})`);
      console.log('\n   Action required:');
      console.log('   - Share more aggressively');
      console.log('   - Post on additional platforms');
      console.log('   - Improve landing page copy');
      console.log('   - Lower price point?\n');
    }
  }

  // Where to get signups
  console.log('📍 WHERE TO SHARE:\n');
  console.log('   Reddit:');
  console.log('   - r/webdev');
  console.log('   - r/SideProject');
  console.log('   - r/API');
  console.log('   - r/EntrepreneurRideAlong\n');
  console.log('   Other:');
  console.log('   - Dev.to (write article)');
  console.log('   - Hacker News (Show HN)');
  console.log('   - Product Hunt Ship');
  console.log('   - Twitter (#buildinpublic)\n');

  console.log('💡 HOW TO UPDATE SIGNUP COUNT:\n');
  console.log('   Edit validation-metrics.json:');
  console.log(`   Change "signups": ${metrics.signups} to actual count from Formspree\n`);
}

// Manual update command
if (process.argv[2] === 'update') {
  const newCount = parseInt(process.argv[3]);
  if (isNaN(newCount)) {
    console.error('Usage: npm run metrics update <number>');
    process.exit(1);
  }

  const metrics = loadMetrics();
  const oldCount = metrics.signups;
  metrics.signups = newCount;
  metrics.lastChecked = new Date().toISOString();
  metrics.history.push({
    date: new Date().toISOString(),
    signups: newCount,
    change: newCount - oldCount
  });

  fs.writeFileSync(METRICS_FILE, JSON.stringify(metrics, null, 2));
  console.log(`\n✅ Updated: ${oldCount} → ${newCount} signups\n`);
}

displayMetrics();
