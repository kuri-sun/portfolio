import { HoverEffectCard } from "../ui/hover-efffect-card";

const projects = [
  {
    title: "Next UI",
    description:
      "NextUI is a UI library for React that helps you build beautiful and accessible user interfaces.",
    link: "https://nextui.org",
    image: "/images/nextui.png",
  },
  {
    title: "SanS UI",
    description:
      "SanS is a UI library for boosting your Svelte projects with modular UI components built on Tailwind CSS.",
    link: "https://sans-ui.org",
    image: "/images/sans-ui.png",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="w-full border-t">
      <div className="max-w-7xl pt-12 md:px-8">
        <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Projects
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I am always looking for new projects to work on, so feel free to reach
          out to me if you have any ideas.
        </p>
      </div>
      <div className="w-full mx-auto md:px-6">
        <HoverEffectCard items={projects} />
      </div>
    </div>
  );
}
