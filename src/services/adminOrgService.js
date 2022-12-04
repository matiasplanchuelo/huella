import axios from "axios";

const BASE_API_URL = PUERTO_IP; // que es en donde esta levantado spring (tomcat)

class adminOrgService {
    obtenerOrganizaciones(){
        const token = localStorage.getItem("token");
        return axios.get(BASE_API_URL + "/" + token + "/obtenerorgs");
    }
    vincularMiembro(idUsuario, idOrg, idArea){
        const token = localStorage.getItem("token");
        console.log(idUsuario);
        console.log(idOrg);
        console.log(idArea);
        return axios.post(BASE_API_URL + "/" + token + "/invitarmiembro", {
            "idUsuario": idUsuario.toString(),
            "idOrg": idOrg.toString(),
            "idArea": idArea.toString()
        });
    }
    obtenerAreas(idOrg){
        const token = localStorage.getItem("token");
        return axios.get(BASE_API_URL + "/" + token + "/obtenerareas/" + idOrg);
    }
}

export default new adminOrgService();