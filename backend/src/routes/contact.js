import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { firstname, lastname, email, phone, service, message } = req.body;

  // Required validation
  if (!firstname || !lastname || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // 🔍 DEBUG (can remove later)
    console.log("MAIL_USER:", process.env.MAIL_USER);
    console.log("MAIL_PASS EXISTS:", !!process.env.MAIL_PASS);

    // ✅ FIXED SMTP CONFIG (IMPORTANT)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,          // 🔑 CHANGED
      secure: true,       // 🔑 CHANGED (required on cloud)
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    // 🔑 VERIFY SMTP BEFORE SENDING
    await transporter.verify();
    console.log("SMTP VERIFIED");

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`, // 🔑 ADDED
      to: process.env.MAIL_USER,                               // 🔑 CHANGED
      replyTo: email,                                          // 🔑 ADDED
      subject: `New Portfolio Message${service ? ` (${service})` : ""}`,
      html: `
        <h3>New Contact Message</h3>
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
    res.status(500).json({ error: err.message });
  }
});

export default router;
