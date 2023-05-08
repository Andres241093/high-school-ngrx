import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentListComponent
  },
  {
    path: ':id',
    loadChildren: () => import('./student-course/student-course.module').then(m => m.StudentCourseModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
