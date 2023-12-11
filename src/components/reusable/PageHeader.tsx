type Button = {
  label: string;
  icon?: JSX.Element;
  onClick: () => void;
};

type Tab = {
  value: string;
  search?: (searchInput: string) => void;
  buttons?: Button[];
};

type PageHeaderProps = {
  title: string;
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const PageHeader = ({
  title,
  tabs,
  activeTab,
  setActiveTab,
}: PageHeaderProps) => {
  const activeTabData = tabs.find((tab) => tab.value === activeTab);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (activeTabData && activeTabData.search) {
      activeTabData.search(e.target.value);
    }
  };

  const formatKebab = (value: string) => {
    return value
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      <section className="">
        <div className="flex flex-wrap items-center justify-between">
          <div className="mb-4 flex w-full items-center lg:mb-0 lg:w-auto">
            <h2 className="flex h-[36px] items-center text-2xl font-bold">
              {title}
            </h2>
          </div>
          <div className="flex gap-2">
            {activeTabData?.search && (
              <input
                type="text"
                className="rounded-md border border-gray-300 px-4 py-1.5"
                placeholder="Search"
                onChange={handleSearchChange}
              />
            )}
            {activeTabData?.buttons?.map((button, index) => (
              <button
                key={index}
                className="flex gap-1 rounded border-2 border-blue-500 bg-white px-4 py-1.5 text-sm font-semibold capitalize text-blue-500 transition-colors hover:bg-blue-500 hover:text-white"
                onClick={button.onClick}
              >
                {button.icon && <span>{button.icon}</span>}
                {button.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap py-4 text-center text-sm">
          <nav>
            {tabs.map((tab) => (
              <button
                key={tab.value}
                className={`border-b-2 px-4 py-2 capitalize ${
                  activeTab === tab.value
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-400 hover:border-gray-200"
                }`}
                onClick={() => setActiveTab(tab.value)}
              >
                {formatKebab(tab.value)}
              </button>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
};

export default PageHeader;
