import React from "react";
import Link from "next/link";
import { Button, Card } from "@nextui-org/react";
import { ShoppingCart, MapPin, ClipboardList, CreditCard } from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen px-2 mt-4 bg-background-darker">
      <h1 className="text-4xl font-bold text-custom-brown mb-4">¡Bienvenido al Proceso de Pedido!</h1>

      <div className="max-w-3xl space-y-8">
        {/* Step 1: Choose Quantity */}
        <Card className="p-6 bg-background-dark shadow-md rounded-lg">
          <div className="flex items-center mb-4">
            <ShoppingCart size={40} className="text-custom-brown mr-4" />
            <h2 className="text-2xl font-bold text-custom-brown">1. Selecciona la Cantidad de Masitas</h2>
          </div>
          <p className="text-gray-600">
           Elige tus masitas favoritas. 
           <br />
          Navega por nuestra selección y añade tus preferidas al carrito.
          </p>
          <p className="text-gray-600 mt-2">
            Una vez que tengas la cantidad deseada, estarás listo para continuar al siguiente paso.
            <br />
            PD:  Recuerda, puedes seleccionar desde 9 unidades por masita. 
          </p>
          <div className="flex justify-end mt-4">
            <Link href="/shop" passHref>
              <Button color="primary" className="bg-custom-brown-light text-white font-bold">Elegir Masitas</Button>
            </Link>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-md h-auto mt-4 rounded-lg"
            style={{ maxWidth: "100%", height: "auto" }}
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Card>

        {/* Step 2: Review Cart and Choose Delivery Location */}
        <Card className="p-6 bg-background-dark shadow-md rounded-lg">
          <div className="flex items-center mb-4">
            <ClipboardList size={40} className="text-custom-brown mr-4" />
            <h2 className="text-2xl font-bold text-custom-brown">2. Revisa tu Carrito y Selecciona un Lugar de Entrega</h2>
          </div>
          <p className="text-gray-600">
            ¡Todo listo! Revisa tu carrito para asegurarte de que no te falta nada. Luego, selecciona dónde prefieres recibir tu pedido.
          </p>
          <p className="text-gray-600 mt-2">
            Puedes recogerlo en la Terminal de Buses (donde está nuestra pastelería) o elegir un lugar de encuentro más conveniente para ti.
          </p>
          <p className="text-gray-600 mt-2">
            PD: También puedes seleccionar la fecha y hora de entrega. Esta información se compartirá con nosotros para confirmar la disponibilidad.
          </p>
          <div className="flex justify-end mt-4">
            <Link href="/cart" passHref>
              <Button color="primary" className="bg-custom-brown-light text-white font-bold">Revisar Carrito</Button>
            </Link>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-md h-auto mt-4 rounded-lg"
            style={{ maxWidth: "100%", height: "auto" }}
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Card>

        {/* Step 3: Add Notes and Finalize Delivery Details */}
        <Card className="p-6 bg-background-dark shadow-md rounded-lg">
          <div className="flex items-center mb-4">
            <MapPin size={40} className="text-custom-brown mr-4" />
            <h2 className="text-2xl font-bold text-custom-brown">3. Añade Notas y Confirma los Detalles de Entrega</h2>
          </div>
          <p className="text-gray-600">
            ¿Tienes alguna instrucción especial o una dirección específica? Añade una nota para que podamos cumplir con tus expectativas.
          </p>
          <p className="text-gray-600 mt-2">
            PD: No te olvides de revisar todos los detalles antes de confirmar la entrega.
          </p>
          <div className="flex justify-end mt-4">
            <Link href="/delivery" passHref>
              <Button color="primary" className="bg-custom-brown-light text-white font-bold">Añadir Notas y Confirmar Entrega</Button>
            </Link>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-md h-auto mt-4 rounded-lg"
            style={{ maxWidth: "100%", height: "auto" }}
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Card>

        {/* Step 4: Payment and Confirmation */}
        <Card className="p-6 bg-background-dark shadow-md rounded-lg">
          <div className="flex items-center mb-4">
            <CreditCard size={40} className="text-custom-brown mr-4" />
            <h2 className="text-2xl font-bold text-custom-brown">4. Realiza el Pago y Confirma tu Pedido</h2>
          </div>
          <p className="text-gray-600">
            Ya casi terminamos. Es hora de realizar el pago para confirmar tu pedido. Utiliza nuestro código QR para hacer el pago.
          </p>
          <p className="text-gray-600 mt-2">
            Una vez realizado, envía el comprobante junto con los detalles del pedido a nuestro WhatsApp.
          </p>
          <p className="text-gray-600 mt-2">
            PD: Te mantendremos informado sobre el estado de tu pedido y cualquier actualización.
          </p>
          <div className="flex justify-end mt-4">
            <Link href="/payment" passHref>
              <Button color="primary" className="bg-custom-brown-light text-white font-bold">Proceder al Pago y Confirmación</Button>
            </Link>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-md h-auto mt-4 rounded-lg"
            style={{ maxWidth: "100%", height: "auto" }}
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Card>
      </div>
    </section>
  );
}
