import axios from "axios";

const BASE_API_URL = PUERTO_IP; // que es en donde esta levantado spring (tomcat)

class cerrarSesionService {
    cerrarSesion(token) {
        return axios.post(BASE_API_URL + "/" + token + "/logout", {})
    }
}
export default new cerrarSesionService();