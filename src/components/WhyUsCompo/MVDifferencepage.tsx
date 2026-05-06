// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { Users, Clock, Award, Target, Rocket, Handshake } from "lucide-react";

// import diffImage from "@/assets/team-collaboration.jpg";

// const differentiators = [
//   {
//     icon: Users,
//     title: "Dedicated Team",
//     desc: "You get a dedicated team of experts who know your infrastructure inside and out.",
//     color: "blue",
//   },
//   {
//     icon: Clock,
//     title: "24/7 Support",
//     desc: "Round-the-clock monitoring and support to ensure your systems never miss a beat.",
//     color: "magenta",
//   },
//   {
//     icon: Award,
//     title: "Certified Excellence",
//     desc: "Industry-certified professionals with decades of combined experience.",
//     color: "green",
//   },
//   {
//     icon: Target,
//     title: "Results-Driven",
//     desc: "We measure our success by your outcomes and business results.",
//     color: "blue",
//   },
//   {
//     icon: Rocket,
//     title: "Rapid Deployment",
//     desc: "Accelerated implementation timelines without compromising quality.",
//     color: "magenta",
//   },
//   {
//     icon: Handshake,
//     title: "Long-term Partnership",
//     desc: "We're not just vendors—we're strategic partners invested in your success.",
//     color: "green",
//   },
// ];

// const bgMap: any = {
//   blue: "bg-mv-blue/10",
//   magenta: "bg-mv-magenta/10",
//   green: "bg-mv-green/10",
// };

// const textMap: any = {
//   blue: "text-mv-blue",
//   magenta: "text-mv-magenta",
//   green: "text-mv-green",
// };

// const glowMap: any = {
//   blue: "hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]",
//   magenta: "hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]",
//   green: "hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]",
// };

// const MVDifferencePage = () => {
//   return (
//     <section className="py-28 bg-muted/30 relative overflow-hidden">

//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-16">
//             <span className="text-xs uppercase tracking-widest text-mv-green font-semibold mb-4 block">
//               What Sets Us Apart
//             </span>

//             <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
//               The MV Difference
//             </h2>

//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               We don't just meet expectations—we exceed them. Here's how we're different.
//             </p>
//           </div>
//         </SectionWrapper>

//         {/* Two Column Layout */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT IMAGE */}
//           <SectionWrapper>
//             <div className="relative">
//               <img
//                 src={diffImage}
//                 alt="MV Difference"
//                 className="rounded-3xl shadow-2xl w-full object-cover"
//               />

//               <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-mv-blue/20 via-transparent to-mv-magenta/20"></div>
//             </div>
//           </SectionWrapper>

//           {/* RIGHT CARDS */}
//           <div className="grid sm:grid-cols-2 gap-6">

//             {differentiators.map((item, i) => (
//               <SectionWrapper key={item.title} delay={i * 80}>
//                 <div
//                   className={`p-6 rounded-2xl glass-premium premium-card gradient-border group hover:scale-105 transition-all duration-300 ${glowMap[item.color]}`}
//                 >
//                   <div
//                     className={`w-12 h-12 rounded-xl ${bgMap[item.color]} flex items-center justify-center mb-4`}
//                   >
//                     <item.icon size={24} className={textMap[item.color]} />
//                   </div>

//                   <h3 className="text-lg font-bold text-foreground mb-2">
//                     {item.title}
//                   </h3>

//                   <p className="text-sm text-muted-foreground">
//                     {item.desc}
//                   </p>
//                 </div>
//               </SectionWrapper>
//             ))}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MVDifferencePage;



// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { Users, Clock, Award, Target, Rocket, Handshake } from "lucide-react";

// import diffImage from "@/assets/team-collaboration.jpg";

// const differentiators = [
//   {
//     icon: Users,
//     title: "Dedicated Team",
//   },
//   {
//     icon: Clock,
//     title: "24/7 Support",
//   },
//   {
//     icon: Award,
//     title: "Certified Excellence",
//   },
//   {
//     icon: Target,
//     title: "Results-Driven",
//   },
//   {
//     icon: Rocket,
//     title: "Rapid Deployment",
//   },
//   {
//     icon: Handshake,
//     title: "Long-term Partnership",
//   },
// ];

// const MVDifferencePage = () => {
//   return (
//     <section className="py-24 bg-[#f7faf8]">
//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//               The MV Difference
//             </h2>

//             <p className="text-gray-600 max-w-2xl mx-auto">
//               We don't just meet expectations—we exceed them. Here's how we're different.
//             </p>
//           </div>
//         </SectionWrapper>

//         {/* Layout */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT LIST */}
//           <div className="space-y-8">

//             {differentiators.map((item, i) => (
//               <SectionWrapper key={i} delay={i * 80}>
//                 <div className="flex items-center gap-5">

//                   <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
//                     <item.icon size={24} className="text-green-600" />
//                   </div>

//                   <p className="text-lg text-gray-700 font-medium">
//                     {item.title}
//                   </p>

//                 </div>
//               </SectionWrapper>
//             ))}

//           </div>

//           {/* RIGHT IMAGE */}
//           <SectionWrapper>
//             <div className="relative">

//               {/* soft background frame */}
//               <div className="absolute -top-6 -left-6 w-full h-full bg-green-100 rounded-[40px]"></div>

//               <img
//                 src={diffImage}
//                 alt="MV Difference"
//                 className="relative rounded-[30px] shadow-xl w-full object-cover"
//               />

//             </div>
//           </SectionWrapper>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default MVDifferencePage;





// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { Users, Clock, Award, Target, Rocket, Handshake } from "lucide-react";

// import diffImage from "@/assets/team-collaboration.jpg";

// const differentiators = [
//   {
//     icon: Users,
//     title: "Dedicated Team",
//     desc: "You get a dedicated team of experts who know your infrastructure inside and out.",
//     color: "blue",
//   },
//   {
//     icon: Clock,
//     title: "24/7 Support",
//     desc: "Round-the-clock monitoring and support to ensure your systems never miss a beat.",
//     color: "magenta",
//   },
//   {
//     icon: Award,
//     title: "Certified Excellence",
//     desc: "Industry-certified professionals with decades of combined experience.",
//     color: "green",
//   },
//   {
//     icon: Target,
//     title: "Results-Driven",
//     desc: "We measure our success by your outcomes and business results.",
//     color: "blue",
//   },
//   {
//     icon: Rocket,
//     title: "Rapid Deployment",
//     desc: "Accelerated implementation timelines without compromising quality.",
//     color: "magenta",
//   },
//   {
//     icon: Handshake,
//     title: "Long-term Partnership",
//     desc: "We're not just vendors—we're strategic partners invested in your success.",
//     color: "green",
//   },
// ];

// const bgMap: any = {
//   blue: "bg-mv-blue/10",
//   magenta: "bg-mv-magenta/10",
//   green: "bg-mv-green/10",
// };

// const textMap: any = {
//   blue: "text-mv-blue",
//   magenta: "text-mv-magenta",
//   green: "text-mv-green",
// };

// const MVDifferencePage = () => {
//   return (
//     <section className="py-24 bg-[#f7faf8]">
//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//               The MV Difference
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               We don't just meet expectations—we exceed them. Here's how we're different.
//             </p>
//           </div>
//         </SectionWrapper>

//         {/* Two Column Layout */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT LIST */}
//           <div className="space-y-10">

//             {differentiators.map((item, i) => (
//               <SectionWrapper key={i} delay={i * 80}>
//                 <div className="flex gap-5">

//                   <div
//                     className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${bgMap[item.color]}`}
//                   >
//                     <item.icon size={24} className={textMap[item.color]} />
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                       {item.title}
//                     </h3>

//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </div>

//                 </div>
//               </SectionWrapper>
//             ))}

//           </div>

//           {/* RIGHT IMAGE */}
//           <SectionWrapper>
//             <div className="relative">
//               <img
//                 src={diffImage}
//                 alt="MV Difference"
//                 className="rounded-[30px] shadow-xl w-full object-cover"
//               />
//             </div>
//           </SectionWrapper>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default MVDifferencePage;





// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { Users, Clock, Award, Target, Rocket, Handshake } from "lucide-react";

// import diffImage from "@/assets/team-collaboration.jpg";

// const differentiators = [
//   {
//     icon: Users,
//     title: "Dedicated Team",
//     desc: "You get a dedicated team of experts who know your infrastructure inside and out.",
//     color: "pink",
//   },
//   {
//     icon: Clock,
//     title: "24/7 Support",
//     desc: "Round-the-clock monitoring and support to ensure your systems never miss a beat.",
//     color: "orange",
//   },
//   {
//     icon: Award,
//     title: "Certified Excellence",
//     desc: "Industry-certified professionals with decades of combined experience.",
//     color: "yellow",
//   },
//   {
//     icon: Target,
//     title: "Results-Driven",
//     desc: "We measure our success by your outcomes and business results.",
//     color: "blue",
//   },
//   {
//     icon: Rocket,
//     title: "Rapid Deployment",
//     desc: "Accelerated implementation timelines without compromising quality.",
//     color: "cyan",
//   },
//   {
//     icon: Handshake,
//     title: "Long-term Partnership",
//     desc: "We're not just vendors—we're strategic partners invested in your success.",
//     color: "green",
//   },
// ];

// const bgMap: any = {
//   pink: "bg-pink-600/10",
//   orange: "bg-orange-500/10",
//   yellow: "bg-yellow-400/10",
//   blue: "bg-blue-600/10",
//   cyan: "bg-cyan-500/10",
//   green: "bg-green-500/10",
//   magenta: "bg-magenta-500/10",
// };

// const textMap: any = {
//   pink: "text-pink-500",
//   orange: "text-orange-500",
//   yellow: "text-yellow-500",
//   blue: "text-blue-600",
//   cyan: "text-cyan-500",
//   green: "text-green-500",
//   magenta: "text-magenta-500",
// };

// const MVDifferencePage = () => {
//   return (
//     <section className="py-24 bg-gradient-to-br from-white via-pink-50/30 to-yellow-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-16">
//             <span className="text-xs uppercase tracking-widest font-semibold mb-4 block bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
//               Why Choose Us
//             </span>
//             <h2 className="text-4xl sm:text-5xl font-black mb-4">
//   <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//   bg-clip-text text-transparent">
//     The MV Difference
//   </span>
//           </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
//               We don't just meet expectations—we exceed them. Here's how we're different.
//             </p>
//           </div>
//         </SectionWrapper>

//         {/* Two Column Layout */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT LIST */}
//           <div className="space-y-10">

//             {differentiators.map((item, i) => (
//               <SectionWrapper key={i} delay={i * 80}>
//                 <div className="flex gap-5 group cursor-pointer">

//                   <div
//                     className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${bgMap[item.color]} 
//                     transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative overflow-hidden`}
//                   >
//                     {/* Animated gradient background on hover */}
//                     <div className={`absolute inset-0 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
//                     <item.icon size={24} className={`${textMap[item.color]} relative z-10 group-hover:text-white transition-colors duration-300`} />
//                   </div>

//                   <div className="flex-1">
//                     <h3 className={`text-lg font-semibold mb-1 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:via-yellow-400 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent`}>
//                       {item.title}
//                     </h3>

//                     <p className="text-muted-foreground text-sm leading-relaxed">
//                       {item.desc}
//                     </p>
                    
//                     {/* Decorative line on hover */}
//                     <div className={`w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 transition-all duration-500 mt-2`}></div>
//                   </div>

//                 </div>
//               </SectionWrapper>
//             ))}

//           </div>

//           {/* RIGHT IMAGE */}
//           <SectionWrapper>
//             <div className="relative group">
//               {/* Animated gradient ring */}
//               <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 rounded-[30px] blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
              
//               {/* Image container */}
//               <div className="relative rounded-[30px] overflow-hidden shadow-xl">
//                 <img
//                   src={diffImage}
//                   alt="MV Difference"
//                   className="w-full object-cover transition-all duration-700 group-hover:scale-110"
//                 />
                
//                 {/* Gradient overlay on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 via-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               </div>
              
//               {/* Decorative elements */}
//               <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-600/20 rounded-full blur-2xl animate-pulse"></div>
//               <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-700"></div>
//             </div>
//           </SectionWrapper>

//         </div>
        
//         {/* Optional: Bottom CTA */}
//         <SectionWrapper delay={400}>
//           <div className="text-center mt-20">
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600/10 via-yellow-400/10 to-blue-600/10 border border-pink-500/20">
//               <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-yellow-400 bg-clip-text text-transparent">
//                 Ready to experience the difference?
//               </span>
//               <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-600 to-yellow-400 flex items-center justify-center">
//                 <Rocket size={14} className="text-white" />
//               </div>
//             </div>
//           </div>
//         </SectionWrapper>
        
//       </div>
//     </section>
//   );
// };

// export default MVDifferencePage;






import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Users, Clock, Award, Target, Rocket, Handshake, Cpu, UserCheck, CheckCircle, Settings } from "lucide-react";

import diffImage from "@/assets/team-collaboration.jpg";

const differentiators = [
  {
    icon: Cpu,
    title: "Innovative and Enterprise graded Technologies",
    desc: "Leveraging advanced, scalable technologies built for enterprise performance.",
    color: "pink",
  },
  {
    icon: UserCheck,
    title: "Subject matter expert",
    desc: "Highly skilled experts delivering deep domain knowledge and precision.",
    color: "orange",
  },
  {
    icon: Settings,
    title: "Tailored solutions for customers unique requirements",
    desc: "Custom-built solutions designed to fit your exact business needs.",
    color: "yellow",
  },
  {
    icon: CheckCircle,
    title: "Quality product & services",
    desc: "Committed to delivering reliable, high-quality solutions every time.",
    color: "blue",
  },
  {
    icon: Rocket,
    title: "Project management with Proactive approach",
    desc: "Driving projects forward with proactive planning and execution.",
    color: "cyan",
  },
  {
    icon: Handshake,
    title: "Organizational direction towards customer centricity",
    desc: "Focused on building long-term partnerships through customer-first values.",
    color: "green",
  },
];

const bgMap: any = {
  pink: "bg-pink-600/10",
  orange: "bg-orange-500/10",
  yellow: "bg-yellow-400/10",
  blue: "bg-blue-600/10",
  cyan: "bg-cyan-500/10",
  green: "bg-green-500/10",
  magenta: "bg-magenta-500/10",
};

const textMap: any = {
  pink: "text-pink-500",
  orange: "text-orange-500",
  yellow: "text-yellow-500",
  blue: "text-blue-600",
  cyan: "text-cyan-500",
  green: "text-green-500",
  magenta: "text-magenta-500",
};

const MVDifferencePage = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-pink-50/30 to-yellow-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Heading */}
        <SectionWrapper>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold mb-4 block bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
              Why Choose Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
  <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
  bg-clip-text text-transparent">
    The MV Difference
  </span>
          </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We don't just meet expectations—we exceed them. Here's how we're different.
            </p>
          </div>
        </SectionWrapper>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT LIST */}
          <div className="space-y-10">

            {differentiators.map((item, i) => (
              <SectionWrapper key={i} delay={i * 80}>
                <div className="flex gap-5 group cursor-pointer">

                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${bgMap[item.color]} 
                    transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative overflow-hidden`}
                  >
                    {/* Animated gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <item.icon size={24} className={`${textMap[item.color]} relative z-10 group-hover:text-white transition-colors duration-300`} />
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-1 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:via-yellow-400 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent`}>
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    
                    {/* Decorative line on hover */}
                    <div className={`w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 transition-all duration-500 mt-2`}></div>
                  </div>

                </div>
              </SectionWrapper>
            ))}

          </div>

          {/* RIGHT IMAGE */}
          <SectionWrapper>
            <div className="relative group">
              {/* Animated gradient ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 rounded-[30px] blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
              
              {/* Image container */}
              <div className="relative rounded-[30px] overflow-hidden shadow-xl">
                <img
                  src={diffImage}
                  alt="MV Difference"
                  className="w-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 via-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-600/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-700"></div>
            </div>
          </SectionWrapper>

        </div>
        
        {/* Optional: Bottom CTA */}
        <SectionWrapper delay={400}>
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600/10 via-yellow-400/10 to-blue-600/10 border border-pink-500/20">
              <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-yellow-400 bg-clip-text text-transparent">
                Ready to experience the difference?
              </span>
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-600 to-yellow-400 flex items-center justify-center">
                <Rocket size={14} className="text-white" />
              </div>
            </div>
          </div>
        </SectionWrapper>
        
      </div>
    </section>
  );
};

export default MVDifferencePage;