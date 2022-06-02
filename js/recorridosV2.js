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
    case "TOUR_DE_HACIENDA":
      section = document.getElementById("TOUR_DE_HACIENDA");
      btnOption = document.getElementById("BTN_TOUR_DE_HACIENDA");
      break;
    case "CIRCUITO_EN_TRANVIA":
      section = document.getElementById("CIRCUITO_EN_TRANVIA");
      btnOption = document.getElementById("BTN_CIRCUITO_EN_TRANVIA");
      break;
    case "RUTA_DEL_PULQUE":
      section = document.getElementById("RUTA_DEL_PULQUE");
      btnOption = document.getElementById("BTN_RUTA_DEL_PULQUE");
      break;
    case "AVISTAMIENTO_DE_LUCIERNAGAS":
      section = document.getElementById("AVISTAMIENTO_DE_LUCIERNAGAS");
      btnOption = document.getElementById("BTN_AVISTAMIENTO_DE_LUCIERNAGAS");
      break;
    case "SENDERISMO":
      section = document.getElementById("SENDERISMO");
      btnOption = document.getElementById("BTN_SENDERISMO");
      break;
    default:
      section = document.getElementById("AVISTAMIENTO_DE_LUCIERNAGAS");
      btnOption = document.getElementById("BTN_AVISTAMIENTO_DE_LUCIERNAGAS");
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
