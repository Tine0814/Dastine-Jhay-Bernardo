import { ReactNode } from "react";

interface ButtonComponentProps {
  onClick?: () => void;
  label: string | ReactNode;
  isContaine?: boolean;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  onClick,
  label,
  isContaine,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 sm:px-4 sm:py-2  rounded-md font-bold transition-colors duration-300 flex items-center ${
        isContaine
          ? "bg-primary-color-light hover:bg-primary-color-dark dark:bg-primary-color-dark dark:hover:bg-primary-color-light text-primary-text-dark"
          : "border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-200"
      }`}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
