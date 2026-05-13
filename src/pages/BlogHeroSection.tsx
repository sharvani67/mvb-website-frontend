// components/BlogHeroSection.tsx

import React from "react";
import { TrendingUp, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export default function BlogHeroSection() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">

      {/* 🌈 FOOTER MATCHING BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200" />

      {/* ✨ GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-pink-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* 🔥 TOP GRADIENT LINE */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500" />

      {/* CONTENT */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionWrapper>
          <div className="max-w-5xl mx-auto text-center">

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 border border-white shadow-lg backdrop-blur-md mb-8">
              
              <TrendingUp size={16} className="text-pink-600" />

              <span className="text-xs uppercase tracking-[0.25em] text-gray-800 font-bold">
                Insights & Perspectives
              </span>
            </div>

            {/* HEADING */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-8">
              Where{" "}
              <span className="bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
                Infrastructure
              </span>
              <br />
              Meets Intelligence
            </h1>

            {/* DESCRIPTION */}
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
              Expert insights, industry trends, and practical guidance from the
              frontlines of
              <span className="text-yellow-600 font-bold">
                {" "}IT infrastructure
              </span>,
              <span className="text-pink-600 font-bold">
                {" "}security
              </span>, and
              <span className="text-blue-600 font-bold">
                {" "}innovation
              </span>.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white font-bold hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-2">
                Explore Articles
                <ArrowRight size={18} />
              </button>

              <button className="px-8 py-4 rounded-2xl bg-white/70 backdrop-blur-md text-gray-800 font-semibold border border-white shadow-lg hover:bg-white transition-all duration-300">
                Latest Insights
              </button>

            </div>

          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}