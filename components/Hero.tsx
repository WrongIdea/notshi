export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-transparent to-[#080808] pointer-events-none" />
      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="relative flex flex-col items-center gap-6">
        {/* Label */}
        <p className="animate-fade-in text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
          Big Deal Entertainment
        </p>

        {/* Artist name */}
        <h1 className="animate-fade-up delay-100 text-7xl sm:text-9xl font-black tracking-tight text-white uppercase leading-none">
          Notshi
        </h1>

        <p className="animate-fade-up delay-200 text-zinc-400 text-base sm:text-lg max-w-md leading-relaxed">
          Hip hop artist. Storyteller. Founder of Big Deal Entertainment.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="#music"
            className="px-8 py-3 rounded-full bg-[#D4AF37] hover:bg-[#c9a42e] text-black font-bold text-sm tracking-widest uppercase transition-colors"
          >
            Listen Now
          </a>
          <a
            href="#booking"
            className="px-8 py-3 rounded-full border border-zinc-600 hover:border-[#D4AF37] text-zinc-300 hover:text-[#D4AF37] font-bold text-sm tracking-widest uppercase transition-colors"
          >
            Book Notshi
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-zinc-600 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  );
}
