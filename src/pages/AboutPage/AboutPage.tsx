import AboutMeSectionComponent from "../../components/AboutPageComponents/AboutMeSectionComponent";
import BarChartSectionComponent from "../../components/AboutPageComponents/BarChartSectionComponent";
import PieChartSectionComponent from "../../components/AboutPageComponents/PieChartSectionComponent";
import RandomFactsSectionComponent from "../../components/AboutPageComponents/RandomFactsSectionComponent";
import TechStacksSectionComponent from "../../components/AboutPageComponents/TechStacksSectionComponent";

export default function AboutPage() {
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
