import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useGenerateDowntimeReport from "../../hooks/downtime/useGenerateDowntimeReport";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface DowntimeDetails {
  totalDowntime: number;
  downtime: {
    [key: string]: number;
  };
}

interface DowntimeReportData {
  [date: string]: DowntimeDetails;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    tension: number;
  }[];
}

const Downtime = () => {
  const [selectedReasons, setSelectedReasons] = useState<string[]>(["Total"]);
  const { downtimeReportData, setFilter, loading, error } =
    useGenerateDowntimeReport();
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (downtimeReportData) {
      const data = downtimeReportData as DowntimeReportData;
      const labels = Object.keys(data);
      const totalDowntimes = labels.map((label) => data[label].totalDowntime);

      const dataset = {
        label: "Total Downtime",
        data: totalDowntimes,
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.1,
      };

      setChartData({ labels, datasets: [dataset] });
    }
  }, [downtimeReportData]);

  console.log(chartData);

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "black",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "black",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "black",
        },
      },
    },
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: false,
    },
  };

  const downtimes = [
    {
      reason: "Total",
      duration: "10h",
      percentage: 100,
    },
    {
      reason: "Maintenance",
      duration: "3h",
      percentage: 25,
    },
    {
      reason: "Troubleshooting",
      duration: "2h 30m",
      percentage: 20,
    },
    {
      reason: "Programming",
      duration: "2h 45m",
      percentage: 22.5,
    },
    {
      reason: "Inspection",
      duration: "1h 45m",
      percentage: 15,
    },
    {
      reason: "Break",
      duration: "30m",
      percentage: 2.5,
    },
    {
      reason: "Fixtures",
      duration: "1h 15m",
      percentage: 10,
    },
    {
      reason: "Set Up/Tear Down",
      duration: "1h 30m",
      percentage: 12.5,
    },
    {
      reason: "Training/Meeting",
      duration: "1h 15m",
      percentage: 10,
    },
    {
      reason: "Other",
      duration: "45m",
      percentage: 5,
    },
  ];

  const sortedDowntimes = downtimes.sort((a, b) => b.percentage - a.percentage);

  const handleReasonChange = (reason: string) => {
    if (reason === "Total") {
      setSelectedReasons(["Total"]);
    } else {
      if (selectedReasons.includes("Total")) {
        setSelectedReasons([reason]);
      } else {
        if (selectedReasons.includes(reason)) {
          const newSelectedReasons = selectedReasons.filter(
            (r) => r !== reason,
          );
          setSelectedReasons(
            newSelectedReasons.length > 0 ? newSelectedReasons : ["Total"],
          );
        } else {
          setSelectedReasons([...selectedReasons, reason]);
        }
      }
    }
  };

  return (
    <section className="mt-4">
      <div className="mx-auto">
        <div className="rounded bg-white">
          <div className="flex items-center justify-between p-4">
            <h3 className="text-lg font-bold">Unscheduled Downtime</h3>
          </div>
          <div className="grid grid-cols-12 gap-4 pb-4">
            <div className="col-span-4">
              {sortedDowntimes.map((downtime, index) => (
                <div
                  key={index}
                  className={
                    `border-b border-blue-50 ` +
                    (selectedReasons.includes(downtime.reason)
                      ? "bg-gray-50"
                      : "bg-white")
                  }
                >
                  <button
                    onClick={() => handleReasonChange(`${downtime.reason}`)}
                    className="h-full w-full p-3"
                  >
                    <div className="flex w-full justify-between gap-2">
                      <div className="flex items-center px-2">
                        <p className="whitespace-nowrap text-xs font-medium">
                          {downtime.reason}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <p className="whitespace-nowrap text-xs font-medium text-blue-500">
                            {downtime.percentage}%
                          </p>
                          <p className="whitespace-nowrap text-xs font-medium text-gray-500">
                            {downtime.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
            <div className="col-span-8">
              <Line data={chartData} options={options} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downtime;
