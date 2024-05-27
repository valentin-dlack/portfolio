'use server';
import { render } from '@react-email/components';
import { ContactEmail } from '@/components/emails/contact-template';
import nodemailer from 'nodemailer';

import { z } from 'zod';

const transporter = nodemailer.createTransport({
  host: 'ssl0.ovh.net',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.'
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.'
    }),
  email: z
    .string({
      required_error: 'Please enter a valid email.'
    })
    .email(),
  message: z.string().max(380).min(4)
});

const FROM_EMAIL = 'contact@vdautrement.fr';
const TO_EMAIL = process.env.TO_EMAIL;

export async function contactSubmit(prevState: any, formData: FormData) {
  try {
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Please check your entries and try again.'
      };
    }

    const { name, email, message } = validatedFields.data;

    const info = await transporter.sendMail(
      {
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `Message from ${name} on Portfolio`,
        html: render(ContactEmail({ name, email, message }))
      },
      (error) => {
        if (error) {
          return {
            message: 'Oops! Something went wrong. Please try again later.'
          };
        }
      }
    );

    return {
      message: 'Thank you for reaching out! Your message has been sent.'
    };
  } catch (error) {
    return {
      message: 'Oops! Something went wrong. Please try again later.'
    };
  }
}
