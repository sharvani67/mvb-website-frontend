// import React from "react";

// const CaseStudy: React.FC = () => {
//   return (
//     <div className="bg-gray-50 text-gray-800">

//       {/* HERO with Background Image */}
//       <section 
//   className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden"
// >
//   {/* Background Image */}
//   <div
//     className="absolute inset-0 bg-cover bg-center"
//     style={{
//       backgroundImage: "url('https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
//     }}
//   />

//   {/* Bright Gradient Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 via-yellow-400/70 to-blue-600/80" />

//   {/* Content */}
//   <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
//     <div className="animate-fade-in-up">
//       <span className="inline-block px-4 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
//         Success Story
//       </span>
//       <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
//         Corporate Company
//         <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
//           E-Commerce Portal
//         </span>
//       </h1>
//       <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
//         Kitchen Appliances Brand
//       </h2>
      
//       <div className="flex flex-wrap justify-center gap-4 mb-10">
//         <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
//           <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
//           <span className="text-sm">Global Reach</span>
//         </div>
//         <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
//           <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
//           <span className="text-sm">Digital Transformation</span>
//         </div>
//         <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
//           <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
//           <span className="text-sm">60Cr Revenue</span>
//         </div>
//       </div>

//       <button className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-3 rounded-lg font-medium hover:scale-105 transition shadow-lg group">
//         View Case Study
//         <svg 
//           className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
//           fill="none" 
//           stroke="currentColor" 
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
//     </div>
//   </div>
//     </section>

//       {/* OVERVIEW with enhanced styling */}
//       <section className="max-w-6xl mx-auto px-6 py-16">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-4">
//               Overview
//             </div>
//             <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
//               Complete Solution for Your Business
//             </h3>
//             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//               Markets & potential customers are not confined to a particular geographical location. 
//               An online platform provides access to a global audience and eliminates geographical boundaries for products.
//             </p>
//             <div className="space-y-3">
//               <div className="flex items-start space-x-3">
//                 <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
//                   <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <span className="text-gray-700">Provides access to a global audience</span>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
//                   <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <span className="text-gray-700">Eliminates geographical boundaries for products</span>
//               </div>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-pink-200 to-blue-200 rounded-full opacity-50 blur-3xl"></div>
//             <div className="relative bg-gradient-to-br from-pink-500 to-blue-500 rounded-2xl p-1">
//               <div className="bg-white rounded-xl p-6">
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-gray-800">60Cr+</div>
//                   <div className="text-gray-600">Revenue Generated</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* KEY ADVANTAGES with cards animation */}
//       <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
//               Why Choose Us
//             </div>
//             <h3 className="text-4xl font-bold mb-4">Key Advantages</h3>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Discover how our platform transforms businesses and drives exceptional results
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Card 1 */}
//             <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//               <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h4 className="text-2xl font-bold mb-3">Wider Reach</h4>
//               <p className="text-gray-600 leading-relaxed">
//                 Markets are no longer limited by location, allowing businesses to expand globally and tap into new customer segments.
//               </p>
//             </div>

//             {/* Card 2 */}
//             <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//               <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h4 className="text-2xl font-bold mb-3">Brand Visibility</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
//                   Own e-commerce portal & marketplaces
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
//                   Integrated ad campaigns
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
//                   Strong brand awareness
//                 </li>
//               </ul>
//             </div>

//             {/* Card 3 */}
//             <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//               <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                 </svg>
//               </div>
//               <h4 className="text-2xl font-bold mb-3">Analytics</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
//                   Customer insights
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
//                   Understand buying patterns
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
//                   Better product & offers
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CHALLENGES & SOLUTIONS with icons */}
//       <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
//         <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </div>
//           <h3 className="text-3xl font-bold mb-6 text-red-600">Challenges</h3>
//           <ul className="space-y-3">
//             {["Limited market reach", "No online presence", "High expansion cost (traditional model)", "Misaligned product investments", "Low brand visibility"].map((item, idx) => (
//               <li key={idx} className="flex items-center space-x-3 text-gray-700">
//                 <span className="w-2 h-2 bg-red-500 rounded-full"></span>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </div>
//           <h3 className="text-3xl font-bold mb-6 text-green-600">Solutions</h3>
//           <ul className="space-y-3">
//             {["E-commerce platform with CRM & social media", "Lead generation campaigns", "Brand awareness campaigns", "Marketplace + own platform presence"].map((item, idx) => (
//               <li key={idx} className="flex items-center space-x-3 text-gray-700">
//                 <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* BENEFITS with gradient cards */}
//       <section className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 py-16">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h3 className="text-4xl font-bold mb-12 text-white">Benefits</h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             {["Improved customer reach", "Better brand visibility", "Data-driven decisions"].map((benefit, idx) => (
//               <div key={idx} className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:bg-opacity-30 transition-all duration-300">
//                 <div className="text-4xl mb-4">✨</div>
//                 <p className="text-xl font-semibold text-white">{benefit}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROJECT DETAILS & OBJECTIVE */}
//       <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
//         <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl shadow-lg">
//           <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//             </svg>
//           </div>
//           <h3 className="text-3xl font-bold mb-6">Project Details</h3>
//           <div className="space-y-3">
//             <p><span className="font-semibold">Project:</span> E-commerce portal</p>
//             <p><span className="font-semibold">Industry:</span> Consumer Goods & Appliances</p>
//             <p><span className="font-semibold">Revenue:</span> 60 Cr</p>
//             <p><span className="font-semibold">Location:</span> Hyderabad, India</p>
//           </div>
//         </div>

//         <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl shadow-lg">
//           <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//             </svg>
//           </div>
//           <h3 className="text-3xl font-bold mb-6">Objective</h3>
//           <ul className="space-y-3">
//             {["Expand beyond traditional markets", "Leverage social media marketing", "Integrate analytics"].map((item, idx) => (
//               <li key={idx} className="flex items-center space-x-3">
//                 <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* METRICS with counters */}
//       <section className="relative bg-gradient-to-r from-blue-600 to-pink-600 text-white py-20 overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//           <h3 className="text-4xl font-bold mb-12">Key Metrics</h3>
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="transform hover:scale-110 transition-all duration-300">
//               <div className="text-4xl font-bold mb-2">₹1 Lakh</div>
//               <div className="text-lg opacity-90">Monthly Spend</div>
//             </div>
//             <div className="transform hover:scale-110 transition-all duration-300">
//               <div className="text-4xl font-bold mb-2">50%</div>
//               <div className="text-lg opacity-90">Increase in Reach</div>
//             </div>
//             <div className="transform hover:scale-110 transition-all duration-300">
//               <div className="text-4xl font-bold mb-2">1</div>
//               <div className="text-lg opacity-90">Additional Resource</div>
//             </div>
//             <div className="transform hover:scale-110 transition-all duration-300">
//               <div className="text-4xl font-bold mb-2">90 Days</div>
//               <div className="text-lg opacity-90">Visible Results</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 0.8s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CaseStudy;








// import React from "react";

// const CaseStudy: React.FC = () => {
//   return (
//     <div className="bg-gray-50 text-gray-800">

//       {/* HERO with Background Image - DeFi Themed */}
//       <section 
//   className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden"
// >
//   {/* Background Image */}
//   <div
//     className="absolute inset-0 bg-cover bg-center"
//     style={{
//       backgroundImage: "url('https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=2071&q=80')",
//     }}
//   />

//   {/* ✅ Updated Gradient Overlay (Pink → Yellow → Blue) */}
//   <div className="absolute inset-0 bg-gradient-to-r from-pink-600/85 via-yellow-400/80 to-blue-600/85" />

//   {/* Glow Effects (same style as first section) */}
//   <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px] animate-pulse"></div>
//   <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
//   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-yellow-400/20 rounded-full blur-[100px] animate-pulse"></div>

//   {/* Content */}
//   <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
//     <div>
      
//       {/* Badge */}
//       <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-white/30">
//         🚀 DeFi Innovation
//       </span>

//       {/* Heading */}
//       <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
//         DeFi Lending Protocol
//         <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
//           Built on MVB Core
//         </span>
//       </h1>

//       {/* Subheading */}
//       <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
//         Automated Yield Optimization & Cross-Chain Liquidity
//       </h2>

//       {/* Stats Pills */}
//       <div className="flex flex-wrap justify-center gap-4 mb-10">
//         {[
//           "50K+ Users",
//           "$120M TVL",
//           "1.2M Transactions"
//         ].map((item, index) => (
//           <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
//             <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
//             <span className="text-sm">{item}</span>
//           </div>
//         ))}
//       </div>

//       {/* Button */}
//       {/* <button
//         onClick={() => (window.location.href = "/contact")}
//         className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-3 rounded-lg font-medium hover:scale-105 transition shadow-lg group"
//       >
//         View Details →
//       </button> */}

//     </div>
//   </div>

//   {/* Bottom Divider */}
//   <div className="absolute bottom-0 left-0 w-full h-20 bg-gray-50"></div>
// </section>

//       {/* OVERVIEW with DeFi Stats */}
//       <section className="max-w-6xl mx-auto px-6 py-16">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
//               Protocol Overview
//             </div>
//             <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//               Next-Generation Lending Infrastructure
//             </h3>
//             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//               A decentralized lending platform built on MVB Core delivering automated yield optimization and seamless cross-chain liquidity pools. Users can lend, borrow, and earn yields across multiple blockchain networks with maximum capital efficiency.
//             </p>
//             <div className="space-y-3">
//               <div className="flex items-start space-x-3">
//                 <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
//                   <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <span className="text-gray-700">Automated yield optimization strategies</span>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
//                   <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <span className="text-gray-700">Cross-chain liquidity pools across 7+ networks</span>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
//                   <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <span className="text-gray-700">Non-custodial smart contract architecture</span>
//               </div>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-50 blur-3xl"></div>
//             <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-1">
//               <div className="bg-white rounded-xl p-6">
//                 <div className="grid grid-cols-2 gap-4 text-center">
//                   <div>
//                     <div className="text-3xl font-bold text-gray-800">50K+</div>
//                     <div className="text-gray-600 text-sm">Active Users</div>
//                   </div>
//                   <div>
//                     <div className="text-3xl font-bold text-gray-800">$120M</div>
//                     <div className="text-gray-600 text-sm">Total Value Locked</div>
//                   </div>
//                   <div className="col-span-2">
//                     <div className="text-3xl font-bold text-gray-800">1.2M</div>
//                     <div className="text-gray-600 text-sm">Total Transactions</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* KEY ADVANTAGES with DeFi Features */}
//       <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
//               Core Features
//             </div>
//             <h3 className="text-4xl font-bold mb-4">Key Advantages</h3>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Experience the next generation of decentralized lending with cutting-edge features
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Card 1 - Yield Optimization */}
//             <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//               <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                 </svg>
//               </div>
//               <h4 className="text-2xl font-bold mb-3">Automated Yield Optimization</h4>
//               <p className="text-gray-600 leading-relaxed">
//                 Smart algorithms automatically rebalance positions across top yield opportunities, maximizing returns while minimizing risk exposure.
//               </p>
//             </div>

//             {/* Card 2 - Cross-Chain Liquidity */}
//             <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//               <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//                 </svg>
//               </div>
//               <h4 className="text-2xl font-bold mb-3">Cross-Chain Liquidity Pools</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
//                   Support for 7+ blockchain networks
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
//                   Seamless asset bridging
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
//                   Unified liquidity management
//                 </li>
//               </ul>
//             </div>

//             {/* Card 3 - Security & Transparency */}
//             <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//               <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6-4h12a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 4v-4m-8 4v-4m-4 8h16a2 2 0 002-2v-2a2 2 0 00-2-2H4a2 2 0 00-2 2v2a2 2 0 002 2z" />
//                 </svg>
//               </div>
//               <h4 className="text-2xl font-bold mb-3">Security & Transparency</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
//                   Audited smart contracts
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
//                   Real-time on-chain verification
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
//                   Non-custodial asset control
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CHALLENGES & SOLUTIONS */}
//       <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
//         <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </div>
//           <h3 className="text-3xl font-bold mb-6 text-red-600">DeFi Challenges</h3>
//           <ul className="space-y-3">
//             {["Fragmented liquidity across multiple chains", "Complex yield optimization strategies", "High gas fees on Ethereum network", "Security concerns with smart contracts", "Poor user experience for non-technical users"].map((item, idx) => (
//               <li key={idx} className="flex items-center space-x-3 text-gray-700">
//                 <span className="w-2 h-2 bg-red-500 rounded-full"></span>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </div>
//           <h3 className="text-3xl font-bold mb-6 text-green-600">MVB Core Solutions</h3>
//           <ul className="space-y-3">
//             {["Unified cross-chain liquidity pools", "Automated yield optimization algorithms", "Scalable MVB Core infrastructure with low fees", "Audited smart contracts & bug bounties", "Intuitive dashboard with wallet integration"].map((item, idx) => (
//               <li key={idx} className="flex items-center space-x-3 text-gray-700">
//                 <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* BENEFITS with DeFi Benefits */}
//       {/* <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 py-16">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h3 className="text-4xl font-bold mb-12 text-white">Protocol Benefits</h3>
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               { emoji: "💰", text: "Maximized Yields" },
//               { emoji: "🔗", text: "Cross-Chain Access" },
//               { emoji: "🛡️", text: "Enhanced Security" },
//               { emoji: "⚡", text: "Low Transaction Fees" }
//             ].map((benefit, idx) => (
//               <div key={idx} className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:bg-opacity-30 transition-all duration-300">
//                 <div className="text-4xl mb-4">{benefit.emoji}</div>
//                 <p className="text-xl font-semibold text-white">{benefit.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       <section className="bg-[#FFDE42] py-16">
//   <div className="max-w-6xl mx-auto px-6 text-center">
    
//     <h3 className="text-4xl font-bold mb-12 text-gray-900">
//       Protocol Benefits
//     </h3>

//     <div className="grid md:grid-cols-4 gap-8">
//       {[
//         { emoji: "💰", text: "Maximized Yields" },
//         { emoji: "🔗", text: "Cross-Chain Access" },
//         { emoji: "🛡️", text: "Enhanced Security" },
//         { emoji: "⚡", text: "Low Transaction Fees" }
//       ].map((benefit, idx) => (
//         <div
//           key={idx}
//           className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:bg-white/90 transition-all duration-300"
//         >
//           <div className="text-4xl mb-4">{benefit.emoji}</div>
//           <p className="text-xl font-semibold text-gray-800">
//             {benefit.text}
//           </p>
//         </div>
//       ))}
//     </div>

//   </div>
//     </section>

//       {/* PROJECT DETAILS & OBJECTIVE */}
//       <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
//         <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl shadow-lg">
//           <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//             </svg>
//           </div>
//           <h3 className="text-3xl font-bold mb-6">Project Details</h3>
//           <div className="space-y-3">
//             <p><span className="font-semibold">Protocol:</span> DeFi Lending Platform</p>
//             <p><span className="font-semibold">Blockchain:</span> MVB Core</p>
//             <p><span className="font-semibold">TVL:</span> $120 Million</p>
//             <p><span className="font-semibold">Users:</span> 50,000+ Active</p>
//             <p><span className="font-semibold">Transactions:</span> 1.2 Million</p>
//           </div>
//         </div>

//         <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl shadow-lg">
//           <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//             </svg>
//           </div>
//           <h3 className="text-3xl font-bold mb-6">Protocol Objectives</h3>
//           <ul className="space-y-3">
//             {[
//               "Unify fragmented liquidity across blockchain networks",
//               "Provide automated yield optimization for passive income",
//               "Enable seamless cross-chain borrowing and lending",
//               "Deliver institutional-grade security and transparency"
//             ].map((item, idx) => (
//               <li key={idx} className="flex items-center space-x-3">
//                 <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* METRICS with DeFi Stats */}
//       <section className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20 overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//           <h3 className="text-4xl font-bold mb-12">Protocol Metrics</h3>
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="transform hover:scale-110 transition-all duration-300">
//               <div className="text-4xl font-bold mb-2">50K+</div>
//               <div className="text-lg opacity-90">Active Users</div>
//             </div>
//             <div className="transform hover:scale-110 transition-all duration-300">
//               <div className="text-4xl font-bold mb-2">$120M</div>
//               <div className="text-lg opacity-90">Total Value Locked</div>
//             </div>
//             <div className="transform hover:scale-110 transition-all duration-300">
//               <div className="text-4xl font-bold mb-2">1.2M</div>
//               <div className="text-lg opacity-90">Transactions</div>
//             </div>
//             <div className="transform hover:scale-110 transition-all duration-300">
//               <div className="text-4xl font-bold mb-2">7+</div>
//               <div className="text-lg opacity-90">Supported Chains</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 0.8s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CaseStudy;






import React from "react";

const CaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO with Background Image - Enterprise IT Themed */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2071&q=80')",
          }}
        />

        {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/85 via-yellow-400/80 to-blue-600/85"></div>
        

        {/* Glow Effects */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[100px] animate-pulse"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <div>
            
            {/* Badge */}
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-white/30">
              🏢 Enterprise IT Infrastructure
            </span>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Data Centre
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300">
          Hyperscale Infrastructure
         </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
              100G & 400G Infrastructure with Spine-Leaf Architecture
            </h2>

            {/* Stats Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {[
                "100G/400G Support",
                "Spine-Leaf Architecture",
                "24/7 High Availability"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gray-50"></div>
      </section>

      {/* OVERVIEW with Stats */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Client: Data Centre
            </div>
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Hyperscale Infrastructure for High Bandwidth & Availability
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Enterprise data center solution designed to support domestic and international connectivity requirements with 100G & 400G infrastructure, ensuring high bandwidth and maximum availability.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">100G & 400G infrastructure support</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Spine-Leaf architecture implementation</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">User accessibility, Application & Compliance ready</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-50 blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gray-800">100G/400G</div>
                    <div className="text-gray-600 text-sm">Infrastructure</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-800">Spine-Leaf</div>
                    <div className="text-gray-600 text-sm">Architecture</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-3xl font-bold text-gray-800">24/7</div>
                    <div className="text-gray-600 text-sm">High Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY ADVANTAGES - IT Infrastructure Features */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Our Solutions
            </div>
            <h3 className="text-4xl font-bold mb-4">Comprehensive IT Infrastructure Solutions</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end enterprise solutions delivered across manufacturing, education, and corporate sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Structured Cabling */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-3">Structured Cabling</h4>
              <p className="text-gray-600 leading-relaxed">
                End-to-end structured cabling solutions including entry facility, backbone, telecommunications, horizontal cabling, work area, and administrative systems.
              </p>
            </div>

            {/* Card 2 - Physical Security */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6-4h12a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 4v-4m-8 4v-4m-4 8h16a2 2 0 002-2v-2a2 2 0 00-2-2H4a2 2 0 00-2 2v2a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-3">Physical Security</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                  Master & Slave Controller
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                  Centralized Monitoring
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                  Indoor/Outdoor CCTV Systems
                </li>
              </ul>
            </div>

            {/* Card 3 - Data Center Migration */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-3">Data Center Migration</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  48-Hour Migration SLA
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Port Mapping & Dismantling
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Large Resource Deployment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES & SOLUTIONS - Multiple Projects */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Client Success Stories</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real challenges, enterprise solutions, measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Anthem Bioscience */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white text-xl">🧬</span>
              </div>
              <h3 className="text-2xl font-bold text-green-700">Anthem Bioscience</h3>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-gray-800">20-Acre Manufacturing Campus</p>
              <p className="text-gray-600 mt-2">Reliable network & security for IT & OT operations</p>
            </div>
            <div className="border-t border-green-200 pt-4 mt-2">
              <p className="text-sm text-gray-700"><span className="font-semibold">Solution:</span> Structured cabling + Physical security solutions</p>
              <p className="text-sm text-gray-700 mt-1"><span className="font-semibold">Approach:</span> Subsystem approach with campus-wide wireless, access control & surveillance</p>
            </div>
          </div>

          {/* UNext */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white text-xl">🔥</span>
              </div>
              <h3 className="text-2xl font-bold text-orange-700">UNext</h3>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-gray-800">2,000+ Users | Multiple Locations</p>
              <p className="text-gray-600 mt-2">Frequent firewall reboot issues resolved</p>
            </div>
            <div className="border-t border-orange-200 pt-4 mt-2">
              <p className="text-sm text-gray-700"><span className="font-semibold">Solution:</span> Next Gen Firewall Design & Recommendation</p>
              <p className="text-sm text-gray-700 mt-1"><span className="font-semibold">Approach:</span> Business goal analysis, existing firewall evaluation, scalable firewall & log analytic tools</p>
            </div>
          </div>

          {/* String Bio */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white text-xl">🧪</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-700">String Bio</h3>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-gray-800">7-Acre Manufacturing Campus</p>
              <p className="text-gray-600 mt-2">Reliable network & security for IT & OT</p>
            </div>
            <div className="border-t border-purple-200 pt-4 mt-2">
              <p className="text-sm text-gray-700"><span className="font-semibold">Solution:</span> Comprehensive end-to-end solutions</p>
              <p className="text-sm text-gray-700 mt-1"><span className="font-semibold">Approach:</span> Data cabling, Data physical Security, Data Security & Data Infra</p>
            </div>
          </div>

          {/* Data Center Migration */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white text-xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold text-red-700">Data Center Migration</h3>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-gray-800">48-Hour Migration Window</p>
              <p className="text-gray-600 mt-2">Physical data center migration with zero downtime</p>
            </div>
            <div className="border-t border-red-200 pt-4 mt-2">
              <p className="text-sm text-gray-700"><span className="font-semibold">Solution:</span> Dismantling & new data cabling infrastructure</p>
              <p className="text-sm text-gray-700 mt-1"><span className="font-semibold">Approach:</span> Port mapping, large resource deployment, re-connectivity at co-location within 48hrs</p>
            </div>
          </div>

          {/* The School of RAYA */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white text-xl">🏫</span>
              </div>
              <h3 className="text-2xl font-bold text-teal-700">The School of RAYA</h3>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-gray-800">10-Acre Smart Campus</p>
              <p className="text-gray-600 mt-2">Digitally connected with centralized surveillance</p>
            </div>
            <div className="border-t border-teal-200 pt-4 mt-2">
              <p className="text-sm text-gray-700"><span className="font-semibold">Solution:</span> Command center with 350 CCTV cameras, IP PA system & IP phone integration</p>
              <p className="text-sm text-gray-700 mt-1"><span className="font-semibold">Approach:</span> Star topology for CCTV, Centralized management software, 6-display dashboard</p>
            </div>
          </div>

          {/* IWPS */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white text-xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-700">IWPS</h3>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-gray-800">45,000 sqft | 45-Day Delivery</p>
              <p className="text-gray-600 mt-2">Ready-to-move facility fit-out</p>
            </div>
            <div className="border-t border-blue-200 pt-4 mt-2">
              <p className="text-sm text-gray-700"><span className="font-semibold">Solution:</span> Data cabling solutions for office area</p>
              <p className="text-sm text-gray-700 mt-1"><span className="font-semibold">Approach:</span> Required-Allocate-Delivered methodology, 2 teams per floor, project management process</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS Section */}
      {/* <section className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12 text-white">Why Choose Us</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { emoji: "⚡", text: "48-Hour Migration" },
              { emoji: "🔒", text: "Enterprise Security" },
              { emoji: "📡", text: "100G/400G Ready" },
              { emoji: "📦", text: "45-Day Delivery" }
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:bg-white/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.emoji}</div>
                <p className="text-xl font-semibold text-white">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* PROJECT DETAILS & OBJECTIVE */}
      {/* <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold mb-6">Our Expertise</h3>
          <div className="space-y-3">
            <p><span className="font-semibold">Data Centers:</span> Hyperscale Infrastructure</p>
            <p><span className="font-semibold">Manufacturing:</span> IT/OT Security Solutions</p>
            <p><span className="font-semibold">Education:</span> Smart Campus Integration</p>
            <p><span className="font-semibold">Enterprise:</span> 45,000+ sqft Fit-outs</p>
            <p><span className="font-semibold">Migration:</span> 48-Hour Data Center Moves</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold mb-6">Our Core Capabilities</h3>
          <ul className="space-y-3">
            {[
              "End-to-end structured cabling solutions",
              "Physical security & surveillance systems",
              "Next-gen firewall & network security",
              "Data center migration & infrastructure setup",
              "Smart campus integration & command centers"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      {/* METRICS Section */}
      {/* <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12">Enterprise Impact Metrics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Enterprise Clients</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">48hrs</div>
              <div className="text-lg opacity-90">Migration Record</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">45 Days</div>
              <div className="text-lg opacity-90">Project Delivery</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">100G/400G</div>
              <div className="text-lg opacity-90">Infrastructure Ready</div>
            </div>
          </div>
        </div>
      </section> */}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CaseStudy;