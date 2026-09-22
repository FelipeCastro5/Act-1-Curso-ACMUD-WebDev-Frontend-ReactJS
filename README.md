# Actividad 1 - Curso ACMUD WebDev Frontend ReactJS

## Tarea Universitaria: Demostración de Patrones de Props en React

Este proyecto es una pequeña aplicación práctica que simula una **Tienda Universitaria de Tecnología**. Fue desarrollada con **React** y **CSS puro**, diseñada de forma directa, sencilla y orientada al aprendizaje de los fundamentos de props.

---

### Patrones de Props Implementados

1. **Props Normales (`ProductoInfo.jsx`):**
   - Recibe datos primitivos (`nombre`, `precio`, `categoria`) mediante desestructuración directa de argumentos.
2. **Callback Hijo a Padre (`BotonAccion.jsx`):**
   - Recibe la función `onClickAccion` como prop y la invoca al dispararse el evento `onClick`, notificando a `App.jsx` el producto elegido.
3. **Composición con Children (`Card.jsx`):**
   - Recibe la prop especial `children` para envolver cualquier elemento o componente interno con un contenedor visual reutilizable.
4. **Operador Spread (`DetalleProducto.jsx`):**
   - En `App.jsx` se pasa el objeto completo del producto seleccionado usando el operador spread: `<DetalleProducto {...productoSeleccionado} />`, desempaquetando todas sus claves automáticamente en el componente receptor.

---

### Estructura de Archivos

```text
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    └── components/
        ├── Card.jsx
        ├── ProductoInfo.jsx
        ├── BotonAccion.jsx
        └── DetalleProducto.jsx
```

---

### Instrucciones para Ejecutar Localmente

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
