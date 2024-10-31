import { easeInOut, motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import GradiantText from "../Text/GradiantText";
import { downloadFileAtURL, PDF_FILE_URL } from "./HeroSectionComponent";
import heroImg from "../../assets/img/me.png";
import ButtonComponent from "../Buttons/ButtonComponent";

const NewHeroSectionComponent = () => {
  return (
    <section className="flex justify-center items-center min-h-screen p-5 md:p-10 shadow-2xl overflow-hidden bg-main-background-light dark:bg-main-background-dark text-secondary-text-light dark:text-secondary-text-dark transition-colors duration-300">
      <div className="relative z-10 max-w-8xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeInOut }}
            className="flex-1 space-y-6 text-center lg:text-left w-full md:max-w-xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-color-light dark:text-primary-color-dark transition-colors duration-300">
              <GradiantText childeren={"Dastine Bernardo"} />
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-primary-text-light dark:text-primary-text-dark transition-colors duration-300">
              Fullstack Developer
            </h2>
            <p className="text-base sm:text-lg md:text-xl w-full mx-auto lg:mx-0 transition-colors duration-300">
              I create sleek designs and write pristine code, fueled by passion
              and forged with precision.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: easeInOut, delay: 0.5 }}
              >
                <ButtonComponent
                  isContaine={true}
                  label={
                    <div className="flex gap-2 items-center">
                      View Experience
                      <HiArrowRight />
                    </div>
                  }
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: easeInOut, delay: 0.5 }}
              >
                <ButtonComponent
                  onClick={() => {
                    downloadFileAtURL(PDF_FILE_URL);
                  }}
                  label={
                    <div className="flex gap-2 items-center">Download CV</div>
                  }
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeInOut }}
            className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg"
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
