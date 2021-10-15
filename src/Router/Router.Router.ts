import { RutaApirest } from "../Helper/Export.Helper";

import { Router } from "express";
import { MyttcControllers } from '../Controller/Myttc.Controllers';
import { AnimalControllers } from '../Controller/Animal.Controllers';




const router = Router();

const Myttc:MyttcControllers = new MyttcControllers()

const Animal:AnimalControllers = new AnimalControllers()
const apiPath = {
    Myttc:{url:'Myttc',clases:Myttc},
    Animal:{url:'animales',clases:Animal},

}
router.post('/animales/buscar', Animal.buscarquery)

RutaApirest(router,apiPath.Animal.url,  apiPath.Animal.clases,{use:true})
RutaApirest(router,apiPath.Myttc.url,   apiPath.Myttc.clases,{use:true})



//////////////////////////////////////////////////////////



export const rutas = router;
    
