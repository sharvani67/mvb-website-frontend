// import React from 'react';

// // Network Background Component
// const NetworkBackground: React.FC = () => {
//   return (
//     <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
//       <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <pattern id="network-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
//             <circle cx="2" cy="2" r="1.5" fill="white" />
//             <path d="M2 2 L38 38 M2 38 L38 2" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#network-pattern)" />
//       </svg>
//     </div>
//   );
// };

// const ProjectsPage: React.FC = () => {
//   // Projects data
//   const projects = [
//     {
//       id: 1,
//       title: "DeFi Lending Protocol",
//       category: "Blockchain",
//       description: "A decentralized lending platform built on MVB Core with automated yield optimization and cross-chain liquidity pools.",
//       icon: "💰",
//       gradient: "from-pink-600 to-pink-400",
//       stats: { users: "50K+", tvl: "$120M", transactions: "1.2M" },
//     },
//     {
//       id: 2,
//       title: "NFT Marketplace",
//       category: "Web3",
//       description: "High-performance NFT marketplace with gasless minting and royalty distribution system powered by MVB smart contracts.",
//       icon: "🎨",
//       gradient: "from-yellow-500 to-yellow-400",
//       stats: { users: "100K+", volume: "$45M", items: "25K+" },
//     },
//     {
//       id: 3,
//       title: "Supply Chain Tracker",
//       category: "Enterprise",
//       description: "End-to-end supply chain solution using MVB blockchain for immutable tracking and real-time verification.",
//       icon: "📦",
//       gradient: "from-blue-600 to-blue-400",
//       stats: { partners: "200+", transactions: "5M+", efficiency: "+45%" },
//     },
//     {
//       id: 4,
//       title: "Digital Identity Wallet",
//       category: "Security",
//       description: "Self-sovereign identity solution with zero-knowledge proofs and biometric authentication on MVB.",
//       icon: "🆔",
//       gradient: "from-cyan-600 to-cyan-400",
//       stats: { users: "250K+", verifications: "10M+", countries: "15+" },
//     },
//     {
//       id: 5,
//       title: "Gaming Ecosystem",
//       category: "Gaming",
//       description: "Play-to-earn gaming platform with NFT assets and token economy built on MVB infrastructure.",
//       icon: "🎮",
//       gradient: "from-green-600 to-green-400",
//       stats: { players: "75K+", assets: "150K+", rewards: "$8.5M" },
//     },
//     {
//       id: 6,
//       title: "DAO Governance",
//       category: "Governance",
//       description: "Decentralized autonomous organization platform with quadratic voting and treasury management.",
//       icon: "🏛️",
//       gradient: "from-orange-600 to-orange-400",
//       stats: { members: "15K+", proposals: "500+", treasury: "$25M" },
//     },
//   ];

//   // Filter categories
//   const categories = ["All", "Blockchain", "Web3", "Enterprise", "Security", "Gaming", "Governance"];
//   const [activeCategory, setActiveCategory] = React.useState("All");

//   const filteredProjects = activeCategory === "All" 
//     ? projects 
//     : projects.filter(project => project.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-gray-50 mt-4">
//       {/* Hero Section */}
//       <section
//   className="relative py-28 lg:py-36 overflow-hidden bg-cover bg-center bg-no-repeat"
//   style={{
//     backgroundImage:
//       "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop')",
//   }}
// >
//   {/* Gradient Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-r from-pink-600/85 via-yellow-400/80 to-blue-600/85"></div>

//   {/* Background Animation */}
//   <NetworkBackground />

//   {/* Glow Blobs */}
//   <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-pink-500/20 blur-[150px] animate-pulse" />
//   <div
//     className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[150px] animate-pulse"
//     style={{ animationDuration: "8s" }}
//   />
//   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-yellow-500/20 blur-[120px] animate-pulse" />

//   {/* CONTENT */}
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//     <div className="max-w-4xl mx-auto text-center">
      
//       {/* Badge */}
//       <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
//         <span className="text-sm font-semibold text-white tracking-wide">
//           🚀 Our Portfolio
//         </span>
//       </div>

//       {/* Heading */}
//       <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
//         MVB-Powered
//         <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300">
//           Innovation Projects
//         </span>
//       </h1>

//       {/* Description */}
//       <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
//         Explore our groundbreaking projects built on MVB (Minimum Viable Blockchain) technology —
//         delivering real-world solutions across DeFi, NFTs, Enterprise, and beyond.
//       </p>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
//         <button
//   onClick={() => (window.location.href = "/contact")}
//   className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
// >
//   Talk to Our Team →
//       </button>
//        <button
//   onClick={() => (window.location.href = "/contact")}
//   className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
// >
//   Start a Conversation
//     </button>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16 pt-8 border-t border-white/20">
//         <div className="text-center">
//           <div className="text-2xl md:text-3xl font-bold text-yellow-300">25+</div>
//           <div className="text-sm text-white/80 mt-1">Completed Projects</div>
//         </div>
//         <div className="text-center">
//           <div className="text-2xl md:text-3xl font-bold text-pink-300">$250M+</div>
//           <div className="text-sm text-white/80 mt-1">Value Locked</div>
//         </div>
//         <div className="text-center">
//           <div className="text-2xl md:text-3xl font-bold text-cyan-300">500K+</div>
//           <div className="text-sm text-white/80 mt-1">Active Users</div>
//         </div>
//         <div className="text-center">
//           <div className="text-2xl md:text-3xl font-bold text-green-300">50+</div>
//           <div className="text-sm text-white/80 mt-1">Enterprise Clients</div>
//         </div>
//       </div>
//     </div>
//   </div>

//   {/* ✅ Straight Bottom Divider */}
//   <div className="absolute bottom-0 left-0 w-full h-20 bg-gray-50"></div>
// </section>

//       {/* Projects Grid Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Featured <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">MVB Projects</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Discover how we're transforming industries with cutting-edge blockchain solutions
//           </p>
//         </div>

//         {/* Category Filters */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
//                 activeCategory === category
//                   ? "bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white shadow-lg"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project) => (
//             <div
//               key={project.id}
//               className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
//             >
//               {/* Gradient Top Bar */}
//               <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
//               <div className="p-6">
//                 {/* Icon and Category */}
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="text-5xl">{project.icon}</div>
//                   <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
//                     {project.category}
//                   </span>
//                 </div>
                
//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:via-yellow-400 group-hover:to-blue-600 group-hover:bg-clip-text transition-all">
//                   {project.title}
//                 </h3>
                
//                 {/* Description */}
//                 <p className="text-gray-600 mb-4 leading-relaxed">
//                   {project.description}
//                 </p>
                
//                 {/* Stats */}
//                 <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
//                   {Object.entries(project.stats).map(([key, value]) => (
//                     <div key={key} className="text-center">
//                       <div className="text-sm font-bold text-gray-900">{value}</div>
//                       <div className="text-xs text-gray-500 capitalize">{key}</div>
//                     </div>
//                   ))}
//                 </div>
                
//                 {/* Learn More Button */}
//                 {/* <button className="mt-5 w-full py-2 text-center text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-gradient-to-r hover:from-pink-600 hover:via-yellow-400 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300">
//                   View Details →
//                 </button> */}
//         <button
//   onClick={() => (window.location.href = "http://localhost:8080/viewdetails")}
//   className="mt-5 w-full py-2 text-center text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-gradient-to-r hover:from-pink-600 hover:via-yellow-400 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300"
// >
//   View Details →
//       </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View More Button */}
//         <div className="text-center mt-12">
//           <button
//   onClick={() => (window.location.href = "/contact")}
//   className="px-8 py-3 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
// >
//   Start a Conversation ⭐
//       </button>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Ready to Build Your MVB Project?
//           </h2>
//           <p className="text-white/90 max-w-2xl mx-auto mb-8">
//             Join the leading companies leveraging MVB technology for their next-generation solutions
//           </p>
//          <button
//   onClick={() => (window.location.href = "/contact")}
//   className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
// >
//   Start Your Journey →
//         </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectsPage;






// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// // Network Background Component
// const NetworkBackground: React.FC = () => {
//   return (
//     <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
//       <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <pattern id="network-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
//             <circle cx="2" cy="2" r="1.5" fill="white" />
//             <path d="M2 2 L38 38 M2 38 L38 2" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#network-pattern)" />
//       </svg>
//     </div>
//   );
// };

// const ProjectsPage: React.FC = () => {
//   const navigate = useNavigate();

//   const scrollToContactForm = () => {
//     navigate('/contact');
//     setTimeout(() => {
//       const contactFormElement = document.getElementById('contact-form');
//       if (contactFormElement) {
//         contactFormElement.scrollIntoView({ behavior: 'smooth' });
//       }
//     }, 100);
//   };

//   // Projects data
//   const projects = [
//     {
//       id: 1,
//       title: "DeFi Lending Protocol",
//       category: "Blockchain",
//       description: "A decentralized lending platform built on MVB Core with automated yield optimization and cross-chain liquidity pools.",
//       icon: "💰",
//       gradient: "from-pink-600 to-pink-400",
//       stats: { users: "50K+", tvl: "$120M", transactions: "1.2M" },
//     },
//     {
//       id: 2,
//       title: "NFT Marketplace",
//       category: "Web3",
//       description: "High-performance NFT marketplace with gasless minting and royalty distribution system powered by MVB smart contracts.",
//       icon: "🎨",
//       gradient: "from-yellow-500 to-yellow-400",
//       stats: { users: "100K+", volume: "$45M", items: "25K+" },
//     },
//     {
//       id: 3,
//       title: "Supply Chain Tracker",
//       category: "Enterprise",
//       description: "End-to-end supply chain solution using MVB blockchain for immutable tracking and real-time verification.",
//       icon: "📦",
//       gradient: "from-blue-600 to-blue-400",
//       stats: { partners: "200+", transactions: "5M+", efficiency: "+45%" },
//     },
//     {
//       id: 4,
//       title: "Digital Identity Wallet",
//       category: "Security",
//       description: "Self-sovereign identity solution with zero-knowledge proofs and biometric authentication on MVB.",
//       icon: "🆔",
//       gradient: "from-cyan-600 to-cyan-400",
//       stats: { users: "250K+", verifications: "10M+", countries: "15+" },
//     },
//     {
//       id: 5,
//       title: "Gaming Ecosystem",
//       category: "Gaming",
//       description: "Play-to-earn gaming platform with NFT assets and token economy built on MVB infrastructure.",
//       icon: "🎮",
//       gradient: "from-green-600 to-green-400",
//       stats: { players: "75K+", assets: "150K+", rewards: "$8.5M" },
//     },
//     {
//       id: 6,
//       title: "DAO Governance",
//       category: "Governance",
//       description: "Decentralized autonomous organization platform with quadratic voting and treasury management.",
//       icon: "🏛️",
//       gradient: "from-orange-600 to-orange-400",
//       stats: { members: "15K+", proposals: "500+", treasury: "$25M" },
//     },
//   ];

//   // Filter categories
//   const categories = ["All", "Blockchain", "Web3", "Enterprise", "Security", "Gaming", "Governance"];
//   const [activeCategory, setActiveCategory] = React.useState("All");

//   const filteredProjects = activeCategory === "All" 
//     ? projects 
//     : projects.filter(project => project.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-gray-50 mt-4">
//       {/* Hero Section */}
//       <section
//         className="relative py-28 lg:py-36 overflow-hidden bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop')",
//         }}
//       >
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-pink-600/85 via-yellow-400/80 to-blue-600/85"></div>

//         {/* Background Animation */}
//         <NetworkBackground />

//         {/* Glow Blobs */}
//         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-pink-500/20 blur-[150px] animate-pulse" />
//         <div
//           className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[150px] animate-pulse"
//           style={{ animationDuration: "8s" }}
//         />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-yellow-500/20 blur-[120px] animate-pulse" />

//         {/* CONTENT */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
            
//             {/* Badge */}
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
//               <span className="text-sm font-semibold text-white tracking-wide">
//                 🚀 Our Portfolio
//               </span>
//             </div>

//             {/* Heading */}
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
//               MVB-Powered
//               <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300">
//                 Innovation Projects
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
//               Explore our groundbreaking projects built on MVB (Minimum Viable Blockchain) technology —
//               delivering real-world solutions across DeFi, NFTs, Enterprise, and beyond.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
//               <button
//                 onClick={scrollToContactForm}
//                 className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
//               >
//                 Talk to Our Team →
//               </button>
//               <button
//                 onClick={scrollToContactForm}
//                 className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
//               >
//                 Start a Conversation
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16 pt-8 border-t border-white/20">
//               <div className="text-center">
//                 <div className="text-2xl md:text-3xl font-bold text-yellow-300">25+</div>
//                 <div className="text-sm text-white/80 mt-1">Completed Projects</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl md:text-3xl font-bold text-pink-300">$250M+</div>
//                 <div className="text-sm text-white/80 mt-1">Value Locked</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl md:text-3xl font-bold text-cyan-300">500K+</div>
//                 <div className="text-sm text-white/80 mt-1">Active Users</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl md:text-3xl font-bold text-green-300">50+</div>
//                 <div className="text-sm text-white/80 mt-1">Enterprise Clients</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ✅ Straight Bottom Divider */}
//         <div className="absolute bottom-0 left-0 w-full h-20 bg-gray-50"></div>
//       </section>

//       {/* Projects Grid Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Featured <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">MVB Projects</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Discover how we're transforming industries with cutting-edge blockchain solutions
//           </p>
//         </div>

//         {/* Category Filters */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
//                 activeCategory === category
//                   ? "bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white shadow-lg"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project) => (
//             <div
//               key={project.id}
//               className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
//             >
//               {/* Gradient Top Bar */}
//               <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
//               <div className="p-6">
//                 {/* Icon and Category */}
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="text-5xl">{project.icon}</div>
//                   <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
//                     {project.category}
//                   </span>
//                 </div>
                
//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:via-yellow-400 group-hover:to-blue-600 group-hover:bg-clip-text transition-all">
//                   {project.title}
//                 </h3>
                
//                 {/* Description */}
//                 <p className="text-gray-600 mb-4 leading-relaxed">
//                   {project.description}
//                 </p>
                
//                 {/* Stats */}
//                 <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
//                   {Object.entries(project.stats).map(([key, value]) => (
//                     <div key={key} className="text-center">
//                       <div className="text-sm font-bold text-gray-900">{value}</div>
//                       <div className="text-xs text-gray-500 capitalize">{key}</div>
//                     </div>
//                   ))}
//                 </div>
                
//                 {/* View Details Button */}
//                 <button
//                   onClick={() => navigate('/viewdetails')}
//                   className="mt-5 w-full py-2 text-center text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-gradient-to-r hover:from-pink-600 hover:via-yellow-400 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
//                 >
//                   View Details →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View More Button - Start a Conversation */}
//         <div className="text-center mt-12">
//           <button
//             onClick={scrollToContactForm}
//             className="px-8 py-3 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
//           >
//             Start a Conversation ⭐
//           </button>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Ready to Build Your MVB Project?
//           </h2>
//           <p className="text-white/90 max-w-2xl mx-auto mb-8">
//             Join the leading companies leveraging MVB technology for their next-generation solutions
//           </p>
//           <button
//             onClick={scrollToContactForm}
//             className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
//           >
//             Start Your Journey →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectsPage;





// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// // Network Background Component
// const NetworkBackground: React.FC = () => {
//   return (
//     <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
//       <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <pattern id="network-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
//             <circle cx="2" cy="2" r="1.5" fill="white" />
//             <path d="M2 2 L38 38 M2 38 L38 2" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#network-pattern)" />
//       </svg>
//     </div>
//   );
// };

// const ProjectsPage: React.FC = () => {
//   const navigate = useNavigate();

//   const scrollToContactForm = () => {
//     navigate('/contact');
//     setTimeout(() => {
//       const contactFormElement = document.getElementById('contact-form');
//       if (contactFormElement) {
//         contactFormElement.scrollIntoView({ behavior: 'smooth' });
//       }
//     }, 100);
//   };

//   // Projects data - Updated with new client projects
//   const projects = [
//     {
//       id: 1,
//       title: "Data Centre",
//       category: "Infrastructure",
//       description: "Hyperscale infrastructure solution with 100G & 400G spine-leaf architecture for high bandwidth domestic & international connectivity.",
//       icon: "🏢",
//       gradient: "from-blue-600 to-blue-400",
//       solution: "Data center switches to support 100G & 400G Infra",
//       approach: "Evaluation of existing infra, spine & leaf architecture, user accessibility & compliances"
//     },
//     {
//       id: 2,
//       title: "Anthem Bioscience",
//       category: "Manufacturing",
//       description: "Complete IT/OT network & security solution for 20-acre manufacturing campus with structured cabling and physical security.",
//       icon: "🧬",
//       gradient: "from-green-600 to-green-400",
//       solution: "Structured cabling & physical security solutions",
//       approach: "Subsystem approach including entry facility, backbone, horizontal, work area & wireless connectivity"
//     },
//     {
//       id: 3,
//       title: "UNext",
//       category: "Enterprise",
//       description: "Next-gen firewall design & implementation for 2000+ users across multiple locations, eliminating frequent reboots.",
//       icon: "🔥",
//       gradient: "from-orange-600 to-orange-400",
//       solution: "Next Gen Firewall design & recommendation",
//       approach: "Business goal analysis, existing firewall evaluation, scalable firewall & log analytic tools"
//     },
//     {
//       id: 4,
//       title: "String Bio",
//       category: "Manufacturing",
//       description: "End-to-end IT infrastructure solution for 7-acre manufacturing campus covering data cabling, security, and data infrastructure.",
//       icon: "🧪",
//       gradient: "from-purple-600 to-purple-400",
//       solution: "Comprehensive end-to-end solutions",
//       approach: "Design & implementation of data cabling, physical security, data security & data infra"
//     },
//     {
//       id: 5,
//       title: "Data Center Migration",
//       category: "Migration",
//       description: "Complete physical data center migration within 48 hours with zero downtime and precise port mapping.",
//       icon: "🔄",
//       gradient: "from-red-600 to-red-400",
//       solution: "Dismantling & setup of new data cabling infrastructure",
//       approach: "Port mapping, dismantling, large resource deployment for re-connectivity at co-location within 48hrs"
//     },
//     {
//       id: 6,
//       title: "The School of RAYA",
//       category: "Education",
//       description: "Smart connected 10-acre campus with centralized surveillance, command center, and integrated PA system.",
//       icon: "🏫",
//       gradient: "from-teal-600 to-teal-400",
//       solution: "Comprehensive end-to-end IT infrastructure",
//       approach: "Data cabling, 350 CCTV cameras with star topology, command center with 6 displays, IP PA & phone integration"
//     },
//     {
//       id: 7,
//       title: "IWPS",
//       category: "Enterprise",
//       description: "45,000 sqft ready-to-move office fit-out delivered within 45 days with complete data cabling solutions.",
//       icon: "🏢",
//       gradient: "from-indigo-600 to-indigo-400",
//       solution: "Data cabling solutions for office area",
//       approach: "Required-Allocate-Delivered methodology with 2 teams per floor, resource allocation & project management"
//     },
//   ];

//   // Filter categories - Updated
//   const categories = ["All", "Infrastructure", "Manufacturing", "Enterprise", "Migration", "Education"];
//   const [activeCategory, setActiveCategory] = React.useState("All");

//   const filteredProjects = activeCategory === "All" 
//     ? projects 
//     : projects.filter(project => project.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-gray-50 mt-4">
//       {/* Hero Section */}
//       <section
//         className="relative py-28 lg:py-36 overflow-hidden bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop')",
//         }}
//       >
//         {/* Gradient Overlay */}
      
//          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/85 via-yellow-400/80 to-blue-600/85"></div>

//         {/* Background Animation */}
//         <NetworkBackground />

//         {/* Glow Blobs */}
//         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[150px] animate-pulse" />
//         <div
//           className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[150px] animate-pulse"
//           style={{ animationDuration: "8s" }}
//         />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-500/20 blur-[120px] animate-pulse" />

//         {/* CONTENT */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
            
//             {/* Badge */}
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
//               <span className="text-sm font-semibold text-white tracking-wide">
//                 🚀 Our Success Stories
//               </span>
//             </div>

//             {/* Heading */}
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
//               Enterprise IT
              
//               <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300">
//            Infrastructure Solutions
//          </span>
//             </h1>

//             {/* Description */}
//             <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
//               Delivering comprehensive IT infrastructure, network security, and data center solutions 
//               for enterprises across manufacturing, education, and corporate sectors.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
//               <button
//                 onClick={scrollToContactForm}
//                 className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
//               >
//                 Talk to Our Team →
//               </button>
//               <button
//                 onClick={scrollToContactForm}
//                 className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
//               >
//                 Start a Conversation
//               </button>
//             </div>

//             {/* Stats */}
//             {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16 pt-8 border-t border-white/20">

//   <div className="text-center">
//     <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
//       50+
//     </div>
//     <div className="text-sm text-white/80 mt-1">Enterprise Clients</div>
//   </div>

//   <div className="text-center">
//     <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-400 to-green-500 bg-clip-text text-transparent">
//       2M+
//     </div>
//     <div className="text-sm text-white/80 mt-1">Users Connected</div>
//   </div>

//   <div className="text-center">
//     <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
//       48hrs
//     </div>
//     <div className="text-sm text-white/80 mt-1">Migration Record</div>
//   </div>

//   <div className="text-center">
//     <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-500 via-yellow-400 to-red-500 bg-clip-text text-transparent">
//       45 Days
//     </div>
//     <div className="text-sm text-white/80 mt-1">Project Delivery</div>
//   </div>

//         </div> */}
//           </div>
//         </div>

//         {/* Straight Bottom Divider */}
//         <div className="absolute bottom-0 left-0 w-full h-20 bg-gray-50"></div>
//       </section>

//       {/* Projects Grid Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Featured <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">Projects
//           </span>
//           </h2>
        
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Discover how we've transformed enterprise IT infrastructure across industries
//           </p>
//         </div>

//         {/* Category Filters */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
//                 activeCategory === category
//                   ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white shadow-lg"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project) => (
//             <div
//               key={project.id}
//               className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
//             >
//               {/* Gradient Top Bar */}
//               <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
//               <div className="p-6">
//                 {/* Icon and Category */}
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="text-5xl">{project.icon}</div>
//                   <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
//                     {project.category}
//                   </span>
//                 </div>
                
//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                
//                 {/* Description */}
//                 <p className="text-gray-600 mb-4 leading-relaxed">
//                   {project.description}
//                 </p>
                
//                 {/* Solution & Approach */}
//                 <div className="space-y-3 pt-4 border-t border-gray-100">
//                   <div>
//                     <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Solution</div>
//                     <div className="text-sm text-gray-700 mt-1">{project.solution}</div>
//                   </div>
//                   <div>
//                     <div className="text-xs font-semibold text-cyan-600 uppercase tracking-wide">Approach</div>
//                     <div className="text-sm text-gray-700 mt-1">{project.approach}</div>
//                   </div>
//                 </div>
                
//                 {/* View Details Button */}
//                 {/* <button
//                   onClick={() => navigate('/viewdetails')}
//                   className="mt-5 w-full py-2 text-center text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-gradient-to-r hover:from-pink-600 hover:via-yellow-400 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300"
//                 >
//                   View Details →
//                 </button> */}

              
//         <button
//   onClick={() => navigate('/viewdetailspage', { state: { project } })}
//   className="mt-5 w-full py-2 text-center text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-gradient-to-r hover:from-pink-600 hover:via-yellow-400 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300"
// >
//   View Details →
//       </button>
              
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View More Button - Start a Conversation */}
//         <div className="text-center mt-12">
//           <button
//             onClick={scrollToContactForm}
//             className="px-8 py-3 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
//           >
//             Start a Conversation ⭐
//           </button>
//         </div>
//       </div>

//       {/* CTA Section */}
//          <div className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Ready to Transform Your IT Infrastructure?
//           </h2>
//           <p className="text-white/90 max-w-2xl mx-auto mb-8">
//             Join leading enterprises that trust us for their network, security, and data center solutions
//           </p>
//           <button
//             onClick={scrollToContactForm}
//             className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
//           >
//             Start Your Journey →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectsPage;





// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// // Network Background Component
// const NetworkBackground: React.FC = () => {
//   return (
//     <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
//       <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <pattern id="network-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
//             <circle cx="2" cy="2" r="1.5" fill="white" />
//             <path d="M2 2 L38 38 M2 38 L38 2" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#network-pattern)" />
//       </svg>
//     </div>
//   );
// };

// const ProjectsPage: React.FC = () => {
//   const navigate = useNavigate();

//   const scrollToContactForm = () => {
//     navigate('/contact');
//     setTimeout(() => {
//       const contactFormElement = document.getElementById('contact-form');
//       if (contactFormElement) {
//         contactFormElement.scrollIntoView({ behavior: 'smooth' });
//       }
//     }, 100);
//   };

//   // Projects data - Updated with new client projects
//  const projects = [
//   {
//     id: 1,
//     title: "Data Centre",
//     category: "Infrastructure",
//     description: "Hyperscale Infrastructure Solution With 100G & 400G Spine-Leaf Architecture For High Bandwidth Domestic & International Connectivity.",
//     icon: "🏢",
//     gradient: "from-blue-600 to-blue-400",
//   },
//   {
//     id: 2,
//     title: "Anthem Bioscience",
//     category: "Manufacturing",
//     description: "Complete IT/OT Network & Security Solution For 20-Acre Manufacturing Campus With Structured Cabling And Physical Security.",
//     icon: "🧬",
//     gradient: "from-green-600 to-green-400",
//   },
//   {
//     id: 3,
//     title: "UNext",
//     category: "Enterprise",
//     description: "Next-Gen Firewall Design & Implementation For 2000+ Users Across Multiple Locations, Eliminating Frequent Reboots.",
//     icon: "🔥",
//     gradient: "from-orange-600 to-orange-400",
//   },
//   {
//     id: 4,
//     title: "String Bio",
//     category: "Manufacturing",
//     description: "End-To-End IT Infrastructure Solution For 7-Acre Manufacturing Campus Covering Data Cabling, Security, And Data Infrastructure.",
//     icon: "🧪",
//     gradient: "from-purple-600 to-purple-400",
//   },
//   {
//     id: 5,
//     title: "Data Center Migration",
//     category: "Migration",
//     description: "Complete Physical Data Center Migration Within 48 Hours With Zero Downtime And Precise Port Mapping.",
//     icon: "🔄",
//     gradient: "from-red-600 to-red-400",
//   },
//   {
//     id: 6,
//     title: "The School Of RAYA",
//     category: "Education",
//     description: "Smart Connected 10-Acre Campus With Centralized Surveillance, Command Center, And Integrated PA System.",
//     icon: "🏫",
//     gradient: "from-teal-600 to-teal-400",
//   },
//   {
//     id: 7,
//     title: "IWPS",
//     category: "Enterprise",
//     description: "45,000 Sqft Ready-To-Move Office Fit-Out Delivered Within 45 Days With Complete Data Cabling Solutions.",
//     icon: "🏢",
//     gradient: "from-indigo-600 to-indigo-400",
//   },
// ];

//   // Filter categories - Updated
//   const categories = ["All", "Infrastructure", "Manufacturing", "Enterprise", "Migration", "Education"];
//   const [activeCategory, setActiveCategory] = React.useState("All");

//   const filteredProjects = activeCategory === "All" 
//     ? projects 
//     : projects.filter(project => project.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-gray-50 mt-4">
//       {/* Hero Section */}
//       <section
//         className="relative py-28 lg:py-36 overflow-hidden bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop')",
//         }}
//       >
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-pink-600/85 via-yellow-400/80 to-blue-600/85"></div>

//         {/* Background Animation */}
//         <NetworkBackground />

//         {/* Glow Blobs */}
//         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[150px] animate-pulse" />
//         <div
//           className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[150px] animate-pulse"
//           style={{ animationDuration: "8s" }}
//         />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-500/20 blur-[120px] animate-pulse" />

//         {/* CONTENT */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
            
//             {/* Badge */}
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
//               <span className="text-sm font-semibold text-white tracking-wide">
//                 🚀 Our Success Stories
//               </span>
//             </div>

//             {/* Heading */}
//             <h1 className="text-3xl sm:text-3xl lg:text-6xl font-black text-white mb-6 leading-tight">
              
              
//               <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-pink-600 to-yellow-600">
//                 Client Success is Our Success
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
//               Well-Defined Systems, Process And Methodologies Ensuring Smooth Execution
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
//               <button
//                 onClick={scrollToContactForm}
//                 className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
//               >
//                 Talk to Our Team →
//               </button>
//               <button
//                 onClick={scrollToContactForm}
//                 className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
//               >
//                 Start a Conversation
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Straight Bottom Divider */}
//         <div className="absolute bottom-0 left-0 w-full h-20 bg-gray-50"></div>
//       </section>

//       {/* Projects Grid Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Featured <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
//           </h2>
        
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Discover How We'Ve Transformed Enterprise IT Infrastructure Across Industries
//           </p>
//         </div>

//         {/* Category Filters - Updated with gradient text */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
//                 activeCategory === category
//                   ? "bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white shadow-lg"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {activeCategory !== category && category !== "All" ? (
//                 <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
//                   {category}
//                 </span>
//               ) : (
//                 category
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid - Equal height cards without solution & approach */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project) => (
//             <div
//               key={project.id}
//               className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 flex flex-col h-full"
//             >
//               {/* Gradient Top Bar */}
//               <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
//               <div className="p-6 flex flex-col flex-grow">
//                 {/* Icon and Category */}
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="text-5xl">{project.icon}</div>
//                   <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
//                     {project.category}
//                   </span>
//                 </div>
                
//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                
//                 {/* Description - flex-grow to push button down */}
//                 <p className="text-gray-600 leading-relaxed flex-grow">
//                   {project.description}
//                 </p>
                
//                 {/* View Details Button */}
//                 <button
//                   onClick={() => navigate('/viewdetailspage', { state: { project } })}
//                   className="mt-5 w-full py-2 text-center text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-gradient-to-r hover:from-pink-600 hover:via-yellow-400 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300"
//                 >
//                   View Details →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View More Button - Start a Conversation */}
//         <div className="text-center mt-12">
//           <button
//             onClick={scrollToContactForm}
//             className="px-8 py-3 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
//           >
//             Start a Conversation ⭐
//           </button>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Ready to Transform Your IT Infrastructure?
//           </h2>
//           <p className="text-white/90 max-w-2xl mx-auto mb-8">
//             Join Leading Enterprises That Trust Us For Their Network, Security, And Data Center Solutions
//           </p>
//           <button
//             onClick={scrollToContactForm}
//             className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
//           >
//             Start Your Journey →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectsPage;




// // ProjectsPage.tsx
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// interface Project {
//   id: number;
//   title: string;
//   category: string;
//   description: string;
//   icon: string;
//   gradient: string;
//   image: string | null;
//   client?: string;
//   location?: string;
//   created_at: string;
// }

// const API_BASE_URL = 'http://localhost:5000';

// const ProjectsPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//  const fetchProjects = async () => {
//   try {
//     setLoading(true);
//     const response = await axios.get(`${API_BASE_URL}/api/projects`);
//     console.log("Full API Response:", response.data);
//     if (response.data.success) {
//       console.log("Projects Data:", response.data.data);
//       // Log each project's solution and approach
//       response.data.data.forEach((project: any) => {
//         console.log(`Project: ${project.title}`, {
//           solution: project.solution,
//           approach: project.approach
//         });
//       });
//       setProjects(response.data.data);
//     } else if (Array.isArray(response.data)) {
//       console.log("Array Projects Data:", response.data);
//       setProjects(response.data);
//     }
//   } catch (error) {
//     console.error("Error fetching projects:", error);
//   } finally {
//     setLoading(false);
//   }
// };
//   // Get unique categories from projects
//   const categories = ["All", ...new Set(projects.map(p => p.category))];

//   const filteredProjects = activeCategory === "All" 
//     ? projects 
//     : projects.filter(project => project.category === activeCategory);

//   const scrollToContactForm = () => {
//     navigate('/contact');
//     setTimeout(() => {
//       const contactFormElement = document.getElementById('contact-form');
//       if (contactFormElement) {
//         contactFormElement.scrollIntoView({ behavior: 'smooth' });
//       }
//     }, 100);
//   };

//   const handleImageError = (projectId: number) => {
//     setImageErrors(prev => ({ ...prev, [projectId]: true }));
//   };

//   const getImageUrl = (imagePath: string | null) => {
//     if (!imagePath) return null;
//     // Remove any duplicate /api or extra slashes
//     let cleanPath = imagePath.replace(/^\/api/, '');
//     if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
//     return `${API_BASE_URL}${cleanPath}`;
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading projects...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 mt-4">
//       {/* Hero Section */}
//       <section
//         className="relative py-28 lg:py-36 overflow-hidden bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop')",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-pink-600/85 via-yellow-400/80 to-blue-600/85"></div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
//               <span className="text-sm font-semibold text-white tracking-wide">
//                 🚀 Our Success Stories
//               </span>
//             </div>
//             <h1 className="text-3xl sm:text-3xl lg:text-6xl font-black text-white mb-6 leading-tight">
//               <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-pink-600 to-yellow-600">
//                 Client Success is Our Success
//               </span>
//             </h1>
//             <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
//               Well-Defined Systems, Process And Methodologies Ensuring Smooth Execution
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
//               <button
//                 onClick={scrollToContactForm}
//                 className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
//               >
//                 Talk to Our Team →
//               </button>
//               <button
//                 onClick={scrollToContactForm}
//                 className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
//               >
//                 Start a Conversation
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-0 left-0 w-full h-20 bg-gray-50"></div>
//       </section>

//       {/* Projects Grid Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Featured <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Discover How We've Transformed Enterprise IT Infrastructure Across Industries
//           </p>
//         </div>

//         {/* Category Filters */}
//         {categories.length > 1 && (
//           <div className="flex flex-wrap justify-center gap-3 mb-12">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
//                   activeCategory === category
//                     ? "bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white shadow-lg"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 {activeCategory !== category && category !== "All" ? (
//                   <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
//                     {category}
//                   </span>
//                 ) : (
//                   category
//                 )}
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Projects Grid */}
//         {filteredProjects.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500">No projects found in this category.</p>
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProjects.map((project) => (
//               <div
//                 key={project.id}
//                 className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 flex flex-col h-full"
//               >
//                 <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
//                 {/* Image Section with Fallback */}
//                 <div className="h-48 overflow-hidden bg-gray-100">
//                   {project.image && !imageErrors[project.id] ? (
//                     <img 
//                       src={getImageUrl(project.image)} 
//                       alt={project.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       onError={() => handleImageError(project.id)}
//                     />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
//                       <div className="text-center">
//                         <div className="text-5xl mb-2">{project.icon}</div>
//                         <p className="text-gray-400 text-sm">No image available</p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
                
//                 <div className="p-6 flex flex-col flex-grow">
//                   <div className="flex justify-between items-start mb-4">
//                     <div className="text-5xl">{project.icon}</div>
//                     <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
//                       {project.category}
//                     </span>
//                   </div>
                  
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
//                   <p className="text-gray-600 leading-relaxed flex-grow line-clamp-3">
//                     {project.description}
//                   </p>
                  
//                   {/* Optional: Show client and location if available */}
//                   {(project.client || project.location) && (
//                     <div className="mt-3 pt-3 border-t border-gray-100">
//                       {project.client && (
//                         <p className="text-xs text-gray-500">
//                           <span className="font-medium">Client:</span> {project.client}
//                         </p>
//                       )}
//                       {project.location && (
//                         <p className="text-xs text-gray-500 mt-1">
//                           <span className="font-medium">Location:</span> {project.location}
//                         </p>
//                       )}
//                     </div>
//                   )}
                  
//                   <button
//                     onClick={() => navigate('/viewdetailspage', { state: { project } })}
//                     className="mt-5 w-full py-2 text-center text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-gradient-to-r hover:from-pink-600 hover:via-yellow-400 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300"
//                   >
//                     View Details →
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         <div className="text-center mt-12">
//           <button
//             onClick={scrollToContactForm}
//             className="px-8 py-3 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
//           >
//             Start a Conversation ⭐
//           </button>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Ready to Transform Your IT Infrastructure?
//           </h2>
//           <p className="text-white/90 max-w-2xl mx-auto mb-8">
//             Join Leading Enterprises That Trust Us For Their Network, Security, And Data Center Solutions
//           </p>
//           <button
//             onClick={scrollToContactForm}
//             className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
//           >
//             Start Your Journey →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectsPage;




// ProjectsPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  solution?: string;
  approach?: string;
  icon: string;
  gradient: string;
  image: string | null;
  client?: string;
  location?: string;
  created_at: string;
}

const API_BASE_URL = 'http://localhost:5000';

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/api/projects`);
      console.log("Full API Response:", response.data);
      if (response.data.success) {
        console.log("Projects Data:", response.data.data);
        // Log each project's solution and approach
        response.data.data.forEach((project: any) => {
          console.log(`Project: ${project.title}`, {
            solution: project.solution,
            approach: project.approach
          });
        });
        setProjects(response.data.data);
      } else if (Array.isArray(response.data)) {
        console.log("Array Projects Data:", response.data);
        setProjects(response.data);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get unique categories from projects
  const categories = ["All", ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const scrollToContactForm = () => {
    navigate('/contact');
    setTimeout(() => {
      const contactFormElement = document.getElementById('contact-form');
      if (contactFormElement) {
        contactFormElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  const getImageUrl = (imagePath: string | null) => {
    if (!imagePath) return null;
    let cleanPath = imagePath.replace(/^\/api/, '');
    if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
    return `${API_BASE_URL}${cleanPath}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-4">
      {/* Hero Section */}
      <section
        className="relative py-28 lg:py-36 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/85 via-yellow-400/80 to-blue-600/85"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <span className="text-sm font-semibold text-white tracking-wide">
                🚀 Our Success Stories
              </span>
            </div>
            <h1 className="text-3xl sm:text-3xl lg:text-6xl font-black text-white mb-6 leading-tight">
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-pink-600 to-yellow-600">
                Client Success is Our Success
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Well-Defined Systems, Process And Methodologies Ensuring Smooth Execution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <button
                onClick={scrollToContactForm}
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Talk to Our Team →
              </button>
              <button
                onClick={scrollToContactForm}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gray-50"></div>
      </section>

      {/* Projects Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover How We've Transformed Enterprise IT Infrastructure Across Industries
          </p>
        </div>

        {/* Category Filters */}
        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {activeCategory !== category && category !== "All" ? (
                  <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
                    {category}
                  </span>
                ) : (
                  category
                )}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                {/* Image Section with Fallback */}
                <div className="h-48 overflow-hidden bg-gray-100">
                  {project.image && !imageErrors[project.id] ? (
                    <img 
                      src={getImageUrl(project.image)} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleImageError(project.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="text-center">
                        <div className="text-5xl mb-2">{project.icon}</div>
                        <p className="text-gray-400 text-sm">No image available</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-5xl">{project.icon}</div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Optional: Show client and location if available */}
                  {(project.client || project.location) && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      {project.client && (
                        <p className="text-xs text-gray-500">
                          <span className="font-medium">Client:</span> {project.client}
                        </p>
                      )}
                      {project.location && (
                        <p className="text-xs text-gray-500 mt-1">
                          <span className="font-medium">Location:</span> {project.location}
                        </p>
                      )}
                    </div>
                  )}
                  
                  <button
                    onClick={() => navigate('/viewdetailspage', { 
                      state: { 
                        project: {
                          ...project,
                          solution: project.solution,
                          approach: project.approach
                        }
                      } 
                    })}
                    className="mt-5 w-full py-2 text-center text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-gradient-to-r hover:from-pink-600 hover:via-yellow-400 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <button
            onClick={scrollToContactForm}
            className="px-8 py-3 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Start a Conversation ⭐
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join Leading Enterprises That Trust Us For Their Network, Security, And Data Center Solutions
          </p>
          <button
            onClick={scrollToContactForm}
            className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Start Your Journey →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;