import axios from "axios";

const BASE_API_URL = process.env.VUE_APP_PUERTO_IP; // que es en donde esta levantado spring (tomcat)

class vinculoParadasService {
    obtenerParadas(linea){
        const token = localStorage.getItem("token");
        return axios.get(BASE_API_URL + "/" + token + "/paradasdisponibles/" + linea);
    }
    aceptarDistancia(idParada, idProxParada, distanciaParadas){
        const token = localStorage.getItem("token");
        return axios.put(BASE_API_URL + "/" + token + "/setearparada/" + idParada, {
            "paradaElegida": idProxParada.toString(), // es la parada que va a ser la proxima
            "distanciaParadas": distanciaParadas.toString()
        });
    }
    getLineas(){
        const token = localStorage.getItem("token");
        return axios.get(BASE_API_URL + "/" + token + "/lineasdisponibles");
    }
}

export default new vinculoParadasService();