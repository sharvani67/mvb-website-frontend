// import React from "react";
// import { motion } from "framer-motion";
// import { Briefcase, Star, Clock, Globe } from "lucide-react";

// const stats = [
//   { number: "500+", label: "Projects Delivered", icon: Briefcase, color: "blue" as const },
//   { number: "98%", label: "Client Satisfaction", icon: Star, color: "magenta" as const },
//   { number: "15+", label: "Years Experience", icon: Clock, color: "green" as const },
//   { number: "24/7", label: "Support Available", icon: Globe, color: "blue" as const },
// ];

// const colorClasses: any = {
//   blue: "bg-blue-50 text-blue-600",
//   magenta: "bg-pink-50 text-pink-600",
//   green: "bg-green-50 text-green-600",
// };

// const StatsSection = () => {
//   return (
//     <section className="py-24 bg-gray-50">
//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
//           <p className="text-gray-600">Numbers that reflect our dedication and growth</p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//           {stats.map((stat, index) => {
//             const Icon = stat.icon;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ y: -120, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.7, delay: index * 0.2, type: "spring" }}
//                 viewport={{ once: true }}
//                 className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition"
//               >
//                 {/* Icon */}
//                 <div
//                   className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl ${colorClasses[stat.color]}`}
//                 >
//                   <Icon size={26} />
//                 </div>

//                 {/* Number */}
//                 <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>

//                 {/* Label */}
//                 <p className="text-gray-600">{stat.label}</p>
//               </motion.div>
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;




// import React from "react";
// import { motion } from "framer-motion";

// const stats = [
//   { number: "500+", label: "Projects Delivered" },
//   { number: "98%", label: "Client Satisfaction" },
//   { number: "15+", label: "Years Experience" },
//   { number: "24/7", label: "Support Available" },
// ];

// const StatsSection = () => {
//   return (
//     <section className="py-28 bg-white">
//       <div className="container mx-auto px-4 lg:px-8">

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
//           {stats.map((stat, index) => (
//             <div key={index}>

//               {/* Falling Number */}
//               <motion.h2
//                 initial={{ y: -150, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: index * 0.2,
//                   type: "spring",
//                 }}
//                 viewport={{ once: true }}
//                 className="text-5xl md:text-6xl font-black text-blue-600"
//               >
//                 {stat.number}
//               </motion.h2>

//               {/* Label */}
//               <p className="mt-3 text-gray-600 font-medium">
//                 {stat.label}
//               </p>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default StatsSection;



import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "200+", label: "Projects Delivered" },
  { number: "88%", label: "Client Satisfaction" },
  { number: "10+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
];

const StatsSection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-white">

      {/* 🔥 Soft Gradient Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] 
        bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
        opacity-10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">

              {/* 🔥 Falling Gradient Number */}
              <motion.h2
                initial={{ y: -150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-black 
                bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
                bg-clip-text text-transparent 
                group-hover:scale-110 transition-transform duration-300"
              >
                {stat.number}
              </motion.h2>

              {/* Label */}
              <p className="mt-3 text-gray-600 font-medium">
                {stat.label}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;