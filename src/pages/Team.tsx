import { useState } from "react";
import { EmployeesTable, Layout, PageHeader } from "../components";

const Team = () => {
  const [activeTab, setActiveTab] = useState("team-members");
  const [teamMemberModalOpen, setTeamMemberModalOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "team-members":
        return <EmployeesTable toggleEmployeeModal={toggleTeamMemberModal} />;
      default:
        return <div>Team Members</div>;
    }
  };

  const handleClick = () => {
    console.log("Button Clicked");
  };

  const toggleTeamMemberModal = () => {
    setTeamMemberModalOpen(!teamMemberModalOpen);
  };

  const tabs = [
    {
      value: "team-members",
      buttons: [
        { label: "filter", onClick: handleClick },
        { label: "create new", onClick: toggleTeamMemberModal },
      ],
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Team"
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {renderContent()}
    </Layout>
  );
};

export default Team;
