"use client";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const RELEASE = new Date("2026-05-29T00:00:00+02:00");

function getTimeLeft() {
  const diff = RELEASE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 flex-1">
      <div className="w-full aspect-square max-w-[80px] rounded-xl bg-black border border-[#D4AF37]/30 flex items-center justify-center">
        <span className="text-2xl sm:text-4xl font-black text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-zinc-500">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());
  const { ref, inView } = useInView();

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 px-4 bg-[#0d0d0d] border-y border-zinc-900">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-3">
          Upcoming Album
        </p>
        <h2 className="text-3xl sm:text-6xl font-black text-white uppercase tracking-tight mb-2">
          Modiegi
        </h2>
        <p className="text-zinc-500 text-xs sm:text-sm mb-8 tracking-widest uppercase">
          Dropping 29 May 2026
        </p>

        {/* Countdown grid */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
          <Unit value={time.days} label="Days" />
          <span className="text-xl sm:text-3xl font-black text-[#D4AF37] mb-5">:</span>
          <Unit value={time.hours} label="Hours" />
          <span className="text-xl sm:text-3xl font-black text-[#D4AF37] mb-5">:</span>
          <Unit value={time.minutes} label="Mins" />
          <span className="text-xl sm:text-3xl font-black text-[#D4AF37] mb-5">:</span>
          <Unit value={time.seconds} label="Secs" />
        </div>

        <p className="mt-8 text-zinc-500 text-xs sm:text-sm">
          Follow Notshi on{" "}
          <a
            href="https://open.spotify.com/artist/2eXNn1aARmG8QeU3x2VPAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1DB954] hover:underline"
          >
            Spotify
          </a>{" "}
          to be notified on release day.
        </p>
      </div>
    </section>
  );
}
