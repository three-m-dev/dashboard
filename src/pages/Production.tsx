import { useEffect, useState } from 'react';
import { DowntimeContent, Layout, Modal, ResourcesContent } from '../components';
import PageHeader from '../components/general/PageHeader';
import OverviewContent from '../components/content/OverviewContent';
import Loading from '../components/general/Loading';
import { useGeneralContext } from '../hooks/useGeneralContext';
import useGetProductionLogs from '../hooks/useGetProductionLogs';
import { formatISO, formatKebab } from '../utils/formatter';
import { IProductionLog } from '../interfaces';
import ProductionLogForm from '../components/forms/ProductionLogForm';

const Production = () => {
  const [currentTab, setCurrentTab] = useState('overview');
  const [logsModalOpen, setLogsModalOpen] = useState(false);
  const [logsModalMode, setLogsModalMode] = useState('list');
  const [selectedLog, setSelectedLog] = useState<IProductionLog | null>(null);

  const { state, setState } = useGeneralContext();
  const { productionLogData } = useGetProductionLogs();

  const toggleDisplayMode = () => {
    const displayMode = state.displayMode === 'production-display' ? 'general' : 'production-display';
    setState({
      ...state,
      displayMode: displayMode,
    });
  };

  const tabs = [
    {
      name: 'overview',
      buttons: [
        {
          label: 'Display',
          icon: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z'
              />
            </svg>
          ),
          onClick: () => toggleDisplayMode(),
        },
        {
          label: 'Logs',
          icon: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
              />
            </svg>
          ),
          onClick: () => toggleLogsModal(),
        },
      ],
    },
    {
      name: 'Downtime',
      buttons: [
        {
          label: 'Add Downtime',
          icon: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
          ),
          onClick: () => console.log('Action 2 in Downtime'),
        },
      ],
    },
    {
      name: 'Resources',
      buttons: [
        {
          label: 'Add Resource',
          icon: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
          ),
          onClick: () => console.log('Action 2 in Downtime'),
        },
      ],
    },
  ];

  const renderContent = () => {
    switch (currentTab) {
      case 'overview':
        if (productionLogData) {
          return (
            <OverviewContent
              mode={state.displayMode}
              toggleOverviewMode={toggleDisplayMode}
              productionLogData={productionLogData}
            />
          );
        } else {
          return <Loading size='large' />;
        }
      case 'Downtime':
        return <DowntimeContent />;
      case 'Resources':
        return <ResourcesContent />;
      default:
        return <div>Content not found</div>;
    }
  };

  const toggleLogsModal = () => {
    setLogsModalOpen(!logsModalOpen);
    setLogsModalMode('list');
  };

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName);
  };

  const handleModalModeChange = (modalMode: string, log?: any) => {
    switch (modalMode) {
      case 'list':
        setLogsModalMode(modalMode);
        setSelectedLog(null);
        break;
      case 'add':
        setLogsModalMode(modalMode);
        break;
      case 'view':
        setLogsModalMode(modalMode);
        setSelectedLog(log);
        break;
      case 'edit':
        setLogsModalMode(modalMode);
        break;
    }
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if ((event.key === 'D' || event.key === 'd') && state.displayMode === 'general' && !logsModalOpen) {
        toggleDisplayMode();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [state.displayMode, toggleDisplayMode]);

  return (
    <Layout>
      <PageHeader
        title='Production'
        tabs={tabs}
        onTabChange={handleTabChange}
      />

      {logsModalOpen && (
        <Modal
          title='Production Log Modal'
          isOpen={logsModalOpen}
          onClose={toggleLogsModal}>
          {logsModalMode === 'list' && (
            <div className='flex flex-col mt-4'>
              <table className='min-w-full divide-y divide-gray-200 shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Company
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Week Of
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Projected Output
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Actual Output
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      On Time Delivery
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {productionLogData.threeM.productionLogs.toReversed().map((log: any, index: number) => (
                    <tr
                      key={index}
                      onClick={() => handleModalModeChange('view', log)}
                      className='hover:bg-gray-50 hover:cursor-pointer'>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {formatKebab(log.company)}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{formatISO(log.weekOf)}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {log.properties.projectedOutput}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {log.properties.actualOutput}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {log.properties.onTimeDeliveryRate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className='flex justify-between mt-4 items-center'>
                <div className='flex gap-2 items-center'>
                  <button className='flex items-center bg-gray-300 text-gray-600 h-[40px] w-[40px] justify-center rounded hover:bg-blue-200 focus:outline-none transition-all ease-in-out border-2 border-gray-400 hover:border-blue-400 hover:text-blue-500'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-5 h-5'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 19.5 8.25 12l7.5-7.5'
                      />
                    </svg>
                  </button>
                  <span className='flex h-[40px] w-[40px] justify-center items-center bg-gray-300 text-gray-600 p-2 rounded font-semibold border-2 border-gray-400'>
                    1
                  </span>
                  <button className='flex items-center bg-gray-300 text-gray-600 h-[40px] w-[40px] justify-center rounded hover:bg-blue-200 focus:outline-none transition-all ease-in-out border-2 border-gray-400 hover:border-blue-400 hover:text-blue-500'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-5 h-5'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m8.25 4.5 7.5 7.5-7.5 7.5'
                      />
                    </svg>
                  </button>
                </div>
                <button
                  onClick={() => {
                    setLogsModalMode('add');
                  }}
                  className='flex gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none'>
                  New Log
                </button>
              </div>
            </div>
          )}

          {logsModalMode === 'add' && <ProductionLogForm onClose={() => toggleLogsModal} />}

          {logsModalMode === 'view' && selectedLog !== null && (
            <>
              <div>{selectedLog.weekOf}</div>
              <div className='col-span-1 md:col-span-2 lg:col-span-4 flex gap-2 justify-end'>
                <button
                  onClick={() => handleModalModeChange('list')}
                  className='text-gray-400 font-semibold hover:text-gray-500'>
                  Go Back
                </button>
                <button
                  onClick={() => handleModalModeChange('edit')}
                  className='flex gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none'>
                  Edit
                </button>
              </div>
            </>
          )}

          {logsModalMode === 'edit' && <></>}
        </Modal>
      )}

      {renderContent()}
    </Layout>
  );
};

export default Production;
