// import SectionWrapper from '@/components/SectionWrapper';
// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

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

// export default function StatsSection() {
//   return (
//     <section className="py-28 relative overflow-hidden">
//       <div className="absolute inset-0 gradient-brand opacity-[0.03]" />
//       <div className="container mx-auto px-4 lg:px-8">
//         <SectionWrapper>
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-black text-foreground mb-4">Numbers That Speak</h2>
//             <p className="text-muted-foreground">Our track record of delivering excellence</p>
//           </div>
//         </SectionWrapper>
        
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           <StatCounter target={250} suffix="+" label="Projects Delivered" />
//           <StatCounter target={120} suffix="+" label="Clients Served" />
//           <StatCounter target={15} suffix="+" label="Years of Experience" />
//           <StatCounter target={99} suffix="%" label="Client Satisfaction" />
//         </div>
//       </div>
//     </section>
//   );
// }



// import { useEffect, useRef, useState } from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// function StatCounter({
//   target,
//   suffix,
//   label,
//   index,
// }: {
//   target: number;
//   suffix: string;
//   label: string;
//   index: number;
// }) {
//   const { ref, isVisible } = useScrollAnimation();
//   const [displayValue, setDisplayValue] = useState("0");
//   const [isAnimating, setIsAnimating] = useState(false);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const animationRef = useRef<number>();

//   useEffect(() => {
//     if (!isVisible || isAnimating) return;
    
//     setIsAnimating(true);
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // Set canvas size
//     canvas.width = 200;
//     canvas.height = 100;

//     const chars = "0123456789";
//     const fontSize = 14;
//     const columns = canvas.width / fontSize;
    
//     const drops: number[] = [];
//     for (let i = 0; i < columns; i++) {
//       drops[i] = Math.floor(Math.random() * -canvas.height);
//     }

//     let frame = 0;
//     const totalFrames = 120; // Animation duration in frames
//     const targetStr = target.toString();

//     const draw = () => {
//       // Semi-transparent black to create fade effect
//       ctx.fillStyle = 'rgba(11, 15, 25, 0.1)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.font = `${fontSize}px 'Courier New', monospace`;
      
//       // Digital rain effect
//       for (let i = 0; i < drops.length; i++) {
//         const char = chars[Math.floor(Math.random() * chars.length)];
        
//         // Gradient from cyan to purple
//         const gradient = ctx.createLinearGradient(0, drops[i] * fontSize, 0, (drops[i] + 1) * fontSize);
//         gradient.addColorStop(0, '#8B5CF6');
//         gradient.addColorStop(1, '#06B6D4');
        
//         ctx.fillStyle = gradient;
//         ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
//         // Reset drop when it reaches bottom
//         if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//           drops[i] = 0;
//         }
        
//         drops[i]++;
//       }

//       // Morphing number overlay
//       ctx.font = 'bold 48px "Courier New", monospace';
//       ctx.textAlign = 'center';
//       ctx.textBaseline = 'middle';
      
//       // Calculate morphing progress
//       const progress = Math.min(frame / totalFrames, 1);
      
//       // Create morphing effect
//       let currentDisplay = "";
//       if (progress < 0.3) {
//         // Phase 1: Random chaos
//         currentDisplay = Math.floor(Math.random() * 1000).toString();
//       } else if (progress < 0.6) {
//         // Phase 2: Partial reveal
//         const revealCount = Math.floor((progress - 0.3) / 0.3 * targetStr.length);
//         currentDisplay = targetStr.substring(0, revealCount) + 
//                         Array(targetStr.length - revealCount).fill('?').join('');
//       } else if (progress < 0.9) {
//         // Phase 3: Glitch effect
//         if (Math.random() > 0.7) {
//           currentDisplay = targetStr.split('').map((char, i) => 
//             Math.random() > 0.5 ? char : Math.floor(Math.random() * 10).toString()
//           ).join('');
//         } else {
//           currentDisplay = targetStr;
//         }
//       } else {
//         // Phase 4: Final reveal
//         currentDisplay = targetStr;
//       }

//       // Draw the morphing number with glow effect
//       ctx.shadowColor = '#8B5CF6';
//       ctx.shadowBlur = 20;
//       ctx.fillStyle = '#FFFFFF';
//       ctx.fillText(currentDisplay + suffix, canvas.width / 2, canvas.height / 2);
      
//       // Reset shadow
//       ctx.shadowBlur = 0;

//       frame++;
      
//       if (frame <= totalFrames) {
//         animationRef.current = requestAnimationFrame(draw);
//       } else {
//         // Final state
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.font = 'bold 48px "Courier New", monospace';
//         ctx.textAlign = 'center';
//         ctx.textBaseline = 'middle';
//         ctx.fillStyle = '#FFFFFF';
//         ctx.shadowColor = '#8B5CF6';
//         ctx.shadowBlur = 20;
//         ctx.fillText(target + suffix, canvas.width / 2, canvas.height / 2);
//         setDisplayValue(target + suffix);
//         setIsAnimating(false);
//       }
//     };

//     animationRef.current = requestAnimationFrame(draw);

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isVisible, target, suffix]);

//   return (
//     <div ref={ref} className="text-center group">
//       <div className="relative w-full h-32 flex items-center justify-center">
//         {/* Canvas for digital rain effect */}
//         <canvas
//           ref={canvasRef}
//           className="w-full h-32 object-contain"
//           style={{ maxWidth: '200px', margin: '0 auto' }}
//         />
        
//         {/* Static fallback while animating */}
//         {!isVisible && (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <span className="text-5xl md:text-6xl font-black tracking-tight text-white">
//               0{suffix}
//             </span>
//           </div>
//         )}
//       </div>
      
//       <div className="text-sm text-gray-400 mt-3 font-medium tracking-wide relative">
//         {label}
        
//         {/* Animated underline on hover */}
//         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-purple-500 group-hover:w-12 transition-all duration-300" />
//       </div>
//     </div>
//   );
// }

// // Alternative 2: Particle Explosion Counter
// function ParticleStatCounter({
//   target,
//   suffix,
//   label,
//   index,
// }: {
//   target: number;
//   suffix: string;
//   label: string;
//   index: number;
// }) {
//   const { ref, isVisible } = useScrollAnimation();
//   const [displayValue, setDisplayValue] = useState(0);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const animationRef = useRef<number>();

//   useEffect(() => {
//     if (!isVisible) return;

//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     canvas.width = 200;
//     canvas.height = 100;

//     const particles: any[] = [];
//     const particleCount = 50;

//     // Create initial particle explosion
//     for (let i = 0; i < particleCount; i++) {
//       const angle = (i / particleCount) * Math.PI * 2;
//       const speed = 5 + Math.random() * 5;
//       particles.push({
//         x: canvas.width / 2,
//         y: canvas.height / 2,
//         vx: Math.cos(angle) * speed,
//         vy: Math.sin(angle) * speed,
//         life: 1,
//         color: `hsl(${Math.random() * 60 + 260}, 80%, 60%)`,
//         size: 2 + Math.random() * 3,
//       });
//     }

//     let frame = 0;
//     const totalFrames = 90;
//     let currentNumber = 0;

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       const progress = frame / totalFrames;
      
//       // Update and draw particles
//       particles.forEach(p => {
//         p.x += p.vx * (1 - progress * 0.5);
//         p.y += p.vy * (1 - progress * 0.5);
//         p.vx *= 0.98;
//         p.vy *= 0.98;
//         p.life *= 0.99;
        
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
//         ctx.fillStyle = p.color;
//         ctx.fill();
//       });

//       // Draw connecting lines between particles
//       ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
//       ctx.lineWidth = 0.5;
//       for (let i = 0; i < particles.length; i += 2) {
//         for (let j = i + 1; j < particles.length; j += 3) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
          
//           if (dist < 30) {
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - dist/30)})`;
//             ctx.stroke();
//           }
//         }
//       }

//       // Update number based on progress
//       if (progress < 0.3) {
//         currentNumber = Math.floor(Math.random() * 50);
//       } else if (progress < 0.7) {
//         const subProgress = (progress - 0.3) / 0.4;
//         currentNumber = Math.floor(target * subProgress * (0.8 + Math.random() * 0.4));
//       } else {
//         const subProgress = (progress - 0.7) / 0.3;
//         currentNumber = Math.floor(target * (subProgress + (1 - subProgress) * 0.9));
//       }

//       // Draw number
//       ctx.font = 'bold 48px "Courier New", monospace';
//       ctx.textAlign = 'center';
//       ctx.textBaseline = 'middle';
//       ctx.shadowColor = '#8B5CF6';
//       ctx.shadowBlur = 20 * (1 - progress);
//       ctx.fillStyle = '#FFFFFF';
//       ctx.fillText(
//         currentNumber + suffix, 
//         canvas.width / 2, 
//         canvas.height / 2
//       );

//       frame++;
      
//       if (frame <= totalFrames) {
//         animationRef.current = requestAnimationFrame(draw);
//       } else {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.shadowBlur = 20;
//         ctx.fillText(target + suffix, canvas.width / 2, canvas.height / 2);
//         setDisplayValue(target);
//       }
//     };

//     animationRef.current = requestAnimationFrame(draw);

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isVisible, target, suffix]);

//   return (
//     <div ref={ref} className="text-center group">
//       <div className="relative w-full h-32 flex items-center justify-center">
//         <canvas
//           ref={canvasRef}
//           className="w-full h-32 object-contain"
//           style={{ maxWidth: '200px', margin: '0 auto' }}
//         />
//       </div>
      
//       <div className="text-sm text-gray-400 mt-3 font-medium tracking-wide relative">
//         {label}
//         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-purple-500 group-hover:w-12 transition-all duration-300" />
//       </div>
//     </div>
//   );
// }

// export default function StatsSection() {
//   const [animationType, setAnimationType] = useState<'digital' | 'particle'>('digital');
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let width = canvas.width = window.innerWidth;
//     let height = canvas.height = canvas.offsetHeight;

//     const particles: any[] = [];
//     const particleCount = 50;

//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * width,
//         y: Math.random() * height,
//         vx: (Math.random() - 0.5) * 0.3,
//         vy: (Math.random() - 0.5) * 0.3,
//         size: 1 + Math.random() * 2,
//         hue: 260 + Math.random() * 60,
//       });
//     }

//     function draw() {
//       ctx.clearRect(0, 0, width, height);

//       particles.forEach((p) => {
//         p.x += p.vx;
//         p.y += p.vy;

//         if (p.x < 0 || p.x > width) p.vx *= -1;
//         if (p.y < 0 || p.y > height) p.vy *= -1;

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//         ctx.fillStyle = `hsl(${p.hue}, 80%, 60%)`;
//         ctx.fill();
//       });

//       // Draw geometric patterns
//       ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
//       ctx.lineWidth = 1;
      
//       for (let i = 0; i < 5; i++) {
//         const time = Date.now() * 0.001;
//         const radius = 100 + Math.sin(time + i) * 20;
        
//         ctx.beginPath();
//         ctx.arc(
//           width / 2 + Math.sin(time * 0.5 + i) * 50,
//           height / 2 + Math.cos(time * 0.3 + i) * 50,
//           radius,
//           0,
//           Math.PI * 2
//         );
//         ctx.stroke();
//       }

//       requestAnimationFrame(draw);
//     }

//     draw();

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = canvas.offsetHeight;
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section className="relative py-32 bg-[#0B0F19] overflow-hidden">
      
//       {/* Background Canvas */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full"
//       />

//       <div className="relative z-10 container mx-auto px-6 lg:px-12">
//         <SectionWrapper>
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
//               Numbers That Speak
//             </h2>
//             <p className="text-gray-400 text-lg mb-8">
//               Our track record of delivering excellence
//             </p>
            
//             {/* Animation type toggle */}
//             <div className="inline-flex bg-gray-800/50 rounded-full p-1">
//               <button
//                 onClick={() => setAnimationType('digital')}
//                 className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                   animationType === 'digital' 
//                     ? 'bg-purple-600 text-white' 
//                     : 'text-gray-400 hover:text-white'
//                 }`}
//               >
//                 Digital Rain
//               </button>
//               <button
//                 onClick={() => setAnimationType('particle')}
//                 className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                   animationType === 'particle' 
//                     ? 'bg-purple-600 text-white' 
//                     : 'text-gray-400 hover:text-white'
//                 }`}
//               >
//                 Particle Explosion
//               </button>
//             </div>
//           </div>
//         </SectionWrapper>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
//           {animationType === 'digital' ? (
//             <>
//               <StatCounter target={250} suffix="+" label="Projects Delivered" index={0} />
//               <StatCounter target={120} suffix="+" label="Clients Served" index={1} />
//               <StatCounter target={15} suffix="+" label="Years of Experience" index={2} />
//               <StatCounter target={99} suffix="%" label="Client Satisfaction" index={3} />
//             </>
//           ) : (
//             <>
//               <ParticleStatCounter target={250} suffix="+" label="Projects Delivered" index={0} />
//               <ParticleStatCounter target={120} suffix="+" label="Clients Served" index={1} />
//               <ParticleStatCounter target={15} suffix="+" label="Years of Experience" index={2} />
//               <ParticleStatCounter target={99} suffix="%" label="Client Satisfaction" index={3} />
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }





// import { useEffect, useRef, useState } from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// function StatCounter({
//   target,
//   suffix,
//   label,
//   index,
// }: {
//   target: number;
//   suffix: string;
//   label: string;
//   index: number;
// }) {
//   const { ref, isVisible } = useScrollAnimation();
//   const [displayValue, setDisplayValue] = useState("0");
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const animationRef = useRef<number>();
//   const portalRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!isVisible) return;

//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d', { alpha: false });
//     if (!ctx) return;

//     // Set canvas size with higher resolution for crisp text
//     canvas.width = 400;
//     canvas.height = 200;
    
//     // Enable anti-aliasing
//     ctx.imageSmoothingEnabled = true;
    
//     const portalColors = [
//       { primary: '#8B5CF6', secondary: '#EC4899', accent: '#06B6D4' }, // Purple to pink to cyan
//       { primary: '#10B981', secondary: '#3B82F6', accent: '#8B5CF6' }, // Emerald to blue to purple
//       { primary: '#F59E0B', secondary: '#EF4444', accent: '#EC4899' }, // Amber to red to pink
//       { primary: '#6366F1', secondary: '#A855F7', accent: '#EC4899' }, // Indigo to purple to pink
//     ];
    
//     const colors = portalColors[index % portalColors.length];
    
//     let frame = 0;
//     const totalFrames = 150; // 2.5 seconds at 60fps
//     let time = 0;

//     // Portal particles
//     const particles: any[] = [];
//     const particleCount = 30;
    
//     for (let i = 0; i < particleCount; i++) {
//       const angle = (i / particleCount) * Math.PI * 2;
//       particles.push({
//         angle,
//         radius: 40 + Math.random() * 30,
//         speed: 0.01 + Math.random() * 0.02,
//         size: 1 + Math.random() * 3,
//         hue: Math.random() * 60,
//       });
//     }

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Calculate progress with easing
//       const progress = Math.min(frame / totalFrames, 1);
//       const easeOutElastic = (t: number): number => {
//         if (t === 0) return 0;
//         if (t === 1) return 1;
//         return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
//       };
      
//       const easedProgress = easeOutElastic(progress);
      
//       // Dark background with gradient
//       const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
//       bgGradient.addColorStop(0, '#0B0F19');
//       bgGradient.addColorStop(1, '#1A1F2F');
//       ctx.fillStyle = bgGradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Draw portal rings
//       const centerX = canvas.width / 2;
//       const centerY = canvas.height / 2;
      
//       time += 0.02;
      
//       // Multiple rotating rings
//       for (let ring = 0; ring < 3; ring++) {
//         const ringProgress = Math.max(0, Math.min(1, (progress - ring * 0.2) * 2));
//         if (ringProgress <= 0) continue;
        
//         const ringRadius = 30 + ring * 40 + Math.sin(time * 2 + ring) * 5;
//         const rotationSpeed = ring % 2 === 0 ? 1 : -1;
        
//         ctx.save();
//         ctx.translate(centerX, centerY);
//         ctx.rotate(time * rotationSpeed * 0.5);
        
//         // Draw ring with gradient
//         ctx.beginPath();
//         ctx.arc(0, 0, ringRadius * (0.5 + ringProgress * 0.5), 0, Math.PI * 2);
        
//         const ringGradient = ctx.createConicGradient(0, 0, 0);
//         ringGradient.addColorStop(0, colors.primary);
//         ringGradient.addColorStop(0.25, colors.secondary);
//         ringGradient.addColorStop(0.5, colors.accent);
//         ringGradient.addColorStop(0.75, colors.secondary);
//         ringGradient.addColorStop(1, colors.primary);
        
//         ctx.strokeStyle = ringGradient;
//         ctx.lineWidth = 2 * (1 - ring * 0.2);
//         ctx.setLineDash([5 * (1 + ring), 10]);
//         ctx.stroke();
        
//         ctx.restore();
//       }

//       // Draw particles orbiting
//       particles.forEach(p => {
//         p.angle += p.speed;
        
//         const x = centerX + Math.cos(p.angle + time) * p.radius * (0.8 + Math.sin(time) * 0.2);
//         const y = centerY + Math.sin(p.angle + time) * p.radius * (0.8 + Math.cos(time) * 0.2);
        
//         const particleProgress = Math.max(0, progress * 2 - 0.5);
        
//         if (particleProgress > 0) {
//           ctx.beginPath();
//           ctx.arc(x, y, p.size * particleProgress, 0, Math.PI * 2);
          
//           // Glowing particles
//           ctx.shadowColor = colors.primary;
//           ctx.shadowBlur = 15;
//           ctx.fillStyle = `hsl(${260 + p.hue}, 80%, 70%)`;
//           ctx.fill();
//         }
//       });

//       // Reset shadow for text
//       ctx.shadowBlur = 0;

//       // Draw energy waves
//       for (let i = 0; i < 3; i++) {
//         const waveProgress = Math.max(0, progress * 2 - i * 0.5);
//         if (waveProgress <= 0) continue;
        
//         ctx.beginPath();
//         ctx.arc(centerX, centerY, 20 + i * 25 + Math.sin(time * 3 + i) * 5, 0, Math.PI * 2);
        
//         const gradient = ctx.createRadialGradient(
//           centerX - 10, centerY - 10, 0,
//           centerX, centerY, 50 + i * 30
//         );
//         gradient.addColorStop(0, `rgba(139, 92, 246, ${0.3 * waveProgress})`);
//         gradient.addColorStop(0.5, `rgba(236, 72, 153, ${0.2 * waveProgress})`);
//         gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
        
//         ctx.fillStyle = gradient;
//         ctx.fill();
//       }

//       // Calculate number with glitch effect
//       let currentNumber = "";
//       const numberProgress = Math.max(0, (progress - 0.3) / 0.7);
      
//       if (progress < 0.3) {
//         // Phase 1: Portal opening - show fragments
//         const fragments = ['◇', '◈', '◊', '○', '◌', '◍'];
//         currentNumber = fragments[Math.floor(Math.random() * fragments.length)] + 
//                        fragments[Math.floor(Math.random() * fragments.length)];
//       } else if (progress < 0.6) {
//         // Phase 2: Numbers materializing with glitch
//         const revealProgress = (progress - 0.3) / 0.3;
//         const targetStr = target.toString();
//         const revealCount = Math.floor(revealProgress * targetStr.length);
        
//         if (Math.random() > 0.7) {
//           // Glitch effect
//           currentNumber = targetStr.split('').map((char, i) => {
//             if (i < revealCount) return char;
//             return Math.random() > 0.5 ? '8' : '3';
//           }).join('');
//         } else {
//           currentNumber = targetStr.substring(0, revealCount) + 
//                          '░'.repeat(targetStr.length - revealCount);
//         }
//       } else {
//         // Phase 3: Stabilizing with holographic effect
//         const stabilizeProgress = (progress - 0.6) / 0.4;
        
//         if (stabilizeProgress < 0.8 && Math.random() > stabilizeProgress) {
//           // Occasional flicker
//           currentNumber = target.toString().split('').map(() => 
//             Math.floor(Math.random() * 10).toString()
//           ).join('');
//         } else {
//           currentNumber = target.toString();
//         }
//       }

//       // Draw number with holographic effects
//       ctx.save();
//       ctx.textAlign = 'center';
//       ctx.textBaseline = 'middle';
      
//       // Main number with gradient
//       const textGradient = ctx.createLinearGradient(
//         centerX - 50, centerY - 30,
//         centerX + 50, centerY + 30
//       );
//       textGradient.addColorStop(0, colors.primary);
//       textGradient.addColorStop(0.5, colors.secondary);
//       textGradient.addColorStop(1, colors.accent);
      
//       // Scale text based on progress
//       const scale = 0.5 + Math.abs(Math.sin(progress * Math.PI * 3)) * 0.3;
      
//       ctx.font = `bold ${72 * scale}px "Space Grotesk", "Courier New", monospace`;
      
//       // Multiple layers for holographic effect
//       for (let layer = 0; layer < 3; layer++) {
//         const layerOffset = (layer - 1) * 2 * Math.sin(time * 5);
//         const layerOpacity = 0.3 * (1 - progress) * (1 - layer * 0.2);
        
//         ctx.shadowColor = layer === 0 ? colors.primary : 
//                          layer === 1 ? colors.secondary : colors.accent;
//         ctx.shadowBlur = 20 * (1 - progress);
//         ctx.fillStyle = `rgba(255, 255, 255, ${layerOpacity})`;
//         ctx.fillText(
//           currentNumber + suffix,
//           centerX + layerOffset,
//           centerY + Math.sin(time * 3 + layer) * 5
//         );
//       }
      
//       // Main number
//       ctx.shadowColor = colors.primary;
//       ctx.shadowBlur = 30 * (1 - progress) + 10;
//       ctx.fillStyle = textGradient;
//       ctx.fillText(currentNumber + suffix, centerX, centerY);
      
//       ctx.restore();

//       // Add scanlines
//       ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
//       for (let i = 0; i < canvas.height; i += 4) {
//         ctx.fillRect(0, i, canvas.width, 1);
//       }

//       frame++;
      
//       if (frame <= totalFrames) {
//         animationRef.current = requestAnimationFrame(draw);
//       } else {
//         // Final frame
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.fillStyle = '#0B0F19';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
        
//         ctx.textAlign = 'center';
//         ctx.textBaseline = 'middle';
//         ctx.font = 'bold 72px "Space Grotesk", "Courier New", monospace';
        
//         const finalGradient = ctx.createLinearGradient(
//           centerX - 50, centerY - 30,
//           centerX + 50, centerY + 30
//         );
//         finalGradient.addColorStop(0, colors.primary);
//         finalGradient.addColorStop(0.5, colors.secondary);
//         finalGradient.addColorStop(1, colors.accent);
        
//         ctx.shadowColor = colors.primary;
//         ctx.shadowBlur = 30;
//         ctx.fillStyle = finalGradient;
//         ctx.fillText(target + suffix, centerX, centerY);
        
//         setDisplayValue(target + suffix);
//       }
//     };

//     animationRef.current = requestAnimationFrame(draw);

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isVisible, target, suffix, index]);

//   return (
//     <div ref={ref} className="text-center group">
//       <div 
//         ref={portalRef}
//         className="relative w-full h-48 flex items-center justify-center"
//       >
//         {/* Canvas for holographic portal effect */}
//         <canvas
//           ref={canvasRef}
//           className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-110"
//           style={{ 
//             maxWidth: '300px', 
//             margin: '0 auto',
//             filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))'
//           }}
//         />
        
//         {/* Energy orb overlay */}
//         <div className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-500">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-purple-600 blur-3xl" />
//         </div>
//       </div>
      
//       <div className="text-sm text-gray-400 mt-3 font-medium tracking-wide relative">
//         {label}
        
//         {/* Energy line on hover */}
//         <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-16 transition-all duration-500 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
//       </div>
//     </div>
//   );
// }

// export default function StatsSection() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let width = canvas.width = window.innerWidth;
//     let height = canvas.height = canvas.offsetHeight;

//     // Create energy field particles
//     const particles: any[] = [];
//     const particleCount = 100;

//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * width,
//         y: Math.random() * height,
//         vx: (Math.random() - 0.5) * 0.2,
//         vy: (Math.random() - 0.5) * 0.2,
//         size: 0.5 + Math.random() * 1.5,
//         energy: Math.random() * Math.PI * 2,
//         pulse: Math.random() * Math.PI * 2,
//       });
//     }

//     function draw() {
//       ctx.clearRect(0, 0, width, height);
      
//       const time = Date.now() * 0.001;

//       // Draw energy grid
//       ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
//       ctx.lineWidth = 0.5;
      
//       const gridSize = 50;
//       const offsetX = (mousePosition.x - width / 2) * 0.01;
//       const offsetY = (mousePosition.y - height / 2) * 0.01;
      
//       for (let x = 0; x < width; x += gridSize) {
//         ctx.beginPath();
//         ctx.moveTo(x + offsetX, 0);
//         ctx.lineTo(x + offsetX + Math.sin(time) * 5, height);
//         ctx.strokeStyle = `rgba(139, 92, 246, ${0.05 + Math.sin(time + x) * 0.02})`;
//         ctx.stroke();
//       }
      
//       for (let y = 0; y < height; y += gridSize) {
//         ctx.beginPath();
//         ctx.moveTo(0, y + offsetY);
//         ctx.lineTo(width, y + offsetY + Math.cos(time) * 5);
//         ctx.strokeStyle = `rgba(236, 72, 153, ${0.05 + Math.cos(time + y) * 0.02})`;
//         ctx.stroke();
//       }

//       // Draw energy particles
//       particles.forEach((p) => {
//         p.energy += 0.02;
//         p.pulse += 0.03;
        
//         // Mouse interaction
//         if (mousePosition.x && mousePosition.y) {
//           const dx = p.x - mousePosition.x;
//           const dy = p.y - mousePosition.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
          
//           if (dist < 150) {
//             const angle = Math.atan2(dy, dx);
//             const force = (150 - dist) / 150;
//             p.x += Math.cos(angle) * force * 0.5;
//             p.y += Math.sin(angle) * force * 0.5;
//           }
//         }

//         p.x += p.vx + Math.sin(p.energy) * 0.1;
//         p.y += p.vy + Math.cos(p.energy) * 0.1;

//         // Wrap around edges
//         if (p.x < 0) p.x = width;
//         if (p.x > width) p.x = 0;
//         if (p.y < 0) p.y = height;
//         if (p.y > height) p.y = 0;

//         // Draw particle with pulsing glow
//         const pulseSize = p.size + Math.sin(p.pulse) * 0.3;
        
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2);
        
//         // Create gradient glow
//         const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulseSize * 4);
//         gradient.addColorStop(0, `rgba(139, 92, 246, 0.8)`);
//         gradient.addColorStop(0.5, `rgba(236, 72, 153, 0.4)`);
//         gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
        
//         ctx.fillStyle = gradient;
//         ctx.fill();
//       });

//       requestAnimationFrame(draw);
//     }

//     draw();

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = canvas.offsetHeight;
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("mousemove", handleMouseMove);
    
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <section className="relative py-32 bg-[#0B0F19] overflow-hidden">
      
//       {/* Energy Field Background */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full"
//       />

//       <div className="relative z-10 container mx-auto px-6 lg:px-12">
//         <SectionWrapper>
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
//               <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
//                 Dimensional Statistics
//               </span>
//             </h2>
//             <p className="text-gray-400 text-lg">
//               Numbers materialized from another dimension
//             </p>
//           </div>
//         </SectionWrapper>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
//           <StatCounter target={250} suffix="+" label="Projects Delivered" index={0} />
//           <StatCounter target={120} suffix="+" label="Clients Served" index={1} />
//           <StatCounter target={15} suffix="+" label="Years of Experience" index={2} />
//           <StatCounter target={99} suffix="%" label="Client Satisfaction" index={3} />
//         </div>
//       </div>
//     </section>
//   );
// }




// import { useEffect, useRef, useState } from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// function StatCounter({
//   target,
//   suffix,
//   label,
//   index,
// }: {
//   target: number;
//   suffix: string;
//   label: string;
//   index: number;
// }) {
//   const { ref, isVisible } = useScrollAnimation();
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const animationRef = useRef<number>();
//   const glitchRef = useRef<number>(0);
//   const timeRef = useRef<number>(0);

//   useEffect(() => {
//     if (!isVisible) return;

//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d', { alpha: false });
//     if (!ctx) return;

//     // 4K resolution for crisp quantum effects
//     canvas.width = 800;
//     canvas.height = 400;
    
//     // Quantum configuration
//     const quantumStates = {
//       superposition: true,
//       entanglement: index,
//       timeline: 0,
//       parallel: 5,
//     };

//     let frame = 0;
//     const totalFrames = 180; // 3 seconds at 60fps
//     let timeline = 0;
    
//     // Create quantum particles
//     const quantumParticles: any[] = [];
//     const particleCount = 100;
    
//     for (let i = 0; i < particleCount; i++) {
//       quantumParticles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         z: Math.random() * 100,
//         vx: (Math.random() - 0.5) * 2,
//         vy: (Math.random() - 0.5) * 2,
//         vz: (Math.random() - 0.5) * 0.5,
//         spin: Math.random() * Math.PI * 2,
//         mass: 0.5 + Math.random() * 2,
//         timeline: Math.floor(Math.random() * 5),
//         color: `hsl(${260 + Math.random() * 60}, 80%, 60%)`,
//       });
//     }

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Quantum background - multiple dimensions
//       const time = Date.now() * 0.001;
//       timeRef.current = time;
      
//       // Create dimensional layers
//       for (let dim = 0; dim < 5; dim++) {
//         const dimProgress = Math.sin(time * 0.5 + dim) * 0.5 + 0.5;
        
//         // Dimensional grid with perspective
//         ctx.save();
//         ctx.translate(canvas.width / 2, canvas.height / 2);
        
//         if (dim === 2) {
//           // Third dimension - rotation
//           ctx.rotate(time * 0.1);
//         } else if (dim === 3) {
//           // Fourth dimension - skew
//           ctx.transform(1, Math.sin(time * 0.3) * 0.1, Math.cos(time * 0.3) * 0.1, 1, 0, 0);
//         }
        
//         // Draw dimensional grid
//         ctx.strokeStyle = `rgba(139, 92, 246, ${0.05 / (dim + 1)})`;
//         ctx.lineWidth = 1;
        
//         const gridSize = 40;
//         const offset = time * 20 * (dim + 1);
        
//         for (let x = -canvas.width; x < canvas.width; x += gridSize) {
//           ctx.beginPath();
//           ctx.moveTo(x + offset % gridSize, -canvas.height);
//           ctx.lineTo(x + offset % gridSize, canvas.height);
//           ctx.stroke();
//         }
        
//         for (let y = -canvas.height; y < canvas.height; y += gridSize) {
//           ctx.beginPath();
//           ctx.moveTo(-canvas.width, y + offset % gridSize);
//           ctx.lineTo(canvas.width, y + offset % gridSize);
//           ctx.stroke();
//         }
        
//         ctx.restore();
//       }

//       // Calculate quantum progress
//       const progress = Math.min(frame / totalFrames, 1);
//       const quantumProgress = Math.pow(progress, 0.5); // Quantum tunneling curve
      
//       // Update and draw quantum particles
//       quantumParticles.forEach(p => {
//         // Quantum motion
//         p.x += p.vx * Math.sin(time * p.spin) * 0.5;
//         p.y += p.vy * Math.cos(time * p.spin) * 0.5;
//         p.z += p.vz;
        
//         // Quantum tunneling through boundaries
//         if (p.x < 0 || p.x > canvas.width) {
//           p.vx *= -1;
//           // Tunnel to parallel dimension
//           p.timeline = (p.timeline + 1) % 5;
//         }
//         if (p.y < 0 || p.y > canvas.height) {
//           p.vy *= -1;
//           p.timeline = (p.timeline + 2) % 5;
//         }
//         if (p.z < 0 || p.z > 100) {
//           p.vz *= -1;
//         }

//         // Draw particle in multiple timelines
//         for (let t = 0; t < 3; t++) {
//           const timelineOffset = t * 20;
//           const opacity = 0.3 * (1 - t * 0.2) * Math.sin(time * 2 + p.spin);
          
//           ctx.beginPath();
          
//           // FIXED: Ensure radius is always positive
//           const baseRadius = p.mass * (1 - Math.abs(p.z) / 200);
//           const radius = Math.max(0.5, baseRadius); // Minimum radius of 0.5
          
//           ctx.arc(
//             p.x + Math.sin(time + t) * 10,
//             p.y + Math.cos(time + t) * 10,
//             radius,
//             0,
//             Math.PI * 2
//           );
          
//           // Quantum glow
//           ctx.shadowColor = p.color;
//           ctx.shadowBlur = 20;
//           ctx.fillStyle = p.color.replace(')', `, ${opacity})`).replace('hsl', 'hsla');
//           ctx.fill();
//         }
//       });

//       // Reset shadow
//       ctx.shadowBlur = 0;

//       // Create number through quantum superposition
//       const centerX = canvas.width / 2;
//       const centerY = canvas.height / 2;
      
//       // Calculate multiple timeline values
//       const timelineValues = [];
//       for (let t = 0; t < 5; t++) {
//         const timelineOffset = (t - 2) * 0.1;
//         let value;
        
//         if (progress < 0.2) {
//           // Quantum foam - pure randomness
//           value = Math.floor(Math.random() * 1000);
//         } else if (progress < 0.4) {
//           // Wave function collapse - partial
//           const collapseProgress = (progress - 0.2) / 0.2;
//           value = Math.floor(target * (collapseProgress + Math.random() * 0.5));
//         } else if (progress < 0.6) {
//           // Quantum interference
//           const interference = Math.sin(progress * Math.PI * 10) * 0.3;
//           value = Math.floor(target * (0.7 + interference));
//         } else if (progress < 0.8) {
//           // Timeline convergence
//           const convergeProgress = (progress - 0.6) / 0.2;
//           value = Math.floor(target * (0.9 + Math.random() * 0.1 * (1 - convergeProgress)));
//         } else {
//           // Reality stabilization
//           value = target;
//         }
        
//         timelineValues.push(value);
//       }

//       // Draw quantum number with reality-bending effects
//       ctx.save();
//       ctx.textAlign = 'center';
//       ctx.textBaseline = 'middle';
      
//       // Main quantum number with multiple dimensions
//       for (let dim = 0; dim < 5; dim++) {
//         const dimIntensity = Math.sin(time * 2 + dim) * 0.5 + 0.5;
//         const dimValue = timelineValues[dim % timelineValues.length];
        
//         // Dimensional offset
//         const offsetX = Math.sin(time * 3 + dim) * 10 * (1 - progress);
//         const offsetY = Math.cos(time * 2 + dim) * 10 * (1 - progress);
//         const rotate = Math.sin(time + dim) * 0.1 * (1 - progress);
        
//         ctx.save();
//         ctx.translate(centerX + offsetX, centerY + offsetY);
//         ctx.rotate(rotate);
        
//         // Dimensional scaling
//         const scale = 0.8 + Math.sin(time * 5 + dim) * 0.1;
//         ctx.font = `bold ${72 * scale}px "Space Grotesk", "Courier New", monospace`;
        
//         // Create dimensional gradient
//         const gradient = ctx.createConicGradient(time + dim, 0, 0);
//         gradient.addColorStop(0, '#8B5CF6');
//         gradient.addColorStop(0.2, '#EC4899');
//         gradient.addColorStop(0.4, '#06B6D4');
//         gradient.addColorStop(0.6, '#10B981');
//         gradient.addColorStop(0.8, '#F59E0B');
//         gradient.addColorStop(1, '#8B5CF6');
        
//         ctx.shadowColor = `hsl(${260 + dim * 30}, 80%, 60%)`;
//         ctx.shadowBlur = 30 * dimIntensity;
//         ctx.fillStyle = gradient;
//         ctx.globalAlpha = 0.3 * dimIntensity;
        
//         ctx.fillText(dimValue + suffix, 0, 0);
//         ctx.restore();
//       }

//       // Reality core - the main number stabilizing
//       ctx.save();
//       ctx.translate(centerX, centerY);
      
//       // Reality distortion field
//       const distortion = Math.sin(time * 10) * 5 * (1 - progress);
      
//       // Main number with quantum effects
//       ctx.font = 'bold 96px "Space Grotesk", "Courier New", monospace';
      
//       // Quantum glow
//       ctx.shadowColor = '#8B5CF6';
//       ctx.shadowBlur = 50;
      
//       // Reality-bending gradient
//       const coreGradient = ctx.createRadialGradient(-20, -20, 10, 20, 20, 100);
//       coreGradient.addColorStop(0, '#FFFFFF');
//       coreGradient.addColorStop(0.3, '#8B5CF6');
//       coreGradient.addColorStop(0.6, '#EC4899');
//       coreGradient.addColorStop(1, '#06B6D4');
      
//       ctx.fillStyle = coreGradient;
      
//       // Apply quantum distortion
//       if (progress < 0.9) {
//         // Text splitting effect
//         ctx.save();
        
//         // Draw main text
//         ctx.fillText(timelineValues[0] + suffix, distortion, 0);
        
//         // Draw ghost copies with different colors
//         ctx.save();
//         ctx.translate(-distortion * 2, 0);
//         ctx.fillStyle = 'rgba(236, 72, 153, 0.5)';
//         ctx.fillText(timelineValues[1] + suffix, 0, 0);
//         ctx.restore();
        
//         ctx.save();
//         ctx.translate(distortion * 3, distortion);
//         ctx.fillStyle = 'rgba(6, 182, 212, 0.5)';
//         ctx.fillText(timelineValues[2] + suffix, 0, 0);
//         ctx.restore();
        
//         ctx.restore();
//       } else {
//         ctx.fillText(target + suffix, 0, 0);
//       }
      
//       ctx.restore();

//       // Quantum entanglement lines between counters
//       if (quantumStates.entanglement !== undefined) {
//         ctx.beginPath();
//         ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * Math.sin(time * 2)})`;
//         ctx.lineWidth = 1;
//         ctx.setLineDash([5, 10]);
        
//         for (let i = 0; i < 3; i++) {
//           const angle = time + i * 2;
//           const x1 = centerX + Math.cos(angle) * 100;
//           const y1 = centerY + Math.sin(angle) * 100;
//           const x2 = centerX + Math.cos(angle + Math.PI) * 100;
//           const y2 = centerY + Math.sin(angle + Math.PI) * 100;
          
//           ctx.beginPath();
//           ctx.moveTo(x1, y1);
//           ctx.lineTo(x2, y2);
//           ctx.stroke();
//         }
//       }

//       // Reality glitch effect
//       if (Math.random() > 0.95 && progress < 0.8) {
//         glitchRef.current = 5;
//       }
      
//       if (glitchRef.current > 0) {
//         // Apply glitch
//         const glitchData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        
//         for (let i = 0; i < glitchData.data.length; i += 4) {
//           if (Math.random() > 0.99) {
//             glitchData.data[i] = 255; // R
//             glitchData.data[i + 1] = 0; // G
//             glitchData.data[i + 2] = 255; // B
//           }
//         }
        
//         ctx.putImageData(glitchData, Math.random() * 10 - 5, Math.random() * 10 - 5);
//         glitchRef.current--;
//       }

//       // Time dilation effect
//       timeline += 0.01;
      
//       frame++;
      
//       if (frame <= totalFrames) {
//         animationRef.current = requestAnimationFrame(draw);
//       } else {
//         // Final reality collapse
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
        
//         // Stable background
//         ctx.fillStyle = '#0B0F19';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
        
//         // Final number with quantum stability
//         ctx.save();
//         ctx.translate(centerX, centerY);
//         ctx.font = 'bold 96px "Space Grotesk", "Courier New", monospace';
//         ctx.textAlign = 'center';
//         ctx.textBaseline = 'middle';
        
//         // Stable gradient
//         const finalGradient = ctx.createLinearGradient(-50, -30, 50, 30);
//         finalGradient.addColorStop(0, '#8B5CF6');
//         finalGradient.addColorStop(0.5, '#EC4899');
//         finalGradient.addColorStop(1, '#06B6D4');
        
//         ctx.shadowColor = '#8B5CF6';
//         ctx.shadowBlur = 30;
//         ctx.fillStyle = finalGradient;
//         ctx.fillText(target + suffix, 0, 0);
//         ctx.restore();
//       }
//     };

//     animationRef.current = requestAnimationFrame(draw);

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isVisible, target, suffix, index]);

//   return (
//     <div ref={ref} className="text-center group">
//       <div className="relative w-full h-64 flex items-center justify-center">
//         {/* Canvas for quantum reality effect */}
//         <canvas
//           ref={canvasRef}
//           className="w-full h-64 object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
//           style={{ 
//             maxWidth: '450px', 
//             margin: '0 auto',
//             filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.6))',
//             transformStyle: 'preserve-3d',
//           }}
//         />
        
//         {/* Quantum field overlay */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
//             <div className="absolute inset-0 rounded-full bg-purple-600 blur-3xl opacity-20 animate-pulse" />
//             <div className="absolute inset-0 rounded-full bg-pink-600 blur-3xl opacity-20 animate-pulse animation-delay-300" />
//             <div className="absolute inset-0 rounded-full bg-cyan-600 blur-3xl opacity-20 animate-pulse animation-delay-700" />
//           </div>
//         </div>
//       </div>
      
//       <div className="text-sm text-gray-400 mt-3 font-medium tracking-wide relative">
//         {label}
        
//         {/* Quantum entanglement line */}
//         <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-20 transition-all duration-700 bg-gradient-to-r from-transparent via-purple-500 via-pink-500 via-cyan-500 to-transparent" />
//       </div>
//     </div>
//   );
// }

// export default function StatsSection() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [dimension, setDimension] = useState(0);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let width = canvas.width = window.innerWidth;
//     let height = canvas.height = canvas.offsetHeight;

//     // Create quantum foam particles
//     const particles: any[] = [];
//     const particleCount = 150;

//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * width,
//         y: Math.random() * height,
//         z: Math.random() * 200,
//         vx: (Math.random() - 0.5) * 0.5,
//         vy: (Math.random() - 0.5) * 0.5,
//         vz: (Math.random() - 0.5) * 0.2,
//         phase: Math.random() * Math.PI * 2,
//         timeline: Math.floor(Math.random() * 3),
//       });
//     }

//     function draw() {
//       ctx.clearRect(0, 0, width, height);
      
//       const time = Date.now() * 0.001;

//       // Draw quantum field
//       for (let z = 0; z < 5; z++) {
//         const zIndex = z / 5;
//         const perspective = 1 - zIndex * 0.5;
        
//         ctx.save();
//         ctx.translate(width / 2, height / 2);
//         ctx.scale(perspective, perspective);
//         ctx.translate(-width / 2, -height / 2);
        
//         // Draw dimensional waves
//         ctx.beginPath();
//         ctx.strokeStyle = `rgba(139, 92, 246, ${0.03})`;
//         ctx.lineWidth = 1;
        
//         for (let i = 0; i < 10; i++) {
//           const wave = Math.sin(time * 2 + i + z) * 50;
//           ctx.beginPath();
//           ctx.moveTo(0, height / 2 + wave);
          
//           for (let x = 0; x < width; x += 20) {
//             const y = height / 2 + 
//                      Math.sin(x * 0.01 + time * 3 + z) * 30 + 
//                      Math.cos(x * 0.02 + time * 2) * 20;
//             ctx.lineTo(x, y);
//           }
          
//           ctx.strokeStyle = `hsla(${260 + z * 20}, 80%, 60%, 0.03)`;
//           ctx.stroke();
//         }
        
//         ctx.restore();
//       }

//       // Draw and update quantum particles
//       particles.forEach((p) => {
//         // Quantum motion with mouse influence
//         if (mousePosition.x && mousePosition.y) {
//           const dx = p.x - mousePosition.x;
//           const dy = p.y - mousePosition.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
          
//           if (dist < 200) {
//             const angle = Math.atan2(dy, dx);
//             const force = (200 - dist) / 200;
            
//             // Quantum repulsion
//             p.x += Math.cos(angle) * force * 2;
//             p.y += Math.sin(angle) * force * 2;
            
//             // Create quantum entanglement
//             if (Math.random() > 0.99) {
//               ctx.beginPath();
//               ctx.strokeStyle = `rgba(139, 92, 246, ${force * 0.3})`;
//               ctx.lineWidth = 0.5;
//               ctx.moveTo(p.x, p.y);
//               ctx.lineTo(mousePosition.x, mousePosition.y);
//               ctx.stroke();
//             }
//           }
//         }

//         // Update position with wave function
//         p.x += p.vx + Math.sin(time + p.phase) * 0.3;
//         p.y += p.vy + Math.cos(time + p.phase) * 0.3;
//         p.z += p.vz;

//         // Quantum tunnel through boundaries
//         if (p.x < 0) {
//           p.x = width;
//           p.timeline = (p.timeline + 1) % 3;
//         }
//         if (p.x > width) {
//           p.x = 0;
//           p.timeline = (p.timeline + 2) % 3;
//         }
//         if (p.y < 0) {
//           p.y = height;
//           p.timeline = (p.timeline + 1) % 3;
//         }
//         if (p.y > height) {
//           p.y = 0;
//           p.timeline = (p.timeline + 2) % 3;
//         }
//         if (p.z < 0 || p.z > 200) {
//           p.vz *= -1;
//         }

//         // Draw particle with quantum uncertainty
//         const uncertainty = Math.sin(time * 10 + p.phase) * 2;
//         // FIXED: Ensure size is always positive
//         const baseSize = 2 * (1 - Math.abs(p.z) / 400) + uncertainty;
//         const size = Math.max(0.5, baseSize); // Minimum size of 0.5
        
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        
//         // Quantum color based on timeline
//         const hue = 260 + p.timeline * 40 + Math.sin(time * 2) * 10;
//         ctx.fillStyle = `hsla(${hue}, 80%, 60%, 0.6)`;
//         ctx.shadowColor = `hsl(${hue}, 80%, 60%)`;
//         ctx.shadowBlur = 15;
//         ctx.fill();
//       });

//       // Draw quantum entanglement web
//       ctx.shadowBlur = 0;
      
//       for (let i = 0; i < particles.length; i += 5) {
//         for (let j = i + 5; j < particles.length; j += 7) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
          
//           if (dist < 80) {
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
            
//             const opacity = 0.1 * (1 - dist / 80) * Math.sin(time * 2);
//             ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         }
//       }

//       requestAnimationFrame(draw);
//     }

//     draw();

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = canvas.offsetHeight;
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     // Cycle through dimensions
//     const dimensionInterval = setInterval(() => {
//       setDimension(d => (d + 1) % 5);
//     }, 3000);

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("mousemove", handleMouseMove);
    
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", handleMouseMove);
//       clearInterval(dimensionInterval);
//     };
//   }, []);

//   return (
//     <section className="relative py-32 bg-[#0B0F19] overflow-hidden">
      
//       {/* Quantum Foam Background */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full"
//       />

//       <div className="relative z-10 container mx-auto px-6 lg:px-12">
//         <SectionWrapper>
//           <div className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
//               <span className="bg-gradient-to-r from-purple-400 via-pink-500 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
//                 Quantum Statistics
//               </span>
//             </h2>
//             <p className="text-gray-400 text-lg flex items-center justify-center gap-2">
//               <span className="inline-block w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
//               Observing dimension {dimension + 1} of 5
//               <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 animate-pulse animation-delay-300" />
//             </p>
//           </div>
//         </SectionWrapper>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 perspective">
//           <StatCounter target={250} suffix="+" label="Projects Delivered" index={0} />
//           <StatCounter target={120} suffix="+" label="Clients Served" index={1} />
//           <StatCounter target={15} suffix="+" label="Years of Experience" index={2} />
//           <StatCounter target={99} suffix="%" label="Client Satisfaction" index={3} />
//         </div>

//         {/* Quantum state indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
//           {[0, 1, 2, 3, 4].map(d => (
//             <div
//               key={d}
//               className={`w-1 h-1 rounded-full transition-all duration-500 ${
//                 d === dimension ? 'w-8 bg-purple-500' : 'bg-gray-600'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// import { useEffect, useRef, useState } from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// function StatCounter({
//   target,
//   suffix,
//   label,
//   index,
// }: {
//   target: number;
//   suffix: string;
//   label: string;
//   index: number;
// }) {
//   const { ref, isVisible } = useScrollAnimation();
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [displayValue, setDisplayValue] = useState(0);
//   const [glitchActive, setGlitchActive] = useState(false);

//   // Neon color schemes
//   const neonSchemes = [
//     { primary: '#ff00ff', secondary: '#00ffff', accent: '#ffff00' }, // Cyberpunk
//     { primary: '#00ff9d', secondary: '#ff00c1', accent: '#fff500' }, // Miami Vice
//     { primary: '#7700ff', secondary: '#00ffaa', accent: '#ff4400' }, // Synthwave
//     { primary: '#ff3366', secondary: '#33ffcc', accent: '#ffcc00' }, // Sunset Neon
//   ];

//   const scheme = neonSchemes[index % neonSchemes.length];

//   useEffect(() => {
//     if (!isVisible) return;

//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     canvas.width = 300;
//     canvas.height = 150;

//     let frame = 0;
//     const totalFrames = 150;
//     let value = 0;
//     let glitchFrames = 0;

//     // Create neon particles
//     const particles: any[] = [];
//     for (let i = 0; i < 30; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 2,
//         vy: (Math.random() - 0.5) * 2,
//         life: Math.random() * Math.PI * 2,
//         color: Math.random() > 0.5 ? scheme.primary : scheme.secondary,
//       });
//     }

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const progress = frame / totalFrames;
//       const time = Date.now() * 0.001;

//       // Draw retro grid background
//       ctx.strokeStyle = scheme.primary + '20';
//       ctx.lineWidth = 1;
      
//       // Horizontal grid lines
//       for (let i = 0; i < canvas.height; i += 20) {
//         const offset = Math.sin(time + i * 0.01) * 5;
//         ctx.beginPath();
//         ctx.moveTo(0, i + offset);
//         ctx.lineTo(canvas.width, i + offset);
//         ctx.strokeStyle = scheme.primary + '20';
//         ctx.stroke();
//       }

//       // Vertical grid lines
//       for (let i = 0; i < canvas.width; i += 30) {
//         const offset = Math.cos(time + i * 0.01) * 5;
//         ctx.beginPath();
//         ctx.moveTo(i + offset, 0);
//         ctx.lineTo(i + offset, canvas.height);
//         ctx.strokeStyle = scheme.secondary + '20';
//         ctx.stroke();
//       }

//       // Draw scanlines
//       ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
//       for (let i = 0; i < canvas.height; i += 4) {
//         ctx.fillRect(0, i, canvas.width, 1);
//       }

//       // Update and draw particles
//       particles.forEach(p => {
//         p.x += p.vx + Math.sin(time + p.life) * 0.5;
//         p.y += p.vy + Math.cos(time + p.life) * 0.5;
        
//         if (p.x < 0 || p.x > canvas.width) p.vx *= -0.9;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -0.9;

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
//         ctx.fillStyle = p.color;
//         ctx.shadowColor = p.color;
//         ctx.shadowBlur = 15;
//         ctx.fill();
//       });

//       // Calculate value with glitch effects
//       if (progress < 0.3) {
//         value = Math.floor(Math.random() * target * 0.5);
//       } else if (progress < 0.7) {
//         const p = (progress - 0.3) / 0.4;
//         value = Math.floor(target * (p + Math.sin(p * Math.PI * 8) * 0.1));
        
//         // Random glitch during counting
//         if (Math.random() > 0.97) {
//           setGlitchActive(true);
//           glitchFrames = 5;
//         }
//       } else {
//         const p = (progress - 0.7) / 0.3;
//         value = Math.floor(target * (p + (1 - p) * 0.95));
//       }

//       if (glitchFrames > 0) {
//         glitchFrames--;
//       } else {
//         setGlitchActive(false);
//       }

//       // Draw main number with neon effect
//       ctx.save();
//       ctx.textAlign = 'center';
//       ctx.textBaseline = 'middle';
      
//       // Multiple layers for neon glow
//       const layers = glitchActive ? 6 : 3;
      
//       for (let i = layers; i >= 0; i--) {
//         const offset = i * 2;
//         const blur = i * 8;
//         const alpha = 1 - i * 0.15;
        
//         ctx.shadowColor = i === 0 ? scheme.primary : 
//                          i === 1 ? scheme.secondary : 
//                          scheme.accent;
//         ctx.shadowBlur = blur;
        
//         // Glitch effect
//         if (glitchActive && i === 2) {
//           ctx.fillStyle = scheme.accent;
//           ctx.font = `bold ${68 + Math.sin(time * 20) * 4}px "Monoton", "Courier New", monospace`;
//           ctx.fillText(value + suffix, canvas.width / 2 + 5, canvas.height / 2 + 2);
//           ctx.fillStyle = scheme.primary;
//           ctx.fillText(value + suffix, canvas.width / 2 - 5, canvas.height / 2 - 2);
//         } else {
//           ctx.font = `bold ${72 - i * 2}px "Monoton", "Courier New", monospace`;
//           ctx.fillStyle = i === 0 ? '#ffffff' : 
//                          i === 1 ? scheme.primary : 
//                          i === 2 ? scheme.secondary : 
//                          'transparent';
//           ctx.globalAlpha = alpha;
//           ctx.fillText(value + suffix, canvas.width / 2 + offset, canvas.height / 2);
//         }
//       }

//       // Draw neon outline
//       ctx.shadowBlur = 30;
//       ctx.shadowColor = scheme.primary;
//       ctx.font = 'bold 72px "Monoton", "Courier New", monospace';
//       ctx.fillStyle = 'transparent';
//       ctx.strokeStyle = '#ffffff';
//       ctx.lineWidth = 2;
//       ctx.strokeText(value + suffix, canvas.width / 2, canvas.height / 2);
      
//       ctx.restore();

//       // Add CRT flicker
//       if (Math.random() > 0.97) {
//         ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
//       }

//       frame++;
//       if (frame <= totalFrames) {
//         requestAnimationFrame(draw);
//       } else {
//         // Final frame
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
        
//         // Draw final value with stable neon
//         ctx.textAlign = 'center';
//         ctx.textBaseline = 'middle';
        
//         for (let i = 3; i >= 0; i--) {
//           ctx.shadowColor = i === 0 ? scheme.primary : 
//                            i === 1 ? scheme.secondary : 
//                            scheme.accent;
//           ctx.shadowBlur = i * 15;
//           ctx.font = `bold ${72 - i * 2}px "Monoton", "Courier New", monospace`;
//           ctx.fillStyle = i === 0 ? '#ffffff' : 
//                          i === 1 ? scheme.primary : 
//                          i === 2 ? scheme.secondary : 
//                          'transparent';
//           ctx.fillText(target + suffix, canvas.width / 2, canvas.height / 2);
//         }
        
//         setDisplayValue(target);
//       }
//     };

//     requestAnimationFrame(draw);
//   }, [isVisible, target, suffix, index]);

//   return (
//     <div ref={ref} className="text-center group">
//       <div className="relative">
//         {/* Neon canvas */}
//         <canvas
//           ref={canvasRef}
//           className="w-full h-40 object-contain transition-all duration-300"
//           style={{ 
//             maxWidth: '300px', 
//             margin: '0 auto',
//             filter: glitchActive ? 'hue-rotate(90deg)' : 'none',
//           }}
//         />

//         {/* VHS tracking lines */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-scan" />
//           <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-scan-delayed" />
//         </div>
//       </div>

//       {/* Label with retro styling */}
//       <div className="mt-4 relative">
//         <div className="text-xs uppercase tracking-[0.3em] font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
//           {label}
//         </div>
        
//         {/* Neon underline */}
//         <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-px group-hover:w-16 transition-all duration-500 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
//       </div>
//     </div>
//   );
// }

// // Retro Wave Background
// function RetroWaveBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let width = canvas.width = window.innerWidth;
//     let height = canvas.height = window.innerHeight;

//     const sunPosition = { x: width / 2, y: height * 0.6 };
//     let time = 0;

//     const draw = () => {
//       ctx.clearRect(0, 0, width, height);
//       time += 0.005;

//       // Retro sunset gradient
//       const gradient = ctx.createLinearGradient(0, 0, 0, height);
//       gradient.addColorStop(0, '#ff006e');
//       gradient.addColorStop(0.3, '#8338ec');
//       gradient.addColorStop(0.6, '#3a0ca3');
//       gradient.addColorStop(1, '#0b0f19');
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, width, height);

//       // Draw retro grid
//       ctx.strokeStyle = '#ff00ff20';
//       ctx.lineWidth = 2;
      
//       const gridSize = 50;
//       const perspective = 0.5;
      
//       for (let i = 0; i < 20; i++) {
//         const y = height * 0.7 + i * 30;
//         const xOffset = Math.sin(time + i * 0.2) * 50;
        
//         ctx.beginPath();
//         ctx.moveTo(0, y);
//         ctx.lineTo(width, y);
//         ctx.strokeStyle = `rgba(255, 0, 255, ${0.3 - i * 0.02})`;
//         ctx.stroke();
        
//         // Vertical lines with perspective
//         for (let j = 0; j < 10; j++) {
//           const x = width * 0.2 + j * 80 + xOffset;
//           if (x < width) {
//             ctx.beginPath();
//             ctx.moveTo(x, y - 30);
//             ctx.lineTo(x - 20, y + 30);
//             ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 - i * 0.01})`;
//             ctx.stroke();
//           }
//         }
//       }

//       // Draw sun/moon
//       ctx.beginPath();
//       ctx.arc(sunPosition.x, sunPosition.y - Math.sin(time) * 20, 80, 0, Math.PI * 2);
//       const sunGradient = ctx.createRadialGradient(
//         sunPosition.x, sunPosition.y - Math.sin(time) * 20, 0,
//         sunPosition.x, sunPosition.y - Math.sin(time) * 20, 100
//       );
//       sunGradient.addColorStop(0, '#ff00ff');
//       sunGradient.addColorStop(0.5, '#ff00ff80');
//       sunGradient.addColorStop(1, 'transparent');
//       ctx.fillStyle = sunGradient;
//       ctx.fill();

//       // Draw floating particles
//       for (let i = 0; i < 50; i++) {
//         const x = (Math.sin(time * 2 + i) * width / 2) + width / 2;
//         const y = (Math.cos(time * 3 + i) * height / 4) + height / 2;
        
//         ctx.beginPath();
//         ctx.arc(x, y, 2, 0, Math.PI * 2);
//         ctx.fillStyle = i % 2 === 0 ? '#ff00ff' : '#00ffff';
//         ctx.shadowColor = i % 2 === 0 ? '#ff00ff' : '#00ffff';
//         ctx.shadowBlur = 15;
//         ctx.fill();
//       }

//       requestAnimationFrame(draw);
//     };

//     draw();

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full"
//     />
//   );
// }

// export default function StatsSection() {
//   const [glitchMaster, setGlitchMaster] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setGlitchMaster(true);
//       setTimeout(() => setGlitchMaster(false), 200);
//     }, 8000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative py-32 bg-[#0b0f19] overflow-hidden">
      
//       {/* Retro wave background */}
//       <RetroWaveBackground />

//       {/* VHS static overlay */}
//       <div 
//         className="absolute inset-0 pointer-events-none mix-blend-overlay"
//         style={{
//           background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(255,255,255,0.05) 1px, transparent 2px)',
//           opacity: 0.5,
//         }}
//       />

//       {/* Scanlines */}
//       <div 
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: 'linear-gradient(transparent 50%, rgba(0,0,0,0.1) 50%)',
//           backgroundSize: '100% 4px',
//           opacity: 0.3,
//         }}
//       />

//       <div className={`relative z-10 container mx-auto px-6 lg:px-12 transition-all duration-300 ${glitchMaster ? 'translate-x-1 skew-x-1' : ''}`}>
//         <SectionWrapper>
//           <div className="text-center mb-20">
//             {/* Neon badge */}
//             <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm mb-6 relative group">
//               <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl group-hover:bg-purple-500/30 transition-all duration-500" />
//               <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
//               <span className="text-sm uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
//                 LIVE DATA STREAM
//               </span>
//               <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
//             </div>

//             {/* Main title with glitch effect */}
//             <h2 className="text-6xl md:text-7xl font-black mb-4 relative">
//               <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-50 animate-pulse">
//                 DIGITAL METRICS
//               </span>
//               <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
//                 {glitchMaster ? 'GLITCH MODE' : 'DIGITAL METRICS'}
//               </span>
//             </h2>

//             {/* Retro subtitle */}
//             <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
//               <span className="text-purple-400">{'>'}</span> System statistics v2.0 
//               <span className="text-cyan-400 animate-pulse">_</span>
//             </p>

//             {/* Animated equalizer bars */}
//             <div className="flex justify-center items-end gap-1 mt-8 h-8">
//               {[...Array(12)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="w-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full animate-equalizer"
//                   style={{
//                     height: `${Math.sin(Date.now() * 0.01 + i) * 20 + 20}px`,
//                     animationDelay: `${i * 0.1}s`,
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </SectionWrapper>

//         {/* Stats grid with neon frames */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
//           <div className="relative group">
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
//             <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
//               <StatCounter target={250} suffix="+" label="PROJECTS" index={0} />
//             </div>
//           </div>

//           <div className="relative group">
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
//             <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
//               <StatCounter target={120} suffix="+" label="CLIENTS" index={1} />
//             </div>
//           </div>

//           <div className="relative group">
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
//             <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
//               <StatCounter target={15} suffix="+" label="YEARS" index={2} />
//             </div>
//           </div>

//           <div className="relative group">
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
//             <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
//               <StatCounter target={99} suffix="%" label="SATISFACTION" index={3} />
//             </div>
//           </div>
//         </div>

//         {/* Retro terminal footer */}
//         <div className="mt-16 text-center font-mono">
//           <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-purple-500/30">
//             <span className="text-green-400">$</span>
//             <span className="text-gray-400">system.status --stats</span>
//             <span className="text-cyan-400 animate-pulse">▊</span>
//           </div>
//           <p className="text-xs text-gray-500 mt-4 font-mono">
//             ⚡ SYSTEM READY | DATA STREAMING | QUANTUM ENCRYPTED ⚡
//           </p>
//         </div>
//       </div>

//       <style>{`
//         @keyframes equalizer {
//           0%, 100% { height: 20px; }
//           50% { height: 40px; }
//         }
//         .animate-equalizer {
//           animation: equalizer 1s ease-in-out infinite;
//         }
//         @keyframes scan {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         .animate-scan {
//           animation: scan 3s linear infinite;
//         }
//         .animate-scan-delayed {
//           animation: scan 3s linear infinite 1.5s;
//         }
//       `}</style>
//     </section>
//   );
// }





// import { useEffect, useRef, useState } from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// function StatCounter({
//   target,
//   suffix,
//   label,
//   index,
// }: {
//   target: number;
//   suffix: string;
//   label: string;
//   index: number;
// }) {
//   const { ref, isVisible } = useScrollAnimation();
//   const [displayValue, setDisplayValue] = useState(0);
//   const [danceMove, setDanceMove] = useState({
//     y: 0,
//     rotate: 0,
//     scale: 1,
//     bounce: 0,
//   });

//   useEffect(() => {
//     if (!isVisible) return;

//     let startTime: number | null = null;
//     const danceDuration = 3000; // 3 seconds of dancing
//     let dancePhase = 0;

//     const animate = (currentTime: number) => {
//       if (!startTime) startTime = currentTime;
      
//       const elapsed = currentTime - startTime;
//       const progress = Math.min(elapsed / danceDuration, 1);
      
//       // Dancing patterns
//       const t = progress * Math.PI * 8; // Multiple rotations for dancing
      
//       // Jumping (up and down)
//       const jump = Math.abs(Math.sin(t * 2)) * 30 * (1 - progress * 0.5);
      
//       // Spinning
//       const spin = Math.sin(t) * 15;
      
//       // Bouncing
//       const bounce = Math.abs(Math.cos(t)) * 0.3 + 0.7;
      
//       // Side-to-side sway
//       const sway = Math.sin(t * 1.5) * 20;
      
//       // Combine dance moves based on phase
//       let y = 0;
//       let rotate = 0;
//       let scale = 1;
      
//       if (progress < 0.3) {
//         // Phase 1: Jumping jacks
//         y = -jump;
//         scale = bounce;
//         rotate = spin * 0.5;
//       } else if (progress < 0.6) {
//         // Phase 2: Spinning
//         y = Math.sin(t * 3) * 15;
//         rotate = spin * 2;
//         scale = 1 + Math.abs(Math.sin(t * 4)) * 0.2;
//       } else {
//         // Phase 3: Happy dance
//         y = sway;
//         rotate = spin;
//         scale = bounce;
//       }
      
//       setDanceMove({
//         y,
//         rotate,
//         scale,
//         bounce: Math.abs(Math.sin(t * 5)) * 10,
//       });

//       // Update number value while dancing
//       if (progress < 0.8) {
//         const valProgress = progress / 0.8;
//         const danceValue = Math.floor(target * valProgress * (0.8 + Math.random() * 0.4));
//         setDisplayValue(Math.min(danceValue, target));
//       } else {
//         setDisplayValue(target);
//       }

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       } else {
//         // Final pose
//         setDanceMove({ y: 0, rotate: 0, scale: 1, bounce: 0 });
//         setDisplayValue(target);
//       }
//     };

//     requestAnimationFrame(animate);
//   }, [isVisible, target]);

//   // Dance floor sparkles
//   const sparkles = [];
//   for (let i = 0; i < 5; i++) {
//     sparkles.push(
//       <div
//         key={i}
//         className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping"
//         style={{
//           left: `${Math.random() * 100}%`,
//           top: `${Math.random() * 100}%`,
//           animationDelay: `${i * 0.2}s`,
//           animationDuration: '1s',
//         }}
//       />
//     );
//   }

//   return (
//     <div ref={ref} className="text-center group">
//       <div className="relative">
//         {/* Dance floor shadow */}
//         <div 
//           className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-black/30 rounded-full blur-md transition-all duration-300"
//           style={{
//             width: `${60 + danceMove.bounce * 2}px`,
//             opacity: 0.5 - Math.abs(danceMove.y) * 0.01,
//           }}
//         />

//         {/* Dancing number */}
//         <div
//           className="relative transition-all duration-100 cursor-pointer group-hover:scale-110"
//           style={{
//             transform: `translateY(${danceMove.y}px) rotate(${danceMove.rotate}deg) scale(${danceMove.scale})`,
//             transition: 'transform 0.1s ease',
//           }}
//         >
//           {/* Party hat on hover */}
//           <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
//             <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-purple-500" />
//             <div className="w-2 h-2 bg-yellow-300 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2" />
//           </div>

//           {/* The number */}
//           <div className="text-5xl md:text-6xl font-black text-white mb-2">
//             {displayValue}
//             {suffix}
//           </div>

//           {/* Sparkles around number */}
//           {sparkles}
//         </div>

//         {/* Music notes on hover */}
//         <div className="absolute -right-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
//           <span className="text-2xl animate-bounce inline-block">♪</span>
//           <span className="text-2xl animate-bounce delay-100 inline-block">♫</span>
//           <span className="text-2xl animate-bounce delay-200 inline-block">♩</span>
//         </div>
//       </div>

//       {/* Label with dance floor lights */}
//       <div className="text-sm text-gray-400 mt-6 font-medium relative">
//         <div className="absolute inset-0 flex justify-center gap-2">
//           {[...Array(3)].map((_, i) => (
//             <div
//               key={i}
//               className="w-1 h-1 rounded-full animate-pulse"
//               style={{
//                 backgroundColor: i === 0 ? '#ff6b6b' : i === 1 ? '#4ecdc4' : '#ffe66d',
//                 animationDelay: `${i * 0.3}s`,
//               }}
//             />
//           ))}
//         </div>
//         <span className="relative">{label}</span>
//       </div>
//     </div>
//   );
// }

// // Dance floor component
// function DanceFloor() {
//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden">
//       {/* Dance floor grid */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/20 to-transparent">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `
//             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
//             linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px)
//           `,
//           backgroundSize: '50px 50px',
//         }} />
//       </div>

//       {/* Disco lights */}
//       <div className="absolute top-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-300" />
//       <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-700" />
//     </div>
//   );
// }

// // Party poppers
// function PartyPoppers() {
//   return (
//     <div className="absolute inset-0 pointer-events-none">
//       {[...Array(20)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-1 h-1 rounded-full animate-party"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             backgroundColor: `hsl(${Math.random() * 360}, 80%, 60%)`,
//             animationDelay: `${Math.random() * 2}s`,
//             animationDuration: `${1 + Math.random() * 2}s`,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// export default function StatsSection() {
//   const [partyMode, setPartyMode] = useState(false);

//   useEffect(() => {
//     // Toggle party mode every 5 seconds
//     const interval = setInterval(() => {
//       setPartyMode(prev => !prev);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative py-32 bg-gradient-to-b from-purple-900 via-pink-900 to-blue-900 overflow-hidden">
      
//       {/* Animated background */}
//       <div 
//         className="absolute inset-0 transition-colors duration-1000"
//         style={{
//           background: partyMode 
//             ? 'linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #ffbe0b)'
//             : 'linear-gradient(45deg, #1a0b2e, #2d1b3a, #1f0f2b, #2a1838)',
//           backgroundSize: '400% 400%',
//           animation: 'gradientBG 15s ease infinite',
//         }}
//       />

//       {/* Dance floor effects */}
//       <DanceFloor />
//       <PartyPoppers />

//       {/* Floating emojis */}
//       <div className="absolute inset-0 pointer-events-none">
//         {['🎉', '🕺', '💃', '🎊', '✨'].map((emoji, i) => (
//           <div
//             key={i}
//             className="absolute text-4xl animate-float"
//             style={{
//               left: `${10 + i * 20}%`,
//               top: `${20 + Math.sin(Date.now() * 0.001 + i) * 10}%`,
//               animationDelay: `${i * 0.5}s`,
//               opacity: 0.2,
//             }}
//           >
//             {emoji}
//           </div>
//         ))}
//       </div>

//       <div className="relative z-10 container mx-auto px-6">
//         <SectionWrapper>
//           <div className="text-center mb-16">
//             {/* Party badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-bounce">
//               <span className="text-2xl">🪩</span>
//               <span className="text-white font-medium">DANCE PARTY</span>
//               <span className="text-2xl">✨</span>
//             </div>

//             {/* Main title with dance animation */}
//             <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
//               <span className="inline-block animate-wiggle">N</span>
//               <span className="inline-block animate-wiggle delay-100">U</span>
//               <span className="inline-block animate-wiggle delay-200">M</span>
//               <span className="inline-block animate-wiggle delay-300">B</span>
//               <span className="inline-block animate-wiggle delay-400">E</span>
//               <span className="inline-block animate-wiggle delay-500">R</span>
//               <span className="inline-block mx-2">🎵</span>
//               <span className="inline-block animate-wiggle delay-600">D</span>
//               <span className="inline-block animate-wiggle delay-700">A</span>
//               <span className="inline-block animate-wiggle delay-800">N</span>
//               <span className="inline-block animate-wiggle delay-900">C</span>
//               <span className="inline-block animate-wiggle delay-1000">E</span>
//             </h2>

//             <p className="text-white/60 text-lg flex items-center justify-center gap-2">
//               <span className="animate-bounce">👇</span>
//               Watch our numbers bust a move
//               <span className="animate-bounce delay-300">👇</span>
//             </p>

//             {/* Beat indicator */}
//             <div className="flex justify-center gap-1 mt-6">
//               {[...Array(8)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="w-2 h-8 bg-white/30 rounded-full animate-beat"
//                   style={{
//                     animationDelay: `${i * 0.1}s`,
//                     height: `${20 + Math.sin(i) * 20}px`,
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </SectionWrapper>

//         {/* Dancing stats grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
//           <div className="animate-slide-in-left" style={{ animationDelay: '0s' }}>
//             <StatCounter target={250} suffix="+" label="PROJECTS" index={0} />
//           </div>
//           <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
//             <StatCounter target={120} suffix="+" label="CLIENTS" index={1} />
//           </div>
//           <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
//             <StatCounter target={15} suffix="+" label="YEARS" index={2} />
//           </div>
//           <div className="animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
//             <StatCounter target={99} suffix="%" label="SATISFACTION" index={3} />
//           </div>
//         </div>

//         {/* Dance floor footer */}
//         <div className="text-center mt-16">
//           <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
//             <span className="text-2xl animate-spin-slow">💿</span>
//             <span className="text-white/80">NOW PLAYING: NUMBER DANCE MIX 2024</span>
//             <span className="text-2xl animate-spin-slow delay-300">🎧</span>
//           </div>
          
//           {/* Dancing characters */}
//           <div className="flex justify-center gap-4 mt-8 text-3xl">
//             <span className="animate-bounce">🕺</span>
//             <span className="animate-bounce delay-100">💃</span>
//             <span className="animate-bounce delay-200">🕺</span>
//             <span className="animate-bounce delay-300">💃</span>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes wiggle {
//           0%, 100% { transform: rotate(0deg); }
//           25% { transform: rotate(-10deg); }
//           75% { transform: rotate(10deg); }
//         }
//         .animate-wiggle {
//           animation: wiggle 0.5s ease-in-out infinite;
//         }
        
//         @keyframes beat {
//           0%, 100% { transform: scaleY(1); }
//           50% { transform: scaleY(1.5); }
//         }
//         .animate-beat {
//           animation: beat 0.5s ease-in-out infinite;
//         }
        
//         @keyframes slide-in-left {
//           0% { transform: translateX(-100px) rotate(-10deg); opacity: 0; }
//           100% { transform: translateX(0) rotate(0); opacity: 1; }
//         }
//         .animate-slide-in-left {
//           animation: slide-in-left 0.8s ease-out forwards;
//         }
        
//         @keyframes slide-in-right {
//           0% { transform: translateX(100px) rotate(10deg); opacity: 0; }
//           100% { transform: translateX(0) rotate(0); opacity: 1; }
//         }
//         .animate-slide-in-right {
//           animation: slide-in-right 0.8s ease-out forwards;
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
        
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 3s linear infinite;
//         }
        
//         @keyframes party {
//           0% { transform: scale(0); opacity: 1; }
//           100% { transform: scale(2); opacity: 0; }
//         }
//         .animate-party {
//           animation: party 1.5s ease-out infinite;
//         }
        
//         @keyframes gradientBG {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
        
//         .delay-100 { animation-delay: 0.1s; }
//         .delay-200 { animation-delay: 0.2s; }
//         .delay-300 { animation-delay: 0.3s; }
//         .delay-400 { animation-delay: 0.4s; }
//         .delay-500 { animation-delay: 0.5s; }
//         .delay-600 { animation-delay: 0.6s; }
//         .delay-700 { animation-delay: 0.7s; }
//         .delay-800 { animation-delay: 0.8s; }
//         .delay-900 { animation-delay: 0.9s; }
//         .delay-1000 { animation-delay: 1s; }
//       `}</style>
//     </section>
//   );
// }





// import { useEffect, useRef, useState } from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// function StatCounter({
//   target,
//   suffix,
//   label,
//   index,
//   cableColor,
// }: {
//   target: number;
//   suffix: string;
//   label: string;
//   index: number;
//   cableColor: string;
// }) {
//   const { ref, isVisible } = useScrollAnimation();
//   const [displayValue, setDisplayValue] = useState(0);
//   const [packets, setPackets] = useState<any[]>([]);
//   const counterRef = useRef<HTMLDivElement>(null);

//   // Network cable colors
//   const cableColors = {
//     ethernet: '#00ff9d',
//     fiber: '#ff9900',
//     coaxial: '#ff3366',
//     usb: '#3366ff',
//   };

//   useEffect(() => {
//     if (!isVisible) return;

//     // Generate data packets
//     const packetCount = 8;
//     const newPackets = [];
    
//     for (let i = 0; i < packetCount; i++) {
//       newPackets.push({
//         id: i,
//         delay: i * 0.2,
//         speed: 0.5 + Math.random() * 0.5,
//         size: 3 + Math.random() * 4,
//       });
//     }
    
//     setPackets(newPackets);

//     // Start counting with network-like increments
//     let currentValue = 0;
//     const incrementSpeed = target / 30; // Network speed metaphor
    
//     const interval = setInterval(() => {
//       currentValue += Math.ceil(incrementSpeed * (0.8 + Math.random() * 0.4));
      
//       if (currentValue >= target) {
//         currentValue = target;
//         clearInterval(interval);
//       }
      
//       setDisplayValue(currentValue);
//     }, 50);

//     return () => clearInterval(interval);
//   }, [isVisible, target]);

//   return (
//     <div ref={ref} className="text-center group">
//       <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 overflow-hidden">
        
//         {/* Network signal strength bars */}
//         <div className="absolute top-3 right-3 flex gap-0.5">
//           {[...Array(4)].map((_, i) => (
//             <div
//               key={i}
//               className="w-1 bg-gradient-to-t from-green-400 to-green-500 rounded-full animate-pulse"
//               style={{
//                 height: `${6 + i * 3}px`,
//                 animationDelay: `${i * 0.1}s`,
//                 opacity: displayValue > target * (i / 4) ? 1 : 0.3,
//               }}
//             />
//           ))}
//         </div>

//         {/* Data packets flowing to the number */}
//         <div className="absolute inset-0 pointer-events-none">
//           {packets.map((packet) => (
//             <div
//               key={packet.id}
//               className="absolute w-1 h-1 rounded-full"
//               style={{
//                 backgroundColor: cableColor,
//                 left: '0%',
//                 top: `${30 + packet.id * 5}%`,
//                 width: `${packet.size}px`,
//                 height: `${packet.size}px`,
//                 boxShadow: `0 0 10px ${cableColor}`,
//                 animation: `packetFlow 2s linear ${packet.delay}s infinite`,
//               }}
//             />
//           ))}
//         </div>

//         {/* RJ45 connector icon */}
//         <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-6 bg-gray-700 rounded-l border-l-2 border-t-2 border-b-2 border-gray-600">
//           <div className="absolute right-0 top-1 w-1 h-4 bg-yellow-400/30" />
//         </div>

//         {/* Main number with network glow */}
//         <div 
//           ref={counterRef}
//           className="text-5xl md:text-6xl font-mono font-black mb-2 relative"
//           style={{
//             color: '#fff',
//             textShadow: `0 0 20px ${cableColor}`,
//           }}
//         >
//           {displayValue}
//           {suffix}
          
//           {/* Binary background */}
//           <div className="absolute inset-0 overflow-hidden opacity-10 text-xs font-mono">
//             {[...Array(5)].map((_, i) => (
//               <div key={i} className="whitespace-nowrap animate-marquee" style={{ animationDelay: `${i * 2}s` }}>
//                 10110100 11001010 10110110 11001011
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Label with cable connector */}
//         <div className="text-sm text-gray-400 font-mono mt-2 relative">
//           <span className="relative z-10 bg-gray-900 px-2 py-1 rounded">
//             {label}
//           </span>
          
//           {/* Horizontal cable line */}
//           <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
//         </div>

//         {/* Connection status */}
//         <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] font-mono">
//           <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
//           <span className="text-green-500/70">LINK</span>
//           <span className="text-gray-600">|</span>
//           <span className="text-gray-500">1000BASE-T</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Network Rack Component
// function NetworkRack() {
//   return (
//     <div className="absolute left-10 top-1/2 transform -translate-y-1/2 w-16 h-64 bg-gray-800 rounded-lg border border-gray-700 hidden lg:block">
//       {/* Rack units */}
//       {[...Array(8)].map((_, i) => (
//         <div
//           key={i}
//           className="h-8 border-b border-gray-700 flex items-center px-1 gap-0.5"
//         >
//           {[...Array(4)].map((_, j) => (
//             <div
//               key={j}
//               className="w-1 h-3 bg-green-500/30 rounded-sm animate-pulse"
//               style={{ animationDelay: `${i * 0.1 + j * 0.1}s` }}
//             />
//           ))}
//         </div>
//       ))}
      
//       {/* Power light */}
//       <div className="absolute -right-1 top-2 w-1 h-1 bg-green-400 rounded-full animate-pulse" />
//     </div>
//   );
// }

// // Cable Management Component
// function CableManagement() {
//   return (
//     <div className="absolute inset-0 pointer-events-none">
//       {/* Main data bus */}
//       <svg className="absolute top-0 left-0 w-full h-full" style={{ opacity: 0.3 }}>
//         <defs>
//           <linearGradient id="cableGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#00ff9d" stopOpacity="0">
//               <animate attributeName="offset" values="0;1" dur="3s" repeatCount="indefinite" />
//             </stop>
//             <stop offset="50%" stopColor="#00ff9d" stopOpacity="1">
//               <animate attributeName="offset" values="0.5;1.5" dur="3s" repeatCount="indefinite" />
//             </stop>
//             <stop offset="100%" stopColor="#00ff9d" stopOpacity="0">
//               <animate attributeName="offset" values="1;2" dur="3s" repeatCount="indefinite" />
//             </stop>
//           </linearGradient>
//         </defs>
        
//         {/* Horizontal backbone */}
//         <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#cableGradient)" strokeWidth="2" strokeDasharray="5,5" />
        
//         {/* Vertical drops to each counter */}
//         {[20, 40, 60, 80].map((x, i) => (
//           <line
//             key={i}
//             x1={`${x}%`}
//             y1="50%"
//             x2={`${x}%`}
//             y2="80%"
//             stroke={`hsl(${120 + i * 30}, 70%, 50%)`}
//             strokeWidth="1.5"
//             strokeDasharray="3,3"
//           >
//             <animate 
//               attributeName="stroke-dashoffset" 
//               values="0;20" 
//               dur="2s" 
//               repeatCount="indefinite" 
//             />
//           </line>
//         ))}
//       </svg>
//     </div>
//   );
// }

// // Data Activity Monitor
// function DataActivity() {
//   return (
//     <div className="absolute bottom-5 right-5 bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 border border-gray-800 font-mono text-xs hidden lg:block">
//       <div className="flex items-center gap-2 mb-1">
//         <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//         <span className="text-green-500">DATA ACTIVITY</span>
//       </div>
      
//       {/* Live data feed */}
//       <div className="space-y-1 text-gray-400">
//         <div className="flex gap-2">
//           <span className="text-gray-600">TX:</span>
//           <span className="text-cyan-400">{(Math.random() * 100).toFixed(1)} Mbps</span>
//           <span className="text-gray-600 ml-2">RX:</span>
//           <span className="text-purple-400">{(Math.random() * 100).toFixed(1)} Mbps</span>
//         </div>
//         <div className="text-[10px] text-gray-600">
//           PACKETS: {Math.floor(Math.random() * 10000)}
//         </div>
//       </div>
      
//       {/* Animated waveform */}
//       <div className="flex gap-0.5 mt-2 h-6 items-end">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="w-1 bg-gradient-to-t from-green-500 to-cyan-500 rounded-t"
//             style={{
//               height: `${Math.random() * 20 + 5}px`,
//               animation: `waveform 1s ease-in-out infinite`,
//               animationDelay: `${i * 0.05}s`,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// // Network Switch Ports
// function NetworkSwitch() {
//   return (
//     <div className="absolute top-10 right-10 bg-gray-800 rounded-lg p-2 border border-gray-700 hidden lg:block">
//       <div className="text-[10px] font-mono text-gray-400 mb-1">SWITCH-01</div>
//       <div className="grid grid-cols-4 gap-1">
//         {[...Array(16)].map((_, i) => (
//           <div
//             key={i}
//             className="w-3 h-3 bg-gray-700 rounded-sm relative group"
//           >
//             <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1">
//               <div className={`w-1 h-1 rounded-full ${Math.random() > 0.5 ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
//             </div>
//             {/* Link activity tooltip */}
//             <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:block bg-gray-900 text-[8px] px-1 py-0.5 rounded whitespace-nowrap">
//               Port {i+1}: {Math.random() > 0.3 ? '1Gbps' : '100Mbps'}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Ethernet Cable Spool
// function CableSpool() {
//   return (
//     <div className="absolute bottom-10 left-10 w-16 h-16 bg-gray-800 rounded-full border-4 border-gray-700 hidden lg:block">
//       <div className="absolute inset-2 rounded-full border-2 border-dashed border-gray-600 animate-spin-slow" />
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//       </div>
//       {/* Cable coming out */}
//       <div className="absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-green-500 to-transparent" />
//     </div>
//   );
// }

// // Main Component
// export default function StatsSection() {
//   const [bandwidth, setBandwidth] = useState({ rx: 0, tx: 0 });

//   useEffect(() => {
//     // Simulate network traffic
//     const interval = setInterval(() => {
//       setBandwidth({
//         rx: Math.random() * 100,
//         tx: Math.random() * 80,
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative py-32 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      
//       {/* Server room background pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `
//             repeating-linear-gradient(90deg, transparent 0px, transparent 2px, #00ff9d 2px, #00ff9d 3px),
//             repeating-linear-gradient(0deg, transparent 0px, transparent 2px, #00ff9d 2px, #00ff9d 3px)
//           `,
//           backgroundSize: '50px 50px',
//         }} />
//       </div>

//       {/* Network equipment */}
//       <NetworkRack />
//       <NetworkSwitch />
//       <CableSpool />
//       <DataActivity />
      
//       {/* Cable management visualization */}
//       <CableManagement />

//       {/* Animated data streams */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(5)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"
//             style={{
//               top: `${20 + i * 15}%`,
//               left: 0,
//               right: 0,
//               animation: `dataStream ${3 + i}s linear infinite`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 container mx-auto px-6">
//         <SectionWrapper>
//           <div className="text-center mb-16">
//             {/* Network badge */}
//             <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-800 mb-6">
//               <span className="flex h-2 w-2">
//                 <span className="animate-ping absolute h-2 w-2 rounded-full bg-green-400" />
//                 <span className="relative rounded-full h-2 w-2 bg-green-500" />
//               </span>
//               <span className="font-mono text-sm text-gray-300">NETWORK_STATUS: ONLINE</span>
//               <span className="font-mono text-xs text-gray-500">PING 1ms</span>
//             </div>

//             {/* Main title */}
//             <h2 className="text-5xl md:text-6xl font-black mb-4">
//               <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
//                 NETWORK METRICS
//               </span>
//             </h2>
            
//             {/* Subtitle with live data */}
//             <div className="flex justify-center items-center gap-4 font-mono text-sm">
//               <div className="flex items-center gap-1">
//                 <span className="text-gray-500">RX:</span>
//                 <span className="text-green-400">{bandwidth.rx.toFixed(1)} Mbps</span>
//               </div>
//               <div className="w-1 h-1 bg-gray-700 rounded-full" />
//               <div className="flex items-center gap-1">
//                 <span className="text-gray-500">TX:</span>
//                 <span className="text-blue-400">{bandwidth.tx.toFixed(1)} Mbps</span>
//               </div>
//             </div>
//           </div>
//         </SectionWrapper>

//         {/* Stats grid with cable colors */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           <StatCounter 
//             target={250} 
//             suffix="+" 
//             label="PROJECTS" 
//             index={0} 
//             cableColor="#00ff9d" // Ethernet green
//           />
//           <StatCounter 
//             target={120} 
//             suffix="+" 
//             label="CLIENTS" 
//             index={1} 
//             cableColor="#ff9900" // Fiber orange
//           />
//           <StatCounter 
//             target={15} 
//             suffix="+" 
//             label="YEARS" 
//             index={2} 
//             cableColor="#ff3366" // Coaxial red
//           />
//           <StatCounter 
//             target={99} 
//             suffix="%" 
//             label="UPTIME" 
//             index={3} 
//             cableColor="#3366ff" // USB blue
//           />
//         </div>

//         {/* Network infrastructure footer */}
//         <div className="mt-16">
//           {/* Cable types legend */}
//           <div className="flex justify-center gap-6 mb-6 text-xs font-mono">
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-0.5 bg-[#00ff9d]" />
//               <span className="text-gray-500">CAT6</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-0.5 bg-[#ff9900]" />
//               <span className="text-gray-500">FIBER</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-0.5 bg-[#ff3366]" />
//               <span className="text-gray-500">COAX</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-0.5 bg-[#3366ff]" />
//               <span className="text-gray-500">USB 3.0</span>
//             </div>
//           </div>

//           {/* Network diagram */}
//           <div className="relative h-16 max-w-2xl mx-auto">
//             <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
//               <line x1="10%" y1="50%" x2="30%" y2="50%" stroke="#00ff9d" strokeWidth="1" strokeDasharray="3,3" />
//               <line x1="30%" y1="50%" x2="50%" y2="50%" stroke="#ff9900" strokeWidth="1" strokeDasharray="3,3" />
//               <line x1="50%" y1="50%" x2="70%" y2="50%" stroke="#ff3366" strokeWidth="1" strokeDasharray="3,3" />
//               <line x1="70%" y1="50%" x2="90%" y2="50%" stroke="#3366ff" strokeWidth="1" strokeDasharray="3,3" />
              
//               {[20, 40, 60, 80].map((x, i) => (
//                 <circle
//                   key={i}
//                   cx={`${x}%`}
//                   cy="50%"
//                   r="3"
//                   fill={`hsl(${120 + i * 30}, 70%, 50%)`}
//                 >
//                   <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
//                 </circle>
//               ))}
//             </svg>
//           </div>

//           {/* Connection status */}
//           <p className="text-center text-gray-600 text-xs font-mono mt-4">
//             <span className="text-green-500">●</span> ALL SYSTEMS OPERATIONAL | 
//             <span className="text-blue-500"> ● </span> NETWORK HEALTH: 99.9% |
//             <span className="text-purple-500"> ● </span> LATENCY: 2ms
//           </p>
//         </div>
//       </div>

//       <style>{`
//         @keyframes packetFlow {
//           0% { transform: translateX(-100%); opacity: 1; }
//           100% { transform: translateX(500%); opacity: 0; }
//         }
        
//         @keyframes dataStream {
//           0% { transform: translateX(-100%); opacity: 0; }
//           50% { opacity: 1; }
//           100% { transform: translateX(100%); opacity: 0; }
//         }
        
//         @keyframes waveform {
//           0%, 100% { transform: scaleY(1); }
//           50% { transform: scaleY(1.5); }
//         }
        
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
        
//         @keyframes marquee {
//           0% { transform: translateX(100%); }
//           100% { transform: translateX(-100%); }
//         }
//         .animate-marquee {
//           animation: marquee 10s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }






// import { useEffect, useRef, useState } from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// // Professional Network Counter Component
// function NetworkCounter({
//   target,
//   suffix,
//   label,
//   icon,
//   unit,
//   threshold,
// }: {
//   target: number;
//   suffix: string;
//   label: string;
//   icon: string;
//   unit: string;
//   threshold: number;
// }) {
//   const { ref, isVisible } = useScrollAnimation();
//   const [value, setValue] = useState(0);
//   const [trend, setTrend] = useState<'up' | 'down' | 'stable'>('stable');
//   const [alertLevel, setAlertLevel] = useState<'normal' | 'warning' | 'critical'>('normal');

//   useEffect(() => {
//     if (!isVisible) return;

//     // Professional counting with realistic network increments
//     let currentValue = 0;
//     const interval = setInterval(() => {
//       // Add some randomness like real network data
//       const increment = Math.ceil((target / 40) * (0.9 + Math.random() * 0.2));
//       currentValue = Math.min(currentValue + increment, target);
      
//       // Set alert level based on threshold
//       if (currentValue > threshold * 1.2) {
//         setAlertLevel('critical');
//       } else if (currentValue > threshold) {
//         setAlertLevel('warning');
//       } else {
//         setAlertLevel('normal');
//       }
      
//       // Random trend changes
//       if (Math.random() > 0.7) {
//         setTrend(['up', 'down', 'stable'][Math.floor(Math.random() * 3)] as any);
//       }
      
//       setValue(currentValue);
      
//       if (currentValue >= target) {
//         clearInterval(interval);
//       }
//     }, 60);

//     return () => clearInterval(interval);
//   }, [isVisible, target, threshold]);

//   // Alert colors
//   const alertColors = {
//     normal: 'text-green-400',
//     warning: 'text-yellow-400',
//     critical: 'text-red-400',
//   };

//   return (
//     <div ref={ref} className="relative">
//       {/* Professional dashboard card */}
//       <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800 p-5 hover:border-cyan-500/50 transition-all duration-300 group">
        
//         {/* Header with icon and status */}
//         <div className="flex items-start justify-between mb-3">
//           <div className="flex items-center gap-2">
//             <span className="text-2xl">{icon}</span>
//             <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
//               {unit}
//             </span>
//           </div>
          
//           {/* Status indicators */}
//           <div className="flex items-center gap-2">
//             {/* Alert indicator */}
//             <div className={`w-2 h-2 rounded-full ${alertLevel === 'normal' ? 'bg-green-400' : alertLevel === 'warning' ? 'bg-yellow-400 animate-pulse' : 'bg-red-400 animate-ping'}`} />
            
//             {/* Trend indicator */}
//             {trend === 'up' && <span className="text-green-400 text-xs">↑</span>}
//             {trend === 'down' && <span className="text-red-400 text-xs">↓</span>}
//             {trend === 'stable' && <span className="text-gray-400 text-xs">→</span>}
//           </div>
//         </div>

//         {/* Main value with professional font */}
//         <div className="mb-2">
//           <span className={`text-4xl md:text-5xl font-mono font-bold ${alertColors[alertLevel]}`}>
//             {value.toLocaleString()}{suffix}
//           </span>
//         </div>

//         {/* Label and threshold bar */}
//         <div className="space-y-2">
//           <div className="flex justify-between text-xs">
//             <span className="text-gray-400 font-mono">{label}</span>
//             <span className="text-gray-600 font-mono">threshold: {threshold}{suffix}</span>
//           </div>
          
//           {/* Progress bar with threshold indicator */}
//           <div className="relative h-1.5 bg-gray-800 rounded-full overflow-hidden">
//             <div 
//               className={`absolute left-0 top-0 h-full transition-all duration-300 ${
//                 alertLevel === 'normal' ? 'bg-green-500' : 
//                 alertLevel === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
//               }`}
//               style={{ width: `${(value / target) * 100}%` }}
//             />
//             {/* Threshold marker */}
//             <div 
//               className="absolute top-0 w-0.5 h-full bg-white/30"
//               style={{ left: `${(threshold / target) * 100}%` }}
//             />
//           </div>
//         </div>

//         {/* Sparkline (minimalist graph) */}
//         <div className="mt-3 h-6 flex items-end gap-px">
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={i}
//               className="flex-1 bg-cyan-500/20 rounded-t"
//               style={{
//                 height: `${Math.random() * 60 + 20}%`,
//                 opacity: 0.3 + (value / target) * 0.7,
//               }}
//             />
//           ))}
//         </div>

//         {/* Timestamp */}
//         <div className="mt-2 text-[10px] font-mono text-gray-700 flex justify-between">
//           <span>LAST UPDATE: {new Date().toLocaleTimeString()}</span>
//           <span>SNR: {(Math.random() * 20 + 10).toFixed(1)}dB</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Network Operations Center Background
// function NOCBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let width = canvas.width = window.innerWidth;
//     let height = canvas.height = window.innerHeight;

//     // Create network nodes
//     const nodes: any[] = [];
//     const nodeCount = 30;

//     for (let i = 0; i < nodeCount; i++) {
//       nodes.push({
//         x: Math.random() * width,
//         y: Math.random() * height,
//         radius: 2 + Math.random() * 3,
//         connections: [],
//         pulse: Math.random() * Math.PI * 2,
//         type: Math.random() > 0.7 ? 'router' : 'switch',
//       });
//     }

//     // Create connections between nodes
//     nodes.forEach((node, i) => {
//       const connections = [];
//       for (let j = 0; j < nodes.length; j++) {
//         if (i !== j) {
//           const dx = node.x - nodes[j].x;
//           const dy = node.y - nodes[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < 200 && Math.random() > 0.7) {
//             connections.push(j);
//           }
//         }
//       }
//       node.connections = connections;
//     });

//     function draw() {
//       ctx.clearRect(0, 0, width, height);
      
//       // Dark background with grid
//       ctx.fillStyle = '#0a0c14';
//       ctx.fillRect(0, 0, width, height);
      
//       // Draw grid lines (like network maps)
//       ctx.strokeStyle = '#1a1f2e';
//       ctx.lineWidth = 1;
      
//       // Horizontal grid
//       for (let y = 0; y < height; y += 50) {
//         ctx.beginPath();
//         ctx.moveTo(0, y);
//         ctx.lineTo(width, y);
//         ctx.strokeStyle = '#1a1f2e';
//         ctx.stroke();
//       }
      
//       // Vertical grid
//       for (let x = 0; x < width; x += 50) {
//         ctx.beginPath();
//         ctx.moveTo(x, 0);
//         ctx.lineTo(x, height);
//         ctx.strokeStyle = '#1a1f2e';
//         ctx.stroke();
//       }

//       // Draw connections
//       nodes.forEach((node, i) => {
//         node.connections.forEach((connIndex: number) => {
//           const target = nodes[connIndex];
          
//           // Animated data flow
//           const time = Date.now() * 0.001;
//           const t = (Math.sin(time + i) + 1) / 2;
          
//           const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y);
//           gradient.addColorStop(0, '#2a3f5e');
//           gradient.addColorStop(t, '#4f9fff');
//           gradient.addColorStop(1, '#2a3f5e');
          
//           ctx.beginPath();
//           ctx.moveTo(node.x, node.y);
//           ctx.lineTo(target.x, target.y);
//           ctx.strokeStyle = gradient;
//           ctx.lineWidth = 0.5;
//           ctx.stroke();
//         });
//       });

//       // Draw nodes
//       nodes.forEach((node) => {
//         // Node glow
//         ctx.beginPath();
//         ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
//         ctx.fillStyle = node.type === 'router' ? '#4f9fff20' : '#9f7aea20';
//         ctx.fill();
        
//         // Node core
//         ctx.beginPath();
//         ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
//         ctx.fillStyle = node.type === 'router' ? '#4f9fff' : '#9f7aea';
//         ctx.shadowColor = node.type === 'router' ? '#4f9fff' : '#9f7aea';
//         ctx.shadowBlur = 10;
//         ctx.fill();
        
//         // Pulse effect
//         const pulse = Math.sin(Date.now() * 0.002 + node.pulse) * 0.5 + 0.5;
//         ctx.beginPath();
//         ctx.arc(node.x, node.y, node.radius * (1 + pulse), 0, Math.PI * 2);
//         ctx.strokeStyle = node.type === 'router' ? '#4f9fff40' : '#9f7aea40';
//         ctx.lineWidth = 1;
//         ctx.stroke();
//       });

//       ctx.shadowBlur = 0;
//       requestAnimationFrame(draw);
//     }

//     draw();

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
// }

// // Network Health Monitor
// function NetworkHealthMonitor() {
//   const [metrics, setMetrics] = useState({
//     latency: '2.4',
//     packetLoss: '0.01',
//     jitter: '1.2',
//     throughput: '94.5',
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setMetrics({
//         latency: (2 + Math.random() * 0.5).toFixed(1),
//         packetLoss: (0.01 + Math.random() * 0.02).toFixed(2),
//         jitter: (1 + Math.random() * 0.5).toFixed(1),
//         throughput: (94 + Math.random() * 3).toFixed(1),
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="absolute top-5 left-5 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800 p-3 text-xs font-mono hidden lg:block">
//       <div className="text-cyan-400 mb-2">NETWORK HEALTH</div>
//       <div className="space-y-1">
//         <div className="flex justify-between gap-6">
//           <span className="text-gray-500">Latency:</span>
//           <span className="text-green-400">{metrics.latency}ms</span>
//         </div>
//         <div className="flex justify-between gap-6">
//           <span className="text-gray-500">Packet Loss:</span>
//           <span className="text-green-400">{metrics.packetLoss}%</span>
//         </div>
//         <div className="flex justify-between gap-6">
//           <span className="text-gray-500">Jitter:</span>
//           <span className="text-yellow-400">{metrics.jitter}ms</span>
//         </div>
//         <div className="flex justify-between gap-6">
//           <span className="text-gray-500">Throughput:</span>
//           <span className="text-blue-400">{metrics.throughput}%</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // System Uptime
// function SystemUptime() {
//   const [uptime, setUptime] = useState('99.99');

//   return (
//     <div className="absolute bottom-5 right-5 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800 p-3 text-xs font-mono hidden lg:block">
//       <div className="text-green-400 mb-1">SYSTEM UPTIME</div>
//       <div className="text-2xl font-bold text-white">{uptime}%</div>
//       <div className="text-gray-600">365 days • 24/7</div>
//     </div>
//   );
// }

// // Real-time Log Feed
// function LogFeed() {
//   const [logs, setLogs] = useState<string[]>([]);

//   useEffect(() => {
//     const logMessages = [
//       'NETWORK: Link up on port 23 (1Gbps)',
//       'BGP: Route 10.0.0.0/24 converged',
//       'OSPF: Adjacency established with 192.168.1.1',
//       'SNMP: Polling core switches',
//       'DNS: Query resolved in 12ms',
//       'DHCP: Lease assigned to 00:1B:44:11:3A:B7',
//       'ICMP: Echo reply from 8.8.8.8 (14ms)',
//       'SNMP: Interface utilization 34%',
//     ];

//     const interval = setInterval(() => {
//       setLogs(prev => {
//         const newLog = logMessages[Math.floor(Math.random() * logMessages.length)];
//         return [newLog, ...prev].slice(0, 5);
//       });
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="absolute bottom-5 left-5 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800 p-3 text-[10px] font-mono w-72 hidden lg:block">
//       <div className="text-gray-500 mb-2 flex items-center gap-2">
//         <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
//         LIVE LOG FEED
//       </div>
//       <div className="space-y-1">
//         {logs.map((log, i) => (
//           <div key={i} className="text-gray-400 border-l-2 border-cyan-500/30 pl-2">
//             [{new Date().toLocaleTimeString()}] {log}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Main Component
// export default function StatsSection() {
//   const [activePanel, setActivePanel] = useState<number | null>(null);

//   return (
//     <section className="relative py-32 bg-[#0a0c14] min-h-screen overflow-hidden">
      
//       {/* NOC Background with network topology */}
//       <NOCBackground />

//       {/* Network monitoring overlays */}
//       <NetworkHealthMonitor />
//       <SystemUptime />
//       <LogFeed />

//       {/* Network Operations Center header */}
//       <div className="absolute top-0 left-0 right-0 h-12 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 flex items-center px-6 text-xs font-mono">
//         <div className="flex items-center gap-4">
//           <span className="text-cyan-400">NOC</span>
//           <span className="text-gray-600">|</span>
//           <span className="text-gray-400">NETWORK OPERATIONS CENTER</span>
//           <span className="text-gray-600">|</span>
//           <span className="text-green-400">● ONLINE</span>
//           <span className="text-gray-600">|</span>
//           <span className="text-gray-500">PEAK: 2.4 Gbps</span>
//         </div>
//         <div className="ml-auto flex items-center gap-2">
//           <span className="text-gray-600">UTC</span>
//           <span className="text-white">{new Date().toLocaleTimeString()}</span>
//         </div>
//       </div>

//       <div className="relative z-10 container mx-auto px-6 pt-16">
//         <SectionWrapper>
//           <div className="text-center mb-16">
//             {/* Professional header */}
//             <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-md border border-gray-800 mb-6">
//               <div className="flex items-center gap-1">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-150" />
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300" />
//               </div>
//               <span className="font-mono text-sm text-gray-300">ENTERPRISE NETWORK METRICS</span>
//             </div>

//             <h2 className="text-5xl md:text-6xl font-bold mb-4">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
//                 Network Performance
//               </span>
//             </h2>
            
//             <p className="text-gray-500 font-mono text-sm max-w-2xl mx-auto">
//               Real-time network statistics from our global infrastructure. 
//               All metrics are updated in real-time with 99.99% accuracy.
//             </p>

//             {/* SLA Indicator */}
//             <div className="flex justify-center gap-8 mt-6 text-xs font-mono">
//               <div className="flex items-center gap-2">
//                 <div className="w-16 h-1 bg-gray-800 rounded-full overflow-hidden">
//                   <div className="w-[99.99%] h-full bg-green-500" />
//                 </div>
//                 <span className="text-green-400">SLA 99.99%</span>
//               </div>
//             </div>
//           </div>
//         </SectionWrapper>

//         {/* Professional stats grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//           <div 
//             onMouseEnter={() => setActivePanel(0)}
//             onMouseLeave={() => setActivePanel(null)}
//             className={`transition-all duration-300 ${activePanel === 0 ? 'scale-105' : ''}`}
//           >
//             <NetworkCounter 
//               target={250} 
//               suffix="+" 
//               label="PROJECTS DEPLOYED" 
//               icon="🌐"
//               unit="INFRASTRUCTURE"
//               threshold={200}
//             />
//           </div>
          
//           <div 
//             onMouseEnter={() => setActivePanel(1)}
//             onMouseLeave={() => setActivePanel(null)}
//             className={`transition-all duration-300 ${activePanel === 1 ? 'scale-105' : ''}`}
//           >
//             <NetworkCounter 
//               target={120} 
//               suffix="+" 
//               label="ENTERPRISE CLIENTS" 
//               icon="🏢"
//               unit="ACTIVE NODES"
//               threshold={100}
//             />
//           </div>
          
//           <div 
//             onMouseEnter={() => setActivePanel(2)}
//             onMouseLeave={() => setActivePanel(null)}
//             className={`transition-all duration-300 ${activePanel === 2 ? 'scale-105' : ''}`}
//           >
//             <NetworkCounter 
//               target={15} 
//               suffix="" 
//               label="YEARS OF OPERATION" 
//               icon="⏱️"
//               unit="UPTIME"
//               threshold={12}
//             />
//           </div>
          
//           <div 
//             onMouseEnter={() => setActivePanel(3)}
//             onMouseLeave={() => setActivePanel(null)}
//             className={`transition-all duration-300 ${activePanel === 3 ? 'scale-105' : ''}`}
//           >
//             <NetworkCounter 
//               target={99.99} 
//               suffix="%" 
//               label="SERVICE AVAILABILITY" 
//               icon="📊"
//               unit="SLA"
//               threshold={99.9}
//             />
//           </div>
//         </div>

//         {/* Network Summary Footer */}
//         <div className="mt-16 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div>
//               <div className="text-xs font-mono text-gray-600 mb-1">TOTAL BANDWIDTH</div>
//               <div className="text-xl font-mono text-cyan-400">2.4 Tbps</div>
//             </div>
//             <div>
//               <div className="text-xs font-mono text-gray-600 mb-1">ACTIVE CONNECTIONS</div>
//               <div className="text-xl font-mono text-green-400">1,847</div>
//             </div>
//             <div>
//               <div className="text-xs font-mono text-gray-600 mb-1">PEAK TRAFFIC</div>
//               <div className="text-xl font-mono text-yellow-400">894 Gbps</div>
//             </div>
//             <div>
//               <div className="text-xs font-mono text-gray-600 mb-1">GLOBAL PoPs</div>
//               <div className="text-xl font-mono text-purple-400">32</div>
//             </div>
//           </div>
          
//           {/* Network graph */}
//           <div className="mt-4 h-12 flex items-end gap-1">
//             {[...Array(48)].map((_, i) => (
//               <div
//                 key={i}
//                 className="flex-1 bg-gradient-to-t from-cyan-500/30 to-cyan-500/10 rounded-t"
//                 style={{
//                   height: `${Math.sin(i * 0.3) * 30 + 40}%`,
//                 }}
//               />
//             ))}
//           </div>
          
//           <div className="flex justify-between mt-2 text-[10px] font-mono text-gray-700">
//             <span>00:00</span>
//             <span>06:00</span>
//             <span>12:00</span>
//             <span>18:00</span>
//             <span>24:00</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







import { useEffect, useRef, useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function StatCounter({
  target,
  suffix,
  label,
  index,
}: {
  target: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const [displayValue, setDisplayValue] = useState("0");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Set canvas size with higher resolution for crisp text
    canvas.width = 400;
    canvas.height = 200;
    
    // Enable anti-aliasing
    ctx.imageSmoothingEnabled = true;
    
    const portalColors = [
      { primary: '#8B5CF6', secondary: '#EC4899', accent: '#06B6D4' }, // Purple to pink to cyan
      { primary: '#10B981', secondary: '#3B82F6', accent: '#8B5CF6' }, // Emerald to blue to purple
      { primary: '#F59E0B', secondary: '#EF4444', accent: '#EC4899' }, // Amber to red to pink
      { primary: '#6366F1', secondary: '#A855F7', accent: '#EC4899' }, // Indigo to purple to pink
    ];
    
    const colors = portalColors[index % portalColors.length];
    
    let frame = 0;
    const totalFrames = 150; // 2.5 seconds at 60fps
    let time = 0;

    // Portal particles
    const particles: any[] = [];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      particles.push({
        angle,
        radius: 40 + Math.random() * 30,
        speed: 0.01 + Math.random() * 0.02,
        size: 1 + Math.random() * 3,
        hue: Math.random() * 60,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate progress with easing
      const progress = Math.min(frame / totalFrames, 1);
      const easeOutElastic = (t: number): number => {
        if (t === 0) return 0;
        if (t === 1) return 1;
        return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
      };
      
      const easedProgress = easeOutElastic(progress);
      
      // Dark background with gradient
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, '#0B0F19');
      bgGradient.addColorStop(1, '#1A1F2F');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw portal rings
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      time += 0.02;
      
      // Multiple rotating rings
      for (let ring = 0; ring < 3; ring++) {
        const ringProgress = Math.max(0, Math.min(1, (progress - ring * 0.2) * 2));
        if (ringProgress <= 0) continue;
        
        const ringRadius = 30 + ring * 40 + Math.sin(time * 2 + ring) * 5;
        const rotationSpeed = ring % 2 === 0 ? 1 : -1;
        
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(time * rotationSpeed * 0.5);
        
        // Draw ring with gradient
        ctx.beginPath();
        ctx.arc(0, 0, ringRadius * (0.5 + ringProgress * 0.5), 0, Math.PI * 2);
        
        const ringGradient = ctx.createConicGradient(0, 0, 0);
        ringGradient.addColorStop(0, colors.primary);
        ringGradient.addColorStop(0.25, colors.secondary);
        ringGradient.addColorStop(0.5, colors.accent);
        ringGradient.addColorStop(0.75, colors.secondary);
        ringGradient.addColorStop(1, colors.primary);
        
        ctx.strokeStyle = ringGradient;
        ctx.lineWidth = 2 * (1 - ring * 0.2);
        ctx.setLineDash([5 * (1 + ring), 10]);
        ctx.stroke();
        
        ctx.restore();
      }

      // Draw particles orbiting
      particles.forEach(p => {
        p.angle += p.speed;
        
        const x = centerX + Math.cos(p.angle + time) * p.radius * (0.8 + Math.sin(time) * 0.2);
        const y = centerY + Math.sin(p.angle + time) * p.radius * (0.8 + Math.cos(time) * 0.2);
        
        const particleProgress = Math.max(0, progress * 2 - 0.5);
        
        if (particleProgress > 0) {
          ctx.beginPath();
          ctx.arc(x, y, p.size * particleProgress, 0, Math.PI * 2);
          
          // Glowing particles
          ctx.shadowColor = colors.primary;
          ctx.shadowBlur = 15;
          ctx.fillStyle = `hsl(${260 + p.hue}, 80%, 70%)`;
          ctx.fill();
        }
      });

      // Reset shadow for text
      ctx.shadowBlur = 0;

      // Draw energy waves
      for (let i = 0; i < 3; i++) {
        const waveProgress = Math.max(0, progress * 2 - i * 0.5);
        if (waveProgress <= 0) continue;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, 20 + i * 25 + Math.sin(time * 3 + i) * 5, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(
          centerX - 10, centerY - 10, 0,
          centerX, centerY, 50 + i * 30
        );
        gradient.addColorStop(0, `rgba(139, 92, 246, ${0.3 * waveProgress})`);
        gradient.addColorStop(0.5, `rgba(236, 72, 153, ${0.2 * waveProgress})`);
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Calculate number with glitch effect
      let currentNumber = "";
      const numberProgress = Math.max(0, (progress - 0.3) / 0.7);
      
      if (progress < 0.3) {
        // Phase 1: Portal opening - show fragments
        const fragments = ['◇', '◈', '◊', '○', '◌', '◍'];
        currentNumber = fragments[Math.floor(Math.random() * fragments.length)] + 
                       fragments[Math.floor(Math.random() * fragments.length)];
      } else if (progress < 0.6) {
        // Phase 2: Numbers materializing with glitch
        const revealProgress = (progress - 0.3) / 0.3;
        const targetStr = target.toString();
        const revealCount = Math.floor(revealProgress * targetStr.length);
        
        if (Math.random() > 0.7) {
          // Glitch effect
          currentNumber = targetStr.split('').map((char, i) => {
            if (i < revealCount) return char;
            return Math.random() > 0.5 ? '8' : '3';
          }).join('');
        } else {
          currentNumber = targetStr.substring(0, revealCount) + 
                         '░'.repeat(targetStr.length - revealCount);
        }
      } else {
        // Phase 3: Stabilizing with holographic effect
        const stabilizeProgress = (progress - 0.6) / 0.4;
        
        if (stabilizeProgress < 0.8 && Math.random() > stabilizeProgress) {
          // Occasional flicker
          currentNumber = target.toString().split('').map(() => 
            Math.floor(Math.random() * 10).toString()
          ).join('');
        } else {
          currentNumber = target.toString();
        }
      }

      // Draw number with holographic effects
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Main number with gradient
      const textGradient = ctx.createLinearGradient(
        centerX - 50, centerY - 30,
        centerX + 50, centerY + 30
      );
      textGradient.addColorStop(0, colors.primary);
      textGradient.addColorStop(0.5, colors.secondary);
      textGradient.addColorStop(1, colors.accent);
      
      // Scale text based on progress
      const scale = 0.5 + Math.abs(Math.sin(progress * Math.PI * 3)) * 0.3;
      
      ctx.font = `bold ${72 * scale}px "Space Grotesk", "Courier New", monospace`;
      
      // Multiple layers for holographic effect
      for (let layer = 0; layer < 3; layer++) {
        const layerOffset = (layer - 1) * 2 * Math.sin(time * 5);
        const layerOpacity = 0.3 * (1 - progress) * (1 - layer * 0.2);
        
        ctx.shadowColor = layer === 0 ? colors.primary : 
                         layer === 1 ? colors.secondary : colors.accent;
        ctx.shadowBlur = 20 * (1 - progress);
        ctx.fillStyle = `rgba(255, 255, 255, ${layerOpacity})`;
        ctx.fillText(
          currentNumber + suffix,
          centerX + layerOffset,
          centerY + Math.sin(time * 3 + layer) * 5
        );
      }
      
      // Main number
      ctx.shadowColor = colors.primary;
      ctx.shadowBlur = 30 * (1 - progress) + 10;
      ctx.fillStyle = textGradient;
      ctx.fillText(currentNumber + suffix, centerX, centerY);
      
      ctx.restore();

      // Add scanlines
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      for (let i = 0; i < canvas.height; i += 4) {
        ctx.fillRect(0, i, canvas.width, 1);
      }

      frame++;
      
      if (frame <= totalFrames) {
        animationRef.current = requestAnimationFrame(draw);
      } else {
        // Final frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0B0F19';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = 'bold 72px "Space Grotesk", "Courier New", monospace';
        
        const finalGradient = ctx.createLinearGradient(
          centerX - 50, centerY - 30,
          centerX + 50, centerY + 30
        );
        finalGradient.addColorStop(0, colors.primary);
        finalGradient.addColorStop(0.5, colors.secondary);
        finalGradient.addColorStop(1, colors.accent);
        
        ctx.shadowColor = colors.primary;
        ctx.shadowBlur = 30;
        ctx.fillStyle = finalGradient;
        ctx.fillText(target + suffix, centerX, centerY);
        
        setDisplayValue(target + suffix);
      }
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, target, suffix, index]);

  return (
    <div ref={ref} className="text-center group">
      <div 
        ref={portalRef}
        className="relative w-full h-48 flex items-center justify-center"
      >
        {/* Canvas for holographic portal effect */}
        <canvas
          ref={canvasRef}
          className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-110"
          style={{ 
            maxWidth: '300px', 
            margin: '0 auto',
            filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))'
          }}
        />
        
        {/* Energy orb overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-500">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-purple-600 blur-3xl" />
        </div>
      </div>
      
      <div className="text-sm text-gray-400 mt-3 font-medium tracking-wide relative">
        {label}
        
        {/* Energy line on hover */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-16 transition-all duration-500 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>
    </div>
  );
}

export default function StatsSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Create energy field particles
    const particles: any[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: 0.5 + Math.random() * 1.5,
        energy: Math.random() * Math.PI * 2,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      
      const time = Date.now() * 0.001;

      // Draw energy grid
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
      ctx.lineWidth = 0.5;
      
      const gridSize = 50;
      const offsetX = (mousePosition.x - width / 2) * 0.01;
      const offsetY = (mousePosition.y - height / 2) * 0.01;
      
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + offsetX, 0);
        ctx.lineTo(x + offsetX + Math.sin(time) * 5, height);
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.05 + Math.sin(time + x) * 0.02})`;
        ctx.stroke();
      }
      
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + offsetY);
        ctx.lineTo(width, y + offsetY + Math.cos(time) * 5);
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.05 + Math.cos(time + y) * 0.02})`;
        ctx.stroke();
      }

      // Draw energy particles
      particles.forEach((p) => {
        p.energy += 0.02;
        p.pulse += 0.03;
        
        // Mouse interaction
        if (mousePosition.x && mousePosition.y) {
          const dx = p.x - mousePosition.x;
          const dy = p.y - mousePosition.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            const angle = Math.atan2(dy, dx);
            const force = (150 - dist) / 150;
            p.x += Math.cos(angle) * force * 0.5;
            p.y += Math.sin(angle) * force * 0.5;
          }
        }

        p.x += p.vx + Math.sin(p.energy) * 0.1;
        p.y += p.vy + Math.cos(p.energy) * 0.1;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle with pulsing glow
        const pulseSize = p.size + Math.sin(p.pulse) * 0.3;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2);
        
        // Create gradient glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulseSize * 4);
        gradient.addColorStop(0, `rgba(139, 92, 246, 0.8)`);
        gradient.addColorStop(0.5, `rgba(236, 72, 153, 0.4)`);
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative py-32 bg-[#0B0F19] overflow-hidden">
      
      {/* Energy Field Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <SectionWrapper>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Dimensional Statistics
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Numbers materialized from another dimension
            </p>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <StatCounter target={250} suffix="+" label="Projects Delivered" index={0} />
          <StatCounter target={120} suffix="+" label="Clients Served" index={1} />
          <StatCounter target={15} suffix="+" label="Years of Experience" index={2} />
          <StatCounter target={99} suffix="%" label="Client Satisfaction" index={3} />
        </div>
      </div>
    </section>
  );
}