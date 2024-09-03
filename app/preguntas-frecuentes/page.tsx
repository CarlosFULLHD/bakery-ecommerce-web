"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ShieldCheck, Info, CreditCard, MapPin, PartyPopper, AlertTriangle,Edit3,Users } from "lucide-react";

export default function FAQPage() {
  const questions = [
    {
      title: "¿Es seguro realizar un pago del 50% por adelantado?",
      content:
        "Entendemos que realizar un pago del 50% por adelantado puede generar dudas. Queremos asegurarte que somos una empresa comprometida con la satisfacción de nuestros clientes. Para tu tranquilidad, trabajamos con métodos de pago seguros y transparentes. Además, te brindamos la opción de revisar todos los detalles de tu pedido antes de confirmar. Nuestra reputación se basa en la confianza que hemos construido con nuestros clientes, y puedes verificar nuestras referencias y reseñas en nuestras redes sociales. Nota: Si tienes alguna duda adicional, no dudes en contactarnos directamente para que podamos resolverla.",
      icon: ShieldCheck,
    },
    {
      title: "¿Cómo puedo estar seguro de que recibiré mi pedido?",
      content:
        "Sabemos que es importante para ti tener la certeza de que recibirás tu pedido. Por eso, una vez que realices tu pago, te enviaremos un comprobante y un resumen detallado de tu pedido. También ofrecemos la opción de coordinar un punto de entrega en lugares públicos seguros o en la Terminal de Buses, donde está ubicada nuestra pastelería. Además, nos mantenemos en contacto contigo en todo momento para asegurarnos de que el proceso sea transparente y confiable. PD: Nos importa mucho que te sientas seguro con nosotros. Si necesitas hablar directamente con nosotros, estamos aquí para ayudarte.",
      icon: Info,
    },
    {
      title: "¿Qué opciones de pago están disponibles?",
      content:
        "Ofrecemos varias opciones de pago para tu comodidad, incluyendo transferencias bancarias y pagos a través de aplicaciones móviles como Billetera Móvil. Todos los métodos son seguros y confiables. Nota: Si tienes alguna preferencia o necesitas asistencia con el proceso de pago, estamos disponibles para guiarte paso a paso.",
      icon: CreditCard,
    },
    {
      title: "¿Qué sucede si quiero cambiar la fecha o lugar de entrega?",
      content:
        "Entendemos que los planes pueden cambiar. Si necesitas modificar la fecha o el lugar de entrega, por favor contáctanos lo antes posible. Haremos todo lo posible para acomodar tus necesidades y encontrar una solución conveniente. PD: Estamos aquí para hacer que tu experiencia sea lo más cómoda posible. Solo dinos qué necesitas, y trabajaremos contigo para lograrlo.",
      icon: MapPin,
    },
    {
title: "¿Puedo hacer cambios en mi pedido después de haberlo confirmado?",
content:
                "Entendemos que a veces pueden surgir cambios inesperados. Si necesitas hacer modificaciones a tu pedido, como cambiar la cantidad de masitas o el tipo, por favor contáctanos lo antes posible. Haremos todo lo posible para adaptarnos a tus necesidades, siempre que el pedido no haya sido procesado para la entrega.",
icon: Edit3,
},
{
title: "¿Ofrecen opciones para eventos o pedidos grandes?",
content:
                "Sí, ofrecemos opciones personalizadas para eventos especiales y pedidos grandes. Si estás organizando una fiesta, boda o cualquier otro evento, contáctanos para discutir tus necesidades. Podemos ofrecerte precios especiales y asegurarnos de que recibas exactamente lo que necesitas para tu celebración.",
icon: Users,
},
    {
      title: "¿Puedo personalizar las masitas para eventos o pedidos grandes?",
      content:
        "¡Claro que sí! Si tienes un evento o un pedido grande, podemos ofrecerte personalizaciones en algunas de nuestras masitas. Queremos asegurarnos de que tus necesidades sean atendidas, así que no dudes en contactarnos por WhatsApp para discutir los detalles. Estamos aquí para ayudarte a crear la mejor experiencia posible.",
      icon: PartyPopper,
    },
    {
      title: "¿Qué sucede si mi pedido llega en mal estado?",
      content:
        "Aunque no es común, entendemos que pueden ocurrir inconvenientes. En caso de que tu pedido llegue en mal estado, te pedimos que te pongas en contacto con nosotros de inmediato. El chef o encargado, quien realiza el envío la mayoría de las veces, se asegurará de solucionar cualquier problema de manera rápida y eficiente. Tu satisfacción es nuestra prioridad.",
      icon: AlertTriangle,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen px-4  bg-background-darker">
      <h1 className="text-4xl font-bold text-custom-brown mt-6">Preguntas Frecuentes</h1>
      <div className="max-w-3xl w-full">
        <Accordion>
          {questions.map((question, index) => {
            const IconComponent = question.icon;
            return (
              <AccordionItem
                variant="splitted"
                key={index}
                aria-label={question.title}
                startContent={<IconComponent />}
                title={question.title}
                className="text-gray-600 px-4 my-2"
                classNames={{
                  base: "bg-background-dark text-custom-brown",
                  title: "font-semibold",
                }}
              >
                <p className="text-gray-600 mt-2">{question.content}</p>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
