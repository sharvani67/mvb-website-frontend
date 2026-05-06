// import React from "react";
// import {
//   Target,
//   TrendingUp,
//   ShieldCheck,
//   BadgeCheck,
// } from "lucide-react";
// import SectionWrapper from "@/components/SectionWrapper";

// const values = [
//   {
//     text: "Right products, Right solutions, Right value proposition",
//     icon: Target,
//   },
//   {
//     text: "Value & Growth for Talents, Continuous learning",
//     icon: TrendingUp,
//   },
//   {
//     text: "Responsibility with Accountability & Transparency",
//     icon: ShieldCheck,
//   },
//   {
//     text: "Work with Integrity, Commitment & Result oriented",
//     icon: BadgeCheck,
//   },
// ];

// const CoreValue = () => {
//   return (
//     <section className="py-24 bg-gray-50">
//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-16">
//             <span className="text-xs uppercase tracking-widest font-semibold mb-4 block 
//             bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//             bg-clip-text text-transparent">
//               Our Foundation
//             </span>

//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our{" "}
//               <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//               bg-clip-text text-transparent">
//                 Core Values
//               </span>
//             </h2>
//           </div>
//         </SectionWrapper>

//         {/* Layout */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* Left List */}
//           <div className="space-y-6">
//             {values.map((item, i) => {
//               const Icon = item.icon;
//               return (
//                 <SectionWrapper key={i} delay={i * 100}>
//                   <div className="flex items-center gap-4 group">

//                     {/* Gradient Icon Box */}
//                     <div className="w-12 h-12 flex items-center justify-center rounded-xl 
//                     bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//                     text-white shadow-md group-hover:scale-110 transition duration-300">
//                       <Icon size={20} />
//                     </div>

//                     {/* Text */}
//                     <p className="text-gray-700 text-base font-medium 
//                     group-hover:bg-gradient-to-r 
//                     group-hover:from-[#E11D48] 
//                     group-hover:via-[#FACC15] 
//                     group-hover:to-[#2563EB] 
//                     group-hover:bg-clip-text 
//                     group-hover:text-transparent 
//                     transition duration-300">
//                       {item.text}
//                     </p>

//                   </div>
//                 </SectionWrapper>
//               );
//             })}
//           </div>

//           {/* Right Image */}
//           <SectionWrapper>
//             <div className="relative">

//               {/* Glow */}
//               <div className="absolute inset-0 rounded-[30px] 
//               bg-gradient-to-r from-[#E11D48] via-[#FACC15] to-[#2563EB] 
//               opacity-20 blur-xl"></div>

//               {/* Image */}
//               <img
//                 src="https://images.unsplash.com/photo-1551434678-e076c223a692"
//                 alt="Core Values"
//                 className="relative rounded-[25px] w-full h-[400px] object-cover shadow-xl"
//               />
//             </div>
//           </SectionWrapper>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreValue;



import React from "react";
import {
  Target,
  TrendingUp,
  ShieldCheck,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const values = [
  {
    text: "Right products, Right solutions, Right value proposition",
    icon: Target,
    color: "from-rose-500 to-pink-500",
    bgGlow: "from-rose-500/20 to-pink-500/20",
  },
  {
    text: "Value & Growth for Talents, Continuous learning",
    icon: TrendingUp,
    color: "from-amber-500 to-yellow-500",
    bgGlow: "from-amber-500/20 to-yellow-500/20",
  },
  {
    text: "Responsibility with Accountability & Transparency",
    icon: ShieldCheck,
    color: "from-blue-500 to-cyan-500",
    bgGlow: "from-blue-500/20 to-cyan-500/20",
  },
  {
    text: "Work with Integrity, Commitment & Result oriented",
    icon: BadgeCheck,
    color: "from-indigo-500 to-purple-500",
    bgGlow: "from-indigo-500/20 to-purple-500/20",
  },
];

const CoreValue = () => {
  return (
    <section className="relative py-28 overflow-hidden" style={{ backgroundColor: "#FFDE42" }}>
      {/* Animated Background Orbs - Darker variants for contrast on yellow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-rose-500/20 to-amber-500/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Heading with Decorative Line */}
        <SectionWrapper>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/60 mb-6">
              <Sparkles size={14} className="text-amber-700" />
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-800">
                Our Foundation
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-rose-600 via-amber-600 to-blue-600 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 via-amber-500 to-blue-500 rounded-full mx-auto mt-6" />
          </div>
        </SectionWrapper>

        {/* Two Column Layout - Image Left, Values Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image with Modern Frame */}
          <SectionWrapper>
            <div className="relative group">
              {/* Decorative Rings */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-rose-500/40 via-amber-500/40 to-blue-500/40 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                  alt="Core Values Team"
                  className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 border border-white shadow-lg">
                <p className="text-gray-800 text-sm font-medium text-center">
                  ⚡ Driving Excellence Through Values
                </p>
              </div>
            </div>
          </SectionWrapper>

          {/* Right - Values Grid (Card Style) */}
          <div className="space-y-6">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <SectionWrapper key={i} delay={i * 100}>
                  <div className="group relative">
                    {/* Glow behind card */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500`} />
                    
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 hover:bg-white transition-all duration-300 shadow-md border border-white">
                      <div className="flex items-center gap-5">
                        {/* Icon Container */}
                        <div className={`relative shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition duration-300`}>
                          <Icon size={24} className="text-white" />
                          <div className="absolute inset-0 rounded-xl bg-white/20 blur-md" />
                          <Icon size={24} className="relative text-white" />
                        </div>
                        
                        {/* Text */}
                        <p className="text-gray-800 text-base md:text-lg font-medium leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </SectionWrapper>
              );
            })}
            
            {/* Additional Callout */}
            <div className="mt-8 pt-4 border-t border-gray-400/30">
              <p className="text-gray-700 text-sm text-center flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                Living our values every day
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValue;



// import React from "react";
// import {
//   Target,
//   TrendingUp,
//   ShieldCheck,
//   BadgeCheck,
// } from "lucide-react";

// const CoreValue: React.FC = () => {
//   const values = [
//     {
//       text: "Right products, Right solutions, Right value proposition",
//       icon: Target,
//       gradient: "from-orange-500 to-red-500",
//     },
//     {
//       text: "Value & Growth for Talents, Continuous learning",
//       icon: TrendingUp,
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       text: "Responsibility with Accountability & Transparency",
//       icon: ShieldCheck,
//       gradient: "from-blue-500 to-indigo-500",
//     },
//     {
//       text: "Work with Integrity, Commitment & Result oriented",
//       icon: BadgeCheck,
//       gradient: "from-green-400 to-emerald-500",
//     },
//   ];

//   return (
//     <section className="py-20 bg-white relative overflow-hidden">
//       {/* 🌈 Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 opacity-40" />

//       {/* 🔹 Container */}
//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* 🔹 Header */}
//         <div className="text-center mb-16">
//           <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">
//             Our Foundation
//           </p>

//           <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
//             Our{" "}
//             <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
//               Core Values
//             </span>
//           </h2>

//           <div className="w-24 h-[3px] bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 mx-auto mt-6 rounded-full" />
//         </div>

//         {/* 🔹 Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {values.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={index}
//                 className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 hover:scale-105 transition-all duration-300"
//               >
//                 {/* Card */}
//                 <div className="bg-white rounded-2xl p-6 h-full shadow-md group-hover:shadow-xl transition-all duration-300">
//                   {/* Icon */}
//                   <div
//                     className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${item.gradient} text-white shadow-lg mb-4`}
//                   >
//                     <Icon size={28} />
//                   </div>

//                   {/* Text */}
//                   <p className="text-gray-700 text-base font-medium leading-relaxed">
//                     {item.text}
//                   </p>

//                   {/* Hover Line */}
//                   <div className="mt-4 w-8 h-[2px] bg-gray-300 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 transition-all duration-300" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreValue;