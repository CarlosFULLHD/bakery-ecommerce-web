import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

export const generateOrderPDF = (
  orderNumber: number,
  productos: { nombre: string; cantidad: number; precio: number }[],
  lugarEntrega: string,
  fechaEntrega: string,
  montoTotal: number,
  costoEntrega: number,
  nota: string // Añadimos la nota como parámetro
) => {
  const doc = new jsPDF();

  // Encabezado del PDF
  doc.setFontSize(18);
  doc.text("¡Gracias por tu Pedido!", 10, 10);

  doc.setFontSize(14);
  doc.text(
    "Tu pedido ha sido recibido y estamos trabajando en ello con mucho cuidado y dedicación.",
    10,
    20
  );
  doc.text("Aquí tienes los detalles de tu pedido:", 10, 30);

  // Tabla de productos utilizando autoTable
  autoTable(doc, {
    startY: 40, // Dónde empieza la tabla en la página
    head: [['Producto', 'Cantidad']],
    body: productos.map(producto => [
      producto.nombre,
      producto.cantidad.toString()
    ]),
    theme: 'striped', // Puedes cambiar el tema de la tabla (e.g., 'grid', 'plain')
    styles: {
      cellPadding: 5,
      fontSize: 10,
      halign: 'center', // Alineación horizontal de texto
    },
    headStyles: {
      fillColor: [41, 128, 185], // Color de fondo para los encabezados de la tabla
      textColor: [255, 255, 255], // Color del texto de los encabezados
      fontSize: 12,
    },
    bodyStyles: {
      textColor: [0, 0, 0],
    },
    footStyles: {
      fillColor: [41, 128, 185],
      textColor: [255, 255, 255],
      fontSize: 12,
    },
  });
  let productosOffset = (doc as any).lastAutoTable.finalY + 10;
  // Totales del pedido
  doc.text(`Monto Total del Pedido: Bs.${montoTotal.toFixed(2)}`, 10, productosOffset + 40);
  doc.text(`Costo de entrega: Bs.${costoEntrega.toFixed(2)}`, 10, productosOffset + 50);
  // Información adicional debajo de la tabla
  doc.setFontSize(12);
  doc.text(`Envío: ${lugarEntrega}`, 10, productosOffset + 10);
  doc.text(`Fecha y Hora de Entrega: ${fechaEntrega}`, 10, productosOffset + 20);
  doc.text(`Nota Adicional: ${nota}`, 10, productosOffset + 30);



  // Guardar el PDF
  doc.save(`Pedido_${orderNumber}.pdf`);
};
