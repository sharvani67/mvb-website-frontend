// components/AdminCareerManager.tsx
import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Save, X, Eye, EyeOff } from "lucide-react";
import axios from "axios";
import BASE_URL from "@/Config/Api";
import AdminNavbar from "@/components/AdminNavbar";

interface Job {
  id?: number;
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
}

const API_URL = `${BASE_URL}/api/careers`;

const AdminCareerManager = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [currentJob, setCurrentJob] = useState<Job>({
    title: "",
    department: "",
    location: "",
    type: "Full-time",
    experience: "",
    salary_range: "",
    description: "",
    requirements: "",
    responsibilities: "",
    benefits: "",
    featured: false,
    active: true,
    apply_email: ""
  });

  const recordsPerPage = 10;

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}/admin/jobs`);
      setJobs(response.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to load jobs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (isEditing && currentJob.id) {
        await axios.put(`${API_URL}/admin/jobs/${currentJob.id}`, currentJob);
      } else {
        await axios.post(`${API_URL}/admin/jobs`, currentJob);
      }
      resetForm();
      await fetchJobs();
      setShowForm(false);
      alert(isEditing ? "Job updated successfully!" : "Job created successfully!");
    } catch (err: any) {
      console.error("Error saving job:", err);
      alert(err.response?.data?.error || "Failed to save job. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      setLoading(true);
      try {
        await axios.delete(`${API_URL}/admin/jobs/${id}`);
        await fetchJobs();
        alert("Job deleted successfully!");
      } catch (err) {
        console.error("Error deleting job:", err);
        alert("Failed to delete job. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setShowForm(false);
    setCurrentJob({
      title: "",
      department: "",
      location: "",
      type: "Full-time",
      experience: "",
      salary_range: "",
      description: "",
      requirements: "",
      responsibilities: "",
      benefits: "",
      featured: false,
      active: true,
      apply_email: ""
    });
  };

  const editJob = (job: Job) => {
    setIsEditing(true);
    setShowForm(true);
    setCurrentJob(job);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title?.toLowerCase().includes(search.toLowerCase()) ||
    job.department?.toLowerCase().includes(search.toLowerCase()) ||
    job.location?.toLowerCase().includes(search.toLowerCase())
  );

  

  const indexOfLast = currentPage * recordsPerPage;
  const indexOfFirst = indexOfLast - recordsPerPage;
  const currentRecords = filteredJobs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredJobs.length / recordsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Career Management
            </h1>
            <p className="text-gray-600 mt-1">Manage job openings and applications</p>
          </div>
          <button
            onClick={() => {
              resetForm();
              setShowForm(true);
            }}
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg flex items-center gap-2"
          >
            <Plus className="h-5 w-5" /> Add New Job
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">Total Jobs</p>
            <p className="text-2xl font-bold">{jobs.length}</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">Active</p>
            <p className="text-2xl font-bold">{jobs.filter(j => j.active).length}</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">Featured</p>
            <p className="text-2xl font-bold">{jobs.filter(j => j.featured).length}</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">Departments</p>
            <p className="text-2xl font-bold">{new Set(jobs.map(j => j.department)).size}</p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Search jobs by title, department, or location..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Job Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold">{isEditing ? "Edit Job" : "Add New Job"}</h2>
                <button onClick={resetForm}><X className="h-6 w-6" /></button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Job Title *" value={currentJob.title} onChange={(e) => setCurrentJob({...currentJob, title: e.target.value})} className="border p-2 rounded" required />
                  <input type="text" placeholder="Department *" value={currentJob.department} onChange={(e) => setCurrentJob({...currentJob, department: e.target.value})} className="border p-2 rounded" required />
                  <input type="text" placeholder="Location *" value={currentJob.location} onChange={(e) => setCurrentJob({...currentJob, location: e.target.value})} className="border p-2 rounded" required />
                  <select value={currentJob.type} onChange={(e) => setCurrentJob({...currentJob, type: e.target.value})} className="border p-2 rounded">
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Remote</option>
                    <option>Contract</option>
                  </select>
                  <input type="text" placeholder="Experience Required *" value={currentJob.experience} onChange={(e) => setCurrentJob({...currentJob, experience: e.target.value})} className="border p-2 rounded" required />
                  <input type="text" placeholder="Salary Range" value={currentJob.salary_range} onChange={(e) => setCurrentJob({...currentJob, salary_range: e.target.value})} className="border p-2 rounded" />
                  <input type="email" placeholder="Apply Email *" value={currentJob.apply_email} onChange={(e) => setCurrentJob({...currentJob, apply_email: e.target.value})} className="border p-2 rounded" required />
                  <div className="flex gap-4 items-center">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked={currentJob.featured} onChange={(e) => setCurrentJob({...currentJob, featured: e.target.checked})} />
                      Featured Job
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked={currentJob.active} onChange={(e) => setCurrentJob({...currentJob, active: e.target.checked})} />
                      Active
                    </label>
                  </div>
                </div>
                
                <textarea placeholder="Job Description * (HTML supported)" value={currentJob.description} onChange={(e) => setCurrentJob({...currentJob, description: e.target.value})} className="w-full border p-2 rounded" rows={4} required />
                <textarea placeholder="Requirements * (HTML supported)" value={currentJob.requirements} onChange={(e) => setCurrentJob({...currentJob, requirements: e.target.value})} className="w-full border p-2 rounded" rows={4} required />
                <textarea placeholder="Responsibilities * (HTML supported)" value={currentJob.responsibilities} onChange={(e) => setCurrentJob({...currentJob, responsibilities: e.target.value})} className="w-full border p-2 rounded" rows={4} required />
                <textarea placeholder="Benefits (HTML supported)" value={currentJob.benefits} onChange={(e) => setCurrentJob({...currentJob, benefits: e.target.value})} className="w-full border p-2 rounded" rows={3} />
                
                <div className="flex gap-3 justify-end">
                  <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">{isEditing ? "Update" : "Create"} Job</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Jobs Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <tr>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((job) => (
                <tr key={job.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-semibold">{job.title}</td>
                  <td className="p-3">{job.department}</td>
                  <td className="p-3">{job.location}</td>
                  <td className="p-3">{job.type}</td>
                  <td className="p-3">
                    {job.active ? (
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Active</span>
                    ) : (
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">Inactive</span>
                    )}
                    {job.featured && <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Featured</span>}
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <button onClick={() => editJob(job)} className="text-blue-500 hover:text-blue-700"><Edit className="h-5 w-5" /></button>
                      <button onClick={() => job.id && handleDelete(job.id)} className="text-red-500 hover:text-red-700"><Trash2 className="h-5 w-5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            <button onClick={() => setCurrentPage(p => Math.max(1, p-1))} disabled={currentPage === 1} className="px-3 py-1 border rounded">Previous</button>
            <span className="px-3 py-1">Page {currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage(p => Math.min(totalPages, p+1))} disabled={currentPage === totalPages} className="px-3 py-1 border rounded">Next</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCareerManager;