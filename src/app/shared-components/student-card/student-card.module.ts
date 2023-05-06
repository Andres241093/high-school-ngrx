import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from './student-card.component';



@NgModule({
  declarations: [
    StudentCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StudentCardComponent
  ]
})
export class StudentCardModule { }
