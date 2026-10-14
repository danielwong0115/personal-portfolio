import ProjectSection from "@/components/ProjectSection";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 my-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Selected Projects</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-6">
        I’m a developer who learns by building. These projects span a range of work, from pulling live data through APIs, to contributing to a real product during my internship, to building something for a hobby I love. Each one taught me something new, and together they show how I turn an idea into something people can actually use.
      </p>

      <ProjectSection
        title="Weather App"
        description={
          <>
            I built a React weather app, deployed on Vercel, that shows current
            conditions, air quality, and forecasts for cities across the world.
            I integrated several weather APIs, including OpenWeatherMap and
            Open-Meteo, and combined their data into a single, consistent view
            so users get everything in one place without switching between
            sources. I used Bootstrap to make the interface responsive, so it’s
            easy to read and use on both desktop and mobile.{" "}
            <a
              href="https://weathercentral.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Check it out here!
            </a>
          </>
        }
        video="./images/weatherAppVid2.mp4"
        alt="Weather App project demonstration"
        cropVideo
      />

      <ProjectSection
        title="NetLogo Site"
        description={
          <>
            I built and launched the new NetLogo website as my internship
            project at NetLogo, a site for exploring and presenting NetLogo’s
            work that brings project information and interactive modeling
            resources together in one place. I developed the frontend with
            Astro and integrated Directus, a content management system, on the
            backend so the team can easily manage and update site content as
            the website grows.{" "}
            <a
              href="https://www.netlogo.org/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Take a look here!
            </a>
          </>
        }
        video="./images/netLogositeRecording.mp4"
        alt="NetLogo Site project demonstration"
      />

      <ProjectSection
        title="Dartlet"
        description={
          <>
            I built a darts app with React, inspired by a hobby I love, to
            track performance and see how I’m improving as a player. I also
            wanted to explore Google Cloud Platform through this project, so I
            integrated Google Firebase and Authentication to give each user a
            personalized account that stores their progress and shows
            statistics on how they’re doing over time.{" "}
            <a
              href="https://dart-app-755c2.web.app/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Try it out here!
            </a>
          </>
        }
        video="./images/dartAppRecording.mp4"
        alt="Dart App project demonstration"
      />
    </div>
  );
}
