import { Link, useNavigate } from "react-router-dom";
import { ITeamMember } from "../../interfaces/ICommon";
import { useState } from "react";
import TeamMemberModal from "../modals/TeamMemberModal";

type Props = {
  teamMembers: ITeamMember[];
};

const TeamTable = (props: Props) => {
  const [teamMemberModalOpen, setTeamMemberModalOpen] = useState(false);

  const canViewTeamMembers = true;
  const canAddTeamMember = true;

  const navigate = useNavigate();

  if (!canViewTeamMembers) {
    navigate("/");
  }

  const toggleTeamMemberModal = () => {
    setTeamMemberModalOpen(!teamMemberModalOpen);
  };

  return (
    <>
      <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
        <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="w-full md:w-1/2">
            <form className="flex items-center">
              <label className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
          {canAddTeamMember && (
            <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <button
                onClick={() => toggleTeamMemberModal()}
                className="flex items-center gap-1 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-500 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                New Team Member
              </button>
            </div>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Name
                </th>
                <th scope="col" className="px-4 py-3">
                  Role
                </th>
                <th scope="col" className="px-4 py-3">
                  Department
                </th>
                <th scope="col" className="px-4 py-3">
                  Company
                </th>
                <th scope="col" className="px-4 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {props.teamMembers.map((teamMember) => (
                <tr key={teamMember.id} className="border-b">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900"
                  >
                    <Link
                      to={`/team-members/${teamMember.id}`}
                      className="hover:underline"
                    >
                      {teamMember.firstName + " " + teamMember.lastName}
                    </Link>
                  </th>
                  <td className="px-4 py-3">{teamMember.role}</td>
                  <td className="px-4 py-3">{teamMember.department}</td>
                  <td className="px-4 py-3">{teamMember.company}</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      className="inline-flex items-center rounded-lg text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none"
                      type="button"
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
                          d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </button>
                    <div className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600">
                      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {teamMemberModalOpen && (
        <TeamMemberModal toggleModal={toggleTeamMemberModal} />
      )}
    </>
  );
};

export default TeamTable;
