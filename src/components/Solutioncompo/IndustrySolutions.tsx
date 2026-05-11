// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";

// const solutions = [
//   {
//     title: "Emerging Enterprise",
//     image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
//     desc: "An emerging enterprise needs a strong Data Infrastructure and Data Security foundation to support growth while balancing cost, performance, and scalability.",
//     points: [
//       "End-to-end solutions across On-Prem, Cloud & Hybrid",
//       "ZTNA & Work-From-Home security",
//       "Unified platform for Attendance, Access Control & Surveillance",
//       "Data Cabling & Physical Security solutions",
//     ],
//   },
//   {
//     title: "Manufacturing",
//     image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
//     desc: "Industry 4.0 leverages AI, IoT, and cloud technologies. Data is at its core, requiring secure and reliable infrastructure.",
//     points: [
//       "AI Data Centres & OT Security",
//       "Cybersecurity & Network Security",
//       "VDI & Campus Networking",
//       "Ruggedized cabling for harsh environments",
//     ],
//   },
//   {
//     title: "ABC (Architects, Builders & Consultants)",
//     image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
//     desc: "Driving urbanization through smart infrastructure and innovative solutions for scalable and future-ready environments.",
//     points: [
//       "Smart & Digital Building solutions",
//       "Campus Networks & IoT integration",
//       "Fast and scalable infrastructure deployment",
//       "Data Cabling & Physical Security",
//     ],
//   },
//   {
//     title: "Data Centre",
//     image: "https://i.pinimg.com/736x/92/57/12/925712f5118ce5b40818f649364cd84f.jpg",
//     desc: "High availability and scalability are critical in the AI era where massive data is generated continuously.",
//     points: [
//       "Hyperscale Data Centres (100G–1.6T)",
//       "Secure connectivity & physical security",
//       "Liquid cooling & energy-efficient solutions",
//       "Remote power monitoring",
//     ],
//   },
//   {
//     title: "Large Enterprise",
//     image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
//     desc: "Large enterprises require scalable infrastructure to support global operations and complex ecosystems.",
//     points: [
//       "AI Data Centre & Security Operations Centre",
//       "Network Operations Centre (NOC)",
//       "Unified access & surveillance platform",
//       "Scalable data cabling & infrastructure",
//     ],
//   },
// ];

// const IndustrySolutions = () => {
//   return (
//     <section className="relative py-28 bg-gray-50 overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
//         bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
//         opacity-10 blur-[140px] rounded-full" />
//       </div>

//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-20">
           

//             <span className="text-xs uppercase tracking-widest font-semibold mb-4 block bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
//                Industries We Serve
//             </span>

            
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//       Tailored Solutions for <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">Every Sector</span>
//             </h2>

//             <p className="text-gray-500 max-w-2xl mx-auto">
//               Delivering scalable, secure, and future-ready infrastructure across industries.
//             </p>
//           </div>
//         </SectionWrapper>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {solutions.map((item, i) => (
//             <SectionWrapper key={item.title} delay={i * 100}>
//               <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">

//                 {/* Image */}
//                 <div className="h-52 overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-3 
//                   bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 
//                   bg-clip-text text-transparent">
//                     {item.title}
//                   </h3>

//                   <p className="text-sm text-gray-600 mb-4">
//                     {item.desc}
//                   </p>

//                   <ul className="space-y-2">
//                     {item.points.map((point, idx) => (
//                       <li key={idx} className="text-xs text-gray-500 flex items-start gap-2">
//                         <span className="w-2 h-2 mt-1 rounded-full bg-gradient-to-r from-blue-500 to-pink-500" />
//                         {point}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//               </div>
//             </SectionWrapper>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default IndustrySolutions;








// import React, { useState, useEffect } from "react";
// import SectionWrapper from "@/components/SectionWrapper";

// const solutions = [
//   {
//     title: "Emerging Enterprise",
//     image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
//     desc: "An emerging enterprise needs a strong Data Infrastructure and Data Security foundation to support growth while balancing cost, performance, and scalability.",
//     points: [
//       "End-to-end solutions across On-Prem, Cloud & Hybrid",
//       "ZTNA & Work-From-Home security",
//       "Unified platform for Attendance, Access Control & Surveillance",
//       "Data Cabling & Physical Security solutions",
//     ],
//   },
//   {
//     title: "Manufacturing",
//     image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
//     desc: "Industry 4.0 leverages AI, IoT, and cloud technologies. Data is at its core, requiring secure and reliable infrastructure.",
//     points: [
//       "AI Data Centres & OT Security",
//       "Cybersecurity & Network Security",
//       "VDI & Campus Networking",
//       "Ruggedized cabling for harsh environments",
//     ],
//   },
//   {
//     title: "ABC (Architects, Builders & Consultants)",
//     image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
//     desc: "Driving urbanization through smart infrastructure and innovative solutions for scalable and future-ready environments.",
//     points: [
//       "Smart & Digital Building solutions",
//       "Campus Networks & IoT integration",
//       "Fast and scalable infrastructure deployment",
//       "Data Cabling & Physical Security",
//     ],
//   },
//   {
//     title: "Data Centre",
//     image: "https://i.pinimg.com/736x/92/57/12/925712f5118ce5b40818f649364cd84f.jpg",
//     desc: "High availability and scalability are critical in the AI era where massive data is generated continuously.",
//     points: [
//       "Hyperscale Data Centres (100G–1.6T)",
//       "Secure connectivity & physical security",
//       "Liquid cooling & energy-efficient solutions",
//       "Remote power monitoring",
//     ],
//   },
//   {
//     title: "Large Enterprise",
//     image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
//     desc: "Large enterprises require scalable infrastructure to support global operations and complex ecosystems.",
//     points: [
//       "AI Data Centre & Security Operations Centre",
//       "Network Operations Centre (NOC)",
//       "Unified access & surveillance platform",
//       "Scalable data cabling & infrastructure",
//     ],
//   },
// ];

// const IndustrySolutions = () => {
//   const [activeCard, setActiveCard] = useState<number | null>(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="relative py-28 bg-gray-50 overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute inset-0 -z-10">
//         <div
//           className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
//         bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
//         opacity-10 blur-[140px] rounded-full"
//         />
//       </div>

//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-12">
//             <span
//               className="text-xs uppercase tracking-widest font-semibold mb-4 block 
//             bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//             bg-clip-text text-transparent"
//             >
//               Industries We Serve
//             </span>

//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Tailored Solutions for{" "}
//               <span
//                 className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//               bg-clip-text text-transparent"
//               >
//                 Every Sector
//               </span>
//             </h2>

//             <p className="text-gray-500 max-w-2xl mx-auto">
//               Delivering scalable, secure, and future-ready infrastructure across industries.
//             </p>
//           </div>
//         </SectionWrapper>

//         {/* Desktop: Overlapping Scroll Cards */}
//         <div className="hidden md:block">
//           <div className="flex gap-0 pb-4 hide-scrollbar overflow-x-auto justify-center">
//             {solutions.map((item, index) => (
//               <div
//                 key={item.title}
//                 className={`relative flex-shrink-0 w-80 min-h-[460px] bg-white rounded-3xl transition-all duration-500 ${
//                   activeCard === index
//                     ? "scale-105 z-50 shadow-2xl"
//                     : "hover:scale-102 hover:z-40 hover:shadow-xl"
//                 } ${
//                   isLoaded
//                     ? "opacity-100 translate-x-0"
//                     : "opacity-0 translate-x-20"
//                 }`}
//                 style={{
//                   marginLeft: index > 0 ? "-120px" : "0",
//                   zIndex: activeCard === index ? 50 : solutions.length - index,
//                   transitionDelay: isLoaded ? `${index * 100}ms` : "0ms",
//                   transform:
//                     activeCard === index
//                       ? "scale(1.05) translateY(-10px)"
//                       : activeCard !== null && activeCard !== index
//                       ? "scale(0.95)"
//                       : "scale(1)",
//                 }}
//                 onMouseEnter={() => setActiveCard(index)}
//                 onMouseLeave={() => setActiveCard(null)}
//               >
//                 {/* Image */}
//                 <div className="h-48 overflow-hidden rounded-t-3xl">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover transition duration-700"
//                     style={{
//                       transform: activeCard === index ? "scale(1.1)" : "scale(1)",
//                     }}
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-5 flex flex-col flex-1">
//                   <h3
//                     className="text-xl font-bold mb-3 
//                     bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 
//                     bg-clip-text text-transparent"
//                   >
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 mb-4 line-clamp-3">
//                     {item.desc}
//                   </p>
//                   <ul className="space-y-2 mt-auto">
//                     {item.points.slice(0, 3).map((point, idx) => (
//                       <li
//                         key={idx}
//                         className="text-xs text-gray-500 flex items-start gap-2"
//                       >
//                         <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 flex-shrink-0" />
//                         <span className="line-clamp-1">{point}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Hover Effects */}
//                 <div
//                   className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500"
//                   style={{
//                     background:
//                       activeCard === index
//                         ? "linear-gradient(45deg, transparent 96%, #ff0080 96%, #7928ca 97%, #00ffff 98%, transparent 98%)"
//                         : "none",
//                   }}
//                 />
//                 <div
//                   className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 transition-opacity duration-500"
//                   style={{
//                     background:
//                       "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
//                     opacity: activeCard === index ? 1 : 0,
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile/Tablet: Grid Layout */}
//         <div className="md:hidden">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {solutions.map((item, index) => (
//               <div
//                 key={item.title}
//                 className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
//                   isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//                 }`}
//                 style={{
//                   transitionDelay: isLoaded ? `${index * 100}ms` : "0ms",
//                 }}
//               >
//                 <div className="h-40 overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-5">
//                   <h3
//                     className="text-lg font-bold mb-2 
//                     bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 
//                     bg-clip-text text-transparent"
//                   >
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 mb-3 line-clamp-2">
//                     {item.desc}
//                   </p>
//                   <ul className="space-y-1.5">
//                     {item.points.slice(0, 2).map((point, idx) => (
//                       <li key={idx} className="text-xs text-gray-500 flex items-start gap-2">
//                         <span className="w-1.5 h-1.5 mt-1 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 flex-shrink-0" />
//                         <span className="line-clamp-1">{point}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .hide-scrollbar::-webkit-scrollbar {
//           height: 6px;
//         }
//         .hide-scrollbar::-webkit-scrollbar-track {
//           background: #e2e8f0;
//           border-radius: 10px;
//         }
//         .hide-scrollbar::-webkit-scrollbar-thumb {
//           background: #94a3b8;
//           border-radius: 10px;
//         }
//         .hide-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #64748b;
//         }
//         .hide-scrollbar {
//           scroll-behavior: smooth;
//           cursor: grab;
//         }
//         .hide-scrollbar:active {
//           cursor: grabbing;
//         }
//         .hover\\:scale-102:hover {
//           transform: scale(1.02);
//         }
//         .line-clamp-1 {
//           display: -webkit-box;
//           -webkit-line-clamp: 1;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default IndustrySolutions;






// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";

// const solutions = [
//   {
//   title: "Emerging Enterprise",
//   image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
//   desc: "An Emerging Enterprise Needs A Strong Data Infrastructure And Data Security Foundation To Support Growth While Balancing Cost, Performance, And Scalability.",
//   points: [
//     "End-To-End Solutions Across On-Prem, Cloud & Hybrid",
//     "ZTNA & Work-From-Home Security",
//     "Unified Platform For Attendance, Access Control & Surveillance",
//     "Data Cabling & Physical Security Solutions",
//   ],
// },
//   {
//   title: "Large Enterprise",
//   image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
//   desc: "Large Enterprises Require Scalable Infrastructure To Support Global Operations And Complex Ecosystems.",
//   points: [
//     "AI Data Centre & Security Operations Centre",
//     "Network Operations Centre (NOC)",
//     "Unified Access & Surveillance Platform",
//     "Scalable Data Cabling & Infrastructure",
//   ],
// },
//   {
//   title: "Manufacturing",
//   image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
//   desc: "Industry 4.0 Leverages AI, IoT, And Cloud Technologies. Data Is At Its Core, Requiring Secure And Reliable Infrastructure.",
//   points: [
//     "AI Data Centres & OT Security",
//     "Cybersecurity & Network Security",
//     "VDI & Campus Networking",
//     "Ruggedized Cabling For Harsh Environments",
//   ],
// },
  
//  {
//   title: "Data Centre",
//   image: "https://i.pinimg.com/736x/92/57/12/925712f5118ce5b40818f649364cd84f.jpg",
//   desc: "High Availability And Scalability Are Critical In The AI Era Where Massive Data Is Generated Continuously.",
//   points: [
//     "Hyperscale Data Centres (100G–1.6T)",
//     "Secure Connectivity & Physical Security",
//     "Liquid Cooling & Energy-Efficient Solutions",
//     "Remote Power Monitoring",
//   ],
// },
  
//  {
//   title: "ABC (Architects, Builders & Consultants)",
//   image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
//   desc: "Driving Urbanization Through Smart Infrastructure And Innovative Solutions For Scalable And Future-Ready Environments.",
//   points: [
//     "Smart & Digital Building Solutions",
//     "Campus Networks & IoT Integration",
//     "Fast And Scalable Infrastructure Deployment",
//     "Data Cabling & Physical Security",
//   ],
// },
// ];

// const IndustrySolutions = () => {
//   return (
//     <section className="relative py-5 bg-gray-50 overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
//         bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
//         opacity-10 blur-[140px] rounded-full" />
//       </div>

//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-20">

//             <span className="text-xs uppercase tracking-widest font-semibold mb-4 block 
//             bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//             bg-clip-text text-transparent">
//               Industries We Serve
//             </span>

//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Tailored Solutions for{" "}
//               <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//               bg-clip-text text-transparent">
//                 Every Sector
//               </span>
//             </h2>

//             <p className="text-gray-500 max-w-2xl mx-auto">
//               Delivering Scalable, Secure, And Future-Ready Infrastructure Across Industries.
//             </p>

//           </div>
//         </SectionWrapper>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {solutions.map((item, i) => (
//             <SectionWrapper key={item.title} delay={i * 100}>

//               <div className="group h-full flex flex-col min-h-[420px] 
//               bg-white rounded-3xl overflow-hidden 
//               shadow-lg hover:shadow-2xl transition-all duration-500">

//                 {/* Image */}
//                 <div className="h-52 overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 flex flex-col flex-1">

//                   {/* Title */}
//                   <h3 className="text-xl font-bold mb-3 
//                   bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 
//                   bg-clip-text text-transparent">
//                     {item.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-sm text-gray-600 mb-4 flex-grow">
//                     {item.desc}
//                   </p>

//                   {/* Points */}
//                   <ul className="space-y-2 mt-auto">
//                     {item.points.map((point, idx) => (
//                       <li key={idx} className="text-xs text-gray-500 flex items-start gap-2">
//                         <span className="w-2 h-2 mt-1 rounded-full bg-gradient-to-r from-blue-500 to-pink-500" />
//                         {point}
//                       </li>
//                     ))}
//                   </ul>

//                 </div>

//               </div>

//             </SectionWrapper>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default IndustrySolutions;




import React from "react";
import SectionWrapper from "@/components/SectionWrapper";

const solutions = [
  {
    title: "Emerging Enterprise",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
    desc: "An Emerging Enterprise Needs A Strong Data Infrastructure And Data Security Foundation To Support Growth While Balancing Cost, Performance, And Scalability.",
  
    points: [
      "End-To-End Solutions Across On-Prem, Cloud & Hybrid",
      "ZTNA & Work-From-Home Security",
      "Unified Platform For Attendance, Access Control & Surveillance",
      "Data Cabling & Physical Security Solutions",
    ],
  },
  {
    title: "Large Enterprise",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    desc: "Large Enterprises Require Scalable Infrastructure To Support Global Operations And Complex Ecosystems.",
    points: [
      "AI Data Centre & Security Operations Centre",
      "Network Operations Centre (NOC)",
      "Unified Access & Surveillance Platform",
      "Scalable Data Cabling & Infrastructure",
    ],
  },
  {
    title: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    desc: "Industry 4.0 Leverages AI, IoT, And Cloud Technologies. Data Is At Its Core, Requiring Secure And Reliable Infrastructure.",
    points: [
      "AI Data Centres & OT Security",
      "Cybersecurity & Network Security",
      "VDI & Campus Networking",
      "Ruggedized Cabling For Harsh Environments",
    ],
  },
  {
    title: "Data Centre",
    image:
      "https://i.pinimg.com/736x/92/57/12/925712f5118ce5b40818f649364cd84f.jpg",
    desc: "High Availability And Scalability Are Critical In The AI Era Where Massive Data Is Generated Continuously.",
    points: [
      "Hyperscale Data Centres (100G–1.6T)",
      "Secure Connectivity & Physical Security",
      "Liquid Cooling & Energy-Efficient Solutions",
      "Remote Power Monitoring",
    ],
  },
  {
    title: "ABC (Architects, Builders & Consultants)",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    desc: "Driving Urbanization Through Smart Infrastructure And Innovative Solutions For Scalable And Future-Ready Environments.",
    points: [
      "Smart & Digital Building Solutions",
      "Campus Networks & IoT Integration",
      "Fast And Scalable Infrastructure Deployment",
      "Data Cabling & Physical Security",
    ],
  },
];

const IndustrySolutions = () => {
  return (
    <section className="relative py-5 bg-gray-50 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 
          w-[800px] h-[800px] 
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
          opacity-10 blur-[140px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8">

        {/* Heading */}
        <SectionWrapper>
          <div className="text-center mb-20">

            <span
              className="text-xs uppercase tracking-widest font-semibold mb-4 block 
              bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
              bg-clip-text text-transparent"
            >
              Industries We Serve
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tailored Solutions For{" "}
              <span
                className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
                bg-clip-text text-transparent"
              >
                Every Sector
              </span>
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto">
              Delivering Scalable, Secure, And Future-Ready Infrastructure Across Industries.
            </p>

          </div>
        </SectionWrapper>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <SectionWrapper key={item.title} delay={i * 100}>

              <div
                className="group h-full flex flex-col min-h-[420px] 
                bg-white rounded-3xl overflow-hidden 
                shadow-lg hover:shadow-2xl transition-all duration-500"
              >

                {/* Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-3 
                    bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 
                    bg-clip-text text-transparent"
                  >
                    {item.title}
                  </h3>

                  {/* Description + Points */}
                  <div className="flex flex-col">

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Points */}
                    <ul className="mt-2 space-y-1">
                      {item.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-gray-500 flex items-start gap-2"
                        >
                          <span
                            className="w-2 h-2 mt-1 rounded-full 
                            bg-gradient-to-r from-blue-500 to-pink-500"
                          />

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>

              </div>

            </SectionWrapper>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustrySolutions;