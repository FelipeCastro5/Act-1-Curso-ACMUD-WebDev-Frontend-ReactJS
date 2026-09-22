function DetalleProducto({ nombre, precio, categoria, descripcion, stock }) {
  return (
    <div className="detalle-producto">
      <h3>Detalle del Producto Seleccionado</h3>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Precio:</strong> ${precio}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Unidades disponibles:</strong> {stock}</p>
    </div>
  );
}

export default DetalleProducto;
