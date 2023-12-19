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
  Filler,
} from "chart.js";
import Dropdown from "../base/Dropdown";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const Output = () => {
  const sampleData = [
    { weekOf: "12/03/2023", projected: 0, actual: 0 },
    { weekOf: "12/10/2023", projected: 119305, actual: 110000 },
    { weekOf: "12/17/2023", projected: 176670, actual: 100000 },
    { weekOf: "12/24/2023", projected: 106748, actual: 106000 },
  ];

  const goalValue = 106000;

  const getDateRangeValue = (rangeType: string): string => {
    const today = new Date();
    const start = new Date();
    let end = new Date();

    switch (rangeType) {
      case "today":
        break;
      case "week":
        start.setDate(today.getDate() - today.getDay());
        end.setDate(start.getDate() + 6);
        break;
      case "month":
        start.setDate(1);
        end = new Date(start.getFullYear(), start.getMonth() + 1, 0);
        break;
      case "quarter":
        const currentQuarter = Math.floor(today.getMonth() / 3);
        start.setMonth(currentQuarter * 3);
        start.setDate(1);
        end = new Date(start.getFullYear(), start.getMonth() + 3, 0);
        break;
      case "year":
        start.setMonth(0, 1);
        end.setMonth(11, 31);
        break;
      case "lastWeek":
        const lastWeek = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - 7,
        );
        start.setDate(lastWeek.getDate() - lastWeek.getDay());
        end.setDate(start.getDate() + 6);
        break;
      case "lastMonth":
        start.setMonth(today.getMonth() - 1, 1);
        end = new Date(start.getFullYear(), start.getMonth() + 1, 0);
        break;
      case "lastQuarter":
        const lastQuarter = Math.floor((today.getMonth() - 3) / 3);
        start.setMonth(lastQuarter * 3, 1);
        end = new Date(start.getFullYear(), start.getMonth() + 3, 0);
        break;
      case "lastYear":
        start.setFullYear(today.getFullYear() - 1, 0, 1);
        end.setFullYear(start.getFullYear(), 11, 31);
        break;
      case "all":
        start.setFullYear(2000, 0, 1);
        end.setFullYear(2100, 11, 31);
        break;
    }

    return `${start.toISOString().split("T")[0]} to ${
      end.toISOString().split("T")[0]
    }`;
  };

  const dateFilters = [
    { label: "Today", value: getDateRangeValue("today") },
    { label: "This Week", value: getDateRangeValue("week") },
    { label: "This Month", value: getDateRangeValue("month") },
    { label: "This Quarter", value: getDateRangeValue("quarter") },
    { label: "This Year", value: getDateRangeValue("year") },
    { label: "Last Week", value: getDateRangeValue("lastWeek") },
    { label: "Last Month", value: getDateRangeValue("lastMonth") },
    { label: "Last Quarter", value: getDateRangeValue("lastQuarter") },
    { label: "Last Year", value: getDateRangeValue("lastYear") },
    { label: "All Time", value: getDateRangeValue("all") },
  ];

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

  const chartData = {
    labels: sampleData.map((data) => data.weekOf),
    datasets: [
      {
        label: "Actual Output",
        data: sampleData.map((data) => data.actual),
        borderColor: "rgba(54, 162, 235, 0.5)",
        backgroundColor: "rgba(54, 162, 235, .5)",
        tension: 0.4,
        fill: true,
        pointBorderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
      },
      {
        label: "Projected Output",
        data: sampleData.map((data) => data.projected),
        borderColor: "rgba(255, 99, 132, 0.5)",
        backgroundColor: "rgba(255, 99, 132, .5)",
        tension: 0.4,
        fill: true,
        pointBorderColor: "rgba(255, 99, 132, 1)",
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
      },
      {
        label: "Goal Output",
        data: Array(sampleData.length).fill(goalValue),
        borderColor: "rgba(128, 128, 128, 1)",
        backgroundColor: "rgba(128, 128, 128, 0.2)",
        borderDash: [5, 5],
        tension: 0.4,
        pointBorderColor: "rgba(128, 128, 128, 1)",
        pointBackgroundColor: "rgba(255, 255, 255, 1)",
        pointBorderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <section>
      <div className="mx-auto">
        <div className="overflow-hidden rounded shadow">
          <div className="bg-white p-4">
            <div className="flex justify-between">
              <h3 className="text-xl font-bold text-gray-800">Output</h3>
              <Dropdown options={dateFilters} />
            </div>
            <div className="mb-4 h-96">
              <Line data={chartData} options={options} />
            </div>

            <div className="grid grid-cols-12 gap-4 bg-white">
              <div className="col-span-3">
                <div className="rounded border px-6 py-4">
                  <p className="text-xs text-gray-500">
                    This week's expected output
                  </p>
                  <h3 className="text-3xl font-bold">$245,000</h3>
                </div>
              </div>
              <div className="col-span-3">
                <div className="rounded border px-6 py-4">
                  <p className="text-xs text-gray-500">
                    This week's actual output
                  </p>
                  <h3 className="text-3xl font-bold">$190,000</h3>
                </div>
              </div>
              <div className="col-span-3">
                <div className="rounded border px-6 py-4">
                  <p className="text-xs text-gray-500">
                    Last week's expected output
                  </p>
                  <h3 className="text-3xl font-bold">$220,000</h3>
                </div>
              </div>
              <div className="col-span-3">
                <div className="rounded border px-6 py-4">
                  <p className="text-xs text-gray-500">
                    Last week's actual output
                  </p>
                  <h3 className="text-3xl font-bold">$205,000</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Output;
