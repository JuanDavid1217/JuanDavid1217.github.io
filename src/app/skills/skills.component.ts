import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{

    skills:any="";
    constructor(private service:SkillsService){};

    ngOnInit(): void {
      this.service.getSkillsInfo().subscribe(data=>{
        this.skills=data["skills&competencies"];
        console.log(this.skills)
      })
    }
}
