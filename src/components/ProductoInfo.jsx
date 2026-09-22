function ProductoInfo({ nombre, precio, categoria }) {
  return (
    <div className="producto-info">
      <h3 className="producto-nombre">{nombre}</h3>
      <span className="producto-categoria">{categoria}</span>
      <p className="producto-precio">${precio}</p>
    </div>
  );
}

export default ProductoInfo;
