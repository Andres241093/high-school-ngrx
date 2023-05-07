import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { NoResultsModule } from 'src/app/shared-components/no-results/no-results.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchBarModule } from 'src/app/shared-components/search-bar/search-bar.module';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from 'src/app/shared-components/layout/layout.module';
import {MatTableModule} from '@angular/material/table';
import { CourseTableModule } from 'src/app/shared-components/course-table/course-table.module';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseCreateComponent,
    CourseEditComponent
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
    CourseTableModule
  ]
})
export class CourseModule { }
