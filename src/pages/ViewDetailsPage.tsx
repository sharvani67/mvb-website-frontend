import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ViewDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const project = location.state?.project;

  React.useEffect(() => {
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  // Helper to render the details table based on project data
  const renderDetailsTable = () => {
    // Default structure for all projects
    let clientExpectations = '';
    let solution = '';
    let approach = '';

    switch (project.title) {
      case "Data Centre":
        clientExpectations = "Hyperscale Infrastructure for high bandwidth & availability for domestic and international";
        solution = "Data center switches to support 100G & 400G Infra.";
        approach = "Evaluation & understanding of existing infra. spine & leaf Architecture. User accessibility, Application & Compliances.";
        break;
      case "Anthem Bioscience":
        clientExpectations = "Manufacturing campus of 20 acres to have reliable network & security for IT & OT , Wireless Connectivity Across the campus Campus , wide access control & surveillance . ";
        solution = "Structured cabling solutions Physical security solutions , Industrial & Enterprise graded AP’s , long range coverage , Physical security solutions .";
        approach = "Subsystem Approach Entry facility Backbone Telecommunication Horizontal Work area Administrative , Complete campus survey & Heat map prepared , Master & slave Controller Centralized monitoring Indoor & outdoor long- & short-range CCTV’s ";
        break;
      case "UNext":
        clientExpectations = "Frequent reboot of Firewall connecting 2000+ users from multiple locations.";
        solution = "Design & recommendation of Next Gen Firewall.";
        approach = "Understanding customer business goals & pain points. Evaluation of existing Firewall. Recommended reliable & scalable firewall & Log analytic tools.";
        break;
      case "String Bio":
        clientExpectations = "Manufacturing campus of 7 acres to have reliable network & security for IT & OT";
        solution = "Comprehensive end to end solutions";
        approach = "Design and implemented Data cabling, Data physical Security, Data Security & Data Infra";
        break;
      case "Data Center Migration":
        clientExpectations = "Physical migration of data center within 48hrs.";
        solution = "Dismantling of existing devices. Setup new Data cabling Infrastructure. Documentation of Existing device connectivity.";
        approach = "Port Mapping & Dismantling of existing devices. Deployment of large resource for Data cabling & re-connectivity at co-location within 48hrs.";
        break;
      case "The School of RAYA":
        clientExpectations = "Smart & Digitally Connected – 10 acres campus of classrooms in multiple blocks , Sports area, Canteen, Admin, Auditorium, Lobbies etc. Centralized surveillance of people, school assets, safety, Public announcement at various location of the campus . ";
        solution = "Comprehensive end to end IT infra-approach, Command center to monitor campus infrastructure. Integration of CCTV, IP PA system & IP phone . ";
        approach = "Design and implemented Data cabling, Data physical Security, Data Security & Data Infra ,Star topology for CCTV data cabling of 350 cameras. Single Dashboard viewing 6 displays , Centralized management Software was used to integration & communication at command center. ";
        break;
      case "IWPS":
        clientExpectations = "Fit-out or ready to move facility within 45days for 45,000sqft office.";
        solution = "Data cabling solutions for office area.";
        approach = "Required-Allocate-Delivered: Required 2 teams at each floor. Allocated resources, tools & material. Delivered through Project management process.";
        break;
      default:
        clientExpectations = project.description;
        solution = project.solution;
        approach = project.approach;
    }

    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
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

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center gap-2">
                <span>🎯</span> Client Expectation
              </h3>
              <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                {clientExpectations}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-600 mb-3 flex items-center gap-2">
                <span>💡</span> Solution Delivered
              </h3>
              <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                {solution}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-indigo-600 mb-3 flex items-center gap-2">
                <span>⚙️</span> Our Approach
              </h3>
              <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                {approach}
              </p>
            </div>
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
          Back to Projects
        </button>

        {/* Project Details Card */}
        {renderDetailsTable()}

        {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 rounded-2xl p-8 text-center shadow-xl">

  <h3 className="text-2xl font-bold text-white mb-3">
    Interested in a similar solution?
  </h3>

  <p className="text-white/90 mb-6">
    Let's discuss how we can help transform your IT infrastructure
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