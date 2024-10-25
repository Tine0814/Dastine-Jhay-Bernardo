import { SetStateAction, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

interface Props {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SideBarComponent = ({ isOpen, toggleSidebar }: Props) => {
  const currentYear = new Date().getFullYear();
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
      title: "Experience",
      url: "/Dastine-Jhay-Bernardo/experience",
    },
    {
      title: "Portfolio",
      url: "/Dastine-Jhay-Bernardo/portfolio",
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

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform flex flex-col justify-between ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
        <span className="text-2xl font-semibold">DB</span>
        <button onClick={toggleSidebar} className="lg:hidden">
          <MdClose className="h-6 w-6" />
        </button>
      </div>

      <nav className="mt-6 flex-1">
        <ul className="space-y-2 px-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.url}
                className={`${
                  item.title === activeNavItem ? "text-text-four font-bold" : ""
                } block py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-200`}
                onClick={() => handleClick(item.title)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 py-2 border-t border-gray-200">
        <a href="#" className="block text-center text-sm text-gray-500">
          © {currentYear} Dastine Jhay Bernardo
        </a>
      </div>
    </aside>
  );
};

export default SideBarComponent;
