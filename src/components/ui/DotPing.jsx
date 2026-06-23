export default function DotPing({ className }) {
  return (
    <span className={`relative flex size-3 ${className}`}>
      <span className="absolute h-full w-full animate-ping rounded-full bg-blue-bright " />
      <span className="relative size-3 rounded-full bg-blue-bright" />
    </span>
  );
}
