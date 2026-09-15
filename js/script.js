```javascript
/* =====================================
   BARBER ATT THE BEST
   RESERVAS
===================================== */


// Número de WhatsApp de la barbería
// CAMBIA ESTE NÚMERO POR EL REAL

const numeroWhatsApp = "573000000000";


/* =====================================
   SELECCIONAR SERVICIO
===================================== */

function seleccionarServicio(servicio) {

    const select = document.getElementById("servicio");

    select.value = servicio;

}


/* =====================================
   FORMULARIO DE RESERVA
===================================== */

const bookingForm = document.getElementById("bookingForm");


bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // Obtener información

    const nombre =
        document.getElementById("nombre").value;

    const telefono =
        document.getElementById("telefono").value;

    const servicio =
        document.getElementById("servicio").value;

    const fecha =
        document.getElementById("fecha").value;

    const hora =
        document.getElementById("hora").value;

    const mensaje =
        document.getElementById("mensaje").value;


    // Validación

    if (
        !nombre ||
        !telefono ||
        !servicio ||
        !fecha ||
        !hora
    ) {

        alert(
            "Por favor completa todos los campos obligatorios."
        );

        return;

    }


    // Convertir fecha

    const fechaFormateada =
        new Date(fecha + "T00:00:00")
        .toLocaleDateString("es-CO", {

            day: "2-digit",
            month: "2-digit",
            year: "numeric"

        });


    // Crear mensaje

    let texto =

        `💈 *BARBER ATT THE BEST*%0A%0A` +

        `Hola, quiero reservar una cita.%0A%0A` +

        `👤 *Nombre:* ${nombre}%0A` +

        `📞 *Teléfono:* ${telefono}%0A` +

        `✂️ *Servicio:* ${servicio}%0A` +

        `📅 *Fecha:* ${fechaFormateada}%0A` +

        `🕐 *Hora:* ${hora}%0A`;


    if (mensaje.trim() !== "") {

        texto +=
            `%0A📝 *Mensaje:* ${mensaje}`;

    }


    // Crear enlace WhatsApp

    const url =
        `https://wa.me/${numeroWhatsApp}?text=${texto}`;


    // Abrir WhatsApp

    window.open(url, "_blank");


    // Limpiar formulario

    bookingForm.reset();

});


/* =====================================
   FECHA MÍNIMA
===================================== */

const fechaInput =
    document.getElementById("fecha");


const hoy =
    new Date().toISOString().split("T")[0];


fechaInput.min = hoy;
```
