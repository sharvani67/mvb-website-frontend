// import { useRef } from "react";
// import videoFile from "@/assets/pyramidvideo.mp4"; 

// export default function Pyramidvideo() {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   return (
//     <section className="relative w-full h-[70vh] overflow-hidden">
//       {/* Background Video */}
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src={videoFile} type="video/mp4" />
//       </video>

//       {/* Dark Overlay */}
//       {/* <div className="absolute inset-0 bg-black/60" /> */}

     
     
//     </section>
//   );
// }




// import { useRef } from "react";
// import videoFile from "@/assets/finalpyramidvideo.mp4";

// export default function Pyramidvideo() {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src={videoFile} type="video/mp4" />
//       </video>
//     </section>
//   );
// }




// import { useRef } from "react";
// import videoFile from "@/assets/finalpyramidvideo.mp4";

// export default function Pyramidvideo() {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   return (
//     <section className="relative w-full h-[750px] overflow-hidden">
//       {/* Background Video */}
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src={videoFile} type="video/mp4" />
//       </video>
//     </section>
//   );
// }




// import { useRef } from "react";
// import videoFile from "@/assets/finalpyramidvideo.mp4";

// export default function Pyramidvideo() {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   return (
//     <section className="relative w-full h-[750px] overflow-hidden">
//       {/* Background Video */}
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src={videoFile} type="video/mp4" />
//       </video>

//       {/* Overlay */}
//       {/* <div className="absolute inset-0 bg-black/30"></div> */}

//       {/* Heading Content */}
//       <div className="relative z-10 flex items-start justify-center h-full px-6 pt-24 text-center">
//        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
//             EmPowering Your Business with
//             <span className="block bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
//               Smart & Secure Technology 
//             </span>
//           </h1>
//       </div>
//     </section>
//   );
// }



import { useRef } from "react";
import videoFile from "@/assets/newfinalpyramidvideo.mp4";

export default function Pyramidvideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
     {/* Heading After Video */}
       <div className="relative z-10 flex items-start justify-center h-full px-6 pt-24 text-center mb-6">
       <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
             EmPowering Your Business with
           <span className="block bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
               Smart & Secure Technology 
            </span>
          </h1>
       </div>

      {/* Fixed Video Section */}
      <section className="relative w-full h-[750px] overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoFile} type="video/mp4" />
        </video>
      </section>

     
    </>
  );
}