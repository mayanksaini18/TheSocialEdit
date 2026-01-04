"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/app/components/Container";

import { useRef } from "react";




import StickyLeft from "./StickyLeft";
import RightCards from "./RightCards"
export default function ServicesScroll() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="bg-[#f7f6f2] py-32">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <StickyLeft />
        <RightCards scrollYProgress={scrollYProgress} />
      </Container>
    </section>
  );
}
