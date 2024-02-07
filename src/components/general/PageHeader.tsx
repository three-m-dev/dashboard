import { useState } from 'react';
import { formatKebab } from '../../utils/formatter';

type Button = {
  label?: string;
  icon?: React.ReactNode;
  onClick: () => void;
};

type Tab = {
  name: string;
  buttons: Button[];
};

type PageHeaderProps = {
  title: string;
  tabs: Tab[];
  onTabChange: (tabName: string) => void;
};

const PageHeader = ({ title, tabs, onTabChange }: PageHeaderProps) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].name);

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName);
    onTabChange(tabName);
  };

  return (
    <div className='flex justify-between items-center w-full border-b pb-4'>
      <div>
        <h1 className='text-xl font-bold'>{title}</h1>
        <div>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(tab.name)}
              className={`border-b-2 px-4 py-2 capitalize focus:outline-none ${
                currentTab === tab.name
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-400 hover:border-gray-200'
              }`}>
              {formatKebab(tab.name)}
            </button>
          ))}
        </div>
      </div>

      <div className='flex'>
        {tabs
          .find((tab) => tab.name === currentTab)
          ?.buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className='ml-2 flex gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none'>
              {button.icon && button.icon}
              {button.label}
            </button>
          ))}
      </div>
    </div>
  );
};

export default PageHeader;
