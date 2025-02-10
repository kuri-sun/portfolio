import Hero from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import DesktopHeader from "@/components/header/DesktopHeader";
import MobileHeader from "@/components/header/MobileDesktop";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
// import Logs from "@/components/logs/Logs";

function Home() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <div
        className={`flex flex-col pb-4 dark:bg-neutral-800 text-gray-600 dark:text-neutral-100`}
      >
        <Hero />
        <div className="flex flex-col px-14 md:px-18 lg:px-24 xl:px-36 gap-24 ">
          <About />
          <Projects />
          {/* <Logs /> */}
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
