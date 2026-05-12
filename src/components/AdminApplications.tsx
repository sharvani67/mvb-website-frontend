// components/AdminApplications.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "@/Config/Api";
import AdminNavbar from "@/components/AdminNavbar";
import { Download, Eye, CheckCircle, XCircle, Clock, User, Mail, Phone, Briefcase, Calendar } from "lucide-react";

interface Application {
  id: number;
  job_id: number;
  job_title: string;
  full_name: string;
  email: string;
  phone: string;
  experience: string;
  current_company: string;
  resume_path: string;
  cover_letter: string;
  status: string;
  applied_at: string;
}

const API_URL = `${BASE_URL}/api/careers`;

const AdminApplications = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const recordsPerPage = 10;

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}/admin/applications`);
      setApplications(response.data);
    } catch (err) {
      console.error("Error fetching applications:", err);
      setError("Failed to load applications. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: number, status: string) => {
    try {
      await axios.put(`${API_URL}/admin/applications/${id}/status`, { status });
      fetchApplications();
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Failed to update status. Please try again.");
    }
  };

  const downloadResume = (resumePath: string) => {
    window.open(`${BASE_URL}${resumePath}`, '_blank');
  };

  const viewDetails = (application: Application) => {
    setSelectedApplication(application);
    setShowDetailsModal(true);
  };

  // Filter applications based on search and status
  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.full_name.toLowerCase().includes(search.toLowerCase()) ||
      app.email.toLowerCase().includes(search.toLowerCase()) ||
      app.job_title.toLowerCase().includes(search.toLowerCase()) ||
      app.phone.includes(search);
    
    const matchesStatus = selectedStatus === "All" || app.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  // Pagination
  const indexOfLast = currentPage * recordsPerPage;
  const indexOfFirst = indexOfLast - recordsPerPage;
  const currentApplications = filteredApplications.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredApplications.length / recordsPerPage);

  // Status badge colors
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'reviewed': return 'bg-blue-100 text-blue-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'reviewed': return <Eye className="h-4 w-4" />;
      case 'accepted': return <CheckCircle className="h-4 w-4" />;
      case 'rejected': return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  // Stats
  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === 'pending').length,
    reviewed: applications.filter(a => a.status === 'reviewed').length,
    accepted: applications.filter(a => a.status === 'accepted').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AdminNavbar />
        <div className="flex justify-center items-center h-screen pt-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />

      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Job Applications
          </h1>
          <p className="text-gray-600 mt-1">Manage and review candidate applications</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">Total Applications</p>
            <p className="text-2xl font-bold">{stats.total}</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">Pending</p>
            <p className="text-2xl font-bold">{stats.pending}</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">Reviewed</p>
            <p className="text-2xl font-bold">{stats.reviewed}</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">Accepted</p>
            <p className="text-2xl font-bold">{stats.accepted}</p>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">Rejected</p>
            <p className="text-2xl font-bold">{stats.rejected}</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search by name, email, job title, or phone..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="All">All Status</option>
              <option value="pending">Pending</option>
              <option value="reviewed">Reviewed</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
            <button
              onClick={fetchApplications}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center mb-6">
            <p className="text-red-600">{error}</p>
            <button
              onClick={fetchApplications}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Applications Table */}
        {!error && (
          <>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <tr>
                      <th className="p-4 text-left">ID</th>
                      <th className="p-4 text-left">Job Title</th>
                      <th className="p-4 text-left">Applicant</th>
                      <th className="p-4 text-left">Contact</th>
                      <th className="p-4 text-left">Experience</th>
                      <th className="p-4 text-left">Status</th>
                      <th className="p-4 text-left">Applied</th>
                      <th className="p-4 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentApplications.length > 0 ? (
                      currentApplications.map((app) => (
                        <tr key={app.id} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="p-4 font-medium">{app.id}</td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <Briefcase className="h-4 w-4 text-gray-400" />
                              <span>{app.job_title}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <div>
                              <div className="font-semibold text-gray-800">{app.full_name}</div>
                              <div className="text-xs text-gray-500">{app.current_company || 'Not specified'}</div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-1 text-sm">
                                <Mail className="h-3 w-3 text-gray-400" />
                                <a href={`mailto:${app.email}`} className="text-blue-600 hover:underline">
                                  {app.email}
                                </a>
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <Phone className="h-3 w-3 text-gray-400" />
                                <a href={`tel:${app.phone}`} className="text-gray-600">
                                  {app.phone}
                                </a>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3 text-gray-400" />
                              <span>{app.experience}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <select
                              value={app.status}
                              onChange={(e) => updateStatus(app.id, e.target.value)}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(app.status)} border-0 cursor-pointer`}
                            >
                              <option value="pending">Pending</option>
                              <option value="reviewed">Reviewed</option>
                              <option value="accepted">Accepted</option>
                              <option value="rejected">Rejected</option>
                            </select>
                          </td>
                          <td className="p-4 text-sm text-gray-500">
                            {new Date(app.applied_at).toLocaleDateString()}
                          </td>
                          <td className="p-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => viewDetails(app)}
                                className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                                title="View Details"
                              >
                                <Eye className="h-5 w-5" />
                              </button>
                              {app.resume_path && (
                                <button
                                  onClick={() => downloadResume(app.resume_path)}
                                  className="p-1 text-green-600 hover:text-green-800 transition-colors"
                                  title="Download Resume"
                                >
                                  <Download className="h-5 w-5" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="p-12 text-center text-gray-500">
                          No applications found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-8 gap-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                <span className="px-4 py-2 text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            )}

            {/* Results Info */}
            <div className="text-center mt-4 text-sm text-gray-500">
              Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredApplications.length)} of {filteredApplications.length} entries
            </div>
          </>
        )}
      </div>

      {/* Application Details Modal */}
      {showDetailsModal && selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Application Details</h2>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Applicant Info */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <User className="h-5 w-5 text-indigo-600" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium">{selectedApplication.full_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href={`mailto:${selectedApplication.email}`} className="text-blue-600 hover:underline">
                      {selectedApplication.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href={`tel:${selectedApplication.phone}`} className="text-gray-800">
                      {selectedApplication.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p>{selectedApplication.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Current Company</p>
                    <p>{selectedApplication.current_company || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Applied Date</p>
                    <p>{new Date(selectedApplication.applied_at).toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Job Info */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-indigo-600" />
                  Job Information
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Position</p>
                  <p className="font-medium">{selectedApplication.job_title}</p>
                </div>
              </div>

              {/* Cover Letter */}
              {selectedApplication.cover_letter && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Cover Letter</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="whitespace-pre-wrap">{selectedApplication.cover_letter}</p>
                  </div>
                </div>
              )}

              {/* Resume */}
              {selectedApplication.resume_path && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Resume</h3>
                  <button
                    onClick={() => downloadResume(selectedApplication.resume_path)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </button>
                </div>
              )}

              {/* Status Update */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Update Status</h3>
                <select
                  value={selectedApplication.status}
                  onChange={(e) => {
                    updateStatus(selectedApplication.id, e.target.value);
                    setSelectedApplication({...selectedApplication, status: e.target.value});
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="pending">Pending</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
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

export default AdminApplications;