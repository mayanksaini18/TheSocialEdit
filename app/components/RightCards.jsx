
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
    <div className="relative h-[450px] w-full max-w-md ">
      
      {/* CARD 1: Base Layer (Z-10) - Static */}
      <MotionCard 
        title="Performance Marketing" 
        bg="bg-neutral-200" // Using theme-appropriate colors
        z="z-10" 
      />

      {/* CARD 2: Middle Layer (Z-20) - Slides Up */}
      <MotionCard 
        title="Branding" 
        bg="bg-neutral-300" // Using theme-appropriate colors
        z="z-20" 
        y={y2} 
      />

      {/* CARD 3: Top Layer (Z-30) - Slides Up */}
      <MotionCard 
        title="UI/UX Design" 
        bg="bg-[#e9e9dd]" // The final card has the main off-white color
        z="z-30" 
        y={y3} 
      />
      
    </div>
  );
};
