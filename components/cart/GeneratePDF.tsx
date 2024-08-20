import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Button } from "@nextui-org/react";
import { useCart } from "./CartContext";

const GeneratePDF: React.FC = () => {
  const { cart, cartTotalPrice } = useCart();
  const pdfRef = useRef<HTMLDivElement>(null);

  const generatePDF = () => {
    const input = pdfRef.current;

    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("carrito.pdf");
      });
    }
  };

  return (
    <div>
      <div ref={pdfRef} className="p-4">
        <h1 className="text-xl font-bold mb-4 text-center">
          ¡Gracias por tu Pedido!
        </h1>
        <p className="text-lg text-center">
          Tu pedido ha sido recibido y estamos trabajando en ello con mucho
          cuidado y dedicación.
        </p>
        <p className="text-lg mt-2 text-center">
          Aquí tienes los detalles de tu pedido:
        </p>

        <div className="mt-4">
          {cart.map((item) => (
            <div key={item.id} className="mb-4 border-b pb-2">
              <h2 className="text-lg font-semibold">{item.nombre}</h2>
              <p className="text-sm">Cantidad: {item.cantidad}</p>
              <p className="text-sm">
                Bs. {(item.cantidad * item.precio).toFixed(2)}
              </p>
              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-32 h-auto mt-2 rounded-md"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 text-right">
          <h2 className="text-lg font-bold">
            Total: Bs. {cartTotalPrice.toFixed(2)}
          </h2>
        </div>
      </div>

      <Button
        onClick={generatePDF}
        color="primary"
        className="mt-4 bg-custom-brown-light"
      >
        Descargar Carrito en PDF
      </Button>
    </div>
  );
};

export default GeneratePDF;
