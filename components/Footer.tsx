const socials = [
  { label: "Instagram", href: "https://www.instagram.com/notshi_/" },
  { label: "Twitter / X", href: "https://x.com/Notshi_" },
  { label: "YouTube", href: "https://www.youtube.com/c/Notshi" },
  { label: "Facebook", href: "https://www.facebook.com/NotshiSA" },
  { label: "TikTok", href: "https://www.tiktok.com/@notshi_" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        <span className="font-black text-2xl tracking-widest text-white uppercase">
          Notshi
        </span>
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
          Big Deal Entertainment
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 hover:text-[#D4AF37] transition-colors uppercase tracking-widest font-medium"
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="text-zinc-700 text-xs">
          © {new Date().getFullYear()} Big Deal Entertainment. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
