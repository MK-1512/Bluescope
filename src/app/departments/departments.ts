import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../data-service';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './departments.html',
  styleUrl: './departments.css',
})
export class Departments implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dataService = inject(DataService);

  schoolId: string | null = null;
  departments: any[] = [];

  ngOnInit(): void {
    this.schoolId = this.route.snapshot.paramMap.get('schoolId');

    if (this.schoolId) {
      this.dataService.getSchools().subscribe(data => {
        this.findSchoolData(data, this.schoolId!);
      });
    }
  }

  navigateViewStudents(deptId: string) {
    this.router.navigate(['/viewStudents', this.schoolId, deptId]);
  }

  findSchoolData(data: any, id: string) {
    for (let country of data.countries) {
      for (let state of country.states) {
        for (let school of state.schools) {
          if (school.schoolId === id) {
            this.departments = school.departments;
            return;
          }
        }
      }
    }
  }
}