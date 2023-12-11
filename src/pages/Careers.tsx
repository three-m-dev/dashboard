import { useState } from "react";
import { Layout, PageHeader } from "../components";

const Careers = () => {
  const [activeTab, setActiveTab] = useState("openings");

  const renderContent = () => {
    switch (activeTab) {
      case "openings":
        return <div>Openings</div>;
      case "applicants":
        return <div>Applicants</div>;
      default:
        return <div>Openings</div>;
    }
  };

  const handleClick = () => {
    console.log("Button Clicked");
  };

  const tabs = [
    {
      value: "openings",
      buttons: [
        { label: "filter", onClick: handleClick },
        { label: "create new", onClick: handleClick },
      ],
    },
    {
      value: "applicants",
      buttons: [
        { label: "filter", onClick: handleClick },
        { label: "create new", onClick: handleClick },
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
    </Layout>
  );
};

export default Careers;
