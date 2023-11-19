import { useEffect, useState } from "react";
import { Layout, OrgChart, TeamTable } from "../components";
import { useGetTeamMembers } from "../hooks/useGetTeamMembers";

const Team = () => {
  const [viewMode, setViewMode] = useState<"team-members" | "org-chart">(
    "team-members",
  );

  const { getTeamMembers, teamMembers, isLoading, isLoggedIn, error } =
    useGetTeamMembers();

  useEffect(() => {
    getTeamMembers();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!isLoggedIn) {
    return <p>User not logged in</p>;
  }

  const renderRoutes = () => {
    switch (viewMode) {
      case "team-members":
        return <TeamTable teamMembers={teamMembers} />;
      case "org-chart":
        return <OrgChart teamMembers={teamMembers} />;

      default:
        return;
    }
  };

  return (
    <Layout>
      <section>
        <div className="toggle-buttons flex justify-center gap-2 py-4">
          <button
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              viewMode === "team-members"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setViewMode("team-members")}
          >
            Team Members
          </button>
          <button
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              viewMode === "org-chart"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setViewMode("org-chart")}
          >
            Organization Chart
          </button>
        </div>
        {renderRoutes()}
      </section>
    </Layout>
  );
};

export default Team;
