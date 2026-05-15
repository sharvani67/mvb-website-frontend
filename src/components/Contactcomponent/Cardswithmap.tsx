// import { MapPin, Phone, Clock } from "lucide-react";
// import SectionWrapper from "@/components/SectionWrapper";

// const contactMethods = [
//   {
//     label: "Office Address",
//     value: "MV Business Solutions Pvt Ltd.",
//     desc: "P.N. Shetty Complex, Akshaya Vana, Akshayanagar, Bengaluru, Karnataka",
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

// const colorMap: any = {
//   red: "#E11D48",
//   magenta: "#C026D3",
//   orange: "#F97316",
//   yellow: "#FACC15",
//   green: "#22C55E",
//   blue: "#2563EB",
//   cyan: "#06B6D4",
// };

// export default function Cardswithmap() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4 lg:px-8">

//         {/* 2 Column Layout */}
//         <div className="grid lg:grid-cols-2 gap-12 items-stretch">

//           {/* LEFT SIDE - CONTACT CARDS */}
//           <div className="h-full flex flex-col justify-between">
//             <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 h-full">

//               {contactMethods.map((item, i) => {
//                 const Icon = item.icon;
//                 const color = colorMap[item.color];

//                 return (
//                   <SectionWrapper key={item.label} delay={i * 100}>
//                     <div className="group h-full transition-all duration-500 hover:-translate-y-3 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl flex flex-col justify-between">

//                       {/* Top Content */}
//                       <div>
//                         {/* Icon */}
//                         <div
//                           className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center shadow-md transition-all duration-500 group-hover:scale-110"
//                           style={{ background: `${color}15` }}
//                         >
//                           <Icon size={26} style={{ color }} />
//                         </div>

//                         {/* Title */}
//                         <h3 className="text-md font-semibold text-gray-800 mb-1">
//                           {item.label}
//                         </h3>

//                         {/* Highlight */}
//                         <p
//                           className="font-semibold text-base mb-1"
//                           style={{ color }}
//                         >
//                           {item.value}
//                         </p>

//                         {/* Description */}
//                         <p className="text-sm text-gray-500 leading-relaxed">
//                           {item.desc}
//                         </p>
//                       </div>

//                       {/* Bottom Accent */}
//                       <div
//                         className="w-0 group-hover:w-10 h-[2px] mt-4 transition-all duration-500"
//                         style={{ background: color }}
//                       ></div>

//                     </div>
//                   </SectionWrapper>
//                 );
//               })}

//             </div>
//           </div>

//           {/* RIGHT SIDE - GOOGLE MAP */}
//           <div className="w-full h-full min-h-[450px] lg:min-h-[520px] rounded-2xl overflow-hidden shadow-lg">
//             <iframe
//               title="Google Map"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6194194662785!2d77.6134774735871!3d12.867840117147663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b2f749b10e7%3A0x8fad47fa07dc98d3!2sP.N.Shetty%20Complex!5e0!3m2!1sen!2sin!4v1777290666154!5m2!1sen!2sin"
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="w-full h-full"
//             />
//           </div>

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
    color: "#2563EB", // blue
  },
  {
    label: "Call Us",
    value: "+91 96865 21214",
    desc: "Monday - Saturday: 9AM - 6PM | Sunday: Closed",
    icon: Phone,
    color: "#22C55E", // green
  },
  {
    label: "Working Hours",
    value: "Open Today",
    desc: "09:00 AM – 06:00 PM  ",
    icon: Clock,
    color: "#C026D3", // magenta
  },
];

export default function Cardswithmap() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">

        {/* 35% / 65% Layout */}
        <div className="grid lg:grid-cols-[35%_65%] gap-10 items-stretch">

          {/* LEFT SIDE - CARDS (35%) */}
          <div className="h-full flex flex-col justify-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8">

              {contactMethods.map((item, i) => {
                const Icon = item.icon;

                return (
                  <SectionWrapper key={item.label} delay={i * 100}>
                    <div className="group transition-all duration-500 hover:-translate-y-2 rounded-2xl p-[1px] 
                      bg-gradient-to-r from-pink-200 via-yellow-200 to-blue-200">

                      {/* Inner Card */}
                      <div className="h-full bg-gradient-to-r from-rose-50 via-yellow-50 to-blue-50 
                        rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-md hover:shadow-xl transition-all duration-500">

                        {/* Icon */}
                        <div
                          className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center shadow"
                          style={{ background: `${item.color}15` }}
                        >
                          <Icon size={26} style={{ color: item.color }} />
                        </div>

                        {/* Title */}
                        <h3 className="text-md font-semibold text-gray-800 mb-1">
                          {item.label}
                        </h3>

                        {/* Value */}
                        <p className="font-semibold text-base mb-1 text-gray-900">
                          {item.value}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>

                      </div>
                    </div>
                  </SectionWrapper>
                );
              })}

            </div>
          </div>

          {/* RIGHT SIDE - MAP (65%) */}
          <div className="w-full h-full min-h-[450px] lg:min-h-[520px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6194194662785!2d77.6134774735871!3d12.867840117147663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b2f749b10e7%3A0x8fad47fa07dc98d3!2sP.N.Shetty%20Complex!5e0!3m2!1sen!2sin!4v1777290666154!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}