import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS - allow requests from your frontend domains + local testing
app.use(cors({
  origin: [
    "https://brittlebones.co.za",
    "https://brittlebones.devtechinnovations.co.za",
    "http://localhost:8080", // local frontend testing
  ],
  methods: ["GET", "POST"],
}));

// Parse JSON bodies
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// ✅ EMAIL ROUTE - for contact / checkout form
app.post("/send-Form-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_ADMIN_HOST,
      port: Number(process.env.SMTP_ADMIN_PORT) || 587,
      secure: process.env.SMTP_ADMIN_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_ADMIN_USER,
        pass: process.env.SMTP_ADMIN_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Send email to admin
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_ADMIN_USER}>`,
      to: process.env.ADMIN_RECEIVER_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // Optional: confirmation email to user
    await transporter.sendMail({
      from: `"Brittle Bones" <${process.env.SMTP_ADMIN_USER}>`,
      to: email,
      subject: "We've received your message!",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for contacting us. We have received your message and will get back to you shortly.</p>
        <p>Regards,<br/>Brittle Bones SA</p>
        <a href="https://brittlebones-sa.org.za/"><img src="https://iili.io/KID11bj.png" alt="KID11bj.png" border="0" /></a>
      `,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    return res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
