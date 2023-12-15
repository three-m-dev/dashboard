import { useState } from "react";
import {
  ApplicantsTable,
  CareersTable,
  Layout,
  PageHeader,
} from "../components";

const Careers = () => {
  const [activeTab, setActiveTab] = useState("openings");
  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [jobModalMode, setJobModalMode] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicantModalOpen, setApplicantModalOpen] = useState(false);
  const [applicantModalMode, setApplicantModelMode] = useState("");
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [refreshData, setRefreshData] = useState(false);

  const tabs = [
    {
      value: "openings",
      buttons: [
        { label: "create new", onClick: () => toggleJobModal("create") },
      ],
    },
    {
      value: "applicants",
      buttons: [
        { label: "create new", onClick: () => toggleApplicantModal("create") },
      ],
    },
  ];

  const toggleJobModal = (mode: string = "view", jobData = null) => {
    setJobModalMode(mode);
    setSelectedJob(jobData);
    setJobModalOpen(!jobModalOpen);
  };

  const toggleApplicantModal = (
    mode: string = "view",
    applicantData = null,
  ) => {
    setApplicantModelMode(mode);
    setSelectedApplicant(applicantData);
    setApplicantModalOpen(!applicantModalOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "openings":
        return (
          <CareersTable
            toggleCareerModal={toggleJobModal}
            refreshData={refreshData}
          />
        );
      case "applicants":
        return <ApplicantsTable toggleApplicantModal={toggleApplicantModal} />;
      default:
        return (
          <CareersTable
            toggleCareerModal={toggleJobModal}
            refreshData={refreshData}
          />
        );
    }
  };

  return (
    <Layout>
      <PageHeader
        title="Careers"
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {renderContent()}
      {jobModalOpen && !applicantModalOpen && <></>}
      {applicantModalOpen && !jobModalOpen && <></>}
    </Layout>
  );
};

export default Careers;
