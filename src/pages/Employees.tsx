import { useState } from 'react';
import { Layout, PageHeader, Table, OrgChart, EmployeeForm } from '../components';

const Employees = () => {
  const employees = [
    { id: '1', name: 'Sam Medwid', directReportId: '0' },
    { id: '2', name: 'Jamie Headley', directReportId: '1' },
    { id: '3', name: "Dan O'Connell", directReportId: '2' },
    { id: '4', name: 'Erika Miu', directReportId: '2' },
    { id: '5', name: 'Employee 1', directReportId: '3' },
    { id: '6', name: 'Employee 2', directReportId: '4' },
    { id: '7', name: 'Joseph Mattord', directReportId: '2' },
    { id: '8', name: 'Employee 3', directReportId: '7' },
    { id: '9', name: 'Employee 4', directReportId: '7' },
    { id: '10', name: 'Manager D', directReportId: '2' },
    { id: '11', name: 'Employee 5', directReportId: '10' },
  ];

  const tabs = [
    {
      name: 'employees',
      buttons: [
        {
          label: 'Add Employee',
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
          onClick: () => {
            setIsModalOpen(true);
            setModalMode('add');
          },
        },
      ],
    },
    { name: 'org-chart', buttons: [] },
  ];

  const [currentTab, setCurrentTab] = useState('employees');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName);
  };

  const sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ];

  const fields = ['id', 'name', 'email'];

  const actions = [
    {
      type: 'edit',
      text: 'Edit',
      icon: '🖊',
      onClick: (item: any) => {
        console.log('Edit', item);
        setIsModalOpen(true);
        setModalMode('edit');
      },
    },
    {
      type: 'delete',
      text: 'Delete',
      icon: '🗑',
      onClick: (item: any) => {
        console.log('Delete', item);
      },
    },
  ];

  const pageSize = 5;

  const renderContent = () => {
    switch (currentTab) {
      case 'employees':
        return (
          <>
            <Table
              data={sampleData}
              fields={fields}
              actions={actions}
              pageSize={pageSize}
            />
            {isModalOpen && (
              <EmployeeForm
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                modalMode={modalMode}
              />
            )}
          </>
        );
      case 'org-chart':
        return <OrgChart employees={employees} />;
      default:
        return <div>Tab content not found</div>;
    }
  };

  return (
    <Layout>
      <PageHeader
        title='Employees'
        tabs={tabs}
        onTabChange={handleTabChange}
      />
      {renderContent()}
    </Layout>
  );
};

export default Employees;
