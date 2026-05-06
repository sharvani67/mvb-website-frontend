// import {
//   ShieldCheck,
//   Network,
//   Server,
//   Lock,
//   Award,
//   Database
// } from "lucide-react";

// const certifications = [
//   { name: "CCIE Routing & Switching", icon: Network },
//   { name: "CCIE Security", icon: Lock },
//   { name: "Fortinet NSE", icon: ShieldCheck },
//   { name: "Splunk Certified", icon: Database },
//   { name: "Panduit Certified", icon: Server },
//   { name: "Belden Certified", icon: Award }
// ];

// export default function CertificationsMarquee() {
//   return (
//     <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Our Industry Certifications
//           </h2>

//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Our engineers hold globally recognized certifications ensuring
//             world-class networking, security, and infrastructure expertise.
//           </p>
//         </div>

//         {/* Marquee */}
//         <div className="relative overflow-hidden">

//           {/* gradient fade */}
//           <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-10" />
//           <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10" />

//           <div className="flex animate-marquee whitespace-nowrap">

//             {[...Array(2)].map((_, i) => (
//               <div key={i} className="flex items-center gap-10 mx-10">

//                 {certifications.map((cert, j) => {
//                   const Icon = cert.icon;

//                   return (
//                     <div
//                       key={j}
//                       className="flex items-center gap-3 px-7 py-4 bg-white rounded-full shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//                     >

//                       <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
//                         <Icon className="w-5 h-5 text-emerald-600" />
//                       </div>

//                       <span className="text-sm font-semibold text-gray-700">
//                         {cert.name}
//                       </span>

//                     </div>
//                   );
//                 })}

//               </div>
//             ))}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import React from "react";

const certifications = [
  {
    name: "CCIE Routing & Switching",
    image: "https://cdn.worldvectorlogo.com/logos/cisco-2.svg"
  },
  {
    name: "CCIE Security",
    image: "https://cdn.worldvectorlogo.com/logos/cisco-2.svg"
  },
  {
    name: "Fortinet NSE",
    image: "https://i.pinimg.com/736x/9c/a5/ce/9ca5ce3b931f90813cbb0231e87fd587.jpg"
  },
  {
    name: "Splunk Certified",
    image: "https://i.pinimg.com/736x/42/24/74/422474b3eca76c93c340f322b636e5a8.jpg"
  },
  {
    name: "Panduit Certified",
    image: "https://i.pinimg.com/1200x/67/a4/c5/67a4c5ed5cc9ec19fc578e1fdefc8ddf.jpg"
  },
  {
    name: "Belden Certified",
    image: "https://cdn.worldvectorlogo.com/logos/belden.svg"
  }
];

export default function CertificationsMarquee() {
  return (
    <section className="relative py-8 overflow-hidden bg-white">

      {/* =============================== */}
      {/* Animated Network Lines Background */}
      {/* =============================== */}
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-40">

        <svg
          className="w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0" />
              <stop offset="50%" stopColor="#14b8a6" stopOpacity="1" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Line 1 */}
          <path
            d="M0 120 Q300 60 600 120 T1200 120"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-lineFlow"
          />

          {/* Line 2 */}
          <path
            d="M0 260 Q300 200 600 260 T1200 260"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-lineFlow delay-2000"
          />

          {/* Line 3 */}
          <path
            d="M0 420 Q300 360 600 420 T1200 420"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-lineFlow delay-4000"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* =============================== */}
        {/* Heading */}
        {/* =============================== */}
        <div className="text-center mb-16">
           <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#E11D48] via-[#FACC15] to-[#2563EB] text-transparent bg-clip-text">
            Our Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our engineers hold globally recognized certifications ensuring
            enterprise-grade networking, security, and infrastructure expertise.
          </p>
        </div>

        {/* =============================== */}
        {/* Marquee */}
        {/* =============================== */}
        <div className="relative overflow-hidden">

          {/* fade edges */}
          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap">

            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-10 mx-10">

                {certifications.map((cert, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-4 px-7 py-4 bg-white/90 backdrop-blur-md rounded-full shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {cert.name}
                    </span>
                  </div>
                ))}

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}