window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get("option");
  var section = "";
  var btnOption = "";
  console.log(option);

  switch (option) {
    case "SENDERISMO":
      section = document.getElementById("SENDERISMO");
      btnOption = document.getElementById("BTN_SENDERISMO");
      break;
    case "ESPACIO_PARA_ACAMPAR":
      section = document.getElementById("ESPACIO_PARA_ACAMPAR");
      btnOption = document.getElementById("BTN_ESPACIO_PARA_ACAMPAR");
      break;
    case "CAMPAMENTO":
      section = document.getElementById("CAMPAMENTO");
      btnOption = document.getElementById("BTN_CAMPAMENTO");
      break;
    case "CAMPAMENTO_BOUTIQUE":
      section = document.getElementById("CAMPAMENTO_BOUTIQUE");
      btnOption = document.getElementById("BTN_CAMPAMENTO_BOUTIQUE");
      break;
    default:
      section = document.getElementById("CAMPAMENTO_BOUTIQUE");
      btnOption = document.getElementById("BTN_CAMPAMENTO_BOUTIQUE");
  }

  btnOption.firstElementChild.classList.add("shadow");
  section.classList.add("show");
  console.log('section', section);
  window.location.href = "#OPTIONS";
};
