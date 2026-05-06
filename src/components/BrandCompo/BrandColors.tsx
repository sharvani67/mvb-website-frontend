// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";

// // Import Images
// import blueImg from "@/assets/team-collaboration.jpg";
// import magentaImg from "@/assets/team-collaboration.jpg";
// import greenImg from "@/assets/team-collaboration.jpg";
// import bannerImg from "@/assets/team-collaboration.jpg";

// const sections = [
//   {
//     color: "blue",
//     title: "Blue — Trust & Security",
//     subtitle:
//       "Loyalty · Trust · Dependability · Serenity · Security",
//     desc:
//       "Blue represents the bedrock of our brand — trust, loyalty, and unwavering security. It communicates stability and dependability, essential qualities for an IT infrastructure partner handling critical enterprise systems.",
//     extendedDesc:
//       "Blue evokes serenity and confidence. For MV Branding Strategy, it reflects our promise of security-first infrastructure that enterprise clients can depend on — a foundation as solid as the trust we build.",
//     qualities: [
//       "Loyalty & Trust",
//       "Dependability",
//       "Serenity & Calm",
//       "Security & Protection",
//     ],
//     usage: [
//       "Primary backgrounds and headers",
//       "Security-related iconography",
//       "Trust indicators and badges",
//       "Enterprise communication materials",
//     ],
//     image: blueImg,
//     bgClass: "bg-mv-blue/5",
//     borderClass: "border-mv-blue/20",
//     textClass: "text-mv-blue",
//   },
//   {
//     color: "magenta",
//     title: "Magenta — Innovation & Creativity",
//     subtitle:
//       "Passion · Innovation · Transformation · Creativity",
//     desc:
//       "Magenta embodies our commitment to passion, creativity, and transformative thinking. It represents the bold, forward-looking approach we bring to solving complex infrastructure challenges with imaginative solutions.",
//     extendedDesc:
//       "Magenta bridges the analytical with the creative, signaling that our solutions aren't just technically sound — they're inventive, balanced, and driven by genuine passion for excellence.",
//     qualities: [
//       "Passion & Energy",
//       "Creative Innovation",
//       "Imaginative Solutions",
//       "Transformative Balance",
//     ],
//     usage: [
//       "Innovation highlights",
//       "Feature announcements",
//       "Creative campaigns",
//       "Technology showcases",
//     ],
//     image: magentaImg,
//     bgClass: "bg-mv-magenta/5",
//     borderClass: "border-mv-magenta/20",
//     textClass: "text-mv-magenta",
//   },
//   {
//     color: "green",
//     title: "Green — Growth & Nature",
//     subtitle:
//       "Health · Hope · Freshness · Growth · Environment",
//     desc:
//       "Green symbolizes health, hope, and our future-ready philosophy. It represents freshness, sustainable development, and the organic evolution of technology infrastructure in harmony with nature.",
//     extendedDesc:
//       "Green communicates that our infrastructure solutions are designed for longevity and the environment. They grow with your business, adapt naturally to change, and embody the freshness of continuous renewal.",
//     qualities: [
//       "Health & Vitality",
//       "Hope & Optimism",
//       "Natural Growth",
//       "Environmental Awareness",
//     ],
//     usage: [
//       "Growth metrics",
//       "Sustainability messaging",
//       "Progress indicators",
//       "Client success materials",
//     ],
//     image: greenImg,
//     bgClass: "bg-mv-green/5",
//     borderClass: "border-mv-green/20",
//     textClass: "text-mv-green",
//   },
// ];

// const BrandColors = () => {
//   return (
//     <div>
//       {/* 🔷 Banner Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="rounded-3xl overflow-hidden shadow-2xl relative">
//               <img
//                 src={bannerImg}
//                 alt="Brand Colors"
//                 className="w-full h-72 object-cover"
//               />
//               <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                 <div className="text-center text-white">
//                   <h2 className="text-4xl font-black mb-4">
//                     Blue · Magenta · Green
//                   </h2>
//                   <p className="text-white/80">
//                     Trust · Innovation · Growth
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </SectionWrapper>
//         </div>
//       </section>

//       {/* 🔷 Color Sections */}
//       {sections.map((s, i) => (
//         <section
//           key={s.color}
//           className={`py-24 ${
//             i % 2 !== 0 ? "bg-muted/30" : ""
//           }`}
//         >
//           <div className="container mx-auto px-4 lg:px-8">
//             <SectionWrapper>
//               <div className="grid lg:grid-cols-2 gap-16 items-center">

//                 {/* Left Content */}
//                 <div>
//                   <h2 className="text-4xl font-black mb-3">
//                     {s.title}
//                   </h2>
//                   <p
//                     className={`text-sm font-semibold uppercase tracking-widest mb-5 ${s.textClass}`}
//                   >
//                     {s.subtitle}
//                   </p>
//                   <p className="text-muted-foreground mb-4 text-lg">
//                     {s.desc}
//                   </p>
//                   <p className="text-sm text-muted-foreground mb-8">
//                     {s.extendedDesc}
//                   </p>

//                   {/* Qualities */}
//                   <div className="grid grid-cols-2 gap-3 mb-8">
//                     {s.qualities.map((q) => (
//                       <div
//                         key={q}
//                         className={`px-4 py-3 rounded-xl ${s.bgClass} border ${s.borderClass} text-sm font-medium`}
//                       >
//                         {q}
//                       </div>
//                     ))}
//                   </div>

//                   {/* Usage */}
//                   <div>
//                     <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
//                       Brand Usage
//                     </h4>
//                     <div className="space-y-2">
//                       {s.usage.map((u) => (
//                         <div
//                           key={u}
//                           className="flex items-center gap-2 text-sm text-muted-foreground"
//                         >
//                           <div
//                             className={`w-2 h-2 rounded-full ${s.textClass.replace(
//                               "text",
//                               "bg"
//                             )}`}
//                           />
//                           {u}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* 🔥 Right Side Image Box */}
//                 <div>
//                   <div
//                     className={`rounded-3xl overflow-hidden shadow-xl border ${s.borderClass}`}
//                   >
//                     <img
//                       src={s.image}
//                       alt={s.color}
//                       className="w-full h-[400px] object-cover"
//                     />
//                   </div>
//                 </div>

//               </div>
//             </SectionWrapper>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default BrandColors;



import React from "react";
import SectionWrapper from "@/components/SectionWrapper";

// ✅ Import Images
import blueImg from "@/assets/team-collaboration.jpg";
import magentaImg from "@/assets/team-collaboration.jpg";
import greenImg from "@/assets/team-collaboration.jpg";
import bannerImg from "@/assets/brand-colors.jpg";

const sections = [
  {
    color: "blue",
    title: "Blue — Trust & Security",
    subtitle:
      "Loyalty · Trust · Dependability · Serenity · Security",
    desc:
      "Blue represents the bedrock of our brand — trust, loyalty, and unwavering security. It communicates stability and dependability, essential qualities for an IT infrastructure partner handling critical enterprise systems.",
    extendedDesc:
      "Blue evokes serenity and confidence. For MV Branding Strategy, it reflects our promise of security-first infrastructure that enterprise clients can depend on — a foundation as solid as the trust we build.",
    qualities: [
      "Loyalty & Trust",
      "Dependability",
      "Serenity & Calm",
      "Security & Protection",
    ],
    usage: [
      "Primary backgrounds and headers",
      "Security-related iconography",
      "Trust indicators and badges",
      "Enterprise communication materials",
    ],
    image: blueImg,
    bgClass: "bg-mv-blue/5",
    borderClass: "border-mv-blue/20",
    textClass: "text-mv-blue",
  },
  {
    color: "magenta",
    title: "Magenta — Innovation & Creativity",
    subtitle:
      "Passion · Innovation · Transformation · Creativity",
    desc:
      "Magenta embodies our commitment to passion, creativity, and transformative thinking. It represents the bold, forward-looking approach we bring to solving complex infrastructure challenges with imaginative solutions.",
    extendedDesc:
      "Magenta bridges the analytical with the creative, signaling that our solutions aren't just technically sound — they're inventive, balanced, and driven by genuine passion for excellence.",
    qualities: [
      "Passion & Energy",
      "Creative Innovation",
      "Imaginative Solutions",
      "Transformative Balance",
    ],
    usage: [
      "Innovation highlights",
      "Feature announcements",
      "Creative campaigns",
      "Technology showcases",
    ],
    image: magentaImg,
    bgClass: "bg-mv-magenta/5",
    borderClass: "border-mv-magenta/20",
    textClass: "text-mv-magenta",
  },
  {
    color: "green",
    title: "Green — Growth & Nature",
    subtitle:
      "Health · Hope · Freshness · Growth · Environment",
    desc:
      "Green symbolizes health, hope, and our future-ready philosophy. It represents freshness, sustainable development, and the organic evolution of technology infrastructure in harmony with nature.",
    extendedDesc:
      "Green communicates that our infrastructure solutions are designed for longevity and the environment. They grow with your business, adapt naturally to change, and embody the freshness of continuous renewal.",
    qualities: [
      "Health & Vitality",
      "Hope & Optimism",
      "Natural Growth",
      "Environmental Awareness",
    ],
    usage: [
      "Growth metrics",
      "Sustainability messaging",
      "Progress indicators",
      "Client success materials",
    ],
    image: greenImg,
    bgClass: "bg-mv-green/5",
    borderClass: "border-mv-green/20",
    textClass: "text-mv-green",
  },
];

const BrandColors = () => {
  return (
    <div>

      {/* 🔷 Banner Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionWrapper>
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src={bannerImg}
                alt="Brand Colors"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-black mb-4">
                    Blue · Magenta · Green
                  </h2>
                  <p className="text-white/80">
                    Trust · Innovation · Growth
                  </p>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 🔷 Color Sections */}
      {sections.map((s, i) => (
        <section
          key={s.color}
          className={`py-24 ${i % 2 !== 0 ? "bg-muted/30" : ""}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <SectionWrapper>
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* 🔥 Image Side */}
                <div className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div
                    className={`rounded-3xl overflow-hidden shadow-xl border ${s.borderClass} transition-transform duration-500 hover:scale-105`}
                  >
                    <img
                      src={s.image}
                      alt={s.color}
                      className="w-full h-[420px] object-cover"
                    />
                  </div>
                </div>

                {/* 📄 Content Side */}
                <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <h2 className="text-4xl font-black mb-3">
                    {s.title}
                  </h2>

                  <p
                    className={`text-sm font-semibold uppercase tracking-widest mb-5 ${s.textClass}`}
                  >
                    {s.subtitle}
                  </p>

                  <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                    {s.desc}
                  </p>

                  <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                    {s.extendedDesc}
                  </p>

                  {/* Qualities */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {s.qualities.map((q) => (
                      <div
                        key={q}
                        className={`px-4 py-3 rounded-xl ${s.bgClass} border ${s.borderClass} text-sm font-medium`}
                      >
                        {q}
                      </div>
                    ))}
                  </div>

                  {/* Usage */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                      Brand Usage
                    </h4>
                    <div className="space-y-2">
                      {s.usage.map((u) => (
                        <div
                          key={u}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${s.textClass.replace(
                              "text",
                              "bg"
                            )}`}
                          />
                          {u}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </SectionWrapper>
          </div>
        </section>
      ))}

    </div>
  );
};

export default BrandColors;