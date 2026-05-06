// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";

// const processSteps = [
//   {
//     step: "01",
//     title: "Assess",
//     desc: "We evaluate your current infrastructure and identify gaps and opportunities.",
//     color: "blue",
//   },
//   {
//     step: "02",
//     title: "Design",
//     desc: "Our architects create tailored blueprints for your ideal infrastructure.",
//     color: "magenta",
//   },
//   {
//     step: "03",
//     title: "Implement",
//     desc: "Expert engineers deploy solutions with precision and minimal disruption.",
//     color: "green",
//   },
//   {
//     step: "04",
//     title: "Optimize",
//     desc: "Continuous monitoring and optimization ensure peak performance.",
//     color: "blue",
//   },
// ];

// const bgMap: any = {
//   blue: "bg-blue-500/10",
//   magenta: "bg-pink-500/10",
//   green: "bg-green-500/10",
// };

// const borderMap: any = {
//   blue: "border-blue-400/40",
//   magenta: "border-pink-400/40",
//   green: "border-green-400/40",
// };

// const textMap: any = {
//   blue: "text-blue-500",
//   magenta: "text-pink-500",
//   green: "text-green-500",
// };

// export default function Process() {
//   return (
//     <section className="relative py-28 overflow-hidden bg-muted/30">

//       {/* Animated Background */}
//       <div className="absolute inset-0 opacity-40">
//         <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-0 left-0 animate-pulse" />
//         <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full bottom-0 right-0 animate-pulse" />
//         <div className="absolute w-[350px] h-[350px] bg-green-500/20 blur-[120px] rounded-full top-1/2 left-1/2 animate-pulse" />
//       </div>

//       <div className="container mx-auto px-4 lg:px-8 relative z-10">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-20">
//             <span className="text-xs uppercase tracking-widest text-green-500 font-semibold mb-4 block">
//               Process
//             </span>

//             <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
//               How We Deliver
//             </h1>

//             <p className="text-muted-foreground max-w-lg mx-auto">
//               A structured, proven process that ensures exceptional outcomes
//               for every project we deliver.
//             </p>
//           </div>
//         </SectionWrapper>

//         {/* Timeline */}
//         <div className="grid md:grid-cols-4 gap-8 relative">

//           {/* Center line */}
//           <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-[2px] bg-border" />

//           {processSteps.map((item, i) => (
//             <SectionWrapper key={item.step} delay={i * 150}>
//               <div className="text-center group relative">

//                 {/* Step Box */}
//                 <div
//                   className={`w-28 h-28 rounded-2xl ${bgMap[item.color]} border-2 ${borderMap[item.color]} flex items-center justify-center mx-auto mb-8 relative z-10 shadow-lg transition-transform duration-300 group-hover:scale-110`}
//                 >
//                   <span
//                     className={`text-3xl font-black ${textMap[item.color]}`}
//                   >
//                     {item.step}
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-xl font-bold text-foreground mb-3">
//                   {item.title}
//                 </h3>

//                 <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
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

const processSteps = [
  {
    step: "01",
    title: "Assess",
    desc: "We evaluate your current infrastructure and identify gaps and opportunities.",
    color: "blue",
  },
  {
    step: "02",
    title: "Design",
    desc: "Our architects create tailored blueprints for your ideal infrastructure.",
    color: "magenta",
  },
  {
    step: "03",
    title: "Implement",
    desc: "Expert engineers deploy solutions with precision and minimal disruption.",
    color: "green",
  },
  {
    step: "04",
    title: "Optimize",
    desc: "Continuous monitoring and optimization ensure peak performance.",
    color: "blue",
  },
];

const bgMap: any = {
  blue: "bg-blue-500/10",
  magenta: "bg-pink-500/10",
  green: "bg-green-500/10",
};

const borderMap: any = {
  blue: "border-blue-400/40",
  magenta: "border-pink-400/40",
  green: "border-green-400/40",
};

const textMap: any = {
  blue: "text-blue-500",
  magenta: "text-pink-500",
  green: "text-green-500",
};

export default function Process() {
  return (
    <section className="relative py-28 overflow-hidden bg-zinc-900 text-white">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/56/15/76/561576e76c7059a94eff0ce3bc50dfcf.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Animated glow effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/30 blur-[120px] rounded-full top-0 left-0 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-pink-500/30 blur-[120px] rounded-full bottom-0 right-0 animate-pulse" />
        <div className="absolute w-[350px] h-[350px] bg-green-500/30 blur-[120px] rounded-full top-1/2 left-1/2 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Heading with Active Phase badges */}
        <SectionWrapper>
          <div className="text-center mb-16">
            {/* Decorative lines around "Process" text */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-green-500/60" />
              <span className="text-xs uppercase tracking-[0.3em] text-green-400 font-semibold">
                Process
              </span>
              <span className="h-px w-12 bg-green-500/60" />
            </div>

            {/* Main title - keeping original content */}
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 drop-shadow-lg">
              How We Deliver
            </h1>

            {/* Dual Active Phase badges from the image */}
            <div className="flex items-center justify-center gap-6 text-sm font-mono font-bold tracking-widest text-green-400">
              <span className="border border-green-500/40 px-5 py-1.5 rounded-full bg-green-500/10 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                ⚡ Active Phase
              </span>
              <span className="text-green-500/40">◆</span>
              <span className="border border-green-500/40 px-5 py-1.5 rounded-full bg-green-500/10 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                ⚡ Active Phase
              </span>
            </div>

            {/* Original description */}
            <p className="text-gray-300 max-w-lg mx-auto mt-8 text-sm tracking-wide">
              A structured, proven process that ensures exceptional outcomes
            </p>
          </div>
        </SectionWrapper>

        {/* Timeline grid */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line with gradient */}
          <div className="hidden md:block absolute top-16 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-blue-500/30 via-pink-500/30 to-green-500/30" />

          {processSteps.map((item, i) => (
            <SectionWrapper key={item.step} delay={i * 150}>
              <div className="text-center group relative">
                {/* Step Box with enhanced styling */}
                <div
                  className={`w-28 h-28 rounded-2xl ${bgMap[item.color]} border-2 ${borderMap[item.color]} flex items-center justify-center mx-auto mb-6 relative z-10 shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-opacity-100 group-hover:shadow-[0_0_30px] group-hover:shadow-${item.color}-500/50`}
                >
                  <span
                    className={`text-3xl font-black ${textMap[item.color]}`}
                  >
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 drop-shadow">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>

                {/* Small phase indicator under each card */}
                <div className="mt-4 opacity-40 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-mono text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full">
                    {item.color === "blue" && item.step === "01" && "🔍 assessment"}
                    {item.color === "magenta" && "📐 blueprint"}
                    {item.color === "green" && "⚙️ deployment"}
                    {item.color === "blue" && item.step === "04" && "📈 monitoring"}
                  </span>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>

        {/* Bottom status badge */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 border border-gray-700 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
            <span className="text-xs uppercase tracking-widest text-gray-300">
              ⏳ continuous delivery • active phase
            </span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
}