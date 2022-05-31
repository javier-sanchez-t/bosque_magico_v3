$(window).bind("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".navbar").addClass("fixed-top");
  } else {
    $(".navbar").removeClass("fixed-top");
  }
});

$("#INICIO_LINK").click(function () {
  $("html, body")
    .delay(0)
    .animate(
      {
        scrollTop: $("#INICIO").offset().top,
      },
      1000
    );
});

function goToSection(sectionName) {
  $("#CLOSE").click();
  $("html, body")
    .delay(0)
    .animate(
      {
        scrollTop: $(sectionName).offset().top,
      },
      1000
    );
}

// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop",
  ].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  });
}

// Install input filters.
setInputFilter(document.getElementById("cantidad"), function (value) {
  return /^-?\d*$/.test(value);
});

setInputFilter(document.getElementById("noReservacion"), function (value) {
  return /^-?\d*$/.test(value);
});

setInputFilter(document.getElementById("noVisitantes"), function (value) {
  return /^-?\d*$/.test(value);
});

setInputFilter(document.getElementById("telefonoAgencias"), function (value) {
  return /^-?\d*$/.test(value);
});

function clearModalFacturacion() {
  document.getElementById("noReservacion").value = "";
  document.getElementById("fechaReservacion").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("rfc").value = "";
  document.getElementById("extranjero").checked = false;
}

function clearModalAgencias() {
  document.getElementById("nombreAgencia").value = "";
  document.getElementById("fechaAgencias").value = "";
  document.getElementById("noVisitantes").value = "";
  document.getElementById("telefonoAgencias").value = "";
  document.getElementById("correoAgencias").value = "";
}

function sendEmail(subject, bodyEmail, modalName, to) {
  $.LoadingOverlay("show");

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var result = JSON.parse(xhttp.responseText);
      if (result.status == 200) {
        alert(
          "Sus datos han sido enviados, en breve atenderemos su solicitud. \n\n ¡Gracias!"
        );
      } else {
        alert("Ocurrió un error con su solicitud, inténtelo más tarde.");
      }
    }

    $.LoadingOverlay("hide");
    $("#" + modalName).modal("hide");
  };
  xhttp.open(
    "GET",
    "https://www.bosquemagico.com.mx/mail.php?to=" +
      to +
      "&subject=" +
      subject +
      "&message=" +
      bodyEmail,
    true
  );
  xhttp.send();
}

function sendAgenciasForm() {
  var nombreAgencia = document.getElementById("nombreAgencia").value;
  var fechaAgencias = document.getElementById("fechaAgencias").value;
  var noVisitantes = document.getElementById("noVisitantes").value;
  var telefonoAgencias = document.getElementById("telefonoAgencias").value;
  var correoAgencias = document.getElementById("correoAgencias").value;

  if (
    nombreAgencia == null ||
    nombreAgencia == undefined ||
    nombreAgencia.trim() == "" ||
    fechaAgencias == null ||
    fechaAgencias == undefined ||
    fechaAgencias.trim() == "" ||
    noVisitantes == null ||
    noVisitantes == undefined ||
    noVisitantes.trim() == "" ||
    telefonoAgencias == null ||
    telefonoAgencias == undefined ||
    telefonoAgencias.trim() == "" ||
    correoAgencias == null ||
    correoAgencias == undefined ||
    correoAgencias.trim() == ""
  ) {
    alert("Ingrese los campos requeridos.");
    return;
  }

  var bodyEmail = `
    <html>
      <head>
         <title>Bosque Mágico</title>
      </head>
      <body>
         <table width="100%" style="margin: 0 auto;" border="0" role="presentation" border="0" cellpadding="0" cellspacing="0">
            <tr>
               <td align="center">
               <img src="https://www.bosquemagico.com.mx/img/header/bosque_magico_V2.png" style="width: 120px;"> <br/><br/>
               </td>
            </tr>

            <tr>
               <td align="left">
                  <strong>Nombre:</strong> ${nombreAgencia} <br/>
                  <strong>Fecha de viaje:</strong> ${fechaAgencias} <br/>
                  <strong>No. visitantes:</strong> ${noVisitantes} <br/>
                  <strong>Teléfono:</strong> ${telefonoAgencias} <br/>
                  <strong>Correo:</strong> ${correoAgencias} <br/>
               </td>
            </tr>
         </table>

      </body>
   </html>`;

  sendEmail(
    "Solicitud de información: AGENCIAS",
    bodyEmail,
    "agenciasModal",
    "reservas@bosquemagico.com.mx"
  );
  clearModalAgencias();
}

function sendFacturasForm() {
  var noReservacion = document.getElementById("noReservacion").value;
  var fechaViaje = document.getElementById("fechaReservacion").value;
  var cantidad = document.getElementById("cantidad").value;
  var RFC = document.getElementById("rfc").value;
  var extranjero = document.getElementById("extranjero").checked;

  if (
    noReservacion == null &&
    noReservacion == undefined &&
    noReservacion == "" &&
    fechaViaje == null &&
    fechaViaje == undefined &&
    fechaViaje == "" &&
    cantidad == null &&
    cantidad == undefined &&
    cantidad == ""
  ) {
    alert("Ingrese los campos requeridos.");
    return;
  }

  var bodyEmail =
    "<strong>No. Reservación:</strong> " +
    noReservacion +
    "<br/>" +
    "<strong>Fecha de viaje:</strong> " +
    fechaViaje +
    "<br/>" +
    "<strong>Cantidad:</strong> $" +
    cantidad;

  if (RFC != null && RFC != undefined && RFC != "") {
    bodyEmail += "<br/><strong>RFC:</strong> " + RFC;
  }

  if (extranjero) {
    bodyEmail += "<br/><strong>Extranjero: </strong> Sí";
  } else {
    bodyEmail += "<br/><strong>Extranjero: </strong> No";
  }

  bodyEmail = `
   <html>
     <head>
        <title>Bosque Mágico</title>
     </head>
     <body>
        <table width="100%" style="margin: 0 auto;" border="0" role="presentation" border="0" cellpadding="0" cellspacing="0">
           <tr>
              <td align="center">
              <img src="https://www.bosquemagico.com.mx/img/header/bosque_magico_V2.png" style="width: 120px;"> <br/><br/>
              </td>
           </tr>

           <tr>
              <td align="left">
                 ${bodyEmail}
              </td>
           </tr>
        </table>

     </body>
  </html>`;

  sendEmail(
    "Solicitud de FACTURA",
    bodyEmail,
    "facturaModal",
    "facturas@bosquemagico.com.mx"
  );
  clearModalFacturacion();
}

$("#BTN_TOP").click(function () {
  $("html, body").delay(0).animate(
    {
      scrollTop: 0,
    },
    1000
  );
});

window.onscroll = function () {
  scrollFunction();
};
mybutton = document.getElementById("BTN_TOP");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

document.getElementById("agenciasLink").onmouseover = function () {
  document.getElementById("agenciasButton").src =
    "./img/Footer/agencias_luciernagas_bosque_magico.png";
};
document.getElementById("agenciasLink").onmouseout = function () {
  document.getElementById("agenciasButton").src =
    "./img/Footer/agencias_bosque_magico.png";
};

/*document.getElementById("sierraNevada").onmouseover = function() {
   document.getElementById("sierraNevada").src = "./img/Footer/logo_cabanas_sierra_nevada.png";
};
document.getElementById("sierraNevada").onmouseout = function() {
   document.getElementById("sierraNevada").src = "./img/Footer/logo_sierra_nevada.png";
};

document.getElementById("laAntigua").onmouseover = function() {
   document.getElementById("laAntigua").src = "./img/Footer/logo_cafe_la_antigua.png";
};
document.getElementById("laAntigua").onmouseout = function() {
   document.getElementById("laAntigua").src = "./img/Footer/logo_la_antigua.png";
};*/