import axios from "axios";

const BASE_API_URL = process.env.PUERTO_IP; // que es en donde esta levantado spring (tomcat)

class altaMedioTransporteService {
    agregarMedioT(tipoTransporte,tipoPublico, tipoVehiculoPart, tipoCombustible, factorEmision, detalle, linea, paradas) {
        const token = localStorage.getItem("token");
        let data;
        switch(tipoTransporte){
            case "Publico":
                data = {
                    "tipo": tipoTransporte,
                    "medio": {
                        "linea": linea,
                        "factorEmision": factorEmision,
                        "tipoTransportePublico": tipoPublico.toUpperCase(),
                        "paradas": paradas
                    }
                }
                break;
            case "VehiculoParticular":
                data = {
                    "tipo":tipoTransporte,
                    "medio":{
                        "tipoVehiculo": tipoVehiculoPart.toUpperCase(),
                        "tipoCombustible": tipoCombustible.toUpperCase(),
                        "factorEmision": factorEmision
                    }
                }
                break;
            case "NoContaminante":
                data = {
                    "tipo":tipoTransporte,
                    "medio":{
                        "detalle": detalle
                    }
                }
                break;
        }
        return axios.post(BASE_API_URL + "/" + token + "/creartransporte", data);
    }
}

export default new altaMedioTransporteService();