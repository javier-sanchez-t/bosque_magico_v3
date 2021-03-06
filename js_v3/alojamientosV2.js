window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get("option");
  var section = "";
  var btnOption = "";
  var sliderWrapper = document.getElementsByClassName("swiper-wrapper")[0];
  var images = [];

  switch (option) {
    case "LA_TORRE":
      section = document.getElementById("LA_TORRE");
      btnOption = document.getElementById("BTN_LA_TORRE");
      images = [
        "./img_v3/alojamientos/Auto_hotel_la_torre/magueyes_la_torre.jpg",
        "./img_v3/alojamientos/Auto_hotel_la_torre/entrada_habitaci0n.jpg",
        "./img_v3/alojamientos/Auto_hotel_la_torre/magueyes_pinos_camino_la_torre.jpg",
        "./img_v3/alojamientos/Auto_hotel_la_torre/perchero_la_torre.jpg",
        "./img_v3/alojamientos/Auto_hotel_la_torre/rama_pino_la_torre.jpg",
        "./img_v3/alojamientos/Auto_hotel_la_torre/toalla_la_torre.jpg",
        "./img_v3/alojamientos/Auto_hotel_la_torre/vista_arboles_rancho.jpg"
      ];
      break;
    case "HOTEL_ALBA":
      section = document.getElementById("HOTEL_ALBA");
      btnOption = document.getElementById("BTN_HOTEL_ALBA");
      images = [
        "./img_v3/alojamientos/Hotel_alba/doble_hotel_alba.jpg",
        "./img_v3/alojamientos/Hotel_alba/estancia_hotel_alba.jpg",
        "./img_v3/alojamientos/Hotel_alba/fachada_hotel_alba.jpg",
        "./img_v3/alojamientos/Hotel_alba/habitacion_sencilla_hotel_alba.jpg",
        "./img_v3/alojamientos/Hotel_alba/habitacion_tres_personas_hotel_alba.jpg",
        "./img_v3/alojamientos/Hotel_alba/habitacion_triple_hotel_alba.jpg",
        "./img_v3/alojamientos/Hotel_alba/litera_hotel_alba.jpg",
      ];
      break;
    case "RESIDENCIAL_LOS_PINOS":
      section = document.getElementById("RESIDENCIAL_LOS_PINOS");
      btnOption = document.getElementById("BTN_RESIDENCIAL_LOS_PINOS");
      images = [
        "./img_v3/alojamientos/Posada_los_pinos/cocina_los_pinos.jpg",
        "./img_v3/alojamientos/Posada_los_pinos/comedor_posada_los_pinos.jpg",
        "./img_v3/alojamientos/Posada_los_pinos/estancia_posada_los_pinos.jpg",
        "./img_v3/alojamientos/Posada_los_pinos/habitacion_adicional_posada_los_pinos.jpg",
        "./img_v3/alojamientos/Posada_los_pinos/habitacion_posada_los_pinos.jpg",
        "./img_v3/alojamientos/Posada_los_pinos/habitacion_sencilla_posada_los_pinos.jpg",
        "./img_v3/alojamientos/Posada_los_pinos/recamara_posada_los_pinos.jpg",
      ];
      break;
    case "FINCA_ZAYAS":
      section = document.getElementById("FINCA_ZAYAS");
      btnOption = document.getElementById("BTN_FINCA_ZAYAS");
      images = [
        "./img_v3/alojamientos/La_Finca_Zayas/acceso_salon_finca_zayas.jpg",
        "./img_v3/alojamientos/La_Finca_Zayas/capilla_finca_zayas.jpg",
        "./img_v3/alojamientos/La_Finca_Zayas/finca_zayas.jpg",
        "./img_v3/alojamientos/La_Finca_Zayas/habitacion_finca_zayas.jpg",
        "./img_v3/alojamientos/La_Finca_Zayas/habitaciones_la_finca_zayas.jpg",
        "./img_v3/alojamientos/La_Finca_Zayas/hospedaje_finca_zayas.jpg",
        "./img_v3/alojamientos/La_Finca_Zayas/lago_finca_zayas.jpg",
      ];
      break;
    case "HACIENDA_SAN_CAYETANO":
      section = document.getElementById("HACIENDA_SAN_CAYETANO");
      btnOption = document.getElementById("BTN_HACIENDA_SAN_CAYETANO");
      images = [
        "./img_v3/alojamientos/Hacienda_san_cayetano/habitacion_doble_hacienda.jpg",
        "./img_v3/alojamientos/Hacienda_san_cayetano/habitacion_san_cayetano.jpg",
        "./img_v3/alojamientos/Hacienda_san_cayetano/hospedaje_san_cayetano_hacienda.jpg",
        "./img_v3/alojamientos/Hacienda_san_cayetano/magueyera_hacienda.jpg",
        "./img_v3/alojamientos/Hacienda_san_cayetano/pasillo_exterior_hacienda_san_cayetano.jpg",
        "./img_v3/alojamientos/Hacienda_san_cayetano/pasillo_interior_hacienda_san_cayetano.jpg",
        "./img_v3/alojamientos/Hacienda_san_cayetano/patio_central_hacienda.jpg",
      ];
      break;
    case "VILLAS_DEL_BOSQUE":
      section = document.getElementById("VILLAS_DEL_BOSQUE");
      btnOption = document.getElementById("BTN_VILLAS_DEL_BOSQUE");
      images = [
        "./img_v3/alojamientos/Villas_del_bosque/asador_cabana_villas_del_bosque.jpg",
        "./img_v3/alojamientos/Villas_del_bosque/cabana_familiar.jpg",
        "./img_v3/alojamientos/Villas_del_bosque/cabana_parejas.jpg",
        "./img_v3/alojamientos/Villas_del_bosque/cabana_santa_clara.jpg",
        "./img_v3/alojamientos/Villas_del_bosque/cabana_villas_del_bosque.jpg",
        "./img_v3/alojamientos/Villas_del_bosque/cabanas_tlaxcala.jpg",
        "./img_v3/alojamientos/Villas_del_bosque/sala_cabana_santa_clara.jpg",
      ];
      break;
    case "PIEDRA_CANTEADA":
      section = document.getElementById("PIEDRA_CANTEADA");
      btnOption = document.getElementById("BTN_PIEDRA_CANTEADA");
      images = [
        "./img_v3/alojamientos/Piedra_canteada/cabana_doble_piedra_canteada.jpg",
        "./img_v3/alojamientos/Piedra_canteada/cabana_sencilla_piedra_canteada.jpg",
        "./img_v3/alojamientos/Piedra_canteada/cabana_triple_piedra_canteada.jpg",
        "./img_v3/alojamientos/Piedra_canteada/cabanas_piedra_canteada.jpg",
        "./img_v3/alojamientos/Piedra_canteada/camino_piedra_canteada.jpg",
        "./img_v3/alojamientos/Piedra_canteada/eco_hotel_piedra_canteada.jpg",
        "./img_v3/alojamientos/Piedra_canteada/acceso_piedra_canteada.jpg",
      ];
      break;
    case "SIERRA_NEVADA":
      section = document.getElementById("SIERRA_NEVADA");
      btnOption = document.getElementById("BTN_SIERRA_NEVADA");
      images = [
        "./img_v3/alojamientos/Villas bosque/cabana_dos_parejas.png",
        "./img_v3/alojamientos/Villas bosque/recamara_cabana.png",
        "./img_v3/alojamientos/Villas bosque/sala_cabana.png",
        "./img_v3/alojamientos/Posada los Pinos/bosque-magico-santuario-de-las-luciernegas-A001-15.jpg",
        "./img_v3/alojamientos/Posada los Pinos/bosque-magico-santuario-de-las-luciernegas-A001-10.jpg",
        "./img_v3/alojamientos/Posada los Pinos/bosque-magico-santuario-de-las-luciernegas-A001-8.jpg",
        "./img_v3/alojamientos/Posada los Pinos/bosque-magico-santuario-de-las-luciernegas-A001-5.jpg",
        "./img_v3/alojamientos/Posada los Pinos/bosque-magico-santuario-de-las-luciernegas-A001-4.jpg",
        "./img_v3/alojamientos/Hotel Alba/bosque-magico-santuario-de-las-luciernegas-A001-2.jpg"
      ];
      break;
    default:
      section = document.getElementById("SIERRA_NEVADA");
      btnOption = document.getElementById("BTN_SIERRA_NEVADA");
      images = [
        "./img_v3/alojamientos/Villas bosque/cabana_dos_parejas.png",
        "./img_v3/alojamientos/Villas bosque/recamara_cabana.png",
        "./img_v3/alojamientos/Villas bosque/sala_cabana.png",
        "./img_v3/alojamientos/Posada los Pinos/bosque-magico-santuario-de-las-luciernegas-A001-10.jpg",
        "./img_v3/alojamientos/Posada los Pinos/bosque-magico-santuario-de-las-luciernegas-A001-8.jpg",
        "./img_v3/alojamientos/Posada los Pinos/bosque-magico-santuario-de-las-luciernegas-A001-5.jpg",
        "./img_v3/alojamientos/Posada los Pinos/bosque-magico-santuario-de-las-luciernegas-A001-4.jpg",
        "./img_v3/alojamientos/Hotel Alba/bosque-magico-santuario-de-las-luciernegas-A001-2.jpg"
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
