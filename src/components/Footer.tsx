// import { Link } from 'react-router-dom';
// import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';

// export default function Footer() {
//   return (
//     <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
//       <div className="absolute top-0 left-0 right-0 h-px gradient-brand" />
      
//       {/* Newsletter Section */}
//       <div className="border-b border-border">
//         <div className="container mx-auto px-4 lg:px-8 py-16">
//           <div className="grid lg:grid-cols-2 gap-8 items-center">
//             <div>
//               <h3 className="text-2xl font-black text-foreground mb-2">Stay Ahead of the Curve</h3>
//               <p className="text-muted-foreground">Get insights on IT infrastructure trends, security updates, and exclusive offers.</p>
//             </div>
//             <div className="flex gap-3">
//               <Input placeholder="Enter your email" className="h-12 flex-1" />
//               <Button className="gradient-brand text-white border-0 h-12 px-6 magnetic-btn">
//                 Subscribe <ArrowRight size={16} />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center">
//                 <span className="text-sm font-black text-white">MV</span>
//               </div>
//               <div>
//                 <span className="font-bold text-lg text-foreground block leading-tight">MV Branding</span>
//                 <span className="text-xs text-muted-foreground">Strategy 2026–2028</span>
//               </div>
//             </div>
//             <p className="text-sm text-muted-foreground leading-relaxed mb-4">
//               Customer Centricity with Peace of Mind. Building Data Cabling & Data Security as the Strategic Core for enterprise transformation.
//             </p>
//             <div className="flex gap-2">
//               {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
//                 <a key={i} href="#" className="p-2.5 rounded-xl bg-muted hover:gradient-brand text-muted-foreground hover:text-white transition-all duration-300">
//                   <Icon size={16} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-bold text-foreground mb-5">Quick Links</h4>
//             <div className="flex flex-col gap-3">
//               {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/values', 'Core Values'], ['/brand', 'Brand Philosophy'], ['/contact', 'Contact']].map(([path, label]) => (
//                 <Link key={path} to={path} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
//                   <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-bold text-foreground mb-5">Services</h4>
//             <div className="flex flex-col gap-3 text-sm text-muted-foreground">
//               {['Data Cabling Infrastructure', 'Data Security Solutions', 'End-to-End IT Deployment', 'Strategic IT Core Development', 'IT Consulting', 'Cloud Solutions'].map(service => (
//                 <Link key={service} to="/services" className="hover:text-primary transition-colors flex items-center gap-1 group">
//                   <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
//                   {service}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-bold text-foreground mb-5">Contact</h4>
//             <div className="flex flex-col gap-4 text-sm text-muted-foreground">
//               <div className="flex items-start gap-3">
//                 <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <Mail size={14} className="text-primary" />
//                 </div>
//                 <div>
//                   <div className="text-xs text-muted-foreground">Email</div>
//                   <span className="text-foreground font-medium">venkatesh@mvbsolutions.com</span>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <Phone size={14} className="text-primary" />
//                 </div>
//                 <div>
//                   <div className="text-xs text-muted-foreground">Phone</div>
//                   <span className="text-foreground font-medium">+919686521214</span>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <MapPin size={14} className="text-primary" />
//                 </div>
//                 <div>
//                   <div className="text-xs text-muted-foreground">Address</div>
//                   <span className="text-foreground font-medium">P.N.Shetty Complex, Akshaya Vana, Akshayanagar, Bengaluru, Karnataka.</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-muted-foreground">
//             © {new Date().getFullYear()} MV Branding Strategy. All rights reserved.
//           </p>
//           <div className="flex gap-6 text-sm text-muted-foreground">
//             <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
//             <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
//             <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }





// import { Link } from 'react-router-dom';
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Linkedin,
//   Twitter,
//   Facebook,
//   Instagram,
//   ArrowRight
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import logo from '@/assets/logg.png';

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden">

//       {/* 🌈 Soft Gradient Background from Logo */}
//       <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100" />

//       {/* ✨ Glow Effects */}
//       <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-400/20 blur-3xl rounded-full" />
//       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/20 blur-3xl rounded-full" />

//       {/* 🔥 Top Border Gradient */}
//       <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500" />

//       {/* ================= NEWSLETTER ================= */}
//       <div className="relative border-b border-white/30 backdrop-blur-xl">
//         <div className="container mx-auto px-4 lg:px-8 py-16">
//           <div className="grid lg:grid-cols-2 gap-8 items-center">

//             <div>
//               <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
//                 Stay Ahead of the Curve 🚀
//               </h3>
//               <p className="text-gray-600 text-lg">
//                 Insights on IT infrastructure, security updates & exclusive offers.
//               </p>
//             </div>

//             <div className="flex gap-3">
//               <Input
//                 placeholder="Enter your email"
//                 className="h-12 flex-1 bg-white/80 backdrop-blur-md border border-white/40 shadow-sm"
//               />
//               <Button className="bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white h-12 px-6 shadow-lg hover:scale-105 transition-all">
//                 Subscribe <ArrowRight size={16} />
//               </Button>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ================= MAIN FOOTER ================= */}
//       <div className="relative container mx-auto px-4 lg:px-8 py-16">

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

//           {/* BRAND */}
//           <div>
//             <img
//               src={logo}
//               alt="MV Branding"
//               className="h-24 w-auto drop-shadow-xl mb-4"
//             />

//             <p className="text-sm text-gray-600 leading-relaxed mb-6">
//               Customer Centricity with Peace of Mind. Building Data Cabling & Data Security as the Strategic Core for enterprise transformation.
//             </p>

//             {/* 🌍 SOCIAL MEDIA (ORIGINAL COLORS) */}
//             <div className="flex gap-3">

//               <a className="p-3 rounded-xl bg-white shadow-md hover:scale-110 transition">
//                 <Linkedin size={18} className="text-[#0077B5]" />
//               </a>

//               <a className="p-3 rounded-xl bg-white shadow-md hover:scale-110 transition">
//                 <Twitter size={18} className="text-[#1DA1F2]" />
//               </a>

//               <a className="p-3 rounded-xl bg-white shadow-md hover:scale-110 transition">
//                 <Facebook size={18} className="text-[#1877F2]" />
//               </a>

//               <a className="p-3 rounded-xl bg-white shadow-md hover:scale-110 transition">
//                 <Instagram size={18} className="text-[#E4405F]" />
//               </a>

//             </div>
//           </div>

//           {/* QUICK LINKS */}
//           <div>
//             <h4 className="font-bold text-gray-900 mb-5 text-lg">Quick Links</h4>
//             <div className="flex flex-col gap-3">
//               {[
//                 ['/', 'Home'],
//                 ['/about', 'About Us'],
//                 ['/services', 'Services'],
//                 ['/values', 'Core Values'],
//                 ['/brand', 'Brand Philosophy'],
//                 ['/contact', 'Contact']
//               ].map(([path, label]) => (
//                 <Link
//                   key={path}
//                   to={path}
//                   className="text-sm text-gray-600 hover:text-pink-500 transition flex items-center gap-2 group"
//                 >
//                   <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition" />
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* SERVICES */}
//           <div>
//             <h4 className="font-bold text-gray-900 mb-5 text-lg">Services</h4>
//             <div className="flex flex-col gap-3 text-sm text-gray-600">
//               {[
//                 'Data Cabling Infrastructure',
//                 'Data Security Solutions',
//                 'End-to-End IT Deployment',
//                 'Strategic IT Core Development',
//                 'IT Consulting',
//                 'Cloud Solutions'
//               ].map(service => (
//                 <Link
//                   key={service}
//                   to="/services"
//                   className="hover:text-blue-500 transition flex items-center gap-2 group"
//                 >
//                   <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition" />
//                   {service}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <h4 className="font-bold text-gray-900 mb-5 text-lg">Contact</h4>
//             <div className="flex flex-col gap-5 text-sm text-gray-600">

//               <div className="flex items-start gap-3">
//                 <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center shadow">
//                   <Mail size={16} className="text-pink-500" />
//                 </div>
//                 <div>
//                   <div className="text-xs">Email</div>
//                   <span className="font-medium text-gray-900">venkatesh@mvbsolutions.com</span>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center shadow">
//                   <Phone size={16} className="text-yellow-600" />
//                 </div>
//                 <div>
//                   <div className="text-xs">Phone</div>
//                   <span className="font-medium text-gray-900">+91 9686521214</span>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shadow">
//                   <MapPin size={16} className="text-blue-500" />
//                 </div>
//                 <div>
//                   <div className="text-xs">Address</div>
//                   <span className="font-medium text-gray-900">
//                     P.N. Shetty Complex, Akshayanagar, Bengaluru
//                   </span>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* ================= BOTTOM ================= */}
//         <div className="border-t border-white/40 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

//           <p className="text-sm text-gray-600">
//             © {new Date().getFullYear()} MV Business Solutions. All rights reserved.
//           </p>

//           <div className="flex gap-6 text-sm text-gray-600">
//             <a href="#" className="hover:text-pink-500 transition">Privacy Policy</a>
//             <a href="#" className="hover:text-yellow-500 transition">Terms of Service</a>
//             <a href="#" className="hover:text-blue-500 transition">Cookie Policy</a>
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// }




import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/assets/logg.png';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200" />

      {/* ✨ GLOW EFFECT */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-pink-500/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/30 blur-3xl rounded-full" />

      {/* 🔥 TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500" />

      {/* ================= NEWSLETTER ================= */}
      {/* <div className="relative border-b border-white/40 backdrop-blur-xl">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
                Stay Ahead of the Curve 🚀
              </h3>
              <p className="text-gray-700 text-lg">
                Insights on IT infrastructure, security updates & exclusive offers.
              </p>
            </div>

            <div className="flex gap-3">
              <Input
                placeholder="Enter your email"
                className="h-12 flex-1 bg-white/90 border border-white shadow-md"
              />
              <Button className="bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white h-12 px-6 shadow-xl hover:scale-110 transition-all">
                Subscribe <ArrowRight size={16} />
              </Button>
            </div>

          </div>
        </div>
      </div> */}

      {/* ================= MAIN FOOTER ================= */}
      <div className="relative container mx-auto px-4 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <img
              src={logo}
              alt="MV Branding"
              className="h-36 w-auto drop-shadow-2xl mb-4 ml-12"
            />

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Customer Centricity with Peace of Mind. Building Data Cabling & Data Security as the Strategic Core for enterprise transformation.
            </p>

            {/* 🌍 SOCIAL MEDIA (OFFICIAL COLORS) */}
            <div className="flex gap-3">

           
              <a
                href="#"
                target="_blank"
                className="p-3 rounded-xl bg-[#0077B5] text-white shadow-lg hover:scale-110 hover:shadow-[0_0_15px_rgba(0,119,181,0.6)] transition"
              >
                <Linkedin size={18} />
              </a>

     
              <a
                href="#"
                target="_blank"
                className="p-3 rounded-xl bg-[#1DA1F2] text-white shadow-lg hover:scale-110 hover:shadow-[0_0_15px_rgba(29,161,242,0.6)] transition"
              >
                <Twitter size={18} />
              </a>

           
              <a
                href="#"
                target="_blank"
                className="p-3 rounded-xl bg-[#1877F2] text-white shadow-lg hover:scale-110 hover:shadow-[0_0_15px_rgba(24,119,242,0.6)] transition"
              >
                <Facebook size={18} />
              </a>

             
              <a
                href="#"
                target="_blank"
                className="p-3 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-lg hover:scale-110 hover:shadow-[0_0_15px_rgba(236,72,153,0.6)] transition"
              >
                <Instagram size={18} />
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-lg">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/projectpage', 'Projects'],
                ['/oursolution', 'Solutions'],
                ['/whyus', 'Why Us'],
                ['/contact', 'Contact']
              ].map(([path, label]) => (
                <Link
                  key={path}
                  to={path}
                  className="text-sm text-gray-700 hover:text-pink-600 transition flex items-center gap-2 group"
                >
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-lg">Services</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-700">
              {[
                'Data Cabling Infrastructure',
                'Data Security Solutions',
                'End-to-End IT Deployment',
                'Strategic IT Core Development',
                'IT Consulting',
                'Cloud Solutions'
              ].map(service => (
                <Link
                  key={service}
                  to="/services"
                  className="hover:text-blue-600 transition flex items-center gap-2 group"
                >
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition" />
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
      <div>
  <h4 className="font-bold text-gray-900 mb-5 text-lg">Contact</h4>
  <div className="flex flex-col gap-5 text-sm text-gray-700">

    {/* EMAIL */}
    <div className="flex items-start gap-3">
      <div className="w-11 h-11 rounded-xl bg-pink-500 flex items-center justify-center">
        <Mail size={20} className="text-white" />
      </div>
      <div>
        <div className="text-xs">Email</div>
        <span className="font-medium text-gray-900">venkatesh@mvbsolutions.com</span>
      </div>
    </div>

    {/* PHONE */}
    <div className="flex items-start gap-3">
      <div className="w-11 h-11 rounded-xl bg-yellow-500 flex items-center justify-center">
        <Phone size={20} className="text-white" />
      </div>
      <div>
        <div className="text-xs">Phone</div>
        <span className="font-medium text-gray-900">+91 9686521214</span>
      </div>
    </div>

    {/* ADDRESS */}
    <div className="flex items-start gap-3">
      <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">
        <MapPin size={20} className="text-white" />
      </div>
      <div>
        <div className="text-xs">Address</div>
        <span className="font-medium text-gray-900">
          P.N. Shetty Complex, Akshayanagar, Bengaluru
        </span>
      </div>
    </div>

  </div>
      </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-700">
            © {new Date().getFullYear()} MV Business Solutions. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-700">
            <a href="#" className="hover:text-pink-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-600 transition">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition">Cookie Policy</a>
          </div>

        </div>
      </div>
    </footer>
  );
}