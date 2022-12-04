import axios from "axios";

const BASE_API_URL = "http://54.175.230.252:47093"; // que es en donde esta levantado spring (tomcat)

class LoginService {
    logear(mail, password) {
        return axios.post(BASE_API_URL + "/logeousuario", {
            "email": mail,
            "pass": password
        })
    }
}

export default new LoginService();