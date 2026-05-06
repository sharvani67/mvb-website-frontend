// import { useState } from 'react';
// import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Shield, Globe, ArrowRight, MessageSquare, Calendar, Headphones } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import SectionWrapper from '@/components/SectionWrapper';
// import NetworkBackground from '@/components/NetworkBackground';
// import { z } from 'zod';
// import datacenterImg from '@/assets/hero-datacenter.jpg';
// import GoogleMapSection from '@/components/ContactCompo/GoogleMapSection';
// import { Users } from "lucide-react";
// import SupportPage from '@/components/ContactCompo/SupportPage';
// import FaqPage from '@/components/ContactCompo/FaqPage';
// import ContactSection from '@/components/ContactCompo/ContactSection';

import ContactSection from "@/components/Contactcomponent/ContactSection";
import SupportPage from "@/components/Contactcomponent/SupportPage";
import ContactHero from "@/components/Contactcomponent/ContactHero";
import ContactMethods from "@/components/Contactcomponent/ContactMethods";
import Faqsection from "@/components/Contactcomponent/Faqsection";
import GoogleMapFullWidth from "@/components/Contactcomponent/GoogleMapFullWidth";
import Cardswithmap from "@/components/Contactcomponent/Cardswithmap";

// const contactSchema = z.object({
//   name: z.string().trim().min(1, 'Name is required').max(100),
//   email: z.string().trim().email('Invalid email address').max(255),
//   company: z.string().trim().max(100).optional(),
//   phone: z.string().trim().max(20).optional(),
//   message: z.string().trim().min(1, 'Message is required').max(2000),
// });

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

// const supportFeatures = [
//   { 
//   icon: Users, 
//   title: 'Client-Centric Approach', 
//   desc: 'We tailor every solution to match your unique business goals and growth plans.', 
//   color: 'green' as const 
// },
//   { icon: Shield, title: 'Secure Communication', desc: 'All communications are encrypted and confidential.', color: 'magenta' as const },
//   { icon: Globe, title: 'Global Reach', desc: 'Supporting clients across 15+ countries.', color: 'green' as const },
//   { icon: Headphones, title: 'Dedicated Support', desc: 'Personalized account manager for every client.', color: 'blue' as const },
// ];

// const faqs = [
//   { q: 'Where is Head office Located?', a: 'We are HQ is Bangalore and our services are available in Bangalore, Hyderabad, Chennai and Mumbai.' },
//   { q: 'Why should we look at MV?', a: 'We are client centric for innovative, needed and adaptive technologies. We focus on understanding your business needs with Experienced, skilled & Certified team. Project Management for quality & timely deliveries. ' },
//   { q: 'Do you consultancy, Design and Integration?', a: 'Yes we provide all the 3 services for Data Cabling/ICT, Networks and Security, Complete IT Infrastructure.' },
//   { q: 'What is your standard response time?', a: 'We offer Next Business Day Services, if needed we take remote and telephonic support in the same day.' },
// ];

// const bgMap = { blue: 'bg-mv-blue/10', magenta: 'bg-mv-magenta/10', green: 'bg-mv-green/10' };
// const textMap = { blue: 'text-mv-blue', magenta: 'text-mv-magenta', green: 'text-mv-green' };
// const borderMap = { blue: 'border-mv-blue/20', magenta: 'border-mv-magenta/20', green: 'border-mv-green/20' };

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const result = contactSchema.safeParse(form);
//     if (!result.success) {
//       const fieldErrors: Record<string, string> = {};
//       result.error.errors.forEach(err => {
//         if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
//       });
//       setErrors(fieldErrors);
//       return;
//     }
//     setErrors({});
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setSubmitted(true);
//     }, 1500);
//   };

//   return (
//     <>
      
      

//     <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden text-white mt-4">

//   {/* Background Image */}
//   <div
//     className="absolute inset-0 bg-cover bg-center"
//     style={{
//       backgroundImage: `url("https://i.pinimg.com/1200x/bd/4e/19/bd4e190799cc452420811bfeab994ea4.jpg")`,
//     }}
//   />

//   {/* Bright Gradient Overlay (Same as First Section) */}
//   <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 via-yellow-400/70 to-blue-600/80" />

//   {/* Optional animated network background */}
//   <NetworkBackground />

//   {/* Content */}
//   <div className="container mx-auto px-4 lg:px-8 relative z-10">
//     <SectionWrapper>
//       <div className="text-center max-w-3xl mx-auto">

//         <span className="text-xs uppercase tracking-widest text-white font-semibold mb-6 block">
//           Contact Us
//         </span>

//         <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-[0.95]">
//           Let's Build{" "}
//           <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
//             Together
//           </span>
//         </h1>

//         <p className="text-xl text-white/90 leading-relaxed">
//           Ready to transform your IT infrastructure? Get in touch.
//         </p>

//         <p className="text-sm text-white/80 leading-relaxed mt-6 max-w-2xl mx-auto">
//           Let us tailor a service package that meets your needs.
//           Tell us a little about your business, and we will get back to you
//           with some ideas as soon as possible.
//         </p>

//       </div>
//     </SectionWrapper>
//   </div>

// </section>


//       {/* Contact Methods */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-6">
//             {contactMethods.map((item, i) => (
//               <SectionWrapper key={item.label} delay={i * 100}>
//                 <div className={`p-8 rounded-2xl glass-premium premium-card text-center h-full border-t-2 ${borderMap[item.color]}`}>
//                   <div className={`w-14 h-14 rounded-xl ${bgMap[item.color]} flex items-center justify-center mx-auto mb-5`}>
//                     <item.icon size={24} className={textMap[item.color]} />
//                   </div>
//                   <h3 className="font-bold text-foreground mb-1">{item.label}</h3>
//                   <p className={`${textMap[item.color]} font-semibold mb-1`}>{item.value}</p>
//                   <p className="text-xs text-muted-foreground">{item.desc}</p>
//                 </div>
//               </SectionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>


// {/* ================= FULL WIDTH MAP SECTION ================= */}
//   {/* <section className="w-full">
//   <div className="w-full h-[500px]">
//     <iframe
//       title="Google Map"
//       width="100%"
//       height="100%"
//       style={{ border: 0 }}
//       src="https://www.google.com/maps?q=17.3850,78.4867&z=15&output=embed"
//       allowFullScreen
//     />
//   </div>
//   </section> */}


//     <section className="w-full">
//   <div className="w-full h-[500px]">
//     <iframe
//       title="Google Map"
//       width="100%"
//       height="100%"
//       style={{ border: 0 }}
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6194194662785!2d77.6134774735871!3d12.867840117147663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b2f749b10e7%3A0x8fad47fa07dc98d3!2sP.N.Shetty%20Complex!5e0!3m2!1sen!2sin!4v1777290666154!5m2!1sen!2sin"
//       allowFullScreen
//       loading="lazy"
//       referrerPolicy="no-referrer-when-downgrade"
//     />
//   </div>
//   </section>

//     {/* <ContactSection /> */}

//   <div id="contact-form">
//   <ContactSection />
// </div>
      

//      <SupportPage />
//       <FaqPage />

//     </>
//   );
// }







// pages/Contact.tsx or app/contact/page.tsx
// import ContactHero from '@/components/ContactCompo/ContactHero';
// import ContactMethods from '@/components/ContactCompo/ContactMethods';
// import GoogleMapFullWidth from '@/components/ContactCompo/GoogleMapFullWidth';
// import ContactSection from '@/components/ContactCompo/ContactSection';
// import SupportPage from '@/components/ContactCompo/SupportPage';
// import FaqPage from '@/components/ContactCompo/FaqPage';

export default function Contact() {
  return (
    <>
      <ContactHero />
       <div id="contact-form">
        <ContactSection />
      </div>
      {/* <ContactMethods /> */}
      {/* <GoogleMapFullWidth /> */}
     <Cardswithmap />
      {/* <SupportPage /> */}
      <Faqsection />
    </>
  );
}