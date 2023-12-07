import { useState } from "react";
import { Layout } from "../components";

const Production = () => {
  const [view, setView] = useState("overview");

  const handleViewChange = (value: string) => {
    if (view !== value) {
      setView(value);
    }
  };

  const renderView = () => {
    if (view === "overview") {
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
    } else if (view === "resources") {
      return <div className="h-full bg-blue-500"></div>;
    }
  };

  return (
    <Layout>
      <div className="mb-4 flex justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => handleViewChange("overview")}
            className="rounded bg-gray-300 px-4 py-1"
          >
            Overview
          </button>
          <button
            onClick={() => handleViewChange("resources")}
            className="rounded bg-gray-300 px-4 py-1"
          >
            Resources
          </button>
        </div>
        <div>
          <button className="rounded bg-gray-300 px-4 py-1">Date Picker</button>
        </div>
      </div>
      {renderView()}
    </Layout>
  );
};

export default Production;
