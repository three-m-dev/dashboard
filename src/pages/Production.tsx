import { useEffect, useState } from "react";
import {
  Downtime,
  DowntimeModal,
  DowntimeTable,
  IndirectHours,
  Layout,
  Output,
  PageHeader,
  QuotedHours,
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

  const getStartOfWeek = (date: any) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  };

  const getDateRange = (period: any) => {
    const now = new Date();
    let start, end;

    switch (period) {
      case "This Week":
        start = getStartOfWeek(new Date());
        start.setDate(start.getDate() - 7);
        end = new Date(start);
        end.setDate(end.getDate() + 13);
        break;
      case "Last 4 Weeks":
        start = getStartOfWeek(new Date());
        start.setDate(start.getDate() - 28);
        end = new Date();
        break;
      case "This Month":
        start = new Date(now.getFullYear(), now.getMonth(), 1);
        end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        break;
      case "Previous Month":
        start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        end = new Date(now.getFullYear(), now.getMonth(), 0);
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
        start = new Date(2000, 0, 1);
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
            { label: "Last 4 Weeks", value: "Last 4 Weeks" },
            { label: "This Month", value: "This Month" },
            { label: "Previous Month", value: "Previous Month" },
            { label: "This Quarter", value: "This Quarter" },
            { label: "This Year", value: "This Year" },
            { label: "All Time", value: "All Time" },
          ],
        },
      ],
    },
    {
      value: "Capacity",
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
          <div className="flex flex-col gap-4">
            <Output dateRange={dateRange} />
            <div className="flex h-96 w-full gap-4">
              <div className="flex-1 rounded bg-white p-4 shadow">
                <QuotedHours />
              </div>
              <div className="flex-1 rounded bg-white p-4 shadow">
                <IndirectHours />
              </div>
            </div>
            <Downtime dateRange={dateRange} />
          </div>
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
        return <></>;
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
