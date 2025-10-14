import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Simple health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Validation phase - API not yet built' });
});

// API Documentation redirect
app.get('/docs', (req, res) => {
  res.sendFile(path.join(__dirname, '../API_DOCS.md'));
});

// Catch-all for validation phase
app.all('/v1/*', (req, res) => {
  res.status(503).json({
    success: false,
    error: 'API not yet live - currently in validation phase',
    message: 'Join the waitlist at https://api.screenshotapi.dev to be notified when we launch',
    validation_status: {
      goal: '50 signups in 7 days',
      current: 'In progress',
      eta: 'Launch within 2-3 weeks after validation'
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Screenshot API (Validation Phase)`);
  console.log(`📍 Server running on port ${PORT}`);
  console.log(`\n⚠️  API NOT YET BUILT - Validation First!`);
  console.log(`\nNext steps:`);
  console.log(`1. Setup Formspree for email collection`);
  console.log(`2. Deploy this landing page`);
  console.log(`3. Share everywhere (Reddit, HN, Dev.to)`);
  console.log(`4. Track metrics: npm run metrics`);
  console.log(`5. Goal: 50 signups in 7 days\n`);
});
