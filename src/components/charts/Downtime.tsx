import { useEffect, useState } from "react";
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
import { IChartData, IDowntimeReportData } from "../../shared/interfaces";
import { formatDate, formatMinutes } from "../../utils/formatter";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

type Props = {
  dateRange: {
    start: string | null;
    end: string | null;
  };
};

const Downtime = ({ dateRange }: Props) => {
  const [selectedReasons, setSelectedReasons] = useState<string[]>(["Total"]);

  // add load and error handling
  const { downtimeReportData, setFilter } = useGenerateDowntimeReport();

  const [chartData, setChartData] = useState<IChartData>({
    labels: [],
    datasets: [],
  });

  const [totals, setTotals] = useState<{ [key: string]: number }>({});

  const [grandTotal, setGrandTotal] = useState<number>(0);

  const reasons = [
    "Total",
    "Tooling",
    "Maintenance",
    "Troubleshooting",
    "Programming",
    "Inspection",
    "Break",
    "Fixturing",
    "Changeover",
    "Training",
    "Other",
  ];

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "black",
        },
      },
      y: {
        display: true,
        beginAtZero: true,
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
      tooltip: {
        intersect: false,
        callbacks: {
          title: function (context: any) {
            const title = context[0].label;
            return getMonday(title) + " - " + formatDate(title);
          },
        },
      },
    },
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: false,
    },
  };

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

  const getBorderColor = (reason: string): string => {
    const colors: { [key: string]: string } = {
      Tooling: "#22c55e",
      Maintenance: "#0ea5e9",
      Troubleshooting: "#eab308",
      Programming: "#f97316",
      Inspection: "#a855f7",
      Break: "#6366f1",
      Fixturing: "#14b8a6",
      Changeover: "#84cc16",
      Training: "#9ca3af",
      Other: "#ef4444",
    };
    return colors[reason] || "#030712";
  };

  const getBackgroundColor = (reason: string): string => {
    const colors: { [key: string]: string } = {
      Tooling: "#86efac",
      Maintenance: "#7dd3fc",
      Troubleshooting: "#fde047",
      Programming: "#fdba74",
      Inspection: "#d8b4fe",
      Break: "#a5b4fc",
      Fixturing: "#5eead4",
      Changeover: "#bef264",
      Training: "#e5e7eb",
      Other: "#fca5a5",
    };
    return colors[reason] || "#111827";
  };

  const getMonday = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(date.setDate(diff));
    const month = `${monday.getMonth() + 1}`.padStart(2, "0");
    const dayOfMonth = `${monday.getDate()}`.padStart(2, "0");
    const year = monday.getFullYear();
    return `${month}/${dayOfMonth}/${year}`;
  };

  useEffect(() => {
    setFilter({ dateRange });
  }, [dateRange, setFilter]);

  useEffect(() => {
    if (downtimeReportData) {
      const data = downtimeReportData as IDowntimeReportData;
      const labels = Object.keys(data);

      let datasets = [];
      let reasonTotals: { [key: string]: number } = {};
      let localGrandTotal = 0;

      labels.forEach((label) => {
        localGrandTotal += data[label].total;
        Object.entries(data[label].downtime).forEach(([reason, value]) => {
          if (!reasonTotals[reason]) reasonTotals[reason] = 0;
          reasonTotals[reason] += value;
        });
      });

      setTotals(reasonTotals);
      setGrandTotal(localGrandTotal);

      if (selectedReasons.includes("Total")) {
        const totalDowntimes = labels.map((label) => data[label].total);

        datasets.push({
          label: "Total",
          data: totalDowntimes,
          borderColor: "#3b82f6",
          backgroundColor: "#93c5fd",
          pointBackgroundColor: "white",
          pointBorderWidth: 2,
          borderWidth: 2,
          tension: 0.1,
        });
      } else {
        selectedReasons.forEach((reason) => {
          const reasonData = labels.map(
            (label) => data[label].downtime[reason.toLowerCase()] || 0,
          );

          datasets.push({
            label: reason,
            data: reasonData,
            borderColor: getBorderColor(reason),
            backgroundColor: getBackgroundColor(reason),
            pointBackgroundColor: "white",
            pointBorderWidth: 2,
            borderWidth: 2,
            tension: 0.1,
          });
        });
      }

      setChartData({ labels, datasets });
    }
  }, [downtimeReportData, selectedReasons]);

  return (
    <div className="grid h-full grid-cols-12">
      <h3 className="col-span-12 text-lg font-semibold text-gray-800">
        Unscheduled Downtime & Changeover (Setup/Teardown)
      </h3>

      <div className="col-span-4 flex flex-col">
        {reasons.map((reason, index) => {
          const total =
            reason === "Total" ? grandTotal : totals[reason.toLowerCase()] || 0;
          const percentage =
            grandTotal > 0
              ? ((total / grandTotal) * 100).toFixed(2) + "%"
              : "0%";

          return (
            <div
              key={index}
              className={`flex flex-1 border-b border-blue-50 ${
                selectedReasons.includes(reason) ? "bg-blue-100" : "bg-white"
              }`}
            >
              <button
                onClick={() => handleReasonChange(`${reason}`)}
                className="w-full"
              >
                <div className="flex justify-between gap-2 px-2 py-1">
                  <p className="text-xs font-medium">{reason}</p>
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-medium text-blue-500">
                      {reason !== "Total" ? percentage : ""}
                    </p>
                    <p className="text-xs font-medium text-gray-500">
                      {formatMinutes(total)}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      <div className="col-span-8">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Downtime;
