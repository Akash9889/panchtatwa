import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/home/Home";
import AboutUs from "./Pages/aboutUs/AboutUs";
import Workshop from "./Pages/workshop/Workshop";
import VastuTemple from "./Pages/vastuTemple/VastuTemple";
import Gallery from "./Pages/gallery/Gallery";
import ContactUs from "./Pages/contactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import MyJourney from "./Pages/myJourney/MyJourney";
import Donations from "./Pages/donations/Donations";
import Books from "./Pages/books/Books";

function App() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/temple" element={<VastuTemple />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/journey" element={<MyJourney />} />
        <Route path="/shri-guruji" element={<ContactUs />} />
        <Route path="/mission" element={<ContactUs />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/books" element={<Books />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
