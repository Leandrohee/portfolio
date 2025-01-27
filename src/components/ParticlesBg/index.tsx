/* ------------------------- THIS FILE IS RESPONSABLE FOR THE BACKGROUND ------------------------ */

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import styled from "styled-components";

/* --------------------------------------------- CSS -------------------------------------------- */
const ParticlesBgSc = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    .particles-component{
        height: 100%;
        width: 100%;
    }

`

/* ------------------------------------------ COMPONENT ----------------------------------------- */
export const ParticlesBg = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000",
        },
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
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 80,                           
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 450,
        },
        opacity: {
          value: {
            min: 0,
            max: 0.3
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
        <ParticlesBgSc>
            <Particles
              className="particles-component"
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={options}
            />
        </ParticlesBgSc>
    );
  }

  return <></>;
};