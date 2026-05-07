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



import { useRef } from "react";
import videoFile from "@/assets/finalpyramidvideo.mp4";

export default function Pyramidvideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full h-[950px] overflow-hidden">
      {/* Background Video */}
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
  );
}