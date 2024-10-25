import ts from "../../assets/img/ts.png";
import js from "../../assets/img/js-API2.png";
import lilo from "../../assets/img/LiloDashboard.png";
import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
import CardComponent from "../CardComponent";

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
    <section className="flex justify-center p-0 md:p-10 shadow-2xl overflow-hidden text-secondary-text-light dark:text-secondary-text-dark bg-secondary-background-light dark:bg-secondary-background-dark transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.8, ease: easeInOut, delay: 1.5 },
        }}
        className="relative min-w-full 2xl:min-w-[1300px] p-20 flex flex-col items-center justify-center gap-10"
      >
        <div className="flex items-center gap-12">
          <span className="md:w-[200px] xl:w-[340px] h-[2px] bg-main-background-light dark:bg-main-background-dark"></span>
          <h1 className="font-semibold md:text-[15px] xl:text-[20px] text-center transition-colors duration-300">
            SOME OF MY LATEST WORK
          </h1>
          <span className="md:w-[200px] xl:w-[340px] h-[2px] bg-main-background-light dark:bg-main-background-dark"></span>
        </div>
        <div className="w-full grid xl:grid-cols-2 2xl:grid-cols-3 gap-10 z-10 lg:place-content-center">
          {myWork.map((work, index) => (
            <CardComponent
              key={index}
              image={work.image}
              title={work.title}
              description={work.projectTitle}
              url={work.url}
            />
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.3 }}
          className="border-b-2 font-semibold md:text-[15px] xl:text-[20px] transition-colors duration-300"
        >
          <Link to="/Dastine-Jhay-Bernardo/portfolio">See More</Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
