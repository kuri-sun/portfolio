import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import { Header } from "@/components/header/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Haruki Kuriwada portfolio</title>
        <link rel="canonical" href="https://rukikuri.com/" key="canonical" />
      </Head>
      <Header />
      <div
        className={`flex flex-col pb-24 dark:bg-neutral-800 text-gray-600 dark:text-neutral-100`}
      >
        <Hero />
        <div className="flex flex-col px-14 md:px-18 lg:px-24 xl:px-36 gap-24 ">
          <About />
          <Projects />
          {/* <Logs /> */}
        </div>
      </div>
    </>
  );
}
