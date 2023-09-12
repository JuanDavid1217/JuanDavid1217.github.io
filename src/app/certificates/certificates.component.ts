import { Component, OnInit } from '@angular/core';
import { CertificatesService } from '../services/certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit{
  certificates:any[]=[];
  constructor(private service:CertificatesService){};
  
  ngOnInit(): void {
    this.service.getCertificatesInfo().subscribe(data=>{
      this.certificates=data["achievements&certificates"]
    })
  }
}
