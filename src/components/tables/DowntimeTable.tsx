import { useState } from "react";
import { SortButton } from "..";

type Props = {
  toggleDowntimeModal?: () => void;
};

const DowntimeTable = ({ toggleDowntimeModal }: Props) => {
  const [actionDropdown, setActionDropdown] = useState(false);

  const toggleActionDropdown = () => {
    setActionDropdown(!actionDropdown);
  };

  const intitialPageSize = 10;
  const [localPage, setLocalPage] = useState<number>(1);
  const [localSort, setLocalSort] = useState<string>("date,ASC");

  const updateSort = (fieldToSort: string) => {
    let newSort = `${fieldToSort},ASC`;

    if (localSort.startsWith(fieldToSort)) {
      newSort = localSort.endsWith(",ASC")
        ? `${fieldToSort},DESC`
        : `${fieldToSort},ASC`;
    }

    setLocalSort(newSort);
    // setSort(newSort);
  };

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
                  onClick={() => updateSort("operator")}
                  className="flex items-center gap-1"
                >
                  Operator
                  <SortButton
                    isSorted={localSort.startsWith("operator")}
                    isDesc={localSort === "operator,DESC"}
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
                  Total
                  <SortButton
                    isSorted={localSort.startsWith("total")}
                    isDesc={localSort === "total,DESC"}
                  />
                </button>
              </th>
              <th className="col-span-2 flex pb-2 font-medium">Actions</th>
            </tr>
          </thead>
        </table>
      </div>
    </section>
  );
};

export default DowntimeTable;
