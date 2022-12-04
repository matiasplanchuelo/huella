import axios from "axios";

const BASE_API_URL = process.env.VUE_APP_PUERTO_IP; // que es en donde esta levantado spring (tomcat)

class RegistroService {
    registrar(nombre, apellido, tipoDocumento, numeroDocumento, email, pass) {
        return axios.post(BASE_API_URL + "/registrousuario", {
            nombre: nombre,
            apellido: apellido,
            tipoDocumento: tipoDocumento.toUpperCase(),
            numeroDocumento: numeroDocumento,
            usuario: {
                email: email,
                pass: pass
            }
            // TODO: ver el tema de la fecha de nacimiento
        })
    }
}

export default new RegistroService();