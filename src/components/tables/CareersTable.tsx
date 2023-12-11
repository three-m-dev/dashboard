import { useEffect, useState } from "react";
import useGetCareers from "../../hooks/useGetCareers";
import EditIcon from "../../assets/icons/EditIcon";
import ArchiveIcon from "../../assets/icons/ArchiveIcon";
import PauseIcon from "../../assets/icons/PauseIcon";
import RightArrowIcon from "../../assets/icons/RightArrowIcon";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon";

const CareersTable = () => {
  const { careerData, setPage, setPageSize, setSort } = useGetCareers();

  const [pauseModalOpen, setPauseModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [archiveModalOpen, setArchiveModalOpen] = useState(false);

  const togglePauseModal = () => {
    setPauseModalOpen(!pauseModalOpen);
  };

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
                <th className="pb-2 font-medium">Department</th>
                <th className="pb-2 font-medium">Location</th>
                <th className="pb-2 font-medium">Type</th>
                <th className="pb-2 font-medium">Status</th>
                <th className="pb-2 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {careerData?.careers.map((career) => (
                <tr className="bg-gray-50 text-xs capitalize">
                  <td className="px-4 py-4 font-medium">{career.title}</td>
                  <td className="font-medium">{formatKebab(career.company)}</td>
                  <td className="font-medium">{career.department}</td>
                  <td className="font-medium">{career.location}</td>
                  <td className="font-medium">{career.department}</td>
                  <td>
                    <span className="rounded bg-green-400 px-2 py-1 text-green-50">
                      {career.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <button
                        onClick={togglePauseModal}
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
        <div className="-m-2 flex flex-wrap items-center justify-between">
          <div className="w-auto p-2">
            <div className="-m-0.5 flex flex-wrap">
              <div className="w-auto p-0.5">
                <button
                  className={`flex h-9 w-9 items-center justify-center rounded-sm border-2 ${
                    localPage === 1
                      ? "text-gray-400"
                      : "hover:border-neutral-300"
                  }`}
                  onClick={() => setLocalPage(Math.max(1, localPage - 1))}
                  disabled={localPage === 1}
                >
                  <LeftArrowIcon />
                </button>
              </div>

              {[...Array(careerData?.totalPages).keys()].map((index) => (
                <div key={index} className="w-auto p-0.5">
                  <button
                    className={`flex h-9 w-9 items-center justify-center rounded border-2 ${
                      localPage === index + 1
                        ? "border-blue-500 text-blue-500 bg-white"
                        : "hover:border-neutral-300"
                    }`}
                    onClick={() => setLocalPage(index + 1)}
                  >
                    <span className="text-sm font-semibold">{index + 1}</span>
                  </button>
                </div>
              ))}

              <div className="w-auto p-0.5">
                <button
                  className={`flex h-9 w-9 items-center justify-center rounded-sm border-2 ${
                    localPage === careerData?.totalPages
                      ? "text-gray-400"
                      : "hover:border-neutral-300"
                  }`}
                  onClick={() => setLocalPage(localPage + 1)}
                  disabled={localPage === careerData?.totalPages}
                >
                  <RightArrowIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="w-auto p-2">
            <p className="text text-neutral-400">
              Showing page {localPage} of {careerData?.totalPages}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersTable;
