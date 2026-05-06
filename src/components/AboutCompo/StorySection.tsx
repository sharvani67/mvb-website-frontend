import { BookOpen, Cable, Building, Calendar, Briefcase } from 'lucide-react';

export function StorySection() {
  const dnaItems = [
    { label: "Data Cabling Drops", value: "1,00,000+", color: "blue", icon: Cable },
    { label: "Enterprise Clients", value: "200+", color: "purple", icon: Building },
    { label: "Years of Excellence", value: "9+ (Entering 10th)", color: "emerald", icon: Calendar },
    { label: "CEO Experience", value: "22+ Years", color: "amber", icon: Briefcase },
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Narrative */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-8">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Our Story</span>
            </div>

            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              From a small office in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Bangalore
              </span>
              <br />to enterprises worldwide
            </h2>

            <div className="space-y-6 text-lg text-gray-600">
              <p className="leading-relaxed">
                <span className="text-3xl font-serif text-blue-600 float-left mr-2">"</span>
                MV Business Solutions Pvt Ltd is an expertise in Data Cabling, Data Security, Physical Security & AI. We have Executed Complex IT Infra projects, related to corporate, manufacturing, pharma, Data Center, and enterprise companies.
              </p>
              
              <p className="leading-relaxed">
                We Design & implement IT Infra solutions that are strategic core of organisation that includes security assessment from VAPT to deployment of EPP, SIEM, SOC, Cloud Security, Surveillance & Access Control, in strong foundation of Copper & Fiber Cabling, with on Prem Server and Cloud Storage Solutions with right cooling solutions.
              </p>

              <p className="leading-relaxed italic border-l-4 border-blue-500 pl-6 py-2 bg-blue-50/50 rounded-r-2xl">
                "Our Creative talents deliver innovative, customer-centric solutions with complete peace of mind."
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl">
                VK
              </div>
              <div>
                <div className="font-serif text-2xl text-gray-800">Venkatesh Krishnan</div>
                <div className="text-sm text-gray-500">Founder & CEO | 22+ Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right - Visual Journey */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur-3xl opacity-30" />
            
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our DNA</h3>
              
              <div className="space-y-6">
                {dnaItems.map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className={`p-3 rounded-xl bg-${item.color}-50 group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`w-5 h-5 text-${item.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-600">{item.label}</span>
                          <span className="text-lg font-bold text-gray-900">{item.value}</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-${item.color}-500 rounded-full transition-all duration-1000`}
                            style={{ width: '100%' }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-100 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}