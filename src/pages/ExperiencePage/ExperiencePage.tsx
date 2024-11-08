import { useEffect } from "react";
import ExperienceSectionComponent from "../../components/ExperiencePageComponents/ExperienceSectionComponent";
import JobAndCertificateSectionComponent from "../../components/ExperiencePageComponents/JobAndCertificateSectionComponent";

export default function ExperiencePage() {
  useEffect(() => {
    document.title = "Dastine | Experience";
  }, []);
  return (
    <>
      <ExperienceSectionComponent />
      <JobAndCertificateSectionComponent />
    </>
  );
}
