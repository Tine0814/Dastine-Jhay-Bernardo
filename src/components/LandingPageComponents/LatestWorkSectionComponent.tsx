import ts from "../../assets/img/ts.png";
import js from "../../assets/img/js-API2.png";
import lilo from "../../assets/img/LiloDashboard.png";
// import minicat from "../../assets/img/minicat.png";
// import minidog from "../../assets/img/minidog.png";
import { easeInOut, motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function LatestWorkSectionComponent() {
  const myWork = [
    {
      image: lilo,
      title: "HR Management System",
      projectTitle: "20023 Branded Tech (Fullstack)",
      url: "https://demo.lilohr.com/admin/dashboard",
    },
    {
      image: ts,
      title: "REST API Express.js + mysql + typescript",
      projectTitle: "Side Project (Backend)",
      url: "https://github.com/Tine0814/Crud-node-sql",
    },
    {
      image: js,
      title: "REST API Express.js + mysql",
      projectTitle: "Side Project (Backend)",
      url: "https://github.com/Tine0814/Crud-node-mysql",
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
          whileHover={{ scale: 1.3 }}
          className="border-b-2 font-semibold md:text-[15px] text-text-four xl:text-[20px]"
        >
          <Link to="/Dastine-Jhay-Bernardo/portfolio">See More</Link>
        </motion.div>
        {/* <motion.div
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
        </motion.div> */}
      </motion.div>
    </section>
  );
}
