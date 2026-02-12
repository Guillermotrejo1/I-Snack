import React from "react";
import BentoGrid from "./BentoGrid";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

const Landing = () => {
  return (
    <main className="bg-gray-50">
      <Hero />
      <BentoGrid />
      <Testimonials />
    </main>
  );
};

export default Landing;