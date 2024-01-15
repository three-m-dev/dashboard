import { useEffect, useState } from "react";
import { SortButton } from "..";
import useGetDowntimeEntries from "../../hooks/downtime/useGetDowntimeEntries";
import { formatDate, formatMinutes } from "../../utils/formatter";
import RightArrowIcon from "../../assets/icons/RightArrowIcon";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon";

type Props = {
  toggleDowntimeModal: (mode: string, downtimeEntryData?: any) => void;
  refreshData: boolean;
};

const DowntimeTable = ({ toggleDowntimeModal, refreshData }: Props) => {
  // const [actionDropdown, setActionDropdown] = useState(false);

  const initialPageSize = 10;

  const [localPage, setLocalPage] = useState<number>(1);
  const [localSort, setLocalSort] = useState<string>("date,ASC");

  const {
    downtimeEntryData,
    setPage,
    setPageSize,
    setSort,
    refreshDowntimeEntries,
  } = useGetDowntimeEntries();

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

  useEffect(() => {
    setPage(localPage);
    setPageSize(initialPageSize);
    setSort(localSort);
  }, [localPage, localSort, setPage, setPageSize, setSort]);

  useEffect(() => {
    refreshDowntimeEntries();
  }, [refreshData]);

  return (
    <section>
      <div className="mb-4 overflow-x-auto rounded bg-white p-4 shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="grid grid-cols-10 text-left text-sm text-gray-500">
              <th className="col-span-2 pb-2 pl-4 font-medium">
                <button
                  onClick={() => updateSort("date")}
                  className="flex items-center gap-1"
                >
                  Date
                  <SortButton
                    isSorted={localSort.startsWith("date")}
                    isDesc={localSort === "date,DESC"}
                  />
                </button>
              </th>
              <th className="col-span-2 pb-2 pl-4 font-medium">
                <button
                  onClick={() => updateSort("operator.firstName")}
                  className="flex items-center gap-1"
                >
                  Operator
                  <SortButton
                    isSorted={localSort.startsWith("operator.firstName")}
                    isDesc={localSort === "operator.firstName,DESC"}
                  />
                </button>
              </th>
              <th className="col-span-2 pb-2 pl-4 font-medium">
                <button
                  onClick={() => updateSort("total")}
                  className="flex items-center gap-1"
                >
                  Total
                  <SortButton
                    isSorted={localSort.startsWith("total")}
                    isDesc={localSort === "total,DESC"}
                  />
                </button>
              </th>
              <th className="col-span-2 pb-2 pl-4 font-medium">
                <button
                  onClick={() => updateSort("total")}
                  className="flex items-center gap-1"
                >
                  Highest Reason
                  <SortButton
                    isSorted={localSort.startsWith("total")}
                    isDesc={localSort === "total,DESC"}
                  />
                </button>
              </th>
              <th className="col-span-2 flex pb-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {downtimeEntryData?.downtimeEntries.map((downtimeEntry, index) => (
              <tr
                key={index}
                className={`grid grid-cols-10 rounded py-2 text-sm capitalize  ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="col-span-2 flex items-center px-4">
                  <button
                    onClick={() => toggleDowntimeModal("view", downtimeEntry)}
                    className="hover:underline"
                  >
                    {formatDate(downtimeEntry.date)}
                  </button>
                </td>
                <td className="col-span-2 flex items-center px-4">
                  {downtimeEntry.operator.firstName +
                    " " +
                    downtimeEntry.operator.lastName}
                </td>
                <td className="col-span-2 flex items-center px-4">
                  {formatMinutes(downtimeEntry.total)}
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

            {[...Array(downtimeEntryData?.pages).keys()].map((index) => (
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
                  localPage === downtimeEntryData?.pages
                    ? "text-gray-400"
                    : "hover:border-neutral-300"
                }`}
                onClick={() => setLocalPage(localPage + 1)}
                disabled={localPage === downtimeEntryData?.pages}
              >
                <RightArrowIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="w-auto p-2">
          <p className="text text-neutral-400">
            Showing page {localPage} of {downtimeEntryData?.pages}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DowntimeTable;
