import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image placeholder */}
        <div className="relative">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/gallery/NOTSHI1.jpg"
              alt="Notshi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Gold accent bar */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/30" />
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20" />
        </div>

        {/* Text */}
        <div>
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4">
            The Artist
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-6 leading-tight">
            Who Is<br />Notshi?
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Notshi is a South African hip hop artist and the founder of
            <span className="text-[#D4AF37] font-semibold"> Big Deal Entertainment</span>.
            Known for raw lyricism and an authentic street sound, Notshi brings
            stories from the ground up — music that speaks truth and moves crowds.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-8">
            With a vision to build one of SA&apos;s most respected independent
            labels, Big Deal Entertainment is more than music — it&apos;s a movement.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Hip Hop", "SA Rap", "Big Deal Entertainment", "Independent"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-zinc-700 text-xs text-zinc-400 font-medium tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
