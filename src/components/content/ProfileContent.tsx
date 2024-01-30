const ProfileContent = () => {
  const profileData = {
    name: 'David Williams',
    role: 'Business Analyst',
    id: '4059732',
    phone: '(617) 5555-0331',
    email: 'davidwilliam@gmail.com',
    location: 'Cambridge, United States',
    status: 'Active: 2 days ago',
    joiningDate: 'Jan 01, 2023',
    accessRole: 'Admin',
    department: 'Product',
    shift: '9am - 5pm - 1 hour flexibility',
    employmentType: 'On-Site',
    manager: 'Akram Durrani',
    contractType: 'Fixed term',
    contractPeriod: '2 years',
    startDate: 'July 05, 2022',
    endDate: 'July 06, 2024',
    attachment: 'Alex employment contract.pdf',
  };

  return (
    <div className=' mx-auto bg-white rounded-lg shadow overflow-hidden'>
      <div className='px-4 py-5 sm:p-6'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 bg-gray-300 text-white text-xl rounded-full h-14 w-14 flex items-center justify-center'>
            DW
          </div>
          <div className='ml-4'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>{profileData.name}</h3>
            <p className='text-sm text-gray-500'>
              {profileData.role} - {profileData.id}
            </p>
            <p className='text-sm text-gray-500'>{profileData.phone}</p>
            <p className='text-sm text-gray-500'>{profileData.email}</p>
            <p className='text-sm text-gray-500'>{profileData.location}</p>
            <p className='text-sm text-green-500'>{profileData.status}</p>
          </div>
        </div>
        <div className='border-t border-gray-200'>
          <div className='flex justify-between items-center mt-3'>
            <div>
              <h4 className='text-sm font-bold text-gray-900'>General Information</h4>
              <ul className='mt-2'>
                <li className='text-sm text-gray-500'>Joining Date: {profileData.joiningDate}</li>
                <li className='text-sm text-gray-500'>Access Role: {profileData.accessRole}</li>
                <li className='text-sm text-gray-500'>Department: {profileData.department}</li>
                <li className='text-sm text-gray-500'>Shift: {profileData.shift}</li>
                <li className='text-sm text-gray-500'>Employment Type: {profileData.employmentType}</li>
                <li className='text-sm text-gray-500'>Manager: {profileData.manager}</li>
              </ul>
            </div>
            <button className='text-blue-600 text-sm'>Edit</button>
          </div>
          <div className='flex justify-between items-center mt-3'>
            <div>
              <h4 className='text-sm font-bold text-gray-900'>Contact Information</h4>
              <ul className='mt-2'>
                <li className='text-sm text-gray-500'>Contract Type: {profileData.contractType}</li>
                <li className='text-sm text-gray-500'>Period: {profileData.contractPeriod}</li>
                <li className='text-sm text-gray-500'>Start Date: {profileData.startDate}</li>
                <li className='text-sm text-gray-500'>End Date: {profileData.endDate}</li>
              </ul>
            </div>
            <button className='text-blue-600 text-sm'>Edit</button>
          </div>
          <div className='mt-3'>
            <p className='text-sm text-gray-500'>
              Attachment:{' '}
              <a
                href='#'
                className='text-blue-600 underline'>
                {profileData.attachment}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
