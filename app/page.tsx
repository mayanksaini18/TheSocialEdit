import Container from "@/app/components/Container";
import FadeIn from "@/app/components/FadeIn";
import ScrollCard from "@/app/components/ScrollCard";
import InnovationSection from "@/app/components/InnovationSection";

export default function Home() {
  return (
    <main className="text-neutral-100">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-600 text-balance sm:text-7xl">
            Elevating Brands with{" "}
            <span className="text-yellow-500">Content</span>,{" "}
            <span className="text-yellow-500">Strategy</span> and{" "}
            <span className="text-yellow-500">Web Solutions</span>.
          </h1>
 <p className="mt-6 text-xl text-neutral-500">
            We are a content marketing agency that partners with brands to
            deliver powerful brand strategy and bespoke web solutions, building
            an online presence that drives growth and engagement.
          </p> 
        </FadeIn>
      </Container>
      <ScrollCard />
      <InnovationSection />
    </main>
  );
}
