import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import SocialStats from "@/components/SocialStats";
import Music from "@/components/Music";
import VideoSection from "@/components/VideoSection";
import Events from "@/components/Events";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Merch from "@/components/Merch";
import PressKit from "@/components/PressKit";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <SocialStats />
        <Music />
        <VideoSection />
        <Events />
        <About />
        <Gallery />
        <Merch />
        <PressKit />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
