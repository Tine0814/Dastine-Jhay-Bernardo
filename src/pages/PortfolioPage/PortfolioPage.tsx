import { useEffect } from "react";
import PortfolioSectionComponent from "../../components/PortfolioPageComponents/PortfolioSectionComponent";
import ProjectSectionComponent from "../../components/PortfolioPageComponents/ProjectSectionComponent";

export default function PortfolioPage() {
  useEffect(() => {
    document.title = "Dastine | Portfolio";
  }, []);
  return (
    <>
      <PortfolioSectionComponent />
      <ProjectSectionComponent />
    </>
  );
}
