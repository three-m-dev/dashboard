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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const Downtime = () => {
  const [selectedReasons, setSelectedReasons] = useState<string[]>(["Total"]);

  const { downtimeReportData, setFilter, loading, error } =
    useGenerateDowntimeReport();

  const [chartData, setChartData] = useState<IChartData>({
    labels: [],
    datasets: [],
  });

  const [totals, setTotals] = useState<{ [key: string]: number }>({});

  const [grandTotal, setGrandTotal] = useState<number>(0);

  const reasons = [
    "Total",
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
            return getMonday(title) + " - " + title;
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

  const getHoursAndMinutes = (duration: number): string => {
    if (isNaN(duration) || duration < 0) {
      return "Invalid input";
    }

    const hours = Math.floor(duration / 60);
    const remainingMinutes = duration % 60;

    if (hours > 0) {
      return `${hours}h ${remainingMinutes}m`;
    }
    return `${remainingMinutes}m`;
  };

  const getBorderColor = (reason: string): string => {
    const colors: { [key: string]: string } = {
      Maintenance: "rgba(54, 162, 235, 1)",
      Troubleshooting: "rgba(255, 206, 86, 1)",
      Programming: "rgba(75, 192, 192, 1)",
      Inspection: "rgba(153, 102, 255, 1)",
      Break: "rgba(255, 159, 64, 1)",
      Fixturing: "rgba(199, 199, 199, 1)",
      Changeover: "rgba(255, 99, 132, 1)",
      Training: "rgba(255, 205, 86, 1)",
      Other: "rgba(54, 162, 235, 1)",
    };
    return colors[reason] || "rgba(201, 203, 207, 1)";
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
    if (downtimeReportData) {
      const data = downtimeReportData as IDowntimeReportData;
      const labels = Object.keys(data);

      let datasets = [];
      let reasonTotals: { [key: string]: number } = {};
      let localGrandTotal = 0;

      labels.forEach((label) => {
        localGrandTotal += data[label].totalDowntime;
        Object.entries(data[label].downtime).forEach(([reason, value]) => {
          if (!reasonTotals[reason]) reasonTotals[reason] = 0;
          reasonTotals[reason] += value;
        });
      });

      setTotals(reasonTotals);
      setGrandTotal(localGrandTotal);

      if (selectedReasons.includes("Total")) {
        const totalDowntimes = labels.map((label) => data[label].totalDowntime);

        datasets.push({
          label: "Total",
          data: totalDowntimes,
          borderColor: "rgba(255, 99, 132, 1)",
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
            tension: 0.1,
          });
        });
      }

      setChartData({ labels, datasets });
    }
  }, [downtimeReportData, selectedReasons]);

  return (
    <section className="mt-4">
      <div className="mx-auto">
        <div className="rounded bg-white">
          <div className="flex items-center justify-between p-4">
            <h3 className="text-lg font-bold">Unscheduled Downtime</h3>
          </div>
          <div className="grid grid-cols-12 gap-4 pb-4">
            <div className="col-span-4">
              {reasons.map((reason, index) => {
                const total =
                  reason === "Total"
                    ? grandTotal
                    : totals[reason.toLowerCase()] || 0;
                const percentage =
                  grandTotal > 0
                    ? ((total / grandTotal) * 100).toFixed(2) + "%"
                    : "0%";

                return (
                  <div
                    key={index}
                    className={
                      `border-b border-blue-50 ` +
                      (selectedReasons.includes(reason)
                        ? "bg-gray-50"
                        : "bg-white")
                    }
                  >
                    <button
                      onClick={() => handleReasonChange(`${reason}`)}
                      className="h-full w-full p-3"
                    >
                      <div className="flex w-full justify-between gap-2">
                        <div className="flex items-center px-2">
                          <p className="whitespace-nowrap text-xs font-medium">
                            {reason}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <p className="whitespace-nowrap text-xs font-medium text-blue-500">
                              {reason !== "Total" ? percentage : ""}
                            </p>
                            <p className="whitespace-nowrap text-xs font-medium text-gray-500">
                              {getHoursAndMinutes(total)}
                            </p>
                          </div>
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
        </div>
      </div>
    </section>
  );
};

export default Downtime;
