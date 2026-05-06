// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";

// const clients = [
//   "F5 Networks",
//   "MathWorks",
//   "Anthem Bioscience",
//   "String Bio",
//   "UNext Learning",
//   "SIDVIN",
//   "TADME",
//   "Hitachi",
//   "Course5i",
//   "McAfee",
//   "Brigade",
//   "IWPS",
//   "The School of RAYA",
//   "OLA",
//   "Altisource",
//   "VMware",
// ];

// const ClientsSection = () => {
//   return (
//     <section className="relative py-28 overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] 
//         bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 
//         opacity-10 blur-[120px] rounded-full" />
//       </div>

//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-16">

//             <span className="text-xs uppercase tracking-widest font-semibold mb-4 block 
//             bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 
//             bg-clip-text text-transparent">
//               Trusted By
//             </span>

//             <h2 className="text-4xl sm:text-5xl font-black mb-4">
//               <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 
//               bg-clip-text text-transparent">
//                 Our Clients
//               </span>
//             </h2>

//             <p className="text-gray-500 max-w-2xl mx-auto">
//               We are proud to collaborate with industry-leading organizations across diverse sectors.
//             </p>

//           </div>
//         </SectionWrapper>

//         {/* Clients Grid */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {clients.map((client, i) => (
//             <SectionWrapper key={client} delay={i * 80}>
//               <div className="group relative p-6 rounded-2xl 
//               bg-white/60 backdrop-blur-xl border border-white/20 
//               shadow-md hover:shadow-xl hover:scale-105 
//               transition-all duration-500 text-center">

//                 {/* Hover Glow */}
//                 <div className="absolute inset-0 rounded-2xl 
//                 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-pink-600/20 
//                 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                 {/* Client Name */}
//                 <h3 className="text-sm font-semibold text-gray-700 group-hover:text-transparent 
//                 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-500 group-hover:to-pink-600 
//                 group-hover:bg-clip-text transition-all duration-500">
//                   {client}
//                 </h3>

//               </div>
//             </SectionWrapper>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ClientsSection;





// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";

// const clients = [
//   "F5 Networks",
//   "MathWorks",
//   "Anthem Bioscience",
//   "String Bio",
//   "UNext Learning",
//   "SIDVIN",
//   "TADME",
//   "Hitachi",
//   "Course5i",
//   "McAfee",
//   "Brigade",
//   "IWPS",
//   "The School of RAYA",
//   "OLA",
//   "Altisource",
//   "VMware",
// ];

// const ClientsSection = () => {
//   return (
//     <section className="relative py-28 overflow-hidden bg-gradient-to-b from-white to-gray-50">

//       {/* Background Glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
//         bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
//         opacity-10 blur-[140px] rounded-full" />
//       </div>

//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-16">
           
//             <span className="text-xs uppercase tracking-widest font-semibold mb-4 block bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
//               Trusted By
//             </span>


//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//         Our <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">Clients</span>
//             </h2>

//             <p className="text-gray-500 max-w-2xl mx-auto">
//               Powering success for industry leaders across the globe.
//             </p>
//           </div>
//         </SectionWrapper>

//         {/* Marquee Wrapper */}
//         <div className="relative overflow-hidden">

//           {/* Gradient fade edges */}
//           <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
//           <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

//           {/* Scrolling Track */}
//           <div className="flex animate-scroll gap-6 w-max">

//             {[...clients, ...clients].map((client, i) => (
//               <div
//                 key={i}
//                 className="group min-w-[200px] p-6 rounded-2xl 
//                 bg-white/70 backdrop-blur-xl border border-white/30 
//                 shadow-md hover:shadow-2xl hover:-translate-y-2 
//                 transition-all duration-500 text-center cursor-pointer"
//               >
//                 {/* Glow */}
//                 <div className="absolute inset-0 rounded-2xl 
//                 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
//                 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

//                 <h3 className="text-sm font-semibold text-gray-700 
//                 group-hover:text-transparent 
//                 group-hover:bg-gradient-to-r group-hover:from-blue-600 
//                 group-hover:via-purple-500 group-hover:to-pink-600 
//                 group-hover:bg-clip-text transition-all duration-500">
//                   {client}
//                 </h3>
//               </div>
//             ))}

//           </div>
//         </div>
//       </div>

//       {/* Animation Style */}
//       <style>{`
//         .animate-scroll {
//           animation: scroll 25s linear infinite;
//         }

//         @keyframes scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ClientsSection;





// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";

// const clients = [
//   "F5 Networks",
//   "MathWorks",
//   "Anthem Bioscience",
//   "String Bio",
//   "UNext Learning",
//   "SIDVIN",
//   "TADME",
//   "Hitachi",
//   "Course5i",
//   "McAfee",
//   "Brigade",
//   "IWPS",
//   "The School of RAYA",
//   "OLA",
//   "Altisource",
//   "VMware",
// ];

// const ClientsSection = () => {
//   return (
//     <section className="relative py-28 overflow-hidden bg-gray-100">

//       {/* Background Glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
//         bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
//         opacity-10 blur-[140px] rounded-full" />
//       </div>

//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-16">

//             <span className="text-xs uppercase tracking-widest font-semibold mb-4 block 
//             bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//             bg-clip-text text-transparent">
//               Trusted By
//             </span>

//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our{" "}
//               <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//               bg-clip-text text-transparent">
//                 Clients
//               </span>
//             </h2>

//             <p className="text-gray-500 max-w-2xl mx-auto">
//               Powering success for industry leaders across the globe.
//             </p>

//           </div>
//         </SectionWrapper>

//         {/* Marquee Wrapper */}
//         <div className="relative overflow-hidden">

//           {/* Gradient fade edges */}
//           <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
//           <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

//           {/* Scrolling Track */}
//           <div className="flex animate-scroll gap-6 w-max">

//             {[...clients, ...clients].map((client, i) => (
//               <div
//                 key={i}
//                 className="group relative min-w-[200px] p-6 rounded-2xl 
//                 bg-white border border-gray-200 
//                 shadow-md hover:shadow-2xl hover:-translate-y-2 
//                 transition-all duration-500 text-center cursor-pointer"
//               >
//                 {/* Glow */}
//                 <div className="absolute inset-0 rounded-2xl 
//                 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
//                 opacity-0 group-hover:opacity-100 transition duration-500" />

//                 {/* Text */}
//                 <h3 className="relative text-sm font-semibold text-gray-700 
//                 group-hover:text-transparent 
//                 group-hover:bg-gradient-to-r group-hover:from-blue-600 
//                 group-hover:via-purple-500 group-hover:to-pink-600 
//                 group-hover:bg-clip-text transition-all duration-500">
//                   {client}
//                 </h3>
//               </div>
//             ))}

//           </div>
//         </div>
//       </div>

//       {/* Animation */}
//       <style >{`
//         .animate-scroll {
//           animation: scroll 25s linear infinite;
//         }

//         @keyframes scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ClientsSection;






// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";

// // ✅ Import client logos
// import f5 from "@/assets/F5_logo.png";
// import mathworks from "@/assets/MathWorks.jpg";
// import anthem from "@/assets/Anthem Bioscience.png";
// import stringbio from "@/assets/strategic-core.jpg";
// import unext from "@/assets/unext.jpeg";
// import sidvin from "@/assets/SIDVIN.jpeg";
// import tadme from "@/assets/tadme.jpeg";
// import hitachi from "@/assets/hitachi.webp";
// import course5i from "@/assets/Course5_Logo.jpg";
// import mcafee from "@/assets/McAfee.png";
// import brigade from "@/assets/Brigade.jpeg";
// import iwps from "@/assets/IWPS.jpeg";
// import raya from "@/assets/TheSchoolofRaya.png";
// import ola from "@/assets/OLA.webp";
// import altisource from "@/assets/Brigade.jpeg";
// import vmware from "@/assets/Brigade.jpeg";

// // ✅ Clients array with logos
// const clients = [
//   { name: "F5 Networks", logo: f5 },
//   { name: "MathWorks", logo: mathworks },
//   { name: "Anthem Bioscience", logo: anthem },
//   { name: "String Bio", logo: stringbio },
//   { name: "UNext Learning", logo: unext },
//   { name: "SIDVIN", logo: sidvin },
//   { name: "TADME", logo: tadme },
//   { name: "Hitachi", logo: hitachi },
//   { name: "Course5i", logo: course5i },
//   { name: "McAfee", logo: mcafee },
//   { name: "Brigade", logo: brigade },
//   { name: "IWPS", logo: iwps },
//   { name: "The School of RAYA", logo: raya },
//   { name: "OLA", logo: ola },
//   { name: "Altisource", logo: altisource },
//   { name: "VMware", logo: vmware },
// ];

// const ClientsSection = () => {
//   return (
//     <section className="relative py-28 overflow-hidden bg-gray-100">

//       {/* Background Glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
//         bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
//         opacity-10 blur-[140px] rounded-full" />
//       </div>

//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-16">

//             <span className="text-xs uppercase tracking-widest font-semibold mb-4 block 
//             bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//             bg-clip-text text-transparent">
//               Trusted By
//             </span>

//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our{" "}
//               <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//               bg-clip-text text-transparent">
//                 Clients
//               </span>
//             </h2>

//             <p className="text-gray-500 max-w-2xl mx-auto">
//               Powering success for industry leaders across the globe.
//             </p>

//           </div>
//         </SectionWrapper>

//         {/* Marquee Wrapper */}
//         <div className="relative overflow-hidden">

//           {/* Gradient fade edges */}
//           <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-100 to-transparent z-10" />
//           <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-100 to-transparent z-10" />

//           {/* Scrolling Track */}
//           <div className="flex animate-scroll gap-6 w-max">

//             {[...clients, ...clients].map((client, i) => (
//               <div
//                 key={i}
//                 className="group relative min-w-[200px] p-6 rounded-2xl 
//                 bg-white border border-gray-200 
//                 shadow-md hover:shadow-2xl hover:-translate-y-2 
//                 transition-all duration-500 text-center cursor-pointer"
//               >
//                 {/* Glow */}
//                 <div className="absolute inset-0 rounded-2xl 
//                 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
//                 opacity-0 group-hover:opacity-100 transition duration-500" />

//                 {/* Logo */}
//                 <img
//                   src={client.logo}
//                   alt={client.name}
//                   className="relative h-12 mx-auto object-contain grayscale 
//                   group-hover:grayscale-0 transition duration-500"
//                 />
//               </div>
//             ))}

//           </div>
//         </div>
//       </div>

//       {/* Animation */}
//       <style>{`
//         .animate-scroll {
//           animation: scroll 25s linear infinite;
//         }

//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }

//         @keyframes scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ClientsSection;







// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";

// // ✅ Import client logos
// import f5 from "@/assets/F5_logo.png";
// import mathworks from "@/assets/MathWorks.jpg";
// import anthem from "@/assets/Anthem Bioscience.png";
// import stringbio from "@/assets/strategic-core.jpg";
// import unext from "@/assets/unext.jpeg";
// import sidvin from "@/assets/SIDVIN.jpeg";
// import tadme from "@/assets/tadme.jpeg";
// import hitachi from "@/assets/hitachi.webp";
// import course5i from "@/assets/Course5_Logo.jpg";
// import mcafee from "@/assets/McAfee.png";
// import brigade from "@/assets/Brigade.jpeg";
// import iwps from "@/assets/IWPS.jpeg";
// import raya from "@/assets/TheSchoolofRaya.png";
// import ola from "@/assets/OLA.webp";
// import altisource from "@/assets/Brigade.jpeg";
// import vmware from "@/assets/Brigade.jpeg";

// // ✅ Clients array
// const clients = [
//   { name: "F5 Networks", logo: f5 },
//   { name: "MathWorks", logo: mathworks },
//   { name: "Anthem Bioscience", logo: anthem },
//   { name: "String Bio", logo: stringbio },
//   { name: "UNext Learning", logo: unext },
//   { name: "SIDVIN", logo: sidvin },
//   { name: "TADME", logo: tadme },
//   { name: "Hitachi", logo: hitachi },
//   { name: "Course5i", logo: course5i },
//   { name: "McAfee", logo: mcafee },
//   { name: "Brigade", logo: brigade },
//   { name: "IWPS", logo: iwps },
//   { name: "The School of RAYA", logo: raya },
//   { name: "OLA", logo: ola },
//   { name: "Altisource", logo: altisource },
//   { name: "VMware", logo: vmware },
// ];

// // 🎨 Gradient colors
// const gradients = [
//   "from-pink-600 via-yellow-400 to-blue-600",
//   "from-red-600 via-orange-400 to-yellow-400",
//   "from-purple-600 via-pink-500 to-red-500",
//   "from-green-500 via-emerald-400 to-cyan-400",
//   "from-blue-600 via-cyan-400 to-green-400",
// ];

// const ClientsSection = () => {
//   return (
//     <section className="relative py-28 overflow-hidden bg-[#FEFD99]">

//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-20">

//             <span className="text-xs uppercase tracking-widest font-semibold mb-4 block 
//             bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//             bg-clip-text text-transparent">
//               Trusted By
//             </span>

//             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
//               Our{" "}
//               <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
//               bg-clip-text text-transparent">
//                 Clients
//               </span>
//             </h2>

//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Powering success for industry leaders across the globe.
//             </p>

//           </div>
//         </SectionWrapper>

//         {/* Marquee */}
//         <div className="relative overflow-hidden">

//           {/* Fade edges (adjusted for yellow bg) */}
//           {/* <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#FEFD99] to-transparent z-10" />
//           <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#FEFD99] to-transparent z-10" /> */}

//           <div className="flex animate-scroll gap-10 w-max">

//             {[...clients, ...clients].map((client, i) => (
//               <div
//                 key={i}
//                 className={`min-w-[260px] h-[160px] flex items-center justify-center
//                 rounded-3xl p-[2px] bg-gradient-to-r ${gradients[i % gradients.length]}
//                 shadow-md`}
//               >
               
//                 <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">

//                   <img
//                     src={client.logo}
//                     alt={client.name}
//                     className="h-16 object-contain"
//                   />

//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>
//       </div>

//       {/* Animation */}
//       <style>{`
//         .animate-scroll {
//           animation: scroll 28s linear infinite;
//         }

//         @keyframes scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ClientsSection;




import React from "react";
import SectionWrapper from "@/components/SectionWrapper";

// ✅ Import client logos
import f5 from "@/assets/F5_logo.png";
import mathworks from "@/assets/MathWorks.jpg";
import anthem from "@/assets/Anthem Bioscience.png";
import stringbio from "@/assets/strategic-core.jpg";
import unext from "@/assets/unext.jpeg";
import sidvin from "@/assets/SIDVIN.jpeg";
import tadme from "@/assets/tadme.jpeg";
import hitachi from "@/assets/hitachi.webp";
import course5i from "@/assets/Course5_Logo.jpg";
import mcafee from "@/assets/McAfee.png";
import brigade from "@/assets/Brigade.jpeg";
import iwps from "@/assets/IWPS.jpeg";
import raya from "@/assets/TheSchoolofRaya.png";
import ola from "@/assets/OLA.webp";
import altisource from "@/assets/altisourceimg.jpg";
import vmware from "@/assets/vmwareimg.jpg";

// ✅ Clients array
const clients = [
  { name: "F5 Networks", logo: f5 },
  { name: "MathWorks", logo: mathworks },
  { name: "Anthem Bioscience", logo: anthem },
  // { name: "String Bio", logo: stringbio },
  { name: "UNext Learning", logo: unext },
  { name: "SIDVIN", logo: sidvin },
  { name: "TADME", logo: tadme },
  { name: "Hitachi", logo: hitachi },
  { name: "Course5i", logo: course5i },
  { name: "McAfee", logo: mcafee },
  { name: "Brigade", logo: brigade },
  { name: "IWPS", logo: iwps },
  { name: "The School of RAYA", logo: raya },
  { name: "OLA", logo: ola },
  { name: "Altisource", logo: altisource },
  { name: "VMware", logo: vmware },
];

// 🎨 Gradient colors
const gradients = [
  "from-pink-600 via-yellow-400 to-blue-600",
  "from-red-600 via-orange-400 to-yellow-400",
  "from-purple-600 via-pink-500 to-red-500",
  "from-green-500 via-emerald-400 to-cyan-400",
  "from-blue-600 via-cyan-400 to-green-400",
];

const ClientsSection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-[#FEFD99]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Heading */}
        <SectionWrapper>
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-widest font-semibold mb-4 block 
            bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
            bg-clip-text text-transparent">
              Trusted By
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
              bg-clip-text text-transparent">
                Clients
              </span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Powering success for industry leaders across the globe.
            </p>
          </div>
        </SectionWrapper>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-10 w-max">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className={`min-w-[200px] h-[140px] flex items-center justify-center
                rounded-2xl p-[2px] bg-gradient-to-r ${gradients[i % gradients.length]}
                shadow-md hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Inner white card */}
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center p-4">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain max-w-[140px] max-h-[80px]"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;