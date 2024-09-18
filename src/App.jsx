import Navbar from "./components/Navbar";
import Clubs from "./components/Pages/Clubs";
import Hero from "./components/Pages/Hero";
import Info from "./components/Pages/Info";
import Registration from "./components/Pages/Registration";

function App() {
  return (
   <div className="bg-black text-white">
   <Navbar/>
   <Hero/>
   <Info/>
   <Registration/>
   <Clubs/>
   </div>
  );
}

export default App;
