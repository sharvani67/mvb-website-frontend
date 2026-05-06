type Props = {
  position?: "top-right" | "bottom-left";
};

export default function SectionWave({ position = "top-right" }: Props) {
  const isTopRight = position === "top-right";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

      <svg
        className={`absolute ${isTopRight ? "top-0 right-0" : "bottom-0 left-0"} 
        w-[70%] h-[120%]`}
        viewBox="0 0 900 900"
        preserveAspectRatio="none"
      >
        <defs>

          <linearGradient
            id={isTopRight ? "gradA" : "gradB"}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ff2d7a" />
            <stop offset="25%" stopColor="#ff7a00" />
            <stop offset="50%" stopColor="#ffd400" />
            <stop offset="75%" stopColor="#38d66b" />
            <stop offset="100%" stopColor="#00a8ff" />
          </linearGradient>

        </defs>

        {isTopRight ? (
          <path
            d="M250 0C450 200 650 400 900 900L900 0Z"
            fill="url(#gradA)"
            opacity="0.12"
          />
        ) : (
          <path
            d="M0 900C200 650 400 450 900 0L0 0Z"
            fill="url(#gradB)"
            opacity="0.12"
          />
        )}

      </svg>

    </div>
  );
}