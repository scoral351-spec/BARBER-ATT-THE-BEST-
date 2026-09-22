document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Obtener valores de los campos
  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const servicio = document.getElementById('servicio').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  // Número de WhatsApp (Formato internacional sin signos ni espacios)
  const numeroBarberia = "573196999604"; 

  // Texto del mensaje con salto de línea normal (\n)
  const textoMensaje = `Hola *BARBER ATT THE BEST*, me gustaría confirmar una cita:

👤 *Cliente:* ${nombre}
📱 *Teléfono:* ${telefono}
✂️ *Servicio:* ${servicio}
📅 *Fecha:* ${fecha}
⏰ *Hora:* ${hora}`;

  // Codificar el texto de forma segura para la URL
  const mensajeCodificado = encodeURIComponent(textoMensaje);

  // Abrir WhatsApp en una nueva pestaña
  window.open(`https://wa.me/${numeroBarberia}?text=${mensajeCodificado}`, '_blank');
});