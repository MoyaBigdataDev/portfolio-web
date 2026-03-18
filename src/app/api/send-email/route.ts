import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, message, email } = await request.json();

    if (!name || !message) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nuevo contacto desde portfolio: ${name}`,
      text: `
Nuevo mensaje desde el portfolio de Anderson Moya:

Nombre: ${name}
Email: ${email || 'No proporcionado'}
Mensaje:
${message}
      `,
      html: `
<h2>Nuevo mensaje desde el portfolio</h2>
<p><strong>Nombre:</strong> ${name}</p>
<p><strong>Email:</strong> ${email || 'No proporcionado'}</p>
<p><strong>Mensaje:</strong></p>
<p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
