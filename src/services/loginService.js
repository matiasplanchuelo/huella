import axios from "axios";

const BASE_API_URL = process.env.PUERTO_IP; // que es en donde esta levantado spring (tomcat)

class LoginService {
    logear(mail, password) {
        return axios.post(BASE_API_URL + "/logeousuario", {
            "email": mail,
            "pass": password
        })
    }
}

export default new LoginService();