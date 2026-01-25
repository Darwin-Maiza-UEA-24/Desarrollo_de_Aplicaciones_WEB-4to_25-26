// 1. Datos iniciales (Arreglo de objetos)
const productos = [
    { nombre: "Kefir 1 litro plastico", precio:  4.50, descripcion: "Ideal para las mañanas." },
    { nombre: "Kefir 1 litro vidrio", precio: 5.00, descripcion: "Ideal para volver a llenar." },
    { nombre: "Dulce de Kefir 1/2 litro ", precio: 4.00, descripcion: "Dulce ideal para los pequeños." }
];

// Referencias a los elementos del DOM
const listaUL = document.getElementById('lista-productos');
const botonAgregar = document.getElementById('btn-agregar');

// 2. Función para renderizar la lista
function renderizarProductos() {
    // Limpiamos la lista actual para evitar duplicados
    listaUL.innerHTML = "";

    // Recorremos el arreglo y creamos la "plantilla"
    productos.forEach((producto) => {
        const item = `
            <li>
                <strong>${producto.nombre}</strong> - $${producto.precio}
                <p>${producto.descripcion}</p>
            </li>
        `;
        // Agregamos la plantilla al HTML del <ul>
        listaUL.innerHTML += item;
    });
}

// 3. Función para agregar un nuevo producto
botonAgregar.addEventListener('click', () => {
    const nuevoProd = {
        nombre: "Nuevo Producto" + (productos.length + 1),
        precio: Math.floor(Math.random() * 100) + 10,
        descripcion: "Gelatina con Kefir."
    };

    // Añadimos al arreglo y volvemos a renderizar
    productos.push(nuevoProd);
    renderizarProductos();
});

// Ejecución inicial para mostrar los productos al cargar
renderizarProductos();