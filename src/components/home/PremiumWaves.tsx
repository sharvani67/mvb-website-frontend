export function WaveTopRight() {
  return (
    <svg
      className="absolute top-0 right-0 w-[55%] h-full z-0"
      viewBox="0 0 800 800"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff2d7a" />
          <stop offset="25%" stopColor="#ff7a00" />
          <stop offset="50%" stopColor="#ffd400" />
          <stop offset="75%" stopColor="#38d66b" />
          <stop offset="100%" stopColor="#00a8ff" />
        </linearGradient>
      </defs>

      <path
        d="M250 0 C500 200 700 400 800 800 L800 0 Z"
        fill="url(#heroGradient)"
        opacity="0.15"
      />
    </svg>
  );
}

export function WaveBottomLeft() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-[55%] h-full z-0"
      viewBox="0 0 800 800"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00a8ff" />
          <stop offset="25%" stopColor="#38d66b" />
          <stop offset="50%" stopColor="#ffd400" />
          <stop offset="75%" stopColor="#ff7a00" />
          <stop offset="100%" stopColor="#ff2d7a" />
        </linearGradient>
      </defs>

      <path
        d="M0 800 C200 500 400 300 800 0 L0 0 Z"
        fill="url(#aboutGradient)"
        opacity="0.15"
      />
    </svg>
  );
}