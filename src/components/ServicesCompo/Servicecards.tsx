// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { Network, Shield, Server, Cpu, CheckCircle, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";

// // Images
// import dataCablingImg from "@/assets/data-cabling.jpg";
// import dataSecurityImg from "@/assets/data-security.jpg";
// import itDeploymentImg from "@/assets/it-deployment.jpg";
// import strategicCoreImg from "@/assets/strategic-core.jpg";

// const services = [
//   {
//     icon: Network,
//     title: "Data Cabling Infrastructure",
//     desc: "Enterprise-grade structured cabling solutions designed for maximum performance.",
//     longDesc:
//       "Our data cabling solutions provide the physical backbone for your entire digital infrastructure.",
//     color: "blue" as const,
//     image: dataCablingImg,
//     colorMeaning: "Built on Trust & Dependability",
//     features: [
//       "Cat6A/Cat7 Structured Cabling",
//       "Fiber Optic Solutions",
//       "Network Rack Setup",
//       "Cable Management",
//     ],
//   },
//   {
//     icon: Shield,
//     title: "Data Security Solutions",
//     desc: "Comprehensive security frameworks to protect your digital assets.",
//     longDesc:
//       "Our security solutions provide multi-layered protection for your infrastructure.",
//     color: "magenta" as const,
//     image: dataSecurityImg,
//     colorMeaning: "Driven by Passion & Innovation",
//     features: [
//       "Firewall Security",
//       "Network Monitoring",
//       "Data Encryption",
//       "Security Compliance",
//     ],
//   },
//   {
//     icon: Server,
//     title: "End-to-End IT Deployment",
//     desc: "Complete lifecycle IT infrastructure deployment services.",
//     longDesc:
//       "We manage every phase of your IT infrastructure deployment with minimal disruption.",
//     color: "green" as const,
//     image: itDeploymentImg,
//     colorMeaning: "Rooted in Growth",
//     features: [
//       "Infrastructure Assessment",
//       "Solution Design",
//       "Installation",
//       "Performance Optimization",
//     ],
//   },
//   {
//     icon: Cpu,
//     title: "Strategic IT Core Development",
//     desc: "Building the backbone for digital transformation.",
//     longDesc:
//       "We design core infrastructure that powers all digital operations.",
//     color: "blue" as const,
//     image: strategicCoreImg,
//     colorMeaning: "Anchored in Security",
//     features: [
//       "IT Consulting",
//       "Infrastructure Design",
//       "Cloud Solutions",
//       "Capacity Planning",
//     ],
//   },
// ];

// export default function Servicecards() {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Page Title */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h1 className="text-4xl lg:text-5xl font-black mb-4">
//             Our IT Services
//           </h1>
//           <p className="text-muted-foreground">
//             Smart infrastructure solutions designed to support your business
//             growth and digital transformation.
//           </p>
//         </div>

//         {/* Services */}
//         <div className="space-y-10">
//           {services.map((s, i) => (
//             <SectionWrapper key={s.title} delay={i * 100}>
//               <div className="rounded-xl border bg-card shadow-sm overflow-hidden">

//                 <div
//                   className={`grid lg:grid-cols-2 ${
//                     i % 2 !== 0 ? "lg:grid-flow-dense" : ""
//                   }`}
//                 >
//                   {/* Image */}
//                   <div
//                     className={`relative h-48 lg:h-56 overflow-hidden ${
//                       i % 2 !== 0 ? "lg:col-start-2" : ""
//                     }`}
//                   >
//                     <img
//                       src={s.image}
//                       alt={s.title}
//                       className="w-full h-full object-cover hover:scale-105 transition duration-500"
//                     />

//                     <div className="absolute bottom-3 left-3 text-xs bg-black/60 text-white px-3 py-1 rounded-full">
//                       {s.colorMeaning}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">

//                     <div className="flex items-center gap-3 mb-4">
//                       <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
//                         <s.icon size={22} className="text-primary" />
//                       </div>

//                       <h3 className="text-xl font-bold">{s.title}</h3>
//                     </div>

//                     <p className="text-sm text-muted-foreground mb-3">
//                       {s.desc}
//                     </p>

//                     <p className="text-sm text-muted-foreground mb-5">
//                       {s.longDesc}
//                     </p>

//                     {/* Features */}
//                     <div className="grid sm:grid-cols-2 gap-2 mb-5">
//                       {s.features.map((f) => (
//                         <div
//                           key={f}
//                           className="flex items-center gap-2 text-sm"
//                         >
//                           <CheckCircle size={14} className="text-primary" />
//                           {f}
//                         </div>
//                       ))}
//                     </div>

//                     <Link to="/contact">
//                       <Button variant="outline" size="sm" className="group">
//                         Get a Quote
//                         <ArrowRight
//                           size={14}
//                           className="ml-2 group-hover:translate-x-1 transition"
//                         />
//                       </Button>
//                     </Link>

//                   </div>
//                 </div>

//               </div>
//             </SectionWrapper>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }





// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { Network, Shield, Server, Cpu, CheckCircle, ArrowRight, Zap, Globe, Lock } from "lucide-react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";

// // Images
// import dataCablingImg from "@/assets/data-cabling.jpg";
// import dataSecurityImg from "@/assets/data-security.jpg";
// import itDeploymentImg from "@/assets/it-deployment.jpg";
// import strategicCoreImg from "@/assets/strategic-core.jpg";

// const services = [
//   {
//     icon: Network,
//     title: "Data Cabling Infrastructure",
//     shortDesc: "Enterprise-grade structured cabling solutions designed for maximum performance, scalability, and reliability.",
//     longDesc:
//       "Our data cabling solutions provide the physical backbone for your entire digital infrastructure. We design and implement structured cabling systems that support current bandwidth demands while scaling seamlessly for future growth.",
//     color: "from-blue-600 to-cyan-500",
//     lightColor: "bg-blue-50",
//     iconBg: "bg-blue-100",
//     iconColor: "text-blue-600",
//     borderColor: "border-blue-200",
//     image: dataCablingImg,
//     colorMeaning: "Built on Trust & Dependability",
//     features: [
//       "Cat6A/Cat7 Structured Cabling",
//       "Fiber Optic Solutions",
//       "Network Rack Setup",
//       "Cable Management",
//     ],
//     stats: "99.9% reliability",
//   },
//   {
//     icon: Shield,
//     title: "Data Security Solutions",
//     shortDesc: "Comprehensive security frameworks and solutions to protect your most critical digital assets and infrastructure.",
//     longDesc:
//       "Our security solutions provide multi-layered protection for your infrastructure against evolving threats.",
//     color: "from-fuchsia-600 to-pink-500",
//     lightColor: "bg-fuchsia-50",
//     iconBg: "bg-fuchsia-100",
//     iconColor: "text-fuchsia-600",
//     borderColor: "border-fuchsia-200",
//     image: dataSecurityImg,
//     colorMeaning: "Driven by Passion & Innovation",
//     features: [
//       "Firewall Security",
//       "Network Monitoring",
//       "Data Encryption",
//       "Security Compliance",
//     ],
//     stats: "24/7 threat detection",
//   },
//   {
//     icon: Server,
//     title: "End-to-End IT Deployment",
//     shortDesc: "Full lifecycle IT infrastructure deployment from strategic planning through execution and ongoing support.",
//     longDesc:
//       "We manage every phase of your IT infrastructure deployment with minimal disruption to your business.",
//     color: "from-emerald-600 to-teal-500",
//     lightColor: "bg-emerald-50",
//     iconBg: "bg-emerald-100",
//     iconColor: "text-emerald-600",
//     borderColor: "border-emerald-200",
//     image: itDeploymentImg,
//     colorMeaning: "Rooted in Growth",
//     features: [
//       "Infrastructure Assessment",
//       "Solution Design",
//       "Installation",
//       "Performance Optimization",
//     ],
//     stats: "100+ successful deployments",
//   },
//   {
//     icon: Cpu,
//     title: "Strategic IT Core Development",
//     shortDesc: "Building the technological backbone that drives business transformation and competitive advantage.",
//     longDesc:
//       "We design core infrastructure that powers all digital operations and scales with your business.",
//     color: "from-violet-600 to-purple-500",
//     lightColor: "bg-violet-50",
//     iconBg: "bg-violet-100",
//     iconColor: "text-violet-600",
//     borderColor: "border-violet-200",
//     image: strategicCoreImg,
//     colorMeaning: "Anchored in Security",
//     features: [
//       "IT Consulting",
//       "Infrastructure Design",
//       "Cloud Solutions",
//       "Capacity Planning",
//     ],
//     stats: "Scalable architecture",
//   },
// ];

// export default function Servicecards() {
//   return (
//     <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Page Title */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
//             <Zap size={16} />
//             <span>Premium IT Solutions</span>
//           </div>
//              <h1 className="text-4xl sm:text-5xl font-black mb-4">
//   <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//   bg-clip-text text-transparent">
//     Our IT Services
//   </span>
//           </h1>
//           <p className="text-lg text-muted-foreground leading-relaxed">
//             Smart infrastructure solutions designed to support your business
//             growth and digital transformation.
//           </p>
//         </div>

//         {/* Services */}
//         <div className="space-y-8 lg:space-y-12">
//           {services.map((s, i) => (
//             <SectionWrapper key={s.title} delay={i * 100}>
//               <div className="group relative rounded-2xl border bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                
//                 {/* Gradient overlay on hover */}
//                 <div className={`absolute inset-0 bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
//                 {/* Decorative elements */}
//                 <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />

//                 <div
//                   className={`grid lg:grid-cols-2 ${
//                     i % 2 !== 0 ? "lg:grid-flow-dense" : ""
//                   }`}
//                 >
//                   {/* Image Section */}
//                   <div
//                     className={`relative h-64 lg:h-80 overflow-hidden ${
//                       i % 2 !== 0 ? "lg:col-start-2" : ""
//                     }`}
//                   >
//                     <img
//                       src={s.image}
//                       alt={s.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
                    
//                     {/* Gradient overlay */}
//                     <div className={`absolute inset-0 bg-gradient-to-t ${s.color} mix-blend-multiply opacity-40`} />
                    
//                     {/* Icon - Now clearly visible with white background and shadow */}
//                     <div className={`absolute top-4 right-4 w-14 h-14 rounded-xl ${s.iconBg} shadow-xl flex items-center justify-center border-2 border-white z-10`}>
//                       <s.icon size={28} className={s.iconColor} />
//                     </div>
                    
//                     {/* Badges - Repositioned to bottom left to avoid overlap */}
//                     <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10">
//                       <div className={`px-4 py-2 rounded-full text-xs font-medium text-white bg-black/70 backdrop-blur-sm border border-white/30 shadow-lg`}>
//                         {s.colorMeaning}
//                       </div>
//                       <div className="px-4 py-2 rounded-full text-xs font-medium text-white bg-primary/80 backdrop-blur-sm border border-white/30 shadow-lg">
//                         {s.stats}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content Section */}
//                   <div className={`p-8 lg:p-10 ${i % 2 !== 0 ? "lg:col-start-1" : ""}`}>
//                     {/* Title and description */}
//                     <div className="mb-6">
//                       <h3 className="text-2xl lg:text-3xl font-bold mb-3">
//                         {s.title}
//                       </h3>
//                       <p className="text-muted-foreground leading-relaxed">
//                         {s.shortDesc}
//                       </p>
//                     </div>

//                     {/* Features grid */}
//                     <div className="grid sm:grid-cols-2 gap-4 mb-8">
//                       {s.features.map((f, idx) => (
//                         <div
//                           key={f}
//                           className="flex items-center gap-3 text-sm group/feature"
//                         >
//                           <div className={`w-6 h-6 rounded-full ${s.lightColor} flex items-center justify-center group-hover/feature:scale-110 transition-transform`}>
//                             <CheckCircle size={14} className={s.iconColor} />
//                           </div>
//                           <span className="font-medium text-gray-700">{f}</span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* CTA and trust indicator */}
//                     <div className="flex items-center justify-between flex-wrap gap-4">
//                       <Link to="/contact">
//                         <Button 
//                           size="lg" 
//                           className={`group relative overflow-hidden bg-gradient-to-r ${s.color} text-white border-0 hover:shadow-xl transition-all duration-300 px-8 py-6 text-base font-semibold`}
//                         >
//                           <span className="relative z-10 flex items-center">
//                             Get a Quote
//                             <ArrowRight
//                               size={18}
//                               className="ml-2 group-hover:translate-x-1 transition-transform"
//                             />
//                           </span>
//                           <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
//                         </Button>
//                       </Link>
                      
//                       <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
//                         <Lock size={14} className="text-gray-400" />
//                         <span>SLA guaranteed</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SectionWrapper>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-20 text-center">
//           <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/5 border border-primary/10">
//             <Globe size={18} className="text-primary" />
//             <span className="text-sm font-medium">All services include 24/7 support and enterprise-grade security</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { Network, Shield, Server, Cpu, CheckCircle, ArrowRight, Zap, Globe, Lock } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";

// // Images
// import dataCablingImg from "@/assets/data-cabling.jpg";
// import dataSecurityImg from "@/assets/data-security.jpg";
// import itDeploymentImg from "@/assets/it-deployment.jpg";
// import strategicCoreImg from "@/assets/strategic-core.jpg";

// const services = [
//   {
//     icon: Network,
//     title: "Data Cabling Infrastructure",
//     shortDesc: "Enterprise-grade structured cabling solutions designed for maximum performance, scalability, and reliability.",
//     longDesc:
//       "Our data cabling solutions provide the physical backbone for your entire digital infrastructure. We design and implement structured cabling systems that support current bandwidth demands while scaling seamlessly for future growth.",
//     color: "from-blue-600 to-cyan-500",
//     lightColor: "bg-blue-50",
//     iconBg: "bg-blue-100",
//     iconColor: "text-blue-600",
//     borderColor: "border-blue-200",
//     image: dataCablingImg,
//     colorMeaning: "Built on Trust & Dependability",
//     features: [
//       "Cat6A/Cat7 Structured Cabling",
//       "Fiber Optic Solutions",
//       "Network Rack Setup",
//       "Cable Management",
//     ],
//     stats: "99.9% reliability",
//   },
//   {
//     icon: Shield,
//     title: "Data Security Solutions",
//     shortDesc: "Comprehensive security frameworks and solutions to protect your most critical digital assets and infrastructure.",
//     longDesc:
//       "Our security solutions provide multi-layered protection for your infrastructure against evolving threats.",
//     color: "from-fuchsia-600 to-pink-500",
//     lightColor: "bg-fuchsia-50",
//     iconBg: "bg-fuchsia-100",
//     iconColor: "text-fuchsia-600",
//     borderColor: "border-fuchsia-200",
//     image: dataSecurityImg,
//     colorMeaning: "Driven by Passion & Innovation",
//     features: [
//       "Firewall Security",
//       "Network Monitoring",
//       "Data Encryption",
//       "Security Compliance",
//     ],
//     stats: "24/7 threat detection",
//   },
//   {
//     icon: Server,
//     title: "End-to-End IT Deployment",
//     shortDesc: "Full lifecycle IT infrastructure deployment from strategic planning through execution and ongoing support.",
//     longDesc:
//       "We manage every phase of your IT infrastructure deployment with minimal disruption to your business.",
//     color: "from-emerald-600 to-teal-500",
//     lightColor: "bg-emerald-50",
//     iconBg: "bg-emerald-100",
//     iconColor: "text-emerald-600",
//     borderColor: "border-emerald-200",
//     image: itDeploymentImg,
//     colorMeaning: "Rooted in Growth",
//     features: [
//       "Infrastructure Assessment",
//       "Solution Design",
//       "Installation",
//       "Performance Optimization",
//     ],
//     stats: "100+ successful deployments",
//   },
//   {
//     icon: Cpu,
//     title: "Strategic IT Core Development",
//     shortDesc: "Building the technological backbone that drives business transformation and competitive advantage.",
//     longDesc:
//       "We design core infrastructure that powers all digital operations and scales with your business.",
//     color: "from-violet-600 to-purple-500",
//     lightColor: "bg-violet-50",
//     iconBg: "bg-violet-100",
//     iconColor: "text-violet-600",
//     borderColor: "border-violet-200",
//     image: strategicCoreImg,
//     colorMeaning: "Anchored in Security",
//     features: [
//       "IT Consulting",
//       "Infrastructure Design",
//       "Cloud Solutions",
//       "Capacity Planning",
//     ],
//     stats: "Scalable architecture",
//   },
// ];

// export default function Servicecards() {
//   const navigate = useNavigate();

//   const scrollToContactForm = () => {
//     navigate('/contact');
//     setTimeout(() => {
//       const contactFormElement = document.getElementById('contact-form');
//       if (contactFormElement) {
//         contactFormElement.scrollIntoView({ behavior: 'smooth' });
//       }
//     }, 100);
//   };

//   return (
//     <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Page Title */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
//             <Zap size={16} />
//             <span>Premium IT Solutions</span>
//           </div>
//              <h1 className="text-4xl sm:text-5xl font-black mb-4">
//   <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//   bg-clip-text text-transparent">
//     Our IT Services
//   </span>
//           </h1>
//           <p className="text-lg text-muted-foreground leading-relaxed">
//             Smart infrastructure solutions designed to support your business
//             growth and digital transformation.
//           </p>
//         </div>

//         {/* Services */}
//         <div className="space-y-8 lg:space-y-12">
//           {services.map((s, i) => (
//             <SectionWrapper key={s.title} delay={i * 100}>
//               <div className="group relative rounded-2xl border bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                
//                 {/* Gradient overlay on hover */}
//                 <div className={`absolute inset-0 bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
//                 {/* Decorative elements */}
//                 <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />

//                 <div
//                   className={`grid lg:grid-cols-2 ${
//                     i % 2 !== 0 ? "lg:grid-flow-dense" : ""
//                   }`}
//                 >
//                   {/* Image Section */}
//                   <div
//                     className={`relative h-64 lg:h-80 overflow-hidden ${
//                       i % 2 !== 0 ? "lg:col-start-2" : ""
//                     }`}
//                   >
//                     <img
//                       src={s.image}
//                       alt={s.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
                    
//                     {/* Gradient overlay */}
//                     <div className={`absolute inset-0 bg-gradient-to-t ${s.color} mix-blend-multiply opacity-40`} />
                    
//                     {/* Icon - Now clearly visible with white background and shadow */}
//                     <div className={`absolute top-4 right-4 w-14 h-14 rounded-xl ${s.iconBg} shadow-xl flex items-center justify-center border-2 border-white z-10`}>
//                       <s.icon size={28} className={s.iconColor} />
//                     </div>
                    
//                     {/* Badges - Repositioned to bottom left to avoid overlap */}
//                     <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10">
//                       <div className={`px-4 py-2 rounded-full text-xs font-medium text-white bg-black/70 backdrop-blur-sm border border-white/30 shadow-lg`}>
//                         {s.colorMeaning}
//                       </div>
//                       <div className="px-4 py-2 rounded-full text-xs font-medium text-white bg-primary/80 backdrop-blur-sm border border-white/30 shadow-lg">
//                         {s.stats}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content Section */}
//                   <div className={`p-8 lg:p-10 ${i % 2 !== 0 ? "lg:col-start-1" : ""}`}>
//                     {/* Title and description */}
//                     <div className="mb-6">
//                       <h3 className="text-2xl lg:text-3xl font-bold mb-3">
//                         {s.title}
//                       </h3>
//                       <p className="text-muted-foreground leading-relaxed">
//                         {s.shortDesc}
//                       </p>
//                     </div>

//                     {/* Features grid */}
//                     <div className="grid sm:grid-cols-2 gap-4 mb-8">
//                       {s.features.map((f, idx) => (
//                         <div
//                           key={f}
//                           className="flex items-center gap-3 text-sm group/feature"
//                         >
//                           <div className={`w-6 h-6 rounded-full ${s.lightColor} flex items-center justify-center group-hover/feature:scale-110 transition-transform`}>
//                             <CheckCircle size={14} className={s.iconColor} />
//                           </div>
//                           <span className="font-medium text-gray-700">{f}</span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* CTA and trust indicator */}
//                     <div className="flex items-center justify-between flex-wrap gap-4">
//                       <button 
//                         onClick={scrollToContactForm}
//                         className={`group relative overflow-hidden bg-gradient-to-r ${s.color} text-white border-0 hover:shadow-xl transition-all duration-300 px-8 py-6 text-base font-semibold rounded-lg cursor-pointer`}
//                       >
//                         <span className="relative z-10 flex items-center">
//                           Get a Quote
//                           <ArrowRight
//                             size={18}
//                             className="ml-2 group-hover:translate-x-1 transition-transform"
//                           />
//                         </span>
//                         <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
//                       </button>
                      
//                       <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
//                         <Lock size={14} className="text-gray-400" />
//                         <span>SLA guaranteed</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SectionWrapper>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-20 text-center">
//           <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/5 border border-primary/10">
//             <Globe size={18} className="text-primary" />
//             <span className="text-sm font-medium">All services include 24/7 support and enterprise-grade security</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { Network, Shield, Server, Cpu, CheckCircle, ArrowRight, Zap, Globe, Lock, Database, Cloud, Wifi, Phone, Eye, Fingerprint, Video, Ruler, HardDrive, Thermometer, Activity, FileText, TrendingUp, Headphones } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";

// // Images (keep your existing imports or update paths)
// import dataCablingImg from "@/assets/data-cabling.jpg";
// import dataSecurityImg from "@/assets/data-security.jpg";
// import itDeploymentImg from "@/assets/it-deployment.jpg";
// import strategicCoreImg from "@/assets/strategic-core.jpg";

// const services = [
//   {
//     icon: Database,
//     title: "Data Infra Services",
//     shortDesc: "Comprehensive data infrastructure solutions for modern enterprises, from VDI to high-speed networking.",
//     longDesc: "End-to-end data infrastructure services including virtualization, data center solutions, high-speed networking, and enterprise software.",
//     color: "from-blue-600 to-cyan-500",
//     lightColor: "bg-blue-50",
//     iconBg: "bg-blue-100",
//     iconColor: "text-blue-600",
//     borderColor: "border-blue-200",
//     image: dataCablingImg,
//     colorMeaning: "Built on Reliability & Scale",
//     features: [
//       "VDI",
//       "On Prem / Cloud / Hybrid Data Centre",
//       "Cloud & Data Centre Migration",
//       "Server & Storage",
//       "Network & Data Centre Switches 1G-800G",
//       "Wireless Access Point - Indoor & Outdoor",
//       "IP Phones",
//       "Software - Microsoft",
//     ],
//     stats: "1G to 800G Scale",
//   },
//   {
//     icon: Shield,
//     title: "Data Security Services",
//     shortDesc: "Comprehensive security frameworks to protect your digital assets from endpoint to cloud.",
//     longDesc: "Multi-layered security solutions including network infrastructure, firewall, SIEM, SOC, endpoint security, DLP, VAPT, cloud security, and backup recovery.",
//     color: "from-fuchsia-600 to-pink-500",
//     lightColor: "bg-fuchsia-50",
//     iconBg: "bg-fuchsia-100",
//     iconColor: "text-fuchsia-600",
//     borderColor: "border-fuchsia-200",
//     image: dataSecurityImg,
//     colorMeaning: "Driven by Security Excellence",
//     features: [
//       "Network Infrastructure",
//       "Firewall & Perimeter Security",
//       "Security Visibility – SIEM",
//       "SOC – Security Operations Centre",
//       "Endpoint Security – EDR / XDR",
//       "Data Security – DLP",
//       "VAPT – Security Testing",
//       "Cloud & Identity Security",
//       "Backup & Disaster Recovery",
//     ],
//     stats: "24/7 Security Operations",
//   },
//   {
//     icon: Fingerprint,
//     title: "Data Physical Security Services",
//     shortDesc: "Complete physical security and access management solutions for enterprise facilities.",
//     longDesc: "Integrated physical security systems including time & attendance, identity management, visitor management, surveillance, and facility control systems.",
//     color: "from-emerald-600 to-teal-500",
//     lightColor: "bg-emerald-50",
//     iconBg: "bg-emerald-100",
//     iconColor: "text-emerald-600",
//     borderColor: "border-emerald-200",
//     image: itDeploymentImg,
//     colorMeaning: "Rooted in Protection",
//     features: [
//       "Time and Attendance Management System",
//       "Identity and Security Management",
//       "Visitor Management",
//       "Contract and Labour Management",
//       "Canteen Management",
//       "Parking Management",
//       "Meeting Rooms Management",
//       "Guard Tour Management",
//       "Surveillance & Public Address System",
//     ],
//     stats: "Complete Facility Control",
//   },
//   {
//     icon: Ruler,
//     title: "Data Cabling Services",
//     shortDesc: "Enterprise-grade structured cabling solutions for maximum performance and future scalability.",
//     longDesc: "Complete cabling infrastructure including structured cabling, high-speed network roadmaps, smart cabinets, containment solutions, and high-density fiber.",
//     color: "from-violet-600 to-purple-500",
//     lightColor: "bg-violet-50",
//     iconBg: "bg-violet-100",
//     iconColor: "text-violet-600",
//     borderColor: "border-violet-200",
//     image: strategicCoreImg,
//     colorMeaning: "Anchored in Performance",
//     features: [
//       "Structured Cabling Solutions (Cat6/Cat6A/Cat7/FTP/STP)",
//       "Network Roadmap From 100G/400G/800G/1.6T & Beyond",
//       "Smart Cabinets/Server & Network Cabinets/4&2 Post Racks",
//       "Hot & Cold Aisle Containment",
//       "Liquid Cooling & Liquid Immerse Solutions",
//       "Intelligent PDU & KVMs Power Monitoring",
//       "High Density Fiber - MPO/SN/MTP",
//       "Others (Labelling/Cable Basket/Fiber Pathway/Raceway)",
//     ],
//     stats: "100G to 1.6T Ready",
//   },
//   {
//     icon: HardDrive,
//     title: "AI Hardware Infrastructure Services",
//     shortDesc: "Cutting-edge AI-ready infrastructure for hyperscale computing and operations.",
//     longDesc: "Enterprise AI infrastructure including hyperscale data centres, SOC/NOC setup, high-speed networking, intelligent power monitoring, and remote management solutions.",
//     color: "from-orange-600 to-red-500",
//     lightColor: "bg-orange-50",
//     iconBg: "bg-orange-100",
//     iconColor: "text-orange-600",
//     borderColor: "border-orange-200",
//     image: dataCablingImg,
//     colorMeaning: "Built for AI Scale",
//     features: [
//       "Hyper Scale Data Centre",
//       "Security Operation Centre",
//       "Authorised Access to Premises/Cabinets",
//       "MPO/SN Solutions For 100G/400G/800G",
//       "100G-400G Network Setup",
//       "Security for On Prem & Cloud Data Centre",
//       "Intelligent PDU For Power Monitoring",
//       "Network Operation Centre",
//       "KVM For Remote Management",
//     ],
//     stats: "AI-Optimized Infrastructure",
//   },
//   {
//     icon: TrendingUp,
//     title: "AI Services",
//     shortDesc: "Intelligent AI solutions that transform operations, customer experience, and decision-making.",
//     longDesc: "Advanced AI services including manufacturing analytics, customer service intelligence, document processing, procurement analysis, and product engagement optimization.",
//     color: "from-cyan-600 to-blue-500",
//     lightColor: "bg-cyan-50",
//     iconBg: "bg-cyan-100",
//     iconColor: "text-cyan-600",
//     borderColor: "border-cyan-200",
//     image: dataSecurityImg,
//     colorMeaning: "Driven by Intelligence",
//     features: [
//       "Manufacturing process performance analytics, Alert analytics, Shopfloor productivity",
//       "Customer service analysis, live agent assist for contact centres",
//       "Intelligent document processing on forms data",
//       "Procure to pay analysis, supplier 360 degree analysis",
//       "Product engagement and opportunity analysis",
//     ],
//     stats: "AI-Powered Insights",
//   },
// ];

// export default function Servicecards() {
//   const navigate = useNavigate();

//   const scrollToContactForm = () => {
//     navigate('/contact');
//     setTimeout(() => {
//       const contactFormElement = document.getElementById('contact-form');
//       if (contactFormElement) {
//         contactFormElement.scrollIntoView({ behavior: 'smooth' });
//       }
//     }, 100);
//   };

//   return (
//     <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Page Title */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
//             <Zap size={16} />
//             <span>Enterprise IT Solutions</span>
//           </div>
//           <h1 className="text-4xl sm:text-5xl font-black mb-4">
//             <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
//               Our IT Services
//             </span>
//           </h1>
//           <p className="text-lg text-muted-foreground leading-relaxed">
//             Comprehensive infrastructure, security, and AI solutions for modern enterprises
//           </p>
//         </div>

//         {/* Services */}
//         <div className="space-y-8 lg:space-y-12">
//           {services.map((s, i) => (
//             <SectionWrapper key={s.title} delay={i * 100}>
//               <div className="group relative rounded-2xl border bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                
//                 {/* Gradient overlay on hover */}
//                 <div className={`absolute inset-0 bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
//                 {/* Decorative elements */}
//                 <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />

//                 <div
//                   className={`grid lg:grid-cols-2 ${
//                     i % 2 !== 0 ? "lg:grid-flow-dense" : ""
//                   }`}
//                 >
//                   {/* Image Section */}
//                   <div
//                     className={`relative h-64 lg:h-80 overflow-hidden ${
//                       i % 2 !== 0 ? "lg:col-start-2" : ""
//                     }`}
//                   >
//                     <img
//                       src={s.image}
//                       alt={s.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
                    
//                     {/* Gradient overlay */}
//                     <div className={`absolute inset-0 bg-gradient-to-t ${s.color} mix-blend-multiply opacity-40`} />
                    
//                     {/* Icon - Now clearly visible with white background and shadow */}
//                     <div className={`absolute top-4 right-4 w-14 h-14 rounded-xl ${s.iconBg} shadow-xl flex items-center justify-center border-2 border-white z-10`}>
//                       <s.icon size={28} className={s.iconColor} />
//                     </div>
                    
//                     {/* Badges - Repositioned to bottom left to avoid overlap */}
//                     <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10">
//                       <div className={`px-4 py-2 rounded-full text-xs font-medium text-white bg-black/70 backdrop-blur-sm border border-white/30 shadow-lg`}>
//                         {s.colorMeaning}
//                       </div>
//                       <div className="px-4 py-2 rounded-full text-xs font-medium text-white bg-primary/80 backdrop-blur-sm border border-white/30 shadow-lg">
//                         {s.stats}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content Section */}
//                   <div className={`p-8 lg:p-10 ${i % 2 !== 0 ? "lg:col-start-1" : ""}`}>
//                     {/* Title and description */}
//                     <div className="mb-6">
//                       <h3 className="text-2xl lg:text-3xl font-bold mb-3">
//                         {s.title}
//                       </h3>
//                       <p className="text-muted-foreground leading-relaxed">
//                         {s.shortDesc}
//                       </p>
//                     </div>

//                     {/* Features grid */}
//                     <div className="grid sm:grid-cols-2 gap-4 mb-8">
//                       {s.features.map((f, idx) => (
//                         <div
//                           key={f}
//                           className="flex items-center gap-3 text-sm group/feature"
//                         >
//                           <div className={`w-6 h-6 rounded-full ${s.lightColor} flex items-center justify-center group-hover/feature:scale-110 transition-transform`}>
//                             <CheckCircle size={14} className={s.iconColor} />
//                           </div>
//                           <span className="font-medium text-gray-700">{f}</span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* CTA and trust indicator */}
//                     <div className="flex items-center justify-between flex-wrap gap-4">
//                       <button 
//                         onClick={scrollToContactForm}
//                         className={`group relative overflow-hidden bg-gradient-to-r ${s.color} text-white border-0 hover:shadow-xl transition-all duration-300 px-8 py-6 text-base font-semibold rounded-lg cursor-pointer`}
//                       >
//                         <span className="relative z-10 flex items-center">
//                           Get a Quote
//                           <ArrowRight
//                             size={18}
//                             className="ml-2 group-hover:translate-x-1 transition-transform"
//                           />
//                         </span>
//                         <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
//                       </button>
                      
//                       <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
//                         <Lock size={14} className="text-gray-400" />
//                         <span>SLA guaranteed</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SectionWrapper>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-20 text-center">
//           <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/5 border border-primary/10">
//             <Globe size={18} className="text-primary" />
//             <span className="text-sm font-medium">All services include 24/7 support and enterprise-grade security</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Network, Shield, Server, Cpu, CheckCircle, ArrowRight, Zap, Globe, Lock, Database, Cloud, Wifi, Phone, Eye, Fingerprint, Video, Ruler, HardDrive, Thermometer, Activity, FileText, TrendingUp, Headphones } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import dataInfraImage from '../../assets/Servicesimages/DataInfraimg.jpeg';
import dataSecurityImage from '../../assets/Servicesimages/DataSecurityImage.webp';
import physicalSecurityImage from '../../assets/Servicesimages/PhysicalSecurity.png';
import dataCablingImage from '../../assets/Servicesimages/datacabling.jpg';
import aiImage from '../../assets/Servicesimages/AIimg.jpeg';
import aiservice from '../../assets/Servicesimages/AI Image1.png';


const services = [
  {
  icon: Database,
  title: "Data Infra Services",
  shortDesc: "Comprehensive Data Infrastructure Solutions For Modern Enterprises, From VDI To High-Speed Networking.",
  longDesc: "End-To-End Data Infrastructure Services Including Virtualization, Data Center Solutions, High-Speed Networking, And Enterprise Software.",
  color: "from-blue-600 to-cyan-500",
  lightColor: "bg-blue-50",
  iconBg: "bg-blue-100",
  iconColor: "text-blue-600",
  borderColor: "border-blue-200",
  image: dataInfraImage,
  colorMeaning: "Built On Reliability & Scale",
  features: [
    "VDI",
    "On Prem / Cloud / Hybrid Data Centre",
    "Cloud & Data Centre Migration",
    "Server & Storage",
    "Network & Data Centre Switches 1G-800G",
    "Wireless Access Point - Indoor & Outdoor",
    "IP Phones",
    "Software - Microsoft",
  ],
  stats: "1G To 800G Scale",
},
  {
  icon: Shield,
  title: "Data Security Services",
  shortDesc: "Comprehensive Security Frameworks To Protect Your Digital Assets From Endpoint To Cloud.",
  longDesc: "Multi-Layered Security Solutions Including Network Infrastructure, Firewall, SIEM, SOC, Endpoint Security, DLP, VAPT, Cloud Security, And Backup Recovery.",
  color: "from-fuchsia-600 to-pink-500",
  lightColor: "bg-fuchsia-50",
  iconBg: "bg-fuchsia-100",
  iconColor: "text-fuchsia-600",
  borderColor: "border-fuchsia-200",
  image: dataSecurityImage,
  colorMeaning: "Driven By Security Excellence",
  features: [
    "Network Infrastructure",
    "Firewall & Perimeter Security",
    "Security Visibility – SIEM",
    "SOC – Security Operations Centre",
    "Endpoint Security – EDR / XDR",
    "Data Security – DLP",
    "VAPT – Security Testing",
    "Cloud & Identity Security",
    "Backup & Disaster Recovery",
  ],
  stats: "24/7 Security Operations",
},
 {
  icon: Fingerprint,
  title: "Data Physical Security Services",
  shortDesc: "Complete Physical Security And Access Management Solutions For Enterprise Facilities.",
  longDesc: "Integrated Physical Security Systems Including Time & Attendance, Identity Management, Visitor Management, Surveillance, And Facility Control Systems.",
  color: "from-emerald-600 to-teal-500",
  lightColor: "bg-emerald-50",
  iconBg: "bg-emerald-100",
  iconColor: "text-emerald-600",
  borderColor: "border-emerald-200",
  image: physicalSecurityImage,
  colorMeaning: "Rooted In Protection",
  features: [
    "Time And Attendance Management System",
    "Identity And Security Management",
    "Visitor Management",
    "Contract And Labour Management",
    "Canteen Management",
    "Parking Management",
    "Meeting Rooms Management",
    "Guard Tour Management",
    "Surveillance & Public Address System",
  ],
  stats: "Complete Facility Control",
},
 {
  icon: Ruler,
  title: "Data Cabling Services",
  shortDesc: "Enterprise-Grade Structured Cabling Solutions For Maximum Performance And Future Scalability.",
  longDesc: "Complete Cabling Infrastructure Including Structured Cabling, High-Speed Network Roadmaps, Smart Cabinets, Containment Solutions, And High-Density Fiber.",
  color: "from-violet-600 to-purple-500",
  lightColor: "bg-violet-50",
  iconBg: "bg-violet-100",
  iconColor: "text-violet-600",
  borderColor: "border-violet-200",
  image: dataCablingImage,
  colorMeaning: "Anchored In Performance",
  features: [
    "Structured Cabling Solutions (Cat6/Cat6A/Cat7/FTP/STP)",
    "Network Roadmap From 100G/400G/800G/1.6T & Beyond",
    "Smart Cabinets/Server & Network Cabinets/4&2 Post Racks",
    "Hot & Cold Aisle Containment",
    "Liquid Cooling & Liquid Immerse Solutions",
    "Intelligent PDU & KVMs Power Monitoring (Rack PDU/Socket)",
    "High Density Fiber - MPO/SN/MTP",
    "Others (Labelling/Cable Basket/Fiber Pathway/Raceway)",
  ],
  stats: "100G To 1.6T Ready",
},
 {
  icon: HardDrive,
  title: "AI Hardware Infrastructure Services",
  shortDesc: "Cutting-Edge AI-Ready Infrastructure For Hyperscale Computing And Operations.",
  longDesc: "Enterprise AI Infrastructure Including Hyperscale Data Centres, SOC/NOC Setup, High-Speed Networking, Intelligent Power Monitoring, And Remote Management Solutions.",
  color: "from-orange-600 to-red-500",
  lightColor: "bg-orange-50",
  iconBg: "bg-orange-100",
  iconColor: "text-orange-600",
  borderColor: "border-orange-200",
  image: aiImage,
  colorMeaning: "Built For AI Scale",
  features: [
    "Hyper Scale Data Centre",
    "Security Operation Centre",
    "Authorised Access To Premises/Cabinets",
    "MPO/SN Solutions For 100G/400G/800G",
    "100G-400G Network Setup",
    "Security For On Prem & Cloud Data Centre",
    "Intelligent PDU For Power Monitoring Of Cabinets & Devices",
    "Network Operation Centre",
    "KVM For Remote Management",
    "Rare Door Heat Exchangers, Direct To Chip Cooling & Immersion Cooling"
  ],
  stats: "AI-Optimized Infrastructure",
},
 {
  icon: TrendingUp,
  title: "AI Services",
  shortDesc: "Intelligent AI Solutions That Transform Operations, Customer Experience, And Decision-Making.",
  longDesc: "Advanced AI Services Including Manufacturing Analytics, Customer Service Intelligence, Document Processing, Procurement Analysis, And Product Engagement Optimization.",
  color: "from-cyan-600 to-blue-500",
  lightColor: "bg-cyan-50",
  iconBg: "bg-cyan-100",
  iconColor: "text-cyan-600",
  borderColor: "border-cyan-200",
  image: aiservice,
  colorMeaning: "Driven By Intelligence",
  features: [
    "Manufacturing Process Performance Analytics, Alert Analytics, Shopfloor Productivity",
    "Customer Service Analysis, Live Agent Assist For Contact Centres",
    "Intelligent Document Processing On Forms Data",
    "Procure To Pay Analysis, Supplier 360 Degree Analysis",
    "Product Engagement And Opportunity Analysis",
  ],
  stats: "AI-Powered Insights",
},
];

export default function Servicecards() {
  const navigate = useNavigate();

  const scrollToContactForm = () => {
    navigate('/contact');
    setTimeout(() => {
      const contactFormElement = document.getElementById('contact-form');
      if (contactFormElement) {
        contactFormElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap size={16} />
            <span>Enterprise IT Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
              Our IT Services
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive Infrastructure, Security, And AI Solutions For Modern Enterprises
          </p>
        </div>

        {/* Services */}
        <div className="space-y-8 lg:space-y-12">
          {services.map((s, i) => (
            <SectionWrapper key={s.title} delay={i * 100}>
              <div className="group relative rounded-2xl border bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />

                <div
                  className={`grid lg:grid-cols-2 ${
                    i % 2 !== 0 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image Section - Equal height with content */}
                  <div
                    className={`relative lg:h-auto min-h-[400px] overflow-hidden ${
                      i % 2 !== 0 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full absolute inset-0 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient overlay */}
                    {/* <div className={`absolute inset-0 bg-gradient-to-t ${s.color} mix-blend-multiply opacity-40`} /> */}
                    
                    {/* Icon - Now clearly visible with white background and shadow */}
                    <div className={`absolute top-4 right-4 w-14 h-14 rounded-xl ${s.iconBg} shadow-xl flex items-center justify-center border-2 border-white z-10`}>
                      <s.icon size={28} className={s.iconColor} />
                    </div>
                    
                    {/* Badges - Repositioned to bottom left to avoid overlap */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10">
                      <div className={`px-4 py-2 rounded-full text-xs font-medium text-white bg-black/70 backdrop-blur-sm border border-white/30 shadow-lg`}>
                        {s.colorMeaning}
                      </div>
                      <div className="px-4 py-2 rounded-full text-xs font-medium text-white bg-primary/80 backdrop-blur-sm border border-white/30 shadow-lg">
                        {s.stats}
                      </div>
                    </div>
                  </div>

                  {/* Content Section - Equal height with image */}
                  <div className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 !== 0 ? "lg:col-start-1" : ""}`}>
                    {/* Title and description */}
                    <div className="mb-6">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                        {s.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {s.shortDesc}
                      </p>
                    </div>

                    {/* Features grid - All content preserved */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {s.features.map((f, idx) => (
                        <div
                          key={f}
                          className="flex items-center gap-3 text-sm group/feature"
                        >
                          <div className={`w-6 h-6 rounded-full ${s.lightColor} flex items-center justify-center group-hover/feature:scale-110 transition-transform`}>
                            <CheckCircle size={14} className={s.iconColor} />
                          </div>
                          <span className="font-medium text-gray-700">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Note: Get a Quote button and SLA guaranteed have been removed as requested */}
                  </div>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/5 border border-primary/10">
            <Globe size={18} className="text-primary" />
            <span className="text-sm font-medium">All Services Include 24/7 Support And Enterprise-Grade Security</span>
          </div>
        </div>
      </div>
    </section>
  );
}