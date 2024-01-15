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

const IndirectHours = ({ indirectData }: Props) => {
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          color: "#808080",
        },
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
        ticks: {
          color: "#808080",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#808080",
          callback: function (value: any) {
            return value.toFixed(2);
          },
        },
      },
    },
  };

  const formatDateForChart = (dateString: string) => {
    const date = new Date(dateString);
    const utcDate = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
    );
    return `${
      utcDate.getMonth() + 1
    }/${utcDate.getDate()}/${utcDate.getFullYear()}`;
  };

  const yValues = indirectData.map(
    (data) => (data.indirectHours ?? 0) / (data.totalHours ?? 1),
  );

  const chartData = {
    labels: indirectData.map((data) => formatDateForChart(data.weekOf)),
    datasets: [
      {
        label: "Indirect to Total Hours",
        data: yValues,
        borderColor: "#3b82f6",
        backgroundColor: "#93c5fd",
        borderWidth: 2,
        type: "bar" as const,
      },
    ],
  };

  return (
    <div className="flex h-full w-full flex-col">
      <h3 className="text-lg font-semibold text-gray-800">
        Indirect : Total (Hours)
      </h3>
      <div className="flex-grow">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default IndirectHours;
