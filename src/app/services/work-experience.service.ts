import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { retry, catchError } from 'rxjs';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor(private cliente:HttpClient, private service:GeneralService) { }

  getWorkExperienceInfo():Observable<any>{
    return this.cliente.get(this.service.apiURL+"work-experience", this.service.httpOptions)
    .pipe(
      retry(1),
      catchError(this.service.handleError)
    )
  }

}
