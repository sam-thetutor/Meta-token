import About from "./pages/About";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import HowToBuy from "./pages/HowToBuy";
import Navbar from "./pages/Navbar";
import Tokenomics from "./pages/Tokenomics";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      <HowToBuy />
      <Footer />
    </div>
  );
}

export default App;
