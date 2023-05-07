import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from './student-card.component';
import {MatCardModule} from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { StudentDeleteModule } from 'src/app/pages/student/student-delete/student-delete.module';


@NgModule({
  declarations: [
    StudentCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule,
    MatButtonModule,
    RouterModule,
    StudentDeleteModule
  ],
  exports: [
    StudentCardComponent
  ]
})
export class StudentCardModule { }
