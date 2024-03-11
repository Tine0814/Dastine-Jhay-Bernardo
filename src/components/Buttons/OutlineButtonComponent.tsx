import { motion } from "framer-motion";

interface ButtonComponentProps {
  onClick?: () => void;
  label: string;
}

const OutlineButtonComponent: React.FC<ButtonComponentProps> = ({
  onClick,
  label,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
      className="py-2 px-7 rounded-full button-shadow border-2 border-text-two text-text-two hover:bg-text-two hover:text-color-two font-bold ease-in-out duration-300"
    >
      {label}
    </motion.button>
  );
};

export default OutlineButtonComponent;
