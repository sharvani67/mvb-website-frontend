// // AdminBlogManager.tsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Plus, Edit, Trash2, Save, X } from "lucide-react";

// // Define types
// interface BlogPost {
//   id?: number;
//   title: string;
//   excerpt: string;
//   content: string;
//   category: string;
//   categoryColor: string;
//   author: string;
//   date: string;
//   readTime: string;
//   featured: boolean;
//   tags: string[];
//   iconName: string;
// }

// const AdminBlogManager = () => {
//   const [posts, setPosts] = useState<BlogPost[]>([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentPost, setCurrentPost] = useState<BlogPost>({
//     title: "",
//     excerpt: "",
//     content: "",
//     category: "",
//     categoryColor: "from-blue-500 to-cyan-500",
//     author: "",
//     date: new Date().toISOString().split('T')[0],
//     readTime: "5 min read",
//     featured: false,
//     tags: [],
//     iconName: "Database"
//   });

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/blog/admin/posts");
//       setPosts(response.data);
//     } catch (err) {
//       console.error("Error fetching posts:", err);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       if (isEditing && currentPost.id) {
//         await axios.put(`http://localhost:5000/api/blog/admin/posts/${currentPost.id}`, currentPost);
//       } else {
//         await axios.post("http://localhost:5000/api/blog/admin/posts", currentPost);
//       }
//       resetForm();
//       fetchPosts();
//     } catch (err) {
//       console.error("Error saving post:", err);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/blog/admin/posts/${id}`);
//         fetchPosts();
//       } catch (err) {
//         console.error("Error deleting post:", err);
//       }
//     }
//   };

//   const resetForm = () => {
//     setIsEditing(false);
//     setCurrentPost({
//       title: "",
//       excerpt: "",
//       content: "",
//       category: "",
//       categoryColor: "from-blue-500 to-cyan-500",
//       author: "",
//       date: new Date().toISOString().split('T')[0],
//       readTime: "5 min read",
//       featured: false,
//       tags: [],
//       iconName: "Database"
//     });
//   };

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Manage Blog Posts</h1>
//         <button
//           onClick={() => {
//             setIsEditing(false);
//             resetForm();
//           }}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
//         >
//           <Plus className="h-5 w-5" /> Create New Post
//         </button>
//       </div>

//       {/* Blog Form */}
//       {(isEditing || (!isEditing && currentPost.title)) && (
//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <input
//               type="text"
//               placeholder="Title"
//               value={currentPost.title}
//               onChange={(e) => setCurrentPost({...currentPost, title: e.target.value})}
//               className="border p-2 rounded"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Category"
//               value={currentPost.category}
//               onChange={(e) => setCurrentPost({...currentPost, category: e.target.value})}
//               className="border p-2 rounded"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Author"
//               value={currentPost.author}
//               onChange={(e) => setCurrentPost({...currentPost, author: e.target.value})}
//               className="border p-2 rounded"
//               required
//             />
//             <input
//               type="date"
//               value={currentPost.date}
//               onChange={(e) => setCurrentPost({...currentPost, date: e.target.value})}
//               className="border p-2 rounded"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Read Time (e.g., 5 min read)"
//               value={currentPost.readTime}
//               onChange={(e) => setCurrentPost({...currentPost, readTime: e.target.value})}
//               className="border p-2 rounded"
//             />
//             <input
//               type="text"
//               placeholder="Tags (comma separated)"
//               value={currentPost.tags.join(", ")}
//               onChange={(e) => setCurrentPost({...currentPost, tags: e.target.value.split(",").map(t => t.trim())})}
//               className="border p-2 rounded"
//             />
//             <select
//               value={currentPost.iconName}
//               onChange={(e) => setCurrentPost({...currentPost, iconName: e.target.value})}
//               className="border p-2 rounded"
//             >
//               <option value="Database">Database</option>
//               <option value="Cpu">CPU</option>
//               <option value="Server">Server</option>
//               <option value="TrendingUp">TrendingUp</option>
//               <option value="Wifi">Wifi</option>
//               <option value="Network">Network</option>
//             </select>
//             <select
//               value={currentPost.categoryColor}
//               onChange={(e) => setCurrentPost({...currentPost, categoryColor: e.target.value})}
//               className="border p-2 rounded"
//             >
//               <option value="from-blue-500 to-cyan-500">Blue to Cyan</option>
//               <option value="from-purple-500 to-pink-500">Purple to Pink</option>
//               <option value="from-green-500 to-emerald-500">Green to Emerald</option>
//               <option value="from-orange-500 to-red-500">Orange to Red</option>
//               <option value="from-red-500 to-rose-500">Red to Rose</option>
//               <option value="from-indigo-500 to-blue-500">Indigo to Blue</option>
//             </select>
//             <label className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={currentPost.featured}
//                 onChange={(e) => setCurrentPost({...currentPost, featured: e.target.checked})}
//               />
//               Featured Post
//             </label>
//           </div>
//           <textarea
//             placeholder="Excerpt (short description)"
//             value={currentPost.excerpt}
//             onChange={(e) => setCurrentPost({...currentPost, excerpt: e.target.value})}
//             className="w-full border p-2 rounded mb-4"
//             rows={3}
//             required
//           />
//           <textarea
//             placeholder="Full Content (HTML supported)"
//             value={currentPost.content}
//             onChange={(e) => setCurrentPost({...currentPost, content: e.target.value})}
//             className="w-full border p-2 rounded mb-4"
//             rows={10}
//             required
//           />
//           <div className="flex gap-2">
//             <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2">
//               <Save className="h-5 w-5" /> {isEditing ? "Update" : "Create"} Post
//             </button>
//             <button type="button" onClick={resetForm} className="bg-gray-500 text-white px-4 py-2 rounded flex items-center gap-2">
//               <X className="h-5 w-5" /> Cancel
//             </button>
//           </div>
//         </form>
//       )}

//       {/* Blog Posts List */}
//       <div className="grid gap-4">
//         {posts.map(post => (
//           <div key={post.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-start">
//             <div className="flex-1">
//               <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
//               <p className="text-gray-600 mb-2">{post.excerpt}</p>
//               <div className="flex gap-2 text-sm text-gray-500">
//                 <span>Category: {post.category}</span>
//                 <span>Author: {post.author}</span>
//                 <span>Date: {new Date(post.date).toLocaleDateString()}</span>
//                 {post.featured && <span className="text-yellow-500">★ Featured</span>}
//               </div>
//             </div>
//             <div className="flex gap-2 ml-4">
//               <button
//                 onClick={() => {
//                   setIsEditing(true);
//                   setCurrentPost(post);
//                 }}
//                 className="text-blue-500 hover:text-blue-700"
//               >
//                 <Edit className="h-5 w-5" />
//               </button>
//               <button
//                 onClick={() => post.id && handleDelete(post.id)}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 <Trash2 className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminBlogManager;





// // AdminBlogManager.tsx
// import React, { useState, useEffect } from "react";
// import { Plus, Edit, Trash2, Save, X, Eye, Calendar, User, Tag, BookOpen } from "lucide-react";
// import axios from "axios";
// import BASE_URL from "@/Config/Api";
// import AdminNavbar from "@/components/AdminNavbar";

// // Define types
// interface BlogPost {
//   id?: number;
//   title: string;
//   excerpt: string;
//   content: string;
//   category: string;
//   categoryColor: string;
//   author: string;
//   date: string;
//   readTime: string;
//   featured: boolean;
//   tags: string[];
//   iconName: string;
// }

// const API_URL = `${BASE_URL}/api/blog`;

// const AdminBlogManager = () => {
//   const [posts, setPosts] = useState<BlogPost[]>([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [showForm, setShowForm] = useState(false);
//   const [currentPost, setCurrentPost] = useState<BlogPost>({
//     title: "",
//     excerpt: "",
//     content: "",
//     category: "",
//     categoryColor: "from-blue-500 to-cyan-500",
//     author: "",
//     date: new Date().toISOString().split('T')[0],
//     readTime: "5 min read",
//     featured: false,
//     tags: [],
//     iconName: "Database"
//   });

//   const recordsPerPage = 10;

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(`${API_URL}/admin/posts`);
//       setPosts(response.data);
//     } catch (err) {
//       console.error("Error fetching posts:", err);
//       setError("Failed to load blog posts. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       if (isEditing && currentPost.id) {
//         await axios.put(`${API_URL}/admin/posts/${currentPost.id}`, currentPost);
//       } else {
//         await axios.post(`${API_URL}/admin/posts`, currentPost);
//       }
//       resetForm();
//       fetchPosts();
//       setShowForm(false);
//     } catch (err) {
//       console.error("Error saving post:", err);
//       alert("Failed to save post. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       setLoading(true);
//       try {
//         await axios.delete(`${API_URL}/admin/posts/${id}`);
//         fetchPosts();
//       } catch (err) {
//         console.error("Error deleting post:", err);
//         alert("Failed to delete post. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const resetForm = () => {
//     setIsEditing(false);
//     setShowForm(false);
//     setCurrentPost({
//       title: "",
//       excerpt: "",
//       content: "",
//       category: "",
//       categoryColor: "from-blue-500 to-cyan-500",
//       author: "",
//       date: new Date().toISOString().split('T')[0],
//       readTime: "5 min read",
//       featured: false,
//       tags: [],
//       iconName: "Database"
//     });
//   };

//   const editPost = (post: BlogPost) => {
//     setIsEditing(true);
//     setShowForm(true);
//     setCurrentPost(post);
//   };

//   // Filter posts based on search
//   const filteredPosts = posts.filter((post) =>
//     post.title?.toLowerCase().includes(search.toLowerCase()) ||
//     post.category?.toLowerCase().includes(search.toLowerCase()) ||
//     post.author?.toLowerCase().includes(search.toLowerCase()) ||
//     post.tags?.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
//   );

//   // Pagination
//   const indexOfLast = currentPage * recordsPerPage;
//   const indexOfFirst = indexOfLast - recordsPerPage;
//   const currentRecords = filteredPosts.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredPosts.length / recordsPerPage);

//   // Format date
//   const formatDate = (dateString: string) => {
//     if (!dateString) return "N/A";
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   // Get icon for category
//   const getCategoryIcon = (iconName: string) => {
//     const icons: Record<string, string> = {
//       Database: "🗄️",
//       Cpu: "⚡",
//       Server: "🖥️",
//       TrendingUp: "📈",
//       Wifi: "📡",
//       Network: "🔗",
//       Zap: "⚡"
//     };
//     return icons[iconName] || "📝";
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <AdminNavbar />

//       <div className="pt-24 px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//           <div>
//             <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
//               Blog Management
//             </h1>
//             <p className="text-gray-600 mt-1">Create, edit, and manage your blog posts</p>
//           </div>
          
//           <div className="flex gap-3">
//             <button
//               onClick={() => {
//                 resetForm();
//                 setShowForm(true);
//               }}
//               className="px-4 py-2 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
//             >
//               <Plus className="h-5 w-5" /> Create New Post
//             </button>
//             <button
//               onClick={fetchPosts}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
//             >
//               🔄 Refresh
//             </button>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-4 text-white">
//             <p className="text-sm opacity-90">Total Posts</p>
//             <p className="text-2xl font-bold">{posts.length}</p>
//           </div>
//           <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-4 text-white">
//             <p className="text-sm opacity-90">Published</p>
//             <p className="text-2xl font-bold">{posts.length}</p>
//           </div>
//           <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
//             <p className="text-sm opacity-90">Featured</p>
//             <p className="text-2xl font-bold">{posts.filter(p => p.featured).length}</p>
//           </div>
//           <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
//             <p className="text-sm opacity-90">Showing</p>
//             <p className="text-2xl font-bold">{currentRecords.length} / {filteredPosts.length}</p>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="mb-6">
//           <div className="relative max-w-md">
//             <input
//               type="text"
//               placeholder="🔍 Search by title, category, author, or tags..."
//               className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//               value={search}
//               onChange={(e) => {
//                 setSearch(e.target.value);
//                 setCurrentPage(1);
//               }}
//             />
//             <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>
//         </div>

//         {/* Blog Form Modal */}
//         {showForm && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
//             <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//               <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
//                 <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
//                   {isEditing ? "Edit Post" : "Create New Post"}
//                 </h2>
//                 <button
//                   onClick={resetForm}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="h-6 w-6" />
//                 </button>
//               </div>
              
//               <form onSubmit={handleSubmit} className="p-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
//                     <input
//                       type="text"
//                       placeholder="Enter blog title"
//                       value={currentPost.title}
//                       onChange={(e) => setCurrentPost({...currentPost, title: e.target.value})}
//                       className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
//                     <input
//                       type="text"
//                       placeholder="e.g., Data Cabling, AI, Network Security"
//                       value={currentPost.category}
//                       onChange={(e) => setCurrentPost({...currentPost, category: e.target.value})}
//                       className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Author *</label>
//                     <input
//                       type="text"
//                       placeholder="Author name"
//                       value={currentPost.author}
//                       onChange={(e) => setCurrentPost({...currentPost, author: e.target.value})}
//                       className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
//                     <input
//                       type="date"
//                       value={currentPost.date}
//                       onChange={(e) => setCurrentPost({...currentPost, date: e.target.value})}
//                       className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Read Time</label>
//                     <input
//                       type="text"
//                       placeholder="e.g., 5 min read"
//                       value={currentPost.readTime}
//                       onChange={(e) => setCurrentPost({...currentPost, readTime: e.target.value})}
//                       className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
//                     <input
//                       type="text"
//                       placeholder="e.g., AI, Machine Learning, Security"
//                       value={currentPost.tags.join(", ")}
//                       onChange={(e) => setCurrentPost({...currentPost, tags: e.target.value.split(",").map(t => t.trim())})}
//                       className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
//                     <select
//                       value={currentPost.iconName}
//                       onChange={(e) => setCurrentPost({...currentPost, iconName: e.target.value})}
//                       className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     >
//                       <option value="Database">🗄️ Database</option>
//                       <option value="Cpu">⚡ CPU</option>
//                       <option value="Server">🖥️ Server</option>
//                       <option value="TrendingUp">📈 TrendingUp</option>
//                       <option value="Wifi">📡 Wifi</option>
//                       <option value="Network">🔗 Network</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Gradient Color</label>
//                     <select
//                       value={currentPost.categoryColor}
//                       onChange={(e) => setCurrentPost({...currentPost, categoryColor: e.target.value})}
//                       className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     >
//                       <option value="from-blue-500 to-cyan-500">Blue to Cyan</option>
//                       <option value="from-purple-500 to-pink-500">Purple to Pink</option>
//                       <option value="from-green-500 to-emerald-500">Green to Emerald</option>
//                       <option value="from-orange-500 to-red-500">Orange to Red</option>
//                       <option value="from-red-500 to-rose-500">Red to Rose</option>
//                       <option value="from-indigo-500 to-blue-500">Indigo to Blue</option>
//                     </select>
//                   </div>
//                   <div className="flex items-center">
//                     <label className="flex items-center gap-2 cursor-pointer">
//                       <input
//                         type="checkbox"
//                         checked={currentPost.featured}
//                         onChange={(e) => setCurrentPost({...currentPost, featured: e.target.checked})}
//                         className="w-4 h-4 text-pink-600 rounded focus:ring-pink-500"
//                       />
//                       <span className="text-sm font-medium text-gray-700">Featured Post</span>
//                     </label>
//                   </div>
//                 </div>
                
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt *</label>
//                   <textarea
//                     placeholder="Short description (will appear in blog cards)"
//                     value={currentPost.excerpt}
//                     onChange={(e) => setCurrentPost({...currentPost, excerpt: e.target.value})}
//                     className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     rows={3}
//                     required
//                   />
//                 </div>
                
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Full Content * (HTML supported)</label>
//                   <textarea
//                     placeholder="Write your blog content here. You can use HTML tags for formatting."
//                     value={currentPost.content}
//                     onChange={(e) => setCurrentPost({...currentPost, content: e.target.value})}
//                     className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent font-mono"
//                     rows={12}
//                     required
//                   />
//                 </div>
                
//                 <div className="flex gap-3 justify-end">
//                   <button
//                     type="button"
//                     onClick={resetForm}
//                     className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
//                     disabled={loading}
//                   >
//                     <Save className="h-5 w-5" /> {isEditing ? "Update" : "Create"} Post
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

//         {/* Loading State */}
//         {loading && !showForm && (
//           <div className="flex justify-center items-center py-20">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
//           </div>
//         )}

//         {/* Error State */}
//         {error && !loading && (
//           <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
//             <p className="text-red-600">{error}</p>
//             <button
//               onClick={fetchPosts}
//               className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//             >
//               Try Again
//             </button>
//           </div>
//         )}

//         {/* Blog Posts Table */}
//         {!loading && !error && (
//           <>
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse">
//                   <thead className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white">
//                     <tr>
//                       <th className="p-4 text-sm font-semibold">#</th>
//                       <th className="p-4 text-sm font-semibold">Title</th>
//                       <th className="p-4 text-sm font-semibold">Category</th>
//                       <th className="p-4 text-sm font-semibold">Author</th>
//                       <th className="p-4 text-sm font-semibold">Date</th>
//                       <th className="p-4 text-sm font-semibold">Tags</th>
//                       <th className="p-4 text-sm font-semibold">Featured</th>
//                       <th className="p-4 text-sm font-semibold">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {currentRecords.length > 0 ? (
//                       currentRecords.map((post, index) => (
//                         <tr
//                           key={post.id}
//                           className="border-b hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50 transition-all duration-300"
//                         >
//                           <td className="p-4 text-sm text-gray-500 font-medium">
//                             {indexOfFirst + index + 1}
//                           </td>
//                           <td className="p-4">
//                             <div>
//                               <div className="font-semibold text-gray-800">{post.title}</div>
//                               <div className="text-xs text-gray-500 mt-1 line-clamp-1">{post.excerpt}</div>
//                             </div>
//                           </td>
//                           <td className="p-4">
//                             <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700">
//                               {getCategoryIcon(post.iconName)} {post.category}
//                             </span>
//                           </td>
//                           <td className="p-4">
//                             <div className="flex items-center gap-1">
//                               <User className="h-3 w-3 text-gray-400" />
//                               <span className="text-sm text-gray-600">{post.author}</span>
//                             </div>
//                           </td>
//                           <td className="p-4">
//                             <div className="flex items-center gap-1">
//                               <Calendar className="h-3 w-3 text-gray-400" />
//                               <span className="text-sm text-gray-600">{formatDate(post.date)}</span>
//                             </div>
//                           </td>
//                           <td className="p-4">
//                             <div className="flex flex-wrap gap-1">
//                               {post.tags?.slice(0, 2).map((tag) => (
//                                 <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
//                                   <Tag className="h-2 w-2" />
//                                   {tag}
//                                 </span>
//                               ))}
//                               {post.tags?.length > 2 && (
//                                 <span className="text-xs text-gray-400">+{post.tags.length - 2}</span>
//                               )}
//                             </div>
//                           </td>
//                           <td className="p-4">
//                             {post.featured ? (
//                               <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
//                                 ⭐ Featured
//                               </span>
//                             ) : (
//                               <span className="text-xs text-gray-400">-</span>
//                             )}
//                           </td>
//                           <td className="p-4">
//                             <div className="flex gap-2">
//                               <button
//                                 onClick={() => editPost(post)}
//                                 className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
//                                 title="Edit"
//                               >
//                                 <Edit className="h-5 w-5" />
//                               </button>
//                               <button
//                                 onClick={() => post.id && handleDelete(post.id)}
//                                 className="text-red-500 hover:text-red-700 transition-colors duration-300"
//                                 title="Delete"
//                               >
//                                 <Trash2 className="h-5 w-5" />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan={8} className="text-center py-12">
//                           <div className="text-gray-400">
//                             <BookOpen className="mx-auto h-12 w-12 mb-3" />
//                             <p className="text-lg font-medium">No blog posts found</p>
//                             <p className="text-sm mt-1">Click "Create New Post" to add your first blog post.</p>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className="flex justify-center items-center mt-8 gap-2 flex-wrap">
//                 <button
//                   onClick={() => setCurrentPage(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
//                 >
//                   ← Previous
//                 </button>
                
//                 <div className="flex gap-2">
//                   {[...Array(totalPages)].map((_, i) => {
//                     const pageNum = i + 1;
//                     if (
//                       pageNum === 1 ||
//                       pageNum === totalPages ||
//                       (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
//                     ) {
//                       return (
//                         <button
//                           key={i}
//                           onClick={() => setCurrentPage(pageNum)}
//                           className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
//                             currentPage === pageNum
//                               ? "bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white shadow-md"
//                               : "bg-white border border-gray-300 hover:bg-gray-50"
//                           }`}
//                         >
//                           {pageNum}
//                         </button>
//                       );
//                     } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
//                       return <span key={i} className="px-2 py-2 text-gray-400">...</span>;
//                     }
//                     return null;
//                   })}
//                 </div>

//                 <button
//                   onClick={() => setCurrentPage(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                   className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
//                 >
//                   Next →
//                 </button>
//               </div>
//             )}

//             {/* Results Info */}
//             <div className="text-center mt-4 text-sm text-gray-500">
//               Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredPosts.length)} of {filteredPosts.length} entries
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminBlogManager;



// AdminBlogManager.tsx
import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Save, X, Image as ImageIcon } from "lucide-react";
import axios from "axios";
import BASE_URL from "@/Config/Api";
import AdminNavbar from "@/components/AdminNavbar";

// Define types
interface BlogPost {
  id?: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryColor: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
  iconName: string;
  featured_image?: string;
  gallery_images?: string[];
}

const API_URL = `${BASE_URL}/api/blog`;

const AdminBlogManager = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [currentPost, setCurrentPost] = useState<BlogPost>({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    categoryColor: "from-blue-500 to-cyan-500",
    author: "",
    date: new Date().toISOString().split('T')[0],
    readTime: "5 min read",
    featured: false,
    tags: [],
    iconName: "Database",
    featured_image: "",
    gallery_images: []
  });

  const recordsPerPage = 10;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}/admin/posts`);
      setPosts(response.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Failed to load blog posts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData();
    formData.append("title", currentPost.title);
    formData.append("excerpt", currentPost.excerpt);
    formData.append("content", currentPost.content);
    formData.append("category", currentPost.category);
    formData.append("categoryColor", currentPost.categoryColor);
    formData.append("author", currentPost.author);
    formData.append("date", currentPost.date);
    formData.append("readTime", currentPost.readTime);
    formData.append("featured", currentPost.featured ? "true" : "false");
    formData.append("tags", JSON.stringify(currentPost.tags));
    formData.append("iconName", currentPost.iconName);
    
    if (selectedFile) {
      formData.append("featured_image", selectedFile);
    }
    
    if (currentPost.featured_image && !selectedFile) {
      formData.append("existing_featured_image", currentPost.featured_image);
    }

    try {
      if (isEditing && currentPost.id) {
        const response = await axios.put(`${API_URL}/admin/posts/${currentPost.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        console.log("Update response:", response.data);
      } else {
        const response = await axios.post(`${API_URL}/admin/posts`, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        console.log("Create response:", response.data);
      }
      resetForm();
      await fetchPosts();
      setShowForm(false);
      alert(isEditing ? "Post updated successfully!" : "Post created successfully!");
    } catch (err: any) {
      console.error("Error saving post:", err);
      alert(err.response?.data?.error || "Failed to save post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setLoading(true);
      try {
        await axios.delete(`${API_URL}/admin/posts/${id}`);
        await fetchPosts();
        alert("Post deleted successfully!");
      } catch (err) {
        console.error("Error deleting post:", err);
        alert("Failed to delete post. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setShowForm(false);
    setSelectedFile(null);
    setImagePreview("");
    setCurrentPost({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      categoryColor: "from-blue-500 to-cyan-500",
      author: "",
      date: new Date().toISOString().split('T')[0],
      readTime: "5 min read",
      featured: false,
      tags: [],
      iconName: "Database",
      featured_image: "",
      gallery_images: []
    });
  };

  const editPost = (post: BlogPost) => {
    setIsEditing(true);
    setShowForm(true);
    setCurrentPost(post);
    if (post.featured_image) {
      const imageUrl = post.featured_image.startsWith('http') 
        ? post.featured_image 
        : `${BASE_URL}${post.featured_image}`;
      setImagePreview(imageUrl);
    } else {
      setImagePreview("");
    }
    setSelectedFile(null);
  };

  // Filter posts based on search
  const filteredPosts = posts.filter((post) =>
    post.title?.toLowerCase().includes(search.toLowerCase()) ||
    post.category?.toLowerCase().includes(search.toLowerCase()) ||
    post.author?.toLowerCase().includes(search.toLowerCase()) ||
    post.tags?.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );

  // Pagination
  const indexOfLast = currentPage * recordsPerPage;
  const indexOfFirst = indexOfLast - recordsPerPage;
  const currentRecords = filteredPosts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredPosts.length / recordsPerPage);

  // Format date
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getImageUrl = (imagePath: string | undefined) => {
  if (!imagePath) return null;
  // If it's already a full URL
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  // If it's a data URL
  if (imagePath.startsWith('data:')) {
    return imagePath;
  }
  // Otherwise, prepend BASE_URL
  return `${BASE_URL}${imagePath}`;
};
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />

      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
              Blog Management
            </h1>
            <p className="text-gray-600 mt-1">Create, edit, and manage your blog posts</p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => {
                resetForm();
                setShowForm(true);
              }}
              className="px-4 py-2 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Plus className="h-5 w-5" /> Create New Post
            </button>
            <button
              onClick={fetchPosts}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
            >
              🔄 Refresh
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">Total Posts</p>
            <p className="text-2xl font-bold">{posts.length}</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">Published</p>
            <p className="text-2xl font-bold">{posts.length}</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">Featured</p>
            <p className="text-2xl font-bold">{posts.filter(p => p.featured).length}</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">Showing</p>
            <p className="text-2xl font-bold">{currentRecords.length} / {filteredPosts.length}</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="🔍 Search by title, category, author, or tags..."
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
            <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Blog Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                  {isEditing ? "Edit Post" : "Create New Post"}
                </h2>
                <button
                  onClick={resetForm}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                    <input
                      type="text"
                      placeholder="Enter blog title"
                      value={currentPost.title}
                      onChange={(e) => setCurrentPost({...currentPost, title: e.target.value})}
                      className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                    <input
                      type="text"
                      placeholder="e.g., Data Cabling, AI, Network Security"
                      value={currentPost.category}
                      onChange={(e) => setCurrentPost({...currentPost, category: e.target.value})}
                      className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Author *</label>
                    <input
                      type="text"
                      placeholder="Author name"
                      value={currentPost.author}
                      onChange={(e) => setCurrentPost({...currentPost, author: e.target.value})}
                      className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                    <input
                      type="date"
                      value={currentPost.date}
                      onChange={(e) => setCurrentPost({...currentPost, date: e.target.value})}
                      className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Read Time</label>
                    <input
                      type="text"
                      placeholder="e.g., 5 min read"
                      value={currentPost.readTime}
                      onChange={(e) => setCurrentPost({...currentPost, readTime: e.target.value})}
                      className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
                    <input
                      type="text"
                      placeholder="e.g., AI, Machine Learning, Security"
                      value={currentPost.tags.join(", ")}
                      onChange={(e) => setCurrentPost({...currentPost, tags: e.target.value.split(",").map(t => t.trim())})}
                      className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                    <select
                      value={currentPost.iconName}
                      onChange={(e) => setCurrentPost({...currentPost, iconName: e.target.value})}
                      className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="Database">🗄️ Database</option>
                      <option value="Cpu">⚡ CPU</option>
                      <option value="Server">🖥️ Server</option>
                      <option value="TrendingUp">📈 TrendingUp</option>
                      <option value="Wifi">📡 Wifi</option>
                      <option value="Network">🔗 Network</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gradient Color</label>
                    <select
                      value={currentPost.categoryColor}
                      onChange={(e) => setCurrentPost({...currentPost, categoryColor: e.target.value})}
                      className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="from-blue-500 to-cyan-500">Blue to Cyan</option>
                      <option value="from-purple-500 to-pink-500">Purple to Pink</option>
                      <option value="from-green-500 to-emerald-500">Green to Emerald</option>
                      <option value="from-orange-500 to-red-500">Orange to Red</option>
                      <option value="from-red-500 to-rose-500">Red to Rose</option>
                      <option value="from-indigo-500 to-blue-500">Indigo to Blue</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={currentPost.featured}
                        onChange={(e) => setCurrentPost({...currentPost, featured: e.target.checked})}
                        className="w-4 h-4 text-pink-600 rounded focus:ring-pink-500"
                      />
                      <span className="text-sm font-medium text-gray-700">Featured Post</span>
                    </label>
                  </div>
                </div>
                
                {/* Featured Image Upload */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">Upload JPG, PNG, or GIF (Max 5MB)</p>
                    </div>
                    {imagePreview && (
                      <div className="relative">
                        <img 
                          src={imagePreview} 
                          alt="Preview" 
                          className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/80x80?text=Error';
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedFile(null);
                            setImagePreview("");
                            setCurrentPost({...currentPost, featured_image: ""});
                          }}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Overview *</label>
                  <textarea
                    placeholder="Short description (will appear in blog cards)"
                    value={currentPost.excerpt}
                    onChange={(e) => setCurrentPost({...currentPost, excerpt: e.target.value})}
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    rows={3}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Content * (HTML supported)</label>
                  <textarea
                    placeholder="Write your blog content here. You can use HTML tags for formatting."
                    value={currentPost.content}
                    onChange={(e) => setCurrentPost({...currentPost, content: e.target.value})}
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent font-mono"
                    rows={12}
                    required
                  />
                </div>
                
                <div className="flex gap-3 justify-end">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                    disabled={loading}
                  >
                    <Save className="h-5 w-5" /> {isEditing ? "Update" : "Create"} Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && !showForm && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
            <p className="text-red-600">{error}</p>
            <button
              onClick={fetchPosts}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Blog Posts Table */}
        {!loading && !error && (
          <>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white">
                    <tr>
                      <th className="p-4 text-sm font-semibold">Image</th>
                      <th className="p-4 text-sm font-semibold">Title</th>
                      <th className="p-4 text-sm font-semibold">Category</th>
                      <th className="p-4 text-sm font-semibold">Author</th>
                      <th className="p-4 text-sm font-semibold">Date</th>
                      <th className="p-4 text-sm font-semibold">Featured</th>
                      <th className="p-4 text-sm font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRecords.length > 0 ? (
                      currentRecords.map((post, index) => (
                        <tr
                          key={post.id}
                          className="border-b hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50 transition-all duration-300"
                        >
                          <td className="p-4">
  {post.featured_image ? (
    <img 
      src={getImageUrl(post.featured_image)} 
      alt={post.title}
      className="w-12 h-12 object-cover rounded-lg"
      onError={(e) => {
        console.error('Image failed to load:', getImageUrl(post.featured_image));
        (e.target as HTMLImageElement).style.display = 'none';
        (e.target as HTMLImageElement).nextSibling?.style?.removeProperty('display');
      }}
    />
  ) : null}
  {!post.featured_image && (
    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
      <ImageIcon className="h-6 w-6 text-gray-400" />
    </div>
  )}
</td>
                          <td className="p-4">
                            <div>
                              <div className="font-semibold text-gray-800">{post.title}</div>
                              <div className="text-xs text-gray-500 mt-1 line-clamp-1">{post.excerpt}</div>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700">
                              {post.category}
                            </span>
                          </td>
                          <td className="p-4 text-sm text-gray-600">{post.author}</td>
                          <td className="p-4 text-sm text-gray-600">{formatDate(post.date)}</td>
                          <td className="p-4">
                            {post.featured ? (
                              <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                                ⭐ Featured
                              </span>
                            ) : (
                              <span className="text-xs text-gray-400">-</span>
                            )}
                          </td>
                          <td className="p-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => editPost(post)}
                                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                                title="Edit"
                              >
                                <Edit className="h-5 w-5" />
                              </button>
                              <button
                                onClick={() => post.id && handleDelete(post.id)}
                                className="text-red-500 hover:text-red-700 transition-colors duration-300"
                                title="Delete"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="text-center py-12">
                          <div className="text-gray-400">
                            <p className="text-lg font-medium">No blog posts found</p>
                            <p className="text-sm mt-1">Click "Create New Post" to add your first blog post.</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-8 gap-2 flex-wrap">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  ← Previous
                </button>
                
                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, i) => {
                    const pageNum = i + 1;
                    if (
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                            currentPage === pageNum
                              ? "bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white shadow-md"
                              : "bg-white border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                      return <span key={i} className="px-2 py-2 text-gray-400">...</span>;
                    }
                    return null;
                  })}
                </div>

                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  Next →
                </button>
              </div>
            )}

            {/* Results Info */}
            <div className="text-center mt-4 text-sm text-gray-500">
              Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredPosts.length)} of {filteredPosts.length} entries
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminBlogManager;