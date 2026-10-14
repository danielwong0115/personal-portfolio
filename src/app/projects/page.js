import ProjectSection from "@/components/ProjectSection";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 my-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Selected Projects</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-6">
        A selection of projects that showcase my interests in software
        development, data, and building useful digital experiences.
      </p>

      <ProjectSection
        title="Weather App"
        description="A weather application that presents current conditions and forecast information in a clear, easy-to-use interface."
        video="./images/weatherAppRecording.mp4"
        alt="Weather App project demonstration"
      />

      <ProjectSection
        title="NetLogo Site"
        description="A website for exploring and presenting NetLogo work, bringing project information and interactive modeling resources together in one place."
        video="./images/netLogositeRecording.mp4"
        alt="NetLogo Site project demonstration"
      />

      <ProjectSection
        title="Dart App"
        description="A Dart application built to practice application development and create a focused, responsive user experience."
        video="./images/dartAppRecording.mp4"
        alt="Dart App project demonstration"
      />
    </div>
  );
}
