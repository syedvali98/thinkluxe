import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const city = formData.get("city") as string;
    const timeline = formData.get("timeline") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;
    const file = formData.get("file") as File | null;

    // Format timeline for display
    const timelineLabels: Record<string, string> = {
      "asap": "ASAP",
      "1-3-months": "1-3 Months",
      "3-6-months": "3-6 Months",
      "6-plus-months": "6+ Months",
      "exploring": "Just Exploring",
      "other": "Other",
    };

    // Format service for display
    const serviceLabels: Record<string, string> = {
      "kitchen": "Custom Kitchen & Millwork",
      "aluminum": "Aluminum Doors & Windows",
      "both": "Both Services",
      "other": "Other",
    };

    // Prepare attachments if file exists
    const attachments: { filename: string; content: Buffer }[] = [];
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      attachments.push({
        filename: file.name,
        content: Buffer.from(bytes),
      });
    }

    // Send email to ThinkLuxe
    await resend.emails.send({
      from: "ThinkLuxe Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "info@thinkluxe.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C9A962; border-bottom: 2px solid #C9A962; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #C9A962;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="tel:${phone}" style="color: #C9A962;">${phone}</a>
              </td>
            </tr>
            ` : ""}
            ${city ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">City/Area:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${city}</td>
            </tr>
            ` : ""}
            ${timeline ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Timeline:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${timelineLabels[timeline] || timeline}</td>
            </tr>
            ` : ""}
            ${service ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Service:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${serviceLabels[service] || service}</td>
            </tr>
            ` : ""}
          </table>

          <div style="margin-top: 20px;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
          </div>

          ${file && file.size > 0 ? `
          <div style="margin-top: 20px;">
            <p style="color: #666; font-size: 14px;">
              <strong>Attachment:</strong> ${file.name} (${(file.size / 1024).toFixed(1)} KB)
            </p>
          </div>
          ` : ""}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 12px;">
            This email was sent from the ThinkLuxe website contact form.
          </div>
        </div>
      `,
      attachments,
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: "ThinkLuxe <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for contacting ThinkLuxe",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C9A962;">Thank You, ${name}!</h2>

          <p style="color: #333; line-height: 1.6;">
            We have received your message and appreciate you reaching out to us.
            Our team will review your inquiry and get back to you within 1-2 business days.
          </p>

          <p style="color: #333; line-height: 1.6;">
            If you have any urgent questions, feel free to call us or visit our showroom.
          </p>

          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Address:</strong><br/>
            Unit 15 - 80 Clementine Dr, Brampton, ON, L6Y 0L8, Canada</p>
            <p style="margin: 0;"><strong>Hours:</strong><br/>
            Mon - Fri: 10am - 5pm (By Appointment)<br/>
            Weekends: By Appointment Only</p>
          </div>

          <p style="color: #C9A962; font-style: italic;">
            — The ThinkLuxe Team
          </p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 12px;">
            ThinkLuxe | Luxury Tailored to the Elite
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
