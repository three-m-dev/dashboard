import { Table } from '..';

const jobOpenings = [
  { id: '1', title: 'Software Engineer', department: 'Engineering', location: 'New York', type: 'Full-Time' },
  { id: '2', title: 'Product Manager', department: 'Product', location: 'Remote', type: 'Full-Time' },
  { id: '3', title: 'Graphic Designer', department: 'Marketing', location: 'San Francisco', type: 'Part-Time' },
];

const OpeningsContent = () => {
  const fields = ['title', 'department', 'location', 'type'];

  const viewDetailsAction = {
    type: 'button',
    text: 'View Details',
    icon: '🔍',
    onClick: (item: any) => {
      console.log('Viewing details for:', item);
    },
  };

  return (
    <div>
      <Table
        data={jobOpenings}
        fields={fields}
        actions={[viewDetailsAction]}
        pageSize={5}
      />
    </div>
  );
};

export default OpeningsContent;
