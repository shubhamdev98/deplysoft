import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HorizontalCards from "@/components/HorizontalCards";
import Philosophy from "@/components/Philosophy";
import StoryVideo from "@/components/StoryVideo";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Philosophy />
      <HorizontalCards />
      <StoryVideo />
      <TechStack />
    </main>
  );
}


