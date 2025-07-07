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

const AppContent = () => {
  const location = useLocation();
  return (
    <div className="font-mono bg-white dark:bg-zinc-900 text-black dark:text-white relative overflow-hidden z-0">
      <SmoothCursorFollower />
      <BackgroundDoodles route={location.pathname} />

      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/projects"
            element={
              <PageWrapper>
                <Projects />
              </PageWrapper>
            }
          />
          <Route
            path="/techstack"
            element={
              <PageWrapper>
                <TechStack />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>

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
