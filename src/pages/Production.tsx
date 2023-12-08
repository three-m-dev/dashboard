import { useState } from "react";
import { Downtime, Layout, Output, Resources } from "../components";

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
        <>
          <Output />
          <Downtime />
        </>
      );
    } else if (viewMode === "resources") {
      return <Resources />;
    } else if (viewMode === "operators") {
      return <div>Operators</div>;
    }
  };

  return (
    <Layout>
      <section className="px-6 pt-2">
        <h2 className="mb-4 text-2xl font-bold">Production</h2>
        <div className="flex flex-wrap text-center text-sm">
          <button
            onClick={() => handleViewChange("overview")}
            className={
              `mb-4 inline-block w-full border-b-2  px-4 pb-2  md:w-1/2 lg:mb-0 lg:w-auto ` +
              `${
                viewMode === "overview"
                  ? "border-indigo-500 text-indigo-500"
                  : "border-transparent text-gray-300 hover:border-gray-300"
              }`
            }
          >
            Overview
          </button>
          <button
            onClick={() => handleViewChange("resources")}
            className={
              `mb-4 inline-block w-full border-b-2  px-4 pb-2  md:w-1/2 lg:mb-0 lg:w-auto ` +
              `${
                viewMode === "resources"
                  ? "border-indigo-500 text-indigo-500"
                  : "border-transparent text-gray-300 hover:border-gray-300"
              }`
            }
          >
            Resources
          </button>
          <button
            onClick={() => handleViewChange("operators")}
            className={
              `mb-4 inline-block w-full border-b-2  px-4 pb-2  md:w-1/2 lg:mb-0 lg:w-auto ` +
              `${
                viewMode === "operators"
                  ? "border-indigo-500 text-indigo-500"
                  : "border-transparent text-gray-300 hover:border-gray-300"
              }`
            }
          >
            Operators
          </button>
        </div>
      </section>
      {renderView()}
    </Layout>
  );
};

export default Production;
