import { useEffect } from "react";
// import HeroSectionComponent from "../../components/LandingPageComponents/HeroSectionComponent";
import LatestWorkSectionComponent from "../../components/LandingPageComponents/LatestWorkSectionComponent";
import NewHeroSectionComponent from "../../components/LandingPageComponents/NewHeroSectionComponent";

export default function LandingPage() {
  useEffect(() => {
    document.title = "Dastine | Home";
  }, []);
  return (
    <>
      {/* <TestCpm /> */}
      {/* <HeroSectionComponent /> */}
      <NewHeroSectionComponent />
      <LatestWorkSectionComponent />
    </>
  );
}
