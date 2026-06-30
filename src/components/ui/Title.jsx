import ShinyText from "../reactbits/ShinyText";

export default function Title({ text }) {
  return (
    <div className="grid justify-items-center gap-y-1.5 mb-5">
      <h2 className={`text-4xl font-bold`}>
        <ShinyText text={text} />
      </h2>
      <span className={`inline-block w-24 h-1 rounded-full bg-white`} />
    </div>
  );
}
