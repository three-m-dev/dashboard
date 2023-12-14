import { useRef, useState } from "react";
import { Calendar, Layout, PageHeader } from "../components";
import Improvements from "../components/Improvements";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div
            ref={fullscreenDivRef}
            className="flex h-full w-full bg-gray-50 p-4"
          >
            <div className="flex-1 rounded border-2 border-blue-500"></div>
          </div>
        );
      case "calendar":
        return <Calendar />;
      case "improvements":
        return <Improvements />;
      default:
        return <div>Overview</div>;
    }
  };

  const fullscreenDivRef = useRef<HTMLDivElement>(null);

  const toggleFullScreen = () => {
    const elem = fullscreenDivRef.current;

    if (!elem) return;

    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`,
        );
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleClick = () => {
    console.log("Button Clicked");
  };

  const tabs = [
    {
      value: "overview",
      buttons: [{ label: "fullscreen", onClick: toggleFullScreen }],
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
