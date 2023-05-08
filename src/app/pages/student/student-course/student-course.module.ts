import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentCourseRoutingModule } from './student-course-routing.module';
import { StudentCourseComponent } from './student-course.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { LayoutModule } from 'src/app/shared-components/layout/layout.module';
import { NoResultsModule } from 'src/app/shared-components/no-results/no-results.module';

@NgModule({
  declarations: [StudentCourseComponent],
  imports: [
    CommonModule,
    StudentCourseRoutingModule,
    MatTableModule,
    TranslateModule,
    LayoutModule,
    NoResultsModule
  ]
})
export class StudentCourseModule { }
