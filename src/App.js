import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "./Footer";

function App() {
  const scrolll = (e) => {
    console.log(e.target);
  };

  return (
    <div className="App">
      <Header />
      <Home />
      <About onClick={(e) => scrolll(e)} />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
