import { Link, NavLink, useMatch } from "react-router-dom";

const Navbar = () => {
  const homeMatch = useMatch("/");
  const aboutMatch = useMatch("/about");
  const servicesMatch = useMatch("/services");
  const careersMatch = useMatch("/careers");

  const activeLink =
    "h-full w-full transform scale-x-100 rounded-lg bg-white transition-all duration-300 ease-in-out";
  const normalLink =
    "h-full w-full transform scale-x-0 rounded-lg bg-white transition-all duration-300 ease-in-out group-hover:scale-x-100";

  return (
    <nav className="bg-background fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            THREE M
          </span>
        </Link>
        <div className="flex md:order-2">
          <Link
            to="/contact"
            className="text-white bg-primary hover:bg-secondary font-medium rounded-lg px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 uppercase"
          >
            Contact Us
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="hidden items-center justify-center font-medium lg:flex gap-16 text-white uppercase">
            <li className="group relative py-2">
              <NavLink to="/">
                Home
                <div className="h-[2px] w-full overflow-hidden bg-transparent">
                  <div className={homeMatch ? activeLink : normalLink}></div>
                </div>
              </NavLink>
            </li>
            <li className="group relative py-2">
              <NavLink to="/about" className="">
                About
                <div className="h-[2px] w-full overflow-hidden bg-transparent">
                  <div className={aboutMatch ? activeLink : normalLink}></div>
                </div>
              </NavLink>
            </li>
            <li className="group relative py-2">
              <NavLink to="/services">
                Services
                <div className="h-[2px] w-full overflow-hidden bg-transparent">
                  <div
                    className={servicesMatch ? activeLink : normalLink}
                  ></div>
                </div>
              </NavLink>
            </li>
            <li className="group relative py-2">
              <NavLink to="/careers">
                Careers
                <div className="h-[2px] w-full overflow-hidden bg-transparent">
                  <div className={careersMatch ? activeLink : normalLink}></div>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
