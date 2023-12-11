import { useState } from "react";
import { Layout } from "../components";
import PageHeader from "../components/reusable/PageHeader";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <div>Overview</div>;
      case "calendar":
        return <div>Contacts</div>;
      case "improvements":
        return <div>Improvements</div>;
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
      buttons: [{ label: "fullscreen", onClick: handleClick }],
    },
    {
      value: "calendar",
      buttons: [{ label: "fullscreen", onClick: handleClick }],
    },
    {
      value: "improvements",
      buttons: [{ label: "fullscreen", onClick: handleClick }],
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Dashboard"
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {renderContent()}
    </Layout>
  );
};

export default Dashboard;
