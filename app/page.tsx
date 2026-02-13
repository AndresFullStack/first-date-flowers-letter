// "use client";
// import { Letter } from "@/components/letter";
// import TextCursor from "@/components/TextCursor";
// import BokehBackgroundDemo from "@/components/ui/BokehBackground";
// import { useState } from "react";
// import Confetti from "react-confetti";

// // import { Button } from "@/components/ui/button";

// //  USAR: https://www.shadcn.io/background/fireworks

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [confetti, setConfetti] = useState(false);
//   // const { width, height } = useWindowSize()

//   return (
//     <main className="relative min-h-screen">
//       <BokehBackgroundDemo />
//       <div className="relative z-10 flex items-center justify-center h-screen">
//         <div className="text-center pointer-events-auto w-full flex flex-col items-center justify-center">
//           <div className="w-full flex h-auto justify-center items-center">
//             <Letter setIsOpen={setIsOpen} isOpen={isOpen} />
//           </div>
//           {isOpen && (
//             <aside className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-95 pt-15">
//               <h1 className="text-2xl text-white font-bold pb-4">
//                 ¡Para mi amor Wendy!
//               </h1>
//               <p className="text-white">
//                 En este día tan especial, quiero regalarte estas flores como
//                 símbolo de mi amor y aprecio por ti. Cada pétalo representa un
//                 momento hermoso que hemos compartido juntos
//               </p>
//               <div className="flex justify-center gap-4 pt-6">
//                 <button
//                   className="px-4 py-2 bg-[#e74c3c] text-white rounded-md hover:bg-[#c0392b] transition-colors duration-300"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Cerrar
//                 </button>
//                 <button
//                   className="px-4 py-2 bg-[#27ae60] text-white rounded-md hover:bg-[#1e8449] transition-colors duration-300"
//                   onClick={() => setConfetti(true)}
//                 >
//                   Aceptar
//                 </button>
//               </div>
//             </aside>
//           )}
//         </div>
//       </div>

//       {confetti && (
//         <Confetti width={window.innerWidth} height={window.innerHeight} />
//       )}

//       <div className="fixed inset-0 pointer-events-none z-50">
//         <TextCursor
//           text="🌷"
//           spacing={60}
//           maxPoints={15}
//           followMouseDirection={true}
//           randomFloat={true}
//           exitDuration={0.8}
//           removalInterval={40}
//         />
//       </div>
//     </main>
//   );
// }

"use client";
import { Letter } from "@/components/letter";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// "use client";
// import { Letter } from "@/components/letter";
// import TextCursor from "@/components/TextCursor";
import BokehBackgroundDemo from "@/components/ui/BokehBackground";
import { FloralParticles } from "@/components/ui/FloralBackground";
// import { useState } from "react";
// import Confetti from "react-confetti";

// Import dinámico para evitar problemas de SSR
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Set window size on mount
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <main className="relative min-h-screen">
      o FloralBackgroundImages o FallingPetals
      <BokehBackgroundDemo />
      <FloralParticles />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="text-center w-full flex flex-col items-center justify-center">
          <Letter setIsOpen={setIsOpen} isOpen={isOpen} />

          {isOpen && (
            <div
              className="fixed bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-20 
                             left-1/2 -translate-x-1/2
                             w-[90%] max-w-[320px] sm:max-w-md md:max-w-lg 
                             pt-4 sm:pt-6 md:pt-8 
                             px-4 sm:px-6 md:px-8 pb-4
                             bg-black/30 backdrop-blur-md rounded-lg
                             shadow-xl"
            >
              <h1 className="text-lg sm:text-xl md:text-2xl text-white font-bold pb-2 sm:pb-3 md:pb-4">
                ¡Para mi amor!
              </h1>
              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                En este día especial quiero recordarte que eres mi lugar seguro,
                mi impulso y mi calma al mismo tiempo; Lo que construimos no se
                ve, pero se siente y para mí, eso lo significa todo. 💫 ❤️
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                <button
                  className="px-4 py-2 text-sm sm:text-base bg-[#e74c3c] text-white rounded-md hover:bg-[#c0392b] transition-all duration-300 active:scale-95"
                  onClick={() => setIsOpen(false)}
                >
                  Cerrar
                </button>
                <button
                  className="px-4 py-2 text-sm sm:text-base bg-[#27ae60] text-white rounded-md hover:bg-[#1e8449] transition-all duration-300 active:scale-95"
                  onClick={() => setConfetti(true)}
                >
                  Aceptar ❤️
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {confetti && windowSize.width > 0 && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={300}
        />
      )}
    </main>
  );
}
