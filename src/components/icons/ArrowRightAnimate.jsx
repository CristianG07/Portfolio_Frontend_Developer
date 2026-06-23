export default function ArrowRightAnimate({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={className}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path strokeDasharray="20" d="M3 12h17.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.3s"
            values="20;0"
          />
        </path>
        <path
          strokeDasharray="12"
          strokeDashoffset="12"
          d="M21 12l-7 7M21 12l-7 -7"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.3s"
            dur="0.2s"
            to="0"
          />
        </path>
      </g>
    </svg>
  );
}
