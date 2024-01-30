type DowntimeRecord = {
  id: string;
  date: string;
  duration: string;
  reason: string;
};

const sampleDowntimeData: DowntimeRecord[] = [
  { id: '1', date: '2024-01-20', duration: '2 hours', reason: 'System Maintenance' },
  { id: '2', date: '2024-01-15', duration: '3 hours', reason: 'Network Outage' },
  { id: '3', date: '2024-01-10', duration: '1 hour', reason: 'Hardware Upgrade' },
];

const DowntimeContent = () => {
  const columns = ['Date', 'Duration', 'Reason'];

  return (
    <div>
      <table className='min-w-full'>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className='px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sampleDowntimeData.map((record) => (
            <tr key={record.id}>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>{record.date}</td>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>{record.duration}</td>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>{record.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DowntimeContent;
