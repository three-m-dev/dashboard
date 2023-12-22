import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

type Props = {};

const QuotedHours = (props: Props) => {
  const data = {
    labels: ["12-3-2023", "12-10-2023", "12-17-2023", "12-24-2023"],
    datasets: [
      {
        label: "Quoted Hours",
        data: [15, 20, 25, 30],
        borderColor: "#9ca3af",
        backgroundColor: "#e5e7eb",
        borderWidth: 2,
      },
      {
        label: "Actual Hours",
        data: [10, 18, 22, 28],
        borderColor: "#3b82f6",
        backgroundColor: "#93c5fd",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: false,
      },
      y: {
        grid: {
          display: false,
        },
        stacked: false,
      },
    },
  };

  return (
    <div className="flex h-full w-full flex-col">
      <h3 className="text-lg font-semibold text-gray-800">Quoted Hours</h3>
      <div className="flex-grow">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default QuotedHours;
