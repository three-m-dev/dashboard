import { useState } from "react";
import { Downtime, Layout, Output, PageHeader, Resources } from "../components";

const Production = () => {
  const [viewMode, setViewMode] = useState("overview");

  const handleViewChange = (value: string) => {
    if (viewMode !== value) {
      setViewMode(value);
    }
  };

  const renderHeader = () => {
    switch (viewMode) {
      case "overview":
        return (
          <PageHeader
            title="Production"
            onSearch={() => {
              console.log("Search button clicked");
            }}
          />
        );
      case "resources":
        return (
          <PageHeader
            title="Production"
            onSearch={() => {
              console.log("Search button clicked");
            }}
            filterButton={{
              onClick: () => {
                console.log("Filter button clicked");
              },
            }}
            createButton={{
              onClick: () => {
                console.log("Create button clicked");
              },
            }}
          />
        );
      case "operators":
        return (
          <PageHeader
            title="Production"
            onSearch={() => {
              console.log("Search button clicked");
            }}
            filterButton={{
              onClick: () => {
                console.log("Filter button clicked");
              },
            }}
            createButton={{
              onClick: () => {
                console.log("Create button clicked");
              },
            }}
          />
        );
      default:
        return <p>No view selected</p>;
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
      {renderHeader()}
      <section className="px-6 pt-2">
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
