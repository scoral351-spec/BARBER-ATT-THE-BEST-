```javascript
document.getElementById('booking-form').addEventListener('submit', function(e) {

  e.preventDefault();

  // Obtener los datos del formulario
  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const servicio = document.getElementById('servicio').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  // Número de WhatsApp de la barbería
  const numeroBarberia = "573196999604";

  // Convertir la fecha a formato colombiano
  const fechaFormateada = new Date(fecha + "T00:00:00")
    .toLocaleDateString("es-CO", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });

  // Crear mensaje
  const textoMensaje = `💈 *NUEVA RESERVA - BARBER ATT THE BEST* 💈

👤 *Cliente:* ${nombre}
📱 *Teléfono:* ${telefono}
✂️ *Servicio:* ${servicio}
📅 *Fecha:* ${fechaFormateada}
⏰ *Hora:* ${hora}

¡Hola! Me gustaría confirmar esta cita.`;

  // Codificar mensaje
  const mensajeCodificado = encodeURIComponent(textoMensaje);

  // Abrir WhatsApp
  const url = `https://wa.me/${numeroBarberia}?text=${mensajeCodificado}`;

  window.open(url, "_blank");

});
```
