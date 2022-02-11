import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/home/Home";
import AboutUs from "./Pages/aboutUs/AboutUs";
import Workshop from "./Pages/workshop/Workshop";
import VastuTemple from "./Pages/vastuTemple/VastuTemple";
import Gallery from "./Pages/gallery/Gallery";
import ContactUs from "./Pages/contactUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/temple" element={<VastuTemple />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/journey" element={<ContactUs />} />
        <Route path="/shri-guruji" element={<ContactUs />} />
        <Route path="/mission" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
