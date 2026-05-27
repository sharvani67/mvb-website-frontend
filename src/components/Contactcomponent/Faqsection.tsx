// // components/ContactCompo/FaqAccordion.tsx
// import { useState } from 'react';
// import { ArrowRight } from 'lucide-react';
// import SectionWrapper from '@/components/SectionWrapper';

// const faqs = [
//   { q: 'Where is Head office Located?', a: 'We are HQ is Bangalore and our services are available in Bangalore, Hyderabad, Chennai and Mumbai.' },
//   { q: 'Why should we look at MV?', a: 'We are client centric for innovative, needed and adaptive technologies. We focus on understanding your business needs with Experienced, skilled & Certified team. Project Management for quality & timely deliveries.' },
//   { q: 'Do you consultancy, Design and Integration?', a: 'Yes we provide all the 3 services for Data Cabling/ICT, Networks and Security, Complete IT Infrastructure.' },
//   { q: 'What is your standard response time?', a: 'We offer Next Business Day Services, if needed we take remote and telephonic support in the same day.' },
// ];

// export default function Faqsection() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   return (
//     <section className="py-28 relative overflow-hidden">
//       <div className="absolute left-0 top-0 w-[400px] h-[400px] rounded-full bg-mv-magenta/5 blur-[80px]" />
//       <div className="container mx-auto px-4 lg:px-8">
//         <SectionWrapper>
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-black text-foreground mb-4">Frequently Asked Questions</h2>
//             <p className="text-muted-foreground max-w-lg mx-auto">Quick answers to common questions about our services</p>
//           </div>
//         </SectionWrapper>
//         <div className="max-w-2xl mx-auto space-y-4">
//           {faqs.map((faq, i) => (
//             <SectionWrapper key={i} delay={i * 80}>
//               <div
//                 className="rounded-2xl glass-premium premium-card overflow-hidden cursor-pointer"
//                 onClick={() => setOpenFaq(openFaq === i ? null : i)}
//               >
//                 <div className="flex items-center justify-between p-6">
//                   <h4 className="font-semibold text-foreground pr-4">{faq.q}</h4>
//                   <ArrowRight size={18} className={`text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-90' : ''}`} />
//                 </div>
//                 <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
//                   <p className="text-sm text-muted-foreground px-6 pb-6 leading-relaxed">{faq.a}</p>
//                 </div>
//               </div>
//             </SectionWrapper>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





import { useState } from "react";
import { Plus, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Where Is Head Office Located?",
    a: "Our HQ Is In Bangalore And Our Services Are Available In Bangalore, Hyderabad, Chennai And Mumbai.",
  },
  {
    q: "Why Should We Look At MV?",
    a: "We Are Client Centric For Innovative, Needed And Adaptive Technologies. We Focus On Understanding Your Business Needs With Experienced, Skilled & Certified Team. Project Management For Quality & Timely Deliveries.",
  },
  {
    q: "Do You Provide Consultancy, Design And Integration?",
    a: "Yes, We Provide All Services Including Data Cabling/ICT, Networks, Security & Complete IT Infrastructure.",
  },
  {
    q: "What Is Your Standard Response Time?",
    a: "We Offer Next Business Day Services. Same-Day Support Is Available Via Remote & Telephonic Assistance.",
  },
];

export default function Faqsection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-28 bg-[#f9fafb] overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

      {/* Gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="relative container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[3px] text-yellow-500 font-semibold mb-6">
            GOT QUESTIONS?
          </p>

          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h1>

          <p className="text-gray-500 mt-4">
            Quick Answers To Common Questions About Our Services
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="group bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* Question */}
              <div className="flex items-center justify-between px-6 py-5">
                
                {/* Gradient on hover */}
                <h4 className="font-semibold text-gray-800 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:via-yellow-400 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent">
                  {item.q}
                </h4>

                {/* Icon */}
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-100">
                  <Plus
                    size={18}
                    className={`text-pink-600 transition-transform duration-300 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="flex justify-center mt-16">
  <button
    className="group flex items-center gap-4 px-6 py-3 rounded-full 
    border border-pink-200 
    bg-white/60 backdrop-blur-md
    hover:shadow-md transition-all duration-300"
  >
    
    <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent font-medium">
      Still Have Questions?
    </span>

  
    <span className="flex items-center justify-center w-8 h-8 rounded-full 
      bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white">
      →
    </span>


    <span className="text-gray-600 font-medium">
      Contact Our Team
    </span>
  </button>
    </div> */}

    <div className="flex justify-center mt-16">
  <button
    onClick={() => {
      document
        .getElementById("contact-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }}
    className="group flex items-center gap-4 px-6 py-3 rounded-full 
    border border-pink-200 
    bg-white/60 backdrop-blur-md
    hover:shadow-md transition-all duration-300"
  >
    <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent font-medium">
      Still Have Questions?
    </span>

    <span
      className="flex items-center justify-center w-8 h-8 rounded-full 
      bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white
      group-hover:translate-x-1 transition-transform duration-300"
    >
      →
    </span>

    <span className="text-gray-600 font-medium">
      Contact Our Team
    </span>
  </button>
    </div>

      </div>
    </section>
  );
}