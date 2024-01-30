import { Modal } from '..';

type EmployeeFormProps = {
	isModalOpen: boolean;
	setIsModalOpen: (isModalOpen: boolean) => void;
	modalMode: string;
};

const EmployeeForm = ({ modalMode, isModalOpen, setIsModalOpen }: EmployeeFormProps) => {
	const renderContent = () => {
		switch (modalMode) {
			case 'add':
				return (
					<form>
						<div className="flex gap-4">
							<div className="mb-4">
								<label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
									First Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="border rounded w-full py-2 px-3"
									placeholder="Enter Name"
								/>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
									Last Name
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="border rounded w-full py-2 px-3"
									placeholder="Enter Email"
								/>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="border rounded w-full py-2 px-3"
									placeholder="Enter Email"
								/>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
									Phone
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="border rounded w-full py-2 px-3"
									placeholder="Enter Email"
								/>
							</div>
						</div>
						<div className="flex gap-4">
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
									Company
								</label>
								<select className="border rounded w-full py-2 px-3">
									<option>Company A</option>
									<option>Company B</option>
									<option>Company C</option>
								</select>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
									Department
								</label>
								<select className="border rounded w-full py-2 px-3">
									<option>Company A</option>
									<option>Company B</option>
									<option>Company C</option>
								</select>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
									Type
								</label>
								<select className="border rounded w-full py-2 px-3">
									<option>Company A</option>
									<option>Company B</option>
									<option>Company C</option>
								</select>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
									Role
								</label>
								<input
									type="text"
									id="email"
									name="email"
									className="border rounded w-full py-2 px-3"
									placeholder="Enter Role"
								/>
							</div>
						</div>
						<div className="flex gap-4">
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
									Direct Report
								</label>
								<select className="border rounded w-full py-2 px-3">
									<option>Company A</option>
									<option>Company B</option>
									<option>Company C</option>
								</select>
							</div>
						</div>
						<div className="flex justify-end">
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
								Save
							</button>
						</div>
					</form>
				);
			case 'edit':
				return (
					<form>
						<div className="flex gap-4">
							<div className="mb-4">
								<label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
									First Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="border rounded w-full py-2 px-3"
									placeholder="Enter Name"
								/>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
									Last Name
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="border rounded w-full py-2 px-3"
									placeholder="Enter Email"
								/>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="border rounded w-full py-2 px-3"
									placeholder="Enter Email"
								/>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
									Phone
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="border rounded w-full py-2 px-3"
									placeholder="Enter Email"
								/>
							</div>
						</div>
						<div className="flex gap-4">
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
									Company
								</label>
								<select className="border rounded w-full py-2 px-3">
									<option>Company A</option>
									<option>Company B</option>
									<option>Company C</option>
								</select>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
									Department
								</label>
								<select className="border rounded w-full py-2 px-3">
									<option>Company A</option>
									<option>Company B</option>
									<option>Company C</option>
								</select>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
									Type
								</label>
								<select className="border rounded w-full py-2 px-3">
									<option>Company A</option>
									<option>Company B</option>
									<option>Company C</option>
								</select>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
									Role
								</label>
								<input
									type="text"
									id="email"
									name="email"
									className="border rounded w-full py-2 px-3"
									placeholder="Enter Role"
								/>
							</div>
						</div>
						<div className="flex gap-4">
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
									Direct Report
								</label>
								<select className="border rounded w-full py-2 px-3">
									<option>Company A</option>
									<option>Company B</option>
									<option>Company C</option>
								</select>
							</div>
						</div>
						<div className="flex justify-end">
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
								Save
							</button>
						</div>
					</form>
				);
			case 'view':
				return (
					<div>
						<div></div>
					</div>
				);
			default:
				return <div>Default</div>;
		}
	};

	return (
		<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
			{renderContent()}
		</Modal>
	);
};

export default EmployeeForm;
