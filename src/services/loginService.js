import axios from "axios";

const BASE_API_URL = "https://tp-grupo5.herokuapp.com"; // que es en donde esta levantado spring (tomcat)

class LoginService {
    logear(mail, password) {
        return axios.post(BASE_API_URL + "/logeousuario", {
            "email": mail,
            "pass": password
        })
    }
}

export default new LoginService();