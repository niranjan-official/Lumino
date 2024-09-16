import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-screen flex flex-col bg-black">
      <Navbar/>
      <div className="w-full h-full flex justify-center items-center">
        <img src="/lumino.svg" className="w-5/6 sm:w-1/2 h-auto" alt="" />
      </div>
    </div>
  );
}

export default App;
