window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get("option");
  var section = "";
  var btnOption = "";
  var sliderWrapper = document.getElementsByClassName("swiper-wrapper")[0];
  var images = [];

  switch (option) {
    case "TOUR_DE_HACIENDA":
      section = document.getElementById("TOUR_DE_HACIENDA");
      btnOption = document.getElementById("BTN_TOUR_DE_HACIENDA");
      images = [
        "./img_v2/recorridos/tour de hacienda/comedor_hacienda.jpg",
        "./img_v2/recorridos/tour de hacienda/entrada_hacienda_mexicana.jpg",
        "./img_v2/recorridos/tour de hacienda/fachada_hacienda_cimalpa.jpg",
        "./img_v2/recorridos/tour de hacienda/hotel_hacienda_chimalpa.jpg",
        "./img_v2/recorridos/tour de hacienda/paisaje_hacienda_chimalpa.jpg",
        "./img_v2/recorridos/tour de hacienda/ruedo_hacienda.jpg",
        "./img_v2/recorridos/tour de hacienda/tienda_de_raya_hacienda.jpg",
      ];
      break;
    case "CIRCUITO_EN_TRANVIA":
      section = document.getElementById("CIRCUITO_EN_TRANVIA");
      btnOption = document.getElementById("BTN_CIRCUITO_EN_TRANVIA");
      images = [
        "./img_v2/recorridos/tranvia/tranvia_campo.jpg",
        "./img_v2/recorridos/tranvia/tranvia_ejido_san-jose.jpg",
        "./img_v2/recorridos/tranvia/tranvia_en_el_bosque.jpg",
        "./img_v2/recorridos/tranvia/tranvia_en_santuario.jpg",
        "./img_v2/recorridos/tranvia/tranvia_la_obra.jpg",
        "./img_v2/recorridos/tranvia/tranvia_pilares.jpg",
        "./img_v2/recorridos/tranvia/tranvia_santuario_luciernagas.jpg",
      ];
      break;
    case "RUTA_DEL_PULQUE":
      section = document.getElementById("RUTA_DEL_PULQUE");
      btnOption = document.getElementById("BTN_RUTA_DEL_PULQUE");
      images = [
        "./img_v2/recorridos/ruta del pulque/cuna_del_pulque.jpg",
        "./img_v2/recorridos/ruta del pulque/magueyera_tlaxcala.jpg",
        "./img_v2/recorridos/ruta del pulque/plantio_de_magueyes.jpg",
        "./img_v2/recorridos/ruta del pulque/pulque_tlaxcala.jpg",
        "./img_v2/recorridos/ruta del pulque/recorrido_del_pulque.jpg",
        "./img_v2/recorridos/ruta del pulque/ruta_del_pulque.jpg",
        "./img_v2/recorridos/ruta del pulque/tour_del_pulque.jpg",
      ];
      break;
    case "AVISTAMIENTO_DE_LUCIERNAGAS":
      section = document.getElementById("AVISTAMIENTO_DE_LUCIERNAGAS");
      btnOption = document.getElementById("BTN_AVISTAMIENTO_DE_LUCIERNAGAS");
      images = [
        "./img_v2/recorridos/avistamiento/luciernagas.jpg",
        "./img_v2/recorridos/avistamiento/luciernagas_en_tlaxcala.jpg",
        "./img_v2/recorridos/avistamiento/luciernagas_tlaxcala.jpg",
        "./img_v2/recorridos/avistamiento/nanacamilpa_luciernagas.jpg",
        "./img_v2/recorridos/avistamiento/santuario_de_las_luciernagas.jpg",
        "./img_v2/recorridos/avistamiento/santuario_de_las_luciernagas_tlaxcala.jpg",
        "./img_v2/recorridos/avistamiento/tlaxcala_luciernagas.jpg",
      ];
      break;
    case "SENDERISMO":
      section = document.getElementById("SENDERISMO");
      btnOption = document.getElementById("BTN_SENDERISMO");
      images = [
        "./img_v2/recorridos/senderismo/bosque_palmeras_villas.jpg",
        "./img_v2/recorridos/senderismo/palmeras_en_el_bosque.jpg",
        "./img_v2/recorridos/senderismo/pena_del_tigre.jpg",
        "./img_v2/recorridos/senderismo/pena_del_tigre_villas_del_bosque.jpg",
        "./img_v2/recorridos/senderismo/pena_santa_clara.jpg",
        "./img_v2/recorridos/senderismo/piedra_angular_santa_clara.jpg",
        "./img_v2/recorridos/senderismo/sendero_pena_del_tigre.jpg",
      ];
      break;
    default:
      section = document.getElementById("SENDERISMO");
      btnOption = document.getElementById("BTN_SENDERISMO");
      images = [
        "./img_v2/recorridos/senderismo/bosque_palmeras_villas.jpg",
        "./img_v2/recorridos/senderismo/palmeras_en_el_bosque.jpg",
        "./img_v2/recorridos/senderismo/pena_del_tigre.jpg",
        "./img_v2/recorridos/senderismo/pena_del_tigre_villas_del_bosque.jpg",
        "./img_v2/recorridos/senderismo/pena_santa_clara.jpg",
        "./img_v2/recorridos/senderismo/piedra_angular_santa_clara.jpg",
        "./img_v2/recorridos/senderismo/sendero_pena_del_tigre.jpg",
      ];
  }

  btnOption.firstElementChild.classList.add("shadow");
  section.classList.add("show");
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
