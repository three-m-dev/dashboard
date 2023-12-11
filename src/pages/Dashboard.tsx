import { useState } from "react";
import { Layout } from "../components";

const Dashboard = () => {
  const [viewMode, setViewMode] = useState("overview");

  const handleViewModeChange = (view: string) => {
    if (viewMode !== view) {
      setViewMode(view);
    }
  };

  return <Layout></Layout>;
};

export default Dashboard;
