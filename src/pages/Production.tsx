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
import { Tab } from "../shared/types";
import PlusIcon from "../assets/icons/PlusIcon";

const Production = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const [downtimeModalOpen, setDowntimeModalOpen] = useState(false);
  const [downtimeModalMode, setDowntimeModalMode] = useState("");
  const [resourceModalOpen, setResourceModalOpen] = useState(false);
  const [operatorModalOpen, setOperatorModalOpen] = useState(false);

  const toggleDownTimeModal = (mode: string = "view") => {
    setDowntimeModalMode(mode);
    setDowntimeModalOpen(!downtimeModalOpen);
  };

  const downtimeRefresh = () => {};

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
        return <DowntimeTable toggleDowntimeModal={() => handleClick()} />;
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

  const tabs: Tab[] = [
    {
      value: "overview",
      buttons: [
        {
          text: "Date Range",
          type: "button",
          onClick: () => handleClick(),
          theme: "primary",
          destination: null,
          isLoading: false,
          isDisabled: false,
        },
      ],
    },
    {
      value: "downtime",
      buttons: [
        {
          text: "Add Downtime",
          type: "button",
          onClick: toggleDownTimeModal,
          theme: "primary",
          icon: <PlusIcon />,
          destination: null,
          isLoading: false,
          isDisabled: false,
        },
      ],
    },
    {
      value: "resources",
      buttons: [
        {
          text: "Add Resource",
          type: "button",
          onClick: handleClick,
          theme: "primary",
          icon: <PlusIcon />,
          destination: null,
          isLoading: false,
          isDisabled: false,
        },
      ],
    },
    {
      value: "operators",
      buttons: [
        {
          text: "Filter",
          type: "button",
          onClick: handleClick,
          theme: "primary",
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
        title="Production"
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {renderContent()}

      {downtimeModalOpen && (
        <DowntimeModal
          mode={downtimeModalMode}
          onClose={toggleDownTimeModal}
          triggerRefresh={downtimeRefresh}
        />
      )}
    </Layout>
  );
};

export default Production;
