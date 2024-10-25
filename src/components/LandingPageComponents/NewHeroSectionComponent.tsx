import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import GradiantText from "../Text/GradiantText";

const NewHeroSectionComponent = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center items-center md:h-screen p-0 md:p-10 shadow-2xl overflow-hidden">
      <div className="relative z-10 max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 space-y-8 text-center lg:text-left w-[1000px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <GradiantText childeren={"Dastine Bernardo"} />
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600">
              Fullstack Developer
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              I create sleek designs and write pristine code, fueled by passion
              and forged with precision.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 flex items-center">
                View Experience
                <HiArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  navigate("/Dastine-Jhay-Bernardo/contact");
                }}
                className="px-6 py-3 border border-gray-300 hover:bg-gray-100 rounded-md transition-colors duration-300"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 relative w-full max-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            <div className="relative">
              <div className="relative z-10 backdrop-filter backdrop-blur-sm bg-white/30 border border-gray-200 rounded-lg shadow-xl overflow-hidden aspect-square"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg filter blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSectionComponent;
