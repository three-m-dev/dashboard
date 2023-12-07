import { useState } from "react";
import { Layout, Resources } from "../components";

const Production = () => {
  const [viewMode, setViewMode] = useState("overview");

  const handleViewChange = (value: string) => {
    if (viewMode !== value) {
      setViewMode(value);
    }
  };

  const renderView = () => {
    if (viewMode === "overview") {
      return (
        <div className="flex h-full flex-col gap-4 overflow-auto">
          <div className="flex w-full gap-4">
            <div className="h-24 w-full rounded bg-white shadow"></div>
            <div className="h-24 w-full rounded bg-white shadow"></div>
            <div className="h-24 w-full rounded bg-white shadow"></div>
            <div className="h-24 w-full rounded bg-white shadow"></div>
          </div>
          <div className="flex h-full w-full gap-4">
            <div className="h-full w-full rounded bg-white shadow"></div>
            <div className="h-full w-1/2 rounded bg-white shadow"></div>
          </div>
          <div className="flex h-full w-full gap-4">
            <div className="h-full w-full rounded bg-white shadow"></div>
            <div className="h-full w-1/2 rounded bg-white shadow"></div>
          </div>
        </div>
      );
    } else if (viewMode === "resources") {
      return <Resources />;
    } else if (viewMode === "operators") {
      return <div>Operators</div>;
    }
  };

  return (
    <Layout>
      <div className="mb-4 flex justify-center">
        <div className="flex gap-2">
          <button
            onClick={() => handleViewChange("overview")}
            className={`rounded px-4 py-1 ${
              viewMode === "overview"
                ? "bg-blue-400 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => handleViewChange("resources")}
            className={`rounded px-4 py-1 ${
              viewMode === "resources"
                ? "bg-blue-400 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Resources
          </button>
          <button
            onClick={() => handleViewChange("operators")}
            className={`rounded px-4 py-1 ${
              viewMode === "operators"
                ? "bg-blue-400 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Operators
          </button>
        </div>
      </div>
      {renderView()}
    </Layout>
  );
};

export default Production;
