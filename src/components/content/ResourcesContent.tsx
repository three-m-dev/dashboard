import { useState } from 'react';
// import { LineChart } from '..';

const mockMachines = [
  { id: 'R101', type: 'Lathe', data: [65, 59, 80, 81, 56, 55] },
  { id: 'R102', type: 'Milling Machine', data: [45, 79, 60, 81, 76, 85] },
];

const ResourcesContent = () => {
  const [selectedMachine, setSelectedMachine] = useState(mockMachines[0]);

  // const data = {
  //   labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00'],
  //   datasets: [
  //     {
  //       label: `Power Draw - ${selectedMachine.id}`,
  //       data: selectedMachine.data,
  //       fill: false,
  //       borderColor: 'rgb(75, 192, 192)',
  //       tension: 0.1,
  //     },
  //   ],
  // };

  return (
    <div className='flex h-full'>
      {/* <div className='w-3/4 p-4'>
        <LineChart data={data} />
      </div> */}
      <div className='w-1/4 overflow-auto'>
        {mockMachines.map((machine) => (
          <div
            key={machine.id}
            className={`flex flex-col items-center bg-white rounded-lg shadow p-4 m-2 cursor-pointer ${machine.id === selectedMachine.id ? 'bg-blue-100' : ''}`}
            onClick={() => setSelectedMachine(machine)}>
            <div className='text-lg font-semibold'>{machine.id}</div>
            <div className='text-sm text-gray-600'>{machine.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesContent;
