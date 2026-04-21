"use client";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const items = [
  { name: "Big Deal Hoodie", price: "R599", emoji: "👕" },
  { name: "Notshi Cap", price: "R299", emoji: "🧢" },
  { name: "Modiegi Tee", price: "R399", emoji: "👕" },
];

export default function Merch() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const { ref, inView } = useInView();

  async function handleNotify(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setEmail("");
  }

  return (
    <section id="merch" className="py-28 px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4">Store</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">Merch</h2>
          <p className="text-zinc-500 mt-3 text-sm">Official Big Deal Entertainment merchandise — dropping soon.</p>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Merch grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
            {items.map((item) => (
              <div
                key={item.name}
                className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center gap-4 overflow-hidden"
              >
                {/* Coming soon overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl z-10">
                  <span className="px-4 py-2 bg-[#D4AF37] text-black text-xs font-black uppercase tracking-widest rounded-full">
                    Coming Soon
                  </span>
                </div>
                <span className="text-6xl">{item.emoji}</span>
                <h3 className="text-white font-bold text-center">{item.name}</h3>
                <p className="text-[#D4AF37] font-black">{item.price}</p>
              </div>
            ))}
          </div>

          {/* Notify form */}
          <div className="max-w-lg mx-auto bg-zinc-900 border border-[#D4AF37]/20 rounded-2xl p-8 text-center">
            <h3 className="text-white font-black text-xl mb-2">Get Notified When Merch Drops</h3>
            <p className="text-zinc-500 text-sm mb-6">Be the first to know when the Big Deal store goes live.</p>

            {sent ? (
              <p className="text-[#D4AF37] font-bold">You&apos;re on the list! We&apos;ll notify you when merch drops. 🔥</p>
            ) : (
              <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] text-sm transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#c9a42e] text-black font-black text-sm tracking-widest uppercase transition-colors flex-shrink-0"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
