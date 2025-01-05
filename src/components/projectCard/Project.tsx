import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col gap-8 pt-12 border-t">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold">Projects</h2>
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
