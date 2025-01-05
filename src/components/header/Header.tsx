"use client";

export function Header() {
  const onClickLightDarkMode = () => {
    const html = document.querySelector("html");
    if (html) {
      html.classList.toggle("dark");
    }
  };

  return (
    <div
      className={
        "sticky z-20 top-[8px] w-full max-w-[1337px] transition-all duration-300 ease-in-out px-6 lg:px-16 xl:px-28"
      }
    >
      <div className="relative text-lg flex items-center justify-center sm:justify-between w-full rounded-lg bg-neutral-100 text-black dark:text-white dark:bg-gray-800 shadow-xl py-2 px-8">
        <div className="hidden sm:flex flex-row items-center gap-4 ">
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
      </div>
    </div>
  );
}
