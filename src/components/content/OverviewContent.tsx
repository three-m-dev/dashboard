/* eslint-disable */
import { useEffect, useState } from 'react';
import ComboChart from '../charts/ComboChart';
import { LineChart } from '..';
import { useGeneralContext } from '../../hooks/useGeneralContext';
import useGetProductionLogs from '../../hooks/useGetProductionLogs';
import { parseCSVToJson, totalByWeek } from '../../utils/parser';

type Props = {
  mode: string;
  toggleOverviewMode: () => void;
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

const OverviewContent = ({ mode, toggleOverviewMode }: Props) => {
  const { state } = useGeneralContext();

  const { productionLogData } = useGetProductionLogs();

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

  const lastFourWeeksProductionLogs = productionLogData?.productionLogs?.slice(-5, -1).map((log) => ({
    ...log,
    weekOf: convertToUSFormat(log.weekOf),
  }));

  const actualToQuoted = lastFourWeeksProductionLogs?.map((log) => (log.actualHours || 0) / (log.quotedHours || 1));

  const indirectToTotal = lastFourWeeksProductionLogs?.map((log) => (log.indirectHours || 0) / (log.totalHours || 1));

  const dataSets = {
    output: {
      labels: lastFourWeeksProductionLogs?.map((log) => log.weekOf) || [],
      datasets: [
        {
          type: 'line',
          label: 'Goal',
          data: lastFourWeeksProductionLogs?.map((log) => log.outputGoal) || [],
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
          data: lastFourWeeksProductionLogs?.map((log) => log.projectedOutput) || [],
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
          data: lastFourWeeksProductionLogs?.map((log) => log.actualOutput) || [],
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
            <path d='M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z'></path>
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
