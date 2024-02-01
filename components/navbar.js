import { Disclosure } from "@headlessui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";

const Navbar = () => {
  const navigation = [];
  const { theme } = useTheme();
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <Disclosure>
          <>
            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
              <Link href="/">
                <>
                  {theme === "dark" && (
                    <img
                      src="/assets/PNG/With Wordmark - Dark - Default@10x.png"
                      alt="logo"
                      className="w-full h-12"
                    />
                  )}
                  {theme === "light" && (
                    <img
                      src="/assets/PNG/With Wordmark - Light - Default@10x.png"
                      alt="logo"
                      className="w-full h-12"
                    />
                  )}
                </>
              </Link>
              <div className="mr-3 space-x-4 lg:hidden nav__item">
                <ThemeChanger />
              </div>
            </div>
          </>
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href="/"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
