import { Hero } from "@/components/hero/Hero";
export default function Home() {
  return (
    <div className={`flex flex-col`}>
      {/* <Navbar theme={theme} toggleTheme={toggleTheme} /> */}
      <div
        className={`flex flex-col gap-24 px-14 md:px-18 lg:px-24 xl:px-36 overflow-y-scroll`}
      >
        <Hero />
        {/* <Projects />
          <Certs /> */}
      </div>
    </div>
  );
}
