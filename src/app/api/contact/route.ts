import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validatePayload(payload: ContactPayload) {
  const errors: string[] = [];

  if (!payload.name || !payload.name.trim()) errors.push("Name is required.");
  if (!payload.email || !payload.email.trim()) {
    errors.push("Email is required.");
  } else if (!EMAIL_REGEX.test(payload.email)) {
    errors.push("Email is invalid.");
  }
  if (!payload.subject || !payload.subject.trim()) errors.push("Subject is required.");
  if (!payload.message || payload.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters.");
  }

  return errors;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const errors = validatePayload(payload);
  if (errors.length > 0) {
    return NextResponse.json(
      { success: false, message: errors.join(" ") },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = payload as Required<ContactPayload>;

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_RECEIVER_EMAIL } =
    process.env;

  // If SMTP isn't configured yet, don't crash the deploy — log the
  // message server-side and let the visitor know it was received.
  // Replace the values in .env.local (see .env.example) to enable real emails.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_RECEIVER_EMAIL) {
    console.log("[contact] SMTP not configured. Message received:", {
      name,
      email,
      subject,
      message,
    });
    return NextResponse.json(
      {
        success: true,
        message:
          "Message received! (Email sending isn't configured yet — see .env.example.)",
      },
      { status: 200 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 465),
      secure: SMTP_SECURE !== "false",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${SMTP_USER}>`,
      to: CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[contact] Failed to send email:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
