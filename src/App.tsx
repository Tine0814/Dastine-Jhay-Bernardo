import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
// import NavFooterLayout from "./components/Layout/NavFooterLayout";
import AboutPage from "./pages/AboutPage/AboutPage";
import UnderConstructionPage from "./pages/UnderConstructionPage/UnderConstructionPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NavHeaderFooterSideBarLayout from "./components/Layout/NavHeaderFooterSideBarLayout";
import ScrollToTop from "./utils/ScrollToTop";
import { useEffect, useState } from "react";

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-screen w-full bg-red-200 grid place-items-center">
          Loading...
        </div>
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route
              path="/Dastine-Jhay-Bernardo"
              element={
                <NavHeaderFooterSideBarLayout>
                  <LandingPage />
                </NavHeaderFooterSideBarLayout>
              }
            />
            <Route
              path="/Dastine-Jhay-Bernardo/about"
              element={
                <NavHeaderFooterSideBarLayout>
                  <AboutPage />
                </NavHeaderFooterSideBarLayout>
              }
            />
            <Route
              path="/Dastine-Jhay-Bernardo/portfolio"
              element={
                <NavHeaderFooterSideBarLayout>
                  <PortfolioPage />
                </NavHeaderFooterSideBarLayout>
              }
            />
            <Route
              path="/Dastine-Jhay-Bernardo/contact"
              element={
                <NavHeaderFooterSideBarLayout>
                  <ContactPage />
                </NavHeaderFooterSideBarLayout>
              }
            />
            <Route path="*" element={<UnderConstructionPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
