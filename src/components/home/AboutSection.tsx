// import { Link } from "react-router-dom";
// import { ArrowRight, ShieldCheck, Network, Server } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import SectionWrapper from "@/components/SectionWrapper";
// import teamImg from "@/assets/team-collaboration.jpg";

// export default function AboutSection() {
//   return (
//     <section className="py-32 relative overflow-hidden bg-white">

//       {/* background glow */}
//       <div className="absolute -right-20 top-1/2 w-[500px] h-[500px] rounded-full bg-mv-blue/10 blur-[120px]" />
//       <div className="absolute -left-32 bottom-0 w-[400px] h-[400px] rounded-full bg-mv-magenta/10 blur-[120px]" />

//       <div className="container mx-auto px-4 lg:px-8">
//         <SectionWrapper>

//           <div className="grid lg:grid-cols-2 gap-20 items-center">

//             {/* LEFT SIDE */}
//             <div>

//               <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-4 block">
//                 About Us
//               </span>

//               <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
//                 Enterprise IT Infrastructure,
//                 <span className="gradient-brand-text"> Reimagined</span>
//               </h2>

//               <p className="text-lg text-muted-foreground leading-relaxed mb-6">
//                 MV Branding Strategy is a premium IT Infrastructure company delivering
//                 end-to-end solutions in Data Cabling, Network Security, and Strategic
//                 IT Core Development for modern enterprises.
//               </p>

//               <p className="text-muted-foreground leading-relaxed mb-10">
//                 We combine deep technical expertise with innovative thinking to
//                 design scalable infrastructure that supports secure, efficient,
//                 and future-ready business operations.
//               </p>

//               {/* Feature points */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">

//                 <div className="flex gap-3 items-start">
//                   <div className="p-2 rounded-lg bg-mv-blue/10 text-mv-blue">
//                     <Network size={20} />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-sm">Smart Networking</div>
//                     <p className="text-xs text-muted-foreground">
//                       Scalable enterprise network architecture
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-3 items-start">
//                   <div className="p-2 rounded-lg bg-mv-magenta/10 text-mv-magenta">
//                     <ShieldCheck size={20} />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-sm">Data Security</div>
//                     <p className="text-xs text-muted-foreground">
//                       Advanced protection for enterprise data
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-3 items-start">
//                   <div className="p-2 rounded-lg bg-mv-green/10 text-mv-green">
//                     <Server size={20} />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-sm">Infrastructure</div>
//                     <p className="text-xs text-muted-foreground">
//                       Reliable IT backbone solutions
//                     </p>
//                   </div>
//                 </div>

//               </div>

//               <Link to="/about">
//                 <Button
//                   variant="outline"
//                   className="border-primary/30 group rounded-full px-8 py-6 font-semibold"
//                 >
//                   Learn More About Us
//                   <ArrowRight
//                     size={16}
//                     className="ml-2 group-hover:translate-x-1 transition-transform"
//                   />
//                 </Button>
//               </Link>

//             </div>

//             {/* RIGHT SIDE IMAGE */}
//             <div className="relative flex justify-center">

//               {/* glow */}
//               <div className="absolute w-[520px] h-[520px] bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green opacity-20 blur-[120px]" />

//               {/* gradient border image */}
//               <div className="relative p-[3px] rounded-3xl bg-gradient-to-r from-mv-blue via-mv-magenta to-mv-green shadow-2xl">

//                 <div className="rounded-3xl overflow-hidden bg-white">
//                   <img
//                     src={teamImg}
//                     alt="MV Branding Strategy team"
//                     className="w-full h-[380px] object-cover"
//                   />
//                 </div>

//               </div>

//               {/* floating cards */}

//               <div className="absolute -bottom-8 -left-8 p-6 rounded-2xl glass-strong shadow-xl animate-float-gentle">
//                 <div className="text-2xl font-black text-mv-blue">500+</div>
//                 <div className="text-xs text-muted-foreground">
//                   Cable Installations
//                 </div>
//               </div>

//               <div
//                 className="absolute -top-6 -right-8 p-6 rounded-2xl glass-strong shadow-xl animate-float-gentle"
//                 style={{ animationDelay: "1s" }}
//               >
//                 <div className="text-2xl font-black text-mv-magenta">99.9%</div>
//                 <div className="text-xs text-muted-foreground">
//                   Network Uptime
//                 </div>
//               </div>

//               {/* experience badge */}

//               <div className="absolute top-1/2 -left-12 bg-white border shadow-xl rounded-2xl px-6 py-4">
//                 <div className="text-3xl font-black gradient-brand-text">10+</div>
//                 <div className="text-xs text-muted-foreground">
//                   Years Experience
//                 </div>
//               </div>

//             </div>

//           </div>

//         </SectionWrapper>
//       </div>
//     </section>
//   );
// }




// import { Link } from "react-router-dom";
// import { ArrowRight, ShieldCheck, Network, Server } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import SectionWrapper from "@/components/SectionWrapper";
// import teamImg from "@/assets/team-collaboration.jpg";

// export default function AboutSection() {
//   return (
//     <section className="py-32 relative overflow-hidden bg-white">

//       {/* Background glow */}
//       <div className="absolute left-[-120px] top-1/2 w-[420px] h-[420px] rounded-full bg-[#00a8ff]/10 blur-[120px]" />
//       <div className="absolute right-[-120px] bottom-0 w-[420px] h-[420px] rounded-full bg-[#ff2d7a]/10 blur-[120px]" />

//       <div className="container mx-auto px-4 lg:px-8">

//         <SectionWrapper>

//           <div className="grid lg:grid-cols-2 gap-20 items-center">

//             {/* LEFT IMAGE */}

//             <div className="relative flex justify-center">

//               {/* Gradient glow behind image */}
//               <div className="absolute w-[520px] h-[520px] 
//               bg-[linear-gradient(135deg,#ff2d7a,#ff7a00,#ffd400,#38d66b,#00a8ff)]
//               opacity-20 blur-[120px]" />

//               {/* Gradient border image card */}
//               <div className="relative p-[3px] rounded-3xl 
//               bg-[linear-gradient(135deg,#ff2d7a,#ff7a00,#ffd400,#38d66b,#00a8ff)]
//               shadow-2xl">

//                 <div className="rounded-3xl overflow-hidden bg-white">
//                   <img
//                     src={teamImg}
//                     alt="MV team"
//                     className="w-full h-[400px] object-cover"
//                   />
//                 </div>

//               </div>

//               {/* Floating stat */}

//               <div className="absolute -bottom-8 -left-8 p-6 rounded-2xl glass-strong shadow-xl bg-white">
//                 <div className="text-2xl font-black text-[#00a8ff]">500+</div>
//                 <div className="text-xs text-muted-foreground">
//                   Network Installations
//                 </div>
//               </div>

//             </div>

//             {/* RIGHT CONTENT */}

//             <div>

//               <span className="text-xs uppercase tracking-widest text-[#ff2d7a] font-semibold mb-4 block">
//                 About Us
//               </span>

//               <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight text-foreground">
//                 Enterprise IT Infrastructure,
//                 <span className="bg-[linear-gradient(135deg,#ff2d7a,#ff7a00,#ffd400,#38d66b,#00a8ff)] bg-clip-text text-transparent">
//                   {" "}Reimagined
//                 </span>
//               </h2>

//               <p className="text-lg text-muted-foreground leading-relaxed mb-6">
//                 MV Branding Strategy is a premium IT infrastructure company
//                 delivering scalable networking, secure data systems, and
//                 enterprise IT architecture for modern businesses.
//               </p>

//               <p className="text-muted-foreground leading-relaxed mb-10">
//                 We design high-performance digital foundations that allow
//                 organizations to grow faster while maintaining security,
//                 reliability, and efficiency.
//               </p>

//               {/* Features */}

//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">

//                 <div className="flex gap-3">
//                   <div className="p-2 rounded-lg bg-[#00a8ff]/10 text-[#00a8ff]">
//                     <Network size={20}/>
//                   </div>
//                   <div>
//                     <div className="font-semibold text-sm">Smart Networking</div>
//                     <p className="text-xs text-muted-foreground">
//                       Scalable enterprise network design
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-3">
//                   <div className="p-2 rounded-lg bg-[#ff2d7a]/10 text-[#ff2d7a]">
//                     <ShieldCheck size={20}/>
//                   </div>
//                   <div>
//                     <div className="font-semibold text-sm">Security</div>
//                     <p className="text-xs text-muted-foreground">
//                       Advanced protection systems
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-3">
//                   <div className="p-2 rounded-lg bg-[#38d66b]/10 text-[#38d66b]">
//                     <Server size={20}/>
//                   </div>
//                   <div>
//                     <div className="font-semibold text-sm">Infrastructure</div>
//                     <p className="text-xs text-muted-foreground">
//                       Reliable IT backbone
//                     </p>
//                   </div>
//                 </div>

//               </div>

//               <Link to="/about">

//                 <Button
//                   variant="outline"
//                   className="border-[#00a8ff]/40 rounded-full px-8 py-6 group"
//                 >
//                   Learn More About Us
//                   <ArrowRight
//                     size={16}
//                     className="ml-2 group-hover:translate-x-1 transition"
//                   />
//                 </Button>

//               </Link>

//             </div>

//           </div>

//         </SectionWrapper>

//       </div>

//     </section>
//   );
// }




// import teamImg from "@/assets/team-collaboration.jpg";

// export default function AboutSection(){

// return(

// <section className="relative py-32 overflow-hidden bg-white">

// {/* BOTTOM LEFT FRAME */}

// <div
// style={{
// position:"absolute",
// bottom:0,
// left:0,
// width:"55%",
// height:"100%",
// background:"linear-gradient(135deg,#020617,#1e293b,#0f172a)",
// clipPath:"polygon(0% 0%,100% 35%,70% 100%,0% 100%)",
// zIndex:0
// }}
// />

// <div
// style={{
// maxWidth:1200,
// margin:"0 auto",
// padding:"0 40px",
// position:"relative",
// zIndex:2,
// display:"grid",
// gridTemplateColumns:"1fr 1fr",
// gap:80,
// alignItems:"center"
// }}
// >

// {/* IMAGE */}

// <div>

// <img
// src={teamImg}
// style={{
// width:"100%",
// borderRadius:14,
// boxShadow:"0 30px 60px rgba(0,0,0,.25)"
// }}
// />

// </div>

// {/* CONTENT */}

// <div>

// <h2
// style={{
// fontSize:46,
// fontWeight:900,
// marginBottom:20
// }}
// >
// Enterprise IT Infrastructure
// </h2>

// <p
// style={{
// color:"#6b7280",
// lineHeight:1.8,
// marginBottom:20
// }}
// >
// MV Business Solutions designs high-performance
// networking, cybersecurity and enterprise infrastructure
// for organizations that demand reliability.
// </p>

// <p
// style={{
// color:"#6b7280",
// lineHeight:1.8
// }}
// >
// We build secure and scalable digital foundations
// that allow companies to grow faster while maintaining
// maximum efficiency.
// </p>

// </div>

// </div>

// </section>

// )
// }





// import { WaveBottomLeft } from "@/components/home/PremiumWaves";
// import teamImg from "@/assets/team-collaboration.jpg";

// export default function AboutSection() {
//   return (
//     <section className="relative py-32 overflow-hidden bg-white">

//       <WaveBottomLeft />

//       <div className="container mx-auto px-6 lg:px-10 relative z-10">

//         <div className="grid lg:grid-cols-2 gap-20 items-center">

//           {/* IMAGE */}

//           <div className="flex justify-center">
//             <img
//               src={teamImg}
//               className="rounded-2xl shadow-2xl w-full max-w-md"
//             />
//           </div>

//           {/* CONTENT */}

//           <div>

//             <span className="text-sm font-semibold text-pink-500 mb-4 block">
//               About Us
//             </span>

//             <h2 className="text-4xl lg:text-5xl font-black mb-6">
//               Enterprise Infrastructure
//               <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-blue-500 bg-clip-text text-transparent">
//                 {" "}Reimagined
//               </span>
//             </h2>

//             <p className="text-gray-600 leading-relaxed mb-6">
//               MV Business Solutions builds secure, scalable IT
//               infrastructure for enterprises seeking reliability,
//               performance, and future-ready networking.
//             </p>

//             <button className="px-8 py-4 rounded-full border border-blue-400 text-blue-500 font-semibold hover:bg-blue-50 transition">
//               Learn More
//             </button>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// import { ArrowRight, Network, ShieldCheck, Server } from "lucide-react";

// import teamImg from "@/assets/team-collaboration.jpg";
// import PremiumSectionWave from "./PremiumSectionWave";
// import ProfessionalFrame from "./PremiumSectionWave";

// export default function AboutSection() {
//   return (
//     <section className="relative py-32 overflow-hidden bg-white">

//       {/* Opposite Direction Wave */}
//       <ProfessionalFrame variant="bottom-left" />

//       <div className="container mx-auto px-6 lg:px-12 relative z-10">

//         <div className="grid lg:grid-cols-2 gap-20 items-center">

//           {/* IMAGE */}

//           <div className="flex justify-center">

//             <img
//               src={teamImg}
//               alt="Team"
//               className="w-full max-w-md rounded-2xl shadow-2xl"
//             />

//           </div>

//           {/* CONTENT */}

//           <div>

//             <span className="text-sm font-semibold text-pink-500 mb-4 block">
//               About Us
//             </span>

//             <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
//               Enterprise Infrastructure
//               <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-blue-500 bg-clip-text text-transparent">
//                 {" "}Reimagined
//               </span>
//             </h2>

//             <p className="text-gray-600 leading-relaxed mb-6">
//               MV Business Solutions designs secure, scalable
//               networking systems and enterprise infrastructure
//               that help organizations grow with confidence.
//             </p>

//             {/* FEATURES */}

//             <div className="grid grid-cols-3 gap-6 mb-8">

//               <div className="flex items-center gap-3">
//                 <Network className="text-blue-500" size={22}/>
//                 <span className="text-sm font-semibold">Networking</span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <ShieldCheck className="text-pink-500" size={22}/>
//                 <span className="text-sm font-semibold">Security</span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <Server className="text-green-500" size={22}/>
//                 <span className="text-sm font-semibold">Infrastructure</span>
//               </div>

//             </div>

//             <button className="flex items-center gap-2 px-8 py-4 rounded-full border border-blue-400 text-blue-500 font-semibold hover:bg-blue-50 transition">
//               Learn More
//               <ArrowRight size={16}/>
//             </button>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }




import teamImg from "@/assets/team-collaboration.jpg";
import BlobFrameBackground from "./PremiumSectionWave";

export default function AboutSection() {
  return (
    <section className="relative py-32 px-6 lg:px-20 overflow-hidden bg-gray-50">

      <BlobFrameBackground side="left" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}

        <div className="flex justify-center">

          <img
            src={teamImg}
            alt="team"
            className="rounded-xl w-[420px]"
          />

        </div>

        {/* TEXT */}

        <div>

          <div className="inline-flex items-center bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-semibold mb-6">
            About Our Company
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted IT Infrastructure Experts
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            MV Business Solutions provides reliable networking,
            cybersecurity, and enterprise IT infrastructure
            designed to support modern digital businesses.
          </p>

          <button className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}