export default function Button({
  href,
  children,
  className,
  download = false,
}) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 text-base font-medium py-3 px-5 border rounded-card border-blue-neon  shadow-blue-bright transition-all duration-300 cursor-pointer backdrop-blur-sm ${className}`}
      download={download}
    >
      {children}
    </a>
  );
}
