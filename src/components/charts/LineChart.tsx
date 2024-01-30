/* eslint-disable */
import {
  Chart as ChartJS,
  ChartOptions,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend, Filler);

type LineChartProps = {
  title: string;
  data: any;
  options?: ChartOptions<'line'>;
};

const LineChart = ({ title, data, options }: LineChartProps) => {
  return (
    <div className='flex flex-col h-full w-full'>
      <h1 className='text-lg font-semibold text-gray-800'>{title}</h1>
      <div className='flex-grow'>
        <Chart
          type='line'
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default LineChart;
