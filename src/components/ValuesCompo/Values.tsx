// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import {
//   Heart,
//   Shield,
//   Lightbulb,
//   Users,
//   BookOpen,
//   Eye,
//   Handshake,
//   Rocket,
//   Target,
// } from "lucide-react";

// const bgMap: any = {
//   blue: "bg-blue-500/10",
//   magenta: "bg-pink-500/10",
//   green: "bg-green-500/10",
// };

// const borderMap: any = {
//   blue: "border-blue-500/30",
//   magenta: "border-pink-500/30",
//   green: "border-green-500/30",
// };

// const textMap: any = {
//   blue: "text-blue-600",
//   magenta: "text-pink-600",
//   green: "text-green-600",
// };

// const values = [
//   {
//     icon: Heart,
//     title: "Customer Centricity",
//     desc: "Placing customer needs at the heart of every decision.",
//     longDesc:
//       "We listen deeply, understand thoroughly, and act decisively to ensure every solution creates measurable business value.",
//     color: "blue" as const,
//   },
//   {
//     icon: Shield,
//     title: "Peace of Mind",
//     desc: "Reliability and trust in every engagement.",
//     longDesc:
//       "Through rigorous quality standards and proactive support, we create complete operational confidence.",
//     color: "blue" as const,
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovative & Simplified",
//     desc: "Turning complexity into clarity.",
//     longDesc:
//       "The best technology is invisible — powerful enough to scale, yet simple enough to manage.",
//     color: "magenta" as const,
//   },
//   {
//     icon: Users,
//     title: "Growth for Talents",
//     desc: "Investing in people, not just projects.",
//     longDesc:
//       "We cultivate leadership, certifications, and mastery that directly translate into client excellence.",
//     color: "magenta" as const,
//   },
//   {
//     icon: BookOpen,
//     title: "Continuous Learning",
//     desc: "Staying ahead of the curve.",
//     longDesc:
//       "Our culture of learning ensures that we remain adaptive, innovative, and future-ready.",
//     color: "magenta" as const,
//   },
//   {
//     icon: Eye,
//     title: "Accountability",
//     desc: "Ownership at every level.",
//     longDesc:
//       "We operate with transparent communication, clear milestones, and measurable KPIs.",
//     color: "green" as const,
//   },
//   {
//     icon: Handshake,
//     title: "Commitment",
//     desc: "We deliver what we promise.",
//     longDesc:
//       "Our reputation is built on consistency, precision, and exceeding expectations.",
//     color: "green" as const,
//   },
//   {
//     icon: Rocket,
//     title: "Future Ready",
//     desc: "Solutions built for tomorrow.",
//     longDesc:
//       "We design infrastructure that scales, adapts, and evolves with emerging technologies.",
//     color: "green" as const,
//   },
//   {
//     icon: Target,
//     title: "Result Oriented",
//     desc: "Impact over activity.",
//     longDesc:
//       "We measure success by tangible outcomes, not just completed deliverables.",
//     color: "blue" as const,
//   },
// ];

// const Valuess = () => {
//   return (
//     <section className="py-28">
//       <div className="container mx-auto px-4 lg:px-8">
        
//         <div className="text-center max-w-2xl mx-auto mb-20">
//           <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
//             The Standards That Shape Every Decision
//           </h2>

//           <p className="text-lg text-muted-foreground">
//             These are not slogans. They are operational principles embedded into
//             our workflows, leadership, and delivery model.
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {values.map((v, i) => (
//             <SectionWrapper key={v.title} delay={i * 60}>
//               <div
//                 className={`group relative p-8 rounded-3xl glass-premium 
//                 hover:-translate-y-2 transition-all duration-500 
//                 hover:shadow-2xl h-full border ${borderMap[v.color]}`}
//               >
                
//                 <div
//                   className={`absolute top-0 left-0 h-1 w-full ${bgMap[v.color]} rounded-t-3xl`}
//                 />

//                 <div
//                   className={`w-14 h-14 rounded-xl ${bgMap[v.color]} flex items-center justify-center mb-6`}
//                 >
//                   <v.icon size={24} className={textMap[v.color]} />
//                 </div>

//                 <h3 className="text-xl font-extrabold text-foreground mb-3">
//                   {v.title}
//                 </h3>

//                 <p className="text-sm text-muted-foreground mb-3">
//                   {v.desc}
//                 </p>

//                 <p className="text-xs text-muted-foreground/70 leading-relaxed">
//                   {v.longDesc}
//                 </p>

//                 <div
//                   className={`mt-6 text-sm font-semibold ${textMap[v.color]} opacity-0 group-hover:opacity-100 transition-all duration-300`}
//                 >
//                   Our Commitment →
//                 </div>

//               </div>
//             </SectionWrapper>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Valuess;




// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import {
//   Heart,
//   Shield,
//   Lightbulb,
//   Users,
//   BookOpen,
//   Eye,
//   Handshake,
//   Rocket,
//   Target,
//   Sparkles,
//   ArrowRight,
// } from "lucide-react";

// const bgMap: any = {
//   blue: {
//     light: "bg-blue-50",
//     medium: "bg-blue-100",
//     gradient: "from-blue-600 to-blue-700",
//     card: "bg-white",
//     iconBg: "bg-blue-600",
//     iconLight: "bg-blue-100",
//     border: "border-blue-200",
//     text: "text-blue-700",
//     hover: "group-hover:border-blue-300 group-hover:shadow-blue-200",
//   },
//   magenta: {
//     light: "bg-pink-50",
//     medium: "bg-pink-100",
//     gradient: "from-pink-600 to-rose-600",
//     card: "bg-white",
//     iconBg: "bg-pink-600",
//     iconLight: "bg-pink-100",
//     border: "border-pink-200",
//     text: "text-pink-700",
//     hover: "group-hover:border-pink-300 group-hover:shadow-pink-200",
//   },
//   green: {
//     light: "bg-green-50",
//     medium: "bg-green-100",
//     gradient: "from-green-600 to-emerald-600",
//     card: "bg-white",
//     iconBg: "bg-green-600",
//     iconLight: "bg-green-100",
//     border: "border-green-200",
//     text: "text-green-700",
//     hover: "group-hover:border-green-300 group-hover:shadow-green-200",
//   },
// };

// const values = [
//   {
//     icon: Heart,
//     title: "Customer Centricity",
//     desc: "Placing customer needs at the heart of every decision.",
//     longDesc:
//       "We listen deeply, understand thoroughly, and act decisively to ensure every solution creates measurable business value.",
//     color: "blue" as const,
//     metric: "98% Satisfaction",
//   },
//   {
//     icon: Shield,
//     title: "Peace of Mind",
//     desc: "Reliability and trust in every engagement.",
//     longDesc:
//       "Through rigorous quality standards and proactive support, we create complete operational confidence.",
//     color: "blue" as const,
//     metric: "24/7 Support",
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovative & Simplified",
//     desc: "Turning complexity into clarity.",
//     longDesc:
//       "The best technology is invisible — powerful enough to scale, yet simple enough to manage.",
//     color: "magenta" as const,
//     metric: "50+ Patents",
//   },
//   {
//     icon: Users,
//     title: "Growth for Talents",
//     desc: "Investing in people, not just projects.",
//     longDesc:
//       "We cultivate leadership, certifications, and mastery that directly translate into client excellence.",
//     color: "magenta" as const,
//     metric: "500+ Experts",
//   },
//   {
//     icon: BookOpen,
//     title: "Continuous Learning",
//     desc: "Staying ahead of the curve.",
//     longDesc:
//       "Our culture of learning ensures that we remain adaptive, innovative, and future-ready.",
//     color: "magenta" as const,
//     metric: "1000+ Hours/Year",
//   },
//   {
//     icon: Eye,
//     title: "Accountability",
//     desc: "Ownership at every level.",
//     longDesc:
//       "We operate with transparent communication, clear milestones, and measurable KPIs.",
//     color: "green" as const,
//     metric: "100% Transparency",
//   },
//   {
//     icon: Handshake,
//     title: "Commitment",
//     desc: "We deliver what we promise.",
//     longDesc:
//       "Our reputation is built on consistency, precision, and exceeding expectations.",
//     color: "green" as const,
//     metric: "15+ Years Trust",
//   },
//   {
//     icon: Rocket,
//     title: "Future Ready",
//     desc: "Solutions built for tomorrow.",
//     longDesc:
//       "We design infrastructure that scales, adapts, and evolves with emerging technologies.",
//     color: "green" as const,
//     metric: "2030 Ready",
//   },
//   {
//     icon: Target,
//     title: "Result Oriented",
//     desc: "Impact over activity.",
//     longDesc:
//       "We measure success by tangible outcomes, not just completed deliverables.",
//     color: "blue" as const,
//     metric: "ROI Focused",
//   },
// ];

// const Valuess = () => {
//   return (
//     <section className="py-28 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
//       {/* Simple background pattern */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
//       </div>

//       <div className="container mx-auto px-4 lg:px-8 relative z-10">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/5 text-gray-900 mb-6">
//             <Sparkles size={16} className="text-gray-700" />
//             <span className="text-sm font-semibold">Core Values</span>
//           </div>
          
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
//             The Standards That Shape
//             <span className="text-gray-600 block mt-2">Every Decision</span>
//           </h2>

//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             These are not slogans. They are operational principles embedded into
//             our workflows, leadership, and delivery model.
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {values.map((v, i) => {
//             const colors = bgMap[v.color];
            
//             return (
//               <SectionWrapper key={v.title} delay={i * 60}>
//                 <div
//                   className={`group relative p-8 rounded-2xl ${colors.card} border-2 ${colors.border}
//                   hover:border-2 ${colors.hover} transition-all duration-300 
//                   hover:-translate-y-1 h-full flex flex-col
//                   shadow-sm hover:shadow-xl`}
//                 >
//                   {/* Icon Section - Fixed visibility */}
//                   <div className="flex items-start justify-between mb-6">
//                     <div className={`p-3 ${colors.iconBg} rounded-xl shadow-md`}>
//                       <v.icon size={24} className="text-white" />
//                     </div>
                    
//                     {/* Metric Badge */}
//                     <div className={`px-3 py-1 ${colors.light} rounded-full`}>
//                       <span className={`text-xs font-bold ${colors.text}`}>
//                         {v.metric}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">
//                       {v.title}
//                     </h3>

//                     <p className="text-sm font-medium text-gray-700 mb-3">
//                       {v.desc}
//                     </p>

//                     <p className="text-sm text-gray-500 leading-relaxed">
//                       {v.longDesc}
//                     </p>
//                   </div>

//                   {/* Footer - Always visible */}
//                   <div className="mt-6 pt-4 border-t border-gray-100">
//                     <div className={`flex items-center gap-2 text-sm font-semibold ${colors.text}`}>
//                       Learn more
//                       <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//                     </div>
//                   </div>

//                   {/* Simple corner accent */}
//                   <div className={`absolute top-0 right-0 w-16 h-16 ${colors.light} rounded-bl-2xl -z-0 opacity-50`} />
//                 </div>
//               </SectionWrapper>
//             );
//           })}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//           <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
//             Explore Our Culture
//             <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Valuess;




// import React from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import {
//   Heart,
//   Shield,
//   Lightbulb,
//   Users,
//   BookOpen,
//   Eye,
//   Handshake,
//   Rocket,
//   Target,
//   Sparkles,
//   ArrowRight,
// } from "lucide-react";

// /* IMPORT IMAGES */
// import img1 from "@/assets/team-collaboration.jpg";
// import img2 from "@/assets/team-collaboration.jpg";
// import img3 from "@/assets/team-collaboration.jpg";

// const bgMap: any = {
//   blue: {
//     light: "bg-blue-50",
//     border: "border-blue-200",
//     text: "text-blue-700",
//   },
//   magenta: {
//     light: "bg-pink-50",
//     border: "border-pink-200",
//     text: "text-pink-700",
//   },
//   green: {
//     light: "bg-green-50",
//     border: "border-green-200",
//     text: "text-green-700",
//   },
// };

// const values = [
//   {
//     icon: Heart,
//     title: "Customer Centricity",
//     desc: "Placing customer needs at the heart of every decision.",
//     longDesc:
//       "We listen deeply, understand thoroughly, and act decisively to ensure every solution creates measurable business value.",
//     color: "blue" as const,
//     metric: "98% Satisfaction",
//     image: img1,
//   },
//   {
//     icon: Shield,
//     title: "Peace of Mind",
//     desc: "Reliability and trust in every engagement.",
//     longDesc:
//       "Through rigorous quality standards and proactive support, we create complete operational confidence.",
//     color: "blue" as const,
//     metric: "24/7 Support",
//     image: img2,
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovative & Simplified",
//     desc: "Turning complexity into clarity.",
//     longDesc:
//       "The best technology is invisible — powerful enough to scale, yet simple enough to manage.",
//     color: "magenta" as const,
//     metric: "50+ Patents",
//     image: img3,
//   },
//   {
//     icon: Users,
//     title: "Growth for Talents",
//     desc: "Investing in people, not just projects.",
//     longDesc:
//       "We cultivate leadership, certifications, and mastery that directly translate into client excellence.",
//     color: "magenta" as const,
//     metric: "500+ Experts",
//     image: img1,
//   },
//   {
//     icon: BookOpen,
//     title: "Continuous Learning",
//     desc: "Staying ahead of the curve.",
//     longDesc:
//       "Our culture of learning ensures that we remain adaptive, innovative, and future-ready.",
//     color: "magenta" as const,
//     metric: "1000+ Hours/Year",
//     image: img2,
//   },
//   {
//     icon: Eye,
//     title: "Accountability",
//     desc: "Ownership at every level.",
//     longDesc:
//       "We operate with transparent communication, clear milestones, and measurable KPIs.",
//     color: "green" as const,
//     metric: "100% Transparency",
//     image: img3,
//   },
//   {
//     icon: Handshake,
//     title: "Commitment",
//     desc: "We deliver what we promise.",
//     longDesc:
//       "Our reputation is built on consistency, precision, and exceeding expectations.",
//     color: "green" as const,
//     metric: "15+ Years Trust",
//     image: img1,
//   },
//   {
//     icon: Rocket,
//     title: "Future Ready",
//     desc: "Solutions built for tomorrow.",
//     longDesc:
//       "We design infrastructure that scales, adapts, and evolves with emerging technologies.",
//     color: "green" as const,
//     metric: "2030 Ready",
//     image: img2,
//   },
//   {
//     icon: Target,
//     title: "Result Oriented",
//     desc: "Impact over activity.",
//     longDesc:
//       "We measure success by tangible outcomes, not just completed deliverables.",
//     color: "blue" as const,
//     metric: "ROI Focused",
//     image: img3,
//   },
// ];

// const Valuess = () => {
//   return (
//     <section className="py-28 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
//       <div className="container mx-auto px-4 lg:px-8">

//         {/* HEADER */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/5 text-gray-900 mb-6">
//             <Sparkles size={16} />
//             <span className="text-sm font-semibold">Core Values</span>
//           </div>

//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
//             The Standards That Shape
//             <span className="text-gray-600 block mt-2">
//               Every Decision
//             </span>
//           </h2>

//           <p className="text-lg text-gray-600">
//             These are not slogans. They are operational principles embedded
//             into our workflows, leadership, and delivery model.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

//           {values.map((v, i) => {
//             const colors = bgMap[v.color];

//             return (
//               <SectionWrapper key={i} delay={i * 60}>

//                 <div className={`group relative p-8 rounded-2xl bg-white border-2 ${colors.border}
//                 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl overflow-hidden`}>

//                   {/* BACKGROUND IMAGE */}
//                   <div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
//                     style={{
//                       backgroundImage: `url(${v.image})`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                     }}
//                   />

//                   {/* DARK OVERLAY */}
//                   <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500" />

//                   {/* CONTENT */}
//                   <div className="relative z-10 flex flex-col h-full">

//                     {/* ICON + METRIC */}
//                     <div className="flex items-start justify-between mb-6">

//                       <div className="p-3 bg-gray-900 rounded-xl shadow-md">
//                         <v.icon size={24} className="text-white" />
//                       </div>

//                       <div className={`px-3 py-1 ${colors.light} rounded-full`}>
//                         <span className={`text-xs font-bold ${colors.text}`}>
//                           {v.metric}
//                         </span>
//                       </div>

//                     </div>

//                     {/* TEXT */}
//                     <div className="flex-1">

//                       <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3">
//                         {v.title}
//                       </h3>

//                       <p className="text-sm font-medium text-gray-700 group-hover:text-gray-200 mb-3">
//                         {v.desc}
//                       </p>

//                       <p className="text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed">
//                         {v.longDesc}
//                       </p>

//                     </div>

//                     {/* FOOTER */}
//                     <div className="mt-6 pt-4 border-t border-gray-200 group-hover:border-white/30">

//                       <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-white">

//                         Learn more

//                         <ArrowRight
//                           size={16}
//                           className="group-hover:translate-x-1 transition-transform"
//                         />

//                       </div>

//                     </div>

//                   </div>

//                 </div>

//               </SectionWrapper>
//             );
//           })}

//         </div>

//         {/* CTA */}
//         <div className="text-center mt-16">
//           <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">

//             Explore Our Culture

//             <ArrowRight
//               size={20}
//               className="group-hover:translate-x-1 transition-transform"
//             />

//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Valuess;



import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import {
  Heart,
  Shield,
  Lightbulb,
  Users,
  BookOpen,
  Eye,
  Handshake,
  Rocket,
  Target,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const bgMap: any = {
  blue: {
    light: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
  },
  magenta: {
    light: "bg-pink-50",
    border: "border-pink-200",
    text: "text-pink-700",
  },
  green: {
    light: "bg-green-50",
    border: "border-green-200",
    text: "text-green-700",
  },
};

const values = [
  {
    icon: Heart,
    title: "Customer Centricity",
    desc: "Placing customer needs at the heart of every decision.",
    longDesc:
      "We listen deeply, understand thoroughly, and act decisively to ensure every solution creates measurable business value.",
    color: "blue" as const,
    metric: "98% Satisfaction",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
  },
  {
    icon: Shield,
    title: "Peace of Mind",
    desc: "Reliability and trust in every engagement.",
    longDesc:
      "Through rigorous quality standards and proactive support, we create complete operational confidence.",
    color: "blue" as const,
    metric: "24/7 Support",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
  },
  {
    icon: Lightbulb,
    title: "Innovative & Simplified",
    desc: "Turning complexity into clarity.",
    longDesc:
      "The best technology is invisible — powerful enough to scale, yet simple enough to manage.",
    color: "magenta" as const,
    metric: "50+ Patents",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
  },
  {
    icon: Users,
    title: "Growth for Talents",
    desc: "Investing in people, not just projects.",
    longDesc:
      "We cultivate leadership, certifications, and mastery that directly translate into client excellence.",
    color: "magenta" as const,
    metric: "500+ Experts",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "Staying ahead of the curve.",
    longDesc:
      "Our culture of learning ensures that we remain adaptive, innovative, and future-ready.",
    color: "magenta" as const,
    metric: "1000+ Hours/Year",
    image:
      "https://i.pinimg.com/1200x/78/bf/85/78bf8595a192b256854073f2ec9d279a.jpg",
  },
  {
    icon: Eye,
    title: "Accountability",
    desc: "Ownership at every level.",
    longDesc:
      "We operate with transparent communication, clear milestones, and measurable KPIs.",
    color: "green" as const,
    metric: "100% Transparency",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  },
  {
    icon: Handshake,
    title: "Commitment",
    desc: "We deliver what we promise.",
    longDesc:
      "Our reputation is built on consistency, precision, and exceeding expectations.",
    color: "green" as const,
    metric: "15+ Years Trust",
    image:
      "https://i.pinimg.com/1200x/11/85/e7/1185e7c923906e285da30e7967f7351e.jpg",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    desc: "Solutions built for tomorrow.",
    longDesc:
      "We design infrastructure that scales, adapts, and evolves with emerging technologies.",
    color: "green" as const,
    metric: "2030 Ready",
    image:
      "https://i.pinimg.com/1200x/a4/f9/a3/a4f9a3ca5de6596a657ac43d8c8fae3d.jpg",
  },
  {
    icon: Target,
    title: "Result Oriented",
    desc: "Impact over activity.",
    longDesc:
      "We measure success by tangible outcomes, not just completed deliverables.",
    color: "blue" as const,
    metric: "ROI Focused",
    image:
      "https://i.pinimg.com/736x/b1/3a/ae/b13aaeccafa6ed0ab9d67738a30d610e.jpg",
  },
];

const Valuess = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
  bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 
  text-white mb-6 shadow-lg hover:scale-105 transition">
  
  <Sparkles size={16} />
  <span className="text-sm font-semibold">Core Values</span>
        </div>

    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
  <span className="bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 
  bg-clip-text text-transparent">
    The Standards That Shape
  </span>

  <span className="block mt-2 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 
  bg-clip-text text-transparent">
    Every Decision
  </span>
  </h2>

          <p className="text-lg text-gray-600">
            These are not slogans. They are operational principles embedded
            into our workflows, leadership, and delivery model.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

          {values.map((v, i) => {
            const colors = bgMap[v.color];

            return (
              <SectionWrapper key={i} delay={i * 60}>

                <div className="h-full">

                  <div className={`group relative p-8 rounded-2xl bg-white border-2 ${colors.border}
                  transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl overflow-hidden
                  h-full flex flex-col`}>

                    {/* BACKGROUND IMAGE */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                      style={{
                        backgroundImage: `url(${v.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-col h-full">

                      {/* ICON + METRIC */}
                      <div className="flex items-start justify-between mb-6">

                        <div className="p-3 bg-gray-900 rounded-xl shadow-md">
                          <v.icon size={24} className="text-white" />
                        </div>

                        <div className={`px-3 py-1 ${colors.light} rounded-full`}>
                          <span className={`text-xs font-bold ${colors.text}`}>
                            {v.metric}
                          </span>
                        </div>

                      </div>

                      {/* TEXT */}
                      <div className="flex-1">

                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3">
                          {v.title}
                        </h3>

                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-200 mb-3">
                          {v.desc}
                        </p>

                        <p className="text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed">
                          {v.longDesc}
                        </p>

                      </div>

                      {/* FOOTER */}
                      <div className="mt-6 pt-4 border-t border-gray-200 group-hover:border-white/30">

                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-white">

                          Learn more

                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                          />

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </SectionWrapper>
            );
          })}

        </div>

        {/* CTA */}
      <div className="text-center mt-16">
  <button
    className="group hidden sm:inline-flex items-center gap-3 px-8 py-4 
    bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 
    text-white border-0 rounded-xl font-semibold 
    shadow-lg hover:scale-105 transition-all duration-300"
  >
    Explore Our Culture

    <ArrowRight
      size={20}
      className="group-hover:translate-x-1 transition-transform"
    />
  </button>
</div>

      </div>
    </section>
  );
};

export default Valuess;