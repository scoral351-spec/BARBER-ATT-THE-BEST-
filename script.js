document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const servicio = document.getElementById('servicio').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  // Redirección directa a WhatsApp con el mensaje estructurado
  const numeroBarberia = "573000000000"; // Reemplazar con el número real
  const mensaje = `Hola *BARBER ATT THE BEST*, me gustaría confirmar una cita:%0A%0A` +
                  `👤 *Cliente:* ${nombre}%0A` +
                  `📱 *Teléfono:* ${telefono}%0A` +
                  `✂️ *Servicio:* ${servicio}%0A` +
                  `📅 *Fecha:* ${fecha}%0A` +
                  `⏰ *Hora:* ${hora}`;

  window.open(`https://wa.me/${numeroBarberia}?text=${mensaje}`, '_blank');
});
