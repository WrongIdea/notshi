"use client";
import { useInView } from "@/hooks/useInView";

const stats = [
  { label: "Genre", value: "Hip Hop / SA Rap" },
  { label: "Label", value: "Big Deal Entertainment" },
  { label: "Based In", value: "South Africa" },
  { label: "Active Since", value: "2010s" },
];

const links = [
  { label: "Spotify", url: "https://open.spotify.com/artist/2eXNn1aARmG8QeU3x2VPAJ" },
  { label: "Apple Music", url: "https://music.apple.com/za/artist/notshi/421858306" },
  { label: "YouTube", url: "https://www.youtube.com/c/Notshi" },
  { label: "Instagram", url: "https://www.instagram.com/notshi_/" },
];

export default function PressKit() {
  const { ref, inView } = useInView();

  return (
    <section id="press" className="py-28 px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4">Media</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">Press Kit</h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Left — EPK card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-black text-white mb-1">Notshi EPK</h3>
              <p className="text-zinc-500 text-sm">Electronic Press Kit · Big Deal Entertainment</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-zinc-800/50 rounded-xl p-4">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{s.label}</p>
                  <p className="text-white font-bold text-sm">{s.value}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Official Links</p>
              <div className="flex flex-wrap gap-2">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full border border-zinc-700 text-xs text-zinc-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors font-medium"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#booking"
              className="mt-auto w-full py-3 rounded-xl bg-[#D4AF37] hover:bg-[#c9a42e] text-black font-black text-sm tracking-widest uppercase text-center transition-colors"
            >
              Contact for Press Enquiries
            </a>
          </div>

          {/* Right — Bio for press */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-6">
            <h3 className="text-lg font-black text-white">Official Bio</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Notshi is a South African hip hop artist and founder of Big Deal Entertainment.
              Known for his raw, authentic lyricism and commanding stage presence, Notshi has
              carved his own lane in the SA rap scene — delivering music that speaks to the
              streets while reaching global audiences.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm">
              His upcoming debut album <span className="text-white font-semibold">Modiegi</span>,
              set for release on 29 May 2026, marks a defining moment in his career — a
              deeply personal body of work that showcases his growth as both an artist and
              a storyteller.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Through Big Deal Entertainment, Notshi is building more than a music career —
              he is creating a platform for authentic African voices in hip hop.
            </p>
            <div className="mt-auto pt-4 border-t border-zinc-800">
              <p className="text-xs text-zinc-600 uppercase tracking-wider">Booking & Press Contact</p>
              <a href="#booking" className="text-[#D4AF37] text-sm hover:underline font-medium">
                Submit via booking form →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
