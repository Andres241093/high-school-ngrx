import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseTableComponent } from './course-table.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    CourseTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    TranslateModule,
    MatPaginatorModule
  ],
  exports: [
    CourseTableComponent
  ]
})
export class CourseTableModule { }
