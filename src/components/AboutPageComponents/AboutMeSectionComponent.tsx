import gradpic from "../../assets/img/grad.png";
import programming from "../../assets/img/python.jpg";
import travel from "../../assets/img/IMG_0026.jpeg";
import workout from "../../assets/img/workout.png";
import city from "../../assets/img/city.png";
import coffee from "../../assets/img/coffee.png";
import prog from "../../assets/img/prog.png";
import { easeInOut, motion } from "framer-motion";
import GradiantText from "../Text/GradiantText";

export default function AboutMeSectionComponent() {
  const images = [
    {
      image: prog,
      delay: 0.2,
    },
    {
      image: workout,
      delay: 0.4,
    },
    {
      image: city,
      delay: 0.6,
    },
    {
      image: coffee,
      delay: 0.8,
    },
    {
      image: travel,
      delay: 1,
    },
  ];
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
            transition: { duration: 1, ease: easeInOut },
          }}
          className="relative flex justify-bettween flex-col md:flex-row border-b-2  items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: easeInOut },
            }}
            className="md:w-[320px] xl:w-[500px]"
          >
            <h1 className="text-[70px] xl:text-[80px] font-black text-text-four">
              <GradiantText childeren={"About."} />
            </h1>
            <h2 className="text-[25px] text-text-one">
              I'm a full-stack developer in Philippines.
            </h2>
            <p className="text-[20px] text-text-one mt-5">
              Since 2019, programming ignited my passion. Exploring web
              development sparked my love for simplifying complexity into
              elegant, intuitive designs. When not coding, I'm lost in books,
              immersed in anime, or challenging myself at the gym.
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
            <img
              src={gradpic}
              alt="my image"
              className="w-[500px] filter-enhance relative z-[2]"
            />
            <img
              src={programming}
              className="absolute bottom-0 z-[1] -right-40"
            />
          </motion.div>
        </motion.div>
        <div className="grid place-content-center grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {images.map((image, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1.8,
                  ease: easeInOut,
                  delay: image.delay,
                },
              }}
              key={index}
              className="p-2 w-[120px] h-[150px] bg-color-three container-shadow cursor-pointer"
            >
              <img src={image.image} alt="my image" className="w-full h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
