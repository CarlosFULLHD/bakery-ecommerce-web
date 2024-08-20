import React, { useState, useEffect } from "react";
import { Button, Card } from "@nextui-org/react";
import { useOrder } from "./OrderContext";
import { generateOrderPDF } from "@/utils/pdfUtils";

interface PagoConfirmacionProps {
  qrUrl: string;
  totalPedido: number;
}

const PagoConfirmacion: React.FC<PagoConfirmacionProps> = ({
  qrUrl,
  totalPedido,
}) => {
  const { selectedLugar, precioEntrega, cart } = useOrder();
  const [comprobante, setComprobante] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setComprobante(file);
    }
  };

  const handleGeneratePDF = () => {
    generateOrderPDF(
      10001, // Número de pedido
      cart,
      selectedLugar || "",
      "25/07/2024 15:00 pm", // Fecha y hora de entrega
      totalPedido,
      precioEntrega
    );
  };

  const handleWhatsAppSend = () => {
    handleGeneratePDF();
    if (comprobante) {
      const phoneNumber = "59171234567";
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hola,%20adjunto%20mi%20comprobante%20de%20pago%20y%20el%20detalle%20de%20mi%20pedido.`;
      window.open(url, "_blank");
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <Card className="mt-8 p-4 bg-background-dark text-custom-brown">
        <div className="bg-background-dark text-custom-brown font-bold">
          <h3 className="text-2xl lg:text-3xl">
            Para confirmar tu pedido, por favor realiza un pago de Bs.
            {totalPedido} ó de al menos el (50% del pedido).
          </h3>

          <div className="mt-4 flex flex-col items-center">
            <img src={qrUrl} alt="QR de Pago" className="w-64 h-auto rounded" />
          </div>

          <div className="mt-8 text-lg">
            <p>
              Lugar de Entrega: <strong>{selectedLugar}</strong>
            </p>
            <p>
              Costo de Envío: <strong>Bs.{precioEntrega}</strong>
            </p>
            <p className="mt-2 text-sm">
              Nota: El costo de envío será cobrado al momento de la entrega.
            </p>
          </div>
          <p className="mt-4">
            Una vez realizado el pago, sube el comprobante de la transferencia.
          </p>

          <div className="mt-8">
            <h4 className="text-lg lg:text-xl">Sube tu Comprobante de Pago</h4>
            <p className="text-sm">
              Descarga y sube el PDF o la imagen del comprobante de la
              transferencia
            </p>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="mt-2"
            />
            <Button
              color="secondary"
              className="mt-4 bg-custom-brown-light"
              onClick={handleWhatsAppSend}
              disabled={!comprobante}
            >
              Enviar Comprobante por WhatsApp
            </Button>
            <Button
              color="primary"
              className="mt-4 bg-custom-brown-light"
              onClick={handleGeneratePDF}
            >
              Descargar Detalles del Pedido
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PagoConfirmacion;
