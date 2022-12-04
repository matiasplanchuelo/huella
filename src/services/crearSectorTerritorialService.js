import axios from "axios";

const BASE_API_URL = process.env.PUERTO_IP; // que es en donde esta levantado spring (tomcat)

class crearSectorTerritorialService {

    crearSector(tipoSector, detalle) {
        const token = localStorage.getItem("token");
        return axios.post(BASE_API_URL + "/" + token + "/crearsector", {
            tipoSector: tipoSector,
            detalle: detalle
        });
    }
}

export default new crearSectorTerritorialService();