<template>
  <body>
  <div class="background-image">
    <div>
      <img src="../assets/logo.png" alt="logo" class="logo">
    </div>
    <h1>REGISTRO</h1>
    <form class="Registro" @submit.prevent="handleSubmit">
      <label for="nombre">Nombre</label>
      <input type="text" name="nombre" id="nombre" v-model="nombre"><br>
      <br>

      <label for="apellido">Apellido</label>
      <input type="text" name="apellido" id="apellido" v-model="apellido"><br>
      <br>

      <label for="tipoDoc">Tipo de Documento</label>
      <select name="tipoDoc" id="tipoDoc" v-model="tipoDocumento">
        <option value="" selected disabled>Tipo de Documento</option>
        <option value="dni">DNI</option>
        <option value="Pasaporte">Pasaporte</option>
        <option value="DU">DU</option>
        <option value="C.I.">C.I.</option>
        <option value="L.E.">L.E.</option>
      </select>

      <label for="numdoc">Numero de Documento</label>
      <input type="text" name="numdoc" id="numdoc" v-model="numeroDocumento"><br>
      <br>

      <label for="user">Mail</label>
      <input type="email" name="user" id="user" v-model="email"><br>
      <br>

      <label for="password">Contraseña</label>
      <input type="password" name="password" id="password" v-model="pass" ><br>
      <br>

      <label for="confipass">Confirmar Contraseña</label>
      <input type="password" name="confipass" id="confipass" v-model="pass2"><br>
      <br>

      <label for="start">Fecha de Nacimiento </label>
      <input type="date" id="start" name="trip-start"
             value=""
             min="1960-01-01" max="2022-12-12">

      <input class="loginbtn" type="submit" value="Registrarse">

    </form>
  </div>


  </body>
</template>

<script>
import registroService from "@/services/registroService";

export default {
  name: "Registro",
  data() {
    return {
      nombre: '',
      apellido: '',
      tipoDocumento: '',
      numeroDocumento: '',
      email: '',
      pass: '',
      pass2: ''
      //TODO: ver el tema de la fecha de nacimiento
    }
  },
  methods: {
    handleSubmit() {
      this.equalPasswordError = this.pass === this.pass2 ?
          '' : window.alert('Las contraseñas no coinciden');
      if(!this.equalPasswordError) {
        registroService.registrar(this.nombre, this.apellido, this.tipoDocumento, this.numeroDocumento, this.email, this.pass)
            .then(response => {
              console.log(response);
              window.alert('Registro exitoso, redireccionando a Inicio de Sesión');
              this.$router.push('/InicioDeSesion');
            })
            .catch(error => {
              console.log(error);
              window.alert('Error al registrar' + error);
            });
      }
    }
  }
}
</script>

<style scoped>
.background-image {
  background-image: url(../assets/fondo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 15%;
}


h1 {
  text-align: center;
  font-family: 'Lato', sans-serif;
  padding-top: -10vh;
  font-size: 80px;
  color: rgb(13, 110, 62)
}

.Registro {
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

* {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
}

/*espacios para completar*/
input[type=password], input[type=email], input[type=nombre],
input[type=email], input[type=apellido], input[type=nombre], input[type=numdoc], input[type=tel], input[type=user], input[type=password], input[type=confipass] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=password]:focus, input[type=email]:focus, input[type=apellido]:focus,
input[type=nombre]:focus, input[type=numdoc]:focus, input[type=tel]:focus, input[type=user]:focus, input[type=password]:focus {
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

input {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=radio] {
  width: 10%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

</style>