import { useEffect } from 'react';
import { Link, useMatch } from 'react-router-dom';

type SidebarProps = {
	isOpen: boolean;
	toggleSidebar: () => void;
};

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
	const activeLink = 'text-blue-800 bg-blue-200';
	const inactiveLink = 'text-gray-600 hover:bg-gray-200';

	const sidebarLinks = [
		{
			text: 'Dashboard',
			iconPath:
				'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z',
			linkTo: '/company/:companyId/dashboard',
			match: useMatch('/company/:companyId/dashboard'),
		},
		{
			text: 'Calendar',
			iconPath:
				'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z',
			linkTo: '/',
		},
	];

	useEffect(() => {
		if (isOpen && window.innerWidth <= 640) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

	const linkClass = (match: boolean) =>
		`flex p-2.5 mx-2 rounded-md gap-2 ${match ? activeLink : inactiveLink}`;

	const sidebarClasses = [
		isOpen ? 'fixed md:relative w-3/4' : 'hidden md:block',
		'h-screen bg-white shadow z-30',
		isOpen && 'md:w-60',
		!isOpen && 'md:w-max',
	]
		.filter(Boolean)
		.join(' ');

	return (
		<aside className={sidebarClasses}>
			
			<ul className="gap-2 pt-2 flex flex-col">
				{sidebarLinks.map((link) => (
					<li key={link.text}>
						<Link to={link.linkTo} className={linkClass(!!link.match)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d={link.iconPath}
								/>
							</svg>
							<span className={`${isOpen ? 'translate-x-0' : 'hidden'}`}>
								{link.text}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
