import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCreateComponent } from './course-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AlertService } from 'src/app/services/alert.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [CourseCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TranslateModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  exports: [CourseCreateComponent],
  providers: [AlertService]
})
export class CourseCreateModule { }
