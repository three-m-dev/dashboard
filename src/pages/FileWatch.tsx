/* eslint-disable */
import { useState } from 'react';
import { Layout, PageHeader, Table, Modal } from '../components';

const FileWatch = () => {
  const [currentTab, setCurrentTab] = useState('watch-list');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState('');
  const [selectedAction, setSelectedAction] = useState('');
  const [watchedFiles] = useState([
    { id: '1', path: '/folder1/file1.xlsx', lastModified: '2024-01-20', action: 'Save to Database' },
    { id: '2', path: '/folder2/file2.xlsx', lastModified: '2024-01-15', action: 'Send Alert Email' },
  ]);

  const sampleFolders = {
    '/folder1': ['file1.xlsx', 'file2.docx'],
    '/folder2': ['file3.xlsx', 'file4.pdf'],
  };

  const watchActions = ['Save to Database', 'Send Alert Email', 'Log Event', 'Trigger Script'];

  const tabs = [
    {
      name: 'watch-list',
      buttons: [
        {
          label: 'Add Watch',
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
          },
        },
      ],
    },
    { name: 'activity-log', buttons: [] },
  ];

  const tableFields = ['path', 'lastModified', 'action'];
  const tableActions: any = [];

  const handleTabChange = (tabName: any) => {
    setCurrentTab(tabName);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Selected file:', selectedPath, 'Action:', selectedAction);
    setIsModalOpen(false);
  };

  const handleFolderSelect = (folderPath: any) => {
    setSelectedPath(folderPath);
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'watch-list':
        return (
          <Table
            data={watchedFiles}
            fields={tableFields}
            actions={tableActions}
            pageSize={5}
          />
        );
      case 'activity-log':
        return <div>Activity Log Content</div>;
      default:
        return <div>Tab content not found</div>;
    }
  };

  return (
    <Layout>
      <PageHeader
        title='File Watch'
        tabs={tabs}
        onTabChange={handleTabChange}
      />
      {renderContent()}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}>
          <form
            onSubmit={handleSubmit}
            className='space-y-4'>
            <div>
              <label
                htmlFor='path'
                className='block text-gray-700 text-sm font-bold mb-2'>
                Select Folder
              </label>
              <div className='flex flex-wrap gap-2'>
                {Object.keys(sampleFolders).map((folder) => (
                  <button
                    key={folder}
                    type='button'
                    onClick={() => handleFolderSelect(folder)}
                    className={`py-1 px-3 rounded ${selectedPath === folder ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    {folder}
                  </button>
                ))}
              </div>
              {selectedPath && (
                <div className='mt-4'>
                  <label
                    htmlFor='file'
                    className='block text-gray-700 text-sm font-bold mb-2'>
                    Select File
                  </label>
                  <select
                    name='file'
                    id='file'
                    className='border rounded w-full py-2 px-3'
                    onChange={(e) => setSelectedPath(selectedPath + '/' + e.target.value)}>
                    <option value=''>Select a file</option>
                    {/* {sampleFolders[selectedPath].map((file: any) => (
                      <option
                        key={file}
                        value={file}>
                        {file}
                      </option>
                    ))} */}
                  </select>
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor='action'
                className='block text-gray-700 text-sm font-bold mb-2'>
                Select Action
              </label>
              <select
                name='action'
                id='action'
                className='border rounded w-full py-2 px-3'
                onChange={(e) => setSelectedAction(e.target.value)}>
                <option value=''>Select an action</option>
                {watchActions.map((action) => (
                  <option
                    key={action}
                    value={action}>
                    {action}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex justify-end'>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>
                Add Watch
              </button>
            </div>
          </form>
        </Modal>
      )}
    </Layout>
  );
};

export default FileWatch;
