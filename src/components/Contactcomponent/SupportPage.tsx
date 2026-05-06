// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { Users, Shield, Globe, Headphones } from "lucide-react";
// import supportBg from "@/assets/demo.jpg";

// const supportFeatures = [
//   {
//     icon: Users,
//     title: "Client-Centric Approach",
//     desc: "We tailor every solution to match your unique business goals and growth plans.",
//   },
//   {
//     icon: Shield,
//     title: "Secure Communication",
//     desc: "All communications are encrypted and confidential.",
//   },
//   {
//     icon: Globe,
//     title: "Global Reach",
//     desc: "Supporting clients across 15+ countries.",
//   },
//   {
//     icon: Headphones,
//     title: "Dedicated Support",
//     desc: "Personalized account manager for every client.",
//   },
// ];

// export default function SupportPage() {
//   return (
//     <section
//       className="relative py-28 bg-cover bg-center"
//       style={{ backgroundImage: `url(${supportBg})` }}
//     >
//       {/* BLUE OVERLAY */}
//       <div className="absolute inset-0 bg-[#0f2d4a]/80"></div>

//       {/* GRID DOTS EFFECT */}
//       <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]"></div>

//       <div className="container mx-auto px-4 lg:px-8 relative z-10">

//         {/* TITLE */}
//         <SectionWrapper>
//           <div className="text-center mb-16">

//             <span className="bg-red-500/20 text-white px-4 py-1 rounded-full text-sm font-semibold">
//               OUR COMMITMENT
//             </span>

//             <h2 className="text-5xl font-black text-white mt-6 mb-6">
//               Quality Without Compromise
//             </h2>

//             <p className="text-gray-300 max-w-2xl mx-auto">
//               Our certifications represent our unwavering commitment to delivering
//               products that meet the highest standards of quality, safety, and
//               environmental responsibility.
//             </p>

//           </div>
//         </SectionWrapper>

//         {/* CARDS */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">

//           {supportFeatures.map((item, i) => (
//             <SectionWrapper key={item.title} delay={i * 80}>

//               <div className="p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center hover:bg-white/15 hover:-translate-y-2 hover:shadow-2xl transition duration-300 h-full flex flex-col">

//                 {/* ICON */}
//                 <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-6">
//                   <item.icon size={28} className="text-white" />
//                 </div>

//                 {/* TITLE */}
//                 <h3 className="text-xl font-bold text-white mb-3">
//                   {item.title}
//                 </h3>

//                 {/* DESCRIPTION */}
//                 <p className="text-gray-300 text-sm flex-grow">
//                   {item.desc}
//                 </p>

//               </div>

//             </SectionWrapper>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }


import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Users, Shield, Globe, Headphones } from "lucide-react";
import supportBg from "@/assets/demo.jpg";

const supportFeatures = [
  {
    icon: Users,
    title: "Client-Centric Approach",
    desc: "We tailor every solution to match your unique business goals and growth plans.",
    color: "pink",
  },
  {
    icon: Shield,
    title: "Secure Communication",
    desc: "All communications are encrypted and confidential.",
    color: "yellow",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Supporting clients across 15+ countries.",
    color: "blue",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Personalized account manager for every client.",
    color: "cyan",
  },
];

const gradientMap = {
  pink: "from-pink-600 to-yellow-400",
  yellow: "from-yellow-400 to-blue-600",
  blue: "from-blue-600 to-cyan-500",
  cyan: "from-cyan-500 to-pink-600",
};

export default function SupportPage() {
  return (
    <section
      className="relative py-28 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${supportBg})` }}
    >
      {/* GRADIENT OVERLAY - Using new color combination */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/85 via-yellow-400/80 to-blue-600/85"></div>

      {/* GRID DOTS EFFECT */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]"></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* TITLE */}
        <SectionWrapper>
          <div className="text-center mb-16">

            <span className="bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold inline-block border border-white/30">
              OUR COMMITMENT
            </span>

            <h2 className="text-5xl font-black text-white mt-6 mb-6">
              Quality Without{" "}
              <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
                Compromise
              </span>
            </h2>

            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Our certifications represent our unwavering commitment to delivering
              products that meet the highest standards of quality, safety, and
              environmental responsibility.
            </p>

          </div>
        </SectionWrapper>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">

          {supportFeatures.map((item, i) => (
            <SectionWrapper key={item.title} delay={i * 80}>
              <div className="group p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden">

                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${gradientMap[item.color]} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                {/* ICON */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden group/icon`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradientMap[item.color]} opacity-100 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  <item.icon size={28} className="text-white relative z-10" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:via-yellow-400 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-white/80 text-sm flex-grow group-hover:text-white/90 transition-colors duration-300">
                  {item.desc}
                </p>

                {/* Decorative line */}
                <div className="w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 transition-all duration-500 mt-4 mx-auto"></div>

              </div>
            </SectionWrapper>
          ))}

        </div>

        {/* Optional CTA Section */}
        <SectionWrapper delay={400}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer">
              <span className="text-white font-medium">
                Ready to experience our commitment?
              </span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-600 to-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-sm">→</span>
              </div>
            </div>
          </div>
        </SectionWrapper>

      </div>
    </section>
  );
}