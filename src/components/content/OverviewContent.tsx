/* eslint-disable */
import { useEffect, useState } from 'react';
import ComboChart from '../charts/ComboChart';
import { LineChart } from '..';
import { useGeneralContext } from '../../hooks/useGeneralContext';
import { parseCSVToJson, totalByWeek } from '../../utils/parser';
import { IProductionLog } from '../../interfaces';

type Props = {
  mode: string;
  toggleOverviewMode: () => void;
  productionLogs: IProductionLog[];
};

interface WeeklyTotal {
  total: number;
  weekEnd: string;
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  interaction: {
    mode: 'nearest' as const,
    axis: 'x' as const,
    intersect: false,
  },
};

const OverviewContent = ({ mode, toggleOverviewMode, productionLogs }: Props) => {
  const { state } = useGeneralContext();

  const [downtimeData, setDowntimeData] = useState<number[]>([]);
  const [downtimeLabels, setDowntimeLabels] = useState<string[]>([]);

  useEffect(() => {
    parseCSVToJson('/data/downtime.csv')
      .then((jsonData) => {
        const weeklyTotals: WeeklyTotal[] = totalByWeek(jsonData);

        weeklyTotals.sort((a, b) => a.weekEnd.localeCompare(b.weekEnd));

        const lastFiveWeeks = weeklyTotals.slice(-5);
        const lastFourWeeks = lastFiveWeeks.slice(0, 4);

        setDowntimeData(lastFourWeeks.map((wt) => wt.total / 60));
        setDowntimeLabels(lastFourWeeks.map((wt) => wt.weekEnd));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const convertToUSFormat = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-').map(Number);

    const formattedMonth = month < 10 ? `0${month}` : month.toString();
    const formattedDay = day < 10 ? `0${day}` : day.toString();

    return `${formattedMonth}/${formattedDay}/${year}`;
  };

  const lastFourWeeksProductionLogs = productionLogs?.slice(-5, -1).map((log) => ({
    ...log,
    weekOf: convertToUSFormat(log.weekOf),
  }));

  const actualToQuoted = lastFourWeeksProductionLogs?.map(
    (log) => (log.properties.actualHours || 0) / (log.properties.quotedHours || 1)
  );

  const indirectToTotal = lastFourWeeksProductionLogs?.map(
    (log) => (log.properties.indirectHours || 0) / (log.properties.totalHours || 1)
  );

  const dataSets = {
    output: {
      labels: lastFourWeeksProductionLogs?.map((log) => log.weekOf) || [],
      datasets: [
        {
          type: 'line',
          label: 'Goal',
          data: lastFourWeeksProductionLogs?.map((log) => log.properties.outputGoal) || [],
          backgroundColor: 'transparent',
          borderColor: '#000000',
          borderWidth: 2,
          borderDash: [5, 5],
          tension: 0.4,
          pointBackgroundColor: 'white',
          pointBorderWidth: 2,
          fill: false,
        },
        {
          type: 'bar',
          label: 'Projected',
          data: lastFourWeeksProductionLogs?.map((log) => log.properties.projectedOutput) || [],
          backgroundColor: '#e5e7eb',
          borderColor: '#9ca3af',
          borderWidth: 2,
          tension: 0.4,
          pointBackgroundColor: 'white',
          pointBorderWidth: 2,
          fill: true,
        },
        {
          type: 'bar',
          label: 'Actual',
          data: lastFourWeeksProductionLogs?.map((log) => log.properties.actualOutput) || [],
          backgroundColor: '#93c5fd',
          borderColor: '#3b82f6',
          borderWidth: 2,
          tension: 0.4,
          pointBackgroundColor: 'white',
          pointBorderWidth: 2,
          fill: true,
        },
      ],
    },
    quotedHours: {
      labels: lastFourWeeksProductionLogs?.map((log) => log.weekOf) || [],
      datasets: [
        {
          type: 'line',
          label: 'Goal',
          data: lastFourWeeksProductionLogs?.map(() => 1) || [],
          backgroundColor: 'transparent',
          borderColor: '#000000',
          borderWidth: 2,
          borderDash: [5, 5],
          spanGaps: true,
          fill: false,
        },
        {
          type: 'bar',
          label: 'Actual : Quoted',
          data: actualToQuoted || [],
          backgroundColor: '#93c5fd',
          borderColor: '#3b82f6',
          borderWidth: 2,
          tension: 0.4,
          fill: false,
        },
      ],
    },
    indirectHours: {
      labels: lastFourWeeksProductionLogs?.map((log) => log.weekOf) || [],
      datasets: [
        {
          type: 'bar',
          label: 'Indirect : Total',
          data: indirectToTotal || [],
          backgroundColor: '#93c5fd',
          borderColor: '#3b82f6',
          borderWidth: 2,
          tension: 0.4,
          fill: false,
        },
      ],
    },
    downtime: {
      labels: downtimeLabels.map((label) => convertToUSFormat(label)),
      datasets: [
        {
          type: 'line',
          label: 'Total',
          data: downtimeData,
          backgroundColor: '#93c5fd',
          borderColor: '#3b82f6',
          borderWidth: 2,
          tension: 0.4,
          pointBackgroundColor: 'white',
          pointBorderWidth: 2,
          fill: true,
        },
      ],
    },
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && state.displayMode === 'production-display') {
        toggleOverviewMode();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [mode, toggleOverviewMode]);

  const renderOverview = () => (
    <div className='flex flex-col gap-4'>
      <div className='bg-white rounded-lg p-4 h-[500px] shadow-md'>
        <LineChart
          title='Weekly Shipments'
          data={dataSets.output}
          options={options}
        />
      </div>
      <div className='bg-white rounded-lg p-4 h-[500px] shadow-md'>
        <ComboChart
          title='Unscheduled Downtime (Hours)'
          data={dataSets.downtime}
          options={options}
        />
      </div>
      <div className='bg-white rounded-lg p-4 h-[500px] shadow-md'>
        <ComboChart
          title='Actual : Quoted (Hours)'
          data={dataSets.quotedHours}
          options={options}
        />
      </div>
      <div className='bg-white rounded-lg p-4 h-[500px] shadow-md'>
        <ComboChart
          title='Indirect : Total (Hours)'
          data={dataSets.indirectHours}
          options={options}
        />
      </div>
    </div>
  );

  const renderDisplay = () => (
    <div className='fixed inset-0 z-50 flex flex-col gap-4 h-screen w-full p-4 bg-gray-100'>
      <h1 className='text-center font-semibold text-2xl'>Three M Tool & Machine</h1>
      <div className='flex gap-4 h-1/2'>
        <div className='flex-1 bg-white rounded-lg p-4 shadow-md'>
          <ComboChart
            title='Weekly Shipments'
            data={dataSets.output}
            options={options}
          />
        </div>
        <div className='flex-1 bg-white rounded-lg p-4 shadow-md text-gray-400 flex items-center justify-center flex-col'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 256 256'
            className='h-28'>
            <path d='M224,64H32A16,16,0,0,0,16,80v72a16,16,0,0,0,16,16H56v32a8,8,0,0,0,16,0V168H184v32a8,8,0,0,0,16,0V168h24a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64Zm0,64.69L175.31,80H224ZM80.69,80l72,72H103.31L32,80.69V80ZM32,103.31,80.69,152H32ZM224,152H175.31l-72-72h49.38L224,151.32V152Z'></path>
          </svg>
          <h1 className='text-gray-800 text-xl font-semibold'>Under Construction</h1>
        </div>
      </div>
      <div className='flex gap-4 h-1/2'>
        <div className='flex-1 bg-white rounded-lg p-4 shadow-md'>
          <ComboChart
            title='Actual : Quoted (Hours)'
            data={dataSets.quotedHours}
            options={options}
          />
        </div>
        <div className='flex-1 bg-white rounded-lg p-4 shadow-md'>
          <ComboChart
            title='Indirect : Total (Hours)'
            data={dataSets.indirectHours}
            options={options}
          />
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (state.displayMode) {
      case 'general':
        return renderOverview();
      case 'production-display':
        return renderDisplay();
      default:
        return <div>Mode not found</div>;
    }
  };

  return renderContent();
};

export default OverviewContent;
