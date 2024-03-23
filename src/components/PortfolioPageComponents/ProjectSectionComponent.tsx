import letQuiz from "../../assets/img/letQuiz.png";
import toDo from "../../assets/img/toDo.png";
import clinic from "../../assets/img/clinic_inventory.png";
import dragonball from "../../assets/img/dragon.png";
import portfolio from "../../assets/img/firstPortfolio.png";
import lilo from "../../assets/img/LiloDashboard.png";
import { easeInOut, motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function ProjectSectionComponent() {
  const myWork = [
    {
      image: lilo,
      title: "HR Management System",
      projectTitle: "20023 Branded Tech",
      url: "https://demo.lilohr.com/admin/dashboard",
    },
    {
      image: portfolio,
      title: "First Portfolio Website",
      projectTitle: "Side Project",
      url: "https://tine0814.github.io/my-portfolio/",
    },
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
      url: "https://to-do-list-mern-stack-frontend.vercel.app/",
    },
    {
      image: dragonball,
      title: "Dragon Ball Game Landing Page",
      projectTitle: "Side Project",
      url: "https://github.com/Tine0814/Dragon-ball-game-Landing-page",
    },
    {
      image: clinic,
      title: "Clinic Inventory System",
      projectTitle: "Capstone Project",
      url: "https://github.com/Tine0814/Clinic-Inventory-System",
    },
  ];
  return (
    <section
      id="home"
      className="w-full flex justify-center shadow-inner bg-color-three overflow-x-hidden pb-20"
    >
      <div className="min-w-full 2xl:min-w-[1300px] flex justify-center items-center p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.8, ease: easeInOut, delay: 1.5 },
          }}
          className="w-full  grid xl:grid-cols-2 2xl:grid-cols-3 gap-10 z-10"
        >
          {myWork.map((work, index) => (
            <motion.div
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.6, ease: easeInOut },
              }}
              key={index}
              className="w-full lg:w-[400px] bg-color-three rounded-md container-shadow p-3 hover-show-icon cursor-pointer"
              onClick={() => {
                if (!work.url) {
                  {
                    ("/");
                  }
                } else {
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
        </motion.div>
      </div>
    </section>
  );
}
