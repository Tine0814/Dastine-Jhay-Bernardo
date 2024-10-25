import { PieChart } from "@mui/x-charts/PieChart";
import { easeInOut, motion } from "framer-motion";

export default function PieChartSectionComponent() {
  const frontEnd = [
    { skills: "HTML5 / CSS3" },
    { skills: "UI / UX Design" },
    { skills: "JavaScript (ES6+) / TypeScript" },
    { skills: "Responsive Web Design" },
    { skills: "Frontend Frameworks (React, Next, Vue)" },
    { skills: "CSS Frameworks (Bootstrap, Tailwind)" },
  ];
  const backEnd = [
    { skills: "Node.js / Express.js" },
    { skills: "RESTful API Development" },
    { skills: "Database Management (SQL/NoSQL)" },
    { skills: "Authentication and Authorization" },
    { skills: "REST API Testing (Postman)" },
    { skills: "Version Control (Git)" },
    { skills: "Performance Optimization" },
    { skills: "Error Handling and Debugging" },
  ];

  return (
    <section
      id="home"
      className="w-full flex justify-center shadow-inner bg-main-background-light dark:bg-main-background-dark text-secondary-text-light dark:text-secondary-text-dark transition-colors duration-300 overflow-x-hidden"
    >
      <div className="min-w-full 2xl:min-w-[1300px] flex justify-center items-center p-10">
        <div className="flex flex-col justify-center items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: easeInOut, delay: 0.4 },
            }}
            className="sm:w-[500px] sm:h-[300px] md:w-[600px] md:h-[400px]"
          >
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 60, label: "Front-end", color: "#8B5CF6" },
                    { id: 1, value: 40, label: "Back-end", color: "#A78BFA" },
                  ],
                  innerRadius: 30,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: -190,
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "gray",
                  },
                },
              ]}
            />
          </motion.div>
          <div className="flex p-10 flex-col justify-center lg:flex-row lg:justify-between gap-20">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileHover={{ scale: 1.1 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: easeInOut, delay: 0.6 },
              }}
              className="w-[300px] md:w-[400px] bg-secondary-background-light dark:bg-secondary-background-dark shadow-xl rounded-lg p-10 transition-colors duration-300"
            >
              <h1 className="text-primary-color-light dark:text-primary-color-dark font-black text-[25px] transition-colors duration-300">
                Front-End
              </h1>
              <ul className="mt-5 list-disc text-[20px] text-primary-text-light dark:text-primary-text-dark leading-10 transition-colors duration-300">
                {frontEnd.map((frontend, index) => (
                  <li key={index}>{frontend.skills}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileHover={{ scale: 1.1 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: easeInOut, delay: 0.6 },
              }}
              className="w-[300px] md:w-[400px] bg-secondary-background-light dark:bg-secondary-background-dark shadow-xl rounded-lg p-10 transition-colors duration-300"
            >
              <h1 className="text-primary-color-light dark:text-primary-color-dark font-black text-[25px] transition-colors duration-300">
                Back-End
              </h1>
              <ul className="mt-5 list-disc text-[20px] text-primary-text-light dark:text-primary-text-dark leading-10 transition-colors duration-300">
                {backEnd.map((backend, index) => (
                  <li key={index}>{backend.skills}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
