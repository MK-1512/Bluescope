import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Schools } from './schools/schools';
import { CommonModule } from '@angular/common';
import { Departments } from './departments/departments';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [Schools,CommonModule,Departments,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice-task');
}
