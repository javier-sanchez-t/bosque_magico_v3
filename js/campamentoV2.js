window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get("option");
  var section = "";
  var btnOption = "";
  var sliderWrapper = document.getElementsByClassName("swiper-wrapper")[0];
  var images = [
    "./img/experiencias/Campamento/bosque-magico-santuario-de-las-luciernegas-A001-2.jpg",
    "./img/experiencias/Campamento/bosque-magico-santuario-de-las-luciernegas-A001-3.jpg",
    "./img/experiencias/Campamento/bosque-magico-santuario-de-las-luciernegas-A001-5.jpg",
    "./img/experiencias/Campamento/bosque-magico-santuario-de-las-luciernegas-A001-7.jpg",
    "./img/experiencias/espacio_acampar/img_2.png",
    "./img/experiencias/espacio_acampar/img_4.png",
    "./img/experiencias/espacio_acampar/img_5.png",
  ];

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
  console.log("section", section);
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
