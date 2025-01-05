import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div id="projects" className="w-full border-t">
      <div className="max-w-7xl mx-auto py-20 md:px-8">
        <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Projects
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I am always looking for new projects to work on, so feel free to reach
          out to me if you have any ideas.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-x-4 gap-y-16">
        <ProjectCard
          title={"Next UI"}
          description={
            "NextUI is a UI library for React that helps you build beautiful and accessible user interfaces."
          }
          href={"https://nextui.org"}
          image="/images/nextui.png"
        />
        <ProjectCard
          title={"SanS UI"}
          description={
            "SanS is a UI library for boosting your Svelte projects with modular UI components built on Tailwind CSS."
          }
          href={"https://sans-ui.org"}
          image="/images/sans-ui.png"
        />
      </div>
    </div>
  );
}
