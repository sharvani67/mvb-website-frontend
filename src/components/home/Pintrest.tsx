import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  "https://images.unsplash.com/photo-1529336953121-a0f2c5e5f3f1",
];

export default function ScrollJourney() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Animate line drawing
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Image transitions
  const img1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const img2Opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const img3Opacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  return (
    <section ref={ref} className="h-[200vh] bg-[#0b0b0b] relative">
      
      {/* STICKY CONTAINER */}
      <div className="sticky top-0 h-screen flex items-center justify-center">

        {/* IMAGE AREA */}
        <div className="absolute flex items-center justify-center">
          
          <motion.img
            src={images[0]}
            style={{ opacity: img1Opacity }}
            className="absolute w-[320px] h-[420px] object-cover rounded-3xl"
          />

          <motion.img
            src={images[1]}
            style={{ opacity: img2Opacity }}
            className="absolute w-[320px] h-[420px] object-cover rounded-3xl"
          />

          <motion.img
            src={images[2]}
            style={{ opacity: img3Opacity }}
            className="absolute w-[320px] h-[420px] object-cover rounded-3xl"
          />
        </div>

        {/* SVG S CURVE */}
        <svg
          viewBox="0 0 600 200"
          className="absolute bottom-20 w-[80%]"
          fill="none"
        >
          {/* BACK PATH */}
          <path
            d="M0,100 Q150,0 300,100 T600,100"
            stroke="#444"
            strokeWidth="3"
          />

          {/* ANIMATED PATH */}
          <motion.path
            d="M0,100 Q150,0 300,100 T600,100"
            stroke="#7c3aed"
            strokeWidth="4"
            style={{ pathLength }}
          />
        </svg>

        {/* DOT INDICATOR */}
        <motion.div
          style={{
            left: useTransform(scrollYProgress, [0, 1], ["0%", "80%"]),
          }}
          className="absolute bottom-[120px] w-6 h-6 bg-purple-600 rounded-full"
        />

      </div>
    </section>
  );
}