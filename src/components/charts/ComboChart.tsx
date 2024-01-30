/* eslint-disable */

import {
  Chart as ChartJS,
  ChartOptions,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  registerables,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(...registerables);
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend);

type ComboChartProps = {
  title: string;
  data: any;
  options?: ChartOptions<'bar'>;
};

const ComboChart = ({ title, data, options }: ComboChartProps) => {
  return (
    <div className='flex flex-col h-full w-full'>
      <h1 className='text-lg font-semibold text-gray-800'>{title}</h1>
      <div className='flex-grow'>
        <Chart
          type='bar'
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default ComboChart;
