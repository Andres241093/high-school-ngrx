import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDeleteComponent } from './student-delete.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AlertService } from 'src/app/services/alert.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    StudentDeleteComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    TranslateModule,
    MatSnackBarModule
  ],
  exports: [
    StudentDeleteComponent
  ],
  providers: [AlertService]
})
export class StudentDeleteModule { }
