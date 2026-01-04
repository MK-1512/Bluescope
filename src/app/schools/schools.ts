import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../data-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schools.html',
  styleUrl: './schools.css',
})
export class Schools implements OnInit {
  private router = inject(Router);
  private dataService = inject(DataService);

  schoolData: any;
  schools: any[] = [];

  navigateViewDept(schoolId: string) {
    this.router.navigate(['/viewDepartments', schoolId]);
  }

  ngOnInit(): void {
    this.dataService.getSchools().subscribe((data) => {
      this.schoolData = data;
      const newSchools = [];

      if (this.schoolData && this.schoolData.countries) {
        for (let country of this.schoolData.countries) {
          for (let state of country.states) {
            for (let school of state.schools) {
              newSchools.push({
                schoolId: school.schoolId,
                schoolName: school.schoolName,
              });
            }
          }
        }
      }
      this.schools = newSchools;
    });
  }
}