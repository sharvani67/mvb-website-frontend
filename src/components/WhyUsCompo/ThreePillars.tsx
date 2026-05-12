// import React, { useState } from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { ShieldCheck, Lightbulb, TrendingUp } from "lucide-react";

// import trustImg from "@/assets/team-collaboration.jpg";
// import innovationImg from "@/assets/team-collaboration.jpg";
// import growthImg from "@/assets/team-collaboration.jpg";

// const coreValues = [
//   {
//     icon: ShieldCheck,
//     title: "Uncompromising Trust",
//     desc: "We build relationships on transparency, integrity, and delivering on our promises.",
//     stats: "99.9% Client Retention",
//     image: trustImg,
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovation First",
//     desc: "We don’t just follow trends—we set them.",
//     stats: "15+ Years R&D Investment",
//     image: innovationImg,
//   },
//   {
//     icon: TrendingUp,
//     title: "Growth Partnership",
//     desc: "Your success is our success.",
//     stats: "200% Avg. Client Growth",
//     image: growthImg,
//   },
// ];

// export default function CoreValuesSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="py-28">
//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Section Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-20">
//             <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-4 block">
//               Our Foundation
//             </span>

//             <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
//               Built on Three Pillars
//             </h2>

//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Every solution we deliver is rooted in our core values.
//             </p>
//           </div>
//         </SectionWrapper>

//         {/* Main Layout */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT IMAGE */}
//           <div className="relative">
//             <img
//               src={coreValues[activeIndex].image}
//               className="rounded-3xl shadow-xl w-full h-[450px] object-cover transition-all duration-500"
//             />
//           </div>

//           {/* RIGHT CARDS */}
//           <div className="space-y-6">

//             {coreValues.map((value, i) => (
//               <div
//                 key={value.title}
//                 onClick={() => setActiveIndex(i)}
//                 className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300
//                 ${
//                   activeIndex === i
//                     ? "border-mv-magenta bg-mv-magenta/10"
//                     : "border-gray-200 hover:border-mv-magenta"
//                 }`}
//               >
//                 <div className="flex gap-4 items-start">

//                   <div className="w-14 h-14 rounded-xl bg-mv-magenta/10 flex items-center justify-center">
//                     <value.icon size={28} className="text-mv-magenta" />
//                   </div>

//                   <div>
//                     <h3 className="text-xl font-bold mb-2">{value.title}</h3>

//                     <p className="text-muted-foreground text-sm mb-3">
//                       {value.desc}
//                     </p>

//                     <span className="text-mv-magenta font-semibold text-sm">
//                       {value.stats}
//                     </span>
//                   </div>

//                 </div>
//               </div>
//             ))}

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




// import React, { useState } from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { ShieldCheck, Lightbulb, TrendingUp } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// import trustImg from "@/assets/team-collaboration.jpg";
// import innovationImg from "@/assets/team-collaboration.jpg";
// import growthImg from "@/assets/team-collaboration.jpg";

// const coreValues = [
//   {
//     icon: ShieldCheck,
//     title: "Uncompromising Trust",
//     desc: "We build relationships on transparency, integrity, and delivering on our promises.",
//     stats: "99.9% Client Retention",
//     image: trustImg,
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovation First",
//     desc: "We don’t just follow trends—we set them.",
//     stats: "15+ Years R&D Investment",
//     image: innovationImg,
//   },
//   {
//     icon: TrendingUp,
//     title: "Growth Partnership",
//     desc: "Your success is our success.",
//     stats: "200% Avg. Client Growth",
//     image: growthImg,
//   },
// ];

// export default function CoreValuesSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="py-28">
//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-20">
//             <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-4 block">
//               Our Foundation
//             </span>

//             <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
//               Built on Three Pillars
//             </h2>

//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Every solution we deliver is rooted in our core values.
//             </p>
//           </div>
//         </SectionWrapper>

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT IMAGE WITH ANIMATION */}
//           <div className="relative h-[450px]">
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={activeIndex}
//                 src={coreValues[activeIndex].image}
//                 initial={{ opacity: 0, scale: 1.05 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-xl"
//               />
//             </AnimatePresence>
//           </div>

//           {/* RIGHT CARDS */}
//           <div className="space-y-6">
//             {coreValues.map((value, i) => (
//               <div
//                 key={value.title}
//                 onClick={() => setActiveIndex(i)}
//                 className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300
//                 ${
//                   activeIndex === i
//                     ? "border-mv-magenta bg-mv-magenta/10"
//                     : "border-gray-200 hover:border-mv-magenta"
//                 }`}
//               >
//                 <div className="flex gap-4 items-start">

//                   <div className="w-14 h-14 rounded-xl bg-mv-magenta/10 flex items-center justify-center">
//                     <value.icon size={28} className="text-mv-magenta" />
//                   </div>

//                   <div>
//                     <h3 className="text-xl font-bold mb-2">{value.title}</h3>

//                     <p className="text-muted-foreground text-sm mb-3">
//                       {value.desc}
//                     </p>

//                     <span className="text-mv-magenta font-semibold text-sm">
//                       {value.stats}
//                     </span>
//                   </div>

//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




// import React, { useState } from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { ShieldCheck, Lightbulb, TrendingUp } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const coreValues = [
//   {
//     icon: ShieldCheck,
//     title: "Uncompromising Trust",
//     desc: "We build relationships on transparency, integrity, and delivering on our promises. Your infrastructure is in safe hands.",
//     stats: "99.9% Client Retention",
//     image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
//     color: "blue",
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovation First",
//     desc: "We don't just follow trends—we set them. Our solutions leverage cutting-edge technology to give you a competitive edge.",
//     stats: "15+ Years R&D Investment",
//     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
//     color: "magenta",
//   },
//   {
//     icon: TrendingUp,
//     title: "Growth Partnership",
//     desc: "Your success is our success. We invest in understanding your business to deliver solutions that drive real growth.",
//     stats: "200% Avg. Client Growth",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
//     color: "green",
//   },
// ];

// const colorMap = {
//   blue: {
//     border: "border-blue-500",
//     bg: "bg-blue-500/10",
//     text: "text-blue-500",
//   },
//   magenta: {
//     border: "border-fuchsia-500",
//     bg: "bg-fuchsia-500/10",
//     text: "text-fuchsia-500",
//   },
//   green: {
//     border: "border-green-500",
//     bg: "bg-green-500/10",
//     text: "text-green-500",
//   },
// };

// export default function CoreValuesSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="py-28">
//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-20">
//             <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-4 block">
//               Our Foundation
//             </span>

//             <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
//               Built on Three Pillars
//             </h2>

//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Every solution we deliver is rooted in our core values.
//             </p>
//           </div>
//         </SectionWrapper>

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT IMAGE */}
//           <div className="relative h-[450px]">
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={activeIndex}
//                 src={coreValues[activeIndex].image}
//                 initial={{ opacity: 0, scale: 1.05 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-xl"
//               />
//             </AnimatePresence>
//           </div>

//           {/* RIGHT CARDS */}
//           <div className="space-y-6">
//             {coreValues.map((value, i) => {
//               const colors = colorMap[value.color];

//               return (
//                 <div
//                   key={value.title}
//                   onClick={() => setActiveIndex(i)}
//                   className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300
//                   ${
//                     activeIndex === i
//                       ? `${colors.border} ${colors.bg}`
//                       : "border-gray-200 hover:border-gray-400"
//                   }`}
//                 >
//                   <div className="flex gap-4 items-start">

//                     <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center`}>
//                       <value.icon size={28} className={colors.text} />
//                     </div>

//                     <div>
//                       <h3 className="text-xl font-bold mb-2">{value.title}</h3>

//                       <p className="text-muted-foreground text-sm mb-3">
//                         {value.desc}
//                       </p>

//                       <span className={`font-semibold text-sm ${colors.text}`}>
//                         {value.stats}
//                       </span>
//                     </div>

//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }






// import React, { useState } from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { ShieldCheck, Lightbulb, TrendingUp } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const coreValues = [
//   {
//     icon: ShieldCheck,
//     title: "Uncompromising Trust",
//     desc: "We build relationships on transparency, integrity, and delivering on our promises. Your infrastructure is in safe hands.",
//     stats: "99.9% Client Retention",
//     image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
//     color: "pink",
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovation First",
//     desc: "We don't just follow trends—we set them. Our solutions leverage cutting-edge technology to give you a competitive edge.",
//     stats: "15+ Years R&D Investment",
//     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
//     color: "yellow",
//   },
//   {
//     icon: TrendingUp,
//     title: "Growth Partnership",
//     desc: "Your success is our success. We invest in understanding your business to deliver solutions that drive real growth.",
//     stats: "200% Avg. Client Growth",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
//     color: "blue",
//   },
// ];

// const colorMap = {
//   pink: {
//     border: "border-pink-500",
//     bg: "bg-pink-500/10",
//     text: "text-pink-500",
//     gradient: "from-pink-600 to-yellow-400",
//   },
//   yellow: {
//     border: "border-yellow-500",
//     bg: "bg-yellow-400/10",
//     text: "text-yellow-500",
//     gradient: "from-yellow-400 to-blue-600",
//   },
//   blue: {
//     border: "border-blue-600",
//     bg: "bg-blue-600/10",
//     text: "text-blue-600",
//     gradient: "from-blue-600 to-cyan-500",
//   },
//   magenta: {
//     border: "border-magenta-500",
//     bg: "bg-magenta-500/10",
//     text: "text-magenta-500",
//     gradient: "from-magenta-500 to-pink-600",
//   },
//   green: {
//     border: "border-green-500",
//     bg: "bg-green-500/10",
//     text: "text-green-500",
//     gradient: "from-green-500 to-yellow-400",
//   },
//   orange: {
//     border: "border-orange-500",
//     bg: "bg-orange-500/10",
//     text: "text-orange-500",
//     gradient: "from-orange-500 to-yellow-400",
//   },
//   cyan: {
//     border: "border-cyan-500",
//     bg: "bg-cyan-500/10",
//     text: "text-cyan-500",
//     gradient: "from-cyan-500 to-blue-600",
//   },
// };

// export default function CoreValuesSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="py-28 bg-muted/30">
//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-20">
//        <span className="text-xs uppercase tracking-widest font-semibold mb-4 block bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
//               Our Foundation
//             </span>
//             <h2 className="text-4xl sm:text-5xl font-black mb-4">
//   <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//   bg-clip-text text-transparent">
//   Built on Three Pillars
//   </span>
//           </h2>

//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Every solution we deliver is rooted in our core values.
//             </p>
//           </div>
//         </SectionWrapper>

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT IMAGE */}
//           <div className="relative h-[450px]">
//             {/* Decorative gradient ring */}
//             <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 rounded-3xl blur-2xl opacity-30 -z-10"></div>
            
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={activeIndex}
//                 src={coreValues[activeIndex].image}
//                 initial={{ opacity: 0, scale: 1.05 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-xl"
//               />
//             </AnimatePresence>
            
//             {/* Gradient overlay */}
//             <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
//           </div>

//           {/* RIGHT CARDS */}
//           <div className="space-y-6">
//             {coreValues.map((value, i) => {
//               const colors = colorMap[value.color];

//               return (
//                 <motion.div
//                   key={value.title}
//                   onClick={() => setActiveIndex(i)}
//                   whileHover={{ scale: 1.02, x: 8 }}
//                   transition={{ duration: 0.2 }}
//                   className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300
//                   ${
//                     activeIndex === i
//                       ? `${colors.border} ${colors.bg} shadow-lg`
//                       : "border-gray-200 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600"
//                   }`}
//                 >
//                   <div className="flex gap-4 items-start">

//                     <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center relative overflow-hidden group`}>
//                       {/* Animated gradient background on hover */}
//                       <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
//                       <value.icon size={28} className={`relative z-10 ${colors.text} group-hover:text-white transition-colors duration-300`} />
//                     </div>

//                     <div className="flex-1">
//                       <h3 className={`text-xl font-bold mb-2 ${activeIndex === i ? colors.text : ''}`}>
//                         {value.title}
//                       </h3>

//                       <p className="text-muted-foreground text-sm mb-3">
//                         {value.desc}
//                       </p>

//                       <span className={`font-semibold text-sm ${colors.text} inline-flex items-center gap-1`}>
//                         <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
//                         {value.stats}
//                       </span>
//                     </div>

//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }






// import React, { useState } from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { ShieldCheck, Lightbulb, TrendingUp, Cpu, Users } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";


// const coreValues = [
//   {
//     icon: Cpu, // better for technical strength
//     title: "Technical capabilities",
//     desc: "We deliver robust, scalable solutions backed by deep technical expertise. Our team ensures reliability, security, and performance at every stage.",
//     stats: "88% Client Retention",
//     image: "https://i.pinimg.com/736x/2a/7d/44/2a7d442e58891b050afbee0fd3ef9b45.jpg",
//     color: "pink",
//   },
//   {
//     icon: Users, // represents customer focus
//     title: "Customer Centricity",
//     desc: "We prioritize customer needs by delivering tailored, value-driven solutions. Every decision is focused on enhancing client satisfaction and long-term success.",
//     stats: "10+ Years R&D Investment",
//     image: "https://i.pinimg.com/736x/8b/6f/d1/8b6fd1da7cb3f0b7e9f7bceb5dd3a05d.jpg",
//     color: "yellow",
//   },
//   {
//     icon: ShieldCheck, // perfect for trust / peace of mind
//     title: "Peace of mind",
//     desc: "We provide dependable support and seamless operations you can trust. With us, you gain confidence to focus on growth without worries.",
//     stats: "200% Avg. Client Growth",
//     image: "https://i.pinimg.com/1200x/89/d3/cc/89d3cc8e012994366b8f10fc306c4695.jpg",
//     color: "blue",
//   },
// ];

// const colorMap = {
//   pink: {
//     border: "border-pink-500",
//     bg: "bg-pink-500/10",
//     text: "text-pink-500",
//     gradient: "from-pink-600 to-yellow-400",
//   },
//   yellow: {
//     border: "border-yellow-500",
//     bg: "bg-yellow-400/10",
//     text: "text-yellow-500",
//     gradient: "from-yellow-400 to-blue-600",
//   },
//   blue: {
//     border: "border-blue-600",
//     bg: "bg-blue-600/10",
//     text: "text-blue-600",
//     gradient: "from-blue-600 to-cyan-500",
//   },
//   magenta: {
//     border: "border-magenta-500",
//     bg: "bg-magenta-500/10",
//     text: "text-magenta-500",
//     gradient: "from-magenta-500 to-pink-600",
//   },
//   green: {
//     border: "border-green-500",
//     bg: "bg-green-500/10",
//     text: "text-green-500",
//     gradient: "from-green-500 to-yellow-400",
//   },
//   orange: {
//     border: "border-orange-500",
//     bg: "bg-orange-500/10",
//     text: "text-orange-500",
//     gradient: "from-orange-500 to-yellow-400",
//   },
//   cyan: {
//     border: "border-cyan-500",
//     bg: "bg-cyan-500/10",
//     text: "text-cyan-500",
//     gradient: "from-cyan-500 to-blue-600",
//   },
// };

// export default function CoreValuesSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="py-28 bg-muted/30">
//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-20">
//        <span className="text-xs uppercase tracking-widest font-semibold mb-4 block bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
//               Our Foundation
//             </span>
//             <h2 className="text-4xl sm:text-5xl font-black mb-4">
//   <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//   bg-clip-text text-transparent">
//   Built on Three Pillars
//   </span>
//           </h2>

//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Every solution we deliver is rooted in our core values.
//             </p>
//           </div>
//         </SectionWrapper>

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT IMAGE */}
//           <div className="relative h-[450px]">
//             {/* Decorative gradient ring */}
//             <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 rounded-3xl blur-2xl opacity-30 -z-10"></div>
            
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={activeIndex}
//                 src={coreValues[activeIndex].image}
//                 initial={{ opacity: 0, scale: 1.05 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-xl"
//               />
//             </AnimatePresence>
            
//             {/* Gradient overlay */}
//             <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
//           </div>

//           {/* RIGHT CARDS */}
//           <div className="space-y-6">
//             {coreValues.map((value, i) => {
//               const colors = colorMap[value.color];

//               return (
//                 <motion.div
//                   key={value.title}
//                   onClick={() => setActiveIndex(i)}
//                   whileHover={{ scale: 1.02, x: 8 }}
//                   transition={{ duration: 0.2 }}
//                   className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300
//                   ${
//                     activeIndex === i
//                       ? `${colors.border} ${colors.bg} shadow-lg`
//                       : "border-gray-200 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600"
//                   }`}
//                 >
//                   <div className="flex gap-4 items-start">

//                     <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center relative overflow-hidden group`}>
//                       {/* Animated gradient background on hover */}
//                       <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
//                       <value.icon size={28} className={`relative z-10 ${colors.text} group-hover:text-white transition-colors duration-300`} />
//                     </div>

//                     <div className="flex-1">
//                       <h3 className={`text-xl font-bold mb-2 ${activeIndex === i ? colors.text : ''}`}>
//                         {value.title}
//                       </h3>

//                       <p className="text-muted-foreground text-sm mb-3">
//                         {value.desc}
//                       </p>

//                       <span className={`font-semibold text-sm ${colors.text} inline-flex items-center gap-1`}>
//                         <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
//                         {value.stats}
//                       </span>
//                     </div>

//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




import React, { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { ShieldCheck, Lightbulb, TrendingUp, Cpu, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const coreValues = [
  {
    icon: Cpu,
    title: "Technical Capabilities",
    desc: "We Deliver Robust, Scalable Solutions Backed By Deep Technical Expertise. Our Team Ensures Reliability, Security, And Performance At Every Stage.",
    stats: "88% Client Retention",
    image: "https://i.pinimg.com/736x/2a/7d/44/2a7d442e58891b050afbee0fd3ef9b45.jpg",
    color: "pink",
  },
  {
    icon: Users,
    title: "Customer Centricity",
    desc: "We Prioritize Customer Needs By Delivering Tailored, Value-Driven Solutions. Every Decision Is Focused On Enhancing Client Satisfaction And Long-Term Success.",
    stats: "10+ Years R&D Investment",
    image: "https://i.pinimg.com/736x/8b/6f/d1/8b6fd1da7cb3f0b7e9f7bceb5dd3a05d.jpg",
    color: "yellow",
  },
  {
    icon: ShieldCheck,
    title: "Peace Of Mind",
    desc: "We Provide Dependable Support And Seamless Operations You Can Trust. With Us, You Gain Confidence To Focus On Growth Without Worries.",
    stats: "200% Avg. Client Growth",
    image: "https://i.pinimg.com/1200x/89/d3/cc/89d3cc8e012994366b8f10fc306c4695.jpg",
    color: "blue",
  },
];

const colorMap = {
  pink: {
    border: "border-pink-600 dark:border-pink-500",
    bg: "bg-pink-600/10 dark:bg-pink-500/10",
    text: "text-pink-600 dark:text-pink-400",
    gradient: "from-pink-600 to-rose-500",
    gradientFull: "from-pink-600 via-yellow-500 to-blue-600",
    hoverBg: "hover:bg-pink-600/20 dark:hover:bg-pink-500/20",
    hoverBorder: "hover:border-pink-600 dark:hover:border-pink-500",
  },
  yellow: {
    border: "border-yellow-500 dark:border-yellow-400",
    bg: "bg-yellow-500/10 dark:bg-yellow-400/10",
    text: "text-yellow-600 dark:text-yellow-400",
    gradient: "from-yellow-500 to-amber-500",
    gradientFull: "from-yellow-500 via-orange-500 to-red-500",
    hoverBg: "hover:bg-yellow-500/20 dark:hover:bg-yellow-400/20",
    hoverBorder: "hover:border-yellow-500 dark:hover:border-yellow-400",
  },
  blue: {
    border: "border-blue-600 dark:border-blue-400",
    bg: "bg-blue-600/10 dark:bg-blue-400/10",
    text: "text-blue-600 dark:text-blue-400",
    gradient: "from-blue-600 to-cyan-600",
    gradientFull: "from-blue-600 via-cyan-500 to-teal-500",
    hoverBg: "hover:bg-blue-600/20 dark:hover:bg-blue-400/20",
    hoverBorder: "hover:border-blue-600 dark:hover:border-blue-400",
  },
  magenta: {
    border: "border-magenta-600 dark:border-magenta-400",
    bg: "bg-magenta-600/10 dark:bg-magenta-400/10",
    text: "text-magenta-600 dark:text-magenta-400",
    gradient: "from-magenta-600 to-purple-600",
    gradientFull: "from-magenta-600 via-purple-500 to-pink-500",
    hoverBg: "hover:bg-magenta-600/20 dark:hover:bg-magenta-400/20",
    hoverBorder: "hover:border-magenta-600 dark:hover:border-magenta-400",
  },
  green: {
    border: "border-green-600 dark:border-green-400",
    bg: "bg-green-600/10 dark:bg-green-400/10",
    text: "text-green-600 dark:text-green-400",
    gradient: "from-green-600 to-emerald-500",
    gradientFull: "from-green-600 via-emerald-500 to-teal-500",
    hoverBg: "hover:bg-green-600/20 dark:hover:bg-green-400/20",
    hoverBorder: "hover:border-green-600 dark:hover:border-green-400",
  },
  orange: {
    border: "border-orange-600 dark:border-orange-400",
    bg: "bg-orange-600/10 dark:bg-orange-400/10",
    text: "text-orange-600 dark:text-orange-400",
    gradient: "from-orange-600 to-amber-500",
    gradientFull: "from-orange-600 via-amber-500 to-yellow-500",
    hoverBg: "hover:bg-orange-600/20 dark:hover:bg-orange-400/20",
    hoverBorder: "hover:border-orange-600 dark:hover:border-orange-400",
  },
  cyan: {
    border: "border-cyan-600 dark:border-cyan-400",
    bg: "bg-cyan-600/10 dark:bg-cyan-400/10",
    text: "text-cyan-600 dark:text-cyan-400",
    gradient: "from-cyan-600 to-blue-500",
    gradientFull: "from-cyan-600 via-blue-500 to-indigo-500",
    hoverBg: "hover:bg-cyan-600/20 dark:hover:bg-cyan-400/20",
    hoverBorder: "hover:border-cyan-600 dark:hover:border-cyan-400",
  },
};

export default function ThreePillars() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-28 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Heading */}
        <SectionWrapper>
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-widest font-semibold mb-4 block bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
              Our Foundation
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
                Built on Three Pillars
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Every Solution We Deliver Is Rooted In Our Core Values.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative h-[450px]">
            {/* Decorative gradient ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 rounded-3xl blur-2xl opacity-30 -z-10"></div>
            
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={coreValues[activeIndex].image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-xl"
                alt={coreValues[activeIndex].title}
              />
            </AnimatePresence>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 via-transparent to-transparent dark:from-black/60"></div>
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-6">
            {coreValues.map((value, i) => {
              const colors = colorMap[value.color];

              return (
                <motion.div
                  key={value.title}
                  onClick={() => setActiveIndex(i)}
                  whileHover={{ scale: 1.02, x: 8 }}
                  transition={{ duration: 0.2 }}
                  className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300
                  ${
                    activeIndex === i
                      ? `${colors.border} ${colors.bg} shadow-lg dark:shadow-${value.color}-900/20`
                      : `border-gray-200 ${colors.hoverBorder} dark:border-gray-700 ${colors.hoverBg} bg-white dark:bg-gray-800/50`
                  }`}
                >
                  <div className="flex gap-4 items-start">

                    <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center relative overflow-hidden group`}>
                      {/* Animated gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <value.icon size={28} className={`relative z-10 ${colors.text} group-hover:text-white transition-colors duration-300`} />
                    </div>

                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${activeIndex === i ? colors.text : 'text-gray-900 dark:text-gray-100'}`}>
                        {value.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {value.desc}
                      </p>

                      <span className={`font-semibold text-sm ${colors.text} inline-flex items-center gap-1`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                        {value.stats}
                      </span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}