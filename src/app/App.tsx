import React from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Services } from "./components/Services.jsx";
import { Stats } from "./components/Stats.jsx";
import { EventsSound } from "./components/EventsSound.jsx";
import { OnlineServices } from "./components/OnlineServices.jsx";
import { Portfolio } from "./components/Portfolio.jsx";
import { Testimonials } from "./components/Testimonials.jsx";
import { Team } from "./components/Team.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
    >
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <EventsSound />
      <OnlineServices />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
