// import React from "react";

// const CoreValues: React.FC = () => {
//   const values = [
//     {
//       title: "Customer Centricity",
//       desc: "Putting customers at the heart of every solution we deliver.",
//       icon: "🎯",
//       gradient: "from-pink-500 to-orange-400",
//     },
//     {
//       title: "Peace of Mind",
//       desc: "Ensuring reliability, security, and confidence in every engagement.",
//       icon: "🛡️",
//       gradient: "from-blue-500 to-indigo-500",
//     },
//     {
//       title: "Innovative Solutions",
//       desc: "Delivering simplified and cutting-edge technology solutions.",
//       icon: "💡",
//       gradient: "from-yellow-400 to-orange-500",
//     },
//     {
//       title: "Talent Growth",
//       desc: "Valuing people with respect and empowering continuous growth.",
//       icon: "🌱",
//       gradient: "from-green-400 to-emerald-500",
//     },
//     {
//       title: "Continuous Learning",
//       desc: "Adapting, evolving, and learning to stay ahead in technology.",
//       icon: "📘",
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       title: "Accountability",
//       desc: "Operating with transparency, responsibility, and trust.",
//       icon: "⚖️",
//       gradient: "from-cyan-500 to-blue-500",
//     },
//     {
//       title: "Right Value Proposition",
//       desc: "Delivering the right product with the right solution at the right value.",
//       icon: "📊",
//       gradient: "from-orange-500 to-red-500",
//     },
//     {
//       title: "Integrity & Results",
//       desc: "Working with honesty and commitment to achieve meaningful outcomes.",
//       icon: "🚀",
//       gradient: "from-indigo-500 to-purple-600",
//     },
//   ];

//   return (
//     <section className="py-20 bg-white relative overflow-hidden">

//       {/* 🌈 Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 opacity-40" />

//       {/* 🔹 Container */}
//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* 🔹 Header */}
//         <div className="text-center mb-16">
//           <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">
//             What Drives Us
//           </p>

//           <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
//             Our Core Values
//           </h2>

//           <div className="w-24 h-[3px] bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
//         </div>

//         {/* 🔹 Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

//           {values.map((item, index) => (
//             <div
//               key={index}
//               className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 hover:scale-105 transition-all duration-300"
//             >
//               {/* Card */}
//               <div className="bg-white rounded-2xl p-6 h-full shadow-md group-hover:shadow-xl transition-all duration-300">

//                 {/* Icon */}
//                 <div
//                   className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${item.gradient} text-white text-2xl mb-4 shadow-lg`}
//                 >
//                   {item.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   {item.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {item.desc}
//                 </p>

//                 {/* Hover Line */}
//                 <div className="mt-4 w-8 h-[2px] bg-gray-300 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 transition-all duration-300"></div>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreValues;




import React from "react";

const CoreValues: React.FC = () => {
  const values = [
    {
      title: "Customer Centricity",
      desc: "Putting customers at the heart of every solution we deliver.",
      icon: "🎯",
      gradient: "from-pink-500 to-orange-400",
    },
    {
      title: "Peace of Mind",
      desc: "Ensuring reliability, security, and confidence in every engagement.",
      icon: "🛡️",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Innovative",
      desc: "Delivering cutting-edge technology solutions that push boundaries.",
      icon: "💡",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Complex to Simplified Solutions",
      desc: "Transforming intricate challenges into elegant, easy-to-use solutions.",
      icon: "🔄",
      gradient: "from-green-400 to-emerald-500",
    },
    // {
    //   title: "Talent Growth",
    //   desc: "Valuing people with respect and empowering continuous growth.",
    //   icon: "🌱",
    //   gradient: "from-purple-500 to-pink-500",
    // },
    // {
    //   title: "Continuous Learning",
    //   desc: "Adapting, evolving, and learning to stay ahead in technology.",
    //   icon: "📘",
    //   gradient: "from-cyan-500 to-blue-500",
    // },
    // {
    //   title: "Right Value Proposition",
    //   desc: "Delivering the right product with the right solution at the right value.",
    //   icon: "📊",
    //   gradient: "from-orange-500 to-red-500",
    // },
    // {
    //   title: "Integrity & Results",
    //   desc: "Working with honesty and commitment to achieve meaningful outcomes.",
    //   icon: "🚀",
    //   gradient: "from-indigo-500 to-purple-600",
    // },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 opacity-40" />

      {/* 🔹 Container */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* 🔹 Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">
            What Drives Us
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Our Core Values
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 🔹 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {values.map((item, index) => (
            <div
              key={index}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 hover:scale-105 transition-all duration-300"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-6 h-full shadow-md group-hover:shadow-xl transition-all duration-300">

                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${item.gradient} text-white text-2xl mb-4 shadow-lg`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover Line */}
                <div className="mt-4 w-8 h-[2px] bg-gray-300 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 transition-all duration-300"></div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CoreValues;