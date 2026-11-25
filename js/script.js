const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje");

    if (usuario === "" || password === "") {

        mensaje.style.color = "red";
        mensaje.textContent = "Complete todos los campos";

    } else if (usuario === "admin" && password === "1234") {

        mensaje.style.color = "green";
        mensaje.textContent = "Acceso correcto";

        setTimeout(function() {
            window.location.href = "pages/inicio.html";
        }, 1000);

    } else {

        mensaje.style.color = "red";
        mensaje.textContent = "Usuario o contraseña incorrectos";

    }

});