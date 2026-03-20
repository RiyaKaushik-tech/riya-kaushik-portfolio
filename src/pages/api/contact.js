import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "method not allowed" });
  }

  const { name, email, mobile, reason, message } = req.body;
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "missing details" });
  }

  if (!emailUser || !emailPass) {
    return res.status(500).json({
      message: "Server email config missing. Set EMAIL_USER and EMAIL_PASS.",
    });
  }

  // smtp transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  try {
    await transporter.sendMail({
      // Gmail should use the authenticated mailbox as sender.
      from: `"Portfolio Contact" <${emailUser}>`,
      replyTo: `"${name}" <${email}>`,
      to: emailUser,
      subject: "New email from portfolio message",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mobile no.:</strong> ${mobile || "N/A"}</p>
             <p><strong>Reason:</strong> ${reason || "N/A"}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.log("Email send failed:", error?.message || error);
    return res.status(500).json({
      message: "Error sending email",
      detail: process.env.NODE_ENV === "development" ? error?.message : undefined,
    });
  }
}
