// // AdminProjects.tsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AdminNavbar from '@/components/AdminNavbar';
// import BASE_URL from '@/Config/Api';
// import { useNavigate } from 'react-router-dom';
// import { Eye, Edit, Trash2, Plus, X } from 'lucide-react';

// interface Project {
//   id: number;
//   title: string;
//   category: string;
//   description: string;
//   icon: string;
//   gradient: string;
//   image: string | null;
//   client?: string;
//   location?: string;
//   created_at?: string;
// }

// const AdminProjects: React.FC = () => {
//   const navigate = useNavigate();
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [fetching, setFetching] = useState(true);
//   const [editingProject, setEditingProject] = useState<Project | null>(null);
//   const [viewingProject, setViewingProject] = useState<Project | null>(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     category: '',
//     description: '',
//     icon: '📁',
//     gradient: 'from-gray-600 to-gray-400',
//     client: '',
//     location: '',
//   });
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);
//   const [previewImage, setPreviewImage] = useState<string | null>(null);

//   // Use BASE_URL from config
//   const API_URL = `${BASE_URL}/api`;

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       setFetching(true);
//       const response = await axios.get(`${API_URL}/projects`);
//       if (response.data.success) {
//         setProjects(response.data.data);
//       } else if (Array.isArray(response.data)) {
//         setProjects(response.data);
//       } else {
//         setProjects([]);
//       }
//     } catch (error) {
//       console.error("Error fetching projects:", error);
//       setProjects([]);
//     } finally {
//       setFetching(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const formDataToSend = new FormData();
//     formDataToSend.append('title', formData.title);
//     formDataToSend.append('category', formData.category);
//     formDataToSend.append('description', formData.description);
//     formDataToSend.append('icon', formData.icon);
//     formDataToSend.append('gradient', formData.gradient);
//     formDataToSend.append('client', formData.client);
//     formDataToSend.append('location', formData.location);
//     if (selectedImage) {
//       formDataToSend.append('image', selectedImage);
//     }

//     try {
//       if (editingProject) {
//         await axios.put(`${API_URL}/projects/${editingProject.id}`, formDataToSend);
//         alert('Project updated successfully!');
//       } else {
//         await axios.post(`${API_URL}/projects`, formDataToSend);
//         alert('Project added successfully!');
//       }
      
//       fetchProjects();
//       resetForm();
//     } catch (error: any) {
//       console.error("Error saving project:", error);
//       alert(error.response?.data?.message || 'Error saving project');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     if (window.confirm('Are you sure you want to delete this project?')) {
//       try {
//         await axios.delete(`${API_URL}/projects/${id}`);
//         fetchProjects();
//         alert('Project deleted successfully!');
//       } catch (error) {
//         console.error("Error deleting project:", error);
//         alert('Error deleting project');
//       }
//     }
//   };

//   const handleEdit = (project: Project) => {
//     setEditingProject(project);
//     setViewingProject(null);
//     setFormData({
//       title: project.title,
//       category: project.category,
//       description: project.description,
//       icon: project.icon,
//       gradient: project.gradient,
//       client: project.client || '',
//       location: project.location || '',
//     });
//     setSelectedImage(null);
//     setPreviewImage(project.image ? `${BASE_URL}${project.image}` : null);
//   };

//   const handleView = (project: Project) => {
//     setViewingProject(project);
//     setEditingProject(null);
//   };

//   const closeViewModal = () => {
//     setViewingProject(null);
//   };

//   const resetForm = () => {
//     setEditingProject(null);
//     setFormData({
//       title: '',
//       category: '',
//       description: '',
//       icon: '📁',
//       gradient: 'from-gray-600 to-gray-400',
//       client: '',
//       location: '',
//     });
//     setSelectedImage(null);
//     setPreviewImage(null);
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null;
//     setSelectedImage(file);
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreviewImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setPreviewImage(null);
//     }
//   };

//   const gradientOptions = [
//     { value: "from-blue-600 to-blue-400", label: "Blue" },
//     { value: "from-green-600 to-green-400", label: "Green" },
//     { value: "from-orange-600 to-orange-400", label: "Orange" },
//     { value: "from-purple-600 to-purple-400", label: "Purple" },
//     { value: "from-red-600 to-red-400", label: "Red" },
//     { value: "from-teal-600 to-teal-400", label: "Teal" },
//     { value: "from-indigo-600 to-indigo-400", label: "Indigo" },
//     { value: "from-pink-600 to-pink-400", label: "Pink" },
//     { value: "from-gray-600 to-gray-400", label: "Gray" },
//     { value: "from-cyan-600 to-cyan-400", label: "Cyan" },
//     { value: "from-amber-600 to-amber-400", label: "Amber" },
//   ];

//   const iconOptions = ["🏢", "🧬", "🔥", "🧪", "🔄", "🏫", "📁", "⚡", "🔒", "🌐", "☁️", "🖥️", "📡", "🔧", "💡", "🎯", "⭐", "🚀"];

//   // Format date for display
//   const formatDate = (dateString?: string) => {
//     if (!dateString) return 'N/A';
//     return new Date(dateString).toLocaleDateString('en-IN', {
//       day: '2-digit',
//       month: 'short',
//       year: 'numeric',
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <AdminNavbar />
      
//       <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
//               Manage Projects
//             </h1>
//             <p className="text-gray-600 mt-2">Add, edit, or remove projects from your portfolio</p>
//           </div>

//           {/* Add/Edit Form */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
//             <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//               {editingProject ? (
//                 <>
//                   <Edit className="h-5 w-5 text-blue-600" />
//                   <span>Edit Project</span>
//                 </>
//               ) : (
//                 <>
//                   <Plus className="h-5 w-5 text-green-600" />
//                   <span>Add New Project</span>
//                 </>
//               )}
//             </h2>
            
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.title}
//                     onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     placeholder="Enter project title"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.category}
//                     onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     placeholder="e.g., Infrastructure, Enterprise, Manufacturing"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
//                 <textarea
//                   required
//                   rows={4}
//                   value={formData.description}
//                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                   placeholder="Describe the project details..."
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Client (Optional)</label>
//                   <input
//                     type="text"
//                     value={formData.client}
//                     onChange={(e) => setFormData({ ...formData, client: e.target.value })}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     placeholder="Client name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Location (Optional)</label>
//                   <input
//                     type="text"
//                     value={formData.location}
//                     onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     placeholder="Project location"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
//                   <div className="flex flex-wrap gap-2 mt-1">
//                     {iconOptions.slice(0, 8).map((icon) => (
//                       <button
//                         key={icon}
//                         type="button"
//                         onClick={() => setFormData({ ...formData, icon })}
//                         className={`text-2xl p-2 rounded-lg border transition-all ${
//                           formData.icon === icon 
//                             ? 'border-pink-500 bg-pink-50 shadow-md scale-110' 
//                             : 'border-gray-300 hover:border-gray-400 hover:scale-105'
//                         }`}
//                       >
//                         {icon}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Gradient Color</label>
//                   <div className="grid grid-cols-3 gap-2 mt-1">
//                     {gradientOptions.slice(0, 6).map((gradient) => (
//                       <button
//                         key={gradient.value}
//                         type="button"
//                         onClick={() => setFormData({ ...formData, gradient: gradient.value })}
//                         className={`px-3 py-2 rounded-lg text-white text-sm font-medium bg-gradient-to-r ${gradient.value} ${
//                           formData.gradient === gradient.value ? 'ring-2 ring-pink-500 ring-offset-2' : ''
//                         }`}
//                       >
//                         {gradient.label}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Project Image</label>
//                 <div className="flex items-center gap-4">
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                   />
//                   {previewImage && (
//                     <div className="relative">
//                       <img 
//                         src={previewImage} 
//                         alt="Preview" 
//                         className="w-16 h-16 object-cover rounded-lg border"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setSelectedImage(null);
//                           setPreviewImage(null);
//                         }}
//                         className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
//                       >
//                         ×
//                       </button>
//                     </div>
//                   )}
//                 </div>
//                 <p className="text-xs text-gray-500 mt-1">Accepted formats: JPG, PNG, GIF, WEBP (Max 5MB)</p>
//               </div>

//               <div className="flex gap-3 pt-2">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="px-6 py-2 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition disabled:opacity-50 font-medium shadow-md"
//                 >
//                   {loading ? (
//                     <span className="flex items-center gap-2">
//                       <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                       Saving...
//                     </span>
//                   ) : (
//                     editingProject ? 'Update Project' : 'Add Project'
//                   )}
//                 </button>
//                 {editingProject && (
//                   <button
//                     type="button"
//                     onClick={resetForm}
//                     className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition font-medium"
//                   >
//                     Cancel
//                   </button>
//                 )}
//               </div>
//             </form>
//           </div>

//           {/* Projects List */}
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
//             <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
//               <h2 className="text-xl font-semibold text-gray-800">Existing Projects</h2>
//               <p className="text-sm text-gray-500 mt-1">Total: {projects.length} projects</p>
//             </div>
            
//             {fetching ? (
//               <div className="flex justify-center items-center py-20">
//                 <div className="text-center">
//                   <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
//                   <p className="text-gray-500">Loading projects...</p>
//                 </div>
//               </div>
//             ) : projects.length === 0 ? (
//               <div className="text-center py-20">
//                 <div className="text-6xl mb-4">📭</div>
//                 <p className="text-gray-500">No projects found. Add your first project above!</p>
//               </div>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Icon</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {projects.map((project) => (
//                       <tr key={project.id} className="hover:bg-gray-50 transition">
//                         <td className="px-6 py-4 text-2xl">{project.icon}</td>
//                         <td className="px-6 py-4">
//                           <div className="font-medium text-gray-900">{project.title}</div>
//                           {project.client && (
//                             <div className="text-xs text-gray-500 mt-1">Client: {project.client}</div>
//                           )}
//                         </td>
//                         <td className="px-6 py-4">
//                           <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700">
//                             {project.category}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 max-w-md">
//                           <p className="text-gray-600 line-clamp-2">{project.description}</p>
//                         </td>
//                         <td className="px-6 py-4">
//                           {project.image ? (
//                             <img 
//                               src={`${BASE_URL}${project.image}`} 
//                               alt={project.title}
//                               className="w-12 h-12 object-cover rounded-lg border"
//                               onError={(e) => {
//                                 (e.target as HTMLImageElement).src = 'https://via.placeholder.com/48?text=No+Image';
//                               }}
//                             />
//                           ) : (
//                             <span className="text-gray-400 text-sm">No image</span>
//                           )}
//                         </td>
//                         <td className="px-6 py-4">
//                           <div className="flex gap-2">
//                             <button
//                               onClick={() => handleView(project)}
//                               className="text-green-600 hover:text-green-800 transition px-2 py-1 rounded hover:bg-green-50 flex items-center gap-1"
//                               title="View Project"
//                             >
//                               <Eye className="h-4 w-4" />
//                               View
//                             </button>
//                             <button
//                               onClick={() => handleEdit(project)}
//                               className="text-blue-600 hover:text-blue-800 transition px-2 py-1 rounded hover:bg-blue-50 flex items-center gap-1"
//                               title="Edit Project"
//                             >
//                               <Edit className="h-4 w-4" />
//                               Edit
//                             </button>
//                             <button
//                               onClick={() => handleDelete(project.id)}
//                               className="text-red-600 hover:text-red-800 transition px-2 py-1 rounded hover:bg-red-50 flex items-center gap-1"
//                               title="Delete Project"
//                             >
//                               <Trash2 className="h-4 w-4" />
//                               Delete
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* View Project Modal */}
//       {viewingProject && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className={`h-2 bg-gradient-to-r ${viewingProject.gradient}`}></div>
            
//             <div className="p-6">
//               {/* Modal Header */}
//               <div className="flex justify-between items-start mb-6">
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900">{viewingProject.title}</h2>
//                   <div className="flex items-center gap-2 mt-2">
//                     <span className="text-2xl">{viewingProject.icon}</span>
//                     <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700">
//                       {viewingProject.category}
//                     </span>
//                   </div>
//                 </div>
//                 <button
//                   onClick={closeViewModal}
//                   className="text-gray-500 hover:text-gray-700 transition"
//                 >
//                   <X className="h-6 w-6" />
//                 </button>
//               </div>

//               {/* Project Image */}
//               {viewingProject.image && (
//                 <div className="mb-6">
//                   <img 
//                     src={`${BASE_URL}${viewingProject.image}`} 
//                     alt={viewingProject.title}
//                     className="w-full h-64 object-cover rounded-xl"
//                     onError={(e) => {
//                       (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x400?text=No+Image';
//                     }}
//                   />
//                 </div>
//               )}

//               {/* Project Details */}
//               <div className="space-y-4">
//                 {/* Description */}
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
//                   <p className="text-gray-600 leading-relaxed">{viewingProject.description}</p>
//                 </div>

//                 {/* Client & Location */}
//                 {(viewingProject.client || viewingProject.location) && (
//                   <div className="grid grid-cols-2 gap-4">
//                     {viewingProject.client && (
//                       <div>
//                         <h3 className="text-sm font-semibold text-gray-500 mb-1">Client</h3>
//                         <p className="text-gray-800">{viewingProject.client}</p>
//                       </div>
//                     )}
//                     {viewingProject.location && (
//                       <div>
//                         <h3 className="text-sm font-semibold text-gray-500 mb-1">Location</h3>
//                         <p className="text-gray-800">{viewingProject.location}</p>
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {/* Created Date */}
//                 {viewingProject.created_at && (
//                   <div>
//                     <h3 className="text-sm font-semibold text-gray-500 mb-1">Created On</h3>
//                     <p className="text-gray-800">{formatDate(viewingProject.created_at)}</p>
//                   </div>
//                 )}

//                 {/* Gradient Info */}
//                 <div>
//                   <h3 className="text-sm font-semibold text-gray-500 mb-1">Gradient Color</h3>
//                   <div className={`w-32 h-8 rounded-lg bg-gradient-to-r ${viewingProject.gradient}`}></div>
//                 </div>
//               </div>

//               {/* Modal Footer */}
//               <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
//                 <button
//                   onClick={() => {
//                     handleEdit(viewingProject);
//                     closeViewModal();
//                   }}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
//                 >
//                   <Edit className="h-4 w-4" />
//                   Edit Project
//                 </button>
//                 <button
//                   onClick={closeViewModal}
//                   className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminProjects;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AdminNavbar from '@/components/AdminNavbar';
// import BASE_URL from '@/Config/Api';
// import { useNavigate } from 'react-router-dom';
// import { Eye, Edit, Trash2, Plus, X } from 'lucide-react';

// interface Project {
//   id: number;
//   title: string;
//   category: string;
//   description: string;
//   client_expectation?: string;
//   solution?: string;
//   approach?: string;
//   icon: string;
//   gradient: string;
// }

// const AdminProjects: React.FC = () => {
//   const navigate = useNavigate();
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [fetching, setFetching] = useState(true);
//   const [editingProject, setEditingProject] = useState<Project | null>(null);
//   const [viewingProject, setViewingProject] = useState<Project | null>(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     category: '',
//     description: '',
//     client_expectation: '',
//     solution: '',
//     approach: '',
//     icon: '📁',
//     gradient: 'from-gray-600 to-gray-400',
//   });

//   // Auto-select icon based on category
//   const getIconByCategory = (category: string): string => {
//     const categoryLower = category.toLowerCase();
    
//     const iconMap: Record<string, string> = {
//       'data centre': '🏢',
//       'data center': '🏢',
//       'infrastructure': '🏗️',
//       'enterprise': '🏢',
//       'manufacturing': '🏭',
//       'pharmaceutical': '🧬',
//       'biotech': '🧬',
//       'bioscience': '🧬',
//       'education': '🏫',
//       'school': '🏫',
//       'university': '🎓',
//       'technology': '💻',
//       'it': '🖥️',
//       'software': '📱',
//       'security': '🔒',
//       'network': '🌐',
//       'cloud': '☁️',
//       'migration': '🔄',
//       'data': '📊',
//       'ai': '🤖',
//       'automation': '⚙️',
//       'analytics': '📈',
//       'healthcare': '🏥',
//       'finance': '💰',
//       'retail': '🛒',
//       'telecom': '📡',
//     };
    
//     for (const [key, icon] of Object.entries(iconMap)) {
//       if (categoryLower.includes(key)) {
//         return icon;
//       }
//     }
    
//     return '📁';
//   };

//   const handleCategoryChange = (category: string) => {
//     const newIcon = getIconByCategory(category);
//     setFormData({ ...formData, category, icon: newIcon });
//   };

//   const API_URL = `${BASE_URL}/api`;

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       setFetching(true);
//       const response = await axios.get(`${API_URL}/projects`);
//       if (response.data.success) {
//         setProjects(response.data.data);
//       } else if (Array.isArray(response.data)) {
//         setProjects(response.data);
//       } else {
//         setProjects([]);
//       }
//     } catch (error) {
//       console.error("Error fetching projects:", error);
//       setProjects([]);
//     } finally {
//       setFetching(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const formDataToSend = {
//       title: formData.title,
//       category: formData.category,
//       description: formData.description,
//       client_expectation: formData.client_expectation,
//       solution: formData.solution,
//       approach: formData.approach,
//       icon: formData.icon,
//       gradient: formData.gradient,
//     };

//     try {
//       if (editingProject) {
//         await axios.put(`${API_URL}/projects/${editingProject.id}`, formDataToSend);
//         alert('Project updated successfully!');
//       } else {
//         await axios.post(`${API_URL}/projects`, formDataToSend);
//         alert('Project added successfully!');
//       }
      
//       fetchProjects();
//       resetForm();
//     } catch (error: any) {
//       console.error("Error saving project:", error);
//       alert(error.response?.data?.message || 'Error saving project');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     if (window.confirm('Are you sure you want to delete this project?')) {
//       try {
//         await axios.delete(`${API_URL}/projects/${id}`);
//         fetchProjects();
//         alert('Project deleted successfully!');
//       } catch (error) {
//         console.error("Error deleting project:", error);
//         alert('Error deleting project');
//       }
//     }
//   };

//   const handleEdit = (project: Project) => {
//     setEditingProject(project);
//     setViewingProject(null);
//     setFormData({
//       title: project.title,
//       category: project.category,
//       description: project.description,
//       client_expectation: project.client_expectation || '',
//       solution: project.solution || '',
//       approach: project.approach || '',
//       icon: project.icon,
//       gradient: project.gradient,
//     });
//   };

//   const handleView = (project: Project) => {
//     setViewingProject(project);
//     setEditingProject(null);
//   };

//   const closeViewModal = () => {
//     setViewingProject(null);
//   };

//   const resetForm = () => {
//     setEditingProject(null);
//     setFormData({
//       title: '',
//       category: '',
//       description: '',
//       client_expectation: '',
//       solution: '',
//       approach: '',
//       icon: '📁',
//       gradient: 'from-gray-600 to-gray-400',
//     });
//   };

//   const gradientOptions = [
//     { value: "from-blue-600 to-blue-400", label: "Blue" },
//     { value: "from-green-600 to-green-400", label: "Green" },
//     { value: "from-orange-600 to-orange-400", label: "Orange" },
//     { value: "from-purple-600 to-purple-400", label: "Purple" },
//     { value: "from-red-600 to-red-400", label: "Red" },
//     { value: "from-teal-600 to-teal-400", label: "Teal" },
//     { value: "from-indigo-600 to-indigo-400", label: "Indigo" },
//     { value: "from-pink-600 to-pink-400", label: "Pink" },
//     { value: "from-gray-600 to-gray-400", label: "Gray" },
//     { value: "from-cyan-600 to-cyan-400", label: "Cyan" },
//     { value: "from-amber-600 to-amber-400", label: "Amber" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <AdminNavbar />
      
//       <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
//               Manage Projects
//             </h1>
//             <p className="text-gray-600 mt-2">Add, edit, or remove projects from your portfolio</p>
//           </div>

//           {/* Add/Edit Form */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
//             <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//               {editingProject ? (
//                 <>
//                   <Edit className="h-5 w-5 text-blue-600" />
//                   <span>Edit Project</span>
//                 </>
//               ) : (
//                 <>
//                   <Plus className="h-5 w-5 text-green-600" />
//                   <span>Add New Project</span>
//                 </>
//               )}
//             </h2>
            
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.title}
//                     onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     placeholder="Enter project title"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.category}
//                     onChange={(e) => handleCategoryChange(e.target.value)}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     placeholder="e.g., Infrastructure, Enterprise, Manufacturing"
//                   />
//                   <p className="text-xs text-gray-500 mt-1">Icon will be auto-selected based on category</p>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
//                 <textarea
//                   required
//                   rows={4}
//                   value={formData.description}
//                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                   placeholder="Describe the project details..."
//                 />
//               </div>

//               {/* Client Expectation Section */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   <span className="flex items-center gap-1">
//                     <span>🎯</span> Client Expectation
//                   </span>
//                 </label>
//                 <textarea
//                   rows={3}
//                   value={formData.client_expectation}
//                   onChange={(e) => setFormData({ ...formData, client_expectation: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                   placeholder="What were the client's expectations and requirements?"
//                 />
//                 <p className="text-xs text-gray-500 mt-1">What did the client want to achieve with this project?</p>
//               </div>

//               {/* Solution Delivered Section */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   <span className="flex items-center gap-1">
//                     <span>💡</span> Solution Delivered
//                   </span>
//                 </label>
//                 <textarea
//                   rows={3}
//                   value={formData.solution}
//                   onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                   placeholder="Describe the solution delivered for this project..."
//                 />
//                 <p className="text-xs text-gray-500 mt-1">What solution was provided to meet the client's needs?</p>
//               </div>

//               {/* Our Approach Section */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   <span className="flex items-center gap-1">
//                     <span>⚙️</span> Our Approach
//                   </span>
//                 </label>
//                 <textarea
//                   rows={3}
//                   value={formData.approach}
//                   onChange={(e) => setFormData({ ...formData, approach: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                   placeholder="Describe the approach taken to complete this project..."
//                 />
//                 <p className="text-xs text-gray-500 mt-1">What methodology or process was used to deliver the solution?</p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Icon (Auto-selected)</label>
//                   <div className="flex items-center gap-3">
//                     <div className="text-4xl p-3 bg-gray-100 rounded-xl">{formData.icon}</div>
//                     <div className="text-sm text-gray-500">
//                       Icon automatically selected based on category
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Gradient Color</label>
//                   <div className="grid grid-cols-3 gap-2 mt-1">
//                     {gradientOptions.slice(0, 6).map((gradient) => (
//                       <button
//                         key={gradient.value}
//                         type="button"
//                         onClick={() => setFormData({ ...formData, gradient: gradient.value })}
//                         className={`px-3 py-2 rounded-lg text-white text-sm font-medium bg-gradient-to-r ${gradient.value} ${
//                           formData.gradient === gradient.value ? 'ring-2 ring-pink-500 ring-offset-2' : ''
//                         }`}
//                       >
//                         {gradient.label}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="flex gap-3 pt-2">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="px-6 py-2 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition disabled:opacity-50 font-medium shadow-md"
//                 >
//                   {loading ? (
//                     <span className="flex items-center gap-2">
//                       <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                       Saving...
//                     </span>
//                   ) : (
//                     editingProject ? 'Update Project' : 'Add Project'
//                   )}
//                 </button>
//                 {editingProject && (
//                   <button
//                     type="button"
//                     onClick={resetForm}
//                     className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition font-medium"
//                   >
//                     Cancel
//                   </button>
//                 )}
//               </div>
//             </form>
//           </div>

//           {/* Projects List */}
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
//             <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
//               <h2 className="text-xl font-semibold text-gray-800">Existing Projects</h2>
//               <p className="text-sm text-gray-500 mt-1">Total: {projects.length} projects</p>
//             </div>
            
//             {fetching ? (
//               <div className="flex justify-center items-center py-20">
//                 <div className="text-center">
//                   <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
//                   <p className="text-gray-500">Loading projects...</p>
//                 </div>
//               </div>
//             ) : projects.length === 0 ? (
//               <div className="text-center py-20">
//                 <div className="text-6xl mb-4">📭</div>
//                 <p className="text-gray-500">No projects found. Add your first project above!</p>
//               </div>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Icon</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {projects.map((project) => (
//                       <tr key={project.id} className="hover:bg-gray-50 transition">
//                         <td className="px-6 py-4 text-2xl">{project.icon}</td>
//                         <td className="px-6 py-4">
//                           <div className="font-medium text-gray-900">{project.title}</div>
//                          </td>
//                         <td className="px-6 py-4">
//                           <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700">
//                             {project.category}
//                           </span>
//                          </td>
//                         <td className="px-6 py-4 max-w-md">
//                           <p className="text-gray-600 line-clamp-2">{project.description}</p>
//                          </td>
//                         <td className="px-6 py-4">
//                           <div className="flex gap-2">
//                             <button
//                               onClick={() => handleView(project)}
//                               className="text-green-600 hover:text-green-800 transition px-2 py-1 rounded hover:bg-green-50 flex items-center gap-1"
//                               title="View Project"
//                             >
//                               <Eye className="h-4 w-4" />
//                               View
//                             </button>
//                             <button
//                               onClick={() => handleEdit(project)}
//                               className="text-blue-600 hover:text-blue-800 transition px-2 py-1 rounded hover:bg-blue-50 flex items-center gap-1"
//                               title="Edit Project"
//                             >
//                               <Edit className="h-4 w-4" />
//                               Edit
//                             </button>
//                             <button
//                               onClick={() => handleDelete(project.id)}
//                               className="text-red-600 hover:text-red-800 transition px-2 py-1 rounded hover:bg-red-50 flex items-center gap-1"
//                               title="Delete Project"
//                             >
//                               <Trash2 className="h-4 w-4" />
//                               Delete
//                             </button>
//                           </div>
//                          </td>
//                        </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* View Project Modal */}
//       {viewingProject && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className={`h-2 bg-gradient-to-r ${viewingProject.gradient}`}></div>
            
//             <div className="p-6">
//               <div className="flex justify-between items-start mb-6">
//                 <div>
//                   <div className="flex items-center gap-3">
//                     <div className="text-5xl">{viewingProject.icon}</div>
//                     <div>
//                       <h2 className="text-2xl font-bold text-gray-900">{viewingProject.title}</h2>
//                       <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700">
//                         {viewingProject.category}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <button onClick={closeViewModal} className="text-gray-500 hover:text-gray-700 transition">
//                   <X className="h-6 w-6" />
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
//                   <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
//                     {viewingProject.description}
//                   </p>
//                 </div>

//                 {viewingProject.client_expectation && (
//                   <div>
//                     <h3 className="text-lg font-semibold text-blue-600 mb-2 flex items-center gap-2">
//                       <span>🎯</span> Client Expectation
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
//                       {viewingProject.client_expectation}
//                     </p>
//                   </div>
//                 )}

//                 {viewingProject.solution && (
//                   <div>
//                     <h3 className="text-lg font-semibold text-cyan-600 mb-2 flex items-center gap-2">
//                       <span>💡</span> Solution Delivered
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
//                       {viewingProject.solution}
//                     </p>
//                   </div>
//                 )}

//                 {viewingProject.approach && (
//                   <div>
//                     <h3 className="text-lg font-semibold text-indigo-600 mb-2 flex items-center gap-2">
//                       <span>⚙️</span> Our Approach
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
//                       {viewingProject.approach}
//                     </p>
//                   </div>
//                 )}

//                 <div>
//                   <h3 className="text-sm font-semibold text-gray-500 mb-1">Gradient Color</h3>
//                   <div className={`w-32 h-8 rounded-lg bg-gradient-to-r ${viewingProject.gradient}`}></div>
//                 </div>
//               </div>

//               <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
//                 <button
//                   onClick={() => {
//                     handleEdit(viewingProject);
//                     closeViewModal();
//                   }}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
//                 >
//                   <Edit className="h-4 w-4" />
//                   Edit Project
//                 </button>
//                 <button onClick={closeViewModal} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminProjects;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AdminNavbar from '@/components/AdminNavbar';
// import BASE_URL from '@/Config/Api';
// import { useNavigate } from 'react-router-dom';
// import { Eye, Edit, Trash2, Plus, X, RefreshCw } from 'lucide-react';

// interface Project {
//   id: number;
//   title: string;
//   category: string;
//   description: string;
//   client_expectation?: string;
//   solution?: string;
//   approach?: string;
//   icon: string;
//   gradient: string;
// }

// const AdminProjects: React.FC = () => {
//   const navigate = useNavigate();
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [fetching, setFetching] = useState(true);
//   const [editingProject, setEditingProject] = useState<Project | null>(null);
//   const [viewingProject, setViewingProject] = useState<Project | null>(null);
//   const [manualIconMode, setManualIconMode] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     category: '',
//     description: '',
//     client_expectation: '',
//     solution: '',
//     approach: '',
//     icon: '📁',
//     gradient: 'from-gray-600 to-gray-400',
//   });

//   // Available icons for manual selection
//   const availableIcons = [
//     "🏢", "🏗️", "🏭", "🧬", "🏫", "🎓", "💻", "🖥️", "📱", "🔒", "🌐", "☁️", 
//     "🔄", "📊", "🤖", "⚙️", "📈", "🏥", "💰", "🛒", "📡", "🚀", "⭐", "💡", 
//     "🎯", "🔧", "📁", "⚡", "🔐", "🛡️", "📞", "🎨", "📦", "🔬", "🧪", "🏆"
//   ];

//   // Auto-select icon based on category
//   const getIconByCategory = (category: string): string => {
//     const categoryLower = category.toLowerCase();
    
//     const iconMap: Record<string, string> = {
//       'data centre': '🏢',
//       'data center': '🏢',
//       'infrastructure': '🏗️',
//       'enterprise': '🏢',
//       'manufacturing': '🏭',
//       'pharmaceutical': '🧬',
//       'biotech': '🧬',
//       'bioscience': '🧬',
//       'education': '🏫',
//       'school': '🏫',
//       'university': '🎓',
//       'technology': '💻',
//       'it': '🖥️',
//       'software': '📱',
//       'security': '🔒',
//       'network': '🌐',
//       'cloud': '☁️',
//       'migration': '🔄',
//       'data': '📊',
//       'ai': '🤖',
//       'automation': '⚙️',
//       'analytics': '📈',
//       'healthcare': '🏥',
//       'finance': '💰',
//       'retail': '🛒',
//       'telecom': '📡',
//     };
    
//     for (const [key, icon] of Object.entries(iconMap)) {
//       if (categoryLower.includes(key)) {
//         return icon;
//       }
//     }
    
//     return '📁';
//   };

//   const handleCategoryChange = (category: string) => {
//     if (!manualIconMode) {
//       const newIcon = getIconByCategory(category);
//       setFormData({ ...formData, category, icon: newIcon });
//     } else {
//       setFormData({ ...formData, category });
//     }
//   };

//   const toggleIconMode = () => {
//     setManualIconMode(!manualIconMode);
//     if (!manualIconMode) {
//       // Switching to manual mode, keep current icon
//       setManualIconMode(true);
//     } else {
//       // Switching back to auto mode, auto-select icon based on category
//       const autoIcon = getIconByCategory(formData.category);
//       setFormData({ ...formData, icon: autoIcon });
//       setManualIconMode(false);
//     }
//   };

//   const handleManualIconSelect = (icon: string) => {
//     setFormData({ ...formData, icon });
//   };

//   const API_URL = `${BASE_URL}/api`;

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       setFetching(true);
//       const response = await axios.get(`${API_URL}/projects`);
//       if (response.data.success) {
//         setProjects(response.data.data);
//       } else if (Array.isArray(response.data)) {
//         setProjects(response.data);
//       } else {
//         setProjects([]);
//       }
//     } catch (error) {
//       console.error("Error fetching projects:", error);
//       setProjects([]);
//     } finally {
//       setFetching(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const formDataToSend = {
//       title: formData.title,
//       category: formData.category,
//       description: formData.description,
//       client_expectation: formData.client_expectation,
//       solution: formData.solution,
//       approach: formData.approach,
//       icon: formData.icon,
//       gradient: formData.gradient,
//     };

//     try {
//       if (editingProject) {
//         await axios.put(`${API_URL}/projects/${editingProject.id}`, formDataToSend);
//         alert('Project updated successfully!');
//       } else {
//         await axios.post(`${API_URL}/projects`, formDataToSend);
//         alert('Project added successfully!');
//       }
      
//       fetchProjects();
//       resetForm();
//     } catch (error: any) {
//       console.error("Error saving project:", error);
//       alert(error.response?.data?.message || 'Error saving project');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     if (window.confirm('Are you sure you want to delete this project?')) {
//       try {
//         await axios.delete(`${API_URL}/projects/${id}`);
//         fetchProjects();
//         alert('Project deleted successfully!');
//       } catch (error) {
//         console.error("Error deleting project:", error);
//         alert('Error deleting project');
//       }
//     }
//   };

//   const handleEdit = (project: Project) => {
//     setEditingProject(project);
//     setViewingProject(null);
//     setManualIconMode(false);
//     setFormData({
//       title: project.title,
//       category: project.category,
//       description: project.description,
//       client_expectation: project.client_expectation || '',
//       solution: project.solution || '',
//       approach: project.approach || '',
//       icon: project.icon,
//       gradient: project.gradient,
//     });
//   };

//   const handleView = (project: Project) => {
//     setViewingProject(project);
//     setEditingProject(null);
//   };

//   const closeViewModal = () => {
//     setViewingProject(null);
//   };

//   const resetForm = () => {
//     setEditingProject(null);
//     setManualIconMode(false);
//     setFormData({
//       title: '',
//       category: '',
//       description: '',
//       client_expectation: '',
//       solution: '',
//       approach: '',
//       icon: '📁',
//       gradient: 'from-gray-600 to-gray-400',
//     });
//   };

//   const gradientOptions = [
//     { value: "from-blue-600 to-blue-400", label: "Blue" },
//     { value: "from-green-600 to-green-400", label: "Green" },
//     { value: "from-orange-600 to-orange-400", label: "Orange" },
//     { value: "from-purple-600 to-purple-400", label: "Purple" },
//     { value: "from-red-600 to-red-400", label: "Red" },
//     { value: "from-teal-600 to-teal-400", label: "Teal" },
//     { value: "from-indigo-600 to-indigo-400", label: "Indigo" },
//     { value: "from-pink-600 to-pink-400", label: "Pink" },
//     { value: "from-gray-600 to-gray-400", label: "Gray" },
//     { value: "from-cyan-600 to-cyan-400", label: "Cyan" },
//     { value: "from-amber-600 to-amber-400", label: "Amber" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <AdminNavbar />
      
//       <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
//               Manage Projects
//             </h1>
//             <p className="text-gray-600 mt-2">Add, edit, or remove projects from your portfolio</p>
//           </div>

//           {/* Add/Edit Form */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
//             <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//               {editingProject ? (
//                 <>
//                   <Edit className="h-5 w-5 text-blue-600" />
//                   <span>Edit Project</span>
//                 </>
//               ) : (
//                 <>
//                   <Plus className="h-5 w-5 text-green-600" />
//                   <span>Add New Project</span>
//                 </>
//               )}
//             </h2>
            
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.title}
//                     onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     placeholder="Enter project title"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.category}
//                     onChange={(e) => handleCategoryChange(e.target.value)}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     placeholder="e.g., Infrastructure, Enterprise, Manufacturing"
//                   />
//                   <p className="text-xs text-gray-500 mt-1">
//                     {manualIconMode ? "Manual icon mode - select icon below" : "Icon will be auto-selected based on category"}
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
//                 <textarea
//                   required
//                   rows={4}
//                   value={formData.description}
//                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                   placeholder="Describe the project details..."
//                 />
//               </div>

//               {/* Icon Selection Section */}
//               <div className="border rounded-lg p-4 bg-gray-50">
//                 <div className="flex justify-between items-center mb-3">
//                   <label className="block text-sm font-medium text-gray-700">
//                     <span className="flex items-center gap-2">
//                       <span>🖼️</span> Project Icon
//                     </span>
//                   </label>
//                   <button
//                     type="button"
//                     onClick={toggleIconMode}
//                     className="flex items-center gap-2 px-3 py-1 text-sm rounded-lg bg-white border border-gray-300 hover:bg-gray-100 transition"
//                   >
//                     <RefreshCw className="h-3 w-3" />
//                     {manualIconMode ? "Switch to Auto Mode" : "Switch to Manual Mode"}
//                   </button>
//                 </div>

//                 {manualIconMode ? (
//                   <div>
//                     <div className="text-center mb-3">
//                       <div className="text-6xl p-4 bg-white rounded-xl inline-block shadow-md">
//                         {formData.icon}
//                       </div>
//                     </div>
//                     <div className="grid grid-cols-8 gap-2 max-h-40 overflow-y-auto p-2 bg-white rounded-lg border">
//                       {availableIcons.map((icon) => (
//                         <button
//                           key={icon}
//                           type="button"
//                           onClick={() => handleManualIconSelect(icon)}
//                           className={`text-2xl p-2 rounded-lg transition-all hover:scale-110 ${
//                             formData.icon === icon 
//                               ? 'bg-gradient-to-r from-pink-500 to-blue-500 shadow-md ring-2 ring-pink-500' 
//                               : 'hover:bg-gray-100'
//                           }`}
//                         >
//                           {icon}
//                         </button>
//                       ))}
//                     </div>
//                     <p className="text-xs text-gray-500 mt-2">Click on any icon to select it manually</p>
//                   </div>
//                 ) : (
//                   <div className="flex items-center gap-4">
//                     <div className="text-5xl p-3 bg-white rounded-xl shadow-md">{formData.icon}</div>
//                     <div className="text-sm text-gray-500">
//                       Icon automatically selected based on category "<strong>{formData.category || '...'}</strong>"
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Client Expectation Section */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   <span className="flex items-center gap-1">
//                     <span>🎯</span> Client Expectation
//                   </span>
//                 </label>
//                 <textarea
//                   rows={3}
//                   value={formData.client_expectation}
//                   onChange={(e) => setFormData({ ...formData, client_expectation: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                   placeholder="What were the client's expectations and requirements?"
//                 />
//                 <p className="text-xs text-gray-500 mt-1">What did the client want to achieve with this project?</p>
//               </div>

//               {/* Solution Delivered Section */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   <span className="flex items-center gap-1">
//                     <span>💡</span> Solution Delivered
//                   </span>
//                 </label>
//                 <textarea
//                   rows={3}
//                   value={formData.solution}
//                   onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                   placeholder="Describe the solution delivered for this project..."
//                 />
//                 <p className="text-xs text-gray-500 mt-1">What solution was provided to meet the client's needs?</p>
//               </div>

//               {/* Our Approach Section */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   <span className="flex items-center gap-1">
//                     <span>⚙️</span> Our Approach
//                   </span>
//                 </label>
//                 <textarea
//                   rows={3}
//                   value={formData.approach}
//                   onChange={(e) => setFormData({ ...formData, approach: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                   placeholder="Describe the approach taken to complete this project..."
//                 />
//                 <p className="text-xs text-gray-500 mt-1">What methodology or process was used to deliver the solution?</p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Gradient Color</label>
//                   <div className="grid grid-cols-3 gap-2 mt-1">
//                     {gradientOptions.slice(0, 6).map((gradient) => (
//                       <button
//                         key={gradient.value}
//                         type="button"
//                         onClick={() => setFormData({ ...formData, gradient: gradient.value })}
//                         className={`px-3 py-2 rounded-lg text-white text-sm font-medium bg-gradient-to-r ${gradient.value} ${
//                           formData.gradient === gradient.value ? 'ring-2 ring-pink-500 ring-offset-2' : ''
//                         }`}
//                       >
//                         {gradient.label}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="flex gap-3 pt-2">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="px-6 py-2 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition disabled:opacity-50 font-medium shadow-md"
//                 >
//                   {loading ? (
//                     <span className="flex items-center gap-2">
//                       <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                       Saving...
//                     </span>
//                   ) : (
//                     editingProject ? 'Update Project' : 'Add Project'
//                   )}
//                 </button>
//                 {editingProject && (
//                   <button
//                     type="button"
//                     onClick={resetForm}
//                     className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition font-medium"
//                   >
//                     Cancel
//                   </button>
//                 )}
//               </div>
//             </form>
//           </div>

//           {/* Projects List */}
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
//             <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
//               <h2 className="text-xl font-semibold text-gray-800">Existing Projects</h2>
//               <p className="text-sm text-gray-500 mt-1">Total: {projects.length} projects</p>
//             </div>
            
//             {fetching ? (
//               <div className="flex justify-center items-center py-20">
//                 <div className="text-center">
//                   <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
//                   <p className="text-gray-500">Loading projects...</p>
//                 </div>
//               </div>
//             ) : projects.length === 0 ? (
//               <div className="text-center py-20">
//                 <div className="text-6xl mb-4">📭</div>
//                 <p className="text-gray-500">No projects found. Add your first project above!</p>
//               </div>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Icon</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {projects.map((project) => (
//                       <tr key={project.id} className="hover:bg-gray-50 transition">
//                         <td className="px-6 py-4 text-2xl">{project.icon}</td>
//                         <td className="px-6 py-4">
//                           <div className="font-medium text-gray-900">{project.title}</div>
//                          </td>
//                         <td className="px-6 py-4">
//                           <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700">
//                             {project.category}
//                           </span>
//                          </td>
//                         <td className="px-6 py-4 max-w-md">
//                           <p className="text-gray-600 line-clamp-2">{project.description}</p>
//                          </td>
//                         <td className="px-6 py-4">
//                           <div className="flex gap-2">
//                             <button
//                               onClick={() => handleView(project)}
//                               className="text-green-600 hover:text-green-800 transition px-2 py-1 rounded hover:bg-green-50 flex items-center gap-1"
//                               title="View Project"
//                             >
//                               <Eye className="h-4 w-4" />
//                               View
//                             </button>
//                             <button
//                               onClick={() => handleEdit(project)}
//                               className="text-blue-600 hover:text-blue-800 transition px-2 py-1 rounded hover:bg-blue-50 flex items-center gap-1"
//                               title="Edit Project"
//                             >
//                               <Edit className="h-4 w-4" />
//                               Edit
//                             </button>
//                             <button
//                               onClick={() => handleDelete(project.id)}
//                               className="text-red-600 hover:text-red-800 transition px-2 py-1 rounded hover:bg-red-50 flex items-center gap-1"
//                               title="Delete Project"
//                             >
//                               <Trash2 className="h-4 w-4" />
//                               Delete
//                             </button>
//                           </div>
//                          </td>
//                        </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* View Project Modal */}
//       {viewingProject && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className={`h-2 bg-gradient-to-r ${viewingProject.gradient}`}></div>
            
//             <div className="p-6">
//               <div className="flex justify-between items-start mb-6">
//                 <div>
//                   <div className="flex items-center gap-3">
//                     <div className="text-5xl">{viewingProject.icon}</div>
//                     <div>
//                       <h2 className="text-2xl font-bold text-gray-900">{viewingProject.title}</h2>
//                       <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700">
//                         {viewingProject.category}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <button onClick={closeViewModal} className="text-gray-500 hover:text-gray-700 transition">
//                   <X className="h-6 w-6" />
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
//                   <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
//                     {viewingProject.description}
//                   </p>
//                 </div>

//                 {viewingProject.client_expectation && (
//                   <div>
//                     <h3 className="text-lg font-semibold text-blue-600 mb-2 flex items-center gap-2">
//                       <span>🎯</span> Client Expectation
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
//                       {viewingProject.client_expectation}
//                     </p>
//                   </div>
//                 )}

//                 {viewingProject.solution && (
//                   <div>
//                     <h3 className="text-lg font-semibold text-cyan-600 mb-2 flex items-center gap-2">
//                       <span>💡</span> Solution Delivered
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
//                       {viewingProject.solution}
//                     </p>
//                   </div>
//                 )}

//                 {viewingProject.approach && (
//                   <div>
//                     <h3 className="text-lg font-semibold text-indigo-600 mb-2 flex items-center gap-2">
//                       <span>⚙️</span> Our Approach
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
//                       {viewingProject.approach}
//                     </p>
//                   </div>
//                 )}

//                 <div>
//                   <h3 className="text-sm font-semibold text-gray-500 mb-1">Gradient Color</h3>
//                   <div className={`w-32 h-8 rounded-lg bg-gradient-to-r ${viewingProject.gradient}`}></div>
//                 </div>
//               </div>

//               <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
//                 <button
//                   onClick={() => {
//                     handleEdit(viewingProject);
//                     closeViewModal();
//                   }}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
//                 >
//                   <Edit className="h-4 w-4" />
//                   Edit Project
//                 </button>
//                 <button onClick={closeViewModal} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminProjects;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '@/components/AdminNavbar';
import BASE_URL from '@/Config/Api';
import { Eye, Edit, Trash2, Plus, X, RefreshCw } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  client_expectation?: string;
  solution?: string;
  approach?: string;
  icon: string;
  gradient: string;
}

const AdminProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [viewingProject, setViewingProject] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [manualIconMode, setManualIconMode] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    client_expectation: '',
    solution: '',
    approach: '',
    icon: '📁',
    gradient: 'from-blue-600 to-blue-400',
  });

  // Available icons for manual selection
  const availableIcons = [
    "🏢", "🏗️", "🏭", "🧬", "🏫", "🎓", "💻", "🖥️", "📱", "🔒", "🌐", "☁️", 
    "🔄", "📊", "🤖", "⚙️", "📈", "🏥", "💰", "🛒", "📡", "🚀", "⭐", "💡", 
    "🎯", "🔧", "📁", "⚡", "🔐", "🛡️", "📞", "🎨", "📦", "🔬", "🧪", "🏆"
  ];

  // Auto-select icon based on category
  const getIconByCategory = (category: string): string => {
    const categoryLower = category.toLowerCase();
    
    const iconMap: Record<string, string> = {
      'data centre': '🏢',
      'data center': '🏢',
      'infrastructure': '🏗️',
      'enterprise': '🏢',
      'manufacturing': '🏭',
      'pharmaceutical': '🧬',
      'biotech': '🧬',
      'bioscience': '🧬',
      'education': '🏫',
      'school': '🏫',
      'university': '🎓',
      'technology': '💻',
      'it': '🖥️',
      'software': '📱',
      'security': '🔒',
      'network': '🌐',
      'cloud': '☁️',
      'migration': '🔄',
      'data': '📊',
      'ai': '🤖',
      'automation': '⚙️',
      'analytics': '📈',
      'healthcare': '🏥',
      'finance': '💰',
      'retail': '🛒',
      'telecom': '📡',
    };
    
    for (const [key, icon] of Object.entries(iconMap)) {
      if (categoryLower.includes(key)) {
        return icon;
      }
    }
    
    return '📁';
  };

  const handleCategoryChange = (category: string) => {
    if (!manualIconMode) {
      const newIcon = getIconByCategory(category);
      setFormData({ ...formData, category, icon: newIcon });
    } else {
      setFormData({ ...formData, category });
    }
  };

  const toggleIconMode = () => {
    setManualIconMode(!manualIconMode);
    if (manualIconMode) {
      const autoIcon = getIconByCategory(formData.category);
      setFormData({ ...formData, icon: autoIcon });
    }
  };

  const handleManualIconSelect = (icon: string) => {
    setFormData({ ...formData, icon });
  };

  const API_URL = `${BASE_URL}/api`;

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setFetching(true);
      const response = await axios.get(`${API_URL}/projects`);
      if (response.data.success) {
        setProjects(response.data.data);
      } else if (Array.isArray(response.data)) {
        setProjects(response.data);
      } else {
        setProjects([]);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    } finally {
      setFetching(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = {
      title: formData.title,
      category: formData.category,
      description: formData.description,
      client_expectation: formData.client_expectation,
      solution: formData.solution,
      approach: formData.approach,
      icon: formData.icon,
      gradient: formData.gradient,
    };

    try {
      if (editingProject) {
        await axios.put(`${API_URL}/projects/${editingProject.id}`, formDataToSend);
        alert('Project updated successfully!');
      } else {
        await axios.post(`${API_URL}/projects`, formDataToSend);
        alert('Project added successfully!');
      }
      
      resetForm();
      fetchProjects();
      setShowForm(false);
    } catch (error: any) {
      console.error("Error saving project:", error);
      alert(error.response?.data?.message || 'Error saving project');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setLoading(true);
      try {
        await axios.delete(`${API_URL}/projects/${id}`);
        fetchProjects();
        alert('Project deleted successfully!');
      } catch (error) {
        console.error("Error deleting project:", error);
        alert('Error deleting project');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setViewingProject(null);
    setShowForm(true);
    setManualIconMode(false);
    setFormData({
      title: project.title,
      category: project.category,
      description: project.description,
      client_expectation: project.client_expectation || '',
      solution: project.solution || '',
      approach: project.approach || '',
      icon: project.icon,
      gradient: project.gradient,
    });
  };

  const handleView = (project: Project) => {
    setViewingProject(project);
  };

  const closeViewModal = () => {
    setViewingProject(null);
  };

  const resetForm = () => {
    setEditingProject(null);
    setShowForm(false);
    setManualIconMode(false);
    setFormData({
      title: '',
      category: '',
      description: '',
      client_expectation: '',
      solution: '',
      approach: '',
      icon: '📁',
      gradient: 'from-blue-600 to-blue-400',
    });
  };

  const openAddForm = () => {
    resetForm();
    setEditingProject(null);
    setShowForm(true);
  };

  const gradientOptions = [
    { value: "from-blue-600 to-blue-400", label: "Blue" },
    { value: "from-green-600 to-green-400", label: "Green" },
    { value: "from-orange-600 to-orange-400", label: "Orange" },
    { value: "from-purple-600 to-purple-400", label: "Purple" },
    { value: "from-red-600 to-red-400", label: "Red" },
    { value: "from-teal-600 to-teal-400", label: "Teal" },
    { value: "from-indigo-600 to-indigo-400", label: "Indigo" },
    { value: "from-pink-600 to-pink-400", label: "Pink" },
    { value: "from-gray-600 to-gray-400", label: "Gray" },
    { value: "from-cyan-600 to-cyan-400", label: "Cyan" },
    { value: "from-amber-600 to-amber-400", label: "Amber" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
                Manage Projects
              </h1>
              <p className="text-gray-600 mt-1">Add, edit, or remove projects from your portfolio</p>
            </div>
            <button
              onClick={openAddForm}
              className="px-4 py-2 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-lg flex items-center gap-2 hover:opacity-90 transition shadow-md"
            >
              <Plus className="h-5 w-5" /> Add New Project
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-4 text-white">
              <p className="text-sm opacity-90">Total Projects</p>
              <p className="text-2xl font-bold">{projects.length}</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-4 text-white">
              <p className="text-sm opacity-90">Categories</p>
              <p className="text-2xl font-bold">{new Set(projects.map(p => p.category)).size}</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
              <p className="text-sm opacity-90">With Solutions</p>
              <p className="text-2xl font-bold">{projects.filter(p => p.solution).length}</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
              <p className="text-sm opacity-90">Total</p>
              <p className="text-2xl font-bold">{projects.length}</p>
            </div>
          </div>

          {/* Project Form Modal */}
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                  <h2 className="text-2xl font-bold">
                    {editingProject ? "Edit Project" : "Add New Project"}
                  </h2>
                  <button onClick={resetForm} className="text-gray-500 hover:text-gray-700">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="Enter project title"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                      <input
                        type="text"
                        required
                        value={formData.category}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="e.g., Infrastructure, Enterprise, Manufacturing"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Describe the project details..."
                    />
                  </div>

                  {/* Icon Selection Section */}
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-center mb-3">
                      <label className="block text-sm font-medium text-gray-700">Project Icon</label>
                      <button
                        type="button"
                        onClick={toggleIconMode}
                        className="flex items-center gap-2 px-3 py-1 text-sm rounded-lg bg-white border border-gray-300 hover:bg-gray-100 transition"
                      >
                        <RefreshCw className="h-3 w-3" />
                        {manualIconMode ? "Switch to Auto Mode" : "Switch to Manual Mode"}
                      </button>
                    </div>

                    {manualIconMode ? (
                      <div>
                        <div className="text-center mb-3">
                          <div className="text-5xl p-4 bg-white rounded-xl inline-block shadow-md">
                            {formData.icon}
                          </div>
                        </div>
                        <div className="grid grid-cols-8 gap-2 max-h-40 overflow-y-auto p-2 bg-white rounded-lg border">
                          {availableIcons.map((icon) => (
                            <button
                              key={icon}
                              type="button"
                              onClick={() => handleManualIconSelect(icon)}
                              className={`text-2xl p-2 rounded-lg transition-all hover:scale-110 ${
                                formData.icon === icon 
                                  ? 'bg-gradient-to-r from-pink-500 to-blue-500 shadow-md ring-2 ring-pink-500' 
                                  : 'hover:bg-gray-100'
                              }`}
                            >
                              {icon}
                            </button>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Click on any icon to select it manually</p>
                      </div>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="text-5xl p-3 bg-white rounded-xl shadow-md">{formData.icon}</div>
                        <div className="text-sm text-gray-500">
                          Icon automatically selected based on category "<strong>{formData.category || '...'}</strong>"
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gradient Color</label>
                      <div className="grid grid-cols-3 gap-2">
                        {gradientOptions.slice(0, 6).map((gradient) => (
                          <button
                            key={gradient.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, gradient: gradient.value })}
                            className={`px-3 py-2 rounded-lg text-white text-sm font-medium bg-gradient-to-r ${gradient.value} ${
                              formData.gradient === gradient.value ? 'ring-2 ring-pink-500 ring-offset-2' : ''
                            }`}
                          >
                            {gradient.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <span className="flex items-center gap-1">🎯 Client Expectation</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.client_expectation}
                      onChange={(e) => setFormData({ ...formData, client_expectation: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="What were the client's expectations and requirements?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <span className="flex items-center gap-1">💡 Solution Delivered</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.solution}
                      onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Describe the solution delivered for this project..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <span className="flex items-center gap-1">⚙️ Our Approach</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.approach}
                      onChange={(e) => setFormData({ ...formData, approach: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Describe the approach taken to complete this project..."
                    />
                  </div>
                  
                  <div className="flex gap-3 justify-end pt-4">
                    <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                      Cancel
                    </button>
                    <button type="submit" disabled={loading} className="px-4 py-2 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition disabled:opacity-50">
                      {loading ? "Saving..." : (editingProject ? "Update Project" : "Add Project")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Projects Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-semibold text-gray-800">Existing Projects</h2>
              <p className="text-sm text-gray-500 mt-1">Total: {projects.length} projects</p>
            </div>
            
            {fetching ? (
              <div className="flex justify-center items-center py-20">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                  <p className="text-gray-500">Loading projects...</p>
                </div>
              </div>
            ) : projects.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">📭</div>
                <p className="text-gray-500">No projects found. Click "Add New Project" to get started!</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Icon</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Category</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Description</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {projects.map((project) => (
                      <tr key={project.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 text-2xl">{project.icon}</td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">{project.title}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700">
                            {project.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 max-w-md">
                          <p className="text-gray-600 line-clamp-2">{project.description}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-3">
                            <button
                              onClick={() => handleView(project)}
                              className="text-green-600 hover:text-green-800 transition"
                              title="View Project"
                            >
                              <Eye className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => handleEdit(project)}
                              className="text-blue-600 hover:text-blue-800 transition"
                              title="Edit Project"
                            >
                              <Edit className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(project.id)}
                              className="text-red-600 hover:text-red-800 transition"
                              title="Delete Project"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* View Project Modal */}
      {viewingProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className={`h-2 bg-gradient-to-r ${viewingProject.gradient}`}></div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="text-5xl">{viewingProject.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{viewingProject.title}</h2>
                      <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700">
                        {viewingProject.category}
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={closeViewModal} className="text-gray-500 hover:text-gray-700 transition">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
                    {viewingProject.description}
                  </p>
                </div>

                {viewingProject.client_expectation && (
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-2 flex items-center gap-2">
                      <span>🎯</span> Client Expectation
                    </h3>
                    <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
                      {viewingProject.client_expectation}
                    </p>
                  </div>
                )}

                {viewingProject.solution && (
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-600 mb-2 flex items-center gap-2">
                      <span>💡</span> Solution Delivered
                    </h3>
                    <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
                      {viewingProject.solution}
                    </p>
                  </div>
                )}

                {viewingProject.approach && (
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-600 mb-2 flex items-center gap-2">
                      <span>⚙️</span> Our Approach
                    </h3>
                    <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
                      {viewingProject.approach}
                    </p>
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">Gradient Color</h3>
                  <div className={`w-32 h-8 rounded-lg bg-gradient-to-r ${viewingProject.gradient}`}></div>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    handleEdit(viewingProject);
                    closeViewModal();
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                >
                  <Edit className="h-4 w-4" />
                  Edit Project
                </button>
                <button onClick={closeViewModal} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProjects;