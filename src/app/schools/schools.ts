import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data-service';
import { Departments } from '../departments/departments';
import { Students } from '../students/students';

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [CommonModule, Departments, Students],
  templateUrl: './schools.html',
  styleUrl: './schools.css',
})
export class Schools implements OnInit {
  private dataService = inject(DataService);

  schoolsList: any[] = [];
  selectedSchool: any;
  selectedStudents: any[] = [];

  showSchoolsList = true;
  showDepartments = false;
  showStudentsList = false;

  ngOnInit(): void {
    this.dataService.getSchools().subscribe(data => {
      const tempSchools = [];
      if (data && data.countries) {
        for (let country of data.countries) {
          for (let state of country.states) {
            for (let school of state.schools) {
               tempSchools.push(school);
            }
          }
        }
      }
      this.schoolsList = tempSchools;
    });
  }

  viewDepartments(school: any) {
    this.selectedSchool = school;
    this.showSchoolsList = false;
    this.showDepartments = true;
  }

  handleDepartmentSelection(department: any) {
    this.selectedStudents = department.students;
    this.showDepartments = false;
    this.showStudentsList = true;
  }


  backToSchools() {
    this.showDepartments = false;
    this.showSchoolsList = true;
    this.selectedSchool = null;
  }

  backToDepartments() {
    this.showStudentsList = false;
    this.showDepartments = true;
    this.selectedStudents = [];
  }
}