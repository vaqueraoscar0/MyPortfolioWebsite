import './App.css';
import NavBar from "./Components/NavBar";
import Banner from './Components/Banner'
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import {Footer} from "./Components/Footer";
import { particlesOptions } from "./Components/config/ParticlesConfig";
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";
import {TimeLine} from "./Components/TimeLine";

function App() {
    const particlesInit = (engine) => {
        loadFull(engine);
    };

  return (
    <div className="App">
        <Particles init={particlesInit} options={particlesOptions} />
      <NavBar/>
      <Banner/>
      <Skills/>
      <TimeLine/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
