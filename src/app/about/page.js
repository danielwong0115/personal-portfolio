import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 my-20 px-8 max-w-6xl mx-auto">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-10 max-w-2xl text-lg">
          I am a current junior at Northwestern University majoring in Computer
          Science and minoring in Data Science and Engineering. My values in
          software engineering as a curious and motivated individual are in
          continuously learning new technologies and reflecting and improving on
          myself from feedback.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Programming Languages
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Python</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>C</li>
              <li>C++</li>
              <li>SQL</li>
              <li>Ruby</li>
              <li>MATLAB</li>
              <li>C#</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Frameworks & Libraries
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>React</li>
              <li>Express</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Django</li>
              <li>Spring Boot</li>
              <li>Scikit-Learn</li>
              <li>Pandas</li>
              <li>SciPy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
        <Image
          src="/images/aboutpic.jpg"
          alt="About Me"
          fill
          className="rounded-3xl object-cover"
        />
      </div>
    </div>
  );
}
