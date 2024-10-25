import { easeInOut, motion } from "framer-motion";
import mirror from "../../assets/img/mirrorPic.png";
import programming from "../../assets/img/python.jpg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import GradiantText from "../Text/GradiantText";

export default function ContactInformationSectionComponent() {
  const social = [
    {
      icon: <FaLinkedinIn />,
      title: "Linkedin",
      url: "https://www.linkedin.com/in/dastine-bernardo-148499254/",
      color: "bg-[#006faa]",
    },
    {
      icon: <FaFacebookF />,
      title: "Facebook",
      url: "https://web.facebook.com/Dastinebernardo",
      color: "bg-[#1874ed]",
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      url: "https://www.instagram.com/dstn_bernardo/",
      color: "bg-[#e13341]",
    },
  ];

  return (
    <section
      id="home"
      className="h-full w-full flex justify-center items-center bg-main-background-light dark:bg-main-background-dark text-secondary-text-light dark:text-secondary-text-dark transition-colors duration-300 overflow-x-hidden"
    >
      <div className="min-w-full 2xl:min-w-[1300px] p-10 grid place-content-center border-b-2 border-primary-text-light dark:border-primary-text-dark gap-5 mt-0 lg:-mt-40 pb-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: easeInOut },
          }}
          className="relative flex justify-between flex-col md:flex-row items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: easeInOut },
            }}
            className="w-[320px] xl:w-[500px]"
          >
            <h1 className="text-[70px] xl:text-[80px] font-black text-primary-color-light dark:text-primary-color-dark transition-colors duration-300">
              <GradiantText childeren={"Contact."} />
            </h1>
            <h2 className="text-[25px] text-primary-text-light dark:text-primary-text-dark transition-colors duration-300">
              Get in touch with me via social media or email.
            </h2>
            <div className="mt-5 flex items-center gap-2 text-primary-text-light dark:text-primary-text-dark text-[20px] font-bold transition-colors duration-300">
              <MdAttachEmail />
              <h1>Djhaybernardo@gmail.com</h1>
            </div>
            <div className="mt-5 grid lg:grid-cols-3 grid-cols-2 gap-10">
              {social.map((soc, index) => (
                <motion.a
                  whileHover={{ scale: 1.3 }}
                  key={index}
                  href={soc.url}
                  className="flex items-center gap-2"
                  target="_blank"
                >
                  <div
                    className={`text-[30px] text-white ${soc.color} p-2 rounded-full transition-colors duration-300`}
                  >
                    {soc.icon}
                  </div>
                  <h1 className="text-primary-text-light dark:text-primary-text-dark text-[20px] transition-colors duration-300">
                    {soc.title}
                  </h1>
                </motion.a>
              ))}
            </div>
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
              src={mirror}
              alt="my image"
              className="w-[500px] filter-enhance relative z-[2] rounded-md transition-colors duration-300"
            />
            <img
              src={programming}
              className="absolute bottom-0 z-[1] -right-40 rounded-md transition-colors duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
