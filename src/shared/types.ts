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

export type Tab = {
  value: string;
  search?: (searchInput: string) => void;
  buttons?: Button[];
};

export type PageHeaderProps = {
  title: string;
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
};
