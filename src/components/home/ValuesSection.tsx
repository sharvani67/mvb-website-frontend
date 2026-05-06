// import { Link } from 'react-router-dom';
// import { 
//   Heart, Shield, Lightbulb, Zap, Target, Users, ArrowRight, 
//   Sparkles, Compass, Gem, Infinity, Wind, Flame, Droplet,
//   Orbit, Atom, Crown, Rocket, Telescope, Satellite 
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';
// import "./ValuesSection.css";

// const values = [
//   { 
//     icon: Heart, 
//     label: 'Customer Centricity', 
//     description: 'Your success is our success. We put customers at the heart of every decision.',
//     gradient: ['#FF4D4D', '#FF9F4D'],
//     pattern: 'heartbeat',
//     metric: '98%',
//     metricLabel: 'Satisfaction',
//     orbitIcon: Atom
//   },
//   { 
//     icon: Shield, 
//     label: 'Peace of Mind', 
//     description: 'Reliable solutions that let you sleep easy, knowing your infrastructure is secure.',
//     gradient: ['#4A90E2', '#9B51E0'],
//     pattern: 'shield',
//     metric: '24/7',
//     metricLabel: 'Support',
//     orbitIcon: Satellite
//   },
//   { 
//     icon: Lightbulb, 
//     label: 'Innovation', 
//     description: 'Constantly pushing boundaries to bring you the latest technological advancements.',
//     gradient: ['#F5A623', '#FF6B6B'],
//     pattern: 'spark',
//     metric: '50+',
//     metricLabel: 'Innovations',
//     orbitIcon: Rocket
//   },
//   { 
//     icon: Zap, 
//     label: 'Future Ready', 
//     description: 'Building solutions that scale with tomorrow\'s challenges and opportunities.',
//     gradient: ['#7ED321', '#4A90E2'],
//     pattern: 'wave',
//     metric: '5Y',
//     metricLabel: 'Roadmap',
//     orbitIcon: Telescope
//   },
//   { 
//     icon: Target, 
//     label: 'Result Oriented', 
//     description: 'Focused on delivering measurable outcomes that drive real business value.',
//     gradient: ['#BD10E0', '#FF4D4D'],
//     pattern: 'target',
//     metric: '92%',
//     metricLabel: 'Success',
//     orbitIcon: Orbit
//   },
//   { 
//     icon: Users, 
//     label: 'Accountability', 
//     description: 'Taking ownership and responsibility for every project, big or small.',
//     gradient: ['#FF6B6B', '#F5A623'],
//     pattern: 'network',
//     metric: '100+',
//     metricLabel: 'Team',
//     orbitIcon: Crown
//   },
// ];

// // Orbiting Particles Component
// const OrbitingParticles = ({ gradient }: { gradient: string[] }) => {
//   const particles = 8;
//   return (
//     <div className="absolute inset-0 pointer-events-none">
//       {[...Array(particles)].map((_, i) => {
//         const angle = (i / particles) * Math.PI * 2;
//         const radius = 60;
//         return (
//           <motion.div
//             key={i}
//             className="absolute w-1.5 h-1.5 rounded-full"
//             style={{
//               background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
//               left: '50%',
//               top: '50%',
//               boxShadow: `0 0 15px ${gradient[0]}`,
//             }}
//             animate={{
//               x: [0, Math.cos(angle) * radius, 0],
//               y: [0, Math.sin(angle) * radius, 0],
//               scale: [0, 1, 0],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               repeatDelay: i * 0.2,
//               ease: "easeInOut",
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// };

// // Floating Shapes Component
// const FloatingShapes = () => {
//   const shapes = [
//     { Icon: Gem, size: 24, color: '#FF4D4D', delay: 0 },
//     { Icon: Infinity, size: 32, color: '#4A90E2', delay: 2 },
//     { Icon: Wind, size: 28, color: '#7ED321', delay: 4 },
//     { Icon: Flame, size: 20, color: '#F5A623', delay: 6 },
//     { Icon: Droplet, size: 26, color: '#BD10E0', delay: 8 },
//     { Icon: Compass, size: 30, color: '#FF6B6B', delay: 10 },
//   ];

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {shapes.map((shape, i) => (
//         <motion.div
//           key={i}
//           className="absolute"
//           style={{
//             left: `${10 + (i * 15)}%`,
//             top: `${5 + (i * 8)}%`,
//           }}
//           animate={{
//             y: [0, -30, 0, 30, 0],
//             x: [0, 20, -20, 10, 0],
//             rotate: [0, 180, 360],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 20,
//             delay: shape.delay,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         >
//           <shape.Icon size={shape.size} color={shape.color} opacity={0.2} />
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// // Holographic Card Component
// const HolographicCard = ({ children, gradient }: { children: React.ReactNode; gradient: string[] }) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;
//     setMousePosition({ x, y });
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
//       className="relative rounded-3xl overflow-hidden"
//       style={{
//         transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`,
//         transition: 'transform 0.1s ease',
//       }}
//     >
//       {/* Holographic overlay */}
//       <div 
//         className="absolute inset-0 opacity-30"
//         style={{
//           background: `linear-gradient(135deg, 
//             ${gradient[0]}40, 
//             ${gradient[1]}40, 
//             transparent 80%
//           )`,
//           mixBlendMode: 'overlay',
//         }}
//       />
      
//       {/* Shine effect */}
//       <motion.div
//         className="absolute inset-0"
//         style={{
//           background: `radial-gradient(circle at ${mousePosition.x * 100 + 50}% ${mousePosition.y * 100 + 50}%, rgba(255,255,255,0.3), transparent 70%)`,
//         }}
//       />
      
//       {children}
//     </motion.div>
//   );
// };

// // Animated Counter
// const AnimatedCounter = ({ value, label }: { value: string; label: string }) => {
//   const [count, setCount] = useState(0);
//   const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
//   const suffix = value.replace(/[0-9]/g, '');
//   const counterRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             let start = 0;
//             const end = numericValue;
//             const duration = 2000;
//             const increment = end / (duration / 16);
            
//             const timer = setInterval(() => {
//               start += increment;
//               if (start >= end) {
//                 setCount(end);
//                 clearInterval(timer);
//               } else {
//                 setCount(Math.floor(start));
//               }
//             }, 16);

//             return () => clearInterval(timer);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     if (counterRef.current) {
//       observer.observe(counterRef.current);
//     }

//     return () => observer.disconnect();
//   }, [numericValue]);

//   return (
//     <div ref={counterRef} className="text-center">
//       <div className="text-3xl font-bold text-white mb-1">
//         {count}{suffix}
//       </div>
//       <div className="text-xs text-white/60 uppercase tracking-wider">{label}</div>
//     </div>
//   );
// };

// export default function ValuesSection() {
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

//   return (
//     <section 
//       ref={containerRef}
//       className="relative min-h-screen py-32 overflow-hidden bg-[#030014]"
//     >
//       {/* Dynamic Background */}
//       <motion.div 
//         className="absolute inset-0"
//         style={{ y: backgroundY }}
//       >
//         {/* Aurora effect */}
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(74,144,226,0.3),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(255,77,77,0.3),transparent_50%)]" />
        
//         {/* Grid with perspective */}
//         <div 
//           className="absolute inset-0 opacity-20"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: '50px 50px',
//             transform: 'perspective(500px) rotateX(10deg)',
//             transformOrigin: 'top',
//           }}
//         />
        
//         {/* Floating particles */}
//         {[...Array(50)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 rounded-full"
//             style={{
//               background: i % 3 === 0 ? '#FF4D4D' : i % 3 === 1 ? '#4A90E2' : '#7ED321',
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -100, 0],
//               opacity: [0, 0.8, 0],
//               scale: [0, 1, 0],
//             }}
//             transition={{
//               duration: 5 + Math.random() * 5,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//             }}
//           />
//         ))}
//       </motion.div>

//       <FloatingShapes />

//       <div className="container mx-auto px-4 lg:px-8 relative z-10">
//         {/* Header Section */}
//         <motion.div 
//           style={{ opacity }}
//           className="text-center mb-20"
//         >
//           {/* Animated badge */}
//           <motion.div
//             initial={{ scale: 0, rotate: -180 }}
//             whileInView={{ scale: 1, rotate: 0 }}
//             transition={{ type: "spring", stiffness: 200, damping: 15 }}
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8"
//           >
//             <Orbit className="w-4 h-4 text-[#4A90E2]" />
//             <span className="text-sm font-medium text-white/90 tracking-widest">MANIFESTO</span>
//             <Sparkles className="w-4 h-4 text-[#FF4D4D]" />
//           </motion.div>

//           {/* Main title with animated gradient */}
//           <motion.h2 
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-6xl md:text-7xl font-black mb-6"
//           >
//             <span className="text-white">The </span>
//             <span className="relative">
//               <span className="bg-gradient-to-r from-[#FF4D4D] via-[#4A90E2] to-[#7ED321] bg-clip-text text-transparent">
//                 Principles
//               </span>
//               <motion.div
//                 className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF4D4D] via-[#4A90E2] to-[#7ED321] rounded-full"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: '100%' }}
//                 transition={{ duration: 1, delay: 0.8 }}
//               />
//             </span>
//             <br />
//             <span className="text-white">That Define Our DNA</span>
//           </motion.h2>

//           <motion.p 
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed"
//           >
//             Every line of code, every solution, every relationship is guided by these fundamental principles
//           </motion.p>
//         </motion.div>

//         {/* Values Grid - Holographic Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {values.map((value, index) => {
//             const Icon = value.icon;
//             const OrbitIcon = value.orbitIcon;
//             const isExpanded = expandedIndex === index;

//             return (
//               <motion.div
//                 key={value.label}
//                 initial={{ opacity: 0, y: 50, scale: 0.9 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 transition={{ 
//                   duration: 0.5, 
//                   delay: index * 0.1,
//                   type: "spring",
//                   stiffness: 100
//                 }}
//                 viewport={{ once: true }}
//                 onHoverStart={() => setExpandedIndex(index)}
//                 onHoverEnd={() => setExpandedIndex(null)}
//                 className="group"
//               >
//                 <HolographicCard gradient={value.gradient}>
//                   <div className="relative p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
//                     {/* Animated pattern background */}
//                     <div 
//                       className="absolute inset-0 opacity-10"
//                       style={{
//                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 30 L30 55 L5 30 L30 5' stroke='${value.gradient[0]}' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
//                         backgroundSize: '30px 30px',
//                       }}
//                     />

//                     <OrbitingParticles gradient={value.gradient} />

//                     {/* Icon with orbit effect */}
//                     <div className="relative mb-8">
//                       <motion.div 
//                         className="relative w-20 h-20 mx-auto"
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                       >
//                         <div 
//                           className="absolute inset-0 rounded-2xl"
//                           style={{
//                             background: `linear-gradient(135deg, ${value.gradient[0]}, ${value.gradient[1]})`,
//                             opacity: 0.2,
//                             filter: 'blur(8px)',
//                           }}
//                         />
//                         <div 
//                           className="absolute inset-0 rounded-2xl flex items-center justify-center"
//                           style={{
//                             background: `linear-gradient(135deg, ${value.gradient[0]}, ${value.gradient[1]})`,
//                           }}
//                         >
//                           <Icon className="w-8 h-8 text-white" />
//                         </div>
//                       </motion.div>

//                       {/* Orbiting icon */}
//                       <motion.div
//                         className="absolute -top-2 -right-2"
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//                       >
//                         <OrbitIcon 
//                           className="w-5 h-5" 
//                           style={{ color: value.gradient[0] }}
//                         />
//                       </motion.div>
//                     </div>

//                     {/* Content */}
//                     <h3 className="text-2xl font-bold text-white mb-3 text-center">
//                       {value.label}
//                     </h3>
                    
//                     <p className="text-white/70 text-sm leading-relaxed text-center mb-6">
//                       {value.description}
//                     </p>

//                     {/* Metric with animated border */}
//                     <div 
//                       className="relative p-4 rounded-xl overflow-hidden"
//                       style={{
//                         background: `linear-gradient(135deg, ${value.gradient[0]}20, ${value.gradient[1]}20)`,
//                       }}
//                     >
//                       <div 
//                         className="absolute inset-0 opacity-20"
//                         style={{
//                           background: `linear-gradient(90deg, transparent, ${value.gradient[0]}, transparent)`,
//                           animation: 'shimmer 2s infinite',
//                         }}
//                       />
//                       <AnimatedCounter value={value.metric} label={value.metricLabel} />
//                     </div>

//                     {/* Expandable detail */}
//                     <AnimatePresence>
//                       {isExpanded && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: 'auto', opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           className="mt-4 text-xs text-white/50 text-center"
//                         >
//                           <div className="pt-4 border-t border-white/10">
//                             Click to learn more about our commitment to {value.label}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>

//                     {/* Hover glow effect */}
//                     <motion.div
//                       className="absolute inset-0 pointer-events-none"
//                       animate={{
//                         boxShadow: isExpanded ? `0 0 30px ${value.gradient[0]}` : 'none',
//                       }}
//                     />
//                   </div>
//                 </HolographicCard>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Interactive Journey Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="mt-32 relative"
//         >
//           {/* Cosmic ring */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <motion.div
//               className="w-[500px] h-[500px] rounded-full border border-white/10"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//             >
//               <div className="absolute inset-0 rounded-full border-t-2 border-[#4A90E2] animate-pulse" />
//             </motion.div>
//           </div>

//           <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 overflow-hidden">
//             {/* Floating orbs */}
//             <div className="absolute top-0 -left-20 w-40 h-40 bg-[#FF4D4D] rounded-full blur-[80px] opacity-20 animate-pulse" />
//             <div className="absolute bottom-0 -right-20 w-40 h-40 bg-[#4A90E2] rounded-full blur-[80px] opacity-20 animate-pulse" />

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <motion.h3 
//                   className="text-4xl font-bold text-white mb-4"
//                   initial={{ x: -50, opacity: 0 }}
//                   whileInView={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.8 }}
//                 >
//                   Ready to Start Your
//                   <span className="bg-gradient-to-r from-[#FF4D4D] to-[#4A90E2] bg-clip-text text-transparent block">
//                     Cosmic Journey?
//                   </span>
//                 </motion.h3>
                
//                 <motion.p 
//                   className="text-white/60 mb-8 text-lg"
//                   initial={{ x: -50, opacity: 0 }}
//                   whileInView={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 1 }}
//                 >
//                   Join hundreds of companies that have transformed their future with our values-driven approach.
//                 </motion.p>

//                 <motion.div 
//                   className="flex flex-wrap gap-4"
//                   initial={{ x: -50, opacity: 0 }}
//                   whileInView={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 1.2 }}
//                 >
//                   <Link to="/values">
//                     <Button className="relative group bg-gradient-to-r from-[#FF4D4D] to-[#4A90E2] text-white border-0 px-8 py-6 rounded-full text-lg font-semibold overflow-hidden">
//                       <span className="relative z-10 flex items-center gap-2">
//                         Launch Journey
//                         <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                       </span>
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#7ED321]"
//                         initial={{ x: '100%' }}
//                         whileHover={{ x: 0 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </Button>
//                   </Link>
                  
//                   <Link to="/contact">
//                     <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg backdrop-blur-sm">
//                       Explore Universe
//                     </Button>
//                   </Link>
//                 </motion.div>
//               </div>

//               {/* 3D Stats Cube */}
//               <div className="relative h-[300px] perspective-1000">
//                 <motion.div
//                   className="relative w-full h-full preserve-3d"
//                   animate={{
//                     rotateX: [0, 360],
//                     rotateY: [0, 360],
//                   }}
//                   transition={{
//                     duration: 20,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                 >
//                   {[
//                     { number: '15+', label: 'Years', color: '#FF4D4D' },
//                     { number: '500+', label: 'Projects', color: '#4A90E2' },
//                     { number: '250+', label: 'Clients', color: '#7ED321' },
//                     { number: '50+', label: 'Experts', color: '#F5A623' },
//                   ].map((stat, i) => (
//                     <div
//                       key={i}
//                       className="absolute inset-0 backface-hidden flex items-center justify-center rounded-2xl"
//                       style={{
//                         transform: `rotateY(${i * 90}deg) translateZ(150px)`,
//                         background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}40)`,
//                         backdropFilter: 'blur(10px)',
//                         border: `1px solid ${stat.color}60`,
//                       }}
//                     >
//                       <div className="text-center">
//                         <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
//                         <div className="text-white/70">{stat.label}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Quantum Stats */}
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
//         >
//           {[
//             { label: 'Quantum Performance', value: '10x', icon: Zap },
//             { label: 'Global Reach', value: '30+', icon: Compass },
//             { label: 'Zero Downtime', value: '99.9%', icon: Shield },
//             { label: 'Innovation Rate', value: '∞', icon: Infinity },
//           ].map((stat, index) => {
//             const Icon = stat.icon;
//             return (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 className="relative group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//                 <Icon className="w-6 h-6 text-white/40 mb-3 group-hover:text-white transition-colors" />
//                 <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
//                 <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }




// import { Link } from 'react-router-dom';
// import { 
//   Heart, Shield, Lightbulb, Zap, Target, Users, 
//   ArrowRight, Sparkles, Compass 
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import "./ValuesSection.css";

// const values = [
//   { 
//     icon: Heart, 
//     title: 'Customer Centricity', 
//     description: 'Your success is our success. We put customers at the heart of every decision.',
//     color: '#E54D4D',
//     lightColor: '#FDF2F2'
//   },
//   { 
//     icon: Shield, 
//     title: 'Peace of Mind', 
//     description: 'Reliable solutions that let you sleep easy, knowing your infrastructure is secure.',
//     color: '#4A7FE0',
//     lightColor: '#F2F6FD'
//   },
//   { 
//     icon: Lightbulb, 
//     title: 'Innovation', 
//     description: 'Constantly pushing boundaries to bring you the latest technological advancements.',
//     color: '#E5A145',
//     lightColor: '#FEF9F0'
//   },
//   { 
//     icon: Zap, 
//     title: 'Future Ready', 
//     description: 'Building solutions that scale with tomorrow\'s challenges and opportunities.',
//     color: '#4CB05E',
//     lightColor: '#F2FAF0'
//   },
//   { 
//     icon: Target, 
//     title: 'Result Oriented', 
//     description: 'Focused on delivering measurable outcomes that drive real business value.',
//     color: '#A65CC9',
//     lightColor: '#F9F2FD'
//   },
//   { 
//     icon: Users, 
//     title: 'Accountability', 
//     description: 'Taking ownership and responsibility for every project, big or small.',
//     color: '#E57A7A',
//     lightColor: '#FEF2F2'
//   },
// ];

// export default function ValuesSection() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 100,
//       }
//     }
//   };

//   return (
//     <section className="relative py-28 bg-gradient-to-b from-[#0A0A0A] to-[#121212] overflow-hidden">
//       {/* Subtle background pattern */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(229,77,77,0.03),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(74,127,224,0.03),transparent_50%)]" />
//         <div className="absolute inset-0 opacity-[0.02]" style={{ 
//           backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 20px)'
//         }} />
//       </div>

//       <div className="container mx-auto px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center max-w-3xl mx-auto mb-20"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
//             <Compass size={14} className="text-[#E54D4D]" />
//             <span className="text-xs font-medium text-white/60 tracking-wider">OUR VALUES</span>
//             <Sparkles size={14} className="text-[#4A7FE0]" />
//           </div>
          
//           <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
//             What <span className="font-semibold bg-gradient-to-r from-[#E54D4D] via-[#4A7FE0] to-[#4CB05E] bg-clip-text text-transparent">guides</span> us
//           </h2>
          
//           <p className="text-white/40 text-base leading-relaxed">
//             Principles that shape our approach and define our relationships
//           </p>
//         </motion.div>

//         {/* Values Grid - Clean Cards */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
//         >
//           {values.map((value, index) => {
//             const Icon = value.icon;
//             const isHovered = hoveredIndex === index;

//             return (
//               <motion.div
//                 key={value.title}
//                 variants={itemVariants}
//                 onHoverStart={() => setHoveredIndex(index)}
//                 onHoverEnd={() => setHoveredIndex(null)}
//                 className="group relative"
//               >
//                 {/* Card */}
//                 <div 
//                   className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 overflow-hidden"
//                   style={{
//                     transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
//                   }}
//                 >
//                   {/* Hover gradient overlay */}
//                   <motion.div 
//                     className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                     style={{
//                       background: `linear-gradient(135deg, ${value.color}08, transparent)`,
//                     }}
//                   />

//                   {/* Icon */}
//                   <div className="relative mb-6">
//                     <div 
//                       className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
//                       style={{ 
//                         background: isHovered ? value.color : 'rgba(255,255,255,0.05)',
//                         border: `1px solid ${isHovered ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
//                       }}
//                     >
//                       <Icon 
//                         size={24} 
//                         style={{ 
//                           color: isHovered ? '#ffffff' : value.color,
//                           transition: 'color 0.3s ease'
//                         }} 
//                       />
//                     </div>
                    
//                     {/* Small decorative dot */}
//                     <motion.div 
//                       className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
//                       style={{ backgroundColor: value.color }}
//                       animate={{ 
//                         scale: isHovered ? [1, 1.5, 1] : 1,
//                       }}
//                       transition={{ duration: 0.5 }}
//                     />
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-lg font-medium text-white mb-3">
//                     {value.title}
//                   </h3>
                  
//                   {/* Description */}
//                   <p className="text-white/40 text-sm leading-relaxed">
//                     {value.description}
//                   </p>

//                   {/* Bottom line - appears on hover */}
//                   <motion.div 
//                     className="absolute bottom-0 left-0 right-0 h-[2px]"
//                     initial={{ scaleX: 0 }}
//                     animate={{ scaleX: isHovered ? 1 : 0 }}
//                     transition={{ duration: 0.4 }}
//                     style={{ 
//                       background: `linear-gradient(90deg, ${value.color}, transparent)`,
//                       transformOrigin: 'left'
//                     }}
//                   />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Simple CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <Link to="/values">
//             <Button 
//               variant="ghost" 
//               className="group text-white/60 hover:text-white px-6 py-5 rounded-full border border-white/10 hover:border-white/20 transition-all"
//             >
//               <span className="flex items-center gap-2 text-sm font-normal">
//                 Learn more about our values
//                 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//               </span>
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




// import { Link } from 'react-router-dom';
// import { 
//   Heart, Shield, Lightbulb, Zap, Target, Users, 
//   ArrowRight, Sparkles, Play, Pause 
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { motion, useInView, AnimatePresence } from 'framer-motion';
// import { useRef, useState } from 'react';
// import "./ValuesSection.css";

// // Import images (adjust paths as needed)
// import valueImage1 from '@/assets/netw1.jpg';
// import valueImage2 from '@/assets/netw2.jpg';
// import valueImage3 from '@/assets/netw3.jpg';
// import valueImage4 from '@/assets/netw1.jpg';
// import valueImage5 from '@/assets/netw2.jpg';
// import valueImage6 from '@/assets/netw3.jpg';
// import valueVideo from '@/assets/networking.mp4';

// const values = [
//   { 
//     icon: Heart, 
//     title: 'Customer Centricity', 
//     description: 'Your success is our success. We put customers at the heart of every decision.',
//     color: '#E54D4D',
//     image: valueImage1,
//     video: valueVideo,
//     testimonial: {
//       quote: "They truly understand our needs",
//       author: "— Sarah Chen, CEO"
//     }
//   },
//   { 
//     icon: Shield, 
//     title: 'Peace of Mind', 
//     description: 'Reliable solutions that let you sleep easy, knowing your infrastructure is secure.',
//     color: '#4A7FE0',
//     image: valueImage2,
//     video: valueVideo,
//     testimonial: {
//       quote: "Rock-solid security",
//       author: "— Michael Ross, CTO"
//     }
//   },
//   { 
//     icon: Lightbulb, 
//     title: 'Innovation', 
//     description: 'Constantly pushing boundaries to bring you the latest technological advancements.',
//     color: '#E5A145',
//     image: valueImage3,
//     video: valueVideo,
//     testimonial: {
//       quote: "Always ahead of the curve",
//       author: "— Dr. James Lee"
//     }
//   },
//   { 
//     icon: Zap, 
//     title: 'Future Ready', 
//     description: 'Building solutions that scale with tomorrow\'s challenges and opportunities.',
//     color: '#4CB05E',
//     image: valueImage4,
//     video: valueVideo,
//     testimonial: {
//       quote: "Built for tomorrow",
//       author: "— Emma Watson, PM"
//     }
//   },
//   { 
//     icon: Target, 
//     title: 'Result Oriented', 
//     description: 'Focused on delivering measurable outcomes that drive real business value.',
//     color: '#A65CC9',
//     image: valueImage5,
//     video: valueVideo,
//     testimonial: {
//       quote: "They deliver every time",
//       author: "— Robert Kim"
//     }
//   },
//   { 
//     icon: Users, 
//     title: 'Accountability', 
//     description: 'Taking ownership and responsibility for every project, big or small.',
//     color: '#E57A7A',
//     image: valueImage6,
//     video: valueVideo,
//     testimonial: {
//       quote: "They own it completely",
//       author: "— Lisa Zhang"
//     }
//   },
// ];

// // Video Modal Component
// const VideoModal = ({ isOpen, onClose, videoSrc }: { isOpen: boolean; onClose: () => void; videoSrc: string }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(true);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             transition={{ type: "spring", damping: 25 }}
//             className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <video
//               ref={videoRef}
//               src={videoSrc}
//               autoPlay
//               loop
//               playsInline
//               className="w-full h-auto rounded-2xl"
//             />
            
//             {/* Video controls overlay */}
//             <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
//               <button
//                 onClick={togglePlay}
//                 className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
//               >
//                 {isPlaying ? <Pause size={16} className="text-white" /> : <Play size={16} className="text-white" />}
//               </button>
//             </div>

//             {/* Close button */}
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
//             >
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path d="M1 1L13 13M1 13L13 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
//               </svg>
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // Individual Value Card with Media
// const ValueCard = ({ value, index }: { value: typeof values[0], index: number }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [showVideo, setShowVideo] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(cardRef, { once: true, amount: 0.3 });
//   const Icon = value.icon;

//   return (
//     <>
//       <motion.div
//         ref={cardRef}
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ 
//           duration: 0.7,
//           delay: index * 0.1,
//           ease: [0.21, 0.47, 0.32, 0.98]
//         }}
//         onHoverStart={() => setIsHovered(true)}
//         onHoverEnd={() => setIsHovered(false)}
//         className="group relative"
//       >
//         {/* Card Container */}
//         <div className="relative h-[400px] rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/[0.05]">
          
//           {/* Background Image with Parallax */}
//           <motion.div 
//             className="absolute inset-0"
//             animate={{ 
//               scale: isHovered ? 1.1 : 1,
//             }}
//             transition={{ duration: 0.6 }}
//           >
//             <img 
//               src={value.image} 
//               alt={value.title}
//               className="w-full h-full object-cover opacity-40"
//             />
            
//             {/* Gradient overlays */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
//             <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent" />
            
//             {/* Color overlay on hover */}
//             <motion.div 
//               className="absolute inset-0 mix-blend-overlay"
//               style={{ backgroundColor: value.color }}
//               animate={{ opacity: isHovered ? 0.15 : 0 }}
//               transition={{ duration: 0.4 }}
//             />
//           </motion.div>

//           {/* Content */}
//           <div className="absolute inset-0 p-8 flex flex-col justify-between">
//             {/* Top section */}
//             <div className="flex items-start justify-between">
//               {/* Icon with animated background */}
//               <motion.div 
//                 className="relative w-12 h-12 rounded-xl overflow-hidden"
//                 animate={isHovered ? {
//                   scale: [1, 1.1, 1],
//                 } : {}}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div 
//                   className="absolute inset-0"
//                   style={{ backgroundColor: value.color }}
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <Icon size={20} className="text-white" />
//                 </div>
                
//                 {/* Pulse ring */}
//                 <motion.div
//                   className="absolute inset-0 rounded-xl border-2 border-white"
//                   style={{ borderColor: value.color }}
//                   animate={isHovered ? {
//                     opacity: [0, 0.5, 0],
//                     scale: [1, 1.5, 2],
//                   } : {}}
//                   transition={{ duration: 1, repeat: Infinity }}
//                 />
//               </motion.div>

//               {/* Video button */}
//               <motion.button
//                 onClick={() => setShowVideo(true)}
//                 className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Play size={14} className="text-white" />
//               </motion.button>
//             </div>

//             {/* Bottom section */}
//             <div>
//               {/* Title */}
//               <h3 className="text-2xl font-light text-white mb-2">
//                 {value.title}
//               </h3>
              
//               {/* Description */}
//               <p className="text-white/40 text-sm leading-relaxed mb-4">
//                 {value.description}
//               </p>

//               {/* Testimonial - appears on hover */}
//               <AnimatePresence>
//                 {isHovered && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.3 }}
//                     className="border-l-2 pl-4"
//                     style={{ borderColor: value.color }}
//                   >
//                     <p className="text-white/80 text-sm italic mb-1">"{value.testimonial.quote}"</p>
//                     <p className="text-white/40 text-xs">{value.testimonial.author}</p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Decorative line */}
//               <motion.div 
//                 className="absolute bottom-8 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
//                 initial={{ scaleX: 0, opacity: 0 }}
//                 animate={{ scaleX: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
//                 transition={{ duration: 0.6 }}
//               />
//             </div>
//           </div>

//           {/* Corner accents */}
//           <svg className="absolute top-0 left-0 w-16 h-16" viewBox="0 0 100 100">
//             <path 
//               d="M0 0 L100 0 L0 100 L0 0" 
//               fill="none" 
//               stroke={value.color} 
//               strokeWidth="1.5" 
//               strokeOpacity="0.3"
//             />
//           </svg>
//         </div>
//       </motion.div>

//       {/* Video Modal */}
//       <VideoModal 
//         isOpen={showVideo} 
//         onClose={() => setShowVideo(false)} 
//         videoSrc={value.video} 
//       />
//     </>
//   );
// };

// // Showreel Section
// const Showreel = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="mt-20 relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.05] p-1"
//     >
//       <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
//         {/* Video element */}
//         <video
//           ref={videoRef}
//           src={valueVideo}
//           loop
//           playsInline
//           className="w-full h-full object-cover"
//         />
        
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A] opacity-60" />
        
//         {/* Content */}
//         <div className="absolute inset-0 flex items-center justify-between p-8">
//           <div>
//             <span className="text-xs text-white/40 tracking-widest uppercase mb-2 block">Showreel</span>
//             <h3 className="text-3xl font-light text-white">See our values in <span className="font-semibold text-[#E54D4D]">action</span></h3>
//           </div>
          
//           <motion.button
//             onClick={togglePlay}
//             className="group relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {isPlaying ? (
//               <Pause size={24} className="text-white" />
//             ) : (
//               <Play size={24} className="text-white ml-1" />
//             )}
            
//             {/* Pulse ring */}
//             <motion.div
//               className="absolute inset-0 rounded-full border border-white/40"
//               animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             />
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default function ValuesSection() {
//   const headerRef = useRef<HTMLDivElement>(null);
//   const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

//   return (
//     <section className="relative py-28 bg-[#0A0A0A] overflow-hidden">
//       {/* Dynamic background */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(229,77,77,0.03),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(74,127,224,0.03),transparent_50%)]" />
//         <div className="absolute inset-0 opacity-[0.02]" style={{ 
//           backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 30px)'
//         }} />
        
//         {/* Floating particles */}
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 rounded-full bg-white/5"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               opacity: [0, 0.5, 0],
//             }}
//             transition={{
//               duration: 5 + Math.random() * 5,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] mb-6"
//           >
//             <Sparkles size={12} className="text-white/40" />
//             <span className="text-[10px] font-medium text-white/40 tracking-[0.2em] uppercase">Our Essence</span>
//           </motion.div>

//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl md:text-5xl font-light text-white mb-4"
//           >
//             <span className="bg-gradient-to-r from-[#E54D4D] via-[#4A7FE0] to-[#4CB05E] bg-clip-text text-transparent font-semibold">
//               Values
//             </span>{' '}
//             that shape our world
//           </motion.h2>

//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-white/25 text-sm"
//           >
//             Experience our principles through visuals and stories
//           </motion.p>
//         </div>

//         {/* Cards Grid with Images */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {values.map((value, index) => (
//             <ValueCard key={value.title} value={value} index={index} />
//           ))}
//         </div>

//         {/* Showreel Section */}
//         <Showreel />

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <Link to="/values">
//             <Button 
//               variant="ghost" 
//               className="group relative px-8 py-5 rounded-full bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-500"
//             >
//               <span className="flex items-center gap-3 text-white/50 group-hover:text-white/80 transition-colors duration-300">
//                 <span className="text-xs tracking-widest uppercase">Watch full stories</span>
//                 <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
//               </span>
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }






// import { Link } from 'react-router-dom';
// import { 
//   Heart, Shield, Lightbulb, Zap, Target, Users, 
//   ArrowRight, Sparkles, Play, Pause, Volume2, VolumeX,
//   Maximize2, Minimize2, Camera, Film, Image, X,
//   ChevronRight, Globe, Cpu, Network, Star, Award
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { motion, useInView, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';
// import "./ValuesSection.css";

// // Import media (adjust paths as needed)
// import valueImage1 from '@/assets/netw1.jpg';
// import valueImage2 from '@/assets/netw2.jpg';
// import valueImage3 from '@/assets/netw3.jpg';
// import valueImage4 from '@/assets/brand-colors.jpg';
// import valueImage5 from '@/assets/data-cabling.jpg';
// import valueImage6 from '@/assets/data-security.jpg';
// import valueVideo1 from '@/assets/hero-video.mp4';
// import valueVideo2 from '@/assets/networking.mp4';
// import valueVideo3 from '@/assets/networking.mp4';
// import valueVideo4 from '@/assets/networking.mp4';
// import valueVideo5 from '@/assets/networking.mp4';
// import valueVideo6 from '@/assets/networking.mp4';
// import showcaseVideo from '@/assets/networking.mp4';

// const values = [
//   { 
//     icon: Heart, 
//     title: 'Customer Centricity', 
//     description: 'Your success is our success. We put customers at the heart of every decision.',
//     color: '#FF4D4D',
//     secondaryColor: '#FF8A8A',
//     image: valueImage1,
//     video: valueVideo1,
//     stats: '98%',
//     statLabel: 'satisfaction',
//     testimonial: {
//       quote: "They transformed our entire operation",
//       author: "Sarah Chen, CEO",
//       avatar: "https://i.pravatar.cc/150?img=1"
//     },
//     particles: ['❤️', '⭐', '💫']
//   },
//   { 
//     icon: Shield, 
//     title: 'Peace of Mind', 
//     description: 'Reliable solutions that let you sleep easy, knowing your infrastructure is secure.',
//     color: '#4A7FE0',
//     secondaryColor: '#7AA3FF',
//     image: valueImage2,
//     video: valueVideo2,
//     stats: '24/7',
//     statLabel: 'protection',
//     testimonial: {
//       quote: "Rock-solid security, always there",
//       author: "Michael Ross, CTO",
//       avatar: "https://i.pravatar.cc/150?img=2"
//     },
//     particles: ['🛡️', '🔒', '⚡']
//   },
//   { 
//     icon: Lightbulb, 
//     title: 'Innovation', 
//     description: 'Constantly pushing boundaries to bring you the latest technological advancements.',
//     color: '#FFB347',
//     secondaryColor: '#FFD700',
//     image: valueImage3,
//     video: valueVideo3,
//     stats: '50+',
//     statLabel: 'patents',
//     testimonial: {
//       quote: "They're always steps ahead",
//       author: "Dr. James Lee",
//       avatar: "https://i.pravatar.cc/150?img=3"
//     },
//     particles: ['💡', '✨', '🚀']
//   },
//   { 
//     icon: Zap, 
//     title: 'Future Ready', 
//     description: 'Building solutions that scale with tomorrow\'s challenges and opportunities.',
//     color: '#4CB05E',
//     secondaryColor: '#7ED68E',
//     image: valueImage4,
//     video: valueVideo4,
//     stats: '5Y',
//     statLabel: 'roadmap',
//     testimonial: {
//       quote: "Built for what's next",
//       author: "Emma Watson, PM",
//       avatar: "https://i.pravatar.cc/150?img=4"
//     },
//     particles: ['⚡', '🌐', '📡']
//   },
//   { 
//     icon: Target, 
//     title: 'Result Oriented', 
//     description: 'Focused on delivering measurable outcomes that drive real business value.',
//     color: '#A65CC9',
//     secondaryColor: '#C084FC',
//     image: valueImage5,
//     video: valueVideo5,
//     stats: '92%',
//     statLabel: 'success rate',
//     testimonial: {
//       quote: "They deliver every single time",
//       author: "Robert Kim",
//       avatar: "https://i.pravatar.cc/150?img=5"
//     },
//     particles: ['🎯', '📊', '🏆']
//   },
//   { 
//     icon: Users, 
//     title: 'Accountability', 
//     description: 'Taking ownership and responsibility for every project, big or small.',
//     color: '#FF7A7A',
//     secondaryColor: '#FFA5A5',
//     image: valueImage6,
//     video: valueVideo6,
//     stats: '100+',
//     statLabel: 'experts',
//     testimonial: {
//       quote: "They own it completely",
//       author: "Lisa Zhang",
//       avatar: "https://i.pravatar.cc/150?img=6"
//     },
//     particles: ['👥', '🤝', '💪']
//   },
// ];

// // Interactive Particle Background
// const ParticleBackground = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
//   const particles = Array.from({ length: 20 }, (_, i) => ({
//     id: i,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     size: Math.random() * 4 + 2,
//     duration: Math.random() * 3 + 2,
//     delay: Math.random() * 2
//   }));

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {particles.map((particle) => (
//         <motion.div
//           key={particle.id}
//           className="absolute rounded-full"
//           style={{
//             left: `${particle.x}%`,
//             top: `${particle.y}%`,
//             width: particle.size,
//             height: particle.size,
//             backgroundColor: color,
//             filter: `blur(${particle.size / 2}px)`,
//           }}
//           animate={{
//             y: isHovered ? [0, -30, 0] : 0,
//             x: isHovered ? [0, 15, -15, 0] : 0,
//             opacity: isHovered ? [0, 0.8, 0] : 0,
//             scale: isHovered ? [0, 1.5, 0] : 0,
//           }}
//           transition={{
//             duration: particle.duration,
//             delay: particle.delay,
//             repeat: isHovered ? Infinity : 0,
//             ease: "easeInOut"
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // Interactive 3D Tilt Card
// const TiltCard = ({ children, color, isHovered }: { children: React.ReactNode; color: string; isHovered: boolean }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
//   const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

//   const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
//   const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isHovered) return;
//     const rect = ref.current?.getBoundingClientRect();
//     if (!rect) return;
    
//     const mouseXRel = (e.clientX - rect.left) / rect.width - 0.5;
//     const mouseYRel = (e.clientY - rect.top) / rect.height - 0.5;
    
//     x.set(mouseXRel);
//     y.set(mouseYRel);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         rotateX,
//         rotateY,
//         transformStyle: "preserve-3d",
//       }}
//       className="relative w-full h-full"
//     >
//       <div
//         style={{
//           transform: "translateZ(30px)",
//           transformStyle: "preserve-3d",
//         }}
//         className="w-full h-full"
//       >
//         {children}
//       </div>
      
//       {/* Interactive glow that follows mouse */}
//       <motion.div
//         className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//         style={{
//           background: `radial-gradient(circle at ${x.get() * 100 + 50}% ${y.get() * 100 + 50}%, ${color}40, transparent 70%)`,
//           filter: "blur(30px)",
//         }}
//       />
//     </motion.div>
//   );
// };

// // Interactive Value Card
// const ValueCard = ({ value, index }: { value: typeof values[0], index: number }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [showVideo, setShowVideo] = useState(false);
//   const [showTestimonial, setShowTestimonial] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const cardRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(cardRef, { once: true, amount: 0.3 });
//   const Icon = value.icon;

//   const handleMouseMove = (e: React.MouseEvent) => {
//     const rect = cardRef.current?.getBoundingClientRect();
//     if (!rect) return;
    
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;
//     setMousePosition({ x, y });
//   };

//   return (
//     <>
//       <motion.div
//         ref={cardRef}
//         initial={{ opacity: 0, scale: 0.9, y: 30 }}
//         animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
//         transition={{ 
//           duration: 0.5,
//           delay: index * 0.1,
//           type: "spring",
//           stiffness: 100
//         }}
//         onHoverStart={() => setIsHovered(true)}
//         onHoverEnd={() => {
//           setIsHovered(false);
//           setShowTestimonial(false);
//         }}
//         onMouseMove={handleMouseMove}
//         className="group relative cursor-pointer"
//         onClick={() => setShowVideo(true)}
//       >
//         <TiltCard color={value.color} isHovered={isHovered}>
//           <div className="relative h-[340px] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/[0.08] shadow-2xl">
            
//             {/* Animated background image */}
//             <motion.div 
//               className="absolute inset-0"
//               animate={{ 
//                 scale: isHovered ? 1.15 : 1,
//                 filter: isHovered ? 'brightness(1.2)' : 'brightness(0.8)'
//               }}
//               transition={{ duration: 0.6 }}
//             >
//               <img 
//                 src={value.image} 
//                 alt={value.title}
//                 className="w-full h-full object-cover"
//               />
              
//               {/* Dynamic gradient overlay based on mouse position */}
//               <div 
//                 className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"
//                 style={{
//                   background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, transparent, #0A0A0A 80%)`
//                 }}
//               />
              
//               {/* Color overlay with pulse effect */}
//               <motion.div 
//                 className="absolute inset-0 mix-blend-overlay"
//                 style={{ backgroundColor: value.color }}
//                 animate={{ 
//                   opacity: isHovered ? 0.25 : 0.1,
//                   scale: isHovered ? 1.05 : 1
//                 }}
//                 transition={{ duration: 0.5 }}
//               />
//             </motion.div>

//             {/* Floating particles */}
//             <ParticleBackground color={value.color} isHovered={isHovered} />

//             {/* Content */}
//             <div className="absolute inset-0 p-6 flex flex-col justify-between">
//               {/* Top section with interactive icon */}
//               <div className="flex items-start justify-between">
//                 <motion.div 
//                   className="relative"
//                   animate={isHovered ? {
//                     rotateY: [0, 360],
//                     scale: [1, 1.2, 1]
//                   } : {}}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <div 
//                     className="relative w-14 h-14 rounded-xl overflow-hidden"
//                     style={{ 
//                       boxShadow: isHovered ? `0 0 40px ${value.color}` : '0 0 20px transparent',
//                     }}
//                   >
//                     <motion.div 
//                       className="absolute inset-0"
//                       style={{ backgroundColor: value.color }}
//                       animate={{
//                         scale: isHovered ? [1, 1.2, 1] : 1,
//                       }}
//                       transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <Icon size={22} className="text-white" />
//                     </div>
                    
//                     {/* Scanning line effect */}
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent"
//                       animate={{ y: ['-100%', '100%'] }}
//                       transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
//                       style={{ opacity: 0.3 }}
//                     />
//                   </div>
//                 </motion.div>

//                 {/* Interactive media buttons */}
//                 <div className="flex gap-2">
//                   <motion.div 
//                     className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10"
//                     animate={{ 
//                       scale: isHovered ? 1.1 : 1,
//                       rotate: isHovered ? 180 : 0
//                     }}
//                   >
//                     <Image size={12} className="text-white/60" />
//                   </motion.div>
//                   <motion.button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setShowVideo(true);
//                     }}
//                     className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors"
//                     whileHover={{ scale: 1.2, rotate: 15 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <Film size={12} className="text-white" />
//                   </motion.button>
//                 </div>
//               </div>

//               {/* Bottom section with animated stats */}
//               <div>
//                 {/* Stat badge with bounce */}
//                 <motion.div 
//                   className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 mb-3"
//                   animate={isHovered ? { 
//                     y: [0, -5, 0],
//                     scale: [1, 1.05, 1]
//                   } : { y: 0 }}
//                   transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
//                 >
//                   <motion.span 
//                     className="text-sm font-bold"
//                     style={{ color: value.color }}
//                     animate={isHovered ? {
//                       textShadow: [
//                         `0 0 8px ${value.color}`,
//                         `0 0 16px ${value.color}`,
//                         `0 0 8px ${value.color}`
//                       ]
//                     } : {}}
//                     transition={{ duration: 1, repeat: Infinity }}
//                   >
//                     {value.stats}
//                   </motion.span>
//                   <span className="text-[8px] text-white/40 uppercase tracking-wider">
//                     {value.statLabel}
//                   </span>
//                 </motion.div>

//                 {/* Title with reveal effect */}
//                 <motion.h3 
//                   className="text-2xl font-light text-white mb-1"
//                   animate={isHovered ? { x: 5 } : { x: 0 }}
//                 >
//                   {value.title}
//                   {isHovered && (
//                     <motion.span
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       className="ml-2 inline-block"
//                     >
//                       <ChevronRight size={16} className="inline text-white/60" />
//                     </motion.span>
//                   )}
//                 </motion.h3>
                
//                 {/* Description with typing effect */}
//                 <motion.p 
//                   className="text-white/40 text-sm leading-relaxed max-w-[220px]"
//                   animate={isHovered ? { 
//                     color: 'rgba(255,255,255,0.6)'
//                   } : {}}
//                 >
//                   {value.description}
//                 </motion.p>

//                 {/* Interactive testimonial popup */}
//                 <AnimatePresence>
//                   {isHovered && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 20, scale: 0.9 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: 20, scale: 0.9 }}
//                       transition={{ type: "spring", damping: 15 }}
//                       className="absolute bottom-6 right-6 left-6 p-3 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10"
//                       onMouseEnter={() => setShowTestimonial(true)}
//                       onMouseLeave={() => setShowTestimonial(false)}
//                     >
//                       <div className="flex items-center gap-3">
//                         <motion.img 
//                           src={value.testimonial.avatar} 
//                           alt={value.testimonial.author}
//                           className="w-8 h-8 rounded-full border-2"
//                           style={{ borderColor: value.color }}
//                           animate={showTestimonial ? { scale: 1.1, rotate: 360 } : { scale: 1, rotate: 0 }}
//                           transition={{ duration: 0.3 }}
//                         />
//                         <div>
//                           <motion.p 
//                             className="text-white/90 text-xs italic"
//                             animate={showTestimonial ? { x: 5 } : { x: 0 }}
//                           >
//                             "{value.testimonial.quote}"
//                           </motion.p>
//                           <motion.p 
//                             className="text-white/40 text-[10px] mt-0.5"
//                             animate={showTestimonial ? { opacity: 1 } : { opacity: 0.6 }}
//                           >
//                             {value.testimonial.author}
//                           </motion.p>
//                         </div>
//                       </div>

//                       {/* Animated stars */}
//                       <div className="absolute -top-1 -right-1 flex gap-0.5">
//                         {[1,2,3].map((star) => (
//                           <motion.span
//                             key={star}
//                             initial={{ opacity: 0, scale: 0 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ delay: star * 0.1 }}
//                           >
//                             <Star size={8} className="text-yellow-400" fill="currentColor" />
//                           </motion.span>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>

//             {/* Animated corner decorations */}
//             <svg className="absolute top-0 left-0 w-20 h-20" viewBox="0 0 100 100">
//               <motion.path 
//                 d="M0 0 L100 0 L0 100 L0 0" 
//                 fill="none" 
//                 stroke={value.color} 
//                 strokeWidth="1.5"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 animate={{ 
//                   pathLength: isHovered ? 1 : 0, 
//                   opacity: isHovered ? 0.5 : 0,
//                   strokeWidth: isHovered ? [1.5, 2.5, 1.5] : 1.5
//                 }}
//                 transition={{ 
//                   duration: 0.8,
//                   strokeWidth: { duration: 1, repeat: Infinity }
//                 }}
//               />
//             </svg>

//             <svg className="absolute bottom-0 right-0 w-20 h-20 rotate-180" viewBox="0 0 100 100">
//               <motion.path 
//                 d="M0 0 L100 0 L0 100 L0 0" 
//                 fill="none" 
//                 stroke={value.color} 
//                 strokeWidth="1.5"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 animate={{ 
//                   pathLength: isHovered ? 1 : 0, 
//                   opacity: isHovered ? 0.5 : 0,
//                   strokeWidth: isHovered ? [1.5, 2.5, 1.5] : 1.5
//                 }}
//                 transition={{ 
//                   duration: 0.8, 
//                   delay: 0.2,
//                   strokeWidth: { duration: 1, repeat: Infinity, delay: 0.5 }
//                 }}
//               />
//             </svg>

//             {/* Interactive pulse rings */}
//             {isHovered && (
//               <>
//                 <motion.div
//                   className="absolute inset-0 rounded-2xl"
//                   style={{ border: `2px solid ${value.color}` }}
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1.2, opacity: 0 }}
//                   transition={{ duration: 1, repeat: Infinity }}
//                 />
//                 <motion.div
//                   className="absolute inset-0 rounded-2xl"
//                   style={{ border: `1px solid ${value.color}` }}
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1.5, opacity: 0 }}
//                   transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
//                 />
//               </>
//             )}
//           </div>
//         </TiltCard>
//       </motion.div>

//       {/* Video Modal */}
//       <VideoModal 
//         isOpen={showVideo} 
//         onClose={() => setShowVideo(false)} 
//         videoSrc={value.video}
//         title={value.title}
//         color={value.color}
//       />
//     </>
//   );
// };

// // Enhanced Video Modal
// const VideoModal = ({ isOpen, onClose, videoSrc, title, color }: { 
//   isOpen: boolean; 
//   onClose: () => void; 
//   videoSrc: string;
//   title: string;
//   color: string;
// }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(false);

//   useEffect(() => {
//     if (isOpen && videoRef.current) {
//       videoRef.current.play();
//     }
//   }, [isOpen]);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
//             animate={{ scale: 1, opacity: 1, rotate: 0 }}
//             exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
//             transition={{ type: "spring", damping: 20 }}
//             className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Video */}
//             <video
//               ref={videoRef}
//               src={videoSrc}
//               autoPlay
//               loop
//               muted={isMuted}
//               playsInline
//               className="w-full h-auto"
//             />

//             {/* Interactive overlay */}
//             <motion.div 
//               className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
//               animate={{ opacity: isPlaying ? 0.8 : 0.4 }}
//             />
            
//             {/* Title with animation */}
//             <motion.div 
//               className="absolute top-6 left-6"
//               initial={{ x: -30, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase">Now Playing</span>
//               <motion.h3 
//                 className="text-xl font-light text-white mt-1"
//                 animate={{ 
//                   color: [color, '#ffffff', color],
//                   textShadow: [`0 0 10px ${color}`, '0 0 0px transparent', `0 0 10px ${color}`]
//                 }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               >
//                 {title}
//               </motion.h3>
//             </motion.div>

//             {/* Interactive controls */}
//             <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
//               <div className="flex gap-3">
//                 <motion.button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     if (videoRef.current) {
//                       if (isPlaying) {
//                         videoRef.current.pause();
//                       } else {
//                         videoRef.current.play();
//                       }
//                       setIsPlaying(!isPlaying);
//                     }
//                   }}
//                   className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
//                   whileHover={{ scale: 1.1, rotate: 360 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {isPlaying ? <Pause size={18} className="text-white" /> : <Play size={18} className="text-white ml-1" />}
//                 </motion.button>

//                 <motion.button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setIsMuted(!isMuted);
//                   }}
//                   className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {isMuted ? <VolumeX size={18} className="text-white" /> : <Volume2 size={18} className="text-white" />}
//                 </motion.button>
//               </div>

//               <motion.button
//                 onClick={onClose}
//                 className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors border border-white/20"
//                 whileHover={{ scale: 1.1, rotate: 90 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <X size={16} className="text-white/60" />
//               </motion.button>
//             </div>

//             {/* Progress bar */}
//             <motion.div 
//               className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r"
//               style={{ 
//                 background: `linear-gradient(90deg, ${color}, #ffffff, ${color})`,
//               }}
//               initial={{ width: "0%" }}
//               animate={{ width: "100%" }}
//               transition={{ duration: 10, repeat: Infinity }}
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // Interactive Showreel
// const Showreel = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="mt-16 relative h-[350px] rounded-2xl overflow-hidden group cursor-pointer"
//       onClick={togglePlay}
//     >
//       {/* Video */}
//       <video
//         ref={videoRef}
//         src={showcaseVideo}
//         loop
//         muted
//         playsInline
//         className="w-full h-full object-cover"
//       />

//       {/* Dynamic overlays */}
//       <motion.div 
//         className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]"
//         animate={{ 
//           opacity: isHovered ? 0.4 : 0.7,
//           background: isHovered 
//             ? 'radial-gradient(circle at 50% 50%, transparent, #0A0A0A 80%)'
//             : 'linear-gradient(90deg, #0A0A0A, transparent, #0A0A0A)'
//         }}
//       />

//       {/* Floating elements */}
//       <motion.div
//         className="absolute inset-0 pointer-events-none"
//         animate={{
//           background: isHovered
//             ? [
//                 'radial-gradient(circle at 20% 30%, #FF4D4D20, transparent 50%)',
//                 'radial-gradient(circle at 80% 70%, #4A7FE020, transparent 50%)',
//                 'radial-gradient(circle at 20% 30%, #FF4D4D20, transparent 50%)'
//               ]
//             : 'none'
//         }}
//         transition={{ duration: 3, repeat: Infinity }}
//       />

//       {/* Content */}
//       <div className="absolute inset-0 flex items-center justify-between p-10">
//         <div>
//           <motion.div
//             initial={{ x: -30, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="flex items-center gap-3 mb-3"
//           >
//             <motion.div
//               animate={{ rotate: isHovered ? 360 : 0 }}
//               transition={{ duration: 1 }}
//             >
//               <Camera size={18} className="text-[#FF4D4D]" />
//             </motion.div>
//             <span className="text-xs text-white/40 tracking-[0.2em] uppercase">Interactive Showreel</span>
//           </motion.div>

//           <motion.h3 
//             initial={{ x: -30, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-4xl font-light text-white mb-2"
//           >
//             Experience{' '}
//             <motion.span
//               className="bg-gradient-to-r from-[#FF4D4D] via-[#4A7FE0] to-[#4CB05E] bg-clip-text text-transparent font-medium inline-block"
//               animate={{ 
//                 scale: isHovered ? [1, 1.1, 1] : 1,
//                 rotate: isHovered ? [0, 2, -2, 0] : 0
//               }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               values
//             </motion.span>{' '}
//             in motion
//           </motion.h3>

//           <motion.p 
//             initial={{ x: -30, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-white/30 text-sm max-w-md"
//           >
//             Watch how our principles come to life through interactive storytelling
//           </motion.p>
//         </div>

//         <motion.button
//           className="relative"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <motion.div 
//             className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center"
//             animate={{
//               boxShadow: isHovered
//                 ? [
//                     '0 0 20px #FF4D4D',
//                     '0 0 40px #4A7FE0',
//                     '0 0 20px #4CB05E',
//                     '0 0 20px #FF4D4D'
//                   ]
//                 : 'none'
//             }}
//             transition={{ duration: 3, repeat: Infinity }}
//           >
//             {isPlaying ? (
//               <Pause size={22} className="text-white" />
//             ) : (
//               <Play size={22} className="text-white ml-1" />
//             )}
//           </motion.div>
          
//           {/* Animated rings */}
//           {[1,2,3].map((i) => (
//             <motion.div
//               key={i}
//               className="absolute inset-0 rounded-full border border-white/30"
//               animate={{ 
//                 scale: [1, 1.5 + i * 0.2, 1],
//                 opacity: [0.5, 0, 0.5]
//               }}
//               transition={{ 
//                 duration: 2,
//                 delay: i * 0.3,
//                 repeat: Infinity
//               }}
//             />
//           ))}
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// // Interactive Gallery
// const Gallery = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const galleryItems = [
//     { src: valueImage1, title: 'Customer Success', icon: '❤️' },
//     { src: valueImage2, title: 'Security Operations', icon: '🛡️' },
//     { src: valueImage3, title: 'Innovation Lab', icon: '💡' },
//     { src: valueImage4, title: 'Future Tech', icon: '⚡' },
//   ];

//   const nextImage = () => {
//     setDirection(1);
//     setActiveIndex((prev) => (prev + 1) % galleryItems.length);
//   };

//   const prevImage = () => {
//     setDirection(-1);
//     setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5, delay: 0.4 }}
//       viewport={{ once: true }}
//       className="mt-12"
//     >
//       <div className="flex items-center justify-between mb-4">
//         <h4 className="text-xs text-white/30 tracking-[0.2em] uppercase flex items-center gap-2">
//           <Award size={14} className="text-[#FF4D4D]" />
//           Momentos Gallery
//         </h4>
//         <div className="flex gap-2">
//           <motion.button
//             onClick={prevImage}
//             className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
//             whileHover={{ scale: 1.1, x: -2 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <ChevronRight size={14} className="text-white/40 rotate-180" />
//           </motion.button>
//           <motion.button
//             onClick={nextImage}
//             className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
//             whileHover={{ scale: 1.1, x: 2 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <ChevronRight size={14} className="text-white/40" />
//           </motion.button>
//         </div>
//       </div>

//       <div className="relative h-[180px] rounded-xl overflow-hidden group">
//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.img
//             key={activeIndex}
//             src={galleryItems[activeIndex].src}
//             alt={galleryItems[activeIndex].title}
//             custom={direction}
//             initial={{ opacity: 0, x: direction * 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: direction * -100 }}
//             transition={{ duration: 0.4 }}
//             className="w-full h-full object-cover"
//           />
//         </AnimatePresence>
        
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        
//         {/* Title with icon */}
//         <motion.div 
//           className="absolute bottom-3 left-3 flex items-center gap-2"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           <span className="text-lg">{galleryItems[activeIndex].icon}</span>
//           <p className="text-white/80 text-xs font-light">
//             {galleryItems[activeIndex].title}
//           </p>
//         </motion.div>

//         {/* Progress dots */}
//         <div className="absolute top-3 right-3 flex gap-1.5">
//           {galleryItems.map((_, i) => (
//             <motion.button
//               key={i}
//               onClick={() => {
//                 setDirection(i > activeIndex ? 1 : -1);
//                 setActiveIndex(i);
//               }}
//               className={`h-1 rounded-full transition-all duration-300 ${
//                 i === activeIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/20'
//               }`}
//               whileHover={{ scale: 1.2 }}
//             />
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default function ValuesSection() {
//   const headerRef = useRef<HTMLDivElement>(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const isHeaderInView = useInView(headerRef, { once: true });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
//       {/* Interactive background that follows mouse */}
//       <motion.div 
//         className="absolute inset-0"
//         animate={{
//           background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,77,77,0.15), rgba(74,127,224,0.1) 40%, transparent 70%)`
//         }}
//         transition={{ duration: 0.3 }}
//       />
      
//       {/* Animated grid */}
//       <div className="absolute inset-0 opacity-[0.02]" style={{ 
//         backgroundImage: `
//           linear-gradient(rgba(255,255,255,0.1) 0.5px, transparent 0.5px),
//           linear-gradient(90deg, rgba(255,255,255,0.1) 0.5px, transparent 0.5px)
//         `,
//         backgroundSize: '30px 30px'
//       }} />

//       {/* Floating orbs */}
//       <motion.div
//         className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#FF4D4D] opacity-5 blur-[80px]"
//         animate={{
//           x: [0, 50, 0],
//           y: [0, -30, 0],
//           scale: [1, 1.2, 1],
//         }}
//         transition={{ duration: 8, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-[#4A7FE0] opacity-5 blur-[80px]"
//         animate={{
//           x: [0, -50, 0],
//           y: [0, 30, 0],
//           scale: [1, 1.3, 1],
//         }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />

//       <div className="container mx-auto px-6 lg:px-8 relative z-10">
//         {/* Interactive Header */}
//         <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] mb-4"
//             whileHover={{ scale: 1.05, borderColor: '#FF4D4D40' }}
//           >
//             <motion.div
//               animate={{ rotate: [0, 360] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//             >
//               <Sparkles size={12} className="text-[#FF4D4D]" />
//             </motion.div>
//             <span className="text-[9px] font-medium text-white/40 tracking-[0.2em] uppercase">Interactive Journey</span>
//           </motion.div>

//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.1 }}
//             className="text-3xl md:text-4xl font-light text-white mb-3"
//           >
//             <motion.span
//               className="bg-gradient-to-r from-[#FF4D4D] via-[#4A7FE0] to-[#4CB05E] bg-clip-text text-transparent font-medium inline-block"
//               animate={{ 
//                 backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//               }}
//               transition={{ duration: 5, repeat: Infinity }}
//               style={{ backgroundSize: '200% 200%' }}
//             >
//               Interactive
//             </motion.span>{' '}
//             Values Experience
//           </motion.h2>

//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.2 }}
//             className="text-white/20 text-sm"
//           >
//             Hover, click, and explore — every element tells a story
//           </motion.p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {values.map((value, index) => (
//             <ValueCard key={value.title} value={value} index={index} />
//           ))}
//         </div>

//         {/* Interactive Showreel */}
//         <Showreel />

//         {/* Gallery */}
//         <Gallery />

//         {/* Interactive CTA */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center mt-12"
//         >
//           <Link to="/values">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-block"
//             >
//               <Button 
//                 variant="ghost" 
//                 className="group relative px-8 py-3 rounded-full bg-white/[0.02] border border-white/[0.05] hover:border-[#FF4D4D] transition-all duration-300 overflow-hidden"
//               >
//                 <motion.span 
//                   className="relative z-10 flex items-center gap-3 text-white/40 group-hover:text-white text-xs tracking-widest uppercase"
//                   animate={{
//                     textShadow: ['0 0 0px transparent', '0 0 8px #FF4D4D', '0 0 0px transparent']
//                   }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   Explore Full Experience
//                   <motion.div
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ duration: 1, repeat: Infinity }}
//                   >
//                     <ArrowRight size={10} />
//                   </motion.div>
//                 </motion.span>
                
//                 {/* Hover effect */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-[#FF4D4D] via-[#4A7FE0] to-[#4CB05E] opacity-0 group-hover:opacity-10"
//                   animate={{
//                     x: ['-100%', '100%'],
//                   }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 />
//               </Button>
//             </motion.div>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }





// import { Link } from 'react-router-dom';
// import { 
//   Heart, Shield, Lightbulb, Zap, Target, Users, 
//   ArrowRight, Sparkles, Play, Pause, Volume2, VolumeX,
//   Maximize2, Minimize2, Camera, Film, Image, X,
//   ChevronRight, Globe, Cpu, Network, Star, Award,
//   Wifi, Radio, Satellite
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { motion, useInView, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';
// import "./ValuesSection.css";

// // Import media (adjust paths as needed)
// import valueImage1 from '@/assets/netw1.jpg';
// import valueImage2 from '@/assets/netw2.jpg';
// import valueImage3 from '@/assets/netw3.jpg';
// import valueImage4 from '@/assets/brand-colors.jpg';
// import valueImage5 from '@/assets/data-cabling.jpg';
// import valueImage6 from '@/assets/data-security.jpg';
// import valueVideo1 from '@/assets/hero-video.mp4';
// import valueVideo2 from '@/assets/networking.mp4';
// import valueVideo3 from '@/assets/networking.mp4';
// import valueVideo4 from '@/assets/networking.mp4';
// import valueVideo5 from '@/assets/networking.mp4';
// import valueVideo6 from '@/assets/networking.mp4';
// import showcaseVideo from '@/assets/networking.mp4';

// const values = [
//   { 
//     icon: Heart, 
//     title: 'Customer Centricity', 
//     description: 'Your success is our success. We put customers at the heart of every decision.',
//     color: '#FF4D4D',
//     secondaryColor: '#FF8A8A',
//     image: valueImage1,
//     video: valueVideo1,
//     stats: '98%',
//     statLabel: 'satisfaction',
//     testimonial: {
//       quote: "They transformed our entire operation",
//       author: "Sarah Chen, CEO",
//       avatar: "https://i.pravatar.cc/150?img=1"
//     },
//     particles: ['❤️', '⭐', '💫']
//   },
//   { 
//     icon: Shield, 
//     title: 'Peace of Mind', 
//     description: 'Reliable solutions that let you sleep easy, knowing your infrastructure is secure.',
//     color: '#4A7FE0',
//     secondaryColor: '#7AA3FF',
//     image: valueImage2,
//     video: valueVideo2,
//     stats: '24/7',
//     statLabel: 'protection',
//     testimonial: {
//       quote: "Rock-solid security, always there",
//       author: "Michael Ross, CTO",
//       avatar: "https://i.pravatar.cc/150?img=2"
//     },
//     particles: ['🛡️', '🔒', '⚡']
//   },
//   { 
//     icon: Lightbulb, 
//     title: 'Innovation', 
//     description: 'Constantly pushing boundaries to bring you the latest technological advancements.',
//     color: '#FFB347',
//     secondaryColor: '#FFD700',
//     image: valueImage3,
//     video: valueVideo3,
//     stats: '50+',
//     statLabel: 'patents',
//     testimonial: {
//       quote: "They're always steps ahead",
//       author: "Dr. James Lee",
//       avatar: "https://i.pravatar.cc/150?img=3"
//     },
//     particles: ['💡', '✨', '🚀']
//   },
//   { 
//     icon: Zap, 
//     title: 'Future Ready', 
//     description: 'Building solutions that scale with tomorrow\'s challenges and opportunities.',
//     color: '#4CB05E',
//     secondaryColor: '#7ED68E',
//     image: valueImage4,
//     video: valueVideo4,
//     stats: '5Y',
//     statLabel: 'roadmap',
//     testimonial: {
//       quote: "Built for what's next",
//       author: "Emma Watson, PM",
//       avatar: "https://i.pravatar.cc/150?img=4"
//     },
//     particles: ['⚡', '🌐', '📡']
//   },
//   { 
//     icon: Target, 
//     title: 'Result Oriented', 
//     description: 'Focused on delivering measurable outcomes that drive real business value.',
//     color: '#A65CC9',
//     secondaryColor: '#C084FC',
//     image: valueImage5,
//     video: valueVideo5,
//     stats: '92%',
//     statLabel: 'success rate',
//     testimonial: {
//       quote: "They deliver every single time",
//       author: "Robert Kim",
//       avatar: "https://i.pravatar.cc/150?img=5"
//     },
//     particles: ['🎯', '📊', '🏆']
//   },
//   { 
//     icon: Users, 
//     title: 'Accountability', 
//     description: 'Taking ownership and responsibility for every project, big or small.',
//     color: '#FF7A7A',
//     secondaryColor: '#FFA5A5',
//     image: valueImage6,
//     video: valueVideo6,
//     stats: '100+',
//     statLabel: 'experts',
//     testimonial: {
//       quote: "They own it completely",
//       author: "Lisa Zhang",
//       avatar: "https://i.pravatar.cc/150?img=6"
//     },
//     particles: ['👥', '🤝', '💪']
//   },
// ];

// // Networking Background Animation
// const NetworkingBackground = () => {
//   const [nodes, setNodes] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number; pulseSpeed: number }>>([]);
//   const [connections, setConnections] = useState<Array<{ from: number; to: number; delay: number; duration: number }>>([]);
  
//   useEffect(() => {
//     // Generate network nodes
//     const newNodes = Array.from({ length: 25 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 4 + 2,
//       speed: Math.random() * 0.5 + 0.2,
//       pulseSpeed: Math.random() * 2 + 1,
//     }));
//     setNodes(newNodes);

//     // Generate connections between nodes
//     const newConnections = [];
//     for (let i = 0; i < 35; i++) {
//       const from = Math.floor(Math.random() * newNodes.length);
//       let to = Math.floor(Math.random() * newNodes.length);
//       while (to === from) {
//         to = Math.floor(Math.random() * newNodes.length);
//       }
//       newConnections.push({
//         from,
//         to,
//         delay: Math.random() * 2,
//         duration: Math.random() * 3 + 2,
//       });
//     }
//     setConnections(newConnections);
//   }, []);

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {/* Animated gradient base */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,77,77,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(74,127,224,0.15),transparent_50%)]" />
      
//       {/* Data flow particles */}
//       {nodes.map((node) => (
//         <motion.div
//           key={`node-${node.id}`}
//           className="absolute rounded-full"
//           style={{
//             left: `${node.x}%`,
//             top: `${node.y}%`,
//             width: node.size,
//             height: node.size,
//             background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(74,127,224,0.3) 70%, transparent 100%)`,
//             boxShadow: '0 0 20px rgba(74,127,224,0.5)',
//           }}
//           animate={{
//             scale: [1, 1.5, 1],
//             opacity: [0.4, 1, 0.4],
//           }}
//           transition={{
//             duration: node.pulseSpeed,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       {/* Connection lines */}
//       <svg className="absolute inset-0 w-full h-full">
//         <defs>
//           <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#FF4D4D" stopOpacity="0.2" />
//             <stop offset="50%" stopColor="#4A7FE0" stopOpacity="0.5" />
//             <stop offset="100%" stopColor="#4CB05E" stopOpacity="0.2" />
//           </linearGradient>
          
//           <filter id="glow">
//             <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
//             <feMerge>
//               <feMergeNode in="coloredBlur"/>
//               <feMergeNode in="SourceGraphic"/>
//             </feMerge>
//           </filter>
//         </defs>

//         {connections.map((conn, idx) => {
//           const fromNode = nodes[conn.from];
//           const toNode = nodes[conn.to];
//           if (!fromNode || !toNode) return null;

//           return (
//             <motion.line
//               key={`conn-${idx}`}
//               x1={`${fromNode.x}%`}
//               y1={`${fromNode.y}%`}
//               x2={`${toNode.x}%`}
//               y2={`${toNode.y}%`}
//               stroke="url(#lineGradient)"
//               strokeWidth="1"
//               filter="url(#glow)"
//               initial={{ pathLength: 0, opacity: 0 }}
//               animate={{ 
//                 pathLength: [0, 1, 0],
//                 opacity: [0, 0.8, 0],
//               }}
//               transition={{
//                 duration: conn.duration,
//                 delay: conn.delay,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />
//           );
//         })}
//       </svg>

//       {/* Floating data packets */}
//       {[...Array(15)].map((_, i) => {
//         const startX = Math.random() * 100;
//         const startY = Math.random() * 100;
//         const endX = Math.random() * 100;
//         const endY = Math.random() * 100;
        
//         return (
//           <motion.div
//             key={`packet-${i}`}
//             className="absolute w-1 h-1 rounded-full"
//             style={{
//               background: `linear-gradient(90deg, #FF4D4D, #4A7FE0, #4CB05E)`,
//               boxShadow: '0 0 10px currentColor',
//               filter: 'blur(1px)',
//             }}
//             initial={{ 
//               left: `${startX}%`, 
//               top: `${startY}%`,
//               scale: 0,
//             }}
//             animate={{ 
//               left: `${endX}%`,
//               top: `${endY}%`,
//               scale: [0, 1.5, 0],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: Math.random() * 4 + 3,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//               ease: "linear",
//             }}
//           />
//         );
//       })}

//       {/* Rotating network rings */}
//       {[...Array(3)].map((_, i) => (
//         <motion.div
//           key={`ring-${i}`}
//           className="absolute rounded-full border border-white/5"
//           style={{
//             width: `${200 + i * 100}px`,
//             height: `${200 + i * 100}px`,
//             left: '50%',
//             top: '50%',
//             transform: 'translate(-50%, -50%)',
//             borderWidth: '1px',
//             borderStyle: 'solid',
//             borderColor: `rgba(74, 127, 224, ${0.1 - i * 0.02})`,
//           }}
//           animate={{
//             rotate: 360,
//             scale: [1, 1.1, 1],
//           }}
//           transition={{
//             rotate: {
//               duration: 20 + i * 5,
//               repeat: Infinity,
//               ease: "linear",
//             },
//             scale: {
//               duration: 8 + i * 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             },
//           }}
//         />
//       ))}

//       {/* Binary rain effect */}
//       {[...Array(10)].map((_, i) => (
//         <motion.div
//           key={`binary-${i}`}
//           className="absolute text-[8px] font-mono text-white/5 whitespace-nowrap"
//           style={{
//             left: `${i * 10}%`,
//             top: '-20px',
//           }}
//           animate={{
//             y: ['0vh', '100vh'],
//           }}
//           transition={{
//             duration: 15 + i * 2,
//             repeat: Infinity,
//             delay: i * 0.5,
//             ease: "linear",
//           }}
//         >
//           {'01010110100101101001011010010110100101101001'}
//         </motion.div>
//       ))}

//       {/* Signal waves */}
//       {[...Array(5)].map((_, i) => (
//         <motion.div
//           key={`wave-${i}`}
//           className="absolute rounded-full border border-white/5"
//           style={{
//             width: `${50 + i * 30}px`,
//             height: `${50 + i * 30}px`,
//             left: `${20 + i * 15}%`,
//             top: `${30 + i * 10}%`,
//             borderWidth: '1px',
//           }}
//           animate={{
//             scale: [1, 1.5, 1],
//             opacity: [0, 0.3, 0],
//             borderColor: [
//               'rgba(255,77,77,0.2)',
//               'rgba(74,127,224,0.4)',
//               'rgba(76,176,94,0.2)',
//             ],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             delay: i * 0.5,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       {/* Glowing dots at intersections */}
//       {[...Array(8)].map((_, i) => (
//         <motion.div
//           key={`glow-${i}`}
//           className="absolute w-2 h-2 rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
//             filter: 'blur(2px)',
//           }}
//           animate={{
//             scale: [1, 2, 1],
//             opacity: [0.3, 0.8, 0.3],
//           }}
//           transition={{
//             duration: 2 + Math.random() * 2,
//             repeat: Infinity,
//             delay: Math.random() * 2,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // Interactive Particle Background
// const ParticleBackground = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
//   const particles = Array.from({ length: 20 }, (_, i) => ({
//     id: i,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     size: Math.random() * 4 + 2,
//     duration: Math.random() * 3 + 2,
//     delay: Math.random() * 2
//   }));

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {particles.map((particle) => (
//         <motion.div
//           key={particle.id}
//           className="absolute rounded-full"
//           style={{
//             left: `${particle.x}%`,
//             top: `${particle.y}%`,
//             width: particle.size,
//             height: particle.size,
//             backgroundColor: color,
//             filter: `blur(${particle.size / 2}px)`,
//           }}
//           animate={{
//             y: isHovered ? [0, -30, 0] : 0,
//             x: isHovered ? [0, 15, -15, 0] : 0,
//             opacity: isHovered ? [0, 0.8, 0] : 0,
//             scale: isHovered ? [0, 1.5, 0] : 0,
//           }}
//           transition={{
//             duration: particle.duration,
//             delay: particle.delay,
//             repeat: isHovered ? Infinity : 0,
//             ease: "easeInOut"
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // Interactive 3D Tilt Card
// const TiltCard = ({ children, color, isHovered }: { children: React.ReactNode; color: string; isHovered: boolean }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
//   const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

//   const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
//   const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isHovered) return;
//     const rect = ref.current?.getBoundingClientRect();
//     if (!rect) return;
    
//     const mouseXRel = (e.clientX - rect.left) / rect.width - 0.5;
//     const mouseYRel = (e.clientY - rect.top) / rect.height - 0.5;
    
//     x.set(mouseXRel);
//     y.set(mouseYRel);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         rotateX,
//         rotateY,
//         transformStyle: "preserve-3d",
//       }}
//       className="relative w-full h-full"
//     >
//       <div
//         style={{
//           transform: "translateZ(30px)",
//           transformStyle: "preserve-3d",
//         }}
//         className="w-full h-full"
//       >
//         {children}
//       </div>
      
//       {/* Interactive glow that follows mouse */}
//       <motion.div
//         className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//         style={{
//           background: `radial-gradient(circle at ${x.get() * 100 + 50}% ${y.get() * 100 + 50}%, ${color}40, transparent 70%)`,
//           filter: "blur(30px)",
//         }}
//       />
//     </motion.div>
//   );
// };

// // Interactive Value Card
// const ValueCard = ({ value, index }: { value: typeof values[0], index: number }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [showVideo, setShowVideo] = useState(false);
//   const [showTestimonial, setShowTestimonial] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const cardRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(cardRef, { once: true, amount: 0.3 });
//   const Icon = value.icon;

//   const handleMouseMove = (e: React.MouseEvent) => {
//     const rect = cardRef.current?.getBoundingClientRect();
//     if (!rect) return;
    
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;
//     setMousePosition({ x, y });
//   };

//   return (
//     <>
//       <motion.div
//         ref={cardRef}
//         initial={{ opacity: 0, scale: 0.9, y: 30 }}
//         animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
//         transition={{ 
//           duration: 0.5,
//           delay: index * 0.1,
//           type: "spring",
//           stiffness: 100
//         }}
//         onHoverStart={() => setIsHovered(true)}
//         onHoverEnd={() => {
//           setIsHovered(false);
//           setShowTestimonial(false);
//         }}
//         onMouseMove={handleMouseMove}
//         className="group relative cursor-pointer"
//         onClick={() => setShowVideo(true)}
//       >
//         <TiltCard color={value.color} isHovered={isHovered}>
//           <div className="relative h-[340px] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/[0.08] shadow-2xl">
            
//             {/* Animated background image */}
//             <motion.div 
//               className="absolute inset-0"
//               animate={{ 
//                 scale: isHovered ? 1.15 : 1,
//                 filter: isHovered ? 'brightness(1.2)' : 'brightness(0.8)'
//               }}
//               transition={{ duration: 0.6 }}
//             >
//               <img 
//                 src={value.image} 
//                 alt={value.title}
//                 className="w-full h-full object-cover"
//               />
              
//               {/* Dynamic gradient overlay based on mouse position */}
//               <div 
//                 className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"
//                 style={{
//                   background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, transparent, #0A0A0A 80%)`
//                 }}
//               />
              
//               {/* Color overlay with pulse effect */}
//               <motion.div 
//                 className="absolute inset-0 mix-blend-overlay"
//                 style={{ backgroundColor: value.color }}
//                 animate={{ 
//                   opacity: isHovered ? 0.25 : 0.1,
//                   scale: isHovered ? 1.05 : 1
//                 }}
//                 transition={{ duration: 0.5 }}
//               />
//             </motion.div>

//             {/* Floating particles */}
//             <ParticleBackground color={value.color} isHovered={isHovered} />

//             {/* Content */}
//             <div className="absolute inset-0 p-6 flex flex-col justify-between">
//               {/* Top section with interactive icon */}
//               <div className="flex items-start justify-between">
//                 <motion.div 
//                   className="relative"
//                   animate={isHovered ? {
//                     rotateY: [0, 360],
//                     scale: [1, 1.2, 1]
//                   } : {}}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <div 
//                     className="relative w-14 h-14 rounded-xl overflow-hidden"
//                     style={{ 
//                       boxShadow: isHovered ? `0 0 40px ${value.color}` : '0 0 20px transparent',
//                     }}
//                   >
//                     <motion.div 
//                       className="absolute inset-0"
//                       style={{ backgroundColor: value.color }}
//                       animate={{
//                         scale: isHovered ? [1, 1.2, 1] : 1,
//                       }}
//                       transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <Icon size={22} className="text-white" />
//                     </div>
                    
//                     {/* Scanning line effect */}
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent"
//                       animate={{ y: ['-100%', '100%'] }}
//                       transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
//                       style={{ opacity: 0.3 }}
//                     />
//                   </div>
//                 </motion.div>

//                 {/* Interactive media buttons */}
//                 <div className="flex gap-2">
//                   <motion.div 
//                     className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10"
//                     animate={{ 
//                       scale: isHovered ? 1.1 : 1,
//                       rotate: isHovered ? 180 : 0
//                     }}
//                   >
//                     <Image size={12} className="text-white/60" />
//                   </motion.div>
//                   <motion.button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setShowVideo(true);
//                     }}
//                     className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors"
//                     whileHover={{ scale: 1.2, rotate: 15 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <Film size={12} className="text-white" />
//                   </motion.button>
//                 </div>
//               </div>

//               {/* Bottom section with animated stats */}
//               <div>
//                 {/* Stat badge with bounce */}
//                 <motion.div 
//                   className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 mb-3"
//                   animate={isHovered ? { 
//                     y: [0, -5, 0],
//                     scale: [1, 1.05, 1]
//                   } : { y: 0 }}
//                   transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
//                 >
//                   <motion.span 
//                     className="text-sm font-bold"
//                     style={{ color: value.color }}
//                     animate={isHovered ? {
//                       textShadow: [
//                         `0 0 8px ${value.color}`,
//                         `0 0 16px ${value.color}`,
//                         `0 0 8px ${value.color}`
//                       ]
//                     } : {}}
//                     transition={{ duration: 1, repeat: Infinity }}
//                   >
//                     {value.stats}
//                   </motion.span>
//                   <span className="text-[8px] text-white/40 uppercase tracking-wider">
//                     {value.statLabel}
//                   </span>
//                 </motion.div>

//                 {/* Title with reveal effect */}
//                 <motion.h3 
//                   className="text-2xl font-light text-white mb-1"
//                   animate={isHovered ? { x: 5 } : { x: 0 }}
//                 >
//                   {value.title}
//                   {isHovered && (
//                     <motion.span
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       className="ml-2 inline-block"
//                     >
//                       <ChevronRight size={16} className="inline text-white/60" />
//                     </motion.span>
//                   )}
//                 </motion.h3>
                
//                 {/* Description with typing effect */}
//                 <motion.p 
//                   className="text-white/40 text-sm leading-relaxed max-w-[220px]"
//                   animate={isHovered ? { 
//                     color: 'rgba(255,255,255,0.6)'
//                   } : {}}
//                 >
//                   {value.description}
//                 </motion.p>

//                 {/* Interactive testimonial popup */}
//                 <AnimatePresence>
//                   {isHovered && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 20, scale: 0.9 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: 20, scale: 0.9 }}
//                       transition={{ type: "spring", damping: 15 }}
//                       className="absolute bottom-6 right-6 left-6 p-3 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10"
//                       onMouseEnter={() => setShowTestimonial(true)}
//                       onMouseLeave={() => setShowTestimonial(false)}
//                     >
//                       <div className="flex items-center gap-3">
//                         <motion.img 
//                           src={value.testimonial.avatar} 
//                           alt={value.testimonial.author}
//                           className="w-8 h-8 rounded-full border-2"
//                           style={{ borderColor: value.color }}
//                           animate={showTestimonial ? { scale: 1.1, rotate: 360 } : { scale: 1, rotate: 0 }}
//                           transition={{ duration: 0.3 }}
//                         />
//                         <div>
//                           <motion.p 
//                             className="text-white/90 text-xs italic"
//                             animate={showTestimonial ? { x: 5 } : { x: 0 }}
//                           >
//                             "{value.testimonial.quote}"
//                           </motion.p>
//                           <motion.p 
//                             className="text-white/40 text-[10px] mt-0.5"
//                             animate={showTestimonial ? { opacity: 1 } : { opacity: 0.6 }}
//                           >
//                             {value.testimonial.author}
//                           </motion.p>
//                         </div>
//                       </div>

//                       {/* Animated stars */}
//                       <div className="absolute -top-1 -right-1 flex gap-0.5">
//                         {[1,2,3].map((star) => (
//                           <motion.span
//                             key={star}
//                             initial={{ opacity: 0, scale: 0 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ delay: star * 0.1 }}
//                           >
//                             <Star size={8} className="text-yellow-400" fill="currentColor" />
//                           </motion.span>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>

//             {/* Animated corner decorations */}
//             <svg className="absolute top-0 left-0 w-20 h-20" viewBox="0 0 100 100">
//               <motion.path 
//                 d="M0 0 L100 0 L0 100 L0 0" 
//                 fill="none" 
//                 stroke={value.color} 
//                 strokeWidth="1.5"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 animate={{ 
//                   pathLength: isHovered ? 1 : 0, 
//                   opacity: isHovered ? 0.5 : 0,
//                   strokeWidth: isHovered ? [1.5, 2.5, 1.5] : 1.5
//                 }}
//                 transition={{ 
//                   duration: 0.8,
//                   strokeWidth: { duration: 1, repeat: Infinity }
//                 }}
//               />
//             </svg>

//             <svg className="absolute bottom-0 right-0 w-20 h-20 rotate-180" viewBox="0 0 100 100">
//               <motion.path 
//                 d="M0 0 L100 0 L0 100 L0 0" 
//                 fill="none" 
//                 stroke={value.color} 
//                 strokeWidth="1.5"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 animate={{ 
//                   pathLength: isHovered ? 1 : 0, 
//                   opacity: isHovered ? 0.5 : 0,
//                   strokeWidth: isHovered ? [1.5, 2.5, 1.5] : 1.5
//                 }}
//                 transition={{ 
//                   duration: 0.8, 
//                   delay: 0.2,
//                   strokeWidth: { duration: 1, repeat: Infinity, delay: 0.5 }
//                 }}
//               />
//             </svg>

//             {/* Interactive pulse rings */}
//             {isHovered && (
//               <>
//                 <motion.div
//                   className="absolute inset-0 rounded-2xl"
//                   style={{ border: `2px solid ${value.color}` }}
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1.2, opacity: 0 }}
//                   transition={{ duration: 1, repeat: Infinity }}
//                 />
//                 <motion.div
//                   className="absolute inset-0 rounded-2xl"
//                   style={{ border: `1px solid ${value.color}` }}
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1.5, opacity: 0 }}
//                   transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
//                 />
//               </>
//             )}
//           </div>
//         </TiltCard>
//       </motion.div>

//       {/* Video Modal */}
//       <VideoModal 
//         isOpen={showVideo} 
//         onClose={() => setShowVideo(false)} 
//         videoSrc={value.video}
//         title={value.title}
//         color={value.color}
//       />
//     </>
//   );
// };

// // Enhanced Video Modal
// const VideoModal = ({ isOpen, onClose, videoSrc, title, color }: { 
//   isOpen: boolean; 
//   onClose: () => void; 
//   videoSrc: string;
//   title: string;
//   color: string;
// }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(false);

//   useEffect(() => {
//     if (isOpen && videoRef.current) {
//       videoRef.current.play();
//     }
//   }, [isOpen]);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
//             animate={{ scale: 1, opacity: 1, rotate: 0 }}
//             exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
//             transition={{ type: "spring", damping: 20 }}
//             className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Video */}
//             <video
//               ref={videoRef}
//               src={videoSrc}
//               autoPlay
//               loop
//               muted={isMuted}
//               playsInline
//               className="w-full h-auto"
//             />

//             {/* Interactive overlay */}
//             <motion.div 
//               className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
//               animate={{ opacity: isPlaying ? 0.8 : 0.4 }}
//             />
            
//             {/* Title with animation */}
//             <motion.div 
//               className="absolute top-6 left-6"
//               initial={{ x: -30, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase">Now Playing</span>
//               <motion.h3 
//                 className="text-xl font-light text-white mt-1"
//                 animate={{ 
//                   color: [color, '#ffffff', color],
//                   textShadow: [`0 0 10px ${color}`, '0 0 0px transparent', `0 0 10px ${color}`]
//                 }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               >
//                 {title}
//               </motion.h3>
//             </motion.div>

//             {/* Interactive controls */}
//             <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
//               <div className="flex gap-3">
//                 <motion.button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     if (videoRef.current) {
//                       if (isPlaying) {
//                         videoRef.current.pause();
//                       } else {
//                         videoRef.current.play();
//                       }
//                       setIsPlaying(!isPlaying);
//                     }
//                   }}
//                   className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
//                   whileHover={{ scale: 1.1, rotate: 360 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {isPlaying ? <Pause size={18} className="text-white" /> : <Play size={18} className="text-white ml-1" />}
//                 </motion.button>

//                 <motion.button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setIsMuted(!isMuted);
//                   }}
//                   className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {isMuted ? <VolumeX size={18} className="text-white" /> : <Volume2 size={18} className="text-white" />}
//                 </motion.button>
//               </div>

//               <motion.button
//                 onClick={onClose}
//                 className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors border border-white/20"
//                 whileHover={{ scale: 1.1, rotate: 90 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <X size={16} className="text-white/60" />
//               </motion.button>
//             </div>

//             {/* Progress bar */}
//             <motion.div 
//               className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r"
//               style={{ 
//                 background: `linear-gradient(90deg, ${color}, #ffffff, ${color})`,
//               }}
//               initial={{ width: "0%" }}
//               animate={{ width: "100%" }}
//               transition={{ duration: 10, repeat: Infinity }}
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // Interactive Showreel
// const Showreel = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="mt-16 relative h-[350px] rounded-2xl overflow-hidden group cursor-pointer"
//       onClick={togglePlay}
//     >
//       {/* Video */}
//       <video
//         ref={videoRef}
//         src={showcaseVideo}
//         loop
//         muted
//         playsInline
//         className="w-full h-full object-cover"
//       />

//       {/* Dynamic overlays */}
//       <motion.div 
//         className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]"
//         animate={{ 
//           opacity: isHovered ? 0.4 : 0.7,
//           background: isHovered 
//             ? 'radial-gradient(circle at 50% 50%, transparent, #0A0A0A 80%)'
//             : 'linear-gradient(90deg, #0A0A0A, transparent, #0A0A0A)'
//         }}
//       />

//       {/* Floating elements */}
//       <motion.div
//         className="absolute inset-0 pointer-events-none"
//         animate={{
//           background: isHovered
//             ? [
//                 'radial-gradient(circle at 20% 30%, #FF4D4D20, transparent 50%)',
//                 'radial-gradient(circle at 80% 70%, #4A7FE020, transparent 50%)',
//                 'radial-gradient(circle at 20% 30%, #FF4D4D20, transparent 50%)'
//               ]
//             : 'none'
//         }}
//         transition={{ duration: 3, repeat: Infinity }}
//       />

//       {/* Content */}
//       <div className="absolute inset-0 flex items-center justify-between p-10">
//         <div>
//           <motion.div
//             initial={{ x: -30, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="flex items-center gap-3 mb-3"
//           >
//             <motion.div
//               animate={{ rotate: isHovered ? 360 : 0 }}
//               transition={{ duration: 1 }}
//             >
//               <Camera size={18} className="text-[#FF4D4D]" />
//             </motion.div>
//             <span className="text-xs text-white/40 tracking-[0.2em] uppercase">Interactive Showreel</span>
//           </motion.div>

//           <motion.h3 
//             initial={{ x: -30, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-4xl font-light text-white mb-2"
//           >
//             Experience{' '}
//             <motion.span
//               className="bg-gradient-to-r from-[#FF4D4D] via-[#4A7FE0] to-[#4CB05E] bg-clip-text text-transparent font-medium inline-block"
//               animate={{ 
//                 scale: isHovered ? [1, 1.1, 1] : 1,
//                 rotate: isHovered ? [0, 2, -2, 0] : 0
//               }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               values
//             </motion.span>{' '}
//             in motion
//           </motion.h3>

//           <motion.p 
//             initial={{ x: -30, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-white/30 text-sm max-w-md"
//           >
//             Watch how our principles come to life through interactive storytelling
//           </motion.p>
//         </div>

//         <motion.button
//           className="relative"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <motion.div 
//             className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center"
//             animate={{
//               boxShadow: isHovered
//                 ? [
//                     '0 0 20px #FF4D4D',
//                     '0 0 40px #4A7FE0',
//                     '0 0 20px #4CB05E',
//                     '0 0 20px #FF4D4D'
//                   ]
//                 : 'none'
//             }}
//             transition={{ duration: 3, repeat: Infinity }}
//           >
//             {isPlaying ? (
//               <Pause size={22} className="text-white" />
//             ) : (
//               <Play size={22} className="text-white ml-1" />
//             )}
//           </motion.div>
          
//           {/* Animated rings */}
//           {[1,2,3].map((i) => (
//             <motion.div
//               key={i}
//               className="absolute inset-0 rounded-full border border-white/30"
//               animate={{ 
//                 scale: [1, 1.5 + i * 0.2, 1],
//                 opacity: [0.5, 0, 0.5]
//               }}
//               transition={{ 
//                 duration: 2,
//                 delay: i * 0.3,
//                 repeat: Infinity
//               }}
//             />
//           ))}
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// export default function ValuesSection() {
//   const headerRef = useRef<HTMLDivElement>(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const isHeaderInView = useInView(headerRef, { once: true });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
//       {/* Networking Background Animation */}
//       <NetworkingBackground />

//       {/* Interactive overlay that follows mouse */}
//       <motion.div 
//         className="absolute inset-0 pointer-events-none"
//         animate={{
//           background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,77,77,0.1), rgba(74,127,224,0.05) 40%, transparent 70%)`
//         }}
//         transition={{ duration: 0.3 }}
//       />

//       <div className="container mx-auto px-6 lg:px-8 relative z-10">
//         {/* Interactive Header */}
//         <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] mb-4 backdrop-blur-sm"
//             whileHover={{ scale: 1.05, borderColor: '#FF4D4D40' }}
//           >
//             <motion.div
//               animate={{ rotate: [0, 360] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//             >
//               <Wifi size={12} className="text-[#FF4D4D]" />
//             </motion.div>
//             <span className="text-[9px] font-medium text-white/40 tracking-[0.2em] uppercase">Connected Experience</span>
//           </motion.div>

//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.1 }}
//             className="text-3xl md:text-4xl font-light text-white mb-3"
//           >
//             <motion.span
//               className="bg-gradient-to-r from-[#FF4D4D] via-[#4A7FE0] to-[#4CB05E] bg-clip-text text-transparent font-medium inline-block"
//               animate={{ 
//                 backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//               }}
//               transition={{ duration: 5, repeat: Infinity }}
//               style={{ backgroundSize: '200% 200%' }}
//             >
//               Network
//             </motion.span>{' '}
//             of Values
//           </motion.h2>

//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.2 }}
//             className="text-white/20 text-sm"
//           >
//             Connected by innovation, driven by purpose
//           </motion.p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {values.map((value, index) => (
//             <ValueCard key={value.title} value={value} index={index} />
//           ))}
//         </div>

//         {/* Interactive Showreel */}
//         <Showreel />

//         {/* Interactive CTA */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center mt-12"
//         >
//           <Link to="/values">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-block"
//             >
//               <Button 
//                 variant="ghost" 
//                 className="group relative px-8 py-3 rounded-full bg-white/[0.02] border border-white/[0.05] hover:border-[#FF4D4D] transition-all duration-300 overflow-hidden backdrop-blur-sm"
//               >
//                 <motion.span 
//                   className="relative z-10 flex items-center gap-3 text-white/40 group-hover:text-white text-xs tracking-widest uppercase"
//                   animate={{
//                     textShadow: ['0 0 0px transparent', '0 0 8px #FF4D4D', '0 0 0px transparent']
//                   }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   Connect With Us
//                   <motion.div
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ duration: 1, repeat: Infinity }}
//                   >
//                     <ArrowRight size={10} />
//                   </motion.div>
//                 </motion.span>
                
//                 {/* Hover effect */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-[#FF4D4D] via-[#4A7FE0] to-[#4CB05E] opacity-0 group-hover:opacity-10"
//                   animate={{
//                     x: ['-100%', '100%'],
//                   }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 />
//               </Button>
//             </motion.div>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }





// import { Link } from 'react-router-dom';
// import { 
//   Heart, Shield, Lightbulb, Zap, Target, Users, 
//   ArrowRight, Sparkles, Play, Pause, Volume2, VolumeX,
//   Camera, Film, Image, X, ChevronRight, Wifi
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { motion, useInView, AnimatePresence } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';
// import "./ValuesSection.css";

// // Import media (adjust paths as needed)
// import valueImage1 from '@/assets/netw1.jpg';
// import valueImage2 from '@/assets/netw2.jpg';
// import valueImage3 from '@/assets/netw3.jpg';
// import valueImage4 from '@/assets/brand-colors.jpg';
// import valueImage5 from '@/assets/data-cabling.jpg';
// import valueImage6 from '@/assets/data-security.jpg';
// import valueVideo1 from '@/assets/hero-video.mp4';
// import valueVideo2 from '@/assets/networking.mp4';
// import valueVideo3 from '@/assets/networking.mp4';
// import valueVideo4 from '@/assets/networking.mp4';
// import valueVideo5 from '@/assets/networking.mp4';
// import valueVideo6 from '@/assets/networking.mp4';
// import showcaseVideo from '@/assets/networking.mp4';

// const values = [
//   { 
//     icon: Heart, 
//     title: 'Customer Centricity', 
//     description: 'Your success is our success. We put customers at the heart of every decision.',
//     color: '#FF4D4D',
//     image: valueImage1,
//     video: valueVideo1,
//     stats: '98%',
//     statLabel: 'satisfaction',
//   },
//   { 
//     icon: Shield, 
//     title: 'Peace of Mind', 
//     description: 'Reliable solutions that let you sleep easy, knowing your infrastructure is secure.',
//     color: '#4A7FE0',
//     image: valueImage2,
//     video: valueVideo2,
//     stats: '24/7',
//     statLabel: 'protection',
//   },
//   { 
//     icon: Lightbulb, 
//     title: 'Innovation', 
//     description: 'Constantly pushing boundaries to bring you the latest technological advancements.',
//     color: '#FFB347',
//     image: valueImage3,
//     video: valueVideo3,
//     stats: '50+',
//     statLabel: 'patents',
//   },
//   { 
//     icon: Zap, 
//     title: 'Future Ready', 
//     description: 'Building solutions that scale with tomorrow\'s challenges and opportunities.',
//     color: '#4CB05E',
//     image: valueImage4,
//     video: valueVideo4,
//     stats: '5Y',
//     statLabel: 'roadmap',
//   },
//   { 
//     icon: Target, 
//     title: 'Result Oriented', 
//     description: 'Focused on delivering measurable outcomes that drive real business value.',
//     color: '#A65CC9',
//     image: valueImage5,
//     video: valueVideo5,
//     stats: '92%',
//     statLabel: 'success rate',
//   },
//   { 
//     icon: Users, 
//     title: 'Accountability', 
//     description: 'Taking ownership and responsibility for every project, big or small.',
//     color: '#FF7A7A',
//     image: valueImage6,
//     video: valueVideo6,
//     stats: '100+',
//     statLabel: 'experts',
//   },
// ];

// // Optimized Networking Background with CSS transforms
// const NetworkingBackground = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
//       {/* Static gradient base - no animations */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,77,77,0.1),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(74,127,224,0.1),transparent_50%)]" />
      
//       {/* Reduced number of nodes for performance */}
//       <div className="absolute inset-0">
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={`node-${i}`}
//             className="absolute rounded-full bg-white/30 will-change-transform"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               width: `${Math.random() * 4 + 2}px`,
//               height: `${Math.random() * 4 + 2}px`,
//               boxShadow: '0 0 10px rgba(74,127,224,0.5)',
//               transform: 'translateZ(0)',
//             }}
//           />
//         ))}
//       </div>

//       {/* CSS-only connection lines */}
//       <svg className="absolute inset-0 w-full h-full opacity-20 will-change-transform">
//         <defs>
//           <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#FF4D4D" />
//             <stop offset="50%" stopColor="#4A7FE0" />
//             <stop offset="100%" stopColor="#4CB05E" />
//           </linearGradient>
//         </defs>
        
//         {/* Static lines - no animations */}
//         {[...Array(12)].map((_, i) => {
//           const x1 = Math.random() * 100;
//           const y1 = Math.random() * 100;
//           const x2 = Math.random() * 100;
//           const y2 = Math.random() * 100;
          
//           return (
//             <line
//               key={`line-${i}`}
//               x1={`${x1}%`}
//               y1={`${y1}%`}
//               x2={`${x2}%`}
//               y2={`${y2}%`}
//               stroke="url(#lineGradient)"
//               strokeWidth="0.5"
//               strokeDasharray="5,5"
//             />
//           );
//         })}
//       </svg>

//       {/* Single rotating ring - hardware accelerated */}
//       <div 
//         className="absolute rounded-full border border-white/5 will-change-transform"
//         style={{
//           width: '300px',
//           height: '300px',
//           left: '50%',
//           top: '50%',
//           transform: 'translate(-50%, -50%)',
//           borderWidth: '1px',
//           animation: 'rotate 20s linear infinite',
//         }}
//       />
      
//       {/* Second ring with opposite rotation */}
//       <div 
//         className="absolute rounded-full border border-white/5 will-change-transform"
//         style={{
//           width: '500px',
//           height: '500px',
//           left: '50%',
//           top: '50%',
//           transform: 'translate(-50%, -50%)',
//           borderWidth: '1px',
//           animation: 'rotate-reverse 30s linear infinite',
//         }}
//       />

//       <style>{`
//         @keyframes rotate {
//           from { transform: translate(-50%, -50%) rotate(0deg); }
//           to { transform: translate(-50%, -50%) rotate(360deg); }
//         }
//         @keyframes rotate-reverse {
//           from { transform: translate(-50%, -50%) rotate(360deg); }
//           to { transform: translate(-50%, -50%) rotate(0deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

// // Optimized Video Modal
// const VideoModal = ({ isOpen, onClose, videoSrc, title, color }: { 
//   isOpen: boolean; 
//   onClose: () => void; 
//   videoSrc: string;
//   title: string;
//   color: string;
// }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (isOpen && videoRef.current) {
//       videoRef.current.play();
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div 
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
//       onClick={onClose}
//     >
//       <div 
//         className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl will-change-transform"
//         onClick={(e) => e.stopPropagation()}
//         style={{
//           animation: 'modalIn 0.3s ease-out',
//         }}
//       >
//         <video
//           ref={videoRef}
//           src={videoSrc}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-auto"
//         />
        
//         <div className="absolute top-6 left-6">
//           <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase">Now Playing</span>
//           <h3 className="text-lg font-light text-white mt-1" style={{ color }}>{title}</h3>
//         </div>

//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors border border-white/10"
//         >
//           <X size={16} className="text-white/60" />
//         </button>
//       </div>

//       <style>{`
//         @keyframes modalIn {
//           from { opacity: 0; transform: scale(0.9); }
//           to { opacity: 1; transform: scale(1); }
//         }
//       `}</style>
//     </div>
//   );
// };

// // Optimized Value Card
// const ValueCard = ({ value, index }: { value: typeof values[0], index: number }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [showVideo, setShowVideo] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(cardRef, { once: true, amount: 0.3 });
//   const Icon = value.icon;

//   return (
//     <>
//       <motion.div
//         ref={cardRef}
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ 
//           duration: 0.5,
//           delay: index * 0.1,
//         }}
//         onHoverStart={() => setIsHovered(true)}
//         onHoverEnd={() => setIsHovered(false)}
//         className="group relative cursor-pointer will-change-transform"
//         onClick={() => setShowVideo(true)}
//       >
//         <div 
//           className="relative h-[320px] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/[0.08] shadow-2xl"
//           style={{
//             transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
//             transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
//             boxShadow: isHovered ? `0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px ${value.color}40` : 'none',
//           }}
//         >
//           {/* Background Image */}
//           <div className="absolute inset-0">
//             <img 
//               src={value.image} 
//               alt={value.title}
//               className="w-full h-full object-cover transition-transform duration-500 will-change-transform"
//               style={{
//                 transform: isHovered ? 'scale(1.1)' : 'scale(1)',
//               }}
//             />
            
//             {/* Gradient overlays */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
            
//             {/* Color overlay */}
//             <div 
//               className="absolute inset-0 mix-blend-overlay transition-opacity duration-300"
//               style={{ 
//                 backgroundColor: value.color,
//                 opacity: isHovered ? 0.15 : 0.05,
//               }}
//             />
//           </div>

//           {/* Content */}
//           <div className="absolute inset-0 p-6 flex flex-col justify-between">
//             {/* Top */}
//             <div className="flex items-start justify-between">
//               {/* Icon */}
//               <div 
//                 className="relative w-12 h-12 rounded-xl overflow-hidden will-change-transform"
//                 style={{
//                   transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0)',
//                   transition: 'transform 0.3s ease-out',
//                 }}
//               >
//                 <div 
//                   className="absolute inset-0"
//                   style={{ backgroundColor: value.color, opacity: 0.2 }}
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <Icon size={20} className="text-white" />
//                 </div>
//               </div>

//               {/* Video indicator */}
//               <div 
//                 className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 transition-transform duration-200 will-change-transform"
//                 style={{
//                   transform: isHovered ? 'scale(1.1)' : 'scale(1)',
//                 }}
//               >
//                 <Film size={12} className="text-white/60" />
//               </div>
//             </div>

//             {/* Bottom */}
//             <div>
//               {/* Stat */}
//               <div 
//                 className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-black/30 backdrop-blur-sm border border-white/10 mb-3 transition-transform duration-200 will-change-transform"
//                 style={{
//                   transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
//                 }}
//               >
//                 <span className="text-xs font-medium" style={{ color: value.color }}>
//                   {value.stats}
//                 </span>
//                 <span className="text-[8px] text-white/40 uppercase tracking-wider">
//                   {value.statLabel}
//                 </span>
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-light text-white mb-1">
//                 {value.title}
//               </h3>
              
//               {/* Description */}
//               <p className="text-white/40 text-xs leading-relaxed max-w-[200px] line-clamp-2">
//                 {value.description}
//               </p>

//               {/* Hover indicator */}
//               <div 
//                 className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-200 will-change-transform"
//                 style={{
//                   opacity: isHovered ? 1 : 0,
//                   transform: isHovered ? 'scale(1)' : 'scale(0)',
//                 }}
//               >
//                 <ArrowRight size={12} className="text-white/40" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       <VideoModal 
//         isOpen={showVideo} 
//         onClose={() => setShowVideo(false)} 
//         videoSrc={value.video}
//         title={value.title}
//         color={value.color}
//       />
//     </>
//   );
// };

// // Optimized Showreel
// const Showreel = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isHovered, setIsHovered] = useState(false);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="mt-12 relative h-[280px] rounded-2xl overflow-hidden group cursor-pointer will-change-transform"
//       onClick={togglePlay}
//     >
//       <video
//         ref={videoRef}
//         src={showcaseVideo}
//         loop
//         muted
//         playsInline
//         className="w-full h-full object-cover"
//       />

//       <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A] opacity-70" />

//       <div className="absolute inset-0 flex items-center justify-between p-8">
//         <div>
//           <div className="flex items-center gap-2 mb-2">
//             <Camera size={14} className="text-[#FF4D4D]" />
//             <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase">Showreel</span>
//           </div>

//           <h3 className="text-3xl font-light text-white">
//             Values in{' '}
//             <span className="bg-gradient-to-r from-[#FF4D4D] to-[#4A7FE0] bg-clip-text text-transparent font-medium">
//               motion
//             </span>
//           </h3>
//         </div>

//         <div 
//           className="relative transition-transform duration-200 will-change-transform"
//           style={{
//             transform: isHovered ? 'scale(1.1)' : 'scale(1)',
//           }}
//         >
//           <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
//             {isPlaying ? (
//               <Pause size={16} className="text-white" />
//             ) : (
//               <Play size={16} className="text-white ml-1" />
//             )}
//           </div>
//         </div>
//       </div>

//       {/* CSS-only pulse animation */}
//       <div 
//         className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FF4D4D] via-[#4A7FE0] to-[#4CB05E] will-change-transform"
//         style={{
//           width: isPlaying ? '100%' : '0%',
//           transition: 'width 10s linear',
//         }}
//       />
//     </motion.div>
//   );
// };

// export default function ValuesSection() {
//   const headerRef = useRef<HTMLDivElement>(null);
//   const isHeaderInView = useInView(headerRef, { once: true });

//   return (
//     <section className="relative py-20 bg-[#0A0A0A] overflow-hidden">
//       {/* Optimized Background */}
//       <NetworkingBackground />

//       <div className="container mx-auto px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.05] mb-4"
//           >
//             <Wifi size={10} className="text-white/30" />
//             <span className="text-[8px] font-medium text-white/30 tracking-[0.2em] uppercase">Connected Network</span>
//           </motion.div>

//           <motion.h2 
//             initial={{ opacity: 0, y: 10 }}
//             animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.1 }}
//             className="text-3xl md:text-4xl font-light text-white mb-2"
//           >
//             <span className="bg-gradient-to-r from-[#FF4D4D] via-[#4A7FE0] to-[#4CB05E] bg-clip-text text-transparent font-medium">
//               Network
//             </span>{' '}
//             of Values
//           </motion.h2>

//           <motion.p 
//             initial={{ opacity: 0, y: 10 }}
//             animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.2 }}
//             className="text-white/20 text-xs"
//           >
//             Connected by innovation, driven by purpose
//           </motion.p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {values.map((value, index) => (
//             <ValueCard key={value.title} value={value} index={index} />
//           ))}
//         </div>

//         {/* Showreel */}
//         <Showreel />

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center mt-10"
//         >
//           <Link to="/values">
//             <Button 
//               variant="ghost" 
//               className="group px-6 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.05] hover:border-[#FF4D4D] transition-all duration-300"
//             >
//               <span className="flex items-center gap-2 text-white/40 group-hover:text-white text-xs tracking-widest uppercase">
//                 Connect With Us
//                 <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
//               </span>
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { Link } from 'react-router-dom';
import { 
  Heart, Shield, Lightbulb, Zap, Target, Users, 
  ArrowRight, Sparkles, Play, Pause, Volume2, VolumeX,
  Maximize2, Minimize2, Camera, Film, Image, X,
  ChevronRight, Globe, Cpu, Network, Star, Award,
  Wifi, Radio, Satellite
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import "./ValuesSection.css";

// Import media (adjust paths as needed)
import valueImage1 from '@/assets/netw1.jpg';
import valueImage2 from '@/assets/netw2.jpg';
import valueImage3 from '@/assets/netw3.jpg';
import valueImage4 from '@/assets/brand-colors.jpg';
import valueImage5 from '@/assets/data-cabling.jpg';
import valueImage6 from '@/assets/data-security.jpg';
import valueVideo1 from '@/assets/hero-video.mp4';
import valueVideo2 from '@/assets/networking.mp4';
import valueVideo3 from '@/assets/networking.mp4';
import valueVideo4 from '@/assets/networking.mp4';
import valueVideo5 from '@/assets/networking.mp4';
import valueVideo6 from '@/assets/networking.mp4';
import showcaseVideo from '@/assets/networking.mp4';

const values = [
  { 
    icon: Heart, 
    title: 'Customer Centricity', 
    description: 'Your success is our success. We put customers at the heart of every decision.',
    color: '#FF4D4D',
    secondaryColor: '#FF8A8A',
    image: valueImage1,
    video: valueVideo1,
    stats: '98%',
    statLabel: 'satisfaction',
    testimonial: {
      quote: "They transformed our entire operation",
      author: "Sarah Chen, CEO",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
  },
  { 
    icon: Shield, 
    title: 'Peace of Mind', 
    description: 'Reliable solutions that let you sleep easy, knowing your infrastructure is secure.',
    color: '#4A7FE0',
    secondaryColor: '#7AA3FF',
    image: valueImage2,
    video: valueVideo2,
    stats: '24/7',
    statLabel: 'protection',
    testimonial: {
      quote: "Rock-solid security, always there",
      author: "Michael Ross, CTO",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
  },
  { 
    icon: Lightbulb, 
    title: 'Innovation', 
    description: 'Constantly pushing boundaries to bring you the latest technological advancements.',
    color: '#FFB347',
    secondaryColor: '#FFD700',
    image: valueImage3,
    video: valueVideo3,
    stats: '50+',
    statLabel: 'patents',
    testimonial: {
      quote: "They're always steps ahead",
      author: "Dr. James Lee",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
  },
  { 
    icon: Zap, 
    title: 'Future Ready', 
    description: 'Building solutions that scale with tomorrow\'s challenges and opportunities.',
    color: '#4CB05E',
    secondaryColor: '#7ED68E',
    image: valueImage4,
    video: valueVideo4,
    stats: '5Y',
    statLabel: 'roadmap',
    testimonial: {
      quote: "Built for what's next",
      author: "Emma Watson, PM",
      avatar: "https://i.pravatar.cc/150?img=4"
    },
  },
  { 
    icon: Target, 
    title: 'Result Oriented', 
    description: 'Focused on delivering measurable outcomes that drive real business value.',
    color: '#A65CC9',
    secondaryColor: '#C084FC',
    image: valueImage5,
    video: valueVideo5,
    stats: '92%',
    statLabel: 'success rate',
    testimonial: {
      quote: "They deliver every single time",
      author: "Robert Kim",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
  },
  { 
    icon: Users, 
    title: 'Accountability', 
    description: 'Taking ownership and responsibility for every project, big or small.',
    color: '#FF7A7A',
    secondaryColor: '#FFA5A5',
    image: valueImage6,
    video: valueVideo6,
    stats: '100+',
    statLabel: 'experts',
    testimonial: {
      quote: "They own it completely",
      author: "Lisa Zhang",
      avatar: "https://i.pravatar.cc/150?img=6"
    },
  },
];

// Optimized Networking Background with reduced animations
const NetworkingBackground = () => {
  const [nodes] = useState(() => 
    Array.from({ length: 15 }, (_, i) => ({ // Reduced from 25 to 15
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
    }))
  );

  // Memoize connections to prevent recalculation
  const connections = useMemo(() => 
    Array.from({ length: 20 }, () => ({ // Reduced from 35 to 20
      from: Math.floor(Math.random() * 15),
      to: Math.floor(Math.random() * 15),
    })), []
  );

  // Use CSS transform instead of animating all properties
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,77,77,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(74,127,224,0.15),transparent_50%)]" />
      
      {/* Static nodes with subtle animation */}
      {nodes.map((node) => (
        <div
          key={`node-${node.id}`}
          className="absolute rounded-full animate-pulse-slow will-change-transform"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
            background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(74,127,224,0.3) 70%, transparent 100%)`,
            boxShadow: '0 0 20px rgba(74,127,224,0.5)',
          }}
        />
      ))}

      {/* Reduced number of data packets */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`packet-${i}`}
            className="absolute w-1 h-1 rounded-full animate-float-packet will-change-transform"
            style={{
              background: `linear-gradient(90deg, #FF4D4D, #4A7FE0, #4CB05E)`,
              boxShadow: '0 0 10px currentColor',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Optimized Particle Background
const ParticleBackground = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  // Only render particles when hovered
  if (!isHovered) return null;

  const particles = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({ // Reduced from 20 to 8
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float-particle will-change-transform"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: color,
            filter: `blur(${particle.size / 2}px)`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${2 + Math.random()}s`,
          }}
        />
      ))}
    </div>
  );
};

// Optimized Value Card
const ValueCard = ({ value, index }: { value: typeof values[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showTestimonial, setShowTestimonial] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const Icon = value.icon;

  // Memoize mouse move handler
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    cardRef.current.style.setProperty('--mouse-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }, []);

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => {
          setIsHovered(false);
          setShowTestimonial(false);
        }}
        onMouseMove={handleMouseMove}
        className="group relative cursor-pointer"
        onClick={() => setShowVideo(true)}
        style={{ transform: 'translateZ(0)' }} // Force GPU acceleration
      >
        <div className="relative h-[340px] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/[0.08] shadow-2xl will-change-transform">
          
          {/* Static background with CSS hover effect */}
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
            <img 
              src={value.image} 
              alt={value.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* CSS gradient overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"
              style={{
                background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent, #0A0A0A 80%)`
              }}
            />
            
            <div 
              className="absolute inset-0 mix-blend-overlay transition-opacity duration-500"
              style={{ backgroundColor: value.color, opacity: 0.1 }}
            />
          </div>

          {/* Particles only on hover */}
          <ParticleBackground color={value.color} isHovered={isHovered} />

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            {/* Top section */}
            <div className="flex items-start justify-between">
              <div className="relative">
                <div 
                  className="relative w-14 h-14 rounded-xl overflow-hidden transition-shadow duration-300"
                  style={{ boxShadow: isHovered ? `0 0 30px ${value.color}` : 'none' }}
                >
                  <div className="absolute inset-0" style={{ backgroundColor: value.color }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={22} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button 
                  className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 transition-transform hover:scale-110"
                >
                  <Image size={12} className="text-white/60" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowVideo(true);
                  }}
                  className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 transition-transform hover:scale-110 hover:rotate-12"
                >
                  <Film size={12} className="text-white" />
                </button>
              </div>
            </div>

            {/* Bottom section */}
            <div>
              {/* Stat badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 mb-3">
                <span className="text-sm font-bold" style={{ color: value.color }}>
                  {value.stats}
                </span>
                <span className="text-[8px] text-white/40 uppercase tracking-wider">
                  {value.statLabel}
                </span>
              </div>

              <h3 className="text-2xl font-light text-white mb-1">
                {value.title}
              </h3>
              
              <p className="text-white/40 text-sm leading-relaxed max-w-[220px] group-hover:text-white/60 transition-colors duration-300">
                {value.description}
              </p>

              {/* Testimonial popup */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ type: "spring", damping: 15, stiffness: 200 }}
                    className="absolute bottom-6 right-6 left-6 p-3 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10"
                    onMouseEnter={() => setShowTestimonial(true)}
                    onMouseLeave={() => setShowTestimonial(false)}
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={value.testimonial.avatar} 
                        alt={value.testimonial.author}
                        className="w-8 h-8 rounded-full border-2 transition-transform duration-300 group-hover/testimonial:scale-110"
                        style={{ borderColor: value.color }}
                        loading="lazy"
                      />
                      <div>
                        <p className="text-white/90 text-xs italic">
                          "{value.testimonial.quote}"
                        </p>
                        <p className="text-white/40 text-[10px] mt-0.5">
                          {value.testimonial.author}
                        </p>
                      </div>
                    </div>

                    {/* Static stars */}
                    <div className="absolute -top-1 -right-1 flex gap-0.5">
                      {[1,2,3].map((star) => (
                        <Star key={star} size={8} className="text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Corner decorations - simplified */}
          <div className="absolute top-0 left-0 w-20 h-20">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path 
                d="M0 0 L100 0 L0 100 L0 0" 
                fill="none" 
                stroke={value.color} 
                strokeWidth="1.5"
                strokeDasharray="5 5"
                className="opacity-0 group-hover:opacity-50 transition-opacity duration-500"
              />
            </svg>
          </div>

          <div className="absolute bottom-0 right-0 w-20 h-20 rotate-180">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path 
                d="M0 0 L100 0 L0 100 L0 0" 
                fill="none" 
                stroke={value.color} 
                strokeWidth="1.5"
                strokeDasharray="5 5"
                className="opacity-0 group-hover:opacity-50 transition-opacity duration-500"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={showVideo} 
        onClose={() => setShowVideo(false)} 
        videoSrc={value.video}
        title={value.title}
        color={value.color}
      />
    </>
  );
};

// Optimized Video Modal
const VideoModal = ({ isOpen, onClose, videoSrc, title, color }: { 
  isOpen: boolean; 
  onClose: () => void; 
  videoSrc: string;
  title: string;
  color: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen]);

  const togglePlay = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  }, [isMuted]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-auto"
            />

            {/* Static overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Title */}
            <div className="absolute top-6 left-6">
              <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase">Now Playing</span>
              <h3 className="text-xl font-light text-white mt-1">
                {title}
              </h3>
            </div>

            {/* Controls */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="flex gap-3">
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 border border-white/20"
                >
                  {isPlaying ? <Pause size={18} className="text-white" /> : <Play size={18} className="text-white ml-1" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 border border-white/20"
                >
                  {isMuted ? <VolumeX size={18} className="text-white" /> : <Volume2 size={18} className="text-white" />}
                </button>
              </div>

              <button
                onClick={onClose}
                className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-all hover:rotate-90 border border-white/20"
              >
                <X size={16} className="text-white/60" />
              </button>
            </div>

            {/* Progress bar */}
            <div 
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r"
              style={{ 
                background: `linear-gradient(90deg, ${color}, #ffffff, ${color})`,
                animation: 'progress 10s linear infinite'
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Optimized Showreel
const Showreel = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="mt-16 relative h-[350px] rounded-2xl overflow-hidden group cursor-pointer will-change-transform"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={showcaseVideo}
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* CSS overlays */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isHovered ? 'bg-gradient-to-r from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]/40' : 'bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-[#0A0A0A]/70'
      }`} />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-between p-10">
        <div>
          <div className="flex items-center gap-3 mb-3 transition-transform duration-300 group-hover:translate-x-2">
            <Camera size={18} className="text-[#FF4D4D]" />
            <span className="text-xs text-white/40 tracking-[0.2em] uppercase">Interactive Showreel</span>
          </div>

          <h3 className="text-4xl font-light text-white mb-2">
            Experience{' '}
            <span className="bg-gradient-to-r from-[#FF4D4D] via-[#4A7FE0] to-[#4CB05E] bg-clip-text text-transparent font-medium">
              values
            </span>{' '}
            in motion
          </h3>

          <p className="text-white/30 text-sm max-w-md">
            Watch how our principles come to life through interactive storytelling
          </p>
        </div>

        <button className="relative group/button">
          <div className={`w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all duration-300 group-hover/button:scale-110 ${
            isHovered ? 'shadow-[0_0_30px_rgba(255,77,77,0.5)]' : ''
          }`}>
            {isPlaying ? (
              <Pause size={22} className="text-white" />
            ) : (
              <Play size={22} className="text-white ml-1" />
            )}
          </div>
        </button>
      </div>
    </motion.div>
  );
};

// Add CSS animations
const styles = `
  @keyframes pulse-slow {
    0%, 100% { transform: scale(1); opacity: 0.4; }
    50% { transform: scale(1.5); opacity: 1; }
  }
  
  @keyframes float-packet {
    0% { transform: translate(0, 0) scale(0); opacity: 0; }
    25% { transform: translate(100px, 50px) scale(1.5); opacity: 1; }
    50% { transform: translate(200px, 0) scale(0); opacity: 0; }
    75% { transform: translate(100px, -50px) scale(1.5); opacity: 1; }
    100% { transform: translate(0, 0) scale(0); opacity: 0; }
  }
  
  @keyframes float-particle {
    0% { transform: translate(0, 0) scale(0); opacity: 0; }
    50% { transform: translate(15px, -15px) scale(1.5); opacity: 0.8; }
    100% { transform: translate(0, -30px) scale(0); opacity: 0; }
  }
  
  @keyframes progress {
    0% { width: 0%; }
    100% { width: 100%; }
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }
  
  .animate-float-packet {
    animation: float-packet linear infinite;
  }
  
  .animate-float-particle {
    animation: float-particle ease-in-out infinite;
  }
  
  .will-change-transform {
    will-change: transform;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default function ValuesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="relative py-8 bg-[#0A0A0A] overflow-hidden">
      <NetworkingBackground />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] mb-4 backdrop-blur-sm"
          >
            <Wifi size={12} className="text-[#FF4D4D]" />
            <span className="text-[9px] font-medium text-white/40 tracking-[0.2em] uppercase">Connected Experience</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-light text-white mb-3"
          >
            <span className="bg-gradient-to-r from-[#FF4D4D] via-[#4A7FE0] to-[#4CB05E] bg-clip-text text-transparent font-medium">
              Network
            </span>{' '}
            of Values
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/20 text-sm"
          >
            Connected by innovation, driven by purpose
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>

        <Showreel />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/values">
            <Button 
              variant="ghost" 
              className="group relative px-8 py-3 rounded-full bg-white/[0.02] border border-white/[0.05] hover:border-[#FF4D4D] transition-all duration-300 overflow-hidden backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center gap-3 text-white/40 group-hover:text-white text-xs tracking-widest uppercase">
                Connect With Us
                <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </span>
              
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D4D] via-[#4A7FE0] to-[#4CB05E] opacity-0 group-hover:opacity-10" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}