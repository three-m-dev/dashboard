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
import { IProductionLog } from "../../shared/interfaces";
import { formatDate } from "../../utils/formatter";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

type Props = {
  quotedData: IProductionLog[];
};

const QuotedHours = ({ quotedData }: Props) => {
  const chartOptions = {
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

  const chartData = {
    labels: quotedData.map((data) => formatDate(data.weekOf)),
    datasets: [
      {
        label: "Quoted Hours",
        data: quotedData.map((data) => data.quotedHours),
        borderColor: "#9ca3af",
        backgroundColor: "#e5e7eb",
        borderWidth: 2,
      },
      {
        label: "Actual Hours",
        data: quotedData.map((data) => data.actualHours),
        borderColor: "#3b82f6",
        backgroundColor: "#93c5fd",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="flex h-full w-full flex-col">
      <h3 className="text-lg font-semibold text-gray-800">Quoted Hours</h3>
      <div className="flex-grow">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default QuotedHours;
