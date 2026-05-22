import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENTS = [
  "Info@himaproductsceylon.com",
  "Purchasing@himaproductsceylon.com",
];

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Hima Products Website" <${process.env.SMTP_USER}>`,
    to: RECIPIENTS.join(", "),
    replyTo: email,
    subject: `New Enquiry / Order from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px;">
          New Enquiry from Hima Products Website
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #374151;">Name</td>
            <td style="padding: 8px 0; color: #1a1a1a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email / Mobile</td>
            <td style="padding: 8px 0; color: #1a1a1a;">${email}</td>
          </tr>
        </table>
        <div style="margin-top: 16px;">
          <p style="font-weight: bold; color: #374151; margin-bottom: 6px;">Item List / Message</p>
          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px; white-space: pre-line; color: #1a1a1a;">
            ${message}
          </div>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
          Sent from himaproducts.lk contact form
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
