import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: data.email,
    to: process.env.EMAIL_USERNAME,
    subject: `New message from ${data.name}`,
    text: data.message,
  };
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 },
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'Failed to send email: ' + err.message || err },
      { status: 500 },
    );
  }
}
