import { Routes } from '@angular/router';
import { Schools } from './schools/schools';
import { StudentDetails } from './student-details/student-details';

export const routes: Routes = [
    { path: "", component: Schools },
    { path: "student-details/:id", component: StudentDetails }
];