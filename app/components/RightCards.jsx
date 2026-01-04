
import MotionCard from "./MotionCard";
import { useTransform } from "framer-motion";

export default function RightCards({ scrollYProgress }){
  // These transforms will animate the cards based on the scroll progress.
  // Using "vh" units makes the animation responsive to viewport height.
  const y1 = useTransform(scrollYProgress, [0, 0.33], ["0vh", "-100vh"]);
  const y2 = useTransform(scrollYProgress, [0.33, 0.66], ["0vh", "-100vh"]);
  // The third card will be revealed and stay in place.
  const y3 = useTransform(scrollYProgress, [0.66, 1], ["0vh", "0vh"]);

  return (
    // This outer div creates a large scroll area (300% of viewport height).
    <div className="relative h-[300vh]">
      {/* This container becomes sticky, holding the cards in the center of the screen */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <MotionCard
          title="Performance Marketing"
          y={y1}
          z="z-30"
        />
        <MotionCard
          title="Branding"
          y={y2}
          z="z-20"
        />
        <MotionCard
          title="UI/UX Design"
          y={y3}
          z="z-10"
        />
      </div>
    </div>
  );
};
