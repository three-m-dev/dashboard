import React from "react";

interface Employee {
  firstName: string;
  lastName: string;
  directReport: string;
  role: string;
  department: string;
}

interface OrgChartProps {
  employees: Employee[];
}

const OrgChart: React.FC<OrgChartProps> = ({ employees }) => {
  const processedEmployees = new Set<string>();

  const buildOrgChart = (
    employees: Employee[],
    directReport: string,
    level: number = 0,
  ): JSX.Element => {
    const directReports = employees.filter(
      (emp) =>
        emp.directReport === directReport &&
        !processedEmployees.has(emp.firstName + emp.lastName),
    );

    if (directReports.length === 0) return <></>;

    directReports.forEach((emp) =>
      processedEmployees.add(emp.firstName + emp.lastName),
    );

    return (
      <div className={`flex ${level === 4 ? "flex-col" : "flex-row"}`}>
        {directReports.map((emp, index) => (
          <div key={index} className="m-2 flex flex-col items-center">
            <div className="rounded border border-gray-200 p-2 shadow-sm w-44">
              <div>
                {emp.firstName} {emp.lastName}
              </div>
              <div className="text-sm text-gray-600">{emp.role}</div>
            </div>
            {buildOrgChart(employees, emp.directReport, level + 1)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex justify-center">
      {buildOrgChart(employees, "11111111-1111-1111-1111-111111111111")}
    </div>
  );
};

export default OrgChart;
