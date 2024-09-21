// MasitasSection.tsx
import React from "react";
import MasitaCard from "./MasitaCard";
import Link from "next/link";

export interface Masita {
  nombre: string;
  imagen_lowres: string;
  descripcion?: string;
  imagenes?: string[];
  p_u1: number; // Price for 9-17 units
  p_u2: number; // Price for 18-50 units
  p_u3: number; // Price for 51-100 units
}

const masitas: Masita[] = [
  {
    nombre: "Muffins De Vainilla Con Chocochips",
    imagen_lowres:
      "/MuffinsDeVainillaConChocochips1.webp",
    descripcion: "Exquisitos muffins de vainilla con un toque de chocochips, perfectos para acompañar un café o como un delicioso snack.",
    imagenes: [
      "/MuffinsDeVainillaConChocochips1.webp",
      "/MuffinsDeVainillaConChocochips2.webp",
      "/MuffinsDeVainillaConChocochips3.webp",
      
    ],
    p_u1: 3.4,
    p_u2: 3,
    p_u3: 2.75,
  },
  {
    nombre: "Conos Con Crema Pastelera",
    imagen_lowres:
      "/ConosConCremaPastelera2.webp",
    descripcion: "Conos crujientes rellenos de deliciosa crema pastelera, ideales para un postre elegante o una merienda especial.",
    imagenes: [
      "/ConosConCremaPastelera1.webp",
      "/ConosConCremaPastelera2.webp",
      "/ConosConCremaPastelera3.webp",
    ],
    p_u1: 3.5,
    p_u2: 3.1,
    p_u3: 2.9,
  },
  {
    nombre: "Galletones Con Chocochips",
    imagen_lowres:
      "/GalletonesConChocochips1.webp",
    descripcion: "Grandes galletas rellenas de chocochips, perfectas para cualquier momento del día.",
    imagenes: [
      "/GalletonesConChocochips1.webp",
      "/GalletonesConChocochips2.webp",
      "/GalletonesConChocochips3.webp",
      "https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/GalleroneSConChocochips.jpeg?raw=true",
    ],
    p_u1: 4,
    p_u2: 3.3,
    p_u3: 2.9,
  },
  {
    nombre: "Alfajores con Crema Pastelera",
    imagen_lowres:
      "/AlfajoresconCremaPastelera1.webp",
    descripcion: "Alfajores rellenos de suave crema pastelera, un toque de dulzura que te encantará.",
    imagenes: [
      "/AlfajoresconCremaPastelera1.webp",
      "/AlfajoresconCremaPastelera2.webp",
      
    ],
    p_u1: 3.3,
    p_u2: 2.9,
    p_u3: 2.6,
  },


  {
    nombre: "Alfajores con Ganache de Chocolate",
    imagen_lowres:
      "/AlfajoresconGanachedeChocolate1.webp",
    descripcion: "Alfajores rellenos de ganache de chocolate, un dulce placer para los amantes del chocolate.",
    imagenes: [
      "AlfajoresconGanachedeChocolate1.webp",
      "AlfajoresconGanachedeChocolate2.webp",
    ],
    p_u1: 3.7,
    p_u2: 3.4,
    p_u3: 3.1,
  },


  {
    nombre: "Ponquesitos",
    imagen_lowres:
      "/Ponquesitos1.webp",
    descripcion: "Pequeños y esponjosos ponquesitos, ideales para acompañar una taza de té o café.",
    imagenes: [
      "/Ponquesitos1.webp",
      "/Ponquesitos2.webp",
      "/Ponquesitos3.webp",
    ],
    p_u1: 3.4,
    p_u2: 2.9,
    p_u3: 2.7,
  },
  {
    nombre: "Cupcakes de Chocolate",
    imagen_lowres:
      "/CupcakesdeChocolate1.webp",
    descripcion: "Deliciosos cupcakes de chocolate, suaves y con un intenso sabor a cacao.",
    imagenes: [
      "/CupcakesdeChocolate1.webp",
      "/CupcakesdeChocolate2.webp",
      "/CupcakesdeChocolate3.webp",
      
    ],
    p_u1: 3.6,
    p_u2: 3.2,
    p_u3: 3,
  },

  {
    nombre: "Cannolis con Crema de Ricotta",
    imagen_lowres:
      "/CannolisconCremadeRicotta1.webp",
    descripcion: "Cannolis crujientes rellenos de una deliciosa crema de ricotta, un postre tradicional italiano.",
    imagenes: [
      "/CannolisconCremadeRicotta1.webp",
      "/CannolisconCremadeRicotta2.webp",
    ],
    p_u1: 3.4,
    p_u2: 3.1,
    p_u3: 2.85,
  },
  {
    nombre: "Jawitas",
    imagen_lowres:
      "/Jawitas1.webp",
    descripcion: "Deliciosas jawitas hechas con los mejores ingredientes, crujientes por fuera y suaves por dentro.",
    imagenes: [
      "/Jawitas1.webp",
      "/Jawitas2.webp",
    ],
    p_u1: 3.7,
    p_u2: 3.3,
    p_u3: 3,
  },

  {
    nombre: "Bollitos de Pizza",
    imagen_lowres:
      "/BollitosdePizza1.webp",
    descripcion: "Bollitos suaves con un irresistible sabor a pizza, perfectos para disfrutar en reuniones.",
    imagenes: [
      "/BollitosdePizza1.webp",
      "/BollitosdePizza2.webp",
      "/BollitosdePizza3.webp",
    ],
    p_u1: 4,
    p_u2: 3.65,
    p_u3: 3.4,
  },
  {
    nombre: "Cuñapes",
    imagen_lowres:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0785B2V8cYASIBO0iGyN71f5c6qhasbtWWA&s",
    descripcion: "Tradicionales cuñapes con un sabor inconfundible de queso, ideales para acompañar un café.",
    imagenes: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0785B2V8cYASIBO0iGyN71f5c6qhasbtWWA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35K3fm4DzK8780P9MxDqAqV9eHgWwY34krg&s",
    ],
    p_u1: 3.6,
    p_u2: 3.3,
    p_u3: 3,
  },
  {
    nombre: "Empanadas de Pollo",
    imagen_lowres:
      "https://chipabythedozen.com/wp-content/uploads/2019/08/empanadas-de-pollo-bolivianas-scaled.jpg",
    descripcion: "Empanadas rellenas con un sabroso guiso de pollo, una opción perfecta para cualquier ocasión.",
    imagenes: [
      "https://chipabythedozen.com/wp-content/uploads/2019/08/empanadas-de-pollo-bolivianas-scaled.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMdlY9S_eOA9HfjX1QEuoJ9gIcvTfSkjqKA&s",
    ],
    p_u1: 4.2,
    p_u2: 3.85,
    p_u3: 3.5,
  },
  {
    nombre: "Empanadas de Queso",
    imagen_lowres:
      "https://i.ytimg.com/vi/srGzn1xsL2o/maxresdefault.jpg",
    descripcion: "Empanadas crujientes rellenas de queso derretido, un clásico que nunca falla.",
    imagenes: [
      "https://i.ytimg.com/vi/srGzn1xsL2o/maxresdefault.jpg",
      "https://www.donitalo.com/wp-content/uploads/2020/06/empanada-300x300.png"
    ],
    p_u1: 3.5,
    p_u2: 3.1,
    p_u3: 2.95,
  },
];

export const MasitasSection = () => {
  return (
    <section className="m-0 self-center mt-8" id="masitas">

<div
  id="introduction"
  className="bg-gradient-to-r from-custom-brown-light to-custom-brown w-full text-center flex justify-center items-center py-4 px-6 text-white border-white border-y-2 mb-6 rounded-lg shadow-lg"
>
  <div className="max-w-lg w-full px-4 md:max-w-xl lg:max-w-2xl">
    <span className="text-xl font-bold md:text-2xl lg:text-3xl drop-shadow-lg">
      📦 Pedidos a partir de 9 unidades
    </span>
    <p className="mt-2 text-sm md:text-base lg:text-lg text-white/90">
      Personaliza tus masitas para eventos y pedidos grandes.{" "}
      <Link
        href="https://wa.me/59179529059?text=Hola,%20me%20gustaría%20consultar%20sobre%20un%20pedido%20personalizado%20de%20masitas."
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-white/90 hover:text-white"
        
      >
        ¡Consulta en WhatsApp aquí!
      </Link>
    </p>
  </div>
</div>



      <div className="mx-auto p-1 sm:p-2 md:p-4 lg:p-8 rounded-lg">
        <div className="mb-8">
          <div className="mx-2 grid grid-cols-2 md:grid-cols-4 gap-4 items-center max-w-[1200px] md:mx-auto">
            {masitas.map((masita, index) => (
              <MasitaCard key={index} masita={masita} isDetailed />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasitasSection;
