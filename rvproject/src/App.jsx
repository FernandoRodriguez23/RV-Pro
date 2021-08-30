import Navbar from "./components/Navbar";
import About from "./components/About";
import Slideshow from "./components/Slideshow"
import AboutColumns from "./components/AboutColumns"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <Slideshow />
      <About />
      <AboutColumns />
      <Gallery />
      <Footer /> */}
      <About />
      <Slideshow />
      <AboutColumns />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
