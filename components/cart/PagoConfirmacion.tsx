import React from "react";
import { Button, Card, Accordion, AccordionItem } from "@nextui-org/react";
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
  const { selectedLugar, precioEntrega, cart, selectedDate } = useOrder();

  const handleGeneratePDF = () => {
    generateOrderPDF(
      10001, // Número de pedido
      cart,
      selectedLugar || "",
      selectedDate?.toString() || "Fecha no disponible", // Fecha y hora de entrega
      totalPedido,
      precioEntrega
    );
  };

  const handleWhatsAppSend = () => {
    handleGeneratePDF();
    const phoneNumber = "59171234567";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hola,%20adjunto%20mi%20comprobante%20de%20pago%20y%20el%20detalle%20de%20mi%20pedido.`;
    window.open(url, "_blank");
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <Card className="mt-8 p-4 bg-background-dark text-custom-brown">
        <div className="bg-background-dark text-custom-brown font-bold">
          <h3 className="text-2xl lg:text-3xl">
            ¡Último paso para confirmar tu pedido!
          </h3>
          <p className="mt-4">Para completar tu pedido, sigue estos pasos:</p>

          <div className="mt-6">
            <div className="mt-6">
              <h4 className="text-lg lg:text-xl">
                1. Revisa los detalles de tu pedido
              </h4>
              <p className="text-sm mt-2">
                Puedes revisar los detalles de tu pedido antes de confirmarlo.
              </p>
              <Accordion variant="splitted" className="my-4">
                <AccordionItem
                  key="1"
                  aria-label="Detalles del pedido"
                  title="Ver Detalles del pedido"
                  className="bg-background-darker"
                >
                  <div className="mt-4">
                    {cart.map((item, index) => (
                      <div key={index} className="mb-2">
                        <p>
                          <strong>{item.nombre}</strong>: {item.cantidad} x Bs.
                          {item.precio} = Bs.{item.cantidad * item.precio}
                        </p>
                      </div>
                    ))}
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
            <h4 className="text-lg lg:text-xl">2. Realiza el pago</h4>
            <p className="text-sm mt-2">
              Por favor, realiza un pago de <strong>Bs.{totalPedido}</strong> o
              al menos el 50% del pedido utilizando el código QR que aparece a
              continuación.
            </p>
            <div className="mt-4 flex flex-col items-center">
              <img
                src={qrUrl}
                alt="QR de Pago"
                className="w-64 h-auto rounded"
              />
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-lg lg:text-xl">
              3. Descarga los detalles del pedido
            </h4>
            <p className="text-sm mt-2">
              Descarga el PDF con los detalles de tu pedido para enviarlo junto
              con tu comprobante de pago.
            </p>
            <Button
              color="primary"
              className="mt-2 bg-custom-brown-light"
              onClick={handleGeneratePDF}
            >
              Descargar Detalles del Pedido
            </Button>
          </div>

          <div className="mt-6">
            <h4 className="text-lg lg:text-xl">
              4. Envía el PDF y el comprobante de pago
            </h4>
            <p className="text-sm mt-2">
              Envía el PDF descargado y una imagen del comprobante de pago al
              siguiente número de WhatsApp para confirmar tu pedido:
            </p>
            <p className="text-lg font-bold mt-2">+591 71234567</p>
            <p className="text-sm mt-2">
              Haz clic en el siguiente botón para abrir WhatsApp y enviar los
              documentos:
            </p>
            <Button
              color="secondary"
              className="mt-4 bg-custom-brown-light"
              onClick={handleWhatsAppSend}
            >
              Enviar Comprobante por WhatsApp
            </Button>
          </div>

          <p className="mt-8 text-sm">
            Si tienes alguna consulta adicional o necesitas coordinar algún
            detalle, no dudes en contactarnos por WhatsApp.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PagoConfirmacion;
