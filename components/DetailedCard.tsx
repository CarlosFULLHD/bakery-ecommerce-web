import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

// Define una interfaz para las props de tu componente
interface DetailedCardProps {
  title: string;
  icon: string;
  description: string;
  lists: string;
}

// Añade las propiedades title, icon, description, y lists como argumentos de la función
export default function DetailedCard({
  title,
  icon,
  description,
  lists,
}: DetailedCardProps) {
  const listItems = lists
    .split("-")
    .map((item) => item.trim())
    .filter((item) => item);

  return (
    <Accordion variant="splitted" className=" text-white rounded-xl mb-2">
      <AccordionItem
        key={title}
        aria-label={title}
        title={title}
        startContent={
          <img
            src={icon}
            alt={title}
            className="bg-white rounded-md p-1 w-12 h-12 mr-2"
          />
        }
      >
        <div className="flex items-center mb-2">
          <h1 className="font-bold text-2xl">{title}</h1>
        </div>
        <p className="text-xl font-normal mb-2">{description}</p>
        <ul className="text-lg font-normal">
          {listItems.map((item, index) => (
            <li key={index} className="list-disc ml-4">
              {item}
            </li>
          ))}
        </ul>
      </AccordionItem>
    </Accordion>
  );
}
