
import MotionCard from "./MotionCard";
import { useTransform } from "framer-motion";

export default function RightCards({ scrollYProgress }){
  // Card 2: Slides up to reveal Card 1
 const y2 = useTransform(
    scrollYProgress,
    [0, 0.5], // Animate during the first half of the scroll
    ["110%", "0%"]
  );

  // Card 3: Slides up to reveal Card 2
  const y3 = useTransform(scrollYProgress, [0.5, 1.0], ["110%", "0%"]); // Animate during the second half

  return (
    // Container must be relative so cards can be absolute inside it.
    // The parent div in ScrollCard.jsx will center this.
    <div className="relative h-[450px] w-full max-w-md">
      
  
  <MotionCard
  title="Content Creation"
  sub="Ideate → Script → Edit → Publish, all done for you."
  bgImage="/images/content.jpg"
  z="z-10"
/>

<MotionCard
  title="Graphic Design"
  sub="Brochures, pitch decks, and brand assets for credibility from day one."
  bgImage="/images/design.jpg"
  z="z-20"
  y={y2}
/>

<MotionCard
  title="UI/UX Design"
  sub="GTM-ready UX for websites, apps, and MVPs that convert."
  bgImage="/images/uiux.jpg"
  z="z-30"
  y={y3}
/>


</div>

  );
};
