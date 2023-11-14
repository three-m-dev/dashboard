import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

type Props = {
	children?: React.ReactNode;
};

const Layout = (props: Props) => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="flex h-screen">
			<Sidebar
				isOpen={isSidebarOpen}
				toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
			/>
			<div className="flex-1 flex flex-col overflow-hidden">
				<Navbar onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
				<main className="flex-1 p-4 overflow-x-hidden overflow-y-auto bg-gray-100">
					{props.children}
				</main>
			</div>
		</div>
	);
};

export default Layout;
