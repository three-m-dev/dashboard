import { useState } from "react";
import { Downtime, Layout, Output, PageHeader, Resources } from "../components";

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
        return <div>Downtime</div>;
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

  const tabs = [
    {
      value: "overview",
      buttons: [{ label: "date range", onClick: handleClick }],
    },
    {
      value: "downtime",
      buttons: [
        { label: "filter", onClick: handleClick },
        { label: "report", onClick: handleClick },
        { label: "export", onClick: handleClick },
      ],
    },
    {
      value: "resources",
      buttons: [
        { label: "filter", onClick: handleClick },
        { label: "create new", onClick: handleClick },
        { label: "export", onClick: handleClick },
      ],
    },
    {
      value: "operators",
      buttons: [
        { label: "filter", onClick: handleClick },
        { label: "create new", onClick: handleClick },
        { label: "export", onClick: handleClick },
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
    </Layout>
  );
};

export default Production;
