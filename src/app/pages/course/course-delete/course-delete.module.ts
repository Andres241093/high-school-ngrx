import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDeleteComponent } from './course-delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    CourseDeleteComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    TranslateModule
  ]
})
export class CourseDeleteModule { }
