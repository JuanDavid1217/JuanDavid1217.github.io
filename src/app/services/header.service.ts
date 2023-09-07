import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import {retry, catchError} from 'rxjs/operators';
import { GeneralService } from "./general.service";
/*import axios
 from "axios";*/
/*export class Header{
    name:string="";
    charges:string="";
    objetive:string="";
    photo:string="";
    email:string="";
    cel:string="";
    ubication:string="";    
    social:string="";

    constructor(){};
}*/
@Injectable()
export class HeaderServices{
    constructor(private cliente: HttpClient, private service:GeneralService){};
    /*info:any={
        name:"",
        charges:"",
        objetive:"",
        photo:"",
        email:"",
        cel:"",
        ubication:"",
        social:""
    }*/
    getHeaderInfo():Observable<any>{
        return this.cliente.get<any>(this.service.apiURL+"header", this.service.httpOptions)
        .pipe(
            retry(1), //Volver a intentar
            catchError(this.service.handleError)
        )

        /*try{
            this.info=await(await axios.get("http://localhost:8080/header")).data;
            //console.log(this.info.name)
            return this.info;
        }catch(error){
            window.alert(error);
            return null;
        }*/
    }
    /*getHeaderInfo(){
        axios.get("http://localhost:8080/header")
        .then(res=>{
            this.info=res.data;
        })
        .catch(error=>{
            window.alert(error);
        });
        //console.log(this.info)
        //return this.info;
    }*/
}