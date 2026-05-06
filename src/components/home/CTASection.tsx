// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import SectionWrapper from '@/components/SectionWrapper';
// import heroDatacenter from '@/assets/hero-datacenter.jpg';

// export default function CTASection() {
//   return (
//     <section className="py-8">
//       <div className="container mx-auto px-4 lg:px-8">
//         <SectionWrapper>
//           <div className="rounded-3xl relative overflow-hidden">
//             <img src={heroDatacenter} alt="Data center" className="absolute inset-0 w-full h-full object-cover" />
//             <div className="absolute inset-0 gradient-brand opacity-80" />
//             <div className="absolute inset-0 bg-black/30" />
//             <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white/10 animate-spin-slow" />
//             <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border-2 border-white/5 animate-spin-slow" style={{ animationDelay: '-15s' }} />
            
//             <div className="relative z-10 p-16 md:p-24 text-center">
//               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
//                 Ready to Transform Your
//                 <br />
//                 IT Infrastructure?
//               </h2>
//               <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
//                 Let's build a secure, scalable, and future-ready infrastructure that gives you peace of mind and drives growth.
//               </p>
              
//               <div className="flex flex-wrap justify-center gap-4">
//                 <Link to="/contact">
//                   <Button size="lg" className="magnetic-btn bg-white text-foreground hover:bg-white/90 font-bold h-14 px-10 text-base">
//                     Schedule a Consultation <ArrowRight size={18} />
//                   </Button>
//                 </Link>
//                 <Link to="/services">
//                   <Button size="lg" variant="outline" className="magnetic-btn border-white/30 text-white hover:bg-white/10 h-14 px-10 text-base">
//                     View Our Services
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </SectionWrapper>
//       </div>
//     </section>
//   );
// }


import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroDatacenter from '@/assets/hero-datacenter.jpg';
import { useEffect, useRef } from 'react';

export default function CTASection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Particle animation for background
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: any[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: `rgba(59, 130, 246, ${Math.random() * 0.3})`,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Background Image with Cinematic Zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroDatacenter}
          alt="Enterprise Infrastructure"
          className="absolute inset-0 w-full h-full object-cover scale-110 animate-slow-zoom"
        />
        {/* Darker gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-black/95" />
        {/* Subtle colored overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20 mix-blend-overlay" />
      </div>

      {/* Animated Light Leaks - Reduced opacity */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[200px] rounded-full animate-pulse-slow animation-delay-4000" />
      </div>

      {/* Advanced Grid System - Reduced opacity */}
      <div className="absolute inset-0 opacity-10">
        {/* Main grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
        {/* Secondary diagonal grid */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_calc(50%-1px),rgba(255,255,255,0.05)_calc(50%-1px),rgba(255,255,255,0.05)_calc(50%+1px),transparent_calc(50%+1px))] bg-[size:80px_80px]" />
        {/* Scanning line effect */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-500/10 to-transparent animate-scan" />
      </div>

      {/* Floating Tech Elements - Reduced opacity */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500/30 rounded-lg rotate-12 animate-float">
          <div className="absolute inset-0 bg-blue-500/5 blur-sm" />
        </div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-purple-500/30 rounded-full animate-float-delayed">
          <div className="absolute inset-2 border border-purple-500/20 rounded-full" />
        </div>
        <div className="absolute top-1/2 right-10 w-24 h-24 border border-cyan-500/30 rounded-full animate-ping-slow" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in-up shadow-lg">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-white">Enterprise Infrastructure</span>
          <div className="flex gap-1 ml-2">
            <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
            <span className="w-1 h-1 rounded-full bg-purple-400 animate-pulse animation-delay-300" />
            <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse animation-delay-600" />
          </div>
        </div>

        {/* Main Title with Staggered Animation - FIXED: Better contrast */}
        <h2 ref={textRef} className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
          <span className="block overflow-hidden">
            <span className="inline-block animate-text-reveal text-white drop-shadow-2xl">
              Architect the
            </span>
          </span>
          <span className="block overflow-hidden mt-2">
            <span className="inline-block animate-text-reveal animation-delay-500 text-white drop-shadow-2xl">
              Future of
            </span>
          </span>
          <span className="block mt-2">
            <span className="inline-block animate-text-reveal animation-delay-1000">
              <span className="text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent font-black drop-shadow-2xl">
                Intelligent Infrastructure
              </span>
            </span>
          </span>
        </h2>

        {/* Feature Pills - FIXED: Better visibility */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 animate-fade-in-up animation-delay-1500">
          {[
            { icon: Shield, text: 'Enterprise Security', color: 'blue', bg: 'bg-blue-500/20' },
            { icon: Zap, text: 'High Performance', color: 'purple', bg: 'bg-purple-500/20' },
            { icon: Globe, text: 'Global Scale', color: 'cyan', bg: 'bg-cyan-500/20' },
          ].map((feature, i) => (
            <div
              key={i}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${feature.bg} backdrop-blur-sm border border-white/20 group hover:${feature.bg} transition-all duration-300 shadow-lg`}
            >
              <feature.icon className={`w-4 h-4 text-${feature.color}-300`} />
              <span className="text-sm font-medium text-white">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Description with Glow - FIXED: Better contrast */}
        <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-2000 drop-shadow-lg">
          <span className="font-bold text-white">Secure. Scalable. Resilient.</span>
          <span className="block mt-2 text-white/80">
            We engineer enterprise-grade IT ecosystems that power
            mission-critical operations and unlock unstoppable growth.
          </span>
        </p>

        {/* CTA Buttons with Advanced Effects */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up animation-delay-2500">

          <Link to="/contact" className="group relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
            
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold h-14 px-12 rounded-full shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/50 text-base"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              
              {/* Particle effects on hover */}
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-white/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </Link>

          <Link to="/services">
            <Button
              size="lg"
              variant="outline"
              className="group relative h-14 px-12 rounded-full border-2 border-white/30 text-black hover:bg-white/20 backdrop-blur-md transition-all duration-300 hover:border-white/50 overflow-hidden text-base font-semibold"
            >
              <span className="relative z-10">Explore Capabilities</span>
              
              {/* Animated background on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />
            </Button>
          </Link>

        </div>

        {/* Trust Indicators - FIXED: Better contrast */}
        <div className="mt-16 flex flex-col items-center gap-4 animate-fade-in-up animation-delay-3000">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-blue-400/70" />
            ))}
            <span className="text-xs font-mono text-white/60 mx-2 tracking-wider">TRUSTED BY INDUSTRY LEADERS</span>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-purple-400/70" />
            ))}
          </div>

          {/* Company logos placeholder - FIXED: Better visibility */}
          <div className="flex justify-center gap-8 opacity-50 hover:opacity-80 transition-opacity duration-500">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-16 h-8 bg-white/30 rounded animate-pulse shadow-lg" />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

      {/* Scroll Indicator - FIXED: Better visibility */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer">
        <div className="w-5 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-scroll-indicator" />
        </div>
        <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors tracking-widest font-medium">
          SCROLL
        </span>
      </div> */}

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1.1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes scan {
          0% { top: -20%; }
          100% { top: 120%; }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1); opacity: 0.3; }
        }
        .animate-ping-slow {
          animation: ping-slow 3s ease-in-out infinite;
        }

        @keyframes text-reveal {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-text-reveal {
          animation: text-reveal 1s ease-out forwards;
        }

        @keyframes fade-in-up {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
        }

        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 1; }
          75% { transform: translateY(15px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease infinite;
        }

        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-1500 { animation-delay: 1500ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
        .animation-delay-2500 { animation-delay: 2500ms; }
        .animation-delay-3000 { animation-delay: 3000ms; }
        .animation-delay-4000 { animation-delay: 4000ms; }

        /* Additional text shadows for better visibility */
        .drop-shadow-2xl {
          filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.5));
        }
      `}</style>

    </section>
  );
}