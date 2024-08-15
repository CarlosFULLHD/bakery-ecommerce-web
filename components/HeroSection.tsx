import { Button } from '@nextui-org/button';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-background-dark py-12 px-4 flex flex-col items-center text-center lg:py-28">
      {/* Imagen de Fondo */}
      <img
        src="/Jesus_bakery.webp"
        alt="Imagen decorativa"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Contenido */}
      <div className="relative z-10 lg:pt-20">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-custom-brown">
          Comparte la Fe con Dulzura 🧁🍪
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-lg md:text-xl text-custom-brown max-w-2xl">
          Descubre nuestras masitas artesanales, ideales para reuniones de célula, eventos de iglesia y celebraciones familiares. Perfectas para compartir y disfrutar juntos.
        </p>

        {/* Botón de Acción */}
        <Button 
        className="mt-8 bg-primary text-custom-brown py-3 px-8 rounded-lg text-lg font-bold shadow-lg hover:bg-custom-brown-light hover:text-white transition duration-300"
         onClick={() => scrollToSection("masitas")}>
          Haz tu Pedido Ahora
        </Button>
      </div>

      {/* Botón Fade Down */}
      {/* <div className="lg:pr-28 relative z-10 w-10 mx-auto mt-8 lg:mt-12 xl:mt-20">
        <Button
          className="h-12 text-white hover:text-primary rounded-full"
          onClick={() => scrollToSection("masitas")} // Reemplaza "nextSection" con el ID de la sección a la que deseas desplazarte
        >
          <FaChevronDown className="animate-fade-in-down text-xl" />
        </Button>
      </div> */}
    </section>
  );
};

export default HeroSection;
