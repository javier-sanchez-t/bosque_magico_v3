window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get("option");
  var section = "";
  var btnOption = "";
  var sliderWrapper = document.getElementsByClassName("swiper-wrapper")[0];
  var images = [
    "./img_v3/paquetes/circuito_tranvia_bosque_magico.jpg",
    "./img_v3/paquetes/ruta_del_pulque_nanacamilpa.jpg",
    "./img_v3/paquetes/santuario_luciernagas_tlaxcala.jpg",
    "./img_v3/mercado_estacion/mercado_la_estacion.jpg",
  ];

  switch (option) {
    case "PAQUETE_BRONCE_LA_TORRE":
      section = document.getElementById("PAQUETE_BRONCE_LA_TORRE");
      btnOption = document.getElementById("BTN_PAQUETE_BRONCE_LA_TORRE");
      images.push("./img_v3/paquetes/alojamientos/la_torre/3_magueyes_la_torre.jpg");
      images.push("./img_v3/paquetes/alojamientos/la_torre/entrada_habitacion.jpg");
      images.push("./img_v3/paquetes/alojamientos/la_torre/toalla_la_torre.jpg");
      break;
    case "PAQUETE_BRONCE_HOTEL_ALBA":
      section = document.getElementById("PAQUETE_BRONCE_HOTEL_ALBA");
      btnOption = document.getElementById("BTN_PAQUETE_BRONCE_HOTEL_ALBA");
      images.push("./img_v3/paquetes/alojamientos/hotel_alba/doble_hotel_alba.jpg");
      images.push("./img_v3/paquetes/alojamientos/hotel_alba/fachada_hotel_alba.jpg");
      images.push("./img_v3/paquetes/alojamientos/hotel_alba/habitacion_sencilla_hotel_alba.jpg");
      break;
    case "PAQUETE_BRONCE_LOS_PINOS":
      section = document.getElementById("PAQUETE_BRONCE_LOS_PINOS");
      btnOption = document.getElementById("BTN_PAQUETE_BRONCE_LOS_PINOS");
      images.push("./img_v3/paquetes/alojamientos/los_pinos/recamara_posada_los_pinos.jpg");
      images.push("./img_v3/paquetes/alojamientos/los_pinos/habitacion_adicional_posada_los_pinos.jpg");
      images.push("./img_v3/paquetes/alojamientos/los_pinos/habitacion_sencilla_posada_los_pinos.jpg");
      break;
    case "PAQUETE_FINCA_ZAYAS":
      section = document.getElementById("PAQUETE_FINCA_ZAYAS");
      btnOption = document.getElementById("BTN_PAQUETE_FINCA_ZAYAS");
      images.push("./img_v3/paquetes/alojamientos/finca_zayas/finca_zayas.jpg");
      images.push("./img_v3/paquetes/alojamientos/finca_zayas/habitaciones_la_finca_zayas.jpg");
      images.push("./img_v3/paquetes/alojamientos/finca_zayas/hospedaje_finca_zayas.jpg");
      break;
    case "PAQUETE_PLATINO_SAN_CAYETANO":
      section = document.getElementById("PAQUETE_PLATINO_SAN_CAYETANO");
      btnOption = document.getElementById("BTN_PAQUETE_PLATINO_SAN_CAYETANO");
      images.push("./img_v3/paquetes/alojamientos/san_cayetano/habitacion_hacienda_san_cayetano.jpg");
      break;
    case "PAQUETE_PLATINO_VILLAS_BOSQUE":
      section = document.getElementById("PAQUETE_PLATINO_VILLAS_BOSQUE");
      btnOption = document.getElementById("BTN_PAQUETE_PLATINO_VILLAS_BOSQUE");
      images.push("./img_v3/paquetes/alojamientos/villas_del_bosque/cabana_luciernagas.jpg");
      images.push("./img_v3/paquetes/alojamientos/villas_del_bosque/cabana_villas_del_bosque.jpg");
      images.push("./img_v3/paquetes/alojamientos/villas_del_bosque/sala_cabana_santa_clara.jpg");
      break;
    case "PAQUETE_PIEDRA_CANTEADA":
      section = document.getElementById("PAQUETE_PIEDRA_CANTEADA");
      btnOption = document.getElementById("BTN_PAQUETE_PIEDRA_CANTEADA");
      images.push("./img_v3/paquetes/alojamientos/piedra_canteada/cabana_doble_piedra_canteada.jpg");
      images.push("./img_v3/paquetes/alojamientos/piedra_canteada/camino_piedra_canteada.jpg");
      images.push("./img_v3/paquetes/alojamientos/piedra_canteada/eco_hotel_piedra_canteada.jpg");
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
