"use client";

export default function IntroBlock({ title, description, image, alt }) {
  return (
    <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl shadow-lg p-6 text-center">
      <img
        src={image}
        alt={alt}
        className="mx-auto w-20 h-20 object-cover rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}
