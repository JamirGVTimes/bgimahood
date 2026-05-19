import React from "react";
import { Link } from "react-router";
import { ArrowLeft, MessageSquare } from "lucide-react";

export function NotFoundPage() {
  return (
    <section className="min-h-[72vh] bg-[#071921] pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#207BA1]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#10b981]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#207BA1]/15 border border-[#207BA1]/30 rounded-full text-[#207BA1] text-sm font-medium mb-5">
          404
        </div>
        <h1
          className="text-white mb-4"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 900,
            lineHeight: 1.1,
          }}
        >
          Page Not Found
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
          The page you are looking for may have moved. You can return home or
          contact the Bgimahood Technologies team directly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#207BA1] to-[#00d4ff] text-white font-semibold rounded-full shadow-xl"
          >
            <ArrowLeft size={16} />
            Back Home
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors"
          >
            <MessageSquare size={16} />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
