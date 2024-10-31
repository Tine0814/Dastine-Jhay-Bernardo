import { easeInOut, motion } from "framer-motion";
import CardComponent from "../CardComponent";
import { myWork } from "../ProjectListComponent";

export default function ProjectSectionComponent() {
  return (
    <section
      id="home"
      className="w-full flex justify-center shadow-inner bg-secondary-background-light dark:bg-secondary-background-dark text-primary-text-light dark:text-primary-text-dark transition-colors duration-300 pb-20 overflow-x-hidden"
    >
      <div className="min-w-full 2xl:min-w-[1300px] flex justify-center items-center p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.8, ease: easeInOut, delay: 1.5 },
          }}
          className="w-full grid xl:grid-cols-2 2xl:grid-cols-3 gap-10 z-10"
        >
          {myWork.map((work, index) => (
            <CardComponent
              key={index}
              image={work.image}
              title={work.title}
              shortDescription={work.projectTitle}
              url={work.url}
              fullDescription={work.description}
              tags={work.tags}
              role={work.role}
              allTech={work.allTech}
              companyLogo={work.companyLogo}
              companyUrl={work.companyUrl}
              githubUrl={work.githubUrl}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
