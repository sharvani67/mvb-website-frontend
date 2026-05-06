// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Briefcase,
//   Users,
//   Rocket,
//   ShieldCheck,
//   Globe,
//   Cpu,
//   ArrowRight,
// } from "lucide-react";

// const jobs = [
//   {
//     title: "Network Engineer",
//     location: "Hyderabad, India",
//     type: "Full Time",
//     desc: "Design, implement and maintain enterprise networking infrastructure and ensure high availability.",
//   },
//   {
//     title: "Data Center Technician",
//     location: "Bangalore, India",
//     type: "Full Time",
//     desc: "Manage cabling infrastructure, server deployment, and data center operations.",
//   },
//   {
//     title: "Cyber Security Analyst",
//     location: "Remote / India",
//     type: "Full Time",
//     desc: "Monitor security threats, implement protection systems and ensure enterprise security compliance.",
//   },
//   {
//     title: "AI Solutions Engineer",
//     location: "Hyderabad, India",
//     type: "Full Time",
//     desc: "Build AI-powered infrastructure solutions and integrate intelligent automation systems.",
//   },
// ];

// const benefits = [
//   {
//     icon: Rocket,
//     title: "Career Growth",
//     desc: "Work with cutting-edge technology and accelerate your career.",
//   },
//   {
//     icon: Users,
//     title: "Collaborative Culture",
//     desc: "Join a team that values innovation, creativity and teamwork.",
//   },
//   {
//     icon: Globe,
//     title: "Global Projects",
//     desc: "Work on enterprise infrastructure projects across industries.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Job Stability",
//     desc: "Build your future with a growing and stable technology company.",
//   },
//   {
//     icon: Cpu,
//     title: "Latest Technologies",
//     desc: "Work with AI, cloud computing, networking and cybersecurity.",
//   },
//   {
//     icon: Briefcase,
//     title: "Professional Environment",
//     desc: "A workplace that supports learning and innovation.",
//   },
// ];

// export default function Careers() {
//   return (
//     <div className="bg-white">

//       {/* HERO */}
//       <section className="relative py-28 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-5xl md:text-6xl font-bold mb-6"
//           >
//             Build Your Career With Us
//           </motion.h1>

//           <p className="max-w-2xl mx-auto text-lg text-white/80 mb-10">
//             Join our team of innovators, engineers, and technology experts
//             building next-generation infrastructure solutions for modern
//             enterprises.
//           </p>

//           <Link
//             to="#openings"
//             className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:scale-105 transition"
//           >
//             View Open Positions
//             <ArrowRight size={18} />
//           </Link>
//         </div>
//       </section>

//       {/* WHY JOIN US */}
//       <section className="py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">

//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900">
//               Why Join Our Team
//             </h2>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               We empower talented professionals to build innovative technology
//               solutions while growing their careers.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {benefits.map((item, i) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={i}
//                   className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-xl transition"
//                 >
//                   <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
//                     <Icon className="text-blue-600" />
//                   </div>

//                   <h3 className="text-xl font-semibold mb-3">
//                     {item.title}
//                   </h3>

//                   <p className="text-gray-600">{item.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* OPEN POSITIONS */}
//       <section id="openings" className="py-24 bg-white">
//         <div className="max-w-6xl mx-auto px-6">

//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900">
//               Current Openings
//             </h2>
//             <p className="text-gray-600 mt-4">
//               Explore opportunities to grow your career with us.
//             </p>
//           </div>

//           <div className="space-y-6">
//             {jobs.map((job, i) => (
//               <div
//                 key={i}
//                 className="border rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:shadow-lg transition"
//               >
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">
//                     {job.title}
//                   </h3>

//                   <p className="text-gray-600 text-sm mb-2">
//                     {job.location} • {job.type}
//                   </p>

//                   <p className="text-gray-500">{job.desc}</p>
//                 </div>

//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Apply Now
//                   <ArrowRight size={16} />
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 bg-gray-900 text-white text-center">
//         <div className="max-w-3xl mx-auto px-6">

//           <h2 className="text-4xl font-bold mb-6">
//             Don't See a Role That Fits?
//           </h2>

//           <p className="text-white/70 mb-10">
//             We're always looking for talented professionals. Send us your
//             resume and we'll get in touch when a suitable opportunity opens.
//           </p>

//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             Submit Your Resume
//             <ArrowRight size={18} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }


// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Briefcase,
//   Users,
//   Rocket,
//   ShieldCheck,
//   Globe,
//   Cpu,
//   ArrowRight,
// } from "lucide-react";

// const jobs = [
//   {
//     title: "Network Engineer",
//     location: "Hyderabad, India",
//     type: "Full Time",
//     desc: "Design, implement and maintain enterprise networking infrastructure and ensure high availability.",
//   },
//   {
//     title: "Data Center Technician",
//     location: "Bangalore, India",
//     type: "Full Time",
//     desc: "Manage cabling infrastructure, server deployment, and data center operations.",
//   },
//   {
//     title: "Cyber Security Analyst",
//     location: "Remote / India",
//     type: "Full Time",
//     desc: "Monitor security threats, implement protection systems and ensure enterprise security compliance.",
//   },
//   {
//     title: "AI Solutions Engineer",
//     location: "Hyderabad, India",
//     type: "Full Time",
//     desc: "Build AI-powered infrastructure solutions and integrate intelligent automation systems.",
//   },
// ];

// const benefits = [
//   {
//     icon: Rocket,
//     title: "Career Growth",
//     desc: "Work with cutting-edge technology and accelerate your career.",
//     gradient: "from-pink-500 to-rose-500",
//   },
//   {
//     icon: Users,
//     title: "Collaborative Culture",
//     desc: "Join a team that values innovation, creativity and teamwork.",
//     gradient: "from-purple-500 to-pink-500",
//   },
//   {
//     icon: Globe,
//     title: "Global Projects",
//     desc: "Work on enterprise infrastructure projects across industries.",
//     gradient: "from-yellow-500 to-orange-500",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Job Stability",
//     desc: "Build your future with a growing and stable technology company.",
//     gradient: "from-green-500 to-emerald-500",
//   },
//   {
//     icon: Cpu,
//     title: "Latest Technologies",
//     desc: "Work with AI, cloud computing, networking and cybersecurity.",
//     gradient: "from-blue-500 to-cyan-500",
//   },
//   {
//     icon: Briefcase,
//     title: "Professional Environment",
//     desc: "A workplace that supports learning and innovation.",
//     gradient: "from-indigo-500 to-purple-500",
//   },
// ];

// export default function Careers() {
//   return (
//     <div className="bg-white mt-4">

//       {/* HERO - Increased Height */}
//       <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2070&q=80')",
//           }}
//         />

//         {/* Bright Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 via-yellow-400/70 to-blue-600/80" />

//         {/* Content */}
//         <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
//           >
//             Build Your Career
//             <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
//               With Us
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10"
//           >
//             Join our team of innovators, engineers, and technology experts
//             building next-generation infrastructure solutions for modern
//             enterprises.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-3 rounded-lg font-medium hover:scale-105 transition shadow-lg group"
//             >
//               View Open Positions
//               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* WHY JOIN US - Unchanged */}
//       <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
//         <div className="max-w-7xl mx-auto px-6">

//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
//               Why Join Our Team
//             </h2>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               We empower talented professionals to build innovative technology
//               solutions while growing their careers.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {benefits.map((item, i) => {
//               const Icon = item.icon;
//               return (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                   viewport={{ once: true }}
//                   className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
//                 >
//                   <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
//                     <Icon className="text-white" size={24} />
//                   </div>

//                   <h3 className="text-xl font-semibold mb-3 text-gray-900">
//                     {item.title}
//                   </h3>

//                   <p className="text-gray-600">{item.desc}</p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* OPEN POSITIONS - Unchanged */}
//       <section id="openings" className="py-24 bg-white">
//         <div className="max-w-6xl mx-auto px-6">

//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
//               Current Openings
//             </h2>
//             <p className="text-gray-600 mt-4">
//               Explore opportunities to grow your career with us.
//             </p>
//           </div>

//           <div className="space-y-6">
//             {jobs.map((job, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 className="border border-gray-200 rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:shadow-xl transition-all duration-300 hover:border-pink-200"
//               >
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2 text-gray-900">
//                     {job.title}
//                   </h3>

//                   <div className="flex flex-wrap gap-2 mb-2">
//                     <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-700">
//                       {job.location}
//                     </span>
//                     <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
//                       {job.type}
//                     </span>
//                   </div>

//                   <p className="text-gray-500">{job.desc}</p>
//                 </div>

//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all hover:scale-105"
//                 >
//                   Apply Now
//                   <ArrowRight size={16} />
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA - Unchanged */}
//       <section className="py-24 bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 text-white text-center">
//         <div className="max-w-3xl mx-auto px-6">

//           <h2 className="text-4xl font-bold mb-6">
//             Don't See a Role That Fits?
//           </h2>

//           <p className="text-white/90 mb-10 text-lg">
//             We're always looking for talented professionals. Send us your
//             resume and we'll get in touch when a suitable opportunity opens.
//           </p>

//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105 font-medium"
//           >
//             Submit Your Resume
//             <ArrowRight size={18} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }




import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Rocket,
  ShieldCheck,
  Globe,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";
import SubmitResumeSection from "@/components/CareesCompo/SubmitResumeSection";

const jobs = [
  {
    title: "Network Engineer",
    location: "Hyderabad, India",
    type: "Full Time",
    desc: "Design, implement and maintain enterprise networking infrastructure and ensure high availability.",
  },
  {
    title: "Data Center Technician",
    location: "Bangalore, India",
    type: "Full Time",
    desc: "Manage cabling infrastructure, server deployment, and data center operations.",
  },
  {
    title: "Cyber Security Analyst",
    location: "Remote / India",
    type: "Full Time",
    desc: "Monitor security threats, implement protection systems and ensure enterprise security compliance.",
  },
  {
    title: "AI Solutions Engineer",
    location: "Hyderabad, India",
    type: "Full Time",
    desc: "Build AI-powered infrastructure solutions and integrate intelligent automation systems.",
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Career Growth",
    desc: "Work with cutting-edge technology and accelerate your career.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "Join a team that values innovation, creativity and teamwork.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Global Projects",
    desc: "Work on enterprise infrastructure projects across industries.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Job Stability",
    desc: "Build your future with a growing and stable technology company.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Cpu,
    title: "Latest Technologies",
    desc: "Work with AI, cloud computing, networking and cybersecurity.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Briefcase,
    title: "Professional Environment",
    desc: "A workplace that supports learning and innovation.",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function Careers() {
  const openingsRef = useRef(null);

  const scrollToOpenings = () => {
    openingsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white mt-4">

      {/* HERO - Increased Height */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2070&q=80')",
          }}
        />

        {/* Bright Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 via-yellow-400/70 to-blue-600/80" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Build Your Career
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              With Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10"
          >
            Join our team of innovators, engineers, and technology experts
            building next-generation infrastructure solutions for modern
            enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={scrollToOpenings}
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-3 rounded-lg font-medium hover:scale-105 transition shadow-lg group cursor-pointer"
            >
              View Open Positions
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN US - Unchanged */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
              Why Join Our Team
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We empower talented professionals to build innovative technology
              solutions while growing their careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={24} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS - Added ref */}
      <section id="openings" ref={openingsRef} className="py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
              Current Openings
            </h2>
            <p className="text-gray-600 mt-4">
              Explore opportunities to grow your career with us.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:shadow-xl transition-all duration-300 hover:border-pink-200"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-700">
                      {job.location}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-gray-500">{job.desc}</p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all hover:scale-105"
                >
                  Apply Now
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Unchanged */}
      {/* <section className="py-24 bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-6">
            Don't See a Role That Fits?
          </h2>

          <p className="text-white/90 mb-10 text-lg">
            We're always looking for talented professionals. Send us your
            resume and we'll get in touch when a suitable opportunity opens.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105 font-medium"
          >
            Submit Your Resume
            <ArrowRight size={18} />
          </Link>
        </div>
      </section> */}

      <SubmitResumeSection />
    </div>
  );
}