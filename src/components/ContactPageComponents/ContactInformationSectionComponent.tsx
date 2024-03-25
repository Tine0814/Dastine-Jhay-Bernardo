import { easeInOut, motion } from "framer-motion";
import mirror from "../../assets/img/mirrorPic.png";
import programming from "../../assets/img/python.jpg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

export default function ContactInformationSectionComponent() {
  const social = [
    {
      icon: <FaLinkedinIn />,
      tittle: "Linkedin",
      url: "https://www.linkedin.com/in/dastine-bernardo-148499254/",
      color: "bg-[#006faa]",
    },
    {
      icon: <FaFacebookF />,
      tittle: "Facebook",
      url: "https://web.facebook.com/Dastinebernardo",
      color: "bg-[#1874ed]",
    },
    {
      icon: <FaInstagram />,
      tittle: "Instagram",
      url: "https://www.instagram.com/dstn_bernardo/",
      color: "bg-[#e13341]",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen w-full  flex justify-center items-center bg-color-one overflow-x-hidden"
    >
      <div className="min-w-full 2xl:min-w-[1300px] p-10 grid place-content-center border-b-2 gap-5 mt-0 lg:-mt-40 pb-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: easeInOut, delay: 0.8 },
          }}
          className="relative flex justify-bettween flex-col md:flex-row  items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: easeInOut, delay: 1.8 },
            }}
            className="w-[320px] xl:w-[500px]"
          >
            <h1 className="text-[70px] xl:text-[80px] font-black text-text-four">
              Contact.
            </h1>
            <h2 className="text-[25px] text-text-one">
              Get in touch with me via social media or email.
            </h2>
            <div className="mt-5 flex items-center gap-2 text-text-one text-[20px] font-bold">
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
                    className={`text-[30px] text-text-two ${soc.color} p-2  rounded-full`}
                  >
                    {soc.icon}
                  </div>
                  <h1 className="text-text-one text-[20px]">{soc.tittle}</h1>
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: easeInOut, delay: 1.8 },
            }}
            className="relative"
          >
            <img
              src={mirror}
              alt="my image"
              className="w-[500px] filter-enhance relative z-[2]"
            />
            <img
              src={programming}
              className="absolute bottom-0 z-[1] -right-40"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
