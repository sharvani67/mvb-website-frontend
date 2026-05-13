import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '@/Config/Api';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: string;
  gradient: string;
  image: string | null;
  client?: string;
  location?: string;
  created_at?: string;
  solution?: string;
  approach?: string;
  client_expectations?: string;
}

const ViewDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = `${BASE_URL}/api`;

  useEffect(() => {
    const stateProject = location.state?.project;
    
    if (stateProject) {
      setProject(stateProject);
      setLoading(false);
    } else {
      const pathParts = location.pathname.split('/');
      const projectId = pathParts[pathParts.length - 1];
      
      if (projectId && !isNaN(Number(projectId))) {
        fetchProjectById(Number(projectId));
      } else {
        setError('Project not found');
        setLoading(false);
      }
    }
  }, [location]);

  const fetchProjectById = async (id: number) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/projects/${id}`);
      if (response.data.success) {
        setProject(response.data.data);
      } else {
        setError('Project not found');
      }
    } catch (error) {
      console.error("Error fetching project:", error);
      setError('Failed to load project details');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (!project && !loading && !error) {
      navigate('/projectpage');
    }
  }, [project, loading, error, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Project Not Found</h2>
          <p className="text-gray-600 mb-6">{error || 'The project you\'re looking for doesn\'t exist.'}</p>
          <button
            onClick={() => navigate('/projectpage')}
            className="px-6 py-2 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const renderDetailsTable = () => {
    let clientExpectations = project.client_expectations || '';

    if (!clientExpectations) {
      switch (project.title) {
        case "Data Centre":
          clientExpectations = "Hyperscale Infrastructure For High Bandwidth & Availability For Domestic And International";
          break;

        case "Anthem Bioscience":
          clientExpectations = "Manufacturing Campus Of 20 Acres To Have Reliable Network & Security For IT & OT, Wireless Connectivity Across The Campus, Campus Wide Access Control & Surveillance.";
          break;

        case "UNext":
          clientExpectations = "Frequent Reboot Of Firewall Connecting 2000+ Users From Multiple Locations.";
          break;

        case "String Bio":
          clientExpectations = "Manufacturing Campus Of 7 Acres To Have Reliable Network & Security For IT & OT";
          break;

        case "Data Center Migration":
          clientExpectations = "Physical Migration Of Data Center Within 48Hrs.";
          break;

        case "The School Of RAYA":
          clientExpectations = "Smart & Digitally Connected – 10 Acres Campus Of Classrooms In Multiple Blocks, Sports Area, Canteen, Admin, Auditorium, Lobbies Etc. Centralized Surveillance Of People, School Assets, Safety, Public Announcement At Various Location Of The Campus.";
          break;

        case "IWPS":
          clientExpectations = "Fit-Out Or Ready To Move Facility Within 45Days For 45,000Sqft Office.";
          break;

        default:
          clientExpectations = project.description || "Delivered comprehensive IT infrastructure solution meeting all client requirements.";
      }
    }

    const getImageUrl = (imagePath: string | null) => {
      if (!imagePath) return null;
      let cleanPath = imagePath.replace(/^\/api/, '');
      if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
      return `${BASE_URL}${cleanPath}`;
    };

    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
        
        {/* Hero Image */}
        {project.image && (
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img
              src={getImageUrl(project.image)}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x400?text=Project+Image';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-5xl drop-shadow-lg">{project.icon}</div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h1>
                  <span className="inline-block mt-1 text-sm font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {!project.image && (
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-5xl">{project.icon}</div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{project.title}</h2>
                <span className="inline-block mt-1 text-sm font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="p-6 md:p-8">
          {/* Client & Location Info */}
          {(project.client || project.location) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              {project.client && (
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">🏢 Client:</span>
                  <span className="font-medium text-gray-800">{project.client}</span>
                </div>
              )}
              {project.location && (
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">📍 Location:</span>
                  <span className="font-medium text-gray-800">{project.location}</span>
                </div>
              )}
            </div>
          )}

          <div className="space-y-6">
            {/* Only Client Expectation section remains */}
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center gap-2">
                <span>🎯</span> Client Expectation
              </h3>
              <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                {clientExpectations}
              </p>
            </div>

            {/* Additional Project Info */}
            {project.created_at && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>📅 Project Completed:</span>
                  <span>{new Date(project.created_at).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const scrollToContactForm = () => {
    navigate('/contact');
    setTimeout(() => {
      const contactFormElement = document.getElementById('contact-form');
      if (contactFormElement) {
        contactFormElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/projectpage')}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back To Projects
        </button>

        {/* Project Details Card */}
        {renderDetailsTable()}

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-3">
            Interested In a Similar Solution?
          </h3>
          <p className="text-white/90 mb-6">
            Let's Discuss How We Can Help Transform Your IT Infrastructure
          </p>
          <button
            onClick={scrollToContactForm}
            className="px-6 py-2.5 font-semibold rounded-lg transition-all duration-300 
                       bg-white text-gray-800 hover:bg-gray-100 
                       shadow-md hover:shadow-xl hover:scale-105 cursor-pointer"
          >
            Talk to Our Experts →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsPage;