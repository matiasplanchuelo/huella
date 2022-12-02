import axios from "axios";

const BASE_API_URL = "http://localhost:8088"; // que es en donde esta levantado spring (tomcat)

class vinculoService {
    obtenerVinculaciones() {
        const token = localStorage.getItem("token");
        return axios.get(BASE_API_URL + "/" + token + "/vinculacionespendientes");
    }
    aceptar(id){
        const token = localStorage.getItem("token");
        return axios.put(BASE_API_URL + "/" + token + "/vinculacionconorganizacion/" + id);
    }

    rechazar(id){
        const token = localStorage.getItem("token");
        return axios.delete(BASE_API_URL + "/" + token + "/vinculacionconorganizacion/" + id);
    }
}

export default new vinculoService();