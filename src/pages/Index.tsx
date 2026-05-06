// import { Link } from 'react-router-dom';
// import { Shield, Network, Server, Cpu, Users, Award, Clock, ArrowRight, Heart, Lightbulb, Zap, Target, CheckCircle, Star, Globe, Lock, Rocket, ChevronRight, Play } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import NetworkBackground from '@/components/NetworkBackground';
// import SectionWrapper from '@/components/SectionWrapper';
// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
// import { useState } from 'react';
// import heroDatacenter from '@/assets/hero-datacenter.jpg';
// import heroVideo from '@/assets/hero-video.mp4';
// import dataCablingImg from '@/assets/data-cabling.jpg';
// import dataSecurityImg from '@/assets/data-security.jpg';
// import itDeploymentImg from '@/assets/it-deployment.jpg';
// import strategicCoreImg from '@/assets/strategic-core.jpg';
// import teamImg from '@/assets/team-collaboration.jpg';

// const services = [
//   { icon: Network, title: 'Data Cabling Infrastructure', desc: 'Enterprise-grade structured cabling designed for performance and scalability.', color: 'blue' as const, image: dataCablingImg },
//   { icon: Shield, title: 'Data Security Solutions', desc: 'Comprehensive security frameworks protecting your most critical digital assets.', color: 'magenta' as const, image: dataSecurityImg },
//   { icon: Server, title: 'End-to-End IT Deployment', desc: 'Full lifecycle infrastructure deployment from planning to execution.', color: 'green' as const, image: itDeploymentImg },
//   { icon: Cpu, title: 'Strategic IT Core Development', desc: 'Building the technological backbone that drives transformation.', color: 'blue' as const, image: strategicCoreImg },
// ];

// const values = [
//   { icon: Heart, label: 'Customer Centricity' },
//   { icon: Shield, label: 'Peace of Mind' },
//   { icon: Lightbulb, label: 'Innovation' },
//   { icon: Zap, label: 'Future Ready' },
//   { icon: Target, label: 'Result Oriented' },
//   { icon: Users, label: 'Accountability' },
// ];

// const whyChooseUs = [
//   { icon: Star, title: 'Premium Quality', desc: 'Enterprise-grade products and solutions — nothing less.', color: 'blue' as const },
//   { icon: Globe, title: 'Global Standards', desc: 'International compliance and security standards met.', color: 'magenta' as const },
//   { icon: Lock, title: 'End-to-End Security', desc: 'Security built into every infrastructure layer.', color: 'green' as const },
//   { icon: Rocket, title: 'Future-Proof', desc: 'Solutions that scale and adapt to evolving needs.', color: 'blue' as const },
//   { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock dedicated enterprise support.', color: 'magenta' as const },
//   { icon: Award, title: 'Certified Experts', desc: 'Leading industry certifications and credentials.', color: 'green' as const },
// ];

// const trustedBy = ['Fortune 500 Enterprises', 'Government Agencies', 'Healthcare Systems', 'Financial Institutions', 'Tech Startups', 'Educational Institutions'];

// const testimonials = [
//   { name: 'Sarah Mitchell', role: 'CTO, TechCorp Inc.', quote: 'MV Branding Strategy transformed our entire IT infrastructure. Their attention to security and scalability is unmatched.', rating: 5 },
//   { name: 'David Chen', role: 'VP Engineering, DataFlow', quote: 'The team delivered our data cabling project ahead of schedule with exceptional quality. Truly enterprise-grade.', rating: 5 },
//   { name: 'Amira Hassan', role: 'CISO, SecureBank', quote: 'Their security-first approach gave us complete peace of mind. We couldn\'t ask for a better infrastructure partner.', rating: 5 },
// ];

// const iconBgMap = { blue: 'bg-mv-blue/10', magenta: 'bg-mv-magenta/10', green: 'bg-mv-green/10' };
// const iconTextMap = { blue: 'text-mv-blue', magenta: 'text-mv-magenta', green: 'text-mv-green' };
// const glowMap = { blue: 'hover:glow-blue', magenta: 'hover:glow-magenta', green: 'hover:glow-green' };
// const borderColorMap = { blue: 'border-mv-blue/20', magenta: 'border-mv-magenta/20', green: 'border-mv-green/20' };

// function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
//   const { ref, isVisible } = useScrollAnimation();
//   const count = useAnimatedCounter(target, isVisible);
//   return (
//     <div ref={ref} className="text-center group">
//       <div className="text-5xl md:text-6xl font-black gradient-text-animate tracking-tight">{count}{suffix}</div>
//       <div className="text-sm text-muted-foreground mt-3 font-medium">{label}</div>
//     </div>
//   );
// }

// export default function Index() {
//   const [videoPlaying, setVideoPlaying] = useState(false);

//   return (
//     <>
//       {/* Hero with Video Background */}
//       <section className="relative min-h-screen flex items-center overflow-hidden">
//         {/* Video/Image Background */}
//         <div className="absolute inset-0 z-0">
//           {videoPlaying ? (
//             <video autoPlay muted loop playsInline className="w-full h-full object-cover">
//               <source src={heroVideo} type="video/mp4" />
//             </video>
//           ) : (
//             <img src={heroDatacenter} alt="Data center infrastructure" className="w-full h-full object-cover" />
//           )}
//           <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
//           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
//         </div>

//         <NetworkBackground />
//         <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-mv-blue/15 blur-[100px] animate-mesh-float" />
//         <div className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full bg-mv-magenta/15 blur-[100px] animate-mesh-float" style={{ animationDelay: '5s' }} />
//         <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full bg-mv-green/10 blur-[100px] animate-mesh-float" style={{ animationDelay: '10s' }} />

//         <div className="ring-decoration w-[300px] h-[300px] top-1/4 right-[15%] animate-spin-slow opacity-30 hidden lg:block" />
//         <div className="ring-decoration w-[200px] h-[200px] bottom-1/4 right-[20%] animate-spin-slow opacity-20 hidden lg:block" style={{ animationDelay: '-10s' }} />

//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <div className="max-w-4xl">
//             <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium text-sm text-muted-foreground mb-8 animate-float-up shimmer">
//               <div className="w-2 h-2 rounded-full bg-mv-green animate-scale-pulse" />
//               MV Branding Strategy 2026–2028
//             </div>
//             <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] mb-8 animate-float-up" style={{ animationDelay: '0.1s' }}>
//               Customer Centricity
//               <br />
//               with{' '}
//               <span className="gradient-text-animate">Peace of Mind</span>
//             </h1>
//             <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-float-up" style={{ animationDelay: '0.2s' }}>
//               Building Data Cabling & Data Security as the Strategic Core — powered by <span className="text-mv-blue font-semibold">Trust</span>, <span className="text-mv-magenta font-semibold">Innovation</span>, and <span className="text-mv-green font-semibold">Growth</span>.
//             </p>
//             <div className="flex flex-wrap gap-4 animate-float-up" style={{ animationDelay: '0.3s' }}>
//               <Link to="/services">
//                 <Button size="lg" className="magnetic-btn gradient-brand text-white border-0 shadow-lg glow-blue h-14 px-8 text-base">
//                   Explore Solutions <ArrowRight size={18} />
//                 </Button>
//               </Link>
//               <Link to="/contact">
//                 <Button size="lg" variant="outline" className="magnetic-btn border-primary/30 hover:bg-primary/5 h-14 px-8 text-base">
//                   Get Consultation
//                 </Button>
//               </Link>
//               <button
//                 onClick={() => setVideoPlaying(!videoPlaying)}
//                 className="magnetic-btn h-14 px-6 rounded-xl glass-premium flex items-center gap-2 text-sm font-semibold text-foreground hover:glow-magenta transition-all"
//               >
//                 <div className="w-8 h-8 rounded-full gradient-brand flex items-center justify-center">
//                   <Play size={14} className="text-white ml-0.5" />
//                 </div>
//                 {videoPlaying ? 'Pause Video' : 'Watch Showreel'}
//               </button>
//             </div>

//             {/* Color meaning pills */}
//             <div className="flex flex-wrap gap-3 mt-10 animate-float-up" style={{ animationDelay: '0.4s' }}>
//               <div className="px-4 py-2 rounded-full bg-mv-blue/10 border border-mv-blue/20 text-xs font-semibold text-mv-blue">🔵 Loyalty · Trust · Security</div>
//               <div className="px-4 py-2 rounded-full bg-mv-magenta/10 border border-mv-magenta/20 text-xs font-semibold text-mv-magenta">🟣 Passion · Innovation · Creativity</div>
//               <div className="px-4 py-2 rounded-full bg-mv-green/10 border border-mv-green/20 text-xs font-semibold text-mv-green">🟢 Growth · Hope · Freshness</div>
//             </div>

//             {/* Trusted by ticker */}
//             <div className="mt-12 animate-float-up" style={{ animationDelay: '0.5s' }}>
//               <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 font-medium">Trusted by leading organizations</p>
//               <div className="marquee-container">
//                 <div className="inline-flex gap-8 animate-marquee">
//                   {[...trustedBy, ...trustedBy].map((name, i) => (
//                     <span key={i} className="text-sm text-muted-foreground/60 font-medium whitespace-nowrap">{name}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float-gentle">
//           <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
//           <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
//             <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-float-gentle" />
//           </div>
//         </div>
//       </section>

//       {/* About Snapshot with Team Image */}
//       <section className="py-32 relative overflow-hidden">
//         <div className="absolute -right-20 top-1/2 w-[500px] h-[500px] rounded-full bg-mv-blue/5 blur-[80px]" />
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//               <div>
//                 <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-4 block">About Us</span>
//                 <h2 className="text-4xl sm:text-5xl font-black mb-6 text-foreground leading-tight">
//                   Enterprise IT Infrastructure, <span className="gradient-brand-text">Reimagined</span>
//                 </h2>
//                 <p className="text-lg text-muted-foreground leading-relaxed mb-6">
//                   MV Branding Strategy is a premium IT Infrastructure company delivering end-to-end solutions in Data Cabling, Data Security, and Strategic IT Core Development.
//                 </p>
//                 <p className="text-muted-foreground leading-relaxed mb-8">
//                   Our brand embodies three powerful pillars: <span className="text-mv-blue font-semibold">Blue for Trust & Dependability</span>, <span className="text-mv-magenta font-semibold">Magenta for Passion & Innovation</span>, and <span className="text-mv-green font-semibold">Green for Growth & Nature</span> — together creating an unstoppable force.
//                 </p>
//                 <Link to="/about">
//                   <Button variant="outline" className="magnetic-btn border-primary/30 group">
//                     Learn More About Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </Link>
//               </div>
//               <div className="relative">
//                 <div className="rounded-3xl overflow-hidden shadow-2xl glow-brand">
//                   <img src={teamImg} alt="MV Branding Strategy team" className="w-full h-80 object-cover" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-3xl" />
//                 </div>
//                 {/* Floating stat cards */}
//                 <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl glass-strong shadow-xl animate-float-gentle">
//                   <div className="text-2xl font-black text-mv-blue">500+</div>
//                   <div className="text-xs text-muted-foreground">Cable Runs</div>
//                 </div>
//                 <div className="absolute -top-4 -right-4 p-5 rounded-2xl glass-strong shadow-xl animate-float-gentle" style={{ animationDelay: '1s' }}>
//                   <div className="text-2xl font-black text-mv-magenta">99.9%</div>
//                   <div className="text-xs text-muted-foreground">Uptime</div>
//                 </div>
//               </div>
//             </div>
//           </SectionWrapper>
//         </div>
//       </section>

//       {/* Core Values Preview */}
//       <section className="py-24 bg-muted/30 relative overflow-hidden">
//         <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-mv-green/5 blur-[80px]" />
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-16">
//               <span className="text-xs uppercase tracking-widest text-mv-green font-semibold mb-4 block">What Drives Us</span>
//               <h2 className="text-4xl font-black text-foreground mb-4">Our Core Values</h2>
//               <p className="text-muted-foreground max-w-lg mx-auto">The principles that guide every decision, solution, and relationship we build</p>
//             </div>
//           </SectionWrapper>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {values.map((v, i) => (
//               <SectionWrapper key={v.label} delay={i * 80}>
//                 <div className="group p-6 rounded-2xl glass-premium text-center premium-card cursor-default gradient-border">
//                   <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                     <v.icon className="text-white" size={22} />
//                   </div>
//                   <span className="text-sm font-semibold text-foreground">{v.label}</span>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link to="/values">
//               <Button variant="ghost" className="text-primary group">View All Values <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Services Preview with Images */}
//       <section className="py-32 relative overflow-hidden">
//         <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-mv-magenta/5 blur-[100px]" />
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-20">
//               <span className="text-xs uppercase tracking-widest text-mv-blue font-semibold mb-4 block">What We Do</span>
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Our Services</h2>
//               <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive IT infrastructure solutions for the modern enterprise</p>
//             </div>
//           </SectionWrapper>
//           <div className="grid sm:grid-cols-2 gap-6">
//             {services.map((s, i) => (
//               <SectionWrapper key={s.title} delay={i * 100}>
//                 <div className={`group tilt-card rounded-2xl glass-premium gradient-border ${glowMap[s.color]} transition-all duration-300 h-full flex flex-col overflow-hidden`}>
//                   <div className="relative h-48 overflow-hidden">
//                     <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//                     <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
//                     <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${iconBgMap[s.color]} backdrop-blur-sm flex items-center justify-center`}>
//                       <s.icon size={22} className={iconTextMap[s.color]} />
//                     </div>
//                   </div>
//                   <div className="p-8 flex-1 flex flex-col">
//                     <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
//                     <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{s.desc}</p>
//                     <Link to="/services" className="mt-6 text-sm font-semibold text-primary hover:text-mv-blue-light transition-colors inline-flex items-center gap-1 group/link">
//                       Learn More <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
//                     </Link>
//                   </div>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us with Color Coding */}
//       <section className="py-32 bg-muted/30 relative overflow-hidden">
//         <div className="absolute left-1/2 top-0 w-[600px] h-[600px] rounded-full bg-mv-blue/5 blur-[100px] -translate-x-1/2" />
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-20">
//               <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-4 block">Why MV Branding</span>
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Why Choose Us</h2>
//               <p className="text-muted-foreground max-w-xl mx-auto">We go beyond standard IT services to deliver infrastructure that transforms businesses</p>
//             </div>
//           </SectionWrapper>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {whyChooseUs.map((item, i) => (
//               <SectionWrapper key={item.title} delay={i * 80}>
//                 <div className={`p-8 rounded-2xl glass-premium premium-card h-full border-t-2 ${borderColorMap[item.color]}`}>
//                   <div className={`w-12 h-12 rounded-xl ${iconBgMap[item.color]} flex items-center justify-center mb-5`}>
//                     <item.icon size={22} className={iconTextMap[item.color]} />
//                   </div>
//                   <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
//                   <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="py-28 relative overflow-hidden">
//         <div className="absolute inset-0 gradient-brand opacity-[0.03]" />
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-black text-foreground mb-4">Numbers That Speak</h2>
//               <p className="text-muted-foreground">Our track record of delivering excellence</p>
//             </div>
//           </SectionWrapper>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <StatCounter target={250} suffix="+" label="Projects Delivered" />
//             <StatCounter target={120} suffix="+" label="Clients Served" />
//             <StatCounter target={15} suffix="+" label="Years of Experience" />
//             <StatCounter target={99} suffix="%" label="Client Satisfaction" />
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-32 bg-muted/30 relative overflow-hidden">
//         <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-mv-green/5 blur-[80px]" />
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-20">
//               <span className="text-xs uppercase tracking-widest text-mv-green font-semibold mb-4 block">Testimonials</span>
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">What Our Clients Say</h2>
//               <p className="text-muted-foreground max-w-xl mx-auto">Don't just take our word for it — hear from the leaders who trust us</p>
//             </div>
//           </SectionWrapper>
//           <div className="grid md:grid-cols-3 gap-6">
//             {testimonials.map((t, i) => (
//               <SectionWrapper key={t.name} delay={i * 120}>
//                 <div className="p-8 rounded-2xl glass-premium premium-card h-full flex flex-col gradient-border">
//                   <div className="flex gap-1 mb-4">
//                     {Array.from({ length: t.rating }).map((_, j) => (
//                       <Star key={j} size={16} className="text-mv-green fill-mv-green" />
//                     ))}
//                   </div>
//                   <p className="text-foreground leading-relaxed flex-1 mb-6 italic">"{t.quote}"</p>
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center">
//                       <span className="text-xs font-bold text-white">{t.name.split(' ').map(n => n[0]).join('')}</span>
//                     </div>
//                     <div>
//                       <div className="text-sm font-semibold text-foreground">{t.name}</div>
//                       <div className="text-xs text-muted-foreground">{t.role}</div>
//                     </div>
//                   </div>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-32 relative overflow-hidden">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-20">
//               <span className="text-xs uppercase tracking-widest text-mv-blue font-semibold mb-4 block">How We Work</span>
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Our Process</h2>
//               <p className="text-muted-foreground max-w-xl mx-auto">A proven methodology that ensures success at every stage</p>
//             </div>
//           </SectionWrapper>
//           <div className="grid md:grid-cols-4 gap-6 relative">
//             <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
//             {[
//               { step: '01', title: 'Discovery', desc: 'Deep-dive into your infrastructure needs and business objectives', color: 'blue' as const },
//               { step: '02', title: 'Design', desc: 'Architect tailored solutions with security and scalability built-in', color: 'magenta' as const },
//               { step: '03', title: 'Deploy', desc: 'Execute with precision using certified engineers and premium products', color: 'green' as const },
//               { step: '04', title: 'Support', desc: 'Ongoing monitoring, optimization, and 24/7 dedicated support', color: 'blue' as const },
//             ].map((item, i) => (
//               <SectionWrapper key={item.step} delay={i * 150}>
//                 <div className="text-center relative">
//                   <div className={`w-24 h-24 rounded-2xl ${iconBgMap[item.color]} border-2 ${borderColorMap[item.color]} flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg premium-card`}>
//                     <span className={`text-2xl font-black ${iconTextMap[item.color]}`}>{item.step}</span>
//                   </div>
//                   <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
//                   <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-32">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="rounded-3xl relative overflow-hidden">
//               <img src={heroDatacenter} alt="Data center" className="absolute inset-0 w-full h-full object-cover" />
//               <div className="absolute inset-0 gradient-brand opacity-80" />
//               <div className="absolute inset-0 bg-black/30" />
//               <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white/10 animate-spin-slow" />
//               <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border-2 border-white/5 animate-spin-slow" style={{ animationDelay: '-15s' }} />
//               <div className="relative z-10 p-16 md:p-24 text-center">
//                 <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
//                   Ready to Transform Your
//                   <br />
//                   IT Infrastructure?
//                 </h2>
//                 <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
//                   Let's build a secure, scalable, and future-ready infrastructure that gives you peace of mind and drives growth.
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-4">
//                   <Link to="/contact">
//                     <Button size="lg" className="magnetic-btn bg-white text-foreground hover:bg-white/90 font-bold h-14 px-10 text-base">
//                       Schedule a Consultation <ArrowRight size={18} />
//                     </Button>
//                   </Link>
//                   <Link to="/services">
//                     <Button size="lg" variant="outline" className="magnetic-btn border-white/30 text-white hover:bg-white/10 h-14 px-10 text-base">
//                       View Our Services
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </SectionWrapper>
//         </div>
//       </section>
//     </>
//   );
// }







import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ValuesSection from '@/components/home/ValuesSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ProcessSection from '@/components/home/ProcessSection';
import CTASection from '@/components/home/CTASection';
import ExpandingVideoPrompt from '@/components/home/ExpandingVideoPrompt';

export default function Index() {
  return (
    <>  
    <>
    {/* <ExpandingVideoPrompt /> */}
    
      
      <HeroSection />
       <AboutSection />
      <ValuesSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <StatsSection />
      <TestimonialsSection />
      <ProcessSection />
      <CTASection />
    </>
    </>
  );
}