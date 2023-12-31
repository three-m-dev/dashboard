import { useRef, useState } from "react";
import { Calendar, Layout, PageHeader } from "../components";
import Improvements from "../components/displays/Improvements";
import { Tab } from "../shared/types";
import FullScreenIcon from "../assets/icons/FullScreenIcon";
import CameraDisplay from "../components/CameraDisplay";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const [fullscreen, setFullscreen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div
            ref={fullscreenDivRef}
            className={
              `flex h-full w-full bg-gray-50 ` + (fullscreen ? "p-4" : "")
            }
          >
            <div className="flex-1 rounded border-2 border-blue-500"></div>
          </div>
        );
      case "calendar":
        return <Calendar />;
      case "improvements":
        return <Improvements />;
      case "security":
        return <CameraDisplay viewSize="small" />;
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
      setFullscreen(true);
    } else {
      document.exitFullscreen();
    }
  };

  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      setFullscreen(false);
    }
  });

  const handleClick = () => {
    console.log("Button Clicked");
  };

  const tabs: Tab[] = [
    {
      value: "overview",
      buttons: [
        {
          text: "Fullscreen",
          type: "button",
          onClick: () => toggleFullScreen(),
          theme: "primary",
          icon: <FullScreenIcon />,
          destination: null,
          isLoading: false,
          isDisabled: false,
        },
      ],
    },
    {
      value: "calendar",
      buttons: [
        {
          text: "Fullscreen",
          type: "button",
          onClick: () => toggleFullScreen(),
          theme: "primary",
          icon: <FullScreenIcon />,
          destination: null,
          isLoading: false,
          isDisabled: false,
        },
      ],
    },
    {
      value: "security",
    },
    // {
    //   value: "improvements",
    //   buttons: [
    //     {
    //       text: "Fullscreen",
    //       type: "button",
    //       onClick: () => toggleFullScreen(),
    //       theme: "primary",
    //       icon: <FullScreenIcon />,
    //       destination: null,
    //       isLoading: false,
    //       isDisabled: false,
    //     },
    //   ],
    // },
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
