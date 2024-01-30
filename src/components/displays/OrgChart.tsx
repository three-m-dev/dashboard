import React from 'react';

type Employee = {
	id: string;
	name: string;
	directReportId: string;
};

type OrgChartProps = {
	employees: Employee[];
};

const OrgChart: React.FC<OrgChartProps> = ({ employees }) => {
	const employeesByManager = employees.reduce(
		(acc, employee) => {
			const managerId = employee.directReportId;
			if (!acc[managerId]) {
				acc[managerId] = [];
			}
			acc[managerId].push(employee);
			return acc;
		},
		{} as Record<string, Employee[]>
	);

	const renderEmployeeCard = (employee: Employee) => (
		<div
			key={employee.id}
			className="flex items-center bg-white rounded-lg p-4 shadow-md m-2"
			style={{ width: '200px' }}>
			<div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
			<div>{employee.name}</div>
		</div>
	);

	const renderDirectReports = (managerId: string) => (
		<div className="flex flex-col items-center gap-4 mt-4 ml-12">
			{employeesByManager[managerId]?.map((report) => renderEmployeeCard(report))}
		</div>
	);

	const renderManagersRow = (ceoId: string) => (
		<div className="flex justify-center flex-wrap">
			{employeesByManager[ceoId]?.map((manager) => (
				<div key={manager.id} className="flex flex-col items-center">
					{renderEmployeeCard(manager)}
					{renderDirectReports(manager.id)}
				</div>
			))}
		</div>
	);

	const ceo = employees.find((employee) => employee.directReportId === '0');
	const coo = employees.find((employee) => employee.directReportId === ceo?.id);

	return (
		<div className="text-center flex flex-col items-center">
			<div>{ceo ? renderEmployeeCard(ceo) : <div>No CEO found</div>}</div>
			<div>{coo ? renderEmployeeCard(coo) : <div>No COO found</div>}</div>
			{renderManagersRow(coo!.id)}
		</div>
	);
};

export default OrgChart;
