export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>

      <rect
        x="10"
        y="10"
        width="15"
        height="15"
        fill="url(#logoGradient)"
        rx="2"
      />
      <rect
        x="30"
        y="10"
        width="15"
        height="15"
        fill="url(#logoGradient)"
        rx="2"
      />
      <rect
        x="50"
        y="10"
        width="15"
        height="15"
        fill="url(#logoGradient)"
        rx="2"
      />
      <rect
        x="75"
        y="10"
        width="15"
        height="15"
        fill="url(#logoGradient)"
        rx="2"
      />

      <rect
        x="10"
        y="30"
        width="15"
        height="15"
        fill="url(#logoGradient)"
        rx="2"
      />
      <rect
        x="75"
        y="30"
        width="15"
        height="15"
        fill="url(#logoGradient)"
        rx="2"
      />

      <rect
        x="10"
        y="50"
        width="15"
        height="15"
        fill="url(#logoGradient)"
        rx="2"
      />
      <circle cx="50" cy="57.5" r="8" fill="url(#logoGradient)" />
      <rect
        x="75"
        y="50"
        width="15"
        height="15"
        fill="url(#logoGradient)"
        rx="2"
      />

      <rect
        x="10"
        y="75"
        width="15"
        height="15"
        fill="url(#logoGradient)"
        rx="2"
      />
      <rect
        x="30"
        y="75"
        width="15"
        height="15"
        fill="url(#logoGradient)"
        rx="2"
      />
      <rect
        x="50"
        y="75"
        width="15"
        height="15"
        fill="url(#logoGradient)"
        rx="2"
      />
      <rect
        x="75"
        y="75"
        width="15"
        height="15"
        fill="url(#logoGradient)"
        rx="2"
      />
    </svg>
  );
}
