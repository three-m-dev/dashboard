/* eslint-disable */
import { useEffect } from 'react';
import ComboChart from '../charts/ComboChart';
import { LineChart } from '..';
import { useGeneralContext } from '../../hooks/useGeneralContext';
import { IProductionLog } from '../../interfaces';
import { formatISO } from '../../utils/formatter';

type Props = {
  mode: string;
  toggleOverviewMode: () => void;
  productionLogData: any;
};

const OverviewContent = ({ mode, toggleOverviewMode, productionLogData }: Props) => {
  const { state } = useGeneralContext();
  // const [activeSection, setActiveSection] = useState(1);

  const getLastFourWeeks = (logs: IProductionLog[]) => {
    return logs.slice(-5, -1);
  };

  const getActualToQuoted = (lastFourWeeks: IProductionLog[]) => {
    return lastFourWeeks.map((log) => (log.properties.actualHours || 0) / (log.properties.quotedHours || 1));
  };

  const getIndirectToTotal = (lastFourWeeks: IProductionLog[]) => {
    return lastFourWeeks.map((log) => (log.properties.indirectHours || 0) / (log.properties.totalHours || 1));
  };

  const options = {
    general: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 1,
        },
      },
      interaction: {
        mode: 'nearest' as const,
        axis: 'x' as const,
        intersect: false,
      },
    },
    output: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 1,
          title: {
            display: true,
            text: 'USD',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Week Of',
          },
        },
      },
      interaction: {
        mode: 'nearest' as const,
        axis: 'x' as const,
        intersect: false,
      },
    },
    onTimeDelivery: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 100,
          title: {
            display: true,
            text: 'Percentage',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Week Of',
          },
        },
      },
      interaction: {
        mode: 'nearest' as const,
        axis: 'x' as const,
        intersect: false,
      },
    },
    actualHours: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 1,
          title: {
            display: true,
            text: 'Ratio',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Week Of',
          },
        },
      },
      interaction: {
        mode: 'nearest' as const,
        axis: 'x' as const,
        intersect: false,
      },
    },
    quotedHours: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 1,
          title: {
            display: true,
            text: 'Ratio',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Week Of',
          },
        },
      },
      interaction: {
        mode: 'nearest' as const,
        axis: 'x' as const,
        intersect: false,
      },
    },
  };

  const dataSets = {
    threeM: {
      output: {
        labels: getLastFourWeeks(productionLogData?.threeM.productionLogs).map((log) => formatISO(log.weekOf)) || [],
        datasets: [
          {
            type: 'line',
            label: 'Goal',
            data:
              getLastFourWeeks(productionLogData?.threeM.productionLogs).map((log) => log.properties.outputGoal) || [],
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
            data:
              getLastFourWeeks(productionLogData?.threeM.productionLogs).map((log) => log.properties.projectedOutput) ||
              [],
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
            data:
              getLastFourWeeks(productionLogData?.threeM.productionLogs).map((log) => log.properties.actualOutput) ||
              [],
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
      onTimeDelivery: {
        labels: getLastFourWeeks(productionLogData?.threeM.productionLogs).map((log) => formatISO(log.weekOf)) || [],
        datasets: [
          {
            type: 'line',
            label: 'Goal',
            data: getLastFourWeeks(productionLogData?.threeM.productionLogs).map(() => 70) || [],
            backgroundColor: 'transparent',
            borderColor: '#000000',
            borderWidth: 2,
            borderDash: [5, 5],
            spanGaps: true,
            fill: false,
          },
          {
            type: 'bar',
            label: 'OTD %',
            data:
              getLastFourWeeks(productionLogData?.threeM.productionLogs).map(
                (log) => log.properties.onTimeDeliveryRate * 100
              ) || [],
            backgroundColor: '#93c5fd',
            borderColor: '#3b82f6',
            borderWidth: 2,
            tension: 0.4,
            fill: false,
          },
        ],
      },
      quotedHours: {
        labels: getLastFourWeeks(productionLogData?.threeM.productionLogs).map((log) => formatISO(log.weekOf)) || [],
        datasets: [
          {
            type: 'line',
            label: 'Goal',
            data: getLastFourWeeks(productionLogData?.threeM.productionLogs).map(() => 1) || [],
            backgroundColor: 'transparent',
            borderColor: '#000000',
            borderWidth: 2,
            borderDash: [5, 5],
            spanGaps: true,
            fill: false,
          },
          {
            type: 'bar',
            label: 'Actual to Quoted',
            data: getActualToQuoted(getLastFourWeeks(productionLogData?.threeM.productionLogs)) || [],
            backgroundColor: '#93c5fd',
            borderColor: '#3b82f6',
            borderWidth: 2,
            tension: 0.4,
            fill: false,
          },
        ],
      },
      indirectHours: {
        labels: getLastFourWeeks(productionLogData?.threeM.productionLogs).map((log) => formatISO(log.weekOf)) || [],
        datasets: [
          {
            type: 'bar',
            label: 'Indirect to Total',
            data: getIndirectToTotal(getLastFourWeeks(productionLogData?.threeM.productionLogs)) || [],
            backgroundColor: '#93c5fd',
            borderColor: '#3b82f6',
            borderWidth: 2,
            tension: 0.4,
            fill: false,
          },
        ],
      },
    },
    ultraGrip: {
      output: {
        labels: getLastFourWeeks(productionLogData?.ultraGrip.productionLogs).map((log) => formatISO(log.weekOf)) || [],
        datasets: [
          {
            type: 'line',
            label: 'Goal',
            data:
              getLastFourWeeks(productionLogData?.ultraGrip.productionLogs).map((log) => log.properties.outputGoal) ||
              [],
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
            data:
              getLastFourWeeks(productionLogData?.ultraGrip.productionLogs).map(
                (log) => log.properties.projectedOutput
              ) || [],
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
            data:
              getLastFourWeeks(productionLogData?.ultraGrip.productionLogs).map((log) => log.properties.actualOutput) ||
              [],
            backgroundColor: '#fca5a5',
            borderColor: '#ef4444',
            borderWidth: 2,
            tension: 0.4,
            pointBackgroundColor: 'white',
            pointBorderWidth: 2,
            fill: true,
          },
        ],
      },
      onTimeDelivery: {
        labels: getLastFourWeeks(productionLogData?.ultraGrip.productionLogs).map((log) => formatISO(log.weekOf)) || [],
        datasets: [
          {
            type: 'line',
            label: 'Goal',
            data: getLastFourWeeks(productionLogData?.ultraGrip.productionLogs).map(() => 0.7) || [],
            backgroundColor: 'transparent',
            borderColor: '#000000',
            borderWidth: 2,
            borderDash: [5, 5],
            spanGaps: true,
            fill: false,
          },
          {
            type: 'bar',
            label: 'OTD %',
            data: getIndirectToTotal(getLastFourWeeks(productionLogData?.ultraGrip.productionLogs)) || [],
            backgroundColor: '#fca5a5',
            borderColor: '#ef4444',
            borderWidth: 2,
            tension: 0.4,
            fill: false,
          },
        ],
      },
      quotedHours: {
        labels: getLastFourWeeks(productionLogData?.ultraGrip.productionLogs).map((log) => formatISO(log.weekOf)) || [],
        datasets: [
          {
            type: 'line',
            label: 'Goal',
            data: getLastFourWeeks(productionLogData?.ultraGrip.productionLogs).map(() => 1) || [],
            backgroundColor: 'transparent',
            borderColor: '#000000',
            borderWidth: 2,
            borderDash: [5, 5],
            spanGaps: true,
            fill: false,
          },
          {
            type: 'bar',
            label: 'Actual to Quoted',
            data: getActualToQuoted(getLastFourWeeks(productionLogData?.ultraGrip.productionLogs)) || [],
            backgroundColor: '#fca5a5',
            borderColor: '#ef4444',
            borderWidth: 2,
            tension: 0.4,
            fill: false,
          },
        ],
      },
      indirectHours: {
        labels: getLastFourWeeks(productionLogData?.ultraGrip.productionLogs).map((log) => formatISO(log.weekOf)) || [],
        datasets: [
          {
            type: 'bar',
            label: 'Indirect to Total',
            data: getIndirectToTotal(getLastFourWeeks(productionLogData?.ultraGrip.productionLogs)) || [],
            backgroundColor: '#fca5a5',
            borderColor: '#ef4444',
            borderWidth: 2,
            tension: 0.4,
            fill: false,
          },
        ],
      },
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveSection((prevActiveSection) => (prevActiveSection === 1 ? 2 : 1));
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, []);

  const renderOverview = () => (
    <div className='flex flex-col gap-4'>
      <div className='bg-white rounded-lg p-4 h-[500px] shadow-md'>
        <LineChart
          title='Weekly Shipments (USD)'
          data={dataSets.threeM.output}
          options={options.output}
        />
      </div>
      <div className='bg-white rounded-lg p-4 h-[500px] shadow-md'>
        <ComboChart
          title='On Time Delivery Rate'
          data={dataSets.threeM.onTimeDelivery}
          options={options.onTimeDelivery}
        />
      </div>
      <div className='bg-white rounded-lg p-4 h-[500px] shadow-md'>
        <ComboChart
          title='Actual to Quoted Ratio (Hours)'
          data={dataSets.threeM.quotedHours}
          options={options.quotedHours}
        />
      </div>
      <div className='bg-white rounded-lg p-4 h-[500px] shadow-md'>
        <ComboChart
          title='Indirect to Total Ratio (Hours)'
          data={dataSets.threeM.indirectHours}
          options={options.actualHours}
        />
      </div>
    </div>
  );

  const renderDisplay = () => (
    <div className='fixed inset-0 z-50 flex flex-col gap-4 h-screen w-full p-4 bg-gray-100'>
      <>
        <h1 className='text-center font-semibold text-2xl'>Three M Tool & Machine</h1>
        <div className='flex gap-4 h-1/2'>
          <div className='flex-1 bg-white rounded-lg p-4 shadow-md'>
            <ComboChart
              title='Weekly Shipments (USD)'
              data={dataSets.threeM.output}
              options={options.output}
            />
          </div>
          <div className='flex-1 bg-white rounded-lg p-4 shadow-md'>
            <ComboChart
              title='On Time Delivery Rate'
              data={dataSets.threeM.onTimeDelivery}
              options={options.onTimeDelivery}
            />
          </div>
        </div>
        <div className='flex gap-4 h-1/2'>
          <div className='flex-1 bg-white rounded-lg p-4 shadow-md'>
            <ComboChart
              title='Actual to Quoted Ratio (Hours)'
              data={dataSets.threeM.quotedHours}
              options={options.quotedHours}
            />
          </div>
          <div className='flex-1 bg-white rounded-lg p-4 shadow-md'>
            <ComboChart
              title='Indirect to Total Ratio (Hours)'
              data={dataSets.threeM.indirectHours}
              options={options.actualHours}
            />
          </div>
        </div>
      </>

      {/* {activeSection === 2 && (
        <>
          <h1 className='text-center font-semibold text-2xl'>Ultra Grip International</h1>
          <div className='flex gap-4 h-1/2'>
            <div className='flex-1 bg-white rounded-lg p-4 shadow-md'>
              <ComboChart
                title='Weekly Shipments'
                data={dataSets.ultraGrip.output}
                options={options.general}
              />
            </div>
            <div className='flex-1 bg-white rounded-lg p-4 shadow-md'>
              <ComboChart
                title='On Time Delivery'
                data={dataSets.ultraGrip.onTimeDelivery}
                options={options.general}
              />
            </div>
          </div>
          <div className='flex gap-4 h-1/2'>
            <div className='flex-1 bg-white rounded-lg p-4 shadow-md'>
              <ComboChart
                title='Actual : Quoted (Hours)'
                data={dataSets.ultraGrip.quotedHours}
                options={options.general}
              />
            </div>
            <div className='flex-1 bg-white rounded-lg p-4 shadow-md'>
              <ComboChart
                title='Indirect : Total (Hours)'
                data={dataSets.ultraGrip.indirectHours}
                options={options.general}
              />
            </div>
          </div>
        </>
      )} */}
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
