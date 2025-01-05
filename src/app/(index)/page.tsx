import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import Projects from "@/components/projectCard/Project";
export default function Home() {
  return (
    <div
      className={`flex flex-col gap-24 px-14 md:px-18 lg:px-24 xl:px-36 mb-24`}
    >
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
