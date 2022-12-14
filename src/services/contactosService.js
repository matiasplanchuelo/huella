import axios from "axios";

const BASE_API_URL = process.env.VUE_APP_PUERTO_IP; // que es en donde esta levantado spring (tomcat)

class contactosService{
   agregarContacto(nombre, apellido, email, telefono, quiere, organizacion){
       const token = localStorage.getItem("token");
       return axios.post(BASE_API_URL + "/" + token + "/agregarcontacto/" + organizacion.toString(), {
           nombre: nombre,
           apellido: apellido,
           email: email,
           telefono: telefono,
           quiereRecibirMail: quiere,
       });
   }

}

export default new contactosService();