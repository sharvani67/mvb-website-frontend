export default function GlobalCurves() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      <svg
        className="absolute top-0 right-0 w-[1400px] opacity-40"
        viewBox="0 0 1400 900"
        fill="none"
      >
        <path
          d="M0 400C300 200 700 600 1000 300C1200 180 1300 120 1400 100"
          stroke="url(#grad1)"
          strokeWidth="4"
        />

        <defs>
          <linearGradient id="grad1">
            <stop offset="0%" stopColor="#ff2d7a"/>
            <stop offset="25%" stopColor="#ff7a00"/>
            <stop offset="50%" stopColor="#ffd400"/>
            <stop offset="75%" stopColor="#38d66b"/>
            <stop offset="100%" stopColor="#00a8ff"/>
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-[1400px] opacity-40"
        viewBox="0 0 1400 900"
        fill="none"
      >
        <path
          d="M0 800C300 650 700 900 1000 650C1200 520 1300 450 1400 420"
          stroke="url(#grad2)"
          strokeWidth="4"
        />

        <defs>
          <linearGradient id="grad2">
            <stop offset="0%" stopColor="#00a8ff"/>
            <stop offset="25%" stopColor="#38d66b"/>
            <stop offset="50%" stopColor="#ffd400"/>
            <stop offset="75%" stopColor="#ff7a00"/>
            <stop offset="100%" stopColor="#ff2d7a"/>
          </linearGradient>
        </defs>
      </svg>

    </div>
  );
}