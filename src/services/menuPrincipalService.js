import axios from "axios";

const BASE_API_URL = process.env.VUE_APP_PUERTO_IP; // que es en donde esta levantado spring (tomcat)

class menuPrincipalService {
    obtenerRol(token){
        return axios.get(BASE_API_URL + "/" + token + "/obtenerrol");
    }
}

export default new menuPrincipalService();