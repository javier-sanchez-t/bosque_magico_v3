window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get('option')
  var section = "";
  var btnOption = "";

  switch (option) {
    case 'LA_TORRE':
      section = document.getElementById("LA_TORRE");
      btnOption = document.getElementById("BTN_LA_TORRE");
      break;
    case 'HOTEL_ALBA':
      section = document.getElementById("HOTEL_ALBA");
      btnOption = document.getElementById("BTN_HOTEL_ALBA");
      break;
    case 'RESIDENCIAL_LOS_PINOS':
      section = document.getElementById("RESIDENCIAL_LOS_PINOS");
      btnOption = document.getElementById("BTN_RESIDENCIAL_LOS_PINOS");
      break;
    case 'FINCA_ZAYAS':
      section = document.getElementById("FINCA_ZAYAS");
      btnOption = document.getElementById("BTN_FINCA_ZAYAS");
      break;
    case 'HACIENDA_SAN_CAYETANO':
      section = document.getElementById("HACIENDA_SAN_CAYETANO");
      btnOption = document.getElementById("BTN_HACIENDA_SAN_CAYETANO");
      break;
    case 'VILLAS_DEL_BOSQUE':
      section = document.getElementById("VILLAS_DEL_BOSQUE");
      btnOption = document.getElementById("BTN_VILLAS_DEL_BOSQUE");
      break;
    case 'PIEDRA_CANTEADA':
      section = document.getElementById("PIEDRA_CANTEADA");
      btnOption = document.getElementById("BTN_PIEDRA_CANTEADA");
      break;
    case 'SIERRA_NEVADA':
      section = document.getElementById("SIERRA_NEVADA");
      btnOption = document.getElementById("BTN_SIERRA_NEVADA");
      break;
    default:
      section = document.getElementById("SIERRA_NEVADA");
      btnOption = document.getElementById("BTN_SIERRA_NEVADA");
  }

  btnOption.firstElementChild.classList.add("shadow");
  section.classList.add("show");
  window.location.href = "#OPTIONS";
};