window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get("option");
  var section = "";
  var btnOption = "";
  var sliderWrapper = document.getElementsByClassName("swiper-wrapper")[0];
  var images = [
    "./img/alojamientos/Villas bosque/cabana_dos_parejas.png",
    "./img/alojamientos/Villas bosque/recamara_cabana.png",
    "./img/alojamientos/Villas bosque/sala_cabana.png",
    "./img/alojamientos/Posada los Pinos/bosque-magico-santuario-de-las-luciernegas-A001-15.jpg",
    "./img/alojamientos/Posada los Pinos/bosque-magico-santuario-de-las-luciernegas-A001-10.jpg",
    "./img/alojamientos/Posada los Pinos/bosque-magico-santuario-de-las-luciernegas-A001-8.jpg",
    "./img/alojamientos/Posada los Pinos/bosque-magico-santuario-de-las-luciernegas-A001-5.jpg",
    "./img/alojamientos/Posada los Pinos/bosque-magico-santuario-de-las-luciernegas-A001-4.jpg",
    "./img/alojamientos/Hotel Alba/bosque-magico-santuario-de-las-luciernegas-A001-2.jpg"
  ];

  switch (option) {
    case "LA_TORRE":
      section = document.getElementById("LA_TORRE");
      btnOption = document.getElementById("BTN_LA_TORRE");
      break;
    case "HOTEL_ALBA":
      section = document.getElementById("HOTEL_ALBA");
      btnOption = document.getElementById("BTN_HOTEL_ALBA");
      break;
    case "RESIDENCIAL_LOS_PINOS":
      section = document.getElementById("RESIDENCIAL_LOS_PINOS");
      btnOption = document.getElementById("BTN_RESIDENCIAL_LOS_PINOS");
      break;
    case "FINCA_ZAYAS":
      section = document.getElementById("FINCA_ZAYAS");
      btnOption = document.getElementById("BTN_FINCA_ZAYAS");
      break;
    case "HACIENDA_SAN_CAYETANO":
      section = document.getElementById("HACIENDA_SAN_CAYETANO");
      btnOption = document.getElementById("BTN_HACIENDA_SAN_CAYETANO");
      break;
    case "VILLAS_DEL_BOSQUE":
      section = document.getElementById("VILLAS_DEL_BOSQUE");
      btnOption = document.getElementById("BTN_VILLAS_DEL_BOSQUE");
      break;
    case "PIEDRA_CANTEADA":
      section = document.getElementById("PIEDRA_CANTEADA");
      btnOption = document.getElementById("BTN_PIEDRA_CANTEADA");
      break;
    case "SIERRA_NEVADA":
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

  if (sliderWrapper) {
    images.forEach((image) => {
      var slide = document.createElement("div");
      slide.style.backgroundImage = "url('" + image + "')";
      slide.classList.add("swiper-slide");
      slide.classList.add("custom-slide");
      
      console.log(slide.style);
      sliderWrapper.appendChild(slide);
    });
  }

  // NEW SLIDER
  const slider = document.getElementsByClassName("swiper")[0];
  if (window.innerWidth > 600 && slider) {
    const prevBtn = document.createElement("div");
    prevBtn.classList.add("swiper-button-prev");
    slider.appendChild(prevBtn);

    const nextBtn = document.createElement("div");
    nextBtn.classList.add("swiper-button-next");
    slider.appendChild(nextBtn);
  }

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    //loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
