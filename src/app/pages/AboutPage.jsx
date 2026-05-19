import React from "react";
import { About } from "../components/About.jsx";
import { Stats } from "../components/Stats.jsx";
import { Testimonials } from "../components/Testimonials.jsx";

export function AboutPage() {
  return (
    <>
      <About />
      <Stats />
      <Testimonials />
    </>
  );
}
