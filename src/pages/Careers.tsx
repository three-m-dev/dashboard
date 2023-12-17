import { useState } from "react";
import {
  ApplicantsTable,
  CareersTable,
  JobModal,
  Layout,
  PageHeader,
} from "../components";
import { Tab } from "../shared/types";

const Careers = () => {
  const [activeTab, setActiveTab] = useState("openings");
  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [jobModalMode, setJobModalMode] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicantModalOpen, setApplicantModalOpen] = useState(false);
  const [applicantModalMode, setApplicantModelMode] = useState("");
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [refreshJobData, setRefreshJobData] = useState(false);

  const triggerJobDataRefresh = () => {
    console.log("Refreshing");
    setRefreshJobData((prev) => !prev);
  };

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

  const tabs: Tab[] = [
    {
      value: "openings",
      buttons: [
        {
          text: "New Opening",
          type: "button",
          onClick: () => toggleJobModal("create"),
          theme: "primary",
          icon: null,
          destination: null,
          isLoading: false,
          isDisabled: false,
        },
      ],
    },
    {
      value: "applicants",
      buttons: [
        {
          text: "New Applicant",
          type: "button",
          onClick: () => toggleApplicantModal("create"),
          theme: "primary",
          icon: null,
          destination: null,
          isLoading: false,
          isDisabled: false,
        },
      ],
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "openings":
        return (
          <CareersTable
            toggleCareerModal={toggleJobModal}
            refreshData={refreshJobData}
          />
        );
      case "applicants":
        return <ApplicantsTable toggleApplicantModal={toggleApplicantModal} />;
      default:
        return (
          <CareersTable
            toggleCareerModal={toggleJobModal}
            refreshData={refreshJobData}
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
      {jobModalOpen && !applicantModalOpen && (
        <JobModal
          mode={jobModalMode}
          onClose={toggleJobModal}
          selectedJob={selectedJob}
          triggerDataRefresh={triggerJobDataRefresh}
        />
      )}
      {applicantModalOpen && !jobModalOpen && (
        <>{applicantModalMode} applicant</>
      )}
    </Layout>
  );
};

export default Careers;
