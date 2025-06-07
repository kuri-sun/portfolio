import Hero from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import DesktopHeader from "@/components/header/DesktopHeader";
import MobileHeader from "@/components/header/MobileDesktop";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Logs from "@/components/logs/Logs";
import VisitTracker from "@/components/visit-track/VisitTracker";
import TotalTime from "@/components/visit-track/TotalTime";

function Home() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <VisitTracker />
      <div
        className={`flex flex-col dark:bg-neutral-800 text-gray-600 dark:text-neutral-100`}
      >
        <Hero />
        <div className="flex flex-col px-6 md:px-12 lg:px-24 xl:px-36">
          <About />
          <Projects />
          <Logs />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
