export default function Input({
  type = "text",
  placeholder = "",
  className,
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-5 py-4 border border-blue-bright/40 placeholder:text-gray-400 outline-none rounded-card backdrop-blur-md transition-all duration-300 focus:border-blue-bright focus:shadow-[0_0_20px_rgba(0,170,255,0.25)] focus:bg-white/5 ${className}`}
      {...props}
    />
  );
}
