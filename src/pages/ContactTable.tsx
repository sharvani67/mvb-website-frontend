import React, { useEffect, useState } from "react";
import AdminNavbar from "@/components/AdminNavbar";
import axios from "axios";
import BASE_URL from "@/Config/Api";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  subject: string;
  message: string;
  created_at: string;
}

const ContactTable = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const recordsPerPage = 10;

  const fetchContacts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${BASE_URL}/api/contact/get-all`);
      
      // Handle both response structures (with success flag or direct array)
      let contactsData = [];
      if (res.data.success && Array.isArray(res.data.data)) {
        contactsData = res.data.data;
      } else if (Array.isArray(res.data)) {
        contactsData = res.data;
      } else {
        contactsData = [];
      }
      
      // Sort latest first (newest by id or created_at)
      const sortedData = contactsData.sort((a, b) => {
        if (b.created_at && a.created_at) {
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        }
        return b.id - a.id;
      });
      
      setContacts(sortedData);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setError("Failed to load contact requests. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Filter contacts based on search
  const filteredContacts = contacts.filter((contact) =>
    contact.name?.toLowerCase().includes(search.toLowerCase()) ||
    contact.email?.toLowerCase().includes(search.toLowerCase()) ||
    contact.phone?.includes(search) ||
    contact.subject?.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const indexOfLast = currentPage * recordsPerPage;
  const indexOfFirst = indexOfLast - recordsPerPage;
  const currentRecords = filteredContacts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredContacts.length / recordsPerPage);

  // Format date
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Delete contact
  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this contact request?")) {
      try {
        await axios.delete(`${BASE_URL}/api/contact/delete/${id}`);
        fetchContacts(); // Refresh the list
      } catch (err) {
        console.error("Error deleting contact:", err);
        alert("Failed to delete contact. Please try again.");
      }
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    const headers = ["ID", "Name", "Email", "Phone", "Company", "Subject", "Message", "Date"];
    const csvData = filteredContacts.map(contact => [
      contact.id,
      contact.name,
      contact.email,
      contact.phone,
      contact.company || "",
      contact.subject,
      contact.message.replace(/,/g, " "),
      formatDate(contact.created_at)
    ]);
    
    const csvContent = [headers, ...csvData].map(row => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `contacts_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />

      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
            Contact Requests
          </h1>
          
          <div className="flex gap-3">
            <button
              onClick={exportToCSV}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center gap-2"
            >
              📥 Export CSV
            </button>
            <button
              onClick={fetchContacts}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
            >
              🔄 Refresh
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">Total Contacts</p>
            <p className="text-2xl font-bold">{contacts.length}</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">This Month</p>
            <p className="text-2xl font-bold">
              {contacts.filter(c => {
                const date = new Date(c.created_at);
                const now = new Date();
                return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
              }).length}
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">This Week</p>
            <p className="text-2xl font-bold">
              {contacts.filter(c => {
                const date = new Date(c.created_at);
                const now = new Date();
                const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
                return date >= weekStart;
              }).length}
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
            <p className="text-sm opacity-90">Showing</p>
            <p className="text-2xl font-bold">{currentRecords.length} / {filteredContacts.length}</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="🔍 Search by name, email, phone, or subject..."
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

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
            <p className="text-red-600">{error}</p>
            <button
              onClick={fetchContacts}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Table */}
        {!loading && !error && (
          <>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 text-white">
                    <tr>
                      <th className="p-4 text-sm font-semibold">S.No</th>
                      <th className="p-4 text-sm font-semibold">Name</th>
                      <th className="p-4 text-sm font-semibold">Email</th>
                      <th className="p-4 text-sm font-semibold">Phone</th>
                      <th className="p-4 text-sm font-semibold">Company</th>
                      <th className="p-4 text-sm font-semibold">Subject</th>
                      <th className="p-4 text-sm font-semibold">Message</th>
                      <th className="p-4 text-sm font-semibold">Date</th>
                      <th className="p-4 text-sm font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRecords.length > 0 ? (
                      currentRecords.map((contact, index) => (
                        <tr
                          key={contact.id}
                          className="border-b hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50 transition-all duration-300"
                        >
                          <td className="p-4 text-sm text-gray-500 font-medium">
                            {indexOfFirst + index + 1}
                          </td>
                          <td className="p-4">
                            <span className="font-semibold text-gray-800">{contact.name}</span>
                          </td>
                          <td className="p-4">
                            <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                              {contact.email}
                            </a>
                          </td>
                          <td className="p-4">
                            <a href={`tel:${contact.phone}`} className="text-green-600 hover:underline">
                              {contact.phone}
                            </a>
                          </td>
                          <td className="p-4 text-gray-600">
                            {contact.company || "-"}
                          </td>
                          <td className="p-4">
                            <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                              {contact.subject}
                            </span>
                          </td>
                          <td className="p-4 max-w-xs">
                            <p className="text-gray-600 truncate" title={contact.message}>
                              {contact.message.length > 50 ? contact.message.substring(0, 50) + "..." : contact.message}
                            </p>
                          </td>
                          <td className="p-4 text-xs text-gray-500">
                            {formatDate(contact.created_at)}
                          </td>
                          <td className="p-4">
                            <button
                              onClick={() => handleDelete(contact.id)}
                              className="text-red-500 hover:text-red-700 transition-colors duration-300"
                              title="Delete"
                            >
                              🗑️
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={9} className="text-center py-12">
                          <div className="text-gray-400">
                            <svg className="mx-auto h-12 w-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                            <p className="text-lg font-medium">No contact requests found</p>
                            <p className="text-sm mt-1">Try adjusting your search or check back later.</p>
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
                    // Show limited page numbers
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
              Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredContacts.length)} of {filteredContacts.length} entries
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactTable;