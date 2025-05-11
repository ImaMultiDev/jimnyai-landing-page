export default function MobileMenu({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 31 19"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.25H30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9.5 9.25H30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M1 17.75H30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
