// // CareersPage.tsx - Completely new file name to break cache
// import React, { useState, useEffect } from "react";
// import { 
//   Briefcase, MapPin, Clock, DollarSign, GraduationCap, 
//   Award, Search, Filter, X, Loader,
//   CheckCircle, ExternalLink, Upload
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import axios from "axios";
// import BASE_URL from "@/Config/Api";

// interface Job {
//   id: number;
//   title: string;
//   department: string;
//   location: string;
//   type: string;
//   experience: string;
//   salary_range: string;
//   description: string;
//   requirements: string;
//   responsibilities: string;
//   benefits: string;
//   featured: boolean;
//   active: boolean;
//   apply_email: string;
//   created_at: string;
// }

// const API_URL = `${BASE_URL}/api/careers`;

// const CareersPage = () => {
//   // State declarations - all defined at the top
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [departments, setDepartments] = useState<string[]>(["All"]);
//   const [selectedDepartment, setSelectedDepartment] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);
//   const [showApplyForm, setShowApplyForm] = useState(false);
//   const [applicationSubmitted, setApplicationSubmitted] = useState(false);
//   const [isProcessing, setIsProcessing] = useState(false); // Different name
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     experience: "",
//     currentCompany: "",
//     resume: null as File | null,
//     coverLetter: ""
//   });

//   useEffect(() => {
//     fetchJobs();
//     fetchDepartments();
//   }, []);

//   useEffect(() => {
//     fetchJobs();
//   }, [selectedDepartment, searchQuery]);

//   const fetchJobs = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const params: Record<string, string> = {};
//       if (selectedDepartment !== "All") params.department = selectedDepartment;
//       if (searchQuery) params.search = searchQuery;
      
//       const response = await axios.get(`${API_URL}/jobs`, { params });
//       setJobs(response.data);
//     } catch (err) {
//       console.error("Error fetching jobs:", err);
//       setError("Failed to load job openings. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchDepartments = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/departments`);
//       setDepartments(response.data);
//     } catch (err) {
//       console.error("Error fetching departments:", err);
//     }
//   };

//   const openApplyForm = (job: Job) => {
//     setSelectedJob(job);
//     setShowApplyForm(true);
//     setApplicationSubmitted(false);
//     setIsProcessing(false);
//   };

//   const submitApplication = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!selectedJob) {
//       alert("No job selected");
//       return;
//     }
    
//     if (!formData.fullName || !formData.email || !formData.phone || !formData.experience) {
//       alert("Please fill in all required fields");
//       return;
//     }
    
//     if (!formData.resume) {
//       alert("Please upload your resume");
//       return;
//     }
    
//     setIsProcessing(true);
    
//     const applicationFormData = new FormData();
//     applicationFormData.append("jobId", String(selectedJob.id));
//     applicationFormData.append("jobTitle", selectedJob.title);
//     applicationFormData.append("fullName", formData.fullName);
//     applicationFormData.append("email", formData.email);
//     applicationFormData.append("phone", formData.phone);
//     applicationFormData.append("experience", formData.experience);
//     applicationFormData.append("currentCompany", formData.currentCompany || "");
//     applicationFormData.append("coverLetter", formData.coverLetter || "");
//     if (formData.resume) {
//       applicationFormData.append("resume", formData.resume);
//     }

//     try {
//       const response = await axios.post(`${API_URL}/apply`, applicationFormData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });
      
//       console.log("Application response:", response.data);
//       setApplicationSubmitted(true);
      
//       setTimeout(() => {
//         setShowApplyForm(false);
//         setSelectedJob(null);
//         setApplicationSubmitted(false);
//         setFormData({
//           fullName: "",
//           email: "",
//           phone: "",
//           experience: "",
//           currentCompany: "",
//           resume: null,
//           coverLetter: ""
//         });
//       }, 3000);
//     } catch (err: any) {
//       console.error("Error submitting application:", err);
//       const errorMessage = err.response?.data?.error || "Failed to submit application. Please try again.";
//       alert(errorMessage);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       if (file.size > 5 * 1024 * 1024) {
//         alert("File size must be less than 5MB");
//         return;
//       }
//       const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
//       if (!allowedTypes.includes(file.type)) {
//         alert("Please upload PDF, DOC, or DOCX files only");
//         return;
//       }
//       setFormData({...formData, resume: file});
//     }
//   };

//   const featuredJobs = jobs.filter(job => job.featured);
//   const regularJobs = jobs.filter(job => !job.featured);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
//         <div className="text-center">
//           <Loader className="h-12 w-12 animate-spin text-indigo-600 mx-auto mb-4" />
//           <p className="text-gray-600">Loading opportunities...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
//         <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-md mx-4">
//           <p className="text-red-500 mb-4">{error}</p>
//           <Button onClick={() => window.location.reload()} className="bg-gradient-to-r from-indigo-600 to-purple-600">
//             Try Again
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 px-4">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative max-w-6xl mx-auto text-center">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl shadow-lg mb-6 backdrop-blur">
//             <Briefcase className="h-8 w-8 text-white" />
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Join Our Team
//           </h1>
//           <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
//             Build your career with us and be part of something extraordinary
//           </p>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 py-12">
//         {/* Search and Filter */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <Input
//                 type="text"
//                 placeholder="Search jobs by title, department, or description..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-10 w-full"
//               />
//             </div>
//             <div className="relative">
//               <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <select
//                 value={selectedDepartment}
//                 onChange={(e) => setSelectedDepartment(e.target.value)}
//                 className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
//               >
//                 {departments.map((dept) => (
//                   <option key={dept} value={dept}>{dept}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Featured Jobs */}
//         {featuredJobs.length > 0 && !searchQuery && selectedDepartment === "All" && (
//           <div className="mb-12">
//             <div className="flex items-center gap-2 mb-6">
//               <Award className="h-6 w-6 text-yellow-500" />
//               <h2 className="text-2xl font-bold text-gray-800">Featured Opportunities</h2>
//             </div>
//             <div className="grid md:grid-cols-2 gap-6">
//               {featuredJobs.map((job) => (
//                 <div key={job.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border-2 border-yellow-200">
//                   <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2"></div>
//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-3">
//                       <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
//                       <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
//                         Featured
//                       </span>
//                     </div>
//                     <div className="space-y-2 mb-4">
//                       <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <Briefcase className="h-4 w-4" />
//                         <span>{job.department}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <MapPin className="h-4 w-4" />
//                         <span>{job.location}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <Clock className="h-4 w-4" />
//                         <span>{job.type}</span>
//                       </div>
//                       {job.salary_range && (
//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                           <DollarSign className="h-4 w-4" />
//                           <span>{job.salary_range}</span>
//                         </div>
//                       )}
//                     </div>
//                     <p className="text-gray-600 mb-4 line-clamp-2">{job.description.replace(/<[^>]*>/g, '')}</p>
//                     <Button 
//                       onClick={() => openApplyForm(job)}
//                       className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
//                     >
//                       Apply Now <ExternalLink className="h-4 w-4 ml-2" />
//                     </Button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* All Jobs Grid */}
//         <div>
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">
//               {selectedDepartment === "All" ? "All Openings" : `${selectedDepartment} Positions`}
//             </h2>
//             <span className="text-sm text-gray-500">{jobs.length} positions</span>
//           </div>

//           {jobs.length === 0 ? (
//             <div className="text-center py-12 bg-white rounded-2xl">
//               <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
//               <p className="text-gray-500">No job openings found. Check back later!</p>
//             </div>
//           ) : (
//             <div className="grid gap-6">
//               {(selectedDepartment === "All" && !searchQuery ? regularJobs : jobs).map((job) => (
//                 <div key={job.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 overflow-hidden">
//                   <div className={`h-1 bg-gradient-to-r ${
//                     job.department === 'Engineering' ? 'from-blue-500 to-cyan-500' :
//                     job.department === 'Sales' ? 'from-green-500 to-emerald-500' :
//                     job.department === 'Marketing' ? 'from-pink-500 to-rose-500' :
//                     'from-indigo-500 to-purple-500'
//                   }`}></div>
//                   <div className="p-6">
//                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
//                         <div className="flex flex-wrap gap-3">
//                           <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
//                             <Briefcase className="h-3 w-3" /> {job.department}
//                           </span>
//                           <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
//                             <MapPin className="h-3 w-3" /> {job.location}
//                           </span>
//                           <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
//                             <Clock className="h-3 w-3" /> {job.type}
//                           </span>
//                           <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
//                             <GraduationCap className="h-3 w-3" /> {job.experience}
//                           </span>
//                         </div>
//                       </div>
//                       <Button 
//                         onClick={() => openApplyForm(job)}
//                         className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
//                       >
//                         Apply Now
//                       </Button>
//                     </div>
                    
//                     <p className="text-gray-600 mb-4">{job.description.replace(/<[^>]*>/g, '').substring(0, 200)}...</p>
                    
//                     <button 
//                       onClick={() => setSelectedJob(job)}
//                       className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
//                     >
//                       View Full Details →
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Job Details Modal */}
//       {selectedJob && !showApplyForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
//               <h2 className="text-2xl font-bold text-gray-800">{selectedJob.title}</h2>
//               <button
//                 onClick={() => setSelectedJob(null)}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
            
//             <div className="p-6">
//               <div className="flex flex-wrap gap-3 mb-6 pb-4 border-b">
//                 <span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
//                   <Briefcase className="h-4 w-4" /> {selectedJob.department}
//                 </span>
//                 <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
//                   <MapPin className="h-4 w-4" /> {selectedJob.location}
//                 </span>
//                 <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
//                   <Clock className="h-4 w-4" /> {selectedJob.type}
//                 </span>
//                 <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
//                   <GraduationCap className="h-4 w-4" /> {selectedJob.experience}
//                 </span>
//                 {selectedJob.salary_range && (
//                   <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
//                     <DollarSign className="h-4 w-4" /> {selectedJob.salary_range}
//                   </span>
//                 )}
//               </div>
              
//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-3">About the Role</h3>
//                   <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedJob.description }} />
//                 </div>
                
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Responsibilities</h3>
//                   <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedJob.responsibilities }} />
//                 </div>
                
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Requirements</h3>
//                   <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedJob.requirements }} />
//                 </div>
                
//                 {selectedJob.benefits && (
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800 mb-3">Benefits & Perks</h3>
//                     <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedJob.benefits }} />
//                   </div>
//                 )}
//               </div>
              
//               <div className="mt-8 pt-6 border-t flex gap-3">
//                 <Button 
//                   onClick={() => openApplyForm(selectedJob)}
//                   className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
//                 >
//                   Apply for this Position
//                 </Button>
//                 <Button 
//                   variant="outline" 
//                   onClick={() => setSelectedJob(null)}
//                 >
//                   Close
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Application Form Modal */}
//       {showApplyForm && selectedJob && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800">Apply for {selectedJob.title}</h2>
//                 <p className="text-sm text-gray-500 mt-1">{selectedJob.department} • {selectedJob.location}</p>
//               </div>
//               <button
//                 onClick={() => {
//                   setShowApplyForm(false);
//                   setSelectedJob(null);
//                 }}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
            
//             {applicationSubmitted ? (
//               <div className="p-12 text-center">
//                 <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
//                 <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
//                 <p className="text-gray-600">Thank you for applying. We'll review your application and get back to you soon.</p>
//               </div>
//             ) : (
//               <form onSubmit={submitApplication} className="p-6 space-y-4">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.fullName}
//                       onChange={(e) => setFormData({...formData, fullName: e.target.value})}
//                       className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
//                     <input
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={(e) => setFormData({...formData, email: e.target.value})}
//                       className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
//                     <input
//                       type="tel"
//                       required
//                       value={formData.phone}
//                       onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                       className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience *</label>
//                     <input
//                       type="text"
//                       required
//                       placeholder="e.g., 3-5 years"
//                       value={formData.experience}
//                       onChange={(e) => setFormData({...formData, experience: e.target.value})}
//                       className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
//                     />
//                   </div>
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Current Company</label>
//                     <input
//                       type="text"
//                       value={formData.currentCompany}
//                       onChange={(e) => setFormData({...formData, currentCompany: e.target.value})}
//                       className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
//                     />
//                   </div>
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume * (PDF, DOC, DOCX)</label>
//                     <div className="flex items-center gap-2">
//                       <input
//                         type="file"
//                         required
//                         accept=".pdf,.doc,.docx"
//                         onChange={handleResumeChange}
//                         className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
//                       />
//                       <Upload className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <p className="text-xs text-gray-500 mt-1">Max file size: 5MB</p>
//                     {formData.resume && (
//                       <p className="text-xs text-green-600 mt-1">✓ {formData.resume.name} selected</p>
//                     )}
//                   </div>
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
//                     <textarea
//                       rows={4}
//                       value={formData.coverLetter}
//                       onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
//                       className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
//                       placeholder="Tell us why you're interested in this position..."
//                     />
//                   </div>
//                 </div>
                
//                 <div className="flex gap-3 pt-4">
//                   <button
//                     type="submit"
//                     disabled={isProcessing}
//                     className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {isProcessing ? "Submitting..." : "Submit Application"}
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setShowApplyForm(false);
//                       setSelectedJob(null);
//                     }}
//                     className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CareersPage;




// CareersPage.tsx
// CareersPage.tsx
import React, { useState, useEffect } from "react";
import { 
  Briefcase, MapPin, Clock, DollarSign, GraduationCap, 
  Award, Search, Filter, X, Loader,
  CheckCircle, ExternalLink, Upload, ArrowRight, TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import BASE_URL from "@/Config/Api";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { useRef } from "react";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary_range: string;
  description: string;
  requirements: string;
  responsibilities: string;
  benefits: string;
  featured: boolean;
  active: boolean;
  apply_email: string;
  created_at: string;
}

const API_URL = `${BASE_URL}/api/careers`;

const CareersPage = () => {
  // State declarations - all defined at the top
  const [jobs, setJobs] = useState<Job[]>([]);
  const [departments, setDepartments] = useState<string[]>(["All"]);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    currentCompany: "",
    resume: null as File | null,
    coverLetter: ""
  });

  useEffect(() => {
    fetchJobs();
    fetchDepartments();
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [selectedDepartment, searchQuery]);

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const params: Record<string, string> = {};
      if (selectedDepartment !== "All") params.department = selectedDepartment;
      if (searchQuery) params.search = searchQuery;
      
      const response = await axios.get(`${API_URL}/jobs`, { params });
      setJobs(response.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to load job openings. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(`${API_URL}/departments`);
      setDepartments(["All", ...response.data]);
    } catch (err) {
      console.error("Error fetching departments:", err);
    }
  };

  const openApplyForm = (job: Job) => {
    setSelectedJob(job);
    setShowApplyForm(true);
    setApplicationSubmitted(false);
    setIsProcessing(false);
  };

  const submitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedJob) {
      alert("No job selected");
      return;
    }
    
    if (!formData.fullName || !formData.email || !formData.phone || !formData.experience) {
      alert("Please fill in all required fields");
      return;
    }
    
    if (!formData.resume) {
      alert("Please upload your resume");
      return;
    }
    
    setIsProcessing(true);
    
    const applicationFormData = new FormData();
    applicationFormData.append("jobId", String(selectedJob.id));
    applicationFormData.append("jobTitle", selectedJob.title);
    applicationFormData.append("fullName", formData.fullName);
    applicationFormData.append("email", formData.email);
    applicationFormData.append("phone", formData.phone);
    applicationFormData.append("experience", formData.experience);
    applicationFormData.append("currentCompany", formData.currentCompany || "");
    applicationFormData.append("coverLetter", formData.coverLetter || "");
    if (formData.resume) {
      applicationFormData.append("resume", formData.resume);
    }

    try {
      const response = await axios.post(`${API_URL}/apply`, applicationFormData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      
      console.log("Application response:", response.data);
      setApplicationSubmitted(true);
      
      setTimeout(() => {
        setShowApplyForm(false);
        setSelectedJob(null);
        setApplicationSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          experience: "",
          currentCompany: "",
          resume: null,
          coverLetter: ""
        });
      }, 3000);
    } catch (err: any) {
      console.error("Error submitting application:", err);
      const errorMessage = err.response?.data?.error || "Failed to submit application. Please try again.";
      alert(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload PDF, DOC, or DOCX files only");
        return;
      }
      setFormData({...formData, resume: file});
    }
  };

  const openingsRef = useRef(null);
  
    const scrollToOpenings = () => {
      openingsRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  

  const featuredJobs = jobs.filter(job => job.featured);
  const regularJobs = jobs.filter(job => !job.featured);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="h-12 w-12 animate-spin text-pink-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading opportunities...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-md mx-4">
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()} className="bg-gradient-to-r from-pink-600 to-blue-600">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      {/* Hero Section - Matching BlogHeroSection Style */}
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
            <span className="block bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text text-transparent">
              With Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-black/90 mb-10"
          >
            Join Our Team Of Innovators, Engineers, And Technology Experts
            Building Next-Generation Infrastructure Solutions For Modern
            Enterprises.
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

      <div id="jobs-section" className="max-w-6xl mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search jobs by title, department, or description... "
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 " />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none bg-white "
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Jobs */}
        {featuredJobs.length > 0 && !searchQuery && selectedDepartment === "All" && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-6 w-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-800">Featured Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border-2 border-yellow-200">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2"></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-800 capitalize">{job.title}</h3>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      {job.salary_range && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <DollarSign className="h-4 w-4" />
                          <span>{job.salary_range}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2 capitalize">{job.description.replace(/<[^>]*>/g, '')}</p>
                    <Button 
                      onClick={() => openApplyForm(job)}
                      className="w-full bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700"
                    >
                      Apply Now <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Jobs Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedDepartment === "All" ? "All Openings" : `${selectedDepartment} Positions`}
            </h2>
            <span className="text-sm text-gray-500 ">{jobs.length} positions</span>
          </div>

          {jobs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl">
              <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 capitalize">No job openings found. Check back later!</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {(selectedDepartment === "All" && !searchQuery ? regularJobs : jobs).map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${
                    job.department === 'Engineering' ? 'from-pink-500 to-rose-500' :
                    job.department === 'Sales' ? 'from-yellow-500 to-orange-500' :
                    job.department === 'Marketing' ? 'from-blue-500 to-cyan-500' :
                    'from-pink-500 to-blue-500'
                  }`}></div>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 capitalize">{job.title}</h3>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                            <Briefcase className="h-3 w-3 capitalize"/> {job.department}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                            <MapPin className="h-3 w-3 " /> {job.location}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                            <Clock className="h-3 w-3 capitalize" /> {job.type}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                            <GraduationCap className="h-3 w-3 capitalize" /> {job.experience}
                          </span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => openApplyForm(job)}
                        className="bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700"
                      >
                        Apply Now
                      </Button>
                    </div>
                    
                    <p className="text-gray-600 mb-4 capitalize">{job.description.replace(/<[^>]*>/g, '').substring(0, 200)}...</p>
                    
                    <button 
                      onClick={() => setSelectedJob(job)}
                      className="text-pink-600 hover:text-pink-700 text-sm font-medium capitalize"
                    >
                      View Full Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Job Details Modal */}
      {selectedJob && !showApplyForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800 capitalize">{selectedJob.title}</h2>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-3 mb-6 pb-4 border-b">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                  <Briefcase className="h-4 w-4 capitalize" /> {selectedJob.department}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  <MapPin className="h-4 w-4" /> {selectedJob.location}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  <Clock className="h-4 w-4 capitalize" /> {selectedJob.type}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  <GraduationCap className="h-4 w-4 capitalize" /> {selectedJob.experience}
                </span>
                {selectedJob.salary_range && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    <DollarSign className="h-4 w-4" /> {selectedJob.salary_range}
                  </span>
                )}
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 capitalize">About the Role</h3>
                  <div className="text-gray-600 leading-relaxed capitalize" dangerouslySetInnerHTML={{ __html: selectedJob.description }} />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 capitalize">Key Responsibilities</h3>
                  <div className="text-gray-600 leading-relaxed capitalize" dangerouslySetInnerHTML={{ __html: selectedJob.responsibilities }} />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 capitalize">Requirements</h3>
                  <div className="text-gray-600 leading-relaxed capitalize" dangerouslySetInnerHTML={{ __html: selectedJob.requirements }} />
                </div>
                
                {selectedJob.benefits && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 capitalize">Benefits & Perks</h3>
                    <div className="text-gray-600 leading-relaxed capitalize" dangerouslySetInnerHTML={{ __html: selectedJob.benefits }} />
                  </div>
                )}
              </div>
              
              <div className="mt-8 pt-6 border-t flex gap-3">
                <Button 
                  onClick={() => openApplyForm(selectedJob)}
                  className="flex-1 bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 capitalize"
                >
                  Apply for this Position
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedJob(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplyForm && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 capitalize">Apply for {selectedJob.title}</h2>
                <p className="text-sm text-gray-500 mt-1 capitalize">{selectedJob.department} • {selectedJob.location}</p>
              </div>
              <button
                onClick={() => {
                  setShowApplyForm(false);
                  setSelectedJob(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {applicationSubmitted ? (
              <div className="p-12 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
                <p className="text-gray-600 capitalize">Thank you for applying. We'll review your application and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={submitApplication} className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., 3-5 years"
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Company</label>
                    <input
                      type="text"
                      value={formData.currentCompany}
                      onChange={(e) => setFormData({...formData, currentCompany: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume * (PDF, DOC, DOCX)</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeChange}
                        className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-500"
                      />
                      <Upload className="h-5 w-5 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Max file size: 5MB</p>
                    {formData.resume && (
                      <p className="text-xs text-green-600 mt-1">✓ {formData.resume.name} selected</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                    <textarea
                      rows={4}
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-500"
                      placeholder="Tell us why you're interested in this position..."
                    />
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="flex-1 bg-gradient-to-r from-pink-600 to-blue-600 text-white py-2 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? "Submitting..." : "Submit Application"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowApplyForm(false);
                      setSelectedJob(null);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;