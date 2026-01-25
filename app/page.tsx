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
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
     
          <ScrollCard />
        </FadeIn>
      </Container>
      
      <InnovationSection />
      <FaqSection/>
    </main>
  );
}
