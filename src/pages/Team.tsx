import { useEffect, useState } from "react";
import { Layout, Loading, OrgChart, TeamTable } from "../components";
import { useGetTeamMembers } from "../hooks/useGetTeamMembers";
import { useGetDepartments } from "../hooks/useGetDepartments";

const Team = () => {
  const [viewMode, setViewMode] = useState<"team-members" | "org-chart">(
    "team-members",
  );

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

  const renderRoutes = () => {
    switch (viewMode) {
      case "team-members":
        return (
          <div className="grid h-full w-full grid-cols-6 gap-4">
            <div className="col-span-6 flex flex-col">
              <TeamTable teamMembers={teamMembers} departments={departments} />
            </div>
          </div>
        );
      case "org-chart":
        return <OrgChart teamMembers={teamMembers} />;
      default:
        return <p>No view selected</p>;
    }
  };

  return (
    <Layout>
      <section className="px-6 pt-2">
        <h2 className="mb-4 text-2xl font-bold">Team Center</h2>
        <div className="flex flex-wrap text-center text-sm">
          <a
            className="mb-4 inline-block w-full border-b-2 border-indigo-500 px-4 pb-2 text-indigo-500 md:w-1/2 lg:mb-0 lg:w-auto"
            href="#"
          >
            Team Members
          </a>
          <a
            className="mb-4 inline-block w-full border-b-2 border-transparent px-4 pb-2 text-gray-300 hover:border-gray-300 md:w-1/2 lg:mb-0 lg:w-auto"
            href="#"
          >
            Org Chart
          </a>
        </div>
      </section>

      {renderRoutes()}
    </Layout>
  );
};

export default Team;
