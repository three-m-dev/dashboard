import { useState } from "react";
import {
  ApplicantsTable,
  ApplicationModal,
  CareersTable,
  JobModal,
  Layout,
  PageHeader,
} from "../components";
import { Tab } from "../shared/types";
import PlusIcon from "../assets/icons/PlusIcon";

const Careers = () => {
  const [activeTab, setActiveTab] = useState("openings");

  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [jobModalMode, setJobModalMode] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [applicationModalMode, setApplicationModalMode] = useState("");
  const [selectedApplication, setSelectedApplication] = useState(null);

  const [refreshJobs, setRefreshJobs] = useState(false);
  const [refreshApplications, setRefreshApplications] = useState(false);

  const triggerJobRefresh = () => {
    console.log("Refreshing");
    setRefreshJobs((prev) => !prev);
  };

  const triggerApplicationRefresh = () => {
    console.log("Refreshing");
    setRefreshApplications((prev) => !prev);
  };

  const toggleJobModal = (mode: string = "view", jobData = null) => {
    setJobModalMode(mode);
    setSelectedJob(jobData);
    setJobModalOpen(!jobModalOpen);
  };

  const toggleApplicationModal = (
    mode: string = "view",
    applicationData = null,
  ) => {
    setApplicationModalMode(mode);
    setSelectedApplication(applicationData);
    setApplicationModalOpen(!applicationModalOpen);
  };

  const tabs: Tab[] = [
    {
      value: "openings",
      buttons: [
        {
          text: "Add Opening",
          type: "button",
          onClick: () => toggleJobModal("create"),
          theme: "primary",
          icon: <PlusIcon />,
          destination: null,
          isLoading: false,
          isDisabled: false,
        },
      ],
    },
    {
      value: "applications",
      buttons: [
        {
          text: "Add Application",
          type: "button",
          onClick: () => toggleApplicationModal("create"),
          theme: "primary",
          icon: <PlusIcon />,
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
            refreshData={refreshJobs}
          />
        );
      case "applications":
        return (
          <ApplicantsTable toggleApplicantModal={toggleApplicationModal} />
        );
      default:
        return (
          <CareersTable
            toggleCareerModal={toggleJobModal}
            refreshData={refreshApplications}
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
      {jobModalOpen && !applicationModalOpen && (
        <JobModal
          mode={jobModalMode}
          onClose={toggleJobModal}
          selectedJob={selectedJob}
          triggerRefresh={triggerJobRefresh}
        />
      )}
      {applicationModalOpen && !jobModalOpen && (
        <ApplicationModal
          mode={applicationModalMode}
          onClose={toggleApplicationModal}
          selectedApplication={selectedApplication}
          triggerRefresh={triggerApplicationRefresh}
        />
      )}
    </Layout>
  );
};

export default Careers;
