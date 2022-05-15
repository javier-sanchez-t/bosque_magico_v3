window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get("option");
  var section = "";
  var btnOption = "";

  switch (option) {
    case "LUCIERNAGAS":
      section = document.getElementById("LUCIERNAGAS");
      btnOption = document.getElementById("BTN_LUCIERNAGAS");
      break;
    case "DISTANCIA_TIEMPO":
      section = document.getElementById("DISTANCIA_TIEMPO");
      btnOption = document.getElementById("BTN_DISTANCIA_TIEMPO");
      break;
    case "CONDICIONES_AVISTAMIENTO":
      section = document.getElementById("CONDICIONES_AVISTAMIENTO");
      btnOption = document.getElementById("BTN_CONDICIONES_AVISTAMIENTO");
      break;
    case "TRANSPORTE_PARTICULAR":
      section = document.getElementById("TRANSPORTE_PARTICULAR");
      btnOption = document.getElementById("BTN_TRANSPORTE_PARTICULAR");
      break;
    case "TRANSPORTE_PUBLICO":
      section = document.getElementById("TRANSPORTE_PUBLICO");
      btnOption = document.getElementById("BTN_TRANSPORTE_PUBLICO");
      break;
    default:
      section = document.getElementById("TRANSPORTE_PUBLICO");
      btnOption = document.getElementById("BTN_TRANSPORTE_PUBLICO");
  }

  btnOption.firstElementChild.classList.add("shadow");
  section.classList.add("show");
  //window.location.href = "#OPTIONS";
};
