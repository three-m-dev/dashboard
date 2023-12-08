type ButtonProps = {
  type: "button" | "link";
  text: string;
  icon: JSX.Element;
  onClick?: () => void;
  destination?: string;
};

const Button = ({ type, text, icon, onClick, destination }: ButtonProps) => {
  const classes =
    "flex gap-1 items-center px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200";

  if (type === "link") {
    return (
      <a href={destination} className={classes}>
        {icon}
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
