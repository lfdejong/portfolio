import '../css/App.css';
import "../css/Embla.css";
import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import Header from "./Header";
import Footer from "./Footer";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function App() {
  return (
    <div className="App">
      <Header />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Footer />
    </div>
  );
}

export default App;
