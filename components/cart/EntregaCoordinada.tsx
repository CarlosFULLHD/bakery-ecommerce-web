import React, { useState, useEffect } from "react";
import { Select, SelectItem, Button, Card, Link } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/date-picker";
import {
  now,
  getLocalTimeZone,
  parseZonedDateTime,
  ZonedDateTime,
} from "@internationalized/date";
import ProgressBar from "../common/ProgressBar";

const entregaOpciones = [
  { label: "Terminal de Buses", precio: 0 },
  { label: "Plaza del Estudiante", precio: 5 },
  { label: "Obrajes Calle 2", precio: 10 },
  { label: "Obrajes Calle 10", precio: 10 },
  { label: "Plaza Triangular", precio: 10 },
];

const EntregaCoordinada = () => {
  const [selectedLugar, setSelectedLugar] = useState<string | null>(null);
  const [precioEntrega, setPrecioEntrega] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<ZonedDateTime | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("entregaData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      if (
        parsedData.lugar &&
        parsedData.precio !== undefined &&
        parsedData.fecha
      ) {
        setSelectedLugar(parsedData.lugar);
        setPrecioEntrega(parsedData.precio);
        setSelectedDate(parseZonedDateTime(parsedData.fecha));
        console.log("Datos recuperados:", parsedData);
      }
    } else {
      // Si no hay datos guardados, inicializa con los valores por defecto
      setSelectedDate(now(getLocalTimeZone()));
    }
  }, []);

  useEffect(() => {
    if (selectedLugar !== null && selectedDate !== null) {
      const entregaData = {
        lugar: selectedLugar,
        precio: precioEntrega,
        fecha: selectedDate.toString(),
      };
      localStorage.setItem("entregaData", JSON.stringify(entregaData));
      console.log("Datos guardados:", entregaData);
    }
  }, [selectedLugar, precioEntrega, selectedDate]);

  const handleSelectionChange = (keys: string | Set<React.Key>) => {
    let selectedLabel: string;

    if (typeof keys === "string") {
      selectedLabel = keys;
    } else {
      selectedLabel = Array.from(keys).join("");
    }

    const selectedOption = entregaOpciones.find(
      (option) => option.label === selectedLabel
    );
    if (selectedOption) {
      setSelectedLugar(selectedOption.label);
      setPrecioEntrega(selectedOption.precio);
    }
  };

  const handleDateChange = (date: ZonedDateTime) => {
    setSelectedDate(date);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <Card className="mt-8 p-4 bg-background-dark text-custom-brown">
        <div className="bg-background-dark text-custom-brown font-bold">
          <h3 className="text-2xl lg:text-3xl">Entrega Coordinada</h3>
          <p className="mt-4">
            Escoge un punto para coordinar la entrega de tu pedido.
          </p>
          <Select
            aria-label="Selecciona un lugar de entrega"
            placeholder={`Selecciona lugar de entrega - Bs.${precioEntrega}`}
            selectedKeys={selectedLugar ? new Set([selectedLugar]) : undefined}
            onSelectionChange={handleSelectionChange}
            label="Lugar de entrega"
            variant="faded"
          >
            {entregaOpciones.map((option) => (
              <SelectItem
                key={option.label}
                value={option.label}
                textValue={`${option.label} - Bs.${option.precio}`}
              >
                {option.label} - Bs.{option.precio}
              </SelectItem>
            ))}
          </Select>

          <p className="text-custom-brown">
            Elige una fecha y hora para el encuentro.
          </p>
          <DatePicker
            label="Fecha del encuentro"
            variant="faded"
            hideTimeZone
            showMonthAndYearPickers
            value={selectedDate ?? now(getLocalTimeZone())} // Usa la fecha guardada o la fecha actual si no hay
            onChange={handleDateChange}
            className="rounded-xl border-custom-brown dark:text-white"
          />

          <p className="mt-2 text-xs text-custom-brown">
            Nota: La hora de encuentro podría variar según disponibilidad.
          </p>
        </div>

        <Button
          color="primary"
          size="lg"
          as={Link}
          href="/pago"
          className="mt-4 bg-custom-brown-light font-bold text-white"
        >
          Confirmar y Realizar Pago
        </Button>
      </Card>
    </div>
  );
};

export default EntregaCoordinada;
