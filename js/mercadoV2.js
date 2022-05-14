window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get("option");
  var section = "";
  var btnOption = "";

  switch (option) {
    case "HAMBURGUESAS":
      section = document.getElementById("HAMBURGUESAS");
      btnOption = document.getElementById("BTN_HAMBURGUESAS");
      break;
    case "COMIDA_REGIONAL":
      section = document.getElementById("COMIDA_REGIONAL");
      btnOption = document.getElementById("BTN_COMIDA_REGIONAL");
      break;
    case "RECUERDOS":
      section = document.getElementById("RECUERDOS");
      btnOption = document.getElementById("BTN_RECUERDOS");
      break;
    case "BARBACOA":
      section = document.getElementById("BARBACOA");
      btnOption = document.getElementById("BTN_BARBACOA");
      break;
    case "TACO_ASADA":
      section = document.getElementById("TACO_ASADA");
      btnOption = document.getElementById("BTN_TACO_ASADA");
      break;
    case "WAFFLES":
      section = document.getElementById("WAFFLES");
      btnOption = document.getElementById("BTN_WAFFLES");
      break;
    case "CREPAS":
      section = document.getElementById("CREPAS");
      btnOption = document.getElementById("BTN_CREPAS");
      break;
    case "LA_ANTIGUA":
      section = document.getElementById("LA_ANTIGUA");
      btnOption = document.getElementById("BTN_LA_ANTIGUA");
      break;
    default:
      section = document.getElementById("LA_ANTIGUA");
      btnOption = document.getElementById("BTN_LA_ANTIGUA");
  }

  btnOption.firstElementChild.classList.add("shadow");
  section.classList.add("show");
  window.location.href = "#BTN_HAMBURGUESAS";
};
