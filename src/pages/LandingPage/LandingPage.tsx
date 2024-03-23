import { useEffect } from "react";
import HeroSectionComponent from "../../components/LandingPageComponents/HeroSectionComponent";
import LatestWorkSectionComponent from "../../components/LandingPageComponents/LatestWorkSectionComponent";

export default function LandingPage() {
  useEffect(() => {
    document.title = "Dastine | Home";
  }, []);
  return (
    <>
      <HeroSectionComponent />
      <LatestWorkSectionComponent />
    </>
  );
}
