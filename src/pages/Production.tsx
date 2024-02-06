import { useCallback, useEffect, useState } from 'react';
import { DowntimeContent, Layout, Modal, ResourcesContent } from '../components';
import PageHeader from '../components/general/PageHeader';
import OverviewContent from '../components/content/OverviewContent';
import Loading from '../components/general/Loading';
import { useGeneralContext } from '../hooks/useGeneralContext';
import useGetProductionLogs from '../hooks/useGetProductionLogs';
import { formatKebabCaseToCapital } from '../utils/formatter';

const Production = () => {
  const { state, setState } = useGeneralContext();
  const [currentTab, setCurrentTab] = useState('overview');

  const [logsModalOpen, setLogsModalOpen] = useState(false);
  const [dateRangeDropdownOpen, setDateRangeDropdownOpen] = useState(false);

  const [logsModalMode, setLogsModalMode] = useState('view');

  const [logsModalTab, setLogsModalTab] = useState('three-m');

  const { productionLogData } = useGetProductionLogs();

  const toggleOverviewMode = useCallback(() => {
    const newDisplayMode = state.displayMode === 'production-display' ? 'general' : 'production-display';
    setState({
      ...state,
      displayMode: newDisplayMode,
    });
  }, [setState, state]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if ((event.key === 'D' || event.key === 'd') && state.displayMode === 'general') {
        console.log('Open');
        toggleOverviewMode();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [state.displayMode, toggleOverviewMode]);

  const loading = false;

  if (loading) {
    return (
      <div className='flex h-screen w-full justify-center items-center'>
        <Loading size='large' />
      </div>
    );
  }

  const toggleLogsModal = () => {
    setLogsModalMode('view');
    setLogsModalOpen(!logsModalOpen);
  };

  const toggleDateRangeDropdown = () => {
    setDateRangeDropdownOpen(!dateRangeDropdownOpen);
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
          onClick: () => toggleOverviewMode(),
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
        {
          label: 'Date Range',
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
                d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'
              />
            </svg>
          ),
          onClick: () => toggleDateRangeDropdown(),
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

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName);
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'overview':
        if (productionLogData) {
          return (
            <OverviewContent
              mode={state.displayMode}
              toggleOverviewMode={toggleOverviewMode}
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

  // const handleProductionLogCreation = () => {};

  // const handleProductionLogUpdate = () => {};

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
          {logsModalMode === 'view' && (
            <div className='flex flex-col mt-4'>
              <table className='min-w-full divide-y divide-gray-200 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
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
                  {productionLogData.threeM.productionLogs.map((log: any, index: number) => (
                    <tr key={index}>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {formatKebabCaseToCapital(log.company)}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{log.weekOf}</td>
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

                  {/* {productionLogData?.productionLogs.map((log, index) => (
										<tr key={index}>
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
												{formatKebabCaseToCapital(log.company)}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.weekOf}</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{log.properties.projectedOutput}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{log.properties.actualOutput}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{log.properties.onTimeDeliveryRate}
											</td>
										</tr>
									))} */}
                </tbody>
              </table>

              <div className='flex justify-end mt-4'>
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

          {logsModalMode === 'add' && (
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              <div className='col-span-2'>
                <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>Company</label>
                <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                  <option>Select Company</option>
                  <option value='three-m'>Three M</option>
                  <option value='ultra-grip'>Ultra Grip</option>
                </select>
              </div>

              <div className='col-span-2'>
                <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>Week Of</label>
                <input
                  type='date'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                />
              </div>

              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>Shipment Goal</label>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
              </div>

              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>
                  Projected Shipments
                </label>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
              </div>

              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>
                  Actual Shipments
                </label>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
              </div>

              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>
                  On Time Delivery
                </label>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
              </div>

              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>Quoted Hours</label>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
              </div>

              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>Actual Hours</label>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
              </div>

              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>Indirect Hours</label>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
              </div>

              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>Total Hours</label>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
              </div>

              <div className='col-span-1 md:col-span-2 lg:col-span-4 flex gap-2 justify-end'>
                <button
                  onClick={() => {
                    setLogsModalMode('view');
                  }}
                  className='flex gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none'>
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setLogsModalMode('view');
                  }}
                  className='flex gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none'>
                  Save
                </button>
              </div>
            </div>
          )}
        </Modal>
      )}
      {renderContent()}
    </Layout>
  );
};

export default Production;
