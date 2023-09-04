import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import {retry, catchError} from 'rxjs/operators';
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
    constructor(private cliente: HttpClient){};
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
    apiURL:string="http://localhost:8080/header";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':'aplication/json'
        })
    }

    getHeaderInfo():Observable<any>{
        return this.cliente.get<any>(this.apiURL, this.httpOptions)
        .pipe(
            retry(1), //Volver a intentar
            catchError(this.handleError)
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
    handleError(error: any) {
        let errorMessage = '';

        if(error.error instanceof ErrorEvent){
            //Get client-side error
            errorMessage = error.error.message;
        }else{
            //Get server-side error
            errorMessage = `Error code: ${error.status}\n Message: ${error.message}`
        }

        window.alert(errorMessage);
        return throwError(errorMessage);
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