import { useEffect } from "react";
import AboutMeSectionComponent from "../../components/AboutPageComponents/AboutMeSectionComponent";
import BarChartSectionComponent from "../../components/AboutPageComponents/BarChartSectionComponent";
import PieChartSectionComponent from "../../components/AboutPageComponents/PieChartSectionComponent";
import RandomFactsSectionComponent from "../../components/AboutPageComponents/RandomFactsSectionComponent";
import TechStacksSectionComponent from "../../components/AboutPageComponents/TechStacksSectionComponent";

export default function AboutPage() {
  useEffect(() => {
    document.title = "Dastine | About";
  }, []);
  return (
    <>
      <AboutMeSectionComponent />
      <TechStacksSectionComponent />
      <PieChartSectionComponent />
      <BarChartSectionComponent />
      <RandomFactsSectionComponent />
    </>
  );
}
