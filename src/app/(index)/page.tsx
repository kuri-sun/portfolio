import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import Projects from "@/components/projectCard/Project";
import { Header } from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div
        className={`flex flex-col gap-24 px-14 md:px-18 lg:px-24 xl:px-36 pb-24 dark:bg-neutral-800 text-gray-600 dark:text-neutral-100`}
      >
        <Hero />
        <About />
        <Projects />
      </div>
    </>
  );
}
