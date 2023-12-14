import { useState } from "react";
import {
  Downtime,
  DowntimeModal,
  DowntimeTable,
  Layout,
  Output,
  PageHeader,
  Resources,
} from "../components";

const Production = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const [downtimeModalOpen, setDowntimeModalOpen] = useState(false);
  const [resourceModalOpen, setResourceModalOpen] = useState(false);
  const [operatorModalOpen, setOperatorModalOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <Output />
            <Downtime />
          </>
        );
      case "downtime":
        return <DowntimeTable />;
      case "resources":
        return <Resources />;
      case "operators":
        return <div>Operators</div>;
      default:
        return <div>Overview</div>;
    }
  };

  const handleClick = () => {
    console.log("Button Clicked");
  };

  const toggleDownTimeModal = () => {
    setDowntimeModalOpen(!downtimeModalOpen);
  };

  const tabs = [
    {
      value: "overview",
      buttons: [{ label: "date range", onClick: handleClick }],
    },
    {
      value: "downtime",
      buttons: [{ label: "create new", onClick: toggleDownTimeModal }],
    },
    {
      value: "resources",
      buttons: [{ label: "create new", onClick: handleClick }],
    },
    {
      value: "operators",
      buttons: [{ label: "create new", onClick: handleClick }],
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Production"
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {renderContent()}

      {downtimeModalOpen && (
        <DowntimeModal toggleDowntimeModal={toggleDownTimeModal} />
      )}
    </Layout>
  );
};

export default Production;
