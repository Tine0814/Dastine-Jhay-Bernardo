import { useState, useRef, ReactNode } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaBuilding,
} from "react-icons/fa";
import { Modal } from "@mui/material";
import ContaineButtonComponent from "./Buttons/ButtonComponent";
import ButtonComponent from "./Buttons/ButtonComponent";

interface ProjectShowcaseProps {
  title: string;
  shortDescription: string | ReactNode;
  fullDescription: string;
  image: string;
  tags?: string[] | ReactNode[];
  githubUrl?: string;
  url?: string;
  role?: ReactNode;
  allTech?: ReactNode[];
  companyLogo?: string;
  companyUrl?: string;
}

export default function CardComponent({
  title = "Awesome Project",
  shortDescription = "A cutting-edge web application showcasing modern development practices.",
  fullDescription,
  image,
  tags = ["React", "TypeScript", "Tailwind CSS"],
  githubUrl,
  url,
  role,
  allTech,
  companyLogo,
  companyUrl,
}: ProjectShowcaseProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMoreTech, setViewMoreTech] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleviewMoreTech = () => setViewMoreTech(true);
  const handleCloseTech = () => setViewMoreTech(false);

  return (
    <>
      <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl bg-main-background-light dark:bg-main-background-dark">
        <div
          onClick={handleOpenModal}
          className="relative h-48 w-full overflow-hidden cursor-pointer"
        >
          <img
            src={image}
            alt={`${title} preview`}
            className={`w-full h-full object-cover transition-transform duration-500 ease-in-out 
            `}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h2 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-primary-text-dark">
            {title}
          </h2>
          <div className="absolute inset-0 flex items-center justify-center text-primary-text-dark bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-xl font-semibold">Learn More</span>
          </div>
          {companyLogo && (
            <img
              src={companyLogo}
              alt=""
              className="absolute top-0 w-[80px] rounded-md"
            />
          )}
        </div>
        <div className="p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm font-medium rounded-full bg-secondary-background-light text-gray-800 dark:bg-secondary-background-dark dark:text-primary-text-dark"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-secondary-text-light dark:text-secondary-text-dark transition-all duration-500 ease-in-out overflow-hidden max-height-[100px]">
            {shortDescription}
          </p>
        </div>
        <div className="flex justify-end space-x-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              <FaGithub className="mr-2 h-4 w-4" />
              GitHub
            </a>
          )}
          <ContaineButtonComponent
            onClick={handleOpenModal}
            label={
              <div className="flex gap-2 items-center">
                <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                Learn More
              </div>
            }
          />
        </div>
      </div>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-main-background-light dark:bg-main-background-dark rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
          >
            <div className="relative">
              {companyLogo && (
                <img
                  src={companyLogo}
                  alt=""
                  className="absolute top-0 w-[80px] rounded-md"
                />
              )}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close modal"
              >
                <FaTimes className="h-6 w-6" />
              </button>
              <div className="md:flex items-center">
                <div className="md:w-1/2 overflow-hidden rounded-md ">
                  <img
                    src={image}
                    alt={`${title} full preview`}
                    className="w-full h-64 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                <div className="p-6 md:w-1/2">
                  <h2
                    id="modal-title"
                    className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
                  >
                    {title}
                  </h2>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                    <ButtonComponent
                      onClick={handleviewMoreTech}
                      isContaine={true}
                      label={
                        <div className="flex gap-2 items-center">
                          <FaExternalLinkAlt />
                          View More Tech
                        </div>
                      }
                    />
                  </div>
                  <div
                    className={`transition-all duration-100 bg-secondary-background-light dark:bg-secondary-background-dark overflow-hidden rounded-md shadow-md h-full ${
                      viewMoreTech ? "w-[400px] p-5" : "w-[0px]"
                    } absolute top-0 right-0`}
                  >
                    <button
                      onClick={handleCloseTech}
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      aria-label="Close modal"
                    >
                      <FaTimes className="h-6 w-6" />
                    </button>
                    <h1 className="text-primary-color-light dark:text-primary-color-dark font-bold">
                      All Technologies Used
                    </h1>
                    <div className="grid grid-cols-2 gap-2 mt-10">
                      {allTech?.map((tech, index) => (
                        <span
                          key={index}
                          className="rounded-md p-2 flex justify-center items-center shadow-2xl cursor-default bg-main-background-light dark:bg-main-background-dark text-secondary-text-light dark:text-secondary-text-dark"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p
                    id="modal-description"
                    className="text-primary-text-light dark:text-primary-text-dark mb-6"
                  >
                    {fullDescription}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <FaGithub className="mr-2 h-5 w-5" />
                        GitHub
                      </a>
                    )}
                    {companyUrl && (
                      <a
                        href={companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <FaBuilding className="mr-2 h-5 w-5" />
                        Company
                      </a>
                    )}
                    {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <FaExternalLinkAlt className="mr-2 h-5 w-5" />
                        View
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-5 text-primary-text-light dark:text-primary-text-dark flex items-center justify-center flex-col">
                <h1 className="font-bold mb-5">{shortDescription}</h1>
                <div className="w-full sm:w-[300px] md:w-[600px] lg:w-[800px] h-[200px] overflow-x-auto p-5">
                  {role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
