// import videoFile from "@/assets/hero-video.mp4";

// export default function VideoSection() {
//   return (
//     <section className="w-full h-screen overflow-hidden">
//       <video
//         src={videoFile}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="w-full h-full object-cover"
//       />
//     </section>
//   );
// }



// import videoFile from "@/assets/hero-video.mp4";
// import { ArrowRight } from "lucide-react";

// export default function VideoSection() {
//   return (
//     <section className="w-full min-h-screen flex flex-col lg:flex-row items-center bg-white">

//       {/* 📝 Left Content */}
//       <div className="w-full lg:w-1/2 px-6 md:px-12 py-12">
//         <div className="max-w-xl">
          
//           <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//             Build Smarter Infrastructure with
//             <span className="block text-orange-500">
//               Modern Technology
//             </span>
//           </h1>

//           <p className="text-gray-600 text-lg mb-8">
//             Deliver scalable, secure, and high-performance IT solutions designed 
//             for enterprise growth and future-ready operations.
//           </p>

//           <div className="flex gap-4">
//             <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition">
//               Get Started <ArrowRight size={18} />
//             </button>

//             <button className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-full transition">
//               Learn More
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* 🎥 Right Video */}
//       <div className="w-full lg:w-1/2 h-[300px] md:h-[500px] lg:h-screen">
//         <video
//           src={videoFile}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         />
//       </div>

//     </section>
//   );
// }




// import videoFile from "@/assets/About.mp4";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function PremiumVideoSection() {
//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">

//       {/* 🌈 Bright Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200 opacity-70" />

//       {/* ✨ Soft Glow Blobs */}
//       <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl" />
//       <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/40 rounded-full blur-3xl" />

//       {/* 🔥 Main Container */}
//       <div className="relative z-10 max-w-7xl w-full px-6 grid md:grid-cols-2 gap-12 items-center">

//         {/* 📝 LEFT CONTENT */}
//         <div className="space-y-6">
          
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
//             Powering Future with
//             <span className="block bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
//               Smart Technology
//             </span>
//           </h1>

//           <p className="text-gray-600 text-lg">
//             Experience high-performance infrastructure, secure systems, and AI-ready solutions designed for modern businesses.
//           </p>

//           <div className="flex gap-4">
//            <Link to="/contact">
//   <button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition">
//     Get Started <ArrowRight size={18} />
//   </button>
// </Link>

//             {/* <button className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition">
//               Learn More
//             </button> */}
//           </div>
//         </div>

//         {/* 🎥 RIGHT VIDEO CARD */}
//         <div className="relative group">
          
//           {/* Glass Light Card */}
//           <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-xl" />

//           {/* Video */}
//           <video
//             src={videoFile}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="relative rounded-3xl transform group-hover:scale-105 transition duration-500"
//           />

//           {/* Glow Border */}
//           <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-pink-400/60 transition" />
//         </div>

//       </div>
//     </section>
//   );
// }




// import { useRef } from "react";
// import videoFile from "@/assets/About.mp4";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function PremiumVideoSection({ contactRef }) {
//   const scrollToContact = () => {
//     if (contactRef?.current) {
//       contactRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">

//       {/* 🌈 Bright Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200 opacity-70" />

//       {/* ✨ Soft Glow Blobs */}
//       <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl" />
//       <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/40 rounded-full blur-3xl" />

//       {/* 🔥 Main Container */}
//       <div className="relative z-10 max-w-7xl w-full px-6 grid md:grid-cols-2 gap-12 items-center">

//         {/* 📝 LEFT CONTENT */}
//         <div className="space-y-6">
          
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
//             Powering Future with
//             <span className="block bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
//               Smart Technology
//             </span>
//           </h1>

//           <p className="text-gray-600 text-lg">
//             Experience high-performance infrastructure, secure systems, and AI-ready solutions designed for modern businesses.
//           </p>

//           <div className="flex gap-4">
//             <button 
//               onClick={scrollToContact}
//               className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition cursor-pointer"
//             >
//               Get Started <ArrowRight size={18} />
//             </button>
//           </div>
//         </div>

//         {/* 🎥 RIGHT VIDEO CARD */}
//         <div className="relative group">
          
//           {/* Glass Light Card */}
//           <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-xl" />

//           {/* Video */}
//           <video
//             src={videoFile}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="relative rounded-3xl transform group-hover:scale-105 transition duration-500"
//           />

//           {/* Glow Border */}
//           <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-pink-400/60 transition" />
//         </div>

//       </div>
//     </section>
//   );
// }




// import { useRef } from "react";
// import { useNavigate } from "react-router-dom"; // Add this import
// // import videoFile from "@/assets/About.mp4";
// // import videoFile from "@/assets/homevideo.mp4";
// import videoFile from "@/assets/infinityvideo.mp4";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function PremiumVideoSection({ contactRef }) {
//   const navigate = useNavigate(); // Add this hook

//   const scrollToContact = () => {
//     if (contactRef?.current) {
//       // If contactRef is provided (on the same page), scroll to it
//       contactRef.current.scrollIntoView({ behavior: "smooth" });
//     } else {
//       // Otherwise navigate to contact page
//       navigate('/contact');
//       // Optional: Add a small delay to allow page navigation before scrolling
//       setTimeout(() => {
//         const contactFormElement = document.getElementById('contact-form');
//         if (contactFormElement) {
//           contactFormElement.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 100);
//     }
//   };

//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">

//       {/* 🌈 Bright Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200 opacity-70" />

//       {/* ✨ Soft Glow Blobs */}
//       <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl" />
//       <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/40 rounded-full blur-3xl" />

//       {/* 🔥 Main Container */}
//       <div className="relative z-10 max-w-7xl w-full px-6 grid md:grid-cols-2 gap-12 items-center">

//         {/* 📝 LEFT CONTENT */}
//         <div className="space-y-6">
          
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
//             Powering Your Business Future Data with
//             <span className="block bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
//               Smart & Secure Technology 
//             </span>
//           </h1>

//           <p className="text-gray-600 text-lg">
//             Experience Business Centric IT Infra for Large & Emerging Enterprise, 
//             Manufacturing , Datacenter, Consultants and Others
//           </p>

//           {/* <div className="flex gap-4">
//             <button 
//               onClick={scrollToContact}
//               className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition cursor-pointer"
//             >
//               Get Started <ArrowRight size={18} />
//             </button>
//           </div> */}
//         </div>

//         {/* 🎥 RIGHT VIDEO CARD */}
//         <div className="relative group">
          
//           {/* Glass Light Card */}
//           <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-xl" />

//           {/* Video */}
//           <video
//             src={videoFile}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="relative rounded-3xl transform group-hover:scale-105 transition duration-500"
//           />

//           {/* Glow Border */}
//           <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-pink-400/60 transition" />
//         </div>

//       </div>
//     </section>
//   );
// }




import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import videoFile from "@/assets/MVBFinalinfinity video.mp4";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PremiumVideoSection({ contactRef }) {
  const navigate = useNavigate();

  const scrollToContact = () => {
    if (contactRef?.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate('/contact');
      setTimeout(() => {
        const contactFormElement = document.getElementById('contact-form');
        if (contactFormElement) {
          contactFormElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">

      {/* 🌈 Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200 opacity-70" />

      {/* ✨ Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/40 rounded-full blur-3xl" />

      {/* 🔥 Main Container */}
      <div className="relative z-10 max-w-7xl w-full px-6 grid md:grid-cols-[1fr_1.3fr] gap-12 items-center">

        {/* 📝 LEFT CONTENT */}
        <div className="space-y-6">
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            EmPowering Your Business with
            <span className="block bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
              Smart & Secure Technology 
            </span>
          </h1>

          {/* <p className="text-gray-600 text-lg">
            Experience Business Centric IT Infra for Large & Emerging Enterprise, 
            Manufacturing, Datacenter, Consultants and Others
          </p> */}

          {/* Optional Button */}
          {/* 
          <div className="flex gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition cursor-pointer"
            >
              Get Started <ArrowRight size={18} />
            </button>
          </div> 
          */}
        </div>

        {/* 🎥 RIGHT VIDEO SECTION */}
        <div className="relative group w-full max-w-3xl mx-auto">
          
          {/* Glass Card */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-xl" />

          {/* Video */}
          <video
  src={videoFile}
  autoPlay
  loop
  muted
  playsInline
  className="relative w-full h-[360px] md:h-[400px] object-contain md:object-cover rounded-3xl transform group-hover:scale-105 transition duration-500"
/>

          {/* Hover Border Glow */}
          <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-pink-400/60 transition" />
        </div>

      </div>
    </section>
  );
}