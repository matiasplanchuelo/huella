<template>

  <header class="headMenu">
    <nav class="navMenu">
      <div class="containerMenu">
        <div class="logoMenu"><a href="#">MI IMPACTO AMBIENTAL</a></div>
        <ul class="ulMenu"> <!-- Si es admin de org -->
          <li> <RouterLink to="/MenuPrincipal">Home</RouterLink> </li>
          <li> <RouterLink to="/RegistrarMediciones">Registrar Mediciones</RouterLink></li>
          <li> <RouterLink to="/DarAltaContactos">Alta Contactos</RouterLink> </li>
          <li> <RouterLink to="/VincularMiembroXOrg">Vincular Miembros</RouterLink> </li>
          <li> <RouterLink to="/" @click="cerrarSesion">Cerrar sesión</RouterLink> </li>
        </ul>
      </div>
    </nav>
  </header>

  <body class="bodyAltaContactos">

  <div class="headerAltaContactos">

    <!--Content before waves-->

    <div class="inner-header flex titulo">
      <h1>ALTA CONTACTOS</h1>
    </div>

    <form class="AltaContacto">
      <label for="text">Nombre</label>
      <input type="text" required name="text" id="text" v-model="nombre"><br>

      <label for="text">Apellido</label>
      <input type="text" required id="inicio" name="apellido" v-model="apellido">
      <br>

      <label for="text">Mail</label>
      <input type="email" required id="inicio" name="mail" v-model="mail">
      <br>

      <label for="text">Telefono</label>
      <input type="text" required id="inicio" name="telefono" v-model="telefono">
      <br>

      <label for="text">Organizacion</label>
      <select v-model="orgElegida">
        <option v-for="org in organizaciones" v-bind:key="org.idOrg">
          {{org.id + " - " + org.nombre}}
        </option>
      </select>
      <br>

      <label for="text">Quiere recibir mail</label>
      <input type="checkbox" required id="inicio" name="notificaciones" v-model="recibirMail">
      <br>

      <br>
      <!--BOTON-->
      <input class="btnAltaContactos" type="button" value="Agregar Contacto" @click="agregarContacto">

    </form>

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
import contactosService from "@/services/contactosService";
import adminOrgService from "@/services/adminOrgService";

export default {
  name: "DarAltaContactos",
  data() {
    return {
      nombre: "",
      apellido: "",
      mail: "",
      telefono: "",
      recibirMail: false,
      organizaciones: [],
      orgElegida: ""
    };
  },
  methods: {
    agregarContacto() {
      alert("Contacto agregado" + " " + this.nombre + " " + this.apellido + " " + this.mail + " " + this.telefono + " " + this.recibirMail + " " + this.organizacion);
      contactosService.agregarContacto(this.nombre, this.apellido, this.mail, this.telefono, this.recibirMail, this.orgElegida.split(" - ")[0]);
    },
    cerrarSesion: function cerrarSesion() { //OK
      cerrarSesionService.cerrarSesion(localStorage.getItem('token'))
      localStorage.removeItem('token');
      this.$router.push('/')
    },
    refreshOrganizaciones() {
      adminOrgService.obtenerOrganizaciones().then(response => {
        this.organizaciones = response.data.lista;
      })
    }
  },
  mounted: function method() {
    this.refreshOrganizaciones();
  }
}
</script>


<style scoped>
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

/********************************************************/

.headerAltaContactos {
  position: relative;
  text-align: center;
  background: linear-gradient(25deg, rgba(38, 255, 0, 0.278), rgb(51, 193, 0) 100%);
  color: white;
  margin-top: -17px;
}

.headerAltaContactos .AltaContacto {
  width: 59.6%;
  margin: 0 auto;
  margin-top: -50px;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 1.05s;
  font-size: 25px;
  color: black;
}

input[type=text],
input[type=email] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=checkbox] {
  margin-top: 16px;
  margin-left: 25px;
  width: 25px;
  height: 25px;
}

input[type=text]:focus,
input[type=email]:focus {
  background-color: #ddd;
  outline: none;
}

.btnAltaContactos {
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

.btnAltaContactos:hover {
  opacity: 1;
}

.bodyAltaContactos {
  margin-top: -19px;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 68px;
}

.titulo{
  width: 100%;
  height: 300px;
  margin-bottom: -100px;
}

select {
  width: 100%;
  padding: 5px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
</style>