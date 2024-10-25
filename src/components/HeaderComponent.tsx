import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdMenu } from "react-icons/md";
import ToggleThemeButton from "./Buttons/ToggleThemeButton";

interface Props {
  onClick: () => void;
}

const HeaderComponent = ({ onClick }: Props) => {
  // Define an array of social links
  const socialLinks = [
    {
      href: "https://github.com/Tine0814",
      icon: <FaGithub className="h-5 w-5" />,
    },
    {
      href: "https://www.linkedin.com/in/dastine-bernardo-148499254/",
      icon: <FaLinkedin className="h-5 w-5" />,
    },
    {
      href: "mailto:djhaybernardo@gmail.com",
      icon: <MdEmail className="h-5 w-5" />,
    },
    {
      href: "https://web.facebook.com/Dastinebernardo",
      icon: <FaFacebook className="h-5 w-5" />,
    },
  ];

  return (
    <header className="flex items-center justify-between h-16 px-6 lg:px-8 bg-background-header-light dark:bg-background-header-dark shadow-sm z-10 transition-colors duration-300">
      <button onClick={onClick} className="lg:hidden">
        <MdMenu className="h-6 w-6 text-primary-text-light dark:text-primary-text-dark transition-colors duration-300" />
      </button>
      <div className="flex space-x-2">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-text-light dark:text-secondary-text-dark hover:text-primary-color-light hover:dark:text-primary-color-dark transition-colors duration-300"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <ToggleThemeButton />
    </header>
  );
};

export default HeaderComponent;
