"use client";

export function Header() {
  const onClickLightDarkMode = () => {
    const html = document.querySelector("html");
    if (html) {
      html.classList.toggle("dark");
    }
  };

  return (
    <header className="sticky top-0 flex-none w-full mx-auto bg-white z-20 dark:bg-neutral-800">
      <nav className="flex flex-row items-center justify-center md:justify-between py-2 px-14 md:px-18 lg:px-24 xl:px-36">
        <div className="hidden md:flex flex-row items-center gap-4 ">
          <a
            href="/"
            className="text-xl font-semibold text-gray-600 dark:text-neutral-100"
          >
            HaRuki K.
          </a>
        </div>
        {/* light/dark mode */}
        <button
          aria-roledescription="this is dark or light mode switcher."
          onClick={onClickLightDarkMode}
          className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer hover:opacity-75 dark:opacity-75 dark:hover:opacity-100 dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            height={20}
            width={20}
          >
            <path
              d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
              fill="currentColor"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
