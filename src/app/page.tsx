import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HorizontalCards from "@/components/HorizontalCards";
import Philosophy from "@/components/Philosophy";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import StoryVideo from "@/components/StoryVideo";
import Leadership from "@/components/Leadership";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Philosophy />
      <HorizontalCards />
      <Portfolio />
      <Testimonials />
      <StoryVideo />
      <Leadership />
      <TechStack />
      <Footer />
    </main>
  );
}


