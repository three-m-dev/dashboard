import { useState } from "react";
import {
  EmployeeModal,
  EmployeesTable,
  Layout,
  PageHeader,
} from "../components";
import { Tab } from "../shared/types";
import PlusIcon from "../assets/icons/PlusIcon";

const Team = () => {
  const [activeTab, setActiveTab] = useState("team-members");

  const [employeeModalOpen, setEmployeeModalOpen] = useState(false);
  const [employeeModalMode, setEmployeeModalMode] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const toggleEmployeeModal = (mode: string = "view", employeeData = null) => {
    setEmployeeModalMode(mode);
    setSelectedEmployee(employeeData);
    setEmployeeModalOpen(!employeeModalOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "team-members":
        return <EmployeesTable toggleEmployeeModal={toggleEmployeeModal} />;
      default:
        return <div>Team Members</div>;
    }
  };

  const tabs: Tab[] = [
    {
      value: "team-members",
      buttons: [
        {
          text: "Add Team Member",
          type: "button",
          onClick: () => toggleEmployeeModal("create"),
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

      {employeeModalOpen && (
        <EmployeeModal
          mode={employeeModalMode}
          onClose={toggleEmployeeModal}
          selectedEmployee={selectedEmployee}
        />
      )}
    </Layout>
  );
};

export default Team;
