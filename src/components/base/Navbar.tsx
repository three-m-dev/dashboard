import ListIcon from "../../assets/icons/ListIcon";
// import SearchIcon from "../../assets/icons/SearchIcon";

type NavbarProps = {
  onToggleSidebar: () => void;
};

const Navbar = (props: NavbarProps) => {
  return (
    <section className="bg-white p-4">
      <nav className="relative">
        <div className="flex items-center">
          <div className="mr-auto items-center">
            <button
              onClick={props.onToggleSidebar}
              className="rounded-md bg-blue-50 px-2.5 py-2.5 text-primary hover:bg-blue-100"
            >
              <ListIcon />
            </button>
          </div>

          {/* <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform lg:flex lg:w-auto lg:space-x-10">
            <div className="mr-auto hidden items-center rounded border pl-4 lg:flex">
              <button className="mr-2 text-gray-200 hover:text-gray-300">
                <SearchIcon />
              </button>
              <input
                className="py-3 pl-2 text-sm text-gray-200"
                type="text"
                placeholder="Type to search..."
              />
            </div>
          </div> */}
          <ul className="mr-6 hidden lg:flex lg:justify-end">
            <li>
              <a className="text-gray-200 hover:text-gray-300" href="#">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
          <div className="hidden lg:block">
            <button className="flex items-center">
              <div className="mr-3">
                <p className="text-sm">Jacob Reppuhn</p>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-100 text-lg text-gray-400">
                JR
              </div>
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
