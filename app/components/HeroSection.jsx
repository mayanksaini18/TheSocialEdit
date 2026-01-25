import React from "react";
import { ArrowRight } from "lucide-react";

// Assuming you have the Shadcn Button component set up.
// If not, you can replace this import with a standard HTML <button>
// import { Button } from "../components/Button"; 

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center  px-4 py-24 text-center">
      
      {/* Optional: Subtle Grid Background for texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="z-10 mx-auto flex max-w-5xl flex-col items-center gap-6">
        
        {/* Main Headline - Replicating the "NOT ANOTHER AGENCY" style */}
        <h1 className="flex flex-col text-5xl font-black uppercase leading-[0.9] tracking-tighter text-black md:text-7xl lg:text-[7rem]">
          You build the brand. We build the presence.
        </h1> 
        {/* CTAs using Shadcn styling */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button size="lg" className="h-12 px-8 text-base font-semibold uppercase tracking-wide">
            Start Your Project
          </button>
          <button  size="lg" className="group h-12 gap-2 border-neutral-400 px-8 text-base font-semibold uppercase tracking-wide hover:bg-white">
            View Work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;