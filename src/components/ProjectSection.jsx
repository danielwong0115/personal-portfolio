import Image from "next/image";

export default function ProjectSection({
  title,
  description,
  image,
  video,
  alt,
}) {
  return (
    <article className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-10 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>

      <div className="flex-1 w-full max-w-xl">
        {video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full aspect-video rounded-2xl object-cover shadow-md"
            aria-label={alt}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={image}
            alt={alt}
            width={640}
            height={360}
            className="w-full aspect-video rounded-2xl object-cover shadow-md"
          />
        )}
      </div>
    </article>
  );
}
