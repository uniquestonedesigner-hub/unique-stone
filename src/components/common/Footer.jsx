import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          <div>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent font-megalith">
              Unique Stone
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Premium quality natural stones for your architectural and design
              needs.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block transform"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block transform"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block transform"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block transform"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">
              Products
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <Link
                  to="/products/marble"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block transform"
                >
                  Marble
                </Link>
              </li>
              <li>
                <Link
                  to="/products/granite"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block transform"
                >
                  Granite
                </Link>
              </li>
              <li>
                <Link
                  to="/products/quartz"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block transform"
                >
                  Quartz
                </Link>
              </li>
              <li>
                <Link
                  to="/products/limestone"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block transform"
                >
                  Limestone
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">
              Contact
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-400">
              <li>
                <a
                  href="mailto:uniquestonedesigner@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Email: uniquestonedesigner@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918109668824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Phone: +91 8109668824
                </a>
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Address: Bhopal, Madhya Pradesh, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-700/50 text-center text-xs sm:text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Unique Stone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
