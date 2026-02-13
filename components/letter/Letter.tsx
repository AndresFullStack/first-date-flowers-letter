// import { useState } from "react";

import { useState } from "react";

// //  max-w-[500px]

// const Letter = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="relative h-75 w-[80%] max-w-125 overflow-y-auto bg-[#FFD5D3] rounded-4xl align-text-top p-8 text-left text-lg text-gray-800 font-serif shadow-[1px_11px_50px_-7px_rgba(234,214,237,0.75)] animate-rotateVerticalCenter">
//       <span
//         onClick={() => setOpen(!open)}
//         className="
//     absolute top-0 left-1/2 -translate-x-1/2
//     w-0 h-0
//     border-l-220 border-l-transparent
//     border-r-220 border-r-transparent
//     border-t-175 border-t-white
//   "
//       />
//       <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1 text-4xl">
//         ❤️
//       </span>
//       <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
//         {/* Mi amor, te amo */}
//       </p>
//     </div>
//   );
// };

// export default Letter;

import { Dispatch, SetStateAction } from "react";

type LetterProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Letter = ({ setIsOpen, isOpen }: LetterProps) => {
  const [letterOpen, setLetterOpen] = useState(false);

  return (
    <>
      {/* Envelope Container */}
      <div
        className="relative w-150 h-87.5 cursor-pointer perspective-1000"
        // onMouseEnter={() => setIsOpen(true)}
        // onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Shadow */}
        <div
          className={`absolute top-[110%] left-1/2 -translate-x-1/2 w-[85%] h-10 rounded-full bg-red-900/40 blur-lg transition-all duration-1000 ${
            isOpen ? "rotate-y-180" : ""
          }`}
        />

        {/* Envelope Inner */}
        <div
          className={`relative w-full h-full transition-all duration-1000 preserve-3d ${
            isOpen ? "rotate-y-180" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
            transitionDelay: isOpen ? "0ms" : "1000ms",
          }}
        >
          {/* Front of Envelope */}
          <div
            className="absolute inset-0 bg-[#d14d44] backface-hidden flex items-center justify-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Postage Stamp */}
            <div className="absolute top-4 right-2 w-[15%] text-white opacity-80">
              <svg
                fill="currentColor"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M253.98,257.652c0-8.568,8.568-17.748,17.136-18.361c-1.224-4.895-1.224-10.402-0.611-15.299 c-3.061,0.611-7.345,0-10.404-1.225c-6.12-3.061-9.792-9.18-9.792-15.912c0-9.18,7.956-20.807,17.136-21.42 c0-2.447,0.612-4.896,0.612-7.344s0.612-4.896,0.612-7.344c-7.956,3.061-17.137-4.283-18.973-12.24 c-1.836-9.792,4.284-17.748,12.853-21.42c-0.612-1.836-0.612-4.284-0.612-6.12c0-3.672,0-7.344,0.612-11.016 c-3.061,0-6.12-1.224-9.181-3.06c-4.283-3.06-6.731-7.344-7.344-12.24c0-0.612,0-1.836,0-2.448c0-9.792,8.568-15.3,17.136-16.524 c-0.611-3.672,0-7.956,0-11.628c0-3.06,0-6.12,0.612-9.18c-7.956,2.448-18.36-4.284-20.808-12.24 c-2.448-7.956,1.836-17.748,9.792-20.808c-1.225-3.06-1.225-6.732-1.225-10.404c0-3.06-0.611-6.732-0.611-9.792 c-9.792,12.24-39.168,4.284-40.393-9.18C205.632,3.672,200.124,1.836,195.84,0c0.611,9.18-7.956,17.748-17.137,17.748 c-9.18,0-16.523-6.732-18.359-15.3c-2.448,0-4.896,0-6.732-0.612c-2.448,0-4.896-0.612-7.956-1.224c0,4.284-2.448,9.18-5.508,12.24 c-3.672,3.672-9.18,6.12-14.076,6.12c-1.224,0-2.448,0-3.672-0.612c-5.508-1.224-12.24-4.896-14.076-11.016 c0-0.612,0-0.612,0-1.224c-4.896,0.612-11.016-0.612-15.912-2.448c-0.612,8.568-9.18,15.3-18.36,14.076 c-4.284-0.612-9.792-3.06-11.016-7.344c0-0.612,0-0.612,0-1.224c0,0,0,0.612-0.612,0.612c-3.672,3.06-8.568,2.448-12.852,1.836 c-1.224,0-2.448,0-3.672,0c1.224,0.612,1.836,1.836,2.448,2.448c3.672,4.896,5.508,11.016,3.06,17.136 c-3.06,8.568-14.076,12.24-22.032,9.18c0,1.224-0.612,1.836-0.612,3.06c-0.612,3.672-0.612,6.732-0.612,10.404 c9.792-1.224,22.644,1.224,23.868,12.852c0.612,5.508-3.06,11.016-8.568,12.852c-2.448,1.224-5.508,1.224-7.956,1.224 c-0.612,0-1.224,0-2.448-0.612c0,1.836,0,4.284,0,6.12c0,3.672,0.612,7.344-0.612,11.016l0,0c0.612,0,0.612-0.612,1.224-0.612 c11.628-3.672,23.256,7.344,19.584,18.972c-1.224,4.896-5.508,8.568-9.792,10.404c-3.672,1.224-6.732,1.836-10.404,1.836 c-0.612,1.836-0.612,3.06-1.224,4.896c-0.612,2.448-0.612,5.508-0.612,7.956c8.568-4.284,22.032-1.836,22.644,9.18 c0.612,9.179-10.404,24.48-21.42,23.869c0,1.223,0,3.059,0,4.283c0,2.447-0.612,4.896-0.612,7.957 c2.448-1.225,6.12-1.836,9.18-1.836c6.12,0.611,11.016,4.895,12.24,11.016c3.672,13.463-9.18,22.643-20.808,20.807 c-0.612,4.285-1.224,9.793-1.836,13.465c5.508-4.283,17.748-3.061,21.42,4.283c8.568,15.912-8.568,25.705-22.032,28.152 c0,4.896,0,10.404-1.224,15.301c7.344-4.285,18.36-4.285,25.704,0c7.956,4.896,11.628,13.463,11.628,22.031 c3.672-0.611,7.344-1.223,11.016-1.223c0-8.568,9.18-20.197,16.524-20.809c4.896-0.613,9.792,2.447,11.628,7.344 c1.836,4.283,1.224,9.791,3.06,14.076c0.612,0,1.224-0.611,1.836-0.611c3.06,0,4.896-0.613,7.344-1.838 c-0.612-1.836,0-3.672,0.612-6.119c1.224-4.896,5.508-9.18,10.404-10.404c11.016-3.061,19.584,4.896,22.645,14.688 c3.672-0.611,7.344-0.611,11.628-0.611c1.836,0,3.672,0,5.508,0.611c-2.448-8.566,4.284-18.971,13.464-19.584 c0.612,0,1.224,0,1.836,0c5.508,0,10.404,3.061,13.464,6.732c1.836,2.449,3.672,5.508,4.284,8.568c1.224,0,2.448,0,4.284,0 s3.672,0,5.508,0c1.224-7.955,9.792-14.076,17.748-14.688c7.956-0.613,15.912,3.672,19.584,11.016 c5.508-3.672,13.464-6.119,20.808-6.119c0-2.449,0-4.896,0-7.957C261.936,273.564,253.98,264.996,253.98,257.652z" />
              </svg>
            </div>

            {/* Address */}
            <div className="text-white text-left text-base md:text-xl font-['Quicksand']">
              <p className="mb-2">
                <span className="font-light">Para:</span>{" "}
                <span className="font-bold">Wendy</span>
              </p>
              <p>
                <span className="font-light">De:</span>{" "}
                <span className="font-bold">Tu amor William</span>
              </p>
            </div>
          </div>

          {/* Back of Envelope*/}
          <div
            className="absolute inset-0 bg-[#d14d44] backface-hidden rotate-y-180"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Envelope Folds */}
            <div
              className={`absolute inset-0 z-20 transition-opacity duration-1000`}
              style={{
                backgroundImage: `conic-gradient(
                  transparent 60deg,
                  #c24e46 60deg 120deg,
                  #e15349 120deg 240deg,
                  #c24e46 240deg 300deg,
                  transparent 300deg
                )`,
              }}
            />

            {/* Top Fold */}
            <div
              className={`absolute inset-0 bg-[#d14d44] origin-top transition-all duration-1000 ${
                isOpen ? "z-0 rotate-x-180" : "z-20"
              }`}
              style={{
                clipPath: "polygon(0% 0%, 50% 55%, 100% 0%)",
                transitionDelay: isOpen ? "750ms" : "500ms",
              }}
            />

            {/* Letter Card */}
            <div
              className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-lg shadow-xl z-10 flex flex-col items-center justify-center text-center p-6 md:p-12 transition-all duration-1000 overflow-hidden ${
                isOpen
                  ? "h-[calc(175%)] md:h-[calc(175%)]"
                  : "h-[calc(100%-2rem)] md:h-[calc(100%-2rem)]"
              }`}
              // letterOpen, setLetterOpen
              // onClick={() => setLetterOpen(!letterOpen)}
              style={{
                transitionDelay: isOpen ? "1250ms" : "0ms",
              }}
            >
              {/* Triangle decoration at top */}
              <div
                className="absolute -top-12 left-1/2 -translate-x-1/2 w-0 h-0"
                style={{
                  borderLeft: "110px solid transparent",
                  borderRight: "110px solid transparent",
                  borderTop: "87.5px solid white",
                }}
              />
              <span className="absolute top-2 left-4 -translate-x-1">
                13 de febrero
              </span>

              {/* Heart at top */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-2xl md:text-4xl animate-pulse">
                ❤️
              </div>
              {/* Content */}
              <div className="mt-8 space-y-4 md:space-y-6">
                {/* <img
                  src="https://img.freepik.com/vector-premium/pulgar-dedos-imprimir-marca-huella-dactilar-amor-corazon_53500-1839.jpg"
                  alt="Love fingerprint"
                  className="w-20 h-20 md:w-32 md:h-32 object-contain mx-auto animate-[pulse_2s_ease-in-out_infinite]"
                /> */}

                <p className="text-base font-bold text-[#c0392b] font-serif max-w-prose leading-relaxed">
                  Hoy hace un año que nos conocimos, nos vimos por primera vez a
                  las 7:40 p.m. Un encuentro que marco el inicio de una historia
                  que me llena de alegría cada vez que la recuerdo. Desde ese
                  momento, supe que había algo especial entre nosotros, una
                  conexión que no se puede explicar con palabras, pero que se
                  siente en el corazón.
                  {/* Cuanto más tiempo estoy contigo{" "}
                  <span className="block mt-2 text-xl md:text-3xl text-[#e74c3c] animate-[heartbeat_1.5s_ease-in-out_infinite]">
                    más te amo!
                  </span> */}
                  Quiero invitarte a celebrar este día tan especial, el 13 de
                  febrero, que representa el comienzo de nuestra historia
                  juntos.
                </p>

                {/* Es un recuerdo que quiero guardar contigo para siempre Ojalá
                aceptes esta invitación y me permitas vivir estos dos días tan
                especiales a tu lado.  */}

                <img
                  // src="https://img.freepik.com/vector-gratis/hermosa-ilustracion-planta-flor-acuarela_191095-328.jpg?t=st=1770946287~exp=1770949887~hmac=ef1a544b5c3eee89d0ca1191941358490684809f97a0c65dfd74b5c35eb23625&w=2000"
                  src="https://img.freepik.com/psd-gratis/hermosa-rosa-aislada_23-2151361647.jpg?t=st=1770946352~exp=1770949952~hmac=55381a63d70411d43782645ec7b672e80f3e54804e3ecdb27fed6f591aef6f4f&w=2000"
                  alt="Flowers"
                  className="w-32 h-32 md:w-48 md:h-48 object-contain mx-auto rounded-lg"
                />
              </div>
              {/* Bottom message */}
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm md:text-base text-gray-600 italic animate-pulse">
                Con todo mi amor, William Dussan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap");

        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .rotate-x-180 {
          transform: rotateX(180deg);
        }

        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }
          10%,
          30% {
            transform: scale(1.1);
          }
          20%,
          40% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </>
  );
};

export default Letter;

{
  /*  
      Hoy hace un año que nos conocimos 13 de febrero, nos vimos por primera vez a las 7:40 p.m.
      Un encuentro que marco el inicio de una historia que me llena de alegría cada vez que la recuerdo.
      Desde ese momento, supe que había algo especial entre nosotros, una conexión que no se puede explicar con palabras, pero que se siente en el corazón.
      
      Quiero invitarte a celebrar este día tan especial, el 13 de febrero, que representa el comienzo de nuestra historia juntos,
      Al día siguiente, el 14 de febrero, quiero seguir celebrando contigo, no solo San Valentín, sino lo bonito que es compartir momentos a tu lado, y agradecer por cada momento que hemos vivido juntos.
      
      Es un recuerdo que quiero guardar contigo para siempre
      Ojalá aceptes esta invitación y me permitas vivir estos dos días tan especiales a tu lado.
      Con todo mi amor,
      William Dussan

      Al día siguiente, el 14 de febrero, quiero seguir celebrando
                contigo, no solo San Valentín, sino lo bonito que es compartir
                momentos a tu lado, y agradecer por cada momento que hemos
                vivido juntos.
      */
}

{
  /* https://www.shadcn.io/background/fireworks */
}
