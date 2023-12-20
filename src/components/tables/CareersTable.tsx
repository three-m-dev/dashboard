import { useEffect, useState } from "react";
import RightArrowIcon from "../../assets/icons/RightArrowIcon";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon";
import EllipsisIcon from "../../assets/icons/EllipsisIcon";
import useGetJobs from "../../hooks/jobs/useGetJobs";
import { formatKebab } from "../../utils/formatter";

type CareersTableProps = {
  toggleCareerModal: (mode: string, careerData?: any) => void;
  refreshData: boolean;
};

const CareersTable = ({
  toggleCareerModal,
  refreshData,
}: CareersTableProps) => {
  const [actionDropdown, setActionDropdown] = useState(false);

  const initialPageSize = 10;
  const [localPage, setLocalPage] = useState<number>(1);
  const [localSort, setLocalSort] = useState<string>("title,ASC");

  const { jobData, setPage, setPageSize, setSort, refreshJobs } = useGetJobs();

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

  const getStatusClass = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-200 text-green-600";
      case "closed":
        return "bg-red-200 text-red-600";
      case "archived":
        return "bg-gray-200 text-gray-600";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  const toggleActionDropdown = () => {
    setActionDropdown(!actionDropdown);
  };

  useEffect(() => {
    setPage(localPage);
    setPageSize(initialPageSize);
    setSort(localSort);
  }, [localPage, localSort, setPage, setPageSize, setSort]);

  useEffect(() => {
    refreshJobs();
  }, [refreshData]);

  return (
    <section>
      <div className="mb-4 overflow-x-auto rounded bg-white p-4 shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="grid grid-cols-8 text-left text-sm text-gray-500">
              <th className="col-span-2 pb-2 pl-4 font-medium">
                <button
                  onClick={() => updateSort("title")}
                  className={
                    (localSort === "title,DESC" ? "text-red-500" : "") +
                    (localSort === "title,ASC" ? "text-blue-500" : "")
                  }
                >
                  Title
                </button>
              </th>
              <th className="flex pb-2 font-medium">
                <button
                  onClick={() => updateSort("company")}
                  className={
                    (localSort === "company,DESC" ? "text-red-500" : "") +
                    (localSort === "company,ASC" ? "text-blue-500" : "")
                  }
                >
                  Company
                </button>
              </th>
              <th className="flex pb-2 font-medium">
                <button
                  onClick={() => updateSort("departmentId")}
                  className={
                    (localSort === "departmentId,DESC" ? "text-red-500" : "") +
                    (localSort === "departmentId,ASC" ? "text-blue-500" : "")
                  }
                >
                  Department
                </button>
              </th>
              <th className="flex pb-2 font-medium">
                <button
                  onClick={() => updateSort("location")}
                  className={
                    (localSort === "location,DESC" ? "text-red-500" : "") +
                    (localSort === "location,ASC" ? "text-blue-500" : "")
                  }
                >
                  Location
                </button>
              </th>
              <th className="flex pb-2 font-medium">
                <button
                  onClick={() => updateSort("type")}
                  className={
                    (localSort === "type,DESC" ? "text-red-500" : "") +
                    (localSort === "type,ASC" ? "text-blue-500" : "")
                  }
                >
                  Type
                </button>
              </th>
              <th className="flex pb-2 font-medium">Status</th>
              <th className="flex pb-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobData?.jobs.map((job, index) => (
              <tr
                key={index}
                className={`grid grid-cols-8 rounded py-2 text-sm capitalize  ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="col-span-2 flex items-center px-4">
                  <button
                    onClick={() => toggleCareerModal("view", job)}
                    className="hover:underline"
                  >
                    {job.title}
                  </button>
                </td>
                <td className="flex items-center">
                  {formatKebab(job.company)}
                </td>
                <td className="flex items-center">{job.departmentId}</td>
                <td className="flex items-center">
                  {formatKebab(job.location)}
                </td>
                <td className="flex items-center">{formatKebab(job.type)}</td>
                <td className="flex items-center">
                  <span
                    className={
                      `rounded px-2 py-1 text-xs ` + getStatusClass(job.status)
                    }
                  >
                    {job.status}
                  </span>
                </td>
                <td className="flex items-center">
                  <div className="flex gap-2">
                    <button
                      onClick={toggleActionDropdown}
                      className="text-gray-400 hover:text-blue-500"
                    >
                      <EllipsisIcon />
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
                  localPage === 1 ? "text-gray-400" : "hover:border-neutral-300"
                }`}
                onClick={() => setLocalPage(Math.max(1, localPage - 1))}
                disabled={localPage === 1}
              >
                <LeftArrowIcon />
              </button>
            </div>

            {[...Array(jobData?.pages).keys()].map((index) => (
              <div key={index} className="w-auto p-0.5">
                <button
                  className={`flex h-9 w-9 items-center justify-center rounded border-2 ${
                    localPage === index + 1
                      ? "border-blue-500 bg-white text-blue-500"
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
                  localPage === jobData?.pages
                    ? "text-gray-400"
                    : "hover:border-neutral-300"
                }`}
                onClick={() => setLocalPage(localPage + 1)}
                disabled={localPage === jobData?.pages}
              >
                <RightArrowIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="w-auto p-2">
          <p className="text text-neutral-400">
            Showing page {localPage} of {jobData?.pages}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareersTable;
