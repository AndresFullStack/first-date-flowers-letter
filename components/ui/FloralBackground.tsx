// components/FloralParticles.tsx - CON IMÁGENES (requiere tsparticles completo)

"use client";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";

export const FloralParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 pointer-events-none z-40"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 15,
          },
          shape: {
            type: "image",
            image: {
              src: "https://static.vecteezy.com/system/resources/previews/010/250/000/non_2x/peony-flower-watercolor-hand-paint-free-png.png",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.15,
          },
          size: {
            value: 30,
            random: {
              enable: true,
              minimumValue: 20,
            },
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "bottom",
            random: true,
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            animation: {
              enable: true,
              speed: 3,
            },
          },
        },
      }}
    />
  );
};

export default FloralParticles;

//
//   https://img.freepik.com/vector-premium/dibujo-flores-coleccion-peonias_1310786-403.jpg?w=2000
// https://static.vecteezy.com/system/resources/previews/010/250/000/non_2x/peony-flower-watercolor-hand-paint-free-png.png
//   { src: "https://raw.githubusercontent.com/Kaos599/Kaos599/main/rose.png", width: 100, height: 100 }
//
