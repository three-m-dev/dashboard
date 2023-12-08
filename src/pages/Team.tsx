import { useEffect, useState } from "react";
import {
  Layout,
  Loading,
  OrgChart,
  PageHeader,
  PageMenu,
  TeamTable,
} from "../components";
import { useGetTeamMembers } from "../hooks/useGetTeamMembers";
import { useGetDepartments } from "../hooks/useGetDepartments";

const Team = () => {
  const [viewMode, setViewMode] = useState("team-members");

  const tabs = [
    { value: "team-members", label: "Team Members" },
    { value: "organization", label: "Organization" },
    { value: "permissions", label: "Permissions" },
  ];

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

  const renderHeader = () => {
    switch (viewMode) {
      case "team-members":
        return (
          <PageHeader
            title="Team"
            onSearch={() => {
              console.log("Search button clicked");
            }}
            filterButton={{
              onClick: () => {
                console.log("Filter button clicked");
              },
            }}
            createButton={{
              onClick: () => {
                console.log("Create button clicked");
              },
            }}
          />
        );
      case "organization":
        return (
          <PageHeader
            title="Team"
            fullScreenButton={{
              onClick: () => {
                console.log("Full screen button clicked");
              },
            }}
          />
        );
      case "permissions":
        return (
          <PageHeader
            title="Team"
            filterButton={{
              onClick: () => {
                console.log("Filter button clicked");
              },
            }}
          />
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
      {renderHeader()}
      <PageMenu tabs={tabs} activeTab={viewMode} setActiveTab={setViewMode} />
      {renderView()}
    </Layout>
  );
};

export default Team;
