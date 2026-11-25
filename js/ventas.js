const formulario = document.getElementById("formVentas");
const lista = document.getElementById("listaVentas");
const mensaje = document.getElementById("mensajeVenta");

let ventas = JSON.parse(localStorage.getItem("ventas")) || [];

function mostrarVentas() {
    lista.innerHTML = "";

    ventas.forEach(function(venta) {
        const fila = document.createElement("tr");

        const cliente = document.createElement("td");
        cliente.textContent = venta.cliente;

        const producto = document.createElement("td");
        producto.textContent = venta.producto;

        const cantidad = document.createElement("td");
        cantidad.textContent = venta.cantidad;

        const total = document.createElement("td");
        total.textContent = "Bs " + venta.total.toFixed(2);

        fila.appendChild(cliente);
        fila.appendChild(producto);
        fila.appendChild(cantidad);
        fila.appendChild(total);

        lista.appendChild(fila);
    });
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const cliente = document.getElementById("clienteVenta").value.trim();
    const producto = document.getElementById("productoVenta").value.trim();
    const cantidad = Number(document.getElementById("cantidadVenta").value);
    const precio = Number(document.getElementById("precioVenta").value);

    if (cliente === "" || producto === "" || cantidad < 1 || precio <= 0) {
        mensaje.textContent = "Ingrese datos válidos.";
        return;
    }

    const venta = {
        cliente: cliente,
        producto: producto,
        cantidad: cantidad,
        total: cantidad * precio
    };

    ventas.push(venta);

    localStorage.setItem("ventas", JSON.stringify(ventas));

    mostrarVentas();
    formulario.reset();

    mensaje.textContent = "Venta registrada correctamente.";
});

mostrarVentas();