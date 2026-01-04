import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  @Input() studentList: any[] = [];
  @Output() goBack = new EventEmitter<void>();
  
  private router = inject(Router);

  viewDetails(studentId: string) {
    this.router.navigate(['/student-details', studentId]);
  }

  onBack() {
    this.goBack.emit();
  }
}