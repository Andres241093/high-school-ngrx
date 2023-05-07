import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDeleteComponent } from './student-delete.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    StudentDeleteComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    TranslateModule
  ],
  exports: [
    StudentDeleteComponent
  ]
})
export class StudentDeleteModule { }
