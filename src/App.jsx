import BgParticles from "./components/BgParticles";
import ClubMarquee from "./components/ClubMarquee";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/Pages/About";
import Clubs from "./components/Pages/Clubs";
import Events from "./components/Pages/Events";
import Hero from "./components/Pages/Hero";
import Info from "./components/Pages/Info";
import Phases from "./components/Pages/Phases";
import Registration from "./components/Pages/Registration";
import Speakers from "./components/Pages/Speakers";

function App() {
  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      <Navbar />
      <Hero />
      <Info />
      <About/>
      <Counter/>
      <Speakers />
      <Phases />
      <Events />
      <Registration />
      <Clubs />
      <Footer />
    </div>
  );
}

export default App;
