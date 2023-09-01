import { Component, OnInit } from '@angular/core';
import { HeaderServices } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  headerInfo:any="";
  name:string="fake-name";
  charges:string="fake-charges";
  objetive:string="fake objetive";
  photo:string="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAChCAMAAACYjy+EAAAAY1BMVEUAAAD////09PRZWVlISEj8/Pzv7++6urqJiYkbGxsICAioqKjf399paWkNDQ3CwsKDg4NycnLOzs7W1tYqKipDQ0OYmJgiIiI7OztjY2NOTk5UVFTm5uahoaGSkpKwsLAyMjJtsa3OAAADvElEQVR4nO2d7Y6qMBBAaYECUgQquC6K+v5PeTWuF0W+OsJMSXqSTfbnCaXtdDoODmvgMgi9aONQsom8MJD8xcr5/58fJ1tSuYZtEvufhmlJ7fVGmbYMRUat9EEmXg25S+3TgcsbQ04t0wN/GgoTn+AdV/wZmvcOPskehim1xwDp3dA3a5l5p/RvhjG1xSAxc3hCLTFIwh1pylbXzVY6AbXDCIETUiuMEDoetcIInhNRK4wQObQB6zim+1ksFstK+Tl4rnf4odboZuudlRRC8NufVGfPsKBuk8SCvSPixKANK1c++8RXObXYH+6uQ+/BzoiTeNz1/JqEGrWeU6oBvzuK+LDr8hFB6qzVb3sGdyF+CQWHXsGXl5FMsRof4r+BrmgEi/5Vps2uIDEMJgsyRpI3OGoIMnbEF9xILUOJv0mHWoKMoWdfNKbJA/TJkmsKMoYd6KTjSi2Q0+XRtN3kFR83h5VpC2Jfiuis1k9QV+1oLCrsQmEOc6m3XD+QmLHshMD1E9RQVn81vIO5IlpDa2iCYaK/6d22Pcw7Tu8EMDxhXn9pR4d3cCNE/eALO/w6AwzPqIYlID5ETjHpT5UTriAghMWu6il1oxuOnkeMNQ3xk7HllNRhgyBIxe61DPf4go6jcxKQFIKP2ruJY0yUy56eXCIr6qknCtZUglMP9qSFW1MmNMk0bjiPhRA+bkjTwUi4jRpY91H3b9GccI68UvVF3CnRTU8H0UW230dfXswqyyvyWDWjzVWc01xDDRIVBzc7x+fMPRRmPT6LxWKxWCwWi6WDqHTzbF9f6n2Wu6VJIWzhubcTwGeWSdxOAq5HfRb4SfbBbigFJnbBPqGqII+qWoop2WwuZF2hj3oVBppZ4iBEPDxHoQLdPKoQ5UkeEkglyxOVHBb2O8aQp/f2JOMliyUrBaliacPVUm9k/s3wvrPIbxqqFFI50Ic/e1qshJSiDRPMekuV6S1+05ixD0cx6wA3+OlMu/ZxiQf4QMyy8uRzrDB98BkmtW7dtS5fX6hBCl71+HK+gMqn9Piu2Oq6vOBN8QoX3EJKk/RJ4b+PXHqWPIHPFkjFMARwjcEvkiBj0J96zR8t9AG9I/82nJ4OsCbsutx+3EZcQYYeoiHsnhxUWg8DWJBvDa2hNbSGSIYnjsUJZhi5eJiUmLdYLBZTMajVUCebFfQ/NKHWdwhvBX04ze9lan4/WPN76prfl3gFvZ3N74+9gh7jK+jTbn6ve+rOaz28fi9gBd9cYOZ/t4Kt4NsfzNTvp/wDoakxIGB4AUoAAAAASUVORK5CYII=";
  email:string="fake email";
  cel: string="fake cel";
  ubication:string="fake ubication";
  social:string="fake socialred";
  constructor(private headerService: HeaderServices){};
  ngOnInit(): void {
    //this.headerInfo=this.headerService.getHeaderInfo().then(res=>{this.headerInfo=res}).catch(error=>{window.alert(error)});
    this.getHeader();
    //console.log(this.headerInfo)
  }
  async getHeader(){
    this.headerInfo=await this.headerService.getHeaderInfo();
  }
}
