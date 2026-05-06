// import { Compass, TrendingUp, Shield, Cpu, Award } from "lucide-react";

// const steps = [
//   {
//     step: "2016",
//     title: "The Foundation",
//     desc: "MV Business Solutions incorporated with CIN U74999KA2016PTC093860. Founded by Venkatesh Krishnan with 22+ years of industry expertise.",
//     icon: Compass,
//     side: "left",
//   },
//   {
//     step: "2018",
//     title: "First Milestone",
//     desc: "Built strong presence in structured cabling delivering large enterprise deployments.",
//     icon: TrendingUp,
//     side: "right",
//   },
//   {
//     step: "2020",
//     title: "Security Excellence",
//     desc: "Expanded into Cyber Security including SOC, SIEM, VAPT and enterprise protection.",
//     icon: Shield,
//     side: "left",
//   },
//   {
//     step: "2022",
//     title: "AI Infrastructure",
//     desc: "Introduced AI-ready infrastructure including GPU servers, storage clusters and cooling systems.",
//     icon: Cpu,
//     side: "right",
//   },
//   {
//     step: "2024",
//     title: "Decade of Trust",
//     desc: "100,000+ network drops, 200+ enterprise clients and expanding across India.",
//     icon: Award,
//     side: "left",
//   },
// ];

// export default function TimelineSection() {
//   return (
//     <section className="py-28 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6 relative">

//         {/* S Curve Path */}
//         <svg
//           className="absolute left-1/2 -translate-x-1/2 top-0"
//           width="220"
//           height="1100"
//           viewBox="0 0 220 1100"
//           fill="none"
//         >
//           <path
//             d="M110 0 
//                C200 120, 20 240, 110 360
//                C200 480, 20 600, 110 720
//                C200 840, 20 960, 110 1080"
//             stroke="#94A3B8"
//             strokeWidth="3"
//             strokeDasharray="6 10"
//           />
//         </svg>

//         <div className="space-y-36 relative">

//           {steps.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className={`flex items-center ${
//                   item.side === "left"
//                     ? "justify-start"
//                     : "justify-end"
//                 }`}
//               >
//                 {/* LEFT CARD */}
//                 {item.side === "left" && (
//                   <>
//                     <div className="flex items-center bg-teal-500 text-white rounded-full px-6 py-5 w-[420px] shadow-lg">

//                       <div className="flex-1 pr-4">
//                         <h3 className="font-semibold text-lg">
//                           {item.title}
//                         </h3>
//                         <p className="text-sm opacity-90">
//                           {item.desc}
//                         </p>
//                       </div>

//                       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-md">
//                         <Icon size={26} />
//                       </div>
//                     </div>

//                     <div className="ml-6 text-gray-400">
//                       <p className="text-sm tracking-widest">YEAR</p>
//                       <p className="text-4xl font-bold">{item.step}</p>
//                     </div>
//                   </>
//                 )}

//                 {/* RIGHT CARD */}
//                 {item.side === "right" && (
//                   <>
//                     <div className="mr-6 text-gray-400 text-right">
//                       <p className="text-sm tracking-widest">YEAR</p>
//                       <p className="text-4xl font-bold">{item.step}</p>
//                     </div>

//                     <div className="flex items-center bg-cyan-600 text-white rounded-full px-6 py-5 w-[420px] shadow-lg">

//                       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-cyan-600 shadow-md mr-4">
//                         <Icon size={26} />
//                       </div>

//                       <div className="flex-1">
//                         <h3 className="font-semibold text-lg">
//                           {item.title}
//                         </h3>
//                         <p className="text-sm opacity-90">
//                           {item.desc}
//                         </p>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }






// import { Compass, TrendingUp, Shield, Cpu, Award } from "lucide-react";

// const steps = [
//   {
//     step: "2016",
//     title: "The Foundation",
//     desc: "MV Business Solutions incorporated with CIN U74999KA2016PTC093860. Founded by Venkatesh Krishnan with 22+ years of industry expertise.",
//     icon: Compass,
//     side: "left",
//     image:
//       "https://images.unsplash.com/photo-1553877522-43269d4ea984",
//   },
//   {
//     step: "2018",
//     title: "First Milestone",
//     desc: "Built strong presence in structured cabling delivering large enterprise deployments.",
//     icon: TrendingUp,
//     side: "right",
//     image:
//       "https://images.unsplash.com/photo-1551434678-e076c223a692",
//   },
//   {
//     step: "2020",
//     title: "Security Excellence",
//     desc: "Expanded into Cyber Security including SOC, SIEM, VAPT and enterprise protection.",
//     icon: Shield,
//     side: "left",
//     image:
//       "https://images.unsplash.com/photo-1563986768609-322da13575f3",
//   },
//   {
//     step: "2022",
//     title: "AI Infrastructure",
//     desc: "Introduced AI-ready infrastructure including GPU servers, storage clusters and cooling systems.",
//     icon: Cpu,
//     side: "right",
//     image:
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//   },
//   {
//     step: "2024",
//     title: "Decade of Trust",
//     desc: "100,000+ network drops, 200+ enterprise clients and expanding across India.",
//     icon: Award,
//     side: "left",
//     image:
//       "https://images.unsplash.com/photo-1556761175-b413da4baf72",
//   },
// ];

// export default function TimelineSection() {
//   return (
//     <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">

//       {/* Heading */}
//       <div className="text-center max-w-3xl mx-auto mb-24 px-6">
//         <h2 className="text-5xl font-bold text-gray-900 mb-6">
//           Our Journey of Innovation
//         </h2>
//         <p className="text-xl text-gray-600">
//           A decade of building enterprise IT infrastructure, delivering trust,
//           security and innovation across industries.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 relative">

//         {/* S Curve Path */}
//         <svg
//           className="absolute left-1/2 -translate-x-1/2 top-0"
//           width="220"
//           height="1100"
//           viewBox="0 0 220 1100"
//           fill="none"
//         >
//           <path
//             d="M110 0 
//                C200 120, 20 240, 110 360
//                C200 480, 20 600, 110 720
//                C200 840, 20 960, 110 1080"
//             stroke="#CBD5F5"
//             strokeWidth="3"
//             strokeDasharray="6 10"
//           />
//         </svg>

//         <div className="space-y-36 relative">

//           {steps.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className={`flex items-center ${
//                   item.side === "left"
//                     ? "justify-start"
//                     : "justify-end"
//                 }`}
//               >

//                 {/* LEFT CARD */}
//                 {item.side === "left" && (
//                   <>
//                     <div className="group flex items-center w-[500px] rounded-full overflow-hidden shadow-xl bg-white hover:shadow-2xl transition duration-500">

//                       {/* Image */}
//                       <div className="w-40 h-28 overflow-hidden">
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//                         />
//                       </div>

//                       {/* Content */}
//                       <div className="flex items-center px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white flex-1">

//                         <div className="flex-1 pr-4">
//                           <h3 className="font-semibold text-lg">
//                             {item.title}
//                           </h3>
//                           <p className="text-sm opacity-90">
//                             {item.desc}
//                           </p>
//                         </div>

//                         <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-md">
//                           <Icon size={24} />
//                         </div>

//                       </div>
//                     </div>

//                     {/* Year */}
//                     <div className="ml-6 text-gray-400">
//                       <p className="text-sm tracking-widest">YEAR</p>
//                       <p className="text-4xl font-bold">{item.step}</p>
//                     </div>
//                   </>
//                 )}

//                 {/* RIGHT CARD */}
//                 {item.side === "right" && (
//                   <>
//                     {/* Year */}
//                     <div className="mr-6 text-gray-400 text-right">
//                       <p className="text-sm tracking-widest">YEAR</p>
//                       <p className="text-4xl font-bold">{item.step}</p>
//                     </div>

//                     <div className="group flex items-center w-[500px] rounded-full overflow-hidden shadow-xl bg-white hover:shadow-2xl transition duration-500">

//                       {/* Icon */}
//                       <div className="flex items-center px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white flex-1">

//                         <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-cyan-600 shadow-md mr-4">
//                           <Icon size={24} />
//                         </div>

//                         <div>
//                           <h3 className="font-semibold text-lg">
//                             {item.title}
//                           </h3>
//                           <p className="text-sm opacity-90">
//                             {item.desc}
//                           </p>
//                         </div>

//                       </div>

//                       {/* Image */}
//                       <div className="w-40 h-28 overflow-hidden">
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//                         />
//                       </div>

//                     </div>
//                   </>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }




// import { Compass, TrendingUp, Shield, Cpu, Award } from "lucide-react";

// const steps = [
//   {
//     step: "2016",
//     title: "The Foundation",
//     desc: "MV Business Solutions incorporated with CIN U74999KA2016PTC093860. Founded by Venkatesh Krishnan with 22+ years of industry expertise.",
//     icon: Compass,
//     side: "left",
//     image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
//   },
//   {
//     step: "2018",
//     title: "First Milestone",
//     desc: "Built strong presence in structured cabling delivering large enterprise deployments.",
//     icon: TrendingUp,
//     side: "right",
//     image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
//   },
//   {
//     step: "2020",
//     title: "Security Excellence",
//     desc: "Expanded into Cyber Security including SOC, SIEM, VAPT and enterprise protection.",
//     icon: Shield,
//     side: "left",
//     image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
//   },
//   {
//     step: "2022",
//     title: "AI Infrastructure",
//     desc: "Introduced AI-ready infrastructure including GPU servers, storage clusters and cooling systems.",
//     icon: Cpu,
//     side: "right",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//   },
//   {
//     step: "2024",
//     title: "Decade of Trust",
//     desc: "100,000+ network drops, 200+ enterprise clients and expanding across India.",
//     icon: Award,
//     side: "left",
//     image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
//   },
// ];

// export default function TimelineSection() {
//   return (
//     <section className="py-32 bg-gradient-to-b from-gray-50 to-white">

//       {/* Heading */}
//       <div className="text-center max-w-3xl mx-auto mb-24 px-6">
//         <h2 className="text-5xl font-bold text-gray-900 mb-6">
//           Our Journey of Innovation
//         </h2>
//         <p className="text-xl text-gray-600">
//           A decade of building enterprise IT infrastructure and innovation.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 relative">

//         {/* S Curve */}
//         <svg
//           className="absolute left-1/2 -translate-x-1/2 top-0"
//           width="220"
//           height="1100"
//           viewBox="0 0 220 1100"
//           fill="none"
//         >
//           <path
//             d="M110 0 
//                C200 120, 20 240, 110 360
//                C200 480, 20 600, 110 720
//                C200 840, 20 960, 110 1080"
//             stroke="#CBD5F5"
//             strokeWidth="3"
//             strokeDasharray="6 10"
//           />
//         </svg>

//         <div className="space-y-40 relative">

//           {steps.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div key={index} className="relative">

//                 {/* YEAR BADGE ON CENTER LINE */}
//                 <div className="absolute left-1/2 -translate-x-1/2 top-10 z-20">
//                   <div className="w-20 h-20 rounded-full bg-white shadow-xl border flex flex-col items-center justify-center">
//                     <span className="text-xs text-gray-400">YEAR</span>
//                     <span className="text-lg font-bold text-gray-800">
//                       {item.step}
//                     </span>
//                   </div>
//                 </div>

//                 <div
//                   className={`flex items-center ${
//                     item.side === "left"
//                       ? "justify-start pr-20"
//                       : "justify-end pl-20"
//                   }`}
//                 >

//                   {/* LEFT CARD */}
//                   {item.side === "left" && (
//                     <div className="group flex items-center w-[520px] rounded-full overflow-hidden shadow-xl bg-white hover:shadow-2xl transition duration-500">

//                       {/* Image */}
//                       <div className="w-44 h-28 overflow-hidden">
//                         <img
//                           src={item.image}
//                           className="w-full h-full object-cover group-hover:scale-110 transition"
//                         />
//                       </div>

//                       {/* Content */}
//                       <div className="flex items-center px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white flex-1">

//                         <div className="flex-1 pr-4">
//                           <h3 className="font-semibold text-lg">
//                             {item.title}
//                           </h3>
//                           <p className="text-sm opacity-90">
//                             {item.desc}
//                           </p>
//                         </div>

//                         <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-md">
//                           <Icon size={24} />
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* RIGHT CARD */}
//                   {item.side === "right" && (
//                     <div className="group flex items-center w-[520px] rounded-full overflow-hidden shadow-xl bg-white hover:shadow-2xl transition duration-500">

//                       <div className="flex items-center px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white flex-1">

//                         <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-cyan-600 shadow-md mr-4">
//                           <Icon size={24} />
//                         </div>

//                         <div>
//                           <h3 className="font-semibold text-lg">
//                             {item.title}
//                           </h3>
//                           <p className="text-sm opacity-90">
//                             {item.desc}
//                           </p>
//                         </div>

//                       </div>

//                       {/* Image */}
//                       <div className="w-44 h-28 overflow-hidden">
//                         <img
//                           src={item.image}
//                           className="w-full h-full object-cover group-hover:scale-110 transition"
//                         />
//                       </div>

//                     </div>
//                   )}

//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }




// import { Compass, TrendingUp, Shield, Cpu, Award } from "lucide-react";

// const steps = [
//   {
//     step: "2016",
//     title: "The Foundation",
//     desc: "MV Business Solutions incorporated with CIN U74999KA2016PTC093860. Founded by Venkatesh Krishnan with 22+ years of industry expertise.",
//     icon: Compass,
//     side: "left",
//     image:
//       "https://images.unsplash.com/photo-1553877522-43269d4ea984",
//   },
//   {
//     step: "2018",
//     title: "First Milestone",
//     desc: "Built strong presence in structured cabling delivering large enterprise deployments.",
//     icon: TrendingUp,
//     side: "right",
//     image:
//       "https://images.unsplash.com/photo-1551434678-e076c223a692",
//   },
//   {
//     step: "2020",
//     title: "Security Excellence",
//     desc: "Expanded into Cyber Security including SOC, SIEM, VAPT and enterprise protection.",
//     icon: Shield,
//     side: "left",
//     image:
//       "https://images.unsplash.com/photo-1563986768609-322da13575f3",
//   },
//   {
//     step: "2022",
//     title: "AI Infrastructure",
//     desc: "Introduced AI-ready infrastructure including GPU servers, storage clusters and cooling systems.",
//     icon: Cpu,
//     side: "right",
//     image:
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//   },
//   {
//     step: "2024",
//     title: "Decade of Trust",
//     desc: "100,000+ network drops, 200+ enterprise clients and expanding across India.",
//     icon: Award,
//     side: "left",
//     image:
//       "https://images.unsplash.com/photo-1556761175-b413da4baf72",
//   },
// ];

// export default function TimelineSection() {
//   return (
//     <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">

//       {/* Heading */}
//       <div className="text-center max-w-3xl mx-auto mb-24 px-6">
//         <span className="text-sm font-semibold tracking-[0.3em] text-teal-600 uppercase mb-4 block">
//           Timeline
//         </span>
//         <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//           Our Journey of{" "}
//           <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
//             Innovation
//           </span>
//         </h2>
//         <p className="text-xl text-gray-600 leading-relaxed">
//           A decade of building enterprise IT infrastructure, delivering trust,
//           security and innovation across industries.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 relative">

//         {/* S Curve Path with Gradient */}
//         <svg
//           className="absolute left-1/2 -translate-x-1/2 top-0 z-0"
//           width="220"
//           height="1100"
//           viewBox="0 0 220 1100"
//           fill="none"
//         >
//           {/* Glow effect */}
//           <path
//             d="M110 0 
//                C200 120, 20 240, 110 360
//                C200 480, 20 600, 110 720
//                C200 840, 20 960, 110 1080"
//             stroke="#14B8A6"
//             strokeWidth="8"
//             strokeDasharray="6 10"
//             className="opacity-20 blur-md"
//           />
//           {/* Main path */}
//           <path
//             d="M110 0 
//                C200 120, 20 240, 110 360
//                C200 480, 20 600, 110 720
//                C200 840, 20 960, 110 1080"
//             stroke="url(#gradient)"
//             strokeWidth="3"
//             strokeDasharray="6 10"
//             fill="none"
//           />
//           <defs>
//             <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#14B8A6" />
//               <stop offset="50%" stopColor="#06B6D4" />
//               <stop offset="100%" stopColor="#3B82F6" />
//             </linearGradient>
//           </defs>
//         </svg>

//         {/* Timeline dots on S-curve */}
//         <div className="absolute left-1/2 -translate-x-1/2 z-10">
//           {steps.map((item, index) => {
//             const positions = ["top-[80px]", "top-[290px]", "top-[510px]", "top-[730px]", "top-[950px]"];
//             return (
//               <div
//                 key={index}
//                 className={`absolute left-1/2 -translate-x-1/2 ${positions[index]}`}
//               >
//                 {/* Pulse effect */}
//                 <div className="relative">
//                   <div className="absolute w-6 h-6 bg-teal-400 rounded-full animate-ping opacity-20" />
//                   <div className="relative w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg shadow-teal-300 flex items-center justify-center">
//                     <div className="w-2 h-2 bg-white rounded-full" />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="space-y-36 relative z-20">

//           {steps.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className={`flex items-center ${
//                   item.side === "left"
//                     ? "justify-start"
//                     : "justify-end"
//                 }`}
//               >

//                 {/* LEFT CARD */}
//                 {item.side === "left" && (
//                   <>
//                     <div className="group relative flex items-center w-[520px] rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                      
//                       {/* Gradient overlay on hover */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

//                       {/* Image */}
//                       <div className="relative w-40 h-32 overflow-hidden">
//                         <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 z-10" />
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                         />
//                       </div>

//                       {/* Content */}
//                       <div className="relative flex items-center px-6 py-5 flex-1">
                        
//                         <div className="flex-1 pr-4">
//                           <h3 className="font-bold text-gray-900 text-lg mb-1">
//                             {item.title}
//                           </h3>
//                           <p className="text-gray-600 text-sm leading-relaxed">
//                             {item.desc}
//                           </p>
//                         </div>

//                         <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
//                           <Icon size={24} />
//                         </div>

//                       </div>
//                     </div>

//                     {/* Year on timeline */}
//                     <div className="ml-8 relative">
//                       <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-8 bg-gradient-to-b from-teal-500 to-transparent" />
//                       <div className="bg-white px-6 py-3 rounded-2xl shadow-lg border border-gray-100">
//                         <p className="text-sm font-semibold text-teal-600 tracking-wider mb-1">YEAR</p>
//                         <p className="text-3xl font-black bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
//                           {item.step}
//                         </p>
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 {/* RIGHT CARD */}
//                 {item.side === "right" && (
//                   <>
//                     {/* Year on timeline */}
//                     <div className="mr-8 relative">
//                       <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
//                       <div className="bg-white px-6 py-3 rounded-2xl shadow-lg border border-gray-100">
//                         <p className="text-sm font-semibold text-cyan-600 tracking-wider mb-1">YEAR</p>
//                         <p className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
//                           {item.step}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="group relative flex items-center w-[520px] rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                      
//                       {/* Gradient overlay on hover */}
//                       <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500" />

//                       {/* Icon */}
//                       <div className="relative flex items-center px-6 py-5 flex-1">

//                         <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 mr-4">
//                           <Icon size={24} />
//                         </div>

//                         <div>
//                           <h3 className="font-bold text-gray-900 text-lg mb-1">
//                             {item.title}
//                           </h3>
//                           <p className="text-gray-600 text-sm leading-relaxed">
//                             {item.desc}
//                           </p>
//                         </div>

//                       </div>

//                       {/* Image */}
//                       <div className="relative w-40 h-32 overflow-hidden">
//                         <div className="absolute inset-0 bg-gradient-to-l from-cyan-600/20 to-blue-600/20 z-10" />
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                         />
//                       </div>

//                     </div>
//                   </>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Footer Stats */}
//       <div className="relative mt-32 text-center">
//         <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-96 h-96 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl -z-10" />
        
//         <div className="inline-flex flex-wrap justify-center gap-8 bg-white/80 backdrop-blur-sm px-12 py-6 rounded-full shadow-xl border border-gray-100">
//           <div className="flex items-center gap-3">
//             <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" />
//             <span className="text-gray-700 font-medium">2016 - 2024</span>
//           </div>
//           <div className="w-px h-8 bg-gray-200" />
//           <div className="flex items-center gap-3">
//             <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
//             <span className="text-gray-700 font-medium">200+ Clients</span>
//           </div>
//           <div className="w-px h-8 bg-gray-200" />
//           <div className="flex items-center gap-3">
//             <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
//             <span className="text-gray-700 font-medium">100K+ Drops</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// import { Compass, TrendingUp, Shield, Cpu, Award } from "lucide-react";

// const steps = [
//   {
//     step: "2016",
//     title: "The Foundation",
//     desc: "MV Business Solutions incorporated with CIN U74999KA2016PTC093860. Founded by Venkatesh Krishnan with 22+ years of industry expertise.",
//     icon: Compass,
//     side: "left",
//     image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
//   },
//   {
//     step: "2018",
//     title: "First Milestone",
//     desc: "Built strong presence in structured cabling delivering large enterprise deployments.",
//     icon: TrendingUp,
//     side: "right",
//     image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
//   },
//   {
//     step: "2020",
//     title: "Security Excellence",
//     desc: "Expanded into Cyber Security including SOC, SIEM, VAPT and enterprise protection.",
//     icon: Shield,
//     side: "left",
//     image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
//   },
//   {
//     step: "2022",
//     title: "AI Infrastructure",
//     desc: "Introduced AI-ready infrastructure including GPU servers, storage clusters and cooling systems.",
//     icon: Cpu,
//     side: "right",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//   },
//   {
//     step: "2024",
//     title: "Decade of Trust",
//     desc: "100,000+ network drops, 200+ enterprise clients and expanding across India.",
//     icon: Award,
//     side: "left",
//     image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
//   },
// ];

// export default function TimelineSection() {
//   return (
//     <section className="py-32 bg-gradient-to-b from-gray-50 to-white">

//       {/* Heading */}
//       <div className="text-center max-w-3xl mx-auto mb-24 px-6">
//         <h2 className="text-5xl font-bold text-gray-900 mb-6">
//           Our Journey of Innovation
//         </h2>
//         <p className="text-xl text-gray-600">
//           A decade of building enterprise IT infrastructure and innovation.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 relative">

//         {/* FIXED S CURVE */}
//         <svg
//           className="absolute left-1/2 -translate-x-1/2 top-0"
//           width="220"
//           height="1400"
//           viewBox="0 0 220 1400"
//           fill="none"
//         >
//           <path
//             d="M110 0
//                C200 140, 20 280, 110 420
//                C200 560, 20 700, 110 840
//                C200 980, 20 1120, 110 1260
//                C200 1340, 20 1380, 110 1400"
//             stroke="#CBD5F5"
//             strokeWidth="3"
//             strokeDasharray="6 10"
//           />
//         </svg>

//         <div className="space-y-40 relative">

//           {steps.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div key={index} className="relative">

//                 {/* YEAR NODE */}
//                 <div className="absolute left-1/2 -translate-x-1/2 top-10 z-20">
//                   <div className="w-20 h-20 rounded-full bg-white shadow-xl border flex flex-col items-center justify-center">
//                     <span className="text-xs text-gray-400">YEAR</span>
//                     <span className="text-lg font-bold text-gray-800">
//                       {item.step}
//                     </span>
//                   </div>
//                 </div>

//                 <div
//                   className={`flex items-center ${
//                     item.side === "left"
//                       ? "justify-start pr-20"
//                       : "justify-end pl-20"
//                   }`}
//                 >

//                   {/* LEFT CARD */}
//                   {item.side === "left" && (
//                     <div className="group flex items-center w-[520px] rounded-full overflow-hidden shadow-xl bg-white hover:shadow-2xl transition duration-500">

//                       <div className="w-44 h-28 overflow-hidden">
//                         <img
//                           src={item.image}
//                           className="w-full h-full object-cover group-hover:scale-110 transition"
//                         />
//                       </div>

//                       <div className="flex items-center px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white flex-1">

//                         <div className="flex-1 pr-4">
//                           <h3 className="font-semibold text-lg">
//                             {item.title}
//                           </h3>
//                           <p className="text-sm opacity-90">
//                             {item.desc}
//                           </p>
//                         </div>

//                         <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-md">
//                           <Icon size={24} />
//                         </div>

//                       </div>
//                     </div>
//                   )}

//                   {/* RIGHT CARD */}
//                   {item.side === "right" && (
//                     <div className="group flex items-center w-[520px] rounded-full overflow-hidden shadow-xl bg-white hover:shadow-2xl transition duration-500">

//                       <div className="flex items-center px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white flex-1">

//                         <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-cyan-600 shadow-md mr-4">
//                           <Icon size={24} />
//                         </div>

//                         <div>
//                           <h3 className="font-semibold text-lg">
//                             {item.title}
//                           </h3>
//                           <p className="text-sm opacity-90">
//                             {item.desc}
//                           </p>
//                         </div>

//                       </div>

//                       <div className="w-44 h-28 overflow-hidden">
//                         <img
//                           src={item.image}
//                           className="w-full h-full object-cover group-hover:scale-110 transition"
//                         />
//                       </div>

//                     </div>
//                   )}

//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }





// import { Compass, TrendingUp, Shield, Cpu, Award } from "lucide-react";
// import { useState } from "react";

// const steps = [
//   {
//     step: "2016",
//     title: "The Foundation",
//     desc: "MV Business Solutions incorporated with CIN U74999KA2016PTC093860.",
//     details:
//       "Founded by Venkatesh Krishnan with 22+ years of industry expertise in enterprise infrastructure, networking and IT deployment.",
//     icon: Compass,
//     side: "left",
//     image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
//   },
//   {
//     step: "2018",
//     title: "First Milestone",
//     desc: "Large enterprise structured cabling deployments.",
//     details:
//       "Successfully completed multiple enterprise-grade data cabling deployments across corporate and manufacturing environments.",
//     icon: TrendingUp,
//     side: "right",
//     image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
//   },
//   {
//     step: "2020",
//     title: "Security Excellence",
//     desc: "Expansion into cyber security solutions.",
//     details:
//       "Introduced SOC, SIEM, VAPT, endpoint protection and enterprise cyber defense solutions for critical infrastructure.",
//     icon: Shield,
//     side: "left",
//     image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
//   },
//   {
//     step: "2022",
//     title: "AI Infrastructure",
//     desc: "AI-ready infrastructure rollout.",
//     details:
//       "Deployment of GPU clusters, high-performance storage systems and cooling infrastructure for AI workloads.",
//     icon: Cpu,
//     side: "right",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//   },
//   {
//     step: "2024",
//     title: "Decade of Trust",
//     desc: "200+ enterprise clients across India.",
//     details:
//       "Over 100,000 network drops deployed, trusted by leading enterprises across multiple sectors.",
//     icon: Award,
//     side: "left",
//     image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
//   },
// ];

// export default function TimelineSection() {
//   const [active, setActive] = useState<number | null>(null);

//   return (
//     <section className="py-32 bg-gradient-to-b from-gray-50 to-white">

//       {/* Heading */}
//       <div className="text-center max-w-3xl mx-auto mb-24 px-6">
//         <h2 className="text-5xl font-bold text-gray-900 mb-6">
//           Our Journey of Innovation
//         </h2>
//         <p className="text-xl text-gray-600">
//           A decade of building enterprise IT infrastructure excellence.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 relative">

//         {/* S Curve */}
//         <svg
//           className="absolute left-1/2 -translate-x-1/2 top-0"
//           width="220"
//           height="1400"
//           viewBox="0 0 220 1400"
//           fill="none"
//         >
//           <path
//             d="M110 0
//                C200 140, 20 280, 110 420
//                C200 560, 20 700, 110 840
//                C200 980, 20 1120, 110 1260
//                C200 1340, 20 1380, 110 1400"
//             stroke="#CBD5F5"
//             strokeWidth="3"
//             strokeDasharray="6 10"
//           />
//         </svg>

//         <div className="space-y-40 relative">

//           {steps.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="relative"
//                 onMouseEnter={() => setActive(index)}
//                 onMouseLeave={() => setActive(null)}
//               >

//                 {/* YEAR NODE */}
//                 <div className="absolute left-1/2 -translate-x-1/2 top-10 z-20">
//                   <div className="w-20 h-20 rounded-full bg-white shadow-xl border flex flex-col items-center justify-center">
//                     <span className="text-xs text-gray-400">YEAR</span>
//                     <span className="text-lg font-bold text-gray-800">
//                       {item.step}
//                     </span>
//                   </div>
//                 </div>

//                 <div
//                   className={`flex items-center ${
//                     item.side === "left"
//                       ? "justify-start pr-20"
//                       : "justify-end pl-20"
//                   }`}
//                 >

//                   {/* CARD */}
//                   <div className="group flex items-center w-[520px] rounded-full overflow-hidden shadow-xl bg-white hover:shadow-2xl transition duration-500">

//                     {/* Image */}
//                     {item.side === "left" && (
//                       <div className="w-44 h-28 overflow-hidden">
//                         <img
//                           src={item.image}
//                           className="w-full h-full object-cover group-hover:scale-110 transition"
//                         />
//                       </div>
//                     )}

//                     <div className="flex items-center px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white flex-1">

//                       {item.side === "right" && (
//                         <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-cyan-600 shadow-md mr-4">
//                           <Icon size={24} />
//                         </div>
//                       )}

//                       <div className="flex-1">
//                         <h3 className="font-semibold text-lg">
//                           {item.title}
//                         </h3>
//                         <p className="text-sm opacity-90">
//                           {item.desc}
//                         </p>
//                       </div>

//                       {item.side === "left" && (
//                         <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-md">
//                           <Icon size={24} />
//                         </div>
//                       )}

//                     </div>

//                     {item.side === "right" && (
//                       <div className="w-44 h-28 overflow-hidden">
//                         <img
//                           src={item.image}
//                           className="w-full h-full object-cover group-hover:scale-110 transition"
//                         />
//                       </div>
//                     )}

//                   </div>
//                 </div>

//                 {/* HOVER POPUP */}
//                 {active === index && (
//                   <div
//                     className={`absolute top-0 ${
//                       item.side === "left" ? "right-[-360px]" : "left-[-360px]"
//                     } w-80 bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl overflow-hidden animate-fade`}
//                   >

//                     <img
//                       src={item.image}
//                       className="h-40 w-full object-cover"
//                     />

//                     <div className="p-6">

//                       <h4 className="text-xl font-bold text-gray-900 mb-2">
//                         {item.title}
//                       </h4>

//                       <p className="text-gray-600 text-sm leading-relaxed">
//                         {item.details}
//                       </p>

//                       <div className="mt-4 text-xs text-gray-400">
//                         Year {item.step}
//                       </div>

//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <style jsx>{`
//         .animate-fade {
//           animation: fadeIn 0.25s ease-out;
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }




// import { Compass, TrendingUp, Shield, Cpu, Award } from "lucide-react";
// import { useState } from "react";

// const steps = [
//   {
//     step: "2016",
//     title: "The Foundation",
//     desc: "MV Business Solutions incorporated with CIN U74999KA2016PTC093860.",
//     details:
//       "Founded by Venkatesh Krishnan with 22+ years of industry expertise in enterprise infrastructure, networking and IT deployment.",
//     icon: Compass,
//     side: "left",
//     image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
//   },
//   {
//     step: "2018",
//     title: "First Milestone",
//     desc: "Large enterprise structured cabling deployments.",
//     details:
//       "Successfully completed multiple enterprise-grade data cabling deployments across corporate and manufacturing environments.",
//     icon: TrendingUp,
//     side: "right",
//     image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
//   },
//   {
//     step: "2020",
//     title: "Security Excellence",
//     desc: "Expansion into cyber security solutions.",
//     details:
//       "Introduced SOC, SIEM, VAPT, endpoint protection and enterprise cyber defense solutions for critical infrastructure.",
//     icon: Shield,
//     side: "left",
//     image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
//   },
//   {
//     step: "2022",
//     title: "AI Infrastructure",
//     desc: "AI-ready infrastructure rollout.",
//     details:
//       "Deployment of GPU clusters, high-performance storage systems and cooling infrastructure for AI workloads.",
//     icon: Cpu,
//     side: "right",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//   },
//   {
//     step: "2024",
//     title: "Decade of Trust",
//     desc: "200+ enterprise clients across India.",
//     details:
//       "Over 100,000 network drops deployed, trusted by leading enterprises across multiple sectors.",
//     icon: Award,
//     side: "left",
//     image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
//   },
// ];

// export default function TimelineSection() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   return (
//     <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">

//       {/* Heading */}
//       <div className="text-center max-w-3xl mx-auto mb-24 px-6 relative z-10">
//         <span className="text-sm font-semibold tracking-[0.3em] text-teal-600 uppercase mb-4 block">
//           Timeline
//         </span>
//         <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//           Our Journey of{" "}
//           <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
//             Innovation
//           </span>
//         </h2>
//         <p className="text-xl text-gray-600 leading-relaxed">
//           A decade of building enterprise IT infrastructure excellence.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 relative">

//         {/* S Curve with glow */}
//         <svg
//           className="absolute left-1/2 -translate-x-1/2 top-0 z-0"
//           width="220"
//           height="1400"
//           viewBox="0 0 220 1400"
//           fill="none"
//         >
//           {/* Glow effect */}
//           <path
//             d="M110 0
//                C200 140, 20 280, 110 420
//                C200 560, 20 700, 110 840
//                C200 980, 20 1120, 110 1260
//                C200 1340, 20 1380, 110 1400"
//             stroke="#14B8A6"
//             strokeWidth="8"
//             strokeDasharray="6 10"
//             className="opacity-20 blur-md"
//           />
//           {/* Main path */}
//           <path
//             d="M110 0
//                C200 140, 20 280, 110 420
//                C200 560, 20 700, 110 840
//                C200 980, 20 1120, 110 1260
//                C200 1340, 20 1380, 110 1400"
//             stroke="url(#gradient)"
//             strokeWidth="3"
//             strokeDasharray="6 10"
//             fill="none"
//           />
//           <defs>
//             <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#14B8A6" />
//               <stop offset="50%" stopColor="#06B6D4" />
//               <stop offset="100%" stopColor="#3B82F6" />
//             </linearGradient>
//           </defs>
//         </svg>

//         {/* Timeline dots */}
//         <div className="absolute left-1/2 -translate-x-1/2 z-10">
//           {steps.map((item, index) => {
//             const positions = [
//               "top-[100px]",
//               "top-[380px]",
//               "top-[660px]",
//               "top-[940px]",
//               "top-[1220px]",
//             ];
//             return (
//               <div
//                 key={index}
//                 className={`absolute left-1/2 -translate-x-1/2 ${positions[index]}`}
//               >
//                 <div className="relative">
//                   <div className="absolute w-5 h-5 bg-teal-400 rounded-full animate-ping opacity-20" />
//                   <div className="relative w-5 h-5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg shadow-teal-300" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="space-y-40 relative z-20">
//           {steps.map((item, index) => {
//             const Icon = item.icon;
//             const isActive = activeIndex === index;

//             return (
//               <div
//                 key={index}
//                 className="relative"
//                 onMouseEnter={() => setActiveIndex(index)}
//                 onMouseLeave={() => setActiveIndex(null)}
//               >
//                 {/* YEAR NODE - Centered on S line */}
//                 <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30">
//                   <div className="relative">
//                     {/* Connecting line */}
//                     <div className="absolute left-1/2 -translate-x-1/2 -top-12 w-px h-12 bg-gradient-to-b from-teal-500 to-transparent" />
//                     <div className="w-20 h-20 rounded-full bg-white shadow-xl border border-gray-100 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300">
//                       <span className="text-xs font-semibold text-teal-600">YEAR</span>
//                       <span className="text-lg font-black text-gray-800">
//                         {item.step}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Card Container */}
//                 <div
//                   className={`flex items-center ${
//                     item.side === "left" ? "justify-start" : "justify-end"
//                   }`}
//                 >
//                   {/* CARD */}
//                   <div className="relative group flex items-center w-[540px] rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    
//                     {/* Gradient overlay on hover */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

//                     {/* Image on left for left-side cards */}
//                     {item.side === "left" && (
//                       <div className="relative w-44 h-32 overflow-hidden flex-shrink-0">
//                         <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 z-10" />
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                         />
//                       </div>
//                     )}

//                     {/* Content */}
//                     <div className={`flex items-center flex-1 px-6 py-5 ${
//                       item.side === "left" ? "" : "pl-8"
//                     }`}>
                      
//                       {/* Icon for right-side cards */}
//                       {item.side === "right" && (
//                         <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 mr-4 flex-shrink-0">
//                           <Icon size={24} />
//                         </div>
//                       )}

//                       {/* Text */}
//                       <div className={`flex-1 ${item.side === "right" ? "" : "pr-4"}`}>
//                         <h3 className="font-bold text-gray-900 text-lg mb-1">
//                           {item.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm leading-relaxed">
//                           {item.desc}
//                         </p>
//                       </div>

//                       {/* Icon for left-side cards */}
//                       {item.side === "left" && (
//                         <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ml-4 flex-shrink-0">
//                           <Icon size={24} />
//                         </div>
//                       )}
//                     </div>

//                     {/* Image on right for right-side cards */}
//                     {item.side === "right" && (
//                       <div className="relative w-44 h-32 overflow-hidden flex-shrink-0">
//                         <div className="absolute inset-0 bg-gradient-to-l from-cyan-600/20 to-blue-600/20 z-10" />
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* HOVER POPUP - Positioned directly beside the card */}
//                 {isActive && (
//                   <div
//                     className={`absolute top-1/2 -translate-y-1/2 ${
//                       item.side === "left" 
//                         ? "left-[calc(50%+140px)]" 
//                         : "right-[calc(50%+140px)]"
//                     } w-80 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl overflow-hidden z-50`}
//                     style={{
//                       animation: "popupFade 0.2s ease-out",
//                     }}
//                   >
//                     {/* Image */}
//                     <div className="relative h-40 overflow-hidden">
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                       <div className="absolute bottom-3 left-4">
//                         <span className="text-white text-sm font-semibold bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
//                           {item.step}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6">
//                       <h4 className="text-xl font-bold text-gray-900 mb-3">
//                         {item.title}
//                       </h4>
//                       <p className="text-gray-600 text-sm leading-relaxed">
//                         {item.details}
//                       </p>
                      
//                       {/* Decorative line */}
//                       <div className="mt-4 w-12 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full" />
//                     </div>

//                     {/* Close indicator */}
//                     <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white text-xs">
//                       ✕
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Footer Stats */}
//       <div className="relative mt-32 text-center z-10">
//         <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-96 h-96 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl -z-10" />
        
//         <div className="inline-flex flex-wrap justify-center gap-8 bg-white/80 backdrop-blur-sm px-12 py-6 rounded-full shadow-xl border border-gray-100">
//           <div className="flex items-center gap-3">
//             <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" />
//             <span className="text-gray-700 font-medium">2016 - 2024</span>
//           </div>
//           <div className="w-px h-8 bg-gray-200" />
//           <div className="flex items-center gap-3">
//             <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
//             <span className="text-gray-700 font-medium">200+ Clients</span>
//           </div>
//           <div className="w-px h-8 bg-gray-200" />
//           <div className="flex items-center gap-3">
//             <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
//             <span className="text-gray-700 font-medium">100K+ Drops</span>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes popupFade {
//           from {
//             opacity: 0;
//             transform: translateY(-50%) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(-50%) scale(1);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }





// import { Compass, TrendingUp, Shield, Cpu, Award } from "lucide-react";
// import { useState } from "react";

// const steps = [
//   {
//     step: "2016",
//     title: "The Foundation",
//     desc: "MV Business Solutions incorporated with CIN U74999KA2016PTC093860. Founded by Venkatesh Krishnan with 22+ years of industry expertise.",
//     icon: Compass,
//     side: "left",
//     image:
//       "https://images.unsplash.com/photo-1553877522-43269d4ea984",
//   },
//   {
//     step: "2018",
//     title: "First Milestone",
//     desc: "Built strong presence in structured cabling delivering large enterprise deployments.",
//     icon: TrendingUp,
//     side: "right",
//     image:
//       "https://images.unsplash.com/photo-1551434678-e076c223a692",
//   },
//   {
//     step: "2020",
//     title: "Security Excellence",
//     desc: "Expanded into Cyber Security including SOC, SIEM, VAPT and enterprise protection.",
//     icon: Shield,
//     side: "left",
//     image:
//       "https://images.unsplash.com/photo-1563986768609-322da13575f3",
//   },
//   {
//     step: "2022",
//     title: "AI Infrastructure",
//     desc: "Introduced AI-ready infrastructure including GPU servers, storage clusters and cooling systems.",
//     icon: Cpu,
//     side: "right",
//     image:
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//   },
//   {
//     step: "2024",
//     title: "Decade of Trust",
//     desc: "100,000+ network drops, 200+ enterprise clients and expanding across India.",
//     icon: Award,
//     side: "left",
//     image:
//       "https://images.unsplash.com/photo-1556761175-b413da4baf72",
//   },
// ];

// export default function TimelineSection() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   return (
//     <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">

//       {/* Heading */}
//       <div className="text-center max-w-3xl mx-auto mb-24 px-6">
//         <span className="text-sm font-semibold tracking-[0.3em] text-teal-600 uppercase mb-4 block">
//           Timeline
//         </span>
//         <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//           Our Journey of{" "}
//           <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
//             Innovation
//           </span>
//         </h2>
//         <p className="text-xl text-gray-600 leading-relaxed">
//           A decade of building enterprise IT infrastructure, delivering trust,
//           security and innovation across industries.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 relative">

//         {/* S Curve Path with Gradient */}
//         <svg
//           className="absolute left-1/2 -translate-x-1/2 top-0 z-0"
//           width="220"
//           height="1100"
//           viewBox="0 0 220 1100"
//           fill="none"
//         >
//           {/* Glow effect */}
//           <path
//             d="M110 0 
//                C200 120, 20 240, 110 360
//                C200 480, 20 600, 110 720
//                C200 840, 20 960, 110 1080"
//             stroke="#14B8A6"
//             strokeWidth="8"
//             strokeDasharray="6 10"
//             className="opacity-20 blur-md"
//           />
//           {/* Main path */}
//           <path
//             d="M110 0 
//                C200 120, 20 240, 110 360
//                C200 480, 20 600, 110 720
//                C200 840, 20 960, 110 1080"
//             stroke="url(#gradient)"
//             strokeWidth="3"
//             strokeDasharray="6 10"
//             fill="none"
//           />
//           <defs>
//             <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#14B8A6" />
//               <stop offset="50%" stopColor="#06B6D4" />
//               <stop offset="100%" stopColor="#3B82F6" />
//             </linearGradient>
//           </defs>
//         </svg>

//         {/* Timeline dots on S-curve */}
//         <div className="absolute left-1/2 -translate-x-1/2 z-10">
//           {steps.map((item, index) => {
//             const positions = [
//               "top-[80px]",
//               "top-[290px]",
//               "top-[510px]",
//               "top-[730px]",
//               "top-[950px]",
//             ];
//             return (
//               <div
//                 key={index}
//                 className={`absolute left-1/2 -translate-x-1/2 ${positions[index]}`}
//               >
//                 {/* Pulse effect */}
//                 <div className="relative">
//                   <div className="absolute w-6 h-6 bg-teal-400 rounded-full animate-ping opacity-20" />
//                   <div className="relative w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg shadow-teal-300 flex items-center justify-center">
//                     <div className="w-2 h-2 bg-white rounded-full" />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="space-y-36 relative z-20">

//           {steps.map((item, index) => {
//             const Icon = item.icon;
//             const isActive = activeIndex === index;

//             return (
//               <div
//                 key={index}
//                 className={`relative flex items-center ${
//                   item.side === "left"
//                     ? "justify-start"
//                     : "justify-end"
//                 }`}
//                 onMouseEnter={() => setActiveIndex(index)}
//                 onMouseLeave={() => setActiveIndex(null)}
//               >

//                 {/* LEFT CARD */}
//                 {item.side === "left" && (
//                   <>
//                     <div className="group relative flex items-center w-[520px] rounded-full overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                      
//                       {/* Gradient overlay on hover */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

//                       {/* Image - Fixed to fully occupy space */}
//                       <div className="relative w-40 h-28 overflow-hidden flex-shrink-0">
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 z-10" />
//                       </div>

//                       {/* Content */}
//                       <div className="relative flex items-center px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white flex-1 h-28">
                        
//                         <div className="flex-1 pr-4">
//                           <h3 className="font-bold text-lg mb-1">
//                             {item.title}
//                           </h3>
//                           <p className="text-sm opacity-90 leading-relaxed line-clamp-2">
//                             {item.desc}
//                           </p>
//                         </div>

//                         <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
//                           <Icon size={24} />
//                         </div>

//                       </div>
//                     </div>

//                     {/* Year on timeline */}
//                     <div className="ml-8 relative">
//                       <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-8 bg-gradient-to-b from-teal-500 to-transparent" />
//                       <div className="bg-white px-6 py-3 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
//                         <p className="text-sm font-semibold text-teal-600 tracking-wider mb-1">YEAR</p>
//                         <p className="text-3xl font-black bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
//                           {item.step}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Hover Popup for left card - moved away from S-line and height reduced */}
//                     {isActive && (
//                       <div className="absolute left-[680px] top-1/2 -translate-y-1/2 w-72 bg-white rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-100"
//                         style={{
//                           animation: "popupFade 0.2s ease-out",
//                         }}
//                       >
//                         <div className="h-28 overflow-hidden">
//                           <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
//                         </div>
//                         <div className="p-4">
//                           <h4 className="text-base font-bold text-gray-900 mb-1">{item.title}</h4>
//                           <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
//                             Founded by Venkatesh Krishnan with 22+ years of industry expertise in enterprise infrastructure, networking and IT deployment.
//                           </p>
//                           <div className="mt-2 text-xs font-semibold text-teal-600">Year {item.step}</div>
//                         </div>
//                       </div>
//                     )}
//                   </>
//                 )}

//                 {/* RIGHT CARD */}
//                 {item.side === "right" && (
//                   <>
//                     {/* Year on timeline */}
//                     <div className="mr-8 relative">
//                       <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
//                       <div className="bg-white px-6 py-3 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
//                         <p className="text-sm font-semibold text-cyan-600 tracking-wider mb-1">YEAR</p>
//                         <p className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
//                           {item.step}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="group relative flex items-center w-[520px] rounded-full overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                      
//                       {/* Gradient overlay on hover */}
//                       <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500" />

//                       {/* Content */}
//                       <div className="relative flex items-center px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white flex-1 h-28">

//                         <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-cyan-600 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 mr-4 flex-shrink-0">
//                           <Icon size={24} />
//                         </div>

//                         <div className="flex-1 pr-4">
//                           <h3 className="font-bold text-lg mb-1">
//                             {item.title}
//                           </h3>
//                           <p className="text-sm opacity-90 leading-relaxed line-clamp-2">
//                             {item.desc}
//                           </p>
//                         </div>

//                       </div>

//                       {/* Image - Fixed to fully occupy space */}
//                       <div className="relative w-40 h-28 overflow-hidden flex-shrink-0">
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-l from-cyan-600/20 to-blue-600/20 z-10" />
//                       </div>
//                     </div>

//                     {/* Hover Popup for right card - moved away from S-line and height reduced */}
//                     {isActive && (
//                       <div className="absolute right-[680px] top-1/2 -translate-y-1/2 w-72 bg-white rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-100"
//                         style={{
//                           animation: "popupFade 0.2s ease-out",
//                         }}
//                       >
//                         <div className="h-28 overflow-hidden">
//                           <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
//                         </div>
//                         <div className="p-4">
//                           <h4 className="text-base font-bold text-gray-900 mb-1">{item.title}</h4>
//                           <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
//                             Expanded our capabilities with cutting-edge solutions for enterprise clients across multiple sectors.
//                           </p>
//                           <div className="mt-2 text-xs font-semibold text-cyan-600">Year {item.step}</div>
//                         </div>
//                       </div>
//                     )}
//                   </>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Footer Stats */}
//       <div className="relative mt-32 text-center">
//         <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-96 h-96 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl -z-10" />
        
//         <div className="inline-flex flex-wrap justify-center gap-8 bg-white/80 backdrop-blur-sm px-12 py-6 rounded-full shadow-xl border border-gray-100">
//           <div className="flex items-center gap-3">
//             <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" />
//             <span className="text-gray-700 font-medium">2016 - 2024</span>
//           </div>
//           <div className="w-px h-8 bg-gray-200" />
//           <div className="flex items-center gap-3">
//             <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
//             <span className="text-gray-700 font-medium">200+ Clients</span>
//           </div>
//           <div className="w-px h-8 bg-gray-200" />
//           <div className="flex items-center gap-3">
//             <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
//             <span className="text-gray-700 font-medium">100K+ Drops</span>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes popupFade {
//           from {
//             opacity: 0;
//             transform: translateY(-50%) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(-50%) scale(1);
//           }
//         }
        
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
        
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   );
// }





import { Compass, TrendingUp, Shield, Cpu, Award } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    step: "2016",
    title: "The Foundation",
    desc: "MV Business Solutions incorporated with CIN U74999KA2016PTC093860. Founded by Venkatesh Krishnan with 22+ years of industry expertise.",
    icon: Compass,
    side: "left",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea384",
  },
  {
    step: "2018",
    title: "First Milestone",
    desc: "Built strong presence in structured cabling delivering large enterprise deployments.",
    icon: TrendingUp,
    side: "right",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692",
  },
  {
    step: "2020",
    title: "Security Excellence",
    desc: "Expanded into Cyber Security including SOC, SIEM, VAPT and enterprise protection.",
    icon: Shield,
    side: "left",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  },
  {
    step: "2022",
    title: "AI Infrastructure",
    desc: "Introduced AI-ready infrastructure including GPU servers, storage clusters and cooling systems.",
    icon: Cpu,
    side: "right",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    step: "2024",
    title: "Decade of Trust",
    desc: "100,000+ network drops, 200+ enterprise clients and expanding across India.",
    icon: Award,
    side: "left",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72",
  },
];

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-24 px-4 sm:px-6">
        <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] text-teal-600 uppercase mb-2 sm:mb-4 block">
          Timeline
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          Our Journey of{" "}
          <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent block sm:inline">
            Innovation
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-2">
          A decade of building enterprise IT infrastructure, delivering trust,
          security and innovation across industries.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* S Curve Path - Hidden on mobile, visible on lg screens */}
        <svg
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 z-0"
          width="220"
          height="1100"
          viewBox="0 0 220 1100"
          fill="none"
        >
          {/* Glow effect */}
          <path
            d="M110 0 
               C200 120, 20 240, 110 360
               C200 480, 20 600, 110 720
               C200 840, 20 960, 110 1080"
            stroke="#14B8A6"
            strokeWidth="8"
            strokeDasharray="6 10"
            className="opacity-20 blur-md"
          />
          {/* Main path */}
          <path
            d="M110 0 
               C200 120, 20 240, 110 360
               C200 480, 20 600, 110 720
               C200 840, 20 960, 110 1080"
            stroke="url(#gradient)"
            strokeWidth="3"
            strokeDasharray="6 10"
            fill="none"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#14B8A6" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Timeline dots on S-curve - Hidden on mobile */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 z-10">
          {steps.map((item, index) => {
            const positions = [
              "top-[80px]",
              "top-[290px]",
              "top-[510px]",
              "top-[730px]",
              "top-[950px]",
            ];
            return (
              <div
                key={index}
                className={`absolute left-1/2 -translate-x-1/2 ${positions[index]}`}
              >
                {/* Pulse effect */}
                <div className="relative">
                  <div className="absolute w-4 h-4 lg:w-6 lg:h-6 bg-teal-400 rounded-full animate-ping opacity-20" />
                  <div className="relative w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg shadow-teal-300 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile timeline indicator */}
        <div className="lg:hidden flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">2016 - 2024 Journey</span>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12 lg:space-y-36 relative z-20">

          {steps.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`relative flex flex-col ${
                  item.side === "left" 
                    ? "lg:justify-start" 
                    : "lg:justify-end"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Mobile/Tablet View - Stacked layout */}
                <div className="lg:hidden space-y-3">
                  
                  {/* Year Badge */}
                  <div className="flex items-center gap-3">
                    <div className={`w-1 h-8 ${
                      item.side === "left" ? "bg-teal-500" : "bg-cyan-500"
                    } rounded-full`} />
                    <div className="bg-white px-4 py-2 rounded-xl shadow-md border border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 mb-0.5">YEAR</p>
                      <p className={`text-xl font-black ${
                        item.side === "left" 
                          ? "text-teal-600" 
                          : "text-cyan-600"
                      }`}>
                        {item.step}
                      </p>
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`group relative flex flex-col sm:flex-row rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-500 ${
                    item.side === "left" 
                      ? "lg:flex-row" 
                      : "lg:flex-row-reverse"
                  }`}>
                    
                    {/* Image */}
                    <div className={`relative w-full sm:w-48 h-40 sm:h-auto overflow-hidden flex-shrink-0 ${
                      item.side === "left" ? "lg:order-1" : "lg:order-3"
                    }`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                      <div className={`absolute inset-0 ${
                        item.side === "left"
                          ? "bg-gradient-to-r from-teal-600/20 to-cyan-600/20"
                          : "bg-gradient-to-l from-cyan-600/20 to-blue-600/20"
                      } z-10`} />
                    </div>

                    {/* Content */}
                    <div className={`relative flex-1 p-4 sm:p-6 ${
                      item.side === "left"
                        ? "bg-gradient-to-r from-teal-500 to-cyan-600"
                        : "bg-gradient-to-r from-cyan-600 to-blue-600"
                    } text-white`}>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                          <Icon size={20} className="sm:w-6 sm:h-6 text-teal-600" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-bold text-base sm:text-lg mb-1">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm opacity-90 leading-relaxed line-clamp-3 sm:line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop View - Original layout */}
                <div className="hidden lg:block w-full">
                  {/* LEFT CARD */}
                  {item.side === "left" && (
                    <div className="relative flex items-center justify-start">
                      <div className="group relative flex items-center w-[520px] rounded-full overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

                        {/* Image */}
                        <div className="relative w-40 h-28 overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 z-10" />
                        </div>

                        {/* Content */}
                        <div className="relative flex items-center px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white flex-1 h-28">
                          
                          <div className="flex-1 pr-4">
                            <h3 className="font-bold text-lg mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm opacity-90 leading-relaxed line-clamp-2">
                              {item.desc}
                            </p>
                          </div>

                          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                            <Icon size={24} />
                          </div>

                        </div>
                      </div>

                      {/* Year on timeline */}
                      <div className="ml-8 relative">
                        <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-8 bg-gradient-to-b from-teal-500 to-transparent" />
                        <div className="bg-white px-6 py-3 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                          <p className="text-sm font-semibold text-teal-600 tracking-wider mb-1">YEAR</p>
                          <p className="text-3xl font-black bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                            {item.step}
                          </p>
                        </div>
                      </div>

                      {/* Hover Popup */}
                      {isActive && (
                        <div className="absolute left-[680px] top-1/2 -translate-y-1/2 w-72 bg-white rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-100"
                          style={{
                            animation: "popupFade 0.2s ease-out",
                          }}
                        >
                          <div className="h-28 overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-4">
                            <h4 className="text-base font-bold text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                              Founded by Venkatesh Krishnan with 22+ years of industry expertise.
                            </p>
                            <div className="mt-2 text-xs font-semibold text-teal-600">Year {item.step}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* RIGHT CARD */}
                  {item.side === "right" && (
                    <div className="relative flex items-center justify-end">
                      {/* Year on timeline */}
                      <div className="mr-8 relative">
                        <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
                        <div className="bg-white px-6 py-3 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                          <p className="text-sm font-semibold text-cyan-600 tracking-wider mb-1">YEAR</p>
                          <p className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                            {item.step}
                          </p>
                        </div>
                      </div>

                      <div className="group relative flex items-center w-[520px] rounded-full overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500" />

                        {/* Content */}
                        <div className="relative flex items-center px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white flex-1 h-28">

                          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-cyan-600 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 mr-4 flex-shrink-0">
                            <Icon size={24} />
                          </div>

                          <div className="flex-1 pr-4">
                            <h3 className="font-bold text-lg mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm opacity-90 leading-relaxed line-clamp-2">
                              {item.desc}
                            </p>
                          </div>

                        </div>

                        {/* Image */}
                        <div className="relative w-40 h-28 overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-l from-cyan-600/20 to-blue-600/20 z-10" />
                        </div>
                      </div>

                      {/* Hover Popup */}
                      {isActive && (
                        <div className="absolute right-[680px] top-1/2 -translate-y-1/2 w-72 bg-white rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-100"
                          style={{
                            animation: "popupFade 0.2s ease-out",
                          }}
                        >
                          <div className="h-28 overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-4">
                            <h4 className="text-base font-bold text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                              Expanded our capabilities with cutting-edge solutions.
                            </p>
                            <div className="mt-2 text-xs font-semibold text-cyan-600">Year {item.step}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="relative mt-16 md:mt-24 lg:mt-32 text-center">
        <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl -z-10" />
        
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 bg-white/80 backdrop-blur-sm px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl sm:rounded-full shadow-xl border border-gray-100 mx-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-sm sm:text-base text-gray-700 font-medium">2016 - 2024</span>
          </div>
          <div className="hidden sm:block w-px h-6 md:h-8 bg-gray-200" />
          <div className="sm:hidden w-12 h-px bg-gray-200" />
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-sm sm:text-base text-gray-700 font-medium">200+ Clients</span>
          </div>
          <div className="hidden sm:block w-px h-6 md:h-8 bg-gray-200" />
          <div className="sm:hidden w-12 h-px bg-gray-200" />
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm sm:text-base text-gray-700 font-medium">100K+ Drops</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes popupFade {
          from {
            opacity: 0;
            transform: translateY(-50%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) scale(1);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 1023px) {
          .line-clamp-3 {
            -webkit-line-clamp: 3;
          }
        }
      `}</style>
    </section>
  );
}