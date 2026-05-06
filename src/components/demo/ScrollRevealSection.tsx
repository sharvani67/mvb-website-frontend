// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import logo from "@/assets/MVBlogo.png"; // your logo

// const ScrollRevealSection = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   // Zoom effect
//   const scale = useTransform(scrollYProgress, [0, 0.4], [1, 3]);
//   const opacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);

//   // Next section reveal
//   const aboutOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
//   const aboutY = useTransform(scrollYProgress, [0.5, 0.8], [100, 0]);

//   return (
//     <div ref={ref} className="h-[200vh] relative bg-black text-white">

//       {/* SECTION 1 - LOGO ZOOM */}
//       <motion.div
//         style={{ scale, opacity }}
//         className="sticky top-0 h-screen flex flex-col items-center justify-center"
//       >
//         <img src={logo} alt="logo" className="w-40 md:w-56 mb-6" />
//         <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
//           MVB Solutions
//         </h1>
//       </motion.div>

//       {/* SECTION 2 - ABOUT US */}
//       <motion.div
//         style={{ opacity: aboutOpacity, y: aboutY }}
//         className="absolute top-0 left-0 w-full h-screen flex items-center justify-center px-6 md:px-20"
//       >
//         <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl">

//           {/* Image */}
//           <div className="overflow-hidden rounded-2xl shadow-lg">
//             <img
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978"
//               className="w-full h-full object-cover"
//               alt="about"
//             />
//           </div>

//           {/* Content */}
//           <div>
//             <h2 className="text-3xl md:text-5xl font-bold mb-4">
//               About MVB Solutions
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               MVB Solutions is dedicated to delivering high-quality IT and business
//               solutions that empower companies to grow and innovate. We specialize
//               in modern web development, network infrastructure, and scalable
//               digital systems.
//             </p>
//             <p className="text-gray-400">
//               Our mission is to combine creativity with technology to provide
//               reliable and future-ready solutions for our clients.
//             </p>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ScrollRevealSection;





// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import logo from "@/assets/MVBlogo.png";

// const ScrollRevealSection = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   // 🔹 LOGO (fade + zoom)
//   const scale = useTransform(scrollYProgress, [0, 0.35], [1, 3]);
//   const opacity = useTransform(scrollYProgress, [0.25, 0.4], [1, 0]);

//   // 🔹 ABOUT (starts EXACTLY when logo disappears)
//   const aboutOpacity = useTransform(scrollYProgress, [0.38, 0.6], [0, 1]);
//   const aboutY = useTransform(scrollYProgress, [0.38, 0.6], [80, 0]);

//   return (
//     <div ref={ref} className="bg-black text-white">

//       {/* 🔥 SECTION 1 */}
//       <div className="h-screen">
//         <motion.div
//           style={{ scale, opacity }}
//           className="sticky top-0 h-screen flex flex-col items-center justify-center"
//         >
//           <img src={logo} alt="logo" className="w-40 md:w-56 mb-6" />

//           <h1 className="text-4xl md:text-6xl font-bold text-center">
//             MVB Solutions
//           </h1>
//         </motion.div>
//       </div>

//       {/* 🔥 SECTION 2 (NO DELAY) */}
//       <motion.div
//         style={{ opacity: aboutOpacity, y: aboutY }}
//         className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-gradient-to-b from-black to-gray-900"
//       >
//         <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">

//           {/* Image */}
//           <div className="overflow-hidden rounded-2xl shadow-2xl">
//             <img
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978"
//               className="w-full h-full object-cover"
//               alt="about"
//             />
//           </div>

//           {/* Content */}
//           <div>
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">
//               About MVB Solutions
//             </h2>

//             <p className="text-gray-300 mb-4">
//               MVB Solutions delivers high-quality IT and business solutions that
//               help companies grow and innovate in the digital world.
//             </p>

//             <p className="text-gray-400 mb-6">
//               We specialize in web development, network infrastructure, and
//               scalable systems designed for modern businesses.
//             </p>

//             <button className="px-6 py-3 bg-white text-black rounded-full font-semibold">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ScrollRevealSection;




// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import logo from "@/assets/MVBlogo.png";

// const ScrollRevealSection = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   // 🔹 LOGO animation
//   const scale = useTransform(scrollYProgress, [0, 0.4], [1, 3]);
//   const logoOpacity = useTransform(scrollYProgress, [0.3, 0.45], [1, 0]);

//   // 🔹 ABOUT animation (OVERLAPS perfectly)
//   const aboutOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
//   const aboutY = useTransform(scrollYProgress, [0.35, 0.6], [100, 0]);

//   return (
//     <div ref={ref} className="h-[200vh] relative bg-black text-white">

//       {/* 🔥 STICKY CONTAINER (KEY FIX) */}
//       <div className="sticky top-0 h-screen overflow-hidden">

//         {/* 🔹 LOGO LAYER */}
//         <motion.div
//           style={{ scale, opacity: logoOpacity }}
//           className="absolute inset-0 flex flex-col items-center justify-center z-10"
//         >
//           <img src={logo} alt="logo" className="w-40 md:w-56 mb-6" />
//           <h1 className="text-4xl md:text-6xl font-bold text-center">
//             MVB Solutions
//           </h1>
//         </motion.div>

//         {/* 🔹 ABOUT LAYER */}
//         <motion.div
//           style={{ opacity: aboutOpacity, y: aboutY }}
//           className="absolute inset-0 flex items-center justify-center px-6 md:px-20 z-20"
//         >
//           <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">

//             {/* Image */}
//             <div className="overflow-hidden rounded-2xl shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978"
//                 className="w-full h-full object-cover"
//                 alt="about"
//               />
//             </div>

//             {/* Content */}
//             <div>
//               <h2 className="text-3xl md:text-5xl font-bold mb-6">
//                 About MVB Solutions
//               </h2>

//               <p className="text-gray-300 mb-4">
//                 MVB Solutions delivers high-quality IT and business solutions
//                 that help companies grow and innovate.
//               </p>

//               <p className="text-gray-400 mb-6">
//                 We specialize in web development, network infrastructure, and
//                 scalable systems designed for modern businesses.
//               </p>

//               <button className="px-6 py-3 bg-white text-black rounded-full font-semibold">
//                 Learn More
//               </button>
//             </div>

//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// };

// export default ScrollRevealSection;



// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import logo from "@/assets/MVBlogo.png";
// import image from "@/assets/about-removebg-preview.png";

// const ScrollRevealSection = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   // 🔹 LOGO
//   const scale = useTransform(scrollYProgress, [0, 0.4], [1, 3]);
//   const logoOpacity = useTransform(scrollYProgress, [0.3, 0.45], [1, 0]);

//   // 🔹 ABOUT (SQUEEZE EFFECT)
//   const aboutOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
//   const scaleX = useTransform(scrollYProgress, [0.35, 0.6], [0.7, 1]);
//   const scaleY = useTransform(scrollYProgress, [0.35, 0.6], [1.2, 1]);

//   return (
//     <div ref={ref} className="h-[200vh] relative">

//       {/* 🔥 STICKY SCENE */}
//       <div className="sticky top-0 h-screen overflow-hidden">

//         {/* ================= LOGO SECTION ================= */}
//         <motion.div
//           style={{ scale, opacity: logoOpacity }}
//           className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white z-10"
//         >
//           <img
//             src={logo}
//             alt="logo"
//             className="w-40 md:w-56 mb-6"
//           />

//           <h1 className="text-4xl md:text-6xl font-bold text-center">
//             MVB Solutions
//           </h1>
//         </motion.div>

//         {/* ================= ABOUT SECTION ================= */}
//         <motion.div
//           style={{ 
//             opacity: aboutOpacity, 
//             scaleX, 
//             scaleY 
//           }}
//           className="absolute inset-0 flex items-center justify-center px-6 md:px-20 z-20
//                      bg-gradient-to-br from-[#fdfbfb] via-[#ebedee] to-[#dfe9f3] text-gray-900"
//         >

//           <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">

//             {/* 🔹 IMAGE */}
//             <motion.div
//               initial={{ scale: 1.2, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="overflow-hidden rounded-2xl "
//             >
//               <img
//                 src={image}
//                 className="w-full h-full object-cover"
//                 alt="about"
//               />
//             </motion.div>

//             {/* 🔹 CONTENT (NO CARD) */}
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: {},
//                 visible: {
//                   transition: { staggerChildren: 0.2 },
//                 },
//               }}
//             >
//               <motion.h2
//                 variants={{
//                   hidden: { opacity: 0, y: 40 },
//                   visible: { opacity: 1, y: 0 },
//                 }}
//                 className="text-3xl md:text-5xl font-bold mb-6"
//               >
//                 About MVB Solutions
//               </motion.h2>

//               <motion.p
//                 variants={{
//                   hidden: { opacity: 0, y: 30 },
//                   visible: { opacity: 1, y: 0 },
//                 }}
//                 className="mb-4 text-lg text-gray-700"
//               >
//                 MVB Solutions delivers high-quality IT and business solutions
//                 that help companies grow and innovate in the digital world.
//               </motion.p>

//               <motion.p
//                 variants={{
//                   hidden: { opacity: 0, y: 30 },
//                   visible: { opacity: 1, y: 0 },
//                 }}
//                 className="mb-6 text-gray-600"
//               >
//                 We specialize in web development, network infrastructure,
//                 and scalable systems designed for future-ready businesses.
//               </motion.p>

//               <motion.button
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { opacity: 1, y: 0 },
//                 }}
//                 whileHover={{ scale: 1.08 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 rounded-full font-semibold text-white
//                            bg-gradient-to-r from-[#FF7A00] via-[#FF2E63] to-[#7B2FF7]"
//               >
//                 Learn More
//               </motion.button>
//             </motion.div>

//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// };

// export default ScrollRevealSection;






import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logo from "@/assets/MVBlogo.png";
import image from "@/assets/about-removebg-preview.png";

const ScrollRevealSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 🔹 LOGO SCROLL ANIMATION
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 3]);
  const logoOpacity = useTransform(scrollYProgress, [0.3, 0.45], [1, 0]);

  // 🔹 ABOUT (SQUEEZE EFFECT)
  const aboutOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
  const scaleX = useTransform(scrollYProgress, [0.35, 0.6], [0.7, 1]);
  const scaleY = useTransform(scrollYProgress, [0.35, 0.6], [1.2, 1]);

  return (
    <div ref={ref} className="h-[200vh] relative">

      {/* 🔥 STICKY SCENE */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ================= LOGO SECTION ================= */}
        <motion.div
          style={{ scale, opacity: logoOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white z-10 overflow-hidden"
        >

          {/* 🌈 GLOW BACKGROUND */}
          <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur-[120px] opacity-30 animate-pulse" />

          {/* 🔹 LOGO */}
          <motion.img
            src={logo}
            alt="logo"
            className="w-40 md:w-56 mb-6 relative z-10"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* 🔹 TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.05em" }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-center relative z-10"
          >
            MVB Solutions
          </motion.h1>

          {/* 🔹 UNDERLINE */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mt-4 rounded-full"
          />
        </motion.div>

        {/* ================= ABOUT SECTION ================= */}
        <motion.div
          style={{
            opacity: aboutOpacity,
            scaleX,
            scaleY,
          }}
          className="absolute inset-0 flex items-center justify-center px-6 md:px-20 z-20
                     bg-gradient-to-br from-[#fdfbfb] via-[#ebedee] to-[#dfe9f3] text-gray-900"
        >

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">

            {/* 🔹 IMAGE */}
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                className="w-full h-full object-cover"
                alt="about"
              />
            </motion.div>

            {/* 🔹 CONTENT */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                About MVB Solutions
              </motion.h2>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mb-4 text-lg text-gray-700"
              >
                MVB Solutions delivers high-quality IT and business solutions
                that help companies grow and innovate in the digital world.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mb-6 text-gray-600"
              >
                We specialize in web development, network infrastructure,
                and scalable systems designed for future-ready businesses.
              </motion.p>

              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full font-semibold text-white
                           bg-gradient-to-r from-[#FF7A00] via-[#FF2E63] to-[#7B2FF7]"
              >
                Learn More
              </motion.button>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ScrollRevealSection;