// // components/ContactCompo/ContactMethods.tsx
// import { MapPin, Phone, Clock } from 'lucide-react';
// import SectionWrapper from '@/components/SectionWrapper';

// const contactMethods = [
//   {
//     label: "Office Address",
//     value: "MV Business Solutions Pvt Ltd.",
//     desc: "P.N.Shetty Complex, Akshaya Vana, Akshayanagar, Bengaluru, Karnataka",
//     icon: MapPin,
//     color: "blue",
//   },
//   {
//     label: "Call Us",
//     value: "+91 96865 21214",
//     desc: "Monday - Saturday: 9am - 5pm | Sunday: Closed",
//     icon: Phone,
//     color: "green",
//   },
//   {
//     label: "Working Hours",
//     value: "Open Today",
//     desc: "09:00 am – 05:00 pm",
//     icon: Clock,
//     color: "magenta",
//   },
// ];

// const bgMap = { blue: 'bg-mv-blue/10', magenta: 'bg-mv-magenta/10', green: 'bg-mv-green/10' };
// const textMap = { blue: 'text-mv-blue', magenta: 'text-mv-magenta', green: 'text-mv-green' };
// const borderMap = { blue: 'border-mv-blue/20', magenta: 'border-mv-magenta/20', green: 'border-mv-green/20' };

// export default function ContactMethods() {
//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="grid md:grid-cols-3 gap-6">
//           {contactMethods.map((item, i) => (
//             <SectionWrapper key={item.label} delay={i * 100}>
//               <div className={`p-8 rounded-2xl glass-premium premium-card text-center h-full border-t-2 ${borderMap[item.color]}`}>
//                 <div className={`w-14 h-14 rounded-xl ${bgMap[item.color]} flex items-center justify-center mx-auto mb-5`}>
//                   <item.icon size={24} className={textMap[item.color]} />
//                 </div>
//                 <h3 className="font-bold text-foreground mb-1">{item.label}</h3>
//                 <p className={`${textMap[item.color]} font-semibold mb-1`}>{item.value}</p>
//                 <p className="text-xs text-muted-foreground">{item.desc}</p>
//               </div>
//             </SectionWrapper>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




// // components/ContactCompo/ContactMethods.tsx
// import { MapPin, Phone, Clock } from 'lucide-react';
// import SectionWrapper from '@/components/SectionWrapper';

// const contactMethods = [
//   {
//     label: "Office Address",
//     value: "MV Business Solutions Pvt Ltd.",
//     desc: "P.N.Shetty Complex, Akshaya Vana, Akshayanagar, Bengaluru, Karnataka",
//     icon: MapPin,
//     color: "#2563EB", // Blue
//   },
//   {
//     label: "Call Us",
//     value: "+91 96865 21214",
//     desc: "Monday - Saturday: 9am - 5pm | Sunday: Closed",
//     icon: Phone,
//     color: "#22C55E", // Green
//   },
//   {
//     label: "Working Hours",
//     value: "Open Today",
//     desc: "09:00 am – 05:00 pm",
//     icon: Clock,
//     color: "#C026D3", // Magenta
//   },
// ];

// export default function ContactMethods() {
//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="grid md:grid-cols-3 gap-10 text-center">

//           {contactMethods.map((item, i) => (
//             <SectionWrapper key={item.label} delay={i * 100}>
              
//               <div className="flex flex-col items-center">

//                 {/* Icon Highlight */}
//                 <div
//                   className="w-16 h-16 flex items-center justify-center rounded-full border-2 mb-4 transition-all duration-300 hover:scale-110"
//                   style={{ borderColor: item.color }}
//                 >
//                   <item.icon size={28} style={{ color: item.color }} />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                   {item.label}
//                 </h3>

//                 {/* Value */}
//                 <p
//                   className="font-semibold mb-1"
//                   style={{ color: item.color }}
//                 >
//                   {item.value}
//                 </p>

//                 {/* Description */}
//                 <p className="text-sm text-gray-500 max-w-xs">
//                   {item.desc}
//                 </p>

//               </div>

//             </SectionWrapper>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }






import { MapPin, Phone, Clock } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const contactMethods = [
  {
    label: "Office Address",
    value: "MV Business Solutions Pvt Ltd.",
    desc: "P.N. Shetty Complex, Akshaya Vana, Akshayanagar, Bengaluru, Karnataka",
    icon: MapPin,
    color: "blue",
  },
  {
    label: "Call Us",
    value: "+91 96865 21214",
    desc: "Monday - Saturday: 9AM - 6PM | Sunday: Closed",
    icon: Phone,
    color: "green",
  },
  {
    label: "Working Hours",
    value: "Open Today",
    desc: "09:00 AM – 06:00 PM  ",
    icon: Clock,
    color: "magenta",
  },
];

// Color mappings (your palette)
const colorMap = {
  red: "#E11D48",
  magenta: "#C026D3",
  orange: "#F97316",
  yellow: "#FACC15",
  green: "#22C55E",
  blue: "#2563EB",
  cyan: "#06B6D4",
};

export default function ContactMethods() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {contactMethods.map((item, i) => {
            const Icon = item.icon;
            const color = colorMap[item.color];

            return (
              <SectionWrapper key={item.label} delay={i * 100}>
                <div className="group transition-all duration-500 hover:-translate-y-3">

                  {/* Icon */}
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `${color}15`,
                    }}
                  >
                    <Icon size={28} style={{ color }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.label}
                  </h3>

                  {/* Highlight Text */}
                  <p
                    className="font-semibold text-lg mb-1"
                    style={{ color }}
                  >
                    {item.value}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bottom Accent Line */}
                  <div
                    className="w-0 group-hover:w-12 h-[2px] mx-auto mt-4 transition-all duration-500"
                    style={{ background: color }}
                  ></div>

                </div>
              </SectionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}