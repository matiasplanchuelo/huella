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

  <body>

  <div class="headerVincularMiembros">

    <!--Content before waves-->

    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="main-box clearfix">
            <div class="table-responsive">
              <table class="table user-list">

                <thead> <!-- CABECERO DE LA TABLA -->
                <tr>
                  <th><span style="font-size:25px;font-weight:bold;">Id</span> </th>
                  <th><span style="font-size:25px;font-weight:bold;">Usuario</span> </th>
                  <th><span style="font-size:25px;font-weight:bold;">Organizacion</span> </th>
                  <th><span style="font-size:25px;font-weight:bold;">Areas</span> </th>
                  <th>  </th>
                </tr>
                </thead>

                <tbody>

                <tr v-for="user in usuarios" v-bind:key = "user.idUsuario">
                  <td> <!-- columna de id de usuario -->
                    <img src="../assets/personita.png" height="" width="" alt="">
                    <p class="user-link"> <strong> {{user.id}} </strong></p>
                  </td>

                  <td> <!-- columna de mail de usuario -->
                    <p class="usuarios"> <strong> {{user.usuario}}</strong></p>
                  </td>

                  <td>
                  <label for="text">Organizacion</label>
                  <select v-model="user.orgElegida" @click="refreshAreas(user.orgElegida)">
                    <option v-for="org in organizaciones" v-bind:key="org.idOrganizacion">
                      {{org.idOrganizacion + " - " + org.razonSocial}}
                    </option>
                  </select>
                  </td>

                  <td>
                  <label for="text">Area</label>
                  <select v-model="user.areaElegida">
                    <option v-for="area in areas" v-bind:key="area.idArea">
                      {{area.idArea + " - " + area.nombreArea}}
                    </option>
                  </select>
                  </td>

                  <td style="width: 20%;" class="botones"> <!-- columna de botones -->
                    <button type="button" class="btn btn-sm" @click="vincularMiembro(user.id, user.orgElegida, user.areaElegida)">Vincular Miembro a Org</button>
                  </td>

                </tr>

                </tbody>

              </table>
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
import adminService from '@/services/adminService';
import cerrarSesionService from "@/services/cerrarSesionService";
import adminOrgService from "@/services/adminOrgService";
import vinculoSectoresService from "@/services/vinculoSectoresService";

export default {
  name: "VincularMiembroXOrg",
  data() {
    return {
      usuarios: [],
      organizaciones: [],
      orgElegida: '',
      areas: [],
      areaElegida: '',
      idUsuario: ''
    };
  },
  methods: {
    refreshUsuarios() {
      adminService.obtenerUsuarios().then(response => {
        this.usuarios = response.data.lista;
      });
    },
    refreshOrganizaciones() {
      vinculoSectoresService.obtenerOrganizaciones().then(response => {
        this.organizaciones = response.data.lista;
      })
    },
    refreshAreas(org) {
      adminOrgService.obtenerAreas(org.split(" - ")[0]).then(response => {
        this.areas = response.data.lista;
      })
    },
    vincularMiembro(idUsuario, orgElegida, areaElegida) {
      adminOrgService.vincularMiembro(idUsuario,orgElegida.split(" - ")[0], areaElegida.split(" - ")[0]).then(response => {
        console.log(response);
        alert("Miembro vinculado con exito");
      })
    },
    cerrarSesion() {
      cerrarSesionService.cerrarSesion(localStorage.getItem('token'))
      localStorage.removeItem("token");
      this.$router.push("/");
    }
  },
  mounted: function mounted() {
    this.refreshUsuarios();
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
  margin-top: 550px;
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

/*******************************************************/

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

.table-products tbody > tr > td {
  background: none;
  border: none;
  border-bottom: 1px solid #ebebeb;
  -webkit-transition: background-color 0.15s ease-in-out 0s;
  transition: background-color 0.15s ease-in-out 0s;
  position: relative;
}
.table-products tbody > tr:hover > td {
  text-decoration: none;
  background-color: #f6f6f6;
}
.table-products .name {
  display: block;
  font-weight: 600;
  padding-bottom: 7px;
}
.table-products .price {
  display: block;
  text-decoration: none;
  width: 50%;
  float: left;
  font-size: 0.875em;
}
.table-products .price > i {
  color: #8dc859;
}
.table-products .warranty {
  display: block;
  text-decoration: none;
  width: 50%;
  float: left;
  font-size: 0.875em;
}
.table-products .warranty > i {
  color: #f1c40f;
}
.table tbody > tr.table-line-fb > td {
  background-color: #9daccb;
  color: #262525;
}
.table tbody > tr.table-line-twitter > td {
  background-color: #9fccff;
  color: #262525;
}
.table tbody > tr.table-line-plus > td {
  background-color: #eea59c;
  color: #262525;
}
.table-stats .status-social-icon {
  font-size: 1.9em;
  vertical-align: bottom;
}
.table-stats .table-line-fb .status-social-icon {
  color: #556484;
}
.table-stats .table-line-twitter .status-social-icon {
  color: #5885b8;
}
.table-stats .table-line-plus .status-social-icon {
  color: #a75d54;
}

.btn {
  border-radius: 5px;
  /*Atributos para dejar lindo un boton*/
  border: 5px solid #2aa493;
  background-color: #2aa493;
  color: #fff;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset, 0 1px 2px rgba(0, 0, 0, 0.15);
}

/* TABLE DATA*/
td{
  text-align: center;
}

/********************************************************/

.headerVincularMiembros {
  position: relative;
  text-align: center;
  background: linear-gradient(25deg, rgba(38, 255, 0, 0.278), rgb(51, 193, 0) 100%);
  color: white;
  margin-top: -17px;
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