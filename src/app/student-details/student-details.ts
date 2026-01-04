import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { DataService } from '../data-service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-details.html',
  styleUrl:'./student-details.css'
})
export class StudentDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);
  private location = inject(Location);

  studentId: string | null = null;
  studentInfo: any;

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id');

    this.dataService.getSchools().subscribe(data => {
      this.findStudent(data);
    });
  }

  findStudent(data: any) {
    if(!data || !data.countries) return;
    
    for (let country of data.countries) {
      for (let state of country.states) {
        for (let school of state.schools) {
          for (let dept of school.departments) {
            for (let student of dept.students) {
              if (student.studentId === this.studentId) {
                this.studentInfo = student;
                return;
              }
            }
          }
        }
      }
    }
  }

  goBack() {
    this.location.back();
  }
}