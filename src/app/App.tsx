import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { SEO } from "./components/SEO.jsx";

const HomePage = lazy(() =>
  import("./pages/HomePage.jsx").then((module) => ({
    default: module.HomePage,
  })),
);
const AboutPage = lazy(() =>
  import("./pages/AboutPage.jsx").then((module) => ({
    default: module.AboutPage,
  })),
);
const ServicesPage = lazy(() =>
  import("./pages/ServicesPage.jsx").then((module) => ({
    default: module.ServicesPage,
  })),
);
const BookingPage = lazy(() =>
  import("./pages/BookingPage.jsx").then((module) => ({
    default: module.BookingPage,
  })),
);
const ProductsPage = lazy(() =>
  import("./pages/ProductsPage.jsx").then((module) => ({
    default: module.ProductsPage,
  })),
);
const TeamPage = lazy(() =>
  import("./pages/TeamPage.jsx").then((module) => ({
    default: module.TeamPage,
  })),
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage.jsx").then((module) => ({
    default: module.ContactPage,
  })),
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage.jsx").then((module) => ({
    default: module.NotFoundPage,
  })),
);

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
      <Route path="/book-sound-system" element={<BookingPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

function PageFallback() {
  return (
    <div className="min-h-[64vh] bg-[#071921] pt-32 pb-24 flex items-center justify-center">
      <div className="h-10 w-10 rounded-full border-2 border-[#207BA1]/30 border-t-[#00d4ff] animate-spin" />
    </div>
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
          <Suspense fallback={<PageFallback />}>
            <AppRoutes />
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
