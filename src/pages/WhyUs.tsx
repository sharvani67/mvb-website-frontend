// import { 
//   Network, Shield, Server, Cpu, CheckCircle, ArrowRight, Zap, Clock, 
//   Award, HeartHandshake, Star, Globe, Target, Users, TrendingUp, 
//   Briefcase, Lightbulb, ShieldCheck, Rocket, BadgeCheck, Handshake 
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import SectionWrapper from '@/components/SectionWrapper';
// import NetworkBackground from '@/components/NetworkBackground';

// // Why Us specific data
// const coreValues = [
//   {
//     icon: ShieldCheck,
//     title: 'Uncompromising Trust',
//     desc: 'We build relationships on transparency, integrity, and delivering on our promises. Your infrastructure is in safe hands.',
//     color: 'blue' as const,
//     stats: '99.9% Client Retention'
//   },
//   {
//     icon: Lightbulb,
//     title: 'Innovation First',
//     desc: 'We don\'t just follow trends—we set them. Our solutions leverage cutting-edge technology to give you a competitive edge.',
//     color: 'magenta' as const,
//     stats: '15+ Years R&D Investment'
//   },
//   {
//     icon: TrendingUp,
//     title: 'Growth Partnership',
//     desc: 'Your success is our success. We invest in understanding your business to deliver solutions that drive real growth.',
//     color: 'green' as const,
//     stats: '200% Avg. Client Growth'
//   },
// ];

// const differentiators = [
//   {
//     icon: Users,
//     title: 'Dedicated Team',
//     desc: 'You get a dedicated team of experts who know your infrastructure inside and out.',
//     color: 'blue' as const
//   },
//   {
//     icon: Clock,
//     title: '24/7 Support',
//     desc: 'Round-the-clock monitoring and support to ensure your systems never miss a beat.',
//     color: 'magenta' as const
//   },
//   {
//     icon: Award,
//     title: 'Certified Excellence',
//     desc: 'Industry-certified professionals with decades of combined experience.',
//     color: 'green' as const
//   },
//   {
//     icon: Target,
//     title: 'Results-Driven',
//     desc: 'We measure our success by your outcomes and business results.',
//     color: 'blue' as const
//   },
//   {
//     icon: Rocket,
//     title: 'Rapid Deployment',
//     desc: 'Accelerated implementation timelines without compromising quality.',
//     color: 'magenta' as const
//   },
//   {
//     icon: Handshake,
//     title: 'Long-term Partnership',
//     desc: 'We\'re not just vendors—we\'re strategic partners invested in your success.',
//     color: 'green' as const
//   },
// ];

// const stats = [
//   { number: '500+', label: 'Projects Delivered', icon: Briefcase, color: 'blue' as const },
//   { number: '98%', label: 'Client Satisfaction', icon: Star, color: 'magenta' as const },
//   { number: '15+', label: 'Years Experience', icon: Clock, color: 'green' as const },
//   { number: '24/7', label: 'Support Available', icon: Globe, color: 'blue' as const },
// ];

// const clientLogos = [
//   { name: 'Tech Corp', icon: '💼' },
//   { name: 'Global Bank', icon: '🏦' },
//   { name: 'Health Plus', icon: '🏥' },
//   { name: 'EduWorld', icon: '🎓' },
//   { name: 'ManufacturePro', icon: '🏭' },
//   { name: 'Retail Giant', icon: '🛍️' },
// ];

// const achievements = [
//   { year: '2023', title: 'Best IT Infrastructure Provider', org: 'Tech Excellence Awards' },
//   { year: '2022', title: 'Innovation in Security', org: 'Cybersecurity Leaders' },
//   { year: '2021', title: 'Fastest Growing Tech Firm', org: 'Business Times' },
//   { year: '2020', title: 'Client Choice Award', org: 'IT Services Association' },
// ];

// const bgMap = { blue: 'bg-mv-blue/10', magenta: 'bg-mv-magenta/10', green: 'bg-mv-green/10' };
// const textMap = { blue: 'text-mv-blue', magenta: 'text-mv-magenta', green: 'text-mv-green' };
// const borderMap = { blue: 'border-mv-blue/20', magenta: 'border-mv-magenta/20', green: 'border-mv-green/20' };
// const glowMap = { blue: 'hover:glow-blue', magenta: 'hover:glow-magenta', green: 'hover:glow-green' };

// export default function WhyUs() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 overflow-hidden">
//         <NetworkBackground />
        
//         {/* Animated background elements */}
//         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-mv-blue/10 blur-[120px] animate-mesh-float" />
//         <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-mv-magenta/10 blur-[120px] animate-mesh-float" style={{ animationDelay: '3s' }} />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-mv-green/5 blur-[150px] animate-pulse-slow" />
        
//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <SectionWrapper>
//             <div className="max-w-5xl mx-auto text-center">
//               {/* Badge */}
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mv-magenta/10 border border-mv-magenta/20 mb-8">
//                 <BadgeCheck size={16} className="text-mv-magenta" />
//                 <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold">
//                   Why Choose MV Branding Strategy
//                 </span>
//               </div>
              
//               {/* Main heading with gradient */}
//               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-[0.95]">
//                 Beyond Service Delivery—{' '}
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green">
//                   True Partnership
//                 </span>
//               </h1>
              
//               {/* Description */}
//               <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
//                 We don't just implement IT solutions—we become an extension of your team. 
//                 With a foundation built on <span className="text-mv-blue font-semibold">Trust</span>, driven by{' '}
//                 <span className="text-mv-magenta font-semibold">Innovation</span>, and focused on{' '}
//                 <span className="text-mv-green font-semibold">Growth</span>, we deliver 
//                 infrastructure that transforms businesses.
//               </p>
              
//               {/* CTA Buttons */}
//               <div className="flex flex-wrap gap-4 justify-center">
//                 <Link to="/contact">
//                   <Button size="lg" className="magnetic-btn gradient-brand text-white font-bold h-14 px-8 group">
//                     Start Your Journey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </Link>
//                 <Link to="/services">
//                   <Button size="lg" variant="outline" className="magnetic-btn border-primary/30 h-14 px-8">
//                     Explore Services
//                   </Button>
//                 </Link>
//               </div>
              
//               {/* Trust indicators */}
//               <div className="flex flex-wrap justify-center gap-8 mt-16">
//                 <div className="flex items-center gap-2">
//                   <Shield size={20} className="text-mv-blue" />
//                   <span className="text-sm font-medium">ISO 27001 Certified</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Award size={20} className="text-mv-magenta" />
//                   <span className="text-sm font-medium">10+ Industry Awards</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Users size={20} className="text-mv-green" />
//                   <span className="text-sm font-medium">500+ Happy Clients</span>
//                 </div>
//               </div>
//             </div>
//           </SectionWrapper>
//         </div>
        
//         {/* Decorative wave */}
//         <div className="absolute bottom-0 left-0 w-full">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
//             <path fill="rgba(0,0,0,0.02)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
//           </svg>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-muted/30">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             {stats.map((stat, i) => (
//               <SectionWrapper key={stat.label} delay={i * 100}>
//                 <div className="text-center">
//                   <div className={`w-16 h-16 rounded-2xl ${bgMap[stat.color]} flex items-center justify-center mx-auto mb-4`}>
//                     <stat.icon size={28} className={textMap[stat.color]} />
//                   </div>
//                   <div className="text-3xl lg:text-4xl font-black text-foreground mb-1">{stat.number}</div>
//                   <div className="text-sm text-muted-foreground">{stat.label}</div>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Core Values Section */}
//       <section className="py-28">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-20">
//               <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-4 block">
//                 Our Foundation
//               </span>
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
//                 Built on Three Pillars
//               </h2>
//               <p className="text-muted-foreground max-w-2xl mx-auto">
//                 Every solution we deliver is rooted in our core values—the principles that guide 
//                 our decisions and define our relationships.
//               </p>
//             </div>
//           </SectionWrapper>

//           <div className="grid md:grid-cols-3 gap-8">
//             {coreValues.map((value, i) => (
//               <SectionWrapper key={value.title} delay={i * 150}>
//                 <div className={`relative group ${glowMap[value.color]}`}>
//                   <div className={`absolute inset-0 rounded-3xl ${bgMap[value.color]} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
//                   <div className="relative p-8 rounded-3xl glass-premium gradient-border h-full">
//                     <div className={`w-16 h-16 rounded-2xl ${bgMap[value.color]} border ${borderMap[value.color]} flex items-center justify-center mb-6`}>
//                       <value.icon size={32} className={textMap[value.color]} />
//                     </div>
//                     <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
//                     <p className="text-muted-foreground leading-relaxed mb-6">{value.desc}</p>
//                     <div className={`text-sm font-semibold ${textMap[value.color]} border-t ${borderMap[value.color]} pt-4 mt-4`}>
//                       {value.stats}
//                     </div>
//                   </div>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Differentiators Grid */}
//       <section className="py-28 bg-muted/30 relative overflow-hidden">
//         <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-mv-blue/5 blur-[100px]" />
//         <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-mv-magenta/5 blur-[100px]" />
        
//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <SectionWrapper>
//             <div className="text-center mb-16">
//               <span className="text-xs uppercase tracking-widest text-mv-green font-semibold mb-4 block">
//                 What Sets Us Apart
//               </span>
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
//                 The MV Difference
//               </h2>
//               <p className="text-muted-foreground max-w-2xl mx-auto">
//                 We don't just meet expectations—we exceed them. Here's how we're different.
//               </p>
//             </div>
//           </SectionWrapper>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {differentiators.map((item, i) => (
//               <SectionWrapper key={item.title} delay={i * 80}>
//                 <div className={`p-6 rounded-2xl glass-premium premium-card gradient-border group hover:scale-105 transition-all duration-300 ${glowMap[item.color]}`}>
//                   <div className={`w-12 h-12 rounded-xl ${bgMap[item.color]} flex items-center justify-center mb-4`}>
//                     <item.icon size={24} className={textMap[item.color]} />
//                   </div>
//                   <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
//                   <p className="text-sm text-muted-foreground">{item.desc}</p>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Achievements Timeline */}
//       <section className="py-28">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-16">
//               <span className="text-xs uppercase tracking-widest text-mv-blue font-semibold mb-4 block">
//                 Recognition
//               </span>
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
//                 Awards & Achievements
//               </h2>
//               <p className="text-muted-foreground max-w-2xl mx-auto">
//                 Our commitment to excellence has been recognized by industry leaders.
//               </p>
//             </div>
//           </SectionWrapper>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {achievements.map((achievement, i) => (
//               <SectionWrapper key={achievement.title} delay={i * 120}>
//                 <div className="relative p-6 rounded-2xl glass-premium gradient-border text-center">
//                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-mv-magenta text-white text-xs font-bold">
//                     {achievement.year}
//                   </div>
//                   <div className="mt-4">
//                     <Award size={32} className="text-mv-magenta mx-auto mb-3" />
//                     <h3 className="text-base font-bold text-foreground mb-2">{achievement.title}</h3>
//                     <p className="text-xs text-muted-foreground">{achievement.org}</p>
//                   </div>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Trusted By Section */}
//       <section className="py-20 bg-muted/30">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-12">
//               <span className="text-xs uppercase tracking-widest text-mv-green font-semibold mb-4 block">
//                 Trusted Partners
//               </span>
//               <h3 className="text-2xl font-bold text-foreground">Companies That Trust Us</h3>
//             </div>
//           </SectionWrapper>

//           <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
//             {clientLogos.map((client, i) => (
//               <SectionWrapper key={client.name} delay={i * 50}>
//                 <div className="text-center">
//                   <div className="text-3xl mb-2 opacity-50 hover:opacity-100 transition-opacity">
//                     {client.icon}
//                   </div>
//                   <div className="text-xs text-muted-foreground">{client.name}</div>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonial/Commitment Section */}
//       <section className="py-28">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <SectionWrapper>
//               <div className="relative">
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-mv-magenta/10 blur-2xl" />
//                 <Star size={48} className="text-mv-magenta mx-auto mb-6 relative z-10" />
//                 <blockquote className="text-2xl md:text-3xl font-light text-foreground mb-8 leading-relaxed">
//                   "MV Branding Strategy doesn't just deliver solutions—they deliver peace of mind. 
//                   Their commitment to our success goes far beyond the contract."
//                 </blockquote>
//                 <div className="flex items-center justify-center gap-3 mb-8">
//                   <div className="w-12 h-12 rounded-full bg-gradient-to-r from-mv-blue to-mv-magenta" />
//                   <div className="text-left">
//                     <div className="font-bold text-foreground">Sarah Johnson</div>
//                     <div className="text-sm text-muted-foreground">CTO, TechCorp International</div>
//                   </div>
//                 </div>
//                 <div className="flex justify-center gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={16} className="fill-mv-magenta text-mv-magenta" />
//                   ))}
//                 </div>
//               </div>
//             </SectionWrapper>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-mv-blue/20 via-mv-magenta/20 to-mv-green/20" />
//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <SectionWrapper>
//             <div className="max-w-3xl mx-auto text-center">
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
//                 Ready to Experience the MV Difference?
//               </h2>
//               <p className="text-lg text-muted-foreground mb-10">
//                 Join hundreds of satisfied clients who've transformed their infrastructure with us.
//               </p>
//               <div className="flex flex-wrap gap-4 justify-center">
//                 <Link to="/contact">
//                   <Button size="lg" className="magnetic-btn gradient-brand text-white font-bold h-14 px-10 group">
//                     Let's Talk <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </Link>
//                 <Link to="/services">
//                   <Button size="lg" variant="outline" className="magnetic-btn border-primary/30 h-14 px-10">
//                     View Services
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






// import { 
//   Network, Shield, Server, Cpu, CheckCircle, ArrowRight, Zap, Clock, 
//   Award, HeartHandshake, Star, Globe, Target, Users, TrendingUp, 
//   Briefcase, Lightbulb, ShieldCheck, Rocket, BadgeCheck, Handshake 
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import SectionWrapper from '@/components/SectionWrapper';
// import NetworkBackground from '@/components/NetworkBackground';
// import StatsSection from '@/components/WhyUsCompo/StatsSection';
// import MVDifferencePage from '@/components/WhyUsCompo/MVDifferencepage';
// import CoreValuesSection from '@/components/WhyUsCompo/CoreValuesSection';
// import TrustedClients from '@/components/WhyUsCompo/TrustedClients';
// import AchievementsSection from '@/components/WhyUsCompo/Achievements';

// // Why Us specific data
// const coreValues = [
//   {
//     icon: ShieldCheck,
//     title: 'Uncompromising Trust',
//     desc: 'We build relationships on transparency, integrity, and delivering on our promises. Your infrastructure is in safe hands.',
//     color: 'blue' as const,
//     stats: '99.9% Client Retention'
//   },
//   {
//     icon: Lightbulb,
//     title: 'Innovation First',
//     desc: 'We don\'t just follow trends—we set them. Our solutions leverage cutting-edge technology to give you a competitive edge.',
//     color: 'magenta' as const,
//     stats: '15+ Years R&D Investment'
//   },
//   {
//     icon: TrendingUp,
//     title: 'Growth Partnership',
//     desc: 'Your success is our success. We invest in understanding your business to deliver solutions that drive real growth.',
//     color: 'green' as const,
//     stats: '200% Avg. Client Growth'
//   },
// ];

// const differentiators = [
//   {
//     icon: Users,
//     title: 'Dedicated Team',
//     desc: 'You get a dedicated team of experts who know your infrastructure inside and out.',
//     color: 'blue' as const
//   },
//   {
//     icon: Clock,
//     title: '24/7 Support',
//     desc: 'Round-the-clock monitoring and support to ensure your systems never miss a beat.',
//     color: 'magenta' as const
//   },
//   {
//     icon: Award,
//     title: 'Certified Excellence',
//     desc: 'Industry-certified professionals with decades of combined experience.',
//     color: 'green' as const
//   },
//   {
//     icon: Target,
//     title: 'Results-Driven',
//     desc: 'We measure our success by your outcomes and business results.',
//     color: 'blue' as const
//   },
//   {
//     icon: Rocket,
//     title: 'Rapid Deployment',
//     desc: 'Accelerated implementation timelines without compromising quality.',
//     color: 'magenta' as const
//   },
//   {
//     icon: Handshake,
//     title: 'Long-term Partnership',
//     desc: 'We\'re not just vendors—we\'re strategic partners invested in your success.',
//     color: 'green' as const
//   },
// ];

// // const stats = [
// //   { number: '500+', label: 'Projects Delivered', icon: Briefcase, color: 'blue' as const },
// //   { number: '98%', label: 'Client Satisfaction', icon: Star, color: 'magenta' as const },
// //   { number: '15+', label: 'Years Experience', icon: Clock, color: 'green' as const },
// //   { number: '24/7', label: 'Support Available', icon: Globe, color: 'blue' as const },
// // ];

// const clientLogos = [
//   { name: 'Tech Corp', icon: '💼' },
//   { name: 'Global Bank', icon: '🏦' },
//   { name: 'Health Plus', icon: '🏥' },
//   { name: 'EduWorld', icon: '🎓' },
//   { name: 'ManufacturePro', icon: '🏭' },
//   { name: 'Retail Giant', icon: '🛍️' },
// ];

// const achievements = [
//   { year: '2023', title: 'Best IT Infrastructure Provider', org: 'Tech Excellence Awards' },
//   { year: '2022', title: 'Innovation in Security', org: 'Cybersecurity Leaders' },
//   { year: '2021', title: 'Fastest Growing Tech Firm', org: 'Business Times' },
//   { year: '2020', title: 'Client Choice Award', org: 'IT Services Association' },
// ];

// const bgMap = { blue: 'bg-mv-blue/10', magenta: 'bg-mv-magenta/10', green: 'bg-mv-green/10' };
// const textMap = { blue: 'text-mv-blue', magenta: 'text-mv-magenta', green: 'text-mv-green' };
// const borderMap = { blue: 'border-mv-blue/20', magenta: 'border-mv-magenta/20', green: 'border-mv-green/20' };
// const glowMap = { blue: 'hover:glow-blue', magenta: 'hover:glow-magenta', green: 'hover:glow-green' };

// export default function WhyUs() {
//   return (
//     <>
//       {/* Hero Section */}
//       {/* <section className="relative pt-32 pb-20 overflow-hidden">
//         <NetworkBackground />
        
        
//         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-mv-blue/10 blur-[120px] animate-mesh-float" />
//         <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-mv-magenta/10 blur-[120px] animate-mesh-float" style={{ animationDelay: '3s' }} />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-mv-green/5 blur-[150px] animate-pulse-slow" />
        
//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <SectionWrapper>
//             <div className="max-w-5xl mx-auto text-center">
           
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mv-magenta/10 border border-mv-magenta/20 mb-8">
//                 <BadgeCheck size={16} className="text-mv-magenta" />
//                 <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold">
//                   Why Choose MV Branding Strategy
//                 </span>
//               </div>
              
            
//               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-[0.95]">
//                 Beyond Service Delivery—{' '}
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green">
//                   True Partnership
//                 </span>
//               </h1>
              
            
//               <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
//                 We don't just implement IT solutions—we become an extension of your team. 
//                 With a foundation built on <span className="text-mv-blue font-semibold">Trust</span>, driven by{' '}
//                 <span className="text-mv-magenta font-semibold">Innovation</span>, and focused on{' '}
//                 <span className="text-mv-green font-semibold">Growth</span>, we deliver 
//                 infrastructure that transforms businesses.
//               </p>
              
              
//               <div className="flex flex-wrap gap-4 justify-center">
//                 <Link to="/contact">
//                   <Button size="lg" className="magnetic-btn gradient-brand text-white font-bold h-14 px-8 group">
//                     Start Your Journey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </Link>
//                 <Link to="/services">
//                   <Button size="lg" variant="outline" className="magnetic-btn border-primary/30 h-14 px-8">
//                     Explore Services
//                   </Button>
//                 </Link>
//               </div>
              
             
//               <div className="flex flex-wrap justify-center gap-8 mt-16">
//                 <div className="flex items-center gap-2">
//                   <Shield size={20} className="text-mv-blue" />
//                   <span className="text-sm font-medium">ISO 27001 Certified</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Award size={20} className="text-mv-magenta" />
//                   <span className="text-sm font-medium">10+ Industry Awards</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Users size={20} className="text-mv-green" />
//                   <span className="text-sm font-medium">500+ Happy Clients</span>
//                 </div>
//               </div>
//             </div>
//           </SectionWrapper>
//         </div>
        
       
//         <div className="absolute bottom-0 left-0 w-full">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
//             <path fill="rgba(0,0,0,0.02)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
//           </svg>
//         </div>
//       </section> */}

//       {/* <section className="relative pt-32 pb-20 overflow-hidden">


//   <div className="absolute inset-0 -z-10">
//     <img
//       src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
//       alt="Background"
//       className="w-full h-full object-cover"
//     />
   
//     <div className="absolute inset-0 bg-black/60"></div>
//   </div>

//   <NetworkBackground />
  
  
//   <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-mv-blue/10 blur-[120px] animate-mesh-float" />
//   <div
//     className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-mv-magenta/10 blur-[120px] animate-mesh-float"
//     style={{ animationDelay: "3s" }}
//   />
//   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-mv-green/5 blur-[150px] animate-pulse-slow" />

//   <div className="container mx-auto px-4 lg:px-8 relative z-10">
//     <SectionWrapper>
//       <div className="max-w-5xl mx-auto text-center">

    
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
//   <BadgeCheck size={16} className="text-white" />
//   <span className="text-xs uppercase tracking-widest text-white font-semibold">
//     Why Choose MV Branding Strategy
//   </span>
//         </div>

      
//         <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-[0.95]">
//           Beyond Service Delivery —{" "}
//           <span className="block text-transparent bg-clip-text bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green">
//             True Partnership
//           </span>
//         </h1>

        
//         <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
//           We don't just implement IT solutions—we become an extension of your team.
//           With a foundation built on <span className="text-mv-blue font-semibold">Trust</span>, driven by{" "}
//           <span className="text-mv-magenta font-semibold">Innovation</span>, and focused on{" "}
//           <span className="text-mv-green font-semibold">Growth</span>, we deliver
//           infrastructure that transforms businesses.
//         </p>

    
//         <div className="flex flex-wrap gap-4 justify-center">
//           <Link to="/contact">
//             <Button size="lg" className="magnetic-btn gradient-brand text-white font-bold h-14 px-8 group">
//               Start Your Journey
//               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </Link>

//           <Link to="/services">
//             <Button size="lg" variant="outline" className="magnetic-btn border-black/30 text-black h-14 px-8">
//               Explore Services
//             </Button>
//           </Link>
//         </div>

  
//         <div className="flex flex-wrap justify-center gap-8 mt-16">
//           <div className="flex items-center gap-2">
//             <Shield size={20} className="text-mv-blue" />
//             <span className="text-sm font-medium text-white">ISO 27001 Certified</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <Award size={20} className="text-mv-magenta" />
//             <span className="text-sm font-medium text-white">10+ Industry Awards</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <Users size={20} className="text-mv-green" />
//             <span className="text-sm font-medium text-white">500+ Happy Clients</span>
//           </div>
//         </div>

//       </div>
//     </SectionWrapper>
//   </div>


//   <div className="absolute bottom-0 left-0 w-full">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
//       <path
//         fill="rgba(0,0,0,0.15)"
//         fillOpacity="1"
//         d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z"
//       ></path>
//     </svg>
//   </div>

//     </section> */}

//     <section className="relative pt-32 pb-20 overflow-hidden mt-4">

//   {/* Background Image */}
//   <div className="absolute inset-0 -z-10">
//     <img
//       src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
//       alt="Background"
//       className="w-full h-full object-cover"
//     />

//     {/* ✅ Gradient Overlay (UPDATED) */}
//     <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 via-yellow-400/70 to-blue-600/80"></div>
//   </div>

//   <NetworkBackground />
  
//   {/* Animated gradient blobs */}
//   <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-pink-600/20 blur-[120px] animate-mesh-float" />
//   <div
//     className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px] animate-mesh-float"
//     style={{ animationDelay: "3s" }}
//   />
//   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-yellow-400/10 blur-[150px] animate-pulse-slow" />

//   <div className="container mx-auto px-4 lg:px-8 relative z-10">
//     <SectionWrapper>
//       <div className="max-w-5xl mx-auto text-center">

//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
//         bg-white/20 border border-white/30 mb-8 backdrop-blur-md">
//           <BadgeCheck size={16} className="text-white" />
//           <span className="text-xs uppercase tracking-widest text-white font-semibold">
//             Why Choose MV Branding Strategy
//           </span>
//         </div>

//         {/* Heading */}
//         <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-[0.95]">
//           Beyond Service Delivery —{" "}
//           <span className="block bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
//             True Partnership
//           </span>
//         </h1>

//         {/* Description */}
//         <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
//           We don't just implement IT solutions—we become an extension of your team.
//           With a foundation built on{" "}
//           <span className="text-yellow-200 font-semibold">Trust</span>, driven by{" "}
//           <span className="text-pink-200 font-semibold">Innovation</span>, and focused on{" "}
//           <span className="text-blue-200 font-semibold">Growth</span>, we deliver
//           infrastructure that transforms businesses.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-wrap gap-4 justify-center">
//           <Link to="/contact">
//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//               text-white font-bold h-14 px-8 shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
//             >
//               Start Your Journey
//               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </Link>

//           <Link to="/services">
//             <Button
//               size="lg"
//               variant="outline"
//               className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//               text-white font-bold h-14 px-8 shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
//             >
//               Explore Services
//             </Button>
//           </Link>
//         </div>

//         {/* Trust indicators */}
//         <div className="flex flex-wrap justify-center gap-8 mt-16">
//           <div className="flex items-center gap-2">
//             <Shield size={20} className="text-yellow-300" />
//             <span className="text-sm font-medium text-white">ISO 27001 Certified</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <Award size={20} className="text-pink-300" />
//             <span className="text-sm font-medium text-white">10+ Industry Awards</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <Users size={20} className="text-blue-300" />
//             <span className="text-sm font-medium text-white">500+ Happy Clients</span>
//           </div>
//         </div>

//       </div>
//     </SectionWrapper>
//   </div>

//   {/* Decorative wave */}
//   <div className="absolute bottom-0 left-0 w-full">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
//       <path
//         fill="rgba(0,0,0,0.15)"
//         fillOpacity="1"
//         d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z"
//       ></path>
//     </svg>
//   </div>

// </section>

//       {/* Stats Section */}
//       {/* <section className="py-20 bg-muted/30">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             {stats.map((stat, i) => (
//               <SectionWrapper key={stat.label} delay={i * 100}>
//                 <div className="text-center">
//                   <div className={`w-16 h-16 rounded-2xl ${bgMap[stat.color]} flex items-center justify-center mx-auto mb-4`}>
//                     <stat.icon size={28} className={textMap[stat.color]} />
//                   </div>
//                   <div className="text-3xl lg:text-4xl font-black text-foreground mb-1">{stat.number}</div>
//                   <div className="text-sm text-muted-foreground">{stat.label}</div>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       <StatsSection />

//       {/* Core Values Section */}
//       {/* <section className="py-28">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-20">
//               <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-4 block">
//                 Our Foundation
//               </span>
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
//                 Built on Three Pillars
//               </h2>
//               <p className="text-muted-foreground max-w-2xl mx-auto">
//                 Every solution we deliver is rooted in our core values—the principles that guide 
//                 our decisions and define our relationships.
//               </p>
//             </div>
//           </SectionWrapper>

//           <div className="grid md:grid-cols-3 gap-8">
//             {coreValues.map((value, i) => (
//               <SectionWrapper key={value.title} delay={i * 150}>
//                 <div className={`relative group ${glowMap[value.color]}`}>
//                   <div className={`absolute inset-0 rounded-3xl ${bgMap[value.color]} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
//                   <div className="relative p-8 rounded-3xl glass-premium gradient-border h-full">
//                     <div className={`w-16 h-16 rounded-2xl ${bgMap[value.color]} border ${borderMap[value.color]} flex items-center justify-center mb-6`}>
//                       <value.icon size={32} className={textMap[value.color]} />
//                     </div>
//                     <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
//                     <p className="text-muted-foreground leading-relaxed mb-6">{value.desc}</p>
//                     <div className={`text-sm font-semibold ${textMap[value.color]} border-t ${borderMap[value.color]} pt-4 mt-4`}>
//                       {value.stats}
//                     </div>
//                   </div>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       <CoreValuesSection />

//       {/* Differentiators Grid */}
//       {/* <section className="py-28 bg-muted/30 relative overflow-hidden">
//         <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-mv-blue/5 blur-[100px]" />
//         <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-mv-magenta/5 blur-[100px]" />
        
//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <SectionWrapper>
//             <div className="text-center mb-16">
//               <span className="text-xs uppercase tracking-widest text-mv-green font-semibold mb-4 block">
//                 What Sets Us Apart
//               </span>
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
//                 The MV Difference
//               </h2>
//               <p className="text-muted-foreground max-w-2xl mx-auto">
//                 We don't just meet expectations—we exceed them. Here's how we're different.
//               </p>
//             </div>
//           </SectionWrapper>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {differentiators.map((item, i) => (
//               <SectionWrapper key={item.title} delay={i * 80}>
//                 <div className={`p-6 rounded-2xl glass-premium premium-card gradient-border group hover:scale-105 transition-all duration-300 ${glowMap[item.color]}`}>
//                   <div className={`w-12 h-12 rounded-xl ${bgMap[item.color]} flex items-center justify-center mb-4`}>
//                     <item.icon size={24} className={textMap[item.color]} />
//                   </div>
//                   <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
//                   <p className="text-sm text-muted-foreground">{item.desc}</p>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       <MVDifferencePage />

//       {/* Achievements Timeline */}
//       {/* <section className="py-28">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-16">
//               <span className="text-xs uppercase tracking-widest text-mv-blue font-semibold mb-4 block">
//                 Recognition
//               </span>
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
//                 Awards & Achievements
//               </h2>
//               <p className="text-muted-foreground max-w-2xl mx-auto">
//                 Our commitment to excellence has been recognized by industry leaders.
//               </p>
//             </div>
//           </SectionWrapper>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {achievements.map((achievement, i) => (
//               <SectionWrapper key={achievement.title} delay={i * 120}>
//                 <div className="relative p-6 rounded-2xl glass-premium gradient-border text-center">
//                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-mv-magenta text-white text-xs font-bold">
//                     {achievement.year}
//                   </div>
//                   <div className="mt-4">
//                     <Award size={32} className="text-mv-magenta mx-auto mb-3" />
//                     <h3 className="text-base font-bold text-foreground mb-2">{achievement.title}</h3>
//                     <p className="text-xs text-muted-foreground">{achievement.org}</p>
//                   </div>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       <AchievementsSection />

//       {/* Trusted By Section */}
//       {/* <section className="py-20 bg-muted/30">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-12">
//               <span className="text-xs uppercase tracking-widest text-mv-green font-semibold mb-4 block">
//                 Trusted Partners
//               </span>
//               <h3 className="text-2xl font-bold text-foreground">Companies That Trust Us</h3>
//             </div>
//           </SectionWrapper>

//           <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
//             {clientLogos.map((client, i) => (
//               <SectionWrapper key={client.name} delay={i * 50}>
//                 <div className="text-center">
//                   <div className="text-3xl mb-2 opacity-50 hover:opacity-100 transition-opacity">
//                     {client.icon}
//                   </div>
//                   <div className="text-xs text-muted-foreground">{client.name}</div>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       <TrustedClients />

//       {/* Testimonial/Commitment Section */}
//       {/* <section className="py-28">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <SectionWrapper>
//               <div className="relative">
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-mv-magenta/10 blur-2xl" />
//                 <Star size={48} className="text-mv-magenta mx-auto mb-6 relative z-10" />
//                 <blockquote className="text-2xl md:text-3xl font-light text-foreground mb-8 leading-relaxed">
//                   "MV Branding Strategy doesn't just deliver solutions—they deliver peace of mind. 
//                   Their commitment to our success goes far beyond the contract."
//                 </blockquote>
//                 <div className="flex items-center justify-center gap-3 mb-8">
//                   <div className="w-12 h-12 rounded-full bg-gradient-to-r from-mv-blue to-mv-magenta" />
//                   <div className="text-left">
//                     <div className="font-bold text-foreground">Sarah Johnson</div>
//                     <div className="text-sm text-muted-foreground">CTO, TechCorp International</div>
//                   </div>
//                 </div>
//                 <div className="flex justify-center gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={16} className="fill-mv-magenta text-mv-magenta" />
//                   ))}
//                 </div>
//               </div>
//             </SectionWrapper>
//           </div>
//         </div>
//       </section> */}

//       <section className="relative py-28 overflow-hidden">

//   {/* 🔥 Background Glow */}
//   <div className="absolute inset-0 -z-10">
//     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
//     bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//     opacity-10 blur-[120px] rounded-full" />
//   </div>

//   <div className="container mx-auto px-4 lg:px-8">
//     <div className="max-w-4xl mx-auto text-center">

//       <SectionWrapper>
//         <div className="relative">

//           {/* 🔥 Top Glow */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full 
//           bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//           opacity-20 blur-2xl" />

//           {/* ⭐ Main Icon */}
//           <div className="flex justify-center mb-6 relative z-10">
//             <div className="p-4 rounded-full 
//             bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 shadow-lg">
//               <Star size={28} className="text-white" />
//             </div>
//           </div>

//           {/* 💬 Quote */}
//           <blockquote className="text-2xl md:text-3xl font-light text-gray-800 mb-8 leading-relaxed">
//             "MV Branding Strategy doesn't just deliver solutions—they deliver peace of mind. 
//             Their commitment to our success goes far beyond the contract."
//           </blockquote>

//           {/* 👤 Profile */}
//           <div className="flex items-center justify-center gap-3 mb-8">

//             {/* Avatar */}
//             <div className="w-12 h-12 rounded-full 
//             bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 shadow-md" />

//             {/* Info */}
//             <div className="text-left">
//               <div className="font-bold text-gray-900">Sarah Johnson</div>
//               <div className="text-sm text-gray-500">
//                 CTO, TechCorp International
//               </div>
//             </div>

//           </div>

//           {/* ⭐ Rating */}
//           <div className="flex justify-center gap-1">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 size={18}
//                 className="text-yellow-400 fill-yellow-400"
//               />
//             ))}
//           </div>

//         </div>
//       </SectionWrapper>

//     </div>
//   </div>
//     </section>

//       {/* Final CTA */}
//       <section className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-mv-blue/20 via-mv-magenta/20 to-mv-green/20" />
//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <SectionWrapper>
//             <div className="max-w-3xl mx-auto text-center">
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
//                 Ready to Experience the MV Difference?
//               </h2>
//               <p className="text-lg text-muted-foreground mb-10">
//                 Join hundreds of satisfied clients who've transformed their infrastructure with us.
//               </p>
//               <div className="flex flex-wrap gap-4 justify-center">
//                 <Link to="/contact">
//                   <Button size="lg" className="hidden sm:inline-flex bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white border-0 shadow-lg hover:scale-105 transition">
//                     Let's Talk <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </Link>
//                 <Link to="/services">
//                   <Button size="lg" variant="outline" className="hidden sm:inline-flex bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white border-0 shadow-lg hover:scale-105 transition">
//                     View Services
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





import { 
  Network, Shield, Server, Cpu, CheckCircle, ArrowRight, Zap, Clock, 
  Award, HeartHandshake, Star, Globe, Target, Users, TrendingUp, 
  Briefcase, Lightbulb, ShieldCheck, Rocket, BadgeCheck, Handshake 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/SectionWrapper';
import NetworkBackground from '@/components/NetworkBackground';
import StatsSection from '@/components/WhyUsCompo/StatsSection';
import MVDifferencePage from '@/components/WhyUsCompo/MVDifferencepage';
import CoreValuesSection from '@/components/WhyUsCompo/ThreePillars';
import TrustedClients from '@/components/WhyUsCompo/TrustedClients';
import AchievementsSection from '@/components/WhyUsCompo/Achievements';
import ClientsSection from '@/components/WhyUsCompo/ClientsSection';
import CoreValue from '@/components/WhyUsCompo/Corevalue';
import ThreePillars from '@/components/WhyUsCompo/ThreePillars';
// import CoreValue from '@/components/WhyUsCompo/Corevalue';

// Why Us specific data
const coreValues = [
  {
    icon: ShieldCheck,
    title: 'Uncompromising Trust',
    desc: 'We build relationships on transparency, integrity, and delivering on our promises. Your infrastructure is in safe hands.',
    color: 'blue' as const,
    stats: '99.9% Client Retention'
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    desc: 'We don\'t just follow trends—we set them. Our solutions leverage cutting-edge technology to give you a competitive edge.',
    color: 'magenta' as const,
    stats: '15+ Years R&D Investment'
  },
  {
    icon: TrendingUp,
    title: 'Growth Partnership',
    desc: 'Your success is our success. We invest in understanding your business to deliver solutions that drive real growth.',
    color: 'green' as const,
    stats: '200% Avg. Client Growth'
  },
];

const differentiators = [
  {
    icon: Users,
    title: 'Dedicated Team',
    desc: 'You get a dedicated team of experts who know your infrastructure inside and out.',
    color: 'blue' as const
  },
  {
    icon: Clock,
    title: '24/7 Support',
    desc: 'Round-the-clock monitoring and support to ensure your systems never miss a beat.',
    color: 'magenta' as const
  },
  {
    icon: Award,
    title: 'Certified Excellence',
    desc: 'Industry-certified professionals with decades of combined experience.',
    color: 'green' as const
  },
  {
    icon: Target,
    title: 'Results-Driven',
    desc: 'We measure our success by your outcomes and business results.',
    color: 'blue' as const
  },
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    desc: 'Accelerated implementation timelines without compromising quality.',
    color: 'magenta' as const
  },
  {
    icon: Handshake,
    title: 'Long-term Partnership',
    desc: 'We\'re not just vendors—we\'re strategic partners invested in your success.',
    color: 'green' as const
  },
];

const clientLogos = [
  { name: 'Tech Corp', icon: '💼' },
  { name: 'Global Bank', icon: '🏦' },
  { name: 'Health Plus', icon: '🏥' },
  { name: 'EduWorld', icon: '🎓' },
  { name: 'ManufacturePro', icon: '🏭' },
  { name: 'Retail Giant', icon: '🛍️' },
];

const achievements = [
  { year: '2023', title: 'Best IT Infrastructure Provider', org: 'Tech Excellence Awards' },
  { year: '2022', title: 'Innovation in Security', org: 'Cybersecurity Leaders' },
  { year: '2021', title: 'Fastest Growing Tech Firm', org: 'Business Times' },
  { year: '2020', title: 'Client Choice Award', org: 'IT Services Association' },
];

const bgMap = { blue: 'bg-mv-blue/10', magenta: 'bg-mv-magenta/10', green: 'bg-mv-green/10' };
const textMap = { blue: 'text-mv-blue', magenta: 'text-mv-magenta', green: 'text-mv-green' };
const borderMap = { blue: 'border-mv-blue/20', magenta: 'border-mv-magenta/20', green: 'border-mv-green/20' };
const glowMap = { blue: 'hover:glow-blue', magenta: 'hover:glow-magenta', green: 'hover:glow-green' };

export default function WhyUs() {
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
      <section className="relative pt-32 pb-20 overflow-hidden mt-4">

        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Background"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 via-yellow-400/70 to-blue-600/80"></div>
        </div>

        <NetworkBackground />
        
        {/* Animated gradient blobs */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-pink-600/20 blur-[120px] animate-mesh-float" />
        <div
          className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px] animate-mesh-float"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-yellow-400/10 blur-[150px] animate-pulse-slow" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionWrapper>
            <div className="max-w-5xl mx-auto text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
              bg-white/20 border border-white/30 mb-8 backdrop-blur-md">
                <BadgeCheck size={16} className="text-white" />
                <span className="text-xs uppercase tracking-widest text-white font-semibold">
                  Why Choose MV Branding Strategy
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-black text-white mb-8 leading-[0.95]">
               Simplifying Customer complexity through MV’s proven design, build, and delivery expertise
                <span className="block bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
                   
                </span>
              </h1>

              {/* Description */}
              {/* <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
                We don't just implement IT solutions—we become an extension of your team.
                With a foundation built on{" "}
                <span className="text-yellow-200 font-semibold">Trust</span>, driven by{" "}
                <span className="text-pink-200 font-semibold">Innovation</span>, and focused on{" "}
                <span className="text-blue-200 font-semibold">Growth</span>, we deliver
                infrastructure that transforms businesses.
              </p> */}

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={scrollToContactForm}
                  className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
                  text-white font-bold h-14 px-8 shadow-lg hover:scale-105 transition-all duration-300 
                  rounded-lg flex items-center gap-2 cursor-pointer"
                >
                  Start Your Journey
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <Link to="/services">
                  <button
                    className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
                    text-white font-bold h-14 px-8 shadow-lg hover:scale-105 transition-all duration-300 
                    rounded-lg flex items-center gap-2 cursor-pointer"
                  >
                    Explore Services
                  </button>
                </Link>
              </div>

              {/* Trust indicators */}
              {/* <div className="flex flex-wrap justify-center gap-8 mt-16">
                <div className="flex items-center gap-2">
                  <Shield size={20} className="text-yellow-300" />
                  <span className="text-sm font-medium text-white">ISO 27001 Certified</span>
                </div>

                <div className="flex items-center gap-2">
                  <Award size={20} className="text-pink-300" />
                  <span className="text-sm font-medium text-white">10+ Industry Awards</span>
                </div>

                <div className="flex items-center gap-2">
                  <Users size={20} className="text-blue-300" />
                  <span className="text-sm font-medium text-white">500+ Happy Clients</span>
                </div>
              </div> */}

            </div>
          </SectionWrapper>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="rgba(0,0,0,0.15)"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z"
            ></path>
          </svg>
        </div>

      </section>

      <StatsSection />
      <ThreePillars />
       {/* <CoreValue /> */}
      <MVDifferencePage />
      <AchievementsSection />
      <ClientsSection />
      <TrustedClients />

      {/* Testimonial/Commitment Section */}
      {/* <section className="relative py-28 overflow-hidden">

        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
          bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
          opacity-10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">

            <SectionWrapper>
              <div className="relative">

                
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full 
                bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
                opacity-20 blur-2xl" />

                
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="p-4 rounded-full 
                  bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 shadow-lg">
                    <Star size={28} className="text-white" />
                  </div>
                </div>

                
                <blockquote className="text-2xl md:text-3xl font-light text-gray-800 mb-8 leading-relaxed">
                  "MV Branding Strategy doesn't just deliver solutions—they deliver peace of mind. 
                  Their commitment to our success goes far beyond the contract."
                </blockquote>

                
                <div className="flex items-center justify-center gap-3 mb-8">
                  
                  <div className="w-12 h-12 rounded-full 
                  bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 shadow-md" />
                  
                  <div className="text-left">
                    <div className="font-bold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">
                      CTO, TechCorp International
                    </div>
                  </div>
                </div>

                
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

              </div>
            </SectionWrapper>

          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-yellow-400/20 to-blue-600/20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                Ready to Experience the MV Difference?
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Join hundreds of satisfied clients who've transformed their infrastructure with us.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={scrollToContactForm}
                  className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
                  text-white font-bold h-14 px-8 shadow-lg hover:scale-105 transition-all duration-300 
                  rounded-lg flex items-center gap-2 cursor-pointer"
                >
                  Let's Talk <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link to="/services">
                  <button
                    className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
                    text-white font-bold h-14 px-8 shadow-lg hover:scale-105 transition-all duration-300 
                    rounded-lg flex items-center gap-2 cursor-pointer"
                  >
                    View Services
                  </button>
                </Link>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}