// import { Eye, Target } from "lucide-react";

// export function VisionMissionSection() {
//   return (
//     <section className="py-32 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-6">

//         {/* Section Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-5xl font-bold text-gray-900 mb-4">
//             Vision & Mission
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Our guiding principles that shape how we design, deploy, and deliver
//             enterprise IT infrastructure solutions.
//           </p>
//         </div>

//         <div className="space-y-24">

//           {/* VISION */}
//           <div className="grid lg:grid-cols-2 gap-16 items-center">

//             {/* Image */}
//             <div className="relative">
//               <div className="absolute -inset-6 bg-blue-200 rounded-3xl blur-3xl opacity-30"></div>

//               <img
//                 src="/vision.jpg"
//                 alt="Vision"
//                 className="relative rounded-3xl shadow-2xl object-cover w-full h-[420px]"
//               />

//               {/* Floating Icon */}
//               <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl">
//                 <Eye className="w-8 h-8 text-blue-600" />
//               </div>
//             </div>

//             {/* Content */}
//             <div>
//               <h3 className="text-4xl font-bold text-gray-900 mb-6">
//                 Our Vision
//               </h3>

//               <p className="text-2xl font-semibold text-blue-600 mb-6">
//                 Customer Centricity with Peace of Mind
//               </p>

//               <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                 We envision a world where technology seamlessly empowers
//                 organizations to innovate and grow while we handle the
//                 complexity of IT infrastructure.
//               </p>

//               <p className="text-gray-600 text-lg leading-relaxed">
//                 Our goal is to create reliable and intelligent technology
//                 environments where businesses operate with confidence, security,
//                 and operational excellence.
//               </p>
//             </div>
//           </div>

//           {/* MISSION */}
//           <div className="grid lg:grid-cols-2 gap-16 items-center">

//             {/* Content */}
//             <div>
//               <h3 className="text-4xl font-bold text-gray-900 mb-6">
//                 Our Mission
//               </h3>

//               <p className="text-xl font-semibold text-purple-600 mb-6">
//                 Building IT Infrastructure that powers modern enterprises
//               </p>

//               <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                 Our mission is to build Data Cabling, Data Security, and AI
//                 infrastructure as the strategic core of organizations.
//               </p>

//               <p className="text-gray-600 text-lg leading-relaxed">
//                 By deploying scalable IT infrastructure solutions we simplify
//                 complex technology challenges and enable businesses to operate
//                 with greater efficiency and security.
//               </p>
//             </div>

//             {/* Image */}
//             <div className="relative">
//               <div className="absolute -inset-6 bg-purple-200 rounded-3xl blur-3xl opacity-30"></div>

//               <img
//                 src="/mission.jpg"
//                 alt="Mission"
//                 className="relative rounded-3xl shadow-2xl object-cover w-full h-[420px]"
//               />

//               {/* Floating Icon */}
//               <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl">
//                 <Target className="w-8 h-8 text-purple-600" />
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }






// import { MessageSquare, Folder, PieChart } from "lucide-react";

// export default function VisionMissionSection() {
//   const missions = [
//     {
//       icon: MessageSquare,
//       title: "Customer-Centric Technology",
//       desc: "We prioritize business goals and customer needs by delivering reliable IT infrastructure that improves efficiency and long-term operational success.",
//       color: "bg-white",
//     },
//     {
//       icon: Folder,
//       title: "Secure & Scalable Infrastructure",
//       desc: "Our solutions combine structured cabling, cybersecurity frameworks, and cloud architecture to create strong, scalable technology environments.",
//       color: "bg-yellow-200",
//     },
//     {
//       icon: PieChart,
//       title: "Innovation & Future Readiness",
//       desc: "We adopt emerging technologies including AI-ready infrastructure and advanced security platforms to keep businesses ahead of digital transformation.",
//       color: "bg-white",
//     },
//   ];

//   return (
//     <section className="py-32 bg-[#F6F8FB] overflow-hidden">
//       <div className="container mx-auto px-6">

//         <div className="grid lg:grid-cols-3 items-center gap-12">

//           {/* LEFT SIDE */}
//           <div className="space-y-6">
//             <span className="text-sm uppercase tracking-widest text-green-500 font-semibold">
//               Our Mission
//             </span>

//             <h2 className="text-5xl font-bold text-gray-900 leading-tight">
//               Building the Future of
//               <span className="block text-green-500">
//                 Intelligent Infrastructure
//               </span>
//             </h2>

//             <p className="text-gray-600 leading-relaxed text-lg">
//               MV Business Solutions Pvt Ltd empowers enterprises with
//               future-ready IT infrastructure. From data cabling and
//               cybersecurity to AI-driven infrastructure solutions,
//               we help organizations build strong technology foundations
//               that drive growth and innovation.
//             </p>

//             <p className="text-gray-600 leading-relaxed">
//               Our mission is to simplify complex IT challenges and deliver
//               reliable, scalable and secure technology ecosystems that
//               allow businesses to operate with confidence and peace of mind.
//             </p>
//           </div>

//           {/* CENTER TARGET */}
//           <div className="flex justify-center">
//             <div className="relative">

//               <div className="w-72 h-72 rounded-full bg-white shadow-xl flex items-center justify-center">

//                 <div className="w-52 h-52 rounded-full border-8 border-gray-800 flex items-center justify-center">

//                   <div className="w-36 h-36 rounded-full border-8 border-green-400 flex items-center justify-center">

//                     <div className="w-16 h-16 rounded-full bg-gray-900"></div>

//                   </div>
//                 </div>
//               </div>

//               {/* Arrow */}
//               <div className="absolute top-1/2 right-0 translate-x-10 -translate-y-1/2 rotate-45 w-24 h-2 bg-gray-900"></div>

//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="space-y-6">
//             {missions.map((mission, index) => {
//               const Icon = mission.icon;

//               return (
//                 <div
//                   key={index}
//                   className={`${mission.color} rounded-2xl shadow-lg p-6 flex gap-5 items-start hover:shadow-xl transition`}
//                 >
//                   <div className="p-3 bg-gray-100 rounded-xl">
//                     <Icon className="w-6 h-6 text-gray-800" />
//                   </div>

//                   <div>
//                     <h3 className="font-semibold text-lg text-gray-900 mb-1">
//                       {mission.title}
//                     </h3>

//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {mission.desc}
//                     </p>
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




// import { MessageSquare, Folder, Target, ArrowRight, CheckCircle, Shield, Globe } from "lucide-react";

// export default function VisionMissionSection() {
//   const missions = [
//     {
//       icon: MessageSquare,
//       title: "Mission Text One",
//       desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero",
//     },
//     {
//       icon: Folder,
//       title: "Mission Text Two",
//       desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero",
//     },
//   ];

//   const missionPoints = [
//     "mission text one",
//     "mission text two",
//     "mission text three",
//     "mission text four",
//   ];

//   return (
//     <section className="py-24 bg-white">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-sm uppercase tracking-wider text-[#88BF4F] font-medium">
//             Our Mission
//           </span>
//           <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6">
//             About Our Mission
//           </h2>
//           <p className="text-gray-500 text-lg leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. 
//             Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero
//           </p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
//           {/* Left Column - Mission Cards */}
//           <div className="space-y-6">
//             {missions.map((mission, index) => {
//               const Icon = mission.icon;
//               return (
//                 <div
//                   key={index}
//                   className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
//                 >
//                   <div className="flex gap-5">
//                     <div className="flex-shrink-0">
//                       <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
//                         <Icon className="w-6 h-6 text-gray-700" />
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-medium text-gray-900 mb-3">
//                         {mission.title}
//                       </h3>
//                       <p className="text-gray-500 text-sm leading-relaxed">
//                         {mission.desc}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}

//             {/* Mission Points */}
//             <div className="grid grid-cols-2 gap-4 mt-8">
//               {missionPoints.map((point, index) => (
//                 <div key={index} className="flex items-center gap-3">
//                   <CheckCircle className="w-5 h-5 text-[#88BF4F] flex-shrink-0" />
//                   <span className="text-gray-600 text-sm">{point}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column - Visual */}
//           <div className="relative">
//             {/* Target Diagram */}
//             <div className="relative w-80 h-80 mx-auto">
//               {/* Outer Ring */}
//               <div className="absolute inset-0 rounded-full border-2 border-gray-200" />
              
//               {/* Middle Ring */}
//               <div className="absolute inset-8 rounded-full border-2 border-gray-300" />
              
//               {/* Inner Ring */}
//               <div className="absolute inset-16 rounded-full border-2 border-[#88BF4F]" />
              
//               {/* Center */}
//               <div className="absolute inset-28 rounded-full bg-gray-900">
//                 <div className="absolute inset-2 rounded-full border-2 border-white/20" />
//               </div>

//               {/* Arrow */}
//               <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-20">
//                 <div className="relative">
//                   <div className="w-full h-0.5 bg-gray-300" />
//                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-gray-400 rotate-45" />
//                 </div>
//               </div>
//             </div>

//             {/* Quote Section */}
//             <div className="text-center max-w-sm mx-auto mt-12">
//               <p className="text-gray-500 italic text-sm mb-4">
//                 "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus."
//               </p>
              
//               <p className="text-gray-400 text-xs leading-relaxed mb-6">
//                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. 
//                 Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero
//               </p>

//               <a 
//                 href="#" 
//                 className="inline-flex items-center gap-2 text-[#88BF4F] text-sm font-medium hover:gap-3 transition-all"
//               >
//                 Visit site
//                 <ArrowRight className="w-4 h-4" />
//               </a>
//             </div>

//             {/* Decorative Elements */}
//             <div className="absolute -left-12 top-1/2 -translate-y-1/2 space-y-4">
//               <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
//                 <Shield className="w-5 h-5 text-gray-400" />
//               </div>
//               <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
//                 <Globe className="w-5 h-5 text-gray-400" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// import { MessageSquare, Folder, ArrowRight, CheckCircle } from "lucide-react";

// export default function VisionMissionSection() {
//   const missions = [
//     {
//       icon: MessageSquare,
//       title: "Mission Text One",
//       desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero",
//     },
//     {
//       icon: Folder,
//       title: "Mission Text Two",
//       desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero",
//     },
//   ];

//   const missionPoints = [
//     "Mission text one",
//     "Mission text two",
//     "Mission text three",
//     "Mission text four",
//   ];

//   return (
//     <section className="py-4 bg-white">
//       <div className="container mx-auto px-6">

//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-sm uppercase tracking-wider text-[#88BF4F] font-medium">
//             Our Mission
//           </span>

//           <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6">
//             About Our Mission
//           </h2>

//           <p className="text-gray-500 text-lg leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
//             porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
//             purus lectus malesuada libero
//           </p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

//           {/* Left Column */}
//           <div className="space-y-6">

//             {missions.map((mission, index) => {
//               const Icon = mission.icon;

//               return (
//                 <div
//                   key={index}
//                   className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
//                 >
//                   <div className="flex gap-5">

//                     <div className="flex-shrink-0">
//                       <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
//                         <Icon className="w-6 h-6 text-gray-700" />
//                       </div>
//                     </div>

//                     <div>
//                       <h3 className="text-lg font-medium text-gray-900 mb-3">
//                         {mission.title}
//                       </h3>

//                       <p className="text-gray-500 text-sm leading-relaxed">
//                         {mission.desc}
//                       </p>
//                     </div>

//                   </div>
//                 </div>
//               );
//             })}

//             {/* Mission Points */}
//             <div className="grid grid-cols-2 gap-4 mt-8">

//               {missionPoints.map((point, index) => (
//                 <div key={index} className="flex items-center gap-3">

//                   <CheckCircle className="w-5 h-5 text-[#88BF4F] flex-shrink-0" />

//                   <span className="text-gray-600 text-sm">
//                     {point}
//                   </span>

//                 </div>
//               ))}

//             </div>

//           </div>

//           {/* Right Column - GIF */}
//           <div className="relative flex flex-col items-center">

//             {/* GIF Image */}
//             <div className="w-[420px] h-[320px] flex items-center justify-center">
//               <img
//                 src="https://i.pinimg.com/1200x/c1/f3/27/c1f327799c7c2a0c34b469c7b434580f.jpg"
//                 alt="Mission Animation"
//                 className="w-full h-full object-contain"
//               />
//             </div>

//             {/* Quote Section */}
//             <div className="text-center max-w-sm mx-auto mt-12">

//               <p className="text-gray-500 italic text-sm mb-4">
//                 "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus."
//               </p>

//               <p className="text-gray-400 text-xs leading-relaxed mb-6">
//                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
//                 Maecenas porttitor congue massa. Fusce posuere, magna sed
//                 pulvinar ultricies, purus lectus malesuada libero
//               </p>

//               <a
//                 href="#"
//                 className="inline-flex items-center gap-2 text-[#88BF4F] text-sm font-medium hover:gap-3 transition-all"
//               >
//                 Visit site
//                 <ArrowRight className="w-4 h-4" />
//               </a>

//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



import { MessageSquare, Folder, ArrowRight, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function VisionMissionSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const missions = [
    {
      icon: MessageSquare,
      title: "Mission Text One",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero",
    },
    {
      icon: Folder,
      title: "Mission Text Two",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero",
    },
  ];

  const missionPoints = [
    "Mission text one",
    "Mission text two",
    "Mission text three",
    "Mission text four",
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white relative overflow-hidden">
      
      {/* Decorative Elements - Optional */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#88BF4F]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#88BF4F]/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Header with Animation */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <span className="inline-block text-xs sm:text-sm uppercase tracking-wider text-[#88BF4F] font-medium bg-[#88BF4F]/10 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full">
            Our Mission
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-4 sm:mt-6 mb-3 sm:mb-4">
            About Our Mission
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto px-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-start max-w-6xl mx-auto">

          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
            
            {/* Mission Cards */}
            {missions.map((mission, index) => {
              const Icon = mission.icon;

              return (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-xl p-5 sm:p-6 md:p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#88BF4F]/20"
                >
                  <div className="flex flex-col xs:flex-row gap-4 sm:gap-5">
                    
                    {/* Icon with hover effect */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 group-hover:bg-[#88BF4F]">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
                        {mission.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        {mission.desc}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}

            {/* Mission Points with better mobile layout */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 sm:p-6 md:p-8 mt-4 sm:mt-6">
              <h4 className="text-sm font-medium text-gray-900 mb-4 sm:mb-6">
                Key Focus Areas
              </h4>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                {missionPoints.map((point, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg hover:bg-white transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#88BF4F] flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-600">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Visual Content */}
          <div className="w-full lg:w-1/2 relative flex flex-col items-center lg:sticky lg:top-8">
            
            {/* Image Container with aspect ratio */}
            <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[420px] mx-auto">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://i.pinimg.com/1200x/c1/f3/27/c1f327799c7c2a0c34b469c7b434580f.jpg"
                  alt="Mission Animation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Quote Card */}
            <div className="text-center max-w-sm mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12 px-4 sm:px-0">
              
              {/* Quote */}
              <div className="relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-4xl text-[#88BF4F]/20">"</div>
                <p className="text-gray-600 italic text-sm sm:text-base mb-3 sm:mb-4 relative z-10 px-4">
                  Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 px-2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero
              </p>

              {/* CTA Button */}
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-[#88BF4F] text-white text-xs sm:text-sm font-medium rounded-full hover:bg-[#7AB03F] hover:gap-3 transition-all group shadow-md hover:shadow-lg"
              >
                Visit site
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* Custom breakpoint for extra small devices */}
      <style jsx>{`
        @media (min-width: 480px) {
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .xs\\:flex-row {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  );
}