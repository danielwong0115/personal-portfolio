import IntroBlock from "@/components/IntroBlocks";
import Image from "next/image";
import TypewriterHeading from "@/components/TypewriterHeading";

const imagePath = (filename) =>
  `${process.env.NODE_ENV === "production" ? "/personal-portfolio" : ""}/images/${filename}`;

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-6xl p-6 md:p-12 bg-white dark:bg-gray-900 border-1 border-gray-300 dark:border-gray-600 shadow-lg rounded-lg mt-10">
        <div className="md:w-1/2 text-left">
          <TypewriterHeading text="Hi! I'm Daniel Wong" />
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
          <Image
            src={imagePath("homePic.png")}
            alt="Daniel Wong"
            width={256}
            height={256}
            className="w-64 h-64 rounded-full object-cover shadow-md"
          />
        </div>
      </section>

      <section className="mt-16 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <IntroBlock
          title="About Me"
          description="I’m a recent Northwestern graduate (B.S./M.S. in Computer Science) who enjoys building across the stack. My experience spans cloud engineering on Azure and AWS, full-stack development with React, and machine learning research in Python. I’m looking for software engineering roles where I can keep growing across cloud, data, and AI."
          image={imagePath("homeAbout.jpg")}
          alt="About"
        />

        <IntroBlock
          title="Projects"
          description="Hands-on work across data, APIs, and product development. Explore what I’ve built, from internship work on a production site to personal projects that came out of my own curiosity and hobbies. Each one shows a different side of how I build."
          image={imagePath("homeProjects.png")}
          alt="Projects"
        />

        <IntroBlock
          title="Contact & Connect"
          description="I’m currently seeking full-time roles in software engineering, data science, and technology consulting. I’m someone who picks things up quickly, communicates clearly across technical and non-technical teams, and enjoys working through hard problems with others. I’d love to connect!"
          image={imagePath("homeContact.png")}
          alt="Contact"
        />
      </section>
    </>
  );
}
