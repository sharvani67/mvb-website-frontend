// // BrandStoryPage.tsx
// import React, { useEffect, useRef } from 'react';
// import { Palette, Sparkles, Shield, Rocket, Leaf, ArrowRight } from 'lucide-react';

// // Animation wrapper component
// const SectionWrapper: React.FC<{ children: React.ReactNode; delay?: number }> = ({ 
//   children, 
//   delay = 0 
// }) => {
//   const [isVisible, setIsVisible] = React.useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setTimeout(() => setIsVisible(true), delay);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => observer.disconnect();
//   }, [delay]);

//   return (
//     <div
//       ref={ref}
//       className={`transition-all duration-1000 transform ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//       }`}
//     >
//       {children}
//     </div>
//   );
// };

// // Floating particles component
// const FloatingParticles: React.FC = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {[...Array(20)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-1 h-1 bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green rounded-full animate-float"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 5}s`,
//             animationDuration: `${3 + Math.random() * 4}s`,
//             opacity: 0.2 + Math.random() * 0.3,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// const BrandStory: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/50 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-mv-blue/5 via-transparent to-transparent" />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-mv-green/5 via-transparent to-transparent" />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-mv-magenta/5 via-transparent to-transparent" />
      
//       <FloatingParticles />

//       {/* Main content */}
//       <section className="py-28 md:py-36 relative z-10">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionWrapper>
//             <div className="text-center max-w-4xl mx-auto">
//               {/* Icon with glow effect */}
//               <div className="relative inline-block mb-8">
//                 <div className="absolute inset-0 bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green rounded-full blur-2xl opacity-50 animate-pulse" />
//                 <div className="relative bg-gradient-to-br from-mv-blue/20 via-mv-magenta/20 to-mv-green/20 p-4 rounded-full border border-white/10 backdrop-blur-sm">
//                   <Palette size={56} className="text-primary" />
//                 </div>
//               </div>

//               {/* Title with gradient */}
//               <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
//                 <span className="bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
//                   Together, They Tell
//                 </span>
//                 <br />
//                 <span className="text-foreground">Our Story</span>
//               </h2>

//               {/* Description */}
//               <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
//                 When Blue meets Magenta meets Green, they create a brand identity that communicates 
//                 <span className="text-foreground font-semibold"> complete IT mastery</span>.
//               </p>

//               {/* Animated gradient bar */}
//               <div className="relative max-w-lg mx-auto mb-16">
//                 <div className="h-1 rounded-full bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green animate-gradient-shift bg-[length:200%_auto] shadow-lg" />
//                 <div className="absolute -inset-1 bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green rounded-full blur-md opacity-50 animate-pulse" />
//               </div>

//               {/* Color cards with enhanced design */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
//                 {/* Blue Card - Trust */}
//                 <div className="group relative">
//                   <div className="absolute inset-0 bg-gradient-to-r from-mv-blue to-mv-blue/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
//                   <div className="relative p-8 rounded-2xl bg-gradient-to-br from-mv-blue/10 via-mv-blue/5 to-transparent border border-mv-blue/20 backdrop-blur-sm hover:border-mv-blue/40 transition-all duration-500 hover:scale-105">
//                     <Shield size={32} className="text-mv-blue mb-4 mx-auto" />
//                     <h3 className="text-xl font-bold text-mv-blue mb-2">Trust</h3>
//                     <p className="text-sm text-muted-foreground">Loyalty · Security</p>
//                     <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-mv-blue to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
//                   </div>
//                 </div>

//                 {/* Magenta Card - Innovation */}
//                 <div className="group relative">
//                   <div className="absolute inset-0 bg-gradient-to-r from-mv-magenta to-mv-magenta/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
//                   <div className="relative p-8 rounded-2xl bg-gradient-to-br from-mv-magenta/10 via-mv-magenta/5 to-transparent border border-mv-magenta/20 backdrop-blur-sm hover:border-mv-magenta/40 transition-all duration-500 hover:scale-105">
//                     <Rocket size={32} className="text-mv-magenta mb-4 mx-auto" />
//                     <h3 className="text-xl font-bold text-mv-magenta mb-2">Innovation</h3>
//                     <p className="text-sm text-muted-foreground">Passion · Creativity</p>
//                     <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-mv-magenta to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
//                   </div>
//                 </div>

//                 {/* Green Card - Growth */}
//                 <div className="group relative">
//                   <div className="absolute inset-0 bg-gradient-to-r from-mv-green to-mv-green/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
//                   <div className="relative p-8 rounded-2xl bg-gradient-to-br from-mv-green/10 via-mv-green/5 to-transparent border border-mv-green/20 backdrop-blur-sm hover:border-mv-green/40 transition-all duration-500 hover:scale-105">
//                     <Leaf size={32} className="text-mv-green mb-4 mx-auto" />
//                     <h3 className="text-xl font-bold text-mv-green mb-2">Growth</h3>
//                     <p className="text-sm text-muted-foreground">Hope · Nature</p>
//                     <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-mv-green to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
//                   </div>
//                 </div>
//               </div>

//               {/* Call to action */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                 <button className="group relative px-8 py-4 bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-[length:200%_auto] animate-gradient-shift">
//                   <span className="relative z-10 flex items-center gap-2">
//                     Discover Our Story
//                     <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
//                 </button>
                
//                 <button className="px-8 py-4 bg-transparent border border-muted-foreground/20 text-foreground font-semibold rounded-full hover:bg-muted/10 transition-all duration-300 hover:border-muted-foreground/40">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </SectionWrapper>
//         </div>
//       </section>

//       {/* Bottom decorative wave */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg className="w-full h-24 text-muted/30" viewBox="0 0 1200 120" preserveAspectRatio="none">
//           <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".25"></path>
//           <path d="M0,0V15.81C13,21.25,27.93,25.71,44.5,28.45c69.76,11.57,142.11,3.86,211.54-9.69C330.38,4.58,403.74,17.81,478,31.56c68.48,13.09,137.81,19.35,207.33,6.81,37.64-6.8,74.15-18.55,110.52-30.5C861.33-6.35,1027.44-19.86,1200,27.91V0Z" fill="currentColor" opacity=".5"></path>
//           <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,974,97.73,1200,33.33V0Z" fill="currentColor"></path>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default BrandStory;






import React, { useEffect, useRef } from 'react';
import { Palette, Shield, Rocket, Leaf, ArrowRight } from 'lucide-react';

// Animation wrapper component
const SectionWrapper: React.FC<{ children: React.ReactNode; delay?: number }> = ({ 
  children, 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

// Background component with image
const BackgroundWithImage: React.FC = () => {
  return (
    <div className="absolute inset-0">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://i.pinimg.com/1200x/8d/30/01/8d3001a414e57135054eff006e38ee9a.jpg")',
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />
    </div>
  );
};

const BrandStoryPage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with Image */}
      <BackgroundWithImage />

      {/* Main content */}
      <section className="relative z-10 py-28 md:py-36">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionWrapper>
            <div className="text-center max-w-4xl mx-auto">
              {/* Icon with glow effect */}
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green rounded-full blur-2xl opacity-50 animate-pulse" />
                <div className="relative bg-gradient-to-br from-mv-blue/20 via-mv-magenta/20 to-mv-green/20 p-4 rounded-full border border-white/10 backdrop-blur-sm">
                  <Palette size={56} className="text-white" />
                </div>
              </div>

              {/* Title with gradient */}
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                  Together, They Tell
                </span>
                <br />
                <span className="text-white">Our Story</span>
              </h2>

              {/* Description */}
              <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
                When Blue meets Magenta meets Green, they create a brand identity that communicates 
                <span className="text-white font-semibold"> complete IT mastery</span>.
              </p>

              {/* Animated gradient bar */}
              <div className="relative max-w-lg mx-auto mb-16">
                <div className="h-1 rounded-full bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green animate-gradient-shift bg-[length:200%_auto] shadow-lg" />
                <div className="absolute -inset-1 bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green rounded-full blur-md opacity-50 animate-pulse" />
              </div>

              {/* Color cards with enhanced design - Matching image UI */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
  {/* Blue Card - Trust */}
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-mv-blue to-mv-blue/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-mv-blue/20 via-mv-blue/10 to-transparent border border-mv-blue/30 backdrop-blur-md hover:border-mv-blue/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-mv-blue/20">
      <Shield size={32} className="text-mv-blue mb-4 mx-auto" />
      <h3 className="text-xl font-bold text-white mb-2">Trust</h3>
      <p className="text-sm text-white/80">Loyalty · Security</p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-mv-blue to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  </div>

  {/* Magenta Card - Innovation */}
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-mv-magenta to-mv-magenta/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-mv-magenta/20 via-mv-magenta/10 to-transparent border border-mv-magenta/30 backdrop-blur-md hover:border-mv-magenta/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-mv-magenta/20">
      <Rocket size={32} className="text-mv-magenta mb-4 mx-auto" />
      <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
      <p className="text-sm text-white/80">Passion · Creativity</p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-mv-magenta to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  </div>

  {/* Green Card - Growth */}
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-mv-green to-mv-green/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-mv-green/20 via-mv-green/10 to-transparent border border-mv-green/30 backdrop-blur-md hover:border-mv-green/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-mv-green/20">
      <Leaf size={32} className="text-mv-green mb-4 mx-auto" />
      <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
      <p className="text-sm text-white/80">Hope · Nature</p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-mv-green to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  </div>
            </div>

              {/* Call to action */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-[length:200%_auto] animate-gradient-shift">
                  <span className="relative z-10 flex items-center gap-2">
                    Discover Our Story
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                </button>
                
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:border-white/40">
                  Learn More
                </button>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

     
     
    </div>
  );
};

export default BrandStoryPage;