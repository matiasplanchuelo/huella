<template>
  <body>
    <div class="navMenu">
      <div class="headMenu">
        <a class="logoMenu" href="/">Huella</a>
      </div>
    </div>
  </body>
</template>
<script>
import cerrarSesionService from "@/services/cerrarSesionService";

export default {
  name: "CerrarSesion",
  methods: {
    cerrarSesion: function () {
      cerrarSesionService.cerrarSesion(localStorage.getItem('token'))
      localStorage.removeItem('token');
      this.$router.push('/')
    }
  },
  mounted() {
    this.cerrarSesion();
  }
}
</script>