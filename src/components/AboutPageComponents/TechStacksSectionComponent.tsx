import { easeInOut, motion } from "framer-motion";
import { BiLogoTypescript } from "react-icons/bi";
import { DiCodeigniter, DiMongodb } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoMdGitMerge } from "react-icons/io";
import {
  SiCplusplus,
  SiCsharp,
  SiExpress,
  SiJavascript,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function TechStacksSectionComponent() {
  const techStacks = [
    {
      title: "React",
      icon: <FaReact />,
      color: "bg-[#2f5ec4]",
      delay: 0.1,
    },
    {
      title: "Next",
      icon: <TbBrandNextjs />,
      color: "bg-color-three",
      delay: 0.2,
      textColor: "text-text-four",
    },
    {
      title: "Node",
      icon: <FaNodeJs />,
      color: "bg-[#0b802e]",
      delay: 0.3,
    },
    {
      title: "Express",
      icon: <SiExpress />,
      color: "bg-color-three",
      delay: 0.4,
      textColor: "text-text-four",
    },
    {
      title: "Codeigniter",
      icon: <DiCodeigniter />,
      color: "bg-color-three",
      delay: 0.5,
      textColor: "text-[#e64c4c]",
    },
    {
      title: "Typescript",
      icon: <BiLogoTypescript />,
      color: "bg-[#2f74c0]",
      delay: 0.6,
    },
    {
      title: "Javascript",
      icon: <SiJavascript />,
      color: "bg-[#eaec44]",
      delay: 0.7,
    },
    {
      title: "Csharp",
      icon: <SiCsharp />,
      color: "bg-[#bc46e0]",
      delay: 0.8,
    },
    {
      title: "C++",
      icon: <SiCplusplus />,
      color: "bg-[#4683e0]",
      delay: 0.9,
    },
    {
      title: "PHP",
      icon: <FaPhp />,
      color: "bg-[#7176b3]",
      delay: 1.0,
    },
    {
      title: "MongoDB",
      icon: <DiMongodb />,
      color: "bg-[#4fac3f]",
      delay: 1.1,
    },
    {
      title: "Mysql",
      icon: <GrMysql />,
      color: "bg-[#d78734]",
      delay: 1.2,
    },
    {
      title: "HTML",
      icon: <FaHtml5 />,
      color: "bg-[#eb622c]",
      delay: 1.3,
    },
    {
      title: "CSS",
      icon: <FaCss3Alt />,
      color: "bg-[#4474cd]",
      delay: 1.4,
    },
    {
      title: "Tailwind",
      icon: <SiTailwindcss />,
      color: "bg-[#14b9c3]",
      delay: 1.5,
    },
    {
      title: "Bootstrap",
      icon: <FaBootstrap />,
      color: "bg-[#7216e0]",
      delay: 1.6,
    },
    {
      title: "Github",
      icon: <FaGithub />,
      color: "bg-[#080808]",
      delay: 1.7,
    },
    {
      title: "Git",
      icon: <IoMdGitMerge />,
      color: "bg-[#ec3a10]",
      delay: 1.8,
    },
    {
      title: "Postman",
      icon: <SiPostman />,
      color: "bg-[#f36b33]",
      delay: 1.9,
    },
  ];

  return (
    <section
      id="home"
      className="lg:min-h-[600px] w-full  flex justify-center shadow-inner text-[#1e1a53] bg-color-three"
    >
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: easeInOut },
        }}
        className="min-w-full 2xl:min-w-[1300px] flex flex-col items-center gap-5 p-20"
      >
        <h1 className="text-[25px] font-semibold text-text-one">Tooling</h1>
        <div className="bg-color-four rounded-md shadow-xl p-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-10">
          {techStacks.map((tech, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: easeInOut,
                  delay: tech.delay,
                },
              }}
              key={index}
              className={`${
                tech.textColor ? tech.textColor : "text-text-two"
              } ${
                tech.color
              } rounded-md p-2 flex justify-center items-center text-[40px] shadow-2xl cursor-pointer`}
            >
              {tech.icon}
              <h1 className="text-[20px] font-black">{tech.title}</h1>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
