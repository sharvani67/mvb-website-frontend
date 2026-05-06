import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Sparkles } from "lucide-react";

// Import Images
import img1 from "@/assets/team-collaboration.jpg";
import img2 from "@/assets/team-collaboration.jpg";
import img3 from "@/assets/team-collaboration.jpg";
import img4 from "@/assets/team-collaboration.jpg";

const brandPrinciples = [
  {
    title: "Consistency",
    desc: "Maintain uniform design and messaging across all platforms.",
    image: img1,
  },
  {
    title: "Clarity",
    desc: "Keep communication simple and impactful.",
    image: img2,
  },
  {
    title: "Authenticity",
    desc: "Stay true to our mission and values.",
    image: img3,
  },
  {
    title: "Innovation",
    desc: "Continuously improve and evolve our solutions.",
    image: img4,
  },
];

const BrandPrinciples = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Heading */}
        <SectionWrapper>
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-4 block">
              Brand Principles
            </span>

            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              How We Apply Our Brand
            </h2>

            <p className="text-gray-500 max-w-lg mx-auto">
              Guiding principles that ensure our brand remains strong and consistent
            </p>
          </div>
        </SectionWrapper>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandPrinciples.map((p, i) => (
            <SectionWrapper key={p.title} delay={i * 100}>
              <div className="relative group overflow-hidden rounded-2xl shadow-lg h-full">

                {/* Image */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition duration-500"
                />

                {/* Card Content */}
                <div className="relative p-8 text-center bg-white group-hover:bg-black/40 transition">
                  <Sparkles size={24} className="text-blue-600 mx-auto mb-4" />

                  <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-white">
                    {p.title}
                  </h3>

                  <p className="text-sm text-gray-500 group-hover:text-gray-200">
                    {p.desc}
                  </p>
                </div>

              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPrinciples;




// import React from "react";
// import { Sparkles } from "lucide-react";
// import SectionWrapper from "@/components/SectionWrapper";

// // Import Images
// import img1 from "@/assets/team-collaboration.jpg";
// import img2 from "@/assets/team-collaboration.jpg";
// import img3 from "@/assets/team-collaboration.jpg";
// import img4 from "@/assets/team-collaboration.jpg";

// const brandPrinciples = [
//   {
//     title: "Consistency",
//     desc: "Our brand elements are applied consistently across all touchpoints.",
//     image: img1,
//   },
//   {
//     title: "Clarity",
//     desc: "Every visual element serves a purpose and communicates clearly.",
//     image: img2,
//   },
//   {
//     title: "Premium Feel",
//     desc: "Quality materials and sophisticated design at every level.",
//     image: img3,
//   },
//   {
//     title: "Accessibility",
//     desc: "Our brand is designed to be accessible and inclusive for all.",
//     image: img4,
//   },
// ];

// const BrandPrinciples = () => {
//   return (
//     <section className="py-28 bg-gray-50">
//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Section Heading */}
//         <SectionWrapper>
//           <div className="text-center mb-20">
//             <span className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-4 block">
//               Brand Principles
//             </span>

//             <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
//               How We Apply Our Brand
//             </h2>

//             <p className="text-gray-500 max-w-xl mx-auto">
//               Guiding principles that ensure our brand remains strong,
//               recognizable, and consistent across every touchpoint.
//             </p>
//           </div>
//         </SectionWrapper>

//         {/* Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {brandPrinciples.map((p, i) => (
//             <SectionWrapper key={p.title} delay={i * 100}>
//               <div className="relative group rounded-2xl overflow-hidden shadow-xl h-72">

//                 {/* Image */}
//                 <img
//                   src={p.image}
//                   alt={p.title}
//                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/50"></div>

//                 {/* Content */}
//                 <div className="relative z-10 flex flex-col justify-center items-center h-full text-center p-6">

//                   <Sparkles
//                     size={28}
//                     className="text-white mb-4"
//                   />

//                   <h3 className="text-xl font-bold text-white mb-2">
//                     {p.title}
//                   </h3>

//                   <p className="text-sm text-gray-200">
//                     {p.desc}
//                   </p>

//                 </div>

//               </div>
//             </SectionWrapper>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default BrandPrinciples;