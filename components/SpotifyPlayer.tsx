"use client";
import { useInView } from "@/hooks/useInView";

export default function SpotifyPlayer() {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4 text-center">
        Listen on Spotify
      </p>
      <iframe
        src="https://open.spotify.com/embed/artist/2eXNn1aARmG8QeU3x2VPAJ?utm_source=generator&theme=0"
        width="100%"
        height="500"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-2xl border border-zinc-800"
      />
    </div>
  );
}
