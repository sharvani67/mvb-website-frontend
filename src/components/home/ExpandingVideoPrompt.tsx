// import { useState, useEffect, useRef } from 'react';
// import { X, Play, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';

// interface VideoStep {
//   title: string;
//   description: string;
//   videoSrc: string;
//   color: string;
// }

// export default function ExpandingVideoPrompt() {
//   const [stage, setStage] = useState<'hidden' | 'icon' | 'small' | 'expanded'>('hidden');
//   const [currentStep, setCurrentStep] = useState(0);
//   const [isMuted, setIsMuted] = useState(true);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const steps: VideoStep[] = [
//     {
//       title: 'Welcome to Enterprise Suite',
//       description: 'Discover how our infrastructure can transform your business.',
//       videoSrc: '/videos/intro.mp4',
//       color: 'from-blue-600 to-purple-600',
//     },
//     {
//       title: 'Secure by Design',
//       description: 'Bank-level security with zero-trust architecture.',
//       videoSrc: '/videos/security.mp4',
//       color: 'from-purple-600 to-pink-600',
//     },
//     {
//       title: 'Global Scale',
//       description: 'Deploy anywhere with our worldwide network.',
//       videoSrc: '/videos/global.mp4',
//       color: 'from-cyan-600 to-blue-600',
//     },
//   ];

//   useEffect(() => {
//     // Stage 1: Icon appears (1 second)
//     const iconTimer = setTimeout(() => setStage('icon'), 1000);
    
//     // Stage 2: Small window (after 2 seconds)
//     const smallTimer = setTimeout(() => setStage('small'), 3000);
    
//     // Stage 3: Expanded (after 4 seconds)
//     const expandTimer = setTimeout(() => setStage('expanded'), 5000);

//     return () => {
//       clearTimeout(iconTimer);
//       clearTimeout(smallTimer);
//       clearTimeout(expandTimer);
//     };
//   }, []);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.src = steps[currentStep].videoSrc;
//       videoRef.current.load();
//       videoRef.current.play().catch(() => {});
//     }
//   }, [currentStep]);

//   const handleNext = () => {
//     setCurrentStep((prev) => (prev + 1) % steps.length);
//   };

//   const handlePrev = () => {
//     setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
//   };

//   const handleClose = () => {
//     setStage('hidden');
//   };

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   // Size mappings
//   const sizes = {
//     hidden: { width: 0, height: 0 },
//     icon: { width: 60, height: 60 },
//     small: { width: 240, height: 180 },
//     expanded: { width: 560, height: 420 },
//   };

//   const currentSize = sizes[stage];

//   return (
//     <>
//       {/* Backdrop */}
//       <div 
//         className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-700 z-40 ${
//           stage === 'expanded' ? 'opacity-100' : 'opacity-0 pointer-events-none'
//         }`}
//         onClick={handleClose}
//       />

//       {/* Main Container */}
//       <div 
//         className="fixed right-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-700 ease-out"
//         style={{
//           width: currentSize.width,
//           height: currentSize.height,
//           opacity: stage === 'hidden' ? 0 : 1,
//           transform: `translateX(0) translateY(-50%)`,
//         }}
//       >
//         <div className={`relative w-full h-full rounded-l-2xl shadow-2xl overflow-hidden bg-gradient-to-br ${steps[currentStep].color}`}>
          
//           {/* Video Background */}
//           <video
//             ref={videoRef}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
//               stage === 'expanded' ? 'opacity-100' : 'opacity-0'
//             }`}
//             autoPlay
//             muted={isMuted}
//             loop
//             playsInline
//           />

//           {/* Overlay */}
//           <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 ${
//             stage === 'expanded' ? 'opacity-100' : 'opacity-0'
//           }`} />

//           {/* Icon Stage */}
//           {stage === 'icon' && (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="relative">
//                 <div className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
//                 <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                   <Play className="w-5 h-5 text-blue-600 ml-0.5" />
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Small Stage */}
//           {stage === 'small' && (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-center">
//                 <Play className="w-8 h-8 text-white mx-auto mb-2" />
//                 <p className="text-xs text-white/80 font-medium">Click to watch</p>
//               </div>
//             </div>
//           )}

//           {/* Expanded Stage */}
//           {stage === 'expanded' && (
//             <>
//               {/* Content */}
//               <div className="absolute inset-0 flex flex-col justify-end p-6">
//                 {/* Step indicator */}
//                 <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1.5">
//                   {steps.map((_, i) => (
//                     <div
//                       key={i}
//                       className={`h-1 rounded-full transition-all duration-300 ${
//                         i === currentStep 
//                           ? 'w-8 bg-white' 
//                           : 'w-2 bg-white/40'
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 {/* Title and description */}
//                 <h3 className="text-2xl font-bold text-white mb-2">
//                   {steps[currentStep].title}
//                 </h3>
//                 <p className="text-white/80 text-sm mb-4 max-w-[70%]">
//                   {steps[currentStep].description}
//                 </p>

//                 {/* Controls */}
//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={handlePrev}
//                     className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
//                   >
//                     <ChevronLeft className="w-4 h-4 text-white" />
//                   </button>
                  
//                   <button
//                     onClick={handleNext}
//                     className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
//                   >
//                     <ChevronRight className="w-4 h-4 text-white" />
//                   </button>

//                   <button
//                     onClick={toggleMute}
//                     className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors ml-auto"
//                   >
//                     {isMuted ? (
//                       <VolumeX className="w-4 h-4 text-white" />
//                     ) : (
//                       <Volume2 className="w-4 h-4 text-white" />
//                     )}
//                   </button>

//                   <button
//                     onClick={() => window.location.href = '/contact'}
//                     className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold text-sm hover:bg-white/90 transition-colors"
//                   >
//                     Learn More
//                   </button>
//                 </div>
//               </div>

//               {/* Close button */}
//               <button
//                 onClick={handleClose}
//                 className="absolute top-3 left-3 p-1.5 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
//               >
//                 <X className="w-4 h-4 text-white" />
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }





// import { useState, useEffect, useRef } from 'react';
// import { X, Play, Volume2, VolumeX, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';

// interface VideoStep {
//   title: string;
//   description: string;
//   videoSrc: string;
//   color: string;
// }

// export default function ExpandingVideoPrompt() {
//   const [stage, setStage] = useState<'hidden' | 'icon' | 'small' | 'expanded'>('hidden');
//   const [currentStep, setCurrentStep] = useState(0);
//   const [isMuted, setIsMuted] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [showControls, setShowControls] = useState(true);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const controlsTimeoutRef = useRef<NodeJS.Timeout>();

//   // Check if mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const steps: VideoStep[] = [
//     {
//       title: 'Welcome to Enterprise Suite',
//       description: 'Discover how our infrastructure can transform your business.',
//       videoSrc: 'https://media.istockphoto.com/id/2257912571/video/4k-global-business-concept-of-connections-and-information-transfer-in-the-world.mp4?s=mp4-480x480-is&k=20&c=b5hyfWDD43z49ZWyCQIbZZ_EtXtDMhT8xOWA12jN3cY=',
//       color: 'from-blue-600 to-purple-600',
//     },
//     {
//       title: 'Secure by Design',
//       description: 'Bank-level security with zero-trust architecture.',
//       videoSrc: 'https://media.istockphoto.com/id/1141900881/video/male-electrician-mounting-switches-and-connecting-wires-into-a-new-electrical-enclosure.mp4?s=mp4-640x640-is&k=20&c=TxX_DqChjFtr9ZTL1FF-_P7hCcAVHFmT3W1dEJedhRk=',
//       color: 'from-purple-600 to-pink-600',
//     },
//     {
//       title: 'Global Scale',
//       description: 'Deploy anywhere with our worldwide network.',
//       videoSrc: 'https://media.istockphoto.com/id/1130889317/video/it-specialist-standing-in-front-of-server-racks-with-laptop-he-activates-data-center-with-a.mp4?s=mp4-640x640-is&k=20&c=_Af59xjGhGkcgMk6CBruEO3WftW_WNgehpZczZnLW9c=',
//       color: 'from-cyan-600 to-blue-600',
//     },
//   ];

//   useEffect(() => {
//     // Stage 1: Icon appears (1 second)
//     const iconTimer = setTimeout(() => setStage('icon'), 1000);
    
//     // Stage 2: Small window (after 2 seconds)
//     const smallTimer = setTimeout(() => setStage('small'), 3000);
    
//     // Stage 3: Expanded (after 4 seconds)
//     const expandTimer = setTimeout(() => setStage('expanded'), 5000);

//     return () => {
//       clearTimeout(iconTimer);
//       clearTimeout(smallTimer);
//       clearTimeout(expandTimer);
//     };
//   }, []);

//   useEffect(() => {
//     if (videoRef.current && stage === 'expanded') {
//       videoRef.current.src = steps[currentStep].videoSrc;
//       videoRef.current.load();
//       videoRef.current.play().catch(() => {});
//     }
//   }, [currentStep, stage]);

//   // Auto-hide controls on mobile
//   useEffect(() => {
//     if (isMobile && stage === 'expanded') {
//       const handleTouch = () => {
//         setShowControls(true);
        
//         if (controlsTimeoutRef.current) {
//           clearTimeout(controlsTimeoutRef.current);
//         }
        
//         controlsTimeoutRef.current = setTimeout(() => {
//           setShowControls(false);
//         }, 3000);
//       };

//       window.addEventListener('touchstart', handleTouch);
      
//       return () => {
//         window.removeEventListener('touchstart', handleTouch);
//         if (controlsTimeoutRef.current) {
//           clearTimeout(controlsTimeoutRef.current);
//         }
//       };
//     }
//   }, [isMobile, stage]);

//   const handleNext = () => {
//     setCurrentStep((prev) => (prev + 1) % steps.length);
//   };

//   const handlePrev = () => {
//     setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
//   };

//   const handleClose = () => {
//     setStage('hidden');
//     setIsFullscreen(false);
//   };

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const toggleFullscreen = () => {
//     if (!containerRef.current) return;
    
//     if (!isFullscreen) {
//       if (containerRef.current.requestFullscreen) {
//         containerRef.current.requestFullscreen();
//       }
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       }
//     }
//     setIsFullscreen(!isFullscreen);
//   };

//   // Responsive size mappings
//   const sizes = {
//     hidden: { width: 0, height: 0 },
//     icon: { width: isMobile ? 50 : 60, height: isMobile ? 50 : 60 },
//     small: { width: isMobile ? 180 : 240, height: isMobile ? 135 : 180 },
//   };

//   const currentSize = sizes[stage as keyof typeof sizes];
//   const isExpanded = stage === 'expanded';

//   // Mobile expanded view
//   if (isMobile && isExpanded) {
//     return (
//       <>
//         {/* Dark overlay */}
//         <div 
//           className="fixed inset-0 bg-black/90 z-50"
//           onClick={handleClose}
//         />
        
//         {/* Video container */}
//         <div 
//           ref={containerRef}
//           className="fixed inset-0 z-50 flex items-center justify-center p-2"
//         >
//           <div 
//             className={`relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${steps[currentStep].color}`}
//             style={{ aspectRatio: '16/9' }}
//           >
//             {/* Video */}
//             <video
//               ref={videoRef}
//               className="absolute inset-0 w-full h-full object-cover"
//               autoPlay
//               muted={isMuted}
//               loop
//               playsInline
//             />

//             {/* Gradient overlay */}
//             <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 ${
//               showControls ? 'opacity-100' : 'opacity-0'
//             }`} />

//             {/* Top bar - Steps indicator and close */}
//             <div className={`absolute top-0 left-0 right-0 p-3 flex justify-between items-center transition-opacity duration-300 ${
//               showControls ? 'opacity-100' : 'opacity-0'
//             }`}>
//               <div className="flex gap-1.5">
//                 {steps.map((_, i) => (
//                   <div
//                     key={i}
//                     className={`h-1 rounded-full transition-all duration-300 ${
//                       i === currentStep 
//                         ? 'w-6 bg-white' 
//                         : 'w-1.5 bg-white/40'
//                     }`}
//                   />
//                 ))}
//               </div>
              
//               <button
//                 onClick={handleClose}
//                 className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
//                 aria-label="Close"
//               >
//                 <X className="w-4 h-4 text-white" />
//               </button>
//             </div>

//             {/* Bottom controls */}
//             <div className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 ${
//               showControls ? 'opacity-100' : 'opacity-0'
//             }`}>
//               {/* Title and description */}
//               <h3 className="text-lg font-bold text-white mb-1">
//                 {steps[currentStep].title}
//               </h3>
//               <p className="text-sm text-white/80 mb-3 max-w-[80%]">
//                 {steps[currentStep].description}
//               </p>

//               {/* Control buttons */}
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={handlePrev}
//                   className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
//                   aria-label="Previous video"
//                 >
//                   <ChevronLeft className="w-4 h-4 text-white" />
//                 </button>
                
//                 <button
//                   onClick={handleNext}
//                   className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
//                   aria-label="Next video"
//                 >
//                   <ChevronRight className="w-4 h-4 text-white" />
//                 </button>

//                 <button
//                   onClick={toggleMute}
//                   className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
//                   aria-label={isMuted ? "Unmute" : "Mute"}
//                 >
//                   {isMuted ? (
//                     <VolumeX className="w-4 h-4 text-white" />
//                   ) : (
//                     <Volume2 className="w-4 h-4 text-white" />
//                   )}
//                 </button>

//                 <button
//                   onClick={() => window.location.href = '/contact'}
//                   className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold text-sm hover:bg-white/90 transition-colors ml-auto"
//                 >
//                   Learn More
//                 </button>
//               </div>
//             </div>

//             {/* Tap to show controls hint */}
//             {!showControls && (
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <p className="text-white/60 text-xs">Tap to show controls</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </>
//     );
//   }

//   // Desktop or non-expanded mobile view
//   return (
//     <>
//       {/* Backdrop */}
//       <div 
//         className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-700 z-40 ${
//           isExpanded && !isMobile ? 'opacity-100' : 'opacity-0 pointer-events-none'
//         }`}
//         onClick={handleClose}
//       />

//       {/* Main Container */}
//       <div 
//         className={`fixed z-50 transition-all duration-700 ease-out ${
//           !isMobile && isExpanded
//             ? 'right-4 sm:right-6 top-1/2 -translate-y-1/2'
//             : 'right-4 top-1/2 -translate-y-1/2'
//         }`}
//         style={
//           !isMobile || !isExpanded
//             ? {
//                 width: currentSize?.width,
//                 height: currentSize?.height,
//                 opacity: stage === 'hidden' ? 0 : 1,
//               }
//             : {}
//         }
//       >
//         <div 
//           ref={containerRef}
//           className={`relative w-full h-full rounded-2xl md:rounded-l-2xl shadow-2xl overflow-hidden bg-gradient-to-br ${steps[currentStep].color}`}
//         >
//           {/* Video Background */}
//           <video
//             ref={videoRef}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
//               isExpanded ? 'opacity-100' : 'opacity-0'
//             }`}
//             autoPlay
//             muted={isMuted}
//             loop
//             playsInline
//           />

//           {/* Overlay */}
//           <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 ${
//             isExpanded ? 'opacity-100' : 'opacity-0'
//           }`} />

//           {/* Icon Stage */}
//           {stage === 'icon' && (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="relative">
//                 <div className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
//                 <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
//                   <Play className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 ml-0.5" />
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Small Stage */}
//           {stage === 'small' && (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-center">
//                 <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto mb-1 sm:mb-2" />
//                 <p className="text-[10px] sm:text-xs text-white/80 font-medium px-2">
//                   {isMobile ? 'Tap' : 'Click'} to watch
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* Expanded Stage - Desktop */}
//           {isExpanded && !isMobile && (
//             <>
//               <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
//                 <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5">
//                   {steps.map((_, i) => (
//                     <div
//                       key={i}
//                       className={`h-1 rounded-full transition-all duration-300 ${
//                         i === currentStep 
//                           ? 'w-6 sm:w-8 bg-white' 
//                           : 'w-1.5 sm:w-2 bg-white/40'
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">
//                   {steps[currentStep].title}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4 max-w-[70%]">
//                   {steps[currentStep].description}
//                 </p>

//                 <div className="flex items-center gap-1 sm:gap-2">
//                   <button
//                     onClick={handlePrev}
//                     className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
//                   >
//                     <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//                   </button>
                  
//                   <button
//                     onClick={handleNext}
//                     className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
//                   >
//                     <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//                   </button>

//                   <button
//                     onClick={toggleMute}
//                     className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors ml-auto"
//                   >
//                     {isMuted ? (
//                       <VolumeX className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//                     ) : (
//                       <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//                     )}
//                   </button>

//                   <button
//                     onClick={() => window.location.href = '/contact'}
//                     className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-blue-600 rounded-lg font-semibold text-xs sm:text-sm hover:bg-white/90 transition-colors"
//                   >
//                     Learn More
//                   </button>
//                 </div>
//               </div>

//               <button
//                 onClick={handleClose}
//                 className="absolute top-2 left-2 sm:top-3 sm:left-3 p-1.5 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
//               >
//                 <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }




// import { useState, useEffect, useRef } from 'react';
// import { X, Play, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';

// interface VideoStep {
//   title: string;
//   description: string;
//   videoSrc: string;
//   color: string;
// }

// export default function ExpandingVideoPrompt() {
//   const [stage, setStage] = useState<'hidden' | 'icon' | 'small' | 'expanded'>('hidden');
//   const [currentStep, setCurrentStep] = useState(0);
//   const [isMuted, setIsMuted] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const [showControls, setShowControls] = useState(true);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const controlsTimeoutRef = useRef<NodeJS.Timeout>();

//   // Check if mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const steps: VideoStep[] = [
//     {
//       title: 'Welcome to Enterprise Suite',
//       description: 'Discover how our infrastructure can transform your business.',
//       videoSrc: 'https://media.istockphoto.com/id/2257912571/video/4k-global-business-concept-of-connections-and-information-transfer-in-the-world.mp4?s=mp4-480x480-is&k=20&c=b5hyfWDD43z49ZWyCQIbZZ_EtXtDMhT8xOWA12jN3cY=',
//       color: 'from-blue-600 to-purple-600',
//     },
//     {
//       title: 'Secure by Design',
//       description: 'Bank-level security with zero-trust architecture.',
//       videoSrc: 'https://media.istockphoto.com/id/1141900881/video/male-electrician-mounting-switches-and-connecting-wires-into-a-new-electrical-enclosure.mp4?s=mp4-640x640-is&k=20&c=TxX_DqChjFtr9ZTL1FF-_P7hCcAVHFmT3W1dEJedhRk=',
//       color: 'from-purple-600 to-pink-600',
//     },
//     {
//       title: 'Global Scale',
//       description: 'Deploy anywhere with our worldwide network.',
//       videoSrc: 'https://media.istockphoto.com/id/1130889317/video/it-specialist-standing-in-front-of-server-racks-with-laptop-he-activates-data-center-with-a.mp4?s=mp4-640x640-is&k=20&c=_Af59xjGhGkcgMk6CBruEO3WftW_WNgehpZczZnLW9c=',
//       color: 'from-cyan-600 to-blue-600',
//     },
//   ];

//   useEffect(() => {
//     // Stage 1: Icon appears (1 second)
//     const iconTimer = setTimeout(() => setStage('icon'), 1000);
    
//     // Stage 2: Small window (after 2 seconds)
//     const smallTimer = setTimeout(() => setStage('small'), 3000);
    
//     // Stage 3: Expanded (after 4 seconds)
//     const expandTimer = setTimeout(() => setStage('expanded'), 5000);

//     return () => {
//       clearTimeout(iconTimer);
//       clearTimeout(smallTimer);
//       clearTimeout(expandTimer);
//     };
//   }, []);

//   // Load and play video when entering expanded mode or changing steps
//   useEffect(() => {
//     if (stage === 'expanded' && videoRef.current) {
//       const video = videoRef.current;
//       video.src = steps[currentStep].videoSrc;
//       video.load();
      
//       // Attempt to play with error handling
//       const playPromise = video.play();
//       if (playPromise !== undefined) {
//         playPromise.catch(error => {
//           console.log("Auto-play prevented:", error);
//           // Video will play on user interaction
//         });
//       }
//     }
//   }, [currentStep, stage]);

//   // Auto-hide controls on mobile
//   useEffect(() => {
//     if (isMobile && stage === 'expanded') {
//       const handleTouch = () => {
//         setShowControls(true);
        
//         if (controlsTimeoutRef.current) {
//           clearTimeout(controlsTimeoutRef.current);
//         }
        
//         controlsTimeoutRef.current = setTimeout(() => {
//           setShowControls(false);
//         }, 3000);
//       };

//       window.addEventListener('touchstart', handleTouch);
      
//       return () => {
//         window.removeEventListener('touchstart', handleTouch);
//         if (controlsTimeoutRef.current) {
//           clearTimeout(controlsTimeoutRef.current);
//         }
//       };
//     }
//   }, [isMobile, stage]);

//   const handleNext = () => {
//     setCurrentStep((prev) => (prev + 1) % steps.length);
//   };

//   const handlePrev = () => {
//     setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
//   };

//   const handleClose = () => {
//     setStage('hidden');
//     // Stop video when closing
//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.src = '';
//     }
//   };

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   // Responsive size mappings
//   const sizes = {
//     hidden: { width: 0, height: 0 },
//     icon: { width: isMobile ? 50 : 60, height: isMobile ? 50 : 60 },
//     small: { width: isMobile ? 180 : 240, height: isMobile ? 135 : 180 },
//   };

//   const currentSize = sizes[stage as keyof typeof sizes];
//   const isExpanded = stage === 'expanded';

//   // Mobile expanded view
//   if (isMobile && isExpanded) {
//     return (
//       <>
//         {/* Dark overlay */}
//         <div 
//           className="fixed inset-0 bg-black/90 z-50"
//           onClick={handleClose}
//         />
        
//         {/* Video container */}
//         <div 
//           ref={containerRef}
//           className="fixed inset-0 z-50 flex items-center justify-center p-2"
//         >
//           <div 
//             className={`relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${steps[currentStep].color}`}
//             style={{ aspectRatio: '16/9' }}
//           >
//             {/* Video */}
//             <video
//               ref={videoRef}
//               className="absolute inset-0 w-full h-full object-cover"
//               autoPlay
//               muted={isMuted}
//               loop
//               playsInline
//             />

//             {/* Gradient overlay */}
//             <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 ${
//               showControls ? 'opacity-100' : 'opacity-0'
//             }`} />

//             {/* Top bar - Steps indicator and close */}
//             <div className={`absolute top-0 left-0 right-0 p-3 flex justify-between items-center transition-opacity duration-300 ${
//               showControls ? 'opacity-100' : 'opacity-0'
//             }`}>
//               <div className="flex gap-1.5">
//                 {steps.map((_, i) => (
//                   <div
//                     key={i}
//                     className={`h-1 rounded-full transition-all duration-300 ${
//                       i === currentStep 
//                         ? 'w-6 bg-white' 
//                         : 'w-1.5 bg-white/40'
//                     }`}
//                   />
//                 ))}
//               </div>
              
//               <button
//                 onClick={handleClose}
//                 className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
//                 aria-label="Close"
//               >
//                 <X className="w-4 h-4 text-white" />
//               </button>
//             </div>

//             {/* Bottom controls */}
//             <div className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 ${
//               showControls ? 'opacity-100' : 'opacity-0'
//             }`}>
//               {/* Title and description */}
//               <h3 className="text-lg font-bold text-white mb-1">
//                 {steps[currentStep].title}
//               </h3>
//               <p className="text-sm text-white/80 mb-3 max-w-[80%]">
//                 {steps[currentStep].description}
//               </p>

//               {/* Control buttons */}
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={handlePrev}
//                   className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
//                   aria-label="Previous video"
//                 >
//                   <ChevronLeft className="w-4 h-4 text-white" />
//                 </button>
                
//                 <button
//                   onClick={handleNext}
//                   className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
//                   aria-label="Next video"
//                 >
//                   <ChevronRight className="w-4 h-4 text-white" />
//                 </button>

//                 <button
//                   onClick={toggleMute}
//                   className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
//                   aria-label={isMuted ? "Unmute" : "Mute"}
//                 >
//                   {isMuted ? (
//                     <VolumeX className="w-4 h-4 text-white" />
//                   ) : (
//                     <Volume2 className="w-4 h-4 text-white" />
//                   )}
//                 </button>

//                 <button
//                   onClick={() => window.location.href = '/contact'}
//                   className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold text-sm hover:bg-white/90 transition-colors ml-auto"
//                 >
//                   Learn More
//                 </button>
//               </div>
//             </div>

//             {/* Tap to show controls hint */}
//             {!showControls && (
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <p className="text-white/60 text-xs">Tap to show controls</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </>
//     );
//   }

//   // Desktop or non-expanded mobile view
//   return (
//     <>
//       {/* Backdrop */}
//       <div 
//         className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-700 z-40 ${
//           isExpanded && !isMobile ? 'opacity-100' : 'opacity-0 pointer-events-none'
//         }`}
//         onClick={handleClose}
//       />

//       {/* Main Container */}
//       <div 
//         className={`fixed z-50 transition-all duration-700 ease-out ${
//           !isMobile && isExpanded
//             ? 'right-4 sm:right-6 top-1/2 -translate-y-1/2'
//             : 'right-4 top-1/2 -translate-y-1/2'
//         }`}
//         style={
//           !isMobile || !isExpanded
//             ? {
//                 width: currentSize?.width,
//                 height: currentSize?.height,
//                 opacity: stage === 'hidden' ? 0 : 1,
//               }
//             : {}
//         }
//       >
//         <div 
//           ref={containerRef}
//           className={`relative w-full h-full rounded-2xl md:rounded-l-2xl shadow-2xl overflow-hidden bg-gradient-to-br ${steps[currentStep].color}`}
//         >
//           {/* Video Background - Always present but opacity changes */}
//           <video
//             ref={videoRef}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
//               isExpanded ? 'opacity-100' : 'opacity-0'
//             }`}
//             autoPlay
//             muted={isMuted}
//             loop
//             playsInline
//           />

//           {/* Overlay */}
//           <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 ${
//             isExpanded ? 'opacity-100' : 'opacity-0'
//           }`} />

//           {/* Icon Stage */}
//           {stage === 'icon' && (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="relative">
//                 <div className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
//                 <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
//                   <Play className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 ml-0.5" />
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Small Stage */}
//           {stage === 'small' && (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-center">
//                 <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto mb-1 sm:mb-2" />
//                 <p className="text-[10px] sm:text-xs text-white/80 font-medium px-2">
//                   {isMobile ? 'Tap' : 'Click'} to watch
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* Expanded Stage - Desktop */}
//           {isExpanded && !isMobile && (
//             <>
//               <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
//                 <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5">
//                   {steps.map((_, i) => (
//                     <div
//                       key={i}
//                       className={`h-1 rounded-full transition-all duration-300 ${
//                         i === currentStep 
//                           ? 'w-6 sm:w-8 bg-white' 
//                           : 'w-1.5 sm:w-2 bg-white/40'
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">
//                   {steps[currentStep].title}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4 max-w-[70%]">
//                   {steps[currentStep].description}
//                 </p>

//                 <div className="flex items-center gap-1 sm:gap-2">
//                   <button
//                     onClick={handlePrev}
//                     className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
//                   >
//                     <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//                   </button>
                  
//                   <button
//                     onClick={handleNext}
//                     className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
//                   >
//                     <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//                   </button>

//                   <button
//                     onClick={toggleMute}
//                     className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors ml-auto"
//                   >
//                     {isMuted ? (
//                       <VolumeX className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//                     ) : (
//                       <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//                     )}
//                   </button>

//                   <button
//                     onClick={() => window.location.href = '/contact'}
//                     className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-blue-600 rounded-lg font-semibold text-xs sm:text-sm hover:bg-white/90 transition-colors"
//                   >
//                     Learn More
//                   </button>
//                 </div>
//               </div>

//               <button
//                 onClick={handleClose}
//                 className="absolute top-2 left-2 sm:top-3 sm:left-3 p-1.5 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
//               >
//                 <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }




import { useState, useEffect, useRef } from 'react';
import { X, Play, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';

interface VideoStep {
  title: string;
  description: string;
  videoSrc: string;
  color: string;
}

export default function ExpandingVideoPrompt() {
  const [stage, setStage] = useState<'hidden' | 'icon' | 'small' | 'expanded'>('hidden');
  const [currentStep, setCurrentStep] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const steps: VideoStep[] = [
    {
      title: 'Welcome to Enterprise Suite',
      description: 'Discover how our infrastructure can transform your business.',
      videoSrc: 'https://media.istockphoto.com/id/2257912571/video/4k-global-business-concept-of-connections-and-information-transfer-in-the-world.mp4?s=mp4-480x480-is&k=20&c=b5hyfWDD43z49ZWyCQIbZZ_EtXtDMhT8xOWA12jN3cY=',
      color: 'from-blue-600 to-purple-600',
    },
    {
      title: 'Secure by Design',
      description: 'Bank-level security with zero-trust architecture.',
      videoSrc: 'https://media.istockphoto.com/id/1141900881/video/male-electrician-mounting-switches-and-connecting-wires-into-a-new-electrical-enclosure.mp4?s=mp4-640x640-is&k=20&c=TxX_DqChjFtr9ZTL1FF-_P7hCcAVHFmT3W1dEJedhRk=',
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Global Scale',
      description: 'Deploy anywhere with our worldwide network.',
      videoSrc: 'https://media.istockphoto.com/id/1130889317/video/it-specialist-standing-in-front-of-server-racks-with-laptop-he-activates-data-center-with-a.mp4?s=mp4-640x640-is&k=20&c=_Af59xjGhGkcgMk6CBruEO3WftW_WNgehpZczZnLW9c=',
      color: 'from-cyan-600 to-blue-600',
    },
  ];

  useEffect(() => {
    // Stage 1: Icon appears (1 second)
    const iconTimer = setTimeout(() => setStage('icon'), 1000);
    
    // Stage 2: Small window (after 2 seconds)
    const smallTimer = setTimeout(() => setStage('small'), 3000);
    
    // Stage 3: Expanded (after 4 seconds)
    const expandTimer = setTimeout(() => setStage('expanded'), 5000);

    return () => {
      clearTimeout(iconTimer);
      clearTimeout(smallTimer);
      clearTimeout(expandTimer);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = steps[currentStep].videoSrc;
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentStep]);

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const handleClose = () => {
    setStage('hidden');
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Responsive size mappings
  const getSizes = () => {
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
    
    return {
      hidden: { width: 0, height: 0 },
      icon: { width: isMobile ? 48 : 60, height: isMobile ? 48 : 60 },
      small: { 
        width: isMobile ? 200 : isTablet ? 280 : 320, 
        height: isMobile ? 150 : isTablet ? 200 : 240 
      },
      expanded: { 
        width: isMobile ? window.innerWidth - 32 : isTablet ? 480 : 640, 
        height: isMobile ? 320 : isTablet ? 360 : 420 
      },
    };
  };

  const [sizes, setSizes] = useState(getSizes());
  const currentSize = sizes[stage];

  // Update sizes on window resize
  useEffect(() => {
    const handleResize = () => {
      setSizes(getSizes());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Position classes based on stage and screen size
  const getPositionClasses = () => {
    if (stage === 'expanded') {
      return 'inset-x-4 sm:right-6 sm:left-auto top-1/2 -translate-y-1/2';
    }
    return 'right-4 sm:right-6 top-1/2 -translate-y-1/2';
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-700 z-40 ${
          stage === 'expanded' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleClose}
      />

      {/* Main Container */}
      <div 
        className={`fixed z-50 transition-all duration-700 ease-out ${getPositionClasses()}`}
        style={{
          width: currentSize.width,
          height: currentSize.height,
          opacity: stage === 'hidden' ? 0 : 1,
          transform: stage === 'expanded' && window.innerWidth < 640 
            ? 'translateY(-50%)' 
            : 'translateX(0) translateY(-50%)',
        }}
      >
        <div className={`relative w-full h-full rounded-2xl sm:rounded-l-2xl shadow-2xl overflow-hidden bg-gradient-to-br ${steps[currentStep].color}`}>
          
          {/* Video Background */}
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              stage === 'expanded' ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted={isMuted}
            loop
            playsInline
          />

          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 ${
            stage === 'expanded' ? 'opacity-100' : 'opacity-0'
          }`} />

          {/* Icon Stage */}
          {stage === 'icon' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 ml-0.5" />
                </div>
              </div>
            </div>
          )}

          {/* Small Stage */}
          {stage === 'small' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-2">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto mb-1 sm:mb-2" />
                <p className="text-[10px] sm:text-xs text-white/80 font-medium">Click to watch</p>
              </div>
            </div>
          )}

          {/* Expanded Stage */}
          {stage === 'expanded' && (
            <>
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6">
                {/* Step indicator */}
                <div className="absolute top-2 sm:top-3 md:top-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === currentStep 
                          ? 'w-4 sm:w-6 md:w-8 bg-white' 
                          : 'w-1 sm:w-1.5 md:w-2 bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                {/* Title and description */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                  {steps[currentStep].title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 max-w-full sm:max-w-[70%]">
                  {steps[currentStep].description}
                </p>

                {/* Controls */}
                <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                  <button
                    onClick={handlePrev}
                    className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                    aria-label="Previous video"
                  >
                    <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </button>
                  
                  <button
                    onClick={handleNext}
                    className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                    aria-label="Next video"
                  >
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    ) : (
                      <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    )}
                  </button>

                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-blue-600 rounded-lg font-semibold text-xs sm:text-sm hover:bg-white/90 transition-colors ml-auto sm:ml-0"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-2 left-2 sm:top-3 sm:left-3 p-1 sm:p-1.5 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}