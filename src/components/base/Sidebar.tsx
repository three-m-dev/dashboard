import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import LogoutModal from "../modals/LogoutModal";
import GaugeIcon from "../../assets/icons/GaugeIcon";
import FactoryIcon from "../../assets/icons/FactoryIcon";
import TeamIcon from "../../assets/icons/TeamIcon";
import BriefcaseIcon from "../../assets/icons/BriefcaseIcon";
import NewspaperIcon from "../../assets/icons/NewspaperIcon";

type Props = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar = (props: Props) => {
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const toggleLogoutModal = () => {
    console.log("wtf");
    setLogoutModalOpen(!logoutModalOpen);
  };

  const links = [
    {
      name: "Dashboard",
      to: "/",
      match: useMatch("/"),
      icon: <GaugeIcon />,
    },
    {
      name: "Team",
      to: "/team",
      match: useMatch("/team/*"),
      icon: <TeamIcon />,
    },
    {
      name: "Production",
      to: "/production",
      match: useMatch("/production/*"),
      icon: <FactoryIcon />,
    },
    {
      name: "Content",
      to: "/content",
      match: useMatch("/content/*"),
      icon: <NewspaperIcon />,
    },
    {
      name: "Careers",
      to: "/careers",
      match: useMatch("/careers/*"),
      icon: <BriefcaseIcon />,
    },
  ];

  return (
    <>
      {props.isOpen && (
        <div>
          <div className="navbar-menu relative z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-10 lg:hidden"></div>
            <nav className="fixed bottom-0 left-0 top-0 flex w-3/4 flex-col overflow-y-auto bg-gray-800 py-4 sm:max-w-xs lg:w-64">
              <div className="mb-4 flex w-full items-center justify-center border-gray-700 pb-4 lg:border-b">
                <a className="text-xl font-semibold text-white" href="#">
                  M Portal
                </a>
              </div>
              <div className="flex h-full flex-col justify-between px-4">
                <div>
                  <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                    Main
                  </h3>
                  <ul className="text-sm font-medium">
                    {links.map((link, index) => (
                      <li key={index}>
                        <Link
                          className={
                            `flex items-center rounded py-3 pl-3 pr-2 text-gray-50 hover:bg-gray-900 ` +
                            (link.match ? "bg-blue-500" : "")
                          }
                          to={link.to}
                        >
                          <span
                            className={
                              `mr-3 inline-block ` +
                              (link.match ? "text-blue-100" : "text-gray-600")
                            }
                          >
                            {link.icon}
                          </span>
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    onClick={toggleLogoutModal}
                    className="flex w-full items-center rounded py-3 pl-3 pr-2 text-gray-50 hover:bg-gray-900"
                  >
                    <span className="mr-4 inline-block">
                      <svg
                        className="h-5 w-5 text-gray-600"
                        viewBox="0 0 14 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.333618 8.99996C0.333618 9.22097 0.421416 9.43293 0.577696 9.58922C0.733976 9.7455 0.945938 9.83329 1.16695 9.83329H7.49195L5.57528 11.7416C5.49718 11.8191 5.43518 11.9113 5.39287 12.0128C5.35057 12.1144 5.32879 12.2233 5.32879 12.3333C5.32879 12.4433 5.35057 12.5522 5.39287 12.6538C5.43518 12.7553 5.49718 12.8475 5.57528 12.925C5.65275 13.0031 5.74492 13.0651 5.84647 13.1074C5.94802 13.1497 6.05694 13.1715 6.16695 13.1715C6.27696 13.1715 6.38588 13.1497 6.48743 13.1074C6.58898 13.0651 6.68115 13.0031 6.75862 12.925L10.0919 9.59163C10.1678 9.51237 10.2273 9.41892 10.2669 9.31663C10.3503 9.11374 10.3503 8.88618 10.2669 8.68329C10.2273 8.581 10.1678 8.48755 10.0919 8.40829L6.75862 5.07496C6.68092 4.99726 6.58868 4.93563 6.48716 4.89358C6.38564 4.85153 6.27683 4.82988 6.16695 4.82988C6.05707 4.82988 5.94826 4.85153 5.84674 4.89358C5.74522 4.93563 5.65298 4.99726 5.57528 5.07496C5.49759 5.15266 5.43595 5.2449 5.3939 5.34642C5.35185 5.44794 5.33021 5.55674 5.33021 5.66663C5.33021 5.77651 5.35185 5.88532 5.3939 5.98683C5.43595 6.08835 5.49759 6.18059 5.57528 6.25829L7.49195 8.16663H1.16695C0.945938 8.16663 0.733976 8.25442 0.577696 8.4107C0.421416 8.56698 0.333618 8.77895 0.333618 8.99996ZM11.1669 0.666626H2.83362C2.17058 0.666626 1.53469 0.930018 1.06585 1.39886C0.59701 1.8677 0.333618 2.50358 0.333618 3.16663V5.66663C0.333618 5.88764 0.421416 6.0996 0.577696 6.25588C0.733976 6.41216 0.945938 6.49996 1.16695 6.49996C1.38797 6.49996 1.59993 6.41216 1.75621 6.25588C1.91249 6.0996 2.00028 5.88764 2.00028 5.66663V3.16663C2.00028 2.94561 2.08808 2.73365 2.24436 2.57737C2.40064 2.42109 2.6126 2.33329 2.83362 2.33329H11.1669C11.388 2.33329 11.5999 2.42109 11.7562 2.57737C11.9125 2.73365 12.0003 2.94561 12.0003 3.16663V14.8333C12.0003 15.0543 11.9125 15.2663 11.7562 15.4225C11.5999 15.5788 11.388 15.6666 11.1669 15.6666H2.83362C2.6126 15.6666 2.40064 15.5788 2.24436 15.4225C2.08808 15.2663 2.00028 15.0543 2.00028 14.8333V12.3333C2.00028 12.1123 1.91249 11.9003 1.75621 11.744C1.59993 11.5878 1.38797 11.5 1.16695 11.5C0.945938 11.5 0.733976 11.5878 0.577696 11.744C0.421416 11.9003 0.333618 12.1123 0.333618 12.3333V14.8333C0.333618 15.4963 0.59701 16.1322 1.06585 16.6011C1.53469 17.0699 2.17058 17.3333 2.83362 17.3333H11.1669C11.83 17.3333 12.4659 17.0699 12.9347 16.6011C13.4036 16.1322 13.6669 15.4963 13.6669 14.8333V3.16663C13.6669 2.50358 13.4036 1.8677 12.9347 1.39886C12.4659 0.930018 11.83 0.666626 11.1669 0.666626Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-sm">Log Out</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div className="ml-64"></div>
        </div>
      )}
      {logoutModalOpen && <LogoutModal onClose={() => toggleLogoutModal} />}
    </>
  );
};

export default Sidebar;
