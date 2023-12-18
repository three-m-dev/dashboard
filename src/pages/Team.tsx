import { useState } from "react";
import { EmployeesTable, Layout, PageHeader } from "../components";
import { Tab } from "../shared/types";
import PlusIcon from "../assets/icons/PlusIcon";

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

  const toggleTeamMemberModal = () => {
    setTeamMemberModalOpen(!teamMemberModalOpen);
  };

  const tabs: Tab[] = [
    {
      value: "team-members",
      buttons: [
        {
          text: "Add Team Member",
          type: "button",
          onClick: toggleTeamMemberModal,
          theme: "primary",
          icon: <PlusIcon />,
          destination: null,
          isLoading: false,
          isDisabled: false,
        },
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

      {/* <TeamMemberModal
        isOpen={teamMemberModalOpen}
        toggle={toggleTeamMemberModal}
      /> */}
    </Layout>
  );
};

export default Team;
