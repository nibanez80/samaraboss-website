import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

const NOTIFY_EMAIL = "samaraibanez@gmail.com";
const FROM_ADDRESS = "Samara Boss Coaching <onboarding@resend.dev>";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, phone, preferredDate, preferredTime, timezone, goals } =
      await req.json();

    if (!name || !email || !preferredDate || !preferredTime) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Save the request first. This is the part that must not fail silently,
    // so we save before attempting to send any email.
    const { error: insertError } = await supabase.from("appointment_requests").insert({
      name,
      email,
      phone: phone || null,
      preferred_date: preferredDate,
      preferred_time: preferredTime,
      timezone: timezone || null,
      goals: goals || null,
    });

    if (insertError) throw insertError;

    // Now try to send a notification email. If this fails, we still tell the
    // customer their request went through, since it genuinely did — we just
    // log the email failure for Samara to notice in the function logs.
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      try {
        const emailHtml = `
          <h2>New Booking Request</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          <p><strong>Preferred Date:</strong> ${escapeHtml(preferredDate)}</p>
          <p><strong>Preferred Time:</strong> ${escapeHtml(preferredTime)}</p>
          <p><strong>Timezone:</strong> ${escapeHtml(timezone || "Not specified")}</p>
          <p><strong>Goals / Notes:</strong><br/>${escapeHtml(goals || "None provided")}</p>
        `;

        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: FROM_ADDRESS,
            to: [NOTIFY_EMAIL],
            reply_to: email,
            subject: `New booking request from ${name}`,
            html: emailHtml,
          }),
        });

        if (!emailRes.ok) {
          const errText = await emailRes.text();
          console.error("Resend API error:", emailRes.status, errText);
        }
      } catch (emailErr) {
        console.error("Failed to send notification email:", emailErr);
      }
    } else {
      console.warn("RESEND_API_KEY not set — skipping email notification.");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("send-appointment-request error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Something went wrong. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
