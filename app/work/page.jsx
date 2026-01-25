import PageIntro from "../components/PageIntro";
import React from "react";
import WorkSection from "../components/WorkSection";
const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>
      
      <WorkSection/>
    </>
  );
};

export default WorkPage;
