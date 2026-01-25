import Container from "@/app/components/Container";
import FadeIn from "@/app/components/FadeIn";
import ScrollCard from "@/app/components/ScrollCard";
import InnovationSection from "@/app/components/InnovationSection";
import HeroSection from "./components/HeroSection";
import FaqSection from "./components/FaqSection";
export default function Home() {
  return (
    <main className="text-neutral-100">
          <HeroSection/>
      
          <ScrollCard />
    
      <InnovationSection />
      <FaqSection/>
    </main>
  );
}
