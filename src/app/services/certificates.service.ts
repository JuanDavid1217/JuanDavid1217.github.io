import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  constructor(private service:GeneralService, private cliente: HttpClient) { };

  getCertificatesInfo():Observable<any>{
    return this.cliente.get(this.service.apiURL+"Achievements&Certificates", this.service.httpOptions)
    .pipe(
      retry(1),
      catchError(this.service.handleError)
    )
  }
}
