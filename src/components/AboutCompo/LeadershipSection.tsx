// import { Crown, Quote } from "lucide-react";
// import { TiltCard } from "./TiltCard";

// const leadership = [
//   {
//     name: "Venkatesh Krishnan",
//     title: "Chief Executive Officer",
//     description:
//       "22+ years of industrial experience in Enterprise IT Infrastructure, focused on value and solution selling. Successfully executed projects across Data Center, Manufacturing, Enterprises, and Educational sectors.",
//     gradient: "from-blue-500 to-cyan-500",
//     image: "https://i.pinimg.com/1200x/e8/09/8a/e8098a3d487b4fd7b8d591d7d9db32bb.jpg",
//     quote: "We don't just build networks. We build trust.",
//   },
//   {
//     name: "Marishwari Venkatesh",
//     title: "Chief Financial Officer",
//     description:
//       "Steering financial strategy with precision and integrity, ensuring sustainable growth and operational excellence across all business verticals.",
//     gradient: "from-purple-500 to-pink-500",
//     image: "https://i.pinimg.com/736x/ae/e6/d4/aee6d45245609592339c8508ae27182d.jpg",
//     quote: "Every investment in infrastructure is an investment in peace of mind.",
//   },
//   {
//     name: "Niranjan Nayak",
//     title: "Director - Sales & Marketing",
//     description:
//       "Driving business growth through strategic partnerships and customer-centric sales approaches, expanding MV's footprint across enterprise segments.",
//     gradient: "from-emerald-500 to-teal-500",
//     image: "https://i.pinimg.com/736x/ac/4e/ba/ac4ebaf46561a0ea3617ed706b7ff37d.jpg",
//     quote: "The best solutions begin with understanding, not selling.",
//   },
//   {
//     name: "Chandan Gosh",
//     title: "Director - Security & IT Infra",
//     description:
//       "Leading security architecture and IT infrastructure delivery, with expertise in SOC, NOC, SIEM, and enterprise-grade security solutions.",
//     gradient: "from-amber-500 to-orange-500",
//     image: "https://i.pinimg.com/1200x/a7/37/c0/a737c000753c6dbd490efc06277437aa.jpg",
//     quote: "Security isn't a product. It's a mindset.",
//   },
// ];

// export function LeadershipSection() {
//   return (
//     <section className="py-4 bg-gradient-to-b from-gray-50 to-white">
//       <div className="container mx-auto px-6">

//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-20">

//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
//             <Crown className="w-4 h-4 text-purple-600" />
//             <span className="text-sm font-medium text-purple-700">
//               Leadership Team
//             </span>
//           </div>

//           <h2 className="text-5xl font-bold text-gray-900 mb-6">
//             Meet the Minds Behind MV
//           </h2>

//           <p className="text-xl text-gray-600">
//             Four leaders. One vision. Decades of experience building
//             enterprise-grade IT infrastructure solutions.
//           </p>

//         </div>

//         {/* Leadership Grid */}
//         <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

//           {leadership.map((leader, i) => (
//             <TiltCard key={i}>

//               <div className="group relative h-full">

//                 {/* Glow */}
//                 <div
//                   className={`absolute -inset-0.5 bg-gradient-to-r ${leader.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition`}
//                 />

//                 {/* Card */}
//                 <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">

//                   <div className="flex items-start gap-6">

//                     {/* Avatar */}
//                     <div className="relative">
//                       <div
//                         className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${leader.gradient} blur opacity-50`}
//                       />
//                       <img
//                         src={leader.image}
//                         alt={leader.name}
//                         className="relative w-20 h-20 rounded-2xl object-cover border-2 border-white shadow-lg"
//                       />
//                     </div>

//                     {/* Content */}
//                     <div className="flex-1">

//                       <h3 className="text-xl font-bold text-gray-900">
//                         {leader.name}
//                       </h3>

//                       <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
//                         {leader.title}
//                       </p>

//                       <p className="text-gray-600 text-sm leading-relaxed mb-5">
//                         {leader.description}
//                       </p>

//                       {/* Quote */}
//                       <div className="relative">
//                         <Quote className="absolute -top-2 -left-2 w-4 h-4 text-gray-300" />
//                         <p className="text-sm italic text-gray-500 pl-4">
//                           "{leader.quote}"
//                         </p>
//                       </div>

//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </TiltCard>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }





import { Crown, Quote } from "lucide-react";
import { TiltCard } from "./TiltCard";

const leadership = [
  {
    name: "Venkatesh Krishnan",
    title: "Chief Executive Officer",
    description:
      "22+ years of industrial experience in Enterprise IT Infrastructure, focused on value and solution selling. Successfully executed projects across Data Center, Manufacturing, Enterprises, and Educational sectors.",
    gradient: "from-[#E11D48] via-[#F97316] to-[#FACC15]",
    image:
      "https://i.pinimg.com/1200x/e8/09/8a/e8098a3d487b4fd7b8d591d7d9db32bb.jpg",
    quote: "We don't just build networks. We build trust.",
  },
  {
    name: "Marishwari Venkatesh",
    title: "Chief Financial Officer",
    description:
      "Steering financial strategy with precision and integrity, ensuring sustainable growth and operational excellence across all business verticals.",
    gradient: "from-[#C026D3] via-[#E11D48] to-[#F97316]",
    image:
      "https://i.pinimg.com/1200x/0e/a7/75/0ea775632aaed02b9c1c1e27bd09cad7.jpg",
    quote:
      "Every investment in infrastructure is an investment in peace of mind.",
  },
  {
    name: "Niranjan Nayak",
    title: "Director - Sales & Marketing",
    description:
      "Driving business growth through strategic partnerships and customer-centric sales approaches, expanding MV's footprint across enterprise segments.",
    gradient: "from-[#22C55E] via-[#06B6D4] to-[#2563EB]",
    image:
      "https://i.pinimg.com/736x/ac/4e/ba/ac4ebaf46561a0ea3617ed706b7ff37d.jpg",
    quote:
      "The best solutions begin with understanding, not selling.",
  },
  {
    name: "Chandan Gosh",
    title: "Director - Security & IT Infra",
    description:
      "Leading security architecture and IT infrastructure delivery, with expertise in SOC, NOC, SIEM, and enterprise-grade security solutions.",
    gradient: "from-[#FACC15] via-[#F97316] to-[#E11D48]",
    image:
      "https://i.pinimg.com/1200x/a7/37/c0/a737c000753c6dbd490efc06277437aa.jpg",
    quote: "Security isn't a product. It's a mindset.",
  },
];

export function LeadershipSection() {
  return (
    <section className="py-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#E11D48] via-[#FACC15] to-[#2563EB] rounded-full mb-6 shadow-md">
            <Crown className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Leadership Team
            </span>
          </div>

          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#E11D48] via-[#FACC15] to-[#2563EB] text-transparent bg-clip-text">
            Meet the Minds Behind MV
          </h2>

          <p className="text-xl text-gray-600">
            Four leaders. One vision. Decades of experience building
            enterprise-grade IT infrastructure solutions.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {leadership.map((leader, i) => (
            <TiltCard key={i}>

              <div className="group relative h-full">

                {/* Glow */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${leader.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition duration-500`}
                />

                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">

                  <div className="flex items-start gap-6">

                    {/* Avatar */}
                    <div className="relative">
                      <div
                        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${leader.gradient} blur opacity-70`}
                      />
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="relative w-20 h-20 rounded-2xl object-cover border-2 border-white shadow-lg"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">

                      <h3 className="text-xl font-bold text-gray-900">
                        {leader.name}
                      </h3>

                      <p
                        className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${leader.gradient} mb-3`}
                      >
                        {leader.title}
                      </p>

                      <p className="text-gray-600 text-sm leading-relaxed mb-5">
                        {leader.description}
                      </p>

                      {/* Quote */}
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 w-4 h-4 text-gray-300" />
                        <p className="text-sm italic text-gray-500 pl-4">
                          "{leader.quote}"
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </TiltCard>
          ))}

        </div>

      </div>
    </section>
  );
}