type Tab = {
  value: string;
  label: string;
};

type Props = {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tabValue: string) => void;
};

const PageMenu = ({ tabs, activeTab, setActiveTab }: Props) => {
  return (
    <div className="flex flex-wrap py-6 text-center text-sm">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setActiveTab(tab.value)}
          className={
            `mb-4 inline-block w-full border-b-2 px-4 pb-2 md:w-1/2 lg:mb-0 lg:w-auto ` +
            (activeTab === tab.value
              ? "border-blue-500 text-blue-500"
              : "border-transparent text-gray-300 hover:border-gray-300")
          }
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default PageMenu;
