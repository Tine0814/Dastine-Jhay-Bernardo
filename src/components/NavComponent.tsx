import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { SetStateAction, useEffect, useState } from "react";
import OutlineButtonComponent from "./Buttons/OutlineButtonComponent";

export default function NavComponent() {
  const [isOpen, setOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("");

  const navItems = [
    {
      title: "Home",
      url: "/Dastine-Jhay-Bernardo",
    },
    {
      title: "About",
      url: "/Dastine-Jhay-Bernardo/about",
    },
    {
      title: "Portfolio",
      url: "/portfolio",
    },
  ];

  useEffect(() => {
    const { pathname } = location;
    const activeItem = navItems.find((item) => item.url === pathname);
    if (activeItem) {
      setActiveNavItem(activeItem.title);
    }
  }, [location, navItems]);

  const handleClick = (title: SetStateAction<string>) => {
    setActiveNavItem(title);
  };
  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: easeInOut, delay: 0.8 },
        }}
        exit={{
          y: -200,
          opacity: 0,
          transition: { duration: 1, ease: easeInOut, delay: 0.8 },
        }}
        className="w-full flex justify-center items-center z-50 shadow-md bg-color-two"
      >
        <div className="flex justify-between py-4 px-10 min-w-full 2xl:min-w-[1300px] items-center">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="p-5 rounded-full border-2 border-text-two text-text-two hover:bg-text-two hover:text-color-two ease-in-out duration-300 shadown-2xl "
            >
              <h1 className="font-bold text-xl">
                D<span className="">B</span>
              </h1>
            </motion.div>
          </Link>
          <ul className="text-text-three hidden gap-20 md:flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.url}
                  className={`${
                    item.title === activeNavItem
                      ? "text-text-two font-bold"
                      : ""
                  } hover:text-text-one ease-in-out duration-300`}
                  onClick={() => handleClick(item.title)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex md:hidden text-white">
            <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
          </div>
          <div className="hidden md:flex">
            <OutlineButtonComponent label="Say Hello" />
          </div>
          {isOpen && (
            <AnimatePresence>
              <motion.div
                className={`bg-gradient-to-r from-purple-500 to-pink-500 w-[200px] absolute z-20 right-5 rounded-xl top-20 p-5`}
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "-50%", transition: { duration: 1 } }}
                transition={{ type: "spring", stiffness: 100, duration: 0.75 }}
              >
                <motion.ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  initial={{ opacity: 0, y: "-50%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{ opacity: 0, y: "-50%", transition: { duration: 1 } }}
                  transition={{ type: "spring", stiffness: 100, duration: 1 }}
                >
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.url}
                        className={`${
                          item.title === activeNavItem
                            ? "text-text-two font-bold"
                            : ""
                        } block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                        onClick={() => {
                          handleClick(item.title);
                          setOpen(false);
                        }}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
