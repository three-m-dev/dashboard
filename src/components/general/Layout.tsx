import React, { useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
// import { useGeneralContext } from '../../hooks/useGeneralContext';
import { useLogout } from '../../hooks/useLogout';

type LayoutProps = {
  children?: React.ReactNode;
};

const sampleUser = {
  fullName: 'John Doe',
  initials: 'JD',
  id: '1',
};

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // const { state } = useGeneralContext();

  const { logout } = useLogout();

  const links = [
    {
      name: 'Dashboard',
      to: '/',
      match: useMatch('/'),
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
          />
        </svg>
      ),
    },
    {
      name: 'Employees',
      to: '/employees',
      match: useMatch('/employees/*'),
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z'
          />
        </svg>
      ),
    },
    {
      name: 'Careers',
      to: '/careers',
      match: useMatch('/careers/*'),
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z'
          />
        </svg>
      ),
    },
    {
      name: 'Production',
      to: '/production',
      match: useMatch('/production/*'),
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z'
          />
        </svg>
      ),
    },
    {
      name: 'Content',
      to: '/content',
      match: useMatch('/content/*'),
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z'
          />
        </svg>
      ),
    },
    {
      name: 'File Watch',
      to: '/file-watch',
      match: useMatch('/file-watch/*'),
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z'
          />
        </svg>
      ),
    },
  ];

  return (
    <div className='flex h-screen bg-gray-50'>
      <div
        style={{ display: sidebarOpen ? 'block' : 'none' }}
        className='bg-gray-50 p-4 w-56 shadow-lg'>
        <div className='mb-4'>
          <h1 className='text-center text-2xl h-[32px] font-bold tracking-wider '>M Portal</h1>
        </div>

        <ul className='flex flex-col gap-2'>
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className={
                  `flex items-center rounded py-2 pl-3 pr-2  ` +
                  (link.match ? 'bg-blue-500 text-gray-50' : 'bg-gray-200 text-gray-600 hover:bg-gray-300')
                }
                to={link.to}>
                <span className='flex gap-2 items-center'>
                  {link.icon}
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex-1 flex flex-col overflow-hidden'>
        <header className='flex justify-between items-center p-4 shadow-md'>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className='rounded-md bg-blue-50 px-2 py-3 hover:bg-blue-100 focus:outline-none'>
            <svg
              className='text-blue-500'
              width='18'
              height='10'
              viewBox='0 0 18 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1.50002 1.66667H16.5C16.721 1.66667 16.933 1.57887 17.0893 1.42259C17.2456 1.26631 17.3334 1.05435 17.3334 0.833333C17.3334 0.61232 17.2456 0.400358 17.0893 0.244078C16.933 0.0877975 16.721 0 16.5 0H1.50002C1.27901 0 1.06704 0.0877975 0.910765 0.244078C0.754484 0.400358 0.666687 0.61232 0.666687 0.833333C0.666687 1.05435 0.754484 1.26631 0.910765 1.42259C1.06704 1.57887 1.27901 1.66667 1.50002 1.66667V1.66667ZM16.5 8.33333H1.50002C1.27901 8.33333 1.06704 8.42113 0.910765 8.57741C0.754484 8.73369 0.666687 8.94565 0.666687 9.16667C0.666687 9.38768 0.754484 9.59964 0.910765 9.75592C1.06704 9.9122 1.27901 10 1.50002 10H16.5C16.721 10 16.933 9.9122 17.0893 9.75592C17.2456 9.59964 17.3334 9.38768 17.3334 9.16667C17.3334 8.94565 17.2456 8.73369 17.0893 8.57741C16.933 8.42113 16.721 8.33333 16.5 8.33333ZM16.5 4.16667H1.50002C1.27901 4.16667 1.06704 4.25446 0.910765 4.41074C0.754484 4.56702 0.666687 4.77899 0.666687 5C0.666687 5.22101 0.754484 5.43298 0.910765 5.58926C1.06704 5.74554 1.27901 5.83333 1.50002 5.83333H16.5C16.721 5.83333 16.933 5.74554 17.0893 5.58926C17.2456 5.43298 17.3334 5.22101 17.3334 5C17.3334 4.77899 17.2456 4.56702 17.0893 4.41074C16.933 4.25446 16.721 4.16667 16.5 4.16667Z'
                fill='currentColor'></path>
            </svg>
          </button>
          <div className='relative'>
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className='flex items-center cursor-pointer gap-2'>
              {/* <div className='h-8 w-8 rounded-full bg-blue-500 flex justify-center items-center text-white'>
                {state.employee.firstName[0]}
                {state.employee.lastName[0]}
              </div> */}
            </button>

            {userDropdownOpen && (
              <div className='absolute mt-4 right-0 top-full bg-white rounded-b-lg shadow-lg z-20 w-36 overflow-clip'>
                <Link
                  to={`/profile/${sampleUser.id}`}
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-start'>
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4'>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
