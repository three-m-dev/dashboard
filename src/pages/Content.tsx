import { useState } from "react";
import { BlogBuilder, BulletinModal, Layout, PageHeader } from "../components";
import ContentCard from "../components/reusable/ContentCard";

const Content = () => {
  const [activeTab, setActiveTab] = useState("bulletin");

  const [bulletinModalOpen, setBulletinModalOpen] = useState(false);
  const [bulletinModalMode, setBulletinModalMode] = useState("");

  const tabs = [
    {
      value: "bulletin",
      buttons: [
        { label: "create new", onClick: () => toggleBulletinModal("create") },
      ],
    },
    {
      value: "newsletter",
      buttons: [{ label: "create new", onClick: () => handleNewNewsletter() }],
    },
  ];

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

  const toggleBulletinModal = (mode: string = "view") => {
    setBulletinModalMode(mode);
    setBulletinModalOpen(!bulletinModalOpen);
  };

  const handleNewNewsletter = () => {
    console.log("Button Clicked");
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
      {bulletinModalOpen && (
        <BulletinModal toggleBulletinModal={toggleBulletinModal} />
      )}
    </Layout>
  );
};

export default Content;
