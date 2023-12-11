import Button from "./Button";
import FilterIcon from "../assets/icons/FilterIcon";
import PlusIcon from "../assets/icons/PlusIcon";
import FullScreenIcon from "../assets/icons/FullScreenIcon";
import SearchIcon from "../assets/icons/SearchIcon";

type PageHeaderButtonProps = {
  onClick: () => void;
};

type Props = {
  title: string;
  onSearch?: (searchTerm: string) => void;
  searchPlaceholder?: string;
  filterButton?: PageHeaderButtonProps;
  createButton?: PageHeaderButtonProps;
  fullScreenButton?: PageHeaderButtonProps;
};

const PageHeader = ({
  title,
  onSearch,
  searchPlaceholder,
  filterButton,
  createButton,
  fullScreenButton,
}: Props) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold">{title}</h1>

      <div className="flex gap-2">
        {onSearch && (
          <div className="mb-4 flex min-h-[40px] w-full rounded border bg-white px-4 py-2 md:mb-0 md:ml-auto md:w-1/2 lg:w-auto">
            <input
              className="text-sm placeholder-gray-500"
              type="text"
              placeholder={searchPlaceholder || "Search..."}
              onChange={(e) => onSearch(e.target.value)}
            />
            <button className="ml-auto">
              <SearchIcon />
            </button>
          </div>
        )}
        {filterButton && (
          <Button
            type="button"
            text="Filter"
            onClick={filterButton.onClick}
            icon={<FilterIcon />}
          />
        )}
        {createButton && (
          <Button
            type="button"
            text="Create New"
            onClick={createButton.onClick}
            icon={<PlusIcon />}
          />
        )}
        {fullScreenButton && (
          <Button
            type="button"
            text="Full Screen"
            onClick={fullScreenButton.onClick}
            icon={<FullScreenIcon />}
          />
        )}
      </div>
    </div>
  );
};

export default PageHeader;
