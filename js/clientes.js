const formulario = document.getElementById("formClientes");
const lista = document.getElementById("listaClientes");
const mensaje = document.getElementById("mensajeCliente");

let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

function mostrarClientes() {
    lista.innerHTML = "";

    clientes.forEach(function(cliente) {
        const fila = document.createElement("tr");

        const nombre = document.createElement("td");
        nombre.textContent = cliente.nombre;

        const telefono = document.createElement("td");
        telefono.textContent = cliente.telefono;

        const correo = document.createElement("td");
        correo.textContent = cliente.correo;

        fila.appendChild(nombre);
        fila.appendChild(telefono);
        fila.appendChild(correo);

        lista.appendChild(fila);
    });
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombreCliente").value.trim();
    const telefono = document.getElementById("telefonoCliente").value.trim();
    const correo = document.getElementById("correoCliente").value.trim();

    if (nombre === "" || telefono === "" || correo === "") {
        mensaje.textContent = "Complete todos los campos.";
        return;
    }

    const cliente = {
        nombre: nombre,
        telefono: telefono,
        correo: correo
    };

    clientes.push(cliente);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    mostrarClientes();
    formulario.reset();

    mensaje.textContent = "Cliente guardado correctamente.";
});

mostrarClientes();