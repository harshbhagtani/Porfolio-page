import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ReactTypingEffect from "react-typing-effect";
import linkedin from "./assets/linkedin.png";
import facebook from "./assets/facebook.png";
import github from "./assets/github.png";
import ppa from "./assets/ppa.jpeg";
import lc from "./assets/lc.png";

import "./home.css";

const Home = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="home" id="homee">
      <div className="home-content">
        <div className="home-left">
          <h1
            style={{ fontWeight: "bolder", color: "#00004d", fontSize: "40px" }}
          >
            Hi There,
          </h1>
          <h1
            style={{ fontWeight: "bolder", color: "#00004d", fontSize: "40px" }}
          >
            I'm Harsh <span style={{ color: "#e68a00" }}>Bhagtani</span>
          </h1>
          <h2
            style={{ fontWeight: "bold", color: "#00004d", fontSize: "30px" }}
          >
            {" "}
            <ReactTypingEffect
              typingDelay={1000}
              eraseDelay={2000}
              eraseSpeed={50}
              speed={50}
              text={[
                "I am a Frontend Web Developer",
                "I love solving DSA problems",
                "I am skilled in Reactjs,Redux,JavaScript",
              ]}
            />
          </h2>
          <div className="social-link">
            {" "}
            <a
              href="https://www.linkedin.com/in/harsh-bhagtani-064041194/"
              target="_blank"
            >
              <img src={linkedin}></img>
            </a>
            <a href="">
              <img src={facebook}></img>
            </a>
            <a href=" https://github.com/harshbhagtani" target="_blank">
              <img src={github}></img>
            </a>
            <a href="https://leetcode.com/user0781C/" target="_blank">
              <img src={lc}></img>
            </a>
          </div>
        </div>
        <div className="home-right">
          <img src={ppa}></img>
        </div>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#f5f5f0",
            },
          },
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#595959",
            },
            links: {
              color: "#595959",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },

            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};
export default Home;
