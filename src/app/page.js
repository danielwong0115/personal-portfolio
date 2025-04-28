import IntroBlock from "@/components/IntroBlocks";

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-6xl p-6 md:p-12 bg-white dark:bg-gray-900 border-1 border-gray-300 dark:border-gray-600 shadow-lg rounded-lg mt-10">
        <div className="md:w-1/2 text-left">
          <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-bold text-gray-900 dark:text-white mb-4">
            Hi! I&#39;m Daniel Wong
          </h1>
          <h3 className="text-xl md:text-2xl mb-3 text-gray-800 dark:text-gray-200">
            Passionate software developer specializing in building exceptional
            digital experiences.
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Welcome to my portfolio! Dive in to explore my work!
          </p>
        </div>

        {/* This will be my image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="./images/homePic.png" // LinkedIn Image!!!
            alt="Daniel Wong"
            className="w-64 h-64 rounded-full object-cover shadow-md"
          />
        </div>
      </section>

      <section className="mt-16 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <IntroBlock
          title="About Me"
          description="I&#39;m Daniel Wong, a Computer Science undergrad passionate about creative solutions and collaborative problem-solving."
          image="./images/homeAbout.jpg"
          alt="About"
        />

        <IntroBlock
          title="Interests"
          description="I&#39;m particularly interested in data science, software development, and transportation logistics."
          image="./images/homeInterests.png"
          alt="Interests"
        />

        <IntroBlock
          title="Contact & Connect"
          description="I&#39;m currently seeking internship opportunities in software development, data science, or transportation logistics. Let’s connect!"
          image="./images/homeContact.png"
          alt="Contact"
        />
      </section>
    </>
  );
}
