import { Table } from '..';

const applicants = [
	{ id: '1', name: 'Alice Johnson', position: 'Software Engineer', status: 'Interview Scheduled' },
	{ id: '2', name: 'Bob Smith', position: 'Product Manager', status: 'Application Received' },
	{ id: '3', name: 'Charlie Brown', position: 'Graphic Designer', status: 'Offer Extended' },
];

const ApplicantsContent = () => {
	const fields = ['name', 'position', 'status'];

	const viewDetailsAction = {
		type: 'button',
		text: 'View Details',
		icon: '🔍',
		onClick: (item: any) => {
			console.log('Viewing details for:', item);
		},
	};

	return (
		<div>
			<Table data={applicants} fields={fields} actions={[viewDetailsAction]} pageSize={5} />
		</div>
	);
};

export default ApplicantsContent;
