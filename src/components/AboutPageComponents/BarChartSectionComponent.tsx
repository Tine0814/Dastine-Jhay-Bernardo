import { easeInOut, motion } from "framer-motion";
import naruto from "../../assets/gif/naruto.gif";
import hinata from "../../assets/gif/hinata.gif";

export default function BarChartSectionComponent() {
  const barItem = [
    {
      percent: " 95%",
      name: "Coffee",
      color: "bg-[#E5C287]",
    },
    {
      percent: " 90%",
      name: "Programming",
      color: "bg-[#31363F]",
    },
    {
      percent: "45%",
      name: "Anime",
      color: "bg-[#6196A6]",
    },
    {
      percent: "40%",
      name: "Weight Lifting",
      color: "bg-[#211C6A]",
    },
    {
      percent: "100%",
      name: "Adaptability (Technologies) ",
      color: "bg-[#2D9596]",
    },
  ];

  const shinobiRank = [
    {
      title: "Genin",
      logo: "",
    },
    {
      title: "Chunin",
      logo: "",
    },
    {
      title: "Jonin",
      logo: "",
    },
    {
      title: "Special Jonin",
      logo: "",
    },
    {
      title: "Hokage",
      logo: "",
    },
  ];
  return (
    <section
      id="home"
      className="w-full hidden md:h-[600px] md:flex justify-center items-end shadow-inner bg-color-one overflow-x-hidden"
    >
      <div className="relative min-w-full 2xl:min-w-[1300px] flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.8, ease: easeInOut, delay: 0.4 },
          }}
        >
          <img
            className="absolute w-[400px] -left-80 bottom-0"
            src={hinata}
            alt="naruto"
          />
          <img
            className="absolute w-[330px] -right-80 bottom-0"
            src={naruto}
            alt="naruto"
          />
        </motion.div>
        <div className="w-full flex justify-center items-center flex-col gap-10">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, ease: easeInOut, delay: 0.4 },
            }}
            className="w-full text-[25px] font-semibold text-text-one text-right"
          >
            My Skills
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, ease: easeInOut, delay: 0.4 },
            }}
            className="w-full h-[400px] flex gap-5"
          >
            <ul className="pt-10 flex flex-col-reverse justify-between text-[15px] text-text-one font-black">
              {shinobiRank.map((shinobi, index) => (
                <li key={index}>{shinobi.title}</li>
              ))}
            </ul>
            <div className="flex h-full gap-10 items-end pt-10 px-10 border-2 border-dotted border-r-0">
              {barItem.map((item, index) => (
                <motion.div
                  key={index}
                  className={`w-[180px] flex flex-col justify-end ${item.color} rounded-t-lg p-5 text-center`}
                  whileInView={{
                    height: item.percent,
                    transition: { duration: 1.5, ease: easeInOut, delay: 0.5 },
                  }}
                >
                  <h2 className="text-[30px] font-black text-text-two">
                    {item.percent}
                  </h2>
                  <h1 className="text-[15px] font-black text-text-two">
                    {item.name}
                  </h1>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
