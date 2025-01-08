import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import certificateOne from "../../assets/certificate/UC-7ae58f08-6d1d-4f2b-b847-1b40159ca702.jpg";
import certificateTwo from "../../assets/certificate/UC-7ba5bf56-9347-4195-ad3d-658f7232587f.jpg";
import certificateThree from "../../assets/certificate/UC-c9225180-2b55-4409-9fc1-0c13625ea66e.jpg";
import certificateFour from "../../assets/certificate/UC-f3860ff7-5455-44a6-af87-e90147a9bf27.jpg";
import nclex from "../../assets/certificate/nclex.jpg";
import { DiCodeigniter, DiJqueryLogo, DiMsqlServer } from "react-icons/di";
import { FaBootstrap, FaNodeJs, FaPhp } from "react-icons/fa";
import {
  SiMui,
  SiMysql,
  SiPrisma,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { LuFileJson2 } from "react-icons/lu";
import { BsFiletypeXml } from "react-icons/bs";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import excelink from "../../assets/img/excelinkLogo.png";
import safc from "../../assets/img/SAFC.png";
import brandedTech from "../../assets/img/brandedtech.jpg";
import nclexlogo from "../../assets/img/NCLEXYellowLogo.png";

interface WorkExperience {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  technologies: string[] | ReactNode[];
  subRoles?: string[];
}

export default function JobAndCertificateSectionComponent() {
  const [activeTab, setActiveTab] = useState("experience");

  const experiences: WorkExperience[] = [
    {
      startDate: "APRIL 2024",
      endDate: "PRESENT",
      title: "Full-stack Developer",
      company: "SAFC",
      companyUrl: "#",
      description:
        "Developed a system from scratch, including planning, structuring, and coding the core functionalities to ensure robust, scalable, and efficient performance. Supervised a team of developers by providing guidance, setting project goals, and ensuring timely progress, quality standards, and adherence to best practices. Actively involved in UI/UX design, collaborating on user interface layouts, enhancing the user experience, and ensuring the design aligned with the system's overall functionality and aesthetics. Led efforts to integrate essential features such as database structuring, API setup, and server configuration for seamless system functionality and reliable performance. Monitored and optimized the system post-launch, implementing updates, debugging issues, and applying enhancements to keep the system secure and responsive across devices and platforms.",
      technologies: [
        <div className="flex gap-2 items-center">
          <FaReact />
          React
        </div>,
        <div className="flex gap-2 items-center">
          <TbBrandNextjs />
          Next
        </div>,
        <div className="flex gap-2 items-center">
          <FaNodeJs />
          Node Express
        </div>,
        <div className="flex gap-2 items-center">
          <DiMsqlServer />
          MS SQL
        </div>,
        <div className="flex gap-2 items-center">
          <SiTailwindcss />
          Tailwind
        </div>,
        <div className="flex gap-2 items-center">
          <SiPrisma />
          Prisma ORM
        </div>,
        <div className="flex gap-2 items-center">
          <SiTypescript />
          TypeScript
        </div>,
        <div className="flex gap-2 items-center">
          <SiRedux />
          Redux Tool Kit
        </div>,
        <div className="flex gap-2 items-center">
          <SiMui />
          MUI
        </div>,
        <div className="flex gap-2 items-center">ZOD</div>,
        <div className="flex gap-2 items-center">YUP</div>,
        <div className="flex gap-2 items-center">LDAP</div>,
      ],
    },
    {
      startDate: "MARCH 2024",
      endDate: "JULY 2024",
      title: "Part-time Frontend Developer",
      company: "Excelink",
      companyUrl: "#",
      description:
        "Develop and maintain responsive, high-quality websites and web applications for a range of projects across industries, ensuring exceptional performance and user experiences. Collaborate with designers and backend developers to transform creative concepts into fully functional, pixel-perfect web interfaces. Utilize modern frontend technologies to build scalable, maintainable codebases while adhering to best practices in web development. Contribute to team success by sharing knowledge, troubleshooting technical challenges, and optimizing workflows to meet project goals efficiently.",
      technologies: [
        <div className="flex gap-2 items-center">
          <DiJqueryLogo />
          JQuery
        </div>,
        <div className="flex gap-2 items-center">
          <FaPhp />
          PHP
        </div>,
        <div className="flex gap-2 items-center">
          <SiMysql />
          MySQL
        </div>,
        <div className="flex gap-2 items-center">
          <FaReact />
          React
        </div>,
        <div className="flex gap-2 items-center">
          <SiMui />
          MUI
        </div>,
        <div className="flex gap-2 items-center">ZOD</div>,
        <div className="flex gap-2 items-center">YUP</div>,
        <div className="flex gap-2 items-center">
          <SiTailwindcss />
          Tailwind
        </div>,
      ],
      subRoles: ["Web Developer", "Developer"],
    },
    {
      startDate: "AUGUST 2023",
      endDate: "MARCH 2024",
      title: "Full-Stack Developer",
      company: "20023 Branded Tech Inc. / Dreambig Inc.",
      companyUrl: "#",
      description:
        "Created innovative system features to enhance user experience, refactored code for improved reusability and higher coding standards, and collaborated with QA to address bugs and develop new functions, ensuring all requirements were met.",
      technologies: [
        <div className="flex gap-2 items-center">
          <DiJqueryLogo />
          JQuery
        </div>,
        <div className="flex gap-2 items-center">
          <FaPhp />
          PHP
        </div>,
        <div className="flex gap-2 items-center">
          <SiMysql />
          MySQL
        </div>,
        <div className="flex gap-2 items-center">
          <DiCodeigniter />
          Codeigniter
        </div>,
        <div className="flex gap-2 items-center">
          <LuFileJson2 />
          AJAX
        </div>,
        <div className="flex gap-2 items-center">
          <BsFiletypeXml />
          XML
        </div>,
        <div className="flex gap-2 items-center">
          <FaBootstrap />
          Bootstrap
        </div>,
      ],
      subRoles: ["Web Developer", "Developer"],
    },
  ];

  const certificate = [
    {
      img: nclex,
    },
    {
      img: certificateTwo,
    },
    {
      img: certificateThree,
    },
    {
      img: certificateFour,
    },
    {
      img: certificateOne,
    },
  ];
  const companies = [
    {
      name: "SAFC",
      logo: safc,
    },
    {
      name: "excelink",
      logo: excelink,
    },
    {
      name: "20023 Branded Tech",
      logo: brandedTech,
    },
    {
      name: "NCLEX",
      logo: nclexlogo,
    },
  ];

  return (
    <>
      <section
        id="home"
        className="w-full flex justify-center shadow-inner bg-secondary-background-light dark:bg-secondary-background-dark text-primary-text-light dark:text-primary-text-dark transition-colors duration-300 pb-20 overflow-x-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.8, ease: easeInOut, delay: 1.5 },
          }}
          className="min-w-full 2xl:min-w-[1300px] flex flex-col justify-center items-center p-10"
        >
          <div className="mb-8 w-[700px]">
            <div className="flex border-b border-gray-700">
              <button
                className={`flex-1 py-2 px-4 text-center ${
                  activeTab === "experience"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>
              <button
                className={`flex-1 py-2 px-4 text-center ${
                  activeTab === "certificates"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab("certificates")}
              >
                Certificates
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "experience" && (
                <div className="max-w-3xl space-y-12 p-6">
                  {experiences.map((experience, index) => (
                    <div key={index} className="space-y-4">
                      <div className="text-sm text-muted-foreground">
                        {experience.startDate} — {experience.endDate}
                      </div>

                      <div className="space-y-2">
                        <h3 className="group font-medium text-lg">
                          {experience.title}
                          {experience.company && (
                            <>
                              <span className="text-muted-foreground"> · </span>
                              <a
                                href={experience.companyUrl}
                                className="inline-flex items-center text-primary hover:text-primary/80"
                              >
                                {experience.company}
                              </a>
                            </>
                          )}
                        </h3>

                        {experience.subRoles && (
                          <div className="space-y-1">
                            {experience.subRoles.map((role, roleIndex) => (
                              <div
                                key={roleIndex}
                                className="text-sm text-muted-foreground"
                              >
                                {role}
                              </div>
                            ))}
                          </div>
                        )}

                        <p className="text-muted-foreground">
                          {experience.description}
                        </p>
                      </div>

                      {experience.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <div
                              key={techIndex}
                              className="px-2 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "certificates" && (
                <div className="w-full grid xl:grid-cols-2 2xl:grid-cols-3 gap-10 z-10 blur-hover">
                  {certificate?.map((cert, index) => (
                    <div key={index}>
                      <img src={cert.img} alt="" />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>
      <div className="md:min-h-[400px] w-full flex justify-center items-center bg-main-background-light dark:bg-main-background-dark text-secondary-text-light dark:text-secondary-text-dark transition-colors duration-300 overflow-x-hidden">
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight mb-16">
            I&apos;m proud to have collaborated with some awesome companies:
          </h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-3 place-content-center">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center col-span-1"
              >
                <img
                  className="max-h-[120px] w-full object-contain rounded-md"
                  src={company.logo}
                  alt={company.name}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
