import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import BackgroundDoodles from "./components/BackgroundDoodles";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import SmoothCursorFollower from './components/SmoothCursorFollower'

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const pageOrder = [
  { path: "/", component: Home, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/projects", component: Projects, name: "Projects" },
  { path: "/techstack", component: TechStack, name: "TechStack" },
  { path: "/contact", component: Contact, name: "Contact" },
];

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sectionRefs = useRef([]);
  // Scroll to section on route change
  useEffect(() => {
    const idx = pageOrder.findIndex((p) => p.path === location.pathname);
    if (idx !== -1 && sectionRefs.current[idx]) {
      sectionRefs.current[idx].scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  // On scroll, update route if section is in view
  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionRefs.current.map((ref) => {
        if (!ref) return Infinity;
        const rect = ref.getBoundingClientRect();
        return Math.abs(rect.top);
      });
      const minIdx = offsets.indexOf(Math.min(...offsets));
      const newPath = pageOrder[minIdx]?.path;
      if (newPath && newPath !== location.pathname) {
        navigate(newPath, { replace: true });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, navigate]);

  return (
    <div className="font-mono bg-white dark:bg-zinc-900 text-black dark:text-white relative overflow-hidden z-0">
      <SmoothCursorFollower />
      <BackgroundDoodles route={location.pathname} />
      <Navbar />
      <div>
        {pageOrder.map((page, idx) => {
          const PageComp = page.component;
          return (
            <section
              key={page.path}
              ref={el => (sectionRefs.current[idx] = el)}
              style={{ minHeight: "100vh", scrollSnapAlign: "start" }}
              id={page.name.toLowerCase()}
            >
              <PageWrapper>
                <PageComp />
              </PageWrapper>
            </section>
          );
        })}
      </div>
      <ScrollToTop />
    </div>
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
