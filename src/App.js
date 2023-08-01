import React, { Suspense, lazy } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader"

const LazyHome = lazy(() => import("./Pages/home/Home"));
const LazyAboutUs = lazy(() => import("./Pages/aboutUs/AboutUs"));
const LazyWorkshop = lazy(() => import("./Pages/workshop/Workshop"));
const LazyContactUs = lazy(() => import("./Pages/contactUs/ContactUs"));
const LazyMyJourney = lazy(() => import("./Pages/myJourney/MyJourney"));
const LazyDonations = lazy(() => import("./Pages/donations/Donations"));
const LazyBooks = lazy(() => import("./Pages/books/Books"));
const LazyMyPath = lazy(() => import("./Pages/myPath/MyPath"));
const LazyMyDestination = lazy(() => import("./Pages/myDestination/MyDestination"));
const LazyAshram = lazy(() => import("./Pages/ashram/Ashram"));
const LazyVastuPurush = lazy(() => import("./Pages/vastuPurush/VastuPurush"));
const LazyClasses = lazy(() => import("./Pages/classes/Classes"));
const LazyEvents = lazy(() => import("./Pages/events/Events"));
const LazyConsultancies = lazy(() => import("./Pages/consultancies/consultancies"));
const LazyDignitaries = lazy(() => import("./Pages/dignitaries/Dignitaries"));
const LazyBookLaunch = lazy(() => import("./Pages/bookLaunch/BookLaunch"));
const LazyGurupurnima = lazy(() => import("./Pages/gurupurnima/Gurupurnima"));


function App() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/about" element={<LazyAboutUs />} />
          <Route path="/workshops" element={<LazyWorkshop />} />
          <Route path="/contact-us" element={<LazyContactUs />} />
          <Route path="/journey" element={<LazyMyJourney />} />
          <Route path="/path" element={<LazyMyPath />} />
          <Route path="/destination" element={<LazyMyDestination />} />
          <Route path="/donations" element={<LazyDonations />} />
          <Route path="/books" element={<LazyBooks />} />
          <Route path="/ashram" element={<LazyAshram />} />
          <Route path="/vastu-purush" element={<LazyVastuPurush />} />
          <Route path="/classes" element={<LazyClasses />} />
          <Route path="/events" element={<LazyEvents />} />
          <Route path="/consultancies" element={<LazyConsultancies />} />
          <Route path="/dignitaries" element={<LazyDignitaries />} />
          <Route path="/book-launch" element={<LazyBookLaunch />} />
          <Route path="/gurupurnima" element={<LazyGurupurnima />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
