import { useEffect, useState } from "react";
import useGetCareers from "../../hooks/useGetCareers";
import EditIcon from "../../assets/icons/EditIcon";
import ArchiveIcon from "../../assets/icons/ArchiveIcon";
import PauseIcon from "../../assets/icons/PauseIcon";

const CareersTable = () => {
  const { careerData, setPage, setPageSize, setSort } = useGetCareers();

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [archiveModalOpen, setArchiveModalOpen] = useState(false);

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  };

  const toggleArchiveModal = () => {
    setArchiveModalOpen(!archiveModalOpen);
  };

  const initialPageSize = 10;
  const [localPage, setLocalPage] = useState<number>(1);
  const [localSort, setLocalSort] = useState<string>("title,ASC");

  useEffect(() => {
    setPage(localPage);
    setPageSize(initialPageSize);
    setSort(localSort);
  }, [localPage, localSort, setPage, setPageSize, setSort]);

  const updateSort = (fieldToSort: string) => {
    let newSort = `${fieldToSort},ASC`;

    if (localSort.startsWith(fieldToSort)) {
      newSort = localSort.endsWith(",ASC")
        ? `${fieldToSort},DESC`
        : `${fieldToSort},ASC`;
    }

    setLocalSort(newSort);
    setSort(newSort);
  };

  const formatKebab = (value: string) => {
    return value
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <section>
      <div className="mx-auto">
        <div className="mb-4 overflow-x-auto rounded bg-white p-4 shadow">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-left text-xs text-gray-500">
                <th className="pb-2 pl-6 font-medium">Title</th>
                <th className="pb-2 font-medium">Company</th>
                <th className="pb-2 font-medium">Joined</th>
                <th className="pb-2 font-medium">Status</th>
                <th className="pb-2 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {careerData?.careers.map((career) => (
                <tr className="bg-gray-50 text-xs">
                  <td className="px-4 py-4 font-medium">{career.title}</td>
                  <td className="font-medium">{formatKebab(career.company)}</td>
                  <td className="font-medium">{career.department}</td>
                  <td>
                    <span className="inline-block rounded-full bg-green-500 px-2 py-1 capitalize text-white">
                      {career.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <button
                        onClick={toggleEditModal}
                        className="text-gray-400 hover:text-orange-500"
                      >
                        <PauseIcon />
                      </button>
                      <button
                        onClick={toggleEditModal}
                        className="text-gray-400 hover:text-blue-500"
                      >
                        <EditIcon />
                      </button>
                      <button
                        onClick={toggleArchiveModal}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <ArchiveIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          <div className="mb-4 flex w-full items-center px-4 lg:mb-0 lg:w-1/3">
            <p className="text-xs text-gray-400">Show</p>
            <div className="mx-3 rounded border bg-white px-2 py-2 text-xs text-gray-500">
              <select name="" id="">
                <option value="1">15</option>
                <option value="1">25</option>
                <option value="1">50</option>
                <option value="1">100</option>
              </select>
            </div>
            <p className="text-xs text-gray-400">of 1200</p>
          </div>
          <div className="flex w-full items-center justify-center px-4 lg:w-auto">
            <a
              className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
              href="#"
            >
              <svg
                width="6"
                height="8"
                viewBox="0 0 6 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.53335 3.99999L4.86668 1.66666C5.13335 1.39999 5.13335 0.999992 4.86668 0.733325C4.60002 0.466659 4.20002 0.466659 3.93335 0.733325L1.13335 3.53333C0.866683 3.79999 0.866683 4.19999 1.13335 4.46666L3.93335 7.26666C4.06668 7.39999 4.20002 7.46666 4.40002 7.46666C4.60002 7.46666 4.73335 7.39999 4.86668 7.26666C5.13335 6.99999 5.13335 6.59999 4.86668 6.33333L2.53335 3.99999Z"
                  fill="#A4AFBB"
                ></path>
              </svg>
            </a>
            <a
              className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
              href="#"
            >
              1
            </a>
            <span className="mr-3 inline-block">
              <svg
                className="h-3 w-3 text-gray-200"
                viewBox="0 0 12 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.666687C5.26667 0.666687 4.66667 1.26669 4.66667 2.00002C4.66667 2.73335 5.26667 3.33335 6 3.33335C6.73333 3.33335 7.33333 2.73335 7.33333 2.00002C7.33333 1.26669 6.73333 0.666687 6 0.666687ZM1.33333 0.666687C0.6 0.666687 0 1.26669 0 2.00002C0 2.73335 0.6 3.33335 1.33333 3.33335C2.06667 3.33335 2.66667 2.73335 2.66667 2.00002C2.66667 1.26669 2.06667 0.666687 1.33333 0.666687ZM10.6667 0.666687C9.93333 0.666687 9.33333 1.26669 9.33333 2.00002C9.33333 2.73335 9.93333 3.33335 10.6667 3.33335C11.4 3.33335 12 2.73335 12 2.00002C12 1.26669 11.4 0.666687 10.6667 0.666687Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <a
              className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded bg-indigo-500 text-xs text-white"
              href="#"
            >
              12
            </a>
            <a
              className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
              href="#"
            >
              13
            </a>
            <a
              className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
              href="#"
            >
              14
            </a>
            <span className="mr-3 inline-block">
              <svg
                className="h-3 w-3 text-gray-200"
                viewBox="0 0 12 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.666687C5.26667 0.666687 4.66667 1.26669 4.66667 2.00002C4.66667 2.73335 5.26667 3.33335 6 3.33335C6.73333 3.33335 7.33333 2.73335 7.33333 2.00002C7.33333 1.26669 6.73333 0.666687 6 0.666687ZM1.33333 0.666687C0.6 0.666687 0 1.26669 0 2.00002C0 2.73335 0.6 3.33335 1.33333 3.33335C2.06667 3.33335 2.66667 2.73335 2.66667 2.00002C2.66667 1.26669 2.06667 0.666687 1.33333 0.666687ZM10.6667 0.666687C9.93333 0.666687 9.33333 1.26669 9.33333 2.00002C9.33333 2.73335 9.93333 3.33335 10.6667 3.33335C11.4 3.33335 12 2.73335 12 2.00002C12 1.26669 11.4 0.666687 10.6667 0.666687Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <a
              className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs hover:bg-indigo-50"
              href="#"
            >
              62
            </a>
            <a
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
              href="#"
            >
              <svg
                width="6"
                height="8"
                viewBox="0 0 6 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.88663 3.52667L2.05996 0.700006C1.99799 0.637521 1.92425 0.587925 1.84301 0.554079C1.76177 0.520233 1.67464 0.502808 1.58663 0.502808C1.49862 0.502808 1.41148 0.520233 1.33024 0.554079C1.249 0.587925 1.17527 0.637521 1.1133 0.700006C0.989128 0.824915 0.919434 0.993883 0.919434 1.17001C0.919434 1.34613 0.989128 1.5151 1.1133 1.64001L3.4733 4.00001L1.1133 6.36001C0.989128 6.48491 0.919434 6.65388 0.919434 6.83001C0.919434 7.00613 0.989128 7.1751 1.1133 7.30001C1.17559 7.36179 1.24947 7.41068 1.33069 7.44385C1.41192 7.47703 1.49889 7.49385 1.58663 7.49334C1.67437 7.49385 1.76134 7.47703 1.84257 7.44385C1.92379 7.41068 1.99767 7.36179 2.05996 7.30001L4.88663 4.47334C4.94911 4.41136 4.99871 4.33763 5.03256 4.25639C5.0664 4.17515 5.08383 4.08801 5.08383 4.00001C5.08383 3.912 5.0664 3.82486 5.03256 3.74362C4.99871 3.66238 4.94911 3.58865 4.88663 3.52667Z"
                  fill="#A4AFBB"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersTable;
