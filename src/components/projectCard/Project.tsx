import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl text-[#025ed6] font-bold">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-5">
        <ProjectCard
          title={"Next UI"}
          description={
            "Participated in YC Summar batch 2024. NextUI is a UI library for React that helps you build beautiful and accessible user interfaces."
          }
          href={"nextui.org"}
          image="/images/nextui.png"
        />
      </div>
    </div>
  );
}
