document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formContacto");
  
    formulario.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita el envío por defecto
      let valido = true;
  
      // Limpio mensajes previos
      document.querySelectorAll(".error").forEach(el => el.textContent = "");
  
      // Validación nombre
      const nombre = document.getElementById("nombre");
      if (nombre.value.trim() === "") {
        document.getElementById("errorNombre").textContent = "El nombre es obligatorio.";
        valido = false;
      }
  
      // Validación email
      const email = document.getElementById("email");
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmail.test(email.value)) {
        document.getElementById("errorEmail").textContent = "Ingrese un email válido.";
        valido = false;
      }
  
      // Validación teléfono
      const telefono = document.getElementById("telefono");
      const regexTel = /^[0-9]{8,15}$/;
      if (!regexTel.test(telefono.value)) {
        document.getElementById("errorTelefono").textContent = "Teléfono inválido (solo números, 8 a 15 dígitos).";
        valido = false;
      }
  
      // Validación motivo
      const motivo = document.getElementById("motivo");
      if (motivo.value === "") {
        document.getElementById("errorMotivo").textContent = "Seleccioná un motivo.";
        valido = false;
      }
  
      // Validación mensaje
      const mensaje = document.getElementById("mensaje");
      if (mensaje.value.trim().length < 10) {
        document.getElementById("errorMensaje").textContent = "El mensaje debe tener al menos 10 caracteres.";
        valido = false;
      }
  
      // Validación términos
      const terminos = document.getElementById("terminos");
      if (!terminos.checked) {
        document.getElementById("errorTerminos").textContent = "Debés aceptar los términos.";
        valido = false;
      }
  
      if (valido) {
        alert("Formulario enviado correctamente.");
        formulario.reset();
      }
    });
  });
  