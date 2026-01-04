import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  imports: [],
  templateUrl: './departments.html',
  styleUrl: './departments.css',
})
export class Departments {
private router = inject(Router)
}
