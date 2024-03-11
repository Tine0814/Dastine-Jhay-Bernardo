import { easeInOut, motion } from "framer-motion";
import OutlineButtonComponent from "../Buttons/OutlineButtonComponent";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const PDF_FILE_URL =
  "https://tine0814.github.io/Dastine-Jhay-Bernardo/CV-Dastine-Jhay-Bernardo.pdf";

export default function HeroSectionComponent() {
  const downloadFileAtURL = (url: string) => {
    const fileName = url.split("/").pop();
    if (!fileName) {
      console.error("Unable to determine file name from URL:", url);
      return;
    }
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.8, ease: easeInOut, delay: 0.2 },
      }}
      id="home"
      className="relative h-[400px] md:h-[600px] w-full  flex justify-center items-center shadow-xl text-text-three"
    >
      <div className="bg-background-img bg-center bg-cover h-full w-full absolute blur-[5px]"></div>
      <div className="bg-color-two h-full w-full absolute opacity-[0.6]"></div>
      <div className="relative min-w-full 2xl:min-w-[1300px] flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-0 sm:w-[400px] md:w-full ">
          <motion.h3
            initial={{ x: -500, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, ease: easeInOut, delay: 1.8 },
            }}
            className="text-[15px] md:text-[20px]"
          >
            Hi, my name is
          </motion.h3>
          <motion.h1
            initial={{ x: 500, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, ease: easeInOut, delay: 1.8 },
            }}
            className="text-[30px] md:text-[50px] lg:text-[60px] font-black text-text-two"
          >
            Dastine Bernardo.
          </motion.h1>
          <motion.h5
            initial={{ x: -500, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, ease: easeInOut, delay: 1.8 },
            }}
            className="text-[15px] md:text-[20px] text-center"
          >
            I create sleek designs and write pristine code, fueled by passion
            and forged with precision.
          </motion.h5>
        </div>
        <div className="flex items-center gap-7">
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, ease: easeInOut, delay: 1.8 },
            }}
          >
            <OutlineButtonComponent
              label="Download CV"
              onClick={() => {
                downloadFileAtURL(PDF_FILE_URL);
              }}
            />
          </motion.div>
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, ease: easeInOut, delay: 1.8 },
            }}
            className="flex gap-5"
          >
            <motion.a whileHover={{ scale: 1.3 }} href="">
              <FaGithub className="text-[30px] " />
            </motion.a>
            <motion.a whileHover={{ scale: 1.3 }} href="">
              <FaLinkedin className="text-[30px]" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.3 }} href="">
              <FaFacebook className="text-[30px]" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
