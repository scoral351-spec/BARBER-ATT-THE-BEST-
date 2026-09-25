document.addEventListener("DOMContentLoaded", function () {

  const formulario = document.getElementById("booking-form");

  formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    if (!nombre || !telefono || !servicio || !fecha || !hora) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const numeroBarberia = "573196999604";

    const fechaFormateada = new Date(fecha + "T00:00:00")
      .toLocaleDateString("es-CO", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });

    const mensaje = `💈 *BARBER ATT THE BEST* 💈

*NUEVA RESERVA*

👤 Cliente: ${nombre}
📱 Teléfono: ${telefono}
✂️ Servicio: ${servicio}
📅 Fecha: ${fechaFormateada}
⏰ Hora: ${hora}

¡Hola! Me gustaría confirmar esta cita.`;

    const enlaceWhatsApp =
      "https://wa.me/" +
      numeroBarberia +
      "?text=" +
      encodeURIComponent(mensaje);

    window.location.href = enlaceWhatsApp;

  });

});
