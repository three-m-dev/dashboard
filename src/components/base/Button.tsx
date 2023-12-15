import React from "react";

type Props = {
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
};

const Button = ({ text, icon, onClick }: Props) => {
  return (
    <button
      className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
