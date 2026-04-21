import Image from "next/image";

const photos = [
  { src: "/gallery/NOTSHI1.jpg", alt: "Notshi" },
  { src: "/gallery/NotshiInsta.jpeg", alt: "Notshi on Instagram" },
  { src: "/gallery/notshispotify.jpeg", alt: "Notshi on Spotify" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4">
            Visual
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* First image — large */}
          <div className="sm:col-span-2 relative aspect-video sm:aspect-auto sm:h-96 rounded-2xl overflow-hidden">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 66vw"
            />
          </div>

          {/* Right column — two stacked */}
          <div className="flex flex-col gap-3">
            {photos.slice(1).map((p) => (
              <div key={p.src} className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
