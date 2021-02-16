
function datos(e) {
    e.preventDefault();
    var nombre = document.querySelector("#nombre").value;
    var fechaN = document.querySelector("#fecha").value;
    var edad = 2021 - fechaN;
    var bienvenide = document.querySelector("#bienvenida");

    var mensajeEdad;
    var mensaje;

    if (edad < 18) {
        mensajeEdad = "menor de edad";
        } else if (edad > 18 & edad < 50) {
        mensajeEdad = "adulto"
        } else {
        mensajeEdad = "adulto mayor"
        }

    mensaje = 
    `<p>Hola ${nombre}, tienes ${edad} años, y eres ${mensajeEdad}.</p>`
    bienvenide.innerHTML = mensaje;
}

var miFormulario=document.querySelector("#formulario");
miFormulario.addEventListener("submit", datos)