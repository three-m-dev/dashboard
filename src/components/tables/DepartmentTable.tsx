import { useState } from "react";
import { IDepartment } from "../../interfaces/ICommon";
import DepartmentModal from "../modals/DepartmentModal";

type Props = {
  departments: IDepartment[];
};

const DepartmentTable = (props: Props) => {
  const [departmentModalOpen, setDepartmentModalOpen] = useState(false);

  const canAddDepartment = true;

  const toggleDepartmentModal = () => {
    setDepartmentModalOpen(!departmentModalOpen);
  };

  return (
    <>
      <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
        <div className="flex items-center justify-end gap-2 p-4">
          {canAddDepartment && (
            <button
              onClick={toggleDepartmentModal}
              className="flex items-center rounded-md bg-gray-200 p-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-500 hover:text-white"
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
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Department
                </th>
                <th scope="col" className="px-4 py-3 text-center">
                  Team Members
                </th>
              </tr>
            </thead>
            <tbody>
              {props.departments.map((department) => (
                <tr key={department.id} className="border-b">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900"
                  >
                    {department.name}
                  </th>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 text-center font-medium text-gray-900"
                  >
                    {department.count}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {departmentModalOpen && (
        <DepartmentModal toggleModal={toggleDepartmentModal} />
      )}
    </>
  );
};

export default DepartmentTable;
