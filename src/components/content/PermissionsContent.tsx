import { useState } from 'react';

const PermissionsContent = () => {
	const [permissions, setPermissions] = useState([
		{ name: 'Access Dashboard', enabled: false },
		{ name: 'Edit Profile', enabled: false },
	]);

	const togglePermission = (index: number) => {
		const updatedPermissions = permissions.map((perm, idx) => {
			if (idx === index) {
				return { ...perm, enabled: !perm.enabled };
			}
			return perm;
		});
		setPermissions(updatedPermissions);
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
			{permissions.map((permission, index) => (
				<div key={index} className="flex items-center justify-between p-2 border rounded shadow-sm bg-white">
					<span>{permission.name}</span>
					<button
						onClick={() => togglePermission(index)}
						className={`px-2 py-1 rounded text-white ${permission.enabled ? 'bg-green-500' : 'bg-red-500'}`}>
						{permission.enabled ? 'ON' : 'OFF'}
					</button>
				</div>
			))}
		</div>
	);
};

export default PermissionsContent;
