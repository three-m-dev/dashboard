import { useEffect, useState } from "react";
import { Layout, Loading, OrgChart, TeamTable } from "../components";
import { useGetTeamMembers } from "../hooks/useGetTeamMembers";
import { useGetDepartments } from "../hooks/useGetDepartments";

const Team = () => {
  const [viewMode, setViewMode] = useState("team-members");

  const {
    getTeamMembers,
    teamMembers,
    isLoading: isTeamLoading,
    error: teamError,
  } = useGetTeamMembers();
  const {
    getDepartments,
    departments,
    isLoading: isDepartmentLoading,
    error: departmentError,
  } = useGetDepartments();

  useEffect(() => {
    getTeamMembers();
    getDepartments();
  }, []);

  if (isTeamLoading || isDepartmentLoading) {
    return <Loading />;
  }

  const renderButtons = () => {
    switch (viewMode) {
      case "team-members":
        return (
          <div className="flex gap-2">
            <div className="mb-4 flex w-full rounded border bg-white px-4 py-2 md:mb-0 md:ml-auto md:w-1/2 lg:w-auto">
              <input
                className="text-sm placeholder-gray-500"
                type="text"
                placeholder="Type to search..."
              />
              <button className="ml-auto">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.0921 16.9083L15.0004 13.8417C16.2005 12.3453 16.7817 10.4461 16.6244 8.53441C16.4672 6.62274 15.5835 4.84398 14.155 3.56386C12.7265 2.28375 10.8619 1.59958 8.94451 1.65205C7.02711 1.70452 5.20268 2.48963 3.84636 3.84594C2.49004 5.20226 1.70493 7.02669 1.65247 8.94409C1.6 10.8615 2.28416 12.7261 3.56428 14.1546C4.84439 15.583 6.62316 16.4668 8.53482 16.624C10.4465 16.7812 12.3457 16.2001 13.8421 15L16.9087 18.0667C16.9862 18.1448 17.0784 18.2068 17.1799 18.2491C17.2815 18.2914 17.3904 18.3132 17.5004 18.3132C17.6104 18.3132 17.7193 18.2914 17.8209 18.2491C17.9224 18.2068 18.0146 18.1448 18.0921 18.0667C18.2423 17.9113 18.3262 17.7036 18.3262 17.4875C18.3262 17.2714 18.2423 17.0637 18.0921 16.9083ZM9.16708 15C8.01335 15 6.88554 14.6579 5.92625 14.0169C4.96696 13.3759 4.21929 12.4649 3.77778 11.399C3.33627 10.3331 3.22075 9.16019 3.44583 8.02863C3.67091 6.89708 4.22648 5.85767 5.04229 5.04187C5.85809 4.22606 6.89749 3.67049 8.02905 3.44541C9.1606 3.22033 10.3335 3.33585 11.3994 3.77736C12.4653 4.21887 13.3763 4.96654 14.0173 5.92583C14.6583 6.88512 15.0004 8.01293 15.0004 9.16666C15.0004 10.7138 14.3858 12.1975 13.2919 13.2914C12.1979 14.3854 10.7142 15 9.16708 15Z"
                    fill="#2563eb"
                  ></path>
                </svg>
              </button>
            </div>
            <button
              onClick={() => {}}
              className="flex w-auto items-center rounded border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              <span className="mr-1 inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-blue-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                  />
                </svg>
              </span>
              <span>Filter</span>
            </button>
            <button
              onClick={() => {}}
              className="flex w-auto items-center rounded border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              <span className="mr-1 inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-blue-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
              <span>Create New</span>
            </button>
          </div>
        );
      case "organization":
        return (
          <button
            onClick={() => {}}
            className="flex w-auto items-center rounded border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
          >
            <span className="mr-1 inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 text-blue-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </span>
            <span>Full Screen</span>
          </button>
        );
      case "permissions":
        return (
          <>
            <div className="mb-4 flex w-full rounded border bg-white px-4 py-2 md:mb-0 md:ml-auto md:mr-4 md:w-1/2 lg:w-auto">
              <input
                className="text-sm placeholder-gray-500"
                type="text"
                placeholder="Type to search..."
              />
              <button className="ml-auto">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.0921 16.9083L15.0004 13.8417C16.2005 12.3453 16.7817 10.4461 16.6244 8.53441C16.4672 6.62274 15.5835 4.84398 14.155 3.56386C12.7265 2.28375 10.8619 1.59958 8.94451 1.65205C7.02711 1.70452 5.20268 2.48963 3.84636 3.84594C2.49004 5.20226 1.70493 7.02669 1.65247 8.94409C1.6 10.8615 2.28416 12.7261 3.56428 14.1546C4.84439 15.583 6.62316 16.4668 8.53482 16.624C10.4465 16.7812 12.3457 16.2001 13.8421 15L16.9087 18.0667C16.9862 18.1448 17.0784 18.2068 17.1799 18.2491C17.2815 18.2914 17.3904 18.3132 17.5004 18.3132C17.6104 18.3132 17.7193 18.2914 17.8209 18.2491C17.9224 18.2068 18.0146 18.1448 18.0921 18.0667C18.2423 17.9113 18.3262 17.7036 18.3262 17.4875C18.3262 17.2714 18.2423 17.0637 18.0921 16.9083ZM9.16708 15C8.01335 15 6.88554 14.6579 5.92625 14.0169C4.96696 13.3759 4.21929 12.4649 3.77778 11.399C3.33627 10.3331 3.22075 9.16019 3.44583 8.02863C3.67091 6.89708 4.22648 5.85767 5.04229 5.04187C5.85809 4.22606 6.89749 3.67049 8.02905 3.44541C9.1606 3.22033 10.3335 3.33585 11.3994 3.77736C12.4653 4.21887 13.3763 4.96654 14.0173 5.92583C14.6583 6.88512 15.0004 8.01293 15.0004 9.16666C15.0004 10.7138 14.3858 12.1975 13.2919 13.2914C12.1979 14.3854 10.7142 15 9.16708 15Z"
                    fill="#382CDD"
                  ></path>
                </svg>
              </button>
            </div>
            <button
              onClick={() => {}}
              className="flex w-auto items-center rounded border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              <span className="mr-1 inline-block">
                <svg
                  className="h-4 w-4 text-blue-300"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6667 1.33334H3.33333C2.19999 1.33334 1.33333 2.20001 1.33333 3.33334V12.6667C1.33333 13.8 2.19999 14.6667 3.33333 14.6667H12.6667C13.8 14.6667 14.6667 13.8 14.6667 12.6667V3.33334C14.6667 2.20001 13.8 1.33334 12.6667 1.33334ZM10.6667 8.66668H8.66666V10.6667C8.66666 11.0667 8.4 11.3333 8 11.3333C7.6 11.3333 7.33333 11.0667 7.33333 10.6667V8.66668H5.33333C4.93333 8.66668 4.66666 8.40001 4.66666 8.00001C4.66666 7.60001 4.93333 7.33334 5.33333 7.33334H7.33333V5.33334C7.33333 4.93334 7.6 4.66668 8 4.66668C8.4 4.66668 8.66666 4.93334 8.66666 5.33334V7.33334H10.6667C11.0667 7.33334 11.3333 7.60001 11.3333 8.00001C11.3333 8.40001 11.0667 8.66668 10.6667 8.66668Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span>Full Screen</span>
            </button>
          </>
        );
      default:
        return <p>No view selected</p>;
    }
  };

  const renderView = () => {
    switch (viewMode) {
      case "team-members":
        return (
          <div className="grid h-full w-full grid-cols-6 gap-4">
            <div className="col-span-6 flex flex-col">
              <TeamTable teamMembers={teamMembers} departments={departments} />
            </div>
          </div>
        );
      case "organization":
        return <OrgChart teamMembers={teamMembers} />;
      case "permissions":
        return <div className="px-6">Permissions</div>;
      default:
        return <p>No view selected</p>;
    }
  };

  return (
    <Layout>
      <section className="px-4 pt-2">
        <div className="mb-4 flex w-full flex-col items-center justify-between md:mb-0 md:flex-row">
          <h2 className="text-2xl font-bold">Team</h2>
          {renderButtons()}
        </div>
        <div className="flex flex-wrap py-6 text-center text-sm">
          <button
            onClick={() => setViewMode("team-members")}
            className={
              `mb-4 inline-block w-full border-b-2 px-4 pb-2 selection:md:w-1/2 lg:mb-0 lg:w-auto ` +
              (viewMode === "team-members"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-300 hover:border-gray-300")
            }
          >
            Team Members
          </button>
          <button
            onClick={() => setViewMode("organization")}
            className={
              `mb-4 inline-block w-full border-b-2 px-4 pb-2 selection:md:w-1/2 lg:mb-0 lg:w-auto ` +
              (viewMode === "organization"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-300 hover:border-gray-300")
            }
          >
            Organization
          </button>
          <button
            onClick={() => setViewMode("permissions")}
            className={
              `mb-4 inline-block w-full border-b-2 px-4 pb-2 selection:md:w-1/2 lg:mb-0 lg:w-auto ` +
              (viewMode === "permissions"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-300 hover:border-gray-300")
            }
          >
            Permissions
          </button>
        </div>
      </section>

      {renderView()}
    </Layout>
  );
};

export default Team;
