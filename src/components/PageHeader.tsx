import Button from "./Button";
import FilterIcon from "../icons/FilterIcon";
import PlusIcon from "../icons/PlusIcon";
import FullScreenIcon from "../icons/FullScreenIcon";

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
          <input
            type="text"
            placeholder={searchPlaceholder || "Search..."}
            onChange={(e) => onSearch(e.target.value)}
          />
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
