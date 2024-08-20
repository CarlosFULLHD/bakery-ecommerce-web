import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Button } from "@nextui-org/react";
import { useCart } from "./CartContext";

const CartPDF: React.FC = () => {
  const { cart, cartTotalPrice } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);

  const downloadPDF = () => {
    const input = cartRef.current;

    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgProperties = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
          (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("carrito.pdf");
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div ref={cartRef}>
        {cart.map((item) => (
          <div key={item.id} className="mb-4">
            <h2 className="text-xl font-semibold">{item.nombre}</h2>
            <p className="text-sm">Cantidad: {item.cantidad}</p>
            <p className="text-sm">
              Bs. {(item.cantidad * item.precio).toFixed(2)}
            </p>
          </div>
        ))}

        <div className="mt-8 text-right">
          <h2 className="text-2xl font-bold">
            Total: Bs. {cartTotalPrice.toFixed(2)}
          </h2>
        </div>
      </div>

      <Button
        color="secondary"
        variant="light"
        size="lg"
        onClick={downloadPDF}
        className="mt-4"
      >
        Descargar Carrito en PDF
      </Button>
    </div>
  );
};

export default CartPDF;
