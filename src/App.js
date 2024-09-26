import React, { useEffect } from "react";
import ScrollToTop from "./Components/ScrollToTop.js";
import WOW from "wowjs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./Header.js";
import TabBar from "./TabBar.js";
import Nav from "./Nav.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import About from "./About.js";
import Testimonials from "./Testimonials.js";
import BackToTop from "./Components/BackToTop.js";
import Faq from "./Faq.js"; // Página del formulario
import AboutMore from "./AboutMore.js";
import Cookies from "./Cookies.js";
import HttpCode from "./HttpCode.js";
import SignUp from "./SignUp.js";
import Reservation from "./Reservation.js";
import ContactForm from "./ContactForm.js";

function App() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <TabBar />
        <Nav />
        <Routes>
          {/* Redirige "/" a "/home" */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Ruta para la página de inicio */}
          <Route
            path="/home"
            element={
              <>
                <Header />
                <About />
                <Main />
                <Testimonials />
              </>
            }
          />

          {/* Ruta para la página del formulario */}
          <Route path="/faq" element={<Faq />} />
          <Route path="/about-more" element={<AboutMore />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/error" element={<HttpCode />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contactUs" element={<ContactForm />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
