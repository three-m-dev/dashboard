/* eslint-disable */
import { useState } from 'react';

type Action = {
	type: string;
	text: string;
	icon: string;
	onClick: (item: any) => void;
};

type TableProps = {
	data: any[];
	fields: string[];
	actions?: Action[];
	pageSize: number;
};

const Table = ({ data, fields, actions, pageSize }: TableProps) => {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(data.length / pageSize);
	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const currentData = data.slice(startIndex, endIndex);

	return (
		<div>
			<table className="min-w-full">
				<thead>
					<tr>
						{fields.map((field) => (
							<th
								key={field}
								className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
								{field}
							</th>
						))}
						{actions && <th className="px-6 py-3 border-b-2 border-gray-300">Actions</th>}
					</tr>
				</thead>
				<tbody>
					{currentData.map((item, index) => (
						<tr key={index} className={`text-sm capitalize  ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'}`}>
							{fields.map((field) => (
								<td key={field} className="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
									{item[field]}
								</td>
							))}
							{actions && (
								<td className="px-6 whitespace-no-wrap border-b border-gray-200">
									{actions.map((action, actionIndex) => (
										<button key={actionIndex} onClick={() => action.onClick(item)} className="mr-2">
											{action.icon && <span>{action.icon}</span>}
											{action.text}
										</button>
									))}
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>

			<div className="py-3 flex justify-center">
				<button onClick={() => setCurrentPage((page) => (page > 1 ? page - 1 : page))} disabled={currentPage === 1}>
					Previous
				</button>
				<span className="mx-2">
					{' '}
					Page {currentPage} of {totalPages}{' '}
				</span>
				<button
					onClick={() => setCurrentPage((page) => (page < totalPages ? page + 1 : page))}
					disabled={currentPage === totalPages}>
					Next
				</button>
			</div>
		</div>
	);
};

export default Table;
