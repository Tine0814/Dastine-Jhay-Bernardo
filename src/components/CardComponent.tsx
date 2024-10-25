import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface CardProps {
  image: string;
  title: string;
  description: string;
  url?: string;
}

const CardComponent: React.FC<CardProps> = ({
  image,
  title,
  description,
  url,
}) => {
  return (
    <div
      className="w-full max-w-sm overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl bg-main-background-light dark:bg-main-background-dark"
      onClick={() => {
        if (url) {
          window.open(url, "_blank");
        }
      }}
    >
      <motion.img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
        style={{ aspectRatio: "400/200", objectFit: "cover" }}
        height="200"
        width="400"
        whileHover={{
          scale: 1.04,
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-text-color-light dark:text-text-color-dark transition-colors duration-300">
          {title}
        </h2>
        <p className="text-sm text-primary-color-light dark:text-primary-color-dark mt-1 transition-colors duration-300">
          {description}
        </p>
        <p className="text-text-color-light dark:text-text-color-dark mt-2 transition-colors duration-300">
          Explore the details of this project, built with precision and designed
          to enhance user experience.
        </p>
      </div>
      <div className="p-4">
        <button className="flex items-center justify-center w-full px-4 py-2 mt-2 text-white bg-primary-color-light dark:bg-primary-color-dark rounded-md hover:bg-primary-color-light-hover dark:hover:bg-primary-color-dark-hover transition-colors duration-300">
          Learn More
          <MdOutlineKeyboardArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
