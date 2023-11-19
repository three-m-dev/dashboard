import { useState } from "react";
import useLogout from "../../hooks/useLogout";

const UserDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { logout } = useLogout();

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
              <strong className="text-gray-700">User's Full Name</strong>
              <p className="mt-1 text-sm text-gray-500">
                Software Engineer at OpenAI
              </p>
            </div>
            <ul className="list-none">
              <li className="px-4 py-2 hover:bg-blue-100">
                <strong>Company:</strong> OpenAI
              </li>
              <li className="px-4 py-2 hover:bg-blue-100">
                <strong>Site:</strong> San Francisco, CA
              </li>
              <li className="px-4 py-2 hover:bg-blue-100">
                <strong>Timezone:</strong> PST (UTC-8)
              </li>
              <li className="border-t border-gray-100 px-4 py-2 hover:bg-blue-100">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-blue-100">Settings</li>
              <li className="px-4 py-2 hover:bg-blue-100">Change Password</li>
              <li className="border-t border-gray-100 px-4 py-2 hover:bg-blue-100">
                <button onClick={logout} className="h-full w-full text-left">
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
