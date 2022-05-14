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
    case 'PAQUETE_BRONCE':
      section = document.getElementById("PAQUETE_BRONCE");
      btnOption = document.getElementById("BTN_PAQUETE_BRONCE");
      break;
    case 'PAQUETE_PLATINO':
      section = document.getElementById("PAQUETE_PLATINO");
      btnOption = document.getElementById("BTN_PAQUETE_PLATINO");
      break;
    case 'PAQUETE_PLATINO_BOUTIQUE':
      section = document.getElementById("PAQUETE_PLATINO_BOUTIQUE");
      btnOption = document.getElementById("BTN_PAQUETE_PLATINO_BOUTIQUE");
      break;
    default:
      section = document.getElementById("PAQUETE_PLATINO_BOUTIQUE");
      btnOption = document.getElementById("BTN_PAQUETE_PLATINO_BOUTIQUE");
  }

  btnOption.firstElementChild.classList.add("shadow");
  section.classList.add("show");
  window.location.href = "#OPTIONS";
};