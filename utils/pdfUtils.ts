import jsPDF from "jspdf";

export const generateOrderPDF = (
  orderNumber: number,
  productos: { nombre: string; cantidad: number; precio: number }[],
  lugarEntrega: string,
  fechaEntrega: string,
  montoTotal: number,
  costoEntrega: number
) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("¡Gracias por tu Pedido!", 10, 10);
  
  doc.setFontSize(14);
  doc.text("Tu pedido ha sido recibido y estamos trabajando en ello con mucho cuidado y dedicación.", 10, 20);
  doc.text("Aquí tienes los detalles de tu pedido:", 10, 30);

  doc.setFontSize(12);
  doc.text(`Número de Pedido: ${orderNumber}`, 10, 40);
  
  doc.text("Productos:", 10, 50);
  productos.forEach((producto, index) => {
    doc.text(
      `${producto.nombre}: ${producto.cantidad} unidades - Bs.${producto.precio}`,
      10,
      60 + index * 10
    );
  });

  const productosOffset = 60 + productos.length * 10;
  
  doc.text(`Envío: ${lugarEntrega}`, 10, productosOffset + 10);
  doc.text(`Fecha y Hora de Entrega: ${fechaEntrega}`, 10, productosOffset + 20);
  
  doc.text(`Monto Total del Pedido: Bs.${montoTotal}`, 10, productosOffset + 30);
  doc.text(`Costo de entrega: Bs.${costoEntrega}`, 10, productosOffset + 40);
  
  doc.save(`Pedido_${orderNumber}.pdf`); // Este línea descarga el PDF
};
