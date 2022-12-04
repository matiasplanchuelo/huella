import axios from "axios";

const BASE_API_URL = process.env.VUE_APP_PUERTO_IP; // que es en donde esta levantado spring (tomcat)

class registrarTrayectosService {
    registrarTrayecto(trayecto) {
        const token = localStorage.getItem("token");
        return axios.put(BASE_API_URL + "/" + token + "/registrotrayecto", trayecto)
    }

    getTrayectosVigentes(token) {
        return axios.get(BASE_API_URL + "/" + token + "/trayectosvigentes")
    }

    terminarTrayecto(idTrayecto) {
        const token = localStorage.getItem("token");
        return axios.put(BASE_API_URL + "/" + token + "/terminartrayecto/" + idTrayecto)
    }
}

export default new registrarTrayectosService();