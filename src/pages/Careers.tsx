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
  const [applicantModalMode, setApplicantModelMode] = useState("");

  const [selectedCareer, setSelectedCareer] = useState(null);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const [refreshData, setRefreshData] = useState(false);

  const triggerDataRefresh = () => {
    console.log("Refreshing");
    setRefreshData((prev) => !prev);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "openings":
        return (
          <CareersTable
            toggleCareerModal={toggleCareerModal}
            refreshData={refreshData} // Pass the refreshData state
          />
        );
      case "applicants":
        return <ApplicantsTable toggleApplicantModal={toggleApplicantModal} />;
      default:
        return (
          <CareersTable
            toggleCareerModal={toggleCareerModal}
            refreshData={refreshData} // Pass the refreshData state
          />
        );
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

  const toggleApplicantModal = (
    mode: string = "view",
    applicantData = null,
  ) => {
    setApplicantModelMode(mode);
    setSelectedApplicant(applicantData);
    setApplicantModalOpen(!applicantModalOpen);
  };

  const tabs = [
    {
      value: "openings",
      buttons: [
        { label: "create new", onClick: () => toggleCareerModal("create") },
      ],
    },
    {
      value: "applicants",
      buttons: [
        { label: "create new", onClick: () => toggleApplicantModal("create") },
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
          triggerDataRefresh={triggerDataRefresh}
        />
      )}
      {applicantModalOpen && !careerModalOpen && (
        <ApplicantModal
          toggleApplicantModal={toggleApplicantModal}
          applicantModalMode={applicantModalMode}
          selectedApplicant={selectedApplicant}
        />
      )}
    </Layout>
  );
};

export default Careers;
