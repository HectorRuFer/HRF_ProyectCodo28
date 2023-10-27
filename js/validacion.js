function validarFormulario() {
  var nombre = document.getElementById("nombre");
  var email = document.getElementById("email");
  var comentarios = document.getElementById("comentarios");

  var nombreError = document.getElementById("nombre-error");
  var emailError = document.getElementById("email-error");
  var comentariosError = document.getElementById("comentarios-error");
  var enviadoOk = document.getElementById("enviado-ok");

  nombreError.textContent = "";
  emailError.textContent = "";
  comentariosError.textContent = "";

  var esValido = true;  // utilizo una bandera para retornar el resultado de validar los datos proporcionados

  // Validar los datos proporcionados.
  // Si algún dato es inválido, mostrar un mensaje de error y retornar false

  // espero un minimo de tres caracteres para el nombre
  if (nombre.value.length < 3) {
    nombreError.textContent = "Por favor, ingrese su nombre.";
    esValido = false;
  }

  // no admito un string vacio ni tampoco determinados caracteres.
  if (email.value === "" || !/^\S+@\S+\.\S+$/.test(email.value)) {
    emailError.textContent = "Por favor, ingrese una dirección de correo electrónico válida.";
    esValido = false;
  }

  // espero un minimo de tres caracteres para los comentarios
  if (comentarios.value.length < 3) {
    comentariosError.textContent = "Por favor, ingrese sus comentarios.";
    esValido = false;
  }

  // Si todo fue bien, mostrar un mensaje de éxito
  if (esValido) {
    enviadoOk.textContent = "¡Gracias por contactarnos!. Le responderemos a la brevedad";
  }

  return esValido;  // formulario valido
}
