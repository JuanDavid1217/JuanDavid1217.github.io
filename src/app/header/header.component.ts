import { Component, OnInit } from '@angular/core';
import { HeaderServices } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  headerInfo:any="";
  constructor(private headerService: HeaderServices){};
  ngOnInit(): void {
    //this.headerInfo=this.headerService.getHeaderInfo().then(res=>{this.headerInfo=res}).catch(error=>{window.alert(error)});
    //.subscribe(data=>{
      //this.headerInfo=Object.values(data);
    //})
    this.headerService.getHeaderInfo().subscribe(data=>{
      this.headerInfo=data;
    })
  }

}
