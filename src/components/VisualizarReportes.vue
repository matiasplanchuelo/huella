<template>

  <header class="headMenu">
    <nav class="navMenu">
      <div class="containerMenu">
        <div class="logoMenu"><a href="#">MI IMPACTO AMBIENTAL</a></div>
        <ul class="ulMenu"> <!-- Si es super admin -->
          <li>
            <RouterLink to="/MenuPrincipal">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/VisualizarUsuarios">Ver Usuarios</RouterLink>
          </li>
          <li> <RouterLink to="/VisualizarReportes">Ver Reportes</RouterLink> </li>
          <li>
            <RouterLink to="/DarAltaOrgYAreas">Alta org y areas</RouterLink>
          </li>
          <li>
            <RouterLink to="/CrearAgenteSectorial">Crear agente sectorial</RouterLink>
          </li>
          <li>
            <RouterLink to="/CrearSectorTerritorial">Crear sector territorial</RouterLink>
          </li>
          <li> <RouterLink to="/VincularSectores">Vincular Sector</RouterLink> </li>
          <li>
            <RouterLink to="/DarAltaMedioTransporte">Alta medio de transporte</RouterLink>
          </li>
          <li>
            <RouterLink to="/VincularParadas">Vincular Paradas</RouterLink>
          </li>
          <li>
            <RouterLink to="/" @click="cerrarSesion">Cerrar sesión</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <body class="bodyReportes">

  <div class="header">

    <!--Content before waves-->
    <div class="inner-header flex">
      <h1>VISUALIZAR REPORTES</h1>

    </div>

    <div class="cajaDeTrayectos">
      <p class="repoTitulo">Reporte: <span class="closebtn" @click="limpiarReportes()"> X </span> </p>
      <table class="table user-list">
        <div v-if="mostrarTotalHCXSector">
          <tr>
            <th>IdSector</th>
            <th>Tipo sector</th>
            <th>HC Territorial</th>
          </tr>

          <tr v-for="reporte in reportesXSector" :key="reporte.id">
            <td>{{ reporte.idSector }}</td>
            <td>{{ reporte.tipoSector }}</td>
            <td>{{ reporte.hcTerritorial }}</td>
          </tr>
        </div>

        <div v-if="mostrarTotalHCXTipo">
          <tr>
            <th>Tipo org</th>
            <th>HC</th>
          </tr>

          <tr v-for="reporte in reportesXTipoOrg" :key="reporte.id">
            <td>{{ reporte.tipo}}</td> <!-- tipo de organizacion-->
            <td>{{ reporte.valor }}</td> <!-- valor -->
          </tr>
        </div>

        <div v-if="mostrarComposicionXSector">
          <tr>
            <th>Id sector</th>
            <th>Tipo sector</th>
            <th>Id Organizacion</th>
            <th>Razon Organizacion</th>
            <th>HC Organizacion</th>
          </tr>

          <tr v-for="reporte in reportesCompSector" :key="reporte.id">
            <td>{{ reporte.idSector }}</td>
            <td>{{ reporte.tipoSector }}</td>
            <td>{{ reporte.idOrganizacion }}</td>
            <td>{{ reporte.razonOrganizacion }}</td>
            <td>{{ reporte.hcOrganizacion }}</td>
          </tr>
        </div>

        <div v-if="mostrarComposicionXTipoOrg">
          <tr>
            <th>Id Organizacion</th>
            <th>Razon Organizacion</th>
            <th>HC Organizacion</th>
          </tr>

        <tr v-for="reporte in reportesCompTipo" :key="reporte.id">
          <td>{{ reporte.idOrganizacion }}</td>
          <td>{{ reporte.razonOrganizacion }}</td>
          <td>{{ reporte.hcOrganizacion }}</td>
        </tr>
     </div>
      </table>
    </div>

    <div class="RegistroTrayecto">

      <div class="RegistroTramo">
        <input class="reportebtn" type="submit" value="HC total X sector territorial" @click="calcularHCXSector()">
      </div>

      <div class="RegistroTramo">
        <input class="reportebtn" type="submit" value="HC total X tipo de Organización" @click="calcularHCXtipoOrg()">
      </div>

      <div class="RegistroTramo">
        <input class="reportebtn" type="submit" value="Composición HC total X sector territorial" @click="mostrarFormSector = !mostrarFormSector; mostrarFormTipoOrg = false">

        <div v-if="mostrarFormSector">
          <from>
            <label for="formFile" class="form-label">Sector territorial: </label>
            <input type="text" name="text" id="text" v-model="sector">
            <input class="reportebtn" type="button" value="Calcular" @click="calcularHCCompXSector()">
            <br>
          </from>
        </div>

      </div>

      <div class="RegistroTramo">
        <input class="reportebtn" type="submit" value="Composición HC total X tipo organizacion" @click="mostrarFormTipoOrg = !mostrarFormTipoOrg; mostrarFormSector = false">

        <div v-if="mostrarFormTipoOrg">
          <from>
            <label for="formFile" class="form-label">Tipo Organización: </label>
            <input type="text" name="text" id="text" v-model="tipoOrg">
            <input class="reportebtn" type="button" value="Calcular" @click="calcularHCCompXTipoOrg()">
            <br>
          </from>
        </div>

      </div>
    </div>


    <!--Waves Container-->
    <div>
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
import reporteService from "@/services/reporteService";

export default {
  name: "VisualizarReportes",
  data() {
    return {
      mostrarTotalHCXSector: false,
      mostrarTotalHCXTipo: false,
      mostrarComposicionXSector: false,
      mostrarComposicionXTipoOrg: false,
      mostrarFormSector: false,
      mostrarFormTipoOrg: false,
      reportesXSector: [],
      reportesXTipoOrg: [],
      reportesCompSector: [],
      reportesCompTipo: [],
      sector: '',
      tipoOrg: ''
    };

  },
  methods: {
    cerrarSesion: function () {
      cerrarSesionService.cerrarSesion(localStorage.getItem('token'))
      localStorage.removeItem('token');
      this.$router.push('/')
    },
    limpiarReportes: function () {
      this.reportesXSector = [];
      this.reportesXTipoOrg = [];
      this.reportesCompSector = [];
      this.reportesCompTipo = [];
      this.mostrarTotalHCXTipo = false;
      this.mostrarTotalHCXSector = false;
      this.mostrarComposicionXSector = false;
      this.mostrarComposicionXTipoOrg = false;
    },
    calcularHCXSector: function () {
      reporteService.calcularHCXSector(localStorage.getItem('token'))
        .then(response => {
          this.reportesXSector = response.data.lista;
          this.mostrarTotalHCXSector = true;
          this.mostrarTotalHCXTipo = false;
          this.mostrarComposicionXSector = false;
          this.mostrarComposicionXTipoOrg = false;
        })
        .catch(error => {
          this.mostrarTotalHCXSector = false;
          this.mostrarTotalHCXTipo = false;
          this.mostrarComposicionXSector = false;
          this.mostrarComposicionXTipoOrg = false;
          console.log(error);
        });
    },
    calcularHCXtipoOrg: function (){
      reporteService.calcularHCXtipoOrg(localStorage.getItem('token'))
          .then(response => {
            this.reportesXTipoOrg = response.data.lista;
            this.mostrarTotalHCXSector = false;
            this.mostrarTotalHCXTipo = true;
            this.mostrarComposicionXSector = false;
            this.mostrarComposicionXTipoOrg = false;
          })
          .catch(error => {
            this.mostrarTotalHCXSector = false;
            this.mostrarTotalHCXTipo = false;
            this.mostrarComposicionXSector = false;
            this.mostrarComposicionXTipoOrg = false;
            console.log(error);
          });
    },
    calcularHCCompXSector: function (){
      reporteService.calcularHCCompXSector(localStorage.getItem('token'), this.sector)
          .then(response => {
            this.reportesCompSector = response.data.lista;
            this.mostrarTotalHCXSector = false;
            this.mostrarTotalHCXTipo = false;
            this.mostrarComposicionXSector = true;
            this.mostrarComposicionXTipoOrg = false;
          })
          .catch(error => {
            this.mostrarTotalHCXSector = false;
            this.mostrarTotalHCXTipo = false;
            this.mostrarComposicionXSector = false;
            this.mostrarComposicionXTipoOrg = false;
            console.log(error);
          });
    },
    calcularHCCompXTipoOrg: function (){
      reporteService.calcularHCCompXTipoOrg(localStorage.getItem('token'), this.tipoOrg)
          .then(response => {
            this.reportesCompTipo = response.data.lista;
            this.mostrarTotalHCXSector = false;
            this.mostrarTotalHCXTipo = false;
            this.mostrarComposicionXSector = false;
            this.mostrarComposicionXTipoOrg = true;
          })
          .catch(error => {
            this.mostrarTotalHCXSector = false;
            this.mostrarTotalHCXTipo = false;
            this.mostrarComposicionXSector = false;
            this.mostrarComposicionXTipoOrg = false;
            console.log(error);
          });
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

@import url(//fonts.googleapis.com/css?family=Lato:300:400);

.bodyReportes {
  margin-top: -90px;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 68px;
}

p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
  color: #333333;
}

.header {
  position: relative;
  background: linear-gradient(25deg, rgba(38, 255, 0, 0.278), rgb(51, 193, 0) 100%);
  color: white
}

.logo {
  width: 50px;
  fill: white;
  padding-right: 15px;
  display: inline-block;
  vertical-align: middle;
}

.inner-header {
  height: 30vh;
  width: 100%;
  margin-top: 90px;
}

.flex {
  /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: rgb(255, 255, 255);
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

/* TRAYECTOS */
.header .RegistroTrayecto {
  width: 59.6%;
  margin: 0 auto;
  margin-top: 4vh;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 1.05s;
  font-size: 25px;
  color: black;
  /**/
}

.header .RegistroEspacio,
.header .RegistroTramo {
  width: 90%;
  margin: 0 auto;
  margin-top: 4vh;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 1.05s;
  font-size: 25px;
  color: black;
}

* {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
}

/*espacios para completar*/
input[type=text],
input[type=date],
input[type=range] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus,
input[type=date]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* boton "Iniciar Sesión" */
.reportebtn,
.botonAgregarEspacio {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  padding: 16px 20px;
  margin: 8px 0;
  border-radius: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: 0px solid #000101;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  font-size: 30px;
}

.reportebtn:hover,
.botonAgregarEspacio:hover {
  opacity: 1;
}

/* Para el color gris de los formularios */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}

select {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

/*slider*/
input[type=range] {
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  position: sticky;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #ac51b5;
  border-radius: 25px;
  border: 0px solid #000101;
}

input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: #65001c;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -3.6px;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: green;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: green;
  border-radius: 25px;
  border: 0px solid #000101;
}

input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: #65001c;
  cursor: pointer;
}

input[type=range]::-ms-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  border-width: 39px 0;
  color: transparent;
}

input[type=range]::-ms-fill-lower {
  background: green;
  border: 0px solid #000101;
  border-radius: 50px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}

input[type=range]::-ms-fill-upper {
  background: green;
  border: 0px solid #000101;
  border-radius: 50px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}

input[type=range]::-ms-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: #65001c;
  cursor: pointer;
}

input[type=range]:focus::-ms-fill-lower {
  background: green;
}

input[type=range]:focus::-ms-fill-upper {
  background: green;
}

.range-slider__values {
  margin-left: 30px;
  letter-spacing: 10px;
}

/* CAJA DE ESPACIOS */

.header .cajaDeTrayectos, .header .cajaDeEspacios {
  width: 90%;
  margin: 0 auto;
  margin-top: 4vh;
  background-color: #fff;
  padding: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 1.05s;
  font-size: 35px;
  color: black;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.container {
  max-width: 960px;
  padding-top: 120px;
  margin: 0 auto;
}

.containerNavBar {
  max-width: 960px;
  display: flex;
  justify-content: space-evenly;
  /*background-color: #7ab34a;*/
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
}

.listaNav {
  margin-top: -20px;
}

.listaNav li {
  font-size: 20px;
}

.containerNavBar li a {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  display: block;
}

.containerNavBar li a:hover {
  background-color: #668580;
}

.cerrarReporte{
  position: relative;
  bottom: 30px;
  left: 750px;
}

.repoTitulo{
  font-size: 50px;
  font-weight: bold;
}

.closebtn{
  cursor: pointer;
  padding-left: 85%;
}

/* USER LIST TABLE */
.user-list tbody td > img {
  position: relative;
  max-width: 50px;
  float: left;
  margin-right: 15px;
}
.user-list tbody td .user-link {
  display: block;
  font-size: 1.25em;
  padding-top: 3px;
  margin-left: 60px;
}
.user-list tbody td .user-subhead {
  font-size: 0.875em;
  font-style: italic;
}

/* TABLES */
.table {
  border-collapse: separate;
  margin: 0 auto;

  /* dar estilo lindo a la tabla */
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;

}

.table tbody > tr > td {
  font-size: 0.875em;
  background: linear-gradient(to bottom, rgb(182, 244, 146), rgb(51, 139, 147)); /* fondo de las celdas*/
  border-top: 10px solid linear-gradient(to bottom, rgb(182, 244, 146), rgb(51, 139, 147)); /* sombra superior de las celdas*/
  vertical-align: middle;
  padding: 12px 8px;
}
.table tbody > tr > td:first-child,
.table thead > tr > th:first-child {
  padding-left: 20px;
}

.table thead > tr > th > a span {
  color: #344644;
}
.table thead > tr > th > a span:after {
  content: "\f0dc";
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  margin-left: 5px;
  font-size: 0.75em;
}
.table thead > tr > th > a.asc span:after {
  content: "\f0dd";
}
.table thead > tr > th > a.desc span:after {
  content: "\f0de";
}
.table thead > tr > th > a:hover span {
  text-decoration: none;
  color: #2bb6a3;
  border-color: #2bb6a3;
}
.table.table-hover tbody > tr > td {
  -webkit-transition: background-color 0.15s ease-in-out 0s;
  transition: background-color 0.15s ease-in-out 0s;
}
.table tbody tr td .call-type {
  display: block;
  font-size: 0.75em;
  text-align: center;
}
.table tbody tr td .first-line {
  line-height: 1.5;
  font-weight: 400;
  font-size: 1.125em;
}
.table tbody tr td .first-line span {
  font-size: 0.875em;
  color: #969696;
  font-weight: 300;
}
.table tbody tr td .second-line {
  font-size: 0.875em;
  line-height: 1.2;
}
.table a.table-link {
  margin: 0 5px;
  font-size: 1.125em;
}
.table a.table-link:hover {
  text-decoration: none;
  color: #2aa493;
}
.table a.table-link.danger {
  color: #fe635f;
}
.table a.table-link.danger:hover {
  color: #dd504c;
}


</style>