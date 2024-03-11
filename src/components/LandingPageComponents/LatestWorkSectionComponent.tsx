import letQuiz from "../../assets/img/letQuiz.png";
import toDo from "../../assets/img/toDo.png";
import clinic from "../../assets/img/clinic_inventory.png";
import minicat from "../../assets/img/minicat.png";
import minidog from "../../assets/img/minidog.png";
import { easeInOut, motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function LatestWorkSectionComponent() {
  const myWork = [
    {
      image: letQuiz,
      title: "Let Quiz Website",
      projectTitle: "Side Project",
      url: "https://let-quiz.vercel.app/",
    },
    {
      image: toDo,
      title: "CRUD website featuring a refined design",
      projectTitle: "Side Project",
      url: "https://let-quiz.vercel.app/s",
    },
    {
      image: clinic,
      title: "Clinic Inventory System",
      projectTitle: "Capstone Project",
      url: "https://let-quiz.vercel.app/s",
    },
  ];
  return (
    <section className="flex justify-center p-0 md:p-10 shadow-2xl overflow-hidden bg-color-three">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.8, ease: easeInOut, delay: 1.5 },
        }}
        className="relative min-w-full 2xl:min-w-[1300px] p-20 flex flex-col items-center justify-center gap-10"
      >
        <div className="flex items-center gap-12">
          <span className="md:w-[200px] xl:w-[340px] h-[2px] bg-color-five"></span>
          <h1 className="font-semibold md:text-[15px] text-text-four xl:text-[20px] text-center">
            SOME OF MY LATEST WORK
          </h1>
          <span className="md:w-[200px] xl:w-[340px]  h-[2px] bg-color-five"></span>
        </div>
        <div className="w-full  grid xl:grid-cols-2 2xl:grid-cols-3 gap-10 z-10 lg:place-content-center">
          {myWork.map((work, index) => (
            <motion.div
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.6, ease: easeInOut },
              }}
              key={index}
              className="w-full lg:w-[400px] bg-color-three rounded-md container-shadow p-3 hover-show-icon"
              onClick={() => {
                if (work.url) {
                  window.open(work.url, "_blank");
                }
              }}
            >
              <div className="w-full h-[180px] rounded-md grid place-content-center overflow-hidden p-5 bg-color-four">
                <img src={work.image} alt="" className="w-[300px]" />
              </div>
              <div className="flex justify-between items-center">
                <div className="ml-4 mt-5 text-[15px]">
                  <h1 className="text-text-one">{work.title}</h1>
                  <h2 className="text-text-four font-bold mt-2">
                    {work.projectTitle}
                  </h2>
                </div>
                <motion.div className="text-[70px] opacity-0 text-color-five">
                  <MdOutlineKeyboardArrowRight />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="absolute -bottom-20 md:-bottom-32 -right-1 md:-right-10"
          animate={{
            y: [-7, 0, -7],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={minicat} alt="" className="w-[250px]" />
        </motion.div>
        <motion.div
          className="absolute -bottom-5 -right-10 md:-bottom-16 md:-right-24"
          animate={{
            y: [-7, 0, -7],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <img src={minidog} alt="" className="w-[150px]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
