import axios from "axios";

const BASE_API_URL = "http://localhost:8088"; // que es en donde esta levantado spring (tomcat)

class adminService {
    obtenerUsuarios() {
        const token = localStorage.getItem("token");
        return axios.get(BASE_API_URL + "/" + token + "/usuarios");
    }
    hacerAdminDeOrg(id){
        const token = localStorage.getItem("token");
        return axios.put(BASE_API_URL + "/" + token + "/haceradminorg/" + id);
    }
}

export default new adminService();