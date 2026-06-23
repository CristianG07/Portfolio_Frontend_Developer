export default function BubbleIcon({ IconComponent, className }) {
  return (
    <div
      className={`flex items-center justify-center border border-blue-bright w-20 h-20 p-5 rounded-full bg-linear-30 from-blue-neon/0 via-blue-electric/5 to-blue-bright/10 shadow shadow-blue-bright mb-5 ${className}`}
    >
      <IconComponent className="text-5xl text-blue-bright" />
    </div>
  );
}
