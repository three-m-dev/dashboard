import { useEffect, useState } from "react";
import useGetApplications from "../../hooks/useGetApplications";
import RightArrowIcon from "../../assets/icons/RightArrowIcon";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon";
import { SortButton } from "..";
import EllipsisIcon from "../../assets/icons/EllipsisIcon";
import { formatDate } from "../../utils/formatter";

type ApplicantsTableProps = {
  toggleApplicantModal: (mode: string, applicantData?: any) => void;
};

const ApplicationsTable = ({ toggleApplicantModal }: ApplicantsTableProps) => {
  const { applicationData, setPage, setPageSize, setSort } =
    useGetApplications();
  const [actionDropdown, setActionDropdown] = useState(false);

  const toggleActionDropdown = () => {
    setActionDropdown(!actionDropdown);
  };

  const initialPageSize = 10;
  const [localPage, setLocalPage] = useState<number>(1);
  const [localSort, setLocalSort] = useState<string>("applicant.firstName,ASC");

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

  const getStatusClass = (status: string) => {
    switch (status) {
      case "new":
        return "bg-green-200 text-green-600";
      case "archived":
        return "bg-gray-200 text-gray-600";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  return (
    <section>
      <div className="mb-4 overflow-x-auto rounded bg-white p-4 shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="grid grid-cols-10 text-left text-sm text-gray-500">
              <th className="col-span-2 pb-2 pl-4 font-medium">
                <button
                  onClick={() => updateSort("applicant.firstName")}
                  className="flex items-center gap-2"
                >
                  Name
                  <SortButton
                    isSorted={localSort.startsWith("applicant.firstName")}
                    isDesc={localSort === "applicant.firstName,DESC"}
                  />
                </button>
              </th>
              <th className="col-span-2 flex pb-2 font-medium">
                <button
                  onClick={() => updateSort("createdAt")}
                  className="flex items-center gap-2"
                >
                  Applied On
                  <SortButton
                    isSorted={localSort.startsWith("createdAt")}
                    isDesc={localSort === "createdAt,DESC"}
                  />
                </button>
              </th>
              <th className="col-span-2 flex pb-2 font-medium">
                <button
                  onClick={() => updateSort("career.title")}
                  className="flex items-center gap-2"
                >
                  Applied For
                  <SortButton
                    isSorted={localSort.startsWith("career.title")}
                    isDesc={localSort === "career.title,DESC"}
                  />
                </button>
              </th>
              <th className="col-span-2 flex pb-2 font-medium">Status</th>
              <th className="col-span-2 flex pb-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applicationData?.applications.map((application, index) => (
              <tr
                key={index}
                className={`grid grid-cols-10 rounded py-2 text-sm capitalize  ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="col-span-2 flex items-center px-4">
                  <button
                    onClick={() => toggleApplicantModal("view", application)}
                    className="hover:underline"
                  >
                    {application.applicant.firstName}{" "}
                    {application.applicant.lastName}
                  </button>
                </td>
                <td className="col-span-2 flex items-center">
                  {formatDate(application.createdAt)}
                </td>
                <td className="col-span-2 flex items-center">
                  {application.job.title ? application.job.title : "N/A"}
                </td>
                <td className="col-span-2 flex items-center">
                  <span
                    className={
                      `rounded px-2 py-1 text-xs ` +
                      getStatusClass(application.status)
                    }
                  >
                    {application.status}
                  </span>
                </td>
                <td className="col-span-2 flex items-center">
                  <div className="flex justify-center gap-2">
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

            {[...Array(applicationData?.pages).keys()].map((index) => (
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
                  localPage === applicationData?.pages
                    ? "text-gray-400"
                    : "hover:border-neutral-300"
                }`}
                onClick={() => setLocalPage(localPage + 1)}
                disabled={localPage === applicationData?.pages}
              >
                <RightArrowIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="w-auto p-2">
          <p className="text text-neutral-400">
            Showing page {localPage} of {applicationData?.pages}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsTable;
