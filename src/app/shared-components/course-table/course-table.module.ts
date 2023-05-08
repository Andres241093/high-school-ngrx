import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseTableComponent } from './course-table.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { CourseDeleteModule } from 'src/app/pages/course/course-delete/course-delete.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CourseEditModule } from 'src/app/pages/course/course-edit/course-edit.module';

@NgModule({
  declarations: [
    CourseTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    TranslateModule,
    CourseDeleteModule,
    CourseEditModule,
    MatDialogModule
  ],
  exports: [
    CourseTableComponent
  ]
})
export class CourseTableModule { }
