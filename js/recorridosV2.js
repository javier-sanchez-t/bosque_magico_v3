window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get('option')
  var section = "";
  var btnOption = "";

  switch (option) {
    case 'TOUR_DE_HACIENDA':
      section = document.getElementById("TOUR_DE_HACIENDA");
      btnOption = document.getElementById("BTN_TOUR_DE_HACIENDA");
      break;
    case 'CIRCUITO_EN_TRANVIA':
        section = document.getElementById("CIRCUITO_EN_TRANVIA");
        btnOption = document.getElementById("BTN_CIRCUITO_EN_TRANVIA");
        break;
    case 'RUTA_DEL_PULQUE':
        section = document.getElementById("RUTA_DEL_PULQUE");
        btnOption = document.getElementById("BTN_RUTA_DEL_PULQUE");
        break;
    case 'AVISTAMIENTO_DE_LUCIERNAGAS':
        section = document.getElementById("AVISTAMIENTO_DE_LUCIERNAGAS");
        btnOption = document.getElementById("BTN_AVISTAMIENTO_DE_LUCIERNAGAS");
        break;
    default:
      section = document.getElementById("AVISTAMIENTO_DE_LUCIERNAGAS");
      btnOption = document.getElementById("BTN_AVISTAMIENTO_DE_LUCIERNAGAS");
  }

  btnOption.firstElementChild.classList.add("shadow");
  section.classList.add("show");
  window.location.href = "#OPTIONS";
};