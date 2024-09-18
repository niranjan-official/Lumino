import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Clubs from "./components/Pages/Clubs";
import Hero from "./components/Pages/Hero";
import Info from "./components/Pages/Info";
import Registration from "./components/Pages/Registration";
import Speakers from "./components/Pages/Speakers";

function App() {
  return (
    <div className="bg-black text-white main-bg">
      <Navbar />
      <Hero />
      <div className="fixed-bg">
        <Info />
        <Clubs />
        <Speakers />
        <Registration />
      </div>
      <Footer />
    </div>
  );
}

export default App;
