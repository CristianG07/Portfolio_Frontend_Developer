import ShinyText from "../reactbits/ShinyText";

export default function Title({ text, classNameTitle, classNameLine }) {
  return (
    <>
      <h2 className={`text-4xl font-bold ${classNameTitle}`}>
        <ShinyText text={text} />
      </h2>
      <span
        className={`inline-block w-20 h-1 rounded-full bg-white ${classNameLine}`}
      />
    </>
  );
}
