import express from "express";
import { Resend } from "resend";

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/contact", async (req, res) => {
  const { firstname, lastname, email, phone, service, message } = req.body;

  if (!firstname || !lastname || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["mukeshcse94@gmail.com"],
      replyTo: email,
      subject: `New Portfolio Message ${service ? `(${service})` : ""}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${firstname} ${lastname}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Service:</b> ${service || "Not selected"}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("RESEND ERROR:", err);
    res.status(500).json({ error: "Email sending failed" });
  }
});

export default router;
