import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { LayoutModule } from 'src/app/shared-components/layout/layout.module';
import { MatButtonModule } from '@angular/material/button';
import { SearchBarModule } from 'src/app/shared-components/search-bar/search-bar.module';
import { StudentCardModule } from 'src/app/shared-components/student-card/student-card.module';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StudentCourseComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    LayoutModule,
    MatButtonModule,
    SearchBarModule,
    StudentCardModule
  ]
})
export class StudentModule { }
