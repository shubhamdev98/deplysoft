import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HorizontalCards from "@/components/HorizontalCards";
import Philosophy from "@/components/Philosophy";
import StoryVideo from "@/components/StoryVideo";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Philosophy />
      <HorizontalCards />
      <StoryVideo />
      <TechStack />
      <Footer />
    </main>
  );
}


