import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Notshi — Big Deal Entertainment",
  description:
    "Official website of Notshi, hip hop artist and founder of Big Deal Entertainment. Music, bookings, and more.",
  openGraph: {
    title: "Notshi — Big Deal Entertainment",
    description: "Official website of Notshi — hip hop artist and founder of Big Deal Entertainment.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#080808] text-zinc-200 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
