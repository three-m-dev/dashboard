import { useState } from "react";
import { Layout, PageHeader, PageMenu } from "../components";

const Home = () => {
  const [viewMode, setViewMode] = useState("overview");

  const tabs = [
    { value: "overview", label: "Overview" },
    { value: "calendar", label: "Calendar" },
    { value: "improvements", label: "Improvements" },
  ];

  const handleFullScreenClick = () => {
    console.log("Full screen button clicked");
  };

  const renderHeader = () => {};

  const renderView = () => {};

  return (
    <Layout>
      <PageHeader
        title="Dashboard"
        fullScreenButton={{ onClick: handleFullScreenClick }}
      />
      <PageMenu tabs={tabs} activeTab={viewMode} setActiveTab={setViewMode} />
    </Layout>
  );
};

export default Home;
