// FooterComponent.tsx
import React from "react";
import { Link } from "@nextui-org/link";

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-custom-background text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-lg font-semibold mb-4">Menú</h3>
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
            <img
              src="/path-to-your-logo.png"
              alt="Logo Pastelería Ágape"
              className="w-24 h-24 mb-4"
            />
            <p className="text-center">
              Disfruta de nuestras delicias artesanales y naturales, hechas con amor y dedicación.
            </p>
          </div>

          {/* <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/CarlosFULLHD" target="_blank">
                <img
                  src="/github-142-svgrepo-com.svg"
                  alt="GitHub"
                  className="w-8 h-8"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/carlos-nina-reynaga/" target="_blank">
                <img
                  src="/linkedin-color-svgrepo-com.svg"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </Link>
              
            </div>
          </div> */}
        </div>

        <hr className="my-8" />

        <div className="text-center">
          <span className="block text-sm text-gray-300">
            © 2024 Pastelería Ágape. - Desarrollado por <a href="https://www.linkedin.com/in/carlos-nina-reynaga/" className="hover:underline">Carlos Nina</a>.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
