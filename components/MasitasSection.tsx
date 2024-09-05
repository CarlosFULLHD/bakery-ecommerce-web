// MasitasSection.tsx
import React from "react";
import MasitaCard from "./MasitaCard";

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
      "https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/MuffinsDeVainillaConChocochips.jpeg?raw=true",
    descripcion: "Exquisitos muffins de vainilla con un toque de chocochips, perfectos para acompañar un café o como un delicioso snack.",
    imagenes: [
      "https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/MuffinsDeVainillaConChocochips.jpeg?raw=true",
    ],
    p_u1: 3.4,
    p_u2: 3,
    p_u3: 2.75,
  },
  {
    nombre: "Conos Con Crema Pastelera",
    imagen_lowres:
      "https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/ConosConCremaPastelera.jpeg?raw=true",
    descripcion: "Conos crujientes rellenos de deliciosa crema pastelera, ideales para un postre elegante o una merienda especial.",
    imagenes: [
      "https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/ConosConCremaPastelera.jpeg?raw=true",
    ],
    p_u1: 3.5,
    p_u2: 3.1,
    p_u3: 2.9,
  },
  {
    nombre: "Galletones Con Chocochips",
    imagen_lowres:
      "https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/GalleroneSConChocochips.jpeg?raw=true",
    descripcion: "Grandes galletas rellenas de chocochips, perfectas para cualquier momento del día.",
    imagenes: [
      "https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/GalleroneSConChocochips.jpeg?raw=true",
    ],
    p_u1: 4,
    p_u2: 3.3,
    p_u3: 2.9,
  },
  {
    nombre: "Jawitas",
    imagen_lowres:
      "https://example.com/jawitas.jpg",
    descripcion: "Deliciosas jawitas hechas con los mejores ingredientes, crujientes por fuera y suaves por dentro.",
    imagenes: [
      "https://example.com/jawitas.jpg",
    ],
    p_u1: 3.7,
    p_u2: 3.3,
    p_u3: 3,
  },
  {
    nombre: "Cuñapes",
    imagen_lowres:
      "https://example.com/cunapes.jpg",
    descripcion: "Tradicionales cuñapes con un sabor inconfundible de queso, ideales para acompañar un café.",
    imagenes: [
      "https://example.com/cunapes.jpg",
    ],
    p_u1: 3.6,
    p_u2: 3.3,
    p_u3: 3,
  },
  {
    nombre: "Empanadas de Pollo",
    imagen_lowres:
      "https://example.com/empanadas_pollo.jpg",
    descripcion: "Empanadas rellenas con un sabroso guiso de pollo, una opción perfecta para cualquier ocasión.",
    imagenes: [
      "https://example.com/empanadas_pollo.jpg",
    ],
    p_u1: 4.2,
    p_u2: 3.85,
    p_u3: 3.5,
  },
  {
    nombre: "Bollitos de Pizza",
    imagen_lowres:
      "https://example.com/bollitos_pizza.jpg",
    descripcion: "Bollitos suaves con un irresistible sabor a pizza, perfectos para disfrutar en reuniones.",
    imagenes: [
      "https://example.com/bollitos_pizza.jpg",
    ],
    p_u1: 4,
    p_u2: 3.65,
    p_u3: 3.4,
  },
  {
    nombre: "Alfajores con Ganache de Chocolate",
    imagen_lowres:
      "https://example.com/alfajores_chocolate.jpg",
    descripcion: "Alfajores rellenos de ganache de chocolate, un dulce placer para los amantes del chocolate.",
    imagenes: [
      "https://example.com/alfajores_chocolate.jpg",
    ],
    p_u1: 3.7,
    p_u2: 3.4,
    p_u3: 3.1,
  },
  {
    nombre: "Alfajores con Crema Pastelera",
    imagen_lowres:
      "https://example.com/alfajores_crema.jpg",
    descripcion: "Alfajores rellenos de suave crema pastelera, un toque de dulzura que te encantará.",
    imagenes: [
      "https://example.com/alfajores_crema.jpg",
    ],
    p_u1: 3.3,
    p_u2: 2.9,
    p_u3: 2.6,
  },
  {
    nombre: "Cannolis con Crema de Ricotta",
    imagen_lowres:
      "https://example.com/cannolis_ricotta.jpg",
    descripcion: "Cannolis crujientes rellenos de una deliciosa crema de ricotta, un postre tradicional italiano.",
    imagenes: [
      "https://example.com/cannolis_ricotta.jpg",
    ],
    p_u1: 3.4,
    p_u2: 3.1,
    p_u3: 2.85,
  },
  {
    nombre: "Ponquesitos",
    imagen_lowres:
      "https://example.com/ponquesitos.jpg",
    descripcion: "Pequeños y esponjosos ponquesitos, ideales para acompañar una taza de té o café.",
    imagenes: [
      "https://example.com/ponquesitos.jpg",
    ],
    p_u1: 3.4,
    p_u2: 2.9,
    p_u3: 2.7,
  },
  {
    nombre: "Cupcakes de Chocolate",
    imagen_lowres:
      "https://example.com/cupcakes_chocolate.jpg",
    descripcion: "Deliciosos cupcakes de chocolate, suaves y con un intenso sabor a cacao.",
    imagenes: [
      "https://example.com/cupcakes_chocolate.jpg",
    ],
    p_u1: 3.6,
    p_u2: 3.2,
    p_u3: 3,
  },
  {
    nombre: "Empanadas de Queso",
    imagen_lowres:
      "https://example.com/empanadas_queso.jpg",
    descripcion: "Empanadas crujientes rellenas de queso derretido, un clásico que nunca falla.",
    imagenes: [
      "https://example.com/empanadas_queso.jpg",
    ],
    p_u1: 3.5,
    p_u2: 3.1,
    p_u3: 2.95,
  },
];

export const MasitasSection = () => {
  return (
    <section className="m-0 self-center mt-8" id="masitas">
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
