import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../data-service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students implements OnInit {
  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);

  schoolId: string | null = null;
  deptId: string | null = null;
  students: any[] = [];
  deptName: string = '';

  ngOnInit(): void {
    this.schoolId = this.route.snapshot.paramMap.get('schoolId');
    this.deptId = this.route.snapshot.paramMap.get('deptId');

    if (this.schoolId && this.deptId) {
      this.dataService.getSchools().subscribe(data => {
        this.findStudentData(data, this.schoolId!, this.deptId!);
      });
    }
  }

  findStudentData(data: any, schoolId: string, deptId: string) {
    for (let country of data.countries) {
      for (let state of country.states) {
        for (let school of state.schools) {
          if (school.schoolId === schoolId) {
            for (let dept of school.departments) {
              if (dept.departmentId === deptId) {
                this.deptName = dept.departmentName;
                this.students = dept.students;
                return;
              }
            }
          }
        }
      }
    }
  }
}