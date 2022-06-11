import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/home/Home";
import AboutUs from "./Pages/aboutUs/AboutUs";
import Workshop from "./Pages/workshop/Workshop";
// import VastuTemple from "./Pages/vastuTemple/VastuTemple";
import Gallery from "./Pages/gallery/Gallery";
import ContactUs from "./Pages/contactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import MyJourney from "./Pages/myJourney/MyJourney";
import Donations from "./Pages/donations/Donations";
import Books from "./Pages/books/Books";
import MyPath from "./Pages/myPath/MyPath";
import MyDestination from "./Pages/myDestination/MyDestination";
import Ashram from "./Pages/ashram/Ashram";
import VastuPurush from "./Pages/vastuPurush/VastuPurush";
import Classes from "./Pages/classes/Classes";

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
        <Route path="/workshops" element={<Workshop />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/journey" element={<MyJourney />} />
        <Route path="/path" element={<MyPath />} />
        <Route path="/destination" element={<MyDestination />} />
        <Route path="/mission" element={<ContactUs />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/books" element={<Books />} />
        <Route path="/ashram" element={<Ashram />} />
        <Route path="/vastu-purush" element={<VastuPurush />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
