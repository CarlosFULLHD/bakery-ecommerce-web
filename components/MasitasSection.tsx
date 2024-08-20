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
    nombre: "Galletones con Chocochips",
    imagen_lowres:
      "https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/GalleroneSConChocochips.jpeg?raw=true",
    descripcion:
      "Deliciosos galletones de avena, perfectos para cualquier ocasión. Hechos con ingredientes naturales y un toque de amor, estos galletones son ideales para acompañar tu café de la mañana o para compartir en tus reuniones.",
    imagenes: [
      "https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/GalleroneSConChocochips.jpeg?raw=true",
      "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
      "https://assets.elgourmet.com/wp-content/uploads/2023/03/788f3646f9a8aadb89d5b17acf6bb1a1_3_3_photo.png",
    ],
    p_u1: 4.0,
    p_u2: 3.3,
    p_u3: 2.9,
  },
  {
    nombre: "Muffins De Vainilla Con Chocochips",
    imagen_lowres:
      "https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/MuffinsDeVainillaConChocochips.jpeg?raw=true",
    descripcion: "Deliciosa masita hecha con frutillas naturales.",
    imagenes: [
      "https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/MuffinsDeVainillaConChocochips.jpeg?raw=true",
      "https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/MuffinsDeVainillaConChocochips.jpeg?raw=true",
      "https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/MuffinsDeVainillaConChocochips.jpeg?raw=true",
      "https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/MuffinsDeVainillaConChocochips.jpeg?raw=true",
    ],
    p_u1: 3.85,
    p_u2: 3.5,
    p_u3: 3.1,
  },
  {
    nombre: "Conos Con Crema Pastelera",

    imagen_lowres:
      "https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/ConosConCremaPastelera.jpeg?raw=true",
    descripcion: "Deliciosa masita hecha con frutillas naturales.",
    imagenes: [
      "https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/ConosConCremaPastelera.jpeg?raw=true",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN05iwPgjpQyWegZ5Va-joJIW3t58xm97B1x8t_rMjETwTpzI7Odou8-BaDeaMVd_EuzE&usqp=CAU",
    ],
    p_u1: 3.0,
    p_u2: 2.75,
    p_u3: 2.5,
  },
  {
    nombre: "Crinkle Cookies",
    imagen_lowres:
      "https://www.simplyrecipes.com/thmb/nhVM8Y74SV2k8pwWu1Iy8a58hDo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chocolate-Crinkle-Cookies-Lead-6-c6459f23b77e4af9b1de2af64110c0f5.jpg",
    descripcion: "Deliciosa masita hecha con frutillas naturales.",
    imagenes: [
      "https://i.ytimg.com/vi/TKFPVHevv2A/maxresdefault.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE4VdfQT4HoHzFy8LN_hByyNcia1TXE8ORiA&s",
    ],
    p_u1: 3.0,
    p_u2: 2.75,
    p_u3: 2.5,
  },
  {
    nombre: "Crinkle Kiss Cookies",
    imagen_lowres:
      "https://www.savorynothings.com/wp-content/uploads/2019/12/chocolate-crinkle-blossoms-image-hero.jpg",
    descripcion: "Deliciosa masita hecha con frutillas naturales.",
    imagenes: [
      "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
      "https://assets.elgourmet.com/wp-content/uploads/2023/03/788f3646f9a8aadb89d5b17acf6bb1a1_3_3_photo.png",
    ],
    p_u1: 3.0,
    p_u2: 2.75,
    p_u3: 2.5,
  },
  {
    nombre: "Cupcakes de Chocolate",

    imagen_lowres:
      "https://i.blogs.es/04ca5c/como-hacer-cupcakes-de-chocolate-3-/1366_2000.jpg",
    descripcion: "Deliciosa masita hecha con frutillas naturales.",
    imagenes: [
      "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
      "https://assets.elgourmet.com/wp-content/uploads/2023/03/788f3646f9a8aadb89d5b17acf6bb1a1_3_3_photo.png",
    ],
    p_u1: 3.0,
    p_u2: 2.75,
    p_u3: 2.5,
  },
  {
    nombre: "Brownies de Chocolate",

    imagen_lowres:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVOpCkWQ9YYaZYzm7PoU5z060FbPhBzdxDQ&s",
    descripcion: "Deliciosa masita hecha con frutillas naturales.",
    imagenes: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVOpCkWQ9YYaZYzm7PoU5z060FbPhBzdxDQ&s",
      "https://assets.elgourmet.com/wp-content/uploads/2023/03/788f3646f9a8aadb89d5b17acf6bb1a1_3_3_photo.png",
    ],
    p_u1: 3.0,
    p_u2: 2.75,
    p_u3: 2.5,
  },
  {
    nombre: "Alfajores con dulce de leche",

    imagen_lowres:
      "https://media.mykaramelli.com/galeria/recetas/alfajores-de-maicena_405_1.jpg",
    descripcion: "Deliciosa masita hecha con frutillas naturales.",
    imagenes: [
      "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
      "https://assets.elgourmet.com/wp-content/uploads/2023/03/788f3646f9a8aadb89d5b17acf6bb1a1_3_3_photo.png",
    ],
    p_u1: 3.0,
    p_u2: 2.75,
    p_u3: 2.5,
  },
  {
    nombre: "Masita de Frutilla",

    imagen_lowres:
      "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
    descripcion: "Deliciosa masita hecha con frutillas naturales.",
    imagenes: [
      "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
      "https://assets.elgourmet.com/wp-content/uploads/2023/03/788f3646f9a8aadb89d5b17acf6bb1a1_3_3_photo.png",
    ],
    p_u1: 3.0,
    p_u2: 2.75,
    p_u3: 2.5,
  },
  {
    nombre: "Masita de Frutilla",

    imagen_lowres:
      "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
    descripcion: "Deliciosa masita hecha con frutillas naturales.",
    imagenes: [
      "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
      "https://assets.elgourmet.com/wp-content/uploads/2023/03/788f3646f9a8aadb89d5b17acf6bb1a1_3_3_photo.png",
    ],
    p_u1: 3.0,
    p_u2: 2.75,
    p_u3: 2.5,
  },
  {
    nombre: "Masita de Frutilla",

    imagen_lowres:
      "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
    descripcion: "Deliciosa masita hecha con frutillas naturales.",
    imagenes: [
      "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
      "https://assets.elgourmet.com/wp-content/uploads/2023/03/788f3646f9a8aadb89d5b17acf6bb1a1_3_3_photo.png",
    ],
    p_u1: 3.0,
    p_u2: 2.75,
    p_u3: 2.5,
  },
  {
    nombre: "Masita de Frutilla",

    imagen_lowres:
      "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
    descripcion: "Deliciosa masita hecha con frutillas naturales.",
    imagenes: [
      "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
      "https://assets.elgourmet.com/wp-content/uploads/2023/03/788f3646f9a8aadb89d5b17acf6bb1a1_3_3_photo.png",
    ],
    p_u1: 3.0,
    p_u2: 2.75,
    p_u3: 2.5,
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
