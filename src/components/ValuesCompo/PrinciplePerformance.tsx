// import React from "react";
// import { Search, Rocket, TrendingUp } from "lucide-react";
// import SectionWrapper from "@/components/SectionWrapper";
// import performanceImg from "@/assets/team-collaboration.jpg";

// const PrinciplePerformance = () => {
//   return (
//     <section className="py-28 bg-muted/40">
//       <div className="container mx-auto px-4 lg:px-8">

//         <SectionWrapper>
//           <div className="grid lg:grid-cols-2 gap-16 items-center">

//             {/* LEFT SIDE */}
//             <div className="flex flex-col justify-center">

//               {/* Heading */}
//               <div className="mb-12">
//                 <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 leading-tight">
//                   From Principle to Performance
//                 </h2>

//                 <p className="text-lg text-muted-foreground max-w-lg">
//                   Values without execution are just statements.
//                   Here’s how we turn philosophy into measurable impact.
//                 </p>
//               </div>

//               {/* Cards */}
//               <div className="space-y-6">

//                 {/* Card 1 */}
//                 <div className="flex items-start gap-4 p-6 rounded-2xl glass-premium shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
//                   <div className="p-3 rounded-xl bg-mv-blue/10 text-mv-blue">
//                     <Search size={22} />
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-mv-blue mb-1 text-lg">
//                       Discovery
//                     </h3>

//                     <p className="text-muted-foreground text-sm">
//                       Understanding business realities before writing a single line of code.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Card 2 */}
//                 <div className="flex items-start gap-4 p-6 rounded-2xl glass-premium shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
//                   <div className="p-3 rounded-xl bg-mv-magenta/10 text-mv-magenta">
//                     <Rocket size={22} />
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-mv-magenta mb-1 text-lg">
//                       Execution
//                     </h3>

//                     <p className="text-muted-foreground text-sm">
//                       Transparent processes, defined milestones, measurable KPIs.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Card 3 */}
//                 <div className="flex items-start gap-4 p-6 rounded-2xl glass-premium shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
//                   <div className="p-3 rounded-xl bg-mv-green/10 text-mv-green">
//                     <TrendingUp size={22} />
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-mv-green mb-1 text-lg">
//                       Optimization
//                     </h3>

//                     <p className="text-muted-foreground text-sm">
//                       Continuous refinement and future-proof architecture.
//                     </p>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* RIGHT SIDE IMAGE */}
//             <div className="relative flex items-center justify-center">

//               <img
//                 // src={performanceImg}
//                 src="https://i.pinimg.com/736x/ff/c0/51/ffc0516ab007cea16766f518b6a9c4da.jpg"
//                 alt="Team Performance"
//                 className="rounded-3xl shadow-2xl w-full max-w-lg h-[450px] object-cover transition duration-500 hover:scale-105"
//               />

//               {/* Glow effect */}
//               <div className="absolute -z-10 w-72 h-72 bg-mv-blue/20 blur-[120px] rounded-full"></div>

//             </div>

//           </div>
//         </SectionWrapper>

//       </div>
//     </section>
//   );
// };

// export default PrinciplePerformance;





// import React from "react";
// import { Search, Rocket, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
// import { motion } from "framer-motion"; // Add this import
// import SectionWrapper from "@/components/SectionWrapper";
// import performanceImg from "@/assets/team-collaboration.jpg";

// const PrinciplePerformance = () => {
//   return (
//     <section className="relative py-32 overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[120px] animate-pulse" />
//         <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        
//         {/* Grid overlay */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
//       </div>

//       <div className="container mx-auto px-4 lg:px-8 relative">
//         <SectionWrapper>
//           <div className="grid lg:grid-cols-2 gap-20 items-center">
            
//             {/* LEFT SIDE */}
//             <div className="flex flex-col justify-center">
              
//               {/* Section tag with animation */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-8 w-fit"
//               >
//                 <Sparkles size={16} className="text-blue-500" />
//                 <span className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//                   Our Process
//                 </span>
//               </motion.div>

//               {/* Heading with gradient */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="mb-12"
//               >
//                 <h2 className="text-5xl sm:text-6xl font-black mb-6 leading-[1.1]">
//                   <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
//                     From Principle
//                   </span>
//                   <br />
//                   <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
//                     to Performance
//                   </span>
//                 </h2>

//                 <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
//                   Values without execution are just statements. 
//                   <span className="block mt-2 font-medium text-foreground/90">
//                     Here's how we turn philosophy into measurable impact.
//                   </span>
//                 </p>
//               </motion.div>

//               {/* Cards */}
//               <div className="space-y-5">
//                 {[
//                   {
//                     icon: Search,
//                     color: "blue",
//                     title: "Discovery",
//                     description: "Understanding business realities before writing a single line of code.",
//                     gradient: "from-blue-500/20 to-blue-600/20",
//                     border: "border-blue-500/20",
//                     textColor: "text-blue-500",
//                     bgColor: "bg-blue-500"
//                   },
//                   {
//                     icon: Rocket,
//                     color: "purple",
//                     title: "Execution",
//                     description: "Transparent processes, defined milestones, measurable KPIs.",
//                     gradient: "from-purple-500/20 to-purple-600/20",
//                     border: "border-purple-500/20",
//                     textColor: "text-purple-500",
//                     bgColor: "bg-purple-500"
//                   },
//                   {
//                     icon: TrendingUp,
//                     color: "green",
//                     title: "Optimization",
//                     description: "Continuous refinement and future-proof architecture.",
//                     gradient: "from-green-500/20 to-green-600/20",
//                     border: "border-green-500/20",
//                     textColor: "text-green-500",
//                     bgColor: "bg-green-500"
//                   }
//                 ].map((item, index) => {
//                   const Icon = item.icon;
//                   const delay = 0.4 + index * 0.15;
                  
//                   return (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -30 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.6, delay }}
//                       whileHover={{ scale: 1.02, x: 10 }}
//                       className="group relative"
//                     >
//                       {/* Card background with gradient */}
//                       <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
//                       {/* Main card */}
//                       <div className={`relative flex items-start gap-5 p-7 rounded-2xl bg-background/50 backdrop-blur-xl border ${item.border} shadow-lg hover:shadow-2xl transition-all duration-500`}>
//                         {/* Icon container */}
//                         <div className={`relative p-4 rounded-xl bg-gradient-to-br ${item.gradient} border ${item.border} overflow-hidden`}>
//                           <div className="absolute inset-0 bg-white/10 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                           <Icon size={24} className={`relative z-10 ${item.textColor}`} />
//                         </div>

//                         {/* Content */}
//                         <div className="flex-1">
//                           <div className="flex items-center justify-between mb-2">
//                             <h3 className={`font-bold text-xl ${item.textColor}`}>
//                               {item.title}
//                             </h3>
                            
//                             {/* Arrow indicator */}
//                             <ArrowRight 
//                               size={20} 
//                               className={`${item.textColor} opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}
//                             />
//                           </div>

//                           <p className="text-muted-foreground text-base leading-relaxed">
//                             {item.description}
//                           </p>

//                           {/* Progress indicator */}
//                           <div className="mt-3 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full transition-all duration-700 delay-300" />
//                         </div>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>

//               {/* Stats section */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 1 }}
//                 className="flex gap-8 mt-12 pt-8 border-t border-border"
//               >
//                 <div>
//                   <div className="text-3xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//                     150+
//                   </div>
//                   <div className="text-sm text-muted-foreground">Projects Delivered</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-black bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
//                     98%
//                   </div>
//                   <div className="text-sm text-muted-foreground">Client Satisfaction</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-black bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
//                     3x
//                   </div>
//                   <div className="text-sm text-muted-foreground">ROI Average</div>
//                 </div>
//               </motion.div>
//             </div>

//             {/* RIGHT SIDE */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               className="relative flex items-center justify-center"
//             >
//               {/* Main image container */}
//               <div className="relative group">
//                 {/* Animated gradient rings */}
//                 <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 animate-pulse transition-opacity duration-500" />
                
//                 {/* Image with overlay */}
//                 <div className="relative rounded-3xl overflow-hidden">
//                   <img
//                     src="https://i.pinimg.com/736x/ff/c0/51/ffc0516ab007cea16766f518b6a9c4da.jpg"
//                     alt="Team Performance"
//                     className="w-full max-w-lg h-[500px] object-cover transition-all duration-700 group-hover:scale-110"
//                   />
                  
//                   {/* Gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
//                   {/* Floating elements */}
//                   <div className="absolute bottom-6 left-6 right-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
//                     <div className="bg-background/80 backdrop-blur-xl rounded-xl p-4 border border-white/20">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
//                           <TrendingUp size={18} className="text-white" />
//                         </div>
//                         <div>
//                           <div className="text-sm font-medium">Performance Impact</div>
//                           <div className="text-2xl font-black text-green-500">+247%</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Decorative elements */}
//                 <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
//                 <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-700" />
//               </div>
//             </motion.div>
//           </div>
//         </SectionWrapper>
//       </div>
//     </section>
//   );
// };

// export default PrinciplePerformance;





// import React, { useState } from "react";
// import { Search, Rocket, TrendingUp, ArrowRight, Sparkles, ChevronLeft, ChevronRight, Zap, Target, Globe, Award, Users, BarChart, Clock, CheckCircle } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import SectionWrapper from "@/components/SectionWrapper";

// const PrinciplePerformance = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const carouselSlides = [
//     {
//       icon: Zap,
//       title: "40% Faster Delivery",
//       description: "Our streamlined process reduces time-to-market by 40% through automated workflows and agile methodologies.",
//       color: "blue",
//       stat: "40%",
//       statLabel: "Time Saved"
//     },
//     {
//       icon: Target,
//       title: "95% Goal Achievement",
//       description: "Teams consistently hit or exceed KPIs with our data-driven approach to performance tracking.",
//       color: "purple",
//       stat: "95%",
//       statLabel: "Success Rate"
//     },
//     {
//       icon: Globe,
//       title: "Global Scale Solutions",
//       description: "Deploy and scale across 20+ regions with zero downtime and consistent performance.",
//       color: "green",
//       stat: "20+",
//       statLabel: "Regions"
//     },
//     {
//       icon: Award,
//       title: "Industry Recognition",
//       description: "Award-winning execution with 50+ industry accolades for innovation and excellence.",
//       color: "blue",
//       stat: "50+",
//       statLabel: "Awards"
//     },
//     {
//       icon: Users,
//       title: "Team Collaboration",
//       description: "Cross-functional teams working seamlessly across 15 different time zones.",
//       color: "purple",
//       stat: "15",
//       statLabel: "Time Zones"
//     },
//     {
//       icon: BarChart,
//       title: "Measurable Results",
//       description: "Average 3x ROI with clear, trackable metrics and quarterly performance reviews.",
//       color: "green",
//       stat: "3x",
//       statLabel: "ROI"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
//   };

//   return (
//     <section className="relative py-32 overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[120px] animate-pulse" />
//         <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        
//         {/* Grid overlay */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
//       </div>

//       <div className="container mx-auto px-4 lg:px-8 relative">
//         <SectionWrapper>
//           <div className="grid lg:grid-cols-2 gap-20 items-start">
            
//             {/* LEFT SIDE */}
//             <div className="flex flex-col justify-start">
              
//               {/* Section tag with animation - aligned with image */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-8 w-fit"
//               >
//                 <Sparkles size={16} className="text-blue-500" />
//                 <span className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//                   Our Process
//                 </span>
//               </motion.div>

//               {/* Heading with gradient */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="mb-12"
//               >
//                 <h2 className="text-5xl sm:text-6xl font-black mb-6 leading-[1.1]">
//                   <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
//                     From Principle
//                   </span>
//                   <br />
//                   <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
//                     to Performance
//                   </span>
//                 </h2>

//                 <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
//                   Values without execution are just statements. 
//                   <span className="block mt-2 font-medium text-foreground/90">
//                     Here's how we turn philosophy into measurable impact.
//                   </span>
//                 </p>
//               </motion.div>

//               {/* Cards */}
//               <div className="space-y-5">
//                 {[
//                   {
//                     icon: Search,
//                     color: "blue",
//                     title: "Discovery",
//                     description: "Understanding business realities before writing a single line of code.",
//                     gradient: "from-blue-500/20 to-blue-600/20",
//                     border: "border-blue-500/20",
//                     textColor: "text-blue-500",
//                     bgColor: "bg-blue-500"
//                   },
//                   {
//                     icon: Rocket,
//                     color: "purple",
//                     title: "Execution",
//                     description: "Transparent processes, defined milestones, measurable KPIs.",
//                     gradient: "from-purple-500/20 to-purple-600/20",
//                     border: "border-purple-500/20",
//                     textColor: "text-purple-500",
//                     bgColor: "bg-purple-500"
//                   },
//                   {
//                     icon: TrendingUp,
//                     color: "green",
//                     title: "Optimization",
//                     description: "Continuous refinement and future-proof architecture.",
//                     gradient: "from-green-500/20 to-green-600/20",
//                     border: "border-green-500/20",
//                     textColor: "text-green-500",
//                     bgColor: "bg-green-500"
//                   }
//                 ].map((item, index) => {
//                   const Icon = item.icon;
//                   const delay = 0.4 + index * 0.15;
                  
//                   return (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -30 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.6, delay }}
//                       whileHover={{ scale: 1.02, x: 10 }}
//                       className="group relative"
//                     >
//                       {/* Card background with gradient */}
//                       <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
//                       {/* Main card */}
//                       <div className={`relative flex items-start gap-5 p-7 rounded-2xl bg-background/50 backdrop-blur-xl border ${item.border} shadow-lg hover:shadow-2xl transition-all duration-500`}>
//                         {/* Icon container */}
//                         <div className={`relative p-4 rounded-xl bg-gradient-to-br ${item.gradient} border ${item.border} overflow-hidden`}>
//                           <div className="absolute inset-0 bg-white/10 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                           <Icon size={24} className={`relative z-10 ${item.textColor}`} />
//                         </div>

//                         {/* Content */}
//                         <div className="flex-1">
//                           <div className="flex items-center justify-between mb-2">
//                             <h3 className={`font-bold text-xl ${item.textColor}`}>
//                               {item.title}
//                             </h3>
                            
//                             {/* Arrow indicator */}
//                             <ArrowRight 
//                               size={20} 
//                               className={`${item.textColor} opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}
//                             />
//                           </div>

//                           <p className="text-muted-foreground text-base leading-relaxed">
//                             {item.description}
//                           </p>

//                           {/* Progress indicator */}
//                           <div className="mt-3 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full transition-all duration-700 delay-300" />
//                         </div>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>

//               {/* Stats section */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 1 }}
//                 className="flex gap-8 mt-12 pt-8 border-t border-border"
//               >
//                 <div>
//                   <div className="text-3xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//                     150+
//                   </div>
//                   <div className="text-sm text-muted-foreground">Projects Delivered</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-black bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
//                     98%
//                   </div>
//                   <div className="text-sm text-muted-foreground">Client Satisfaction</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-black bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
//                     3x
//                   </div>
//                   <div className="text-sm text-muted-foreground">ROI Average</div>
//                 </div>
//               </motion.div>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="flex flex-col gap-8">
//               {/* Image - aligned with Our Process heading */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className="relative flex items-center justify-center -mt-2" // Negative margin to align with heading
//               >
//                 {/* Main image container */}
//                 <div className="relative group">
//                   {/* Animated gradient rings */}
//                   <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 animate-pulse transition-opacity duration-500" />
                  
//                   {/* Image with overlay */}
//                   <div className="relative rounded-3xl overflow-hidden">
//                     <img
//                       src="https://i.pinimg.com/736x/ff/c0/51/ffc0516ab007cea16766f518b6a9c4da.jpg"
//                       alt="Team Performance"
//                       className="w-full max-w-lg h-[400px] object-cover transition-all duration-700 group-hover:scale-110"
//                     />
                    
//                     {/* Gradient overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
//                     {/* Floating elements */}
//                     <div className="absolute bottom-6 left-6 right-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
//                       <div className="bg-background/80 backdrop-blur-xl rounded-xl p-4 border border-white/20">
//                         <div className="flex items-center gap-3">
//                           <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
//                             <TrendingUp size={18} className="text-white" />
//                           </div>
//                           <div>
//                             <div className="text-sm font-medium">Performance Impact</div>
//                             <div className="text-2xl font-black text-green-500">+247%</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Decorative elements */}
//                   <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
//                   <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-700" />
//                 </div>
//               </motion.div>

//               {/* Carousel Section */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 className="relative"
//               >
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//                     Performance Highlights
//                   </h3>
                  
//                   {/* Carousel Controls */}
//                   <div className="flex gap-3">
//                     <button
//                       onClick={prevSlide}
//                       className="p-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
//                     >
//                       <ChevronLeft size={20} className="text-blue-500 group-hover:-translate-x-1 transition-transform" />
//                     </button>
//                     <button
//                       onClick={nextSlide}
//                       className="p-3 rounded-full bg-gradient-to-r from-purple-500/10 to-green-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
//                     >
//                       <ChevronRight size={20} className="text-purple-500 group-hover:translate-x-1 transition-transform" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Carousel Slides */}
//                 <div className="relative h-[200px] overflow-hidden rounded-2xl">
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={currentSlide}
//                       initial={{ opacity: 0, x: 100 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -100 }}
//                       transition={{ duration: 0.5 }}
//                       className="absolute inset-0"
//                     >
//                       {(() => {
//                         const slide = carouselSlides[currentSlide];
//                         const Icon = slide.icon;
//                         const colorClasses = {
//                           blue: "from-blue-500 to-purple-500 text-blue-500 border-blue-500/20",
//                           purple: "from-purple-500 to-green-500 text-purple-500 border-purple-500/20",
//                           green: "from-green-500 to-blue-500 text-green-500 border-green-500/20"
//                         };
                        
//                         return (
//                           <div className={`h-full p-6 rounded-2xl bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-xl border ${colorClasses[slide.color].split(' ')[2]}`}>
//                             <div className="flex items-start gap-4 h-full">
//                               <div className={`p-4 rounded-xl bg-gradient-to-br ${colorClasses[slide.color].split(' ')[0]} bg-opacity-10 border ${colorClasses[slide.color].split(' ')[2]}`}>
//                                 <Icon size={24} className={colorClasses[slide.color].split(' ')[1]} />
//                               </div>
//                               <div className="flex-1">
//                                 <div className="flex items-center justify-between mb-2">
//                                   <h4 className={`font-bold text-lg ${colorClasses[slide.color].split(' ')[1]}`}>
//                                     {slide.title}
//                                   </h4>
//                                   <span className={`text-2xl font-black bg-gradient-to-r ${colorClasses[slide.color].split(' ')[0]} bg-clip-text text-transparent`}>
//                                     {slide.stat}
//                                   </span>
//                                 </div>
//                                 <p className="text-muted-foreground text-sm leading-relaxed">
//                                   {slide.description}
//                                 </p>
//                                 <div className="mt-3 text-xs font-medium text-muted-foreground">
//                                   {slide.statLabel}
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })()}
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>

//                 {/* Slide Indicators */}
//                 <div className="flex justify-center gap-2 mt-6">
//                   {carouselSlides.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentSlide(index)}
//                       className={`h-2 rounded-full transition-all duration-300 ${
//                         index === currentSlide 
//                           ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500' 
//                           : 'w-2 bg-blue-500/20 hover:bg-blue-500/40'
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Additional Card Under Carousel */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//                 className="group relative mt-4"
//               >
//                 {/* Card background with gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
//                 {/* Main card */}
//                 <div className="relative p-6 rounded-2xl bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20">
//                       <Clock size={24} className="text-blue-500" />
//                     </div>
//                     <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-green-500/20 border border-purple-500/20">
//                       <CheckCircle size={24} className="text-purple-500" />
//                     </div>
//                     <div className="flex-1 text-right">
//                       <span className="text-sm font-medium text-muted-foreground">Next Milestone</span>
//                     </div>
//                   </div>
                  
//                   <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
//                     Ready for Scale
//                   </h4>
                  
//                   <p className="text-muted-foreground text-sm leading-relaxed mb-4">
//                     Your project is optimized for growth. Our architecture supports 10x traffic spikes with zero degradation, ensuring peak performance when you need it most.
//                   </p>
                  
//                   {/* Progress Bar */}
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-xs">
//                       <span className="text-blue-500">Discovery</span>
//                       <span className="text-purple-500">Execution</span>
//                       <span className="text-green-500">Optimization</span>
//                     </div>
//                     <div className="h-2 bg-white/10 rounded-full overflow-hidden">
//                       <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full relative">
//                         <div className="absolute inset-0 bg-white/20 animate-pulse" />
//                       </div>
//                     </div>
//                     <div className="flex justify-between text-xs text-muted-foreground">
//                       <span>Phase 1 ✓</span>
//                       <span>Phase 2 ✓</span>
//                       <span>Phase 3 (75%)</span>
//                     </div>
//                   </div>

//                   {/* CTA Button */}
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="w-full mt-4 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
//                   >
//                     <span className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//                       View Performance Report
//                     </span>
//                     <ArrowRight size={16} className="text-purple-500 group-hover/btn:translate-x-1 transition-transform" />
//                   </motion.button>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </SectionWrapper>
//       </div>
//     </section>
//   );
// };

// export default PrinciplePerformance;




import React, { useState } from "react";
import { Search, Rocket, TrendingUp, ArrowRight, Sparkles, ChevronLeft, ChevronRight, Zap, Target, Globe, Award, Users, BarChart, Clock, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const PrinciplePerformance = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      icon: Zap,
      title: "40% Faster Delivery",
      description: "Our streamlined process reduces time-to-market by 40% through automated workflows and agile methodologies.",
      color: "pink",
      stat: "40%",
      statLabel: "Time Saved"
    },
    {
      icon: Target,
      title: "95% Goal Achievement",
      description: "Teams consistently hit or exceed KPIs with our data-driven approach to performance tracking.",
      color: "orange",
      stat: "95%",
      statLabel: "Success Rate"
    },
    {
      icon: Globe,
      title: "Global Scale Solutions",
      description: "Deploy and scale across 20+ regions with zero downtime and consistent performance.",
      color: "yellow",
      stat: "20+",
      statLabel: "Regions"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning execution with 50+ industry accolades for innovation and excellence.",
      color: "pink",
      stat: "50+",
      statLabel: "Awards"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Cross-functional teams working seamlessly across 15 different time zones.",
      color: "magenta",
      stat: "15",
      statLabel: "Time Zones"
    },
    {
      icon: BarChart,
      title: "Measurable Results",
      description: "Average 3x ROI with clear, trackable metrics and quarterly performance reviews.",
      color: "cyan",
      stat: "3x",
      statLabel: "ROI"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  // Helper to get color classes based on color name
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { gradient: string, border: string, text: string, bg: string }> = {
      pink: {
        gradient: "from-pink-600 to-yellow-400",
        border: "border-pink-500/20",
        text: "text-pink-500",
        bg: "bg-pink-500"
      },
      orange: {
        gradient: "from-orange-500 to-yellow-400",
        border: "border-orange-500/20",
        text: "text-orange-500",
        bg: "bg-orange-500"
      },
      yellow: {
        gradient: "from-yellow-400 to-blue-600",
        border: "border-yellow-500/20",
        text: "text-yellow-500",
        bg: "bg-yellow-500"
      },
      magenta: {
        gradient: "from-magenta-500 to-pink-600",
        border: "border-magenta-500/20",
        text: "text-magenta-500",
        bg: "bg-magenta-500"
      },
      cyan: {
        gradient: "from-cyan-500 to-blue-600",
        border: "border-cyan-500/20",
        text: "text-cyan-500",
        bg: "bg-cyan-500"
      }
    };
    return colorMap[color] || colorMap.pink;
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-r from-pink-600/20 to-yellow-400/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* LEFT SIDE */}
            <div className="flex flex-col justify-start">
              
              {/* Section tag with animation - aligned with image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-600/10 to-yellow-400/10 border border-pink-500/20 mb-8 w-fit"
              >
                <Sparkles size={16} className="text-pink-500" />
                <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-yellow-400 bg-clip-text text-transparent">
                  Our Process
                </span>
              </motion.div>

              {/* Heading with gradient */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-5xl sm:text-6xl font-black mb-6 leading-[1.1]">
                  <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    From Principle
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
                    to Performance
                  </span>
                </h2>

                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Values without execution are just statements. 
                  <span className="block mt-2 font-medium text-foreground/90">
                    Here's how we turn philosophy into measurable impact.
                  </span>
                </p>
              </motion.div>

              {/* Cards */}
              <div className="space-y-5">
                {[
                  {
                    icon: Search,
                    color: "pink",
                    title: "Discovery",
                    description: "Understanding business realities before writing a single line of code.",
                    gradient: "from-pink-600/20 to-yellow-400/20",
                    border: "border-pink-500/20",
                    textColor: "text-pink-500",
                    bgColor: "bg-pink-500"
                  },
                  {
                    icon: Rocket,
                    color: "orange",
                    title: "Execution",
                    description: "Transparent processes, defined milestones, measurable KPIs.",
                    gradient: "from-orange-500/20 to-yellow-400/20",
                    border: "border-orange-500/20",
                    textColor: "text-orange-500",
                    bgColor: "bg-orange-500"
                  },
                  {
                    icon: TrendingUp,
                    color: "blue",
                    title: "Optimization",
                    description: "Continuous refinement and future-proof architecture.",
                    gradient: "from-blue-600/20 to-cyan-500/20",
                    border: "border-blue-500/20",
                    textColor: "text-blue-500",
                    bgColor: "bg-blue-500"
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  const delay = 0.4 + index * 0.15;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="group relative"
                    >
                      {/* Card background with gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Main card */}
                      <div className={`relative flex items-start gap-5 p-7 rounded-2xl bg-background/50 backdrop-blur-xl border ${item.border} shadow-lg hover:shadow-2xl transition-all duration-500`}>
                        {/* Icon container */}
                        <div className={`relative p-4 rounded-xl bg-gradient-to-br ${item.gradient} border ${item.border} overflow-hidden`}>
                          <div className="absolute inset-0 bg-white/10 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <Icon size={24} className={`relative z-10 ${item.textColor}`} />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className={`font-bold text-xl ${item.textColor}`}>
                              {item.title}
                            </h3>
                            
                            {/* Arrow indicator */}
                            <ArrowRight 
                              size={20} 
                              className={`${item.textColor} opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}
                            />
                          </div>

                          <p className="text-muted-foreground text-base leading-relaxed">
                            {item.description}
                          </p>

                          {/* Progress indicator */}
                          <div className="mt-3 h-1 w-0 group-hover:w-full bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 rounded-full transition-all duration-700 delay-300" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Stats section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex gap-8 mt-12 pt-8 border-t border-border"
              >
                <div>
                  <div className="text-3xl font-black bg-gradient-to-r from-pink-600 to-yellow-400 bg-clip-text text-transparent">
                    150+
                  </div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-blue-600 bg-clip-text text-transparent">
                    98%
                  </div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    3x
                  </div>
                  <div className="text-sm text-muted-foreground">ROI Average</div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-8">
              {/* Image - aligned with Our Process heading */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative flex items-center justify-center -mt-2"
              >
                {/* Main image container */}
                <div className="relative group">
                  {/* Animated gradient rings */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 animate-pulse transition-opacity duration-500" />
                  
                  {/* Image with overlay */}
                  <div className="relative rounded-3xl overflow-hidden">
                    <img
                      src="https://i.pinimg.com/736x/ff/c0/51/ffc0516ab007cea16766f518b6a9c4da.jpg"
                      alt="Team Performance"
                      className="w-full max-w-lg h-[400px] object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating elements */}
                    <div className="absolute bottom-6 left-6 right-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-background/80 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-600 to-yellow-400 flex items-center justify-center">
                            <TrendingUp size={18} className="text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Performance Impact</div>
                            <div className="text-2xl font-black text-green-500">+247%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-600/20 rounded-full blur-xl animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse delay-700" />
                </div>
              </motion.div>

              {/* Carousel Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-yellow-400 bg-clip-text text-transparent">
                    Performance Highlights
                  </h3>
                  
                  {/* Carousel Controls */}
                  <div className="flex gap-3">
                    <button
                      onClick={prevSlide}
                      className="p-3 rounded-full bg-gradient-to-r from-pink-600/10 to-yellow-400/10 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 group"
                    >
                      <ChevronLeft size={20} className="text-pink-500 group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-3 rounded-full bg-gradient-to-r from-yellow-400/10 to-blue-600/10 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 group"
                    >
                      <ChevronRight size={20} className="text-yellow-500 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Carousel Slides */}
                <div className="relative h-[200px] overflow-hidden rounded-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      {(() => {
                        const slide = carouselSlides[currentSlide];
                        const Icon = slide.icon;
                        const colorClasses = {
                          pink: "from-pink-600 to-yellow-400 text-pink-500 border-pink-500/20",
                          orange: "from-orange-500 to-yellow-400 text-orange-500 border-orange-500/20",
                          yellow: "from-yellow-400 to-blue-600 text-yellow-500 border-yellow-500/20",
                          magenta: "from-magenta-500 to-pink-600 text-magenta-500 border-magenta-500/20",
                          cyan: "from-cyan-500 to-blue-600 text-cyan-500 border-cyan-500/20",
                          blue: "from-blue-600 to-cyan-500 text-blue-500 border-blue-500/20"
                        };
                        
                        return (
                          <div className={`h-full p-6 rounded-2xl bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-xl border ${colorClasses[slide.color]?.split(' ')[2] || 'border-pink-500/20'}`}>
                            <div className="flex items-start gap-4 h-full">
                              <div className={`p-4 rounded-xl bg-gradient-to-br ${colorClasses[slide.color]?.split(' ')[0] || 'from-pink-600 to-yellow-400'} bg-opacity-10 border ${colorClasses[slide.color]?.split(' ')[2] || 'border-pink-500/20'}`}>
                                <Icon size={24} className={colorClasses[slide.color]?.split(' ')[1] || 'text-pink-500'} />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className={`font-bold text-lg ${colorClasses[slide.color]?.split(' ')[1] || 'text-pink-500'}`}>
                                    {slide.title}
                                  </h4>
                                  <span className={`text-2xl font-black bg-gradient-to-r ${colorClasses[slide.color]?.split(' ')[0] || 'from-pink-600 to-yellow-400'} bg-clip-text text-transparent`}>
                                    {slide.stat}
                                  </span>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  {slide.description}
                                </p>
                                <div className="mt-3 text-xs font-medium text-muted-foreground">
                                  {slide.statLabel}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                  {carouselSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'w-8 bg-gradient-to-r from-pink-600 to-yellow-400' 
                          : 'w-2 bg-pink-500/20 hover:bg-pink-500/40'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Additional Card Under Carousel */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="group relative mt-4"
              >
                {/* Card background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-yellow-400/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main card */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-pink-600/20 to-yellow-400/20 border border-pink-500/20">
                      <Clock size={24} className="text-pink-500" />
                    </div>
                    <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-400/20 to-blue-600/20 border border-yellow-500/20">
                      <CheckCircle size={24} className="text-yellow-500" />
                    </div>
                    <div className="flex-1 text-right">
                      <span className="text-sm font-medium text-muted-foreground">Next Milestone</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
                    Ready for Scale
                  </h4>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Your project is optimized for growth. Our architecture supports 10x traffic spikes with zero degradation, ensuring peak performance when you need it most.
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-pink-500">Discovery</span>
                      <span className="text-yellow-500">Execution</span>
                      <span className="text-blue-500">Optimization</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 rounded-full relative">
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Phase 1 ✓</span>
                      <span>Phase 2 ✓</span>
                      <span>Phase 3 (75%)</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 py-3 px-4 rounded-xl bg-gradient-to-r from-pink-600/10 via-yellow-400/10 to-blue-600/10 border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-yellow-400 bg-clip-text text-transparent">
                      View Performance Report
                    </span>
                    <ArrowRight size={16} className="text-yellow-500 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default PrinciplePerformance;