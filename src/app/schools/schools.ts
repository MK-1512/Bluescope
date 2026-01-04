import { Component, OnInit,inject} from '@angular/core';
import { DataService } from '../data-service';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';



@Component({
  selector: 'app-schools',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './schools.html',
  styleUrl: './schools.css',
})
export class Schools implements OnInit{
private router = inject(Router)
navigateViewDept(){
  this.router.navigate(['/viewDepartments'])
}
  schoolData :any;
  schools:any[]=[];
  departments :any[]=[];
  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.getSchools().subscribe(data =>{
      this.schoolData=data;
const newSchools = [];
     for(let country of this.schoolData.countries){
      for(let state of country.states){
        for(let school of state.schools){
          let schoolInfo = {
           schoolId : school.schoolId,
           schoolName :school.schoolName
          }
          newSchools.push(schoolInfo);
        }
      }
     }
     this.schools = newSchools;
     console.log(this.schoolData)
    })
  }
 

  
}