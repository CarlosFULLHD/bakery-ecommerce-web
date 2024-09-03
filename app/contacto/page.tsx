"use client";

import React from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen px-4 bg-background-darker">
      <h1 className="text-4xl font-bold text-custom-brown mt-6">Contacto</h1>

      <div className="max-w-3xl w-full space-y-6 text-gray-600">
        {/* Información de contacto */}
        <div className="bg-background-dark p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-custom-brown mb-4">¿Cómo podemos ayudarte?</h2>
          <p className="mb-2 flex items-center">
            <Phone className="w-5 h-5 mr-2 text-custom-brown" />
            <span>Teléfono: 79529059</span>
          </p>
          <p className="mb-2 flex items-center">
            <MessageCircle className="w-5 h-5 mr-2 text-custom-brown" />
            <span>WhatsApp: <a href="https://wa.me/59179529059" target="_blank" rel="noopener noreferrer" className="underline text-custom-brown">+591 79529059</a></span>
          </p>
          {/* <p className="mb-2 flex items-center">
            <Mail className="w-5 h-5 mr-2 text-custom-brown" />
            <span>Email: contacto@tupasteleria.com</span>
          </p> */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/tuempresa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-brown">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/tuempresa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-brown">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Mapa de Google */}
        <div className="bg-background-dark p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-custom-brown mb-4">Nuestra Ubicación</h2>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.870762729078!2d-68.14297780394554!3d-16.48862058606135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f200a454f708b%3A0x4bce1c2a20759b6!2sTerminal%20de%20Buses%20La%20Paz!5e0!3m2!1sen!2sbo!4v1725324350745!5m2!1sen!2sbo"
              width="100%"
              height="100%"
              allowFullScreen={false}
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
