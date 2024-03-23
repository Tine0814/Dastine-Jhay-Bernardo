import { easeInOut, motion } from "framer-motion";
import animation from "../../assets/lottie/Animation2 - 1711175468407.json";
import Lottie from "lottie-react";

export default function PortfolioSectionComponent() {
  return (
    <section
      id="home"
      className="md:min-h-[600px] w-full  flex justify-center items-center bg-color-one overflow-x-hidden"
    >
      <div className="min-w-full 2xl:min-w-[1300px] grid place-content-center gap-5 p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: easeInOut, delay: 0.8 },
          }}
          className="relative flex justify-bettween flex-col md:flex-row  items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: easeInOut, delay: 1.8 },
            }}
            className="md:w-[320px] xl:w-[500px]"
          >
            <h1 className="text-[70px] xl:text-[80px] font-black text-text-four">
              Portfolio.
            </h1>
            <h2 className="text-[25px] text-text-one">
              Check out some of my latest Projects
            </h2>
            <p className="text-[20px] text-text-one mt-5">
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
              transition: { duration: 0.8, ease: easeInOut, delay: 1.8 },
            }}
            className="relative"
          >
            <figure>
              {
                <Lottie
                  animationData={animation}
                  className="w-[200px] sm:[400px] lg:w-[500px] 2xl:w-[600px]"
                />
              }
            </figure>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
