import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdMenu } from "react-icons/md";
import ToggleThemeButton from "./Buttons/ToggleThemeButton";

interface Props {
  onClick: () => void;
}

const HeaderComponent = ({ onClick }: Props) => {
  return (
    <header className="flex items-center justify-between h-16 px-6 lg:px-8 bg-white shadow-sm z-10">
      <button onClick={onClick} className="lg:hidden">
        <MdMenu className="h-6 w-6" />
      </button>
      <div className="flex space-x-2">
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <FaGithub className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <FaLinkedin className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <MdEmail className="h-5 w-5" />
        </a>
      </div>
      <ToggleThemeButton />
    </header>
  );
};

export default HeaderComponent;
