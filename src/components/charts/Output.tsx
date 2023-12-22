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

type Props = {
  dateRange: {
    start: string | null;
    end: string | null;
  };
};

const Output = ({ dateRange }: Props) => {
  const sampleData = [
    { weekOf: "12/10/2023", projected: 119305, actual: 93572, goal: 106000 },
    { weekOf: "12/17/2023", projected: 176670, actual: 157340, goal: 106000 },
    { weekOf: "12/24/2023", projected: 106748, actual: 0, goal: 106000 },
  ];

  const options = {
    maintainAspectRatio: false,
    responsive: true,
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

  const chartData = {
    labels: sampleData.map((data) => data.weekOf),
    datasets: [
      {
        label: "Goal",
        data: sampleData.map((data) => data.goal),
        borderColor: "#6b7280",
        backgroundColor: "#e5e7eb",
        borderDash: [5, 5],
        tension: 0.4,
        pointBorderColor: "#6b7280",
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
        fill: false,
      },
      {
        label: "Actual",
        data: sampleData.map((data) => data.actual),
        borderColor: "#3b82f6",
        backgroundColor: "#60a5fa",
        tension: 0.4,
        fill: true,
        pointBorderColor: "#3b82f6",
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
      },
      {
        label: "Projected",
        data: sampleData.map((data) => data.projected),
        borderColor: "#ef4444",
        backgroundColor: "#f87171",
        tension: 0.4,
        fill: true,
        pointBorderColor: "#ef4444",
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
      },
    ],
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

  return (
    <section>
      <div className="mx-auto">
        <div className="overflow-hidden rounded shadow">
          <div className="bg-white p-4">
            <div className="flex justify-between">
              <h3 className="text-xl font-bold text-gray-800">Output</h3>
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
