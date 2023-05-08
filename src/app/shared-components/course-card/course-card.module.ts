import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    CourseCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule
  ],
  exports: [
    CourseCardComponent
  ]
})
export class CourseCardModule { }
