import { useEffect, useState } from "react";
import { Layout, OrgChart, TeamTable } from "../components";
import { useGetEmployees } from "../hooks/useGetEmployees";

const Team = () => {
  const [viewMode, setViewMode] = useState<"team-members" | "org-chart">(
    "team-members",
  );

  const { getEmployees, employees, isLoading, isLoggedIn, error } =
    useGetEmployees();

  useEffect(() => {
    getEmployees();
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
        return <TeamTable employees={employees} />;
      case "org-chart":
        return <OrgChart employees={employees} />;

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
