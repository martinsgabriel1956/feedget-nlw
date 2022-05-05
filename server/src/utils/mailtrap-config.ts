import nodemailer from 'nodemailer';

export const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b9d70233ea2a18",
    pass: "d1bd1134776beb"
  }
});