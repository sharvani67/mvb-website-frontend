// import { Star, Globe, Lock, Rocket, Clock, Award } from 'lucide-react';
// import SectionWrapper from '@/components/SectionWrapper';

// const whyChooseUs = [
//   { icon: Star, title: 'Premium Quality', desc: 'Enterprise-grade products and solutions — nothing less.', color: 'blue' as const },
//   { icon: Globe, title: 'Global Standards', desc: 'International compliance and security standards met.', color: 'magenta' as const },
//   { icon: Lock, title: 'End-to-End Security', desc: 'Security built into every infrastructure layer.', color: 'green' as const },
//   { icon: Rocket, title: 'Future-Proof', desc: 'Solutions that scale and adapt to evolving needs.', color: 'blue' as const },
//   { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock dedicated enterprise support.', color: 'magenta' as const },
//   { icon: Award, title: 'Certified Experts', desc: 'Leading industry certifications and credentials.', color: 'green' as const },
// ];

// const iconBgMap = { blue: 'bg-mv-blue/10', magenta: 'bg-mv-magenta/10', green: 'bg-mv-green/10' };
// const iconTextMap = { blue: 'text-mv-blue', magenta: 'text-mv-magenta', green: 'text-mv-green' };
// const borderColorMap = { blue: 'border-mv-blue/20', magenta: 'border-mv-magenta/20', green: 'border-mv-green/20' };

// export default function WhyChooseUsSection() {
//   return (
//     <section className="py-32 bg-muted/30 relative overflow-hidden">
//       <div className="absolute left-1/2 top-0 w-[600px] h-[600px] rounded-full bg-mv-blue/5 blur-[100px] -translate-x-1/2" />
//       <div className="container mx-auto px-4 lg:px-8">
//         <SectionWrapper>
//           <div className="text-center mb-20">
//             <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-4 block">Why MV Branding</span>
//             <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Why Choose Us</h2>
//             <p className="text-muted-foreground max-w-xl mx-auto">We go beyond standard IT services to deliver infrastructure that transforms businesses</p>
//           </div>
//         </SectionWrapper>
        
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {whyChooseUs.map((item, i) => (
//             <SectionWrapper key={item.title} delay={i * 80}>
//               <div className={`p-8 rounded-2xl glass-premium premium-card h-full border-t-2 ${borderColorMap[item.color]}`}>
//                 <div className={`w-12 h-12 rounded-xl ${iconBgMap[item.color]} flex items-center justify-center mb-5`}>
//                   <item.icon size={22} className={iconTextMap[item.color]} />
//                 </div>
//                 <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
//               </div>
//             </SectionWrapper>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// import { Star, Globe, Lock, Rocket, Clock, Award } from "lucide-react"
// import SectionWrapper from "@/components/SectionWrapper"

// const whyChooseUs = [
//   { icon: Star, title: "Premium Quality", desc: "Enterprise-grade products and solutions — nothing less.", gradient: "from-blue-500 via-purple-500 to-emerald-500" },
//   { icon: Globe, title: "Global Standards", desc: "International compliance and security standards met.", gradient: "from-purple-500 via-pink-500 to-blue-500" },
//   { icon: Lock, title: "End-to-End Security", desc: "Security built into every infrastructure layer.", gradient: "from-emerald-500 via-blue-500 to-purple-500" },
//   { icon: Rocket, title: "Future-Proof", desc: "Solutions that scale and adapt to evolving needs.", gradient: "from-blue-600 via-indigo-500 to-purple-600" },
//   { icon: Clock, title: "24/7 Support", desc: "Round-the-clock dedicated enterprise support.", gradient: "from-pink-500 via-purple-500 to-indigo-500" },
//   { icon: Award, title: "Certified Experts", desc: "Leading industry certifications and credentials.", gradient: "from-emerald-500 via-teal-500 to-blue-500" },
// ]

// export default function WhyChooseUsSection() {
//   return (
//     <section className="relative py-32 bg-[#F8FAFC] overflow-hidden">

//       {/* Background Glow Effects */}
//       <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />

//       <div className="max-w-7xl mx-auto px-6">

//         {/* ================= HEADING ================= */}
//         <SectionWrapper>
//           <div className="text-center mb-24">
//             <span className="text-xs uppercase tracking-[0.3em] text-purple-600 font-semibold mb-4 block">
//               Why MV Branding
//             </span>

//             <h2 className="text-4xl sm:text-6xl font-bold mb-6">
//               Why{" "}
//               <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
//                 Choose Us
//               </span>
//             </h2>

//             <p className="text-slate-500 max-w-2xl mx-auto text-lg">
//               We go beyond standard IT services to deliver infrastructure that transforms businesses
//             </p>
//           </div>
//         </SectionWrapper>

//         {/* ================= GRID ================= */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

//           {whyChooseUs.map((item, i) => (
//             <SectionWrapper key={item.title} delay={i * 80}>

//               <div className="group relative rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-2">

//                 {/* Gradient Border */}
//                 <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition duration-500 blur-sm`} />

//                 {/* Card */}
//                 <div className="relative h-full rounded-2xl bg-white/70 backdrop-blur-xl p-8 shadow-xl border border-slate-200 group-hover:bg-[#0F172A] transition-all duration-500">

//                   {/* Icon */}
//                   <div className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-slate-100 group-hover:bg-white/10 transition">
//                     <item.icon
//                       size={24}
//                       className="text-slate-700 group-hover:text-white transition duration-300"
//                     />

//                     {/* Icon Glow */}
//                     <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition`} />
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition">
//                     {item.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed transition">
//                     {item.desc}
//                   </p>

//                   {/* Subtle Shine Effect */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
//                     <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 group-hover:left-[100%] transition-all duration-1000" />
//                   </div>

//                 </div>
//               </div>

//             </SectionWrapper>
//           ))}

//         </div>
//       </div>
//     </section>
//   )
// }






// import { Star, Globe, Lock, Rocket, Clock, Award } from "lucide-react";
// import SectionWrapper from "@/components/SectionWrapper";

// const whyChooseUs = [
//   {
//     icon: Star,
//     title: "Premium Quality",
//     desc: "Enterprise-grade products and solutions — nothing less.",
//     image: "/images/premium.jpg",
//     color: "blue" as const,
//   },
//   {
//     icon: Globe,
//     title: "Global Standards",
//     desc: "International compliance and security standards met.",
//     image: "/images/global.jpg",
//     color: "magenta" as const,
//   },
//   {
//     icon: Lock,
//     title: "End-to-End Security",
//     desc: "Security built into every infrastructure layer.",
//     image: "/images/security.jpg",
//     color: "green" as const,
//   },
//   {
//     icon: Rocket,
//     title: "Future-Proof",
//     desc: "Solutions that scale and adapt to evolving needs.",
//     image: "/images/future.jpg",
//     color: "blue" as const,
//   },
//   {
//     icon: Clock,
//     title: "24/7 Support",
//     desc: "Round-the-clock dedicated enterprise support.",
//     image: "/images/support.jpg",
//     color: "magenta" as const,
//   },
//   {
//     icon: Award,
//     title: "Certified Experts",
//     desc: "Leading industry certifications and credentials.",
//     image: "/images/experts.jpg",
//     color: "green" as const,
//   },
// ];

// const iconTextMap = {
//   blue: "text-blue-600",
//   magenta: "text-purple-600",
//   green: "text-emerald-600",
// };

// export default function WhyChooseUsSection() {
//   return (
//     <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
//       <div className="container mx-auto px-4 lg:px-8">
//         <SectionWrapper>
//           <div className="text-center mb-20">
//             <span className="text-xs uppercase tracking-widest text-purple-600 font-semibold mb-4 block">
//               Why MV Branding
//             </span>
//             <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
//               Why Choose Us
//             </h2>
//             <p className="text-slate-500 max-w-xl mx-auto">
//               We go beyond standard IT services to deliver infrastructure that
//               transforms businesses
//             </p>
//           </div>
//         </SectionWrapper>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {whyChooseUs.map((item, i) => (
//             <SectionWrapper key={item.title} delay={i * 80}>
//               <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl h-[260px] flex transition-all duration-500 ease-out hover:shadow-2xl">

//                 {/* LEFT CONTENT (Shrinks to 50%) */}
//                 <div className="w-full group-hover:w-1/2 transition-all duration-500 p-8 flex flex-col justify-center">
//                   <div className="flex items-center gap-4 mb-4">
//                     <item.icon
//                       size={26}
//                       className={`${iconTextMap[item.color]} transition-transform duration-500 group-hover:scale-110`}
//                     />
//                     <h3 className="text-lg font-bold text-slate-900">
//                       {item.title}
//                     </h3>
//                   </div>
//                   <p className="text-sm text-slate-500 leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>

//                 {/* RIGHT IMAGE (Reveals to 50%) */}
//                 <div className="absolute right-0 top-0 h-full w-0 group-hover:w-1/2 transition-all duration-500 overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="h-full w-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/50" />
//                 </div>

//               </div>
//             </SectionWrapper>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// import {
//   Star,
//   Globe,
//   Lock,
//   Rocket,
//   Clock,
//   Award,
// } from "lucide-react";

// const features = [
//   {
//     icon: Star,
//     title: "Premium Quality",
//     desc: "Enterprise-grade products and solutions — nothing less.",
//     image: "https://i.pinimg.com/736x/93/7b/08/937b0806a9a486ac1003b989808bbf6a.jpg",
//   },
//   {
//     icon: Globe,
//     title: "Global Standards",
//     desc: "International compliance and security standards met.",
//     image: "https://i.pinimg.com/736x/ac/0c/38/ac0c3859a04553f7dd3e190461dcab8b.jpg",
//   },
//   {
//     icon: Lock,
//     title: "End-to-End Security",
//     desc: "Security built into every infrastructure layer.",
//     image: "https://i.pinimg.com/736x/d7/b9/23/d7b9233a1ba38567cfecba7240992a09.jpg",
//   },
//   {
//     icon: Rocket,
//     title: "Future-Proof",
//     desc: "Solutions that scale and adapt to evolving needs.",
//     image: "https://i.pinimg.com/736x/fd/18/f5/fd18f58bdb7731fadfe702fa17fee117.jpg",
//   },
//   {
//     icon: Clock,
//     title: "24/7 Support",
//     desc: "Round-the-clock dedicated enterprise support.",
//     image: "https://i.pinimg.com/1200x/cb/9f/1c/cb9f1c4b4c30b8ab088aee87a85e57b4.jpg",
//   },
//   {
//     icon: Award,
//     title: "Certified Experts",
//     desc: "Leading industry certifications and credentials.",
//     image: "https://i.pinimg.com/1200x/a0/5f/c8/a05fc8d6af50bd2f7d1e55255136cb5e.jpg",
//   },
// ];

// export default function WhyChooseUsSection() {
//   return (
//     <section className="py-8 bg-white">
//       <div className="container mx-auto px-6 lg:px-12">

//         {/* SECTION HEADING */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <span className="text-xs uppercase tracking-[0.25em] text-purple-600 font-semibold mb-4 block">
//             Why MV Branding
//           </span>

//           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
//             Why Choose Us
//           </h2>

//           <p className="text-slate-500 text-lg leading-relaxed">
//             We go beyond standard IT services to deliver infrastructure that
//             transforms businesses
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

//           {features.map((item, i) => (
//             <div
//               key={i}
//               className="group relative h-[260px] rounded-3xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500"
//             >

//               {/* Background Transition */}
//               <div className="absolute inset-0 bg-white group-hover:bg-[#0F172A] transition-all duration-500"></div>

//               {/* CONTENT SIDE */}
//               <div className="absolute left-0 top-0 h-full w-full group-hover:w-1/2 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] flex items-center z-10">
//                 <div className="p-8 transition-all duration-500 group-hover:translate-x-3">

//                   <item.icon
//                     size={26}
//                     className="mb-4 text-blue-600 group-hover:text-white transition-colors duration-300"
//                   />

//                   <h3 className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors duration-300 mb-3">
//                     {item.title}
//                   </h3>

//                   <p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
//                     {item.desc}
//                   </p>

//                 </div>
//               </div>

//               {/* IMAGE SIDE */}
//               <div className="absolute right-0 top-0 h-full w-0 group-hover:w-1/2 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-black/40"></div>
//               </div>

//               {/* Border Glow */}
//               <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-purple-500/40 transition-all duration-500"></div>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }




// import {
//   Star,
//   Globe,
//   Lock,
//   Rocket,
//   Clock,
//   Award,
// } from "lucide-react";

// const features = [
//   {
//     icon: Star,
//     title: "Premium Quality",
//     desc: "Enterprise-grade products and solutions — nothing less.",
//     image: "https://i.pinimg.com/736x/93/7b/08/937b0806a9a486ac1003b989808bbf6a.jpg",
//   },
//   {
//     icon: Globe,
//     title: "Global Standards",
//     desc: "International compliance and security standards met.",
//     image: "https://i.pinimg.com/736x/ac/0c/38/ac0c3859a04553f7dd3e190461dcab8b.jpg",
//   },
//   {
//     icon: Lock,
//     title: "End-to-End Security",
//     desc: "Security built into every infrastructure layer.",
//     image: "https://i.pinimg.com/736x/d7/b9/23/d7b9233a1ba38567cfecba7240992a09.jpg",
//   },
//   {
//     icon: Rocket,
//     title: "Future-Proof",
//     desc: "Solutions that scale and adapt to evolving needs.",
//     image: "https://i.pinimg.com/736x/fd/18/f5/fd18f58bdb7731fadfe702fa17fee117.jpg",
//   },
//   {
//     icon: Clock,
//     title: "24/7 Support",
//     desc: "Round-the-clock dedicated enterprise support.",
//     image: "https://i.pinimg.com/1200x/cb/9f/1c/cb9f1c4b4c30b8ab088aee87a85e57b4.jpg",
//   },
//   {
//     icon: Award,
//     title: "Certified Experts",
//     desc: "Leading industry certifications and credentials.",
//     image: "https://i.pinimg.com/1200x/a0/5f/c8/a05fc8d6af50bd2f7d1e55255136cb5e.jpg",
//   },
// ];

// export default function WhyChooseUsSection() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-6 lg:px-12">

//         {/* SECTION HEADING */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-xs uppercase tracking-[0.25em] text-purple-600 font-semibold mb-4 block">
//             Why MV Branding
//           </span>

//           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
//             Why Choose Us
//           </h2>

//           <p className="text-slate-500 text-lg leading-relaxed">
//             We go beyond standard IT services to deliver infrastructure that
//             transforms businesses
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

//           {features.map((item, i) => (
//             <div
//               key={i}
//               className="group relative h-[260px] rounded-3xl overflow-hidden bg-[#F9FAFB] shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
//             >
//               {/* CONTENT SIDE */}
//               <div className="absolute left-0 top-0 h-full w-full group-hover:w-1/2 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] flex items-center z-10">
//                 <div className="p-8 transition-all duration-500 group-hover:translate-x-4">

//                   <item.icon
//                     size={26}
//                     className="mb-4 text-purple-600 transition-colors duration-300"
//                   />

//                   <h3 className="text-lg font-bold text-slate-900 mb-3">
//                     {item.title}
//                   </h3>

//                   <p className="text-sm text-slate-500 leading-relaxed">
//                     {item.desc}
//                   </p>

//                 </div>
//               </div>

//               {/* IMAGE SIDE */}
//               <div className="absolute right-0 top-0 h-full w-0 group-hover:w-1/2 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
//                 />
//               </div>

//               {/* Soft Border */}
//               <div className="absolute inset-0 rounded-3xl border border-gray-200 group-hover:border-purple-300 transition-all duration-500"></div>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }



import {
  Star,
  Globe,
  Lock,
  Rocket,
  Clock,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Premium Quality",
    desc: "Enterprise-grade products and solutions — nothing less.",
    image: "https://i.pinimg.com/736x/93/7b/08/937b0806a9a486ac1003b989808bbf6a.jpg",
  },
  {
    icon: Globe,
    title: "Global Standards",
    desc: "International compliance and security standards met.",
    image: "https://i.pinimg.com/736x/ac/0c/38/ac0c3859a04553f7dd3e190461dcab8b.jpg",
  },
  {
    icon: Lock,
    title: "End-to-End Security",
    desc: "Security built into every infrastructure layer.",
    image: "https://i.pinimg.com/736x/d7/b9/23/d7b9233a1ba38567cfecba7240992a09.jpg",
  },
  {
    icon: Rocket,
    title: "Future-Proof",
    desc: "Solutions that scale and adapt to evolving needs.",
    image: "https://i.pinimg.com/736x/fd/18/f5/fd18f58bdb7731fadfe702fa17fee117.jpg",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Round-the-clock dedicated enterprise support.",
    image: "https://i.pinimg.com/1200x/cb/9f/1c/cb9f1c4b4c30b8ab088aee87a85e57b4.jpg",
  },
  {
    icon: Award,
    title: "Certified Experts",
    desc: "Leading industry certifications and credentials.",
    image: "https://i.pinimg.com/1200x/a0/5f/c8/a05fc8d6af50bd2f7d1e55255136cb5e.jpg",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-6 lg:px-12">

        {/* SECTION HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-purple-600 font-semibold mb-4 block">
            Why MV Branding
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Why Choose Us
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed">
            We go beyond standard IT services to deliver infrastructure that
            transforms businesses
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, i) => (
            <div
              key={i}
              className="group relative h-[260px] rounded-3xl overflow-hidden bg-[#F9FAFB] shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
            >

              {/* CONTENT SIDE (DARK ON HOVER ONLY HERE) */}
              <div className="absolute left-0 top-0 h-full w-full group-hover:w-1/2 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] flex items-center z-10">

                <div className="w-full h-full p-8 flex flex-col justify-center transition-all duration-500 bg-transparent group-hover:bg-[#0F172A]">

                  <item.icon
                    size={26}
                    className="mb-4 text-purple-600 group-hover:text-white transition-colors duration-300"
                  />

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors duration-300 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              </div>

              {/* IMAGE SIDE */}
              <div className="absolute right-0 top-0 h-full w-0 group-hover:w-1/2 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </div>

              {/* BORDER */}
              <div className="absolute inset-0 rounded-3xl border border-gray-200 group-hover:border-purple-300 transition-all duration-500"></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}