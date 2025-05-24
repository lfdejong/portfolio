import '../css/App.css';
import { React } from "react";
import Portfolio from "./Portfolio"
import Header from "./Header";
import Footer from "./Footer";

//carousel variables

function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio/>
      <Footer />
    </div>
  );
}

export default App;
