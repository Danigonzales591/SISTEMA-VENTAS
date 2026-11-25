const formulario = document.getElementById("formProductos");
const lista = document.getElementById("listaProductos");
const mensaje = document.getElementById("mensajeProducto");

let productos = JSON.parse(localStorage.getItem("productos")) || [];

function mostrarProductos() {
    lista.innerHTML = "";

    productos.forEach(function(producto) {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>Bs ${producto.precio}</td>
            <td>${producto.cantidad}</td>
        `;

        lista.appendChild(fila);
    });
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const precio = Number(document.getElementById("precio").value);
    const cantidad = Number(document.getElementById("cantidad").value);

    if (nombre === "" || precio <= 0 || cantidad < 1) {
        mensaje.textContent = "Ingrese datos válidos.";
        return;
    }

    const producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };

    productos.push(producto);

    localStorage.setItem("productos", JSON.stringify(productos));

    mostrarProductos();
    formulario.reset();

    mensaje.textContent = "Producto guardado correctamente.";
});

mostrarProductos();