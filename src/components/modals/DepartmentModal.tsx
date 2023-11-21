import { useState } from "react";

type Props = {
  toggleModal: () => void;
};

const DepartmentModal = (props: Props) => {
  const [name, setName] = useState("");

  const isLoading = false;

  const handleSubmit = async () => {};

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 backdrop-blur-sm">
      <div className="relative mx-4 w-full rounded-md border bg-white p-5 shadow-lg sm:mx-auto sm:max-w-[384px]">
        <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            New Department
          </h3>
          <button
            onClick={props.toggleModal}
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

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Department Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>


            <button
              type="submit"
              className="items-center gap-1 rounded-md bg-blue-500 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-200 hover:text-gray-800 sm:col-span-1"
            >
              {isLoading ? "Submitting.." : "Submit"}
            </button>
            <button
              onClick={props.toggleModal}
              className="items-center gap-1 rounded-md bg-red-500 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-200 hover:text-gray-800 sm:col-span-1"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepartmentModal;
