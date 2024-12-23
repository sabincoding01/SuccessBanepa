import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct import for React Router v6
import NavBar from "./components/NavBar"; // Import the navbar component
import Home from "./pages/Home"; // Import page components
import AboutUs from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

import NumberCounter from "./components/NumberCounter";
import WhyUs from "./components/WhyUs";
import Abroad from "./components/Abroad";
import Footer from "./components/Footer"; // Correctly import Footer as Footer
import Images from "./pages/Images"

import TestimonialSection from "./pages/Testimonials";

const App = () => {
  return (
    <>
      <Router>
        <NavBar /> {/* Render the Navbar */}
        <Routes> {/* Use Routes for conditional rendering */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <NumberCounter />
                <WhyUs />
                <Services />
                <Abroad />
                <TestimonialSection />
                 {/* Correctly render Footer */}
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} /> {/* Render AboutUs for "/about" */}
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/images" element={<Images />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
