import { useEffect, useState } from "react";
import {
  Downtime,
  DowntimeModal,
  DowntimeTable,
  Layout,
  Output,
  PageHeader,
  Resources,
} from "../components";
import { Option, Tab } from "../shared/types";
import PlusIcon from "../assets/icons/PlusIcon";
import { formatDate } from "../utils/formatter";

const Production = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [dateRange, setDateRange] = useState<{
    start: string | null;
    end: string | null;
  }>({ start: null, end: null });

  const [downtimeModalOpen, setDowntimeModalOpen] = useState(false);
  const [downtimeModalMode, setDowntimeModalMode] = useState("");
  const [refreshDowntime, setRefreshDowntime] = useState(false);

  const toggleDownTimeModal = (mode = "view") => {
    setDowntimeModalMode(mode);
    setDowntimeModalOpen(!downtimeModalOpen);
  };

  const handleClick = () => {
    console.log("Button Clicked");
  };

  const getDateRange = (period: string) => {
    const now = new Date();
    let start, end;
    switch (period) {
      case "This Week":
        start = new Date(now.setDate(now.getDate() - now.getDay() + 1));
        end = new Date(start);
        end.setDate(start.getDate() + 6);
        break;
      case "This Month":
        start = new Date(now.getFullYear(), now.getMonth(), 1);
        end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        break;
      case "This Quarter":
        const quarter = Math.floor(now.getMonth() / 3);
        start = new Date(now.getFullYear(), quarter * 3, 1);
        end = new Date(now.getFullYear(), quarter * 3 + 3, 0);
        break;
      case "This Year":
        start = new Date(now.getFullYear(), 0, 1);
        end = new Date(now.getFullYear() + 1, 0, 0);
        break;
      case "All Time":
        start = new Date(2000, 4, 22); // Adjust the start date as needed
        end = new Date();
        break;
      default:
        start = new Date();
        end = new Date();
        break;
    }
    return {
      start: formatDate(start.toISOString()),
      end: formatDate(end.toISOString()),
    };
  };

  const handleDropdownSelect = (option: Option) => {
    const range = getDateRange(option.label);
    setDateRange(range);
  };

  const tabs: Tab[] = [
    {
      value: "overview",
      dropdowns: [
        {
          text: "Date Range",
          onSelect: handleDropdownSelect,
          options: [
            { label: "This Week", value: "This Week" },
            { label: "This Month", value: "This Month" },
            { label: "This Quarter", value: "This Quarter" },
            { label: "This Year", value: "This Year" },
            { label: "All Time", value: "All Time" },
          ],
        },
      ],
    },
    {
      value: "downtime",
      buttons: [
        {
          text: "Add Downtime",
          type: "button",
          onClick: () => toggleDownTimeModal("add"),
          theme: "primary",
          icon: <PlusIcon />,
        },
      ],
    },
    {
      value: "resources",
      buttons: [
        {
          text: "Add Resource",
          type: "button",
          onClick: handleClick,
          theme: "primary",
          icon: <PlusIcon />,
        },
      ],
    },
  ];

  const triggerDowntimeRefresh = () => {
    setRefreshDowntime((prev) => !prev);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <Output dateRange={dateRange} />
            <Downtime dateRange={dateRange} />
          </>
        );
      case "downtime":
        return (
          <DowntimeTable
            toggleDowntimeModal={toggleDownTimeModal}
            refreshData={refreshDowntime}
          />
        );
      case "resources":
        return <Resources />;
      default:
        return (
          <>
            <Output dateRange={dateRange} />
            <Downtime dateRange={dateRange} />
          </>
        );
    }
  };

  useEffect(() => {
    handleDropdownSelect({ label: "This Week", value: "This Week" });
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Production"
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {renderContent()}

      {downtimeModalOpen && (
        <DowntimeModal
          mode={downtimeModalMode}
          onClose={toggleDownTimeModal}
          triggerRefresh={triggerDowntimeRefresh}
        />
      )}
    </Layout>
  );
};

export default Production;
