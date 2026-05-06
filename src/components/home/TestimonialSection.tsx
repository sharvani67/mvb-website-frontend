import React from "react";

const testimonials = [
  {
    name: "Mr. Balaji",
    role: "IT & Automation Head",
    company: "",
    scope: "Core IT Infrastructure, Surveillance & Security",
    quote:
      "The team clearly understood our challenges and delivered a customized end-to-end IT infrastructure solution including surveillance and security. Over the past year, we have experienced seamless operations with zero major issues.",
    points: [
      "Management expressed satisfaction with overall implementation",
      "Smooth performance with no issues for over a year",
      "Large manufacturing Plant",
      "Strong collaboration on future upgrades for Nagasandra office",
      "Focus on automation security enhancements",
    ],
  },
  {
    name: "Mr. Chandan Rao",
    role: "",
    company: "The School of Raya",
    scope: "Core IT Infrastructure, Surveillance & Security",
    quote:
      "Overall, we are happy with the work delivered. The team has improved significantly in coordination and execution over time.",
    points: [
      "Bhupathi coordinates very well",
      "MV Process improved productivity and punctuality",
      "Happy with overall execution by MV",
      "Additional projects and orders have been assigned",
      "Firewall capacity upgrade planned next year",
      "Additional camera installation in progress",
      "10 acres of IB School ",
    
    ],
  },
];

const TestimonialsSectionss: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">

      {/* 🔹 Soft Brand Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff7ed] via-white to-[#eff6ff] opacity-90" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* 🔹 Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
            Client Experience
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#1f2937]">
            Voice of the Customer
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-[#ff4d8d] via-[#ffc857] to-[#3b82f6] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 🔹 Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative group p-[1px] rounded-3xl bg-gradient-to-r from-[#ff4d8d] via-[#ffc857] to-[#3b82f6] shadow-xl"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-r from-[#ff4d8d] via-[#ffc857] to-[#3b82f6] blur-2xl"></div>

              <div className="relative bg-white rounded-3xl p-8 md:p-10 transition-all duration-300 group-hover:shadow-2xl h-full flex flex-col">

                {/* Quote */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  “{t.quote}”
                </p>

                {/* Points */}
                <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                  {t.points.map((point, idx) => (
                    <li key={idx}>✔ {point}</li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="border-t pt-4 mt-auto flex flex-col gap-2">
                  <div>
                    <h4 className="text-lg font-semibold text-[#1f2937]">
                      {t.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {t.role} {t.company && `• ${t.company}`}
                    </p>
                  </div>

                  <div className="text-sm text-gray-500">
                    Scope: {t.scope}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Appreciation Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            Appreciation for the team:{" "}
            <span className="font-semibold text-[#1f2937]">
              Bhupathi, Chandan, Gaurav, Malay
            </span>
          </p>

          <p className="text-gray-500 text-xs mt-2">
            Upgrade planning in progress • Budget allocation expected before March 31, 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSectionss;