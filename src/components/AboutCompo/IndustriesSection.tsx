import { Globe } from "lucide-react";

const industries = [
  {
    title: "Emerging Enterprise",
    desc: "Helping growing businesses deploy scalable IT infrastructure and secure networks.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  {
    title: "Manufacturing",
    desc: "Reliable industrial networking, automation infrastructure and plant connectivity.",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
  },
  {
    title: "Large Enterprise",
    desc: "Enterprise-grade IT infrastructure, high availability networks and security systems.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  },
  {
    title: "Data Centers",
    desc: "Advanced cabling, cooling, storage infrastructure and AI-ready environments.",
    image: "https://images.unsplash.com/photo-1581092919535-7146ff1a5909",
  },
  {
    title: "Architects & Builders",
    desc: "Designing smart buildings with integrated IT infrastructure from the foundation.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    title: "Consultants",
    desc: "Strategic IT infrastructure advisory for complex enterprise deployments.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
  {
    title: "Edu Tech",
    desc: "Campus-wide networking, secure digital infrastructure and learning platforms.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
  {
    title: "Hospitality",
    desc: "Guest experience driven connectivity, surveillance and smart building networks.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
];

export function IndustriesSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-6">
            <Globe className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">
              Where We Serve
            </span>
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Industries We Empower
          </h2>

          <p className="text-xl text-gray-600">
            Delivering reliable IT infrastructure across multiple industries.
          </p>
        </div>

        {/* Floating Layout */}
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

          {industries.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500
              ${i % 3 === 1 ? "md:translate-y-16" : ""}
              ${i % 3 === 2 ? "md:translate-y-32" : ""}
              `}
            >

              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 bg-white">

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-emerald-300 transition" />

              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}