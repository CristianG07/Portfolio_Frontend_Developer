import ShinyText from "../reactbits/ShinyText";

export default function Logo() {
  return (
    <a href="/">
      <ShinyText
        text="Cristian G."
        className="text-3xl md:text-4xl font-bold text-nowrap"
      />
    </a>
  );
}
