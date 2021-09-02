import Navbar from "./components/Navbar";
import About from "./components/About";
// import Slideshow from "./components/Slideshow"
import AboutColumns from "./components/AboutColumns"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer";
// import background from './img/RvBackground.png'

function App() {
  return (
    <div className="web-container">
      <div className="navabar">
        <Navbar />
      </div>
    <div className="about">
      <About />
    </div>
      <AboutColumns />
      <Gallery />
      <Footer />
    </div>
    // Make slide show fill white space, do that by making the componentrs into secctions and filling it that way if that works
  );
}

export default App;
