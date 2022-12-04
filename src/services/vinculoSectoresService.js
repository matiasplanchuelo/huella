import axios from "axios";

const BASE_API_URL = PUERTO_IP; // que es en donde esta levantado spring (tomcat)

class vinculoSectoresService {
    obtenerSectores(){
        const token = localStorage.getItem("token");
        return axios.get(BASE_API_URL + "/" + token + "/sectoresdisponibles");
    }
    obtenerOrganizaciones(){
        const token = localStorage.getItem("token");
        return axios.get(BASE_API_URL + "/" + token + "/organizaciones");
    }
    vincularSector(idOrg, idSector){
        const token = localStorage.getItem("token");
        return axios.post(BASE_API_URL + "/" + token + "/vincularsector", {
            "organizacion": idOrg.toString(),
            "idSector":idSector.toString()
        });
    }
    crearAgente(idSector, nombre, apellido){
        const token = localStorage.getItem("token");
        return axios.post(BASE_API_URL + "/" + token + "/crearagente/" + idSector, {
            "nombre": nombre,
            "apellido": apellido,
        });
    }


}

export default new vinculoSectoresService();