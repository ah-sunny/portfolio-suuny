import  { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [particleCount, setParticleCount] = useState(150); 
  const [init, setInit] = useState(false);

  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  
  useEffect(() => {
    const handlePageClick = () => {
      setParticleCount((prev) => prev + 50); 
    };

    window.addEventListener("click", handlePageClick);

    
    return () => {
      window.removeEventListener("click", handlePageClick);
    };
  }, []);

  
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: particleCount, 
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [particleCount] 
  );

  // eslint-disable-next-line react/prop-types
  return <Particles id={props.id} init={particlesLoaded} options={options}></Particles> ;
};

export default ParticlesComponent;