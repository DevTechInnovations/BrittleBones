import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(
  cors({
    origin: [
      "https://brittlebones.co.za",
      "https://brittlebones.devtechinnovations.co.za",
      "http://localhost:8080",
    ],
    methods: ["GET", "POST"],
  })
);

// Parse JSON bodies
app.use(express.json());

// Health check
app.get("/", (req, res) => res.send("Server is running!"));


// EMAIL ROUTE
app.post("/send-Form-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_ADMIN_HOST,
      port: Number(process.env.SMTP_ADMIN_PORT) || 587,
      secure: process.env.SMTP_ADMIN_PORT == 465,
      auth: {
        user: process.env.SMTP_ADMIN_USER,
        pass: process.env.SMTP_ADMIN_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    // Email to admin
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_ADMIN_USER}>`,
      to: process.env.ADMIN_RECEIVER_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `<h2>New Contact Submission</h2>
             <p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Subject:</b> ${subject}</p>
             <p><b>Message:</b> ${message}</p>`,
    });

    // Email to user
    await transporter.sendMail({
      from: `"Brittle Bones" <${process.env.SMTP_ADMIN_USER}>`,
      to: email,
      subject: "We've received your message!",
      html: `<h2>Hi ${name},</h2>
             <p>Thank you for contacting us. We’ll get back to you shortly.</p>
             <p>Regards,<br/>Brittle Bones SA</p>
             <a href="https://brittlebones-sa.org.za/"><img src="https://iili.io/KID11bj.png" alt="Brittle Bones Logo" /></a>`,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error("Email Error:", err);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Volunteer Signup Route
app.post("/volunteer-signup", async (req, res) => {
  const { name, email, phone, role, availability, message } = req.body;

  if (!name || !email || !phone || !role || !availability) {
    return res.status(400).json({ success: false, message: "All required fields must be filled." });
  }

  try {
    // Setup transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_ADMIN_HOST,
      port: Number(process.env.SMTP_ADMIN_PORT) || 587,
      secure: process.env.SMTP_ADMIN_PORT == 465,
      auth: {
        user: process.env.SMTP_ADMIN_USER,
        pass: process.env.SMTP_ADMIN_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    // Email to admin
    await transporter.sendMail({
      from: `"Volunteer Form" <${process.env.SMTP_ADMIN_USER}>`,
      to: process.env.ADMIN_RECEIVER_EMAIL,
      subject: `New Volunteer Signup: ${name}`,
      html: `
        <h2>New Volunteer Signup</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Role:</b> ${role}</p>
        <p><b>Availability:</b> ${availability}</p>
        <p><b>Message:</b> ${message || "N/A"}</p>
      `,
    });

    // Confirmation email to volunteer
    await transporter.sendMail({
      from: `"Brittle Bones" <${process.env.SMTP_ADMIN_USER}>`,
      to: email,
      subject: "Volunteer Signup Confirmation",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for signing up to volunteer with us as a <b>${role}</b>.</p>
        <p>We’ve received your application and will contact you soon.</p>
        <p>Best regards,<br/>Brittle Bones SA Team</p>
        <a href="https://brittlebones-sa.org.za/"><img src="https://iili.io/KID11bj.png" alt="Brittle Bones Logo" /></a>
      `,
    });

    return res.status(200).json({ success: true, message: "Volunteer form submitted successfully!" });
  } catch (err) {
    console.error("Volunteer Email Error:", err);
    return res.status(500).json({ success: false, message: "Failed to send volunteer form." });
  }
});

// app.post("/item-donation", async (req, res) => {

//   const { name, email, contact, itemType, description, deliveryMode, deliveryTime } = req.body;

//   if (!name || !email || !contact || !itemType || !description) {
//     return res.status(400).json({ success: false, message: "All fields are required." });
//   }

//   // Only require delivery info for certain donation types
//   const deliveryRequiredTypes = ["medical", "educational", "care"];
//   if (deliveryRequiredTypes.includes(itemType)) {
//     if (!deliveryMode || !deliveryTime) {
//       return res.status(400).json({ 
//         success: false, 
//         message: "Delivery mode and time are required for this type of donation." 
//       });
//     }
//   }

//   try {
//     // Setup transporter
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_ADMIN_HOST,
//       port: Number(process.env.SMTP_ADMIN_PORT) || 587,
//       secure: process.env.SMTP_ADMIN_PORT == 465,
//       auth: {
//         user: process.env.SMTP_ADMIN_USER,
//         pass: process.env.SMTP_ADMIN_PASS,
//       },
//       tls: { rejectUnauthorized: false },
//     });

//     // Email to admin
//     await transporter.sendMail({
//       from: `"Item Donation" <${process.env.SMTP_ADMIN_USER}>`,
//       to: process.env.ADMIN_RECEIVER_EMAIL,
//       subject: `New Item Donation from ${name}`,
//       html: `
//         <h2>New Item Donation Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Contact:</strong> ${contact}</p>
//         <p><strong>Donation Type:</strong> ${itemType}</p>
//         ${deliveryRequiredTypes.includes(itemType) ? `<p><strong>Delivery Mode:</strong> ${deliveryMode}</p>
//         <p><strong>Preferred Delivery Time:</strong> ${deliveryTime}</p>` : ''}
//         <p><strong>Description:</strong> ${description}</p>
//       `,
//     });

//     // Confirmation email to volunteer
//     await transporter.sendMail({
//       from: `"Brittle Bones" <${process.env.SMTP_ADMIN_USER}>`,
//       to: email,
//       subject: "Volunteer Signup Confirmation",
//       html: `
//         <h2>Hi ${name},</h2>
//         <p>Thank you for your donation of <b>${itemType}</b>.</p>
//         <p>We’ve received your donation request and will contact you soon.</p>
//         <p>Best regards,<br/>Brittle Bones SA Team</p>
//         <a href="https://brittlebones-sa.org.za/"><img src="https://iili.io/KID11bj.png" alt="Brittle Bones Logo" /></a>
//       `,
//     });

//     res.json({ success: true, message: "Donation email sent." });
//   } catch (error) {
//     console.error("Email error:", error);
//     res.status(500).json({ success: false, message: "Failed to send email." });
//   }
// });



// PAYFAST ROUTE

app.post("/item-donation", async (req, res) => {
  const { name, email, contact, itemType, description, deliveryMode, deliveryTime } = req.body;

  if (!name || !email || !contact || !itemType || !description) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  const deliveryRequiredTypes = ["medical", "educational", "care"];
  if (deliveryRequiredTypes.includes(itemType)) {
    if (!deliveryMode || !deliveryTime) {
      return res.status(400).json({ 
        success: false, 
        message: "Delivery mode and time are required for this type of donation." 
      });
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_ADMIN_HOST,
      port: Number(process.env.SMTP_ADMIN_PORT) || 587,
      secure: process.env.SMTP_ADMIN_PORT == 465,
      auth: {
        user: process.env.SMTP_ADMIN_USER,
        pass: process.env.SMTP_ADMIN_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    // HTML template for admin email
    const adminEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px; background-color: #fdfdfd;">
        <h2 style="color: #2c3e50; border-bottom: 2px solid #4f46e5; padding-bottom: 5px;">New Item Donation Submission</h2>
        <p><strong style="color:#4f46e5;">Name:</strong> ${name}</p>
        <p><strong style="color:#4f46e5;">Email:</strong> ${email}</p>
        <p><strong style="color:#4f46e5;">Contact:</strong> ${contact}</p>
        <p><strong style="color:#4f46e5;">Donation Type:</strong> ${itemType}</p>
        ${deliveryRequiredTypes.includes(itemType) ? `
          <p><strong style="color:#4f46e5;">Delivery Mode:</strong> ${deliveryMode}</p>
          <p><strong style="color:#4f46e5;">Preferred Delivery Time:</strong> ${deliveryTime}</p>
        ` : ''}
        <p><strong style="color:#4f46e5;">Description:</strong></p>
        <p style="padding:10px; background-color:#f0f4ff; border-radius:5px;">${description}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Item Donation" <${process.env.SMTP_ADMIN_USER}>`,
      to: process.env.ADMIN_RECEIVER_EMAIL,
      subject: `New Item Donation from ${name}`,
      html: adminEmailHTML,
    });

    // HTML template for volunteer email
    const volunteerEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px; background-color: #fdfdfd;">
        <h2 style="color: #2c3e50; border-bottom: 2px solid #4f46e5; padding-bottom: 5px;">Thank You for Your Donation!</h2>
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thank you for your generous donation of <strong style="color:#4f46e5;">${itemType}</strong>.</p>
        ${deliveryRequiredTypes.includes(itemType) ? `
          <p><strong>Delivery Mode:</strong> ${deliveryMode}</p>
          <p><strong>Preferred Time:</strong> ${deliveryTime}</p>
        ` : ''}
        <p>We have received your donation request and will contact you soon.</p>
        <p>Best regards,<br/>Brittle Bones SA Team</p>
        <div style="text-align:center; margin-top:20px;">
          <a href="https://brittlebones-sa.org.za/">
            <img src="https://iili.io/KID11bj.png" alt="Brittle Bones Logo" style="width:150px;"/>
          </a>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Brittle Bones" <${process.env.SMTP_ADMIN_USER}>`,
      to: email,
      subject: "Volunteer Signup Confirmation",
      html: volunteerEmailHTML,
    });

    res.json({ success: true, message: "Donation email sent." });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});



const PAYFAST_URL = "https://www.payfast.co.za/eng/process";

app.post("/donate", (req, res) => {
  try {
    const { amount, donorName, donorEmail, isRecurring } = req.body;

    if (!amount || !donorName || !donorEmail) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const paymentData = {
      merchant_id: process.env.PAYFAST_MERCHANT_ID,
      merchant_key: process.env.PAYFAST_MERCHANT_KEY,
      return_url: process.env.PAYFAST_RETURN_URL,
      cancel_url: process.env.PAYFAST_CANCEL_URL,
      notify_url: process.env.PAYFAST_NOTIFY_URL,
      amount: parseFloat(amount).toFixed(2),
      item_name: isRecurring ? "Monthly Donation" : "Once-off Donation",
      name_first: donorName,
      email_address: donorEmail,
    };

    if (isRecurring) {
      paymentData.subscription_type = 1;
      paymentData.billing_date = new Date().toISOString().split("T")[0];
      paymentData.recurring_amount = paymentData.amount;
      paymentData.frequency = 3; // monthly
      paymentData.cycles = 0; // indefinite
    }

    // Build query string
    const queryString = Object.entries(paymentData)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    const redirectUrl = `${PAYFAST_URL}?${queryString}`;

    res.json({ url: redirectUrl });
  } catch (err) {
    console.error("PayFast Error:", err);
    res.status(500).json({ error: "Failed to create PayFast URL" });
  }
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
