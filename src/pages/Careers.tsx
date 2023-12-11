import { useState } from "react";
import {
  ApplicantsTable,
  CareersTable,
  Layout,
  PageHeader,
} from "../components";
import CareerModal from "../components/modals/CareerModal";

const Careers = () => {
  const [activeTab, setActiveTab] = useState("openings");

  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [applicantModalOpen, setApplicantModalOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "openings":
        return <CareersTable />;
      case "applicants":
        return <ApplicantsTable />;
      default:
        return <CareersTable />;
    }
  };

  const handleClick = () => {
    console.log("Button Clicked");
  };

  const toggleCareerModal = () => {
    setCareerModalOpen(!careerModalOpen);
  };

  const toggleApplicantModal = () => {
    setApplicantModalOpen(!applicantModalOpen);
  };

  const tabs = [
    {
      value: "openings",
      buttons: [
        { label: "filter", onClick: handleClick },
        { label: "create new", onClick: toggleCareerModal },
      ],
    },
    {
      value: "applicants",
      buttons: [
        { label: "filter", onClick: handleClick },
        { label: "create new", onClick: toggleApplicantModal },
      ],
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Careers"
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {renderContent()}
      {careerModalOpen && !applicantModalOpen && (
        <CareerModal toggleCareerModal={toggleCareerModal} />
      )}
    </Layout>
  );
};

export default Careers;
