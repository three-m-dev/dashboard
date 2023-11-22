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
      <section>
        <div className="toggle-buttons flex justify-center gap-2 pb-4">
          <button
            className={`rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
              viewMode === "team-members"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setViewMode("team-members")}
          >
            Team Members
          </button>
          <button
            className={`rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
              viewMode === "org-chart"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setViewMode("org-chart")}
          >
            Organization
          </button>
        </div>
        {renderRoutes()}
      </section>
    </Layout>
  );
};

export default Team;
