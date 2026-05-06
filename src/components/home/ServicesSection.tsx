// import { Link } from 'react-router-dom';
// import { Network, Shield, Server, Cpu, ArrowRight } from 'lucide-react';
// import SectionWrapper from '@/components/SectionWrapper';
// import dataCablingImg from '@/assets/data-cabling.jpg';
// import dataSecurityImg from '@/assets/data-security.jpg';
// import itDeploymentImg from '@/assets/it-deployment.jpg';
// import strategicCoreImg from '@/assets/strategic-core.jpg';

// const services = [
//   { icon: Network, title: 'Data Cabling Infrastructure', desc: 'Enterprise-grade structured cabling designed for performance and scalability.', color: 'blue' as const, image: dataCablingImg },
//   { icon: Shield, title: 'Data Security Solutions', desc: 'Comprehensive security frameworks protecting your most critical digital assets.', color: 'magenta' as const, image: dataSecurityImg },
//   { icon: Server, title: 'End-to-End IT Deployment', desc: 'Full lifecycle infrastructure deployment from planning to execution.', color: 'green' as const, image: itDeploymentImg },
//   { icon: Cpu, title: 'Strategic IT Core Development', desc: 'Building the technological backbone that drives transformation.', color: 'blue' as const, image: strategicCoreImg },
// ];

// const iconBgMap = { blue: 'bg-mv-blue/10', magenta: 'bg-mv-magenta/10', green: 'bg-mv-green/10' };
// const iconTextMap = { blue: 'text-mv-blue', magenta: 'text-mv-magenta', green: 'text-mv-green' };
// const glowMap = { blue: 'hover:glow-blue', magenta: 'hover:glow-magenta', green: 'hover:glow-green' };

// export default function ServicesSection() {
//   return (
//     <section className="py-32 relative overflow-hidden">
//       <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-mv-magenta/5 blur-[100px]" />
//       <div className="container mx-auto px-4 lg:px-8">
//         <SectionWrapper>
//           <div className="text-center mb-20">
//             <span className="text-xs uppercase tracking-widest text-mv-blue font-semibold mb-4 block">What We Do</span>
//             <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Our Services</h2>
//             <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive IT infrastructure solutions for the modern enterprise</p>
//           </div>
//         </SectionWrapper>
        
//         <div className="grid sm:grid-cols-2 gap-6">
//           {services.map((s, i) => (
//             <SectionWrapper key={s.title} delay={i * 100}>
//               <div className={`group tilt-card rounded-2xl glass-premium gradient-border ${glowMap[s.color]} transition-all duration-300 h-full flex flex-col overflow-hidden`}>
//                 <div className="relative h-48 overflow-hidden">
//                   <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
//                   <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${iconBgMap[s.color]} backdrop-blur-sm flex items-center justify-center`}>
//                     <s.icon size={22} className={iconTextMap[s.color]} />
//                   </div>
//                 </div>
//                 <div className="p-8 flex-1 flex flex-col">
//                   <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
//                   <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{s.desc}</p>
//                   <Link to="/services" className="mt-6 text-sm font-semibold text-primary hover:text-mv-blue-light transition-colors inline-flex items-center gap-1 group/link">
//                     Learn More <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
//                   </Link>
//                 </div>
//               </div>
//             </SectionWrapper>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// import { Link } from 'react-router-dom';
// import { 
//   Network, Shield, Server, Cpu, ArrowRight, Sparkles, 
//   ChevronRight, Zap, ShieldCheck, Wifi, Radio, Globe,
//   Activity, LineChart, Layers, Box, CircuitBoard,
//   Cable, Lock, Cloud, Database, Gauge,
//   Users
// } from 'lucide-react';
// import { motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';
// import dataCablingImg from '@/assets/data-cabling.jpg';
// import dataSecurityImg from '@/assets/data-security.jpg';
// import itDeploymentImg from '@/assets/it-deployment.jpg';
// import strategicCoreImg from '@/assets/strategic-core.jpg';

// const services = [
//   { 
//     icon: Cable, 
//     title: 'Data Cabling Infrastructure', 
//     tagline: 'Connect at the speed of light',
//     desc: 'Enterprise-grade structured cabling designed for performance and scalability.',
//     features: ['Fiber Optic', 'Cat6A/Cat7', 'TIA-942'],
//     color: 'blue', 
//     image: dataCablingImg,
//     stat: { value: '40Gbps', label: 'throughput' }
//   },
//   { 
//     icon: Lock, 
//     title: 'Data Security Solutions', 
//     tagline: 'Fortify your digital assets',
//     desc: 'Comprehensive security frameworks protecting your most critical digital assets.',
//     features: ['Zero Trust', 'AI Detection', 'Encryption'],
//     color: 'magenta', 
//     image: dataSecurityImg,
//     stat: { value: '99.99%', label: 'protection' }
//   },
//   { 
//     icon: Cloud, 
//     title: 'End-to-End IT Deployment', 
//     tagline: 'Deploy at enterprise scale',
//     desc: 'Full lifecycle infrastructure deployment from planning to execution.',
//     features: ['Cloud Native', 'Automated', 'Hybrid'],
//     color: 'green', 
//     image: itDeploymentImg,
//     stat: { value: '60%', label: 'faster deployment' }
//   },
//   { 
//     icon: CircuitBoard, 
//     title: 'Strategic IT Core Development', 
//     tagline: 'Build the future, today',
//     desc: 'Building the technological backbone that drives transformation.',
//     features: ['Microservices', 'API-first', 'Scalable'],
//     color: 'amber', 
//     image: strategicCoreImg,
//     stat: { value: '∞', label: 'infinite scale' }
//   },
// ];

// const colorMap = {
//   blue: {
//     primary: 'text-blue-600',
//     secondary: 'text-blue-500',
//     light: 'text-blue-400',
//     bg: 'bg-blue-50',
//     bgLight: 'bg-blue-50/50',
//     border: 'border-blue-200',
//     borderLight: 'border-blue-100',
//     ring: 'ring-blue-200',
//     gradient: 'from-blue-500 to-blue-400',
//     gradientLight: 'from-blue-100 to-blue-50',
//     shadow: 'shadow-blue-100',
//     icon: 'text-blue-600',
//     hover: 'group-hover:text-blue-600',
//     badge: 'bg-blue-100 text-blue-700'
//   },
//   magenta: {
//     primary: 'text-pink-600',
//     secondary: 'text-pink-500',
//     light: 'text-pink-400',
//     bg: 'bg-pink-50',
//     bgLight: 'bg-pink-50/50',
//     border: 'border-pink-200',
//     borderLight: 'border-pink-100',
//     ring: 'ring-pink-200',
//     gradient: 'from-pink-500 to-pink-400',
//     gradientLight: 'from-pink-100 to-pink-50',
//     shadow: 'shadow-pink-100',
//     icon: 'text-pink-600',
//     hover: 'group-hover:text-pink-600',
//     badge: 'bg-pink-100 text-pink-700'
//   },
//   green: {
//     primary: 'text-green-600',
//     secondary: 'text-green-500',
//     light: 'text-green-400',
//     bg: 'bg-green-50',
//     bgLight: 'bg-green-50/50',
//     border: 'border-green-200',
//     borderLight: 'border-green-100',
//     ring: 'ring-green-200',
//     gradient: 'from-green-500 to-green-400',
//     gradientLight: 'from-green-100 to-green-50',
//     shadow: 'shadow-green-100',
//     icon: 'text-green-600',
//     hover: 'group-hover:text-green-600',
//     badge: 'bg-green-100 text-green-700'
//   },
//   amber: {
//     primary: 'text-amber-600',
//     secondary: 'text-amber-500',
//     light: 'text-amber-400',
//     bg: 'bg-amber-50',
//     bgLight: 'bg-amber-50/50',
//     border: 'border-amber-200',
//     borderLight: 'border-amber-100',
//     ring: 'ring-amber-200',
//     gradient: 'from-amber-500 to-amber-400',
//     gradientLight: 'from-amber-100 to-amber-50',
//     shadow: 'shadow-amber-100',
//     icon: 'text-amber-600',
//     hover: 'group-hover:text-amber-600',
//     badge: 'bg-amber-100 text-amber-700'
//   }
// };

// // Interactive Feature Badge
// const FeatureBadge = ({ feature, color, delay }: { feature: string, color: any, delay: number }) => {
//   return (
//     <motion.span
//       initial={{ opacity: 0, scale: 0.8 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ delay }}
//       className={`px-3 py-1.5 text-xs rounded-full ${color.bg} border ${color.borderLight} text-gray-600 inline-flex items-center gap-1`}
//     >
//       <span className={`w-1 h-1 rounded-full ${color.primary}`} />
//       {feature}
//     </motion.span>
//   );
// };

// // Service Block - Unique diagonal layout
// const ServiceBlock = ({ service, index }: { service: typeof services[0], index: number }) => {
//   const [isActive, setIsActive] = useState(false);
//   const blockRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(blockRef, { once: true, amount: 0.3 });
//   const colors = colorMap[service.color as keyof typeof colorMap];
//   const Icon = service.icon;

//   // Parallax effect
//   const { scrollYProgress } = useScroll({
//     target: blockRef,
//     offset: ["start end", "end start"]
//   });
  
//   const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

//   return (
//     <motion.div
//       ref={blockRef}
//       style={{ y, opacity }}
//       initial={{ opacity: 0 }}
//       animate={isInView ? { opacity: 1 } : {}}
//       onHoverStart={() => setIsActive(true)}
//       onHoverEnd={() => setIsActive(false)}
//       className="relative"
//     >
//       {/* Diagonal split layout */}
//       <div className="relative grid lg:grid-cols-2 gap-0 min-h-[500px]">
//         {/* Left side - Image with diagonal cut */}
//         <div className={`
//           relative lg:h-auto h-64 overflow-hidden
//           ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
//         `}>
//           {/* Diagonal clip path */}
//           <div className="absolute inset-0 lg:clip-diagonal-right">
//             <motion.img 
//               src={service.image} 
//               alt={service.title}
//               className="w-full h-full object-cover"
//               animate={isActive ? { scale: 1.1 } : { scale: 1 }}
//               transition={{ duration: 0.8 }}
//             />
//             <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradientLight} mix-blend-overlay`} />
//           </div>
          
//           {/* Floating stat card */}
//           <motion.div 
//             className={`absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl ${colors.shadow} border ${colors.borderLight}`}
//             animate={isActive ? { y: -10, rotate: 2 } : { y: 0, rotate: 0 }}
//           >
//             <div className={`text-2xl font-bold ${colors.primary}`}>{service.stat.value}</div>
//             <div className="text-xs text-gray-500">{service.stat.label}</div>
//           </motion.div>
//         </div>

//         {/* Right side - Content */}
//         <div className={`
//           relative p-8 lg:p-12 flex flex-col justify-center
//           ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}
//           ${colors.bgLight}
//         `}>
//           {/* Decorative number */}
//           <div className={`absolute top-8 right-8 text-8xl font-black ${colors.border} opacity-20`}>
//             {(index + 1).toString().padStart(2, '0')}
//           </div>

//           {/* Icon and tagline */}
//           <motion.div 
//             className="flex items-center gap-4 mb-6"
//             animate={isActive ? { x: 10 } : { x: 0 }}
//           >
//             <div className={`w-16 h-16 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center shadow-lg`}>
//               <Icon size={28} className={colors.primary} />
//             </div>
//             <div>
//               <span className={`text-sm font-medium ${colors.primary}`}>{service.tagline}</span>
//               <h3 className="text-3xl lg:text-4xl font-light text-gray-900">{service.title}</h3>
//             </div>
//           </motion.div>

//           {/* Description */}
//           <motion.p 
//             className="text-gray-500 text-lg mb-8 leading-relaxed"
//             animate={isActive ? { x: 10 } : { x: 0 }}
//           >
//             {service.desc}
//           </motion.p>

//           {/* Features grid */}
//           <div className="flex flex-wrap gap-2 mb-8">
//             {service.features.map((feature, i) => (
//               <FeatureBadge key={feature} feature={feature} color={colors} delay={0.2 + i * 0.1} />
//             ))}
//           </div>

//           {/* Interactive metrics */}
//           <div className="grid grid-cols-3 gap-4 mb-8">
//             {[1, 2, 3].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className={`p-3 rounded-xl border ${colors.borderLight} bg-white/50 backdrop-blur-sm`}
//                 animate={isActive ? { y: -5, scale: 1.02 } : { y: 0, scale: 1 }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <Activity size={14} className={colors.primary} />
//                 <div className={`text-xs font-medium text-gray-700 mt-1`}>Metric {i + 1}</div>
//                 <div className={`text-[10px] text-gray-400`}>value</div>
//               </motion.div>
//             ))}
//           </div>

//           {/* CTA */}
//           <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
//             <motion.div
//               className={`inline-flex items-center gap-3 text-sm font-medium ${colors.primary} group/link cursor-pointer`}
//               whileHover={{ x: 10 }}
//             >
//               <span>Discover more</span>
//               <motion.div
//                 animate={{ rotate: isActive ? 45 : 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <ArrowRight size={14} />
//               </motion.div>
//             </motion.div>
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // Floating header with geometric design
// const GeometricHeader = () => {
//   const headerRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(headerRef, { once: true });

//   return (
//     <div ref={headerRef} className="container mx-auto px-6 lg:px-8 mb-20">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={isInView ? { opacity: 1 } : {}}
//         className="relative"
//       >
//         {/* Geometric background */}
//         <div className="absolute -top-20 -left-20 w-40 h-40 border-2 border-blue-200 rounded-3xl rotate-12 opacity-50" />
//         <div className="absolute -bottom-10 -right-10 w-60 h-60 border-2 border-pink-200 rounded-full opacity-30" />
        
//         <div className="relative max-w-4xl">
//           <motion.div
//             initial={{ y: 20 }}
//             animate={isInView ? { y: 0 } : {}}
//             className="flex items-center gap-2 mb-4"
//           >
//             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center">
//               <Sparkles size={14} className="text-white" />
//             </div>
//             <span className="text-sm font-medium text-gray-400 tracking-wider">// SERVICES</span>
//           </motion.div>

//           <motion.h2 
//             initial={{ y: 30 }}
//             animate={isInView ? { y: 0 } : {}}
//             transition={{ delay: 0.1 }}
//             className="text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-none"
//           >
//             <span className="block">Building the</span>
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-600 to-green-600">
//               Digital Backbone
//             </span>
//           </motion.h2>

//           <motion.p 
//             initial={{ y: 40 }}
//             animate={isInView ? { y: 0 } : {}}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-gray-400 max-w-2xl"
//           >
//             Four specialized pillars that form the foundation of modern enterprise infrastructure
//           </motion.p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // Animated stats mosaic
// const StatsMosaic = () => {
//   const stats = [
//     { value: '500+', label: 'Projects Delivered', icon: Box, color: 'blue' },
//     { value: '200+', label: 'Global Clients', icon: Globe, color: 'pink' },
//     { value: '50+', label: 'Team Experts', icon: Users, color: 'green' },
//     { value: '24/7', label: 'Premium Support', icon: Radio, color: 'amber' },
//   ];

//   return (
//     <div className="container mx-auto px-6 lg:px-8 mt-24">
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//         {stats.map((stat, i) => (
//           <motion.div
//             key={stat.label}
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: i * 0.1 }}
//             viewport={{ once: true }}
//             className={`relative p-6 rounded-2xl bg-gradient-to-br from-${stat.color}-50 to-white border border-${stat.color}-100 shadow-sm hover:shadow-xl transition-all duration-300 group`}
//           >
//             <div className={`absolute top-3 right-3 w-12 h-12 rounded-full bg-${stat.color}-100 opacity-50 group-hover:scale-150 transition-transform duration-500`} />
//             <stat.icon size={20} className={`text-${stat.color}-600 mb-3`} />
//             <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
//             <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Innovative CTA with geometric pattern
// const GeometricCTA = () => {
//   return (
//     <div className="container mx-auto px-6 lg:px-8 mt-24">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800"
//       >
//         {/* Geometric pattern overlay */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `
//               linear-gradient(30deg, #ffffff 12%, transparent 12.5%),
//               linear-gradient(150deg, #ffffff 12%, transparent 12.5%),
//               linear-gradient(30deg, #ffffff 12%, transparent 12.5%),
//               linear-gradient(150deg, #ffffff 12%, transparent 12.5%)
//             `,
//             backgroundSize: '40px 70px',
//             backgroundPosition: '0 0, 0 0, 20px 35px, 20px 35px'
//           }} />
//         </div>

//         <div className="relative p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
//           <div>
//             <h3 className="text-3xl lg:text-4xl font-light text-white mb-2">
//               Ready to transform your infrastructure?
//             </h3>
//             <p className="text-gray-400 max-w-xl">
//               Join industry leaders who've already modernized their IT backbone with our solutions
//             </p>
//           </div>
          
//           <Link to="/contact">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="group relative px-8 py-4 bg-white text-gray-900 rounded-full font-medium overflow-hidden"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 Start the journey
//                 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//               </span>
//               <motion.div 
//                 className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500"
//                 initial={{ x: '-100%' }}
//                 whileHover={{ x: '100%' }}
//                 transition={{ duration: 0.5 }}
//               />
//             </motion.button>
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // Background pattern
// const UniquePattern = () => {
//   return (
//     <div className="absolute inset-0 -z-10">
//       {/* Diagonal lines */}
//       <svg className="absolute inset-0 w-full h-full">
//         <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="rotate(45)">
//           <line x1="0" y1="0" x2="0" y2="60" stroke="#f0f0f0" strokeWidth="1" />
//         </pattern>
//         <rect width="100%" height="100%" fill="url(#diagonalLines)" opacity="0.5" />
//       </svg>
      
//       {/* Floating shapes */}
//       <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-200 rounded-2xl rotate-12 opacity-20" />
//       <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-pink-200 rounded-full opacity-20" />
//       <div className="absolute top-1/2 left-1/2 w-64 h-64 border-2 border-green-200 rounded-3xl -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-10" />
//     </div>
//   );
// };

// // Add this to your global CSS
// const styles = `
//   .clip-diagonal-right {
//     clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
//   }
  
//   .clip-diagonal-left {
//     clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
//   }
  
//   @media (max-width: 1024px) {
//     .clip-diagonal-right,
//     .clip-diagonal-left {
//       clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
//     }
//   }
// `;

// export default function ServicesSection() {
//   return (
//     <section className="relative py-24 bg-white overflow-hidden">
//       <UniquePattern />
      
//       <div className="relative z-10">
//         <GeometricHeader />

//         {/* Service blocks - unique diagonal layout */}
//         <div className="space-y-0">
//           {services.map((service, index) => (
//             <ServiceBlock key={service.title} service={service} index={index} />
//           ))}
//         </div>

//         <StatsMosaic />
//         <GeometricCTA />
//       </div>
//     </section>
//   );
// }





// import { useState } from "react"
// import { ArrowUpRight } from "lucide-react"

// import uiImg from "@/assets/data-cabling.jpg"
// import productImg from "@/assets/data-security.jpg"
// import designImg from "@/assets/it-deployment.jpg"

// const services = [
//   {
//     id: "01",
//     title: "Ui/UX",
//     desc: "Our agency focuses on creating products that provide users with meaningful and relevant experiences.",
//     image: uiImg,
//   },
//   {
//     id: "02",
//     title: "PRODUCT",
//     desc: "Our agency focuses on creating products that provide users with meaningful and relevant experiences.",
//     image: productImg,
//   },
//   {
//     id: "03",
//     title: "Design",
//     desc: "Our agency focuses on creating products that provide users with meaningful and relevant experiences.",
//     image: designImg,
//   },
// ]

// export default function ServicesHoverSection() {
//   const [active, setActive] = useState<number | null>(null)

//   return (
//     <section className="py-32 bg-[#f4f4f4] relative overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Heading */}
//         <h2 className="text-center text-6xl font-serif italic mb-20 tracking-wide">
//           SERVICES
//         </h2>

//         {/* Service List */}
//         <div className="space-y-12 relative">
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               onMouseEnter={() => setActive(index)}
//               onMouseLeave={() => setActive(null)}
//               className={`relative border-t border-neutral-300 pt-10 pb-12 flex items-start justify-between transition-all duration-300 ${
//                 active === index ? "bg-black text-white rounded-3xl px-10" : ""
//               }`}
//             >
//               {/* Left Side */}
//               <div className="flex gap-10 items-start">
//                 <span className="text-2xl font-light opacity-70">
//                   {service.id}
//                 </span>

//                 <div>
//                   <h3 className="text-4xl font-semibold mb-4">
//                     {service.title}
//                   </h3>
//                   <p className="max-w-xl text-lg opacity-80">
//                     {service.desc}
//                   </p>
//                 </div>
//               </div>

//               {/* Arrow Button */}
//               <div className="w-16 h-16 rounded-full border border-current flex items-center justify-center transition-all duration-300 hover:rotate-45">
//                 <ArrowUpRight size={22} />
//               </div>

//               {/* Hover Image */}
//               <div
//                 className={`absolute right-24 top-1/2 -translate-y-1/2 transition-all duration-500 ${
//                   active === index
//                     ? "opacity-100 translate-x-0 rotate-6 scale-100"
//                     : "opacity-0 translate-x-20 rotate-12 scale-95 pointer-events-none"
//                 }`}
//               >
//                 <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }





// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { ArrowUpRight } from "lucide-react"

// import dataCablingImg from "@/assets/data-cabling.jpg"
// import dataSecurityImg from "@/assets/data-security.jpg"
// import itDeploymentImg from "@/assets/it-deployment.jpg"
// import strategicCoreImg from "@/assets/strategic-core.jpg"

// const services = [
//   {
//     id: "01",
//     title: "Data Cabling Infrastructure",
//     tagline: "Connect at the speed of light",
//     desc: "Enterprise-grade structured cabling designed for performance and scalability.",
//     features: ["Fiber Optic", "Cat6A/Cat7", "TIA-942"],
//     image: dataCablingImg,
//     stat: { value: "40Gbps", label: "throughput" },
//   },
//   {
//     id: "02",
//     title: "Data Security Solutions",
//     tagline: "Fortify your digital assets",
//     desc: "Comprehensive security frameworks protecting your most critical digital assets.",
//     features: ["Zero Trust", "AI Detection", "Encryption"],
//     image: dataSecurityImg,
//     stat: { value: "99.99%", label: "protection" },
//   },
//   {
//     id: "03",
//     title: "End-to-End IT Deployment",
//     tagline: "Deploy at enterprise scale",
//     desc: "Full lifecycle infrastructure deployment from planning to execution.",
//     features: ["Cloud Native", "Automated", "Hybrid"],
//     image: itDeploymentImg,
//     stat: { value: "60%", label: "faster deployment" },
//   },
//   {
//     id: "04",
//     title: "Strategic IT Core Development",
//     tagline: "Build the future, today",
//     desc: "Building the technological backbone that drives transformation.",
//     features: ["Microservices", "API-first", "Scalable"],
//     image: strategicCoreImg,
//     stat: { value: "∞", label: "infinite scale" },
//   },
// ]

// export default function ServicesSection() {
//   const [active, setActive] = useState<number | null>(null)

//   return (
//     <section className="py-32 bg-[#f5f5f5] overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* ================= HEADING ================= */}
//         <div className="text-center max-w-4xl mx-auto mb-28">
//           <h2 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-6">
//             Building the <br />
//             <span className="italic font-serif">
//               Digital Backbone
//             </span>
//           </h2>

//           <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
//             Four specialized pillars that form the foundation of modern enterprise infrastructure
//           </p>
//         </div>

//         {/* ================= SERVICES ================= */}
//         <div className="space-y-14 relative">
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               onMouseEnter={() => setActive(index)}
//               onMouseLeave={() => setActive(null)}
//               className={`relative border-t border-neutral-300 pt-12 pb-14 flex items-start justify-between transition-all duration-500 ${
//                 active === index
//                   ? "bg-black text-white rounded-3xl px-12"
//                   : ""
//               }`}
//             >
//               {/* LEFT SIDE */}
//               <div className="flex gap-12 items-start">

//                 {/* Number */}
//                 <span className="text-2xl font-light opacity-70">
//                   {service.id}
//                 </span>

//                 {/* Content */}
//                 <div className="max-w-2xl">

//                   {/* Tagline */}
//                   <div
//                     className={`text-sm mb-2 ${
//                       active === index
//                         ? "text-gray-400"
//                         : "text-gray-500"
//                     }`}
//                   >
//                     {service.tagline}
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-4xl font-semibold mb-4">
//                     {service.title}
//                   </h3>

//                   {/* Description */}
//                   <p
//                     className={`text-lg leading-relaxed mb-6 ${
//                       active === index
//                         ? "text-gray-300"
//                         : "text-gray-600"
//                     }`}
//                   >
//                     {service.desc}
//                   </p>

//                   {/* Features */}
//                   <div className="flex flex-wrap gap-3">
//                     {service.features.map((feature) => (
//                       <span
//                         key={feature}
//                         className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-300 ${
//                           active === index
//                             ? "border-white/20 text-gray-300"
//                             : "border-gray-300 text-gray-600"
//                         }`}
//                       >
//                         {feature}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT SIDE BUTTON */}
//               <Link
//                 to={`/services/${service.title
//                   .toLowerCase()
//                   .replace(/\s+/g, "-")}`}
//               >
//                 <div className="w-16 h-16 rounded-full border border-current flex items-center justify-center transition-all duration-300 hover:rotate-45">
//                   <ArrowUpRight size={22} />
//                 </div>
//               </Link>

//               {/* FLOATING IMAGE */}
//               <div
//                 className={`absolute right-24 top-1/2 -translate-y-1/2 transition-all duration-500 hidden lg:block ${
//                   active === index
//                     ? "opacity-100 translate-x-0 rotate-6 scale-100"
//                     : "opacity-0 translate-x-20 rotate-12 scale-95 pointer-events-none"
//                 }`}
//               >
//                 <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl relative">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover"
//                   />

//                   {/* Floating Stat Card */}
//                   <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 text-sm shadow-lg">
//                     <div className="font-bold text-gray-900">
//                       {service.stat.value}
//                     </div>
//                     <div className="text-xs text-gray-500">
//                       {service.stat.label}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }






// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { ArrowUpRight } from "lucide-react"

// import dataCablingImg from "@/assets/data-cabling.jpg"
// import dataSecurityImg from "@/assets/data-security.jpg"
// import itDeploymentImg from "@/assets/it-deployment.jpg"
// import strategicCoreImg from "@/assets/strategic-core.jpg"

// const services = [
//   {
//     id: "01",
//     title: "Data Cabling Infrastructure",
//     tagline: "Connect at the speed of light",
//     desc: "Enterprise-grade structured cabling designed for performance and scalability.",
//     features: ["Fiber Optic", "Cat6A/Cat7", "TIA-942"],
//     image: dataCablingImg,
//     stat: { value: "40Gbps", label: "throughput" },
//   },
//   {
//     id: "02",
//     title: "Data Security Solutions",
//     tagline: "Fortify your digital assets",
//     desc: "Comprehensive security frameworks protecting your most critical digital assets.",
//     features: ["Zero Trust", "AI Detection", "Encryption"],
//     image: dataSecurityImg,
//     stat: { value: "99.99%", label: "protection" },
//   },
//   {
//     id: "03",
//     title: "End-to-End IT Deployment",
//     tagline: "Deploy at enterprise scale",
//     desc: "Full lifecycle infrastructure deployment from planning to execution.",
//     features: ["Cloud Native", "Automated", "Hybrid"],
//     image: itDeploymentImg,
//     stat: { value: "60%", label: "faster deployment" },
//   },
//   {
//     id: "04",
//     title: "Strategic IT Core Development",
//     tagline: "Build the future, today",
//     desc: "Building the technological backbone that drives transformation.",
//     features: ["Microservices", "API-first", "Scalable"],
//     image: strategicCoreImg,
//     stat: { value: "∞", label: "infinite scale" },
//   },
// ]

// export default function ServicesSection() {
//   const [active, setActive] = useState<number | null>(null)

//   return (
//     <section className="py-8 bg-[#F8FAFC] overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6 mb-10">

//         {/* ================= HEADING ================= */}
//         <div className="text-center max-w-4xl mx-auto mb-28">
//           <h2 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-6 text-slate-900">
//             Building the <br />
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent italic font-serif">
//               Digital Backbone
//             </span>
//           </h2>

//           <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
//             Four specialized pillars that form the foundation of modern enterprise infrastructure
//           </p>
//         </div>

//         {/* ================= SERVICES ================= */}
//         <div className="space-y-14 relative">
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               onMouseEnter={() => setActive(index)}
//               onMouseLeave={() => setActive(null)}
//               className={`relative border-t border-slate-200 pt-12 pb-14 flex items-start justify-between transition-all duration-500 ${
//                 active === index
//                   ? "bg-[#0F172A] text-white rounded-3xl px-12 shadow-2xl"
//                   : ""
//               }`}
//             >
//               {/* LEFT SIDE */}
//               <div className="flex gap-12 items-start">

//                 {/* Number */}
//                 <span className={`text-2xl font-light ${
//                   active === index ? "text-slate-400" : "text-slate-400"
//                 }`}>
//                   {service.id}
//                 </span>

//                 {/* Content */}
//                 <div className="max-w-2xl">

//                   {/* Tagline */}
//                   <div
//                     className={`text-sm mb-2 ${
//                       active === index
//                         ? "text-slate-400"
//                         : "text-slate-500"
//                     }`}
//                   >
//                     {service.tagline}
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-4xl font-semibold mb-4">
//                     {service.title}
//                   </h3>

//                   {/* Description */}
//                   <p
//                     className={`text-lg leading-relaxed mb-6 ${
//                       active === index
//                         ? "text-slate-300"
//                         : "text-slate-600"
//                     }`}
//                   >
//                     {service.desc}
//                   </p>

//                   {/* Features */}
//                   <div className="flex flex-wrap gap-3">
//                     {service.features.map((feature) => (
//                       <span
//                         key={feature}
//                         className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-300 ${
//                           active === index
//                             ? "border-white/20 text-slate-300"
//                             : "border-slate-300 text-slate-600"
//                         }`}
//                       >
//                         {feature}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT SIDE BUTTON */}
//               <Link
//                 to={`/services/${service.title
//                   .toLowerCase()
//                   .replace(/\s+/g, "-")}`}
//               >
//                 <div className="w-16 h-16 rounded-full border border-current flex items-center justify-center transition-all duration-300 hover:rotate-45 hover:border-emerald-400">
//                   <ArrowUpRight size={22} />
//                 </div>
//               </Link>

//               {/* FLOATING IMAGE */}
//               <div
//                 className={`absolute right-24 top-1/2 -translate-y-1/2 transition-all duration-500 hidden lg:block ${
//                   active === index
//                     ? "opacity-100 translate-x-0 rotate-6 scale-100"
//                     : "opacity-0 translate-x-20 rotate-12 scale-95 pointer-events-none"
//                 }`}
//               >
//                 <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl relative">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover"
//                   />

//                   {/* Floating Stat Card */}
//                   <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 text-sm shadow-xl">
//                     <div className="font-bold text-slate-900">
//                       {service.stat.value}
//                     </div>
//                     <div className="text-xs text-slate-600">
//                       {service.stat.label}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }



import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight, X } from "lucide-react"

import dataCablingImg from "@/assets/data-cabling.jpg"
import dataSecurityImg from "@/assets/data-security.jpg"
import itDeploymentImg from "@/assets/it-deployment.jpg"
import strategicCoreImg from "@/assets/strategic-core.jpg"

const services = [
  {
    id: "01",
    title: "Data Cabling Infrastructure",
    tagline: "Connect at the speed of light",
    desc: "Enterprise-grade structured cabling designed for performance and scalability.",
    features: ["Fiber Optic", "Cat6A/Cat7", "TIA-942"],
    image: dataCablingImg,
    stat: { value: "40Gbps", label: "throughput" },
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "02",
    title: "Data Security Solutions",
    tagline: "Fortify your digital assets",
    desc: "Comprehensive security frameworks protecting your most critical digital assets.",
    features: ["Zero Trust", "AI Detection", "Encryption"],
    image: dataSecurityImg,
    stat: { value: "99.99%", label: "protection" },
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "03",
    title: "End-to-End IT Deployment",
    tagline: "Deploy at enterprise scale",
    desc: "Full lifecycle infrastructure deployment from planning to execution.",
    features: ["Cloud Native", "Automated", "Hybrid"],
    image: itDeploymentImg,
    stat: { value: "60%", label: "faster deployment" },
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "04",
    title: "Strategic IT Core Development",
    tagline: "Build the future, today",
    desc: "Building the technological backbone that drives transformation.",
    features: ["Microservices", "API-first", "Scalable"],
    image: strategicCoreImg,
    stat: { value: "∞", label: "infinite scale" },
    color: "from-orange-500 to-red-500",
  },
]

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleServiceClick = (index: number) => {
    if (isMobile) {
      setSelectedService(selectedService === index ? null : index)
    }
  }

  const handleCloseSheet = () => {
    setSelectedService(null)
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-4 md:mb-6 text-slate-900">
            Building the <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent italic font-serif">
              Digital Backbone
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Four specialized pillars that form the foundation of modern enterprise infrastructure
          </p>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8 relative">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => !isMobile && setActive(index)}
              onMouseLeave={() => !isMobile && setActive(null)}
              onClick={() => handleServiceClick(index)}
              className={`
                relative group cursor-pointer lg:cursor-default
                transition-all duration-300
                ${selectedService === index ? 'scale-[0.98]' : ''}
              `}
            >
              {/* Main Card */}
              <div
                className={`
                  relative border border-slate-200 rounded-2xl lg:rounded-3xl
                  p-4 sm:p-6 md:p-8 lg:p-10
                  transition-all duration-500
                  ${active === index && !isMobile
                    ? 'lg:bg-[#0F172A] lg:text-white lg:shadow-2xl lg:scale-105'
                    : 'bg-white hover:shadow-lg'
                  }
                  ${selectedService === index
                    ? 'bg-[#0F172A] text-white shadow-2xl'
                    : ''
                  }
                `}
              >
                <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-8">
                  
                  {/* Left Section */}
                  <div className="flex-1 w-full">
                    {/* Top Row: ID and Tagline */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <span className={`
                        text-lg sm:text-xl font-light
                        ${active === index || selectedService === index
                          ? 'text-slate-400'
                          : 'text-slate-400'
                        }
                      `}>
                        {service.id}
                      </span>
                      <span className={`
                        text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full
                        ${active === index || selectedService === index
                          ? 'bg-white/10 text-slate-300'
                          : 'bg-slate-100 text-slate-600'
                        }
                      `}>
                        {service.tagline}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className={`
                      text-sm sm:text-base leading-relaxed mb-4 sm:mb-6
                      ${active === index || selectedService === index
                        ? 'text-slate-300'
                        : 'text-slate-600'
                      }
                    `}>
                      {service.desc}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className={`
                            text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border
                            transition-all duration-300
                            ${active === index || selectedService === index
                              ? 'border-white/20 text-slate-300'
                              : 'border-slate-200 text-slate-600'
                            }
                          `}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Section - Image Preview for Mobile/Tablet */}
                  <div className="lg:hidden w-full sm:w-48 md:w-56 flex-shrink-0">
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-32 sm:h-28 object-cover"
                      />
                      
                      {/* Stat Badge */}
                      <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs shadow-md">
                        <span className="font-bold text-slate-900">{service.stat.value}</span>
                        <span className="text-slate-600 ml-1">{service.stat.label}</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Arrow Button */}
                  <Link
                    to={`/services/${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="hidden lg:block flex-shrink-0"
                  >
                    <div className={`
                      w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 
                      rounded-full border border-current 
                      flex items-center justify-center 
                      transition-all duration-300 
                      hover:rotate-45 hover:border-emerald-400
                      ${active === index ? 'text-white' : 'text-slate-900'}
                    `}>
                      <ArrowUpRight size={18} className="md:w-5 md:h-5 lg:w-[22px] lg:h-[22px]" />
                    </div>
                  </Link>
                </div>

                {/* Desktop Floating Image */}
                {!isMobile && (
                  <div
                    className={`
                      absolute right-16 xl:right-20 top-1/2 -translate-y-1/2
                      transition-all duration-500 hidden lg:block
                      ${active === index
                        ? 'opacity-100 translate-x-0 rotate-3 scale-100'
                        : 'opacity-0 translate-x-20 rotate-6 scale-95 pointer-events-none'
                      }
                    `}
                  >
                    <div className="w-48 xl:w-56 2xl:w-64 h-60 xl:h-72 2xl:h-80 rounded-2xl overflow-hidden shadow-2xl relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Floating Stat Card */}
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md rounded-lg px-3 py-1.5 shadow-xl">
                        <div className="font-bold text-slate-900 text-sm">
                          {service.stat.value}
                        </div>
                        <div className="text-xs text-slate-600">
                          {service.stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile/Tablet Bottom Sheet */}
              {selectedService === index && isMobile && (
                <>
                  {/* Backdrop */}
                  <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={handleCloseSheet}
                  />
                  
                  {/* Sheet */}
                  <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 animate-slide-up">
                    
                    {/* Handle */}
                    <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto my-3" />
                    
                    {/* Image */}
                    <div className="relative h-48 sm:h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Stat Card */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 shadow-xl">
                        <div className="font-bold text-slate-900">
                          {service.stat.value}
                        </div>
                        <div className="text-xs text-slate-600">
                          {service.stat.label}
                        </div>
                      </div>
                      
                      {/* Close Button */}
                      <button
                        onClick={handleCloseSheet}
                        className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white rounded-full p-2"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-light text-slate-400">
                          {service.id}
                        </span>
                        <span className="text-xs px-2 py-1 bg-slate-100 rounded-full text-slate-600">
                          {service.tagline}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-semibold mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {service.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-3 py-1.5 border border-slate-200 rounded-full text-slate-600"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        to={`/services/${service.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors w-full justify-center"
                        onClick={handleCloseSheet}
                      >
                        Learn More
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 md:mt-10 lg:mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All Services
            <ArrowUpRight size={16} className="sm:w-4 sm:h-4" />
          </Link>
        </div>

      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}