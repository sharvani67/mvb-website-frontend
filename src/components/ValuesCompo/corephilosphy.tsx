// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// import SectionWrapper from "@/components/SectionWrapper";
// import NetworkBackground from "@/components/NetworkBackground";
// import { Button } from "@/components/ui/button";

// import bgImage from "@/assets/team-collaboration.jpg"; // change image if needed

// const CorePhilosophy = () => {
//   return (
//     <section className="relative py-32 overflow-hidden">

//       {/* Background Image */}
//       <div className="absolute inset-0 -z-20">
//         <img
//           src={bgImage}
//           alt="Background"
//           className="w-full h-full object-cover opacity-30"
//         />
//       </div>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40 -z-10"></div>

//       {/* Network Background Animation */}
//       <NetworkBackground />

//       <div className="container mx-auto px-4 lg:px-8 relative z-10">
//         <SectionWrapper>

//           <div className="text-center max-w-3xl mx-auto">

//             <span className="text-xs uppercase tracking-widest text-mv-green font-semibold mb-6 block">
//               Our Core Philosophy
//             </span>

//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-[0.95]">
//               We Don't Just Deliver Projects —
//               <span className="gradient-text-animate block mt-2">
//                 We Build Trust at Scale
//               </span>
//             </h1>

//             <p className="text-xl text-gray-200 leading-relaxed mb-10">
//               Our values define how we think, build, and collaborate.
//               Every engagement is rooted in clarity, accountability,
//               and long-term impact.
//             </p>

//             <Link to="/contact">
//               <Button
//                 size="lg"
//                 className="magnetic-btn gradient-brand text-white font-bold h-14 px-10"
//               >
//                 Work With Us <ArrowRight size={18} />
//               </Button>
//             </Link>

//           </div>

//         </SectionWrapper>
//       </div>

//     </section>
//   );
// };

// export default CorePhilosophy;




// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// import SectionWrapper from "@/components/SectionWrapper";
// import NetworkBackground from "@/components/NetworkBackground";
// import { Button } from "@/components/ui/button";

// import bgVideo from "@/assets/networking.mp4"; // add video in assets

// const CorePhilosophy = () => {
//   return (
//     <section className="relative py-32 overflow-hidden">

//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover -z-20"
//       >
//         <source src={bgVideo} type="video/mp4" />
//       </video>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50 -z-10"></div>

//       {/* Network Background */}
//       <NetworkBackground />

//       <div className="container mx-auto px-4 lg:px-8 relative z-10">
//         <SectionWrapper>
//           <div className="text-center max-w-3xl mx-auto">

          
//             <span className="text-xs uppercase tracking-widest text-white font-semibold mb-6 block">
//               Our Core Philosophy
//             </span>

//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-[0.95]">
//               We Don't Just Deliver Projects —
//               <span className="gradient-text-animate block mt-2">
//                 We Build Trust at Scale
//               </span>
//             </h1>

//             <p className="text-xl text-gray-200 leading-relaxed mb-10">
//               Our values define how we think, build, and collaborate.
//               Every engagement is rooted in clarity, accountability,
//               and long-term impact.
//             </p>

//             <Link to="/contact">
//               <Button
//                 size="lg"
//                 className="magnetic-btn gradient-brand text-white font-bold h-14 px-10"
//               >
//                 Work With Us <ArrowRight size={18} />
//               </Button>
//             </Link>

//           </div>
//         </SectionWrapper>
//       </div>

//     </section>
//   );
// };

// export default CorePhilosophy;


import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import SectionWrapper from "@/components/SectionWrapper";
import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/ui/button";

import bgVideo from "@/assets/networking.mp4";

const CorePhilosophy = () => {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* ✅ Bright Gradient Overlay (UPDATED) */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 via-yellow-400/70 to-blue-600/80 -z-10"></div>

      {/* Optional Glass Effect (Premium Look) */}
      <div className="absolute inset-0 backdrop-blur-[2px] -z-10"></div>

      {/* Network Background */}
      <NetworkBackground />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionWrapper>
          <div className="text-center max-w-3xl mx-auto">

            <span className="text-xs uppercase tracking-widest text-white font-semibold mb-6 block">
              Our Core Philosophy
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-[0.95]">
              We Don't Just Deliver Projects —
              <span className="block mt-2 text-yellow-300">
                We Build Trust at Scale
              </span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed mb-10">
              Our values define how we think, build, and collaborate.
              Every engagement is rooted in clarity, accountability,
              and long-term impact.
            </p>

            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-pink-600 font-bold h-14 px-10 hover:scale-105 transition shadow-lg"
              >
                Work With Us <ArrowRight size={18} />
              </Button>
            </Link>

          </div>
        </SectionWrapper>
      </div>

    </section>
  );
};

export default CorePhilosophy;