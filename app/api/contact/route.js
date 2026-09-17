import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { fullName, email, company, phone, service, budget, details } = data;

    // Validate required fields
    if (!fullName || !email || !details) {
      return new Response(
        JSON.stringify({ error: 'Please provide full name, email, and project details.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const recipientEmail = 'vandanarajpoot69@gmail.com';
    const emailUser = process.env.EMAIL_USER || 'vandanarajpoot69@gmail.com';
    // Remove whitespace from Google App Passwords if pasted with spaces
    const emailPass = (process.env.EMAIL_PASS || '').replace(/\s+/g, '');

    if (!emailPass) {
      console.error('EMAIL_PASS is missing in environment variables.');
      return new Response(
        JSON.stringify({
          error:
            'Server email configuration is incomplete (EMAIL_PASS is missing). Please set a Google App Password in .env.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Configure Nodemailer transporter
    const transporterConfig =
      process.env.SMTP_HOST && process.env.SMTP_HOST !== 'smtp.gmail.com'
        ? {
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
              user: emailUser,
              pass: emailPass,
            },
          }
        : {
            service: 'gmail',
            auth: {
              user: emailUser,
              pass: emailPass,
            },
          };

    const transporter = nodemailer.createTransport(transporterConfig);

    const submissionTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const sanitizedDetails = (details || '').replace(/\n/g, '<br/>');

    // Rich HTML email template with CSA Technologies branding
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #0b1221; padding: 28px 32px; border-bottom: 3px solid #2563eb;">
              <table role="presentation" width="100%">
                <tr>
                  <td>
                    <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">
                      CSA Technologies CO
                    </h1>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">
                      New Contact Form Inquiry
                    </p>
                  </td>
                  <td align="right">
                    <span style="background-color: rgba(37, 99, 235, 0.2); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; text-transform: uppercase;">
                      Website Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.5; color: #334155;">
                You received a new message from the contact form on your website. Here are the client's details:
              </p>

              <!-- Client Details Table -->
              <table role="presentation" width="100%" style="border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 14px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: 600; font-size: 13px; color: #64748b; width: 35%;">Client Name</td>
                  <td style="padding: 10px 14px; background-color: #ffffff; border: 1px solid #e2e8f0; font-weight: 600; font-size: 14px; color: #0f172a;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: 600; font-size: 13px; color: #64748b;">Email</td>
                  <td style="padding: 10px 14px; background-color: #ffffff; border: 1px solid #e2e8f0; font-size: 14px; color: #2563eb;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: 600; font-size: 13px; color: #64748b;">Phone</td>
                  <td style="padding: 10px 14px; background-color: #ffffff; border: 1px solid #e2e8f0; font-size: 14px; color: #0f172a;">
                    ${phone ? `<a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a>` : '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: 600; font-size: 13px; color: #64748b;">Company</td>
                  <td style="padding: 10px 14px; background-color: #ffffff; border: 1px solid #e2e8f0; font-size: 14px; color: #0f172a;">
                    ${company || '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: 600; font-size: 13px; color: #64748b;">Service Needed</td>
                  <td style="padding: 10px 14px; background-color: #ffffff; border: 1px solid #e2e8f0; font-size: 14px; color: #0f172a;">
                    <span style="display: inline-block; background-color: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: 500; font-size: 12px;">
                      ${service || 'General Inquiry'}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: 600; font-size: 13px; color: #64748b;">Estimated Budget</td>
                  <td style="padding: 10px 14px; background-color: #ffffff; border: 1px solid #e2e8f0; font-size: 14px; color: #0f172a; font-weight: 500;">
                    ${budget || 'Not specified'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: 600; font-size: 13px; color: #64748b;">Submitted On</td>
                  <td style="padding: 10px 14px; background-color: #ffffff; border: 1px solid #e2e8f0; font-size: 13px; color: #64748b;">
                    ${submissionTime}
                  </td>
                </tr>
              </table>

              <!-- Message Details -->
              <h3 style="margin: 24px 0 10px 0; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">
                Project Details / Message:
              </h3>
              <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #1e293b; margin-bottom: 28px;">
                ${sanitizedDetails}
              </div>

              <!-- Action button -->
              <table role="presentation" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="border-radius: 6px; background-color: #2563eb;">
                    <a href="mailto:${email}?subject=Re:%20Your%20Inquiry%20to%20CSA%20Technologies" style="font-size: 14px; font-weight: 600; color: #ffffff; text-decoration: none; padding: 12px 24px; display: inline-block;">
                      Reply to ${fullName} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 18px 32px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                This notification was automatically sent from the <strong>CSA Technologies CO</strong> contact form.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    // Plain text fallback
    const textContent = `New Contact Form Submission - CSA Technologies CO

Client Details:
- Name: ${fullName}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Company: ${company || 'Not provided'}
- Service: ${service || 'General Inquiry'}
- Budget: ${budget || 'Not specified'}
- Submitted: ${submissionTime}

Project Details:
${details}

Reply to client: ${email}
`;

    await transporter.sendMail({
      from: `"CSA Technologies Website" <${emailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Lead: ${fullName} - ${service || 'General Inquiry'}`,
      text: textContent,
      html: htmlContent,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact API error:', error);

    let clientMessage = 'Failed to send inquiry. Please try again.';

    // Check for Google / SMTP specific errors
    if (
      error.code === 'EAUTH' ||
      (error.message &&
        (error.message.includes('Application-specific password required') ||
          error.message.includes('Username and Password not accepted') ||
          error.message.includes('BadCredentials')))
    ) {
      clientMessage =
        'Gmail authentication error: Google requires a 16-character App Password. Please update EMAIL_PASS in your .env file.';
    }

    return new Response(
      JSON.stringify({
        error: clientMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
