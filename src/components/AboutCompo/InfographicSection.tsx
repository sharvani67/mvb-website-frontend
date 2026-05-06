// import React from "react";
// import { Lightbulb, Clock, Users, Settings, TrendingUp } from "lucide-react";

// const items = [
//   { icon: Lightbulb, title: "YOUR TITLE HERE" },
//   { icon: Clock, title: "YOUR TITLE HERE" },
//   { icon: Users, title: "YOUR TITLE HERE" },
//   { icon: Settings, title: "YOUR TITLE HERE" },
// ];

// export default function InfographicSection() {
//   return (
//     <section className="relative w-full py-24 bg-slate-100 overflow-hidden">

//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-30"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab)"
//         }}
//       />

//       <div className="relative max-w-6xl mx-auto flex items-center gap-16">

//         {/* LEFT INFOGRAPHIC */}
//         <div className="relative w-[360px] h-[360px] flex items-center justify-center">

//           {/* outer ring */}
//           <div className="absolute w-full h-full rounded-full border-[24px] border-white shadow-xl"></div>

//           {/* inner circle */}
//           <div className="w-[220px] h-[220px] rounded-full bg-teal-700 flex flex-col items-center justify-center text-white text-center">
//             <TrendingUp size={40} />
//             <h3 className="font-bold mt-2">INFOGRAPHIC</h3>
//             <p className="text-sm opacity-80">TITLE GOES HERE</p>
//           </div>

//           {/* SVG connectors */}
//           <svg
//             className="absolute left-[300px] top-0"
//             width="200"
//             height="360"
//             fill="none"
//           >
//             <path
//               d="M0 60 C80 60 80 60 140 60"
//               stroke="#6b7280"
//               strokeWidth="2"
//             />
//             <path
//               d="M0 140 C80 140 80 140 140 140"
//               stroke="#6b7280"
//               strokeWidth="2"
//             />
//             <path
//               d="M0 220 C80 220 80 220 140 220"
//               stroke="#6b7280"
//               strokeWidth="2"
//             />
//             <path
//               d="M0 300 C80 300 80 300 140 300"
//               stroke="#6b7280"
//               strokeWidth="2"
//             />
//           </svg>

//         </div>

//         {/* RIGHT CARDS */}
//         <div className="flex flex-col gap-10">

//           {items.map((item, i) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={i}
//                 className="flex items-center bg-white rounded-full shadow-lg w-[420px] p-5 relative"
//               >
//                 {/* icon circle */}
//                 <div className="absolute -left-10 w-20 h-20 rounded-full bg-teal-700 flex items-center justify-center shadow-lg border-4 border-white">
//                   <Icon color="white" size={30} />
//                 </div>

//                 <div className="ml-12">
//                   <p className="text-xs text-gray-500">INFOGRAPHIC</p>
//                   <h4 className="font-bold text-gray-800">
//                     {item.title}
//                   </h4>
//                   <p className="text-sm text-gray-500 mt-1">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   </p>
//                 </div>
//               </div>
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// }





// import React from "react";
// import { Lightbulb, Clock, Users, Settings, TrendingUp } from "lucide-react";

// const items = [
//   { icon: Lightbulb, title: "YOUR TITLE HERE" },
//   { icon: Clock, title: "YOUR TITLE HERE" },
//   { icon: Users, title: "YOUR TITLE HERE" },
//   { icon: Settings, title: "YOUR TITLE HERE" },
// ];

// export default function InfographicSection() {
//   return (
//     <section className="relative w-full py-24 bg-slate-100 overflow-hidden">

//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-30"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab)"
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto flex items-center gap-20 px-6">

//         {/* LEFT INFOGRAPHIC */}
//         <div className="relative w-[360px] h-[360px] flex items-center justify-center">

//           {/* outer ring */}
//           <div className="absolute w-full h-full rounded-full border-[24px] border-white shadow-xl"></div>

//           {/* inner circle */}
//           <div className="w-[220px] h-[220px] rounded-full bg-teal-700 flex flex-col items-center justify-center text-white text-center">
//             <TrendingUp size={40} />
//             <h3 className="font-bold mt-2">INFOGRAPHIC</h3>
//             <p className="text-sm opacity-80">TITLE GOES HERE</p>
//           </div>

//           {/* Connector Lines */}
//           <svg
//             className="absolute left-[300px] top-0"
//             width="220"
//             height="360"
//             fill="none"
//           >
//             <path
//               d="M0 60 C80 60 80 60 160 60"
//               stroke="#6b7280"
//               strokeWidth="2"
//             />
//             <path
//               d="M0 140 C80 140 80 140 160 140"
//               stroke="#6b7280"
//               strokeWidth="2"
//             />
//             <path
//               d="M0 220 C80 220 80 220 160 220"
//               stroke="#6b7280"
//               strokeWidth="2"
//             />
//             <path
//               d="M0 300 C80 300 80 300 160 300"
//               stroke="#6b7280"
//               strokeWidth="2"
//             />
//           </svg>
//         </div>

//         {/* RIGHT INFOGRAPHIC CARDS */}
//         <div className="flex flex-col gap-10">

//           {items.map((item, i) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={i}
//                 className="flex items-center bg-white rounded-full shadow-lg w-[600px] p-6 relative"
//               >
//                 {/* Icon Circle */}
//                 <div className="absolute -left-10 w-20 h-20 rounded-full bg-teal-700 flex items-center justify-center shadow-lg border-4 border-white">
//                   <Icon color="white" size={30} />
//                 </div>

//                 {/* Text */}
//                 <div className="ml-14">
//                   <p className="text-xs text-gray-500">INFOGRAPHIC</p>

//                   <h4 className="font-bold text-gray-800 text-lg">
//                     {item.title}
//                   </h4>

//                   <p className="text-sm text-gray-500 mt-1">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   </p>
//                 </div>
//               </div>
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// }




// import React from "react";
// import { Globe, TrendingUp } from "lucide-react";

// const industries = [
//   {
//     title: "Emerging Enterprise",
//     desc: "Helping growing businesses deploy scalable IT infrastructure and secure networks.",
//   },
//   {
//     title: "Manufacturing",
//     desc: "Reliable industrial networking, automation infrastructure and plant connectivity.",
//   },
//   {
//     title: "Large Enterprise",
//     desc: "Enterprise-grade IT infrastructure, high availability networks and security systems.",
//   },
//   {
//     title: "Data Centers",
//     desc: "Advanced cabling, cooling, storage infrastructure and AI-ready environments.",
//   },
// ];

// export default function IndustriesInfographicSection() {
//   return (
//     <section className="relative py-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-20"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab)"
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-5">
//             <Globe className="w-4 h-4 text-emerald-600" />
//             <span className="text-sm font-medium text-emerald-700">
//               Where We Serve
//             </span>
//           </div>

//           <h2 className="text-5xl font-bold text-gray-900 mb-5">
//             Industries We Empower
//           </h2>

//           <p className="text-xl text-gray-600">
//             Delivering reliable IT infrastructure solutions across multiple
//             industries with scalable and secure technology.
//           </p>
//         </div>

//         {/* Layout */}
//         <div className="flex items-center justify-center gap-24">

//           {/* LEFT INFOGRAPHIC CIRCLE */}
//           <div className="relative w-[380px] h-[380px] flex items-center justify-center">

//             {/* outer ring */}
//             <div className="absolute w-full h-full rounded-full border-[26px] border-white shadow-xl"></div>

//             {/* inner circle */}
//             <div className="w-[230px] h-[230px] rounded-full bg-teal-700 flex flex-col items-center justify-center text-white text-center">
//               <TrendingUp size={42} />
//               <h3 className="font-bold mt-2 text-lg">Industries</h3>
//               <p className="text-sm opacity-80">We Empower</p>
//             </div>

//             {/* Connector lines */}
//             <svg
//               className="absolute left-[320px] top-0"
//               width="220"
//               height="420"
//               fill="none"
//             >
//               {industries.map((_, i) => (
//                 <path
//                   key={i}
//                   d={`M0 ${80 + i * 90} C80 ${80 + i * 90} 80 ${80 + i * 90} 160 ${80 + i * 90}`}
//                   stroke="#9ca3af"
//                   strokeWidth="2"
//                 />
//               ))}
//             </svg>

//           </div>

//           {/* RIGHT CARDS */}
//           <div className="flex flex-col gap-12">

//             {industries.map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center bg-white rounded-full shadow-lg w-[720px] p-6 relative"
//               >

//                 {/* Icon circle */}
//                 <div className="absolute -left-12 w-24 h-24 rounded-full bg-teal-700 flex items-center justify-center shadow-lg border-4 border-white">
//                   <Globe className="text-white" size={32} />
//                 </div>

//                 {/* Text */}
//                 <div className="ml-16">
//                   <p className="text-xs text-gray-500 uppercase tracking-wider">
//                     Industry
//                   </p>

//                   <h4 className="font-bold text-gray-900 text-xl">
//                     {item.title}
//                   </h4>

//                   <p className="text-sm text-gray-600 mt-1 max-w-xl">
//                     {item.desc}
//                   </p>
//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




// import React from "react";
// import { Globe, TrendingUp } from "lucide-react";

// const industries = [
//   {
//     title: "Emerging Enterprise",
//     desc: "Helping growing businesses deploy scalable IT infrastructure and secure networks.",
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
//   },
//   {
//     title: "Manufacturing",
//     desc: "Reliable industrial networking, automation infrastructure and plant connectivity.",
//     image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
//   },
//   {
//     title: "Large Enterprise",
//     desc: "Enterprise-grade IT infrastructure, high availability networks and security systems.",
//     image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
//   },
//   {
//     title: "Data Centers",
//     desc: "Advanced cabling, cooling, storage infrastructure and AI-ready environments.",
//     image: "https://images.unsplash.com/photo-1581092919535-7146ff1a5909",
//   },
// ];

// export default function IndustriesInfographicSection() {
//   return (
//     <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-20"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab)"
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center max-w-3xl mx-auto mb-20">

//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
//             <Globe className="w-4 h-4 text-emerald-600" />
//             <span className="text-sm font-medium text-emerald-700">
//               Where We Serve
//             </span>
//           </div>

//           <h2 className="text-5xl font-bold text-gray-900 mb-6">
//             Industries We Empower
//           </h2>

//           <p className="text-xl text-gray-600">
//             Delivering reliable IT infrastructure solutions across multiple
//             industries with scalable and secure technology.
//           </p>

//         </div>

//         {/* Main Layout */}
//         <div className="flex items-center justify-center gap-28">

//           {/* LEFT INFOGRAPHIC */}
//           <div className="relative w-[380px] h-[380px] flex items-center justify-center">

//             <div className="absolute w-full h-full rounded-full border-[26px] border-white shadow-xl"></div>

//             <div className="w-[230px] h-[230px] rounded-full bg-teal-700 flex flex-col items-center justify-center text-white text-center">
//               <TrendingUp size={42} />
//               <h3 className="font-bold mt-2 text-lg">Industries</h3>
//               <p className="text-sm opacity-80">We Empower</p>
//             </div>

//             {/* Connector Lines */}
//             <svg
//               className="absolute left-[320px] top-0"
//               width="220"
//               height="420"
//               fill="none"
//             >
//               {industries.map((_, i) => (
//                 <path
//                   key={i}
//                   d={`M0 ${80 + i * 90} C80 ${80 + i * 90} 80 ${80 + i * 90} 160 ${80 + i * 90}`}
//                   stroke="#9ca3af"
//                   strokeWidth="2"
//                 />
//               ))}
//             </svg>

//           </div>

//           {/* RIGHT CARDS */}
//           <div className="flex flex-col gap-12">

//             {industries.map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center bg-white rounded-full shadow-lg w-[750px] p-6 relative"
//               >

//                 {/* Image circle */}
//                 <div className="absolute -left-12 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">

//                   <img
//                     src={item.image}
//                     className="w-full h-full object-cover"
//                   />

//                 </div>

//                 {/* Content */}
//                 <div className="ml-16">

//                   <p className="text-xs text-gray-500 uppercase tracking-wider">
//                     Industry
//                   </p>

//                   <h4 className="font-bold text-gray-900 text-xl">
//                     {item.title}
//                   </h4>

//                   <p className="text-sm text-gray-600 mt-1 max-w-xl">
//                     {item.desc}
//                   </p>

//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import { Globe, TrendingUp, Factory, Building2, Server } from "lucide-react";

// const industries = [
//   {
//     title: "Emerging Enterprise",
//     desc: "Helping growing businesses deploy scalable IT infrastructure and secure networks.",
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
//     icon: Globe,
//   },
//   {
//     title: "Manufacturing",
//     desc: "Reliable industrial networking, automation infrastructure and plant connectivity.",
//     image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
//     icon: Factory,
//   },
//   {
//     title: "Large Enterprise",
//     desc: "Enterprise-grade IT infrastructure, high availability networks and security systems.",
//     image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
//     icon: Building2,
//   },
//   {
//     title: "Data Centers",
//     desc: "Advanced cabling, cooling, storage infrastructure and AI-ready environments.",
//     image: "https://images.unsplash.com/photo-1581092919535-7146ff1a5909",
//     icon: Server,
//   },
// ];

// export default function IndustriesInfographicSection() {
//   return (
//     <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-20"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab)"
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center max-w-3xl mx-auto mb-20">

//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
//             <Globe className="w-4 h-4 text-emerald-600" />
//             <span className="text-sm font-medium text-emerald-700">
//               Where We Serve
//             </span>
//           </div>

//           <h2 className="text-5xl font-bold text-gray-900 mb-6">
//             Industries We Empower
//           </h2>

//           <p className="text-xl text-gray-600">
//             Delivering reliable IT infrastructure solutions across multiple
//             industries with scalable and secure technology.
//           </p>

//         </div>

//         {/* Main Layout */}
//         <div className="flex items-center justify-center gap-28">

//           {/* LEFT INFOGRAPHIC */}
//           <div className="relative w-[380px] h-[380px] flex items-center justify-center">

//             <div className="absolute w-full h-full rounded-full border-[26px] border-white shadow-xl"></div>

//             <div className="w-[230px] h-[230px] rounded-full bg-teal-700 flex flex-col items-center justify-center text-white text-center">
//               <TrendingUp size={42} />
//               <h3 className="font-bold mt-2 text-lg">Industries</h3>
//               <p className="text-sm opacity-80">We Empower</p>
//             </div>

//             {/* Connector Lines */}
//             <svg
//               className="absolute left-[320px] top-0"
//               width="220"
//               height="420"
//               fill="none"
//             >
//               {industries.map((_, i) => (
//                 <path
//                   key={i}
//                   d={`M0 ${80 + i * 90} C80 ${80 + i * 90} 80 ${80 + i * 90} 160 ${80 + i * 90}`}
//                   stroke="#9ca3af"
//                   strokeWidth="2"
//                 />
//               ))}
//             </svg>

//           </div>

//           {/* RIGHT CARDS */}
//           <div className="flex flex-col gap-12">

//             {industries.map((item, i) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={i}
//                   className="flex items-center justify-between bg-white rounded-full shadow-lg w-[750px] p-6 relative"
//                 >

//                   {/* LEFT ICON CIRCLE */}
//                   <div className="absolute -left-12 w-24 h-24 rounded-full bg-teal-700 flex items-center justify-center shadow-lg border-4 border-white">
//                     <Icon size={34} className="text-white" />
//                   </div>

//                   {/* TEXT */}
//                   <div className="ml-16 max-w-xl">

//                     <p className="text-xs text-gray-500 uppercase tracking-wider">
//                       Industry
//                     </p>

//                     <h4 className="font-bold text-gray-900 text-xl">
//                       {item.title}
//                     </h4>

//                     <p className="text-sm text-gray-600 mt-1">
//                       {item.desc}
//                     </p>

//                   </div>

//                   {/* RIGHT IMAGE */}
//                   <div className="w-32 h-20 rounded-lg overflow-hidden shadow-md">

//                     <img
//                       src={item.image}
//                       className="w-full h-full object-cover"
//                     />

//                   </div>

//                 </div>
//               );
//             })}

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }





// import React from "react";
// import { Globe, TrendingUp, Settings, Building, Database } from "lucide-react";

// const industries = [
//   {
//     title: "Emerging Enterprise",
//     desc: "Helping growing businesses deploy scalable IT infrastructure and secure networks.",
//     icon: <Globe size={26} />,
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
//   },
//   {
//     title: "Manufacturing",
//     desc: "Reliable industrial networking, automation infrastructure and plant connectivity.",
//     icon: <Settings size={26} />,
//     image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
//   },
//   {
//     title: "Large Enterprise",
//     desc: "Enterprise-grade IT infrastructure, high availability networks and security systems.",
//     icon: <Building size={26} />,
//     image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
//   },
//   {
//     title: "Data Centers",
//     desc: "Advanced cabling, cooling, storage infrastructure and AI-ready environments.",
//     icon: <Database size={26} />,
//     image: "https://images.unsplash.com/photo-1581092919535-7146ff1a5909",
//   },
// ];

// export default function IndustriesInfographicSection() {
//   return (
//     <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-20"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab)"
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center max-w-3xl mx-auto mb-20">

//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
//             <Globe className="w-4 h-4 text-emerald-600" />
//             <span className="text-sm font-medium text-emerald-700">
//               Where We Serve
//             </span>
//           </div>

//           <h2 className="text-5xl font-bold text-gray-900 mb-6">
//             Industries We Empower
//           </h2>

//           <p className="text-xl text-gray-600">
//             Delivering reliable IT infrastructure solutions across multiple
//             industries with scalable and secure technology.
//           </p>

//         </div>

//         {/* Main Layout */}
//         <div className="flex items-center justify-center gap-28">

//           {/* LEFT INFOGRAPHIC */}
//           <div className="relative w-[380px] h-[380px] flex items-center justify-center">

//             <div className="absolute w-full h-full rounded-full border-[26px] border-white shadow-xl"></div>

//             <div className="w-[230px] h-[230px] rounded-full bg-teal-700 flex flex-col items-center justify-center text-white text-center">
//               <TrendingUp size={42} />
//               <h3 className="font-bold mt-2 text-lg">Industries</h3>
//               <p className="text-sm opacity-80">We Empower</p>
//             </div>

//             {/* Side Icons */}
//             {industries.map((item, i) => (
//               <div
//                 key={i}
//                 className="absolute left-[320px] flex items-center"
//                 style={{ top: `${70 + i * 85}px` }}
//               >
//                 <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-teal-700">
//                   {item.icon}
//                 </div>
//               </div>
//             ))}

//             {/* Connector Lines */}
//             <svg
//               className="absolute left-[320px] top-0"
//               width="220"
//               height="420"
//               fill="none"
//             >
//               {industries.map((_, i) => (
//                 <path
//                   key={i}
//                   d={`M0 ${80 + i * 85} C80 ${80 + i * 85} 80 ${80 + i * 85} 160 ${80 + i * 85}`}
//                   stroke="#9ca3af"
//                   strokeWidth="2"
//                 />
//               ))}
//             </svg>

//           </div>

//           {/* RIGHT CARDS */}
//           <div className="flex flex-col gap-8">

//             {industries.map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center justify-between bg-white rounded-full shadow-lg w-[750px] px-8 py-4"
//               >

//                 {/* Content */}
//                 <div className="max-w-xl">

//                   <p className="text-xs text-gray-500 uppercase tracking-wider">
//                     Industry
//                   </p>

//                   <h4 className="font-bold text-gray-900 text-lg">
//                     {item.title}
//                   </h4>

//                   <p className="text-sm text-gray-600 mt-1">
//                     {item.desc}
//                   </p>

//                 </div>

//                 {/* Right Circular Image */}
//                 <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md ml-6">

//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                   />

//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




// import React from "react";
// import { Globe, TrendingUp, Settings, Building, Database } from "lucide-react";

// const industries = [
//   {
//     title: "Emerging Enterprise",
//     desc: "Helping growing businesses deploy scalable IT infrastructure and secure networks.",
//     icon: <Globe size={26} />,
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
//   },
//   {
//     title: "Manufacturing",
//     desc: "Reliable industrial networking, automation infrastructure and plant connectivity.",
//     icon: <Settings size={26} />,
//     image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
//   },
//   {
//     title: "Large Enterprise",
//     desc: "Enterprise-grade IT infrastructure, high availability networks and security systems.",
//     icon: <Building size={26} />,
//     image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
//   },
//   {
//     title: "Data Centers",
//     desc: "Advanced cabling, cooling, storage infrastructure and AI-ready environments.",
//     icon: <Database size={26} />,
//     image: "https://images.unsplash.com/photo-1581092919535-7146ff1a5909",
//   },
// ];

// export default function IndustriesInfographicSection() {
//   return (
//     <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-20"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab)"
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center max-w-3xl mx-auto mb-20">

//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
//             <Globe className="w-4 h-4 text-emerald-600" />
//             <span className="text-sm font-medium text-emerald-700">
//               Where We Serve
//             </span>
//           </div>

//           <h2 className="text-5xl font-bold text-gray-900 mb-6">
//             Industries We Empower
//           </h2>

//           <p className="text-xl text-gray-600">
//             Delivering reliable IT infrastructure solutions across industries
//             with scalable and secure technology.
//           </p>

//         </div>

//         {/* Layout */}
//         <div className="flex items-center justify-center gap-28">

//           {/* LEFT INFOGRAPHIC */}
//           <div className="relative w-[380px] h-[380px] flex items-center justify-center">

//             <div className="absolute w-full h-full rounded-full border-[26px] border-white shadow-xl"></div>

//             <div className="w-[230px] h-[230px] rounded-full bg-teal-700 flex flex-col items-center justify-center text-white text-center">
//               <TrendingUp size={42} />
//               <h3 className="font-bold mt-2 text-lg">Industries</h3>
//               <p className="text-sm opacity-80">We Empower</p>
//             </div>

//             {/* Connector Lines */}
//             <svg
//               className="absolute left-[320px] top-0"
//               width="220"
//               height="420"
//               fill="none"
//             >
//               {industries.map((_, i) => (
//                 <path
//                   key={i}
//                   d={`M0 ${80 + i * 85} C80 ${80 + i * 85} 80 ${80 + i * 85} 160 ${80 + i * 85}`}
//                   stroke="#9ca3af"
//                   strokeWidth="2"
//                 />
//               ))}
//             </svg>

//           </div>

//           {/* RIGHT CARDS */}
//           <div className="flex flex-col gap-8">

//             {industries.map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center justify-between bg-white rounded-full shadow-lg w-[750px] px-8 py-4 relative"
//               >

//                 {/* Left Icon */}
//                 <div className="absolute -left-8 w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-teal-700 border">
//                   {item.icon}
//                 </div>

//                 {/* Content */}
//                 <div className="ml-12 max-w-xl">

//                   <p className="text-xs text-gray-500 uppercase tracking-wider">
//                     Industry
//                   </p>

//                   <h4 className="font-bold text-gray-900 text-lg">
//                     {item.title}
//                   </h4>

//                   <p className="text-sm text-gray-600 mt-1">
//                     {item.desc}
//                   </p>

//                 </div>

//                 {/* Bigger Circular Image */}
//                 <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md ml-6">

//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                   />

//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import {
//   Globe,
//   TrendingUp,
//   Settings,
//   Building,
//   Database
// } from "lucide-react";

// const industries = [
//   {
//     title: "Emerging Enterprise",
//     desc: "Helping growing businesses deploy scalable IT infrastructure and secure networks.",
//     icon: Globe,
//     image:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500",
//   },
//   {
//     title: "Manufacturing",
//     desc: "Reliable industrial networking, automation infrastructure and plant connectivity.",
//     icon: Settings,
//     image:
//       "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=500",
//   },
//   {
//     title: "Large Enterprise",
//     desc: "Enterprise-grade IT infrastructure, high availability networks and security systems.",
//     icon: Building,
//     image:
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500",
//   },
//   {
//     title: "Data Centers",
//     desc: "Advanced cabling, cooling, storage infrastructure and AI-ready environments.",
//     icon: Database,
//     image:
//       "https://i.pinimg.com/736x/a9/5a/11/a95a11bdf20ce348156e4ad6e7453c66.jpg",
//   },
// ];

// export default function IndustriesInfographicSection() {
//   return (
//     <section className="relative py-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-20"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab)"
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center max-w-3xl mx-auto mb-20">

//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
//             <Globe className="w-4 h-4 text-emerald-600" />
//             <span className="text-sm font-medium text-emerald-700">
//               Where We Serve
//             </span>
//           </div>

//           <h2 className="text-5xl font-bold text-gray-900 mb-6">
//             Industries We Empower
//           </h2>

//           <p className="text-xl text-gray-600">
//             Delivering reliable IT infrastructure solutions across industries
//             with scalable and secure technology.
//           </p>

//         </div>

//         {/* Layout */}
//         <div className="flex items-center justify-center gap-28">

//           {/* LEFT INFOGRAPHIC */}
//           <div className="relative w-[380px] h-[380px] flex items-center justify-center">

//             <div className="absolute w-full h-full rounded-full border-[26px] border-white shadow-xl"></div>

//             <div className="w-[230px] h-[230px] rounded-full bg-teal-700 flex flex-col items-center justify-center text-white text-center">
//               <TrendingUp size={42} />
//               <h3 className="font-bold mt-2 text-lg">Industries</h3>
//               <p className="text-sm opacity-80">We Empower</p>
//             </div>

//             {/* Connector Lines */}
//             <svg
//               className="absolute left-[320px] top-0"
//               width="220"
//               height="420"
//               fill="none"
//             >
//               {industries.map((_, i) => {
//                 const y = 80 + i * 85;

//                 return (
//                   <path
//                     key={i}
//                     d={`M0 ${y} C80 ${y} 80 ${y} 160 ${y}`}
//                     stroke="#9ca3af"
//                     strokeWidth="2"
//                   />
//                 );
//               })}
//             </svg>

//           </div>

//           {/* RIGHT CARDS */}
//           <div className="flex flex-col gap-7">

//             {industries.map((item, i) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={i}
//                   className="flex items-center justify-between bg-white rounded-full shadow-lg w-[750px] px-8 py-3 relative"
//                 >

//                   {/* LEFT ICON */}
//                   <div className="absolute -left-8 w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-emerald-500 text-teal-700">
//                     <Icon size={24} />
//                   </div>

//                   {/* TEXT */}
//                   <div className="ml-12 max-w-xl">

//                     <p className="text-xs text-gray-500 uppercase tracking-wider">
//                       Industry
//                     </p>

//                     <h4 className="font-bold text-gray-900 text-lg">
//                       {item.title}
//                     </h4>

//                     <p className="text-sm text-gray-600 mt-1">
//                       {item.desc}
//                     </p>

//                   </div>

//                   {/* RIGHT IMAGE */}
//                   <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md ml-6">

//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-full object-cover"
//                     />

//                   </div>

//                 </div>
//               );
//             })}

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }







import React from "react";
import {
  Globe,
  TrendingUp,
  Settings,
  Building,
  Database
} from "lucide-react";

const industries = [
  {
    title: "Emerging Enterprise",
    desc: "Helping growing businesses deploy scalable IT infrastructure and secure networks.",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500",
  },
  {
    title: "Manufacturing",
    desc: "Reliable industrial networking, automation infrastructure and plant connectivity.",
    icon: Settings,
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=500",
  },
  {
    title: "Large Enterprise",
    desc: "Enterprise-grade IT infrastructure, high availability networks and security systems.",
    icon: Building,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500",
  },
  {
    title: "Data Centers",
    desc: "Advanced cabling, cooling, storage infrastructure and AI-ready environments.",
    icon: Database,
    image:
      "https://i.pinimg.com/736x/a9/5a/11/a95a11bdf20ce348156e4ad6e7453c66.jpg",
  },
];

export default function IndustriesInfographicSection() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab)"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-emerald-100 rounded-full mb-4 md:mb-6">
            <Globe className="w-3 h-3 md:w-4 md:h-4 text-emerald-600" />
            <span className="text-xs md:text-sm font-medium text-emerald-700">
              Where We Serve
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Industries We Empower
          </h2>

          <p className="text-base md:text-xl text-gray-600 px-4">
            Delivering reliable IT infrastructure solutions across industries
            with scalable and secure technology.
          </p>

        </div>

        {/* Layout - Stack on mobile, side by side on larger screens */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-28">

          {/* LEFT INFOGRAPHIC - Hidden on mobile, visible on lg screens */}
          <div className="hidden lg:flex relative w-[280px] xl:w-[380px] h-[280px] xl:h-[380px] items-center justify-center flex-shrink-0">

            <div className="absolute w-full h-full rounded-full border-[20px] xl:border-[26px] border-white shadow-xl"></div>

            <div className="w-[160px] xl:w-[230px] h-[160px] xl:h-[230px] rounded-full bg-teal-700 flex flex-col items-center justify-center text-white text-center">
              <TrendingUp size={32} className="xl:w-[42px] xl:h-[42px]" />
              <h3 className="font-bold mt-2 text-sm xl:text-lg">Industries</h3>
              <p className="text-xs xl:text-sm opacity-80">We Empower</p>
            </div>

            {/* Connector Lines */}
            <svg
              className="absolute left-[220px] xl:left-[320px] top-0"
              width="180"
              xl="220"
              height="320"
              xl="420"
              fill="none"
            >
              {industries.map((_, i) => {
                const y = 60 + i * 65;

                return (
                  <path
                    key={i}
                    d={`M0 ${y} C60 ${y} 60 ${y} 120 ${y}`}
                    stroke="#9ca3af"
                    strokeWidth="2"
                  />
                );
              })}
            </svg>

          </div>

          {/* Mobile Circular Indicator - Visible only on mobile */}
          <div className="lg:hidden flex items-center justify-center mb-4">
            <div className="w-32 h-32 rounded-full bg-teal-700 flex flex-col items-center justify-center text-white text-center shadow-xl">
              <TrendingUp size={28} />
              <h3 className="font-bold mt-1 text-sm">Industries</h3>
              <p className="text-xs opacity-80">We Empower</p>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-4 md:gap-6 w-full max-w-3xl">

            {industries.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-2xl sm:rounded-full shadow-lg px-4 sm:px-6 md:px-8 py-4 sm:py-3 relative hover:shadow-xl transition-shadow duration-300"
                >

                  {/* LEFT ICON - Repositioned for mobile */}
                  <div className="flex items-center gap-4 sm:gap-0 sm:absolute sm:-left-8 mb-3 sm:mb-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-emerald-500 text-teal-700">
                      <Icon size={20} className="sm:w-[22px] sm:h-[22px] md:w-6 md:h-6" />
                    </div>
                    
                    {/* Mobile Title - Visible only on mobile */}
                    <h4 className="sm:hidden font-bold text-gray-900 text-base">
                      {item.title}
                    </h4>
                  </div>

                  {/* TEXT */}
                  <div className="sm:ml-12 w-full sm:max-w-xl">
                    <p className="hidden sm:block text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Industry
                    </p>

                    <h4 className="hidden sm:block font-bold text-gray-900 text-base md:text-lg">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-1 pr-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="mt-3 sm:mt-0 self-end sm:self-auto w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-md ml-auto sm:ml-6 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}