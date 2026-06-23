export default function Button({
  href,
  children,
  className,
  download = false,
}) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 text-xs md:text-base font-medium py-3 px-5 border rounded-card border-blue-neon ${className}`}
      download={download}
    >
      {children}
    </a>
  );
}
