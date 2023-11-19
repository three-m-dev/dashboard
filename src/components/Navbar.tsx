import NotificationsDropdown from "./dropdowns/NotificationsDropdown";
import UserDropdown from "./dropdowns/UserDropdown";

type NavbarProps = {
  onToggleSidebar: () => void;
};

const Navbar = (props: NavbarProps) => {
  return (
    <header className="z-20 flex items-center justify-between bg-white p-2 shadow">
      <button
        onClick={props.onToggleSidebar}
        className="rounded-md p-2.5 text-gray-600 hover:bg-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="flex gap-2">
        <button className="rounded-md p-2.5 text-gray-600 hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
        </button>
        <NotificationsDropdown />
        <UserDropdown />
      </div>
    </header>
  );
};

export default Navbar;
