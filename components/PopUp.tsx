import Image from "next/image";
import React, { useState, useEffect } from "react";

interface PopUpProps {
  sectionInView: string; // La sección actual visible en la vista
}

interface SectionMessages {
  [key: string]: {
    title: string;
    message: string;
    image: string;
  };
}

const messages: SectionMessages = {
  introduction: {
    title: "Youtube",
    message: "Hoy perdiste 8 horas, ¿listo para perder unas cuantas más?",
    image: "Youtube.png",
  },
  instructor: {
    title: "Carlos Nina",
    message:
      "Sé lo que es sentirse atrapado por el celular. He estado allí, y he salido. Déjame guiarte hacia la libertad.",
    image: "carlitos_photo.webp",
  },
  modules: {
    title: "Jordan Peterson",
    message:
      "No es suficiente desear un cambio; debes actuar para hacerlo posible, la responsabilidad es el camino hacia la libertad. ",
    image: "jordanpeterson-photo.webp",
  },
  modules2: {
    title: "Simon Sinek",
    message:
      "No es solo lo que haces, sino por qué lo haces. Aprende a inyectar pasión y propósito en cada aspecto de tu vida",
    image: "simon-sinek.webp",
  },
  bonuses: {
    title: "Carlos Nina",
    message: "Recibe un 15% de descuento con el codigo 'LIBERTAD'",
    image: "carlitos_photo.webp",
  },
  pricing: {
    title: "Warren Buffett",
    message:
      "La mejor inversión que puedes hacer es en ti mismo. El precio de hoy es mínimo comparado con los dividendos que pagará tu futuro.",
    image: "warren-buffet.webp",
  },
  guarantee: {
    title: "Mark Manson",
    message:
      "Invertir en ti mismo siempre vale la pena, es una apuesta segura. ",
    image: "mark-manson.webp",
  },
  faqs: {
    title: "Carlos Nina",
    message:
      "No hay preguntas pequeñas cuando se trata de tu crecimiento. Cualquier duda que tengas, estoy aquí para ayudarte a avanzar con confianza.",
    image: "carlitos_photo.webp",
  },
  // Agregar más secciones según sea necesario
};

const PopUp = ({ sectionInView }: PopUpProps) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (sectionInView && messages[sectionInView]) {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 10000); // Mensaje visible por 5 segundos
      return () => clearTimeout(timer);
    }
  }, [sectionInView]);

  if (!showPopup || !messages[sectionInView]) return null;

  const { title, message, image } = messages[sectionInView];

  return (
    <div className="fixed top-10 right-3 left-0 z-50 flex justify-end animate-slideInFromTop">
      <div className="w-[350px] md:w-[400px] mb-1 flex items-start space-x-3 bg-gray-200/75 backdrop-blur-md p-3 shadow-lg rounded-2xl text-base">
        <div className="shrink-0">
          <Image
            className="w-12 h-12 object-cover rounded-xl"
            src={image}
            alt={image}
            width={100}
            height={100}
          />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-gray-800">{title}</div>
          <div className="text-gray-700 leading-tight">{message}</div>
        </div>
        <div>
          <p className="text-gray-600 absolute right-6">hace 7 minutos</p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
