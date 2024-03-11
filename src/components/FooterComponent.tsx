import { easeInOut, motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();

  const [isHovered, setIsHovered] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 2, ease: easeInOut, delay: 1 },
      }}
      className="relative w-full h-[80px] bg-color-four grid place-content-center text-text-one border-2"
    >
      <div className=" min-w-full 2xl:min-w-[1600px] z-10">
        <a href="">© {currentYear} Dastine Jhay Bernardo</a>
      </div>
      <div
        className={`absolute -top-[70px] ${
          isHovered ? "-top-[90px]" : ""
        } ease-in-out duration-300 left-1/2 -translate-x-1/2`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleScrollToTop}
      >
        <div className="bg-color-four  h-[130px] border-2 border-b-0 border-l-0 border-r-0 shadow-inner-top  w-[130px] rounded-full relative overflow-hidden cursor-pointer">
          <div className="absolute top-2 left-1/2 -translate-x-1/2">
            <IoIosArrowUp className="text-[60px] text-text-four" />
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
