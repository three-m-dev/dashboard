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

  const actualToQuoted = productionLogData?.productionLogs.map(
    (log) => (log.actualHours || 0) / (log.quotedHours || 1)
  );

  const indirectToTotal = productionLogData?.productionLogs.map(
    (log) => (log.indirectHours || 0) / (log.totalHours || 1)
  );

  const dataSets = {
    output: {
      labels: productionLogData?.productionLogs.map((log) => convertToUSFormat(log.weekOf)) || [],
      datasets: [
        {
          type: 'line',
          label: 'Goal',
          data: productionLogData?.productionLogs.map((log) => log.outputGoal) || [],
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
          type: 'line',
          label: 'Actual',
          data: productionLogData?.productionLogs.map((log) => log.actualOutput) || [],
          backgroundColor: '#93c5fd',
          borderColor: '#3b82f6',
          borderWidth: 2,
          tension: 0.4,
          pointBackgroundColor: 'white',
          pointBorderWidth: 2,
          fill: true,
        },
        {
          type: 'line',
          label: 'Projected',
          data: productionLogData?.productionLogs.map((log) => log.projectedOutput) || [],
          backgroundColor: '#e5e7eb',
          borderColor: '#9ca3af',
          borderWidth: 2,
          tension: 0.4,
          pointBackgroundColor: 'white',
          pointBorderWidth: 2,
          fill: true,
        },
      ],
    },
    quotedHours: {
      labels: productionLogData?.productionLogs.map((log) => convertToUSFormat(log.weekOf)) || [],
      datasets: [
        {
          type: 'line',
          label: 'Goal',
          data: productionLogData?.productionLogs.map(() => 1) || [],
          backgroundColor: '#e5e7eb',
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
      labels: productionLogData?.productionLogs.map((log) => convertToUSFormat(log.weekOf)) || [],
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
          label: 'Total (Hours)',
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
      <div className='bg-white rounded-lg p-4 h-[500px]'>
        <LineChart
          title='Weekly Output'
          data={dataSets.output}
          options={options}
        />
      </div>
      <div className='bg-white rounded-lg p-4 h-[500px]'>
        <ComboChart
          title='Unscheduled Downtime'
          data={dataSets.downtime}
          options={options}
        />
      </div>
      <div className='bg-white rounded-lg p-4 h-[500px]'>
        <ComboChart
          title='Actual : Quoted (Hours)'
          data={dataSets.quotedHours}
          options={options}
        />
      </div>
      <div className='bg-white rounded-lg p-4 h-[500px]'>
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
      <div className='flex gap-4 h-1/2'>
        <div className='flex-1 bg-white rounded-lg p-4'>
          <ComboChart
            title='Weekly Output'
            data={dataSets.output}
            options={options}
          />
        </div>
        <div className='flex-1 bg-white rounded-lg p-4'>
          <ComboChart
            title='Unscheduled Downtime'
            data={dataSets.downtime}
            options={options}
          />
        </div>
      </div>
      <div className='flex gap-4 h-1/2'>
        <div className='flex-1 bg-white rounded-lg p-4'>
          <ComboChart
            title='Actual : Quoted (Hours)'
            data={dataSets.quotedHours}
            options={options}
          />
        </div>
        <div className='flex-1 bg-white rounded-lg p-4'>
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
