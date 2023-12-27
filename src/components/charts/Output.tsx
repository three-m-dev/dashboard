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
    { weekOf: "12-3-2023", projected: 286547, actual: 31555, goal: 106000 },
    { weekOf: "12-10-2023", projected: 119305, actual: 93572, goal: 106000 },
    { weekOf: "12-17-2023", projected: 176670, actual: 157340, goal: 106000 },
    { weekOf: "12-24-2023", projected: 106748, actual: 0, goal: 106000 },
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
        borderColor: "#000000",
        backgroundColor: "#e5e7eb",
        borderDash: [5, 5],
        tension: 0.4,
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Actual",
        data: sampleData.map((data) => data.actual),
        borderColor: "#3b82f6",
        backgroundColor: "#93c5fd",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
        borderWidth: 2,
      },
      {
        label: "Projected",
        data: sampleData.map((data) => data.projected),
        borderColor: "#9ca3af",
        backgroundColor: "#e5e7eb",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
        borderWidth: 2,
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
              <h3 className="text-lg font-semibold text-gray-800">Output</h3>
            </div>
            <div className="h-96">
              <Line data={chartData} options={options} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Output;
