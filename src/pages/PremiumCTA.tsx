// import { ArrowRight, Phone } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function CTASection() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const { offsetX, offsetY } = e.nativeEvent;
//     setMousePosition({ x: offsetX, y: offsetY });
//   };

//   const scrollToSection = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
//       <div
//         onMouseMove={handleMouseMove}
//         className="relative rounded-3xl overflow-hidden shadow-2xl"
//         style={{
//           background:
//             "linear-gradient(120deg, #ff3c8e, #ff7a18, #ffd93d, #22c55e, #3b82f6)",
//         }}
//       >
//         {/* 🔥 DARK OVERLAY (keeps text readable) */}
//         <div className="absolute inset-0 bg-black/35" />

//         {/* 🔹 Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-25"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1551434678-e076c223a692')",
//             transform: `translate(${mousePosition.x * 0.02}px, ${
//               mousePosition.y * 0.02
//             }px)`,
//           }}
//         />

//         {/* 🔥 Glow Layer */}
//         <div className="absolute inset-0 opacity-30 blur-2xl bg-gradient-to-r from-[#ff3c8e] via-[#ffd93d] to-[#3b82f6]" />

//         {/* 🔹 Content */}
//         <div className="relative z-10 py-14 md:py-16 px-6 md:px-12 text-center text-white">
          
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-xl">
//             Understand Your Key Stakeholders Better?
//           </h2>

//           <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
//             Let's help you navigate the complex B2B buying journey with tailored
//             solutions for each persona.
//           </p>

//           {/* 🔹 Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
//             {/* Primary */}
//            <Link to="/contact">
//   <button className="inline-flex items-center gap-2 bg-white text-[#ff3c8e] px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
//     Get Started <ArrowRight className="w-4 h-4" />
//   </button>
//       </Link>

//             {/* Secondary */}
//             <button
//               onClick={() => (window.location.href = "/contact")}
//               className="inline-flex items-center gap-2 border-2 border-white/70 hover:bg-white/20 px-8 py-3 rounded-full font-semibold transition-all"
//             >
//               Contact Sales <Phone className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { ArrowRight, Phone } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CTASection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setMousePosition({ x: offsetX, y: offsetY });
  };

  const scrollToContactForm = () => {
    navigate('/contact');
    // Small delay to allow page navigation before scrolling
    setTimeout(() => {
      const contactFormElement = document.getElementById('contact-form');
      if (contactFormElement) {
        contactFormElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div
        onMouseMove={handleMouseMove}
        className="relative rounded-3xl overflow-hidden shadow-2xl"
        style={{
          background:
            "linear-gradient(120deg, #ff3c8e, #ff7a18, #ffd93d, #22c55e, #3b82f6)",
        }}
      >
        {/* 🔥 DARK OVERLAY (keeps text readable) */}
        <div className="absolute inset-0 bg-black/35" />

        {/* 🔹 Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551434678-e076c223a692')",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        />

        {/* 🔥 Glow Layer */}
        <div className="absolute inset-0 opacity-30 blur-2xl bg-gradient-to-r from-[#ff3c8e] via-[#ffd93d] to-[#3b82f6]" />

        {/* 🔹 Content */}
        <div className="relative z-10 py-14 md:py-16 px-6 md:px-12 text-center text-white">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-xl">
            Understand Your Key Stakeholders Better?
          </h2>

          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's Help You Navigate The Complex B2B Buying Journey With Tailored
            Solutions For Each Persona.
          </p>

          {/* 🔹 Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            {/* Primary Button - Navigates to Contact Form */}
            <button 
              onClick={scrollToContactForm}
              className="inline-flex items-center gap-2 bg-white text-[#ff3c8e] px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary Button - Also navigates to Contact Form */}
            <button
              onClick={scrollToContactForm}
              className="inline-flex items-center gap-2 border-2 border-white/70 hover:bg-white/20 px-8 py-3 rounded-full font-semibold transition-all cursor-pointer"
            >
              Contact Sales <Phone className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}