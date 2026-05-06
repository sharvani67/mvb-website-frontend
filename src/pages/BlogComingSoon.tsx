// import React from "react";
// import { Clock, Mail, Bell, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const BlogComingSoon = () => {
//   const [email, setEmail] = React.useState("");

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert(`Thank you for subscribing! We'll notify you at ${email}`);
//     setEmail("");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 flex items-center justify-center p-4">
//       <div className="max-w-2xl w-full text-center">
//         {/* Icon */}
//         <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl shadow-lg mb-8 mx-auto">
//           <Clock className="h-10 w-10 text-white" />
//         </div>

//         {/* Title */}
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           <span className="bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
//             Blog Coming Soon
//           </span>
//         </h1>

//         <p className="text-lg text-gray-600 mb-8">
//           We're working on something exciting! Get ready for insightful articles, 
//           expert tips, and the latest trends in real estate.
//         </p>

//         {/* Newsletter */}
//         <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
//           <div className="flex-1 relative">
//             <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//             <Input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="pl-10"
//               required
//             />
//           </div>
//           <Button type="submit" className="bg-gradient-to-r from-pink-500 to-blue-500 whitespace-nowrap">
//             <Bell className="h-4 w-4 mr-2" />
//             Notify Me
//           </Button>
//         </form>

//         {/* Features */}
//         <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
//           <div className="bg-white/60 backdrop-blur rounded-xl p-3">
//             <p className="font-semibold text-sm">📚 Expert Insights</p>
//           </div>
//           <div className="bg-white/60 backdrop-blur rounded-xl p-3">
//             <p className="font-semibold text-sm">📈 Market Trends</p>
//           </div>
//           <div className="bg-white/60 backdrop-blur rounded-xl p-3">
//             <p className="font-semibold text-sm">💡 Investment Tips</p>
//           </div>
//           <div className="bg-white/60 backdrop-blur rounded-xl p-3">
//             <p className="font-semibold text-sm">🏠 Success Stories</p>
//           </div>
//         </div>

//         {/* Back to Home */}
//         <Button 
//           variant="link" 
//           onClick={() => window.location.href = "/"}
//           className="mt-8 text-gray-500"
//         >
//           ← Back to Home
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default BlogComingSoon;




// import React, { useState, useEffect } from "react";
// import { Clock, Mail, Bell, ArrowRight, Calendar, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const BlogComingSoon = () => {
//   const [email, setEmail] = useState("");
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // Set your launch date here (Year, Month (0-11), Day, Hour, Minute, Second)
//   const launchDate = new Date(2026, 4, 15, 0, 0, 0); // May 15, 2026

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = launchDate.getTime() - now;

//       if (distance > 0) {
//         setTimeLeft({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000)
//         });
//       } else {
//         // If launch date has passed
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert(`Thank you for subscribing! We'll notify you at ${email}`);
//     setEmail("");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 flex items-center justify-center p-4">
//       <div className="max-w-2xl w-full text-center">
//         {/* Icon */}
//         <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl shadow-lg mb-8 mx-auto">
//           <Clock className="h-10 w-10 text-white" />
//         </div>

//         {/* Title */}
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           <span className="bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
//             Blog Coming Soon
//           </span>
//         </h1>

//         <p className="text-lg text-gray-600 mb-8">
//           We're working on something exciting! Get ready for insightful articles, 
//           expert tips, and the latest trends in real estate.
//         </p>

//         {/* Countdown Timer */}
//         <div className="mb-8">
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-blue-100 px-4 py-2 rounded-full mb-4">
//             <Calendar className="h-4 w-4 text-pink-500" />
//             <span className="text-sm font-medium text-gray-700">Launching In</span>
//           </div>
          
//           <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
//             <div className="bg-white rounded-xl p-3 shadow-md border border-gray-100">
//               <div className="text-2xl md:text-3xl font-bold text-pink-600">
//                 {String(timeLeft.days).padStart(2, '0')}
//               </div>
//               <div className="text-xs text-gray-500 mt-1">Days</div>
//             </div>
//             <div className="bg-white rounded-xl p-3 shadow-md border border-gray-100">
//               <div className="text-2xl md:text-3xl font-bold text-yellow-600">
//                 {String(timeLeft.hours).padStart(2, '0')}
//               </div>
//               <div className="text-xs text-gray-500 mt-1">Hours</div>
//             </div>
//             <div className="bg-white rounded-xl p-3 shadow-md border border-gray-100">
//               <div className="text-2xl md:text-3xl font-bold text-blue-600">
//                 {String(timeLeft.minutes).padStart(2, '0')}
//               </div>
//               <div className="text-xs text-gray-500 mt-1">Minutes</div>
//             </div>
//             <div className="bg-white rounded-xl p-3 shadow-md border border-gray-100">
//               <div className="text-2xl md:text-3xl font-bold text-green-600">
//                 {String(timeLeft.seconds).padStart(2, '0')}
//               </div>
//               <div className="text-xs text-gray-500 mt-1">Seconds</div>
//             </div>
//           </div>
//         </div>

//         {/* Newsletter */}
//         <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
//           <div className="flex-1 relative">
//             <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//             <Input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="pl-10"
//               required
//             />
//           </div>
//           <Button type="submit" className="bg-gradient-to-r from-pink-500 to-blue-500 whitespace-nowrap">
//             <Bell className="h-4 w-4 mr-2" />
//             Notify Me
//           </Button>
//         </form>

//         {/* Features */}
//         <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
//           <div className="bg-white/60 backdrop-blur rounded-xl p-3 hover:shadow-md transition-shadow">
//             <p className="font-semibold text-sm">📚 Expert Insights</p>
//           </div>
//           <div className="bg-white/60 backdrop-blur rounded-xl p-3 hover:shadow-md transition-shadow">
//             <p className="font-semibold text-sm">📈 Market Trends</p>
//           </div>
//           <div className="bg-white/60 backdrop-blur rounded-xl p-3 hover:shadow-md transition-shadow">
//             <p className="font-semibold text-sm">💡 Investment Tips</p>
//           </div>
//           <div className="bg-white/60 backdrop-blur rounded-xl p-3 hover:shadow-md transition-shadow">
//             <p className="font-semibold text-sm">🏠 Success Stories</p>
//           </div>
//         </div>

//         {/* Back to Home */}
//         <Button 
//           variant="link" 
//           onClick={() => window.location.href = "/"}
//           className="mt-8 text-gray-500 hover:text-pink-600"
//         >
//           ← Back to Home
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default BlogComingSoon;




import React, { useState, useEffect } from "react";
import { Clock, Mail, Bell, ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BlogComingSoon = () => {
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set your launch date here
  const launchDate = new Date(2026, 4, 15, 0, 0, 0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing! We'll notify you at ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl shadow-lg mb-8 mx-auto">
          <Clock className="h-10 w-10 text-white" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
            Blog Coming Soon
          </span>
        </h1>

        {/* <p className="text-lg text-gray-600 mb-8">
  We're building the future of IT infrastructure! Get ready for exciting career opportunities in
  <span className="font-semibold text-pink-600"> Artificial Intelligence</span>, 
  <span className="font-semibold text-yellow-600"> Data Cabling</span>, and 
  <span className="font-semibold text-blue-600"> Enterprise Networking</span>. 
  Join us in shaping tomorrow's technology landscape.
</p>

        
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-blue-100 px-4 py-2 rounded-full mb-4">
            <Calendar className="h-4 w-4 text-pink-500" />
            <span className="text-sm font-medium text-gray-700">Launching In</span>
          </div>
          
          <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
            <div className="bg-white rounded-xl p-3 shadow-md border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-pink-600">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-500 mt-1">Days</div>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-md border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-yellow-600">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-500 mt-1">Hours</div>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-md border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-500 mt-1">Minutes</div>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-md border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-green-600">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-500 mt-1">Seconds</div>
            </div>
          </div>
        </div>

        
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              required
            />
          </div>
          <Button type="submit" className="bg-gradient-to-r from-pink-500 to-blue-500 whitespace-nowrap">
            <Bell className="h-4 w-4 mr-2" />
            Notify Me
          </Button>
        </form>

        
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="bg-white/60 backdrop-blur rounded-xl p-3 hover:shadow-md transition-shadow">
            <p className="font-semibold text-sm">📚 Expert Insights</p>
          </div>
          <div className="bg-white/60 backdrop-blur rounded-xl p-3 hover:shadow-md transition-shadow">
            <p className="font-semibold text-sm">📈 Market Trends</p>
          </div>
          <div className="bg-white/60 backdrop-blur rounded-xl p-3 hover:shadow-md transition-shadow">
            <p className="font-semibold text-sm">💡 Investment Tips</p>
          </div>
          <div className="bg-white/60 backdrop-blur rounded-xl p-3 hover:shadow-md transition-shadow">
            <p className="font-semibold text-sm">🏠 Success Stories</p>
          </div>
        </div> */}

       
        <Button 
          variant="link" 
          onClick={() => window.location.href = "/"}
          className="mt-8 text-gray-500 hover:text-pink-600"
        >
          ← Back to Home
        </Button>
      </div>
    </div>
  );
};

export default BlogComingSoon;