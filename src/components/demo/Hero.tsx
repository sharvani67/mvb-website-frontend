import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🔷 Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
          alt="bg"
          className="w-full h-full object-cover"
        />

        {/* 🌈 Gradient Overlay (Your Logo Colors) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#1e293b]/80 to-transparent" />

        {/* Color Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,0,150,0.3),transparent_40%)]" />
      </div>

      {/* 🔵 Right Circle Image */}
      <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full overflow-hidden border-[12px] border-transparent bg-[conic-gradient(red,orange,yellow,green,blue,purple,red)] p-[6px]">

        <div className="w-full h-full rounded-full overflow-hidden bg-white">
          <img
            src="https://images.unsplash.com/photo-1581091215367-59ab6b4b9b7f"
            alt="worker"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ✨ Curved Lines Decoration */}
      <div className="absolute right-[200px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/30 rounded-full border-dashed" />

      {/* 📝 Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-white"
        >
          <p className="uppercase tracking-widest text-sm text-gray-300 mb-4">
            Smart Technology Solutions
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              Innovation in
            </span>{" "}
            <br />
            Power & Energy
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Delivering secure, scalable, and customer-centric solutions 
            designed to bring peace of mind to your business operations.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 text-white font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition">
              Get A Quote <ArrowRight size={18} />
            </button>

            <button className="px-6 py-3 rounded-full border border-white/40 hover:bg-white/10 transition">
              Read More
            </button>
          </div>
        </motion.div>
      </div>

      {/* 🌊 Bottom Curved Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[120px]"
        >
          <path
            fill="#f5f5f5"
            d="M0,256L80,240C160,224,320,192,480,181.3C640,171,800,181,960,176C1120,171,1280,149,1360,138.7L1440,128V320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;