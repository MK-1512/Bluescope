import { Routes } from '@angular/router';
import { Schools} from './schools/schools';
import { Departments } from './departments/departments';
import { Students } from './students/students';
export const routes: Routes = [
    {path:"", component :Schools},
    { path: "viewDepartments/:schoolId", component: Departments },
    { path: "viewStudents/:schoolId/:deptId", component: Students },
];
