import { Router } from "express";

export function routerApi(router:Router ,url:string ,  clases:any , use:any  ){

    router.get(`/${url}`, clases.index)
    router.post(`/${url}`, clases.creater)
    router.get(`/${url}/show/:id`   ,clases.show)
    router.get(`/${url}/:id`   ,clases.stores)
    router.put(`/${url}/:id` ,clases.updated)
    router.delete(`/${url}/:id`,clases.delete)
  
}

