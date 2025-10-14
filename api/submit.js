// Vercel Serverless Function - Form Submission Handler
// Handles waitlist signups autonomously

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse form data
    const { email, use_case, expected_volume } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email required' });
    }

    // Create submission object
    const submission = {
      timestamp: new Date().toISOString(),
      email: email.trim().toLowerCase(),
      useCase: use_case || 'Not provided',
      expectedVolume: expected_volume || 'Not provided',
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      userAgent: req.headers['user-agent']
    };

    // Log to Vercel logs (viewable in dashboard)
    console.log('📧 NEW SIGNUP:', JSON.stringify(submission, null, 2));

    // TODO: Send to your email (configure in environment variables)
    // const emailSent = await sendEmail(submission);

    // Count total signups (logged for metrics tracking)
    console.log('✅ Signup recorded successfully');

    // Redirect to thank you page
    return res.redirect(303, '/thanks.html');

  } catch (error) {
    console.error('❌ Error processing submission:', error);
    return res.status(500).json({
      error: 'Failed to process submission',
      message: error.message
    });
  }
}

// Optional: Email notification function
// async function sendEmail(submission) {
//   // Integrate with SendGrid, Resend, or similar
//   // Example with Resend (free tier: 100 emails/day)
//   //
//   // import { Resend } from 'resend';
//   // const resend = new Resend(process.env.RESEND_API_KEY);
//   //
//   // await resend.emails.send({
//   //   from: 'Screenshot API <noreply@your-domain.com>',
//   //   to: 'your@email.com',
//   //   subject: 'New Waitlist Signup',
//   //   html: `
//   //     <h2>New Signup</h2>
//   //     <p><strong>Email:</strong> ${submission.email}</p>
//   //     <p><strong>Use Case:</strong> ${submission.useCase}</p>
//   //     <p><strong>Volume:</strong> ${submission.expectedVolume}</p>
//   //     <p><strong>Time:</strong> ${submission.timestamp}</p>
//   //   `
//   // });
// }
