import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Music from "@/components/Music";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Music />
        <About />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
