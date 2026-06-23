import BubbleIcon from "./BubbleIcon";

export default function CardService({ title, IconComponent, description }) {
  return (
    <div className="bg-card p-8 space-y-3 rounded-card border border-blue-bright shadow shadow-blue-bright select-none">
      <BubbleIcon IconComponent={IconComponent} className="mx-auto" />
      <h4 className="text-xl">{title}</h4>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
