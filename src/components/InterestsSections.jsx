import Image from "next/image";

export default function InterestSection({
  title,
  text,
  imageSrc,
  reverse = false,
}) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center my-16 gap-8`}
    >
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-lg leading-relaxed">{text}</p>
      </div>
      <div className="flex-1 max-w-md">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={500}
          className="rounded-3xl object-cover w-full h-auto shadow-md"
        />
      </div>
    </div>
  );
}
