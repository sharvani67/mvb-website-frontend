// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";

// // 👉 Replace these with your actual images
// import visionImg from "@/assets/vision 4.jpeg.webp";
// import missionImg from "@/assets/vision 4.jpeg.webp";

// const VisionMission = () => {
//   return (
//     <SectionWrapper>
//       <section className="py-20 bg-gradient-to-b from-white to-gray-100">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">

//           {/* Heading */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
//               Our Vision & Mission
//             </h2>
//             <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//               Empowering businesses with intelligent infrastructure and seamless solutions.
//             </p>
//           </div>

//           {/* Vision */}
//           <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            
//             {/* Image */}
//             <div className="relative group">
//               <img
//                 src={visionImg}
//                 alt="Vision"
//                 className="rounded-2xl shadow-xl w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent rounded-2xl"></div>
//             </div>

//             {/* Content */}
//             <div>
//               <h3 className="text-3xl font-semibold text-gray-800 mb-4">
//                 Our Vision
//               </h3>
//               <div className="w-16 h-1 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 mb-6 rounded"></div>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 Customer centricity with Peace of Mind.
//               </p>
//             </div>
//           </div>

//           {/* Mission */}
//           <div className="grid md:grid-cols-2 gap-12 items-center">
            
//             {/* Content */}
//             <div className="order-2 md:order-1">
//               <h3 className="text-3xl font-semibold text-gray-800 mb-4">
//                 Our Mission
//               </h3>
//               <div className="w-16 h-1 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 mb-6 rounded"></div>

//               <p className="text-gray-600 leading-relaxed mb-4">
//                 Our mission is to build Data Infra, Data Security, Data Physical Security & 
//                 Data Cabling with Artificial Intelligence as the Strategic Core — to deploy 
//                 end-to-end IT infrastructure that helps customers ease their business operations.
//               </p>

//               <p className="text-gray-600 leading-relaxed">
//                 We offer simplified solutions to complex challenges. Our talents create 
//                 innovative solutions and services that deliver customer centricity with peace of mind.
//               </p>
//             </div>

//             {/* Image */}
//             <div className="relative group order-1 md:order-2">
//               <img
//                 src={missionImg}
//                 alt="Mission"
//                 className="rounded-2xl shadow-xl w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent rounded-2xl"></div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </SectionWrapper>
//   );
// };

// export default VisionMission;






// import React from "react";
// import SectionReveal from "@/components/AboutCompo/SectionReveal";

// const VisionMission = () => {
//   return (
//     <section className="py-24 bg-[#f3f4f6]">
//       <div className="container mx-auto px-6">

//          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent text-center mb-6">
//                Our Vision & Mission
//              </h2>

//         {/* TOP SECTION */}
//         <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

//           {/* LEFT TITLE */}
//           <SectionReveal>
//             <div>
//               <h2 className="text-4xl md:text-6xl font-bold leading-tight text-center mb-4">
//                 Our Mission 
//               </h2>

             

//               {/* <div className="flex gap-2 mt-4">
//                 <div className="w-12 h-1 bg-black"></div>
//                 <div className="w-6 h-1 bg-green-500"></div>
//               </div> */}
//             </div>
//           </SectionReveal>

//           {/* MISSION CARD */}
//           <SectionReveal delay={0.1}>
//             <div className="relative bg-white rounded-xl shadow-sm p-8 flex items-center gap-6">
                

//               {/* IMAGE WITH COLOR OVERLAY */}
//               <div className="absolute -left-10 top-1/2 -translate-y-1/2">
//                 <div className="w-28 h-28 rounded-full overflow-hidden relative">
                  
//                   <img
//                     src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
//                     alt="mission"
//                     className="w-full h-full object-cover"
//                   />

//                   {/* GREEN OVERLAY */}
//                   <div className="absolute inset-0 bg-green-700/40"></div>

//                 </div>
//               </div>
              

//               {/* TEXT */}
//               <div className="ml-20">
//                 <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                Customer centricity with Peace of Mind
//                 </p>
//               </div>

//             </div>
//           </SectionReveal>

//         </div>

//         {/* BOTTOM SECTION */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">


//           {/* VISION CARD */}
//           <SectionReveal>
            
//             <div className="relative bg-white rounded-xl shadow-sm p-8 flex items-center gap-6">

//               {/* IMAGE WITH COLOR OVERLAY */}
//               <div className="absolute -left-10 top-1/2 -translate-y-1/2">
//                 <div className="w-28 h-28 rounded-full overflow-hidden relative">

//                   <img
//                     src="https://images.unsplash.com/photo-1518770660439-4636190af475"
//                     alt="vision"
//                     className="w-full h-full object-cover"
//                   />

//                   {/* GOLD OVERLAY */}
//                   <div className="absolute inset-0 bg-yellow-600/40"></div>

//                 </div>
//               </div>

//               {/* TEXT */}
//               <div className="ml-20">
//                 <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   Our mission is to build Data Infra, Data Security, Data Physical Security & Data Cabling with Artificial Intelligence as the Strategic Core- To deploy end to end IT Infra, that will help customers in ease of doing their business. 
// We offer simplified solutions to your complex challenges. Our talents create innovative solutions and services that delivers customer centricity with peace of mind.  

//                 </p>
//               </div>

//             </div>
            
//           </SectionReveal>

//             <SectionReveal>
//             <div>
//               <h2 className="text-4xl md:text-6xl font-bold leading-tight text-center mb-4">
//                  Our Vision
//               </h2>

//               {/* <div className="flex gap-2 mt-4">
//                 <div className="w-12 h-1 bg-black"></div>
//                 <div className="w-6 h-1 bg-green-500"></div>
//               </div> */}
//             </div>
//           </SectionReveal>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default VisionMission;




// import React from "react";
// import { Target, Rocket } from "lucide-react";

// const VisionMission = () => {
//   return (
//     <section className="py-20 bg-[#efefef]">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Title */}
//         <h2 className="text-4xl font-semibold text-center mb-16 text-gray-700">
//           Our Vision{" "}
//           <span className="text-[#2c7da0] border-b-4 border-[#2c7da0]">
//            & Mission
//           </span>
//         </h2>

//         {/* TOP - Vision */}
//         <div className="flex justify-start mb-20">
//           <div className="relative w-[620px] h-[180px]">

//             {/* Shape */}
//             <div className="absolute inset-0 bg-[#247ba0] shadow-lg vision-shape"></div>

//             {/* Content */}
//             <div className="relative z-10 flex items-center h-full px-8 text-white gap-6">
//               <Target size={70} />

//               <div>
//                 <h3 className="text-2xl font-semibold mb-2">Vision</h3>
//                 <p className="text-sm leading-relaxed text-white/90">
//                   Customer Centricity with Peace of Mind
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM - Mission */}
//         <div className="flex justify-end">
//           <div className="relative w-[620px] h-[200px]">

//             {/* Shape */}
//             <div className="absolute inset-0 bg-[#2a9d8f] shadow-lg mission-shape"></div>

//             {/* Content */}
//             <div className="relative z-10 flex items-center h-full px-8 text-white gap-6">
//               <Rocket size={70} />

//               <div>
//                 <h3 className="text-2xl font-semibold mb-2">Mission</h3>
//                 <p className="text-sm leading-relaxed text-white/90">
//                   Our mission is to build Data Cabling, Data Physical Security,
//                   Data Security, Data Infra & A.I. as Business Strategy to deploy
//                   Core IT Infra, helping customers ease their business operations.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Exact Shape Styling */}
//       <style jsx>{`
//         .vision-shape {
//           clip-path: polygon(
//             0% 0%,
//             85% 0%,
//             100% 50%,
//             85% 100%,
//             0% 100%
//           );
//         }

//         .mission-shape {
//           clip-path: polygon(
//             15% 0%,
//             100% 0%,
//             100% 100%,
//             15% 100%,
//             0% 50%
//           );
//         }
//       `}</style>
//     </section>
//   );
// };

// export default VisionMission;




// import React from "react";
// import { Target, Rocket } from "lucide-react";

// const VisionMission = () => {
//   return (
//     <section className="py-20 bg-[#efefef]">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Title */}
//         <h2 className="text-4xl font-semibold text-center mb-16 text-gray-700">
//           Our Vision{" "}
//           <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent border-b-4 border-pink-500">
//             & Mission
//           </span>
//         </h2>

//         {/* TOP - Vision */}
//         <div className="flex justify-start mb-20">
//           <div className="relative w-[620px] h-[180px]">

//             {/* Shape */}
//             <div className="absolute inset-0 shadow-lg vision-shape 
//               bg-gradient-to-r 
//               from-[#E11D48] 
//               via-[#FACC15] 
//               to-[#2563EB]">
//             </div>

//             {/* Content */}
//             <div className="relative z-10 flex items-center h-full px-8 text-white gap-6">
//               <Target size={70} />

//               <div>
//                 <h3 className="text-2xl font-semibold mb-2">Vision</h3>
//                 <p className="text-sm leading-relaxed text-white/90">
//                   Customer Centricity with Peace of Mind
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM - Mission */}
//         <div className="flex justify-end">
//           <div className="relative w-[620px] h-[200px]">

//             {/* Shape */}
//             <div className="absolute inset-0 shadow-lg mission-shape 
//               bg-gradient-to-r 
//               from-[#C026D3] 
//               via-[#22C55E] 
//               to-[#06B6D4]">
//             </div>

//             {/* Content */}
//             <div className="relative z-10 flex items-center h-full px-8 text-white gap-6">
//               <Rocket size={70} />

//               <div>
//                 <h3 className="text-2xl font-semibold mb-2">Mission</h3>
//                 <p className="text-sm leading-relaxed text-white/90">
//                   Our mission is to build Data Cabling, Data Physical Security,
//                   Data Security, Data Infra & A.I. as Business Strategy to deploy
//                   Core IT Infra, helping customers ease their business operations.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Exact Shape Styling */}
//       <style>{`
//         .vision-shape {
//           clip-path: polygon(
//             0% 0%,
//             85% 0%,
//             100% 50%,
//             85% 100%,
//             0% 100%
//           );
//         }

//         .mission-shape {
//           clip-path: polygon(
//             15% 0%,
//             100% 0%,
//             100% 100%,
//             15% 100%,
//             0% 50%
//           );
//         }
//       `}</style>
//     </section>
//   );
// };

// export default VisionMission;






// import React from "react";
// import { Target, Rocket } from "lucide-react";

// const VisionMission = () => {
//   return (
//    <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Title */}
//         <h2 className="text-4xl font-semibold text-center mb-20 text-gray-700">
//           Our Vision{" "}
//           <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent border-b-4 border-pink-500">
//             & Mission
//           </span>
//         </h2>

//         {/* TOP - Vision */}
//         <div className="flex items-center justify-between mb-24">

//           {/* LEFT CARD */}
//           <div className="relative w-[720px] h-[220px]">
//             <div className="absolute inset-0 shadow-lg vision-shape 
//               bg-gradient-to-r 
//               from-[#fb7185]   /* medium pink */
//               via-[#facc15]   /* yellow */
//               to-[#3b82f6]">  {/* blue */}
//             </div>

//             <div className="relative z-10 flex items-center h-full px-10 text-white gap-6">
//               <Target size={80} />

//               <div>
//                 <h3 className="text-3xl font-semibold mb-2">Vision</h3>
//                 <p className="text-base leading-relaxed text-white/90">
//                   Customer Centricity with Peace of Mind
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE HEADING */}
//          <div>
//   <h3 className="text-5xl font-bold bg-gradient-to-r 
//     from-[#E11D48] 
//     via-[#C026D3] 
//     to-[#06B6D4] 
//     bg-clip-text text-transparent">
//     Our Vision
//   </h3>
//     </div>

//         </div>

//         {/* BOTTOM - Mission */}
//         <div className="flex items-center justify-between">

//           {/* LEFT SIDE HEADING */}
//         <div>
//   <h3 className="text-5xl font-bold bg-gradient-to-r 
//     from-[#E11D48] 
//     via-[#C026D3] 
//     to-[#06B6D4] 
//     bg-clip-text text-transparent">
//     Our Mission
//   </h3>
//     </div>

//           {/* RIGHT CARD */}
//           <div className="relative w-[720px] h-[240px]">
//             <div className="absolute inset-0 shadow-lg mission-shape 
//               bg-gradient-to-r 
//               from-[#d946ef]   /* magenta */
//               via-[#22c55e]   /* green */
//               to-[#06b6d4]">  {/* cyan */}
//             </div>

//             <div className="relative z-10 flex items-center h-full px-10 text-white gap-6">
//               <Rocket size={80} />

//               <div>
//                 <h3 className="text-3xl font-semibold mb-2">Mission</h3>
//                 <p className="text-base leading-relaxed text-white/90">
//                   Our mission is to build Data Cabling, Data Physical Security, Data Security, Data Infra & A.I. as Business Strategy to deploy Core IT Infra, that will help customers in ease of doing their business.
//                 </p>
//                 <br></br>
//                 <p>We offer simplified solutions to your complex challenges. Our talents create innovative solutions and services that deliver customer centricity with peace of mind.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Shape Styling */}
//       <style>{`
//         .vision-shape {
//           clip-path: polygon(
//             0% 0%,
//             88% 0%,
//             100% 50%,
//             88% 100%,
//             0% 100%
//           );
//         }

//         .mission-shape {
//           clip-path: polygon(
//             12% 0%,
//             100% 0%,
//             100% 100%,
//             12% 100%,
//             0% 50%
//           );
//         }
//       `}</style>
//     </section>
//   );
// };

// export default VisionMission;






// import React from "react";
// import { Target, Rocket } from "lucide-react";

// const VisionMission = () => {
//   return (
//     <section className="py-14 bg-[#f9fafb]">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Title */}
//         <h2 className="text-4xl font-semibold text-center mb-14 text-gray-700">
//           Our Vision{" "}
//           <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent border-b-4 border-pink-500">
//             & Mission
//           </span>
//         </h2>

//         {/* TOP - Vision */}
//         <div className="flex items-center justify-between mb-14">

//           {/* LEFT CARD */}
//           <div className="relative w-[620px] h-[150px] group">
//             <div className="absolute inset-0 vision-shape bg-gradient-to-r 
//               from-[#fb7185] via-[#facc15] to-[#3b82f6]
//               shadow-xl group-hover:shadow-2xl transition-all duration-300">
//             </div>

//             <div className="relative z-10 flex items-center h-full px-8 gap-4">
//               <Target size={55} className="text-white" />

//               <div>
//                 <h3 className="text-2xl font-semibold text-white mb-1">Vision</h3>
//                 <p className="text-md text-black">
//                   Customer Centricity with Peace of Mind
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT HEADING */}
//           <div className="relative ">
//   <h3 className="text-4xl font-bold bg-gradient-to-r 
//     from-[#E11D48] via-[#C026D3] to-[#06B6D4] 
//     bg-clip-text text-transparent relative z-10">
//     Our Vision
//   </h3>

//   {/* Accent Line */}
//   <div className="h-[3px] w-20 mt-2 bg-gradient-to-r 
//     from-pink-500 via-purple-500 to-cyan-500 rounded-full"></div>

//   {/* Glow Effect */}
//   <div className="absolute -inset-2 bg-gradient-to-r 
//     from-pink-500/20 via-purple-500/20 to-cyan-500/20 
//     blur-xl rounded-full -z-10"></div>
// </div>
//         </div>

//         {/* BOTTOM - Mission */}
//         <div className="flex items-center justify-between mb-12">

//           {/* LEFT HEADING */}
//           <div className="relative text-left">
//   <h3 className="text-4xl font-bold bg-gradient-to-r 
//     from-[#E11D48] via-[#C026D3] to-[#06B6D4] 
//     bg-clip-text text-transparent relative z-10">
//     Our Mission
//   </h3>

//   {/* Accent Line */}
//   <div className="h-[3px] w-20 mt-2 bg-gradient-to-r 
//     from-pink-500 via-purple-500 to-cyan-500 rounded-full"></div>

//   {/* Glow Effect */}
//   <div className="absolute -inset-2 bg-gradient-to-r 
//     from-pink-500/20 via-purple-500/20 to-cyan-500/20 
//     blur-xl rounded-full -z-10"></div>
// </div>

//           {/* RIGHT CARD */}
//           <div className="relative w-[620px] h-[160px] group">
//             <div className="absolute inset-0 mission-shape bg-gradient-to-r 
//               from-[#d946ef] via-[#22c55e] to-[#06b6d4]
//               shadow-xl group-hover:shadow-2xl transition-all duration-300">
//             </div>

//             <div className="relative z-10 flex items-center h-full px-8 gap-4">
//               <Rocket size={125} className="text-white" />

//               <div>
//                 <h3 className="text-2xl font-semibold text-Black mb-1">Mission</h3>
//                 <p className="text-md text-white leading-snug">
//                   Our mission is to build Data Cabling, Data Physical Security,
//                   Data Security, Data Infra & A.I. as Business Strategy to deploy
//                   Core IT Infra that helps customers run their business effortlessly.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* PREMIUM CENTER CARD */}
//         <div className="flex justify-center mt-6">
//           <div className="relative max-w-4xl w-full p-[1px] rounded-2xl 
//             bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">

//             <div className="bg-white/80 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg">
//               <p className="text-center text-gray-700 text-lg leading-relaxed">
//                 We offer simplified solutions to your complex challenges. 
//                 Our talents create innovative solutions and services that 
//                 deliver customer centricity with peace of mind.
//               </p>
//             </div>

//           </div>
//         </div>

//       </div>

//       {/* Shapes */}
//       <style>{`
//         .vision-shape {
//           clip-path: polygon(
//             0% 0%,
//             88% 0%,
//             100% 50%,
//             88% 100%,
//             0% 100%
//           );
//         }

//         .mission-shape {
//           clip-path: polygon(
//             12% 0%,
//             100% 0%,
//             100% 100%,
//             12% 100%,
//             0% 50%
//           );
//         }
//       `}</style>
//     </section>
//   );
// };

// export default VisionMission;






// import React from "react";
// import { Target, Sparkles } from "lucide-react";

// const VisionMission = () => {
//   return (
//     <section className="py-16 bg-[#f5f5f5]">
//       <div className="max-w-6xl mx-auto px-6 text-center">

//         {/* Title */}
//         <h2 className="text-4xl font-semibold text-gray-700 mb-3">
//           Our Vision & Mission
//         </h2>

//         <div className="w-16 h-[3px] bg-green-500 mx-auto mb-12 rounded-full"></div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 gap-8">

//           {/* AIM CARD */}
//           <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-green-500 text-left">
            
//             <div className="flex items-center gap-4 mb-4">
//               <div className="bg-green-100 p-3 rounded-full">
//                 <Target className="text-green-600" size={24} />
//               </div>
//               <h3 className="text-2xl font-semibold text-gray-700">
//                 Our Vision
//               </h3>
//             </div>

//             <p className="text-gray-600 leading-relaxed">
//              Customer Centricity with Peace of Mind
//             </p>
//           </div>

//           {/* MISSION CARD */}
//           <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#c4a484] text-left">
            
//             <div className="flex items-center gap-4 mb-4">
//               <div className="bg-orange-100 p-3 rounded-full">
//                 <Sparkles className="text-orange-500" size={24} />
//               </div>
//               <h3 className="text-2xl font-semibold text-gray-700">
//                 Our Mission
//               </h3>
//             </div>

//             <p className="text-gray-600 leading-relaxed">
//   Our mission is to build{" "}
//   <span className="text-green-600 font-medium">
//     Data Cabling, Data Physical Security, Data Security, Data Infra & A.I.
//   </span>{" "}
//   as a business strategy to deploy{" "}
//   <span className="text-green-600 font-medium">
//     Core IT Infrastructure
//   </span>
//   , helping customers achieve ease of doing their business.
//           </p>
//           </div>
//         </div>

//         {/* Bottom Quote */}
//         <div className="mt-12">
//           <p className="text-gray-600 italic text-lg max-w-3xl mx-auto">
//             "We offer simplified solutions to your complex challenges. Our talents create innovative solutions and services that deliver customer centricity with peace of mind."
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default VisionMission;




// import React from "react";
// import { Target, Sparkles } from "lucide-react";

// const VisionMission = () => {
//   return (
//     <section className="py-16 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600">
//       <div className="max-w-6xl mx-auto px-6 text-center">

//         {/* Title */}
//         <h2 className="text-4xl font-semibold text-white mb-3">
//           Our Vision & Mission
//         </h2>

//         <div className="w-20 h-[4px] bg-white mx-auto mb-12 rounded-full"></div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 gap-8">

//           {/* VISION CARD */}
//           <div className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-xl border-t-4 border-[#E11D48] text-left hover:scale-105 transition">
            
//             <div className="flex items-center gap-4 mb-4">
//               <div className="bg-[#FEE2E2] p-3 rounded-full">
//                 <Target className="text-[#E11D48]" size={24} />
//               </div>
//               <h3 className="text-2xl font-semibold text-gray-800">
//                 Our Vision
//               </h3>
//             </div>

//             <p className="text-gray-600 leading-relaxed">
//               Customer Centricity with Peace of Mind
//             </p>
//           </div>

//           {/* MISSION CARD */}
//           <div className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-xl border-t-4 border-[#2563EB] text-left hover:scale-105 transition">
            
//             <div className="flex items-center gap-4 mb-4">
//               <div className="bg-[#DBEAFE] p-3 rounded-full">
//                 <Sparkles className="text-[#2563EB]" size={24} />
//               </div>
//               <h3 className="text-2xl font-semibold text-gray-800">
//                 Our Mission
//               </h3>
//             </div>

//             <p className="text-gray-600 leading-relaxed">
//               Our mission is to build{" "}
//               <span className="text-[#22C55E] font-medium">
//                 Data Cabling, Data Physical Security, Data Security, Data Infra & A.I.
//               </span>{" "}
//               as a business strategy to deploy{" "}
//               <span className="text-[#C026D3] font-medium">
//                 Core IT Infrastructure
//               </span>
//               , helping customers achieve ease of doing their business.
//             </p>
//           </div>
//         </div>

//         {/* Bottom Quote */}
//         <div className="mt-12">
//           <p className="text-white italic text-lg max-w-3xl mx-auto">
//             "We offer simplified solutions to your complex challenges. Our talents create innovative solutions and services that deliver customer centricity with peace of mind."
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default VisionMission;




import React from "react";
import { Target, Sparkles } from "lucide-react";

const VisionMission = () => {
  const isLight = true; // change to false if you want the softer version

  const backgroundStyle = {
    background: isLight
      ? "linear-gradient(to right, #FECDD3, #FEF08A, #BFDBFE)"
      : "linear-gradient(to right, #FFF1F2, #FEFCE8, #EFF6FF)",
  };

  return (
    <section className="py-16" style={backgroundStyle}>
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Our Vision & Mission
        </h2>

        <div className="w-20 h-[4px] bg-gray-700 mx-auto mb-12 rounded-full"></div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* VISION CARD */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#E11D48] text-left hover:scale-105 transition">
            
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#FEE2E2] p-3 rounded-full">
                <Target className="text-[#E11D48]" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Vision
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Customer Centricity with Peace of Mind
            </p>
          </div>

          {/* MISSION CARD */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#2563EB] text-left hover:scale-105 transition">
            
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#DBEAFE] p-3 rounded-full">
                <Sparkles className="text-[#2563EB]" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Mission
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed">
                Our mission is to build{" "}
                <span className="font-semibold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                  Data Cabling, Data Physical Security, Data Security, Data Infra & A.I.
                </span>{" "}
                as Business Strategy to deploy Core IT Infra, that will help customers in ease of doing their business.
              </p>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-12">
          <p className="text-gray-700 italic text-lg max-w-3xl mx-auto">
            "We offer simplified solutions to your complex challenges. Our talents create innovative solutions and services that deliver customer centricity with peace of mind."
          </p>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;