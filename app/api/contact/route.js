// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { fullName, email, company, phone, service, budget, details } = data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    // If credentials are missing or invalid, fall back to Ethereal for dev
    let usedTransport = transporter;
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      const testAccount = await nodemailer.createTestAccount();
      usedTransport = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const message = {
      from: `"CSA Technologies CO" <${process.env.EMAIL_USER}>`,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      subject: `New Contact Form Submission – ${service || 'General Inquiry'}`,
      replyTo: email,
      html: `<h2>New Contact Form Submission</h2>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Company:</strong> ${company}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Service:</strong> ${service}</li>
          <li><strong>Budget:</strong> ${budget}</li>
          <li><strong>Details:</strong><br/>${details.replace(/\n/g, '<br/>')}</li>
        </ul>`,
    };

    await transporter.sendMail(message);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
