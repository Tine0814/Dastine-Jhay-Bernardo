import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import NavFooterLayout from "./components/Layout/NavFooterLayout";
import AboutPage from "./pages/AboutPage/AboutPage";
import UnderConstructionPage from "./pages/UnderConstructionPage/UnderConstructionPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
// import { useEffect, useState } from "react";

function App(): JSX.Element {
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const delay = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(delay);
  // }, []);

  return (
    <>
      {/* {isLoading ? (
        <div className="h-screen w-full bg-red-200 grid place-items-center">
          Loading...
        </div>
      ) : ( */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/Dastine-Jhay-Bernardo"
            element={
              <NavFooterLayout>
                <LandingPage />
              </NavFooterLayout>
            }
          />
          <Route
            path="/Dastine-Jhay-Bernardo/about"
            element={
              <NavFooterLayout>
                <AboutPage />
              </NavFooterLayout>
            }
          />
          <Route
            path="/Dastine-Jhay-Bernardo/portfolio"
            element={
              <NavFooterLayout>
                <PortfolioPage />
              </NavFooterLayout>
            }
          />
          <Route path="*" element={<UnderConstructionPage />} />
        </Routes>
      </BrowserRouter>
      {/* )} */}
    </>
  );
}

export default App;
