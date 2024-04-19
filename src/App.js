import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Contact from "./component/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
