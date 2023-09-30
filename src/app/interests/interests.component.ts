import { Component } from '@angular/core';
import { InterestsService } from '../services/interests.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit{
  interests:any[]=[];

  constructor(private service:InterestsService){};

  ngOnInit(): void {
    this.service.getInterestsInfo().subscribe(data=>{
      this.interests=data["interests"]
    })
  }
}
