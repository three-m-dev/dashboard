// Production.tsx
import { useCallback, useEffect, useState } from 'react';
import { DowntimeContent, Layout, Modal, ResourcesContent } from '../components';
import PageHeader from '../components/general/PageHeader';
import OverviewContent from '../components/content/OverviewContent';
import Loading from '../components/general/Loading';
import { useGeneralContext } from '../hooks/useGeneralContext';
import useGetProductionLogs from '../hooks/useGetProductionLogs';

const Production = () => {
  const { state, setState } = useGeneralContext();
  const [currentTab, setCurrentTab] = useState('overview');

  const [logsModalOpen, setLogsModalOpen] = useState(false);
  const [dateRangeDropdownOpen, setDateRangeDropdownOpen] = useState(false);

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
        return (
          <OverviewContent
            mode={state.displayMode}
            toggleOverviewMode={toggleOverviewMode}
            productionLogs={productionLogData?.productionLogs!}
          />
        );
      case 'Downtime':
        return <DowntimeContent />;
      case 'Resources':
        return <ResourcesContent />;
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <Layout>
      <PageHeader
        title='Production'
        tabs={tabs}
        onTabChange={handleTabChange}
      />
      {logsModalOpen && (
        <Modal
          isOpen={logsModalOpen}
          onClose={toggleLogsModal}>
          <div className='flex flex-col'>
            {productionLogData?.productionLogs.map((log) => (
              <div>
                {log.company} {log.weekOf}
              </div>
            ))}
          </div>
        </Modal>
      )}
      {renderContent()}
    </Layout>
  );
};

export default Production;
