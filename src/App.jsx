import BgParticles from "./components/BgParticles";
import ClubMarquee from "./components/ClubMarquee";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Clubs from "./components/Pages/Clubs";
import Hero from "./components/Pages/Hero";
import Info from "./components/Pages/Info";
import Phases from "./components/Pages/Phases";
import Registration from "./components/Pages/Registration";
import Speakers from "./components/Pages/Speakers";

function App() {
  return (
    <div className="w-full relative overflow-hidden bg-black text-white">
      <Navbar />
      <Hero />
      <Info />
      <ClubMarquee />
      <Speakers />
      <Phases/>
      <Registration />
      <Clubs />
      <Footer />
    </div>
  );
}

export default App;
