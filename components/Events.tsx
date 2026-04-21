"use client";
import { useInView } from "@/hooks/useInView";

const events = [
  {
    date: { day: "29", month: "May", year: "2026" },
    name: "Modiegi Album Launch",
    venue: "TBA",
    city: "South Africa",
    tickets: null,
    highlight: true,
  },
];

export default function Events() {
  const { ref, inView } = useInView();

  return (
    <section id="events" className="py-28 px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4">Live</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">Events</h2>
        </div>

        <div
          ref={ref}
          className={`flex flex-col gap-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {events.map((e, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-2xl border transition-colors ${
                e.highlight
                  ? "border-[#D4AF37]/40 bg-[#D4AF37]/5"
                  : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-600"
              }`}
            >
              {/* Date */}
              <div className="flex-shrink-0 w-16 text-center">
                <p className="text-3xl font-black text-white leading-none">{e.date.day}</p>
                <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">{e.date.month}</p>
                <p className="text-xs text-zinc-600">{e.date.year}</p>
              </div>

              <div className="w-px h-12 bg-zinc-800 hidden sm:block" />

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-white font-black text-lg">{e.name}</h3>
                  {e.highlight && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#D4AF37] text-black font-bold uppercase tracking-wider">
                      Album Launch
                    </span>
                  )}
                </div>
                <p className="text-zinc-400 text-sm">{e.venue} · {e.city}</p>
              </div>

              {/* Ticket button */}
              {e.tickets ? (
                <a
                  href={e.tickets}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#c9a42e] text-black font-bold text-xs tracking-widest uppercase transition-colors flex-shrink-0"
                >
                  Get Tickets
                </a>
              ) : (
                <span className="px-6 py-2.5 rounded-full border border-zinc-700 text-zinc-600 font-bold text-xs tracking-widest uppercase flex-shrink-0">
                  TBA
                </span>
              )}
            </div>
          ))}

          <p className="text-zinc-600 text-sm text-center mt-4">
            More dates being confirmed. Follow{" "}
            <a href="https://www.instagram.com/notshi_/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
              @notshi_
            </a>{" "}
            for announcements.
          </p>
        </div>
      </div>
    </section>
  );
}
