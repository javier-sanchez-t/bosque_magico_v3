window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get('option')
  var section = "";
  var btnOption = "";

  switch (option) {
    case 'PAQUETE_BRONCE_LA_TORRE':
      section = document.getElementById("PAQUETE_BRONCE_LA_TORRE");
      btnOption = document.getElementById("BTN_PAQUETE_BRONCE_LA_TORRE");
      break;
    case 'PAQUETE_BRONCE_HOTEL_ALBA':
      section = document.getElementById("PAQUETE_BRONCE_HOTEL_ALBA");
      btnOption = document.getElementById("BTN_PAQUETE_BRONCE_HOTEL_ALBA");
      break;
    case 'PAQUETE_BRONCE_LOS_PINOS':
      section = document.getElementById("PAQUETE_BRONCE_LOS_PINOS");
      btnOption = document.getElementById("BTN_PAQUETE_BRONCE_LOS_PINOS");
      break;
    case 'PAQUETE_FINCA_ZAYAS':
      section = document.getElementById("PAQUETE_FINCA_ZAYAS");
      btnOption = document.getElementById("BTN_PAQUETE_FINCA_ZAYAS");
      break;
    case 'PAQUETE_PLATINO_SAN_CAYETANO':
      section = document.getElementById("PAQUETE_PLATINO_SAN_CAYETANO");
      btnOption = document.getElementById("BTN_PAQUETE_PLATINO_SAN_CAYETANO");
      break;
    case 'PAQUETE_PLATINO_VILLAS_BOSQUE':
      section = document.getElementById("PAQUETE_PLATINO_VILLAS_BOSQUE");
      btnOption = document.getElementById("BTN_PAQUETE_PLATINO_VILLAS_BOSQUE");
      break;
    case 'PAQUETE_PIEDRA_CANTEADA':
      section = document.getElementById("PAQUETE_PIEDRA_CANTEADA");
      btnOption = document.getElementById("BTN_PAQUETE_PIEDRA_CANTEADA");
      break;
    case 'PAQUETE_PLATINO_SIERRA_NEVADA':
      section = document.getElementById("PAQUETE_PLATINO_SIERRA_NEVADA");
      btnOption = document.getElementById("BTN_PAQUETE_PLATINO_SIERRA_NEVADA");
      break;
    default:
      section = document.getElementById("PAQUETE_PLATINO_SIERRA_NEVADA");
      btnOption = document.getElementById("BTN_PAQUETE_PLATINO_SIERRA_NEVADA");
  }

  btnOption.firstElementChild.classList.add("shadow");
  section.classList.add("show");
  window.location.href = "#OPTIONS";
};