<template>
  <body class="bodyLanding">

  <div class="headerLanding">

    <!--Content before waves-->
    <div class="inner-header flex">
      <img class="imagenLogo" src="../assets/logo.png" alt="">
      <h1 class="header-title">MI IMPACTO AMBIENTAL</h1>

      <div class="contenedorBienvenido">
        <h1 class="titulo-principalLanding">BIENVENIDO</h1>
        <div class="contenedor-base">
          <div class="opciones">

            <RouterLink class="button" type="button" to="/Registro" >Registro</RouterLink>

            <br>

            <RouterLink class="button" type="button" to="/InicioDeSesion">Inicio De Sesión</RouterLink>

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
export default {
  name: "LandingPage",
  methods: {
    metaInfo() {
        return {
          title: 'Huella Carbono DDS'
        }
    }
  }
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);

.bodyLanding {
  margin:0;
}

.header-title {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 50px;
}
p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size:14px;
  color: #333333;
}

.headerLanding {
  position:relative;
  text-align:center;
  background: linear-gradient(25deg, rgba(38, 255, 0, 0.278), rgb(51, 193, 0) 100%);
  color:white;
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

.headerLanding .contenedor-base {
  width: 150%;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}


.button {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #04AA6D;
  color: #FFFFFF;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  text-decoration: none;
}

.button:hover{
  background-color: #fff;
  color: #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.imagenLogo {
  padding-top: 80px;
  align-items: center;
  width: 250px;
  height: 250px;
}

.headerLanding .contenedorBienvenido {
  /*centrar*/
  margin: 0 auto;
  width: 40%;
  align-items: center;
  /*mover div a la izquierda un poco*/
  margin-left: 40%;
  margin-right: 40%;
}

.headerLanding .contenedorBienvenido .contenedor-base{
  margin: 0 auto;
  width: 100%;
}

.titulo-principalLanding{
  font-size: 30px;
  color: #fff;
}

</style>