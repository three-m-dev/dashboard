import { useEffect, useState } from "react";
import {
  Downtime,
  DowntimeModal,
  DowntimeTable,
  IndirectHours,
  Layout,
  Output,
  PageHeader,
  ProductionLogModal,
  QuotedHours,
  Resources,
} from "../components";
import { Option, Tab } from "../shared/types";
import PlusIcon from "../assets/icons/PlusIcon";
import { formatDate } from "../utils/formatter";
import useGetProductionLogs from "../hooks/production/useGetProductionLogs";
import TvIcon from "../assets/icons/TvIcon";

const Production = () => {
  // add load, error and refresh
  const { productionLogData, setFilter, setSort } = useGetProductionLogs();

  const [activeTab, setActiveTab] = useState("overview");

  const [dateRange, setDateRange] = useState<{
    start: string | null;
    end: string | null;
  }>({ start: null, end: null });

  const [productionLogModalOpen, setProductionLogModalOpen] = useState(false);
  const [productionLogModalMode, setProductionLogModalMode] = useState("");

  const [downtimeModalOpen, setDowntimeModalOpen] = useState(false);
  const [downtimeModalMode, setDowntimeModalMode] = useState("");
  const [refreshDowntime, setRefreshDowntime] = useState(false);

  const [displayMode, setDisplayMode] = useState(false);

  const toggleDisplayMode = () => {
    setDisplayMode(!displayMode);
  };

  // useEffect(() => {
  //   const handleDoubleClick = (event: any) => {
  //     if (event.button === 1) {
  //       // Middle mouse button
  //       toggleDisplayMode();
  //     }
  //   };

  //   document.addEventListener("dblclick", handleDoubleClick);

  //   return () => {
  //     document.removeEventListener("dblclick", handleDoubleClick);
  //   };
  // }, []);

  const toggleProductionLogModal = (mode = "view") => {
    setProductionLogModalMode(mode);
    setProductionLogModalOpen(!productionLogModalOpen);
  };

  const toggleDownTimeModal = (mode = "view") => {
    setDowntimeModalMode(mode);
    setDowntimeModalOpen(!downtimeModalOpen);
  };

  const handleClick = () => {
    console.log("Button Clicked");
  };

  const getDateRange = (period: any) => {
    let start, end;
    const today = new Date();
    const dayOfWeek = today.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

    switch (period) {
      case "This Week":
        start = new Date(today);
        start.setDate(start.getDate() + mondayOffset - 7);
        end = new Date(start);
        end.setDate(start.getDate() + 13);
        break;
      case "4 Weeks":
        start = new Date(today);
        start.setDate(start.getDate() + mondayOffset - 28);
        end = new Date(start);
        end.setDate(start.getDate() + 27);
        break;
      case "8 Weeks":
        start = new Date(today);
        start.setDate(start.getDate() + mondayOffset - 56);
        end = new Date(start);
        end.setDate(start.getDate() + 55);
        break;
      case "12 Weeks":
        start = new Date(today);
        start.setDate(start.getDate() + mondayOffset - 84);
        end = new Date(start);
        end.setDate(start.getDate() + 83);
        break;
      case "26 Weeks":
        start = new Date(today);
        start.setDate(start.getDate() + mondayOffset - 182);
        end = new Date(start);
        end.setDate(start.getDate() + 181);
        break;
      case "52 Weeks":
        start = new Date(today);
        start.setDate(start.getDate() + mondayOffset - 364);
        end = new Date(start);
        end.setDate(start.getDate() + 363);
        break;
      case "All Time":
        start = new Date(2000, 0, 1);
        end = new Date();
        break;
      default:
        start = new Date();
        end = new Date();
    }

    end.setHours(23, 59, 59, 999);

    return {
      start: formatDate(start.toString(), "write"),
      end: formatDate(end.toString(), "write"),
    };
  };

  const handleDropdownSelect = (option: Option) => {
    const range = getDateRange(option.value);
    setDateRange(range);
  };

  const tabs: Tab[] = [
    {
      value: "overview",
      buttons: [
        {
          text: "",
          icon: <TvIcon />,
          type: "button",
          onClick: () => toggleDisplayMode(),
          theme: "primary",
        },
        {
          text: "Production Logs",
          type: "button",
          onClick: () => toggleProductionLogModal("view"),
          theme: "primary",
        },
      ],
      dropdowns: [
        {
          text: "Date Range",
          onSelect: handleDropdownSelect,
          options: [
            { label: "This Week", value: "This Week" },
            { label: "Last 4 Weeks", value: "4 Weeks" },
            { label: "Last 8 Weeks", value: "8 Weeks" },
            { label: "Last 12 Weeks", value: "12 Weeks" },
            { label: "Last 26 Weeks", value: "26 Weeks" },
            { label: "Last 52 Weeks", value: "52 Weeks" },
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
          <div className="flex flex-col gap-4">
            <div className="h-96 w-full rounded bg-white p-4 shadow">
              <Output outputData={productionLogData?.productionLogs || []} />
            </div>
            <div className="flex h-96 w-full gap-4">
              <div className="flex-1 rounded bg-white p-4 shadow">
                <QuotedHours
                  quotedData={productionLogData?.productionLogs || []}
                />
              </div>
              <div className="flex-1 rounded bg-white p-4 shadow">
                <IndirectHours
                  indirectData={productionLogData?.productionLogs || []}
                />
              </div>
            </div>
            <div className="bg-white rounded p-4">
              <Downtime display={false} dateRange={dateRange} />
            </div>
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
    setFilter({ dateRange });
    setSort("weekOf,ASC");
  }, [dateRange, setFilter, setSort]);

  useEffect(() => {
    handleDropdownSelect({ label: "This Week", value: "This Week" });
  }, []);

  if (displayMode === true) {
    return (
      <div
        className="grid h-screen w-screen grid-cols-2 grid-rows-2 gap-4 bg-gray-50 p-4"
        onDoubleClick={() => toggleDisplayMode()}
      >
        <div className="col-span-1 row-span-1 overflow-hidden bg-white p-4 shadow">
          <Output outputData={productionLogData?.productionLogs || []} />
        </div>
        <div className="col-span-1 row-span-1 overflow-hidden bg-white p-4 shadow">
          <Downtime display={true} dateRange={dateRange} />
        </div>
        <div className="col-span-1 row-span-1 overflow-hidden bg-white p-4 shadow">
          <QuotedHours quotedData={productionLogData?.productionLogs || []} />
        </div>

        <div className="col-span-1 row-span-1 overflow-hidden bg-white p-4 shadow">
          <IndirectHours
            indirectData={productionLogData?.productionLogs || []}
          />
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <PageHeader
        title="Production"
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {renderContent()}

      {productionLogModalOpen && (
        <ProductionLogModal
          mode={productionLogModalMode}
          onClose={toggleProductionLogModal}
          productionLogData={productionLogData?.productionLogs}
        />
      )}

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
