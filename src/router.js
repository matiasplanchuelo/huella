import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./components/LandingPage.vue"
import Registro from "./components/Registro.vue"
import InicioDeSesion from "./components/InicioDeSesion.vue"
import MenuPrincipal from "./components/MenuPrincipal.vue"
import Calculadora from "./components/Calculadora.vue"
import RegistrarMediciones from "./components/RegistrarMediciones.vue"
import RegistrarTrayectos from "./components/RegistrarTrayectos.vue"
import VincularConOrg from "./components/VincularConOrg.vue"
import VisualizarReportes from "./components/VisualizarReportes.vue"
import CerrarSesion from "@/components/CerrarSesion"
import DarAltaOrgYAreas from "@/components/DarAltaOrgYAreas"
import CrearSectorTerritorial from "@/components/CrearSectorTerritorial"
import DarAltaMedioTransporte from "@/components/DarAltaMedioTransporte"
import DarAltaContactos from "@/components/DarAltaContactos"
import VisualizarUsuarios from "@/components/VisualizarUsuarios"
import VincularSectores from "@/components/VincularSectores"
import VincularParadas from "@/components/VincularParadas";
import CrearAgenteSectorial from "@/components/CrearAgenteSectorial";
import VincularMiembroXOrg from "@/components/VincularMiembroXOrg";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "LandingPage",
            component: LandingPage
        },
        {
            path: "/Registro",
            name: "Registro",
            component: Registro
        },
        {
            path: "/InicioDeSesion",
            name: "InicioDeSesion",
            component: InicioDeSesion
        },
        {
            path: "/Calculadora",
            name: "Calculadora",
            component: Calculadora
        },
        {
            path: "/MenuPrincipal",
            name: "MenuPrincipal",
            component: MenuPrincipal
        },
        {
            path: "/GuiaRecomendaciones",
            name: "GuiaRecomendaciones",
            beforeEnter(){ // esto es para redireccionar a una pagina externa (nuestro back corre en el puerto 8088)
                window.location.href = 'http://localhost:8088/' + localStorage.getItem('token') + '/recomendaciones';
            }

        },
        {
            path: "/RegistrarMediciones",
            name: "RegistrarMediciones",
            component: RegistrarMediciones
        },
        {
            path: "/RegistrarTrayectos",
            name: "RegistrarTrayectos",
            component: RegistrarTrayectos
        },
        {
            path: "/VincularConOrg",
            name: "VincularConOrg",
            component: VincularConOrg
        },
        {
            path: "/VisualizarReportes",
            name: "VisualizarReportes",
            component: VisualizarReportes
        },
        {
            path: "/CerrarSesion",
            name: "CerrarSesion",
            component: CerrarSesion
        },
        {
            path: "/DarAltaOrgYAreas",
            name: "DarAltaOrgYAreas",
            component: DarAltaOrgYAreas
        },
        {
            path: "/CrearSectorTerritorial",
            name: "CrearSectorTerritorial",
            component: CrearSectorTerritorial
        },
        {
            path: "/DarAltaMedioTransporte",
            name: "DarAltaMedioTransporte",
            component: DarAltaMedioTransporte
        },
        {
            path: "/DarAltaContactos",
            name: "DarAltaContactos",
            component: DarAltaContactos
        },
        {
            path: "/VisualizarUsuarios",
            name: "VisualizarUsuarios",
            component: VisualizarUsuarios
        },
        {
            path:"/VincularSectores",
            name:"VincularSectores",
            component: VincularSectores
        },
        {
            path:"/VincularParadas",
            name:"VincularParadas",
            component: VincularParadas
        },
        {
            path:"/CrearAgenteSectorial",
            name:"CrearAgenteSectorial",
            component: CrearAgenteSectorial
        },
        {
            path: "/VincularMiembroXOrg",
            name: "VincularMiembroXOrg",
            component: VincularMiembroXOrg
        }
    ]
});

export default router;