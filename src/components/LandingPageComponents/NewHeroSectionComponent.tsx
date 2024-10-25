import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import GradiantText from "../Text/GradiantText";
import { downloadFileAtURL, PDF_FILE_URL } from "./HeroSectionComponent";
import heroImg from "../../assets/img/me.png";

const NewHeroSectionComponent = () => {
  return (
    <section className="flex justify-center items-center min-h-screen p-5 md:p-10 shadow-2xl overflow-hidden bg-main-background-light dark:bg-main-background-dark text-secondary-text-light dark:text-secondary-text-dark transition-colors duration-300">
      <div className="relative z-10 max-w-8xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            className="flex-1 space-y-6 text-center lg:text-left w-full  md:max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-color-light dark:text-primary-color-dark">
              <GradiantText childeren={"Dastine Bernardo"} />
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-primary-text-light dark:text-primary-text-dark">
              Fullstack Developer
            </h2>
            <p className="text-base sm:text-lg md:text-xl w-full mx-auto lg:mx-0">
              I create sleek designs and write pristine code, fueled by passion
              and forged with precision.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="px-4 py-2 sm:px-6 sm:py-3 bg-primary-color-light hover:bg-primary-color-dark dark:bg-primary-color-dark dark:hover:bg-primary-color-light text-primary-text-dark rounded-md font-bold transition-colors duration-300 flex items-center">
                View Experience
                <HiArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  downloadFileAtURL(PDF_FILE_URL);
                }}
                className="px-4 py-2 sm:px-6 sm:py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md transition-colors duration-300"
              >
                Download CV
              </button>
            </div>
          </motion.div>
          <motion.div
            className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 -left-4 w-44 h-44 sm:w-72 sm:h-72 bg-purple-300 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute top-0 -right-4 w-44 h-44 sm:w-72 sm:h-72 bg-yellow-300 dark:bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-10 w-44 h-44 sm:w-72 sm:h-72 bg-pink-300 dark:bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            <div className="relative p-5 sm:p-10 z-10 backdrop-filter backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-600 rounded-lg shadow-xl overflow-hidden aspect-square">
              <img src={heroImg} alt="Dastine Bernardo" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-800/20 dark:via-purple-800/20 dark:to-pink-800/20 rounded-lg filter blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSectionComponent;
