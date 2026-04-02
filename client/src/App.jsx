import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HeroSection from "./components/Home";
import AchievementsSection from "./components/Achievements";
import Reviews from "./components/Reivews";
import BusinessRoadmap from "./components/Phases";
import Feed from "./components/Feed";
import TrustedCompanies from "./components/TrustBrands";
import Whychoose from "./components/whychoose";
import Footer from "./components/Footer";
import Main from "./components/Ceo/Main";
import WhatsappFloatButton from "./components/WhatsappFloatButton";
import GalleryComponent from "./components/Gallery";
import TermsModal from "./components/legalterms/Terms";
import PrivacyModal from "./components/legalterms/Privacy";
import Linkspage from "./components/link/Linkspage";
import ChatbotWidget from "./components/ChatbotWidget";

// Create a wrapper component to handle the location logic
const AppContent = () => {
  const location = useLocation();

  // Check if the current path is '/links'
  const isLinksPage = location.pathname === "/links";

  return (
    <>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <AchievementsSection />
              <Whychoose />
              <BusinessRoadmap />
              <Feed />
              <TrustedCompanies />
              <GalleryComponent />
              <Reviews />
              <Footer />
            </div>
          }
        />
        {/* CEO Route */}
        <Route path="/ceo.html" element={<Main />} />
        <Route path="/terms-and-conditions" element={<TermsModal />} />
        <Route path="/privacy-policy" element={<PrivacyModal />} />
        <Route path="/links" element={<Linkspage />} />
      </Routes>

      {/* Only show the button if we are NOT on the links page */}
      {!isLinksPage && (
        <>
          <WhatsappFloatButton />
          <ChatbotWidget />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;