import axios from "axios";

const BASE_API_URL = "http://localhost:8088"; // que es en donde esta levantado spring (tomcat)

class registrarMedicionesService {
    registrarMediciones(formData,headers) {
        const token = localStorage.getItem("token");
        return axios.post(BASE_API_URL + "/" + token + "/cargarMediciones", formData, {headers: headers})
    }
}

export default new registrarMedicionesService();