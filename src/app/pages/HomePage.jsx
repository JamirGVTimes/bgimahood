import React from "react";
import { Hero } from "../components/Hero.jsx";
import { Stats } from "../components/Stats.jsx";
import { Testimonials } from "../components/Testimonials.jsx";

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Testimonials />
    </>
  );
}
