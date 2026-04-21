const platforms = [
  {
    name: "Spotify",
    icon: "🎵",
    color: "hover:border-[#1DB954] hover:bg-[#1DB954]/10 hover:text-[#1DB954]",
    url: "https://open.spotify.com/artist/2eXNn1aARmG8QeU3x2VPAJ",
  },
  {
    name: "Apple Music",
    icon: "🎶",
    color: "hover:border-[#FC3C44] hover:bg-[#FC3C44]/10 hover:text-[#FC3C44]",
    url: "https://music.apple.com/za/artist/notshi/421858306",
  },
  {
    name: "YouTube Music",
    icon: "▶",
    color: "hover:border-[#FF0000] hover:bg-[#FF0000]/10 hover:text-[#FF0000]",
    url: "https://www.youtube.com/c/Notshi",
  },
  {
    name: "SoundCloud",
    icon: "☁",
    color: "hover:border-[#FF5500] hover:bg-[#FF5500]/10 hover:text-[#FF5500]",
    url: "https://soundcloud.com/notshikillerbee",
  },
];

export default function Music() {
  return (
    <section id="music" className="py-28 px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4">
            Stream
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            The Music
          </h2>
        </div>

        {/* Streaming platforms */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-3 py-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 font-semibold text-sm transition-all duration-200 ${p.color}`}
            >
              <span className="text-3xl">{p.icon}</span>
              {p.name}
            </a>
          ))}
        </div>

        {/* Upcoming album */}
        <div className="bg-zinc-900 border border-[#D4AF37]/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex-shrink-0 flex items-center justify-center">
            <span className="text-5xl">💿</span>
          </div>
          <div className="text-center sm:text-left flex-1">
            <p className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] mb-2">
              Upcoming Album
            </p>
            <h3 className="text-3xl font-black text-white mb-1">Modiegi</h3>
            <p className="text-zinc-500 text-sm mb-3">by Notshi · Big Deal Entertainment</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
                Dropping 29 May 2026
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              The highly anticipated debut album from Notshi. Follow on your preferred platform to be the first to hear it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
