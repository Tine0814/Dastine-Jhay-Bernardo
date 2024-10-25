import { easeInOut, motion } from "framer-motion";
import animation from "../../assets/lottie/Animation2 - 1711175468407.json";
import Lottie from "lottie-react";
import GradiantText from "../Text/GradiantText";

export default function PortfolioSectionComponent() {
  return (
    <section
      id="home"
      className="md:min-h-[600px] w-full flex justify-center items-center bg-main-background-light dark:bg-main-background-dark text-secondary-text-light dark:text-secondary-text-dark transition-colors duration-300 overflow-x-hidden"
    >
      <div className="min-w-full 2xl:min-w-[1300px] grid place-content-center gap-5 p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: easeInOut },
          }}
          className="relative flex justify-between flex-col md:flex-row items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: easeInOut },
            }}
            className="xl:w-[500px]"
          >
            <h1 className="text-[70px] xl:text-[80px] font-black text-primary-color-light dark:text-primary-color-dark transition-colors duration-300">
              <GradiantText childeren={"Portfolio."} />
            </h1>
            <h2 className="text-[25px] text-primary-text-light dark:text-primary-text-dark transition-colors duration-300">
              Check out some of my latest Projects
            </h2>
            <p className="text-[20px] text-primary-text-light dark:text-primary-text-dark mt-5 transition-colors duration-300">
              I have experience working at startups, tech companies, and
              corporate environments, contributing to various projects such as
              design systems, websites, apps, and maintaining the applications.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: easeInOut },
            }}
            className="relative"
          >
            <figure>
              <Lottie
                animationData={animation}
                className="w-full md:w-[400px] xl:w-[600px]"
              />
            </figure>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
