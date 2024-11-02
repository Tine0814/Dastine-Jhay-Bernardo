import { BsFiletypeXml } from "react-icons/bs";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import {
  SiAxios,
  SiMui,
  SiMysql,
  SiPrisma,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import lilo from "../assets/img/LiloDashboard.png";
import js from "../assets/img/js-API2.png";
import ts from "../assets/img/ts.png";
import car from "../assets/img/car.png";
import los from "../assets/img/LOS.png";
import excelinkProj from "../assets/img/excelinkProj.png";
import safc from "../assets/img/SAFC.png";
import brandedTech from "../assets/img/brandedtech.jpg";
import letQuiz from "../assets/img/letQuiz.png";
import toDo from "../assets/img/toDo.png";
import clinic from "../assets/img/clinic_inventory.png";
import dragonball from "../assets/img/dragon.png";
import portfolio from "../assets/img/firstPortfolio.png";
import excelinkLogo from "../assets/img/excelinkLogo.png";
import {
  DiCodeigniter,
  DiJqueryLogo,
  DiMongodb,
  DiMsqlServer,
} from "react-icons/di";
import { LuFileJson2 } from "react-icons/lu";
import carPicker from "../assets/img/carPicker.png";

export const myWork = [
  {
    image: los,
    title: "Loan Origination System (LOS)",
    companyLogo: safc,
    description:
      "An LOS (Loan Origination System) is a digital platform that helps financial institutions manage and streamline the loan application, processing, and approval process. It is commonly used by banks, credit unions, and other lending institutions to reduce manual work, increase processing speed, and improve data accuracy and compliance.",
    projectTitle: (
      <div>
        Job Title:{" "}
        <span className="text-primary-color-light dark:text-primary-color-light font-bold">
          Application Developer Supervisor
        </span>
      </div>
    ),
    allTech: [
      <div className="flex gap-2 items-center">
        <FaReact />
        React
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
    role: (
      <ul className="list-disc grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <li>
          Developed a system from scratch, including planning, structuring, and
          coding the core functionalities to ensure robust, scalable, and
          efficient performance.
        </li>
        <li>
          Supervised a team of developers, providing guidance, setting project
          goals, and ensuring timely progress, quality standards, and adherence
          to best practices.
        </li>
        <li>
          Actively involved in UI/UX design, working closely on user interface
          layouts, enhancing user experience, and ensuring the design aligns
          with the system's overall functionality and aesthetics.
        </li>
        <li>
          Led efforts to integrate essential features, including database
          structuring, API setup, and server configuration, for seamless system
          functionality and reliable performance.
        </li>
        <li>
          Monitored and optimized the system post-launch, implementing updates,
          debugging issues, and applying enhancements to keep the system secure
          and responsive across devices and platforms.
        </li>
      </ul>
    ),
    companyUrl: "https://safc.com.ph/",
  },
  {
    image: excelinkProj,
    companyLogo: excelinkLogo,
    title: "Accounting Management with HR Management System",
    description:
      "The Accounting Management with HR Management System is an all-in-one solution that centralizes essential business operations, including inventory, sales, HRIS, payroll, accounting transactions, financial reporting, and tax compliance. By integrating these modules, the system streamlines accounting and HR tasks, enhancing efficiency and ensuring accurate, real-time data management in a single platform",
    projectTitle: (
      <div>
        Job Title:{" "}
        <span className="text-primary-color-light dark:text-primary-color-light font-bold">
          Part Time Frontend Developer
        </span>
      </div>
    ),
    allTech: [
      <div className="flex gap-2 items-center">
        <FaReact />
        React
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
        <SiTailwindcss />
        Tailwind
      </div>,
      <div className="flex gap-2 items-center">
        <SiMui />
        MUI
      </div>,
      <div className="flex gap-2 items-center">ZOD</div>,
      <div className="flex gap-2 items-center">
        <SiAxios />
        Axios
      </div>,
    ],
    role: (
      <ul className="list-disc grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <li>
          Created new pages with a modern, elegant, and user-friendly design,
          enhancing the system's visual appeal and usability.
        </li>
        <li>
          Improved existing interfaces by focusing on user experience, refining
          layouts and navigation to support intuitive interactions.
        </li>
        <li>
          Integrated APIs to enable efficient data transfer between the server
          and client, ensuring smooth and reliable functionality across all
          system modules.
        </li>
        <li>
          Assisted the development team with Git version control, facilitating
          collaboration, managing version histories, and maintaining code
          quality.
        </li>
        <li>
          Collaborated with team members on implementing design improvements and
          functionality enhancements, aligning with project goals and best
          practices.
        </li>
      </ul>
    ),
    companyUrl: "https://www.excelinkph.io/",
  },
  {
    image: lilo,
    title: "HR Management System",
    companyLogo: brandedTech,
    description:
      "An HR Management System is a digital platform that streamlines HR tasks like employee onboarding, attendance, performance reviews, and payroll. It reduces administrative workload, improves data accuracy, ensures compliance, and provides insights for strategic HR decisions, enhancing productivity and employee experience.",

    projectTitle: (
      <div>
        Job Title:{" "}
        <span className="text-primary-color-light dark:text-primary-color-light font-bold">
          Fullstack Web Developer
        </span>
      </div>
    ),
    role: (
      <ul className="list-disc grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <li>
          Created innovative system features to enhance user experience and
          maximize satisfaction with the platform's functionalities.
        </li>
        <li>
          Refactored existing code to improve reusability and raise the coding
          standards of the web application.
        </li>
        <li>
          Collaborated with QA to address bugs and develop new functions,
          ensuring all requirements were met effectively.
        </li>
      </ul>
    ),
    allTech: [
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
    companyUrl: "https://www.facebook.com/20023brandedtechnology",
  },
  {
    image: carPicker,
    title: "Car Picker",
    description:
      "I am pleased to present this car picker project design as a proposed solution for SAFC’s upcoming project. Developed with a focus on enhancing the user experience and operational efficiency, this design aims to simplify car selection, making it more intuitive and accessible. I created this concept to address SAFC’s needs for a streamlined tool that supports both the internal team and end users. By showcasing this in my portfolio, I endorse this project as a valuable addition to SAFC's digital solutions, demonstrating a thoughtful approach to user-friendly design and functionality that can drive engagement and satisfaction",
    projectTitle: (
      <div>
        <span className="text-primary-color-light dark:text-primary-color-light font-bold">
          Proposed Design Project (Frontend)
        </span>
      </div>
    ),
    githubUrl: "https://github.com/Tine0814/carPicker",
    url: "https://car-picker-buqyba4bn-tine0814s-projects.vercel.app/",
    allTech: [
      <div className="flex gap-2 items-center">
        <FaReact />
        React
      </div>,
      <div className="flex gap-2 items-center">
        <SiTailwindcss />
        Tailwind
      </div>,
      <div className="flex gap-2 items-center">
        <SiTypescript />
        TypeScript
      </div>,
    ],
  },
  {
    image: ts,
    title: "REST API Express.ts + mysql + typescript",
    description:
      "An LOS (Loan Origination System) is a digital platform that helps financial institutions manage and streamline the loan application, processing, and approval process. It is commonly used by banks, credit unions, and other lending institutions to reduce manual work, increase processing speed, and improve data accuracy and compliance.",
    projectTitle: (
      <div>
        <span className="text-primary-color-light dark:text-primary-color-light font-bold">
          Practice Project (Backend)
        </span>
      </div>
    ),
    allTech: [
      <div className="flex gap-2 items-center">
        <FaNodeJs />
        Node Express
      </div>,
      <div className="flex gap-2 items-center">
        <SiMysql />
        MySql
      </div>,
      <div className="flex gap-2 items-center">
        <SiTypescript />
        TypeScript
      </div>,
    ],
    githubUrl: "https://github.com/Tine0814/Crud-node-sql",
  },
  {
    image: js,
    title: "REST API Express.js + mysql",
    description:
      "An LOS (Loan Origination System) is a digital platform that helps financial institutions manage and streamline the loan application, processing, and approval process. It is commonly used by banks, credit unions, and other lending institutions to reduce manual work, increase processing speed, and improve data accuracy and compliance.",
    projectTitle: (
      <div>
        <span className="text-primary-color-light dark:text-primary-color-light font-bold">
          Practice Project (Backend)
        </span>
      </div>
    ),
    githubUrl: "https://github.com/Tine0814/Crud-node-mysql",
    allTech: [
      <div className="flex gap-2 items-center">
        <FaNodeJs />
        Node Express
      </div>,
      <div className="flex gap-2 items-center">
        <SiMysql />
        MySql
      </div>,
    ],
  },

  {
    image: portfolio,
    title: "First Portfolio Website",
    description:
      "An LOS (Loan Origination System) is a digital platform that helps financial institutions manage and streamline the loan application, processing, and approval process. It is commonly used by banks, credit unions, and other lending institutions to reduce manual work, increase processing speed, and improve data accuracy and compliance.",
    projectTitle: (
      <div>
        <span className="text-primary-color-light dark:text-primary-color-light font-bold">
          First Portfolio Project (Frontend)
        </span>
      </div>
    ),
    url: "https://tine0814.github.io/my-portfolio/",
    githubUrl: "https://github.com/Tine0814/my-portfolio",
    allTech: [
      <div className="flex gap-2 items-center">
        <FaReact />
        React
      </div>,
      <div className="flex gap-2 items-center">
        <SiTailwindcss />
        Tailwind
      </div>,
      <div className="flex gap-2 items-center">
        <FaJs />
        Email JS
      </div>,
    ],
  },
  {
    image: letQuiz,
    title: "Let Quiz Website",
    description:
      "An LOS (Loan Origination System) is a digital platform that helps financial institutions manage and streamline the loan application, processing, and approval process. It is commonly used by banks, credit unions, and other lending institutions to reduce manual work, increase processing speed, and improve data accuracy and compliance.",
    projectTitle: (
      <div>
        <span className="text-primary-color-light dark:text-primary-color-light font-bold">
          For Fun Project (Frontend)
        </span>
      </div>
    ),
    allTech: [
      <div className="flex gap-2 items-center">
        <FaReact />
        React
      </div>,
      <div className="flex gap-2 items-center">
        <SiTailwindcss />
        Tailwind
      </div>,
    ],
    url: "https://let-quiz.vercel.app/",
    githubUrl: "https://github.com/Tine0814/Let-Quiz",
  },
  {
    image: toDo,
    title: "CRUD website featuring a refined design",
    description:
      "An LOS (Loan Origination System) is a digital platform that helps financial institutions manage and streamline the loan application, processing, and approval process. It is commonly used by banks, credit unions, and other lending institutions to reduce manual work, increase processing speed, and improve data accuracy and compliance.",
    projectTitle: (
      <div>
        <span className="text-primary-color-light dark:text-primary-color-light font-bold">
          Practice Project (Fullstack)
        </span>
      </div>
    ),
    allTech: [
      <div className="flex gap-2 items-center">
        <FaReact />
        React
      </div>,
      <div className="flex gap-2 items-center">
        <FaNodeJs />
        Node Express
      </div>,
      <div className="flex gap-2 items-center">
        <DiMongodb />
        Mongo DB
      </div>,
      <div className="flex gap-2 items-center">
        <SiTailwindcss />
        Tailwind
      </div>,
      <div className="flex gap-2 items-center">UseContext</div>,
      <div className="flex gap-2 items-center">
        <SiAxios />
        Axios
      </div>,
      <div className="flex gap-2 items-center">ZOD</div>,
    ],

    url: "https://to-do-list-mern-stack-frontend.vercel.app/",
    githubUrl: "https://github.com/Tine0814/ToDoList-MernStack-Frontend",
  },
  {
    image: car,
    title: "Car Rent Landing Page",
    description:
      "An LOS (Loan Origination System) is a digital platform that helps financial institutions manage and streamline the loan application, processing, and approval process. It is commonly used by banks, credit unions, and other lending institutions to reduce manual work, increase processing speed, and improve data accuracy and compliance.",
    projectTitle: (
      <div>
        <span className="text-primary-color-light dark:text-primary-color-light font-bold">
          For Fun Project (Frontend)
        </span>
      </div>
    ),
    allTech: [
      <div className="flex gap-2 items-center">
        <FaReact />
        React
      </div>,
      <div className="flex gap-2 items-center">
        <SiTailwindcss />
        Tailwind
      </div>,
    ],
    githubUrl: "https://github.com/Tine0814/Car-Rent",
  },
  {
    image: dragonball,
    title: "Dragon Ball Game Landing Page",
    description:
      "An LOS (Loan Origination System) is a digital platform that helps financial institutions manage and streamline the loan application, processing, and approval process. It is commonly used by banks, credit unions, and other lending institutions to reduce manual work, increase processing speed, and improve data accuracy and compliance.",
    projectTitle: (
      <div>
        <span className="text-primary-color-light dark:text-primary-color-light font-bold">
          For Fun Project (Frontend)
        </span>
      </div>
    ),
    allTech: [
      <div className="flex gap-2 items-center">
        <FaReact />
        React
      </div>,
      <div className="flex gap-2 items-center">
        <SiTailwindcss />
        Tailwind
      </div>,
    ],
    githubUrl: "https://github.com/Tine0814/Dragon-ball-game-Landing-page",
  },
  {
    image: clinic,
    title: "Clinic Inventory System",
    projectTitle: (
      <div>
        <span className="text-primary-color-light dark:text-primary-color-light font-bold">
          Capstone Project (Fullstack)
        </span>
      </div>
    ),
    allTech: [
      <div className="flex gap-2 items-center">
        <FaHtml5 />
        HTML
      </div>,
      <div className="flex gap-2 items-center">
        <FaCss3 />
        CSS
      </div>,
      <div className="flex gap-2 items-center">
        <FaPhp />
        PHP
      </div>,
      <div className="flex gap-2 items-center">
        <DiJqueryLogo />
        JQuery
      </div>,
      <div className="flex gap-2 items-center">
        <FaJs />
        Javascript
      </div>,
      <div className="flex gap-2 items-center">
        <SiMysql />
        MySQL
      </div>,
      <div className="flex gap-2 items-center">
        <FaBootstrap />
        Bootstrap
      </div>,
    ],
    description:
      "An LOS (Loan Origination System) is a digital platform that helps financial institutions manage and streamline the loan application, processing, and approval process. It is commonly used by banks, credit unions, and other lending institutions to reduce manual work, increase processing speed, and improve data accuracy and compliance.",
    githubUrl: "https://github.com/Tine0814/Clinic-Inventory-System",
  },
];
