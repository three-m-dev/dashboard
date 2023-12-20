export type Button = {
  text: string;
  type: "button" | "link";
  onClick?: () => void;
  theme?: "primary" | "secondary";
  icon?: React.ReactNode;
  destination?: string | null;
  isLoading?: boolean;
  isDisabled?: boolean;
};

export type Option = {
  text: string;
  value: string;
};

export type Dropdown = {
  text: string;
  options: Option[];
  onSelect: (option: Option) => void;
};

export type Tab = {
  value: string;
  search?: (searchInput: string) => void;
  buttons?: Button[];
  dropdowns?: Dropdown[];
};
