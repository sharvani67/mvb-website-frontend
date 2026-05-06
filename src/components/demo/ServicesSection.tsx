import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Data Cabling",
    image: "https://i.pinimg.com/736x/0c/13/c9/0c13c97a2c24a66d270d7fa50a40695f.jpg",
  },
  {
    title: "Data Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
  {
    title: "Physical Security",
    image: "https://images.unsplash.com/photo-1581091215367-59ab6b9f9c8f",
  },
  {
    title: "Servers & Storage",
    image: "https://images.unsplash.com/photo-1581091870622-1e7eae5f6c60",
  },
  {
    title: "Cloud Solutions",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "AI Solutions",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      className="relative text-gray-900"
      style={{
        height: `${services.length * 100}vh`,
        background: "linear-gradient(135deg, #fff7cc, #fceabb, #f8e6a0)",
      }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">

        <div className="w-full max-w-7xl flex items-center">

          {/* 🔥 LEFT SIDE */}
          <div className="w-1/2 flex flex-col justify-center pl-28 pr-10">
            {services.map((service, index) => {
              const start = index / services.length;
              const end = (index + 1) / services.length;

              const opacity = useTransform(scrollYProgress, [start, end], [0.4, 1]);
              const scale = useTransform(scrollYProgress, [start, end], [0.95, 1.1]);

              return (
                <motion.div
                  key={index}
                  style={{ opacity, scale }}
                  className="mb-6"
                >
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {service.title}
                  </h3>

                  <motion.div
                    style={{ opacity }}
                    className="h-[2px] w-20 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-500 mt-2"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* 🔥 RIGHT SIDE */}
          <div className="w-1/2 relative flex items-center justify-center">

            {/* 🔹 BACK GRID (MORE DULL) */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {services.map((service, index) => {
                return (
                  <img
                    key={index}
                    src={`${service.image}?auto=format&fit=crop&w=400&q=80`}
                    className="w-full h-[120px] object-cover rounded-lg 
                               grayscale brightness-50 blur-[1px] opacity-30"
                  />
                );
              })}
            </div>

            {/* 🔥 CENTER ACTIVE IMAGE */}
            {services.map((service, index) => {
              const start = index / services.length;
              const end = (index + 1) / services.length;

              const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
              const scale = useTransform(scrollYProgress, [start, end], [0.85, 1.15]);
              const y = useTransform(scrollYProgress, [start, end], [50, 0]);

              return (
                <motion.div
                  key={index}
                  style={{ opacity, scale, y }}
                  className="absolute flex items-center justify-center"
                >
                  {/* 🧊 CLEAN BACKDROP (IMPORTANT FIX) */}
                  <div className="absolute w-[360px] h-[240px] bg-white/80 backdrop-blur-md rounded-xl shadow-xl" />

                  {/* 🌟 SUBTLE GOLD GLOW */}
                  <div className="absolute w-[360px] h-[240px] 
                                  bg-gradient-to-r from-yellow-300 to-yellow-500 
                                  blur-xl opacity-20 rounded-xl" />

                  {/* 🔥 MAIN IMAGE */}
                  <img
                    src={`${service.image}?auto=format&fit=crop&w=900&q=90`}
                    className="relative w-[340px] h-[220px] object-cover 
                               rounded-xl border border-yellow-400 shadow-2xl"
                    alt={service.title}
                  />
                </motion.div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;