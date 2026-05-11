// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Sparkles, ArrowRight } from 'lucide-react';
// import { TiltCard } from './TiltCard';

// export function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        
//         {/* Animated Grid */}
//         <div className="absolute inset-0 opacity-20" style={{
//           backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
//           backgroundSize: '50px 50px',
//           animation: 'gridMove 20s linear infinite',
//         }} />
        
//         {/* Floating Orbs */}
//         <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
//         <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 text-center">
//         {/* Animated Badge */}
//         <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-white/20 shadow-xl mb-8 group hover:scale-105 transition-transform">
//           <Sparkles className="w-5 h-5 text-blue-600" />
//           <span className="text-sm font-medium text-gray-700">Celebrating 10 Years of Excellence</span>
//           <div className="flex gap-1">
//             <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
//             <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping animation-delay-300" />
//             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping animation-delay-600" />
//           </div>
//         </div>

//         {/* Main Title */}
//         <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9]">
//           <span className="relative inline-block">
//             <span className="absolute inset-0 text-blue-500 blur-3xl opacity-30 animate-pulse">BUILDING</span>
//             <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
//               BUILDING
//             </span>
//           </span>
//           <br />
//           <span className="relative inline-block mt-4">
//             <span className="absolute inset-0 text-purple-500 blur-3xl opacity-30 animate-pulse animation-delay-1000">TRUST</span>
//             <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
//               TRUST
//             </span>
//           </span>
//         </h1>

//         {/* Animated Description */}
//         <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in">
//           We specialize in{' '}
//           <span className="relative">
//             <span className="relative z-10 font-bold text-blue-600">Data Cabling</span>
//             <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 -z-10 rounded-full" />
//           </span>
//           ,{' '}
//           <span className="relative">
//             <span className="relative z-10 font-bold text-purple-600">Data Security</span>
//             <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-200 -z-10 rounded-full" />
//           </span>
//           ,{' '}
//           <span className="relative">
//             <span className="relative z-10 font-bold text-emerald-600">Physical Security</span>
//             <span className="absolute bottom-0 left-0 w-full h-3 bg-emerald-200 -z-10 rounded-full" />
//           </span>
//           , and{' '}
//           <span className="relative">
//             <span className="relative z-10 font-bold text-pink-600">Artificial Intelligence</span>
//             <span className="absolute bottom-0 left-0 w-full h-3 bg-pink-200 -z-10 rounded-full" />
//           </span>
//           .
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-wrap justify-center gap-6">
//           <TiltCard>
//             <Link to="/contact">
//               <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-12 py-7 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110">
//                 Begin Your Journey
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
//               </Button>
//             </Link>
//           </TiltCard>
          
//           <TiltCard>
//             <Link to="/services">
//               <Button variant="outline" className="rounded-full px-12 py-7 text-lg border-2 border-gray-200 hover:border-gray-300 hover:bg-white/80 backdrop-blur-sm">
//                 Explore Solutions
//               </Button>
//             </Link>
//           </TiltCard>
//         </div>

//         {/* CIN Details */}
//         <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
//           <span>CIN: U74999KA2016PTC093860</span>
//           <span className="w-1 h-1 rounded-full bg-gray-300" />
//           <span>MSME: UDYAM-KR-03-0007661</span>
//         </div>


        
//       </div>
//     </section>
//   );
// }



// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Sparkles, ArrowRight } from 'lucide-react';
// import { TiltCard } from './TiltCard';

// export function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Animated Background - Updated with new gradient */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-50 via-yellow-50/30 to-blue-50" />
        
//         {/* Animated Grid - Updated with pink color */}
//         <div className="absolute inset-0 opacity-20" style={{
//           backgroundImage: `linear-gradient(#E11D48 1px, transparent 1px), linear-gradient(90deg, #E11D48 1px, transparent 1px)`,
//           backgroundSize: '50px 50px',
//           animation: 'gridMove 20s linear infinite',
//         }} />
        
//         {/* Floating Orbs - Updated with new colors */}
//         <div className="absolute top-20 left-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
//         <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 text-center">
//         {/* Animated Badge - Updated with new colors */}
//         <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-white/20 shadow-xl mb-8 group hover:scale-105 transition-transform">
//           <Sparkles className="w-5 h-5 text-pink-600" />
//           <span className="text-sm font-medium text-gray-700">Celebrating 10 Years of Excellence</span>
//           <div className="flex gap-1">
//             <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
//             <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping animation-delay-300" />
//             <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping animation-delay-600" />
//           </div>
//         </div>

//         {/* Main Title - Updated with new gradient */}
//         <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9]">
//           <span className="relative inline-block">
//             <span className="absolute inset-0 text-pink-500 blur-3xl opacity-30 animate-pulse">BUILDING</span>
//             <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600">
//               BUILDING
//             </span>
//           </span>
//           <br />
//           <span className="relative inline-block mt-4">
//             <span className="absolute inset-0 text-yellow-400 blur-3xl opacity-30 animate-pulse animation-delay-1000">TRUST</span>
//             <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600">
//               TRUST
//             </span>
//           </span>
//         </h1>

//         {/* Animated Description - Updated with new colors */}
//         <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in">
//           We specialize in{' '}
//           <span className="relative">
//             <span className="relative z-10 font-bold text-pink-600">Data Cabling</span>
//             <span className="absolute bottom-0 left-0 w-full h-3 bg-pink-200 -z-10 rounded-full" />
//           </span>
//           ,{' '}
//           <span className="relative">
//             <span className="relative z-10 font-bold text-yellow-500">Data Security</span>
//             <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-200 -z-10 rounded-full" />
//           </span>
//           ,{' '}
//           <span className="relative">
//             <span className="relative z-10 font-bold text-blue-600">Physical Security</span>
//             <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 -z-10 rounded-full" />
//           </span>
//           , and{' '}
//           <span className="relative">
//             <span className="relative z-10 font-bold text-cyan-600">Artificial Intelligence</span>
//             <span className="absolute bottom-0 left-0 w-full h-3 bg-cyan-200 -z-10 rounded-full" />
//           </span>
//           .
//         </p>

//         {/* CTA Buttons - Updated with new gradient */}
//         <div className="flex flex-wrap justify-center gap-6">
//           <TiltCard>
//             <Link to="/contact">
//               <Button className="group bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 hover:from-pink-700 hover:via-yellow-500 hover:to-blue-700 text-white rounded-full px-12 py-7 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110">
//                 Begin Your Journey
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
//               </Button>
//             </Link>
//           </TiltCard>
          
//           <TiltCard>
//             <Link to="/services">
//               <Button variant="outline" className="rounded-full px-12 py-7 text-lg border-2 border-pink-200 hover:border-pink-300 hover:bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-pink-50 hover:to-yellow-50 transition-all duration-300">
//                 Explore Solutions
//               </Button>
//             </Link>
//           </TiltCard>
//         </div>

//         {/* CIN Details */}
//         <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
//           <span>CIN: U74999KA2016PTC093860</span>
//           <span className="w-1 h-1 rounded-full bg-pink-300" />
//           <span>MSME: UDYAM-KR-03-0007661</span>
//         </div>
//       </div>

//       {/* Add keyframe animations if not already in your global CSS */}
//       <style>{`
//         @keyframes gridMove {
//           0% {
//             transform: translate(0, 0);
//           }
//           100% {
//             transform: translate(50px, 50px);
//           }
//         }
        
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
        
//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }
        
//         .animation-delay-300 {
//           animation-delay: 0.3s;
//         }
        
//         .animation-delay-600 {
//           animation-delay: 0.6s;
//         }
        
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out;
//         }
//       `}</style>
//     </section>
//   );
// }





// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Sparkles, ArrowRight } from 'lucide-react';
// import { TiltCard } from './TiltCard';
// import { motion } from 'framer-motion';

// export function HeroSection() {
//   return (
//     <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://i.pinimg.com/1200x/ed/f3/6b/edf36bbb7e4830ac5e30596100d32934.jpg')",
//         }}
//       />

//       {/* Bright Gradient Overlay - Using new color combination */}
//       <div className="absolute inset-0 bg-gradient-to-r from-pink-600/85 via-yellow-400/80 to-blue-600/85" />
      
//       {/* Animated Grid Pattern - Enhanced visibility */}
//       <div className="absolute inset-0 opacity-20" style={{
//         backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
//         backgroundSize: '50px 50px',
//         animation: 'gridMove 20s linear infinite',
//       }} />
      
//       {/* Floating Orbs - Updated with new colors and better visibility */}
//       <div className="absolute top-20 left-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float" />
//       <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float animation-delay-2000" />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" />

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 text-center">
//         {/* Animated Badge - Updated for dark background */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-xl mb-8 group hover:scale-105 transition-transform"
//         >
//           <Sparkles className="w-5 h-5 text-yellow-300" />
//           <span className="text-sm font-medium text-white">Celebrating 10 Years of Excellence</span>
//           <div className="flex gap-1">
//             <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
//             <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping animation-delay-300" />
//             <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping animation-delay-600" />
//           </div>
//         </motion.div>

//         {/* Main Title - Enhanced for visibility */}
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9]"
//         >
//           <span className="relative inline-block">
//             <span className="absolute inset-0 text-pink-300 blur-3xl opacity-50 animate-pulse">BUILDING</span>
//             <span className="relative text-white drop-shadow-2xl">
//               BUILDING
//             </span>
//           </span>
//           <br />
//           <span className="relative inline-block mt-4">
//             <span className="absolute inset-0 text-yellow-300 blur-3xl opacity-50 animate-pulse animation-delay-1000">TRUST</span>
//             <span className="relative text-white drop-shadow-2xl">
//               TRUST
//             </span>
//           </span>
//         </motion.h1>

//         {/* Animated Description - Updated with vibrant colors on dark background */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
//         >
//           We specialize in{' '}
//           <span className="relative">
//             <span className="relative z-10 font-bold text-pink-300">Data Cabling</span>
//             <span className="absolute bottom-0 left-0 w-full h-3 bg-pink-500/40 -z-10 rounded-full blur-sm" />
//           </span>
//           ,{' '}
//           <span className="relative">
//             <span className="relative z-10 font-bold text-yellow-300">Data Security</span>
//             <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-500/40 -z-10 rounded-full blur-sm" />
//           </span>
//           ,{' '}
//           <span className="relative">
//             <span className="relative z-10 font-bold text-blue-300">Physical Security</span>
//             <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-500/40 -z-10 rounded-full blur-sm" />
//           </span>
//           , and{' '}
//           <span className="relative">
//             <span className="relative z-10 font-bold text-cyan-300">Artificial Intelligence</span>
//             <span className="absolute bottom-0 left-0 w-full h-3 bg-cyan-500/40 -z-10 rounded-full blur-sm" />
//           </span>
//           .
//         </motion.p>

//         {/* CTA Buttons - Enhanced for dark background */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="flex flex-wrap justify-center gap-6"
//         >
//           <TiltCard>
//             <Link to="/contact">
//               <Button className="group bg-white text-pink-600 hover:bg-gradient-to-r hover:from-pink-600 hover:via-yellow-400 hover:to-blue-600 hover:text-white rounded-full px-12 py-7 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110">
//                 Begin Your Journey
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
//               </Button>
//             </Link>
//           </TiltCard>
          
//           <TiltCard>
//             <Link to="/oursolution">
//               <Button variant="outline" className="rounded-full px-12 py-7 text-lg border-2 border-white/50 text-black hover:bg-white/20 backdrop-blur-sm hover:border-white transition-all duration-300">
//                 Explore Solutions
//               </Button>
//             </Link>
//           </TiltCard>
//         </motion.div>

//         {/* CIN Details - Updated for dark background */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/70"
//         >
         
//         </motion.div>
//       </div>

//       {/* Add keyframe animations */}
//       <style>{`
//         @keyframes gridMove {
//           0% {
//             transform: translate(0, 0);
//           }
//           100% {
//             transform: translate(50px, 50px);
//           }
//         }
        
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
        
//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }
        
//         .animation-delay-300 {
//           animation-delay: 0.3s;
//         }
        
//         .animation-delay-600 {
//           animation-delay: 0.6s;
//         }
        
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out;
//         }
//       `}</style>
//     </section>
//   );
// }





import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { motion } from 'framer-motion';

export function HeroSection() {
  const navigate = useNavigate();

  const scrollToContactForm = () => {
    navigate('/contact');
    // Small delay to allow page navigation before scrolling
    setTimeout(() => {
      const contactFormElement = document.getElementById('contact-form');
      if (contactFormElement) {
        contactFormElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/ed/f3/6b/edf36bbb7e4830ac5e30596100d32934.jpg')",
        }}
      />

      {/* Bright Gradient Overlay - Using new color combination */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/85 via-yellow-400/80 to-blue-600/85" />
      
      {/* Animated Grid Pattern - Enhanced visibility */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        animation: 'gridMove 20s linear infinite',
      }} />
      
      {/* Floating Orbs - Updated with new colors and better visibility */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Animated Badge - Updated for dark background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-xl mb-8 group hover:scale-105 transition-transform"
        >
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="text-sm font-medium text-white">Celebrating 10 Years of Excellence</span>
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping animation-delay-300" />
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping animation-delay-600" />
          </div>
        </motion.div>

        {/* Main Title - Enhanced for visibility */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9]"
        >
          <span className="relative inline-block">
            <span className="absolute inset-0 text-pink-300 blur-3xl opacity-50 animate-pulse">BUILDING</span>
            <span className="relative text-white drop-shadow-2xl">
              BUILDING
            </span>
          </span>
          <br />
          <span className="relative inline-block mt-4">
            <span className="absolute inset-0 text-yellow-300 blur-3xl opacity-50 animate-pulse animation-delay-1000">TRUST</span>
            <span className="relative text-white drop-shadow-2xl">
              TRUST
            </span>
          </span>
        </motion.h1>

        {/* Animated Description - Updated with vibrant colors on dark background */}
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          We specialize in{' '}
          <span className="relative">
            <span className="relative z-10 font-bold text-pink-600">Data Cabling</span>
            
          </span>
          ,{' '}
          <span className="relative">
            <span className="relative z-10 font-bold text-yellow-800">Data Physical Security</span>
       
          </span>
          ,{' '}
           <span className="relative">
            <span className="relative z-10 font-bold text-green-800">Data Security </span>
          
          </span>
          ,{' '}
          <span className="relative">
            <span className="relative z-10 font-bold text-blue-600">Data Infra</span>
      
          </span>
          , and{' '}
          <span className="relative">
            <span className="relative z-10 font-bold text-cyan-600">Artificial Intelligence</span>
          
          </span>
          .
        </motion.p> */}

        <p className="text-xl sm:text-2xl text-black/90 max-w-2xl mx-auto leading-relaxed mb-8">
         We Specialize In Data Cabling, Data Physical Security, Data Security , Data Infra, And Artificial Intelligence.
        </p>

        {/* CTA Buttons - Enhanced for dark background */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <TiltCard>
            <button 
              onClick={scrollToContactForm}
              className="group bg-white text-pink-600 hover:bg-gradient-to-r hover:from-pink-600 hover:via-yellow-400 hover:to-blue-600 hover:text-white rounded-full px-12 py-7 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
            >
              Begin Your Journey
              <ArrowRight className="ml-2 w-5 h-5 inline-block group-hover:translate-x-2 transition-transform" />
            </button>
            
          </TiltCard>
          
          
          <TiltCard>
            <Link to="/oursolution">
              <Button variant="outline" className="rounded-full px-12 py-7 text-lg border-2 border-white/50 text-black hover:bg-white/20 backdrop-blur-sm hover:border-white transition-all duration-300">
                Explore Solutions
              </Button>
            </Link>
          </TiltCard>
        </motion.div> */}

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="flex flex-wrap justify-center gap-6"
>
  {/* Button 1 */}
  <TiltCard>
    <button 
      onClick={scrollToContactForm}
      className="group flex items-center justify-center 
      h-14 px-8 text-base font-medium
      bg-white text-pink-600 
      hover:bg-gradient-to-r hover:from-pink-600 hover:via-yellow-400 hover:to-blue-600 
      hover:text-white 
      rounded-full 
      shadow-xl hover:shadow-2xl 
      transition-all duration-300 hover:scale-105"
    >
      Begin Your Journey
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  </TiltCard>

  {/* Button 2 */}
  <TiltCard>
    <Link to="/oursolution">
      <button
        className="group flex items-center justify-center 
        h-14 px-8 text-base font-medium
        rounded-full 
        border-2 border-gray-300 text-black 
        hover:bg-gray-100 hover:border-gray-400 
        shadow-xl hover:shadow-2xl 
        transition-all duration-300 hover:scale-105"
      >
        Explore Solutions
      </button>
    </Link>
  </TiltCard>
      </motion.div>

        {/* CIN Details - Updated for dark background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/70"
        >
         
        </motion.div>
      </div>

      {/* Add keyframe animations */}
      <style>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}