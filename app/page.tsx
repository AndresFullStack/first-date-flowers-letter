"use client";
import { Letter } from "@/components/letter";
import TextCursor from "@/components/TextCursor";
import BokehBackgroundDemo from "@/components/ui/BokehBackground";
import { useState } from "react";
import Confetti from "react-confetti";

// import { Button } from "@/components/ui/button";

//  USAR: https://www.shadcn.io/background/fireworks

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [confetti, setConfetti] = useState(false);
  // const { width, height } = useWindowSize()

  return (
    <main className="relative min-h-screen">
      <BokehBackgroundDemo />
      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="text-center pointer-events-auto w-full flex flex-col items-center justify-center">
          <div className="w-full flex h-auto justify-center items-center">
            <Letter setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
          {isOpen && (
            <aside className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-95 pt-15">
              <h1 className="text-4xl text-white font-bold pb-4">
                ¡Para mi amor Wendy!
              </h1>
              <div className="flex justify-center gap-4 pt-6">
                <button
                  className="px-4 py-2 bg-[#e74c3c] text-white rounded-md hover:bg-[#c0392b] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Cerrar
                </button>
                <button
                  className="px-4 py-2 bg-[#27ae60] text-white rounded-md hover:bg-[#1e8449] transition-colors duration-300"
                  onClick={() => setConfetti(true)}
                >
                  Aceptar
                </button>
              </div>
            </aside>
          )}
        </div>
      </div>

      {confetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <div className="fixed inset-0 pointer-events-none z-50">
        <TextCursor
          text="🌷"
          spacing={60}
          maxPoints={15}
          followMouseDirection={true}
          randomFloat={true}
          exitDuration={0.8}
          removalInterval={40}
        />
      </div>
    </main>
  );
}
