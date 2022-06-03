window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get("option");
  var section = "";
  var btnOption = "";
  var sliderWrapper = document.getElementsByClassName("swiper-wrapper")[0];
  var images = [
    "./img/recorridos/Luciernagas/bosque-magico-luciernagas-001.jpg",
    "./img/luciernagas/bosque-magico-luciernagas-002.jpg",
    "./img/luciernagas/bosque-magico-luciernagas-005.jpg",
    "./img/luciernagas/bosque-magico-luciernagas-006.jpg",
    "./img/recorridos/Magueyes/bosque-magico-santuario-de-las-luciernegas-A001-6.jpg",
    "./img/recorridos/Magueyes/bosque-magico-santuario-de-las-luciernegas-A001-2.jpg",
    "./img/recorridos/Magueyes/bosque-magico-santuario-de-las-luciernegas-A001-4.jpg",
    "./img/recorridos/Magueyes/bosque-magico-santuario-de-las-luciernegas-A001-8.jpg",
    "./img/recorridos/Magueyes/bosque-magico-santuario-de-las-luciernegas-A001-7.jpg",
  ];

  switch (option) {
    case "PAQUETE_BRONCE_LA_TORRE":
      section = document.getElementById("PAQUETE_BRONCE_LA_TORRE");
      btnOption = document.getElementById("BTN_PAQUETE_BRONCE_LA_TORRE");
      break;
    case "PAQUETE_BRONCE_HOTEL_ALBA":
      section = document.getElementById("PAQUETE_BRONCE_HOTEL_ALBA");
      btnOption = document.getElementById("BTN_PAQUETE_BRONCE_HOTEL_ALBA");
      break;
    case "PAQUETE_BRONCE_LOS_PINOS":
      section = document.getElementById("PAQUETE_BRONCE_LOS_PINOS");
      btnOption = document.getElementById("BTN_PAQUETE_BRONCE_LOS_PINOS");
      break;
    case "PAQUETE_FINCA_ZAYAS":
      section = document.getElementById("PAQUETE_FINCA_ZAYAS");
      btnOption = document.getElementById("BTN_PAQUETE_FINCA_ZAYAS");
      break;
    case "PAQUETE_PLATINO_SAN_CAYETANO":
      section = document.getElementById("PAQUETE_PLATINO_SAN_CAYETANO");
      btnOption = document.getElementById("BTN_PAQUETE_PLATINO_SAN_CAYETANO");
      break;
    case "PAQUETE_PLATINO_VILLAS_BOSQUE":
      section = document.getElementById("PAQUETE_PLATINO_VILLAS_BOSQUE");
      btnOption = document.getElementById("BTN_PAQUETE_PLATINO_VILLAS_BOSQUE");
      break;
    case "PAQUETE_PIEDRA_CANTEADA":
      section = document.getElementById("PAQUETE_PIEDRA_CANTEADA");
      btnOption = document.getElementById("BTN_PAQUETE_PIEDRA_CANTEADA");
      break;
    case "PAQUETE_PLATINO_SIERRA_NEVADA":
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
