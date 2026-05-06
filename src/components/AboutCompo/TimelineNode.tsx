export function TimelineNode({
  year,
  title,
  desc,
  icon,
  position,
  active,
}: any) {
  return (
    <div
      className={`relative flex items-center ${
        position === "left" ? "justify-start" : "justify-end"
      }`}
    >
      {/* Card */}
      <div className="w-[45%] group">

        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-blue-500/20 transition duration-500 hover:-translate-y-2">

          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{icon}</span>
            <span className="text-blue-400 font-semibold">{year}</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition">
            {title}
          </h3>

          <p className="text-gray-400 leading-relaxed">
            {desc}
          </p>

        </div>
      </div>

      {/* Center Node */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">

        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-lg
          ${
            active
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/40"
              : "bg-slate-800 text-gray-300 border border-white/20"
          }`}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}