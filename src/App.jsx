// src/App.js
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import PageTransition from "./components/PageTransition"; // Import the transition component
import Lenis from "@studio-freight/lenis";
import useNavigationEvent from "./components/useNavigationEvent.jsx";

// Import your components
// Import your components
import Navbar from "./components/NavbarMain.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Works from "./pages/Works.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Expertise from "./pages/Expertise.jsx";
import Blogs from "./pages/Blogs.jsx";
import Service1 from "./pages/Service1.jsx";
import Service2 from "./pages/Service2.jsx";
import Service3 from "./pages/Service3.jsx";
import Service4 from "./pages/Service4.jsx";
import BakersCaseStudy from "./pages/BakersCaseStudy.jsx";
import CreamforestCaseStudy from "./pages/CreamforestCaseStudy.jsx";
import ViratCaseStudy from "./pages/ViratCaseStudy.jsx";
import SereneSkinCaseStudy from "./pages/SerenCaseStudy.jsx";
import BakersCaseStudydetails2 from "./pages/BakersCaseStudydetails2.jsx";
import CreamfCaseStudyDetail from "./pages/CreamfCaseStudydetails.jsx";
import ViratCaseStudyDetail from "./pages/ViratCaseStudydetails.jsx";
import SereneCaseStudyDetail from "./pages/SereneCaseStudydetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader.jsx";
import AkoyaCaseStudy from "./pages/CaseStudy/AkoyaCaseStudy.jsx"; 
import LoknetaCaseStudy from "./pages/CaseStudy/LoknetaCaseStudy.jsx"; 
import BoscheCaseStudy from "./pages/CaseStudy/BoscheCaseStudy.jsx";
import Countdown from "./Countdown.jsx";


function App() {
  const isNavigating = useNavigationEvent(); // Get navigation event status
  const location = useLocation();

  // Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Customize easing
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  // Lenis ends

  // Disable right-click
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", disableRightClick);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);
  // Disable inspect
  useEffect(() => {
    const disableInspectShortcuts = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", disableInspectShortcuts);
    return () => {
      document.removeEventListener("keydown", disableInspectShortcuts);
    };
  }, []);

  // Validation
  const validRoutes = [
    "/",
    "/works",
    "/about",
    "/contact-us",
    "/expertise",
    "/blogs",
    "/service1",
    "/service2",
    "/service3",
    "/service4","/casestudy/akoya",
    "/casestudy/bakersstreet",
    "/casestudy/creamforest",
    "/casestudy/virat",
    "/casestudy/sereneskin",
    "/casestudy/bakersstreet/detail",
    "/casestudy/creamforest/detail",
    "/casestudy/virat/detail",
    "/casestudy/sereneskin/detail","/casestudy/lokneta" , "/casestudy/bosche"
  ];
  const isValidRoute = validRoutes.includes(location.pathname);
  const showHeaderFooter = location.pathname !== "/404";

  return (
    <>
     
      {isNavigating && <Preloader trigger={isNavigating} />}

{/* Countdown component */}
      <Countdown/>
      {/*  */}
      
      {/* <div className="App">
        {isValidRoute && <Navbar />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/countdown" element={<Countdown/>} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/service1" element={<Service1 />} />
          <Route path="/service2" element={<Service2 />} />
          <Route path="/service3" element={<Service3 />} />
          <Route path="/service4" element={<Service4 />} />
          <Route path="/casestudy/akoya" element={<AkoyaCaseStudy />} />
          <Route path="/casestudy/lokneta" element={<LoknetaCaseStudy />} />
          <Route path="/casestudy/bosche" element={<BoscheCaseStudy/>} />

          <Route path="/casestudy/bakersstreet" element={<BakersCaseStudy />} />
          <Route path="/casestudy/creamforest" element={<CreamforestCaseStudy />} />
          <Route path="/casestudy/virat" element={<ViratCaseStudy />} />
          <Route path="/casestudy/sereneskin" element={<SereneSkinCaseStudy />} />
          <Route path="/casestudy/bakersstreet/detail" element={<BakersCaseStudydetails2 />} />
          <Route path="/casestudy/creamforest/detail" element={<CreamfCaseStudyDetail />} />
          <Route path="/casestudy/virat/detail" element={<ViratCaseStudyDetail />} />
          <Route path="/casestudy/sereneskin/detail" element={<SereneCaseStudyDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {isValidRoute && <Footer />}
      </div> */}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}

export default AppWrapper;
