import { useState } from 'react';
import { Layout, PageHeader } from '../components';
import ProfileContent from '../components/content/ProfileContent';
import PermissionsContent from '../components/content/PermissionsContent';

const EmployeeProfile = () => {
	const tabs = [
		{ name: 'Profile', buttons: [] },
		{ name: 'Permissions', buttons: [] },
	];

	const [currentTab, setCurrentTab] = useState('Profile');

	const handleTabChange = (tabName: string) => {
		setCurrentTab(tabName);
	};

	const renderContent = () => {
		switch (currentTab) {
			case 'Profile':
				return <ProfileContent />;
			case 'Permissions':
				return <PermissionsContent />;
			default:
				return <div>Tab content not found</div>;
		}
	};

	return (
		<Layout>
			<PageHeader tabs={tabs} onTabChange={handleTabChange} />
			{renderContent()}
		</Layout>
	);
};

export default EmployeeProfile;
