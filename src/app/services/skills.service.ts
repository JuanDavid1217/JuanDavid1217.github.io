import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import {retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private service:GeneralService, private cliente: HttpClient) { };

  getSkillsInfo():Observable<any>{
    return this.cliente.get<any>(this.service.apiURL+"Skills&Competencies", this.service.httpOptions)
    .pipe(
        retry(1), //Volver a intentar
        catchError(this.service.handleError)
    )
  }
}
