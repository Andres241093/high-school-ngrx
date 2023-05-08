import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { NoResultsModule } from 'src/app/shared-components/no-results/no-results.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchBarModule } from 'src/app/shared-components/search-bar/search-bar.module';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from 'src/app/shared-components/layout/layout.module';
import { CourseTableModule } from 'src/app/shared-components/course-table/course-table.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CourseCreateModule } from './course-create/course-create.module';
import { CourseEditModule } from './course-edit/course-edit.module';

@NgModule({
  declarations: [
    CourseListComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    CommonModule,
    LayoutModule,
    MatButtonModule,
    SearchBarModule,
    MatPaginatorModule,
    NoResultsModule,
    CourseTableModule,
    MatDialogModule,
    CourseCreateModule,
    CourseEditModule
  ]
})
export class CourseModule { }
