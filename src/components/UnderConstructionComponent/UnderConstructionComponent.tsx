import Lottie from "lottie-react";
import animation from "../../assets/lottie/Animation - 1711165809113.json";
import ContaineButtonComponent from "../Buttons/ContaineButtonComponent";
import { useNavigate } from "react-router-dom";

export default function UnderConstructionComponent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col bg-main-background-light dark:bg-main-background-dark text-secondary-text-light dark:text-secondary-text-dark transition-colors duration-300">
      <figure>
        <Lottie
          animationData={animation}
          className="w-[200px] sm:w-[400px] lg:w-[500px] 2xl:w-[600px] transition-transform duration-300"
        />
      </figure>
      <div className="hidden md:flex mt-5">
        <ContaineButtonComponent
          label="Home"
          onClick={() => navigate("/Dastine-Jhay-Bernardo")}
        />
      </div>
    </div>
  );
}
