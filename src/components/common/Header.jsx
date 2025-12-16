import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "./Button";

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Skip scroll logic on mobile
      if (window.innerWidth < 768) {
        setIsVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = currentScrollY + windowHeight >= documentHeight - 10;
      const isAtTopNow = currentScrollY < 50;

      if (isAtTopNow || isAtBottom) {
        setIsVisible(true);
      } else {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm"
        style={{
          opacity: 1,
          transform: "translateY(0)",
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/LOGO.png"
                alt="Unique Stone"
                className="h-8 sm:h-9 md:h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 font-montserrat ${
                    isActive(link.to)
                      ? "text-slate-900 bg-slate-100"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {isAuthenticated && (
                <>
                  <div className="ml-2 pl-2 border-l border-slate-200">
                    <Link
                      to="/dashboard"
                      className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors duration-200 font-montserrat"
                    >
                      Dashboard
                    </Link>
                  </div>
                  <Button variant="primary" size="sm" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
              type="button"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <span
                  className={`h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 z-[60] md:hidden"
            />

            {/* Menu Panel - Slides from left */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed top-0 left-0 bottom-0 w-72 max-w-[80vw] bg-white shadow-2xl z-[70] md:hidden overflow-y-auto"
            >
              <div className="p-6 pt-20">
                {/* Brand */}
                <div className="mb-8 pb-6 border-b border-slate-200">
                  <h2 className="text-2xl font-bold text-slate-900 font-megalith mb-1">
                    Unique Stone
                  </h2>
                  <p className="text-sm text-slate-500 font-lato">
                    Premium Natural Stones
                  </p>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-200 font-montserrat ${
                        isActive(link.to)
                          ? "bg-slate-900 text-white"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Auth Section */}
                {isAuthenticated && (
                  <div className="mt-8 pt-6 border-t border-slate-200 space-y-3">
                    <Link
                      to="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors duration-200 font-montserrat"
                    >
                      Dashboard
                    </Link>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={handleLogout}
                      fullWidth
                      className="font-montserrat"
                    >
                      Logout
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
