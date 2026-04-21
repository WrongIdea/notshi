"use client";
import { useInView } from "@/hooks/useInView";

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
          {/* Featured video embed */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 mb-6">
            <iframe
              src="https://www.youtube.com/embed?listType=user_uploads&list=Notshi"
              title="Notshi — YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
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
