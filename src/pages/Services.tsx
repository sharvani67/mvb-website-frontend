// import { Network, Shield, Server, Cpu, CheckCircle, ArrowRight, Zap, Clock, Award, HeartHandshake, Star, Globe } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import SectionWrapper from '@/components/SectionWrapper';
// import NetworkBackground from '@/components/NetworkBackground';
// import dataCablingImg from '@/assets/data-cabling.jpg';
// import dataSecurityImg from '@/assets/data-security.jpg';
// import itDeploymentImg from '@/assets/it-deployment.jpg';
// import strategicCoreImg from '@/assets/strategic-core.jpg';

// const services = [
//   {
//     icon: Network,
//     title: 'Data Cabling Infrastructure',
//     desc: 'Enterprise-grade structured cabling solutions designed for maximum performance, scalability, and reliability.',
//     longDesc: 'Our data cabling solutions provide the physical backbone for your entire digital infrastructure. We design and implement structured cabling systems that support current bandwidth demands while scaling seamlessly for future growth.',
//     color: 'blue' as const,
//     image: dataCablingImg,
//     colorMeaning: 'Built on Trust & Dependability',
//     features: ['Cat6A/Cat7 Structured Cabling', 'Fiber Optic Solutions', 'Network Rack & Cabinet Setup', 'Cable Management & Labeling', 'Performance Testing & Certification', 'Future-Proof Design'],
//   },
//   {
//     icon: Shield,
//     title: 'Data Security Solutions',
//     desc: 'Comprehensive security frameworks and solutions to protect your most critical digital assets and infrastructure.',
//     longDesc: 'In an era of increasing cyber threats, our security solutions provide multi-layered protection for your data and infrastructure. We implement defense-in-depth strategies tailored to your risk profile.',
//     color: 'magenta' as const,
//     image: dataSecurityImg,
//     colorMeaning: 'Driven by Passion & Innovation',
//     features: ['Network Security Architecture', 'Firewall & Intrusion Detection', 'Data Encryption Solutions', 'Security Audits & Compliance', 'Incident Response Planning', 'Zero Trust Implementation'],
//   },
//   {
//     icon: Server,
//     title: 'End-to-End IT Deployment',
//     desc: 'Full lifecycle IT infrastructure deployment from strategic planning through execution and ongoing support.',
//     longDesc: 'From initial assessment to post-deployment support, we manage every phase of your IT infrastructure deployment. Our proven methodology ensures on-time, on-budget delivery with minimal disruption.',
//     color: 'green' as const,
//     image: itDeploymentImg,
//     colorMeaning: 'Rooted in Growth & Nature',
//     features: ['Infrastructure Assessment', 'Solution Design & Architecture', 'Hardware Procurement', 'Installation & Configuration', 'Post-Deployment Support', 'Performance Optimization'],
//   },
//   {
//     icon: Cpu,
//     title: 'Strategic IT Core Development',
//     desc: 'Building the technological backbone that drives business transformation and competitive advantage.',
//     longDesc: 'We help organizations develop their IT core — the central infrastructure that powers all digital operations. Our strategic approach ensures your technology investments drive real business outcomes.',
//     color: 'blue' as const,
//     image: strategicCoreImg,
//     colorMeaning: 'Anchored in Loyalty & Security',
//     features: ['IT Strategy Consulting', 'Core Infrastructure Design', 'Cloud & Hybrid Solutions', 'Technology Roadmapping', 'Digital Transformation Support', 'Capacity Planning'],
//   },
// ];

// const processSteps = [
//   { step: '01', title: 'Assess', desc: 'We evaluate your current infrastructure and identify gaps and opportunities.', color: 'blue' as const },
//   { step: '02', title: 'Design', desc: 'Our architects create tailored blueprints for your ideal infrastructure.', color: 'magenta' as const },
//   { step: '03', title: 'Implement', desc: 'Expert engineers deploy solutions with precision and minimal disruption.', color: 'green' as const },
//   { step: '04', title: 'Optimize', desc: 'Continuous monitoring and optimization ensure peak performance.', color: 'blue' as const },
// ];

// const industries = [
//   { name: 'Financial Services', icon: '🏦' },
//   { name: 'Healthcare', icon: '🏥' },
//   { name: 'Government', icon: '🏛️' },
//   { name: 'Education', icon: '🎓' },
//   { name: 'Manufacturing', icon: '🏭' },
//   { name: 'Technology', icon: '💻' },
//   { name: 'Retail', icon: '🏪' },
//   { name: 'Energy', icon: '⚡' },
// ];

// const bgMap = { blue: 'bg-mv-blue/10', magenta: 'bg-mv-magenta/10', green: 'bg-mv-green/10' };
// const textMap = { blue: 'text-mv-blue', magenta: 'text-mv-magenta', green: 'text-mv-green' };
// const borderMap = { blue: 'border-mv-blue/20', magenta: 'border-mv-magenta/20', green: 'border-mv-green/20' };
// const glowMap = { blue: 'hover:glow-blue', magenta: 'hover:glow-magenta', green: 'hover:glow-green' };

// export default function Services() {
//   return (
//     <>
//       {/* Hero */}
//       <section className="relative py-32 overflow-hidden">
//         <NetworkBackground />
//         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-mv-magenta/10 blur-[100px] animate-mesh-float" />
//         <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-mv-blue/10 blur-[100px] animate-mesh-float" style={{ animationDelay: '5s' }} />
//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <SectionWrapper>
//             <div className="max-w-4xl">
//               <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-6 block">Our Services</span>
//               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-[0.95]">
//                 Comprehensive <span className="gradient-text-animate">IT Solutions</span>
//               </h1>
//               <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
//                 From data cabling to security — powered by <span className="text-mv-blue font-semibold">Trust</span>, <span className="text-mv-magenta font-semibold">Creativity</span>, and <span className="text-mv-green font-semibold">Growth</span>.
//               </p>
//             </div>
//           </SectionWrapper>
//         </div>
//       </section>

//       {/* Services Grid with Images */}
//       <section className="py-28">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="space-y-12">
//             {services.map((s, i) => (
//               <SectionWrapper key={s.title} delay={i * 100}>
//                 <div className={`rounded-2xl glass-premium gradient-border ${glowMap[s.color]} transition-all duration-300 overflow-hidden`}>
//                   <div className={`grid lg:grid-cols-2 ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
//                     {/* Image */}
//                     <div className={`relative h-64 lg:h-auto min-h-[320px] overflow-hidden ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
//                       <img src={s.image} alt={s.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
//                       <div className={`absolute inset-0 bg-gradient-to-${i % 2 !== 0 ? 'l' : 'r'} from-transparent to-card/30`} />
//                       <div className={`absolute bottom-4 left-4 px-3 py-1.5 rounded-full ${bgMap[s.color]} backdrop-blur-sm text-xs font-semibold ${textMap[s.color]}`}>
//                         {s.colorMeaning}
//                       </div>
//                     </div>
//                     {/* Content */}
//                     <div className="p-10">
//                       <div className={`w-16 h-16 rounded-2xl ${bgMap[s.color]} border ${borderMap[s.color]} flex items-center justify-center mb-6`}>
//                         <s.icon size={32} className={textMap[s.color]} />
//                       </div>
//                       <h3 className="text-2xl font-black text-foreground mb-4">{s.title}</h3>
//                       <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
//                       <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.longDesc}</p>
//                       <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Key Features</h4>
//                       <div className="grid sm:grid-cols-2 gap-2 mb-6">
//                         {s.features.map(f => (
//                           <div key={f} className={`flex items-center gap-2 text-sm text-foreground p-2.5 rounded-xl ${bgMap[s.color]}`}>
//                             <CheckCircle size={14} className={`${textMap[s.color]} flex-shrink-0`} />
//                             <span>{f}</span>
//                           </div>
//                         ))}
//                       </div>
//                       <Link to="/contact">
//                         <Button variant="outline" className={`magnetic-btn border-primary/30 group`}>
//                           Get a Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//                         </Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process */}
//       <section className="py-28 bg-muted/30 relative overflow-hidden">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-20">
//               <span className="text-xs uppercase tracking-widest text-mv-green font-semibold mb-4 block">Process</span>
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">How We Deliver</h2>
//               <p className="text-muted-foreground max-w-lg mx-auto">A structured, proven process that ensures exceptional outcomes</p>
//             </div>
//           </SectionWrapper>
//           <div className="grid md:grid-cols-4 gap-6 relative">
//             <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
//             {processSteps.map((item, i) => (
//               <SectionWrapper key={item.step} delay={i * 150}>
//                 <div className="text-center relative">
//                   <div className={`w-28 h-28 rounded-2xl ${bgMap[item.color]} border-2 ${borderMap[item.color]} flex items-center justify-center mx-auto mb-8 relative z-10 shadow-lg premium-card`}>
//                     <span className={`text-3xl font-black ${textMap[item.color]}`}>{item.step}</span>
//                   </div>
//                   <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
//                   <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries */}
//       <section className="py-28 relative overflow-hidden">
//         <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-mv-blue/5 blur-[100px]" />
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-16">
//               <span className="text-xs uppercase tracking-widest text-mv-blue font-semibold mb-4 block">Industries</span>
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Industries We Serve</h2>
//               <p className="text-muted-foreground max-w-lg mx-auto">Trusted by organizations across diverse sectors</p>
//             </div>
//           </SectionWrapper>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {industries.map((industry, i) => (
//               <SectionWrapper key={industry.name} delay={i * 60}>
//                 <div className="p-6 rounded-2xl glass-premium premium-card text-center gradient-border">
//                   <div className="text-3xl mb-3">{industry.icon}</div>
//                   <span className="text-sm font-semibold text-foreground">{industry.name}</span>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Service Promise */}
//       <section className="py-28 bg-muted/30">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//               <div>
//                 <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-4 block">Our Promise</span>
//                 <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">The MV Service Promise</h2>
//                 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
//                   When you partner with MV Branding Strategy, you're gaining a dedicated infrastructure partner committed to your success.
//                 </p>
//                 <div className="space-y-4">
//                   {[
//                     { icon: Clock, text: 'On-time delivery, every time', color: 'blue' as const },
//                     { icon: Award, text: 'Industry-leading quality standards', color: 'magenta' as const },
//                     { icon: HeartHandshake, text: 'Transparent pricing, no hidden costs', color: 'green' as const },
//                     { icon: Zap, text: 'Rapid response and resolution times', color: 'blue' as const },
//                   ].map(item => (
//                     <div key={item.text} className="flex items-center gap-4">
//                       <div className={`w-10 h-10 rounded-xl ${bgMap[item.color]} flex items-center justify-center flex-shrink-0`}>
//                         <item.icon size={18} className={textMap[item.color]} />
//                       </div>
//                       <span className="text-foreground font-medium">{item.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="relative">
//                 <div className="aspect-square rounded-3xl gradient-brand p-1">
//                   <div className="w-full h-full rounded-[calc(1.5rem-4px)] bg-background flex items-center justify-center">
//                     <div className="text-center p-8">
//                       <div className="text-7xl font-black gradient-text-animate mb-4">100%</div>
//                       <div className="text-xl font-bold text-foreground mb-2">Commitment</div>
//                       <div className="text-sm text-muted-foreground">To your infrastructure success</div>
//                       <div className="flex justify-center gap-2 mt-6">
//                         <div className="w-3 h-3 rounded-full bg-mv-blue" />
//                         <div className="w-3 h-3 rounded-full bg-mv-magenta" />
//                         <div className="w-3 h-3 rounded-full bg-mv-green" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SectionWrapper>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-28">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="rounded-3xl gradient-brand p-16 md:p-24 text-center relative overflow-hidden">
//               <div className="absolute inset-0 bg-black/20" />
//               <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white/10 animate-spin-slow" />
//               <div className="relative z-10">
//                 <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Need a Custom Solution?</h2>
//                 <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
//                   Let's discuss how we can tailor our services to your specific infrastructure needs.
//                 </p>
//                 <Link to="/contact">
//                   <Button size="lg" className="magnetic-btn bg-white text-foreground hover:bg-white/90 font-bold h-14 px-10">
//                     Get a Custom Quote <ArrowRight size={18} />
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </SectionWrapper>
//         </div>
//       </section>
//     </>
//   );
// }




// import { Network, Shield, Server, Cpu, CheckCircle, ArrowRight, Zap, Clock, Award, HeartHandshake, Star, Globe } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import SectionWrapper from '@/components/SectionWrapper';
// import NetworkBackground from '@/components/NetworkBackground';
// import dataCablingImg from '@/assets/data-cabling.jpg';
// import dataSecurityImg from '@/assets/data-security.jpg';
// import itDeploymentImg from '@/assets/it-deployment.jpg';
// import strategicCoreImg from '@/assets/strategic-core.jpg';
// import Servicecards from '@/components/ServicesCompo/Servicecards';
// import Process from '@/components/ServicesCompo/Process';
// import ServicePromise from '@/components/ServicesCompo/ServicePromise';

// const services = [
//   {
//     icon: Network,
//     title: 'Data Cabling Infrastructure',
//     desc: 'Enterprise-grade structured cabling solutions designed for maximum performance, scalability, and reliability.',
//     longDesc: 'Our data cabling solutions provide the physical backbone for your entire digital infrastructure. We design and implement structured cabling systems that support current bandwidth demands while scaling seamlessly for future growth.',
//     color: 'blue' as const,
//     image: dataCablingImg,
//     colorMeaning: 'Built on Trust & Dependability',
//     features: ['Cat6A/Cat7 Structured Cabling', 'Fiber Optic Solutions', 'Network Rack & Cabinet Setup', 'Cable Management & Labeling', 'Performance Testing & Certification', 'Future-Proof Design'],
//   },
//   {
//     icon: Shield,
//     title: 'Data Security Solutions',
//     desc: 'Comprehensive security frameworks and solutions to protect your most critical digital assets and infrastructure.',
//     longDesc: 'In an era of increasing cyber threats, our security solutions provide multi-layered protection for your data and infrastructure. We implement defense-in-depth strategies tailored to your risk profile.',
//     color: 'magenta' as const,
//     image: dataSecurityImg,
//     colorMeaning: 'Driven by Passion & Innovation',
//     features: ['Network Security Architecture', 'Firewall & Intrusion Detection', 'Data Encryption Solutions', 'Security Audits & Compliance', 'Incident Response Planning', 'Zero Trust Implementation'],
//   },
//   {
//     icon: Server,
//     title: 'End-to-End IT Deployment',
//     desc: 'Full lifecycle IT infrastructure deployment from strategic planning through execution and ongoing support.',
//     longDesc: 'From initial assessment to post-deployment support, we manage every phase of your IT infrastructure deployment. Our proven methodology ensures on-time, on-budget delivery with minimal disruption.',
//     color: 'green' as const,
//     image: itDeploymentImg,
//     colorMeaning: 'Rooted in Growth & Nature',
//     features: ['Infrastructure Assessment', 'Solution Design & Architecture', 'Hardware Procurement', 'Installation & Configuration', 'Post-Deployment Support', 'Performance Optimization'],
//   },
//   {
//     icon: Cpu,
//     title: 'Strategic IT Core Development',
//     desc: 'Building the technological backbone that drives business transformation and competitive advantage.',
//     longDesc: 'We help organizations develop their IT core — the central infrastructure that powers all digital operations. Our strategic approach ensures your technology investments drive real business outcomes.',
//     color: 'blue' as const,
//     image: strategicCoreImg,
//     colorMeaning: 'Anchored in Loyalty & Security',
//     features: ['IT Strategy Consulting', 'Core Infrastructure Design', 'Cloud & Hybrid Solutions', 'Technology Roadmapping', 'Digital Transformation Support', 'Capacity Planning'],
//   },
// ];

// const processSteps = [
//   { step: '01', title: 'Assess', desc: 'We evaluate your current infrastructure and identify gaps and opportunities.', color: 'blue' as const },
//   { step: '02', title: 'Design', desc: 'Our architects create tailored blueprints for your ideal infrastructure.', color: 'magenta' as const },
//   { step: '03', title: 'Implement', desc: 'Expert engineers deploy solutions with precision and minimal disruption.', color: 'green' as const },
//   { step: '04', title: 'Optimize', desc: 'Continuous monitoring and optimization ensure peak performance.', color: 'blue' as const },
// ];

// const industries = [
//   { name: 'Financial Services', icon: '🏦' },
//   { name: 'Healthcare', icon: '🏥' },
//   { name: 'Government', icon: '🏛️' },
//   { name: 'Education', icon: '🎓' },
//   { name: 'Manufacturing', icon: '🏭' },
//   { name: 'Technology', icon: '💻' },
//   { name: 'Retail', icon: '🏪' },
//   { name: 'Energy', icon: '⚡' },
// ];

// const bgMap = { blue: 'bg-mv-blue/10', magenta: 'bg-mv-magenta/10', green: 'bg-mv-green/10' };
// const textMap = { blue: 'text-mv-blue', magenta: 'text-mv-magenta', green: 'text-mv-green' };
// const borderMap = { blue: 'border-mv-blue/20', magenta: 'border-mv-magenta/20', green: 'border-mv-green/20' };
// const glowMap = { blue: 'hover:glow-blue', magenta: 'hover:glow-magenta', green: 'hover:glow-green' };

// export default function Services() {
//   return (
//     <>
//       {/* Hero */}
//       {/* <section className="relative py-32 overflow-hidden">
//         <NetworkBackground />
//         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-mv-magenta/10 blur-[100px] animate-mesh-float" />
//         <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-mv-blue/10 blur-[100px] animate-mesh-float" style={{ animationDelay: '5s' }} />
//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <SectionWrapper>
//             <div className="max-w-4xl">
//               <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-6 block">Our Services</span>
//               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-[0.95]">
//                 Comprehensive <span className="gradient-text-animate">IT Solutions</span>
//               </h1>
//               <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
//                 From data cabling to security — powered by <span className="text-mv-blue font-semibold">Trust</span>, <span className="text-mv-magenta font-semibold">Creativity</span>, and <span className="text-mv-green font-semibold">Growth</span>.
//               </p>
//             </div>
//           </SectionWrapper>
//         </div>
//       </section> */}

//       {/* <section className="relative py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
//   style={{ backgroundImage: "url('https://i.pinimg.com/736x/cb/68/93/cb6893e231c847009dc8569dbc1f2b42.jpg')" }}
// >
 
//   <div className="absolute inset-0 bg-black/60"></div>

//   <NetworkBackground />

//   <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-mv-magenta/10 blur-[100px] animate-mesh-float" />
//   <div
//     className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-mv-blue/10 blur-[100px] animate-mesh-float"
//     style={{ animationDelay: "5s" }}
//   />

//   <div className="container mx-auto px-4 lg:px-8 relative z-10">
//     <SectionWrapper>
//       <div className="max-w-4xl">
//         <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-6 block">
//           Our Services
//         </span>

//         <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-[0.95]">
//           Comprehensive{" "}
//           <span className="gradient-text-animate">IT Solutions</span>
//         </h1>

//         <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
//           From data cabling to security — powered by{" "}
//           <span className="text-mv-blue font-semibold">Trust</span>,{" "}
//           <span className="text-mv-magenta font-semibold">Creativity</span>, and{" "}
//           <span className="text-mv-green font-semibold">Growth</span>.
//         </p>
//       </div>
//     </SectionWrapper>
//   </div>
//     </section> */}

// <section
//   className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat mt-4"
//   style={{
//     backgroundImage:
//       "url('https://i.pinimg.com/736x/cb/68/93/cb6893e231c847009dc8569dbc1f2b42.jpg')",
//   }}
// >
//   {/* Bright Gradient Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 via-yellow-400/70 to-blue-600/80"></div>

//   <NetworkBackground />

//   {/* Optional soft glow blobs */}
//   <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-[120px] animate-mesh-float" />
//   <div
//     className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[120px] animate-mesh-float"
//     style={{ animationDelay: "5s" }}
//   />

//   <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
//     <div className="max-w-4xl mx-auto">
//       {/* Badge */}
//       <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-white/20">
//         <span className="relative flex h-2 w-2">
//           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
//           <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
//         </span>
//         <span className="text-sm font-semibold text-white tracking-wide">
//           Since 2015
//         </span>
//       </div>

//       {/* Main Heading */}
//       <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1]">
//         Your Trusted
//         <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
//           IT Partner
//         </span>
//       </h1>

//       {/* Subheading */}
//       <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
//         Data Cabling • Security • Innovation
//       </p>

//       {/* CTA Buttons */}
//       <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//         <button
//           onClick={() => (window.location.href = "/contact")}
//           className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
//         >
//           <span className="relative z-10 flex items-center gap-2">
//             Get Started
//             <svg
//               className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M13 7l5 5m0 0l-5 5m5-5H6"
//               />
//             </svg>
//           </span>
//           <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//         </button>
        
//         <button
//           onClick={() => (window.location.href = "/oursolution")}
//           className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300"
//         >
//           Explore Solutions
//         </button>
//       </div>
//     </div>
//   </div>
// </section>

//       {/* Services Grid with Images */}
//       {/* <section className="py-28">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="space-y-12">
//             {services.map((s, i) => (
//               <SectionWrapper key={s.title} delay={i * 100}>
//                 <div className={`rounded-2xl glass-premium gradient-border ${glowMap[s.color]} transition-all duration-300 overflow-hidden`}>
//                   <div className={`grid lg:grid-cols-2 ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                   
//                     <div className={`relative h-64 lg:h-auto min-h-[320px] overflow-hidden ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
//                       <img src={s.image} alt={s.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
//                       <div className={`absolute inset-0 bg-gradient-to-${i % 2 !== 0 ? 'l' : 'r'} from-transparent to-card/30`} />
//                       <div className={`absolute bottom-4 left-4 px-3 py-1.5 rounded-full ${bgMap[s.color]} backdrop-blur-sm text-xs font-semibold ${textMap[s.color]}`}>
//                         {s.colorMeaning}
//                       </div>
//                     </div>
                  
//                     <div className="p-10">
//                       <div className={`w-16 h-16 rounded-2xl ${bgMap[s.color]} border ${borderMap[s.color]} flex items-center justify-center mb-6`}>
//                         <s.icon size={32} className={textMap[s.color]} />
//                       </div>
//                       <h3 className="text-2xl font-black text-foreground mb-4">{s.title}</h3>
//                       <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
//                       <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.longDesc}</p>
//                       <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Key Features</h4>
//                       <div className="grid sm:grid-cols-2 gap-2 mb-6">
//                         {s.features.map(f => (
//                           <div key={f} className={`flex items-center gap-2 text-sm text-foreground p-2.5 rounded-xl ${bgMap[s.color]}`}>
//                             <CheckCircle size={14} className={`${textMap[s.color]} flex-shrink-0`} />
//                             <span>{f}</span>
//                           </div>
//                         ))}
//                       </div>
//                       <Link to="/contact">
//                         <Button variant="outline" className={`magnetic-btn border-primary/30 group`}>
//                           Get a Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//                         </Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       < Servicecards />

//       {/* Process */}
//       {/* <section className="py-28 bg-muted/30 relative overflow-hidden">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-20">
//               <span className="text-xs uppercase tracking-widest text-mv-green font-semibold mb-4 block">Process</span>
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">How We Deliver</h2>
//               <p className="text-muted-foreground max-w-lg mx-auto">A structured, proven process that ensures exceptional outcomes</p>
//             </div>
//           </SectionWrapper>
//           <div className="grid md:grid-cols-4 gap-6 relative">
//             <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
//             {processSteps.map((item, i) => (
//               <SectionWrapper key={item.step} delay={i * 150}>
//                 <div className="text-center relative">
//                   <div className={`w-28 h-28 rounded-2xl ${bgMap[item.color]} border-2 ${borderMap[item.color]} flex items-center justify-center mx-auto mb-8 relative z-10 shadow-lg premium-card`}>
//                     <span className={`text-3xl font-black ${textMap[item.color]}`}>{item.step}</span>
//                   </div>
//                   <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
//                   <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* <Process /> */}

//       {/* Industries */}
//       {/* <section className="py-28 relative overflow-hidden">
//         <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-mv-blue/5 blur-[100px]" />
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-16">
//               <span className="text-xs uppercase tracking-widest text-mv-blue font-semibold mb-4 block">Industries</span>
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Industries We Serve</h2>
//               <p className="text-muted-foreground max-w-lg mx-auto">Trusted by organizations across diverse sectors</p>
//             </div>
//           </SectionWrapper>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {industries.map((industry, i) => (
//               <SectionWrapper key={industry.name} delay={i * 60}>
//                 <div className="p-6 rounded-2xl glass-premium premium-card text-center gradient-border">
//                   <div className="text-3xl mb-3">{industry.icon}</div>
//                   <span className="text-sm font-semibold text-foreground">{industry.name}</span>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       <section className="py-28 relative overflow-hidden bg-[#FFF9CC]">
//   {/* Background Glow */}
//   <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-[#FFD400]/30 blur-[120px]" />

//   <div className="container mx-auto px-4 lg:px-8">
//     <SectionWrapper>
//       <div className="text-center mb-16">
        
//         <span className="text-xs uppercase tracking-widest text-[#E6B800] font-semibold mb-4 block">
//           Industries
//         </span>

//         <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
//           Industries We Serve
//         </h2>

//         <p className="text-gray-600 max-w-lg mx-auto">
//           Trusted by organizations across diverse sectors
//         </p>

//       </div>
//     </SectionWrapper>

//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//       {industries.map((industry, i) => (
//         <SectionWrapper key={industry.name} delay={i * 60}>
          
//           <div className="
//             p-6 rounded-2xl text-center
//             bg-white/80 backdrop-blur-md
//             border border-[#FFD400]/40
//             shadow-md
//             hover:shadow-xl
//             hover:-translate-y-2
//             hover:bg-[#FFF9CC]
//             transition-all duration-300
//             group
//           ">
            
//             {/* Icon */}
//             <div className="
//               text-4xl mb-4
//               group-hover:scale-125
//               transition-transform duration-300
//             ">
//               {industry.icon}
//             </div>

//             {/* Title */}
//             <span className="
//               text-sm font-semibold text-gray-800
//               group-hover:text-[#CCAA00]
//               transition-colors
//             ">
//               {industry.name}
//             </span>

//           </div>

//         </SectionWrapper>
//       ))}
//     </div>
//   </div>
//   </section>

//       {/* Service Promise */}
//       {/* <section className="py-28 bg-muted/30">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//               <div>
//                 <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-4 block">Our Promise</span>
//                 <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">The MV Service Promise</h2>
//                 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
//                   When you partner with MV Branding Strategy, you're gaining a dedicated infrastructure partner committed to your success.
//                 </p>
//                 <div className="space-y-4">
//                   {[
//                     { icon: Clock, text: 'On-time delivery, every time', color: 'blue' as const },
//                     { icon: Award, text: 'Industry-leading quality standards', color: 'magenta' as const },
//                     { icon: HeartHandshake, text: 'Transparent pricing, no hidden costs', color: 'green' as const },
//                     { icon: Zap, text: 'Rapid response and resolution times', color: 'blue' as const },
//                   ].map(item => (
//                     <div key={item.text} className="flex items-center gap-4">
//                       <div className={`w-10 h-10 rounded-xl ${bgMap[item.color]} flex items-center justify-center flex-shrink-0`}>
//                         <item.icon size={18} className={textMap[item.color]} />
//                       </div>
//                       <span className="text-foreground font-medium">{item.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="relative">
//                 <div className="aspect-square rounded-3xl gradient-brand p-1">
//                   <div className="w-full h-full rounded-[calc(1.5rem-4px)] bg-background flex items-center justify-center">
//                     <div className="text-center p-8">
//                       <div className="text-7xl font-black gradient-text-animate mb-4">100%</div>
//                       <div className="text-xl font-bold text-foreground mb-2">Commitment</div>
//                       <div className="text-sm text-muted-foreground">To your infrastructure success</div>
//                       <div className="flex justify-center gap-2 mt-6">
//                         <div className="w-3 h-3 rounded-full bg-mv-blue" />
//                         <div className="w-3 h-3 rounded-full bg-mv-magenta" />
//                         <div className="w-3 h-3 rounded-full bg-mv-green" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SectionWrapper>
//         </div>
//       </section> */}

//       <ServicePromise />

//       {/* CTA */}
//       {/* <section className="py-28">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="rounded-3xl gradient-brand p-16 md:p-24 text-center relative overflow-hidden">
//               <div className="absolute inset-0 bg-black/20" />
//               <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white/10 animate-spin-slow" />
//               <div className="relative z-10">
//                 <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Need a Custom Solution?</h2>
//                 <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
//                   Let's discuss how we can tailor our services to your specific infrastructure needs.
//                 </p>
//                 <Link to="/contact">
//                   <Button size="lg" className="magnetic-btn bg-white text-foreground hover:bg-white/90 font-bold h-14 px-10">
//                     Get a Custom Quote <ArrowRight size={18} />
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </SectionWrapper>
//         </div>
//       </section> */}

//       <section className="py-28">
//   <div className="container mx-auto px-4 lg:px-8">
//     <SectionWrapper>
//       <div className="rounded-3xl p-16 md:p-24 text-center relative overflow-hidden 
//         bg-gradient-to-r 
//         from-[#E11D48] 
//         via-[#FACC15] 
//         to-[#2563EB]">

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/20" />

//         {/* Decorative Elements */}
//         <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white/10 animate-spin-slow" />
//         <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border border-white/10 animate-pulse" />

//         {/* Content */}
//         <div className="relative z-10">
//           <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
//             Need a Custom Solution?
//           </h2>

//           <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
//             Let's discuss how we can tailor our services to your specific infrastructure needs.
//           </p>

//           <Link to="/contact">
//             <Button 
//               size="lg" 
//               className="magnetic-btn bg-white text-black hover:bg-white/90 font-bold h-14 px-10 shadow-xl"
//             >
//               Get a Custom Quote <ArrowRight size={18} />
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </SectionWrapper>
//   </div>
// </section>
//     </>
//   );
// }





import { Network, Shield, Server, Cpu, CheckCircle, ArrowRight, Zap, Clock, Award, HeartHandshake, Star, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/SectionWrapper';
import NetworkBackground from '@/components/NetworkBackground';
import dataCablingImg from '@/assets/data-cabling.jpg';
import dataSecurityImg from '@/assets/data-security.jpg';
import itDeploymentImg from '@/assets/it-deployment.jpg';
import strategicCoreImg from '@/assets/strategic-core.jpg';
import Servicecards from '@/components/ServicesCompo/Servicecards';
import Process from '@/components/ServicesCompo/Process';
import ServicePromise from '@/components/ServicesCompo/ServicePromise';

const services = [
  {
    icon: Network,
    title: 'Data Cabling Infrastructure',
    desc: 'Enterprise-grade structured cabling solutions designed for maximum performance, scalability, and reliability.',
    longDesc: 'Our data cabling solutions provide the physical backbone for your entire digital infrastructure. We design and implement structured cabling systems that support current bandwidth demands while scaling seamlessly for future growth.',
    color: 'blue' as const,
    image: dataCablingImg,
    colorMeaning: 'Built on Trust & Dependability',
    features: ['Cat6A/Cat7 Structured Cabling', 'Fiber Optic Solutions', 'Network Rack & Cabinet Setup', 'Cable Management & Labeling', 'Performance Testing & Certification', 'Future-Proof Design'],
  },
  {
    icon: Shield,
    title: 'Data Security Solutions',
    desc: 'Comprehensive security frameworks and solutions to protect your most critical digital assets and infrastructure.',
    longDesc: 'In an era of increasing cyber threats, our security solutions provide multi-layered protection for your data and infrastructure. We implement defense-in-depth strategies tailored to your risk profile.',
    color: 'magenta' as const,
    image: dataSecurityImg,
    colorMeaning: 'Driven by Passion & Innovation',
    features: ['Network Security Architecture', 'Firewall & Intrusion Detection', 'Data Encryption Solutions', 'Security Audits & Compliance', 'Incident Response Planning', 'Zero Trust Implementation'],
  },
  {
    icon: Server,
    title: 'End-to-End IT Deployment',
    desc: 'Full lifecycle IT infrastructure deployment from strategic planning through execution and ongoing support.',
    longDesc: 'From initial assessment to post-deployment support, we manage every phase of your IT infrastructure deployment. Our proven methodology ensures on-time, on-budget delivery with minimal disruption.',
    color: 'green' as const,
    image: itDeploymentImg,
    colorMeaning: 'Rooted in Growth & Nature',
    features: ['Infrastructure Assessment', 'Solution Design & Architecture', 'Hardware Procurement', 'Installation & Configuration', 'Post-Deployment Support', 'Performance Optimization'],
  },
  {
    icon: Cpu,
    title: 'Strategic IT Core Development',
    desc: 'Building the technological backbone that drives business transformation and competitive advantage.',
    longDesc: 'We help organizations develop their IT core — the central infrastructure that powers all digital operations. Our strategic approach ensures your technology investments drive real business outcomes.',
    color: 'blue' as const,
    image: strategicCoreImg,
    colorMeaning: 'Anchored in Loyalty & Security',
    features: ['IT Strategy Consulting', 'Core Infrastructure Design', 'Cloud & Hybrid Solutions', 'Technology Roadmapping', 'Digital Transformation Support', 'Capacity Planning'],
  },
];

const processSteps = [
  { step: '01', title: 'Assess', desc: 'We evaluate your current infrastructure and identify gaps and opportunities.', color: 'blue' as const },
  { step: '02', title: 'Design', desc: 'Our architects create tailored blueprints for your ideal infrastructure.', color: 'magenta' as const },
  { step: '03', title: 'Implement', desc: 'Expert engineers deploy solutions with precision and minimal disruption.', color: 'green' as const },
  { step: '04', title: 'Optimize', desc: 'Continuous monitoring and optimization ensure peak performance.', color: 'blue' as const },
];

const industries = [
  { name: 'Financial Services', icon: '🏦' },
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Government', icon: '🏛️' },
  { name: 'Education', icon: '🎓' },
  { name: 'Manufacturing', icon: '🏭' },
  { name: 'Technology', icon: '💻' },
  { name: 'Retail', icon: '🏪' },
  { name: 'Energy', icon: '⚡' },
];

const bgMap = { blue: 'bg-mv-blue/10', magenta: 'bg-mv-magenta/10', green: 'bg-mv-green/10' };
const textMap = { blue: 'text-mv-blue', magenta: 'text-mv-magenta', green: 'text-mv-green' };
const borderMap = { blue: 'border-mv-blue/20', magenta: 'border-mv-magenta/20', green: 'border-mv-green/20' };
const glowMap = { blue: 'hover:glow-blue', magenta: 'hover:glow-magenta', green: 'hover:glow-green' };

export default function Services() {
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
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat mt-4"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/cb/68/93/cb6893e231c847009dc8569dbc1f2b42.jpg')",
        }}
      >
        {/* Bright Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 via-yellow-400/70 to-blue-600/80"></div>

        <NetworkBackground />

        {/* Optional soft glow blobs */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-[120px] animate-mesh-float" />
        <div
          className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[120px] animate-mesh-float"
          style={{ animationDelay: "5s" }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              <span className="text-sm font-semibold text-white tracking-wide">
                Since 2015
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1]">
             Your Trusted 
              <span className="block bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text text-transparent">
               IT Partner 
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-black/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Data Cabling - Data Physical Security - Data Security - Data Infra - Data AI
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContactForm}
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
              
              <button
                onClick={() => navigate('/oursolution')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Explore Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      <Servicecards />

      {/* Industries Section */}
      <section className="py-28 relative overflow-hidden bg-[#FFF9CC]">
        {/* Background Glow */}
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-[#FFD400]/30 blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-widest text-[#E6B800] font-semibold mb-4 block">
                Industries
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                Trusted by organizations across diverse sectors
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <SectionWrapper key={industry.name} delay={i * 60}>
                <div className="
                  p-6 rounded-2xl text-center
                  bg-white/80 backdrop-blur-md
                  border border-[#FFD400]/40
                  shadow-md
                  hover:shadow-xl
                  hover:-translate-y-2
                  hover:bg-[#FFF9CC]
                  transition-all duration-300
                  group
                ">
                  {/* Icon */}
                  <div className="
                    text-4xl mb-4
                    group-hover:scale-125
                    transition-transform duration-300
                  ">
                    {industry.icon}
                  </div>
                  {/* Title */}
                  <span className="
                    text-sm font-semibold text-gray-800
                    group-hover:text-[#CCAA00]
                    transition-colors
                  ">
                    {industry.name}
                  </span>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      <ServicePromise />

      {/* CTA Section */}
      <section className="py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionWrapper>
            <div className="rounded-3xl p-16 md:p-24 text-center relative overflow-hidden 
              bg-gradient-to-r 
              from-[#E11D48] 
              via-[#FACC15] 
              to-[#2563EB]">

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Decorative Elements */}
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white/10 animate-spin-slow" />
              <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border border-white/10 animate-pulse" />

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                  Need a Custom Solution?
                </h2>

                <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
                  Let's discuss how we can tailor our services to your specific infrastructure needs.
                </p>

                <button
                  onClick={scrollToContactForm}
                  className="magnetic-btn bg-white text-black hover:bg-white/90 font-bold h-14 px-10 shadow-xl rounded-lg cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  Get a Custom Quote <ArrowRight size={18} className="inline-block ml-2" />
                </button>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}