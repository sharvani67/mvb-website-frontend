// import logo from "@/assets/logg.png";

// export default function Aboutlogosection() {
//   return (
//     <section className="min-h-screen py-20 px-6 bg-gradient-to-r from-yellow-100 via-pink-100 to-blue-100 flex items-center">
      
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

//         {/* LEFT IMAGE */}
//         <div className="flex justify-center">
//           <img 
//             src={logo} 
//             alt="MVB Logo"
//             className="max-w-sm md:max-w-md w-full hover:scale-105 transition duration-500"
//           />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div>
//           <h2 className="text-4xl font-black text-pink-600 mb-6">
//             About MVB
//           </h2>

//           <p className="text-lg text-gray-700 leading-relaxed mb-4">
//             MV Business Solutions delivers innovative IT infrastructure, 
//             security, and cloud services tailored to modern business needs.
//           </p>

//           <p className="text-gray-600 mb-6">
//             We help organizations build scalable, secure, and efficient systems 
//             that drive growth and digital transformation.
//           </p>

//           {/* BUTTON */}
//           <button className="px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition">
//             Learn More
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }



// import logo from "@/assets/logg.png";

// export default function Aboutlogosection() {
//   return (
//     <section className="min-h-screen py-20 px-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 flex items-center">
      
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

//         {/* LEFT IMAGE */}
//         <div className="flex justify-center">
//           <img 
//             src={logo} 
//             alt="MVB Logo"
//             className="max-w-sm md:max-w-md w-full hover:scale-105 transition duration-500"
//           />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div>
//           <h2 className="text-4xl font-black text-white mb-6">
//             About MVB
//           </h2>

//           <p className="text-lg text-white/90 leading-relaxed mb-4">
//             MV Business Solutions delivers innovative IT infrastructure, 
//             security, and cloud services tailored to modern business needs.
//           </p>

//           <p className="text-white/80 mb-6">
//             We help organizations build scalable, secure, and efficient systems 
//             that drive growth and digital transformation.
//           </p>

//           {/* BUTTON */}
//           <button className="px-6 py-3 bg-white text-pink-600 rounded-lg font-semibold hover:bg-gray-100 transition">
//             Learn More
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }




import logo from "@/assets/logg.png";

export default function Aboutlogosection() {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 flex items-center">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img 
            src={logo} 
            alt="MVB Logo"
            className="max-w-sm md:max-w-md w-full hover:scale-105 transition duration-500 drop-shadow-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-5">

          <h2 className="text-4xl md:text-5xl font-black text-gray-800">
            About MVB
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            MV Business Solutions delivers innovative IT infrastructure, 
            security, and cloud services tailored to modern business needs.
          </p>

          <p className="text-gray-600">
            We help organizations build scalable, secure, and efficient systems 
            that drive growth and digital transformation.
          </p>

          {/* BUTTON */}
          {/* <button className="mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-md">
            Learn More
          </button> */}

        </div>

      </div>
    </section>
  );
}