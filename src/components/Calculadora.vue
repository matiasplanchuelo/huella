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

  <body class="calcu">

  <div class="headerCalcu">

    <!--Content before waves-->
    <h1 class="calculadoraTitulo">Calculadora</h1>
    <div class="containerCalculadora">

      <div class="calculadora">
        <div class="display">
          <div class="resultado" v-if="existeValor">{{valor}}</div>
        </div>

        <button class="buttonCalc" @click="mostrarHCAnual = !mostrarHCAnual;mostrarHCMensual = false;mostrarImpacto = false;mostrarIndicador = false; mostrarHCSectorTerritorial = false">HC Anual Org</button>

        <button class="buttonCalc" @click=" mostrarHCMensual = !mostrarHCMensual;mostrarHCAnual = false;mostrarImpacto = false;mostrarIndicador = false; mostrarHCSectorTerritorial = false">HC Mensual Org</button>

        <button class="buttonCalc" @click="mostrarImpacto = !mostrarImpacto;mostrarHCMensual = false;mostrarHCAnual = false;mostrarIndicador = false; mostrarHCSectorTerritorial = false">Impacto personal</button>

        <button class="buttonCalc" @click="mostrarIndicador = !mostrarIndicador;mostrarHCMensual = false;mostrarImpacto = false;mostrarHCAnual = false; mostrarHCSectorTerritorial = false">Indicador</button>

        <button class="buttonCalc" @click="mostrarHCSectorTerritorial= !mostrarHCSectorTerritorial;mostrarHCMensual = false;mostrarImpacto = false;mostrarIndicador = false; mostrarHCAnual = false">HC Total territorial</button>

      </div>

      <div class="opcionesBotones">
        <div v-if="mostrarHCAnual">
          <div class="mostrarHC">
            <div class="col">
              <form>
                <label for="formFile" class="form-label">Organización: </label>
                <input type="text" name="text" id="text" v-model="nombreOrganizacion">
                <br>

                <label for="formFile" class="form-label">Año: </label>
                <input type="text" name="text" id="text" v-model="año">
                <br>
                <input class="buttonOption" type="botonCalcular" value="Calcular" @click = "calcularHCAnual()">
              </form>
            </div>
          </div>
        </div>

        <div v-if="mostrarHCMensual">
          <div class="row">
            <div class="col">
              <form>
                <label for="formFile" class="form-label">Organización: </label>
                <input type="text" name="text" id="text" v-model="nombreOrganizacion">
                <br>

                <label for="formFile" class="form-label">Año: </label>
                <input type="text" name="text" id="text" v-model="año">
                <br>

                <label for="formFile" class="form-label">Mes: </label>
                <input type="text" name="text" id="text" v-model="mes">
                <br>

                <input class="buttonOption" type="botonCalcular" value="Submit" @click = "calcularHCMensual()">
              </form>
            </div>
          </div>
        </div>

        <div v-if="mostrarImpacto">
          <div class="row">
            <div class="col">
              <form>
                <label for="formFile" class="form-label">Organización: </label>
                <input type="text" name="text" id="text" v-model="nombreOrganizacion">
                <br>

                <label for="formFile" class="form-label">Año: </label>
                <input type="text" name="text" id="text" v-model="año">
                <br>

                <label for="formFile" class="form-label">Mes: </label>
                <input type="text" name="text" id="text" v-model="mes">
                <br>

                <input class="buttonOption" type="botonCalcular" value="Submit" @click = "calcularImpactoPersonal()">
              </form>
            </div>
          </div>
        </div>

        <div v-if="mostrarIndicador">
          <div class="row">
            <div class="col">
              <form>
                <label for="formFile" class="form-label">Organización: </label>
                <input type="text" name="text" id="text" v-model="nombreOrganizacion">
                <br>

                <label for="formFile" class="form-label">Area: </label>
                <input type="text" name="text" id="text" v-model="nombreArea">
                <br>

                <label for="formFile" class="form-label">Año: </label>
                <input type="text" name="text" id="text" v-model="año">
                <br>

                <label for="formFile" class="form-label">Mes: </label>
                <input type="text" name="text" id="text" v-model="mes">
                <br>

                <input class="buttonOption" type="botonCalcular" value="Submit" @click = "calcularIndicador()">
              </form>
            </div>
          </div>
        </div>

        <div v-if="mostrarHCSectorTerritorial">
          <div class="row">
            <div class="col">
              <form>
                <label for="formFile" class="form-label">Id Sector Territorial: </label><!--El St no tiene nombre, creo q no queda otra q hacerlo por id-->
                <input type="text" name="text" id="text" v-model="idST">
                <br>

                <label for="formFile" class="form-label">Año: </label>
                <input type="text" name="text" id="text" v-model="año">
                <br>

                <label for="formFile" class="form-label">Mes: </label>
                <input type="text" name="text" id="text" v-model="mes">
                <br>

                <input class="buttonOption" type="botonCalcular" value="Submit" @click = "calcularHCSectorTerritorial()">
              </form>
            </div>
          </div>
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
import calculadoraService from "@/services/calculadoraService";

export default {
  name: "Calculadora",
  data() {
    return {
      nombreOrganizacion: '',
      nombreArea: '',
      idST: '',
      existeValor: false,
      valor: '',
      año: '',
      mes:'',
      mostrarHCAnual: false,
      mostrarHCMensual: false,
      mostrarImpacto: false,
      mostrarIndicador: false,
      mostrarHCSectorTerritorial: false
    }
  },
  methods: {
    cerrarSesion: function () { //ok
      cerrarSesionService.cerrarSesion(localStorage.getItem('token'))
      localStorage.removeItem('token');
      this.$router.push('/')
    },
    calcularHCAnual: function () { //ok
      this.existeValor = false;
      calculadoraService.HCAnual(this.nombreOrganizacion, this.año)
        .then(response => {
          this.valor = response.data; //para mandar al front
          this.existeValor = true;
        })
        .catch(error => {
          console.log(error);
        })

      this.mostrarHCAnual = !this.mostrarHCAnual; // para cerrar el mini form
    },
    calcularHCMensual: function () {
      this.existeValor = false;
      calculadoraService.HCMensual(this.nombreOrganizacion, this.año,this.mes)
          .then(response => {
            this.valor = response.data
            this.existeValor = true;
          })
          .catch(error => {
            console.log(error); // TODO: borrar
          })
      this.mostrarHCMensual = !this.mostrarHCMensual; // para cerrar el mini form

  },

    calcularImpactoPersonal: function () {
      this.existeValor = false;
      calculadoraService.ImpactoPersonal(this.nombreOrganizacion, this.año,this.mes)
          .then(response => {
            this.valor = response.data
            this.existeValor = true;
          })
          .catch(error => {
            console.log(error); // TODO: borrar
          })
      this.mostrarImpacto = !this.mostrarImpacto; // para cerrar el mini form
  },
    calcularIndicador: function(){
      this.existeValor = false;
      calculadoraService.Indicador(this.nombreOrganizacion, this.nombreArea, this.año,this.mes)
          .then(response => {
            this.valor = response.data
            this.existeValor = true;
          })
          .catch(error => {
            console.log(error); // TODO: borrar
          })
      this.mostrarIndicador = !this.mostrarIndicador; // para cerrar el mini form
    },
    calcularHCSectorTerritorial: function(){
      this.existeValor = false;
      calculadoraService.HCSectorTerritorial(this.idST, this.año,this.mes)
          .then(response => {
            this.valor = response.data
            this.existeValor = true;
          })
          .catch(error => {
            console.log(error); // TODO: borrar
          })
      this.mostrarHCSectorTerritorial = !this.mostrarHCSectorTerritorial; // para cerrar el mini form
    }
}}
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

/* CALCULADORA */
.containerCalculadora {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.calculadora {
  display: grid;
  grid-template-columns: repeat(4, 75px);
  grid-template-rows: 160px repeat(5, 75px);
  background-color: #00916e;
  padding: 15px;
  border-radius: 32px;
  box-shadow: 15px 10px 0px 5px #00000033;
}

.display {
  grid-column: 1 / -1;
  padding: 16px;
  display: flex;
  margin: 10px 10px 20px;
  flex-direction: column;
  align-items: flex-end;
  background-color: hsla(305, 61%, 85%, 0.87);
  border-radius: 32px;
  text-align: right;
  justify-content: space-between;
  word-break: break-all;
  box-shadow: 0px 0px 0px 10px #00000033;
}

h1 {
  text-align: center;
  font-family: "Trirong", serif;
  padding-top: -10vh;
  font-size: 80px;
  color: rgb(13, 110, 62)
}

.calcu {
  margin: 0;
  margin-top: -17px;
  min-height: 100vh;
  width: auto;
}

.buttonCalc {
  position: relative;
  cursor: pointer;
  margin: 5px;
  padding: 0;
  border-radius: 32px;
  font-size: 1.5em;
  border: none;
  background-color: #00916e;
  box-shadow: 5px 5px 10px -3px #00000040, -5px -5px 15px 3px #00ffc11f;
  grid-column: span 100;
}

.buttonCalc:hover {
  background-color: #02614b;
  box-shadow: 5px 5px 10px -3px #00000040, -5px -5px 15px 3px #0f503f1f;
}

.buttonCalc:active {
  background-color: #006f54;
}

.buttonCalc:focus {
  outline: none;
}

.col-2 {
  grid-column: span 2;
}

#valor-actual {
  font-size: 1.5em;
}

#valor-anterior {
  font-size: 2em;
}

.calculadoraTitulo {
  padding-top: 150px;
  color: white;
}

/****************************************************/

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

.inner-header {
  height: 65vh;
  width: 100%;
  margin: 0;
  margin-top: 17px;
  padding: 0;
  padding-bottom: 10vh;
}

.flex { /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
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

.headerCalcu {
  position: relative;
  text-align: center;
  background: linear-gradient(25deg, rgba(38, 255, 0, 0.278), rgb(51, 193, 0) 100%);
  color: white;
  margin-top: -17px;
}

.opcionesBotones{
  background-color: #00916e;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 15px 10px 0px 5px #00000033;
  left: 65%;
  position: absolute;
  top: 31%;
}

input[type=text] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus {
  background-color: #ddd;
  outline: none;
}

.buttonOption {
  position: relative;
  cursor: pointer;
  margin: 5px;
  padding: 0;
  border-radius: 32px;
  font-size: 1.5em;
  border: none;
  background-color: #00916e;
  box-shadow: 5px 5px 10px -3px #00000040, -5px -5px 15px 3px #00ffc11f;
  grid-column: span 100;
  text-align: center;
}

.buttonOption:hover {
  background-color: #02614b;
  box-shadow: 5px 5px 10px -3px #00000040, -5px -5px 15px 3px #0f503f1f;
}

.buttonOption:active {
  background-color: #006f54;
}

.buttonOption:focus {
  outline: none;
}

.display .resultado{
  color: black;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 35px;
}

</style>