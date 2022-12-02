import axios from "axios";

const BASE_API_URL = "http://localhost:8088";

class calculadoraService {
    HCAnual(organizacion, año) {
        return axios.post(BASE_API_URL + "/" + localStorage.getItem('token') + "/hcanualorganizacion", {
            "razonSocialOrg": organizacion,
            "fecha": año + "-01"
        })
    }
    HCMensual(organizacion, año, mes) {
        return axios.post(BASE_API_URL + "/" + localStorage.getItem('token') + "/hcmensualorganizacion", {
            "razonSocialOrg": organizacion,
            "fecha": año.toString()+"-"+mes.toString()
        })
    }
    ImpactoPersonal(organizacion, año, mes) {
        return axios.post(BASE_API_URL + "/" + localStorage.getItem('token') + "/impactohcpersonal", {
            "razonSocialOrg": organizacion,
            "fecha": año.toString()+"-"+mes.toString()
        })
    }
    Indicador(organizacion,area, año, mes) {
        return axios.post(BASE_API_URL + "/" + localStorage.getItem('token') + "/indicador", {
            "razonSocialOrg": organizacion,
            "areaOrg": area,
            "fecha": año.toString()+"-"+mes.toString()
        })
    }
    HCSectorTerritorial(idST, año, mes) {
        return axios.post(BASE_API_URL + "/" + localStorage.getItem('token') + "/hcterritorial", {
            "idSector": idST,
            "fecha": año.toString()+"-"+mes.toString()
        })
    }
}

export default new calculadoraService();