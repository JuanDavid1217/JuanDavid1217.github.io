import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit{
  works:any[]=[];

  constructor(private service:WorkExperienceService){};

  ngOnInit(): void {
    this.service.getWorkExperienceInfo().subscribe(data=>{
      this.works=data.works;
    })
  }
}
