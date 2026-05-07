// import React from "react";
// import { Monitor, Rocket, BarChart3, Search } from "lucide-react";

// const PyramidSection: React.FC = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Title */}
//         <h2 className="text-center text-3xl font-bold text-gray-800 mb-20">
//           Smart Technology Pyramid
//         </h2>

//         <div className="grid md:grid-cols-3 items-center gap-10">

//           {/* LEFT SIDE */}
//           <div className="space-y-16">

//             {/* Option 01 */}
//             <div className="flex items-center gap-4">
//               <Monitor className="text-pink-500" />
//               <div>
//                 <h4 className="font-semibold text-gray-800">DATA</h4>
//                 <p className="text-sm text-gray-500">
//                   Core layer driving all technology systems.
//                 </p>
//               </div>
//             </div>

//             {/* Option 03 */}
//             <div className="flex items-center gap-4">
//               <BarChart3 className="text-blue-500" />
//               <div>
//                 <h4 className="font-semibold text-gray-800">SECURITY</h4>
//                 <p className="text-sm text-gray-500">
//                   Protecting infrastructure and digital assets.
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* CENTER PYRAMID */}
//           <div className="flex flex-col items-center">

//             {/* Top */}
//             <div className="w-28 h-20 bg-gradient-to-r from-red-400 to-pink-500 clip-triangle shadow-lg" />

//             {/* Layer 2 */}
//             <div className="w-40 h-24 bg-gradient-to-r from-orange-400 to-red-400 clip-trapezoid shadow-lg -mt-4" />

//             {/* Layer 3 */}
//             <div className="w-56 h-28 bg-gradient-to-r from-blue-500 to-indigo-500 clip-trapezoid shadow-lg -mt-4" />

//             {/* Base */}
//             <div className="w-72 h-32 bg-gradient-to-r from-purple-500 to-indigo-600 clip-trapezoid shadow-xl -mt-4" />

//           </div>

//           {/* RIGHT SIDE */}
//           <div className="space-y-16">

//             {/* Option 02 */}
//             <div className="flex items-center gap-4">
//               <Rocket className="text-orange-500" />
//               <div>
//                 <h4 className="font-semibold text-gray-800">A.I.</h4>
//                 <p className="text-sm text-gray-500">
//                   Intelligence layer for automation & insights.
//                 </p>
//               </div>
//             </div>

//             {/* Option 04 */}
//             <div className="flex items-center gap-4">
//               <Search className="text-purple-500" />
//               <div>
//                 <h4 className="font-semibold text-gray-800">INFRA</h4>
//                 <p className="text-sm text-gray-500">
//                   Scalable systems supporting operations.
//                 </p>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>

//       {/* Custom Shapes */}
//       <style>{`
//         .clip-triangle {
//           clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
//         }

//         .clip-trapezoid {
//           clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PyramidSection;



// import React from "react";

// const Pyramid2D: React.FC = () => {
//   return (
//     <section className="py-24 bg-gray-50 flex justify-center items-center">

//       <div className="flex flex-col items-center">

//         {/* 🔺 TOP TRIANGLE */}
//         <div className="relative w-0 h-0 border-l-[60px] border-r-[60px] border-b-[80px] border-l-transparent border-r-transparent border-b-red-400">
//           <div className="absolute left-[-60px] top-0 w-[120px] h-[80px] bg-gradient-to-r from-pink-400 to-red-500 opacity-80 clip-triangle-light"></div>
//         </div>

//         {/* 🟧 LAYER 2 */}
//         <div className="relative w-[180px] h-[90px] bg-gradient-to-r from-orange-300 to-orange-500 mt-2 clip-trapezoid shadow-lg">
//           <div className="absolute inset-0 bg-white/10 clip-trapezoid-light"></div>
//         </div>

//         {/* 🟦 LAYER 3 */}
//         <div className="relative w-[260px] h-[110px] bg-gradient-to-r from-blue-400 to-indigo-600 mt-2 clip-trapezoid shadow-lg">
//           <div className="absolute inset-0 bg-white/10 clip-trapezoid-light"></div>
//         </div>

//         {/* 🟪 BASE */}
//         <div className="relative w-[340px] h-[130px] bg-gradient-to-r from-purple-500 to-indigo-700 mt-2 clip-trapezoid shadow-xl">
//           <div className="absolute inset-0 bg-white/10 clip-trapezoid-light"></div>
//         </div>

//       </div>

//       {/* 🎨 Custom Shapes */}
//       <style>{`
//         .clip-trapezoid {
//           clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
//         }

//         .clip-trapezoid-light {
//           clip-path: polygon(10% 0%, 50% 0%, 60% 100%, 0% 100%);
//         }

//         .clip-triangle-light {
//           clip-path: polygon(50% 0%, 0% 100%, 50% 100%);
//         }
//       `}</style>

//     </section>
//   );
// };

// export default Pyramid2D;



// import React from "react";

// const PyramidSection: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center justify-center py-12 bg-gray-50">
//       <h2 className="text-2xl font-semibold mb-10">Your Title</h2>

//       <div className="relative flex items-center justify-center">
//         {/* Pyramid */}
//         <div className="flex flex-col items-center">
//           <div className="w-24 h-16 bg-green-400 clip-triangle mb-1"></div>
//           <div className="w-40 h-20 bg-green-500 clip-triangle mb-1"></div>
//           <div className="w-56 h-24 bg-teal-500 clip-triangle mb-1"></div>
//           <div className="w-72 h-28 bg-blue-600 clip-triangle"></div>
//         </div>

//         {/* Left Labels */}
//         <div className="absolute left-[-250px] top-10 space-y-16 text-right">
//           <div>
//             <h4 className="font-semibold">Your Title</h4>
//             <p className="text-sm text-gray-600">
//               Social media can enable companies to get greater market share.
//             </p>
//           </div>
//           <div>
//             <h4 className="font-semibold">Your Title</h4>
//             <p className="text-sm text-gray-600">
//               Social media can enable companies to get greater market share.
//             </p>
//           </div>
//         </div>

//         {/* Right Labels */}
//         <div className="absolute right-[-250px] top-10 space-y-16 text-left">
//           <div>
//             <h4 className="font-semibold">Your Title</h4>
//             <p className="text-sm text-gray-600">
//               Social media can enable companies to get greater market share.
//             </p>
//           </div>
//           <div>
//             <h4 className="font-semibold">Your Title</h4>
//             <p className="text-sm text-gray-600">
//               Social media can enable companies to get greater market share.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS */}
//       <style >{`
//         .clip-triangle {
//           clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PyramidSection;





// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Target, BarChart2, Gem, ShoppingBag } from "lucide-react";

// // ─────────────────────────────────────────────────────────────
// // TYPES
// // ─────────────────────────────────────────────────────────────
// interface PyramidLayer {
//   id: number;
//   label: string;
//   frontGrad: [string, string];
//   leftGrad:  [string, string];
//   topGrad:   [string, string];
//   glowColor: string;
//   rimLight:  string;
// }

// interface InfoItem {
//   id: number;
//   side: "left" | "right";
//   layerIndex: number;
//   Icon: React.ElementType;
//   title: string;
//   body: string;
//   accentColor: string;
//   glowHex: string;
// }

// // ─────────────────────────────────────────────────────────────
// // DATA — same structure, palette tuned for light background
// // ─────────────────────────────────────────────────────────────
// const PYRAMID_LAYERS: PyramidLayer[] = [
//   {
//     id: 5, label: "Foundation",
//     frontGrad: ["#1a3d8a", "#1f4faa"],
//     leftGrad:  ["#0d2255", "#1a3d8a"],
//     topGrad:   ["#2354b8", "#3468d4"],
//     glowColor: "#1a3d8a",
//     rimLight:  "rgba(52,104,212,0.5)",
//   },
//   {
//     id: 4, label: "Strategy",
//     frontGrad: ["#0778a8", "#0998d0"],
//     leftGrad:  ["#044e70", "#0778a8"],
//     topGrad:   ["#0cb4f0", "#22ccff"],
//     glowColor: "#0998d0",
//     rimLight:  "rgba(34,204,255,0.45)",
//   },
//   {
//     id: 3, label: "Growth",
//     frontGrad: ["#059e8a", "#07c4ac"],
//     leftGrad:  ["#036e60", "#059e8a"],
//     topGrad:   ["#0aeed8", "#1afff0"],
//     glowColor: "#07c4ac",
//     rimLight:  "rgba(26,255,240,0.45)",
//   },
//   {
//     id: 2, label: "Vision",
//     frontGrad: ["#0ab858", "#0de86e"],
//     leftGrad:  ["#077840", "#0ab858"],
//     topGrad:   ["#14ff80", "#40ffaa"],
//     glowColor: "#0de86e",
//     rimLight:  "rgba(64,255,170,0.5)",
//   },
//   {
//     id: 1, label: "Apex",
//     frontGrad: ["#20e878", "#58ffb8"],
//     leftGrad:  ["#0ec05a", "#20e878"],
//     topGrad:   ["#88ffd8", "#c4fff0"],
//     glowColor: "#58ffb8",
//     rimLight:  "rgba(136,255,216,0.65)",
//   },
// ];

// const INFO_ITEMS: InfoItem[] = [
//   {
//     id: 1, side: "left", layerIndex: 4,
//     Icon: Target, title: "Your Title",
//     body: "Social media can enable companies to get in the form of greater market share.",
//     accentColor: "#0ab858", glowHex: "rgba(10,184,88,0.14)",
//   },
//   {
//     id: 2, side: "left", layerIndex: 2,
//     Icon: Gem, title: "Your Title",
//     body: "Social media can enable companies to get in the form of greater market share.",
//     accentColor: "#0998d0", glowHex: "rgba(9,152,208,0.14)",
//   },
//   {
//     id: 3, side: "right", layerIndex: 3,
//     Icon: BarChart2, title: "Your Title",
//     body: "Social media can enable companies to get in the form of greater market share.",
//     accentColor: "#07c4ac", glowHex: "rgba(7,196,172,0.14)",
//   },
//   {
//     id: 4, side: "right", layerIndex: 1,
//     Icon: ShoppingBag, title: "Your Title",
//     body: "Social media can enable companies to get in the form of greater market share.",
//     accentColor: "#1a3d8a", glowHex: "rgba(26,61,138,0.12)",
//   },
// ];

// // ─────────────────────────────────────────────────────────────
// // PYRAMID GEOMETRY
// // ─────────────────────────────────────────────────────────────
// interface LayerGeometry {
//   frontPoints: string;
//   leftPoints:  string;
//   topPoints:   string;
//   glossPoints: string;
//   midY:  number;
//   leftX: number;
//   rightX: number;
// }

// const SVG_CX = 180;
// const LEFT_D = 28;
// const LEFT_R = 12;

// const LAYER_DIMS: [number, number, number, number][] = [
//   [102, 148, 338, 424],
//   [ 68, 102, 258, 338],
//   [ 46,  68, 185, 258],
//   [ 29,  46, 120, 185],
//   [  0,  29,  22, 120],
// ];

// function buildGeo(ht: number, hb: number, yt: number, yb: number): LayerGeometry {
//   const ftl = SVG_CX - ht, ftr = SVG_CX + ht;
//   const fbl = SVG_CX - hb, fbr = SVG_CX + hb;
//   const isApex = ht === 0;

//   const frontPoints = isApex
//     ? `${SVG_CX},${yt} ${fbr},${yb} ${fbl},${yb}`
//     : `${ftl},${yt} ${ftr},${yt} ${fbr},${yb} ${fbl},${yb}`;

//   const leftPoints = [
//     `${ftl},${yt}`,
//     `${ftl - LEFT_D},${yt + LEFT_R}`,
//     `${fbl - LEFT_D},${yb + LEFT_R}`,
//     `${fbl},${yb}`,
//   ].join(" ");

//   const topPoints = isApex
//     ? `${SVG_CX},${yt} ${SVG_CX - LEFT_D},${yt + LEFT_R} ${fbl - LEFT_D},${yb + LEFT_R} ${fbl},${yb} ${fbr},${yb} ${ftr},${yt}`
//     : [
//         `${ftl - LEFT_D},${yt + LEFT_R}`,
//         `${ftr - LEFT_D},${yt + LEFT_R}`,
//         `${ftr},${yt}`,
//         `${ftl},${yt}`,
//       ].join(" ");

//   const glossW = isApex ? hb * 0.35 : Math.max(ht, hb) * 0.3;
//   const glossPoints = isApex
//     ? `${SVG_CX},${yt} ${SVG_CX + glossW},${yt + (yb - yt) * 0.35} ${SVG_CX},${yt + (yb - yt) * 0.5}`
//     : `${ftl + (ftr - ftl) * 0.15},${yt} ${ftl + (ftr - ftl) * 0.42},${yt} ${fbl + (fbr - fbl) * 0.38},${yt + (yb - yt) * 0.55} ${fbl + (fbr - fbl) * 0.12},${yt + (yb - yt) * 0.55}`;

//   return {
//     frontPoints, leftPoints, topPoints, glossPoints,
//     midY:   (yt + yb) / 2,
//     leftX:  fbl - LEFT_D - 4,
//     rightX: fbr + 4,
//   };
// }

// const GEOMETRIES: LayerGeometry[] = LAYER_DIMS.map(([ht, hb, yt, yb]) =>
//   buildGeo(ht, hb, yt, yb)
// );

// // ─────────────────────────────────────────────────────────────
// // ANIMATION VARIANTS
// // ─────────────────────────────────────────────────────────────
// const layerVariants = {
//   hidden:  { opacity: 0, y: 55, scaleX: 0.78 },
//   visible: (i: number) => ({
//     opacity: 1, y: 0, scaleX: 1,
//     transition: { duration: 0.7, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] },
//   }),
// };

// const floatVariants = {
//   float: {
//     y: [0, -7, 0],
//     transition: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
//   },
// };

// const labelVariants = {
//   hidden:  (side: "left" | "right") => ({ opacity: 0, x: side === "left" ? -36 : 36 }),
//   visible: (i: number) => ({
//     opacity: 1, x: 0,
//     transition: { duration: 0.6, delay: 1.0 + i * 0.18, ease: [0.16, 1, 0.3, 1] },
//   }),
// };

// const connectorVariants = {
//   hidden:  { pathLength: 0, opacity: 0 },
//   visible: (i: number) => ({
//     pathLength: 1, opacity: 1,
//     transition: { duration: 0.55, delay: 1.18 + i * 0.18, ease: "easeOut" },
//   }),
// };

// const diamondVariants = {
//   hidden:  { opacity: 0, scale: 0 },
//   visible: (i: number) => ({
//     opacity: 1, scale: 1,
//     transition: { duration: 0.3, delay: 1.5 + i * 0.18, type: "spring", stiffness: 280 },
//   }),
// };

// // ─────────────────────────────────────────────────────────────
// // PYRAMID LAYER SHAPE
// // ─────────────────────────────────────────────────────────────
// const PyramidLayerShape: React.FC<{
//   layer: PyramidLayer;
//   geo: LayerGeometry;
//   index: number;
//   isHovered: boolean;
//   onHover: (id: number | null) => void;
// }> = ({ layer, geo, index, isHovered, onHover }) => {
//   const isApex = layer.id === 1;
//   const uid = `l${layer.id}`;

//   return (
//     <motion.g
//       custom={index}
//       variants={layerVariants}
//       initial="hidden"
//       animate="visible"
//       style={{ cursor: "pointer" }}
//       onHoverStart={() => onHover(layer.id)}
//       onHoverEnd={() => onHover(null)}
//     >
//       <defs>
//         <linearGradient id={`fg-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
//           <stop offset="0%"   stopColor={layer.frontGrad[0]} />
//           <stop offset="100%" stopColor={layer.frontGrad[1]} />
//         </linearGradient>
//         <linearGradient id={`lg-${uid}`} x1="100%" y1="0%" x2="0%" y2="0%">
//           <stop offset="0%"   stopColor={layer.leftGrad[1]} />
//           <stop offset="100%" stopColor={layer.leftGrad[0]} stopOpacity="0.7" />
//         </linearGradient>
//         <linearGradient id={`tg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%"   stopColor={layer.topGrad[0]} />
//           <stop offset="100%" stopColor={layer.topGrad[1]} />
//         </linearGradient>
//         <linearGradient id={`gg-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
//           <stop offset="0%"   stopColor="white" stopOpacity="0.22" />
//           <stop offset="100%" stopColor="white" stopOpacity="0" />
//         </linearGradient>
//         <linearGradient id={`rg-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%"   stopColor={layer.rimLight} stopOpacity="0" />
//           <stop offset="100%" stopColor={layer.rimLight} />
//         </linearGradient>
//       </defs>

//       {/* Hover glow */}
//       {isHovered && (
//         <motion.ellipse
//           cx={SVG_CX + 4} cy={geo.midY + 14}
//           rx={LAYER_DIMS[index][1] + 28} ry={16}
//           fill={layer.glowColor}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.22 }}
//           transition={{ duration: 0.25 }}
//           style={{ filter: "blur(14px)" }}
//         />
//       )}

//       {/* Left shadow face */}
//       <polygon points={geo.leftPoints} fill={`url(#lg-${uid})`} opacity={isHovered ? 1 : 0.88} />
//       {/* Front face */}
//       <polygon points={geo.frontPoints} fill={`url(#fg-${uid})`} opacity={isHovered ? 1 : 0.95} />
//       {/* Rim light */}
//       <polygon points={geo.frontPoints} fill={`url(#rg-${uid})`} opacity={0.32} />
//       {/* Top cap */}
//       <polygon points={geo.topPoints} fill={`url(#tg-${uid})`} opacity={isHovered ? 1 : 0.97} />
//       {/* Gloss */}
//       <polygon points={geo.glossPoints} fill={`url(#gg-${uid})`} />

//       {/* Layer separator */}
//       {index < LAYER_DIMS.length - 1 && (
//         <line
//           x1={SVG_CX - LAYER_DIMS[index][1]} y1={LAYER_DIMS[index][3]}
//           x2={SVG_CX + LAYER_DIMS[index][1]} y2={LAYER_DIMS[index][3]}
//           stroke="rgba(255,255,255,0.28)" strokeWidth="1.2"
//         />
//       )}

//       {/* Apex breathing glow */}
//       {isApex && (
//         <motion.ellipse
//           cx={SVG_CX - 4} cy={60} rx={36} ry={20}
//           fill={layer.glowColor} opacity={0}
//           animate={{ opacity: [0, 0.4, 0], rx: [28, 56, 28], ry: [14, 30, 14] }}
//           transition={{ duration: 3.0, repeat: Infinity, ease: "easeInOut" }}
//           style={{ filter: "blur(8px)" }}
//         />
//       )}
//     </motion.g>
//   );
// };

// // ─────────────────────────────────────────────────────────────
// // INFO LABEL
// // ─────────────────────────────────────────────────────────────
// const InfoLabel: React.FC<{ item: InfoItem; index: number }> = ({ item, index }) => {
//   const isLeft = item.side === "left";
//   return (
//     <motion.div
//       custom={index}
//       variants={labelVariants}
//       initial="hidden"
//       animate="visible"
//       className={`flex items-start gap-3 ${isLeft ? "flex-row-reverse text-right" : "flex-row text-left"}`}
//       style={{ maxWidth: 210 }}
//     >
//       {/* Icon box — glassmorphism on light bg */}
//       <div
//         className="flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center"
//         style={{
//           background: `linear-gradient(135deg, ${item.glowHex}, rgba(255,255,255,0.55))`,
//           border: `1.5px solid ${item.accentColor}50`,
//           boxShadow: `0 4px 20px ${item.accentColor}28, inset 0 1px 0 rgba(255,255,255,0.7)`,
//           backdropFilter: "blur(8px)",
//         }}
//       >
//         <item.Icon size={18} color={item.accentColor} strokeWidth={1.9} />
//       </div>

//       {/* Text */}
//       <div>
//         <p style={{
//           fontFamily: "'Montserrat', sans-serif",
//           fontWeight: 700, fontSize: "0.9rem",
//           color: "#1a2640", margin: "0 0 5px",
//           letterSpacing: "0.01em",
//         }}>
//           {item.title}
//         </p>
//         <p style={{
//           fontFamily: "'DM Sans', sans-serif",
//           fontWeight: 400, fontSize: "0.74rem",
//           color: "#5a6a82", lineHeight: 1.65, margin: 0,
//         }}>
//           {item.body}
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// // ─────────────────────────────────────────────────────────────
// // LABEL TOP OFFSETS
// // ─────────────────────────────────────────────────────────────
// const LABEL_TOP: Record<number, string> = { 1: "3%", 2: "40%", 3: "20%", 4: "57%" };

// // ─────────────────────────────────────────────────────────────
// // MAIN COMPONENT
// // ─────────────────────────────────────────────────────────────
// const PyramidSection: React.FC = () => {
//   const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

//   const leftItems  = INFO_ITEMS.filter(i => i.side === "left");
//   const rightItems = INFO_ITEMS.filter(i => i.side === "right");

//   return (
//     <>
//       <link
//         href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=DM+Sans:wght@400;500&display=swap"
//         rel="stylesheet"
//       />

//       <div
//         className="relative w-full flex items-center justify-center overflow-hidden"
//         style={{ minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}
//       >
//         {/* ── BACKGROUND — exact match to footer image ── */}

//         {/* Base: warm pink-rose top-left → soft yellow center → pale sky-blue bottom-right */}
//         <div className="absolute inset-0" style={{
//           background: "linear-gradient(135deg, #f7c5d0 0%, #fadadd 12%, #fce8c0 30%, #fef5d0 48%, #e8f8e0 64%, #c8eef8 80%, #b8e0f8 100%)",
//         }} />

//         {/* Warm pink blob top-left */}
//         <div className="absolute pointer-events-none" style={{
//           top: "-10%", left: "-8%", width: 640, height: 560, borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(248,140,168,0.38) 0%, rgba(252,190,200,0.18) 55%, transparent 80%)",
//           filter: "blur(30px)",
//         }} />

//         {/* Golden-yellow center-top */}
//         <div className="absolute pointer-events-none" style={{
//           top: "-5%", left: "30%", width: 700, height: 520, borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(255,220,100,0.28) 0%, rgba(255,240,160,0.12) 55%, transparent 80%)",
//           filter: "blur(40px)",
//         }} />

//         {/* Soft green center */}
//         <div className="absolute pointer-events-none" style={{
//           top: "20%", left: "40%", width: 500, height: 500, borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(160,240,180,0.22) 0%, transparent 70%)",
//           filter: "blur(32px)",
//         }} />

//         {/* Pale blue bottom-right */}
//         <div className="absolute pointer-events-none" style={{
//           bottom: "-5%", right: "-6%", width: 680, height: 580, borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(130,200,248,0.38) 0%, rgba(180,230,255,0.18) 55%, transparent 80%)",
//           filter: "blur(36px)",
//         }} />

//         {/* Lavender hint top-right */}
//         <div className="absolute pointer-events-none" style={{
//           top: "0%", right: "5%", width: 420, height: 380, borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(200,190,248,0.22) 0%, transparent 70%)",
//           filter: "blur(28px)",
//         }} />

//         {/* Subtle noise texture overlay for paper feel */}
//         <div className="absolute inset-0 pointer-events-none" style={{
//           backgroundImage:
//             "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
//           backgroundRepeat: "repeat",
//           backgroundSize: "160px 160px",
//           opacity: 0.4,
//           mixBlendMode: "multiply",
//         }} />

//         {/* ── MAIN LAYOUT ── */}
//         <div
//           className="relative w-full max-w-6xl mx-auto px-4"
//           style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 0 }}
//         >

//           {/* LEFT LABELS */}
//           <div className="relative hidden md:block" style={{ height: 480 }}>
//             {leftItems.map((item, li) => (
//               <div
//                 key={item.id}
//                 className="absolute right-0 flex items-center"
//                 style={{ top: LABEL_TOP[item.id] }}
//               >
//                 <InfoLabel item={item} index={li} />

//                 <motion.svg
//                   width="64" height="22"
//                   style={{ flexShrink: 0, overflow: "visible" }}
//                   initial="hidden" animate="visible"
//                 >
//                   <defs>
//                     <linearGradient id={`cl-${item.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
//                       <stop offset="0%"   stopColor={item.accentColor} stopOpacity="0" />
//                       <stop offset="100%" stopColor={item.accentColor} stopOpacity="0.9" />
//                     </linearGradient>
//                   </defs>
//                   <motion.line
//                     custom={li} variants={connectorVariants}
//                     x1="0" y1="11" x2="58" y2="11"
//                     stroke={`url(#cl-${item.id})`} strokeWidth="1.5" strokeDasharray="5 3"
//                   />
//                   <motion.g
//                     custom={li} variants={diamondVariants}
//                     style={{ filter: `drop-shadow(0 0 4px ${item.accentColor}88)` }}
//                   >
//                     <polygon points="58,7 63,11 58,15 53,11" fill={item.accentColor} opacity={0.9} />
//                   </motion.g>
//                 </motion.svg>
//               </div>
//             ))}
//           </div>

//           {/* PYRAMID */}
//           <motion.div
//             style={{ width: "clamp(280px, 32vw, 400px)", flexShrink: 0 }}
//             variants={floatVariants}
//             animate="float"
//           >
//             <svg
//               viewBox="0 0 360 450"
//               width="100%"
//               style={{ overflow: "visible", display: "block" }}
//             >
//               <defs>
//                 <filter id="bloom" x="-40%" y="-40%" width="180%" height="180%">
//                   <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
//                   <feMerge>
//                     <feMergeNode in="blur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>
//                 <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
//                   <stop offset="0%"   stopColor="rgba(80,100,140,0.45)" />
//                   <stop offset="100%" stopColor="rgba(80,100,140,0)" />
//                 </radialGradient>
//               </defs>

//               {/* Ground shadow */}
//               <motion.ellipse
//                 cx={SVG_CX - LEFT_D / 2} cy={436} rx={158} ry={18}
//                 fill="url(#shadowGrad)"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.7, duration: 0.8 }}
//                 style={{ filter: "blur(6px)" }}
//               />
//               {/* Coloured ambient base glow */}
//               <motion.ellipse
//                 cx={SVG_CX - LEFT_D / 2} cy={430} rx={110} ry={10}
//                 fill="#0998d0"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.15 }}
//                 transition={{ delay: 0.9, duration: 0.8 }}
//                 style={{ filter: "blur(14px)" }}
//               />

//               <g filter="url(#bloom)">
//                 {PYRAMID_LAYERS.map((layer, i) => (
//                   <PyramidLayerShape
//                     key={layer.id}
//                     layer={layer}
//                     geo={GEOMETRIES[i]}
//                     index={i}
//                     isHovered={hoveredLayer === layer.id}
//                     onHover={setHoveredLayer}
//                   />
//                 ))}
//               </g>
//             </svg>
//           </motion.div>

//           {/* RIGHT LABELS */}
//           <div className="relative hidden md:block" style={{ height: 480 }}>
//             {rightItems.map((item, ri) => (
//               <div
//                 key={item.id}
//                 className="absolute left-0 flex items-center"
//                 style={{ top: LABEL_TOP[item.id] }}
//               >
//                 <motion.svg
//                   width="64" height="22"
//                   style={{ flexShrink: 0, overflow: "visible" }}
//                   initial="hidden" animate="visible"
//                 >
//                   <defs>
//                     <linearGradient id={`cr-${item.id}`} x1="100%" y1="0%" x2="0%" y2="0%">
//                       <stop offset="0%"   stopColor={item.accentColor} stopOpacity="0" />
//                       <stop offset="100%" stopColor={item.accentColor} stopOpacity="0.9" />
//                     </linearGradient>
//                   </defs>
//                   <motion.g
//                     custom={ri + 2} variants={diamondVariants}
//                     style={{ filter: `drop-shadow(0 0 4px ${item.accentColor}88)` }}
//                   >
//                     <polygon points="6,7 11,11 6,15 1,11" fill={item.accentColor} opacity={0.9} />
//                   </motion.g>
//                   <motion.line
//                     custom={ri + 2} variants={connectorVariants}
//                     x1="11" y1="11" x2="64" y2="11"
//                     stroke={`url(#cr-${item.id})`} strokeWidth="1.5" strokeDasharray="5 3"
//                   />
//                 </motion.svg>

//                 <InfoLabel item={item} index={ri + 2} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ── MOBILE LABELS ── */}
//         <div className="md:hidden w-full px-6 pb-12" style={{ marginTop: "-2rem" }}>
//           <div className="grid grid-cols-2 gap-4">
//             {INFO_ITEMS.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl"
//                 style={{
//                   background: "rgba(255,255,255,0.45)",
//                   border: "1px solid rgba(255,255,255,0.7)",
//                   backdropFilter: "blur(12px)",
//                   boxShadow: "0 4px 20px rgba(100,120,160,0.12)",
//                 }}
//               >
//                 <div
//                   className="w-10 h-10 rounded-xl flex items-center justify-center"
//                   style={{
//                     background: `linear-gradient(135deg, ${item.glowHex}, rgba(255,255,255,0.6))`,
//                     border: `1.5px solid ${item.accentColor}55`,
//                     boxShadow: `0 0 14px ${item.accentColor}28`,
//                   }}
//                 >
//                   <item.Icon size={16} color={item.accentColor} strokeWidth={1.8} />
//                 </div>
//                 <p style={{
//                   fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
//                   fontSize: "0.8rem", color: "#1a2640", margin: 0,
//                 }}>
//                   {item.title}
//                 </p>
//                 <p style={{
//                   fontFamily: "'DM Sans', sans-serif",
//                   fontSize: "0.68rem", color: "#5a6a82", lineHeight: 1.5, margin: 0,
//                 }}>
//                   {item.body}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Vignette — very soft, matches pastel feel */}
//         <div className="absolute inset-0 pointer-events-none" style={{
//           background:
//             "radial-gradient(ellipse 110% 95% at 50% 50%, transparent 55%, rgba(200,180,210,0.12) 100%)",
//         }} />
//       </div>
//     </>
//   );
// };

// export default PyramidSection;



// import React from "react";
// import { Target, Briefcase, Building2, Lightbulb, Rocket, Trophy } from "lucide-react";

// const timelineData = [
//   {
//     year: "2018",
//     title: "Started Journey",
//     desc: "Lorem Ipsum is simply dummy text of the printing industry.",
//     icon: <Briefcase size={18} />,
//     color: "bg-orange-500",
//   },
//   {
//     year: "2019",
//     title: "First Achievement",
//     desc: "Lorem Ipsum is simply dummy text of the printing industry.",
//     icon: <Target size={18} />,
//     color: "bg-red-500",
//   },
//   {
//     year: "2020",
//     title: "Expansion",
//     desc: "Lorem Ipsum is simply dummy text of the printing industry.",
//     icon: <Building2 size={18} />,
//     color: "bg-blue-600",
//   },
//   {
//     year: "2021",
//     title: "Innovation",
//     desc: "Lorem Ipsum is simply dummy text of the printing industry.",
//     icon: <Lightbulb size={18} />,
//     color: "bg-green-600",
//   },
//   {
//     year: "2022",
//     title: "Growth",
//     desc: "Lorem Ipsum is simply dummy text of the printing industry.",
//     icon: <Rocket size={18} />,
//     color: "bg-purple-600",
//   },
//   {
//     year: "2023",
//     title: "Award Winning",
//     desc: "Lorem Ipsum is simply dummy text of the printing industry.",
//     icon: <Trophy size={18} />,
//     color: "bg-yellow-500",
//   },
// ];

// const ZigZagTimeline: React.FC = () => {
//   return (
//     <section className="relative py-20 bg-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800">
//             Our Journey Timeline
//           </h2>
//           <p className="text-gray-500 mt-2">
//             A quick look at our milestones
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative">
          
//           {/* Line */}
//           <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-blue-500 to-purple-500 rounded-full transform -translate-y-1/2" />

//           <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
//             {timelineData.map((item, index) => {
//               const isTop = index % 2 === 0;

//               return (
//                 <div key={index} className="relative flex flex-col items-center">

//                   {/* Content TOP */}
//                   {isTop && (
//                     <div className="mb-16 text-center">
//                       <h4 className="font-semibold text-gray-800">
//                         {item.title}
//                       </h4>
//                       <p className="text-sm text-gray-500 mt-1">
//                         {item.desc}
//                       </p>
//                     </div>
//                   )}

//                   {/* Dot */}
//                   <div
//                     className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg ${item.color}`}
//                   >
//                     {item.icon}
//                   </div>

//                   {/* Year */}
//                   <span className="mt-2 font-semibold text-gray-700">
//                     {item.year}
//                   </span>

//                   {/* Line connector */}
//                   <div
//                     className={`w-1 h-16 ${item.color} ${
//                       isTop ? "mt-2" : "mb-2"
//                     }`}
//                   />

//                   {/* Content BOTTOM */}
//                   {!isTop && (
//                     <div className="mt-4 text-center">
//                       <h4 className="font-semibold text-gray-800">
//                         {item.title}
//                       </h4>
//                       <p className="text-sm text-gray-500 mt-1">
//                         {item.desc}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ZigZagTimeline;


// import React from "react";
// import { Target, Briefcase, Building2, Lightbulb, Rocket, Trophy, Shield, Database, Wifi, Cpu } from "lucide-react";

// const timelineData = [
//   {
//     title: "Build Business IT Infra Strategy",
//     desc: "Foundation layer for business technology roadmap",
//     icon: <Briefcase size={20} />,
//     color: "bg-orange-500",
//   },
//   {
//     title: "Smart Technology",
//     desc: "Intelligent systems integration",
//     icon: <Cpu size={20} />,
//     color: "bg-red-500",
//   },
//   {
//     title: "Pyramid / Future",
//     desc: "Strategic framework for future growth",
//     icon: <Building2 size={20} />,
//     color: "bg-blue-600",
//   },
//   {
//     title: "Artificial Intelligence",
//     desc: "Smart tech requiring scalable infrastructure",
//     icon: <Lightbulb size={20} />,
//     color: "bg-green-600",
//   },
//   {
//     title: "Data Infra",
//     desc: "Scalable data infrastructure",
//     icon: <Database size={20} />,
//     color: "bg-purple-600",
//   },
//   {
//     title: "Data Security",
//     desc: "Protection of data assets",
//     icon: <Shield size={20} />,
//     color: "bg-yellow-500",
//   },
//   {
//     title: "Data Physical Security",
//     desc: "Hardware & facility protection",
//     icon: <Building2 size={20} />,
//     color: "bg-indigo-600",
//   },
//   {
//     title: "Data Cabling",
//     desc: "High bandwidth & connectivity",
//     icon: <Wifi size={20} />,
//     color: "bg-pink-500",
//   },
// ];

// const ZigZagTimeline: React.FC = () => {
//   return (
//     <section className="relative py-20 bg-gray-50 overflow-x-auto">
//       <div className="min-w-[1200px] lg:min-w-0 lg:max-w-7xl mx-auto px-6">
        
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800">
//             Smart Technology Pyramid
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Layered infrastructure from foundation to AI
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative">
          
//           {/* Line */}
//           <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-blue-500 to-purple-500 rounded-full transform -translate-y-1/2" />

//           <div className="grid grid-cols-8 gap-4 relative z-10">
//             {timelineData.map((item, index) => {
//               const isTop = index % 2 === 0;

//               return (
//                 <div key={index} className="relative flex flex-col items-center">

//                   {/* Content TOP */}
//                   {isTop && (
//                     <div className="mb-28 text-center">
//                       <h4 className="font-semibold text-gray-800 text-sm whitespace-nowrap">
//                         {item.title}
//                       </h4>
//                       <p className="text-xs text-gray-500 mt-2 max-w-[160px] mx-auto leading-relaxed">
//                         {item.desc}
//                       </p>
//                     </div>
//                   )}

//                   {/* Dot */}
//                   <div
//                     className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg ${item.color} ring-4 ring-white`}
//                   >
//                     {item.icon}
//                   </div>

//                   {/* Line connector */}
//                   <div
//                     className={`w-0.5 h-10 ${item.color}`}
//                   />

//                   {/* Content BOTTOM */}
//                   {!isTop && (
//                     <div className="mt-28 text-center">
//                       <h4 className="font-semibold text-gray-800 text-sm whitespace-nowrap">
//                         {item.title}
//                       </h4>
//                       <p className="text-xs text-gray-500 mt-2 max-w-[160px] mx-auto leading-relaxed">
//                         {item.desc}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Bottom Note */}
//         <div className="text-center mt-20 p-5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl max-w-3xl mx-auto">
//           <p className="text-gray-700 text-sm leading-relaxed">
//             <span className="font-bold text-gray-900">🔺 Note:</span> A.I. is a Smart Technology that requires 
//             scalable Data Infrastructure and Security of Data with High Bandwidth & connectivity of Data Cabling. 
//             It is in a layered form, one below the other.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ZigZagTimeline;




// import React from "react";

// const PyramidInfra: React.FC = () => {
//   const layers = [
//     {
//       title: "Artificial Intelligence",
//       subtitle: "Future",
//       bg: "bg-indigo-600",
//       width: "w-[300px]",
//     },
//     {
//       title: "Data Infrastructure",
//       bg: "bg-blue-600",
//       width: "w-[380px]",
//     },
//     {
//       title: "Data Security",
//       bg: "bg-green-600",
//       width: "w-[460px]",
//     },
//     {
//       title: "Physical Security",
//       bg: "bg-yellow-500",
//       width: "w-[540px]",
//     },
//     {
//       title: "Data Cabling",
//       bg: "bg-orange-500",
//       width: "w-[620px]",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 text-center">
        
//         {/* Heading */}
//         <h2 className="text-4xl font-bold mb-6">
//           Business IT Infrastructure Strategy
//         </h2>

//         {/* Description */}
//         <p className="max-w-3xl mx-auto text-gray-600 mb-16 leading-relaxed">
//           AI is a smart technology that requires scalable data infrastructure,
//           strong data security, and high bandwidth connectivity through structured
//           data cabling. These components are built in a layered pyramid structure.
//         </p>

//         {/* Pyramid */}
//         <div className="flex flex-col items-center gap-3">
//           {layers.map((layer, index) => (
//             <div
//               key={index}
//               className={`${layer.bg} ${layer.width} text-white py-4 rounded-md shadow-lg`}
//             >
//               <h3 className="font-semibold text-lg">{layer.title}</h3>
//               {layer.subtitle && (
//                 <p className="text-sm opacity-80">{layer.subtitle}</p>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Bottom Note */}
//         <p className="mt-12 text-gray-500 text-sm max-w-2xl mx-auto">
//           A.I. depends on a strong foundation of infrastructure, security, and
//           connectivity. Each layer supports the next, forming a scalable and
//           secure IT ecosystem.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default PyramidInfra;





// import React, { useState } from "react";

// type ProductCard = {
//   id: number;
//   title: string;
//   subtitle?: string;
//   content: string;
//   image: string;
//   category: string;
// };

// const productData: ProductCard[] = [
//   {
//     id: 1,
//     title: "Artificial Intelligence",
//     subtitle: "Smart Technology",
//     content: "AI is a Smart technology that requires scalable Data infrastructure and Security of Data with High Bandwidth & connectivity of Data Cabling. It is in a layered form, one below the other, forming a complete pyramid of technological evolution.",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=60",
//     category: "Smart Technology"
//   },
//   {
//     id: 2,
//     title: "Data Infrastructure",
//     subtitle: "Scalable Foundation",
//     content: "Scalable Data infrastructure forms the backbone of modern AI systems. Designed to handle exponential data growth, ensuring seamless integration with high-performance computing environments and distributed architectures.",
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=60",
//     category: "Infrastructure"
//   },
//   {
//     id: 3,
//     title: "Data Security",
//     subtitle: "Protection & Compliance",
//     content: "Enterprise-grade Data Security solutions including encryption, access control, threat detection, and compliance management. Protecting sensitive information across cloud, on-premise, and hybrid environments.",
//     image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=60",
//     category: "Security"
//   },
//   {
//     id: 4,
//     title: "Data Physical Security & Cabling",
//     subtitle: "High Bandwidth Connectivity",
//     content: "High Bandwidth connectivity with structured Data Cabling solutions. Physical security measures including biometric access, surveillance, and secure server rooms. Layered approach ensuring complete protection from physical to digital.",
//     image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1200&q=60",
//     category: "Connectivity"
//   }
// ];

// export default function BusinessITInfraShowcase() {
//   const [openId, setOpenId] = useState<number | null>(1);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-900 flex items-center justify-center p-6">
//       <div className="w-full max-w-7xl">
        
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
//             <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
//             Enterprise IT Infrastructure Strategy
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             BUILD BUSINESS <span className="text-purple-400">IT INFRA</span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Smart Technology • Pyramid • Future
//           </p>
//           <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
//             <span className="flex items-center gap-1">
//               <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
//               Layered Architecture
//             </span>
//             <span className="flex items-center gap-1">
//               <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
//               Scalable Infrastructure
//             </span>
//             <span className="flex items-center gap-1">
//               <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
//               End-to-End Security
//             </span>
//           </div>
//         </div>

//         {/* Trusted By Section */}
//         <div className="mb-12 text-center">
//           <p className="text-gray-400 mb-4">Trusted by industry leaders</p>
//           <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 font-semibold">
//             <span className="hover:text-purple-400 transition">Enterprise</span>
//             <span className="hover:text-purple-400 transition">Government</span>
//             <span className="hover:text-purple-400 transition">Defense</span>
//             <span className="hover:text-purple-400 transition">Finance</span>
//             <span className="hover:text-purple-400 transition">Healthcare</span>
//           </div>
//         </div>

//         {/* Pyramid Structure Note */}
//         <div className="mb-8 text-center">
//           <p className="text-sm text-purple-300/70 italic">
//             ⚡ Layered form — one below the other, forming a complete technology pyramid
//           </p>
//         </div>

//         {/* Product Cards Container */}
//         <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 overflow-hidden">
//           {productData.map((product) => {
//             const isOpen = openId === product.id;

//             return (
//               <button
//                 key={product.id}
//                 onClick={() => setOpenId(isOpen ? null : product.id)}
//                 className={`relative group block flex-1 min-h-[400px] rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out transform
//                   ${isOpen ? "lg:flex-[3.2] scale-100" : "lg:flex-[1] hover:lg:flex-[1.4] hover:scale-[1.02]"} 
//                   bg-white/10 backdrop-blur-sm border border-white/20`}
//                 aria-expanded={isOpen}
//               >
//                 {/* Background image with overlay */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center will-change-transform transition-all duration-700"
//                   style={{ 
//                     backgroundImage: `url(${product.image})`,
//                     filter: isOpen ? "none" : "brightness(0.5)"
//                   }}
//                 />

//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />

//                 {/* Content */}
//                 <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between text-left">
//                   <div>
//                     {/* Category badge */}
//                     <div className="inline-flex items-center gap-2 bg-purple-600/40 text-purple-200 px-3 py-1 rounded-full text-xs font-medium mb-4">
//                       <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
//                       {product.category}
//                     </div>
                    
//                     <p className="text-sm uppercase tracking-widest text-purple-300/80 font-medium">
//                       {product.subtitle}
//                     </p>
//                     <h2
//                       className={`mt-2 text-2xl sm:text-3xl font-bold text-white transition-all duration-300 ${
//                         isOpen ? "opacity-100" : "opacity-90"
//                       }`}
//                     >
//                       {product.title}
//                     </h2>
//                   </div>

//                   <div className="mt-4 text-white/90">
//                     {/* Expanded content */}
//                     <p
//                       className={`text-sm sm:text-base leading-relaxed transition-all duration-500 ease-in-out ${
//                         isOpen ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-3"
//                       } overflow-hidden`}
//                     >
//                       {product.content}
//                     </p>

//                     {/* Specifications - only visible when open */}
//                     <div className={`mt-6 transition-all duration-500 ${
//                       isOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
//                     } overflow-hidden`}>
//                       <div className="grid grid-cols-2 gap-4 text-xs">
//                         {product.id === 1 && (
//                           <>
//                             <div className="bg-white/10 p-2 rounded backdrop-blur-sm">
//                               <div className="text-purple-300">Smart Tech</div>
//                               <div className="text-white font-semibold">AI/ML Ready</div>
//                             </div>
//                             <div className="bg-white/10 p-2 rounded backdrop-blur-sm">
//                               <div className="text-purple-300">Layered Form</div>
//                               <div className="text-white font-semibold">Pyramid Architecture</div>
//                             </div>
//                           </>
//                         )}
//                         {product.id === 2 && (
//                           <>
//                             <div className="bg-white/10 p-2 rounded backdrop-blur-sm">
//                               <div className="text-purple-300">Scalability</div>
//                               <div className="text-white font-semibold">Elastic & Modular</div>
//                             </div>
//                             <div className="bg-white/10 p-2 rounded backdrop-blur-sm">
//                               <div className="text-purple-300">Performance</div>
//                               <div className="text-white font-semibold">High Throughput</div>
//                             </div>
//                           </>
//                         )}
//                         {product.id === 3 && (
//                           <>
//                             <div className="bg-white/10 p-2 rounded backdrop-blur-sm">
//                               <div className="text-purple-300">Encryption</div>
//                               <div className="text-white font-semibold">AES-256</div>
//                             </div>
//                             <div className="bg-white/10 p-2 rounded backdrop-blur-sm">
//                               <div className="text-purple-300">Compliance</div>
//                               <div className="text-white font-semibold">ISO 27001</div>
//                             </div>
//                           </>
//                         )}
//                         {product.id === 4 && (
//                           <>
//                             <div className="bg-white/10 p-2 rounded backdrop-blur-sm">
//                               <div className="text-purple-300">Bandwidth</div>
//                               <div className="text-white font-semibold">Up to 400Gbps</div>
//                             </div>
//                             <div className="bg-white/10 p-2 rounded backdrop-blur-sm">
//                               <div className="text-purple-300">Physical Security</div>
//                               <div className="text-white font-semibold">Biometric + CCTV</div>
//                             </div>
//                           </>
//                         )}
//                       </div>
//                     </div>

//                     {/* CTA button */}
//                     <div className={`mt-6 transition-opacity duration-300 ${
//                       isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//                     }`}>
//                       <span className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors">
//                         Learn More
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                         </svg>
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Accessibility */}
//                 <span className="sr-only">
//                   {isOpen ? `${product.title} (open)` : `${product.title} (closed)`}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Technology Pyramid Footer */}
//         <div className="mt-12">
//           <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
//             <div className="text-center mb-8">
//               <h3 className="text-2xl font-bold text-white mb-2">Technology Pyramid</h3>
//               <p className="text-gray-400">Layered Architecture — One Below The Other</p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//               <div className="bg-gradient-to-b from-purple-900/50 to-transparent p-6 rounded-xl text-center border border-purple-500/30">
//                 <div className="text-3xl mb-2">🎯</div>
//                 <h4 className="font-semibold text-white mb-1">Layer 4</h4>
//                 <p className="text-sm text-gray-300">Artificial Intelligence</p>
//                 <p className="text-xs text-purple-400 mt-2">Smart Technology</p>
//               </div>
              
//               <div className="bg-gradient-to-b from-blue-900/50 to-transparent p-6 rounded-xl text-center border border-blue-500/30">
//                 <div className="text-3xl mb-2">🏗️</div>
//                 <h4 className="font-semibold text-white mb-1">Layer 3</h4>
//                 <p className="text-sm text-gray-300">Data Infrastructure</p>
//                 <p className="text-xs text-blue-400 mt-2">Scalable Foundation</p>
//               </div>
              
//               <div className="bg-gradient-to-b from-emerald-900/50 to-transparent p-6 rounded-xl text-center border border-emerald-500/30">
//                 <div className="text-3xl mb-2">🔒</div>
//                 <h4 className="font-semibold text-white mb-1">Layer 2</h4>
//                 <p className="text-sm text-gray-300">Data Security</p>
//                 <p className="text-xs text-emerald-400 mt-2">Protection & Compliance</p>
//               </div>
              
//               <div className="bg-gradient-to-b from-amber-900/50 to-transparent p-6 rounded-xl text-center border border-amber-500/30">
//                 <div className="text-3xl mb-2">🔌</div>
//                 <h4 className="font-semibold text-white mb-1">Layer 1</h4>
//                 <p className="text-sm text-gray-300">Physical Security & Cabling</p>
//                 <p className="text-xs text-amber-400 mt-2">High Bandwidth Connectivity</p>
//               </div>
//             </div>
            
//             <div className="mt-8 text-center">
//               <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
//                 <span className="w-16 h-px bg-purple-500/50"></span>
//                 Complete Pyramid — One Below The Other
//                 <span className="w-16 h-px bg-purple-500/50"></span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// import { Zap } from "lucide-react";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// type ProductCard = {
//   id: number;
//   title: string;
//   subtitle?: string;
//   content: string;
//   image: string;
//   category: string;
// };

// const productData: ProductCard[] = [
//   {
//     id: 1,
//     title: "Artificial Intelligence",
//     subtitle: "Smart Technology Solutions",
//     content: "AI-powered solutions that transform business operations. Implement machine learning models, natural language processing, and computer vision to automate processes and gain insights from your data.",
//     image: "https://i.pinimg.com/736x/30/f1/50/30f150b6738f5c8a7c3726ace3d095fd.jpg",
//     category: "Smart Technology"
//   },
//   {
//     id: 2,
//     title: "Data Infrastructure",
//     subtitle: "Scalable Foundation",
//     content: "Robust data infrastructure solutions designed for scalability and performance. From cloud storage to on-premise servers, we provide the foundation for your data-driven operations.",
//     image: "https://i.pinimg.com/736x/b7/88/25/b7882524b3523f23a3ca93a6774fe1cd.jpg",
//     category: "Data Infra"
//   },
//   {
//     id: 3,
//     title: "Data Security",
//     subtitle: "Protection & Compliance",
//     content: "Comprehensive security solutions to protect your valuable data. Implement encryption, access controls, and monitoring systems to safeguard against threats and ensure compliance.",
//     image: "https://i.pinimg.com/1200x/07/53/51/0753512c7e43723ea45fc614c359e6ed.jpg",
//     category: "Security"
//   },
//   {
//     id: 4,
//     title: "Data Physical Security",
//     subtitle: "Hardware Protection",
//     content: "Physical security measures to protect your data centers and hardware. From biometric access controls to surveillance systems, ensure your infrastructure is physically secured.",
//     image: "https://i.pinimg.com/736x/3a/4e/50/3a4e50446d33d1dcacbd5287bbec4542.jpg",
//     category: "Physical Security"
//   },
//   {
//     id: 5,
//     title: "Data Cabling",
//     subtitle: "High Bandwidth Connectivity",
//     content: "Professional cabling solutions for maximum data throughput. Structured cabling systems designed for reliability and future-proofing your network infrastructure.",
//     image: "https://i.pinimg.com/1200x/18/1a/99/181a993445e84789e42325760cf7200a.jpg",
//     category: "Connectivity"
//   }
// ];

// export default function ITInfraShowcase() {
//   const [openId, setOpenId] = useState<number | null>(1);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 flex items-center justify-center p-6">
//       <div className="w-full max-w-7xl">
        
//         {/* Header Section */}
//         <div className="text-center mb-12">
//          <div className="inline-flex items-center gap-2 bg-primary/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
//   <Zap size={16} />
//   <span>Building Tomorrow's IT Infrastructure</span>
//       </div>
//       <h1 className="text-4xl sm:text-5xl font-black mb-4 text-center">
//      <span className="bg-gradient-to-r from-pink-700 via-orange-500 to-blue-700 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
//     BUSINESS IT INFRA STRATEGY
//       </span>
//       </h1>
//     <p className="text-xl text-white max-w-3xl mx-auto">
//   A.I. is a Smart Technology that requires scalable Data Infrastructure and Security of Data with High Bandwidth & connectivity of Data Cabling.
// </p>
//         </div>

//         {/* Pyramid Visualization */}
//         {/* <div className="mb-12 text-center">
//           <p className="text-white/90 mb-4">Our Technology Pyramid</p>
//           <div className="flex flex-col items-center space-y-2">
//             <div className="w-32 h-8 bg-pink-500 text-white flex items-center justify-center rounded text-sm font-medium">A.I. & Smart Tech</div>
//             <div className="w-48 h-8 bg-magenta-500 text-white flex items-center justify-center rounded text-sm font-medium">Data Infrastructure</div>
//             <div className="w-64 h-8 bg-orange-500 text-white flex items-center justify-center rounded text-sm font-medium">Data Security</div>
//             <div className="w-64 h-8 bg-yellow-500 text-white flex items-center justify-center rounded text-sm font-medium">Data Physical Security</div>
//             <div className="w-80 h-8 bg-blue-500 text-white flex items-center justify-center rounded text-sm font-medium">Data Cabling & Connectivity</div>
//           </div>
//         </div> */}

//         {/* Product Cards Container */}
//         <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 overflow-hidden">
//           {productData.map((product, index) => {
//             const isOpen = openId === product.id;
//             // Define colors for each card based on index
//             const cardColors = [
//               { bg: 'bg-pink-500', light: 'bg-pink-100', text: 'text-pink-300' }, // AI
//               { bg: 'bg-magenta-500', light: 'bg-magenta-100', text: 'text-magenta-300' }, // Data Infra
//               { bg: 'bg-orange-500', light: 'bg-orange-100', text: 'text-orange-300' }, // Security
//               { bg: 'bg-yellow-500', light: 'bg-yellow-100', text: 'text-yellow-300' }, // Physical Security
//               { bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-300' }, // Cabling
//             ];
//             const color = cardColors[index];

//             return (
//               <button
//                 key={product.id}
//                 onClick={() => setOpenId(isOpen ? null : product.id)}
//                 className={`relative group block flex-1 min-h-[400px] rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-in-out transform
//                   ${isOpen ? "lg:flex-[3.2] scale-100" : "lg:flex-[1] hover:lg:flex-[1.4] hover:scale-[1.02]"} 
//                   bg-white border border-white/20 backdrop-blur-sm`}
//                 aria-expanded={isOpen}
//               >
//                 {/* Background image with overlay */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center will-change-transform transition-all duration-700"
//                   style={{ 
//                     backgroundImage: `url(${product.image})`,
//                     filter: isOpen ? "none" : "brightness(0.7)"
//                   }}
//                 />

//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

//                 {/* Content */}
//                 <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between text-left">
//                   <div>
//                     {/* Category badge */}
//                     <div className={`inline-flex items-center gap-2 ${color.bg}/20 text-white px-3 py-1 rounded-full text-xs font-medium mb-4`}>
//                       <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
//                       {product.category}
//                     </div>
                    
//                     <p className="text-sm uppercase tracking-widest text-white/80 font-medium">
//                       {product.subtitle}
//                     </p>
//                     <h2
//                       className={`mt-2 text-2xl sm:text-3xl font-bold text-white transition-all duration-300 ${
//                         isOpen ? "opacity-100" : "opacity-90"
//                       }`}
//                     >
//                       {product.title}
//                     </h2>
//                   </div>

//                   <div className="mt-4 text-white/90">
//                     {/* Expanded content */}
//                     <p
//                       className={`text-sm sm:text-base leading-relaxed transition-all duration-500 ease-in-out ${
//                         isOpen ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-3"
//                       } overflow-hidden`}
//                     >
//                       {product.content}
//                     </p>

//                     {/* Specifications - only visible when open */}
//                     <div className={`mt-6 transition-all duration-500 ${
//                       isOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
//                     } overflow-hidden`}>
//                       <div className="grid grid-cols-2 gap-4 text-xs">
//                         {product.id === 1 && (
//                           <>
//                             <div className="bg-white/10 p-2 rounded">
//                               <div className="text-cyan-300">Technology</div>
//                               <div className="text-white font-semibold">Machine Learning</div>
//                             </div>
//                             <div className="bg-white/10 p-2 rounded">
//                               <div className="text-cyan-300">Application</div>
//                               <div className="text-white font-semibold">Business Intelligence</div>
//                             </div>
//                           </>
//                         )}
//                         {product.id === 2 && (
//                           <>
//                             <div className="bg-white/10 p-2 rounded">
//                               <div className="text-cyan-300">Scalability</div>
//                               <div className="text-white font-semibold">Enterprise Level</div>
//                             </div>
//                             <div className="bg-white/10 p-2 rounded">
//                               <div className="text-cyan-300">Performance</div>
//                               <div className="text-white font-semibold">High Throughput</div>
//                             </div>
//                           </>
//                         )}
//                         {product.id === 3 && (
//                           <>
//                             <div className="bg-white/10 p-2 rounded">
//                               <div className="text-cyan-300">Protection</div>
//                               <div className="text-white font-semibold">End-to-End Encryption</div>
//                             </div>
//                             <div className="bg-white/10 p-2 rounded">
//                               <div className="text-cyan-300">Compliance</div>
//                               <div className="text-white font-semibold">Industry Standards</div>
//                             </div>
//                           </>
//                         )}
//                         {product.id === 4 && (
//                           <>
//                             <div className="bg-white/10 p-2 rounded">
//                               <div className="text-cyan-300">Access Control</div>
//                               <div className="text-white font-semibold">Biometric Systems</div>
//                             </div>
//                             <div className="bg-white/10 p-2 rounded">
//                               <div className="text-cyan-300">Monitoring</div>
//                               <div className="text-white font-semibold">24/7 Surveillance</div>
//                             </div>
//                           </>
//                         )}
//                         {product.id === 5 && (
//                           <>
//                             <div className="bg-white/10 p-2 rounded">
//                               <div className="text-cyan-300">Bandwidth</div>
//                               <div className="text-white font-semibold">High Speed</div>
//                             </div>
//                             <div className="bg-white/10 p-2 rounded">
//                               <div className="text-cyan-300">Reliability</div>
//                               <div className="text-white font-semibold">99.9% Uptime</div>
//                             </div>
//                           </>
//                         )}
//                       </div>
//                     </div>

//                     {/* CTA button */}
//                     <div className={`mt-6 transition-opacity duration-300 ${
//                       isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//                     }`}>
//                        <Link to="/services">
//                       <span className={`inline-flex items-center gap-2 ${color.bg} hover:opacity-90 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors`}>
//                         Learn More
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                         </svg>
//                       </span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Accessibility */}
//                 <span className="sr-only">
//                   {isOpen ? `${product.title} (open)` : `${product.title} (closed)`}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Features Footer */}
//         {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//           <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/20">
//             <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <h3 className="font-semibold text-white mb-2">Future-Ready</h3>
//             <p className="text-white/80 text-sm">Infrastructure designed to evolve with emerging technologies</p>
//           </div>
          
//           <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/20">
//             <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//             </div>
//             <h3 className="font-semibold text-white mb-2">High Performance</h3>
//             <p className="text-white/80 text-sm">Optimized for speed, reliability, and maximum throughput</p>
//           </div>
          
//           <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/20">
//             <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//               </svg>
//             </div>
//             <h3 className="font-semibold text-white mb-2">Enterprise Security</h3>
//             <p className="text-white/80 text-sm">Multi-layered security protocols to protect your valuable data</p>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }



// import { Zap } from "lucide-react";
// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// type ProductCard = {
//   id: number;
//   title: string;
//   subtitle?: string;
//   content: string;
//   image: string;
//   category: string;
// };

// const productData: ProductCard[] = [
//   {
//     id: 1,
//     title: "Artificial Intelligence",
//     subtitle: "Smart Technology Solutions",
//     content: "AI-powered solutions that transform business operations. Implement machine learning models, natural language processing, and computer vision to automate processes and gain insights from your data.",
//     image: "https://i.pinimg.com/736x/30/f1/50/30f150b6738f5c8a7c3726ace3d095fd.jpg",
//     category: "Smart Technology"
//   },
//   {
//     id: 2,
//     title: "Data Infrastructure",
//     subtitle: "Scalable Foundation",
//     content: "Robust data infrastructure solutions designed for scalability and performance. From cloud storage to on-premise servers, we provide the foundation for your data-driven operations.",
//     image: "https://i.pinimg.com/736x/b7/88/25/b7882524b3523f23a3ca93a6774fe1cd.jpg",
//     category: "Data Infra"
//   },
//   {
//     id: 3,
//     title: "Data Security",
//     subtitle: "Protection & Compliance",
//     content: "Comprehensive security solutions to protect your valuable data. Implement encryption, access controls, and monitoring systems to safeguard against threats and ensure compliance.",
//     image: "https://i.pinimg.com/1200x/07/53/51/0753512c7e43723ea45fc614c359e6ed.jpg",
//     category: "Security"
//   },
//   {
//     id: 4,
//     title: "Data Physical Security",
//     subtitle: "Hardware Protection",
//     content: "Physical security measures to protect your data centers and hardware. From biometric access controls to surveillance systems, ensure your infrastructure is physically secured.",
//     image: "https://i.pinimg.com/736x/3a/4e/50/3a4e50446d33d1dcacbd5287bbec4542.jpg",
//     category: "Physical Security"
//   },
//   {
//     id: 5,
//     title: "Data Cabling",
//     subtitle: "High Bandwidth Connectivity",
//     content: "Professional cabling solutions for maximum data throughput. Structured cabling systems designed for reliability and future-proofing your network infrastructure.",
//     image: "https://i.pinimg.com/1200x/18/1a/99/181a993445e84789e42325760cf7200a.jpg",
//     category: "Connectivity"
//   }
// ];

// const CardContent = ({ product, isOpen, color, index }) => {
//   const [contentHeight, setContentHeight] = useState(0);
//   const [specsHeight, setSpecsHeight] = useState(0);
//   const contentRef = useRef(null);
//   const specsRef = useRef(null);

//   useEffect(() => {
//     if (contentRef.current) {
//       setContentHeight(contentRef.current.scrollHeight);
//     }
//     if (specsRef.current) {
//       setSpecsHeight(specsRef.current.scrollHeight);
//     }
//   }, [product.id]);

//   const getSpecsContent = () => {
//     switch(product.id) {
//       case 1:
//         return (
//           <>
//             <div className="bg-white/10 p-2 rounded transform transition-all duration-300 hover:scale-105">
//               <div className="text-cyan-300">Technology</div>
//               <div className="text-white font-semibold">Machine Learning</div>
//             </div>
//             <div className="bg-white/10 p-2 rounded transform transition-all duration-300 hover:scale-105">
//               <div className="text-cyan-300">Application</div>
//               <div className="text-white font-semibold">Business Intelligence</div>
//             </div>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <div className="bg-white/10 p-2 rounded transform transition-all duration-300 hover:scale-105">
//               <div className="text-cyan-300">Scalability</div>
//               <div className="text-white font-semibold">Enterprise Level</div>
//             </div>
//             <div className="bg-white/10 p-2 rounded transform transition-all duration-300 hover:scale-105">
//               <div className="text-cyan-300">Performance</div>
//               <div className="text-white font-semibold">High Throughput</div>
//             </div>
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <div className="bg-white/10 p-2 rounded transform transition-all duration-300 hover:scale-105">
//               <div className="text-cyan-300">Protection</div>
//               <div className="text-white font-semibold">End-to-End Encryption</div>
//             </div>
//             <div className="bg-white/10 p-2 rounded transform transition-all duration-300 hover:scale-105">
//               <div className="text-cyan-300">Compliance</div>
//               <div className="text-white font-semibold">Industry Standards</div>
//             </div>
//           </>
//         );
//       case 4:
//         return (
//           <>
//             <div className="bg-white/10 p-2 rounded transform transition-all duration-300 hover:scale-105">
//               <div className="text-cyan-300">Access Control</div>
//               <div className="text-white font-semibold">Biometric Systems</div>
//             </div>
//             <div className="bg-white/10 p-2 rounded transform transition-all duration-300 hover:scale-105">
//               <div className="text-cyan-300">Monitoring</div>
//               <div className="text-white font-semibold">24/7 Surveillance</div>
//             </div>
//           </>
//         );
//       case 5:
//         return (
//           <>
//             <div className="bg-white/10 p-2 rounded transform transition-all duration-300 hover:scale-105">
//               <div className="text-cyan-300">Bandwidth</div>
//               <div className="text-white font-semibold">High Speed</div>
//             </div>
//             <div className="bg-white/10 p-2 rounded transform transition-all duration-300 hover:scale-105">
//               <div className="text-cyan-300">Reliability</div>
//               <div className="text-white font-semibold">99.9% Uptime</div>
//             </div>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between text-left">
//       <div>
//         <div className={`inline-flex items-center gap-2 ${color.bg}/20 text-white px-3 py-1 rounded-full text-xs font-medium mb-4 transition-all duration-300`}>
//           <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
//           {product.category}
//         </div>
        
//         <p className="text-sm uppercase tracking-widest text-white/80 font-medium transition-all duration-300">
//           {product.subtitle}
//         </p>
//         <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white transition-all duration-300">
//           {product.title}
//         </h2>
//       </div>

//       <div className="mt-4 text-white/90">
//         <div
//           className="transition-all duration-500 ease-in-out overflow-hidden"
//           style={{
//             maxHeight: isOpen ? `${contentHeight}px` : "0",
//             opacity: isOpen ? 1 : 0,
//           }}
//         >
//           <div ref={contentRef}>
//             <p className="text-sm sm:text-base leading-relaxed">
//               {product.content}
//             </p>
//           </div>
//         </div>

//         <div
//           className="transition-all duration-500 ease-in-out delay-100 overflow-hidden"
//           style={{
//             maxHeight: isOpen ? `${specsHeight}px` : "0",
//             opacity: isOpen ? 1 : 0,
//             marginTop: isOpen ? "1.5rem" : "0",
//           }}
//         >
//           <div ref={specsRef}>
//             <div className="grid grid-cols-2 gap-4 text-xs">
//               {getSpecsContent()}
//             </div>
//           </div>
//         </div>

//         <div
//           className={`transition-all duration-500 ease-in-out delay-200 ${
//             isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
//           }`}
//           style={{ marginTop: isOpen ? "1.5rem" : "0" }}
//         >
//           <Link to="/services">
//             <span className={`inline-flex items-center gap-2 ${color.bg} hover:opacity-90 px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300 transform hover:scale-105`}>
//               Learn More
//               <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function ITInfraShowcase() {
//   const [openId, setOpenId] = useState<number | null>(1);
//   const [hoveredId, setHoveredId] = useState<number | null>(null);

//   const cardColors = [
//     { bg: 'bg-pink-500', light: 'bg-pink-100', text: 'text-pink-300' },
//     { bg: 'bg-magenta-500', light: 'bg-magenta-100', text: 'text-magenta-300' },
//     { bg: 'bg-orange-500', light: 'bg-orange-100', text: 'text-orange-300' },
//     { bg: 'bg-yellow-500', light: 'bg-yellow-100', text: 'text-yellow-300' },
//     { bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-300' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 flex items-center justify-center p-6">
//       <div className="w-full max-w-7xl">
        
//         {/* Header Section */}
//         <div className="text-center mb-12 animate-fadeIn">
//           <div className="inline-flex items-center gap-2 bg-primary/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm animate-slideDown">
//             <Zap size={16} className="animate-pulse" />
//             <span>Building Tomorrow's IT Infrastructure</span>
//           </div>
//           <h1 className="text-4xl sm:text-5xl font-black mb-4 text-center animate-slideUp">
//             <span className="bg-gradient-to-r from-pink-700 via-orange-500 to-blue-700 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
//               BUSINESS IT INFRA STRATEGY
//             </span>
//           </h1>
//           <p className="text-xl text-white max-w-3xl mx-auto animate-fadeInUp">
//             A.I. is a Smart Technology that requires scalable Data Infrastructure and Security of Data with High Bandwidth & connectivity of Data Cabling.
//           </p>
//         </div>

//         {/* Product Cards Container */}
//         <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 overflow-visible">
//           {productData.map((product, index) => {
//             const isOpen = openId === product.id;
//             const isHovered = hoveredId === product.id;
//             const color = cardColors[index];

//             return (
//               <button
//                 key={product.id}
//                 onClick={() => setOpenId(isOpen ? null : product.id)}
//                 onMouseEnter={() => setHoveredId(product.id)}
//                 onMouseLeave={() => setHoveredId(null)}
//                 className={`relative group block flex-1 min-h-[500px] rounded-2xl shadow-xl overflow-hidden transition-all duration-700 ease-out transform cursor-pointer
//                   ${isOpen ? "lg:flex-[3.2]" : "lg:flex-[1]"} 
//                   ${isHovered && !isOpen ? "lg:flex-[1.2]" : ""}
//                   bg-white border border-white/20 backdrop-blur-sm`}
//                 aria-expanded={isOpen}
//                 style={{
//                   transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
//                 }}
//               >
//                 {/* Background image with smooth zoom effect */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out will-change-transform"
//                   style={{ 
//                     backgroundImage: `url(${product.image})`,
//                     transform: isOpen ? 'scale(1.05)' : isHovered ? 'scale(1.08)' : 'scale(1)',
//                     filter: isOpen ? "brightness(1.1)" : "brightness(0.6)"
//                   }}
//                 />

//                 {/* Animated gradient overlay */}
//                 <div 
//                   className="absolute inset-0 transition-all duration-700 ease-out"
//                   style={{
//                     background: `linear-gradient(to top, 
//                       rgba(0,0,0,0.9) 0%, 
//                       rgba(0,0,0,0.6) 30%,
//                       ${isOpen ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.5)'} 100%)`
//                   }}
//                 />

//                 <CardContent 
//                   product={product} 
//                   isOpen={isOpen} 
//                   color={color}
//                   index={index}
//                 />

//                 <span className="sr-only">
//                   {isOpen ? `${product.title} (open)` : `${product.title} (closed)`}
//                 </span>
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       <style >{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
        
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.6s ease-out;
//         }
        
//         .animate-slideDown {
//           animation: slideDown 0.5s ease-out;
//         }
        
//         .animate-slideUp {
//           animation: slideUp 0.5s ease-out;
//         }
        
//         .animate-fadeInUp {
//           animation: fadeInUp 0.7s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }





import { Zap } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import aiImage from '../assets/Homeimages/AIimage.jpg';
import dataInfraImage from '../assets/Homeimages/DataInfraimage.jpeg';
import dataSecurityImage from '../assets/Homeimages/DataSecurityimg.jpg';
import physicalSecurityImage from '../assets/Homeimages/DataPhysicalSecurityimage.jpg';
import dataCablingImage from '../assets/Homeimages/datacabling.jpg';


type ProductCard = {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  image: string;
  category: string;
};

const productData: ProductCard[] = [
  {
    id: 1,
    title: "Artificial Intelligence",
    subtitle: "Smart Technology Solutions",
    content: "AI-powered solutions that transform business operations. Implement machine learning models, natural language processing, and computer vision to automate processes and gain insights from your data.",
    image: aiImage,
    category: "Smart Technology"
  },
  {
    id: 2,
    title: "Data Infrastructure",
    subtitle: "Scalable Foundation",
    content: "Robust data infrastructure solutions designed for scalability and performance. From cloud storage to on-premise servers, we provide the foundation for your data-driven operations.",
    image: dataInfraImage,
    category: "Data Infra"
  },
  {
    id: 3,
    title: "Data Security",
    subtitle: "Protection & Compliance",
    content: "Comprehensive security solutions to protect your valuable data. Implement encryption, access controls, and monitoring systems to safeguard against threats and ensure compliance.",
    image: dataSecurityImage,
    category: "Security"
  },
  {
    id: 4,
    title: "Data Physical Security",
    subtitle: "Hardware Protection",
    content: "Physical security measures to protect from campus entry to data center through biometric access controls to surveillance system, ensuring your infrastructure is physically secured.",
    image: physicalSecurityImage ,
    category: "Physical Security"
  },
  {
    id: 5,
    title: "Data Cabling",
    subtitle: "High Bandwidth Connectivity",
    content: "Professional cabling solutions for maximum data throughput. Structured cabling systems designed for reliability and future-proofing your network infrastructure.",
    image: dataCablingImage,
    category: "Connectivity"
  }
];

const CardContent = ({ product, isOpen, color, index }) => {
  const [contentHeight, setContentHeight] = useState(0);
  const [specsHeight, setSpecsHeight] = useState(0);
  const contentRef = useRef(null);
  const specsRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
    if (specsRef.current) {
      setSpecsHeight(specsRef.current.scrollHeight);
    }
  }, [product.id]);

  const getSpecsContent = () => {
    switch(product.id) {
      case 1:
        return (
          <>
            <div className="bg-black/30 backdrop-blur-sm p-2 rounded transform transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="text-cyan-200 font-semibold text-xs">Technology</div>
              <div className="text-white font-bold text-sm">Machine Learning</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-2 rounded transform transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="text-cyan-200 font-semibold text-xs">Application</div>
              <div className="text-white font-bold text-sm">Business Intelligence</div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="bg-black/30 backdrop-blur-sm p-2 rounded transform transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="text-cyan-200 font-semibold text-xs">Scalability</div>
              <div className="text-white font-bold text-sm">Enterprise Level</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-2 rounded transform transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="text-cyan-200 font-semibold text-xs">Performance</div>
              <div className="text-white font-bold text-sm">High Throughput</div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="bg-black/30 backdrop-blur-sm p-2 rounded transform transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="text-cyan-200 font-semibold text-xs">Protection</div>
              <div className="text-white font-bold text-sm">End-to-End Encryption</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-2 rounded transform transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="text-cyan-200 font-semibold text-xs">Compliance</div>
              <div className="text-white font-bold text-sm">Industry Standards</div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="bg-black/30 backdrop-blur-sm p-2 rounded transform transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="text-cyan-200 font-semibold text-xs">Access Control</div>
              <div className="text-white font-bold text-sm">Biometric Systems</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-2 rounded transform transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="text-cyan-200 font-semibold text-xs">Monitoring</div>
              <div className="text-white font-bold text-sm">24/7 Surveillance</div>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="bg-black/30 backdrop-blur-sm p-2 rounded transform transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="text-cyan-200 font-semibold text-xs">Bandwidth</div>
              <div className="text-white font-bold text-sm">High Speed</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-2 rounded transform transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="text-cyan-200 font-semibold text-xs">Reliability</div>
              <div className="text-white font-bold text-sm">99.9% Uptime</div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between text-left">
      <div>
        <div className={`inline-flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium mb-4 transition-all duration-300 border border-white/30`}>
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-white font-semibold">{product.category}</span>
        </div>
        
        <p className="text-sm uppercase tracking-widest text-yellow-200 font-semibold transition-all duration-300 drop-shadow-lg">
          {product.subtitle}
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white drop-shadow-lg transition-all duration-300">
          {product.title}
        </h2>
      </div>

      <div className="mt-4">
        <div
          className="transition-all duration-500 ease-in-out overflow-hidden"
          style={{
            maxHeight: isOpen ? `${contentHeight}px` : "0",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div ref={contentRef}>
            <p className="text-sm sm:text-base leading-relaxed text-gray-100 drop-shadow-md bg-black/20 backdrop-blur-sm p-3 rounded-lg">
              {product.content}
            </p>
          </div>
        </div>

        <div
          className="transition-all duration-500 ease-in-out delay-100 overflow-hidden"
          style={{
            maxHeight: isOpen ? `${specsHeight}px` : "0",
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? "1.5rem" : "0",
          }}
        >
          <div ref={specsRef}>
            <div className="grid grid-cols-2 gap-4 text-xs">
              {getSpecsContent()}
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out delay-200 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          style={{ marginTop: isOpen ? "1.5rem" : "0" }}
        >
          <Link to="/services">
            <span className={`inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-5 py-2.5 rounded-lg text-white text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg`}>
              Learn More
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function ITInfraShowcase() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const cardColors = [
    { bg: 'bg-pink-500', light: 'bg-pink-100', text: 'text-pink-300' },
    { bg: 'bg-magenta-500', light: 'bg-magenta-100', text: 'text-magenta-300' },
    { bg: 'bg-orange-500', light: 'bg-orange-100', text: 'text-orange-300' },
    { bg: 'bg-yellow-500', light: 'bg-yellow-100', text: 'text-yellow-300' },
    { bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-300' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 flex items-center justify-center p-6">
      <div className="w-full max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slideDown border border-white/30">
            <Zap size={16} className="animate-pulse" />
            <span>Building Tomorrow's IT Infrastructure</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 text-center animate-slideUp">
            <span className="bg-gradient-to-r from-pink-700 via-orange-500 to-blue-700 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              BUSINESS IT INFRA STRATEGY
            </span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto animate-fadeInUp drop-shadow-lg font-medium">
            A.I. is a Smart Technology that requires scalable Data Infrastructure and Security of Data with High Bandwidth & connectivity of Data Cabling.
          </p>
        </div>

        {/* Product Cards Container */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 overflow-visible">
          {productData.map((product, index) => {
            const isOpen = openId === product.id;
            const isHovered = hoveredId === product.id;
            const color = cardColors[index];

            return (
              <button
                key={product.id}
                onClick={() => setOpenId(isOpen ? null : product.id)}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative group block flex-1 min-h-[500px] rounded-2xl shadow-xl overflow-hidden transition-all duration-700 ease-out transform cursor-pointer text-left
                  ${isOpen ? "lg:flex-[3.2]" : "lg:flex-[1]"} 
                  ${isHovered && !isOpen ? "lg:flex-[1.2]" : ""}
                  bg-white border border-white/20 backdrop-blur-sm`}
                aria-expanded={isOpen}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Background image with smooth zoom effect */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out will-change-transform"
                  style={{ 
                    backgroundImage: `url(${product.image})`,
                    transform: isOpen ? 'scale(1.05)' : isHovered ? 'scale(1.08)' : 'scale(1)',
                    filter: isOpen ? "brightness(1.1)" : "brightness(0.6)"
                  }}
                />

                {/* Animated gradient overlay */}
                <div 
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    background: `linear-gradient(to top, 
                      rgba(0,0,0,0.95) 0%, 
                      rgba(0,0,0,0.7) 30%,
                      ${isOpen ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.6)'} 100%)`
                  }}
                />

                <CardContent 
                  product={product} 
                  isOpen={isOpen} 
                  color={color}
                  index={index}
                />

                <span className="sr-only">
                  {isOpen ? `${product.title} (open)` : `${product.title} (closed)`}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <style >{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out;
        }
      `}</style>
    </div>
  );
}