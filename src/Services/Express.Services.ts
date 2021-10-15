import express, {Application} from 'express'
import { Services } from '../Helper/Export.Helper'

export class ExpressServices extends  Services   {

    public app:Application | any  ;
    public port : string  = '';
    
    constructor() {
        super()
     
        this.Services();
        this.listen();
    }

    Services(){
        this.app= express();
        this.port = process.env.PORT || '8001';
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log("se inicio el servido",this.port)
        })
    }
}