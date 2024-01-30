import { useState } from 'react';
import { Layout, PageHeader } from '../components';
import OpeningsContent from '../components/content/OpeningsContent';
import ApplicantsContent from '../components/content/ApplicantsContent';

const Careers = () => {
  const tabs = [
    {
      name: 'openings',
      buttons: [
        {
          label: 'Add Opening',
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
          onClick: () => {},
        },
      ],
    },
    {
      name: 'applicants',
      buttons: [
        {
          label: 'Add Applicant',
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
          onClick: () => {},
        },
      ],
    },
  ];

  const [currentTab, setCurrentTab] = useState('openings');

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName);
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'openings':
        return <OpeningsContent />;
      case 'applicants':
        return <ApplicantsContent />;
      default:
        return <div>Tab content not found</div>;
    }
  };

  return (
    <Layout>
      <PageHeader
        title='Careers'
        tabs={tabs}
        onTabChange={handleTabChange}
      />
      {renderContent()}
    </Layout>
  );
};

export default Careers;
