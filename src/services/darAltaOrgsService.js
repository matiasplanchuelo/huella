import axios from "axios";

const BASE_API_URL = process.env.VUE_APP_PUERTO_IP; // que es en donde esta levantado spring (tomcat)

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