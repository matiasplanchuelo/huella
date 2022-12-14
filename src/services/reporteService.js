
import axios from "axios";

const BASE_API_URL = process.env.VUE_APP_PUERTO_IP;

class reporteService {
    calcularHCXSector(token) {
        return axios.get(BASE_API_URL + "/" + token + "/hcporsectorterritorial")
    }
    calcularHCXtipoOrg(token) {
        return axios.get(BASE_API_URL + "/" + token + "/hcportipodeorganizacion")
    }

    calcularHCCompXSector(token, sector) {
        return axios.post(BASE_API_URL + "/" + token + "/hccomposicionsector", {
            "sector": sector.toString()
        })
    }
    calcularHCCompXTipoOrg(token, tipoOrg) {
        return axios.post(BASE_API_URL + "/" + token + "/hccomposiciontipo", {
            "tipoOrg": tipoOrg.toString()
        })
    }
}
export default new reporteService();