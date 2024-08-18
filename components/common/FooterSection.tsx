import React from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-custom-background text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:pl-4">
            <hr className="my-8 border-white bg-white md:hidden" />
            <ul className="space-y-2">
              <li>
                <Link href="/como-realizar-un-pedido" className="hover:underline">
                  Cómo Realizar un Pedido
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="hover:underline">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="hover:underline">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/reseñas" className="hover:underline">
                  Reseñas
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:underline">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">

            <Button 
        className="mt-8 bg-primary  py-3 px-8 rounded-lg text-lg font-bold bg-custom-brown-light text-white hover:bg-custom-brown transition duration-300 shadow-md shadow-off-white"
         onClick={() => scrollToSection("masitas")}>
          Realiza tu pedido ahora
        </Button>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <img
              src="https://github.com/CarlosFULLHD/bakery-ecommerce-web/blob/main/public/PasteleriaAgape.jpeg?raw=true"
              alt="Logo Pastelería Ágape"
              className="w-24 h-36 mb-4 rounded-lg mx-auto"
            />
            {/* <p className="text-center ">
              Disfruta de nuestras delicias artesanales y naturales, hechas con amor y dedicación.
            </p> */}
          </div>
        </div>

        <hr className="my-8 border-white bg-white md:mt-0" />

        <div className="text-center md:text-left md:pl-4">
          <span className="block text-sm text-gray-300">
            © 2024 Pastelería Ágape - Desarrollado por <a href="https://www.linkedin.com/in/carlos-nina-reynaga/" className="border-l-pink-50">Carlos Nina</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
