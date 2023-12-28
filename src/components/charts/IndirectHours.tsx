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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

type Props = {
  indirectData: IProductionLog[];
};

const IndirectHours = (props: Props) => {
  const data = {
    labels: ["12-3-2023", "12-10-2023", "12-17-2023", "12-24-2023"],
    datasets: [
      {
        label: "Indirect Hours",
        data: [424, 500, 398, 0],
        borderColor: "#9ca3af",
        backgroundColor: "#e5e7eb",
        borderWidth: 2,
      },
      {
        label: "Total Hours",
        data: [1063.5, 1073.25, 1043.25, 0],
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
      <h3 className="text-lg font-semibold text-gray-800">Indirect Hours</h3>
      <div className="flex-grow">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default IndirectHours;
