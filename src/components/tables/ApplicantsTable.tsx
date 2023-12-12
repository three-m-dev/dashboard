import { useEffect, useState } from "react";
import useGetApplications from "../../hooks/useGetApplications";
import RightArrowIcon from "../../assets/icons/RightArrowIcon";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon";
import { SortButton } from "..";
import EllipsisIcon from "../../assets/icons/EllipsisIcon";

const ApplicationsTable = () => {
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

  const formatKebab = (value: string) => {
    return value
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const convertToReadableDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section>
      <div className="mb-4 overflow-x-auto rounded bg-white p-4 shadow">
        <table className="w-full min-w-max table-auto">
          <thead>
            <tr className="grid grid-cols-10 text-left text-sm text-gray-500">
              <th className="col-span-2 pb-2 pl-4 font-medium">
                <button
                  onClick={() => updateSort("applicant.firstName")}
                  className="flex items-center gap-2"
                >
                  <SortButton
                    isSorted={localSort.startsWith("applicant.firstName")}
                    isDesc={localSort === "applicant.firstName,DESC"}
                  />
                  Name
                </button>
              </th>
              <th className="col-span-2 flex justify-center pb-2 font-medium">
                <button
                  onClick={() => updateSort("createdAt")}
                  className="flex items-center gap-2"
                >
                  <SortButton
                    isSorted={localSort.startsWith("createdAt")}
                    isDesc={localSort === "createdAt,DESC"}
                  />
                  Applied On
                </button>
              </th>
              <th className="col-span-2 flex justify-center pb-2 font-medium">
                <button
                  onClick={() => updateSort("career.title")}
                  className="flex items-center gap-2"
                >
                  <SortButton
                    isSorted={localSort.startsWith("career.title")}
                    isDesc={localSort === "career.title,DESC"}
                  />
                  Applied For
                </button>
              </th>
              <th className="col-span-2 flex justify-center pb-2 font-medium">
                Status
              </th>
              <th className="col-span-2 flex justify-center pb-2 font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {applicationData?.applications.map((application, index) => (
              <tr
                key={index}
                className={`grid grid-cols-10 rounded py-2.5 text-sm capitalize  ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="col-span-2 flex items-center px-4">
                  {application.applicant.firstName}{" "}
                  {application.applicant.lastName}
                </td>
                <td className="col-span-2 flex items-center justify-center">
                  {convertToReadableDate(application.createdAt)}
                </td>
                <td className="col-span-2 flex items-center justify-center">
                  {application.career.title}
                </td>
                <td className="col-span-2 flex items-center justify-center">
                  <span className="rounded bg-green-400 px-2 py-1 text-green-50">
                    {application.status}
                  </span>
                </td>
                <td className="col-span-2 flex items-center justify-center">
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

            {[...Array(applicationData?.totalPages).keys()].map((index) => (
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
                  localPage === applicationData?.totalPages
                    ? "text-gray-400"
                    : "hover:border-neutral-300"
                }`}
                onClick={() => setLocalPage(localPage + 1)}
                disabled={localPage === applicationData?.totalPages}
              >
                <RightArrowIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="w-auto p-2">
          <p className="text text-neutral-400">
            Showing page {localPage} of {applicationData?.totalPages}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsTable;
