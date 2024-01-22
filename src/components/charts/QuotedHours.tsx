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
import { Chart } from "react-chartjs-2";
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
    maintainAspectRatio: false,
    responsive: true,
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
        backgroundColor: "#93c5fd",
        borderColor: "#3b82f6",
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
        <Chart type="bar" data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default QuotedHours;
