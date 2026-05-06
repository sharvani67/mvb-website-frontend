// import SectionWrapper from '@/components/SectionWrapper';
// import NetworkBackground from '@/components/NetworkBackground';
// import { Shield, Zap, Leaf, ArrowRight, Palette, Sparkles } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import brandColorsImg from '@/assets/brand-colors.jpg';

// const sections = [
//   {
//     icon: Shield,
//     color: 'blue',
//     title: 'Blue — Trust & Security',
//     subtitle: 'Loyalty · Trust · Dependability · Serenity · Security',
//     desc: 'Blue represents the bedrock of our brand — trust, loyalty, and unwavering security. It communicates stability and dependability, essential qualities for an IT infrastructure partner handling critical enterprise systems.',
//     extendedDesc: 'Blue evokes serenity and confidence. For MV Branding Strategy, it reflects our promise of security-first infrastructure that enterprise clients can depend on — a foundation as solid as the trust we build.',
//     qualities: ['Loyalty & Trust', 'Dependability', 'Serenity & Calm', 'Security & Protection'],
//     usage: ['Primary backgrounds and headers', 'Security-related iconography', 'Trust indicators and badges', 'Enterprise communication materials'],
//     bgClass: 'bg-mv-blue/5',
//     borderClass: 'border-mv-blue/20',
//     textClass: 'text-mv-blue',
//     glowClass: 'glow-blue',
//     gradientFrom: 'from-mv-blue/20',
//   },
//   {
//     icon: Zap,
//     color: 'magenta',
//     title: 'Magenta — Innovation & Creativity',
//     subtitle: 'Passion · Innovation · Transformation · Imagination · Creativity · Balance',
//     desc: 'Magenta embodies our commitment to passion, creativity, and transformative thinking. It represents the bold, forward-looking approach we bring to solving complex infrastructure challenges with imaginative solutions.',
//     extendedDesc: 'Magenta bridges the analytical with the creative, signaling that our solutions aren\'t just technically sound — they\'re inventive, balanced, and driven by genuine passion for excellence.',
//     qualities: ['Passion & Energy', 'Creative Innovation', 'Imaginative Solutions', 'Transformative Balance'],
//     usage: ['Innovation highlights and accents', 'Feature announcements', 'Creative campaign elements', 'Technology showcase materials'],
//     bgClass: 'bg-mv-magenta/5',
//     borderClass: 'border-mv-magenta/20',
//     textClass: 'text-mv-magenta',
//     glowClass: 'glow-magenta',
//     gradientFrom: 'from-mv-magenta/20',
//   },
//   {
//     icon: Leaf,
//     color: 'green',
//     title: 'Green — Growth & Nature',
//     subtitle: 'Health · Hope · Freshness · Nature · Growth · Environment',
//     desc: 'Green symbolizes health, hope, and our future-ready philosophy. It represents freshness, sustainable development, and the organic evolution of technology infrastructure in harmony with nature.',
//     extendedDesc: 'Green communicates that our infrastructure solutions are designed for longevity and the environment. They grow with your business, adapt naturally to change, and embody the freshness of continuous renewal.',
//     qualities: ['Health & Vitality', 'Hope & Optimism', 'Natural Growth', 'Environmental Awareness'],
//     usage: ['Growth metrics and success stories', 'Sustainability messaging', 'Progress indicators', 'Client success materials'],
//     bgClass: 'bg-mv-green/5',
//     borderClass: 'border-mv-green/20',
//     textClass: 'text-mv-green',
//     glowClass: 'glow-green',
//     gradientFrom: 'from-mv-green/20',
//   },
// ];

// const brandPrinciples = [
//   { title: 'Consistency', desc: 'Our brand elements are applied consistently across all touchpoints.' },
//   { title: 'Clarity', desc: 'Every visual element serves a purpose and communicates clearly.' },
//   { title: 'Premium Feel', desc: 'Quality materials and sophisticated design at every level.' },
//   { title: 'Accessibility', desc: 'Our brand is designed to be accessible and inclusive for all.' },
// ];

// export default function Brand() {
//   return (
//     <>
//       {/* Hero */}
//       <section className="relative py-32 overflow-hidden">
//         <NetworkBackground />
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-mv-magenta/10 blur-[100px] animate-mesh-float" />
//         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-mv-blue/10 blur-[100px] animate-mesh-float" style={{ animationDelay: '7s' }} />
//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <SectionWrapper>
//             <div className="text-center max-w-3xl mx-auto">
//               <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-6 block">Brand Philosophy</span>
//               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-[0.95]">
//                 The Psychology of Our <span className="gradient-text-animate">Brand Colors</span>
//               </h1>
//               <p className="text-xl text-muted-foreground leading-relaxed">
//                 Every color is intentionally chosen to communicate our values and build lasting trust.
//               </p>
//             </div>
//           </SectionWrapper>
//         </div>
//       </section>

//       {/* Brand Visual */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="rounded-3xl overflow-hidden shadow-2xl relative">
//               <img src={brandColorsImg} alt="MV Brand Colors" className="w-full h-64 sm:h-80 object-cover" />
//               <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 flex items-center justify-center">
//                 <div className="text-center">
//                   <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Blue · Magenta · Green</h2>
//                   <p className="text-white/70 max-w-md mx-auto">Three colors, one powerful story of Trust, Innovation, and Growth</p>
//                 </div>
//               </div>
//             </div>
//           </SectionWrapper>
//         </div>
//       </section>

//       {/* Color Sections */}
//       {sections.map((s, i) => (
//         <section key={s.color} className={`py-28 ${i % 2 === 0 ? '' : 'bg-muted/30'} relative overflow-hidden`}>
//           <div className={`absolute ${i % 2 === 0 ? 'right-0 top-0' : 'left-0 bottom-0'} w-[400px] h-[400px] rounded-full ${s.bgClass} blur-[80px] opacity-50`} />
//           <div className="container mx-auto px-4 lg:px-8">
//             <SectionWrapper>
//               <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
//                 <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
//                   <div className={`w-16 h-16 rounded-2xl ${s.bgClass} border ${s.borderClass} flex items-center justify-center mb-6 ${s.glowClass}`}>
//                     <s.icon size={32} className={s.textClass} />
//                   </div>
//                   <h2 className="text-4xl font-black text-foreground mb-3">{s.title}</h2>
//                   <p className={`text-sm font-semibold ${s.textClass} mb-5 uppercase tracking-widest`}>{s.subtitle}</p>
//                   <p className="text-muted-foreground leading-relaxed mb-4 text-lg">{s.desc}</p>
//                   <p className="text-sm text-muted-foreground leading-relaxed mb-8">{s.extendedDesc}</p>
                  
//                   <div className="grid grid-cols-2 gap-3 mb-8">
//                     {s.qualities.map(q => (
//                       <div key={q} className={`px-4 py-3 rounded-xl ${s.bgClass} border ${s.borderClass} text-sm font-medium text-foreground premium-card`}>
//                         {q}
//                       </div>
//                     ))}
//                   </div>

//                   <div>
//                     <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">Brand Usage</h4>
//                     <div className="space-y-2">
//                       {s.usage.map(u => (
//                         <div key={u} className="flex items-center gap-2 text-sm text-muted-foreground">
//                           <div className={`w-1.5 h-1.5 rounded-full ${s.bgClass.replace('/5', '/40')}`} />
//                           <span>{u}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
//                   <div className={`aspect-square rounded-3xl ${s.bgClass} border ${s.borderClass} flex items-center justify-center relative overflow-hidden ${s.glowClass} premium-card`}>
//                     <div className={`absolute inset-0 bg-gradient-to-br ${s.gradientFrom} to-transparent`} />
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="w-40 h-40 rounded-full border-2 border-current opacity-10 animate-spin-slow" />
//                     </div>
//                     <div className="relative z-10 text-center">
//                       <s.icon size={80} className={`${s.textClass} opacity-40 mx-auto mb-4`} />
//                       <div className={`text-3xl font-black ${s.textClass} opacity-60`}>{s.color.toUpperCase()}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SectionWrapper>
//           </div>
//         </section>
//       ))}

//       {/* Brand Principles */}
//       <section className="py-28 relative overflow-hidden">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center mb-20">
//               <span className="text-xs uppercase tracking-widest text-mv-blue font-semibold mb-4 block">Brand Principles</span>
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">How We Apply Our Brand</h2>
//               <p className="text-muted-foreground max-w-lg mx-auto">Guiding principles that ensure our brand remains strong and consistent</p>
//             </div>
//           </SectionWrapper>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {brandPrinciples.map((p, i) => (
//               <SectionWrapper key={p.title} delay={i * 100}>
//                 <div className="p-8 rounded-2xl glass-premium premium-card text-center h-full gradient-border">
//                   <Sparkles size={24} className="text-primary mx-auto mb-4" />
//                   <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
//                   <p className="text-sm text-muted-foreground">{p.desc}</p>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Unified Brand */}
//       <section className="py-28 bg-muted/30">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center max-w-3xl mx-auto">
//               <Palette size={48} className="text-primary mx-auto mb-6" />
//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">Together, They Tell Our Story</h2>
//               <p className="text-lg text-muted-foreground leading-relaxed mb-8">
//                 When Blue meets Magenta meets Green, they create a brand identity that communicates complete IT mastery.
//               </p>
//               <div className="h-6 rounded-full gradient-brand w-full max-w-lg mx-auto animate-gradient-shift mb-12 shadow-lg glow-brand" />
//               <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
//                 <div className="p-4 rounded-2xl bg-mv-blue/10 border border-mv-blue/20 text-center">
//                   <div className="text-sm font-bold text-mv-blue">Trust</div>
//                   <div className="text-xs text-muted-foreground mt-1">Loyalty · Security</div>
//                 </div>
//                 <div className="p-4 rounded-2xl bg-mv-magenta/10 border border-mv-magenta/20 text-center">
//                   <div className="text-sm font-bold text-mv-magenta">Innovation</div>
//                   <div className="text-xs text-muted-foreground mt-1">Passion · Creativity</div>
//                 </div>
//                 <div className="p-4 rounded-2xl bg-mv-green/10 border border-mv-green/20 text-center">
//                   <div className="text-sm font-bold text-mv-green">Growth</div>
//                   <div className="text-xs text-muted-foreground mt-1">Hope · Nature</div>
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
//               <div className="relative z-10">
//                 <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Experience Our Brand in Action</h2>
//                 <p className="text-white/80 mb-10 max-w-lg mx-auto text-lg">See how our brand values translate into world-class IT infrastructure solutions.</p>
//                 <Link to="/services">
//                   <Button size="lg" className="magnetic-btn bg-white text-foreground hover:bg-white/90 font-bold h-14 px-10">
//                     Explore Our Services <ArrowRight size={18} />
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





import SectionWrapper from '@/components/SectionWrapper';
import NetworkBackground from '@/components/NetworkBackground';
import { Shield, Zap, Leaf, ArrowRight, Palette, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import brandColorsImg from '@/assets/brand-colors.jpg';
import BrandColors from '@/components/BrandCompo/BrandColors';
import BrandPrinciples from '@/components/BrandCompo/BrandPrinciples';
import BrandStory from '@/components/BrandCompo/BrandStory';



const sections = [
  {
    icon: Shield,
    color: 'blue',
    title: 'Blue — Trust & Security',
    subtitle: 'Loyalty · Trust · Dependability · Serenity · Security',
    desc: 'Blue represents the bedrock of our brand — trust, loyalty, and unwavering security. It communicates stability and dependability, essential qualities for an IT infrastructure partner handling critical enterprise systems.',
    extendedDesc: 'Blue evokes serenity and confidence. For MV Branding Strategy, it reflects our promise of security-first infrastructure that enterprise clients can depend on — a foundation as solid as the trust we build.',
    qualities: ['Loyalty & Trust', 'Dependability', 'Serenity & Calm', 'Security & Protection'],
    usage: ['Primary backgrounds and headers', 'Security-related iconography', 'Trust indicators and badges', 'Enterprise communication materials'],
    bgClass: 'bg-mv-blue/5',
    borderClass: 'border-mv-blue/20',
    textClass: 'text-mv-blue',
    glowClass: 'glow-blue',
    gradientFrom: 'from-mv-blue/20',
  },
  {
    icon: Zap,
    color: 'magenta',
    title: 'Magenta — Innovation & Creativity',
    subtitle: 'Passion · Innovation · Transformation · Imagination · Creativity · Balance',
    desc: 'Magenta embodies our commitment to passion, creativity, and transformative thinking. It represents the bold, forward-looking approach we bring to solving complex infrastructure challenges with imaginative solutions.',
    extendedDesc: 'Magenta bridges the analytical with the creative, signaling that our solutions aren\'t just technically sound — they\'re inventive, balanced, and driven by genuine passion for excellence.',
    qualities: ['Passion & Energy', 'Creative Innovation', 'Imaginative Solutions', 'Transformative Balance'],
    usage: ['Innovation highlights and accents', 'Feature announcements', 'Creative campaign elements', 'Technology showcase materials'],
    bgClass: 'bg-mv-magenta/5',
    borderClass: 'border-mv-magenta/20',
    textClass: 'text-mv-magenta',
    glowClass: 'glow-magenta',
    gradientFrom: 'from-mv-magenta/20',
  },
  {
    icon: Leaf,
    color: 'green',
    title: 'Green — Growth & Nature',
    subtitle: 'Health · Hope · Freshness · Nature · Growth · Environment',
    desc: 'Green symbolizes health, hope, and our future-ready philosophy. It represents freshness, sustainable development, and the organic evolution of technology infrastructure in harmony with nature.',
    extendedDesc: 'Green communicates that our infrastructure solutions are designed for longevity and the environment. They grow with your business, adapt naturally to change, and embody the freshness of continuous renewal.',
    qualities: ['Health & Vitality', 'Hope & Optimism', 'Natural Growth', 'Environmental Awareness'],
    usage: ['Growth metrics and success stories', 'Sustainability messaging', 'Progress indicators', 'Client success materials'],
    bgClass: 'bg-mv-green/5',
    borderClass: 'border-mv-green/20',
    textClass: 'text-mv-green',
    glowClass: 'glow-green',
    gradientFrom: 'from-mv-green/20',
  },
];

const brandPrinciples = [
  { title: 'Consistency', desc: 'Our brand elements are applied consistently across all touchpoints.' },
  { title: 'Clarity', desc: 'Every visual element serves a purpose and communicates clearly.' },
  { title: 'Premium Feel', desc: 'Quality materials and sophisticated design at every level.' },
  { title: 'Accessibility', desc: 'Our brand is designed to be accessible and inclusive for all.' },
];

export default function Brand() {
  return (
    <>
      {/* Hero */}
      {/* <section className="relative py-32 overflow-hidden">
        <NetworkBackground />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-mv-magenta/10 blur-[100px] animate-mesh-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-mv-blue/10 blur-[100px] animate-mesh-float" style={{ animationDelay: '7s' }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionWrapper>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-6 block">Brand Philosophy</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-[0.95]">
                The Psychology of Our <span className="gradient-text-animate">Brand Colors</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every color is intentionally chosen to communicate our values and build lasting trust.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section> */}

    <section className="relative py-32 overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://i.pinimg.com/1200x/32/16/c5/3216c558c7a5d9009b73b80f50a1f910.jpg" 
      alt="Background" 
      className="w-full h-full object-cover"
    />
    {/* Optional overlay to ensure text readability */}
    <div className="absolute inset-0 bg-black/50" /> {/* Adjust opacity as needed */}
  </div>
  
  <NetworkBackground />
  <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-mv-magenta/10 blur-[100px] animate-mesh-float" />
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-mv-blue/10 blur-[100px] animate-mesh-float" style={{ animationDelay: '7s' }} />
  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    <SectionWrapper>
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-6 block">Brand Philosophy</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-[0.95]">
          The Psychology of Our <span className="gradient-text-animate">Brand Colors</span>
        </h1>
        <p className="text-xl text-white/80 leading-relaxed">
          Every color is intentionally chosen to communicate our values and build lasting trust.
        </p>
      </div>
    </SectionWrapper>
  </div>
  </section>

      {/* Brand Visual */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionWrapper>
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img src={brandColorsImg} alt="MV Brand Colors" className="w-full h-64 sm:h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Blue · Magenta · Green</h2>
                  <p className="text-white/70 max-w-md mx-auto">Three colors, one powerful story of Trust, Innovation, and Growth</p>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section> */}

      {/* Color Sections */}
      {/* {sections.map((s, i) => (
        <section key={s.color} className={`py-28 ${i % 2 === 0 ? '' : 'bg-muted/30'} relative overflow-hidden`}>
          <div className={`absolute ${i % 2 === 0 ? 'right-0 top-0' : 'left-0 bottom-0'} w-[400px] h-[400px] rounded-full ${s.bgClass} blur-[80px] opacity-50`} />
          <div className="container mx-auto px-4 lg:px-8">
            <SectionWrapper>
              <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 rounded-2xl ${s.bgClass} border ${s.borderClass} flex items-center justify-center mb-6 ${s.glowClass}`}>
                    <s.icon size={32} className={s.textClass} />
                  </div>
                  <h2 className="text-4xl font-black text-foreground mb-3">{s.title}</h2>
                  <p className={`text-sm font-semibold ${s.textClass} mb-5 uppercase tracking-widest`}>{s.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-lg">{s.desc}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8">{s.extendedDesc}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {s.qualities.map(q => (
                      <div key={q} className={`px-4 py-3 rounded-xl ${s.bgClass} border ${s.borderClass} text-sm font-medium text-foreground premium-card`}>
                        {q}
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">Brand Usage</h4>
                    <div className="space-y-2">
                      {s.usage.map(u => (
                        <div key={u} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full ${s.bgClass.replace('/5', '/40')}`} />
                          <span>{u}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div className={`aspect-square rounded-3xl ${s.bgClass} border ${s.borderClass} flex items-center justify-center relative overflow-hidden ${s.glowClass} premium-card`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${s.gradientFrom} to-transparent`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full border-2 border-current opacity-10 animate-spin-slow" />
                    </div>
                    <div className="relative z-10 text-center">
                      <s.icon size={80} className={`${s.textClass} opacity-40 mx-auto mb-4`} />
                      <div className={`text-3xl font-black ${s.textClass} opacity-60`}>{s.color.toUpperCase()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </section>
      ))} */}

      <BrandColors />


      {/* Brand Principles */}
      {/* <section className="py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionWrapper>
            <div className="text-center mb-20">
              <span className="text-xs uppercase tracking-widest text-mv-blue font-semibold mb-4 block">Brand Principles</span>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">How We Apply Our Brand</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">Guiding principles that ensure our brand remains strong and consistent</p>
            </div>
          </SectionWrapper>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandPrinciples.map((p, i) => (
              <SectionWrapper key={p.title} delay={i * 100}>
                <div className="p-8 rounded-2xl glass-premium premium-card text-center h-full gradient-border">
                  <Sparkles size={24} className="text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section> */}

      <BrandPrinciples />

      {/* Unified Brand */}
      {/* <section className="py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionWrapper>
            <div className="text-center max-w-3xl mx-auto">
              <Palette size={48} className="text-primary mx-auto mb-6" />
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">Together, They Tell Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                When Blue meets Magenta meets Green, they create a brand identity that communicates complete IT mastery.
              </p>
              <div className="h-6 rounded-full gradient-brand w-full max-w-lg mx-auto animate-gradient-shift mb-12 shadow-lg glow-brand" />
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="p-4 rounded-2xl bg-mv-blue/10 border border-mv-blue/20 text-center">
                  <div className="text-sm font-bold text-mv-blue">Trust</div>
                  <div className="text-xs text-muted-foreground mt-1">Loyalty · Security</div>
                </div>
                <div className="p-4 rounded-2xl bg-mv-magenta/10 border border-mv-magenta/20 text-center">
                  <div className="text-sm font-bold text-mv-magenta">Innovation</div>
                  <div className="text-xs text-muted-foreground mt-1">Passion · Creativity</div>
                </div>
                <div className="p-4 rounded-2xl bg-mv-green/10 border border-mv-green/20 text-center">
                  <div className="text-sm font-bold text-mv-green">Growth</div>
                  <div className="text-xs text-muted-foreground mt-1">Hope · Nature</div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section> */}

      <BrandStory />

      {/* CTA */}
      {/* <section className="py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionWrapper>
            <div className="rounded-3xl gradient-brand p-16 md:p-24 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Experience Our Brand in Action</h2>
                <p className="text-white/80 mb-10 max-w-lg mx-auto text-lg">See how our brand values translate into world-class IT infrastructure solutions.</p>
                <Link to="/services">
                  <Button size="lg" className="magnetic-btn bg-white text-foreground hover:bg-white/90 font-bold h-14 px-10">
                    Explore Our Services <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section> */}

      <section className="py-28">
  <div className="container mx-auto px-4 lg:px-8">
    <SectionWrapper>
      <div
        className="rounded-3xl p-16 md:p-24 text-center relative overflow-hidden
        bg-gradient-to-r 
        from-[#E11D48] 
        via-[#FACC15] 
        to-[#2563EB]"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        {/* Decorative Elements */}
        <div className="absolute top-12 left-12 w-28 h-28 rounded-full border border-white/10 animate-pulse" />
        <div className="absolute bottom-12 right-12 w-24 h-24 rounded-full border border-white/10 animate-spin-slow" />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Experience Our Brand in Action
          </h2>

          <p className="text-white/80 mb-10 max-w-lg mx-auto text-lg">
            See how our brand values translate into world-class IT infrastructure solutions.
          </p>

          <Link to="/services">
            <Button
              size="lg"
              className="magnetic-btn bg-white text-black hover:bg-white/90 font-bold h-14 px-10 shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explore Our Services <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  </div>
</section>
    </>
  );
}

