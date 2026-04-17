import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Products from "./pages/Products.jsx";

const pageMotion = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

function AnimatedPage({ children }) {
  return <motion.main {...pageMotion}>{children}</motion.main>;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-porcelain text-obsidian antialiased transition-colors duration-500 dark:bg-obsidian dark:text-porcelain">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/products" element={<AnimatedPage><Products /></AnimatedPage>} />
          <Route path="/products/:slug" element={<AnimatedPage><ProductDetail /></AnimatedPage>} />
          <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
