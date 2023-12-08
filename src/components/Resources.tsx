import { Link } from "react-router-dom";

const Resources = () => {
  const resourceList = [
    {
      id: "1",
      name: "CNC 1",
      status: "idle",
      oee: 0.31,
      partsProduced: 42,
      lastStatusUpdate: "2023-12-07 12:50:33",
    },
    {
      id: "2",
      name: "CNC 2",
      status: "idle",
      oee: 0.84,
      partsProduced: 252,
      lastStatusUpdate: "2023-12-06 23:40:02",
    },
    {
      id: "3",
      name: "CNC 3",
      status: "active",
      oee: 0.91,
      partsProduced: 151,
      lastStatusUpdate: "2023-12-07 13:34:37",
    },
    {
      id: "4",
      name: "CNC 4",
      status: "active",
      oee: 0.87,
      partsProduced: 157,
      lastStatusUpdate: "2023-12-06 22:11:55",
    },
    {
      id: "5",
      name: "CNC 5",
      status: "active",
      oee: 0.56,
      partsProduced: 104,
      lastStatusUpdate: "2023-12-07 6:25:31",
    },
    {
      id: "6",
      name: "CNC 6",
      status: "unknown",
      oee: 0,
      partsProduced: 0,
      lastStatusUpdate: "2023-12-07 01:23:31",
    },
    {
      id: "7",
      name: "CNC 7",
      status: "active",
      oee: 0.86,
      partsProduced: 247,
      lastStatusUpdate: "2023-12-07 04:18:02",
    },
    {
      id: "8",
      name: "CNC 8",
      status: "active",
      oee: 0.92,
      partsProduced: 92,
      lastStatusUpdate: "2023-12-07 05:49:26",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case "idle":
        return "bg-blue-400";
      case "active":
        return "bg-green-400";
      case "unknown":
        return "bg-gray-400";
      default:
        return "";
    }
  };

  const getOeeClass = (oee: number) => {
    if (oee >= 0.8) {
      return {
        bg: "bg-green-200",
        filled: "text-green-400",
        empty: "text-green-50",
      };
    } else if (oee >= 0.5) {
      return {
        bg: "bg-orange-200",
        filled: "text-orange-400",
        empty: "text-orange-50",
      };
    } else {
      return {
        bg: "bg-red-200",
        filled: "text-red-400",
        empty: "text-red-50",
      };
    }
  };

  const formatStatus = (status: string) => {
    return status
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const timeAgo = (lastUpdateTime: string) => {
    const currentTime = new Date().getTime();
    const updateTime = new Date(lastUpdateTime).getTime();
    const diffInSeconds = Math.floor((currentTime - updateTime) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    } else {
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    }
  };

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8 px-6">
      {resourceList.map((resource, index) => {
        const statusClass = getStatusClass(resource.status);
        const oeeClass = getOeeClass(resource.oee);
        return (
          <Link
            to={`/production/resource/${resource.id}`}
            key={index}
            className="flex flex-col overflow-clip rounded bg-white shadow"
          >
            <div
              className={`flex flex-col items-center justify-center p-2 text-white ${statusClass}`}
            >
              <h1 className="font-bold">{resource.name}</h1>
              <div className="flex gap-1 text-sm">
                <p>{timeAgo(resource.lastStatusUpdate)}</p>
                <p>·</p>
                <p>{formatStatus(resource.status)}</p>
              </div>
            </div>
            <div
              className={`flex h-full items-center justify-center py-4 ${oeeClass.bg} relative`}
            >
              <svg
                className="h-32 w-32 -rotate-90 transform"
                viewBox="0 0 36 36"
              >
                <path
                  className={`stroke-current ${oeeClass.empty}`}
                  d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  className={`stroke-current ${oeeClass.filled}`}
                  d={`M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831`}
                  fill="none"
                  strokeDasharray={`${resource.oee * 100}, 100`}
                  strokeWidth="2"
                />
              </svg>
              <div
                className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col text-center text-white ${oeeClass.filled}`}
              >
                <span className="text-sm font-semibold">OEE</span>
                <span className="text-lg font-bold">
                  {Math.round(resource.oee * 100)}%
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Resources;
