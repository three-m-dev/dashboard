import { Tree, TreeNode } from "react-organizational-chart";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Employee } from "../../interfaces/ICommon";

type Props = {
  employees: Employee[];
};

const OrgChart = (props: Props) => {
  const renderTree = (employeeId: string) => {
    const employee = props.employees.find((emp) => emp.id === employeeId);

    if (!employee) {
      return null;
    }

    const directReports = props.employees.filter(
      (emp) => emp.directReport === employeeId,
    );

    return (
      <TreeNode
        key={employeeId}
        label={
          <div className="mx-auto w-52 overflow-hidden rounded-lg bg-white shadow-md">
            <div className="p-2">
              <h1 className="text-lg font-semibold text-gray-800">
                {employee.firstName + " " + employee.lastName}
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                {employee.department}
              </p>
              <p className="mt-1 text-sm text-gray-500">{employee.role}</p>
            </div>
          </div>
        }
      >
        {directReports.map((directReport) => (
          <>{renderTree(directReport.id)}</>
        ))}
      </TreeNode>
    );
  };

  const topLevelEmployee = props.employees.find(
    (employee) =>
      employee.directReport === "11111111-1111-1111-1111-111111111111",
  );

  if (!topLevelEmployee) {
    return null;
  }

  return (
    <div className="h-full w-full overflow-auto">
      <Tree
        lineColor="#3b82f6"
        lineWidth="2px"
        label={
          <div className="mx-auto w-52 overflow-hidden rounded-lg bg-white shadow-md">
            <div className="p-2">
              <h1 className="text-lg font-semibold text-gray-800">
                {topLevelEmployee.firstName + " " + topLevelEmployee.lastName}
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                {topLevelEmployee.department}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {topLevelEmployee.role}
              </p>
            </div>
          </div>
        }
      >
        {topLevelEmployee.id &&
          props.employees
            .filter((emp) => emp.directReport === topLevelEmployee.id)
            .map((emp) => renderTree(emp.id))}
      </Tree>
    </div>
  );
};

export default OrgChart;
