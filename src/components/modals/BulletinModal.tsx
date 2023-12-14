type BulletinModalProps = {
  toggleBulletinModal: (mode: string, careerData?: any) => void;
};

const BulletinModal = ({ toggleBulletinModal }: BulletinModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 backdrop-blur-sm">
      <div className="relative mx-4 flex w-full flex-col rounded-md border bg-white p-5 shadow-lg sm:mx-auto sm:max-w-screen-md">
        <div className="flex items-center justify-between rounded-t border-b p-4">
          <h3 className="text-lg font-semibold text-gray-900">New Bulletin</h3>
          <button
            onClick={() => toggleBulletinModal("")}
            className="rounded-md p-2 text-gray-600 hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <input
          type="text"
          placeholder="Title"
          className="mb-4 rounded border border-gray-300 p-2"
          required
        />
        <textarea
          placeholder="Description (Optional)"
          className="mb-4 rounded border border-gray-300 p-2"
          rows={4}
        />
        <div className="mb-4">
          <div className="flex items-center justify-between rounded border border-gray-300 p-2">
            <button className="font-bold">B</button>
            <button className="italic">I</button>
            <button className="underline">U</button>
          </div>
        </div>
        <textarea
          placeholder="Content"
          className="rounded border border-gray-300 p-2"
          rows={8}
          required
        />
        <div className="mt-4 flex justify-between">
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Save and Publish
          </button>
          <button className="rounded bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BulletinModal;
