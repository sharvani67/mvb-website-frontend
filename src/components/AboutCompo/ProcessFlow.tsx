// import { Lightbulb, Clock, Handshake, Target } from "lucide-react";

// const steps = [
//   {
//     step: "01",
//     title: "Consultation",
//     desc: "Understanding enterprise infrastructure needs and analyzing existing IT environments.",
//     icon: Lightbulb,
//     color: "from-teal-400 to-cyan-500",
//     top: "5%",
//     left: "20%",
//   },
//   {
//     step: "02",
//     title: "Planning",
//     desc: "Designing scalable architecture for networking, security and IT infrastructure.",
//     icon: Clock,
//     color: "from-cyan-500 to-blue-500",
//     top: "30%",
//     left: "72%",   // moved right
//   },
//   {
//     step: "03",
//     title: "Implementation",
//     desc: "Deploying structured cabling, servers and enterprise-grade security systems.",
//     icon: Handshake,
//     color: "from-blue-500 to-indigo-600",
//     top: "55%",
//     left: "20%",
//   },
//   {
//     step: "04",
//     title: "Optimization",
//     desc: "Continuous monitoring, support and optimization of the infrastructure.",
//     icon: Target,
//     color: "from-slate-600 to-slate-800",
//     top: "80%",
//     left: "72%",   // moved right
//   },
// ];

// export default function SShapeProcess() {
//   return (
//     <section className="py-28 bg-white">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-5xl font-bold text-gray-900 mb-4">
//             Our Process
//           </h2>
//           <p className="text-gray-600 text-lg">
//             A structured journey from consultation to infrastructure excellence.
//           </p>
//         </div>

//         <div className="relative h-[700px]">

//           {/* S Shape SVG Path */}
//           <svg
//             className="absolute left-1/2 top-0 -translate-x-1/2"
//             width="300"
//             height="700"
//             viewBox="0 0 300 700"
//             fill="none"
//           >
//             <path
//               d="M150 0
//                  C250 100 50 150 150 250
//                  C250 350 50 400 150 500
//                  C250 600 50 650 150 700"
//               stroke="#CBD5F5"
//               strokeWidth="3"
//               strokeDasharray="6 10"
//               fill="none"
//             />
//           </svg>

//           {/* Steps */}
//           {steps.map((step, i) => {
//             const Icon = step.icon;

//             return (
//               <div
//                 key={i}
//                 style={{ top: step.top, left: step.left }}
//                 className="absolute -translate-x-1/2"
//               >

//                 {/* Step Number */}
//                 <div className="flex items-center mb-3 gap-2">
//                   <span className="text-gray-400 text-xl font-semibold">
//                     STEP
//                   </span>
//                   <span className="text-4xl font-bold text-teal-600">
//                     {step.step}
//                   </span>
//                 </div>

//                 {/* Pill Card */}
//                 <div
//                   className={`flex items-center gap-4 px-6 py-4 rounded-full text-white bg-gradient-to-r ${step.color} shadow-xl`}
//                 >
//                   <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow">
//                     <Icon className="text-gray-700 w-6 h-6" />
//                   </div>

//                   <div className="max-w-xs">
//                     <h3 className="font-semibold">{step.title}</h3>
//                     <p className="text-sm opacity-90">{step.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }






// import { Lightbulb, Clock, Handshake, Target } from "lucide-react";

// const steps = [
//   {
//     id: "01",
//     title: "Foundation",
//     desc: "MV Business Solutions founded with a vision to deliver enterprise-grade IT infrastructure solutions.",
//     icon: Lightbulb,
//     top: "0%",
//     left: "25%",
//   },
//   {
//     id: "02",
//     title: "Expansion",
//     desc: "Expanded services into data cabling, network infrastructure and enterprise deployment solutions.",
//     icon: Clock,
//     top: "28%",
//     left: "55%",
//   },
//   {
//     id: "03",
//     title: "Partnership Growth",
//     desc: "Built strategic partnerships with leading technology providers and enterprise clients.",
//     icon: Handshake,
//     top: "56%",
//     left: "25%",
//   },
//   {
//     id: "04",
//     title: "Future Vision",
//     desc: "Driving AI infrastructure, data centers, and next-generation enterprise IT ecosystems.",
//     icon: Target,
//     top: "84%",
//     left: "55%",
//   },
// ];

// export default function JourneySection() {
//   return (
//     <section className="py-32 bg-gray-50">
//       <div className="container mx-auto px-6">

//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <h2 className="text-5xl font-bold text-gray-900 mb-4">
//             Our Journey
//           </h2>
//           <p className="text-lg text-gray-600">
//             The path of innovation, growth, and trust.
//           </p>
//         </div>

//         {/* Timeline Container */}
//         <div className="relative max-w-6xl mx-auto h-[700px]">

//           {/* S Curve SVG */}
//           <svg
//             className="absolute left-1/2 -translate-x-1/2 h-full"
//             width="300"
//             height="700"
//             viewBox="0 0 300 700"
//             fill="none"
//           >
//             <path
//               d="M150 0
//                  C300 100, 0 200, 150 300
//                  C300 400, 0 500, 150 700"
//               stroke="#CBD5F5"
//               strokeWidth="3"
//               strokeDasharray="8 8"
//               fill="none"
//             />
//           </svg>

//           {/* Steps */}
//           {steps.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="absolute flex items-center gap-4 bg-white shadow-xl rounded-full px-6 w-[440px] h-[96px] hover:scale-105 transition duration-300"
//                 style={{
//                   top: item.top,
//                   left: item.left,
//                   transform: "translateX(-50%)",
//                 }}
//               >
//                 {/* Icon Circle */}
//                 <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg">
//                   <Icon size={24} />
//                 </div>

//                 {/* Text */}
//                 <div className="flex-1">
//                   <h3 className="font-semibold text-gray-900">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 leading-snug">
//                     {item.desc}
//                   </p>
//                 </div>

//                 {/* Step Number */}
//                 <div className="text-right">
//                   <span className="text-2xl font-bold text-gray-300">
//                     {item.id}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }




// import { Lightbulb, Clock, Handshake, Target } from "lucide-react";

// const steps = [
//   {
//     id: "01",
//     title: "Foundation",
//     desc: "MV Business Solutions founded with a vision to deliver enterprise-grade IT infrastructure solutions.",
//     icon: Lightbulb,
//     top: "8%",
//     position: "left",
//   },
//   {
//     id: "02",
//     title: "Expansion",
//     desc: "Expanded services into data cabling, network infrastructure and enterprise deployment solutions.",
//     icon: Clock,
//     top: "30%",
//     position: "right",
//   },
//   {
//     id: "03",
//     title: "Partnership Growth",
//     desc: "Built strategic partnerships with leading technology providers and enterprise clients.",
//     icon: Handshake,
//     top: "55%",
//     position: "left",
//   },
//   {
//     id: "04",
//     title: "Future Vision",
//     desc: "Driving AI infrastructure, data centers, and next-generation enterprise IT ecosystems.",
//     icon: Target,
//     top: "80%",
//     position: "right",
//   },
// ];

// export default function JourneySection() {
//   return (
//     <section className="py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <span className="text-teal-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
//             Our Story
//           </span>
//           <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//             The Journey of{" "}
//             <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
//               Excellence
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 leading-relaxed">
//             A timeline of innovation, strategic growth, and unwavering commitment to 
//             delivering enterprise-grade solutions.
//           </p>
//         </div>

//         {/* Timeline Container */}
//         <div className="relative max-w-6xl mx-auto min-h-[800px]">
//           {/* Center Line with S-Curve */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5">
//             <svg
//               className="absolute inset-0 w-full h-full"
//               width="4"
//               height="100%"
//               viewBox="0 0 4 800"
//               preserveAspectRatio="none"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M2 0 
//                    C2 150, 2 200, 2 250 
//                    C2 300, 2 350, 2 400 
//                    C2 450, 2 500, 2 550 
//                    C2 600, 2 650, 2 800"
//                 stroke="url(#gradient)"
//                 strokeWidth="4"
//                 strokeDasharray="8 8"
//                 fill="none"
//               />
//               <defs>
//                 <linearGradient id="gradient" x1="2" y1="0" x2="2" y2="800" gradientUnits="userSpaceOnUse">
//                   <stop stopColor="#14b8a6" />
//                   <stop offset="0.5" stopColor="#06b6d4" />
//                   <stop offset="1" stopColor="#3b82f6" />
//                 </linearGradient>
//               </defs>
//             </svg>
            
//             {/* Floating Dots on Timeline */}
//             <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-teal-500 shadow-lg shadow-teal-200" style={{ top: '8%' }} />
//             <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-lg shadow-cyan-200" style={{ top: '30%' }} />
//             <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-200" style={{ top: '55%' }} />
//             <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 shadow-lg shadow-indigo-200" style={{ top: '80%' }} />
//           </div>

//           {/* Steps */}
//           {steps.map((item, index) => {
//             const Icon = item.icon;
//             const isLeft = item.position === "left";

//             return (
//               <div
//                 key={index}
//                 className={`absolute flex items-center gap-6 ${
//                   isLeft ? "left-[calc(50%-280px)]" : "left-[calc(50%+40px)]"
//                 }`}
//                 style={{ top: item.top }}
//               >
//                 {/* Card */}
//                 <div
//                   className={`group relative w-[320px] bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
//                     isLeft ? "text-right" : ""
//                   }`}
//                 >
//                   {/* Connecting Line */}
//                   <div
//                     className={`absolute top-1/2 -translate-y-1/2 w-12 h-0.5 bg-gradient-to-r ${
//                       isLeft
//                         ? "right-0 translate-x-full from-teal-500 to-cyan-500"
//                         : "left-0 -translate-x-full from-cyan-500 to-teal-500"
//                     }`}
//                   />
                  
//                   {/* Content */}
//                   <div className={`flex items-start gap-4 ${isLeft ? "flex-row-reverse" : ""}`}>
//                     {/* Icon */}
//                     <div className="flex-shrink-0">
//                       <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
//                         <Icon size={28} />
//                       </div>
//                     </div>

//                     {/* Text */}
//                     <div className={`flex-1 ${isLeft ? "text-right" : ""}`}>
//                       <div className="flex items-center gap-3 mb-2">
//                         <span className="text-sm font-semibold text-teal-600">
//                           Step {item.id}
//                         </span>
//                         <h3 className="font-bold text-gray-900 text-lg">
//                           {item.title}
//                         </h3>
//                       </div>
//                       <p className="text-gray-600 text-sm leading-relaxed">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-20">
//           <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
//             <span className="text-gray-700 font-medium">15+ Years of Excellence</span>
//             <div className="w-2 h-2 rounded-full bg-teal-500" />
//             <span className="text-gray-700 font-medium">500+ Projects Completed</span>
//             <div className="w-2 h-2 rounded-full bg-cyan-500" />
//             <span className="text-gray-700 font-medium">50+ Enterprise Clients</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { Lightbulb, Clock, Handshake, Target } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Foundation",
    desc: "MV Business Solutions founded with a vision to deliver enterprise-grade IT infrastructure solutions.",
    icon: Lightbulb,
    side: "left",
  },
  {
    step: "02",
    title: "Expansion",
    desc: "Expanded services into data cabling, network infrastructure and enterprise deployment solutions.",
    icon: Clock,
    side: "right",
  },
  {
    step: "03",
    title: "Partnership Growth",
    desc: "Built strategic partnerships with leading technology providers and enterprise clients.",
    icon: Handshake,
    side: "left",
  },
  {
    step: "04",
    title: "Future Vision",
    desc: "Driving AI infrastructure, data centers, and next-generation enterprise IT ecosystems.",
    icon: Target,
    side: "right",
  },
];

export default function TimelineSection() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* S Curve Path */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-0"
          width="220"
          height="900"
          viewBox="0 0 220 900"
          fill="none"
        >
          <path
            d="M110 0 
               C200 100, 20 200, 110 300
               C200 400, 20 500, 110 600
               C200 700, 20 800, 110 900"
            stroke="#94A3B8"
            strokeWidth="3"
            strokeDasharray="6 10"
          />
        </svg>

        <div className="space-y-36 relative">

          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`flex items-center ${
                  item.side === "left"
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                {/* LEFT CARD */}
                {item.side === "left" && (
                  <>
                    <div className="flex items-center bg-teal-500 text-white rounded-full px-6 py-5 w-[420px] shadow-lg">

                      <div className="flex-1 pr-4">
                        <h3 className="font-semibold text-lg">
                          {item.title}
                        </h3>
                        <p className="text-sm opacity-90">
                          {item.desc}
                        </p>
                      </div>

                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-md">
                        <Icon size={26} />
                      </div>
                    </div>

                    <div className="ml-6 text-gray-400">
                      <p className="text-sm tracking-widest">STEP</p>
                      <p className="text-4xl font-bold">{item.step}</p>
                    </div>
                  </>
                )}

                {/* RIGHT CARD */}
                {item.side === "right" && (
                  <>
                    <div className="mr-6 text-gray-400 text-right">
                      <p className="text-sm tracking-widest">STEP</p>
                      <p className="text-4xl font-bold">{item.step}</p>
                    </div>

                    <div className="flex items-center bg-cyan-600 text-white rounded-full px-6 py-5 w-[420px] shadow-lg">

                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-cyan-600 shadow-md mr-4">
                        <Icon size={26} />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">
                          {item.title}
                        </h3>
                        <p className="text-sm opacity-90">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}