
// import React from 'react';

// // Network Background Component (subtle animated dots/grid)
// const NetworkBackground: React.FC = () => {
//   return (
//     <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
//       <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <pattern id="network" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
//             <circle cx="2" cy="2" r="1.5" fill="white" />
//             <path d="M2 2 L38 38 M2 38 L38 2" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#network)" />
//       </svg>
//     </div>
//   );
// };

// // Section Wrapper for consistent padding
// const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return <div className="relative z-10">{children}</div>;
// };

// const SolutionsPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section - Styled exactly like reference */}
     
//     <div className="relative overflow-hidden">
      
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
//         }}
//       >
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 opacity-90"></div>
//       </div>

//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
//         <div className="text-center">
          
//           {/* Badge */}
//           <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
//             <span className="text-sm font-medium text-white tracking-wide">
//               ✨ Enterprise Solutions
//             </span>
//           </div>

//           {/* Heading */}
//           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
//             Transform Your Business with
//             <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-cyan-200">
//               MVB-Powered Innovation
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
//             Leverage our cutting-edge MVB (Minimum Viable Blockchain) technology
//             to accelerate your digital transformation. Build scalable, secure,
//             and future-ready solutions that drive real business outcomes.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
//               Explore Solutions →
//             </button>

//             <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
//               Watch Demo
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16 pt-8 border-t border-white/20">
//             <div className="text-center">
//               <div className="text-2xl md:text-3xl font-bold text-yellow-300">
//                 99.9%
//               </div>
//               <div className="text-sm text-white/80 mt-1">Uptime SLA</div>
//             </div>

//             <div className="text-center">
//               <div className="text-2xl md:text-3xl font-bold text-cyan-300">
//                 50ms
//               </div>
//               <div className="text-sm text-white/80 mt-1">
//                 Transaction Finality
//               </div>
//             </div>

//             <div className="text-center">
//               <div className="text-2xl md:text-3xl font-bold text-pink-300">
//                 10K+
//               </div>
//               <div className="text-sm text-white/80 mt-1">Active Nodes</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Straight Bottom Section (Replaces Curve) */}
//       <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-50"></div>
//     </div>
 

//       {/* Solutions Grid Section - Additional content to showcase MVB */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Built on <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">MVB Core</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Comprehensive solutions designed for modern enterprises leveraging MVB technology
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Decentralized Identity",
//               desc: "Self-sovereign identity management with zero-knowledge proofs on MVB",
//               color: "from-pink-600 to-pink-400",
//               icon: "🔐",
//             },
//             {
//               title: "Smart Contracts",
//               desc: "Automated, trustless agreements with MVB optimization for speed",
//               color: "from-yellow-500 to-yellow-400",
//               icon: "📜",
//             },
//             {
//               title: "Cross-Chain Bridge",
//               desc: "Seamless interoperability across major blockchain networks via MVB",
//               color: "from-blue-600 to-blue-400",
//               icon: "🌉",
//             },
//           ].map((solution, idx) => (
//             <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
//               <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
//               <div className="p-6">
//                 <div className="text-4xl mb-4">{solution.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
//                 <p className="text-gray-600">{solution.desc}</p>
//                 <button className="mt-4 text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
//                   Learn more →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Additional MVB Stats Section */}
//       <div className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
//             <div>
//               <div className="text-4xl font-bold mb-2">99.9%</div>
//               <div className="text-white/80">Uptime SLA</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold mb-2">50ms</div>
//               <div className="text-white/80">Transaction Finality</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold mb-2">10K+</div>
//               <div className="text-white/80">Active Nodes</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SolutionsPage;






// import React from 'react';

// // Network Background Component (subtle animated dots/grid)
// const NetworkBackground: React.FC = () => {
//   return (
//     <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
//       <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <pattern id="network" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
//             <circle cx="2" cy="2" r="1.5" fill="white" />
//             <path d="M2 2 L38 38 M2 38 L38 2" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#network)" />
//       </svg>
//     </div>
//   );
// };

// // Section Wrapper for consistent padding
// const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return <div className="relative z-10">{children}</div>;
// };

// const SolutionsPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 mt-4">
//       {/* Hero Section - Styled exactly like reference */}
//       <div className="relative overflow-hidden h-[90vh]">
      
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
//         }}
//       >
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 opacity-90"></div>
//       </div>

//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
//         <div className="text-center">
          
//           {/* Badge */}
//           <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
//             <span className="text-sm font-medium text-white tracking-wide">
//               ✨ Enterprise Solutions
//             </span>
//           </div>

//           {/* Heading */}
//           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
//             Transform Your Business with
//             <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-cyan-200">
//               MVB-Powered Innovation
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
//             Leverage our cutting-edge MVB (Minimum Viable Blockchain) technology
//             to accelerate your digital transformation. Build scalable, secure,
//             and future-ready solutions that drive real business outcomes.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//   onClick={() => (window.location.href = "/contact")}
//   className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
// >
//   Get Started →
//       </button>

         
//           </div>

        
//         </div>
//       </div>

//       {/* ✅ Straight Bottom Section (Replaces Curve) */}
//       <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-50"></div>
//     </div>
 

//       {/* Solutions Grid Section - Additional content to showcase MVB */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Built on <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">MVB Core</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Comprehensive solutions designed for modern enterprises leveraging MVB technology
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Decentralized Identity",
//               desc: "Self-sovereign identity management with zero-knowledge proofs on MVB",
//               color: "from-pink-600 to-pink-400",
//               icon: "🔐",
//             },
//             {
//               title: "Smart Contracts",
//               desc: "Automated, trustless agreements with MVB optimization for speed",
//               color: "from-yellow-500 to-yellow-400",
//               icon: "📜",
//             },
//             {
//               title: "Cross-Chain Bridge",
//               desc: "Seamless interoperability across major blockchain networks via MVB",
//               color: "from-blue-600 to-blue-400",
//               icon: "🌉",
//             },
//           ].map((solution, idx) => (
//             <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
//               <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
//               <div className="p-6">
//                 <div className="text-4xl mb-4">{solution.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
//                 <p className="text-gray-600">{solution.desc}</p>
//                 {/* <button className="mt-4 text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
//                   Learn more →
//                 </button> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//        <div className="py-20" style={{ backgroundColor: '#FFDE42' }}>
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="text-center mb-12">
//       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
//         Enterprise-Grade <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">Technology Stack</span>
//       </h2>
//       <p className="text-gray-700 max-w-2xl mx-auto">
//         Built on industry-leading technologies for maximum reliability and performance
//       </p>
//     </div>

//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//       {[
//         { name: "Rust Core", level: "Core Engine", icon: "⚙️" },
//         { name: "WebAssembly", level: "Smart Contracts", icon: "🕸️" },
//         { name: "Tendermint", level: "Consensus", icon: "🔗" },
//         { name: "IPFS", level: "Storage Layer", icon: "📡" }
//       ].map((tech, idx) => (
//         <div key={idx} className="bg-white/90 rounded-xl p-4 text-center hover:shadow-lg transition-all border border-gray-200">
//           <div className="text-3xl mb-2">{tech.icon}</div>
//           <div className="font-bold text-lg text-gray-900">{tech.name}</div>
//           <div className="text-xs text-gray-600">{tech.level}</div>
//         </div>
//       ))}
//     </div>

//     <div className="bg-white/90 rounded-xl p-6 text-center border border-gray-200">
//       <div className="text-2xl font-bold mb-2 text-gray-900">Ready to Build on MVB?</div>
//       <p className="text-gray-700 mb-4">Join hundreds of enterprises already building on our platform</p>
//       <button
//   onClick={() => (window.location.href = "/contact")}
//   className="px-6 py-2 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 transform"
// >
//   Explore Now →
//   </button>
//     </div>
//   </div>
//         </div>

//       {/* NEW: Why MVB Section */}
//       <div className="bg-gray-100 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//   Empowering Innovation with{" "}
//   <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
//     Next-Gen Technology
//   </span>
//         </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Our Minimum Viable Blockchain approach delivers unparalleled advantages for enterprise adoption
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 title: "Ultra-Low Latency",
//                 desc: "Sub-second finality for real-time transactions",
//                 icon: "⚡",
//                 stat: "< 1s"
//               },
//               {
//                 title: "Enterprise Security",
//                 desc: "Military-grade encryption and consensus mechanisms",
//                 icon: "🛡️",
//                 stat: "99.99%"
//               },
//               {
//                 title: "Scalable Architecture",
//                 desc: "Handle millions of transactions seamlessly",
//                 icon: "📈",
//                 stat: "10M+ TPS"
//               },
//               {
//                 title: "Green Technology",
//                 desc: "99% less energy consumption than traditional chains",
//                 icon: "🌱",
//                 stat: "-99% Energy"
//               }
//             ].map((feature, idx) => (
//               <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
//                 <div className="text-5xl mb-4">{feature.icon}</div>
//                 <div className="text-2xl font-bold text-pink-600 mb-2">{feature.stat}</div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
//                 <p className="text-gray-600 text-sm">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* NEW: MVB Use Cases Section */}
//       {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Real-World <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">Use Cases</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             See how leading enterprises are leveraging MVB technology across industries
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {[
//             {
//               industry: "Financial Services",
//               title: "Instant Cross-Border Payments",
//               description: "Reduce transaction costs by 90% and settle payments in seconds instead of days using MVB's high-speed network.",
//               metrics: "90% cost reduction",
//               icon: "💳",
//               gradient: "from-pink-500 to-pink-600"
//             },
//             {
//               industry: "Supply Chain",
//               title: "End-to-End Traceability",
//               description: "Track products from origin to consumer with immutable records, reducing fraud and improving transparency.",
//               metrics: "100% transparency",
//               icon: "📦",
//               gradient: "from-yellow-500 to-yellow-600"
//             },
//             {
//               industry: "Healthcare",
//               title: "Secure Patient Data",
//               description: "Enable patients to control their medical records while ensuring HIPAA-compliant data sharing across providers.",
//               metrics: "HIPAA Compliant",
//               icon: "🏥",
//               gradient: "from-blue-500 to-blue-600"
//             },
//             {
//               industry: "Gaming & NFTs",
//               title: "True Digital Ownership",
//               description: "Create interoperable gaming assets that can be traded across multiple platforms and games.",
//               metrics: "2M+ Assets",
//               icon: "🎮",
//               gradient: "from-purple-500 to-purple-600"
//             }
//           ].map((useCase, idx) => (
//             <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row">
//               <div className={`bg-gradient-to-br ${useCase.gradient} p-6 md:w-1/3 flex items-center justify-center`}>
//                 <div className="text-6xl">{useCase.icon}</div>
//               </div>
//               <div className="p-6 md:w-2/3">
//                 <div className="text-sm font-semibold text-pink-600 mb-2">{useCase.industry}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
//                 <p className="text-gray-600 mb-3">{useCase.description}</p>
//                 <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
//                   📊 {useCase.metrics}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div> */}

  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  // <div className="text-center mb-12">
  //   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
  //     Real-World{" "}
  //     <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
  //       Use Cases
  //     </span>
  //   </h2>
  //   <p className="text-gray-600 max-w-2xl mx-auto">
  //     See how leading enterprises are leveraging MVB technology across industries
  //   </p>
  // </div>

  // <div className="grid md:grid-cols-2 gap-8">
  //   {[
  //     {
  //       industry: "Financial Services",
  //       title: "Instant Cross-Border Payments",
  //       description:
  //         "Reduce transaction costs by 90% and settle payments in seconds instead of days using MVB's high-speed network.",
  //       metrics: "90% cost reduction",
  //       image:
  //         "https://i.pinimg.com/1200x/6f/df/ee/6fdfee246a774a0b641badf6d68fd2ff.jpg",
        
  //     },
  //     {
  //       industry: "Supply Chain",
  //       title: "End-to-End Traceability",
  //       description:
  //         "Track products from origin to consumer with immutable records, reducing fraud and improving transparency.",
  //       metrics: "100% transparency",
  //       image:
  //         "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80",
        
  //     },
  //     {
  //       industry: "Healthcare",
  //       title: "Secure Patient Data",
  //       description:
  //         "Enable patients to control their medical records while ensuring HIPAA-compliant data sharing across providers.",
  //       metrics: "HIPAA Compliant",
  //       image:
  //         "https://i.pinimg.com/1200x/27/cc/17/27cc173e394a58a8e00b0db59d9318b0.jpg",
       
  //     },
  //     {
  //       industry: "Gaming & NFTs",
  //       title: "True Digital Ownership",
  //       description:
  //         "Create interoperable gaming assets that can be traded across multiple platforms and games.",
  //       metrics: "2M+ Assets",
  //       image:
  //         "https://i.pinimg.com/736x/2e/41/8a/2e418a2c6a935d70d4acf617cba909ba.jpg",
        
  //     },
  //   ].map((useCase, idx) => (
  //     <div
  //       key={idx}
  //       className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
  //     >
  //       {/* Image Box */}
  //       <div className="relative md:w-1/3">
  //         {/* Background Image */}
  //         <img
  //           src={useCase.image}
  //           alt={useCase.title}
  //           className="w-full h-full object-cover"
  //         />

  //         {/* Gradient Overlay */}
  //         <div
  //           className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-70`}
  //         />
  //       </div>

  //       {/* Content */}
  //       <div className="p-6 md:w-2/3">
  //         <div className="text-sm font-semibold text-pink-600 mb-2">
  //           {useCase.industry}
  //         </div>
  //         <h3 className="text-xl font-bold text-gray-900 mb-2">
  //           {useCase.title}
  //         </h3>
  //         <p className="text-gray-600 mb-3">{useCase.description}</p>
  //         <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
  //           📊 {useCase.metrics}
  //         </div>
  //       </div>
  //     </div>
  //   ))}
  // </div>
  //       </div>

//       {/* NEW: Technology Stack Section */}
//      {/* <div className="bg-white py-20">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="text-center mb-12">
//       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
//         Enterprise-Grade <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">Technology Stack</span>
//       </h2>
//       <p className="text-gray-600 max-w-2xl mx-auto">
//         Built on industry-leading technologies for maximum reliability and performance
//       </p>
//     </div>

//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//       {[
//         { name: "Rust Core", level: "Core Engine", icon: "⚙️" },
//         { name: "WebAssembly", level: "Smart Contracts", icon: "🕸️" },
//         { name: "Tendermint", level: "Consensus", icon: "🔗" },
//         { name: "IPFS", level: "Storage Layer", icon: "📡" }
//       ].map((tech, idx) => (
//         <div key={idx} className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-all border border-gray-100">
//           <div className="text-3xl mb-2">{tech.icon}</div>
//           <div className="font-bold text-lg text-gray-900">{tech.name}</div>
//           <div className="text-xs text-gray-500">{tech.level}</div>
//         </div>
//       ))}
//     </div>

//     <div className="bg-gradient-to-r from-pink-50 via-yellow-50 to-blue-50 rounded-xl p-6 text-center border border-gray-100">
//       <div className="text-2xl font-bold mb-2 text-gray-900">Ready to Build on MVB?</div>
//       <p className="text-gray-600 mb-4">Join hundreds of enterprises already building on our platform</p>
//       <button className="px-6 py-2 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 transform">
//         Start Building → 
//       </button>
//     </div>
//     </div>
//         </div> */}

       

//       {/* NEW: Integration Partners Section */}
//       {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Trusted by <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">Industry Leaders</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Powering solutions for forward-thinking organizations worldwide
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
//           {["🏦", "💻", "🚀", "📱", "🔒", "💳", "🎨", "📊"].map((logo, idx) => (
//             <div key={idx} className="text-5xl grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100">
//               {logo}
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <p className="text-gray-500 mb-4">Join our ecosystem of innovative partners</p>
//           <button className="text-pink-600 font-semibold hover:text-pink-700 transition-colors">
//             Become a Partner →
//           </button>
//         </div>
//       </div> */}

//         {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//   <div className="text-center mb-12">
//     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//       Trusted by{" "}
//       <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
//         Industry Leaders
//       </span>
//     </h2>
//     <p className="text-gray-600 max-w-2xl mx-auto">
//       Powering solutions for forward-thinking organizations worldwide
//     </p>
//   </div>

  
//   <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
//     {[
//     { icon: "🏭", color: "text-red-500" },
//       { icon: "💻", color: "text-sky-500" },
//       { icon: "🚀", color: "text-violet-600" },
//       { icon: "📱", color: "text-emerald-500" },
//       { icon: "🔒", color: "text-amber-500" },
//       { icon: "💳", color: "text-indigo-500" },
//       { icon: "🎨", color: "text-fuchsia-500" },
//       { icon: "📊", color: "text-teal-500" },
//     ].map((item, idx) => (
//       <div
//         key={idx}
//         className={`text-5xl ${item.color} hover:scale-125 transition-all duration-300 cursor-pointer opacity-80 hover:opacity-100`}
//       >
//         {item.icon}
//       </div>
//     ))}
//   </div>

  
//     </div> */}

//       {/* NEW: CTA Section */}
//       <div className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//           <h2 className="text-3xl md:text-5xl font-bold mb-6">
//             Ready to Transform Your Business?
//           </h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
//             Get started with MVB technology today and join the future of enterprise blockchain
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//   onClick={() => (window.location.href = "/contact")}
//   className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
// >
//   Schedule a Consultation →
//           </button>
//             <button
//   onClick={() => (window.location.href = "/careers")}
//   className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
// >
//   Start Your Career
//         </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SolutionsPage;




import IndustrySolutions from '@/components/Solutioncompo/IndustrySolutions';
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Network Background Component (subtle animated dots/grid)
const NetworkBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="network" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="white" />
            <path d="M2 2 L38 38 M2 38 L38 2" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#network)" />
      </svg>
    </div>
  );
};

// Section Wrapper for consistent padding
const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="relative z-10">{children}</div>;
};

const SolutionsPage: React.FC = () => {
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
    <div className="min-h-screen bg-gray-50 mt-4">
      {/* Hero Section - Styled exactly like reference */}
      <div className="relative overflow-hidden h-[90vh]">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-sm font-medium text-white tracking-wide">
              ✨ Enterprise Solutions
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Transform Your Business with
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-cyan-200">
              MV-Powered Innovation
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Bringing multiple IT infrastructure needs together into Efficient, Deliverable & Simplified Solutions 
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContactForm}
              className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              Get Started →
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Straight Bottom Section (Replaces Curve) */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-50"></div>
    </div>

    <IndustrySolutions />
 

      {/* Solutions Grid Section - Additional content to showcase MVB */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built on <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">MVB Core</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed for modern enterprises leveraging MVB technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Decentralized Identity",
              desc: "Self-sovereign identity management with zero-knowledge proofs on MVB",
              color: "from-pink-600 to-pink-400",
              icon: "🔐",
            },
            {
              title: "Smart Contracts",
              desc: "Automated, trustless agreements with MVB optimization for speed",
              color: "from-yellow-500 to-yellow-400",
              icon: "📜",
            },
            {
              title: "Cross-Chain Bridge",
              desc: "Seamless interoperability across major blockchain networks via MVB",
              color: "from-blue-600 to-blue-400",
              icon: "🌉",
            },
 
          ].map((solution, idx) => (
            <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
              <div className="p-6">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Built on{" "}
      <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
        MV Core
      </span>
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Comprehensive solutions designed for modern enterprises leveraging MVB technology
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        title: "Technical Sales",
        desc: "Driving business growth by aligning technology solutions with customer needs",
        color: "from-pink-600 to-pink-400",
        icon: "💼",
      },
      {
        title: "Architecture & Solutioning",
        desc: "Designing scalable and efficient system architectures for enterprise success",
        color: "from-yellow-500 to-yellow-400",
        icon: "🏗️",
      },
      {
        title: "Operations",
        desc: "Ensuring smooth and optimized business operations with high efficiency",
        color: "from-blue-600 to-blue-400",
        icon: "⚙️",
      },
      {
        title: "Project Management",
        desc: "Planning, executing, and delivering projects on time with quality outcomes",
        color: "from-green-500 to-green-400",
        icon: "📊",
      },
    ].map((solution, idx) => (
      <div
        key={idx}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
        <div className="p-6">
          <div className="text-4xl mb-4">{solution.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {solution.title}
          </h3>
          <p className="text-gray-600">{solution.desc}</p>
        </div>
      </div>
    ))}
  </div>
  </div>

      {/* <div className="py-20" style={{ backgroundColor: '#FFDE42' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Enterprise-Grade <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">Technology Stack</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Built on industry-leading technologies for maximum reliability and performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Rust Core", level: "Core Engine", icon: "⚙️" },
              { name: "WebAssembly", level: "Smart Contracts", icon: "🕸️" },
              { name: "Tendermint", level: "Consensus", icon: "🔗" },
              { name: "IPFS", level: "Storage Layer", icon: "📡" }
            ].map((tech, idx) => (
              <div key={idx} className="bg-white/90 rounded-xl p-4 text-center hover:shadow-lg transition-all border border-gray-200">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="font-bold text-lg text-gray-900">{tech.name}</div>
                <div className="text-xs text-gray-600">{tech.level}</div>
              </div>
            ))}
          </div>

          <div className="bg-white/90 rounded-xl p-6 text-center border border-gray-200">
            <div className="text-2xl font-bold mb-2 text-gray-900">Ready to Build on MVB?</div>
            <p className="text-gray-700 mb-4">Join hundreds of enterprises already building on our platform</p>
            <button
              onClick={scrollToContactForm}
              className="px-6 py-2 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 transform cursor-pointer"
            >
              Explore Now →
            </button>
          </div>
        </div>
      </div> */}


      <div className="py-20" style={{ backgroundColor: '#FFDE42' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Enterprise-Grade <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">Technology Stack</span>
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        World-class infrastructure powering enterprise security and performance
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
      {[
        { name: "Hyper Scale Data Centre", level: "Enterprise Infrastructure", icon: "🏢" },
        { name: "Security Operation Centre", level: "24/7 Security", icon: "🛡️" },
        { name: "Network Operation Centre", level: "Real-time Monitoring", icon: "🌐" },
        { name: "100G - 800G Infra", level: "High-Speed Network", icon: "⚡" },
        { name: "OT Security", level: "Operational Security", icon: "🔒" }
      ].map((tech, idx) => (
        <div key={idx} className="bg-white/90 rounded-xl p-4 text-center hover:shadow-lg transition-all border border-gray-200">
          <div className="text-3xl mb-2">{tech.icon}</div>
          <div className="font-bold text-sm lg:text-base text-gray-900">{tech.name}</div>
          <div className="text-xs text-gray-600">{tech.level}</div>
        </div>
      ))}
    </div>

    <div className="bg-white/90 rounded-xl p-6 text-center border border-gray-200">
      <div className="text-2xl font-bold mb-2 text-gray-900">Ready to Build on MV?</div>
      <p className="text-gray-700 mb-4">Join hundreds of enterprises already building on our platform</p>
      <button
        onClick={scrollToContactForm}
        className="px-6 py-2 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 transform cursor-pointer"
      >
        Explore Now →
      </button>
    </div>
  </div>
    </div>

      {/* NEW: Why MVB Section */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empowering Innovation with{" "}
              <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
                Next-Gen Technology
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Minimum Viable Blockchain approach delivers unparalleled advantages for enterprise adoption
            </p>
          </div>
          
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "Artificial Intelligence",
          desc: "Leverage AI-powered automation and insights to enhance decision-making and operational efficiency.",
          icon: "🤖",
          stat: "AI Powered"
        },
        {
          title: "Data-Driven Growth",
          desc: "Transform data into actionable insights to boost revenue, optimize strategies, and improve performance.",
          icon: "📊",
          stat: "Smart Insights"
        },
        {
          title: "Single Platform Solutions",
          desc: "Integrate all your business operations into one unified platform for seamless management and scalability.",
          icon: "🧩",
          stat: "All-in-One"
        },
        {
          title: "Green Technologies",
          desc: "Adopt eco-friendly solutions that reduce environmental impact while maintaining high performance.",
          icon: "🌱",
          stat: "Sustainable"
        }
      ].map((feature, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="text-5xl mb-4">{feature.icon}</div>
          {/* <div className="text-xl font-bold text-pink-600 mb-2">
            {feature.stat}
          </div> */}
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {feature.title}
          </h3>
          {/* <p className="text-gray-600 text-sm">{feature.desc}</p> */}
        </div>
      ))}
    </div>
        </div>
      </div>

      {/* Use Cases Section */}
       {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Real-World{" "}
      <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
        Use Cases
      </span>
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      See how leading enterprises are leveraging MVB technology across industries
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-8">
    {[
      {
        industry: "Financial Services",
        title: "Instant Cross-Border Payments",
        description:
          "Reduce transaction costs by 90% and settle payments in seconds instead of days using MVB's high-speed network.",
        metrics: "90% cost reduction",
        image:
          "https://i.pinimg.com/1200x/6f/df/ee/6fdfee246a774a0b641badf6d68fd2ff.jpg",
        
      },
      {
        industry: "Supply Chain",
        title: "End-to-End Traceability",
        description:
          "Track products from origin to consumer with immutable records, reducing fraud and improving transparency.",
        metrics: "100% transparency",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80",
        
      },
      {
        industry: "Healthcare",
        title: "Secure Patient Data",
        description:
          "Enable patients to control their medical records while ensuring HIPAA-compliant data sharing across providers.",
        metrics: "HIPAA Compliant",
        image:
          "https://i.pinimg.com/1200x/27/cc/17/27cc173e394a58a8e00b0db59d9318b0.jpg",
       
      },
      {
        industry: "Gaming & NFTs",
        title: "True Digital Ownership",
        description:
          "Create interoperable gaming assets that can be traded across multiple platforms and games.",
        metrics: "2M+ Assets",
        image:
          "https://i.pinimg.com/736x/2e/41/8a/2e418a2c6a935d70d4acf617cba909ba.jpg",
        
      },
    ].map((useCase, idx) => (
      <div
        key={idx}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
      >
        
        <div className="relative md:w-1/3">
       
          <img
            src={useCase.image}
            alt={useCase.title}
            className="w-full h-full object-cover"
          />

          
          <div
            className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-70`}
          />
        </div>

       
        <div className="p-6 md:w-2/3">
          <div className="text-sm font-semibold text-pink-600 mb-2">
            {useCase.industry}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {useCase.title}
          </h3>
          <p className="text-gray-600 mb-3">{useCase.description}</p>
          <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
            📊 {useCase.metrics}
          </div>
        </div>
      </div>
    ))}
  </div>
        </div> */}


       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Real-World{" "}
      <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
        Use Cases
      </span>
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      See how leading enterprises are leveraging MV technology across industries
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-8">
    {[
      {
        industry: "AI Infrastructure",
        title: "Cost Reduction & Increase Revenue",
        description:
          "Our Solution Approach: Automating repetitive operations, optimizing compute/storage usage, predictive maintenance & anomaly detection. Energy-efficient AI infrastructure reduces operational costs & drives new revenue by enabling faster insights, smarter decisions, and scalable innovation.",
        metrics: "Reduced OPEX + Increased Revenue",
        image:
          "https://i.pinimg.com/1200x/3e/c9/71/3ec97149abab0b8eec30006737226a90.jpg",
      },
      {
        industry: "OT Security",
        title: "Manufacturing Protection",
        description:
          "MV OT Security Architecture Approach is built on assessing your OT Network Segment, SCADA, ICS, PLC, HMI, Industrial Protocol, Asset discovery, Critical Mapping & Recovery readiness review.",
        metrics: "Complete OT Coverage",
        image:
          "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=500&q=80",
      },
      {
        industry: "Data Centre",
        title: "800G Infrastructure",
        description:
          "Our Overall 800G Infrastructure Approach specifies solutions to manage your business needs with Green Efficiency and resource optimization for next-generation data centers.",
        metrics: "800G Speed + Green Efficiency",
        image:
          "https://i.pinimg.com/736x/81/58/98/8158981a6aa85696ba470a208ee97eef.jpg",
      },
      {
        industry: "Network Monitoring",
        title: "Corporate Network Excellence",
        description:
          "Our Network Monitoring solutions approach supports uninterrupted business operations that increase revenue, ensuring real-time visibility, proactive issue detection and optimized performance.",
        metrics: "24/7 Real-time Visibility",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
      },
      {
        industry: "VAPT Security",
        title: "End Devices to Cloud Security",
        description:
          "Comprehensive vulnerability assessment and penetration testing across endpoints, networks, and cloud environments identifies risks. Our recommendations and solutions strengthen your overall security infrastructure.",
        metrics: "End-to-End Protection",
        image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80",
      },
    ].map((useCase, idx) => (
      <div
        key={idx}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
      >
        {/* Image Box */}
        <div className="relative md:w-1/3">
          <img
            src={useCase.image}
            alt={useCase.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-6 md:w-2/3">
          <div className="text-sm font-semibold text-pink-600 mb-2">
            {useCase.industry}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {useCase.title}
          </h3>
          <p className="text-gray-600 mb-3">{useCase.description}</p>
          <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
            📊 {useCase.metrics}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Get started with MV technology today and join the future of enterprise blockchain
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContactForm}
              className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              Schedule a Consultation →
            </button>
            <button
              onClick={() => navigate('/careers')}
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              Start Your Career
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;