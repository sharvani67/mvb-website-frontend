import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Clock, Award, HeartHandshake, Zap } from "lucide-react";

import promiseImg from "@/assets/netw3.jpg";

const bgMap = {
  blue: "bg-mv-blue/10",
  magenta: "bg-mv-magenta/10",
  green: "bg-mv-green/10",
};

const textMap = {
  blue: "text-mv-blue",
  magenta: "text-mv-magenta",
  green: "text-mv-green",
};

export default function ServicePromise() {
  const promises = [
    {
      icon: Clock,
      text: "On-time delivery, every time",
      color: "blue" as const,
    },
    {
      icon: Award,
      text: "Industry-leading quality standards",
      color: "magenta" as const,
    },
    {
      icon: HeartHandshake,
      text: "Transparent pricing, no hidden costs",
      color: "green" as const,
    },
    {
      icon: Zap,
      text: "Rapid response and resolution times",
      color: "blue" as const,
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-muted/30">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-mv-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-mv-magenta/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>

              <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-4 block">
                Our Promise
              </span>

               <h1 className="text-4xl sm:text-5xl font-black mb-4">
  <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
  bg-clip-text text-transparent">
   The MV Service Promise
  </span>
          </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                When you partner with MV Branding Strategy, you're gaining a
                dedicated infrastructure partner committed to delivering
                reliable, secure, and scalable technology solutions.
              </p>

              <div className="space-y-5">
                {promises.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl ${bgMap[item.color]} flex items-center justify-center`}
                    >
                      <item.icon
                        size={20}
                        className={`${textMap[item.color]} group-hover:scale-110 transition`}
                      />
                    </div>

                    <span className="text-foreground font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              <div className="rounded-3xl overflow-hidden shadow-xl group">

                <img
                  src={promiseImg}
                  alt="Service Promise"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-2xl px-6 py-4">
                <div className="text-3xl font-black text-mv-blue">100%</div>
                <div className="text-xs text-muted-foreground">
                  Client Commitment
                </div>
              </div>

            </div>

          </div>
        </SectionWrapper>

      </div>
    </section>
  );
}