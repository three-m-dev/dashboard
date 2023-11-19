import { useState } from "react";
import useLogout from "../../hooks/useLogout";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { logout } = useLogout();

  const user = {
    name: "Jacob Reppuhn",
    role: "Software Engineer",
    company: "Three M",
  };

  return (
    <div className="flex items-center">
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute -right-2 mt-2 w-64 rounded-b-md bg-white shadow">
            <div className="border-b border-gray-100 px-4 py-2">
              <strong className="text-gray-700">{user.name}</strong>
              <p className="mt-1 text-sm text-gray-500">{user.role}</p>
            </div>
            <ul className="list-none">
              <li className="flex hover:bg-blue-100">
                <Link
                  to={`/profile/123`}
                  className="h-full w-full px-4 py-2 text-left"
                >
                  Profile
                </Link>
              </li>
              <li className="flex hover:bg-blue-100">
                <Link
                  to={`/settings/123`}
                  className="h-full w-full px-4 py-2 text-left"
                >
                  Settings
                </Link>
              </li>
              <li className="flex border-t border-gray-100 hover:bg-blue-100">
                <button
                  onClick={logout}
                  className="h-full w-full px-4 py-2 text-left"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDropdown;
