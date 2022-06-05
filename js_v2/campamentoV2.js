window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get("option");
  var section = "";
  var btnOption = "";
  var sliderWrapper = document.getElementsByClassName("swiper-wrapper")[0];
  var images = [];

  switch (option) {
    case "ESPACIO_PARA_ACAMPAR":
      section = document.getElementById("ESPACIO_PARA_ACAMPAR");
      btnOption = document.getElementById("BTN_ESPACIO_PARA_ACAMPAR");
      images = [
        "./img_v2/experiencias/espacio_para_acampar/area_de_acampado.jpg",
        "./img_v2/experiencias/espacio_para_acampar/area_de_campamento.jpg",
        "./img_v2/experiencias/espacio_para_acampar/campamento.jpg",
        "./img_v2/experiencias/espacio_para_acampar/campamento_santuario.jpg",
        "./img_v2/experiencias/espacio_para_acampar/camping_santuario_luciernagas.jpg",
        "./img_v2/experiencias/espacio_para_acampar/espacio_para_acampar.jpg",
        "./img_v2/experiencias/espacio_para_acampar/zona_de_camping.jpg",
      ];
      break;
    case "CAMPAMENTO":
      section = document.getElementById("CAMPAMENTO");
      btnOption = document.getElementById("BTN_CAMPAMENTO");
      images = [
        "./img_v2/experiencias/Campamento/bosque-magico-santuario-de-las-luciernegas-A001-2.jpg",
        "./img_v2/experiencias/Campamento/bosque-magico-santuario-de-las-luciernegas-A001-3.jpg",
        "./img_v2/experiencias/Campamento/bosque-magico-santuario-de-las-luciernegas-A001-5.jpg",
        "./img_v2/experiencias/Campamento/bosque-magico-santuario-de-las-luciernegas-A001-7.jpg",
        "./img_v2/experiencias/espacio_acampar/img_2.png",
        "./img_v2/experiencias/espacio_acampar/img_4.png",
        "./img_v2/experiencias/espacio_acampar/img_5.png",
      ];
      break;
    case "CAMPAMENTO_BOUTIQUE":
      section = document.getElementById("CAMPAMENTO_BOUTIQUE");
      btnOption = document.getElementById("BTN_CAMPAMENTO_BOUTIQUE");
      images = [
        "./img_v2/experiencias/campamento_boutique/cabana.jpg",
        "./img_v2/experiencias/campamento_boutique/cabanas_glamping_santuario.jpg",
        "./img_v2/experiencias/campamento_boutique/glamping_nanacamilpa.jpg",
        "./img_v2/experiencias/campamento_boutique/glamping_tlaxcala.jpg",
        "./img_v2/experiencias/campamento_boutique/mini_cabana_bosque_nanacamilpa.jpg",
        "./img_v2/experiencias/campamento_boutique/mini_cabanas_santuario.jpg",
        "./img_v2/experiencias/campamento_boutique/santuario_de_luciernagas_tlaxcala.jpg",
      ];
      break;
    default:
      section = document.getElementById("CAMPAMENTO_BOUTIQUE");
      btnOption = document.getElementById("BTN_CAMPAMENTO_BOUTIQUE");
  }

  btnOption.firstElementChild.classList.add("shadow");
  section.classList.add("show");
  console.log("section", section);
  window.location.href = "#SLIDER";

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
