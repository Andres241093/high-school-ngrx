import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentEditComponent } from './student-edit.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [StudentEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TranslateModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatSnackBarModule
  ],
  exports: [StudentEditComponent],
  providers: [AlertService]
})
export class StudentEditModule { }
