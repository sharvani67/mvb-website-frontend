// // BlogComingSoon.tsx
// import React, { useState, useEffect } from "react";
// import { 
//   Clock, Mail, Bell, Calendar, Sparkles, 
//   Wifi, Network, Cpu, Server, Database, Zap, 
//   TrendingUp, ChevronRight,
//   User, Calendar as CalendarIcon, Search, Loader
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import axios from "axios";
// import BASE_URL from "@/Config/Api";

// // Define types
// interface BlogPost {
//   id: number;
//   title: string;
//   excerpt: string;
//   content: string;
//   category: string;
//   category_color: string;
//   author: string;
//   date: string;
//   read_time: string;
//   featured: number | boolean;
//   tags: string[];
//   icon_name: string;
// }

// // Map icon names to components
// const iconMap: Record<string, React.ReactNode> = {
//   Database: <Database className="h-5 w-5" />,
//   Cpu: <Cpu className="h-5 w-5" />,
//   Server: <Server className="h-5 w-5" />,
//   TrendingUp: <TrendingUp className="h-5 w-5" />,
//   Wifi: <Wifi className="h-5 w-5" />,
//   Network: <Network className="h-5 w-5" />,
//   Zap: <Zap className="h-5 w-5" />,
//   Clock: <Clock className="h-5 w-5" />,
// };

// const API_URL = `${BASE_URL}/api/blog`;

// const BlogComingSoon = () => {
//   const [email, setEmail] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch blog posts from API
//   useEffect(() => {
//     fetchBlogPosts();
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     fetchBlogPosts();
//   }, [selectedCategory, searchQuery]);

//   const fetchBlogPosts = async () => {
//     setLoading(true);
//     try {
//       const params: Record<string, string> = {};
//       if (selectedCategory !== "All") params.category = selectedCategory;
//       if (searchQuery) params.search = searchQuery;
      
//       const response = await axios.get(`${API_URL}/posts`, { params });
//       setBlogPosts(response.data);
//       setError(null);
//     } catch (err) {
//       console.error("Error fetching blog posts:", err);
//       setError("Failed to load blog posts. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/categories`);
//       setCategories(response.data);
//     } catch (err) {
//       console.error("Error fetching categories:", err);
//     }
//   };

//   const handleSubscribe = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${BASE_URL}/api/newsletter/subscribe`, { email });
//       alert(`Thank you for subscribing! We'll send you the latest blogs at ${email}`);
//       setEmail("");
//     } catch (err) {
//       alert("Subscription failed. Please try again.");
//     }
//   };

//   const featuredPosts = blogPosts.filter(post => post.featured === 1 || post.featured === true);
//   const regularPosts = blogPosts.filter(post => !(post.featured === 1 || post.featured === true));

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
//         <div className="text-center">
//           <Loader className="h-12 w-12 animate-spin text-pink-500 mx-auto mb-4" />
//           <p className="text-gray-600">Loading amazing content...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
//         <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
//           <p className="text-red-500 mb-4">{error}</p>
//           <Button onClick={() => window.location.reload()} className="bg-gradient-to-r from-pink-500 to-blue-500">
//             Retry
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 text-white py-20 px-4">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative max-w-6xl mx-auto text-center">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl shadow-lg mb-6 backdrop-blur">
//             <Clock className="h-8 w-8 text-white" />
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Tech Infrastructure Insights
//           </h1>
//           <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
//             Expert perspectives on Network Cabling, Artificial Intelligence, and Data Center Infrastructure
//           </p>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 py-12">
//         {/* Newsletter Banner */}
//         <div className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-2xl p-6 md:p-8 mb-12 border border-pink-200">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="flex items-center gap-4">
//               <div className="hidden md:block p-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-xl">
//                 <Bell className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-gray-800">Never Miss an Update</h3>
//                 <p className="text-gray-600">Subscribe to get the latest articles delivered straight to your inbox</p>
//               </div>
//             </div>
//             <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
//               <div className="relative flex-1">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <Input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="pl-10 w-full md:w-80 bg-white"
//                   required
//                 />
//               </div>
//               <Button type="submit" className="bg-gradient-to-r from-pink-500 to-blue-500 whitespace-nowrap">
//                 Subscribe
//               </Button>
//             </form>
//           </div>
//         </div>

//         {/* Search and Filter */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
//           <div className="flex flex-wrap gap-2">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                   selectedCategory === cat
//                     ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-md"
//                     : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//             <Input
//               type="text"
//               placeholder="Search articles..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pl-10 w-full md:w-64 bg-white"
//             />
//           </div>
//         </div>

//         {/* Featured Posts */}
//         {featuredPosts.length > 0 && searchQuery === "" && selectedCategory === "All" && (
//           <div className="mb-12">
//             <div className="flex items-center gap-2 mb-6">
//               <Sparkles className="h-5 w-5 text-pink-500" />
//               <h2 className="text-2xl font-bold text-gray-800">Featured Articles</h2>
//             </div>
//             <div className="grid md:grid-cols-2 gap-6">
//               {featuredPosts.map((post) => (
//                 <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
//                   <div className={`h-2 bg-gradient-to-r ${post.category_color}`}></div>
//                   <div className="p-6">
//                     <div className="flex items-center gap-3 mb-3">
//                       <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${post.category_color} text-white`}>
//                         {iconMap[post.icon_name] || <Database className="h-5 w-5" />}
//                         <span>{post.category}</span>
//                       </span>
//                       <span className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-pink-600 transition-colors">
//                       <a href={`/blog/${post.id}`}>{post.title}</a>
//                     </h3>
//                     <p className="text-gray-600 mb-4">{post.excerpt}</p>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2 text-sm text-gray-500">
//                         <User className="h-4 w-4" />
//                         <span>{post.author}</span>
//                         <span className="mx-1">•</span>
//                         <Clock className="h-4 w-4" />
//                         <span>{post.read_time}</span>
//                       </div>
//                       <Button variant="ghost" size="sm" className="text-pink-600 hover:text-pink-700">
//                         Read More <ChevronRight className="h-4 w-4 ml-1" />
//                       </Button>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* All Posts Grid */}
//         <div>
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">
//               {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
//             </h2>
//             <span className="text-sm text-gray-500">{blogPosts.length} articles</span>
//           </div>

//           {regularPosts.length === 0 && featuredPosts.length === 0 ? (
//             <div className="text-center py-12 bg-white rounded-2xl">
//               <p className="text-gray-500">No articles found. Try a different search or category.</p>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {regularPosts.map((post) => (
//                 <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100 group">
//                   <div className={`h-1 bg-gradient-to-r ${post.category_color}`}></div>
//                   <div className="p-5">
//                     <div className="flex items-center gap-2 mb-3">
//                       <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${post.category_color} text-white`}>
//                         {iconMap[post.icon_name] || <Database className="h-5 w-5" />}
//                         <span>{post.category}</span>
//                       </span>
//                     </div>
//                     <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
//                       <a href={`/blog/${post.id}`}>{post.title}</a>
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
//                     <div className="flex items-center justify-between text-xs text-gray-400">
//                       <div className="flex items-center gap-1">
//                         <User className="h-3 w-3" />
//                         <span>{post.author}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <CalendarIcon className="h-3 w-3" />
//                         <span>{new Date(post.date).toLocaleDateString()}</span>
//                       </div>
//                     </div>
//                     <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-1">
//                       {post.tags && post.tags.slice(0, 2).map((tag) => (
//                         <span key={tag} className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
//                           #{tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Back to Home Button */}
//         <div className="text-center mt-12 pt-8 border-t border-gray-200">
//           <Button 
//             variant="link" 
//             onClick={() => window.location.href = "/"}
//             className="text-gray-500 hover:text-pink-600"
//           >
//             ← Back to Home
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogComingSoon;




// // BlogComingSoon.tsx
// import React, { useState, useEffect } from "react";
// import { 
//   Clock, Mail, Bell, Calendar, Sparkles, 
//   Wifi, Network, Cpu, Server, Database, Zap, 
//   TrendingUp, ChevronRight,
//   User, Calendar as CalendarIcon, Search, Loader, X
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import axios from "axios";
// import BASE_URL from "@/Config/Api";

// // Define types
// interface BlogPost {
//   id: number;
//   title: string;
//   excerpt: string;
//   content: string;
//   category: string;
//   category_color: string;
//   author: string;
//   date: string;
//   read_time: string;
//   featured: number | boolean;
//   tags: string[];
//   icon_name: string;
// }

// // Map icon names to components
// const iconMap: Record<string, React.ReactNode> = {
//   Database: <Database className="h-5 w-5" />,
//   Cpu: <Cpu className="h-5 w-5" />,
//   Server: <Server className="h-5 w-5" />,
//   TrendingUp: <TrendingUp className="h-5 w-5" />,
//   Wifi: <Wifi className="h-5 w-5" />,
//   Network: <Network className="h-5 w-5" />,
//   Zap: <Zap className="h-5 w-5" />,
//   Clock: <Clock className="h-5 w-5" />,
// };

// const API_URL = `${BASE_URL}/api/blog`;

// const BlogComingSoon = () => {
//   const [email, setEmail] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [subscribeSuccess, setSubscribeSuccess] = useState(false);
//   const [subscribeError, setSubscribeError] = useState(false);
//   const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

//   // Fetch blog posts from API
//   useEffect(() => {
//     fetchBlogPosts();
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     fetchBlogPosts();
//   }, [selectedCategory, searchQuery]);

//   const fetchBlogPosts = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const params: Record<string, string> = {};
//       if (selectedCategory !== "All") params.category = selectedCategory;
//       if (searchQuery) params.search = searchQuery;
      
//       const response = await axios.get(`${API_URL}/posts`, { params });
//       setBlogPosts(response.data);
//     } catch (err) {
//       console.error("Error fetching blog posts:", err);
//       setError("Failed to load blog posts. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/categories`);
//       setCategories(response.data);
//     } catch (err) {
//       console.error("Error fetching categories:", err);
//     }
//   };

//   const handleSubscribe = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) return;
    
//     setSubscribeSuccess(false);
//     setSubscribeError(false);
    
//     try {
//       await axios.post(`${BASE_URL}/api/newsletter/subscribe`, { email });
//       setSubscribeSuccess(true);
//       setEmail("");
//       setTimeout(() => setSubscribeSuccess(false), 5000);
//     } catch (err) {
//       console.error("Subscription error:", err);
//       setSubscribeError(true);
//       setTimeout(() => setSubscribeError(false), 5000);
//     }
//   };

//   const handleReadMore = (post: BlogPost) => {
//     setSelectedPost(post);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setSelectedPost(null);
//     document.body.style.overflow = 'auto';
//   };

//   // Close modal on escape key
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') {
//         closeModal();
//       }
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => {
//       window.removeEventListener('keydown', handleEsc);
//       document.body.style.overflow = 'auto';
//     };
//   }, []);

//   // Filter posts based on current selection
//   const filteredPosts = blogPosts.filter(post => {
//     // Filter by category
//     if (selectedCategory !== "All" && post.category !== selectedCategory) {
//       return false;
//     }
//     // Filter by search
//     if (searchQuery) {
//       const searchLower = searchQuery.toLowerCase();
//       return (
//         post.title.toLowerCase().includes(searchLower) ||
//         post.excerpt.toLowerCase().includes(searchLower) ||
//         post.tags?.some(tag => tag.toLowerCase().includes(searchLower))
//       );
//     }
//     return true;
//   });

//   // Separate featured and regular posts from filtered results
//   const featuredPosts = filteredPosts.filter(post => post.featured === 1 || post.featured === true);
//   const regularPosts = filteredPosts.filter(post => !(post.featured === 1 || post.featured === true));

//   // Check if we should show featured section
//   const showFeaturedSection = featuredPosts.length > 0 && selectedCategory === "All" && !searchQuery;

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
//         <div className="text-center">
//           <Loader className="h-12 w-12 animate-spin text-pink-500 mx-auto mb-4" />
//           <p className="text-gray-600">Loading amazing content...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
//         <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-md mx-4">
//           <p className="text-red-500 mb-4">{error}</p>
//           <Button onClick={() => window.location.reload()} className="bg-gradient-to-r from-pink-500 to-blue-500">
//             Try Again
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 text-white py-20 px-4">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative max-w-6xl mx-auto text-center">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl shadow-lg mb-6 backdrop-blur">
//             <Clock className="h-8 w-8 text-white" />
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Tech Infrastructure Insights
//           </h1>
//           <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
//             Expert perspectives on Network Cabling, Artificial Intelligence, and Data Center Infrastructure
//           </p>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 py-12">
//         {/* Newsletter Banner */}
//         <div className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-2xl p-6 md:p-8 mb-12 border border-pink-200">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="flex items-center gap-4">
//               <div className="hidden md:block p-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-xl">
//                 <Bell className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-gray-800">Never Miss an Update</h3>
//                 <p className="text-gray-600">Subscribe to get the latest articles delivered straight to your inbox</p>
//               </div>
//             </div>
//             <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
//               <div className="relative flex-1">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <Input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="pl-10 w-full md:w-80 bg-white"
//                   required
//                 />
//               </div>
//               <Button type="submit" className="bg-gradient-to-r from-pink-500 to-blue-500 whitespace-nowrap">
//                 Subscribe
//               </Button>
//             </form>
//           </div>
//           {subscribeSuccess && (
//             <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
//               ✅ Thank you for subscribing! Check your inbox for updates.
//             </div>
//           )}
//           {subscribeError && (
//             <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
//               ❌ Subscription failed. Please try again.
//             </div>
//           )}
//         </div>

//         {/* Search and Filter */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
//           <div className="flex flex-wrap gap-2">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                   selectedCategory === cat
//                     ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-md"
//                     : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//             <Input
//               type="text"
//               placeholder="Search articles..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pl-10 w-full md:w-64 bg-white"
//             />
//           </div>
//         </div>

//         {/* Featured Posts Section - Only shows when "All" category is selected and no search */}
//         {showFeaturedSection && (
//           <div className="mb-12">
//             <div className="flex items-center gap-2 mb-6">
//               <Sparkles className="h-5 w-5 text-pink-500" />
//               <h2 className="text-2xl font-bold text-gray-800">Featured Articles</h2>
//             </div>
//             <div className="grid md:grid-cols-2 gap-6">
//               {featuredPosts.map((post) => (
//                 <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer group">
//                   <div className={`h-2 bg-gradient-to-r ${post.category_color}`}></div>
//                   <div className="p-6">
//                     <div className="flex items-center gap-3 mb-3">
//                       <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${post.category_color} text-white`}>
//                         {iconMap[post.icon_name] || <Database className="h-5 w-5" />}
//                         <span>{post.category}</span>
//                       </span>
//                       <span className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
//                       {post.title}
//                     </h3>
//                     <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2 text-sm text-gray-500">
//                         <User className="h-4 w-4" />
//                         <span>{post.author}</span>
//                         <span className="mx-1">•</span>
//                         <Clock className="h-4 w-4" />
//                         <span>{post.read_time}</span>
//                       </div>
//                       <Button 
//                         variant="ghost" 
//                         size="sm" 
//                         className="text-pink-600 hover:text-pink-700"
//                         onClick={() => handleReadMore(post)}
//                       >
//                         Read More <ChevronRight className="h-4 w-4 ml-1" />
//                       </Button>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* All Posts Grid - Shows all filtered posts including featured when not in "All" category or has search */}
//         <div>
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">
//               {selectedCategory === "All" 
//                 ? (searchQuery ? "Search Results" : "Latest Articles")
//                 : `${selectedCategory} Articles`}
//             </h2>
//             <span className="text-sm text-gray-500">
//               {showFeaturedSection ? regularPosts.length : filteredPosts.length} articles
//             </span>
//           </div>

//           {(!showFeaturedSection ? filteredPosts : regularPosts).length === 0 ? (
//             <div className="text-center py-12 bg-white rounded-2xl">
//               <p className="text-gray-500">No articles found. Try a different search or category.</p>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {(showFeaturedSection ? regularPosts : filteredPosts).map((post) => (
//                 <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100 group cursor-pointer">
//                   <div className={`h-1 bg-gradient-to-r ${post.category_color}`}></div>
//                   <div className="p-5">
//                     <div className="flex items-center gap-2 mb-3">
//                       <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${post.category_color} text-white`}>
//                         {iconMap[post.icon_name] || <Database className="h-5 w-5" />}
//                         <span>{post.category}</span>
//                       </span>
//                     </div>
//                     <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
//                       {post.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
//                     <div className="flex items-center justify-between text-xs text-gray-400">
//                       <div className="flex items-center gap-1">
//                         <User className="h-3 w-3" />
//                         <span>{post.author}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <CalendarIcon className="h-3 w-3" />
//                         <span>{new Date(post.date).toLocaleDateString()}</span>
//                       </div>
//                     </div>
//                     <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-1">
//                       {post.tags && post.tags.slice(0, 2).map((tag) => (
//                         <span key={tag} className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
//                           #{tag}
//                         </span>
//                       ))}
//                     </div>
//                     <Button 
//                       variant="ghost" 
//                       size="sm" 
//                       className="mt-3 w-full text-pink-600 hover:text-pink-700"
//                       onClick={() => handleReadMore(post)}
//                     >
//                       Read Full Article <ChevronRight className="h-4 w-4 ml-1" />
//                     </Button>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Back to Home Button */}
//         <div className="text-center mt-12 pt-8 border-t border-gray-200">
//           <Button 
//             variant="link" 
//             onClick={() => window.location.href = "/"}
//             className="text-gray-500 hover:text-pink-600"
//           >
//             ← Back to Home
//           </Button>
//         </div>
//       </div>

//       {/* Blog Post Modal */}
//       {selectedPost && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
//           onClick={closeModal}
//         >
//           <div 
//             className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
//               <div className="flex items-center gap-2">
//                 <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${selectedPost.category_color} text-white`}>
//                   {iconMap[selectedPost.icon_name] || <Database className="h-4 w-4" />}
//                   <span>{selectedPost.category}</span>
//                 </span>
//                 <span className="text-xs text-gray-400">
//                   {new Date(selectedPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
//                 </span>
//               </div>
//               <button
//                 onClick={closeModal}
//                 className="text-gray-500 hover:text-gray-700 transition-colors"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
            
//             <div className="p-6 md:p-8">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//                 {selectedPost.title}
//               </h2>
              
//               <div className="flex items-center gap-4 mb-6 pb-4 border-b">
//                 <div className="flex items-center gap-2 text-sm text-gray-500">
//                   <User className="h-4 w-4" />
//                   <span>{selectedPost.author}</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-500">
//                   <Clock className="h-4 w-4" />
//                   <span>{selectedPost.read_time}</span>
//                 </div>
//               </div>
              
//               <div className="prose prose-pink max-w-none">
//                 <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
//               </div>
              
//               {selectedPost.tags && selectedPost.tags.length > 0 && (
//                 <div className="mt-8 pt-4 border-t">
//                   <h4 className="text-sm font-semibold text-gray-700 mb-2">Tags:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedPost.tags.map((tag) => (
//                       <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
//                         #{tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogComingSoon;




// BlogComingSoon.tsx
// BlogComingSoon.tsx
// import React, { useState, useEffect } from "react";
// import { 
//   Clock, Mail, Bell, Calendar, Sparkles, 
//   Wifi, Network, Cpu, Server, Database, Zap, 
//   TrendingUp, ChevronRight,
//   User, Calendar as CalendarIcon, Search, Loader, X
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import axios from "axios";
// import BASE_URL from "@/Config/Api";

// // Define types
// interface BlogPost {
//   id: number;
//   title: string;
//   excerpt: string;
//   content: string;
//   category: string;
//   category_color: string;
//   author: string;
//   date: string;
//   read_time: string;
//   featured: number | boolean;
//   tags: string[];
//   icon_name: string;
//   featured_image?: string;
//   gallery_images?: string[];
// }

// // Map icon names to components
// const iconMap: Record<string, React.ReactNode> = {
//   Database: <Database className="h-5 w-5" />,
//   Cpu: <Cpu className="h-5 w-5" />,
//   Server: <Server className="h-5 w-5" />,
//   TrendingUp: <TrendingUp className="h-5 w-5" />,
//   Wifi: <Wifi className="h-5 w-5" />,
//   Network: <Network className="h-5 w-5" />,
//   Zap: <Zap className="h-5 w-5" />,
//   Clock: <Clock className="h-5 w-5" />,
// };

// // Default placeholder image as data URL (gray gradient)
// const DEFAULT_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='14'%3ENo Image%3C/text%3E%3C/svg%3E";

// const API_URL = `${BASE_URL}/api/blog`;

// const BlogComingSoon = () => {
//   const [email, setEmail] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [subscribeSuccess, setSubscribeSuccess] = useState(false);
//   const [subscribeError, setSubscribeError] = useState(false);
//   const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
//   const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

//   // Fetch blog posts from API
//   useEffect(() => {
//     fetchBlogPosts();
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     fetchBlogPosts();
//   }, [selectedCategory, searchQuery]);

//   const fetchBlogPosts = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const params: Record<string, string> = {};
//       if (selectedCategory !== "All") params.category = selectedCategory;
//       if (searchQuery) params.search = searchQuery;
      
//       const response = await axios.get(`${API_URL}/posts`, { params });
//       setBlogPosts(response.data);
//     } catch (err) {
//       console.error("Error fetching blog posts:", err);
//       setError("Failed to load blog posts. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/categories`);
//       setCategories(response.data);
//     } catch (err) {
//       console.error("Error fetching categories:", err);
//     }
//   };

//   const handleSubscribe = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) return;
    
//     setSubscribeSuccess(false);
//     setSubscribeError(false);
    
//     try {
//       await axios.post(`${BASE_URL}/api/newsletter/subscribe`, { email });
//       setSubscribeSuccess(true);
//       setEmail("");
//       setTimeout(() => setSubscribeSuccess(false), 5000);
//     } catch (err) {
//       console.error("Subscription error:", err);
//       setSubscribeError(true);
//       setTimeout(() => setSubscribeError(false), 5000);
//     }
//   };

//   const handleReadMore = (post: BlogPost) => {
//     setSelectedPost(post);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setSelectedPost(null);
//     document.body.style.overflow = 'auto';
//   };

//   const handleImageError = (postId: number) => {
//     setImageErrors(prev => ({ ...prev, [postId]: true }));
//   };

//   const getImageUrl = (imagePath: string | undefined) => {
//     if (!imagePath) return null;
//     if (imagePath.startsWith('http')) return imagePath;
//     if (imagePath.startsWith('data:')) return imagePath;
//     return `${BASE_URL}${imagePath}`;
//   };

//   // Close modal on escape key
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') {
//         closeModal();
//       }
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => {
//       window.removeEventListener('keydown', handleEsc);
//       document.body.style.overflow = 'auto';
//     };
//   }, []);

//   // Filter posts based on current selection
//   const filteredPosts = blogPosts.filter(post => {
//     // Filter by category
//     if (selectedCategory !== "All" && post.category !== selectedCategory) {
//       return false;
//     }
//     // Filter by search
//     if (searchQuery) {
//       const searchLower = searchQuery.toLowerCase();
//       return (
//         post.title.toLowerCase().includes(searchLower) ||
//         post.excerpt.toLowerCase().includes(searchLower) ||
//         post.tags?.some(tag => tag.toLowerCase().includes(searchLower))
//       );
//     }
//     return true;
//   });

//   // Separate featured and regular posts from filtered results
//   const featuredPosts = filteredPosts.filter(post => post.featured === 1 || post.featured === true);
//   const regularPosts = filteredPosts.filter(post => !(post.featured === 1 || post.featured === true));

//   // Check if we should show featured section
//   const showFeaturedSection = featuredPosts.length > 0 && selectedCategory === "All" && !searchQuery;

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
//         <div className="text-center">
//           <Loader className="h-12 w-12 animate-spin text-pink-500 mx-auto mb-4" />
//           <p className="text-gray-600">Loading amazing content...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
//         <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-md mx-4">
//           <p className="text-red-500 mb-4">{error}</p>
//           <Button onClick={() => window.location.reload()} className="bg-gradient-to-r from-pink-500 to-blue-500">
//             Try Again
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 text-white py-20 px-4">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative max-w-6xl mx-auto text-center">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl shadow-lg mb-6 backdrop-blur">
//             <Clock className="h-8 w-8 text-white" />
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Tech Infrastructure Insights
//           </h1>
//           <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
//             Expert perspectives on Network Cabling, Artificial Intelligence, and Data Center Infrastructure
//           </p>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 py-12">
       
//         {/* <div className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-2xl p-6 md:p-8 mb-12 border border-pink-200">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="flex items-center gap-4">
//               <div className="hidden md:block p-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-xl">
//                 <Bell className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-gray-800">Never Miss an Update</h3>
//                 <p className="text-gray-600">Subscribe to get the latest articles delivered straight to your inbox</p>
//               </div>
//             </div>
//             <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
//               <div className="relative flex-1">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <Input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="pl-10 w-full md:w-80 bg-white"
//                   required
//                 />
//               </div>
//               <Button type="submit" className="bg-gradient-to-r from-pink-500 to-blue-500 whitespace-nowrap">
//                 Subscribe
//               </Button>
//             </form>
//           </div>
//           {subscribeSuccess && (
//             <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
//               ✅ Thank you for subscribing! Check your inbox for updates.
//             </div>
//           )}
//           {subscribeError && (
//             <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
//               ❌ Subscription failed. Please try again.
//             </div>
//           )}
//         </div> */}

//         {/* Search and Filter */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
//           <div className="flex flex-wrap gap-2">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                   selectedCategory === cat
//                     ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-md"
//                     : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//             <Input
//               type="text"
//               placeholder="Search articles..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pl-10 w-full md:w-64 bg-white"
//             />
//           </div>
//         </div>

//         {/* Featured Posts Section */}
//         {showFeaturedSection && (
//           <div className="mb-12">
//             <div className="flex items-center gap-2 mb-6">
//               <Sparkles className="h-5 w-5 text-pink-500" />
//               <h2 className="text-2xl font-bold text-gray-800">Featured Articles</h2>
//             </div>
//             <div className="grid md:grid-cols-2 gap-6">
//               {featuredPosts.map((post) => (
//                 <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer group">
//                   {/* Featured Image */}
//                   {post.featured_image && !imageErrors[post.id] && (
//                     <div className="relative h-56 overflow-hidden bg-gray-100">
//                       <img 
//                         src={getImageUrl(post.featured_image) || DEFAULT_PLACEHOLDER}
//                         alt={post.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                         onError={() => handleImageError(post.id)}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     </div>
//                   )}
//                   {(imageErrors[post.id] || !post.featured_image) && (
//                     <div className="h-56 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
//                       <div className="text-center">
//                         <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${post.category_color} text-white mb-2`}>
//                           {iconMap[post.icon_name] || <Database className="h-6 w-6" />}
//                         </div>
//                         <p className="text-gray-400 text-sm">No image available</p>
//                       </div>
//                     </div>
//                   )}
//                   <div className={`${!post.featured_image ? 'h-2' : ''} bg-gradient-to-r ${post.category_color}`}></div>
//                   <div className="p-6">
//                     <div className="flex items-center gap-3 mb-3">
//                       <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${post.category_color} text-white`}>
//                         {iconMap[post.icon_name] || <Database className="h-5 w-5" />}
//                         <span>{post.category}</span>
//                       </span>
//                       <span className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
//                       {post.title}
//                     </h3>
//                     <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2 text-sm text-gray-500">
//                         <User className="h-4 w-4" />
//                         <span>{post.author}</span>
//                         <span className="mx-1">•</span>
//                         <Clock className="h-4 w-4" />
//                         <span>{post.read_time}</span>
//                       </div>
//                       <Button 
//                         variant="ghost" 
//                         size="sm" 
//                         className="text-pink-600 hover:text-pink-700"
//                         onClick={() => handleReadMore(post)}
//                       >
//                         Read More <ChevronRight className="h-4 w-4 ml-1" />
//                       </Button>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* All Posts Grid */}
//         <div>
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">
//               {selectedCategory === "All" 
//                 ? (searchQuery ? "Search Results" : "Latest Articles")
//                 : `${selectedCategory} Articles`}
//             </h2>
//             <span className="text-sm text-gray-500">
//               {showFeaturedSection ? regularPosts.length : filteredPosts.length} articles
//             </span>
//           </div>

//           {(!showFeaturedSection ? filteredPosts : regularPosts).length === 0 ? (
//             <div className="text-center py-12 bg-white rounded-2xl">
//               <p className="text-gray-500">No articles found. Try a different search or category.</p>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {(showFeaturedSection ? regularPosts : filteredPosts).map((post) => (
//                 <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100 group cursor-pointer">
//                   {/* Featured Image for regular posts */}
//                   {post.featured_image && !imageErrors[post.id] && (
//                     <div className="relative h-48 overflow-hidden bg-gray-100">
//                       <img 
//                         src={getImageUrl(post.featured_image) || DEFAULT_PLACEHOLDER}
//                         alt={post.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                         onError={() => handleImageError(post.id)}
//                       />
//                     </div>
//                   )}
//                   {(imageErrors[post.id] || !post.featured_image) && (
//                     <div className="h-32 bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center">
//                       <div className="text-center">
//                         <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${post.category_color} text-white mb-1`}>
//                           {iconMap[post.icon_name] || <Database className="h-5 w-5" />}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                   <div className={`${!post.featured_image ? 'h-1' : ''} bg-gradient-to-r ${post.category_color}`}></div>
//                   <div className="p-5">
//                     <div className="flex items-center gap-2 mb-3">
//                       <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${post.category_color} text-white`}>
//                         {iconMap[post.icon_name] || <Database className="h-5 w-5" />}
//                         <span>{post.category}</span>
//                       </span>
//                     </div>
//                     <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
//                       {post.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
//                     <div className="flex items-center justify-between text-xs text-gray-400">
//                       <div className="flex items-center gap-1">
//                         <User className="h-3 w-3" />
//                         <span>{post.author}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <CalendarIcon className="h-3 w-3" />
//                         <span>{new Date(post.date).toLocaleDateString()}</span>
//                       </div>
//                     </div>
//                     <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-1">
//                       {post.tags && post.tags.slice(0, 2).map((tag) => (
//                         <span key={tag} className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
//                           #{tag}
//                         </span>
//                       ))}
//                       {post.tags && post.tags.length > 2 && (
//                         <span className="text-xs text-gray-400">+{post.tags.length - 2}</span>
//                       )}
//                     </div>
//                     <Button 
//                       variant="ghost" 
//                       size="sm" 
//                       className="mt-3 w-full text-pink-600 hover:text-pink-700"
//                       onClick={() => handleReadMore(post)}
//                     >
//                       Read Full Article <ChevronRight className="h-4 w-4 ml-1" />
//                     </Button>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Back to Home Button */}
//         <div className="text-center mt-12 pt-8 border-t border-gray-200">
//           <Button 
//             variant="link" 
//             onClick={() => window.location.href = "/"}
//             className="text-gray-500 hover:text-pink-600"
//           >
//             ← Back to Home
//           </Button>
//         </div>
//       </div>

//       {/* Blog Post Modal */}
//       {selectedPost && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
//           onClick={closeModal}
//         >
//           <div 
//             className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center z-10">
//               <div className="flex items-center gap-2">
//                 <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${selectedPost.category_color} text-white`}>
//                   {iconMap[selectedPost.icon_name] || <Database className="h-4 w-4" />}
//                   <span>{selectedPost.category}</span>
//                 </span>
//                 <span className="text-xs text-gray-400">
//                   {new Date(selectedPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
//                 </span>
//               </div>
//               <button
//                 onClick={closeModal}
//                 className="text-gray-500 hover:text-gray-700 transition-colors"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
            
//             {/* Modal Featured Image */}
//             {selectedPost.featured_image && (
//               <div className="relative w-full h-96 overflow-hidden bg-gray-100">
//                 <img 
//                   src={getImageUrl(selectedPost.featured_image) || DEFAULT_PLACEHOLDER}
//                   alt={selectedPost.title}
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     (e.target as HTMLImageElement).src = DEFAULT_PLACEHOLDER;
//                   }}
//                 />
//               </div>
//             )}
            
//             <div className="p-6 md:p-8">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//                 {selectedPost.title}
//               </h2>
              
//               <div className="flex items-center gap-4 mb-6 pb-4 border-b">
//                 <div className="flex items-center gap-2 text-sm text-gray-500">
//                   <User className="h-4 w-4" />
//                   <span>{selectedPost.author}</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-500">
//                   <Clock className="h-4 w-4" />
//                   <span>{selectedPost.read_time}</span>
//                 </div>
//               </div>
              
//               <div className="prose prose-pink max-w-none">
//                 <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
//               </div>
              
//               {selectedPost.tags && selectedPost.tags.length > 0 && (
//                 <div className="mt-8 pt-4 border-t">
//                   <h4 className="text-sm font-semibold text-gray-700 mb-2">Tags:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedPost.tags.map((tag) => (
//                       <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
//                         #{tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogComingSoon;






// BlogComingSoon.tsx
// BlogComingSoon.tsx
import React, { useState, useEffect } from "react";
import { 
  Clock, Mail, Bell, Calendar, Sparkles, 
  Wifi, Network, Cpu, Server, Database, Zap, 
  TrendingUp, ChevronRight, Search, Loader, X,
  User, Calendar as CalendarIcon, Eye, Heart, MessageCircle, Share2, Bookmark, Tag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import BASE_URL from "@/Config/Api";
import NetworkBackground from "@/components/NetworkBackground";
import SectionWrapper from "@/components/SectionWrapper";
import BlogHeroSection from "./BlogHeroSection";

// Define types
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  category_color: string;
  author: string;
  date: string;
  read_time: string;
  featured: number | boolean;
  tags: string[];
  icon_name: string;
  featured_image?: string;
  gallery_images?: string[];
}

// Map icon names to components
const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="h-5 w-5" />,
  Cpu: <Cpu className="h-5 w-5" />,
  Server: <Server className="h-5 w-5" />,
  TrendingUp: <TrendingUp className="h-5 w-5" />,
  Wifi: <Wifi className="h-5 w-5" />,
  Network: <Network className="h-5 w-5" />,
  Zap: <Zap className="h-5 w-5" />,
  Clock: <Clock className="h-5 w-5" />,
};

// Default placeholder image as data URL (gray gradient)
const DEFAULT_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='14'%3ENo Image%3C/text%3E%3C/svg%3E";

const API_URL = `${BASE_URL}/api/blog`;

const BlogComingSoon = () => {
  const [email, setEmail] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [subscribeError, setSubscribeError] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Fetch blog posts from API
  useEffect(() => {
    fetchBlogPosts();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchBlogPosts();
  }, [selectedCategory, searchQuery]);

  const fetchBlogPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const params: Record<string, string> = {};
      if (selectedCategory !== "All") params.category = selectedCategory;
      if (searchQuery) params.search = searchQuery;
      
      const response = await axios.get(`${API_URL}/posts`, { params });
      setBlogPosts(response.data);
    } catch (err) {
      console.error("Error fetching blog posts:", err);
      setError("Failed to load blog posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/categories`);
      setCategories(["All", ...response.data]);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setSubscribeSuccess(false);
    setSubscribeError(false);
    
    try {
      await axios.post(`${BASE_URL}/api/newsletter/subscribe`, { email });
      setSubscribeSuccess(true);
      setEmail("");
      setTimeout(() => setSubscribeSuccess(false), 5000);
    } catch (err) {
      console.error("Subscription error:", err);
      setSubscribeError(true);
      setTimeout(() => setSubscribeError(false), 5000);
    }
  };

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  const handleImageError = (postId: number) => {
    setImageErrors(prev => ({ ...prev, [postId]: true }));
  };

  const getImageUrl = (imagePath: string | undefined) => {
    if (!imagePath) return null;
    if (imagePath.startsWith('http')) return imagePath;
    if (imagePath.startsWith('data:')) return imagePath;
    return `${BASE_URL}${imagePath}`;
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Filter posts based on current selection
  const filteredPosts = blogPosts.filter(post => {
    if (selectedCategory !== "All" && post.category !== selectedCategory) {
      return false;
    }
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    return true;
  });

  // Separate featured and regular posts from filtered results
  const featuredPosts = filteredPosts.filter(post => post.featured === 1 || post.featured === true);
  const regularPosts = filteredPosts.filter(post => !(post.featured === 1 || post.featured === true));

  // Check if we should show featured section
  const showFeaturedSection = featuredPosts.length > 0 && selectedCategory === "All" && !searchQuery;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="h-12 w-12 animate-spin text-pink-500 mx-auto mb-4" />
          <p className="text-gray-600">Loading amazing content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-md mx-4">
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()} className="bg-gradient-to-r from-pink-500 to-blue-500">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      {/* Hero Section - IMPROVED TEXT VISIBILITY */}
    {/* <BlogHeroSection /> */}

    <section className="relative pt-32 pb-20 overflow-hidden mt-4">

  {/* Background Image */}
  <div className="absolute inset-0 -z-10">
    <img
      src="https://images.unsplash.com/photo-1518770660439-4636190af475"
      alt="Infrastructure Background"
      className="w-full h-full object-cover"
    />

    {/* Bright Gradient Overlay (UPDATED) */}
    <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 via-yellow-400/70 to-blue-600/80"></div>
  </div>

  <NetworkBackground />

  {/* Animated blobs (match gradient theme) */}
  <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-pink-500/20 blur-[120px] animate-mesh-float" />
  <div
    className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px] animate-mesh-float"
    style={{ animationDelay: "3s" }}
  />

  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    <SectionWrapper>
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-8 backdrop-blur-md">
          <TrendingUp size={16} className="text-white" />
          <span className="text-xs uppercase tracking-widest text-white font-semibold">
            Insights & Perspectives
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95]">
          Where <span className="text-yellow-300">Infrastructure</span><br />
          Meets Intelligence
        </h1>

        {/* Description */}
        <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
          Expert Insights, Industry Trends, And Practical Guidance From The Frontlines Of
          <span className="text-yellow-400 font-semibold"> IT Infrastructure</span>,
          <span className="text-pink-600 font-semibold"> Security</span>, And
          <span className="text-blue-600 font-semibold"> Innovation</span>.
        </p>

  

      </div>
    </SectionWrapper>
  </div>
</section>

      {/* Search and Filter Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-sm text-gray-500">
            {filteredPosts.length} articles found
          </div>
        </div>

        {/* Featured Posts Section */}
        {showFeaturedSection && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-pink-500" />
              <h2 className="text-2xl font-bold text-gray-800">Featured Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer group">
                  {/* Featured Image */}
                  {post.featured_image && !imageErrors[post.id] && (
                    <div className="relative h-56 overflow-hidden bg-gray-100">
                      <img 
                        src={getImageUrl(post.featured_image) || DEFAULT_PLACEHOLDER}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => handleImageError(post.id)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  )}
                  {(imageErrors[post.id] || !post.featured_image) && (
                    <div className="h-56 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${post.category_color} text-white mb-2`}>
                          {iconMap[post.icon_name] || <Database className="h-6 w-6" />}
                        </div>
                        <p className="text-gray-400 text-sm">No image available</p>
                      </div>
                    </div>
                  )}
                  <div className={`${!post.featured_image ? 'h-2' : ''} bg-gradient-to-r ${post.category_color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${post.category_color} text-white`}>
                        {iconMap[post.icon_name] || <Database className="h-5 w-5" />}
                        <span>{post.category}</span>
                      </span>
                      <span className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2 capitalize">
                      {post.title}
                    </h3> 
                    <p className="text-gray-600 mb-4 line-clamp-3 capitalize">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                        <span className="mx-1">•</span>
                        <Clock className="h-4 w-4" />
                        <span>{post.read_time}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-pink-600 hover:text-pink-700"
                        onClick={() => handleReadMore(post)}
                      >
                        Read More <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {selectedCategory === "All" 
              ? (searchQuery ? "Search Results" : "Latest Articles")
              : `${selectedCategory} Articles`}
          </h2>

          {(!showFeaturedSection ? filteredPosts : regularPosts).length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl">
              <p className="text-gray-500">No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(showFeaturedSection ? regularPosts : filteredPosts).map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100 group cursor-pointer">
                  {post.featured_image && !imageErrors[post.id] && (
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img 
                        src={getImageUrl(post.featured_image) || DEFAULT_PLACEHOLDER}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => handleImageError(post.id)}
                      />
                    </div>
                  )}
                  {(imageErrors[post.id] || !post.featured_image) && (
                    <div className="h-32 bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${post.category_color} text-white mb-1`}>
                          {iconMap[post.icon_name] || <Database className="h-5 w-5" />}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className={`${!post.featured_image ? 'h-1' : ''} bg-gradient-to-r ${post.category_color}`}></div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${post.category_color} text-white`}>
                        {iconMap[post.icon_name] || <Database className="h-5 w-5" />}
                        <span>{post.category}</span>
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 capitalize">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-1">
                      {post.tags && post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                          #{tag}
                        </span>
                      ))}
                      {post.tags && post.tags.length > 2 && (
                        <span className="text-xs text-gray-400">+{post.tags.length - 2}</span>
                      )}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="mt-3 w-full text-pink-600 hover:text-pink-700"
                      onClick={() => handleReadMore(post)}
                    >
                      Read Full Article <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <Button 
            variant="link" 
            onClick={() => window.location.href = "/"}
            className="text-gray-500 hover:text-pink-600"
          >
            ← Back to Home
          </Button>
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center z-10">
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${selectedPost.category_color} text-white capitalize`}>
                  {iconMap[selectedPost.icon_name] || <Database className="h-4 w-4" />}
                  <span>{selectedPost.category}</span>
                </span>
                <span className="text-xs text-gray-400">
                  {new Date(selectedPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Modal Featured Image */}
            {selectedPost.featured_image && (
              <div className="relative w-full h-96 overflow-hidden bg-gray-100">
                <img 
                  src={getImageUrl(selectedPost.featured_image) || DEFAULT_PLACEHOLDER}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = DEFAULT_PLACEHOLDER;
                  }}
                />
              </div>
            )}
            
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {selectedPost.title}
              </h2>
              
              <div className="flex items-center gap-4 mb-6 pb-4 border-b">
                <div className="flex items-center gap-2 text-sm text-gray-500 capitalize">
                  <User className="h-4 w-4" />
                  <span className="capitalize">{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 capitalize">
                  <Clock className="h-4 w-4" />
                  <span className="capitalize">{selectedPost.read_time}</span>
                </div>
              </div>
              
              <div className="prose prose-pink max-w-none capitalize">
                <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
              </div>
              
              {selectedPost.tags && selectedPost.tags.length > 0 && (
                <div className="mt-8 pt-4 border-t">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogComingSoon;