<template>
  <body>
  <div class="background-image">
    <div>
      <img src="../assets/logo.png" alt="logo" class="logo">
    </div>
    <h1 class="h1Login">INICIO DE SESIÓN</h1>
    <form class="IniciodeSesión" @submit.prevent="handleLogin">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="email"><br>
      <br>
      <label for="password">Contraseña</label>
      <input type="password" name="password" id="password" v-model="pass"><br>
      <br>
      <input id="boton" class="loginbtn" type="submit" value="Iniciar Sesión">

    </form>

  </div>
  </body>
</template>

<script>

import loginService from '../services/loginService';

export default {
  name: "InicioDeSesion",
  data() {
    return {
      email: '',
      pass: ''
    }
  },
  methods: {
    handleLogin() {
        loginService.logear(this.email, this.pass)
            .then(response => {
              const token = response.data;
              localStorage.setItem('token', token);
              window.alert('Inicio de Sesion exitoso, redireccionando al Menu Principal');
              this.$router.push('/MenuPrincipal');
            })
            .catch(error => {
              console.log(error);
              window.alert("Error al iniciar sesion"); // ver de mostrar errores personalizados (si la contraseña estuvo mal, si se supero el limite de intentos, etc)
            });
}
}
}
</script>

<style scoped>
.background-image {
  background-image: url(../assets/fondo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 15%;
}

.h1Login {
  text-align: center;
  font-family: 'Lato', sans-serif;
  padding-top: -10vh;
  font-size: 80px;
  color: rgb(13, 110, 62);
  font-weight: bold;
}

.IniciodeSesión {
  width: 50%;
  margin: 0 auto;
  margin-top: 4vh;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 1.05s;
  font-size: 25px;
}

/*espacios para completar*/
input[type=password], input[type=email] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=password]:focus, input[type=email]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* boton "Iniciar Sesión" */
.loginbtn {
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

.loginbtn:hover {
  opacity: 1;
}

</style>

