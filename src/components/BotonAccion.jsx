function BotonAccion({ texto, onClickAccion }) {
  return (
    <button className="boton-accion" onClick={onClickAccion}>
      {texto}
    </button>
  );
}

export default BotonAccion;
