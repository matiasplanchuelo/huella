<template>
  <header class="headMenu">
    <nav class="navMenu">
      <div class="containerMenu">
        <div class="logoMenu"><a href="#">MI IMPACTO AMBIENTAL</a></div>
        <ul class="ulMenu">
          <li>
            <RouterLink to="/MenuPrincipal">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/Calculadora">Calculadora</RouterLink>
          </li>
          <li>
            <RouterLink to="/RegistrarTrayectos">Registrar Trayectos</RouterLink>
          </li>
          <li>
            <RouterLink to="/VincularConOrg">Vincular Org</RouterLink>
          </li>
          <li>
            <RouterLink to="/GuiaRecomendaciones">Recomendaciones</RouterLink>
          </li>
          <li>
            <RouterLink to="/" @click="cerrarSesion">Cerrar sesión</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <body class="bodyRegTray">

  <div class="headerOlas">

    <!--Content before waves-->
    <div class="inner-header flex">

      <h1>Agregar nuevos trayectos</h1>

    </div>

    <!--TRAYECTOS-->
    <form class="RegistroTrayecto">
      <label for="text">Razon Social de la Organización</label>
      <input type="text" name="text" id="text" v-model="razonSocial"><br>

      <!--FECHA DE INICIO-->
      <label for="text">Fecha de Inicio</label>
      <input type="month" id="inicio" name="fechaDeInicio" v-model="fechaInicio">
      <br>

      <!--REGULARIDAD-->
      <label for="text">Dias por semana</label><br>
      <select name="diaSem" id="diaSem" v-model="peso">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
      <br>

      <!--TRAMOS-->
      <label for="text">Tramo</label>
      <div class="RegistroTramo">

        <!--MEDIO DE TRANSPORTE-->
        <label for="text">Medio de Transporte</label>
        <select name="tipoTransp" id="tipoTransp" v-model="medioTransporte">
          <option value="NoContaminante">No Contaminante</option>
          <option value="Publico">Transporte Público</option>
          <option value="VehiculoParticular">Transporte Particular</option>
        </select>
        <br>

        <div v-if="medioTransporte == 'VehiculoParticular'">
          <label for="text">Tipo de Vehiculo</label>
          <select name="tipoVehiculo" id="tipoVehiculo" v-model="tipoTransporte">
            <option value="auto">Auto</option>
            <option value="camioneta">Camioneta</option>
            <option value="camion">Camión</option>
            <option value="moto">Moto</option>
          </select>
          <br>
        </div>
        <div v-else-if="medioTransporte == 'Publico'">
          <label for="text">Tipo de Vehiculo</label>
          <select name="tipoVehiculo" id="tipoVehiculo" v-model="tipoTransporte">
            <option value="colectivo">Colectivo</option>
            <option value="tren">Tren</option>
            <option value="subte">Subte</option>
          </select>
          <br>

          <label for="text">Linea</label>
          <input type="text" name="text" id="text" v-model="linea">
          <br>
        </div>
        <div v-else-if="medioTransporte == 'NoContaminante'">
          <label for="text">Tipo de Vehiculo</label>
          <input type="text" name="tipoVehiculo" id="tipoVehiculo" v-model="tipoTransporte">
          <br>
        </div>

        <!--PASAJEROS-->
        <label for="text">Pasajeros</label>
        <input type="text" name="text" id="text"
               placeholder="Documentos de los pasajeros separados por comas ','" v-model="pasajeros"><br>
        <br>

        <!--ESPACIOS-->
        <label for="text">Espacios</label>
        <div class="RegistroEspacio">
          <label for="text">Tipo de Espacio</label>
          <select name="tipoEspacio" id="tipoEspacio" v-model="tipoEspacio">
            <option value="Inicio">Inicio</option>
            <option value="Fin">Fin</option>
          </select><br>
          <label for="text">Pais</label>
          <input type="text" name="text" id="text" v-model="pais"><br>
          <label for="text">Provincia</label>
          <input type="text" name="text" id="text" v-model="provincia"><br>
          <label for="text">Municipio</label>
          <input type="text" name="text" id="text" v-model="municipio"><br>
          <label for="text">Localidad</label>
          <input type="text" name="text" id="text" v-model="localidad"><br>
          <label for="text">Calle</label>
          <input type="text" name="text" id="text" v-model="calle"><br>
          <label for="text">Altura</label>
          <input type="text" name="text" id="text" v-model="altura"><br>
          <input class="botonAgregarEspacio" type="button" value="Agregar Espacio" @click="agregarEspacio">

          <!--CAJA DE ESPACIOS-->
          <div class="cajaDeEspacios"> Aqui se añaden los espacios
            <div class="espacio" v-for="espacio in espacios" v-bind:key="espacio.tipo">
              <p><strong> {{ espacio.tipoEspacio }} </strong>: {{ espacio.calle }} {{ espacio.altura }},
                {{ espacio.localidad }}, {{ espacio.municipio }}, {{ espacio.provincia }}</p>
            </div>
          </div>
        </div>

        <!--BOTON AGREGAR TRAMO-->
        <input class="botonAgregarTramo" type="button" value="Agregar Tramo" @click="agregarTramo">

        <!--CAJA DE TRAMOS-->
        <div class="cajaDeTramos"> Aqui se añaden los tramos
          <div class="tramo" v-for="tramo in tramos" v-bind:key="tramo.tipo">
            <p> {{ tramo.medioTransporte }}, {{ tramo.pasajeros }}, {{ tramo.inicio }}, {{ tramo.fin }}</p>
          </div>
        </div>

      </div>

      <br>
      <!--BOTON AGREGAR TRAYECTO-->
      <input class="btnTray" type="button" value="Agregar Trayecto" @click="agregarTrayecto">

    </form>

    <!--CAJA DE TRAYECTOS-->
    <div class="cajaDeTrayectos"> Aqui se añaden los trayectos
      <div class="trayecto" v-for="trayecto in trayectos" v-bind:key="trayecto.tipo">
        <p> {{ trayecto.idTrayecto }}, {{ trayecto.fechaInicio }}, {{ trayecto.peso }}, {{
            trayecto.tramos
          }}<span class="closeTrayecto" @click="this.idTrayecto = trayecto.idTrayecto; terminarTrayecto(this.idTrayecto)"> X </span>  </p>
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
  </div>
  <!--Header ends-->
  </body>

</template>

<script>
import cerrarSesionService from "@/services/cerrarSesionService";
import registrarTrayectosService from "@/services/registrarTrayectosService";

export default {
  name: "RegistrarTrayectos",
  data() {
    return {
      espacios: [],
      tramos: [],
      trayectos: [],
      razonSocial: "",
      fechaInicio: "",
      peso: "",
      medioTransporte: "",
      tipoTransporte: "",
      pasajeros: "",
      tipoEspacio: "",
      pais: "",
      provincia: "",
      municipio: "",
      localidad: "",
      calle: "",
      altura: "",
      idTrayecto: "",
      linea: ""
    };
  },
  methods: {
    cerrarSesion: function cerrarSesion() {
      cerrarSesionService.cerrarSesion(localStorage.getItem('token'))
      localStorage.removeItem('token');
      this.$router.push('/')
    },
    agregarEspacio: function agregarEspacio() {
      var foundIndex = this.espacios.findIndex(x => x.tipoEspacio == this.tipoEspacio); // busco si ya existe un punto de inicio o de fin cargado
      if (this.espacios[foundIndex] != null) { // si existe actualizo el que ya existia
        this.espacios[foundIndex].pais = this.pais;
        this.espacios[foundIndex].provincia = this.provincia;
        this.espacios[foundIndex].municipio = this.municipio;
        this.espacios[foundIndex].localidad = this.localidad;
        this.espacios[foundIndex].calle = this.calle;
        this.espacios[foundIndex].altura = this.altura;
      } else { // si no existe lo agrego
        this.espacios.push({
          pais: this.pais,
          provincia: this.provincia,
          municipio: this.municipio,
          localidad: this.localidad,
          calle: this.calle,
          altura: this.altura,
          tipoEspacio: this.tipoEspacio,
        });
      }
    },
    agregarTramo: function agregarTramo() {
      var indiceInicio = this.espacios.findIndex(x => x.tipoEspacio == "Inicio");
      var indiceFin = this.espacios.findIndex(x => x.tipoEspacio == "Fin");
      var puntoInicio2 = this.espacios[indiceInicio]
      var puntoFin2 = this.espacios[indiceFin]

      // elimino de puntoInicio y puntoFin el atributo "tipoEspacio"
      delete puntoInicio2.tipoEspacio;
      delete puntoFin2.tipoEspacio;
      if (indiceInicio == -1 || indiceFin == -1) { // si no existe un punto de inicio o de fin cargado
        window.alert("Debe cargar un punto de inicio y un punto de fin para este tramo.");
      } else {
        let transporte = this.medioTransporte + "-" + this.tipoTransporte;
        if(this.linea != ""){
          transporte = transporte + "," + this.linea;
        }
        console.log(transporte);
        this.tramos.push({ // agrego el tramo a la lista de tramos
          pasajeros: this.pasajeros,
          medioTransporte: {
            medioTransporte: transporte
          },
          puntoInicio: puntoInicio2,
          puntoFinal: puntoFin2,
        });
        this.espacios = []; // limpio la lista de espacios
        this.linea = "";
      }
    },
    agregarTrayecto: function () {
      const trayecto = {
        razonSocial: this.razonSocial,
        fechaInicio: this.fechaInicio,
        peso: this.peso,
        listaTramos: this.tramos
      }
      this.trayectos.push(trayecto); // agrego el trayecto a la lista de trayectos
      this.tramos = []; // limpio la lista de tramos
      registrarTrayectosService.registrarTrayecto(trayecto);
    },
    terminarTrayecto: function (){
      registrarTrayectosService.terminarTrayecto(this.idTrayecto);
      this.refreshTrayectos();
    },
    refreshTrayectos: function (){
      registrarTrayectosService.getTrayectosVigentes(localStorage.getItem('token'))
      .then(response => {
        this.trayectos = response.data.lista;
      })
      .catch(error => {
        console.log(error);
      });
    }
  },
  mounted: function mounted() { // para que se ejecute cuando se carga la pagina
    this.refreshTrayectos();
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

.bodyRegTray {
  margin-top: -90px;
}

/********************************/

h1 {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 48px;
}

p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
  color: #333333;
}

.inner-header {
  height: 30vh;
  width: 100%;
  margin-top: 90px;
}


/* TRAYECTOS */
.headerOlas .RegistroTrayecto {
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

.headerOlas .RegistroEspacio,
.headerOlas .RegistroTramo {
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

/*espacios para completar*/
input[type=text],
input[type=date],
input[type=range],
input[type=month] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus,
input[type=date]:focus,
input[type=month]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* boton "Iniciar Sesión" */
.botonAgregarTramo,
.btnTray,
.botonAgregarEspacio {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  font-size: 20px;
}

.botonAgregarTramo:hover,
.btnTray:hover,
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

/* CAJA DE ESPACIOS */

.headerOlas .cajaDeTrayectos, .headerOlas .cajaDeEspacios, .cajaDeTramos {
  width: 90%;
  margin: 0 auto;
  margin-top: 4vh;
  background-color: #fff;
  padding: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 1.05s;
  font-size: 25px;
  color: black;
}

.closeTrayecto{
  cursor: pointer;
  padding-left: 85%;
}

</style>