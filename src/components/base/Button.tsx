import { Link } from "react-router-dom";
import { ButtonSpinner } from "../../assets";

type Props = {
  text: string;
  type: "button" | "link";
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  theme?: "primary" | "secondary";
  icon?: React.ReactNode;
  destination?: string | null;
  isLoading?: boolean;
  isDisabled?: boolean;
};

const Button = ({
  text,
  type,
  onClick,
  theme,
  icon,
  destination,
  isLoading,
  isDisabled,
}: Props) => {
  let classes;

  const base =
    "px-4 py-2 rounded-md text-sm transition duration-200 font-medium flex gap-2 items-center max-h-[40px]";

  const primary =
    "bg-primary text-white border-2 border-primary hover:bg-secondary hover:text-white hover:border-secondary " +
    base;

  const secondary =
    "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white " +
    base;

  switch (theme) {
    case "primary":
      classes = primary;
      break;
    case "secondary":
      classes = secondary;
      break;
    default:
      classes = primary;
  }

  const loading = classes + " cursor-not-allowed";

  const disabled =
    "bg-gray-200 text-gray-500 border-2 border-gray-200 cursor-not-allowed " +
    base;

  const normal = classes;

  const buttonClasses = isLoading ? loading : isDisabled ? disabled : normal;

  const buttonContent = (
    <>
      {isLoading ? <ButtonSpinner /> : icon}
      {text}
    </>
  );

  const button = (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {buttonContent}
    </button>
  );

  const link = (
    <Link
      className={buttonClasses}
      to={destination ? destination : "/"}
      target="_blank"
    >
      {buttonContent}
    </Link>
  );

  switch (type) {
    case "button":
      return button;
    case "link":
      return link;
    default:
      return button;
  }
};

export default Button;
