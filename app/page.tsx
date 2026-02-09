import { Letter } from "@/components/letter";
import TextCursor from "@/components/TextCursor";
import BokehBackgroundDemo from "@/components/ui/BokehBackground";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BokehBackgroundDemo />
      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="text-center pointer-events-auto">
          <h1 className="text-5xl text-white font-bold mb-4">
            ¡Para mi amor Wendy!
          </h1>
          {/* <h1 className="text-5xl text-white font-bold mb-4">¡Hola Mundo!</h1>
          <p className="text-xl text-gray-300">
            Mueve el cursor para ver el efecto de las flores. 🌷
          </p> */}
          <Letter />
        </div>
      </div>

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
