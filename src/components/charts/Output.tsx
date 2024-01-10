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
import { IProductionLog } from "../../shared/interfaces";
import { formatCurrency } from "../../utils/formatter";

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
  outputData: IProductionLog[];
};

const Output = ({ outputData }: Props) => {
  const chartOptions = {
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
          label: function (context: any) {
            const label = context.dataset.label || "";
            const value = formatCurrency(context.parsed.y);
            return `${label}: ${value}`;
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

  const chartData = {
    labels: outputData.map((data) => formatDateForChart(data.weekOf)),
    datasets: [
      // {
      //   label: "Trendline",
      //   data: outputData.map((data) => data.actualOutput),
      //   borderColor: "darkblue",
      //   borderWidth: 2,
      //   trendlineLinear: {
      //     style: "darkblue",
      //     lineStyle: "solid",
      //     width: 2,
      //   },
      //   fill: false,
      // },
      {
        label: "Goal",
        data: outputData.map((data) => data.outputGoal),
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
        data: outputData.map((data) => data.actualOutput),
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
        data: outputData.map((data) => data.projectedOutput),
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
    <div className="flex h-full w-full flex-col">
      <h3 className="col-span-12 text-lg font-semibold text-gray-800">
        Output
      </h3>
      <div className="flex-grow">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Output;
