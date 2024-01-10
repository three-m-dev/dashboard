import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";
import { IProductionLog } from "../../shared/interfaces";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
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
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
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

  const yValues = quotedData.map(
    (data) => (data.actualHours ?? 0) / (data.quotedHours ?? 1),
  );

  const chartData = {
    labels: quotedData.map((data) => formatDateForChart(data.weekOf)),
    datasets: [
      {
        label: "Actual to Quoted Hours",
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
        Actual : Quoted (Hours)
      </h3>
      <div className="flex-grow">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default QuotedHours;
