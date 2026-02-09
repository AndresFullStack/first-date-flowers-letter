import React from "react";
// <div class="">

const Letter = () => {
  return (
    <div
      className="relative h-[300px] max-w-[380px] sm:max-w-[400px] md:max-w-[700px] overflow-y-auto bg-[#FFD5D3] rounded-4xl align-text-top p-8 text-left text-lg text-gray-800 font-serif bg-[#FFD5D3] rounded-4xl p-8
  shadow-[1px_11px_50px_-7px_rgba(234,214,237,0.75)] animate-rotateVerticalCenter"
    >
      {/* ✨ Mi amor: Hoy te escribo porque quiero invitarte a algo muy especial
      para mí. El 13 de febrero no es solo una fecha: es el día que representa
      nuestra primera cita, el comienzo de una historia que me hace sonreír cada
      vez que la pienso. Y al día siguiente, el 14 de febrero, quiero seguir
      celebrando contigo, no solo San Valentín, sino lo bonito que es compartir
      momentos a tu lado. Por eso, me encantaría invitarte a una cena preparada
      con todo mi cariño, donde cada detalle tenga un pedacito de lo que siento
      por ti. No es solo una cena, es un recuerdo que quiero guardar contigo
      para siempre. Ojalá aceptes esta invitación y me permitas vivir estos dos
      días tan especiales a tu lado. Con todo mi corazón, William Dussan */}

      <span
        className="
    absolute top-0 left-1/2 -translate-x-1/2
    w-0 h-0
    border-l-[220px] border-l-transparent
    border-r-[220px] border-r-transparent
    border-t-[175px] border-t-white
  "
      />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1 text-4xl">
        ❤️
      </span>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        Mi amor, te amo
      </p>
    </div>
  );
};

export default Letter;
