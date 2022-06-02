window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get('option')
  var section = "";
  var btnOption = "";

  switch (option) {
    case 'PENA_TIGRE':
      section = document.getElementById("PENA_TIGRE");
      btnOption = document.getElementById("BTN_PENA_TIGRE");
      break;
    case 'MONUMENTOS_HACIENDAS':
      section = document.getElementById("MONUMENTOS_HACIENDAS");
      btnOption = document.getElementById("BTN_MONUMENTOS_HACIENDAS");
      break;
    case 'HACIENDA_MEXICANA':
      section = document.getElementById("HACIENDA_MEXICANA");
      btnOption = document.getElementById("BTN_HACIENDA_MEXICANA");
      break;
    case 'MAGUEYES_PULQUE':
      section = document.getElementById("MAGUEYES_PULQUE");
      btnOption = document.getElementById("BTN_MAGUEYES_PULQUE");
      break;
    case 'BOSQUE_LUCIERNAGAS':
      section = document.getElementById("BOSQUE_LUCIERNAGAS");
      btnOption = document.getElementById("BTN_BOSQUE_LUCIERNAGAS");
      break;
    default:
      section = document.getElementById("BOSQUE_LUCIERNAGAS");
      btnOption = document.getElementById("BTN_BOSQUE_LUCIERNAGAS");
  }

  btnOption.firstElementChild.classList.add("shadow");
  section.classList.add("show");
  window.location.href = "#OPTIONS";
};