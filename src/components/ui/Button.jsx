export default function Button({
  href,
  children,
  className,
  download = false,
}) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 text-base font-medium py-3 px-5 border rounded-card border-blue-neon hover:scale-110 hover:shadow shadow-blue-bright transition-all duration-300 ${className}`}
      download={download}
    >
      {children}
    </a>
  );
}
