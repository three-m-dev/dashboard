import { useState } from "react";
import { BlogBuilder, Layout, PageHeader } from "../components";
import ContentCard from "../components/reusable/ContentCard";
import PlusIcon from "../assets/icons/PlusIcon";
import { Tab } from "../shared/types";

const Content = () => {
  const [activeTab, setActiveTab] = useState("bulletin");

  const [bulletinModalOpen, setBulletinModalOpen] = useState(false);
  const [bulletinModalMode, setBulletinModalMode] = useState("");

  const [newsletterModalOpen, setNewsletterModalOpen] = useState(false);
  const [newsletterModalMode, setNewsletterModalMode] = useState("");

  const tabs: Tab[] = [
    {
      value: "bulletin",
      buttons: [
        {
          text: "Add Bulletin",
          type: "button",
          onClick: () => toggleBulletinModal("create"),
          theme: "primary",
          icon: <PlusIcon />,
          destination: null,
          isLoading: false,
          isDisabled: false,
        },
      ],
    },
    {
      value: "newsletter",
      buttons: [
        {
          text: "Add Newsletter",
          type: "button",
          onClick: () => toggleNewsletterModal("create"),
          theme: "primary",
          icon: <PlusIcon />,
          destination: null,
          isLoading: false,
          isDisabled: false,
        },
      ],
    },
  ];

  const toggleBulletinModal = (mode: string = "view") => {
    setBulletinModalMode(mode);
    setBulletinModalOpen(!bulletinModalOpen);
  };

  const toggleNewsletterModal = (mode: string = "view") => {
    setNewsletterModalMode(mode);
    setNewsletterModalOpen(!newsletterModalOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "bulletin":
        return <div>Bulletin</div>;
      case "newsletter":
        return <div>Newsletter</div>;
      default:
        return <div>Content</div>;
    }
  };

  return (
    <Layout>
      <PageHeader
        title="Content"
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {renderContent()}
      {bulletinModalOpen && <>123</>}
    </Layout>
  );
};

export default Content;
