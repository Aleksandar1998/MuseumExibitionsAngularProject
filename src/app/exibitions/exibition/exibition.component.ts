import { Exibition } from './exibition-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exibition',
  templateUrl: './exibition.component.html',
  styleUrls: ['./exibition.component.css']
})
export class ExibitionComponent implements OnInit {
  
  exibition: Exibition;

  constructor(private currentRoute : ActivatedRoute) { }

  ngOnInit(): void {
    let isEnrolled;
    let isActive;
    this.currentRoute.snapshot.queryParams.isEnrolled === 'false'? isEnrolled = false: isEnrolled = true;
    this.currentRoute.snapshot.queryParams.isActive === 'false'? isActive = false: isActive = true;
    this.exibition = new Exibition( this.currentRoute.snapshot.queryParams.id,this.currentRoute.snapshot.queryParams.name,this.currentRoute.snapshot.queryParams.imagePath,this.currentRoute.snapshot.queryParams.duration,this.currentRoute.snapshot.queryParams.theme,this.currentRoute.snapshot.queryParams.price,this.currentRoute.snapshot.queryParams.desc,isEnrolled,this.currentRoute.snapshot.queryParams.attendees,isActive,this.currentRoute.snapshot.queryParams.page,"Active")
  }

  book = () => {
    this.exibition.isEnrolled=true; 
    this.exibition.attendees.push("You");
    localStorage.setItem('history', JSON.stringify(this.exibition));
  };
    
}
