import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { SEO } from "./components/SEO.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { OnlineServicesPage } from "./pages/OnlineServicesPage.jsx";
import { PortfolioPage } from "./pages/PortfolioPage.jsx";
import { ServicesPage } from "./pages/ServicesPage.jsx";
import { SoundEventsPage } from "./pages/SoundEventsPage.jsx";
import { TeamPage } from "./pages/TeamPage.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/sound-and-events" element={<SoundEventsPage />} />
      <Route path="/online-services" element={<OnlineServicesPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-screen"
        style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
      >
        <SEO />
        <ScrollToTop />
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
