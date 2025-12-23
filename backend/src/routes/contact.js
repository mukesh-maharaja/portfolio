import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/contact", async (req, res) => {
  console.log("CONTACT BODY:", req.body);

  const { firstname, lastname, email, phone, service, message } = req.body;

  // Required validation
  if (!firstname || !lastname || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    await transporter.sendMail({
      to: "mukeshcse94@gmail.com",
      subject: `New Portfolio Message${service ? ` (${service})` : ""}`,
      html: `
        <p><b>Name:</b> ${firstname} ${lastname}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "Not provided"}</p>
        <p><b>Service:</b> ${service || "Not selected"}</p>
        <p><b>Message:</b><br/>${message}</p>
      `
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    res.status(500).json({ error: "Email sending failed" });
  }
});

export default router;
