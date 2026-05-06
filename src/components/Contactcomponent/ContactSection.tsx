// import { useState } from "react";
// import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";

// export default function ContactSection() {
//   const [submitted, setSubmitted] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     subject: "",
//     service: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <section className="py-20 bg-gradient-to-r from-pink-50 via-yellow-50 to-blue-50">
//       <div className="container mx-auto px-4 lg:px-8">

//         <div className="grid lg:grid-cols-2 gap-8">

//           {/* LEFT – FORM */}
//           <div className="h-full rounded-2xl bg-white/70 backdrop-blur-lg border p-8 shadow-lg">

//             {submitted ? (
//               <div className="text-center py-16 flex flex-col justify-center h-full">
//                 <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 flex items-center justify-center mx-auto mb-6">
//                   <CheckCircle size={40} className="text-white" />
//                 </div>

//                 <h3 className="text-2xl font-bold mb-4">
//                   Message Sent!
//                 </h3>

//                 <p className="text-gray-600 mb-4">
//                   Thank you for reaching out.
//                 </p>

//                 <Button
//                   variant="outline"
//                   onClick={() => {
//                     setSubmitted(false);
//                     setForm({
//                       name: "",
//                       email: "",
//                       phone: "",
//                       company: "",
//                       subject: "",
//                       service: "",
//                       message: "",
//                     });
//                   }}
//                 >
//                   Send Again
//                 </Button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-5">

//                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
//                   <MessageSquare size={22} className="text-pink-500" />
//                   Send Us a Message
//                 </h3>

//                 {/* NAME + EMAIL */}
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div>
//                     <Label>Full Name *</Label>
//                     <Input
//                       value={form.name}
//                       onChange={(e) =>
//                         setForm({ ...form, name: e.target.value })
//                       }
//                       className="mt-2"
//                     />
//                   </div>

//                   <div>
//                     <Label>Email *</Label>
//                     <Input
//                       type="email"
//                       value={form.email}
//                       onChange={(e) =>
//                         setForm({ ...form, email: e.target.value })
//                       }
//                       className="mt-2"
//                     />
//                   </div>
//                 </div>

//                 {/* PHONE + COMPANY */}
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div>
//                     <Label>Phone *</Label>
//                     <Input
//                       value={form.phone}
//                       onChange={(e) =>
//                         setForm({ ...form, phone: e.target.value })
//                       }
//                       className="mt-2"
//                     />
//                   </div>

//                   <div>
//                     <Label>Company</Label>
//                     <Input
//                       value={form.company}
//                       onChange={(e) =>
//                         setForm({ ...form, company: e.target.value })
//                       }
//                       className="mt-2"
//                     />
//                   </div>
//                 </div>

//                 {/* SUBJECT */}
//                 <div>
//                   <Label>Subject *</Label>
//                   <Input
//                     value={form.subject}
//                     onChange={(e) =>
//                       setForm({ ...form, subject: e.target.value })
//                     }
//                     className="mt-2"
//                   />
//                 </div>

//                 {/* SERVICE DROPDOWN */}
//                 <div>
//                   <Label>Select Service</Label>
//                   <select
//                     className="w-full mt-2 h-11 rounded-md border px-3"
//                     value={form.service}
//                     onChange={(e) =>
//                       setForm({ ...form, service: e.target.value })
//                     }
//                   >
//                     <option value="">Choose a service</option>
//                     <option>Web Development</option>
//                     <option>Mobile App</option>
//                     <option>Cloud Services</option>
//                     <option>IT Consulting</option>
//                   </select>
//                 </div>

//                 {/* MESSAGE */}
//                 <div>
//                   <Label>Message *</Label>
//                   <Textarea
//                     rows={4}
//                     value={form.message}
//                     onChange={(e) =>
//                       setForm({ ...form, message: e.target.value })
//                     }
//                     className="mt-2"
//                   />
//                 </div>

//                 {/* BUTTON WITH YOUR GRADIENT */}
//                 <Button
//                   type="submit"
//                   className="w-full h-12 text-white font-semibold mt-4 
//                   bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 
//                   hover:opacity-90 transition-all duration-300"
//                 >
//                   <Send size={18} className="mr-2" />
//                   Send Message
//                 </Button>

//               </form>
//             )}
//           </div>

//           {/* RIGHT – INFO */}
//           <div className="h-full rounded-2xl bg-white/70 backdrop-blur-lg border p-8 shadow-lg flex flex-col justify-between">

//             <div>
//               <h3 className="text-2xl font-bold mb-4">
//                 Get in Touch 🚀
//               </h3>

//               <p className="text-gray-600 mb-6">
//                 We’re here to help you grow your business with the best solutions.
//                 Contact us anytime and our team will respond quickly.
//               </p>

//               <div className="space-y-4">

//                 <div className="flex items-center gap-3">
//                   <Mail className="text-pink-500" />
//                   <span>support@yourcompany.com</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <Phone className="text-yellow-500" />
//                   <span>+91 98765 43210</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <MapPin className="text-blue-500" />
//                   <span>Hyderabad, India</span>
//                 </div>

//               </div>
//             </div>

//             <Button className="mt-6 text-white 
//               bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500">
//               Contact Now
//             </Button>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




// import { useState } from "react";
// import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import BASE_URL from "@/Config/Api";
// import axios from "axios";

// export default function ContactSection() {
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     subject: "",
//     message: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // First save to database
//       await axios.post(`${BASE_URL}/api/contact/post`, form);

//       // Then send email
//       await axios.post(`${BASE_URL}/api/contact/send-email`, form);

//       setSubmitted(true);
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         subject: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="py-20 bg-gradient-to-r from-pink-50 via-yellow-50 to-blue-50">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* LEFT – FORM */}
//           <div className="h-full rounded-2xl bg-white/70 backdrop-blur-lg border p-8 shadow-lg">
//             {submitted ? (
//               <div className="text-center py-16 flex flex-col justify-center h-full">
//                 <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 flex items-center justify-center mx-auto mb-6">
//                   <CheckCircle size={40} className="text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
//                 <p className="text-gray-600 mb-4">
//                   Thank you for reaching out. We'll get back to you soon!
//                 </p>
//                 <Button
//                   variant="outline"
//                   onClick={() => {
//                     setSubmitted(false);
//                     setForm({
//                       name: "",
//                       email: "",
//                       phone: "",
//                       company: "",
//                       subject: "",
//                       message: "",
//                     });
//                   }}
//                 >
//                   Send Another Message
//                 </Button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
//                   <MessageSquare size={22} className="text-pink-500" />
//                   Send Us a Message
//                 </h3>

//                 {/* NAME + EMAIL */}
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div>
//                     <Label>Full Name *</Label>
//                     <Input
//                       value={form.name}
//                       onChange={(e) => setForm({ ...form, name: e.target.value })}
//                       className="mt-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label>Email *</Label>
//                     <Input
//                       type="email"
//                       value={form.email}
//                       onChange={(e) => setForm({ ...form, email: e.target.value })}
//                       className="mt-2"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* PHONE + COMPANY */}
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div>
//                     <Label>Phone *</Label>
//                     <Input
//                       value={form.phone}
//                       onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                       className="mt-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label>Company</Label>
//                     <Input
//                       value={form.company}
//                       onChange={(e) => setForm({ ...form, company: e.target.value })}
//                       className="mt-2"
//                     />
//                   </div>
//                 </div>

//                 {/* SUBJECT */}
//                 <div>
//                   <Label>Subject *</Label>
//                   <Input
//                     value={form.subject}
//                     onChange={(e) => setForm({ ...form, subject: e.target.value })}
//                     className="mt-2"
//                     required
//                   />
//                 </div>

//                 {/* MESSAGE */}
//                 <div>
//                   <Label>Message *</Label>
//                   <Textarea
//                     rows={4}
//                     value={form.message}
//                     onChange={(e) => setForm({ ...form, message: e.target.value })}
//                     className="mt-2"
//                     required
//                   />
//                 </div>

//                 {/* BUTTON */}
//                 <Button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full h-12 text-white font-semibold mt-4 
//                   bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 
//                   hover:opacity-90 transition-all duration-300"
//                 >
//                   {loading ? (
//                     <div className="flex items-center gap-2">
//                       <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                       Sending...
//                     </div>
//                   ) : (
//                     <>
//                       <Send size={18} className="mr-2" />
//                       Send Message
//                     </>
//                   )}
//                 </Button>
//               </form>
//             )}
//           </div>

//           {/* RIGHT – INFO */}
//           <div className="h-full rounded-2xl bg-white/70 backdrop-blur-lg border p-8 shadow-lg flex flex-col justify-between">
//             <div>
//               <h3 className="text-2xl font-bold mb-4">Get in Touch 🚀</h3>
//               <p className="text-gray-600 mb-6">
//                 We're here to help you grow your business with the best solutions.
//                 Contact us anytime and our team will respond quickly.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <Mail className="text-pink-500" />
//                   <span>rajeshyanamadala2000@gmail.com</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Phone className="text-yellow-500" />
//                   <span>+91 98765 43210</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <MapPin className="text-blue-500" />
//                   <span>Hyderabad, India</span>
//                 </div>
//               </div>
//             </div>
//             <Button 
//               className="mt-6 text-white 
//               bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500"
//               onClick={() => window.location.href = "mailto:rajeshyanamadala2000@gmail.com"}
//             >
//               Contact Now
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import BASE_URL from "@/Config/Api";
import axios from "axios";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Save to database and send email to admin
      const response = await axios.post(`${BASE_URL}/api/contact/post`, form);
      
      if (response.data.success || response.status === 201) {
        setSubmitted(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error: any) {
      console.error(error);
      setError(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 via-yellow-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT – FORM */}
          <div className="h-full rounded-2xl bg-white/70 backdrop-blur-lg border p-8 shadow-lg">
            {submitted ? (
              <div className="text-center py-16 flex flex-col justify-center h-full">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-4">
                  Thank you for reaching out. Our team will get back to you soon!
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      subject: "",
                      message: "",
                    });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MessageSquare size={22} className="text-pink-500" />
                  Send Us a Message
                </h3>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                {/* NAME + EMAIL */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name *</Label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label>Email *</Label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                {/* PHONE + COMPANY */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Phone *</Label>
                    <Input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label>Company (Optional)</Label>
                    <Input
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div>
                  <Label>Subject *</Label>
                  <Input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <Label>Message *</Label>
                  <Textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>

                {/* BUTTON */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 text-white font-semibold mt-4 
                  bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 
                  hover:opacity-90 transition-all duration-300"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* RIGHT – INFO */}
          <div className="h-full rounded-2xl bg-white/70 backdrop-blur-lg border p-8 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch 🚀</h3>
              <p className="text-gray-600 mb-6">
                We're here to help you grow your business with the best solutions.
                Contact us anytime and our team will respond quickly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-pink-500" />
                  <span>rajeshyanamadala2000@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-yellow-500" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-500" />
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </div>
            <Button 
              className="mt-6 text-white 
              bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500"
              onClick={() => window.location.href = "mailto:rajeshyanamadala2000@gmail.com"}
            >
              Contact Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}