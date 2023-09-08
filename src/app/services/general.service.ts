import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";

@Injectable({providedIn:'root'})
export class GeneralService {

    apiURL:string="http://localhost:8080/"

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':'aplication/json'
        })
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
}