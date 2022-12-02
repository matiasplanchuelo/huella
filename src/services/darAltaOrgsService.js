import axios from "axios";

const BASE_API_URL = "http://localhost:8088"; // que es en donde esta levantado spring (tomcat)

class darAltaOrgsService {
    crearOrg(razon, tipo, clasificacion, diasHabiles, areas) {
        const token = localStorage.getItem("token");
        return axios.post(BASE_API_URL + "/" + token + "/crearorganizacion",{
            razonSocial: razon,
            tipo: tipo,
            clasificacion: clasificacion.replace(" ", "_"),
            diasHabiles: diasHabiles,
            areas: areas
        });
    }
}

export default new darAltaOrgsService();