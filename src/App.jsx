import { useState } from 'react';
import './styles.css';

import Card from './components/Card';
import ProductoInfo from './components/ProductoInfo';
import BotonAccion from './components/BotonAccion';
import DetalleProducto from './components/DetalleProducto';

function App() {
  const productos = [
    {
      id: 1,
      nombre: 'Mouse Inalámbrico',
      precio: 45000,
      categoria: 'Accesorios',
      descripcion: 'Mouse óptico ergonómico con conexión bluetooth de alta precisión.',
      stock: 12
    },
    {
      id: 2,
      nombre: 'Teclado Mecánico',
      precio: 180000,
      categoria: 'Periféricos',
      descripcion: 'Teclado compacto 60% con luces RGB y switches azules.',
      stock: 5
    },
    {
      id: 3,
      nombre: 'Auriculares con Micrófono',
      precio: 95000,
      categoria: 'Audio',
      descripcion: 'Auriculares cómodos con cancelación de ruido pasiva, ideales para clases.',
      stock: 8
    }
  ];

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const handleSeleccionarProducto = (producto) => {
    setProductoSeleccionado(producto);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Tienda Universitaria de Tecnología</h1>
        <p>Actividad 1: Demostración de Patrones de Props en React</p>
      </header>

      <h2>Catálogo de Productos</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <Card key={producto.id}>
            <ProductoInfo
              nombre={producto.nombre}
              precio={producto.precio}
              categoria={producto.categoria}
            />

            <BotonAccion
              texto="Ver detalles"
              onClickAccion={() => handleSeleccionarProducto(producto)}
            />
          </Card>
        ))}
      </div>

      <section className="detalle-contenedor">
        <h2>Detalle del Producto</h2>
        {productoSeleccionado ? (
          <DetalleProducto {...productoSeleccionado} />
        ) : (
          <p className="mensaje-vacio">
            Haz clic en "Ver detalles" de cualquier producto para ver su información completa aquí.
          </p>
        )}
      </section>
    </div>
  );
}

export default App;
