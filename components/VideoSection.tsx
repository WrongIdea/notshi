"use client";
import { useInView } from "@/hooks/useInView";

const videos = [
  { id: "7VynIoP527Y", title: "Notshi — Video 1" },
  { id: "C66_gE0fuOw", title: "Notshi — Video 2" },
  { id: "9bAPtAX7ysQ", title: "Notshi — Video 3" },
];

export default function VideoSection() {
  const { ref, inView } = useInView();

  return (
    <section id="videos" className="py-28 px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4">Watch</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">Latest Videos</h2>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Featured video — large */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 mb-4">
            <iframe
              src={`https://www.youtube.com/embed/${videos[0].id}`}
              title={videos[0].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Two smaller videos side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {videos.slice(1).map((v) => (
              <div key={v.id} className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.youtube.com/c/Notshi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-zinc-700 hover:border-red-500 hover:bg-red-500/10 text-zinc-300 hover:text-red-400 font-bold text-sm tracking-widest uppercase transition-all"
            >
              <span className="text-red-500">▶</span>
              View All Videos on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
