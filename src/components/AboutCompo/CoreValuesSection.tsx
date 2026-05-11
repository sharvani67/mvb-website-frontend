// import { Gem } from 'lucide-react';
// import { TiltCard } from './TiltCard';

// const values = [
//   { icon: "🤝", title: "Customer Centricity", description: "Your challenges become our challenges. Your success becomes our story.", color: "blue" },
//   { icon: "😌", title: "Peace of Mind", description: "Sleep well. We handle the complexity while you focus on growth.", color: "magenta" },
//   { icon: "✨", title: "Innovative & Simplified Solutions", description: "Complex problems deserve elegant solutions. We make the complicated simple.", color: "green" },
//   { icon: "🌱", title: "Value, Respect & Growth for Talents", description: "Our team isn't just talent. They're family. Their growth is our growth.", color: "yellow" },
//   { icon: "📚", title: "Continuous Learning", description: "In technology, standing still is falling behind. We're forever students.", color: "blue" },
//   { icon: "✓", title: "Responsibility with Accountability & Transparency", description: "We own our promises. Every. Single. One.", color: "magenta" },
//   { icon: "🎯", title: "Right Product, Right Solutions, Right Value Proposition", description: "Not what we have. What you need. There's a difference.", color: "green" },
//   { icon: "🏆", title: "Work with Integrity & Result Oriented for Future", description: "Ethics aren't optional. Results aren't negotiable.", color: "yellow" },
// ];

// export function CoreValuesSection() {
//   return (
//     <section className="py-32 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-6">
//             <Gem className="w-4 h-4 text-amber-600" />
//             <span className="text-sm font-medium text-amber-700">The 8 Pillars</span>
//           </div>
//           <h2 className="text-5xl font-bold text-gray-900 mb-4">
//             Our Core Values
//           </h2>
//           <p className="text-xl text-gray-600">
//             These principles guide every decision, every solution, and every relationship.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {values.map((value, i) => (
//             <TiltCard key={i}>
//               <div className="group relative h-full">
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity" />
//                 <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border border-gray-100 h-full">
//                   <div className={`w-16 h-16 rounded-2xl bg-${value.color}-50 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
//                     {value.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  
//                   {/* Decorative */}
//                   <div className={`absolute bottom-6 right-6 w-12 h-12 bg-${value.color}-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
//                 </div>
//               </div>
//             </TiltCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// import { BookOpen, CheckCircle, Gem, Lightbulb, ShieldCheck, Sprout, Target, Trophy, Users } from 'lucide-react';
// import { TiltCard } from './TiltCard';

// const values = [
//   { icon: Users, title: "Customer Centricity", description: "Your challenges become our challenges. Your success becomes our story." },

//   { icon: ShieldCheck, title: "Peace of Mind", description: "Sleep well. We handle the complexity while you focus on growth." },

//   { icon: Lightbulb, title: "Innovative & Simplified Solutions", description: "Complex problems deserve elegant solutions. We make the complicated simple." },

//   { icon: Sprout, title: "Value, Respect & Growth for Talents", description: "Our team isn't just talent. They're family. Their growth is our growth." },

//   { icon: BookOpen, title: "Continuous Learning", description: "In technology, standing still is falling behind. We're forever students." },

//   { icon: CheckCircle, title: "Responsibility with Accountability & Transparency", description: "We own our promises. Every. Single. One." },

//   { icon: Target, title: "Right Product, Right Solutions, Right Value Proposition", description: "Not what we have. What you need. There's a difference." },

//   { icon: Trophy, title: "Work with Integrity & Result Oriented for Future", description: "Ethics aren't optional. Results aren't negotiable." },
// ];

// export function CoreValuesSection() {
//   return (
//     <section className="py-32 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-6">
        
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 rounded-full mb-6">
//             <Gem className="w-4 h-4 text-pink-600" />
//             <span className="text-sm font-medium text-gray-700">The 8 Pillars</span>
//           </div>

//           <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
//             Our Core Values
//           </h2>

//           <p className="text-xl text-gray-600">
//             These principles guide every decision, every solution, and every relationship.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {values.map((value, i) => (
//             <TiltCard key={i}>
//               <div className="group relative h-full">

//                 {/* Gradient Glow */}
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

//                 {/* Card */}
//                 <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border border-transparent group-hover:border-pink-300 h-full">

//                   {/* Icon */}
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
//                    <value.icon className="w-8 h-8" />
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">
//                     {value.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {value.description}
//                   </p>

//                   {/* Decorative Gradient Circle */}
//                   <div className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div>

//               </div>
//             </TiltCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import { BookOpen, CheckCircle, Gem, Lightbulb, ShieldCheck, Sprout, Target, Trophy, Users } from 'lucide-react';
import { TiltCard } from './TiltCard';

// const values = [
//   { icon: Users, title: "Customer Centricity", description: "Your challenges become our challenges. Your success becomes our story." },
//   { icon: ShieldCheck, title: "Peace of Mind", description: "Sleep well. We handle the complexity while you focus on growth." },
//   { icon: Lightbulb, title: "Complex to Simplified Solutions", description: "Complex problems deserve elegant solutions. We make the complicated simple." },
//   { icon: Sprout, title: "Value, Respect & Growth for Talents", description: "Our team isn't just talent. They're family. Their growth is our growth." },
//   { icon: BookOpen, title: "Continuous Learning", description: "In technology, standing still is falling behind. We're forever students." },
//   { icon: CheckCircle, title: "Responsibility with Accountability & Transparency", description: "We own our promises. Every. Single. One." },
//   { icon: Target, title: "Right Product, Right Solutions, Right Value Proposition", description: "Not what we have. What you need. There's a difference." },
//   { icon: Trophy, title: "Work with Integrity, Commitment & Result oriented", description: "Ethics aren't optional. Results aren't negotiable." },
// ];

const values = [
  { icon: Users, title: "Customer Centricity",  },
  { icon: ShieldCheck, title: "Peace Of Mind", },
  { icon: Lightbulb, title: "Complex To Simplified Solutions",  },
  { icon: Sprout, title: "Value, Respect & Growth For Talents",   },
  { icon: BookOpen, title: "Continuous Learning",  },
  { icon: CheckCircle, title: "Responsibility With Accountability & Transparency",  },
  { icon: Target, title: "Right Product, Right Solutions, Right Value Proposition", },
  { icon: Trophy, title: "Work With Integrity, Commitment & Result Oriented",  },
];

export function CoreValuesSection() {
  return (
    <section className="py-32 bg-[#FAE251]">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full mb-6 shadow">
            <Gem className="w-4 h-4 text-[#E11D48]" />
            <span className="text-sm font-medium text-gray-800">The 8 Pillars</span>
          </div>

         <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-orange-500 to-blue-600 bg-clip-text text-transparent">
        Our Core Values
      </h2>

          <p className="text-lg text-gray-800">
            These Principles Guide Every Decision, Every Solution, And Every Relationship.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <TiltCard key={i}>
              <div className="group relative h-full">

                {/* Gradient Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E11D48] via-[#FACC15] to-[#2563EB] rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition duration-500" />

                {/* Card */}
                <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-white/50 group-hover:border-white h-full">

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#E11D48] via-[#FACC15] to-[#2563EB] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <value.icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>

                  {/* Description */}
                  {/* <p className="text-gray-700 text-sm leading-relaxed">
                    {value.description}
                  </p> */}

                  {/* Decorative Circle */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-[#E11D48] via-[#FACC15] to-[#2563EB] rounded-full opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
                </div>

              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}