import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import OurStory from "./components/OurStory";
import MV from "./components/MV";
import Testimonial from "./components/Testimonial";
import SaveTheDate from "./components/SaveTheDate";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <OurStory />
      <MV />
      <Testimonial />
      <SaveTheDate />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
