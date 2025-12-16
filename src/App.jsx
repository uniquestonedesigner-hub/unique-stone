import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import CatalogueButton from "./components/common/CatalogueButton";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from "./components/common/PrivateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
        <main className="flex-grow pt-14 sm:pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Dashboard setIsAuthenticated={setIsAuthenticated} />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
        <CatalogueButton />
      </div>
    </Router>
  );
}

export default App;
