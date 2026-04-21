"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Booking() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("success"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  const inputClass =
    "w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] transition-colors text-sm";

  if (status === "success") {
    return (
      <section id="booking" className="py-28 px-6 border-t border-zinc-900">
        <div className="max-w-xl mx-auto text-center bg-zinc-900 border border-[#D4AF37]/30 rounded-2xl p-16">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="text-2xl font-black text-white mb-3">Request Received</h3>
          <p className="text-zinc-400">We&apos;ll get back to you within 48 hours to confirm the booking.</p>
          <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-[#D4AF37] hover:underline">
            Send another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-28 px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4">
            Bookings
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-6 leading-tight">
            Book<br />Notshi
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Available for concerts, festivals, corporate events, radio, and
            brand collaborations. Fill in the form and the Big Deal Entertainment
            team will get back to you within 48 hours.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { icon: "🎤", label: "Live Performances" },
              { icon: "🎙", label: "Radio & Podcast Features" },
              { icon: "🤝", label: "Brand Collaborations" },
              { icon: "🎬", label: "Music Video Appearances" },
            ].map((i) => (
              <div key={i.label} className="flex items-center gap-3 text-zinc-400 text-sm">
                <span className="text-xl">{i.icon}</span>
                {i.label}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Name *</label>
              <input type="text" name="name" required placeholder="Your name" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Email *</label>
              <input type="email" name="email" required placeholder="your@email.com" className={inputClass} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Phone</label>
            <input type="tel" name="phone" placeholder="+27 82 000 0000" className={inputClass} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Event Type *</label>
            <select name="event_type" required defaultValue="" className={inputClass}>
              <option value="" disabled>Select event type...</option>
              <option value="concert">Concert / Show</option>
              <option value="festival">Festival</option>
              <option value="corporate">Corporate Event</option>
              <option value="club">Club Night</option>
              <option value="radio">Radio / Podcast</option>
              <option value="brand">Brand Collaboration</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Event Date</label>
              <input type="date" name="event_date" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Location</label>
              <input type="text" name="location" placeholder="City, Venue" className={inputClass} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Message</label>
            <textarea name="message" rows={4} placeholder="Tell us more about your event..." className={`${inputClass} resize-none`} />
          </div>

          {status === "error" && (
            <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 rounded-xl bg-[#D4AF37] hover:bg-[#c9a42e] disabled:opacity-50 text-black font-black text-sm tracking-widest uppercase transition-colors"
          >
            {status === "loading" ? "Sending..." : "Submit Booking Request"}
          </button>
        </form>
      </div>
    </section>
  );
}
