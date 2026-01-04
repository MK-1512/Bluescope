import { Routes } from '@angular/router';
import { Schools } from './schools/schools';
import { Departments } from './departments/departments';
export const routes: Routes = [
    {path:"", component :Schools},
    {path:"viewDepartments",component :Departments},
];
