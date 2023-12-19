import { useEffect, useState } from "react";
import useGetEmployees from "../../hooks/employees/useGetEmployees";
import RightArrowIcon from "../../assets/icons/RightArrowIcon";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon";
import EllipsisIcon from "../../assets/icons/EllipsisIcon";

type EmployeesTableProps = {
  toggleEmployeeModal: (mode: string, employeeData?: any) => void;
};

const EmployeesTable = ({ toggleEmployeeModal }: EmployeesTableProps) => {
  const [actionDropdown, setActionDropdown] = useState(false);
  const initialPageSize = 10;
  const [localPage, setLocalPage] = useState<number>(1);
  const [localSort, setLocalSort] = useState<string>("firstName,ASC");

  const { employeeData, setPage, setPageSize, setSort } = useGetEmployees();

  const toggleActionDropdown = () => {
    setActionDropdown(!actionDropdown);
  };

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
      case "active":
        return "bg-green-200 text-green-600";
      case "inactive":
        return "bg-red-200 text-red-600";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  const formatKebab = (value: string) => {
    return value
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    setPage(localPage);
    setPageSize(initialPageSize);
    setSort(localSort);
  }, [localPage, localSort, setPage, setPageSize, setSort]);

  // useEffect(() => {
  //   refreshJobs();
  // }, [refreshData]);

  return (
    <section>
      <div className="mb-4 overflow-x-auto rounded bg-white p-4 shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="grid grid-cols-7 text-left text-sm text-gray-500">
              <th className="col-span-2 pb-2 pl-4 font-medium">
                <button
                  onClick={() => updateSort("firstName")}
                  className={
                    (localSort === "firstName,DESC" ? "text-red-500" : "") +
                    (localSort === "firstName,ASC" ? "text-blue-500" : "")
                  }
                >
                  Name
                </button>
              </th>
              <th className="flex justify-center pb-2 font-medium">
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
              <th className="flex justify-center pb-2 font-medium">
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
              <th className="flex justify-center pb-2 font-medium">
                <button
                  onClick={() => updateSort("department.name")}
                  className={
                    (localSort === "department.name,DESC"
                      ? "text-red-500"
                      : "") +
                    (localSort === "department.name,ASC" ? "text-blue-500" : "")
                  }
                >
                  Department
                </button>
              </th>
              <th className="flex justify-center pb-2 font-medium">
                <button
                  onClick={() => updateSort("status")}
                  className={
                    (localSort === "status,DESC" ? "text-red-500" : "") +
                    (localSort === "status,ASC" ? "text-blue-500" : "")
                  }
                >
                  Status
                </button>
              </th>
              <th className="flex justify-center pb-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employeeData?.employees.map((employee, index) => (
              <tr
                key={index}
                className={`grid grid-cols-7 rounded py-2 text-sm  ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="col-span-2 flex items-center px-4">
                  <button
                    onClick={() => toggleEmployeeModal("view", employee)}
                    className="hover:underline"
                  >
                    {employee.firstName} {employee.lastName}
                  </button>
                </td>
                <td className="flex items-center justify-center">
                  {employee.title}
                </td>
                <td className="flex items-center justify-center">
                  {formatKebab(employee.company)}
                </td>
                <td className="flex items-center justify-center">
                  {formatKebab(employee.department.name)}
                </td>
                <td className="flex items-center justify-center">
                  <span
                    className={
                      `rounded px-2 py-1 text-xs capitalize ` +
                      getStatusClass(employee.status)
                    }
                  >
                    {employee.status}
                  </span>
                </td>
                <td className="flex items-center justify-center">
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

            {[...Array(employeeData?.pages).keys()].map((index) => (
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
                  localPage === employeeData?.pages
                    ? "text-gray-400"
                    : "hover:border-neutral-300"
                }`}
                onClick={() => setLocalPage(localPage + 1)}
                disabled={localPage === employeeData?.pages}
              >
                <RightArrowIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="w-auto p-2">
          <p className="text text-neutral-400">
            Showing page {localPage} of {employeeData?.pages}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmployeesTable;
