import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: "Method Not Allowed", success: false });
  }

  const { name, email, description } = req.body;

  // Replace the following with your email configuration
  const transporter = nodemailer.createTransport({
    service: "Gmail", // e.g., Gmail, Outlook, etc.
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.FROM_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL, // Replace with your email address
    subject: `New Query from ${name}`,
    text: `Hi, My name is ${name}\nMy email: ${email}\n${description}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res
      .status(200)
      .json({ message: "Email sent successfully!", success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      message: "An error occurred while sending the email.",
      success: false,
    });
  }
}
