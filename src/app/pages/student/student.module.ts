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
import { NoResultsModule } from 'src/app/shared-components/no-results/no-results.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { StudentCreateModule } from './student-create/student-create.module';
import { StudentEditModule } from './student-edit/student-edit.module';
@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    LayoutModule,
    MatButtonModule,
    SearchBarModule,
    StudentCardModule,
    MatPaginatorModule,
    NoResultsModule,
    StudentCreateModule,
    StudentEditModule
  ]
})
export class StudentModule { }
