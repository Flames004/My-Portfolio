import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import BackgroundDoodles from "./components/BackgroundDoodles";
import ScrollToTop from "./components/ScrollToTop";
import SmoothCursorFollower from './components/SmoothCursorFollower'

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const techstackRef = useRef(null);
  const contactRef = useRef(null);

  const pageOrder = useMemo(() => ["home", "about", "projects", "techstack", "contact"], []);
  
  const sectionRefs = useMemo(() => ({
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    techstack: techstackRef,
    contact: contactRef
  }), []);

  const scrollToSection = useCallback((page) => {
    const ref = sectionRefs[page];
    if (ref.current) {
      setIsScrolling(true);
      ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Reset scrolling flag after animation
      setTimeout(() => setIsScrolling(false), 1000);
    }
  }, [sectionRefs]);

  // Handle scroll events to update current page
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return; // Don't update during programmatic scrolling
      
      // More natural scroll detection - check which section is most visible
      let maxVisibleSection = null;
      let maxVisiblePercentage = 0;
      
      for (const page of pageOrder) {
        const ref = sectionRefs[page];
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Calculate how much of this section is visible
          const visibleTop = Math.max(0, -rect.top);
          const visibleBottom = Math.min(rect.height, windowHeight - rect.top);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visiblePercentage = visibleHeight / windowHeight;
          
          // Only consider sections that are significantly visible (at least 30%)
          if (visiblePercentage > 0.3 && visiblePercentage > maxVisiblePercentage) {
            maxVisiblePercentage = visiblePercentage;
            maxVisibleSection = page;
          }
        }
      }
      
      // Only update if we found a section that's prominently visible
      if (maxVisibleSection && maxVisibleSection !== currentPage) {
        setCurrentPage(maxVisibleSection);
        // Update URL without causing scroll
        const path = maxVisibleSection === "home" ? "/" : `/${maxVisibleSection}`;
        navigate(path, { replace: true });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage, isScrolling, navigate, pageOrder, sectionRefs]);

  // Handle route changes to scroll to correct section
  useEffect(() => {
    const path = location.pathname;
    let targetPage = "home";
    
    if (path === "/about") targetPage = "about";
    else if (path === "/projects") targetPage = "projects";
    else if (path === "/techstack") targetPage = "techstack";
    else if (path === "/contact") targetPage = "contact";
    
    if (targetPage !== currentPage) {
      setCurrentPage(targetPage);
      scrollToSection(targetPage);
    }
  }, [location.pathname, currentPage, scrollToSection]);

  return (
    <div className="font-mono bg-white dark:bg-zinc-900 text-black dark:text-white relative">
      <SmoothCursorFollower />
      <BackgroundDoodles currentPage={currentPage} />
      
      <Navbar currentPage={currentPage} scrollToSection={scrollToSection} />
      
      {/* Main scrollable content */}
      <div className="relative">
        <motion.section
          ref={homeRef}
          id="home"
          className="min-h-screen"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Home />
        </motion.section>
        
        <motion.section
          ref={aboutRef}
          id="about"
          className="min-h-screen"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <About />
        </motion.section>
        
        <motion.section
          ref={projectsRef}
          id="projects"
          className="min-h-screen"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Projects />
        </motion.section>
        
        <motion.section
          ref={techstackRef}
          id="techstack"
          className="min-h-screen"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <TechStack />
        </motion.section>
        
        <motion.section
          ref={contactRef}
          id="contact"
          className="min-h-screen"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Contact />
        </motion.section>
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
