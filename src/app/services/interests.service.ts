import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from "rxjs";
import {retry, catchError} from 'rxjs/operators';
import { GeneralService } from "./general.service";

@Injectable({
  providedIn: 'root'
})
export class InterestsService{

  constructor(private service:GeneralService, private cliente:HttpClient) { };

  getInterestsInfo():Observable<any>{
    return this.cliente.get(this.service.apiURL+"Interests", this.service.httpOptions)
    .pipe(
      retry(1),
      catchError(this.service.handleError)
    )
  }
}
