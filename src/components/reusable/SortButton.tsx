interface SortButtonProps {
  isSorted: boolean;
  isDesc: boolean;
}

const SortButton = ({ isSorted, isDesc }: SortButtonProps) => {
  const iconStyle = `w-4 h-4 ${isSorted ? "text-blue-500" : "text-gray-300"}`;
  const rotation = isDesc ? "rotate-180" : "";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${iconStyle} ${rotation}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};

export default SortButton;
