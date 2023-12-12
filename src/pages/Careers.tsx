import { useState } from "react";
import {
  ApplicantsTable,
  CareersTable,
  Layout,
  PageHeader,
} from "../components";
import CareerModal from "../components/modals/CareerModal";
import ApplicantModal from "../components/modals/ApplicantModal";

const Careers = () => {
  const [activeTab, setActiveTab] = useState("openings");

  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [careerModalMode, setCareerModalMode] = useState("");
  const [applicantModalOpen, setApplicantModalOpen] = useState(false);

  const [selectedCareer, setSelectedCareer] = useState(null);

  const mode = "create";

  const renderContent = () => {
    switch (activeTab) {
      case "openings":
        return <CareersTable toggleCareerModal={toggleCareerModal} />;
      case "applicants":
        return <ApplicantsTable />;
      default:
        return <CareersTable toggleCareerModal={toggleCareerModal} />;
    }
  };

  const handleClick = () => {
    console.log("Button Clicked");
  };

  const toggleCareerModal = (mode: string = "view", careerData = null) => {
    setCareerModalMode(mode);
    setSelectedCareer(careerData);
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
        { label: "create new", onClick: () => toggleCareerModal("create") },
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
        <CareerModal
          toggleCareerModal={toggleCareerModal}
          careerModalMode={careerModalMode}
          selectedCareer={selectedCareer}
        />
      )}
      {applicantModalOpen && !careerModalOpen && (
        <ApplicantModal
          mode={mode}
          toggleApplicationModal={toggleApplicantModal}
        />
      )}
    </Layout>
  );
};

export default Careers;
