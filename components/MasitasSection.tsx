// MasitasSection.tsx
import React from 'react';
import MasitaCard from './MasitaCard';

export interface Masita {
  nombre: string;
  precio: number;
  imagen_lowres: string;
  descripcion?: string;
  imagenes?: string[];
  p_u1: number;
  p_u2: number;
  p_u3: number;
  p_u4: number;
  p_u5: number;
}

const masitas: Masita[] = [
  {
    nombre: "Masita de Frutilla",
    precio: 45.00,
    imagen_lowres: "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
    descripcion: "Deliciosa masita hecha con frutillas naturales.",
    imagenes: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN05iwPgjpQyWegZ5Va-joJIW3t58xm97B1x8t_rMjETwTpzI7Odou8-BaDeaMVd_EuzE&usqp=CAU",
    "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
    "https://assets.elgourmet.com/wp-content/uploads/2023/03/788f3646f9a8aadb89d5b17acf6bb1a1_3_3_photo.png"
    ],
    p_u1: 3.00,
    p_u2: 2.75,
    p_u3: 2.50,
    p_u4: 2.25,
    p_u5: 2.00
  },
  {
    nombre: "Masita de Frutilla",
    precio: 36.00,
    imagen_lowres: "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
    descripcion: "Deliciosa masita hecha con frutillas naturales.",
    imagenes: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN05iwPgjpQyWegZ5Va-joJIW3t58xm97B1x8t_rMjETwTpzI7Odou8-BaDeaMVd_EuzE&usqp=CAU",
    "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
    "https://assets.elgourmet.com/wp-content/uploads/2023/03/788f3646f9a8aadb89d5b17acf6bb1a1_3_3_photo.png"
    ],
    p_u1: 3.00,
    p_u2: 2.75,
    p_u3: 2.50,
    p_u4: 2.25,
    p_u5: 2.00
  },
  {
    nombre: "Masita de Frutilla",
    precio: 45.00,
    imagen_lowres: "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
    descripcion: "Deliciosa masita hecha con frutillas naturales.",
    imagenes: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN05iwPgjpQyWegZ5Va-joJIW3t58xm97B1x8t_rMjETwTpzI7Odou8-BaDeaMVd_EuzE&usqp=CAU",
    "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
    "https://assets.elgourmet.com/wp-content/uploads/2023/03/788f3646f9a8aadb89d5b17acf6bb1a1_3_3_photo.png"
    ],
    p_u1: 3.00,
    p_u2: 2.75,
    p_u3: 2.50,
    p_u4: 2.25,
    p_u5: 2.00
  },
  {
    nombre: "Masita de Frutilla",
    precio: 30.00,
    imagen_lowres: "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
    descripcion: "Deliciosa masita hecha con frutillas naturales.",
    imagenes: [
    "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
    "https://assets.elgourmet.com/wp-content/uploads/2023/03/788f3646f9a8aadb89d5b17acf6bb1a1_3_3_photo.png"
    ],
    p_u1: 3.00,
    p_u2: 2.75,
    p_u3: 2.50,
    p_u4: 2.25,
    p_u5: 2.00
  },

];

export const MasitasSection = () => {
  return (
    <section className="m-0 self-center mt-8" id="masitas">
      <div className="mx-auto p-1 sm:p-2 md:p-4 lg:p-8 rounded-lg">
        <div className="mb-8">
          <div className="mx-2 grid grid-cols-2 gap-2 items-center lg:grid-cols-2 max-w-[1200px] md:mx-auto">
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
