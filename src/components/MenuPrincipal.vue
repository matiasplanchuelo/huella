<template>

  <header class="headMenu">
    <nav class="navMenu">
      <div class="containerMenu">
        <div class="logoMenu"><a href="#">MI IMPACTO AMBIENTAL</a></div>
        <ul v-if="isAdmin" class="ulMenu"> <!-- Si es super admin -->
          <li> <RouterLink to="/MenuPrincipal">Home</RouterLink> </li>
          <li> <RouterLink to="/VisualizarUsuarios">Ver Usuarios</RouterLink> </li>
          <li> <RouterLink to="/VisualizarReportes">Ver Reportes</RouterLink> </li>
          <li> <RouterLink to="/DarAltaOrgYAreas">Alta org y areas</RouterLink> </li>
          <li> <RouterLink to="/CrearSectorTerritorial">Crear sector territorial</RouterLink> </li>
          <li> <RouterLink to="/VincularSectores">Vincular Sector</RouterLink> </li>
          <li> <RouterLink to="/DarAltaMedioTransporte">Alta medio de transporte</RouterLink> </li>
          <li>
            <RouterLink to="/VincularParadas">Vincular Paradas</RouterLink>
          </li>
          <li> <RouterLink to="/" @click="cerrarSesion">Cerrar sesión</RouterLink> </li>
        </ul>
        <ul v-if="isOrgAdmin" class="ulMenu"> <!-- Si es admin de org -->
          <li> <RouterLink to="/MenuPrincipal">Home</RouterLink> </li>
          <li> <RouterLink to="/RegistrarMediciones">Registrar Mediciones</RouterLink></li>
          <li> <RouterLink to="/DarAltaContactos">Alta Contactos</RouterLink> </li>
          <li> <RouterLink to="/VincularMiembroXOrg">Vincular Miembros</RouterLink> </li>
          <li> <RouterLink to="/" @click="cerrarSesion">Cerrar sesión</RouterLink> </li>
        </ul>
        <ul v-if="isUser" class="ulMenu"> <!-- Si no es admin -->
          <li> <RouterLink to="/MenuPrincipal">Home</RouterLink> </li>
          <li> <RouterLink to="/Calculadora">Calculadora</RouterLink> </li>
          <li> <RouterLink to="/RegistrarTrayectos">Registrar Trayectos</RouterLink> </li>
          <li> <RouterLink to="/VincularConOrg">Vincular Org</RouterLink> </li>
          <li> <RouterLink to="/GuiaRecomendaciones">Recomendaciones</RouterLink> </li>
          <li> <RouterLink to="/" @click="cerrarSesion">Cerrar sesión</RouterLink> </li>
        </ul>
      </div>
    </nav>
  </header>

  <body>

  <div class="headerLanding">
    
    <!--Content before waves-->
    <section class="inner-header flex">
      <img class="imagenLogo" src="../assets/logo.png" alt="">
      <h1 class="header-title">MI IMPACTO AMBIENTAL</h1>

      <div class="contenedorBienvenido">
        <h1 class="titulo-principal">BIENVENIDO</h1>
      </div>
    </section>

    <section class="headerPreg">
      <h1 class="preguntas">Q: ¿Por qué comenzamos con este proyecto?</h1>
      <h2 class="texto">A: /////////////////////////////////////////////////////////////////////////////////////////</h2>
      <br><br>
      <h1 class="preguntas">Q: ¿Qué esperamos conseguir?</h1>
      <h2 class="texto">A: /////////////////////////////////////////////////////////////////////////////////////////</h2>
      <br><br>
      <h1 class="preguntas">Q: ¿Quiénes somos?</h1>
      <h2 class="texto">A: /////////////////////////////////////////////////////////////////////////////////////////</h2>
      <br><br>
      <h1 class="preguntas">Q: ¿Cuáles son nuestros objetivos?</h1>
      <h2 class="texto">A: /////////////////////////////////////////////////////////////////////////////////////////</h2>
      <br><br><br><br>
    </section>

    <!--Waves Container-->
    <div>
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
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
import menuPrincipalService from "@/services/menuPrincipalService";

export default {
  name: "MenuPrincipal",
  data() {
    return {
      rol: '',
      isAdmin: false,
      isOrgAdmin: false,
      isUser: false,
    };
  },
  methods: {
    cerrarSesion: function () {
      cerrarSesionService.cerrarSesion(localStorage.getItem('token'))
      localStorage.removeItem('token');
      this.$router.push('/')
    }
  },
  mounted() {
    menuPrincipalService.obtenerRol(localStorage.getItem('token')).then(response => {
      this.rol = response.data;
      if (this.rol == "SUPER_ADMIN") {
        this.isAdmin = true;
        this.isOrgAdmin = false;
        this.isUser = false;
      } else if (this.rol == "ADMIN_ORG") {
        this.isAdmin = false;
        this.isOrgAdmin = true;
        this.isUser = false;
      } else if (this.rol == "USUARIO"){
        this.isAdmin = false;
        this.isOrgAdmin = false;
        this.isUser = true;
      } else {
        window.alert('No se pudo obtener el rol del usuario');
        this.cerrarSesion();
      }
    })
  }
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);
/* NAVBAR */
.navMenu{
  background-color: #222222;
  height: auto;
  justify-content: center;
  transition: all 0s ease-out;
}
.headMenu{
  background-color: #222222;
  height: auto;
  justify-content: center;
  transition: all 0s ease-out;
  text-decoration: none;  
}
.logoMenu{
  display: flex;
  align-items: center;
  justify-content: center;
  color:  rgb(31, 200, 175);
  font-size: 25px;
}
.navMenu .ulMenu{
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  font-size: 20px;
  min-height: 75px;
  background-color: #222222;
}
.navMenu li{
  background-color: #222222;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  font-size: 20px;
  min-height: 70px;
}
.navMenu li:hover{
  background-color: #3b3b3b;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  font-size: 25px;
  min-height: 70px;
}
.navMenu a{
  align-items: center;
  color: #ffffff;
  padding: 7px 15px;
  text-decoration: none;
  transition: all 0s ease-out;
  font-weight: bold;
  font-family: Tahoma;
}
.navMenu a:hover{
  align-items: center;
  color: #ffffff;
  font-weight: bold;
}
.navMenu.active{
  align-items: center;
  background-color: #b3fff9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
.navMenu.active a{
  align-items: center;
  color: rgb(255, 255, 255);
}
.navMenu.active .containerMenu{
  align-items: center;
  padding: 10px 0;
}
.navMenu a.current,
.navMenu a:hover{
  align-items: center;
  color: #ffffff;
  font-weight: bold;
}

/****************************************************/

.headerLanding {
  position:relative;
  text-align:center;
  background: linear-gradient(25deg, rgba(38, 255, 0, 0.278), rgb(51, 193, 0) 100%);
  color:white;
  margin-top: -17px;
}
.logoGeneral {
  align-items: center;
  margin-bottom: 25px;
  justify-content: justify;
  text-align: center;
  color: white;
  font-size: 35px;
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

.logoGeneral{
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  font-weight: bold;
  font-family: Tahoma;
  /*centrar */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

}

h2 {
  font-family: 'Lato', sans-serif;
  font-weight:300;
  letter-spacing: 2px;
  font-size:30px;
  font-weight: bold;
  color: rgb(137, 230, 103);
}
p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size:14px;
  color: #333333;
}

.header {
  position:relative;
  text-align:center;
  background: linear-gradient(25deg, rgba(38, 255, 0, 0.278), rgb(51, 193, 0) 100%);
  color:white;
}

.headerPreg {
  position:relative;
  text-align:center;
  color: rgb(255, 255, 255);
  font-size: 10px;
  margin-top: -250px;
}

.preguntas {
  position:relative;
  text-align:center;
  color:white;
}

.texto {
  position:relative;
  text-align:center;
  color: rgb(255, 255, 255);
  font-size: 15px;
}

.logo {
  width:50px;
  fill:white;
  padding-right:15px;
  display:inline-block;
  vertical-align: middle;
}

.inner-header {
  height: 65vh;
  width: 100%;
  margin: 0;
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

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}

.content {
  position:relative;
  height:20vh;
  text-align:center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
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
    transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .content {
    height:30vh;
  }
  h1 {
    font-size:24px;
  }
}

/* LANDING PAGE*/

.header .contenedor-base {
    width: 100%;
    margin: 0 auto;
    background-color: red;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
}

.imagenLogo {
    padding-top: 80px;
    width: 250px;
    height: 250px;
}

.header .contenedorBienvenido {
    /*centrar*/
    margin: 0 auto;
    width: 25%;
    /*mover div a la izquierda un poco*/
    margin-left: 50%;
    margin-right: 50%;
}

.header .contenedorBienvenido .contenedor-base{
    margin: 0 auto;
    width: 100%;
}

.imagenLogo{
  margin-top: -250px;
}

</style>