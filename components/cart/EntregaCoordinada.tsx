import React, { useEffect, useState } from "react";
import { Select, SelectItem, Button, Card, Link, Textarea } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/date-picker";
import { useOrder } from "./OrderContext";
import GoogleMapLocation from "./GoogleMapLocation";
import { now, getLocalTimeZone, ZonedDateTime } from "@internationalized/date";

const entregaOpciones = [
  { label: "Terminal de Buses", precio: 0, coords: { lat: -16.488424, lng: -68.140702 } },
  { label: "Plaza del Estudiante", precio: 5, coords: { lat: -16.504106, lng: -68.131163 } },
  { label: "Teleferico Amarillo Obrajes", precio: 10, coords: { lat: -16.519290, lng: -68.116284 } },
  { label: "Obrajes Calle 12", precio: 10, coords: { lat: -16.527727, lng: -68.105538 } },
  { label: "Plaza Triangular", precio: 10, coords: { lat: -16.504301, lng: -68.120898 } },
  { label: "Personalizado", precio: 0, coords: null },
];

const EntregaCoordinada: React.FC = () => {
  const {
    selectedLugar,
    setSelectedLugar,
    precioEntrega,
    setPrecioEntrega,
    selectedDate,
    setSelectedDate,
    nota,
    setNota,
  } = useOrder();
  
  const [selectedCoords, setSelectedCoords] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (!selectedDate) {
      setSelectedDate(now(getLocalTimeZone()));
    }
  }, []);

  const handleSelectionChange = (keys: string | Set<React.Key>) => {
    const selectedLabel =
      typeof keys === "string" ? keys : Array.from(keys).join("");
    const selectedOption = entregaOpciones.find(
      (option) => option.label === selectedLabel
    );
    if (selectedOption) {
      setSelectedLugar(selectedOption.label);
      setPrecioEntrega(selectedOption.precio);
      setSelectedCoords(selectedOption.coords); // Update the selected coordinates
    }
  };

  const handleDateChange = (date: ZonedDateTime) => {
    setSelectedDate(date);
  };

  const handleNotaChange = (newValue: string) => {
    setNota(newValue); // Actualiza la nota en el contexto
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
            placeholder="Lugar de entrega  - Bs. precio"
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

          {selectedCoords && (
            <GoogleMapLocation lat={selectedCoords.lat} lng={selectedCoords.lng} />
          )}

          <p className="text-custom-brown">
            Elige una fecha y hora para el encuentro.
          </p>
          <DatePicker
            label="Fecha del encuentro"
            variant="faded"
            hideTimeZone
            showMonthAndYearPickers
            value={selectedDate ?? now(getLocalTimeZone())}
            onChange={handleDateChange}
            className="rounded-xl border-custom-brown dark:text-white"
          />
          <p className="mt-4 text-custom-brown">Nota Adicional:</p>
          <Textarea
            label="Detalles adicionales sobre la ubicación, datos adicionales o mensaje."
            placeholder="Escribe cualquier detalle adicional..."
            value={nota}
            onValueChange={handleNotaChange}
            className="mt-2"
          />
          <p className="mt-2 text-xs text-custom-brown">
            Nota: La hora de encuentro podría variar según disponibilidad.
          </p>
        </div>

        <Link href="/pago">
          <Button
            color="primary"
            size="lg"
            className="bg-custom-brown-light font-bold text-white"
          >
            Confirmar y Realizar Pago
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default EntregaCoordinada;
