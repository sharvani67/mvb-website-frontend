// type Props = {
//   side?: "right" | "left";
// };

// export default function ModernFrameBackground({ side = "right" }: Props) {
//   const isRight = side === "right";

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">

//       {/* Soft Gradient Glow */}
//       <div
//         className={`absolute ${
//           isRight ? "top-[-150px] right-[-120px]" : "bottom-[-150px] left-[-120px]"
//         } w-[500px] h-[500px] blur-[120px] opacity-20`}
//         style={{
//           background:
//             "linear-gradient(135deg,#6366f1,#3b82f6,#22d3ee)"
//         }}
//       />

//       {/* Frame Shape */}
//       <svg
//         className={`absolute ${
//           isRight ? "top-0 right-0" : "bottom-0 left-0"
//         } w-[60%] h-full`}
//         viewBox="0 0 900 900"
//         preserveAspectRatio="none"
//       >
//         <defs>
//           <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#6366f1"/>
//             <stop offset="100%" stopColor="#22d3ee"/>
//           </linearGradient>
//         </defs>

//         {isRight ? (
//           <path
//             d="M350 0C600 200 750 450 900 900L900 0Z"
//             fill="url(#frameGrad)"
//             opacity="0.08"
//           />
//         ) : (
//           <path
//             d="M0 900C200 650 450 350 900 0L0 0Z"
//             fill="url(#frameGrad)"
//             opacity="0.08"
//           />
//         )}
//       </svg>

//     </div>
//   );
// }




import { useEffect } from "react";

const STYLES = `
@keyframes morphBlob{
0%,100%{border-radius:60% 40% 55% 45%/50% 60% 40% 50%;}
33%{border-radius:35% 65% 40% 60%/60% 35% 65% 40%;}
66%{border-radius:55% 45% 65% 35%/35% 55% 45% 65%;}
}

@keyframes float{
0%,100%{transform:translateY(0);}
50%{transform:translateY(-18px);}
}

.blob-frame{
position:absolute;
width:650px;
height:600px;
background:linear-gradient(135deg,#ff2d75,#ff7a18,#ffd200,#00d4ff,#4f46e5);
animation:morphBlob 12s ease-in-out infinite, float 10s ease-in-out infinite;
opacity:.85;
}

.dots-bg{
position:absolute;
inset:0;
background-image:radial-gradient(circle,rgba(255,122,24,.15) 1.5px,transparent 1.5px);
background-size:32px 32px;
}

.glow-grad{
position:absolute;
width:500px;
height:500px;
background:radial-gradient(circle,#ff2d7540,transparent 70%);
filter:blur(80px);
}
`;

type Props = {
  side?: "right" | "left";
};

export default function BlobFrameBackground({ side = "right" }: Props) {

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = STYLES;
    document.head.appendChild(style);
  }, []);

  const isRight = side === "right";

  return (
    <>
      <div className="dots-bg"></div>

      <div
        className="blob-frame"
        style={
          isRight
            ? { top: "-120px", right: "-150px" }
            : { bottom: "-120px", left: "-150px" }
        }
      />

      <div
        className="glow-grad"
        style={
          isRight
            ? { top: "120px", right: "120px" }
            : { bottom: "120px", left: "120px" }
        }
      />
    </>
  );
}





// import { useEffect } from "react";

// const STYLES = `
// @keyframes frameGlow{
// 0%,100%{opacity:.6;}
// 50%{opacity:1;}
// }

// .frame-wrapper{
// position:absolute;
// inset:0;
// overflow:hidden;
// }

// .frame-shape{
// position:absolute;
// width:520px;
// height:420px;
// border-radius:30px;
// border:4px solid transparent;
// background:
// linear-gradient(#fff,#fff) padding-box,
// linear-gradient(135deg,#ff2d75,#ff7a18,#ffd200,#00d4ff,#4f46e5) border-box;
// box-shadow:0 20px 60px rgba(0,0,0,.08);
// animation:frameGlow 6s ease-in-out infinite;
// }

// .frame-outline{
// position:absolute;
// width:560px;
// height:460px;
// border-radius:36px;
// border:2px dashed rgba(0,0,0,.08);
// }

// .corner-accent{
// position:absolute;
// width:80px;
// height:80px;
// border-top:5px solid #ff2d75;
// border-left:5px solid #ff2d75;
// border-radius:12px;
// }
// `;

// type Props = {
//   side?: "right" | "left";
// };

// export default function AngularFrameBackground({ side = "right" }: Props) {

//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = STYLES;
//     document.head.appendChild(style);
//   }, []);

//   const isRight = side === "right";

//   return (
//     <div className="frame-wrapper">

//       <div
//         className="frame-outline"
//         style={
//           isRight
//             ? { top: "120px", right: "80px" }
//             : { bottom: "120px", left: "80px" }
//         }
//       />

//       <div
//         className="frame-shape"
//         style={
//           isRight
//             ? { top: "140px", right: "100px" }
//             : { bottom: "140px", left: "100px" }
//         }
//       />

//       <div
//         className="corner-accent"
//         style={
//           isRight
//             ? { top: "110px", right: "70px" }
//             : { bottom: "110px", left: "70px" }
//         }
//       />

//     </div>
//   );
// }





// import { useEffect } from "react";

// const STYLES = `
// .network-bg{
// position:absolute;
// inset:0;
// overflow:hidden;
// }

// .network-line{
// position:absolute;
// width:2px;
// background:linear-gradient(180deg,#ff2d75,#ff7a18,#ffd200,#00d4ff,#4f46e5);
// opacity:.25;
// animation:moveLine 8s linear infinite;
// }

// @keyframes moveLine{
// 0%{transform:translateY(-100%);}
// 100%{transform:translateY(100vh);}
// }

// .node{
// position:absolute;
// width:10px;
// height:10px;
// border-radius:50%;
// background:#00d4ff;
// box-shadow:0 0 15px #00d4ff;
// animation:pulseNode 3s ease-in-out infinite;
// }

// @keyframes pulseNode{
// 0%,100%{transform:scale(1);opacity:.7;}
// 50%{transform:scale(1.4);opacity:1;}
// }

// .glow-bg{
// position:absolute;
// width:500px;
// height:500px;
// background:radial-gradient(circle,#ff2d7540,transparent 70%);
// filter:blur(100px);
// }

// .grid-bg{
// position:absolute;
// inset:0;
// background-image:linear-gradient(rgba(0,0,0,.04) 1px,transparent 1px),
// linear-gradient(90deg,rgba(0,0,0,.04) 1px,transparent 1px);
// background-size:40px 40px;
// }
// `;

// type Props = {
//   side?: "right" | "left";
// };

// export default function NetworkFrameBackground({ side = "right" }: Props) {

//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = STYLES;
//     document.head.appendChild(style);
//   }, []);

//   const isRight = side === "right";

//   return (
//     <div className="network-bg">

//       <div className="grid-bg"></div>

//       {/* moving lines */}

//       <div className="network-line" style={{ left: "20%" }}></div>
//       <div className="network-line" style={{ left: "35%" }}></div>
//       <div className="network-line" style={{ left: "55%" }}></div>
//       <div className="network-line" style={{ left: "75%" }}></div>

//       {/* nodes */}

//       <div className="node" style={{ top: "30%", left: "35%" }}></div>
//       <div className="node" style={{ top: "60%", left: "55%" }}></div>
//       <div className="node" style={{ top: "40%", left: "75%" }}></div>

//       {/* glow */}

//       <div
//         className="glow-bg"
//         style={
//           isRight
//             ? { top: "120px", right: "120px" }
//             : { bottom: "120px", left: "120px" }
//         }
//       />

//     </div>
//   );
// }





// import { useEffect } from "react";

// const STYLES = `
// @keyframes frameGlow{
// 0%,100%{opacity:.7; transform:scale(1);}
// 50%{opacity:1; transform:scale(1.04);}
// }

// .frame-wrapper{
// position:absolute;
// inset:0;
// overflow:hidden;
// }

// .hex-frame{
// position:absolute;
// width:480px;
// height:480px;
// clip-path:polygon(
// 25% 6%,
// 75% 6%,
// 100% 50%,
// 75% 94%,
// 25% 94%,
// 0% 50%
// );
// background:linear-gradient(135deg,#ff2d75,#ff7a18,#ffd200,#00d4ff,#4f46e5);
// padding:6px;
// animation:frameGlow 6s ease-in-out infinite;
// }

// .hex-inner{
// width:100%;
// height:100%;
// background:white;
// clip-path:polygon(
// 25% 6%,
// 75% 6%,
// 100% 50%,
// 75% 94%,
// 25% 94%,
// 0% 50%
// );
// }

// .hex-outline{
// position:absolute;
// width:520px;
// height:520px;
// clip-path:polygon(
// 25% 6%,
// 75% 6%,
// 100% 50%,
// 75% 94%,
// 25% 94%,
// 0% 50%
// );
// border:2px dashed rgba(0,0,0,.08);
// }
// `;

// type Props = {
//   side?: "right" | "left";
// };

// export default function HexagonFrameBackground({ side = "right" }: Props) {

//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = STYLES;
//     document.head.appendChild(style);
//   }, []);

//   const isRight = side === "right";

//   return (
//     <div className="frame-wrapper">

//       <div
//         className="hex-outline"
//         style={
//           isRight
//             ? { top: "120px", right: "60px" }
//             : { bottom: "120px", left: "60px" }
//         }
//       />

//       <div
//         className="hex-frame"
//         style={
//           isRight
//             ? { top: "140px", right: "80px" }
//             : { bottom: "140px", left: "80px" }
//         }
//       >
//         <div className="hex-inner"></div>
//       </div>

//     </div>
//   );
// }




// import { useEffect } from "react";

// const STYLES = `
// @keyframes frameGlow{
// 0%,100%{opacity:.7; transform:scale(1);}
// 50%{opacity:1; transform:scale(1.04);}
// }

// @keyframes rotateSlow {
// 0%{transform: rotate(0deg);}
// 100%{transform: rotate(360deg);}
// }

// @keyframes dashOffset {
// 0%{stroke-dashoffset: 1000; opacity: 0.3;}
// 50%{opacity: 1;}
// 100%{stroke-dashoffset: 0; opacity: 0.3;}
// }

// @keyframes pulseGlow {
// 0%,100%{filter: blur(20px) opacity(0.3); transform: scale(1);}
// 50%{filter: blur(30px) opacity(0.6); transform: scale(1.1);}
// }

// .frame-wrapper{
// position:absolute;
// inset:0;
// overflow:hidden;
// pointer-events:none;
// z-index:0;
// }

// /* === ORBIT FRAME === */
// .orbit-frame {
// position: absolute;
// width: 500px;
// height: 500px;
// border-radius: 50%;
// background: linear-gradient(135deg, #ff2d75, #ff7a18, #ffd200, #00d4ff, #4f46e5);
// padding: 3px;
// animation: frameGlow 8s ease-in-out infinite;
// }

// .orbit-inner {
// width: 100%;
// height: 100%;
// border-radius: 50%;
// background: white;
// display: flex;
// align-items: center;
// justify-content: center;
// position: relative;
// overflow: hidden;
// }

// .orbit-ring {
// position: absolute;
// width: 90%;
// height: 90%;
// border-radius: 50%;
// border: 2px dashed rgba(255,45,117,0.3);
// animation: rotateSlow 20s linear infinite;
// }

// .orbit-ring-2 {
// position: absolute;
// width: 70%;
// height: 70%;
// border-radius: 50%;
// border: 2px dotted rgba(0,212,255,0.3);
// animation: rotateSlow 15s linear infinite reverse;
// }

// .orbit-dot {
// position: absolute;
// width: 12px;
// height: 12px;
// border-radius: 50%;
// background: linear-gradient(135deg, #ff2d75, #00d4ff);
// top: 50%;
// left: 50%;
// transform: translate(-50%, -50%);
// box-shadow: 0 0 20px #ff2d75;
// }

// .orbit-dot-1 {
// top: 20%;
// left: 50%;
// }

// .orbit-dot-2 {
// top: 50%;
// left: 80%;
// }

// .orbit-dot-3 {
// top: 80%;
// left: 50%;
// }

// .orbit-dot-4 {
// top: 50%;
// left: 20%;
// }

// /* === CRYSTAL FRAME === */
// .crystal-frame {
// position: absolute;
// width: 450px;
// height: 450px;
// clip-path: polygon(
// 50% 0%,
// 83% 12%,
// 100% 43%,
// 94% 78%,
// 68% 100%,
// 32% 100%,
// 6% 78%,
// 0% 43%,
// 17% 12%,
// 50% 0%
// );
// background: linear-gradient(135deg, #ff2d75, #ff7a18, #ffd200, #00d4ff, #4f46e5);
// padding: 4px;
// animation: frameGlow 7s ease-in-out infinite;
// }

// .crystal-inner {
// width: 100%;
// height: 100%;
// background: white;
// clip-path: polygon(
// 50% 0%,
// 83% 12%,
// 100% 43%,
// 94% 78%,
// 68% 100%,
// 32% 100%,
// 6% 78%,
// 0% 43%,
// 17% 12%,
// 50% 0%
// );
// position: relative;
// overflow: hidden;
// }

// .crystal-lines {
// position: absolute;
// width: 200%;
// height: 200%;
// top: -50%;
// left: -50%;
// background: linear-gradient(
// 45deg,
// transparent 30%,
// rgba(255,45,117,0.1) 50%,
// transparent 70%
// );
// animation: rotateSlow 12s linear infinite;
// }

// /* === WAVE FRAME === */
// .wave-frame {
// position: absolute;
// width: 520px;
// height: 400px;
// border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
// background: linear-gradient(135deg, #ff2d75, #ff7a18, #ffd200, #00d4ff, #4f46e5);
// padding: 4px;
// animation: frameGlow 9s ease-in-out infinite, morphBlob 12s ease-in-out infinite;
// }

// .wave-inner {
// width: 100%;
// height: 100%;
// border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
// background: white;
// position: relative;
// overflow: hidden;
// }

// .wave-pattern {
// position: absolute;
// width: 200%;
// height: 200%;
// top: -50%;
// left: -50%;
// background: repeating-linear-gradient(
// 45deg,
// transparent,
// transparent 20px,
// rgba(0,212,255,0.1) 20px,
// rgba(255,45,117,0.1) 40px
// );
// animation: rotateSlow 18s linear infinite;
// }

// @keyframes morphBlob {
// 0%,100%{border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;}
// 33%{border-radius: 60% 40% 30% 70% / 50% 40% 50% 60%;}
// 66%{border-radius: 30% 70% 50% 50% / 60% 30% 70% 40%;}
// }

// /* === GEOMETRIC FRAME === */
// .geo-frame {
// position: absolute;
// width: 460px;
// height: 460px;
// background: linear-gradient(135deg, #ff2d75, #ff7a18, #ffd200, #00d4ff, #4f46e5);
// clip-path: polygon(
// 20% 0%,
// 80% 0%,
// 100% 20%,
// 100% 80%,
// 80% 100%,
// 20% 100%,
// 0% 80%,
// 0% 20%
// );
// padding: 4px;
// animation: frameGlow 8s ease-in-out infinite;
// }

// .geo-inner {
// width: 100%;
// height: 100%;
// background: white;
// clip-path: polygon(
// 20% 0%,
// 80% 0%,
// 100% 20%,
// 100% 80%,
// 80% 100%,
// 20% 100%,
// 0% 80%,
// 0% 20%
// );
// position: relative;
// }

// .geo-grid {
// position: absolute;
// width: 100%;
// height: 100%;
// background-image: 
//   linear-gradient(rgba(255,45,117,0.1) 1px, transparent 1px),
//   linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px);
// background-size: 30px 30px;
// }

// .geo-dots {
// position: absolute;
// width: 100%;
// height: 100%;
// background-image: radial-gradient(circle, rgba(255,45,117,0.2) 2px, transparent 2px);
// background-size: 40px 40px;
// }

// /* === INFINITY FRAME === */
// .infinity-frame {
// position: absolute;
// width: 500px;
// height: 300px;
// }

// .infinity-svg {
// width: 100%;
// height: 100%;
// filter: drop-shadow(0 0 20px rgba(255,45,117,0.3));
// }

// .infinity-path {
// stroke: url(#infinityGrad);
// stroke-width: 4;
// fill: none;
// stroke-dasharray: 1000;
// stroke-dashoffset: 1000;
// animation: dashOffset 10s linear infinite;
// }

// .infinity-glow {
// position: absolute;
// width: 100%;
// height: 100%;
// background: radial-gradient(circle at center, rgba(255,45,117,0.2) 0%, transparent 70%);
// filter: blur(30px);
// animation: pulseGlow 8s ease-in-out infinite;
// }

// /* === NEBULA FRAME === */
// .nebula-frame {
// position: absolute;
// width: 480px;
// height: 480px;
// border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
// background: linear-gradient(135deg, #ff2d75, #ff7a18, #ffd200, #00d4ff, #4f46e5);
// padding: 4px;
// animation: frameGlow 10s ease-in-out infinite, morphBlob 15s ease-in-out infinite;
// }

// .nebula-inner {
// width: 100%;
// height: 100%;
// border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
// background: white;
// position: relative;
// overflow: hidden;
// }

// .nebula-clouds {
// position: absolute;
// width: 150%;
// height: 150%;
// top: -25%;
// left: -25%;
// background: radial-gradient(circle at 30% 50%, rgba(255,45,117,0.15) 0%, transparent 50%),
//             radial-gradient(circle at 70% 30%, rgba(0,212,255,0.15) 0%, transparent 50%),
//             radial-gradient(circle at 40% 70%, rgba(255,210,0,0.15) 0%, transparent 50%);
// filter: blur(20px);
// animation: rotateSlow 20s linear infinite;
// }

// .nebula-stars {
// position: absolute;
// width: 100%;
// height: 100%;
// background-image: radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px);
// background-size: 30px 30px;
// }
// `;

// type Props = {
//   side?: "right" | "left";
//   type?: "orbit" | "crystal" | "wave" | "geo" | "infinity" | "nebula";
// };

// export default function DynamicFrameBackground({ side = "right", type = "orbit" }: Props) {

//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = STYLES;
//     document.head.appendChild(style);
//   }, []);

//   const isRight = side === "right";

//   const renderFrame = () => {
//     switch(type) {
//       case "orbit":
//         return (
//           <div
//             className="orbit-frame"
//             style={isRight ? { top: "100px", right: "60px" } : { bottom: "100px", left: "60px" }}
//           >
//             <div className="orbit-inner">
//               <div className="orbit-ring"></div>
//               <div className="orbit-ring-2"></div>
//               <div className="orbit-dot orbit-dot-1"></div>
//               <div className="orbit-dot orbit-dot-2"></div>
//               <div className="orbit-dot orbit-dot-3"></div>
//               <div className="orbit-dot orbit-dot-4"></div>
//             </div>
//           </div>
//         );

//       case "crystal":
//         return (
//           <div
//             className="crystal-frame"
//             style={isRight ? { top: "120px", right: "70px" } : { bottom: "120px", left: "70px" }}
//           >
//             <div className="crystal-inner">
//               <div className="crystal-lines"></div>
//             </div>
//           </div>
//         );

//       case "wave":
//         return (
//           <div
//             className="wave-frame"
//             style={isRight ? { top: "80px", right: "50px" } : { bottom: "80px", left: "50px" }}
//           >
//             <div className="wave-inner">
//               <div className="wave-pattern"></div>
//             </div>
//           </div>
//         );

//       case "geo":
//         return (
//           <div
//             className="geo-frame"
//             style={isRight ? { top: "140px", right: "80px" } : { bottom: "140px", left: "80px" }}
//           >
//             <div className="geo-inner">
//               <div className="geo-grid"></div>
//               <div className="geo-dots"></div>
//             </div>
//           </div>
//         );

//       case "infinity":
//         return (
//           <div
//             className="infinity-frame"
//             style={isRight ? { top: "150px", right: "60px" } : { bottom: "150px", left: "60px" }}
//           >
//             <div className="infinity-glow"></div>
//             <svg className="infinity-svg" viewBox="0 0 200 100">
//               <defs>
//                 <linearGradient id="infinityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#ff2d75" />
//                   <stop offset="25%" stopColor="#ff7a18" />
//                   <stop offset="50%" stopColor="#ffd200" />
//                   <stop offset="75%" stopColor="#00d4ff" />
//                   <stop offset="100%" stopColor="#4f46e5" />
//                 </linearGradient>
//               </defs>
//               <path
//                 className="infinity-path"
//                 d="M30,50 C30,30 50,30 70,50 C90,70 110,70 130,50 C150,30 170,30 170,50 C170,70 150,70 130,50 C110,30 90,30 70,50 C50,70 30,70 30,50 Z"
//               />
//             </svg>
//           </div>
//         );

//       case "nebula":
//         return (
//           <div
//             className="nebula-frame"
//             style={isRight ? { top: "90px", right: "40px" } : { bottom: "90px", left: "40px" }}
//           >
//             <div className="nebula-inner">
//               <div className="nebula-clouds"></div>
//               <div className="nebula-stars"></div>
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="frame-wrapper">
//       {renderFrame()}
//     </div>
//   );
// }




// import React, { useEffect, useMemo } from 'react';

// // Types
// type Side = 'right' | 'left';
// type WaveType = 'ocean' | 'ripple' | 'liquid' | 'waterfall' | 'underwater';

// interface Position {
//   top?: string | number;
//   bottom?: string | number;
//   left?: string | number;
//   right?: string | number;
// }

// interface WaterWaveBackgroundProps {
//   /** Position of the wave effect - 'right' or 'left' */
//   side?: Side;
//   /** Type of wave animation to display */
//   type?: WaveType;
//   /** Optional offset values for fine-tuning position */
//   offset?: {
//     top?: number;
//     bottom?: number;
//     left?: number;
//     right?: number;
//   };
//   /** Optional className for custom styling */
//   className?: string;
// }

// // Animation keyframes and styles
// const STYLES = `
//   @keyframes frameGlow {
//     0%,100% { opacity: 0.7; transform: scale(1); }
//     50% { opacity: 1; transform: scale(1.02); }
//   }

//   @keyframes waveFlow {
//     0% { transform: translateX(-50%) translateY(0) rotate(0deg); }
//     25% { transform: translateX(-45%) translateY(-5px) rotate(2deg); }
//     50% { transform: translateX(-40%) translateY(5px) rotate(-2deg); }
//     75% { transform: translateX(-45%) translateY(-3px) rotate(1deg); }
//     100% { transform: translateX(-50%) translateY(0) rotate(0deg); }
//   }

//   @keyframes rippleExpand {
//     0% { transform: scale(0.8); opacity: 0.8; }
//     50% { transform: scale(1.5); opacity: 0.3; }
//     100% { transform: scale(2); opacity: 0; }
//   }

//   @keyframes waveRise {
//     0% { transform: translateY(0) scaleY(1); }
//     50% { transform: translateY(-15px) scaleY(1.2); }
//     100% { transform: translateY(0) scaleY(1); }
//   }

//   @keyframes liquidMove {
//     0% { background-position: 0% 0%; }
//     100% { background-position: 200% 0%; }
//   }

//   @keyframes bubbleFloat {
//     0% { transform: translateY(0) scale(1); opacity: 0; }
//     50% { opacity: 0.5; }
//     100% { transform: translateY(-100px) scale(0.5); opacity: 0; }
//   }

//   @keyframes shimmer {
//     0% { opacity: 0.2; transform: translateX(-100%) rotate(25deg); }
//     50% { opacity: 0.6; }
//     100% { opacity: 0.2; transform: translateX(100%) rotate(25deg); }
//   }

//   @keyframes pulseGlow {
//     0%,100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
//     50% { opacity: 1; transform: translate(-50%, -50%) scale(1.3); }
//   }

//   @keyframes spinSlow {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }

//   .wave-wrapper {
//     position: absolute;
//     inset: 0;
//     overflow: hidden;
//     pointer-events: none;
//     z-index: 0;
//   }

//   /* Base frame styles */
//   .wave-frame {
//     position: absolute;
//     padding: 4px;
//     animation: frameGlow 8s ease-in-out infinite;
//     filter: drop-shadow(0 10px 20px rgba(0,100,255,0.2));
//     transition: all 0.3s ease;
//   }

//   .wave-inner {
//     width: 100%;
//     height: 100%;
//     position: relative;
//     overflow: hidden;
//   }

//   /* Ocean Frame */
//   .ocean-frame {
//     composes: wave-frame;
//     width: 600px;
//     height: 500px;
//     background: linear-gradient(135deg, #0066ff, #0099ff, #00ccff, #00ffff, #4facfe);
//     border-radius: 60% 40% 50% 50% / 40% 50% 50% 60%;
//   }

//   .ocean-inner {
//     composes: wave-inner;
//     background: linear-gradient(135deg, #e6f7ff, #b3e0ff, #80c4ff);
//     border-radius: 60% 40% 50% 50% / 40% 50% 50% 60%;
//   }

//   /* ... rest of your CSS classes remain the same ... */
// `;

// // Position configuration for different wave types
// const POSITION_CONFIG: Record<WaveType, { top: number; right: number; left: number; bottom: number }> = {
//   ocean: { top: 80, right: 40, left: 40, bottom: 80 },
//   ripple: { top: 100, right: 50, left: 50, bottom: 100 },
//   liquid: { top: 60, right: 30, left: 30, bottom: 60 },
//   waterfall: { top: 120, right: 60, left: 60, bottom: 120 },
//   underwater: { top: 90, right: 45, left: 45, bottom: 90 },
// };

// // Individual frame components for better maintainability
// const OceanFrame: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
//   <div className="ocean-frame" style={style}>
//     <div className="ocean-inner">
//       <div className="ocean-surface" />
//       {[1, 2, 3].map(i => <div key={`wave-${i}`} className={`ocean-wave ocean-wave-${i}`} />)}
//       <div className="ocean-foam" />
//       <div className="ocean-bubbles">
//         {[1, 2, 3, 4, 5, 6].map(i => <div key={`bubble-${i}`} className={`ocean-bubble ocean-bubble-${i}`} />)}
//       </div>
//     </div>
//   </div>
// );

// const RippleFrame: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
//   <div className="ripple-frame" style={style}>
//     <div className="ripple-inner">
//       <div className="ripple-container">
//         {[1, 2, 3, 4].map(i => <div key={`ring-${i}`} className={`ripple-ring ripple-ring-${i}`} />)}
//         <div className="ripple-center" />
//       </div>
//       <div className="ripple-droplets" />
//     </div>
//   </div>
// );

// const LiquidFrame: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
//   <div className="liquid-frame" style={style}>
//     <div className="liquid-inner">
//       <div className="liquid-flow" />
//       {[1, 2, 3].map(i => <div key={`wave-${i}`} className={`liquid-wave liquid-wave-${i}`} />)}
//       <div className="liquid-shimmer" />
//     </div>
//   </div>
// );

// const WaterfallFrame: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
//   <div className="waterfall-frame" style={style}>
//     <div className="waterfall-inner">
//       <div className="waterfall-stream" />
//       <div className="waterfall-mist" />
//       <div className="waterfall-droplets" />
//     </div>
//   </div>
// );

// const UnderwaterFrame: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
//   <div className="underwater-frame" style={style}>
//     <div className="underwater-inner">
//       <div className="underwater-caustics" />
//       <div className="underwater-light" />
//       <div className="underwater-bubbles">
//         {[1, 2, 3, 4, 5].map(i => <div key={`bubble-${i}`} className={`underwater-bubble underwater-bubble-${i}`} />)}
//       </div>
//     </div>
//   </div>
// );

// // Frame renderer mapping
// const FRAME_COMPONENTS: Record<WaveType, React.FC<{ style: React.CSSProperties }>> = {
//   ocean: OceanFrame,
//   ripple: RippleFrame,
//   liquid: LiquidFrame,
//   waterfall: WaterfallFrame,
//   underwater: UnderwaterFrame,
// };

// export const WaterWaveBackground: React.FC<WaterWaveBackgroundProps> = ({
//   side = 'right',
//   type = 'ocean',
//   offset = {},
//   className = '',
// }) => {
//   // Inject styles only once
//   useEffect(() => {
//     const styleId = 'water-wave-styles';
    
//     // Check if styles are already injected
//     if (!document.getElementById(styleId)) {
//       const style = document.createElement('style');
//       style.id = styleId;
//       style.innerHTML = STYLES;
//       document.head.appendChild(style);
//     }

//     // Cleanup on unmount
//     return () => {
//       const style = document.getElementById(styleId);
//       if (style) {
//         style.remove();
//       }
//     };
//   }, []);

//   // Calculate position based on side and offset
//   const position = useMemo<React.CSSProperties>(() => {
//     const basePos = POSITION_CONFIG[type];
//     const isRight = side === 'right';
    
//     if (isRight) {
//       return {
//         top: offset.top ?? basePos.top,
//         right: offset.right ?? basePos.right,
//         bottom: 'auto',
//         left: 'auto',
//       };
//     }
    
//     return {
//       top: 'auto',
//       right: 'auto',
//       bottom: offset.bottom ?? basePos.bottom,
//       left: offset.left ?? basePos.left,
//     };
//   }, [side, type, offset]);

//   // Get the appropriate frame component
//   const FrameComponent = FRAME_COMPONENTS[type];

//   if (!FrameComponent) {
//     console.warn(`Invalid wave type: ${type}`);
//     return null;
//   }

//   return (
//     <div className={`wave-wrapper ${className}`.trim()}>
//       <FrameComponent style={position} />
//     </div>
//   );
// };

// // Default export for convenience
// export default WaterWaveBackground;





// import React, { useEffect, useMemo, FC } from 'react';

// // ============================================================================
// // Types
// // ============================================================================

// export type WaveSide = 'left' | 'right';
// export type WaveType = 'ocean' | 'ripple' | 'liquid' | 'waterfall' | 'underwater';

// export interface WaterWaveBackgroundProps {
//   /** Position of the wave effect - 'left' or 'right' */
//   side?: WaveSide;
//   /** Type of wave animation */
//   type?: WaveType;
//   /** Custom positioning offsets */
//   offset?: Partial<Record<'top' | 'right' | 'bottom' | 'left', number>>;
//   /** Additional CSS classes */
//   className?: string;
//   /** Z-index for layering */
//   zIndex?: number;
// }

// // ============================================================================
// // Constants
// // ============================================================================

// const STYLES_ID = 'water-wave-styles';

// const POSITION_MAP: Record<WaveType, Record<WaveSide, { top?: number; bottom?: number; left?: number; right?: number }>> = {
//   ocean: {
//     right: { top: 80, right: 40 },
//     left: { bottom: 80, left: 40 },
//   },
//   ripple: {
//     right: { top: 100, right: 50 },
//     left: { bottom: 100, left: 50 },
//   },
//   liquid: {
//     right: { top: 60, right: 30 },
//     left: { bottom: 60, left: 30 },
//   },
//   waterfall: {
//     right: { top: 120, right: 60 },
//     left: { bottom: 120, left: 60 },
//   },
//   underwater: {
//     right: { top: 90, right: 45 },
//     left: { bottom: 90, left: 45 },
//   },
// };

// // ============================================================================
// // Styles
// // ============================================================================

// const STYLES = `
//   /* Animations */
//   @keyframes frameGlow {
//     0%, 100% { opacity: 0.7; transform: scale(1); }
//     50% { opacity: 1; transform: scale(1.02); }
//   }

//   @keyframes waveFlow {
//     0% { transform: translateX(-50%) translateY(0) rotate(0deg); }
//     25% { transform: translateX(-45%) translateY(-5px) rotate(2deg); }
//     50% { transform: translateX(-40%) translateY(5px) rotate(-2deg); }
//     75% { transform: translateX(-45%) translateY(-3px) rotate(1deg); }
//     100% { transform: translateX(-50%) translateY(0) rotate(0deg); }
//   }

//   @keyframes rippleExpand {
//     0% { transform: scale(0.8); opacity: 0.8; }
//     50% { transform: scale(1.5); opacity: 0.3; }
//     100% { transform: scale(2); opacity: 0; }
//   }

//   @keyframes waveRise {
//     0% { transform: translateY(0) scaleY(1); }
//     50% { transform: translateY(-15px) scaleY(1.2); }
//     100% { transform: translateY(0) scaleY(1); }
//   }

//   @keyframes liquidMove {
//     0% { background-position: 0% 0%; }
//     100% { background-position: 200% 0%; }
//   }

//   @keyframes bubbleFloat {
//     0% { transform: translateY(0) scale(1); opacity: 0; }
//     50% { opacity: 0.5; }
//     100% { transform: translateY(-100px) scale(0.5); opacity: 0; }
//   }

//   @keyframes shimmer {
//     0% { opacity: 0.2; transform: translateX(-100%) rotate(25deg); }
//     50% { opacity: 0.6; }
//     100% { opacity: 0.2; transform: translateX(100%) rotate(25deg); }
//   }

//   @keyframes pulseGlow {
//     0%, 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
//     50% { opacity: 1; transform: translate(-50%, -50%) scale(1.3); }
//   }

//   @keyframes spinSlow {
//     from { transform: rotate(0deg); }
//     to { transform: rotate(360deg); }
//   }

//   /* Base Wrapper */
//   .water-wave-wrapper {
//     position: absolute;
//     inset: 0;
//     overflow: hidden;
//     pointer-events: none;
//   }

//   /* Frame Base */
//   .water-wave-frame {
//     position: absolute;
//     padding: 4px;
//     animation: frameGlow 8s ease-in-out infinite;
//     filter: drop-shadow(0 10px 20px rgba(0, 100, 255, 0.2));
//   }

//   .water-wave-inner {
//     width: 100%;
//     height: 100%;
//     position: relative;
//     overflow: hidden;
//   }

//   /* Ocean Frame */
//   .ocean-frame {
//     width: 600px;
//     height: 500px;
//     background: linear-gradient(135deg, #0066ff, #0099ff, #00ccff, #00ffff, #4facfe);
//     border-radius: 60% 40% 50% 50% / 40% 50% 50% 60%;
//   }

//   .ocean-inner {
//     background: linear-gradient(135deg, #e6f7ff, #b3e0ff, #80c4ff);
//     border-radius: 60% 40% 50% 50% / 40% 50% 50% 60%;
//   }

//   .ocean-surface {
//     position: absolute;
//     width: 200%;
//     height: 100%;
//     background: repeating-linear-gradient(
//       transparent 0px, transparent 20px,
//       rgba(255,255,255,0.3) 20px, rgba(0,150,255,0.2) 25px,
//       transparent 25px, transparent 45px,
//       rgba(255,255,255,0.4) 45px, rgba(0,200,255,0.3) 50px
//     );
//     animation: waveFlow 10s ease-in-out infinite;
//     opacity: 0.6;
//   }

//   .ocean-wave {
//     position: absolute;
//     width: 120%;
//     height: 80px;
//     background: linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(0,200,255,0.3) 50%, transparent 100%);
//     border-radius: 50%;
//     filter: blur(5px);
//   }

//   .ocean-wave-1 { bottom: 20%; left: -10%; animation: waveRise 6s ease-in-out infinite; }
//   .ocean-wave-2 { bottom: 40%; left: -20%; width: 140%; height: 60px; animation: waveRise 8s ease-in-out infinite 1s; opacity: 0.5; }
//   .ocean-wave-3 { bottom: 60%; left: 0%; width: 110%; height: 40px; animation: waveRise 7s ease-in-out infinite 0.5s; opacity: 0.4; }

//   .ocean-foam {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background: radial-gradient(circle at 30% 40%, rgba(255,255,255,0.8) 0%, transparent 10%),
//                 radial-gradient(circle at 70% 60%, rgba(255,255,255,0.8) 0%, transparent 15%),
//                 radial-gradient(circle at 40% 80%, rgba(255,255,255,0.6) 0%, transparent 12%),
//                 radial-gradient(circle at 80% 20%, rgba(255,255,255,0.7) 0%, transparent 18%);
//     background-size: 200% 200%;
//     animation: liquidMove 15s linear infinite;
//   }

//   .ocean-bubbles {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//   }

//   .ocean-bubble {
//     position: absolute;
//     width: 8px;
//     height: 8px;
//     background: radial-gradient(circle at 30% 30%, white, rgba(255,255,255,0.3));
//     border-radius: 50%;
//     filter: blur(1px);
//   }

//   .ocean-bubble-1 { left: 20%; top: 30%; animation: bubbleFloat 8s linear infinite; }
//   .ocean-bubble-2 { left: 40%; top: 60%; width: 12px; height: 12px; animation: bubbleFloat 12s linear infinite 2s; }
//   .ocean-bubble-3 { left: 60%; top: 20%; width: 6px; height: 6px; animation: bubbleFloat 6s linear infinite 1s; }
//   .ocean-bubble-4 { left: 80%; top: 70%; width: 10px; height: 10px; animation: bubbleFloat 10s linear infinite 3s; }
//   .ocean-bubble-5 { left: 30%; top: 80%; width: 7px; height: 7px; animation: bubbleFloat 7s linear infinite 0.5s; }
//   .ocean-bubble-6 { left: 70%; top: 40%; width: 9px; height: 9px; animation: bubbleFloat 9s linear infinite 2.5s; }

//   /* Ripple Frame */
//   .ripple-frame {
//     width: 550px;
//     height: 550px;
//     background: linear-gradient(135deg, #1e90ff, #00bfff, #87cefa, #add8e6, #b0e0e6);
//     border-radius: 40% 60% 30% 70% / 60% 30% 70% 40%;
//   }

//   .ripple-inner {
//     background: linear-gradient(135deg, #f0f8ff, #e0ffff, #c6e2ff);
//     border-radius: 40% 60% 30% 70% / 60% 30% 70% 40%;
//   }

//   .ripple-container {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//   }

//   .ripple-ring {
//     position: absolute;
//     border: 2px solid rgba(255,255,255,0.5);
//     border-radius: 50%;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     box-shadow: 0 0 20px rgba(0,100,255,0.3);
//   }

//   .ripple-ring-1 { width: 150px; height: 150px; animation: rippleExpand 8s ease-out infinite; }
//   .ripple-ring-2 { width: 200px; height: 200px; animation: rippleExpand 8s ease-out infinite 2s; }
//   .ripple-ring-3 { width: 250px; height: 250px; animation: rippleExpand 8s ease-out infinite 4s; }
//   .ripple-ring-4 { width: 300px; height: 300px; animation: rippleExpand 8s ease-out infinite 6s; }

//   .ripple-center {
//     position: absolute;
//     width: 30px;
//     height: 30px;
//     background: radial-gradient(circle, #00ffff, #0066ff);
//     border-radius: 50%;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     filter: blur(3px);
//     animation: pulseGlow 3s ease-in-out infinite;
//   }

//   .ripple-droplets {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background-image: 
//       radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 2px, transparent 2px),
//       radial-gradient(circle at 80% 70%, rgba(255,255,255,0.6) 3px, transparent 3px),
//       radial-gradient(circle at 40% 80%, rgba(255,255,255,0.6) 2px, transparent 2px),
//       radial-gradient(circle at 70% 20%, rgba(255,255,255,0.6) 4px, transparent 4px);
//     background-size: 100px 100px, 150px 150px, 80px 80px, 200px 200px;
//   }

//   /* Liquid Frame */
//   .liquid-frame {
//     width: 580px;
//     height: 480px;
//     background: linear-gradient(135deg, #00c6fb, #005bea, #00b4db, #0083b0, #00a8c5);
//     border-radius: 30% 70% 50% 50% / 30% 40% 60% 70%;
//   }

//   .liquid-inner {
//     background: linear-gradient(135deg, #b5e6ff, #a0d8ff, #8ac4ff);
//     border-radius: 30% 70% 50% 50% / 30% 40% 60% 70%;
//   }

//   .liquid-flow {
//     position: absolute;
//     width: 300%;
//     height: 300%;
//     top: -100%;
//     left: -100%;
//     background: repeating-linear-gradient(
//       45deg,
//       transparent, transparent 30px,
//       rgba(255,255,255,0.2) 30px, rgba(0,150,255,0.1) 60px,
//       transparent 60px, transparent 90px,
//       rgba(255,255,255,0.3) 90px, rgba(0,200,255,0.2) 120px
//     );
//     animation: liquidMove 20s linear infinite;
//     opacity: 0.5;
//   }

//   .liquid-wave {
//     position: absolute;
//     width: 200%;
//     height: 100px;
//     background: linear-gradient(90deg, 
//       transparent,
//       rgba(255,255,255,0.3),
//       rgba(0,200,255,0.3),
//       rgba(255,255,255,0.3),
//       transparent
//     );
//     filter: blur(10px);
//   }

//   .liquid-wave-1 { top: 20%; left: -50%; animation: waveFlow 12s ease-in-out infinite; }
//   .liquid-wave-2 { top: 50%; left: -30%; width: 180%; height: 80px; animation: waveFlow 15s ease-in-out infinite 2s; opacity: 0.6; }
//   .liquid-wave-3 { top: 80%; left: -70%; width: 220%; height: 60px; animation: waveFlow 10s ease-in-out infinite 1s; opacity: 0.4; }

//   .liquid-shimmer {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(
//       45deg,
//       transparent 30%,
//       rgba(255,255,255,0.2) 50%,
//       transparent 70%
//     );
//     background-size: 200% 200%;
//     animation: shimmer 5s linear infinite;
//   }

//   /* Waterfall Frame */
//   .waterfall-frame {
//     width: 500px;
//     height: 600px;
//     background: linear-gradient(135deg, #00d2ff, #3a7bd5, #00b4db, #0083b0, #005c97);
//     border-radius: 20% 40% 20% 40% / 40% 20% 40% 20%;
//   }

//   .waterfall-inner {
//     background: linear-gradient(135deg, #d4f1f9, #b5e6ff, #92c9ff);
//     border-radius: 20% 40% 20% 40% / 40% 20% 40% 20%;
//   }

//   .waterfall-stream {
//     position: absolute;
//     width: 100%;
//     height: 200%;
//     top: -50%;
//     background: repeating-linear-gradient(
//       180deg,
//       transparent, transparent 20px,
//       rgba(255,255,255,0.4) 20px, rgba(0,150,255,0.3) 30px,
//       transparent 30px, transparent 50px,
//       rgba(255,255,255,0.5) 50px, rgba(0,200,255,0.4) 60px
//     );
//     animation: waveRise 10s linear infinite;
//   }

//   .waterfall-mist {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
//                 radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3) 0%, transparent 50%);
//     filter: blur(20px);
//     animation: pulseGlow 4s ease-in-out infinite;
//   }

//   .waterfall-droplets {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background-image: 
//       radial-gradient(circle at 10% 20%, white 2px, transparent 2px),
//       radial-gradient(circle at 30% 40%, white 1px, transparent 1px),
//       radial-gradient(circle at 50% 60%, white 3px, transparent 3px),
//       radial-gradient(circle at 70% 30%, white 2px, transparent 2px),
//       radial-gradient(circle at 90% 70%, white 1px, transparent 1px);
//     background-size: 100px 100px, 80px 80px, 120px 120px, 90px 90px, 110px 110px;
//     animation: bubbleFloat 8s linear infinite;
//   }

//   /* Underwater Frame */
//   .underwater-frame {
//     width: 620px;
//     height: 520px;
//     background: linear-gradient(135deg, #1a2980, #26a0da, #1c92d2, #0e4e8c, #0a3a66);
//     border-radius: 50% 30% 70% 30% / 40% 60% 40% 60%;
//   }

//   .underwater-inner {
//     background: linear-gradient(135deg, #c5e4ff, #add8ff, #8ec5fc);
//     border-radius: 50% 30% 70% 30% / 40% 60% 40% 60%;
//   }

//   .underwater-caustics {
//     position: absolute;
//     width: 200%;
//     height: 200%;
//     top: -50%;
//     left: -50%;
//     background: 
//       repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(0,200,255,0.1) 80px),
//       repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(0,200,255,0.1) 80px);
//     animation: spinSlow 30s linear infinite;
//   }

//   .underwater-light {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background: 
//       radial-gradient(circle at 30% 20%, rgba(255,255,240,0.3) 0%, transparent 40%),
//       radial-gradient(circle at 70% 80%, rgba(200,230,255,0.3) 0%, transparent 40%);
//     animation: shimmer 8s linear infinite;
//   }

//   .underwater-bubbles {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//   }

//   .underwater-bubble {
//     position: absolute;
//     background: radial-gradient(circle at 30% 30%, white, rgba(255,255,255,0.2));
//     border-radius: 50%;
//     filter: blur(1px);
//   }

//   .underwater-bubble-1 { width: 15px; height: 15px; left: 20%; top: 30%; animation: bubbleFloat 10s linear infinite; }
//   .underwater-bubble-2 { width: 8px; height: 8px; left: 40%; top: 60%; animation: bubbleFloat 7s linear infinite 1s; }
//   .underwater-bubble-3 { width: 20px; height: 20px; left: 60%; top: 20%; animation: bubbleFloat 12s linear infinite 2s; }
//   .underwater-bubble-4 { width: 10px; height: 10px; left: 80%; top: 70%; animation: bubbleFloat 8s linear infinite 3s; }
//   .underwater-bubble-5 { width: 12px; height: 12px; left: 30%; top: 80%; animation: bubbleFloat 9s linear infinite 0.5s; }
// `;

// // ============================================================================
// // Frame Components
// // ============================================================================

// const OceanFrame: FC<{ style: React.CSSProperties }> = ({ style }) => (
//   <div className="ocean-frame water-wave-frame" style={style}>
//     <div className="ocean-inner water-wave-inner">
//       <div className="ocean-surface" />
//       <div className="ocean-wave ocean-wave-1" />
//       <div className="ocean-wave ocean-wave-2" />
//       <div className="ocean-wave ocean-wave-3" />
//       <div className="ocean-foam" />
//       <div className="ocean-bubbles">
//         {[1, 2, 3, 4, 5, 6].map(i => (
//           <div key={`bubble-${i}`} className={`ocean-bubble ocean-bubble-${i}`} />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// const RippleFrame: FC<{ style: React.CSSProperties }> = ({ style }) => (
//   <div className="ripple-frame water-wave-frame" style={style}>
//     <div className="ripple-inner water-wave-inner">
//       <div className="ripple-container">
//         {[1, 2, 3, 4].map(i => (
//           <div key={`ring-${i}`} className={`ripple-ring ripple-ring-${i}`} />
//         ))}
//         <div className="ripple-center" />
//       </div>
//       <div className="ripple-droplets" />
//     </div>
//   </div>
// );

// const LiquidFrame: FC<{ style: React.CSSProperties }> = ({ style }) => (
//   <div className="liquid-frame water-wave-frame" style={style}>
//     <div className="liquid-inner water-wave-inner">
//       <div className="liquid-flow" />
//       <div className="liquid-wave liquid-wave-1" />
//       <div className="liquid-wave liquid-wave-2" />
//       <div className="liquid-wave liquid-wave-3" />
//       <div className="liquid-shimmer" />
//     </div>
//   </div>
// );

// const WaterfallFrame: FC<{ style: React.CSSProperties }> = ({ style }) => (
//   <div className="waterfall-frame water-wave-frame" style={style}>
//     <div className="waterfall-inner water-wave-inner">
//       <div className="waterfall-stream" />
//       <div className="waterfall-mist" />
//       <div className="waterfall-droplets" />
//     </div>
//   </div>
// );

// const UnderwaterFrame: FC<{ style: React.CSSProperties }> = ({ style }) => (
//   <div className="underwater-frame water-wave-frame" style={style}>
//     <div className="underwater-inner water-wave-inner">
//       <div className="underwater-caustics" />
//       <div className="underwater-light" />
//       <div className="underwater-bubbles">
//         {[1, 2, 3, 4, 5].map(i => (
//           <div key={`bubble-${i}`} className={`underwater-bubble underwater-bubble-${i}`} />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// // ============================================================================
// // Main Component
// // ============================================================================

// const FRAME_COMPONENTS: Record<WaveType, FC<{ style: React.CSSProperties }>> = {
//   ocean: OceanFrame,
//   ripple: RippleFrame,
//   liquid: LiquidFrame,
//   waterfall: WaterfallFrame,
//   underwater: UnderwaterFrame,
// };

// export const WaterWaveBackground: FC<WaterWaveBackgroundProps> = ({
//   side = 'right',
//   type = 'ocean',
//   offset = {},
//   className = '',
//   zIndex = 0,
// }) => {
//   // Inject styles on mount
//   useEffect(() => {
//     if (!document.getElementById(STYLES_ID)) {
//       const style = document.createElement('style');
//       style.id = STYLES_ID;
//       style.textContent = STYLES;
//       document.head.appendChild(style);
//     }

//     return () => {
//       document.getElementById(STYLES_ID)?.remove();
//     };
//   }, []);

//   // Calculate position styles
//   const positionStyle = useMemo<React.CSSProperties>(() => {
//     const basePosition = POSITION_MAP[type][side];
    
//     return {
//       ...basePosition,
//       ...offset,
//       zIndex,
//     };
//   }, [type, side, offset, zIndex]);

//   const FrameComponent = FRAME_COMPONENTS[type];

//   return (
//     <div className={`water-wave-wrapper ${className}`.trim()}>
//       <FrameComponent style={positionStyle} />
//     </div>
//   );
// };

// // Default export
// export default WaterWaveBackground;