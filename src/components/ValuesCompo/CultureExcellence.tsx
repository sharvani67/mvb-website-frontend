// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import cultureImg from "@/assets/team-collaboration.jpg";

// const cultureItems = [
//   "Open communication and transparent leadership",
//   "Continuous learning and skill development",
//   "Customer-first mindset across teams",
//   "Innovation driven by real-world impact",
// ];

// const bgMap: any = {
//   blue: "bg-mv-blue/10",
//   magenta: "bg-mv-magenta/10",
//   green: "bg-mv-green/10",
// };

// const borderMap: any = {
//   blue: "border-mv-blue/20",
//   magenta: "border-mv-magenta/20",
//   green: "border-mv-green/20",
// };

// const textMap: any = {
//   blue: "text-mv-blue",
//   magenta: "text-mv-magenta",
//   green: "text-mv-green",
// };

// const stats = [
//   { value: "100%", label: "Values Alignment", color: "blue" },
//   { value: "95%", label: "Employee Satisfaction", color: "magenta" },
//   { value: "4.8/5", label: "Client Ratings", color: "green" },
//   { value: "<5%", label: "Annual Turnover", color: "blue" },
// ];

// const CultureExcellence = () => {
//   return (
//     <section className="py-28 bg-muted/30">
//       <div className="container mx-auto px-4 lg:px-8">

//         <SectionWrapper>

//           <div className="grid lg:grid-cols-2 gap-16 items-center">

//             {/* LEFT SIDE CONTENT */}
//             <div>

//               <span className="text-xs uppercase tracking-widest text-mv-blue font-semibold mb-4 block">
//                 Our Culture
//               </span>

//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 leading-tight">
//                 Culture That Drives
//                 <span className="block gradient-text-animate mt-2">
//                   Sustainable Excellence
//                 </span>
//               </h2>

//               <div className="space-y-4">

//                 {cultureItems.map((item) => (
//                   <div key={item} className="flex items-start gap-3">

//                     <div className="w-6 h-6 rounded-full gradient-brand flex items-center justify-center mt-1">
//                       <span className="text-white text-xs">✓</span>
//                     </div>

//                     <span className="text-foreground">
//                       {item}
//                     </span>

//                   </div>
//                 ))}

//               </div>
//             </div>

//             {/* RIGHT SIDE IMAGE + STATS */}
//             <div className="space-y-8">

//               {/* IMAGE */}
//               <div className="relative">
//                 <img
//                   src={cultureImg}
//                   alt="Company Culture"
//                   className="rounded-3xl shadow-2xl w-full h-[300px] object-cover"
//                 />

//                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/20 to-transparent"></div>
//               </div>

//               {/* PERCENTAGE STATS */}
//               <div className="grid grid-cols-2 gap-6">

//                 {stats.map((stat) => (
//                   <div
//                     key={stat.label}
//                     className={`p-6 rounded-2xl ${bgMap[stat.color]} border ${borderMap[stat.color]} 
//                     text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-xl`}
//                   >
//                     <div className={`text-3xl font-black ${textMap[stat.color]}`}>
//                       {stat.value}
//                     </div>

//                     <div className="text-xs text-muted-foreground mt-1">
//                       {stat.label}
//                     </div>
//                   </div>
//                 ))}

//               </div>

//             </div>

//           </div>

//         </SectionWrapper>

//       </div>
//     </section>
//   );
// };

// export default CultureExcellence;




// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import cultureImg from "@/assets/team-collaboration.jpg";

// const cultureItems = [
//   "Open communication and transparent leadership",
//   "Continuous learning and skill development",
//   "Customer-first mindset across teams",
//   "Innovation driven by real-world impact",
// ];

// const bgMap: any = {
//   blue: "bg-mv-blue/10",
//   magenta: "bg-mv-magenta/10",
//   green: "bg-mv-green/10",
// };

// const borderMap: any = {
//   blue: "border-mv-blue/20",
//   magenta: "border-mv-magenta/20",
//   green: "border-mv-green/20",
// };

// const textMap: any = {
//   blue: "text-mv-blue",
//   magenta: "text-mv-magenta",
//   green: "text-mv-green",
// };

// const stats = [
//   { value: "100%", label: "Values Alignment", color: "blue" },
//   { value: "95%", label: "Employee Satisfaction", color: "magenta" },
//   { value: "4.8/5", label: "Client Ratings", color: "green" },
//   { value: "<5%", label: "Annual Turnover", color: "blue" },
// ];

// const CultureExcellence = () => {
//   return (
//     <section className="py-28 bg-muted/30">
//       <div className="container mx-auto px-4 lg:px-8">

//         <SectionWrapper>

//           {/* EQUAL GRID */}
//           <div className="grid lg:grid-cols-2 gap-16 items-stretch">

//             {/* LEFT SIDE */}
//             <div className="flex flex-col justify-center h-full">

//               <span className="text-xs uppercase tracking-widest text-mv-blue font-semibold mb-4 block">
//                 Our Culture
//               </span>

//               <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 leading-tight">
//                 Culture That Drives
//                 <span className="block gradient-text-animate mt-2">
//                   Sustainable Excellence
//                 </span>
//               </h2>

//               <div className="space-y-4">
//                 {cultureItems.map((item) => (
//                   <div key={item} className="flex items-start gap-3">

//                     <div className="w-6 h-6 rounded-full gradient-brand flex items-center justify-center mt-1">
//                       <span className="text-white text-xs">✓</span>
//                     </div>

//                     <span className="text-foreground">
//                       {item}
//                     </span>

//                   </div>
//                 ))}
//               </div>

//             </div>

//             {/* RIGHT SIDE */}
//             <div className="flex flex-col h-full justify-between space-y-8">

//               {/* IMAGE */}
//               <div className="relative h-[320px]">

//                 <img
//                 //   src={cultureImg}
//                   src="https://i.pinimg.com/736x/9a/e4/db/9ae4dba14bf9d66026c946d925aa7302.jpg"
//                   alt="Company Culture"
//                   className="rounded-3xl shadow-2xl w-full h-full object-cover"
//                 />

//                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/20 to-transparent"></div>

//               </div>

//               {/* STATS */}
//               <div className="grid grid-cols-2 gap-6">

//                 {stats.map((stat) => (
//                   <div
//                     key={stat.label}
//                     className={`p-6 rounded-2xl ${bgMap[stat.color]} border ${borderMap[stat.color]} 
//                     text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-xl`}
//                   >

//                     <div className={`text-3xl font-black ${textMap[stat.color]}`}>
//                       {stat.value}
//                     </div>

//                     <div className="text-xs text-muted-foreground mt-1">
//                       {stat.label}
//                     </div>

//                   </div>
//                 ))}

//               </div>

//             </div>

//           </div>

//         </SectionWrapper>

//       </div>
//     </section>
//   );
// };

// export default CultureExcellence;



import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import cultureImg from "@/assets/team-collaboration.jpg";

const cultureItems = [
  "Open communication and transparent leadership",
  "Continuous learning and skill development",
  "Customer-first mindset across teams",
  "Innovation driven by real-world impact",
];

const bgMap: any = {
  pink: "bg-pink-600/10",
  orange: "bg-orange-500/10",
  yellow: "bg-yellow-400/10",
  magenta: "bg-magenta-500/10",
  green: "bg-green-500/10",
  blue: "bg-blue-600/10",
  cyan: "bg-cyan-500/10",
};

const borderMap: any = {
  pink: "border-pink-500/20",
  orange: "border-orange-500/20",
  yellow: "border-yellow-400/20",
  magenta: "border-magenta-500/20",
  green: "border-green-500/20",
  blue: "border-blue-600/20",
  cyan: "border-cyan-500/20",
};

const textMap: any = {
  pink: "text-pink-500",
  orange: "text-orange-500",
  yellow: "text-yellow-500",
  magenta: "text-magenta-500",
  green: "text-green-500",
  blue: "text-blue-600",
  cyan: "text-cyan-500",
};

const stats = [
  { value: "100%", label: "Values Alignment", color: "pink" },
  { value: "95%", label: "Employee Satisfaction", color: "orange" },
  { value: "4.8/5", label: "Client Ratings", color: "yellow" },
  { value: "<5%", label: "Annual Turnover", color: "blue" },
];

const CultureExcellence = () => {
  return (
    <section className="py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">

        <SectionWrapper>

          {/* EQUAL GRID */}
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">

            {/* LEFT SIDE */}
            <div className="flex flex-col justify-center h-full">

              <span className="text-xs uppercase tracking-widest text-pink-500 font-semibold mb-4 block">
                Our Culture
              </span>

              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 leading-tight">
                Culture That Drives
                <span className="block mt-2 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
                  Sustainable Excellence
                </span>
              </h2>

              <div className="space-y-4">
                {cultureItems.map((item, index) => {
                  const colors = ["pink", "orange", "yellow", "blue"];
                  const color = colors[index % colors.length];
                  return (
                    <div key={item} className="flex items-start gap-3">

                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 flex items-center justify-center mt-1`}>
                        <span className="text-white text-xs">✓</span>
                      </div>

                      <span className="text-foreground">
                        {item}
                      </span>

                    </div>
                  );
                })}
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col h-full justify-between space-y-8">

              {/* IMAGE */}
              <div className="relative h-[320px]">

                <img
                  src="https://i.pinimg.com/736x/9a/e4/db/9ae4dba14bf9d66026c946d925aa7302.jpg"
                  alt="Company Culture"
                  className="rounded-3xl shadow-2xl w-full h-full object-cover"
                />

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/20 to-transparent"></div>
                
                {/* Decorative gradient ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 rounded-3xl blur-2xl opacity-30 -z-10"></div>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-6">

                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`p-6 rounded-2xl ${bgMap[stat.color]} border ${borderMap[stat.color]} 
                    text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group`}
                  >
                    <div className={`text-3xl font-black ${textMap[stat.color]} group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:via-yellow-400 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                      {stat.value}
                    </div>

                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </SectionWrapper>

      </div>
    </section>
  );
};

export default CultureExcellence;