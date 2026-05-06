const expertise = [
  { label: "Data Cabling Drops", value: "1,00,000+", progress: 100 },
  { label: "Enterprise Clients", value: "200+", progress: 100 },
  { label: "Years of Excellence", value: "9+", progress: 100 },
  { label: "CEO Experience", value: "22+ Years", progress: 100 },
];

const partners = ["Belden", "Commscope", "Panduit", "Legrand", "Rittal", "Schneider", "APC", "Fortinet", "Splunk"];

export function ExpertiseSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600">
            Numbers don't lie. Neither does experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {expertise.map((item, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
                <div className="text-sm text-gray-500">{item.label}</div>
                
                {/* Progress Indicator */}
                <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Cloud */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <p className="text-center text-sm uppercase tracking-widest text-gray-400 mb-8">Trusted Technology Partners</p>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, i) => (
              <span key={i} className="px-6 py-3 bg-gray-50 rounded-full text-sm hover:bg-gray-100 hover:shadow-md transition-all">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}