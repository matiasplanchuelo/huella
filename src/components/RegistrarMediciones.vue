<template>
  <header class="headMenu">
    <nav class="navMenu">
      <div class="containerMenu">
        <div class="logoMenu"><a href="#">MI IMPACTO AMBIENTAL</a></div>
        <ul class="ulMenu"> <!-- Si es admin de org -->
          <li> <RouterLink to="/MenuPrincipal">Home</RouterLink> </li>
          <li> <RouterLink to="/RegistrarMediciones">Registrar Mediciones</RouterLink></li>
          <li> <RouterLink to="/VisualizarReportes">Ver Reportes</RouterLink> </li>
          <li> <RouterLink to="/DarAltaContactos">Alta Contactos</RouterLink> </li>
          <li> <RouterLink to="/VincularMiembroXOrg">Vincular Miembros</RouterLink> </li>
          <li> <RouterLink to="/" @click="cerrarSesion">Cerrar sesión</RouterLink> </li>
        </ul>
      </div>
    </nav>
  </header>

  <body class="bodyRegistrarMed">

  <div class="headerOlas">

    <!--Content before waves-->
    <section class="headerReg">
      <div class="py-4 text-center">
        <h2>Registrar Mediciones</h2>
        <p class="lead">Actualice las mediciones de su organización subiendo un archivo Excel (.xlsx) con las
          mismas.</p>
      </div>

      <div class="contenedorCarga">
        <div class="row g-5">
          <div class="col-md-7 col-lg-auto">
            <h4 class="mb-3">Espacio de carga</h4>
            <form class="needs-validation" novalidate>
              <div class="row g-3">

                <div class="col-12">
                  <label for="formFile" class="form-label">Excel de mediciones</label>
                  <input class="form-control-file" type="file" id="formFile" @change="uploadFile" ref="file">
                </div>

              </div>
              <br>
              <button class="w-100 btn btn-primary btn-lg" type="submit" @click="enviarArchivoExcel">Subir</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!--Waves Container-->
    <div class="olas">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"/>
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"/>
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"/>
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"/>
        </g>
      </svg>
    </div>
    <!--Waves end-->
  </div>
  <!--Header ends-->

  </body>
</template>

<script>
import cerrarSesionService from "@/services/cerrarSesionService";
import registrarMedicionesService from "@/services/registrarMedicionesService";

export default {
  name: "RegistrarMediciones",
  methods: {
    uploadFile(){
      this.file = this.$refs.file.files[0];
    },
    enviarArchivoExcel() {
      const formData = new FormData();
      formData.append('file', this.file);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      registrarMedicionesService.registrarMediciones(formData, headers).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    },
    cerrarSesion: function () {
      cerrarSesionService.cerrarSesion(localStorage.getItem('token'))
      localStorage.removeItem('token');
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
/* NAVBAR */
.navMenu {
  background-color: #222222;
  height: auto;
  justify-content: center;
  transition: all 0s ease-out;
}

.headMenu {
  background-color: #222222;
  height: auto;
  justify-content: center;
  transition: all 0s ease-out;
  text-decoration: none;
}

.logoMenu {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(31, 200, 175);
  font-size: 25px;
}

.navMenu .ulMenu {
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  font-size: 20px;
  min-height: 75px;
  background-color: #222222;
}

.navMenu li {
  background-color: #222222;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  font-size: 20px;
  min-height: 70px;
}

.navMenu li:hover {
  background-color: #3b3b3b;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  font-size: 25px;
  min-height: 70px;
}

.navMenu a {
  align-items: center;
  color: #ffffff;
  padding: 7px 15px;
  text-decoration: none;
  transition: all 0s ease-out;
  font-weight: bold;
  font-family: Tahoma;
}

.navMenu a:hover {
  align-items: center;
  color: #ffffff;
  font-weight: bold;
}

.navMenu.active {
  align-items: center;
  background-color: #b3fff9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.navMenu.active a {
  align-items: center;
  color: rgb(255, 255, 255);
}

.navMenu.active .containerMenu {
  align-items: center;
  padding: 10px 0;
}

.navMenu a.current,
.navMenu a:hover {
  align-items: center;
  color: #ffffff;
  font-weight: bold;
}

/********************************/

.headerOlas {
  position: relative;
  text-align: center;
  background: linear-gradient(25deg, rgba(38, 255, 0, 0.278), rgb(51, 193, 0) 100%);
  color: white;
}

.flex { /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }

  .content {
    height: 30vh;
  }

  h1 {
    font-size: 24px;
  }
}

/********************************/

.container {
  max-width: 960px;
}

.row {
  justify-content: center;
  transition: 1.05s;
}


.contenedorCarga {
  width: 37%;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: 1.05s;
}

.contenedorCarga h4 {
  color: black;
}

.contenedorCarga label {
  color: black;
  padding-right: 25px;
}

.lead {
  font-size: 25px;
}
.bodyRegistrarMed{
  margin-top: -17px;
}

.olas{
  padding-top: 140px;
}

.headerReg{
  padding-top: 100px;
}

</style>