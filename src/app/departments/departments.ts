import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './departments.html',
  styleUrl: './departments.css',
})
export class Departments {
  @Input() schoolData: any;
  @Output() departmentSelected = new EventEmitter<any>();
  @Output() goBack = new EventEmitter<void>();

  viewStudents(dept: any) {
    this.departmentSelected.emit(dept);
  }

  onBack() {
    this.goBack.emit();
  }
}